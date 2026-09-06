from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field

class VulnerabilityFinding(BaseModel):
    id: str
    title: str
    severity: str  # Critical, High, Medium, Low
    cve_id: Optional[str] = "CVE-2026-GENERIC"
    owasp_category: str
    filename: str
    line_number: int
    vulnerable_code: str
    description: str
    cvss_score: float

class AgileStory(BaseModel):
    story_id: str
    vulnerability_id: str
    title: str
    user_story: str
    acceptance_criteria: List[str]
    story_points: int  # Fibonacci: 1, 2, 3, 5, 8, 13
    priority: str  # P0-Blocker, P1-High, P2-Medium, P3-Low
    sprint: str
    assignee_role: str
    status: str = "To Do"  # To Do, In Progress, Review, Done

class PatchProposal(BaseModel):
    patch_id: str
    vulnerability_id: str
    filename: str
    original_code: str
    proposed_code: str
    diff: str
    explanation: str
    guardrail_checks: List[Dict[str, Any]]  # {"check": str, "passed": bool, "details": str}
    security_score: int  # 0-100

class ApprovalDecision(BaseModel):
    scan_id: str
    action: str  # "approve", "reject", "modify"
    feedback: Optional[str] = None
    modified_code: Optional[str] = None

class SentinelState(BaseModel):
    scan_id: str
    repo_name: str
    repo_files: Dict[str, str] = Field(default_factory=dict)
    vulnerabilities: List[Dict[str, Any]] = Field(default_factory=list)
    agile_stories: List[Dict[str, Any]] = Field(default_factory=list)
    patch_proposals: List[Dict[str, Any]] = Field(default_factory=list)
    current_node: str = "init"
    human_approval: Dict[str, Any] = Field(default_factory=lambda: {"status": "pending", "feedback": ""})
    git_pr: Optional[Dict[str, Any]] = None
    logs: List[Dict[str, Any]] = Field(default_factory=list)
    status: str = "initialized"
    created_at: str = ""
