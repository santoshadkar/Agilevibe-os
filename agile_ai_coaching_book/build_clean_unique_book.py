import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

CHAPTERS_DATA = {
    "chapters/part1_coaching/ch01_modern_agile_spectrum.md": """# Chapter 1: The Modern Enterprise Agile Spectrum

> *"Agile is not a static process to be executed or a certificate to be framed, but a dynamic, adaptive capacity to deliver continuous value in complex enterprise environments."*

---

## 1.1 The Evolution of Modern Agile Frameworks

Over the past two decades, the Agile software development movement has undergone a massive paradigm shift. What began as a grassroots manifesto written by seventeen software developers in Snowbird, Utah in 2001 has transformed into multi-thousand-person enterprise transformation engines. In early software teams, Agile methods such as Extreme Programming (XP) and Scrum were applied at the single-team level (typically 3 to 9 developers working on a unified codebase). However, as modern digital organizations grew, scaling software delivery across dozens or hundreds of interconnected squads became the central operational challenge of enterprise technology leadership.

To navigate this complexity, several enterprise scaling frameworks emerged, each offering a distinct philosophy regarding structural alignment, descaling, governance, and culture. Understanding the architectural differences, structural trade-offs, and underlying philosophies between contemporary Agile frameworks is a mandatory prerequisite for any Enterprise Agile Coach.

* **Agile Manifesto Values**: Individuals and interactions over processes and tools; Working software over comprehensive documentation; Customer collaboration over contract negotiation; Responding to change over following a plan.
* **Team-Level Foundations**: Scrum (Sprint timeboxes, PO, SM, Dev Team), Kanban (Flow visualization, WIP limits), Extreme Programming (Pair programming, TDD, CI/CD).
* **Enterprise Scaled Frameworks**: SAFe 6.0 (Structured alignment), LeSS (Large-Scale Scrum descaling), Spotify Model (Networked Tribes & Guilds), Unfix (Dynamic team design).

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

1. **Executive Context & Vision**: Product Management presents the top 10 Features and business context.
2. **Team Breakouts**: Squads estimate capacity, draft sprint plans, and identify cross-team dependencies.
3. **Management Review**: Leadership resolves capacity bottlenecks and adjusts scope commitments.
4. **Final Plan Commitment**: Squads present final PI Objectives and vote on plan confidence.
5. **ROAMing Risks**: Identified risks are categorized as Resolved, Owned, Accepted, or Mitigated.

---

## 1.3 LeSS (Large-Scale Scrum) & Descaling Complexity

In stark contrast to SAFe's structured alignment layers, **Large-Scale Scrum (LeSS)** operates on the principle of *descaling organizational complexity*. LeSS asserts that enterprise agility is achieved by eliminating unnecessary management layers, organizational silos, and separate program backlogs.

### LeSS Core Principles
1. **Single Product Owner & Single Product Backlog**: Multiple cross-functional Scrum teams work from one prioritized Product Backlog owned by a single Product Owner.
2. **Feature Teams over Component Teams**: Every LeSS team is a cross-functional Feature Team capable of completing customer stories end-to-end without external dependencies.
3. **Sprint Synchronization**: All teams operate on identical Sprint boundaries, starting and finishing Sprints simultaneously.

---

## 1.4 The Spotify Model: Networked Culture & Autonomous Guilds

* **Squad**: Autonomous cross-functional team (6-10 people) focused on a single product area.
* **Tribe**: A cluster of related Squads working in the same business domain (e.g., Digital Payments Tribe).
* **Chapter**: A functional competence group (e.g., Java Developers, QA Testers) across squads, managed by a Chapter Lead responsible for professional development.
* **Guild**: An organic, company-wide community of practice for shared passions (e.g., DevOps Guild, AI Guild, Security Guild).

---

## 1.5 Enterprise Scaling Anti-Patterns & Dysfunction Diagnostics

### 1. Cargo Cult Agile ("Agile in Name Only")
* **Symptom**: Teams rename status meetings to "Daily Standups", project managers become "Product Owners", and functional silos become "Squads", but the underlying behavior remains strictly waterfall and command-and-control.
* **Root Cause**: Implementing ceremonies and changing job titles without shifting leadership incentives, performance evaluation metrics, or organizational trust.
* **Coaching Intervention**: Shift leadership focus from ritual compliance to objective outcome measurement (e.g., Lead Time reduction, customer value velocity, Flow Efficiency).

### 2. The Feature Factory Anti-Pattern
* **Symptom**: Teams achieve high velocity in story point output and close hundreds of Jira/ADO tickets every sprint, yet customer satisfaction, business revenue, and market growth remain stagnant.
* **Root Cause**: Organizational incentives prioritize output (volume of code/tickets) over outcomes (business impact). Product Owners act as back-order takers rather than strategic value creators.
* **Coaching Intervention**: Introduce OKRs (Objectives and Key Results) linked directly to feature adoption and customer retention metrics rather than story point volume.

---

## 1.6 Case Study: Descaling a Financial Services Giant

### The Background
Global FinTech Corp possessed 1,200 software engineers organized into 45 siloed component teams. Feature releases required an average Lead Time of **26 weeks** from concept to production deployment.

### The Transformation Strategy
1. **Value Stream Mapping (VSM)**: Mapped end-to-end flow of value, revealing that 82% of total Lead Time was spent waiting in handoff queues between component teams.
2. **Re-Architecting Squads**: Combined UI developers, backend engineers, database specialists, and QA automation engineers into 32 autonomous, cross-functional Feature Squads aligned to customer journeys.
3. **Tooling Standardization**: Consolidated 12 fragmented Jira Data Center and Azure DevOps instances into a single Jira Cloud Enterprise platform connected to Atlassian Access and GitHub Enterprise.

### The Results
* **Lead Time Reduction**: Reduced concept-to-cash Lead Time from 26 weeks to **2.4 weeks**.
* **Flow Efficiency Increase**: Improved Flow Efficiency from 8.5% to **38.2%**.
* **Defect Rate Drop**: Reduced production severity-1 incidents by **64%** due to automated CI/CD pipeline quality gates.
""",

    "chapters/part1_coaching/ch02_agile_coaching_mastery.md": """# Chapter 2: The Mastery of Agile Coaching

> *"Coaching is unlocking a person's or team's potential to maximize their own performance. It is helping them learn rather than teaching them."* — Timothy Gallwey

---

## 2.1 The Agile Coaching Competency Framework

The Agile Coaching Institute (ACI) framework, popularized by Lyssa Adkins, defines the multi-dimensional stance of the master coach: possessing a solid foundation in Agile/Lean practitioner knowledge, supported by four primary stances: **Coaching, Mentoring, Teaching, and Facilitating**, underpinned by three domain masteries: **Technical, Business, and Transformational Mastery**.

### Navigating the Four Primary Stances

1. **Teaching Stance**: Imparting new concepts or structural frameworks. Used when the coachee or team lacks basic knowledge (e.g., teaching a newly formed team how to write Gherkin BDD user stories or how to interpret a Cumulative Flow Diagram).
2. **Mentoring Stance**: Sharing real-world experience and domain expertise. Used when the coachee seeks advice based on the coach's past battle-tested scenarios ("In my previous enterprise transformation, when we faced cross-squad dependency bottlenecks in Jira, we implemented...").
3. **Professional Coaching Stance**: Partnering with coachees in a thought-provoking, creative process that inspires them to maximize their personal and professional potential without supplying the answer. Grounded in ICF core competencies.
4. **Facilitating Stance**: Maintaining a strictly neutral stance while guiding group interactions toward collaborative decision-making, consensus building, and conflict resolution.

---

## 2.2 ICF Competencies & Socratic Coaching

Enterprise Agile Coaching requires professional coaching capabilities derived from the International Coaching Federation (ICF) core competencies:

### The Professional Coaching Arc Structure
* **Step 1: Session Agreement**: Establish session agreement ("What specific outcome do you want to achieve in our conversation today?").
* **Step 2: Explore Reality**: Explore current reality and underlying system dynamics without judgment.
* **Step 3: Evoke Awareness**: Evoke awareness through powerful Socratic inquiry ("What are you avoiding seeing in this dependency friction?").
* **Step 4: Action Commitments**: Formulate actionable commitments and accountability measures.
* **Step 5: Synthesize & Close**: Reflect, synthesize learnings, and close session.

### Socratic Questioning Library for Agile Coaches

* **To uncover hidden impediments**: *"If this initiative failed 6 months from now, what would be the exact root cause?"*
* **To address team conflict**: *"What is the crucial conversation this team is actively avoiding right now?"*
* **To foster personal ownership**: *"What step will you take today that requires the most courage?"*
* **To shift from victim to actor mindset**: *"What sphere of influence do you have over this systemic blocker that you haven't exercised yet?"*

---

## 2.3 Psychological Safety & High-Performing Team Dynamics

Based on Google’s landmark *Project Aristotle* study, **Psychological Safety**—the shared belief that one will not be punished, humiliated, or ostracized for speaking up with ideas, questions, concerns, or mistakes—is the single strongest predictor of team performance and innovation velocity.

### Dr. Timothy R. Clark’s 4 Stages of Psychological Safety

1. **Inclusion Safety**: Members feel safe to belong, bring their authentic selves to work, and feel accepted regardless of role or background.
2. **Learner Safety**: Members feel safe to ask questions, experiment, give and receive feedback, and admit mistakes without fear of ridicule.
3. **Contributor Safety**: Members feel safe to use their skills to make a meaningful difference and contribute value autonomously.
4. **Challenger Safety**: Members feel safe to challenge the status quo, question executive decisions, and push back on bad requirements without fear of retaliation or career detriment.
""",

    "chapters/part1_coaching/ch03_enterprise_agile_coaching.md": """# Chapter 3: Enterprise Agile Coaching & Organizational Design

> *"Systemic problems require systemic solutions. Changing team ceremonies without changing enterprise architecture, funding models, and organizational design produces superficial transformation."*

---

## 3.1 Systems Thinking & Dave Snowden’s Cynefin Framework

Enterprise Agile Coaches operate across complex, multi-layered organizational systems. To avoid applying rigid, linear solutions to non-linear problems, coaches leverage Dave Snowden’s **Cynefin Framework** to diagnose problem domains before designing interventions.

* **Clear Domain**: Cause and effect are self-evident. Best practices apply. Approach: Sense -> Categorize -> Respond.
* **Complicated Domain**: Cause and effect are separated by time and space. Good practices and expert analysis apply (e.g., Jira DC database tuning). Approach: Sense -> Analyze -> Respond.
* **Complex Domain**: Cause and effect can only be perceived in hindsight. Emergent practices apply (e.g., Organizational culture shift, AI adoption). Approach: Probe -> Sense -> Respond.
* **Chaotic Domain**: No cause and effect relationship perceivable. Novel practices apply (e.g., Major production security outage). Approach: Act -> Sense -> Respond.

---

## 3.2 Change Management Frameworks for Enterprise Transformation

### Kotter’s 8-Step Change Model applied to Agile
1. **Create Urgency**: Highlight cycle time delays, customer attrition, and competitor velocity.
2. **Form a Powerful Guiding Coalition**: Align C-Suite sponsors, VP of Engineering, Head of Product, and Enterprise Coaches.
3. **Create a Vision for Change**: Establish clear targets for lead time reduction and release predictability.
4. **Communicate the Vision**: Conduct transparent town halls, transformation roadmaps, and open Q&A sessions.
5. **Empower Action**: Remove systemic blockers (e.g., rigid annual budgeting, single-sign-off approval bottlenecks).
6. **Create Short-Term Wins**: Pilot 2-3 Value Streams before enterprise-wide rollout.
7. **Build on the Change**: Expand from successful pilots to full portfolio domains.
8. **Anchor Changes in Culture**: Institutionalize flow metrics, career progression paths for Scrum Masters and Product Owners.
""",

    "chapters/part1_coaching/ch04_flow_engineering_metrics.md": """# Chapter 4: Flow Engineering, Metrics & Business Agility

> *"If you measure a team by velocity (story points), they will inflate story points. If you measure them by flow time and lead time, you measure true organizational capability."*

---

## 4.1 The 5 Essential Flow Metrics (Flow Framework)

Traditional Agile metrics (such as Story Point Velocity) are easily gaming-vulnerable and internal to teams. Flow Metrics provide an objective, system-level view of customer value delivery across Jira and Azure DevOps platforms.

1. **Flow Velocity**: Total number of Completed Work Items (Stories, Features, Defect Fixes) over a specific interval.
2. **Flow Time**: The total time elapsed from when a work item enters `In Progress` status to when it enters `Done` / `Released` status.
3. **Flow Load**: The total count of active work items currently in `In Progress` states across the value stream (measuring WIP accumulation).
4. **Flow Efficiency**: The ratio of active work time to total elapsed Flow Time.
5. **Flow Predictability**: Calculated via standard deviation and 85th/95th percentile distributions of completion rates.

$$\\text{Flow Efficiency} = \\left( \\frac{\\text{Active Work Time}}{\\text{Flow Time}} \\right) \\times 100\\%$$

---

## 4.2 Cumulative Flow Diagrams (CFD) Diagnostic Patterns

* **Bulging Band (Widening distance between lines)**: Work is accumulating in that state faster than downstream states can consume it (WIP bottleneck).
* **Flat Band (Horizontal lines)**: No work is moving through that state (Blocker or starved upstream).
* **Stair-step Band**: Work is being released in batch drops rather than continuous flow.
* **Decreasing Band**: Downstream states are processing work faster than upstream is feeding (starvation).

---

## 4.3 Monte Carlo Probabilistic Forecasting Engine

```python
import numpy as np
import pandas as pd

def run_monte_carlo_simulation(historical_throughput, remaining_backlog_items, num_simulations=10000):
    results = []
    for _ in range(num_simulations):
        days = 0
        items_completed = 0
        while items_completed < remaining_backlog_items:
            daily_throughput = np.random.choice(historical_throughput)
            items_completed += daily_throughput
            days += 1
        results.append(days)
    
    sim_data = pd.Series(results)
    
    print(f"--- MONTE CARLO FORECAST ({remaining_backlog_items} Items) ---")
    print(f"50% Likelihood (Median): {sim_data.quantile(0.50):.1f} Days")
    print(f"85% Likelihood (Target): {sim_data.quantile(0.85):.1f} Days")
    print(f"95% Likelihood (Commitment): {sim_data.quantile(0.95):.1f} Days")

# Historical throughput sample
historical_data = [1, 0, 2, 3, 1, 0, 0, 2, 4, 1, 2, 0, 3, 1, 2, 1, 0, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 2]
run_monte_carlo_simulation(historical_data, remaining_backlog_items=45)
```
""",

    "chapters/part2_jira_dc/ch05_jira_dc_architecture.md": """# Chapter 5: Jira Data Center Architecture & Administration

> *"Jira Data Center provides high availability, disaster recovery, and uncompromised performance at enterprise scale."*

---

## 5.1 Architecture & Node Topology

Jira Data Center operates as an active-active clustered architecture, distributing user traffic across multiple application nodes via an enterprise load balancer.

* **Load Balancer**: Manages session affinity or cookie-based routing across nodes (`AWS ALB` or `HAProxy`).
* **Application Nodes**: Linux nodes running Java Virtual Machines (JVMs) with tuned heap allocations (16GB–32GB RAM per node).
* **Shared File System (NFS / AWS EFS)**: Stores attachments, avatars, plugin data, and index snapshots shared across all cluster nodes.
* **Database (RDBMS)**: High-performance relational database (PostgreSQL 14+ recommended) with dedicated read replicas and connection pooling (`PgBouncer`).
* **Hazelcast Cluster Cache**: In-memory caching layer ensuring rapid state sync between nodes over private high-speed network interfaces.

---

## 5.2 Enterprise JVM Tuning & Database Optimization

```bash
# Recommended JVM Heap & GC Settings for Jira Data Center 9.x / 10.x
JVM_MINIMUM_MEMORY="16g"
JVM_MAXIMUM_MEMORY="16g"

JVM_SUPPORT_RECOMMENDED_ARGS="-server \
-XX:+UseG1GC \
-XX:+ExplicitGCInvokesConcurrent \
-XX:MaxGCPauseMillis=200 \
-XX:InitiatingHeapOccupancyPercent=45 \
-XX:G1ReservePercent=15 \
-XX:MinMetaspaceFreeRatio=50 \
-XX:MaxMetaspaceFreeRatio=80 \
-Djava.awt.headless=true \
-Datlassian.indexing.batch.size=100"
```

```ini
# PostgreSQL Parameters for High-Throughput Jira Data Center
max_connections = 500
shared_buffers = 16GB
effective_cache_size = 48GB
maintenance_work_mem = 2GB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
```
""",

    "chapters/part2_jira_dc/ch06_workflow_engineering_dc.md": """# Chapter 6: Enterprise Workflow Engineering & Custom Fields in DC

> *"A Jira workflow is an automated business process. When engineered cleanly, it guides teams seamlessly; when over-engineered, it paralyzes delivery."*

---

## 6.1 Transitions, Validators & ScriptRunner Groovy

Every Jira transition consists of three major execution phases: **Conditions** (is transition visible?), **Validators** (is input payload valid?), and **Post Functions** (execute state mutations).

### ScriptRunner Groovy Validator: Require Sub-tasks Completed
```groovy
import com.atlassian.jira.component.ComponentAccessor
import com.opensymphony.workflow.InvalidInputException

def subTasks = issue.getSubTaskObjects()
if (subTasks) {
    def unresolvedSubTasks = subTasks.findAll { subTask -> 
        subTask.getStatus().getStatusCategory().getKey() != "done" 
    }
    
    if (unresolvedSubTasks) {
        throw new InvalidInputException("Cannot transition parent item until all sub-tasks are resolved! Unresolved count: " + unresolvedSubTasks.size())
    }
}
```
""",

    "chapters/part2_jira_dc/ch07_portfolio_management_dc.md": """# Chapter 7: Portfolio Management & Advanced Roadmaps in Jira DC

> *"Enterprise agility is lost when team-level execution is disconnected from executive portfolio planning."*

---

## 7.1 Hierarchy & Dependency Management

Advanced Roadmaps enables multi-tiered enterprise portfolio structures: `Global Initiative (Level 3) -> Value Stream Epic (Level 2) -> Capability (Level 1) -> Jira Epic (Level 0) -> Story/Task (-1) -> Sub-task (-2)`.

* **Sequential Dependencies**: Issue B cannot start until Issue A completes. Visualized with red dependency links when scheduling conflicts occur.
* **Capacity Planning**: Calculated based on historical story point velocity or direct weekly hour availability per engineer.
""",

    "chapters/part2_jira_dc/ch08_jira_dc_apis_jql.md": """# Chapter 8: Data Center REST APIs, JQL Mastery & Reporting

> *"JQL is the query language of enterprise execution. Combined with REST APIs, it turns Jira into an intelligence engine."*

---

## 8.1 JQL Query Recipes & REST API Scripting

```jql
// Find stale active items untouched for 14+ days
project = "FIN" AND statusCategory = "In Progress" AND updated < -14d ORDER BY updated ASC

// Find orphaned stories lacking epic parent
project = "TRANSFORM" AND issueType in (Story, Task) AND "Epic Link" IS EMPTY AND statusCategory != Done
```

```python
import requests
import json

JIRA_URL = "https://jira.enterprise.com"
API_TOKEN = "YOUR_PAT_TOKEN"

response = requests.post(
    f"{JIRA_URL}/rest/api/2/search",
    headers={"Authorization": f"Bearer {API_TOKEN}", "Content-Type": "application/json"},
    json={"jql": 'project = "PAYMENT" AND status = "In Progress"', "maxResults": 50}
)
print("Fetched Active Issues:", len(response.json().get("issues", [])))
```
""",

    "chapters/part3_jira_cloud/ch09_jira_cloud_architecture.md": """# Chapter 9: Modern Jira Cloud Architecture & Platform Capabilities

> *"Jira Cloud is not just Jira hosted in the cloud; it is a multi-tenant platform with Atlassian Access, native automation, and global data residency."*

---

## 9.1 Platform Architecture & Atlassian Access

* **Atlassian Access**: Centralized SAML SSO, SCIM user provisioning, and automated domain enforcement across Okta, Azure AD, and Ping.
* **Company-Managed vs Team-Managed**: Company-Managed projects enforce centralized global workflows and permissions; Team-Managed projects grant autonomous squad-level configuration.
""",

    "chapters/part3_jira_cloud/ch10_automation_forge_cloud.md": """# Chapter 10: Advanced Jira Cloud Automation & Forge Extensions

> *"Jira Cloud Automation eliminates manual admin tasks, while Forge enables custom serverless cloud apps."*

---

## 10.1 Automation Engine & Atlassian Forge Code

### Smart Values Reference
* `{{issue.key}}`: Unique key of current issue.
* `{{issue.fields.summary}}`: Issue summary.
* `{{issue.assignee.displayName}}`: Assignee full name.

### Atlassian Forge App Handler (`src/index.jsx`)
```jsx
import ForgeUI, { render, Fragment, Text, IssuePanel, useProductContext } from '@forge/ui';

const App = () => {
    const context = useProductContext();
    return (
        <Fragment>
            <Text>**Target Key:** {context.extension.issueKey}</Text>
            <Text>**AI Quality Score:** 96/100 (INVEST Compliant)</Text>
        </Fragment>
    );
};

export const run = render(<IssuePanel><App /></IssuePanel>);
```
""",

    "chapters/part3_jira_cloud/ch11_jira_plans_assets_jsm.md": """# Chapter 11: Jira Cloud Premium/Enterprise: Plans, Assets & JSM

> *"Enterprise agility connects product delivery with operations (JSM) and CMDB asset intelligence (Assets)."*

---

## 11.1 Assets CMDB & Jira Service Management

```jql
// Query open incidents linked to Tier-1 infrastructure assets
project = "ITSM" AND "Affected Asset" HAVE (objectType = "Server" AND "Criticality" = "Tier 1")
```
""",

    "chapters/part3_jira_cloud/ch12_dc_to_cloud_migration.md": """# Chapter 12: Migration Strategy: Data Center to Jira Cloud

> *"Migrating an enterprise from Data Center to Cloud is an architectural transformation requiring rigorous planning."*

---

## 12.1 Pre-Migration Protocol & Cutover Script

```bash
#!/bin/bash
echo "=== LOCKING JIRA DATA CENTER INSTANCE ==="
curl -u admin:password -X PUT -H "Content-Type: application/json" \
  --data '{"readOnly": true}' \
  https://jira.enterprise.com/rest/api/2/config/read-only

echo "=== TRIGGERING JCMA MIGRATION PLAN ==="
curl -u admin:password -X POST \
  https://jira.enterprise.com/rest/migration/latest/plan/run/PLAN_ID_1024
```
""",

    "chapters/part4_azure_devops/ch13_azure_boards_process.md": """# Chapter 13: Azure Boards & Enterprise Process Architecture

> *"Azure Boards provides native enterprise scale out-of-the-box."*

---

## 13.1 Process Architecture & Custom Inherited Rules

```json
{
  "name": "Mandatory Root Cause Analysis on Bug Resolution",
  "conditions": [
    { "targetField": "System.State", "operator": "equals", "value": "Closed" },
    { "targetField": "System.WorkItemType", "operator": "equals", "value": "Bug" }
  ],
  "actions": [
    { "actionType": "makeRequired", "targetField": "Custom.RootCauseAnalysis" }
  ]
}
```
""",

    "chapters/part4_azure_devops/ch14_portfolio_delivery_plans.md": """# Chapter 14: Portfolio Planning, Delivery Plans & Dependencies in ADO

> *"Multi-team delivery across large enterprises requires visual dependency tracking."*

---

## 14.1 Delivery Plans 2.0 & WIQL Querying

```sql
SELECT [System.Id], [System.Title], [System.State], [System.AssignedTo]
FROM workitems
WHERE [System.TeamProject] = @project
  AND [System.IterationPath] = @CurrentIteration
  AND [System.WorkItemType] IN ('User Story', 'Bug')
ORDER BY [Microsoft.VSTS.Common.BacklogPriority] ASC
```
""",

    "chapters/part4_azure_devops/ch15_ado_pipelines_devex.md": """# Chapter 15: ADO Pipeline Integration, Azure Repos & Developer Flow

> *"Seamless integration between code commits, PRs, CI/CD pipelines, and Azure Boards creates a zero-friction developer experience."*

---

## 15.1 Git Commit Linking & DORA Metrics

```bash
git commit -m "Fix(Checkout): Resolve payment gateway null pointer AB#4289 fix #4289"
```

* **Deployment Frequency**: How often code is successfully deployed to production.
* **Lead Time for Changes**: Time from code commit to production release.
* **Mean Time to Restore (MTTR)**: Time required to recover from a production failure.
* **Change Failure Rate**: Percentage of deployments causing production degradation.
""",

    "chapters/part4_azure_devops/ch16_jira_ado_coexistence.md": """# Chapter 16: Jira vs. Azure DevOps Coexistence & Migration Matrix

> *"Enterprise acquisitions often result in dual-stack ecosystems."*

---

## 16.1 Webhook Middleware Sync Script

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook/jira-to-ado', methods=['POST'])
def sync_jira_to_ado():
    data = request.json
    issue_key = data['issue']['key']
    summary = data['issue']['fields']['summary']
    print(f"Syncing Jira issue {issue_key} to Azure DevOps: {summary}")
    return jsonify({"status": "Sync Initiated", "jiraKey": issue_key}), 200

if __name__ == '__main__':
    app.run(port=5000)
```
""",

    "chapters/part5_ai_ecosystem/ch17_generative_ai_llms.md": """# Chapter 17: Generative AI, LLMs & Agentic Architecture Essentials

> *"Artificial Intelligence is transitioning from passive analytics to active generative co-pilots."*

---

## 17.1 RAG Architecture for Enterprise Repositories

```python
from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer('all-MiniLM-L6-v2')

existing_stories = [
    "As a user, I want to reset my password using OTP via SMS.",
    "As a customer, I need to pay via PayPal on checkout."
]
embeddings = model.encode(existing_stories)

new_story = "As a shopper, I want to use PayPal during payment checkout."
new_emb = model.encode(new_story)

similarities = np.dot(embeddings, new_emb) / (np.linalg.norm(embeddings, axis=1) * np.linalg.norm(new_emb))
print(f"Similarity Score: {similarities[1]:.4f}")
```
""",

    "chapters/part5_ai_ecosystem/ch18_prompt_engineering_coaches.md": """# Chapter 18: Prompt Engineering Masterclass for Agile Coaches

> *"Prompt Engineering is the art of structuring intent so AI models act as empathetic coaches."*

---

## 18.1 System-User-Assistant Framework

* **System Persona**: Set stance (e.g. ICF Master Coach, Socratic Inquiry).
* **Context Input**: Pass retrospective notes, JQL output, or team metrics.
* **Constraints**: Enforce output format (Markdown tables, JSON, no blame language).
""",

    "chapters/part5_ai_ecosystem/ch19_agentic_ai_agile.md": """# Chapter 19: Agentic AI & Autonomous Assistants in Agile Frameworks

> *"Agentic AI creates autonomous agents capable of reasoning, executing tool calls, and resolving delivery friction."*

---

## 19.1 ReAct Pattern & CrewAI Orchestration

```python
from crewai import Agent, Task, Crew

scrum_master_agent = Agent(
    role="AI Scrum Master",
    goal="Identify board bottlenecks and enforce WIP limits.",
    backstory="Data-driven SM assistant specializing in flow metrics.",
    verbose=True
)

audit_task = Task(
    description="Scan current sprint board for items stuck > 5 days.",
    agent=scrum_master_agent
)

crew = Crew(agents=[scrum_master_agent], tasks=[audit_task])
```
""",

    "chapters/part5_ai_ecosystem/ch20_ai_ethics_governance.md": """# Chapter 20: AI Ethics, Governance & Change Management in Agile Teams

> *"Introducing AI into enterprise Agile teams without ethical guardrails leads to developer distrust."*

---

## 20.1 Enterprise AI Risk Safeguards

* **Data Privacy**: Zero Data Retention policies on Enterprise Azure OpenAI / AWS Bedrock tenants.
* **Human-in-the-Loop (HITL)**: Mandatory engineer review before committing AI-generated code or acceptance criteria.
""",

    "chapters/part6_ai_augmented_coach/ch21_ai_backlog_refinement.md": """# Chapter 21: AI-Powered Backlog Engineering & Story Refinement

> *"Refining a 500-item backlog manually takes hundreds of hours."*

---

## 21.1 SPIDR Story Splitting via OpenAI API

```python
import os
import openai

def split_epic(epic_description):
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "Split the following epic into 4 INVEST-compliant Gherkin stories using SPIDR."},
            {"role": "user", "content": epic_description}
        ]
    )
    return response.choices[0].message.content
```
""",

    "chapters/part6_ai_augmented_coach/ch22_ai_sprint_facilitation.md": """# Chapter 22: AI-Enhanced Facilitation: Sprint Planning, Retros & Standups

> *"AI-driven sentiment analysis and pattern recognition turn team comments into actionable facilitation blueprints."*

---

## 22.1 Retrospective Clustering & Async Standups

* Automatically cluster retrospective sticky notes by emotional sentiment and topic.
* Generate automated daily standup briefings highlighting unassigned active stories.
""",

    "chapters/part6_ai_augmented_coach/ch23_predictive_flow_analytics.md": """# Chapter 23: Predictive Analytics & AI-Driven Flow Optimization

> *"Predictive AI shifts Agile coaching from reactive post-mortems to proactive risk interception."*

---

## 23.1 Predictive Sprint Failure Model (Scikit-Learn)

```python
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# Training features: [Scope_Added, Blockers, WIP_Count, Leave_Days]
X_train = [[5, 0, 8, 2], [25, 3, 18, 5], [2, 0, 6, 0], [30, 4, 22, 4]]
y_train = [0, 1, 0, 1]

clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

current_sprint = [[22, 2, 19, 3]]
risk_prob = clf.predict_proba(current_sprint)[0][1]
print(f"Predicted Sprint Risk: {risk_prob * 100:.1f}%")
```
""",

    "chapters/part6_ai_augmented_coach/ch24_building_ai_coaching_agents.md": """# Chapter 24: Building Custom AI Coaching Agents & MCP Integrations

> *"Model Context Protocol (MCP) connects modern LLMs directly with enterprise tools like Jira DC, Jira Cloud, and Azure DevOps."*

---

## 24.1 Node.js / TypeScript MCP Server Implementation

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({ name: "agile-ai-coach-mcp", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "query_jira_issues",
      description: "Execute JQL query against Jira Cloud/DC.",
      inputSchema: { type: "object", properties: { jql: { type: "string" } }, required: ["jql"] }
    }
  ]
}));

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
```
"""
}

def run():
    print("Writing authentic, unique chapter files...")
    for rel_path, content in CHAPTERS_DATA.items():
        full_path = os.path.join(BASE_DIR, rel_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated clean chapter: {rel_path}")

if __name__ == "__main__":
    run()
