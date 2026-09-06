import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

CHAPTER_EXPANSIONS = {
    "chapters/part1_coaching/ch01_modern_agile_spectrum.md": """# Chapter 1: The Modern Enterprise Agile Spectrum

> *"Agile is not a static process to be executed or a certificate to be framed, but a dynamic, adaptive capacity to deliver continuous value in complex, non-linear enterprise environments."*

---

## 1.1 The Evolution of Modern Agile Frameworks

Over the past two decades, the Agile software development movement has undergone a massive paradigm shift. What began as a grassroots manifesto written by seventeen software developers in Snowbird, Utah in 2001 has transformed into multi-thousand-person enterprise transformation engines. In early software teams, Agile methods such as Extreme Programming (XP) and Scrum were applied at the single-team level (typically 3 to 9 developers working on a unified codebase). However, as modern digital organizations grew, scaling software delivery across dozens or hundreds of interconnected squads became the central operational challenge of enterprise technology leadership.

To navigate this complexity, several enterprise scaling frameworks emerged, each offering a distinct philosophy regarding structural alignment, descaling, governance, and culture. Understanding the architectural differences, structural trade-offs, and underlying philosophies between contemporary Agile frameworks is a mandatory prerequisite for any Enterprise Agile Coach.

```mermaid
graph TD
    A[Agile Manifesto Values & 12 Principles] --> B[Team Level Foundations: Scrum / Kanban / Extreme Programming]
    B --> C[Enterprise Scaled Frameworks]
    C --> D[SAFe 6.0: Structured Alignment & Enterprise Governance]
    C --> E[LeSS: Large-Scale Scrum & Organizational Descaling]
    C --> F[Spotify Model: Networked Tribes, Squads & Guild Culture]
    C --> G[Unfix Framework: Dynamic Organizational Design Patterns]
    C --> H[Disciplined Agile DA: Context-Sensitive Process Choices]
```

### Exhaustive Framework Comparison Matrix

| Dimension | Scrum (Team Level) | SAFe 6.0 (Enterprise) | LeSS (Large-Scale Scrum) | Spotify Model (Networked) | Unfix Framework |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Scope** | Single Team (3-9 people) | Multi-team / Enterprise (50–1,000+ people) | 2 to 8+ teams on 1 Product | Product Autonomous Squads | Dynamic Org Design Patterns |
| **Governance Structure** | PO, Scrum Master, Developers | Essential SAFe, Portfolio, Agile Release Trains (ARTs) | Single Product Owner, Area POs | Tribes, Squads, Chapters, Guilds | Value Units, Crew Types, Forums |
| **Planning Horizon** | 1 to 4 Week Sprints | 8 to 12 Week Program Increments (PI) | Synchronized Sprints | Continuous Delivery / Flow | Dynamic Cadence |
| **Scaling Philosophy** | Replicate Scrum Teams | Structured Alignment & Architecture | Descaling complexity & single backlog | Autonomous culture & trust network | Modular team design patterns |
| **Adaptability vs Hierarchy** | High adaptability | Structured, predictable cadence | High systemic focus & simplicity | Organic, decentralized trust | High structural flexibility |
| **Role of Architecture** | Emerging Team Architecture | System/Enterprise Architect Guardrails | Shared Codebase & Collective Ownership | Guild & Tribe Architect Guidance | Facilitating Crew Architecture |

---

## 1.2 SAFe 6.0 (Scaled Agile Framework) Architectural Deep Dive

SAFe 6.0 is the most widely adopted enterprise scaling framework in Fortune 500 corporations. Built on Lean, Systems Thinking, Agile, and DevOps principles, SAFe structures execution across four configuration levels: Essential SAFe, Large Solution SAFe, Portfolio SAFe, and Full SAFe.

### 1. The Agile Release Train (ART)
The primary execution mechanism in SAFe is the **Agile Release Train (ART)**—a long-lived team of Agile teams (typically 50 to 125 individuals) that plans, commits, builds, tests, and deploys software incrementally in synchronized 8 to 12-week timeboxes called **Program Increments (PIs)**.

* **Release Train Engineer (RTE)**: The servant leader and chief Scrum Master for the ART, responsible for facilitating PI Planning events, managing risks, and driving continuous improvement.
* **Product Management**: The product authority responsible for defining and prioritizing the Program Backlog (Features).
* **System Architect**: The technical authority responsible for aligning architecture across squads and defining the architectural runway.

### 2. PI Planning Ceremony Playbook
PI Planning is a two-day face-to-face or virtual event where all members of an ART align on shared goals, map cross-team dependencies, and establish PI Objectives:

```
[ Day 1 Morning: Executive Business Context & Product Vision ]
                       |
[ Day 1 Afternoon: Team Breakouts & Initial Draft Plan Construction ]
                       |
[ Day 1 Evening: Management Review & Problem-Solving Session ]
                       |
[ Day 2 Morning: Plan Adjustments & Final Business Plan Commitment ]
                       |
[ Day 2 Afternoon: Risk ROAMing (Resolved, Owned, Accepted, Mitigated) & Confidence Vote ]
```

---

## 1.3 LeSS (Large-Scale Scrum) & Descaling Complexity

In stark contrast to SAFe's structured alignment layers, **Large-Scale Scrum (LeSS)** operates on the principle of *descaling organizational complexity*. LeSS asserts that enterprise agility is achieved by eliminating unnecessary management layers, organizational silos, and separate program backlogs.

### LeSS Core Principles
1. **Single Product Owner & Single Product Backlog**: Multiple cross-functional Scrum teams work from one prioritized Product Backlog owned by a single Product Owner.
2. **Feature Teams over Component Teams**: Every LeSS team is a cross-functional Feature Team capable of completing customer stories end-to-end without external dependencies.
3. **Sprint Synchronization**: All teams operate on identical Sprint boundaries, starting and finishing Sprints simultaneously.

---

## 1.4 The Spotify Model: Networked Culture & Autonomous Guilds

Popularized by Henrik Kniberg and Anders Ivarsson, the **Spotify Model** emphasizes organizational culture, squad autonomy, and informal learning networks over rigid process compliance.

```mermaid
graph LR
    subgraph Tribe: Digital Banking
        Squad1[Squad: Mobile Checkout]
        Squad2[Squad: Card Payments]
        Squad3[Squad: Fraud Audit]
    end
    
    Chapter[Chapter: QA Automation Engineers - Led by Chapter Lead] --> Squad1
    Chapter --> Squad2
    Chapter --> Squad3
    
    Guild((Guild: AI & Machine Learning - Organic Community of Practice)) ..-> Squad1
    Guild ..-> Squad3
```

* **Squad**: Autonomous cross-functional team (6-10 people) focused on a single product area.
* **Tribe**: A cluster of related Squads working in the same business domain (e.g., Digital Payments Tribe).
* **Chapter**: A functional competence group (e.g., Java Developers, QA Testers) across squads, managed by a Chapter Lead responsible for professional development.
* **Guild**: An organic, company-wide community of practice for shared passions (e.g., DevOps Guild, AI Guild, Security Guild).

---

## 1.5 Enterprise Scaling Anti-Patterns & Dysfunction Diagnostics

When scaling Agile practices across large corporate structures, enterprise coaches frequently encounter systemic dysfunction. Often, legacy command-and-control mindsets are disguised under Agile terminology. Recognizing these anti-patterns early allows enterprise coaches to diagnose root causes and intervene before organizational cynicism sets in.

### 1. Cargo Cult Agile ("Agile in Name Only")
* **Symptom**: Teams rename status meetings to "Daily Standups", project managers become "Product Owners", and functional silos become "Squads", but the underlying behavior remains strictly waterfall and command-and-control.
* **Root Cause**: Implementing ceremonies and changing job titles without shifting leadership incentives, performance evaluation metrics, or organizational trust.
* **Coaching Intervention**: Shift leadership focus from ritual compliance to objective outcome measurement (e.g., Lead Time reduction, customer value velocity, Flow Efficiency).

### 2. The Feature Factory Anti-Pattern
* **Symptom**: Teams achieve high velocity in story point output and close hundreds of Jira/ADO tickets every sprint, yet customer satisfaction, business revenue, and market growth remain stagnant.
* **Root Cause**: Organizational incentives prioritize output (volume of code/tickets) over outcomes (business impact). Product Owners act as back-order takers rather than strategic value creators.
* **Coaching Intervention**: Introduce OKRs (Objectives and Key Results) linked directly to feature adoption and customer retention metrics rather than story point volume.

### 3. The Agile Industrial Complex & Process Bloat
* **Symptom**: Introducing 200-page governance manuals, mandatory tool configurations, and rigid compliance gates under the banner of "Scaled Agile".
* **Root Cause**: Enterprise risk aversion substituting trust and technical excellence with process overhead.
* **Coaching Intervention**: Apply the core Agile principle of *Simplicity—the art of maximizing the amount of work not done*. Descale governance to minimum viable guardrails.

### 4. Component Teams & Perpetual Dependency Hell
* **Symptom**: Features require handoffs across 5 different component teams (Database Team, Frontend Squad, Backend API Team, Middleware Group, QA Testing Guild), causing stories to sit blocked for weeks in Jira or Azure DevOps.
* **Root Cause**: Structuring organization around technology silos rather than end-to-end customer Value Streams.
* **Coaching Intervention**: Re-architect teams into cross-functional Feature Squads capable of delivering end-to-end customer value independently.

---

## 1.6 Case Study: Descaling a Financial Services Giant

### The Background
Global FinTech Corp possessed 1,200 software engineers organized into 45 siloed component teams. Feature releases required an average Lead Time of **26 weeks** from concept to production deployment.

### The Transformation Strategy
1. **Value Stream Mapping (VSM)**: Mapped end-to-end flow of value, revealing that 82% of total Lead Time was spent waiting in handoff queues between component teams.
2. **Re-Architecting Squads**: Combined UI developers, backend engineers, database specialists, and QA automation engineers into 32 autonomous, cross-functional Feature Squads aligned to customer journeys (Onboarding, Payments, Lending, Wealth).
3. **Tooling Standardization**: Consolidated 12 fragmented Jira Data Center and Azure DevOps instances into a single Jira Cloud Enterprise platform connected to Atlassian Access and GitHub Enterprise.

### The Results
* **Lead Time Reduction**: Reduced concept-to-cash Lead Time from 26 weeks to **2.4 weeks**.
* **Flow Efficiency Increase**: Improved Flow Efficiency from 8.5% to **38.2%**.
* **Defect Rate Drop**: Reduced production severity-1 incidents by **64%** due to automated CI/CD pipeline quality gates.

---

## 1.7 Executive Summary & Enterprise Coaching Playbook

As an Enterprise Agile Coach, your primary imperative is not to force-fit a single rigid framework (such as SAFe, LeSS, or Spotify), but to diagnose the organizational context:
1. **Complicated Domains**: SAFe and structured governance provide clarity for heavy regulatory, compliance, or legacy hardware integration environments.
2. **Complex Domains**: LeSS or descaled autonomous networks accelerate learning loops where user needs and market conditions are constantly evolving.
3. **Hybrid Tooling Integration**: Jira Cloud, Jira Data Center, and Azure DevOps must be engineered to reflect the *actual* flow of work across value streams, avoiding administrative overhead.
"""
}

def expand_all():
    for rel_path, text in CHAPTER_EXPANSIONS.items():
        full_path = os.path.join(BASE_DIR, rel_path)
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Expanded: {rel_path}")

if __name__ == "__main__":
    expand_all()
