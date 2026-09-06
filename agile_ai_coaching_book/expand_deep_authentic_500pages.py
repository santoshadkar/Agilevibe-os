import os
import glob

print("Expanding all 24 chapters into deep, authentic 5,000-word manuscripts...")

# Custom deep expansions tailored to each chapter's specific technical context

def get_chapter_1_deep():
    return """# Chapter 1: The Modern Enterprise Agile Spectrum & Framework Comparison

## 1.1 Comparative Analysis: SAFe 6.0, LeSS, Scrum@Scale, and Unfixed

The modern enterprise Agile ecosystem presents technology leaders and Agile practice leads with a complex choice of framework paradigms. Selecting an enterprise scaling framework is not merely a process decision; it is a structural intervention that dictates how budget is allocated, how teams are structured, and how software architecture evolves over time.

### Scaled Agile Framework (SAFe 6.0) Deep Dive
SAFe 6.0 is the most widely adopted enterprise scaling framework among Fortune 500 organizations, particularly in highly regulated environments such as aerospace, financial services, and healthcare. Its primary scaling vehicle—the Agile Release Train (ART)—synchronizes 50 to 125 practitioners across 5 to 12 squads on a shared cadence (typically 8 to 12-week Program Increments). 

However, SAFe introduces considerable organizational friction if implemented dogmatically. The requirement for extensive PI Planning events, Solution Train Synchronization, and System Demo cadences can create a heavy administrative layer. Organizations adopting SAFe must explicitly guard against "SAFe-in-name-only" anti-patterns, where traditional command-and-control project management is simply re-labeled using SAFe terminology.

### Large-Scale Scrum (LeSS) & Descaling Philosophy
In contrast to SAFe's additive approach, Large-Scale Scrum (LeSS) advocates for systemic descaling. Founded on the principle that scaling software development requires simplifying organizational structure rather than layering additional processes, LeSS mandates a single Product Owner managing a single Product Backlog across up to eight feature teams.

Feature teams in LeSS are cross-functional, co-located (or virtually synchronized), and fully capable of delivering end-to-end user value without external dependencies. This descaling approach requires engineering teams to maintain exceptionally high technical standards, including Test-Driven Development (TDD), continuous integration, and automated regression suites.

### Scrum@Scale & Executive Alignment
Scrum@Scale, created by Jeff Sutherland, scales Scrum by modularly expanding the core Scrum framework through a dual-network structure: the Scrum-of-Scrums (SoS) track for operational delivery and the Executive Action Team (EAT) track for organizational transformation and impediment removal. 

The primary advantage of Scrum@Scale is its linear scalability and minimum viable bureaucracy. By maintaining identical event structures across team, portfolio, and enterprise levels, Scrum@Scale avoids introducing specialized role titles or complex coordination artifacts.

### The Unfixed Model: Dynamic Topologies
The Unfixed framework represents a modern, flexible organizational model that decouples roles from fixed job descriptions. Rather than assigning individuals to rigid squad structures, Unfixed organizes teams into dynamic capability hubs centered around specific value streams.

### Comprehensive Scaling Framework Matrix

| Dimension | SAFe 6.0 | Large-Scale Scrum (LeSS) | Scrum@Scale | Unfixed Framework |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Scaling Artifact** | Agile Release Train (ART) | Single Product Backlog | Scrum of Scrums (SoS) | Dynamic Value Stream Hubs |
| **Cadence Alignment** | Synchronized (8-12 wk PI) | Synchronized Sprint Cadence | Flexible / Event-Driven | Continuous Flow |
| **Role Specialization** | High (RTE, STE, Product Mgr) | Low (PO, Scrum Master, Team) | Low (Scrum Master, PO, EAT) | Fluid / Contextual Roles |
| **Architecture Model** | Architectural Runway | Continuous Integration | Systemic Alignment | Platform Self-Service |
| **Best-Fit Domain** | Regulated, Large Enterprises | Tech-Native, High Engineering Maturity | Medium-to-Large Enterprises | Adaptive / Fast-Moving Orgs |

## 1.2 Value Stream Architecture & Mapping Manual Queues

Value Stream Management (VSM) serves as the quantitative mechanism for identifying operational bottlenecks, queue buildup, and handoff delays across software delivery pipelines.

### Understanding Touch Time vs. Wait Time
In enterprise delivery pipelines, work items transit through various operational states. The total lead time ($T_{lead}$) represents the elapsed time from initial customer request to production deployment:

$$T_{lead} = T_{touch} + T_{wait}$$

Where $T_{touch}$ is the active engineering duration (writing code, executing tests, configuring pipelines) and $T_{wait}$ is the passive queue duration (awaiting architecture approval, security review, CAB sign-off).

### Mapping Handoff Queues in Complex Organizations
Manual handoffs between specialized functional groups are the primary cause of inflated lead times in enterprise environments. Common handoff friction points include:

1. **Architecture Review Board (ARB)**: Asynchronous review queues that delay feature design approval.
2. **Infra-Provisioning Requests**: Ticket-based server or cloud resource allocation requests.
3. **Security Audit Gates**: Late-stage pre-production penetration testing and code compliance sign-offs.
4. **Change Advisory Board (CAB)**: Weekly manual release authorization meetings.

```python
import numpy as np

def analyze_value_stream_bottlenecks(stage_data):
    \"\"\"
    Calculates stage-by-stage wait ratios and identifies critical path constraints.
    \"\"\"
    total_lead = sum(s['touch'] + s['wait'] for s in stage_data)
    total_touch = sum(s['touch'] for s in stage_data)
    total_wait = sum(s['wait'] for s in stage_data)
    
    print(f"Total Value Stream Lead Time: {total_lead:.1f} hours")
    print(f"Total Touch Time: {total_touch:.1f} hours")
    print(f"Total Wait Time: {total_wait:.1f} hours")
    print(f"System Flow Efficiency: {(total_touch / total_lead * 100):.2f}%\n")
    
    print("Stage Breakdown:")
    for s in stage_data:
        stage_lead = s['touch'] + s['wait']
        efficiency = (s['touch'] / stage_lead * 100) if stage_lead > 0 else 0
        print(f"- {s['name']}: Touch={s['touch']}h, Wait={s['wait']}h, Stage Efficiency={efficiency:.1f}%")

stages = [
    {"name": "Backlog Discovery", "touch": 12.0, "wait": 120.0},
    {"name": "Architecture Review", "touch": 4.0, "wait": 160.0},
    {"name": "Sprint Execution", "touch": 36.0, "wait": 24.0},
    {"name": "Security & Compliance", "touch": 6.0, "wait": 96.0},
    {"name": "Production Deployment", "touch": 2.0, "wait": 48.0}
]

analyze_value_stream_bottlenecks(stages)
```

## 1.3 Enterprise Governance, Portfolio Steering & Budgeting

Transitioning from annual project-based budgeting to continuous value-stream funding is a prerequisite for sustained enterprise agility. Traditional cost-center budgeting locks organizations into fixed scope commitments, disincentivizing pivot decisions based on market feedback.

### Lean Portfolio Management (LPM) Implementation
Lean Portfolio Management aligns strategy and execution by applying Lean and Systems Thinking to investment decision-making:

- **Participatory Budgeting**: Collaborative events where portfolio stakeholders allocate funding across persistent value streams based on strategic priorities.
- **Strategic Horizon Allocation**: Distributing capital across Horizon 1 (60-70% Core), Horizon 2 (20-30% Growth), and Horizon 3 (10-15% Innovation).
- **Weighted Shortest Job First (WSJF)**: Prioritizing portfolio epics based on economic Cost of Delay relative to job duration.

$$\text{Cost of Delay (CoD)} = \text{User Value} + \text{Time Criticality} + \text{Risk Reduction / Opportunity Enablement}$$

## 1.4 Transitioning from Project-Centric to Product-Centric Delivery

The transition from project-centric management to a product-operating model requires structural changes in team composition, accountability, and metrics.

### Key Dimensions of the Product Operating Model
1. **Persistent Teams**: Formed around long-lived business capabilities rather than transient project timelines.
2. **Outcome Ownership**: Squads are evaluated on user adoption, business revenue impact, and system reliability rather than scope completion.
3. **Decoupled Architecture**: Product boundaries map directly to Domain-Driven Design (DDD) bounded contexts, enabling independent deployments.
"""

# Now let's write a generator that produces deep 5,000-word topic-authentic text for every single chapter file without any template loops!

print("Done preparing Chapter 1 text.")
