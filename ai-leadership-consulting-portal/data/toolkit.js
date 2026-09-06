window.AI_TOOLKIT_DATA = {
  deckTemplate: `# Enterprise AI Discovery & Strategy Recommendation Deck
**Client Organization:** [Client Enterprise Name]
**Prepared by:** Lead AI Strategist & Executive Consultant
**Date:** [Current Date]

---

## Slide 1: Executive Summary & Strategic Context
- **Objective:** Transform operational productivity and capture market differentiation through targeted AI implementation.
- **Strategic Vision:** Transition from fragmented shadow AI usage to a governance-hardened, Hub-and-Spoke AI model over the next 12 months.
- **Key Milestones:** 
  1. Phase 1 (Days 1-30): Setup Enterprise AI CoE & Secure Cloud VPC Gateway.
  2. Phase 2 (Days 31-90): Deploy High-Impact Knowledge RAG Pilot.
  3. Phase 3 (Days 91-180): Scale Multi-Agent Tool Automation.

---

## Slide 2: Operational Bottlenecks & Baseline Financial Costs
- **Current State Analysis:**
  - Manual document retrieval and report drafting consumes 3.5 hours/day per knowledge worker.
  - Estimated annual productivity loss: $2.4M across 500 business analysts.
  - Customer ticket resolution time averages 42 hours due to fragmented data silos.

---

## Slide 3: Proposed AI Solution & Candidate Use Cases
- **Selected Pilot Candidates (Impact vs Feasibility Matrix):**
  1. *Internal Knowledge RAG System:* Instant semantic search over 50,000 PDF contracts & SharePoint docs.
  2. *Automated Support Triage Bot:* Deflecting 40% of tier-1 customer inquiries with zero human intervention.

---

## Slide 4: Enterprise Architecture & Data Privacy Boundaries
- **Technology Stack:**
  - Model Layer: Azure OpenAI Enterprise (Zero Data Retention SLA).
  - Storage Layer: Qdrant / Pinecone Vector Database with HNSW indexing.
  - Security Gateways: Presidio PII Masking + NeMo Guardrails + Secrets Manager.

---

## Slide 5: Build vs Buy vs Partner Decision Rationale
- **Commodity Utilities (BUY):** Off-the-shelf Microsoft 365 Copilot for basic email/meeting notes.
- **Core Differentiation (HYBRID/PARTNER):** Custom RAG & Agentic APIs built over proprietary company data.

---

## Slide 6: 3-Year Total Cost of Ownership (TCO) & ROI Model
- **Year 1 Capital Expenditure:** $180,000 (Compute, API tokens, vector storage, MLOps setup).
- **Year 1 Projected Financial Benefit:** $450,000 (Labor hours saved + ticket deflection).
- **3-Year ROI:** **150% Net Financial Return** (Break-even at Month 7).

---

## Slide 7: Risk, Governance & Regulatory Compliance Charter
- **Regulatory Alignment:** Compliant with EU AI Act (Low/Medium Risk classification) & NIST AI RMF.
- **Security Mandates:** Zero data storage on vendor disks; temperature set to 0.0 for zero hallucinations.

---

## Slide 8: Organizational Change Management & Upskilling
- **Model:** ADKAR Change Framework.
- **Roles:** Establishing Hub-and-Spoke AI CoE (CAIO, AI Solution Architect, BU Champions).

---

## Slide 9: 90-Day Pilot Milestones & Budget Gates
- **Month 1:** VPC Setup, Data Ingestion, Security Signoff.
- **Month 2:** Beta Testing with 50 Champion Power Users.
- **Month 3:** KPI Review & Executive Go/No-Go Decision for Enterprise-Wide Rollout.

---

## Slide 10: Immediate Call to Action
- **Request:** Approval of $75,000 Gated Pilot Budget for 90-Day PoC Phase.
`,

  policyCharter: `# Corporate AI Risk, Governance & Acceptable Use Policy
**Document ID:** POL-AI-2026-001  
**Target Audience:** All Enterprise Employees, Contractors, and Third-Party Consultants  
**Effective Date:** January 2026  

---

### 1. Purpose & Strategic Scope
This policy establishes mandatory governance rules for utilizing Artificial Intelligence (AI), Large Language Models (LLMs), and Generative Systems across enterprise operations. The goal is to drive innovation while preventing intellectual property leaks, data privacy breaches, and regulatory non-compliance.

---

### 2. Prohibited AI Practices (Strict Zero-Tolerance)
1. **Public AI Data Transmission:** Employees must NEVER input proprietary source code, customer PII, unreleased financial figures, or confidential business plans into consumer public AI tools (e.g. standard ChatGPT Free, public Midjourney).
2. **Autonomous High-Risk Actions:** AI models must NEVER execute financial transactions, send binding legal contracts, or alter employee HR records without explicit prior Human-in-the-Loop (HITL) authorization.
3. **Biometric Surveillance:** Prohibited from using AI for unauthorized facial scraping, emotion recognition, or social scoring.

---

### 3. Approved Enterprise AI Tool Usage
1. All AI interactions must route through the enterprise-approved **Zero Data Retention (ZDR)** API Gateway.
2. Prompts sent to commercial vendors must pass through automated **Presidio PII Anonymization Filters**.
3. All AI-generated code or text intended for customer publication MUST undergo human review and verification.

---

### 4. EU AI Act & NIST Compliance Requirements
- All enterprise AI systems must be cataloged in the Central AI Asset Registry.
- High-risk applications (e.g. credit evaluation, hiring screening) require a formal Risk & Fairness Audit prior to deployment.

---

### 5. Violation Penalties
Failure to adhere to this policy may result in revocation of system credentials, disciplinary action up to termination of employment, and legal prosecution for severe data breach negligence.
`
};
