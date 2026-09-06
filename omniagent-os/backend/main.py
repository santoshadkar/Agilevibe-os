import time
import uuid
from typing import Dict, Any, List, Optional
from fastapi import FastAPI, HTTPException, Request, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.config import settings
from app.agents.state import AgentState, AgentMessage
from app.agents.graph import graph_engine
from app.rag.store import vault_instance
from app.mcp.manager import mcp_instance
from app.loops.engine import loop_engine_instance

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="OmniAgent OS Backend Service combining RAG, LangGraph, MCP, Loop Engineering, and Webhooks."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Active chat threads in-memory state store
chat_threads: Dict[str, AgentState] = {}

class ChatRequest(BaseModel):
    thread_id: Optional[str] = None
    message: str
    webhook_id: Optional[str] = None

class DocumentRequest(BaseModel):
    title: str
    content: str
    source: Optional[str] = "User Upload"
    category: Optional[str] = "General"

class SearchRequest(BaseModel):
    query: str
    top_k: Optional[int] = 3

class ApprovalRequest(BaseModel):
    approval_id: str
    action: str  # "approved" or "rejected"
    modified_args: Optional[Dict[str, Any]] = None

@app.get("/")
def read_root():
    return {
        "status": "online",
        "app": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "active_threads": len(chat_threads)
    }

# --- Graph Visualization Topology Endpoint ---
@app.get("/api/graph/schema")
def get_graph_schema():
    return {
        "nodes": [
            {"id": "supervisor", "label": "Supervisor Router Agent", "type": "orchestrator"},
            {"id": "rag_agent", "label": "Knowledge RAG Agent", "type": "vector_retrieval"},
            {"id": "mcp_tool_agent", "label": "MCP Tool Execution Agent", "type": "mcp_runner"},
            {"id": "hitl_gate", "label": "Human-in-the-Loop Gate", "type": "security_gate"},
            {"id": "reflection_agent", "label": "Reflection & Quality Agent", "type": "evaluator"},
            {"id": "completed", "label": "Execution Completed", "type": "terminal"}
        ],
        "edges": [
            {"source": "supervisor", "target": "rag_agent", "condition": "Vector Vault Query"},
            {"source": "supervisor", "target": "mcp_tool_agent", "condition": "Tool Call Requested"},
            {"source": "supervisor", "target": "reflection_agent", "condition": "Direct Inquiry"},
            {"source": "mcp_tool_agent", "target": "hitl_gate", "condition": "Requires Human Approval"},
            {"source": "hitl_gate", "target": "mcp_tool_agent", "condition": "User Approved"},
            {"source": "rag_agent", "target": "reflection_agent", "condition": "Search Complete"},
            {"source": "mcp_tool_agent", "target": "reflection_agent", "condition": "Execution Done"},
            {"source": "reflection_agent", "target": "supervisor", "condition": "Self-Correction Required"},
            {"source": "reflection_agent", "target": "completed", "condition": "Quality Passed"}
        ]
    }

# --- Multi-Agent Chat Endpoint ---
@app.post("/api/chat")
def chat_endpoint(req: ChatRequest):
    thread_id = req.thread_id or f"thread-{str(uuid.uuid4())[:8]}"

    if thread_id not in chat_threads:
        chat_threads[thread_id] = {
            "messages": [],
            "current_node": "supervisor",
            "next_node": "supervisor",
            "supervisor_plan": [],
            "rag_context": [],
            "active_mcp_tools": [],
            "pending_approval": None,
            "reflection_attempts": 0,
            "reflection_feedback": None,
            "is_completed": False,
            "webhook_payload": None,
            "execution_trace": []
        }

    state = chat_threads[thread_id]
    
    # Append user message
    user_msg: AgentMessage = {
        "id": str(uuid.uuid4())[:8],
        "sender": "user",
        "content": req.message,
        "timestamp": time.strftime("%H:%M:%S"),
        "metadata": None
    }
    state["messages"].append(user_msg)
    state["current_node"] = "supervisor"
    state["is_completed"] = False

    # Execute graph steps until completed or HITL interrupt
    max_steps = 10
    step_count = 0
    while not state["is_completed"] and step_count < max_steps:
        state = graph_engine.run_step(state)
        step_count += 1

    chat_threads[thread_id] = state
    return {
        "thread_id": thread_id,
        "state": state
    }

@app.get("/api/chat/{thread_id}")
def get_thread_state(thread_id: str):
    if thread_id not in chat_threads:
        raise HTTPException(status_code=404, detail="Thread not found")
    return {"thread_id": thread_id, "state": chat_threads[thread_id]}

# --- RAG Knowledge Vault Endpoints ---
@app.get("/api/rag/documents")
def list_rag_documents():
    return {"documents": vault_instance.list_documents()}

@app.post("/api/rag/documents")
def add_rag_document(req: DocumentRequest):
    doc = vault_instance.add_document(
        title=req.title,
        content=req.content,
        source=req.source or "User Upload",
        category=req.category or "General"
    )
    return {"status": "success", "document": doc}

@app.delete("/api/rag/documents/{doc_id}")
def delete_rag_document(doc_id: str):
    success = vault_instance.delete_document(doc_id)
    return {"status": "success" if success else "error"}

@app.post("/api/rag/search")
def search_rag(req: SearchRequest):
    results = vault_instance.search(req.query, top_k=req.top_k or 3)
    return {"query": req.query, "results": results}

# --- MCP Server Hub Endpoints ---
@app.get("/api/mcp/servers")
def get_mcp_servers():
    return {"servers": mcp_instance.list_servers()}

@app.get("/api/mcp/tools")
def get_mcp_tools():
    return {"tools": mcp_instance.list_all_tools()}

# --- Human-in-the-Loop (HITL) Endpoints ---
@app.get("/api/hitl/pending")
def get_hitl_pending():
    return {"pending_approvals": loop_engine_instance.get_pending_approvals()}

@app.post("/api/hitl/process")
def process_hitl(req: ApprovalRequest):
    result = loop_engine_instance.process_approval(req.approval_id, req.action, req.modified_args)
    if not result:
        raise HTTPException(status_code=404, detail="Approval request not found")

    # Resume graph execution for corresponding thread if approved
    resumed_threads = []
    for thread_id, state in chat_threads.items():
        if state.get("pending_approval") and state["pending_approval"]["approval_id"] == req.approval_id:
            state["pending_approval"]["status"] = req.action
            if req.action == "approved":
                state["current_node"] = "mcp_tool_agent"
                state["is_completed"] = False
                state = graph_engine.run_step(state)
                # Continue graph after approval
                max_steps = 5
                step_count = 0
                while not state["is_completed"] and step_count < max_steps:
                    state = graph_engine.run_step(state)
                    step_count += 1
            else:
                state["messages"].append({
                    "id": str(uuid.uuid4())[:8],
                    "sender": "system",
                    "content": "❌ **Action Rejected by User**: Tool execution cancelled.",
                    "timestamp": time.strftime("%H:%M:%S"),
                    "metadata": None
                })
                state["is_completed"] = True
            chat_threads[thread_id] = state
            resumed_threads.append(thread_id)

    return {"status": "processed", "approval": result, "resumed_threads": resumed_threads}

# --- Webhook Ingress Endpoints ---
@app.post("/api/webhooks/{trigger_id}")
async def handle_webhook(trigger_id: str, request: Request):
    payload = await request.json() if request.headers.get("content-type") == "application/json" else {}
    
    # Spawn background agent workflow triggered by webhook
    thread_id = f"webhook-thread-{str(uuid.uuid4())[:8]}"
    
    initial_message = f"⚡ **Incoming Webhook Event Received** (Trigger ID: `{trigger_id}`).\nPayload Summary: {payload}"
    
    chat_req = ChatRequest(
        thread_id=thread_id,
        message=initial_message,
        webhook_id=trigger_id
    )
    
    res = chat_endpoint(chat_req)
    return {
        "status": "received",
        "trigger_id": trigger_id,
        "thread_id": thread_id,
        "agent_response": res
    }

# --- Background Cron Loops Endpoints ---
@app.get("/api/loops/cron")
def get_cron_jobs():
    return {"cron_jobs": loop_engine_instance.list_cron_jobs()}

@app.post("/api/loops/cron/{cron_id}/toggle")
def toggle_cron_job(cron_id: str):
    job = loop_engine_instance.toggle_cron_job(cron_id)
    if not job:
        raise HTTPException(status_code=404, detail="Cron job not found")
    return {"status": "success", "job": job}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
