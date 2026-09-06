import time
import uuid
from typing import Dict, Any, List
from app.agents.state import AgentState, AgentMessage
from app.rag.store import vault_instance
from app.mcp.manager import mcp_instance
from app.loops.engine import loop_engine_instance

class OmniAgentGraph:
    def __init__(self):
        pass

    def run_step(self, state: AgentState) -> AgentState:
        """
        Executes state graph steps based on current_node until completion or HITL interrupt.
        """
        current_node = state.get("current_node", "supervisor")
        
        # Log execution step in trace
        state["execution_trace"].append({
            "step": len(state["execution_trace"]) + 1,
            "node": current_node,
            "timestamp": time.strftime("%H:%M:%S")
        })

        if current_node == "supervisor":
            return self._supervisor_step(state)
        elif current_node == "rag_agent":
            return self._rag_step(state)
        elif current_node == "mcp_tool_agent":
            return self._mcp_tool_step(state)
        elif current_node == "reflection_agent":
            return self._reflection_step(state)
        else:
            state["is_completed"] = True
            return state

    def _supervisor_step(self, state: AgentState) -> AgentState:
        last_user_msg = ""
        for msg in reversed(state["messages"]):
            if msg["sender"] == "user":
                last_user_msg = msg["content"]
                break

        query = last_user_msg.lower()

        # Check if feedback exists from reflection loop
        feedback_prefix = ""
        if state.get("reflection_feedback"):
            feedback_prefix = f"[Self-Correction Refinement Loop Applied: {state['reflection_feedback']}]\n"

        # Intent classification & dynamic node routing logic
        if any(term in query for term in ["find", "doc", "search vault", "knowledge", "what is", "explain", "how to"]):
            state["supervisor_plan"] = ["Query Knowledge Vault (RAG)", "Synthesize cited response", "Evaluate with Reflection Loop"]
            state["next_node"] = "rag_agent"
            state["messages"].append({
                "id": str(uuid.uuid4())[:8],
                "sender": "supervisor",
                "content": f"{feedback_prefix}Supervisor routing task to **Knowledge RAG Agent** to search the vector vault.",
                "timestamp": time.strftime("%H:%M:%S"),
                "metadata": {"plan": state["supervisor_plan"]}
            })
        elif any(term in query for term in ["write", "file", "email", "send", "run", "script", "shell", "web search", "tool"]):
            state["supervisor_plan"] = ["Identify required MCP Tool", "Check HITL approval policy", "Execute via MCP Client", "Reflect & Finalize"]
            state["next_node"] = "mcp_tool_agent"
            state["messages"].append({
                "id": str(uuid.uuid4())[:8],
                "sender": "supervisor",
                "content": f"{feedback_prefix}Supervisor routing task to **MCP Tool Agent** for tool execution.",
                "timestamp": time.strftime("%H:%M:%S"),
                "metadata": {"plan": state["supervisor_plan"]}
            })
        else:
            state["supervisor_plan"] = ["Provide executive direct response", "Evaluate via Reflection Loop"]
            state["next_node"] = "reflection_agent"
            state["messages"].append({
                "id": str(uuid.uuid4())[:8],
                "sender": "supervisor",
                "content": f"{feedback_prefix}Processing direct user inquiry.",
                "timestamp": time.strftime("%H:%M:%S"),
                "metadata": {"plan": state["supervisor_plan"]}
            })

        state["current_node"] = state["next_node"]
        return state

    def _rag_step(self, state: AgentState) -> AgentState:
        last_user_msg = state["messages"][0]["content"] if state["messages"] else ""
        
        # Search RAG Knowledge Vault
        search_results = vault_instance.search(last_user_msg, top_k=2)
        state["rag_context"] = search_results

        context_str = "\n".join([f"- {r['citation']}: {r['document']['content']}" for r in search_results])
        
        state["messages"].append({
            "id": str(uuid.uuid4())[:8],
            "sender": "rag_agent",
            "content": f"**Knowledge RAG Agent Output:**\nBased on Knowledge Vault vector search:\n{context_str}\n\n[1] Synthesized grounded answer with source citations attached.",
            "timestamp": time.strftime("%H:%M:%S"),
            "metadata": {"citations": [r['citation'] for r in search_results]}
        })

        state["current_node"] = "reflection_agent"
        state["next_node"] = "reflection_agent"
        return state

    def _mcp_tool_step(self, state: AgentState) -> AgentState:
        last_user_msg = state["messages"][0]["content"].lower()

        # Determine tool to call
        if "email" in last_user_msg or "send" in last_user_msg:
            tool_name = "send_email_notification"
            args = {"recipient": "user@example.com", "subject": "Executive Update", "body": "Automated summary."}
        elif "shell" in last_user_msg or "script" in last_user_msg or "run" in last_user_msg:
            tool_name = "run_shell_script"
            args = {"command": "npm run build"}
        elif "write" in last_user_msg or "file" in last_user_msg:
            tool_name = "write_workspace_file"
            args = {"path": "scratch/output.txt", "content": "Updated system log."}
        else:
            tool_name = "web_search"
            args = {"query": last_user_msg}

        tool_info = mcp_instance.get_tool(tool_name)
        
        # Check Human-In-The-Loop (HITL) approval policy
        if tool_info and tool_info.get("requires_approval", False):
            # Check if approval was already granted
            pending = state.get("pending_approval")
            if not pending or pending.get("status") != "approved":
                # Create pending approval item in loop engine
                risk = tool_info.get("risk_level", "medium")
                approval_item = loop_engine_instance.add_pending_approval(
                    tool_name=tool_name,
                    arguments=args,
                    risk_level=risk,
                    description=f"Action '{tool_name}' requires human approval before executing on system.",
                    node_id="mcp_tool_agent"
                )
                state["pending_approval"] = approval_item
                state["messages"].append({
                    "id": str(uuid.uuid4())[:8],
                    "sender": "mcp_tool_agent",
                    "content": f"⚠️ **Human-in-the-Loop (HITL) Gate Triggered**: Tool `{tool_name}` has a risk level of **{risk.upper()}**.\n"
                               f"Execution paused pending user approval in the Dashboard HITL queue.",
                    "timestamp": time.strftime("%H:%M:%S"),
                    "metadata": {"hitl_required": True, "approval_id": approval_item["approval_id"]}
                })
                state["current_node"] = "hitl_gate"
                state["next_node"] = "hitl_gate"
                state["is_completed"] = True  # Pause graph turn until user approval
                return state

        # Safe or approved execution
        exec_res = mcp_instance.execute_tool(tool_name, args)
        state["messages"].append({
            "id": str(uuid.uuid4())[:8],
            "sender": "mcp_tool_agent",
            "content": f"⚙️ **MCP Tool Execution Completed**:\nCalled tool `{tool_name}` via `{tool_info.get('server_name', 'MCP Client') if tool_info else 'MCP Client'}`.\n\nResult:\n```json\n{exec_res['result']}\n```",
            "timestamp": time.strftime("%H:%M:%S"),
            "metadata": {"tool": tool_name, "result": exec_res}
        })
        state["pending_approval"] = None

        state["current_node"] = "reflection_agent"
        state["next_node"] = "reflection_agent"
        return state

    def _reflection_step(self, state: AgentState) -> AgentState:
        last_agent_msg = state["messages"][-1]["content"] if state["messages"] else ""
        user_prompt = state["messages"][0]["content"] if state["messages"] else ""
        context = state.get("rag_context", [])

        eval_res = loop_engine_instance.evaluate_response(user_prompt, last_agent_msg, context)
        
        if not eval_res["passed"] and state["reflection_attempts"] < 1:
            state["reflection_attempts"] += 1
            state["reflection_feedback"] = eval_res["feedback"]
            state["messages"].append({
                "id": str(uuid.uuid4())[:8],
                "sender": "reflection_agent",
                "content": f"🔄 **Reflection Loop Triggered** (Attempt #{state['reflection_attempts']}):\n{eval_res['feedback']}\nRouting back to Supervisor for self-correction.",
                "timestamp": time.strftime("%H:%M:%S"),
                "metadata": {"eval": eval_res}
            })
            state["current_node"] = "supervisor"
            state["next_node"] = "supervisor"
            return state

        # Final response synthesis
        state["messages"].append({
            "id": str(uuid.uuid4())[:8],
            "sender": "system",
            "content": f"✅ **Goal Completed Successfully**.\nVerified by Reflection & Quality Loop (Score: {eval_res['quality_score'] * 100:.0f}%).",
            "timestamp": time.strftime("%H:%M:%S"),
            "metadata": {"quality_score": eval_res["quality_score"]}
        })
        state["current_node"] = "completed"
        state["next_node"] = "completed"
        state["is_completed"] = True
        return state

graph_engine = OmniAgentGraph()
