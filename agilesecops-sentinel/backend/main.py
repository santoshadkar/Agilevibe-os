import os
import uuid
import datetime
from typing import Dict, Any
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from .models import SentinelState, ApprovalDecision
from .sample_repos import SAMPLE_REPOSITORIES
from .graph import build_sentinel_graph

app = FastAPI(
    title="AgileSecOps Sentinel API",
    description="Multi-Agent DevSecOps Vulnerability Triage & Human-in-the-Loop AI Patch Orchestrator built with LangGraph & LangChain",
    version="1.0.0"
)

# Enable CORS for local web UI & Vercel deployment
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory store for active graph instances and thread states
ACTIVE_SCANS: Dict[str, Dict[str, Any]] = {}
sentinel_graph = build_sentinel_graph()

@app.get("/api/repos")
def get_sample_repositories():
    """Returns available sample target code repositories for testing."""
    return {"repositories": list(SAMPLE_REPOSITORIES.keys()), "data": SAMPLE_REPOSITORIES}

@app.post("/api/scan")
def start_security_scan(payload: Dict[str, Any]):
    """Triggers a new LangGraph security analysis workflow on selected repository."""
    repo_name = payload.get("repo_name")
    custom_files = payload.get("custom_files")

    if not repo_name and not custom_files:
        raise HTTPException(status_code=400, detail="Repository name or custom files must be provided.")

    if custom_files:
        repo_files = custom_files
        display_name = repo_name or "Custom Uploaded Repository"
    elif repo_name in SAMPLE_REPOSITORIES:
        repo_files = SAMPLE_REPOSITORIES[repo_name]
        display_name = repo_name
    else:
        raise HTTPException(status_code=404, detail="Repository not found.")

    scan_id = f"scan-{uuid.uuid4().hex[:8]}"

    initial_state = {
        "scan_id": scan_id,
        "repo_name": display_name,
        "repo_files": repo_files,
        "vulnerabilities": [],
        "agile_stories": [],
        "patch_proposals": [],
        "current_node": "init",
        "human_approval": {"status": "pending", "feedback": ""},
        "git_pr": None,
        "logs": [{
            "timestamp": datetime.datetime.now().strftime("%H:%M:%S"),
            "node": "System",
            "message": f"Initialized security analysis session {scan_id} for '{display_name}'.",
            "level": "INFO"
        }],
        "status": "initializing",
        "created_at": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    config = {"configurable": {"thread_id": scan_id}}

    # Execute graph up to human approval interrupt
    result_state = sentinel_graph.invoke(initial_state, config=config)

    ACTIVE_SCANS[scan_id] = {
        "state": result_state,
        "config": config
    }

    return {"scan_id": scan_id, "state": result_state}

@app.post("/api/approval")
def process_human_approval(decision: ApprovalDecision):
    """Submits Human-in-the-Loop approval/rejection/modification and resumes LangGraph execution."""
    scan_id = decision.scan_id
    if scan_id not in ACTIVE_SCANS:
        raise HTTPException(status_code=404, detail="Scan session not found.")

    scan_data = ACTIVE_SCANS[scan_id]
    current_state = scan_data["state"]
    config = scan_data["config"]

    action = decision.action.lower()
    feedback = decision.feedback or ""

    status_str = "approved" if action in ["approve", "approved"] else ("rejected" if action in ["reject", "rejected"] else "modified")

    if decision.modified_code and current_state.get("patch_proposals"):
        current_state["patch_proposals"][0]["proposed_code"] = decision.modified_code

    current_state["human_approval"] = {
        "status": status_str,
        "feedback": feedback
    }

    # Resume graph execution with updated state
    resumed_state = sentinel_graph.invoke(current_state, config=config)

    ACTIVE_SCANS[scan_id]["state"] = resumed_state
    return {"scan_id": scan_id, "state": resumed_state}

@app.get("/api/scans/{scan_id}")
def get_scan_status(scan_id: str):
    """Fetches full state snapshot for a given scan session."""
    if scan_id not in ACTIVE_SCANS:
        raise HTTPException(status_code=404, detail="Scan session not found.")
    return {"scan_id": scan_id, "state": ACTIVE_SCANS[scan_id]["state"]}

# Mount static frontend files for local & Vercel serving
frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend"))
if os.path.exists(frontend_dir):
    app.mount("/static", StaticFiles(directory=frontend_dir), name="static")

@app.get("/")
def serve_index():
    index_file = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend", "index.html"))
    if os.path.exists(index_file):
        return FileResponse(index_file)
    return {"message": "AgileSecOps Sentinel API is running."}

# Export handler for Vercel serverless function
handler = app
