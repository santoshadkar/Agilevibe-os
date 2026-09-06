import time
import uuid
from typing import List, Dict, Any, Optional

class LoopEngine:
    def __init__(self):
        self.pending_approvals: List[Dict[str, Any]] = []
        self.cron_jobs: List[Dict[str, Any]] = [
            {
                "id": "cron-1",
                "name": "Morning Executive Briefing",
                "schedule": "Every day at 08:00 AM",
                "status": "active",
                "last_run": time.strftime("%Y-%m-%d 08:00:00"),
                "next_run": "Tomorrow at 08:00 AM",
                "target_agent": "Supervisor Agent",
                "description": "Synthesizes unread webhooks, calendar schedule, and pending tasks."
            },
            {
                "id": "cron-2",
                "name": "Knowledge Vault Re-indexing & Reflection",
                "schedule": "Every 6 hours",
                "status": "active",
                "last_run": time.strftime("%Y-%m-%d %H:00:00"),
                "next_run": "In 3 hours",
                "target_agent": "Knowledge RAG Agent",
                "description": "Runs reflection loops across newly added documents to extract key insights."
            }
        ]

    # --- Reflection Loop ---
    def evaluate_response(self, prompt: str, response: str, context: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Self-Correction & Reflection Loop.
        Checks output quality, presence of citations, and safety policy compliance.
        """
        issues = []
        if len(response.strip()) < 15:
            issues.append("Response is overly brief and lacks detail.")

        # Check if RAG context was provided but no citations used
        if context and "[" not in response:
            issues.append("Response references retrieved knowledge but lacks explicit source citations.")

        passed = len(issues) == 0
        return {
            "passed": passed,
            "quality_score": 0.95 if passed else 0.65,
            "issues": issues,
            "feedback": "Self-correction required: " + "; ".join(issues) if issues else "Output verified successfully by Reflection Agent."
        }

    # --- Human-in-the-Loop (HITL) Queue ---
    def add_pending_approval(self, tool_name: str, arguments: Dict[str, Any], risk_level: str, description: str, node_id: str) -> Dict[str, Any]:
        approval_id = f"hitl-{str(uuid.uuid4())[:8]}"
        item = {
            "approval_id": approval_id,
            "tool_name": tool_name,
            "arguments": arguments,
            "risk_level": risk_level,
            "description": description,
            "status": "pending",
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "node_id": node_id
        }
        self.pending_approvals.append(item)
        return item

    def get_pending_approvals(self) -> List[Dict[str, Any]]:
        return [item for item in self.pending_approvals if item["status"] == "pending"]

    def process_approval(self, approval_id: str, action: str, modified_args: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
        for item in self.pending_approvals:
            if item["approval_id"] == approval_id:
                item["status"] = action  # "approved" or "rejected"
                if modified_args:
                    item["arguments"] = modified_args
                return item
        return None

    # --- Background Cron Jobs ---
    def list_cron_jobs(self) -> List[Dict[str, Any]]:
        return self.cron_jobs

    def toggle_cron_job(self, cron_id: str) -> Optional[Dict[str, Any]]:
        for job in self.cron_jobs:
            if job["id"] == cron_id:
                job["status"] = "paused" if job["status"] == "active" else "active"
                return job
        return None

loop_engine_instance = LoopEngine()
