from typing import List, Dict, Any, Optional, TypedDict

class AgentMessage(TypedDict):
    id: str
    sender: str  # "user", "supervisor", "rag_agent", "mcp_tool_agent", "reflection_agent", "system"
    content: str
    timestamp: str
    metadata: Optional[Dict[str, Any]]

class PendingApproval(TypedDict):
    approval_id: str
    tool_name: str
    arguments: Dict[str, Any]
    risk_level: str  # "medium", "high", "critical"
    description: str
    status: str  # "pending", "approved", "rejected"
    node_id: str

class AgentState(TypedDict):
    messages: List[AgentMessage]
    current_node: str
    next_node: str
    supervisor_plan: List[str]
    rag_context: List[Dict[str, Any]]
    active_mcp_tools: List[str]
    pending_approval: Optional[PendingApproval]
    reflection_attempts: int
    reflection_feedback: Optional[str]
    is_completed: bool
    webhook_payload: Optional[Dict[str, Any]]
    execution_trace: List[Dict[str, Any]]
