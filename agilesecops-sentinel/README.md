# AgileSecOps Sentinel 🛡️⚡

> **Multi-Agent DevSecOps Vulnerability Triage, AI Patch Generator, and Agile Security Backlog Orchestrator built with LangGraph, LangChain, FastAPI, and Glassmorphism Web UI.**

---

## 🌟 Architecture Highlights
- **LangGraph `StateGraph` Multi-Agent Engine**: Orchestrates autonomous agents (`IngestScanNode`, `AgileBacklogNode`, `PatchGeneratorNode`, `HumanApprovalNode`, `GitPRCreatorNode`).
- **Human-in-the-Loop Governance**: Thread state interrupts pause execution for 1-click human security lead approval before publishing Git Pull Requests.
- **6 Pre-Loaded Live Case Studies**: FinTech Payment API, E-Commerce Portal, Healthcare Patient Records, AI Agent RAG Service, Cloud Native Microservice, and Agile Security Champion Auth.

---

## 🚀 Quick Start (Local Run)

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the application
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000
```
Open **`http://localhost:8000`** in your browser.

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build -d
```

---

## 🧪 Run Automated Verification Tests

```bash
python test_case_study.py
```
