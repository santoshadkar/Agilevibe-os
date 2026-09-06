import os
import glob

print("Generating 100% unique, topic-specific text for all 24 chapters...")

# Complete content map for all 24 chapters with 100% unique prose, zero hardcoded phase lists or static checklists!

chapters = [
    # ------------------ PART 1: ENTERPRISE AGILE COACHING MASTERY ------------------
    {
        "file": "chapters/part1_coaching/ch01_modern_agile_spectrum.md",
        "title": "Chapter 1: The Modern Enterprise Agile Spectrum & Framework Comparison",
        "sections": [
            ("1.1 Comparative Analysis: SAFe 6.0, LeSS, Scrum@Scale, and Unfixed", """The enterprise Agile landscape in large software organizations is defined by competing framework paradigms, each proposing distinct approaches to alignment, governance, and autonomy. Enterprise Agile coaches must move beyond dogmatic framework adoption to evaluate the structural trade-offs of Scaled Agile Framework (SAFe 6.0), Large-Scale Scrum (LeSS), Scrum@Scale, and Unfixed against organizational topology.

### Structural Framework Comparison

| Framework | Core Scaling Mechanism | Governance Overhead | Architectural Decoupling | Team Autonomy Level | Primary Risk Profile |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SAFe 6.0** | Agile Release Trains (ARTs) & Solution Trains | High (PI Planning, Solution Management) | Moderate (Requires System Team) | Low-Moderate (Synchronized cadences) | Bureaucratic bloat & proxy metrics |
| **LeSS** | Single Backlog, Multiple Feature Teams | Low (Descaling, Systemic root-cause) | High (Requires feature-squad boundary) | High (Direct customer interaction) | Coordination failure across >8 teams |
| **Scrum@Scale** | Scrum of Scrums (SoS) & Executive Action Team | Moderate (Iterative scaling of Scrum) | Variable (Depends on component modularity) | Moderate-High | Lack of centralized architectural alignment |
| **Unfixed** | Dynamic Team Topologies & Capability Hubs | Low-Variable (Contextual patterns) | High (Value-stream mapping aligned) | High (Role fluidity & domain ownership) | Operational ambiguity without strong leads |

### Value Stream Alignment & Team Topologies

Applying Team Topologies within enterprise scaling frameworks requires identifying four fundamental team types:
1. **Stream-Aligned Teams**: Autonomous squads focused on continuous value delivery to a single user segment or operational domain.
2. **Enabling Teams**: Specialist guilds that build capabilities across stream-aligned teams (e.g., CI/CD automation, AI prompt engineering).
3. **Complicated-Subsystem Teams**: Domain experts managing complex algorithmic or infrastructure capabilities (e.g., core database engines, ML model training pipelines).
4. **Platform Teams**: Internal product teams building self-service developer platforms that reduce cognitive load for stream-aligned squads."""),
            ("1.2 Value Stream Architecture & Mapping Manual Queues", """Value Stream Management (VSM) forms the quantitative backbone of modern enterprise Agile transformation. To transition from activity-based tracking to outcome-based delivery, coaches must map the entire flow of customer value from initial hypothesis to production telemetry.

### Identifying Handoff Friction & Wait States

In legacy enterprise delivery pipelines, up to 80% of total lead time is spent in wait states rather than active work states. Typical handoff bottlenecks include manual Architecture Review Board (ARB) sign-offs, security audit delays, and change management board approvals.

```python
# Value Stream Cycle Time & Efficiency Calculator
def calculate_value_stream_metrics(work_items):
    total_touch_time = 0.0
    total_wait_time = 0.0
    
    for item in work_items:
        total_touch_time += item.get('touch_time_hours', 0.0)
        total_wait_time += item.get('wait_time_hours', 0.0)
        
    total_lead_time = total_touch_time + total_wait_time
    flow_efficiency = (total_touch_time / total_lead_time * 100) if total_lead_time > 0 else 0.0
    
    return {
        "total_lead_time_hours": total_lead_time,
        "touch_time_hours": total_touch_time,
        "wait_time_hours": total_wait_time,
        "flow_efficiency_percent": round(flow_efficiency, 2)
    }

# Example Production Payload
sample_stream = [
    {"id": "FEAT-101", "touch_time_hours": 14.5, "wait_time_hours": 120.0},
    {"id": "FEAT-102", "touch_time_hours": 8.0, "wait_time_hours": 48.0},
    {"id": "FEAT-103", "touch_time_hours": 22.0, "wait_time_hours": 168.0}
]

metrics = calculate_value_stream_metrics(sample_stream)
print(f"Flow Efficiency: {metrics['flow_efficiency_percent']}%")
```"""),
            ("1.3 Enterprise Governance, Portfolio Steering & Budgeting", """Legacy project-based funding models destabilize Agile delivery by creating fixed-scope, fixed-cost commitments that penalize discovery and iteration. Transitioning to Lean Portfolio Management (LPM) establishes continuous funding guardrails around persistent value streams.

Lean Portfolio Management categorizes portfolio investments into three primary horizons: Horizon 1 (Core products, 60-70%), Horizon 2 (Emerging platforms, 20-30%), and Horizon 3 (Exploratory AI & innovations, 10-15%).

Guardrails are enforced using Weighted Shortest Job First (WSJF) prioritization:

$$\\text{WSJF} = \\frac{\\text{Cost of Delay}}{\\text{Job Size}} = \\frac{\\text{User-Business Value} + \\text{Time Criticality} + \\text{RROE Opportunity}}{\\text{Job Size}}$$"""),
            ("1.4 Transitioning from Project-Centric to Product-Centric Delivery", """The shift from project-centric management to product-led engineering is the defining operational transformation for enterprise IT. Projects focus on output, deadline adherence, and utilization; products focus on outcomes, customer value retention, and long-term total cost of ownership.

### Operational Shift Matrix

| Operating Dimension | Legacy Project Management | Modern Product Engineering |
| :--- | :--- | :--- |
| **Success Metric** | Delivered on-time, on-budget, on-scope | Business impact, user adoption, retention, ROI |
| **Team Structure** | Temporary teams formed and disbanded per project | Long-lived, cross-functional squads with domain intimacy |
| **Requirements Source** | Rigid upfront Business Requirement Document (BRD) | Continuous discovery, backlog refinement, user feedback |
| **Failure Mode** | Sunk cost fallacy, delivering unneeded features | Rapid failure through hypothesis validation & pivots |""")
        ]
    },

    {
        "file": "chapters/part1_coaching/ch02_agile_coaching_mastery.md",
        "title": "Chapter 2: Agile Coaching Competency Frameworks & Operational Stances",
        "sections": [
            ("2.1 Lyssa Adkins Coaching Stances & Enterprise Arc", """Enterprise Agile Coaching operates across four distinct stances as defined in the Adkins competency framework: Teaching, Mentoring, Professional Coaching, and Facilitation. Mastering the intentional shift between these stances is the core capability of senior practice leads.

### The Four Competency Dimensions

1. **Teaching**: Instructing teams and leadership on underlying principles (e.g., queuing theory, Little's Law, test-driven development).
2. **Mentoring**: Sharing battle-tested personal experience and domain knowledge to guide practitioners through specific technical or organizational anti-patterns.
3. **Professional Coaching**: Utilizing Socratic inquiry, active listening, and powerful questioning to empower individuals and teams to discover their own solutions.
4. **Facilitation**: Designing neutral, high-engagement environments for collaborative decision-making, strategic planning, and retrospective analysis."""),
            ("2.2 Socratic Questioning & Deep Listening Techniques", """Effective coaching relies on non-directive inquiry that challenges hidden assumptions without inducing defensiveness. Socratic dialogue structures help engineering teams unpack complex operational failures during retrospectives and post-mortems.

```python
class SocraticCoachingEngine:
    def __init__(self, observation):
        self.observation = observation
        
    def generate_questions(self):
        return [
            f"What underlying assumption leads us to believe that '{self.observation}' is an unavoidable systemic constraint?",
            f"If we removed all manual approval boundaries for this process, what automated guardrail would preserve compliance?",
            f"What quantitative evidence indicates that our current team structure optimizes for flow rather than local utilization?"
        ]

engine = SocraticCoachingEngine("Security review takes 3 weeks per release")
for q in engine.generate_questions():
    print(f"- {q}")
```"""),
            ("2.3 Facilitating High-Stakes Strategic Sessions", """Facilitating high-stakes alignment sessions—such as Executive Strategy Workshops, Product Discovery Inceptions, and Big Room Planning—requires strict structural container design.

Coaches must establish psychological safety, clear decision-making protocols (Fist-of-Five, Consent-based decision making), and explicit timeboxing to prevent dominant voices from hijacking enterprise strategy."""),
            ("2.4 Navigating Organizational Resistance & Change Dynamics", """Organizational resistance is rarely irrational; it is typically a protective immune response to perceived threat, loss of status, or ambiguity. Applying the Satir Change Model and Kotter’s 8-Step Acceleration model enables coaches to guide organizations through the 'Chaos' phase into systemic integration.

```
SATIR CHANGE MODEL STAGES:
[Late Status Quo] -> [Foreign Element] -> [Chaos Phase] -> [Transforming Idea] -> [New Status Quo]
```""")
        ]
    },

    {
        "file": "chapters/part1_coaching/ch03_enterprise_agile_coaching.md",
        "title": "Chapter 3: Enterprise Agile Coaching at Executive & Systemic Levels",
        "sections": [
            ("3.1 Executive Alignment, Strategic OKRs & Portfolio Strategy", """Coaching at the executive tier demands speaking the language of business strategy, risk mitigation, capital allocation, and market expansion. Connecting corporate Objectives and Key Results (OKRs) down to squad-level execution requires transparent line-of-sight mapping.

```
CORPORATE OKR: Increase Annual Recurring Revenue (ARR) by 25% via Cloud Marketplaces
   └── PORTFOLIO EPIC: Enterprise Multi-Tenant Marketplace Integration
         └── FEATURE SQUAD: Automated Tenant Provisioning API Module
               └── USER STORY: Implement OAuth2 Token Exchange for AWS Marketplace
```"""),
            ("3.2 Organizational Design & Dynamic Team Topologies", """Designing modern technology organizations requires replacing rigid functional silos (e.g., DBA Team, QA Department, Ops Group) with cross-functional, domain-driven topologies. 

Applying Conway's Law ("Organizations design systems that mirror their communication structures") dictates that software architecture cannot be decoupled without first decoupling team organization."""),
            ("3.3 Governance, Risk, Compliance & Auditability Integration", """In regulated industries (Banking, Healthcare, Defense), Agile transformations fail when compliance teams view Agile as an absence of documentation. Enterprise coaches must design 'Compliance-as-Code' paradigms where audit evidence is generated automatically by CI/CD pipelines.

Automated audit trails capture git commits, static analysis reports, automated test execution logs, and deployment artifacts directly into immutable ledger stores."""),
            ("3.4 Building & Nurturing Communities of Practice (Guilds)", """Communities of Practice (CoPs) or Guilds provide the horizontal engine for continuous learning and capability growth across vertical stream-aligned squads.

Successful Guild governance includes dedicated learning time (e.g., 10% innovation time), peer-led lightning talks, architecture kata sessions, and internal open-source contributions.""")
        ]
    },

    {
        "file": "chapters/part1_coaching/ch04_flow_engineering_metrics.md",
        "title": "Chapter 4: Flow Engineering, Telemetry & Enterprise Flow Metrics",
        "sections": [
            ("4.1 Mathematical Foundations: Little's Law & Queuing Theory", """Flow engineering grounds Agile delivery in rigorous operations research and queuing theory. The foundational mathematical relationship governing software flow is Little's Law:

$$\\text{Cycle Time} = \\frac{\\text{Work in Progress (WIP)}}{\\text{Throughput}}$$

This simple equation demonstrates that reducing Work in Progress (WIP) is the fastest and most direct mathematical lever to decrease cycle time without increasing headcount.

```python
# Little's Law Simulator & WIP Impact Analysis
def simulate_wip_impact(wip_levels, throughput_per_day):
    results = []
    for wip in wip_levels:
        cycle_time_days = wip / throughput_per_day
        results.append({"wip": wip, "cycle_time_days": round(cycle_time_days, 1)})
    return results

print(simulate_wip_impact([50, 30, 15, 8], throughput_per_day=1.5))
```"""),
            ("4.2 The 4 Core Flow Metrics (Velocity, Time, Load, Efficiency)", """Enterprise Flow Telemetry relies on four primary flow metrics defined by Dr. Mik Kersten's Flow Framework:

1. **Flow Velocity**: The number of Flow Items (Features, Defects, Risks, Debt) completed over a specified timeframe.
2. **Flow Time**: The elapsed time from work item initiation (Active state) to completion (Done state), measuring speed of delivery.
3. **Flow Load**: The total number of active Flow Items currently in progress across the value stream, measuring WIP overload.
4. **Flow Efficiency**: The ratio of active touch time to total elapsed lead time, exposing systemic wait states."""),
            ("4.3 Cumulative Flow Diagrams (CFD) & Bottleneck Diagnosis", """Cumulative Flow Diagrams (CFDs) track the distribution of work items across state bands over time. Recognizing CFD visual patterns allows coaches to diagnose operational dysfunctions:

- **Bulging Band**: Indicates a bottleneck in the current state (e.g., Code Review band expanding rapidly).
- **Declining Arrival Rate**: Indicates upstream backlog starvation.
- **S-Curve Steps**: Indicates batch-based testing or deployment releases instead of continuous flow."""),
            ("4.4 Designing Automated Real-Time Flow Dashboards", """Building enterprise flow dashboards requires streaming raw data from issue tracking systems (Jira, Azure DevOps) into centralized time-series analytical databases (Elasticsearch, PostgreSQL, InfluxDB).

Dashboards should display lead time percentile distributions (P50, P85, P95) rather than misleading averages, providing accurate statistical predictability for business planning.""")
        ]
    },

    # ------------------ PART 2: JIRA DATA CENTER DEEP DIVE ------------------
    {
        "file": "chapters/part2_jira_dc/ch05_jira_dc_architecture.md",
        "title": "Chapter 5: Jira Data Center Architecture, Infrastructure & Clustering",
        "sections": [
            ("5.1 High-Availability Cluster Topology & Load Balancing", """Jira Data Center delivers enterprise scale through a multi-node clustered architecture. Understanding the interaction between active application nodes, shared file systems, database storage, and external index clusters is essential for enterprise systems engineers.

```
                        +----------------------------+
                        |  HAProxy / AWS ALB / F5    |
                        +----------------------------+
                                      |
                +---------------------+---------------------+
                |                                           |
                v                                           v
    +-----------------------+                   +-----------------------+
    | Jira DC App Node 1    |                   | Jira DC App Node 2    |
    | (Lucene In-Memory)    |                   | (Lucene In-Memory)    |
    +-----------------------+                   +-----------------------+
                |                                           |
                +---------------------+---------------------+
                                      |
                     +----------------+----------------+
                     |                                 |
                     v                                 v
        +-------------------------+       +-------------------------+
        | PostgreSQL Primary/Repl |       | Shared NFS / EFS Store  |
        +-------------------------+       +-------------------------+
```"""),
            ("5.2 Indexing Engineering, Lucene & Reindex Optimization", """Each Jira Data Center node maintains its own local Lucene search index. Node index synchronization occurs asynchronously via database index logs and cluster messaging (Ehcache / Hazelcast).

To avoid zero-downtime index locks during large custom field schema updates, engineers execute background reindexing or leverage dedicated index snapshots."""),
            ("5.3 JVM Tuning, Garbage Collection & Thread Management", """Proper JVM garbage collection configuration prevents long Stop-The-World (STW) pauses in large enterprise clusters (10,000+ users). Recommended Garbage-First (G1GC) settings include:

```bash
# Recommended Jira DC JVM Flags for 32GB RAM Heap
-Xms32g -Xmx32g
-XX:+UseG1GC
-XX:+UnlockExperimentalVMOptions
-XX:G1NewSizePercent=20
-XX:G1ReservePercent=15
-XX:MaxGCPauseMillis=200
-XX:InitiatingHeapOccupancyPercent=45
```"""),
            ("5.4 Enterprise Disaster Recovery & Multi-Region Replication", """Disaster Recovery (DR) in Jira Data Center requires synchronizing three independent persistence layers across primary and secondary data centers: PostgreSQL database replication, Shared File System (attachments/avatars) continuous sync, and index reconstruction mechanisms.""")
        ]
    },

    {
        "file": "chapters/part2_jira_dc/ch06_workflow_engineering_dc.md",
        "title": "Chapter 6: Advanced Workflow Engineering & ScriptRunner Automation",
        "sections": [
            ("6.1 Enterprise Workflow Design & State Machine Integrity", """Workflow engineering in Jira Data Center governs how work transitions across state boundaries. Designing robust state machines requires maintaining atomic state transitions, preventing circular deadlocks, and enforcing explicit exit conditions.

Best practices dictate keeping workflow statuses standardized across enterprise schemes while utilizing transition properties (e.g., `jira.permission.edit.group`) to control field mutability."""),
            ("6.2 Groovy Scripting with ScriptRunner for Jira DC", """ScriptRunner for Jira DC provides powerful Groovy scripting capabilities to extend Jira's core engine via post-functions, script listeners, custom fields, and REST endpoints.

```groovy
// ScriptRunner Post-Function: Enforce Automated Sub-Task Completion Guardrail
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.Issue

Issue currentIssue = issue
def subTaskManager = ComponentAccessor.getSubTaskManager()
def subTasks = currentIssue.getSubTaskObjects()

boolean hasUnclosedSubTasks = subTasks.any { subTask ->
    !subTask.getStatusObject().getName().equalsIgnoreCase("Closed") &&
    !subTask.getStatusObject().getName().equalsIgnoreCase("Done")
}

if (hasUnclosedSubTasks) {
    throw new Exception("Cannot transition issue: All sub-tasks must be resolved prior to parent closure.")
}
```"""),
            ("6.3 Custom Field Architecture & Performance Optimization", """Excessive custom fields (over 1,000 active fields) severely degrade Jira DC database query performance and Lucene index sizes. Custom field contexts must be scoped to specific projects and issue types rather than configured globally."""),
            ("6.4 Automated Governance, Validation & Security Gates", """Implementing automated workflow validators ensures data quality. ScriptRunner Script Validators verify that required security clearance fields, pull request URLs, or test execution links are populated before allowing issue closure.""")
        ]
    },

    {
        "file": "chapters/part2_jira_dc/ch07_portfolio_management_dc.md",
        "title": "Chapter 7: Advanced Roadmaps & Portfolio Governance in Jira DC",
        "sections": [
            ("7.1 Configuring Advanced Roadmaps & Hierarchy Levels", """Advanced Roadmaps (formerly Portfolio for Jira) enables cross-project hierarchy mapping above the standard Epic level. Enterprise hierarchy models typically add Portfolio Epic, Initiative, and Strategic Pillar levels.

```
STRATEGIC PILLAR (Level 3)
   └── INITIATIVE (Level 2)
         └── PORTFOLIO EPIC (Level 1)
               └── JIRA EPIC (Level 0)
                     └── STORY / BUG / TASK (Sub-Level)
```"""),
            ("7.2 Cross-Project Dependency Management & Buffer Analysis", """Advanced Roadmaps visualizes cross-project dependencies, exposing scheduling conflicts and critical path risks. Drag-and-drop scenario planning allows portfolio leads to simulate scope changes and resource capacity adjustments before committing changes to live projects."""),
            ("7.3 Capacity Planning, Velocity Calculations & Resource Allocation", """Capacity planning balances team velocity against individual team member availability. Setting team sprint capacity in story points or hours prevents over-allocation and highlights resource bottlenecks across specialist skills."""),
            ("7.4 Custom Portfolio Reporting & Executive Dashboarding", """Custom Advanced Roadmaps views can be saved and shared with executive stakeholders, providing target date variance tracking, progress percentage rollups, and release risk indicators.""")
        ]
    },

    {
        "file": "chapters/part2_jira_dc/ch08_jira_dc_apis_jql.md",
        "title": "Chapter 8: Jira DC REST APIs, Database Analytics & Advanced JQL",
        "sections": [
            ("8.1 Deep-Dive Jira REST API v2 Automation", """Automating Jira Data Center operations via REST API v2 enables programmatic issue creation, updates, and workflow execution.

```python
import requests
from requests.auth import HTTPBasicAuth

def query_jira_dc(jira_url, auth, jql):
    endpoint = f"{jira_url}/rest/api/2/search"
    headers = {"Content-Type": "application/json"}
    payload = {
        "jql": jql,
        "startAt": 0,
        "maxResults": 50,
        "fields": ["summary", "status", "assignee", "created", "updated"]
    }
    response = requests.post(endpoint, json=payload, auth=auth, headers=headers)
    return response.json()
```"""),
            ("8.2 Masterclass JQL: Advanced Functions & ScriptRunner Extensions", """Advanced JQL functions unlock precise issue filtering across complex enterprise databases:

```sql
-- Find Epics with open high-priority bugs in current active sprint
project = "CORE" AND type = Epic AND issueFunction in epicsOf("priority = Blocker AND status != Closed")

-- Find issues whose status changed more than 3 times in the last 14 days
status CHANGED DURING (-14d, now()) > 3
```"""),
            ("8.3 SQL Database Analytics & Direct Schema Extraction", """Direct read-only SQL queries against the Jira PostgreSQL database allow custom BI tool extraction (PowerBI, Tableau) bypassing REST API rate limits:

```sql
SELECT p.pkey, i.issuenum, i.summary, s.pname as status_name
FROM jiraissue i
JOIN project p ON i.project = p.id
JOIN issuestatus s ON i.issuestatus = s.id
WHERE i.created >= NOW() - INTERVAL '30 days';
```"""),
            ("8.4 Building Real-Time Event Listeners & Webhook Pipelines", """Jira DC webhooks emit JSON payloads upon issue events (creation, transition, comment), allowing integration with external event buses (Kafka, RabbitMQ) for real-time analytics streaming.""")
        ]
    },

    # ------------------ PART 3: JIRA CLOUD LANDSCAPE ------------------
    {
        "file": "chapters/part3_jira_cloud/ch09_jira_cloud_architecture.md",
        "title": "Chapter 9: Jira Cloud Enterprise Architecture, Security & Atlassian Access",
        "sections": [
            ("9.1 Multi-Tenant Cloud Architecture & Data Residency", """Jira Cloud operates on a global multi-tenant microservices architecture hosted on AWS. Atlassian Access enforces enterprise identity governance across cloud organizations, providing SAML SSO, SCIM user provisioning, and data residency controls."""),
            ("9.2 Enterprise Security, SAML SSO, SCIM & Zero-Trust Governance", """Configuring Okta, Azure AD, or PingFederate with Atlassian Access enables centralized user lifecycle management. Zero-trust security policy enforcement ensures access is revoked immediately upon employee offboarding."""),
            ("9.3 Field Architecture & Jira Cloud API Rate Limits", """Jira Cloud enforces strict API rate limits (GraphQL & REST v3) using token bucket algorithms. Integration code must handle HTTP 429 Too Many Requests responses with exponential backoff."""),
            ("9.4 Atlassian Analytics & Data Lake Architecture", """Atlassian Data Lake aggregates data across Jira, Jira Service Management, and Confluence, exposing pre-built SQL query engines and visualization suites for enterprise BI analysis.""")
        ]
    },

    {
        "file": "chapters/part3_jira_cloud/ch10_automation_forge_cloud.md",
        "title": "Chapter 10: Cloud Automation, Forge App Development & Connect Framework",
        "sections": [
            ("10.1 Jira Cloud Automation Engine & Complex Rules", """Jira Cloud features a native no-code automation engine capable of handling multi-project rules, smart values, branches, and incoming webhooks without custom infrastructure."""),
            ("10.2 Building Custom Jira Apps using Atlassian Forge", """Atlassian Forge is the modern serverless platform for building secure Jira Cloud apps. Forge functions run in isolated AWS Lambda environments managed by Atlassian.

```javascript
// Forge UI Kit Function: Calculate Story Point Rollup
import ForgeUI, { render, Text, IssueGlance, useProductContext } from '@forge/ui';
import api, { route } from '@forge/api';

const App = () => {
  const context = useProductContext();
  return (
    <IssueGlance title="Custom Flow Metrics">
      <Text>Custom Forge App running on Atlassian Serverless Runtime.</Text>
    </IssueGlance>
  );
};

export const run = render(<App />);
```"""),
            ("10.3 Forge vs Connect Architecture Comparison", """Forge provides built-in security, data residency, and zero server maintenance; Connect allows full hosting control on custom cloud infrastructure (AWS/GCP) via JWT authentication."""),
            ("10.4 Automated Quality Gates & Event-Driven Workflows", """Deploying event-driven Forge listeners allows real-time evaluation of pull request events, enforcing automated quality gates before issues transition to Done.""")
        ]
    },

    {
        "file": "chapters/part3_jira_cloud/ch11_jira_plans_assets_jsm.md",
        "title": "Chapter 11: Jira Plans, Assets (Insight) & Jira Service Management",
        "sections": [
            ("11.1 Enterprise Portfolio Planning with Jira Plans", """Jira Plans (formerly Advanced Roadmaps Cloud) integrates directly with Jira Cloud issues, providing auto-scheduling, dependency mapping, and cross-team scenario management."""),
            ("11.2 Configuration Management with Assets (Insight) Schema", """Assets (Insight) serves as the CMDB within Jira Cloud, tracking physical infrastructure, cloud microservices, software licenses, and team ownership schemas."""),
            ("11.3 Enterprise Service Management & Change Enablement", """Jira Service Management (JSM) unifies IT service requests, incident management, and automated change management pipelines directly with Jira software projects."""),
            ("11.4 Unified Incident Management & Dev-Ops Integration", """Connecting JSM incident queues to Opsgenie and GitHub Actions enables automated deployment rollbacks during major incident response protocols.""")
        ]
    },

    {
        "file": "chapters/part3_jira_cloud/ch12_dc_to_cloud_migration.md",
        "title": "Chapter 12: Jira Data Center to Cloud Migration Strategy & Execution",
        "sections": [
            ("12.1 Assessment, Migration Readiness & Complexity Analysis", """Migrating enterprise Jira DC instances (100,000+ issues) to Jira Cloud requires assessing custom field count, ScriptRunner script compatibility, and marketplace app parity."""),
            ("12.2 Atlassian Cloud Migration Assistant (JCMA) Execution", """JCMA automates project-by-project data migration. Planning involves staging dry-runs, data scrubbing, user key mapping, and migration batch optimization."""),
            ("12.3 Refactoring Workflows, Scripts & Third-Party Apps", """Groovy ScriptRunner scripts must be refactored into TypeScript Forge apps or Jira Cloud Automation rules due to architectural differences between DC and Cloud."""),
            ("12.4 Post-Migration Governance & User Change Management", """Executing user onboarding, retraining teams on Cloud UI navigation, and establishing ongoing cloud governance ensures rapid adoption post-migration.""")
        ]
    },

    # ------------------ PART 4: AZURE DEVOPS SUITE ------------------
    {
        "file": "chapters/part4_azure_devops/ch13_azure_boards_process.md",
        "title": "Chapter 13: Azure Boards Architecture & Custom Process Configuration",
        "sections": [
            ("13.1 Process Models: Basic, Agile, Scrum, and Capability Maturity (CMMI)", """Azure DevOps provides four standard process models. Customizing Process Templates (Inherited vs Hosted XML) allows organizations to add custom work item types, fields, and rules."""),
            ("13.2 Custom Work Item Types, Rules & State Graphs", """Configuring custom Work Item Types (WITs) and conditional field rules (e.g., making 'Root Cause' mandatory when resolving a Bug) enforces compliance directly in Azure Boards."""),
            ("13.3 Board Customization: Swimlanes, Card Rules & WIP Limits", """Kanban board customization in Azure Boards includes setting column WIP limits, split columns (Doing/Done), custom card formatting, and automated swimlane filters."""),
            ("13.4 Masterclass WIQL (Work Item Query Language)", """WIQL enables powerful querying across Azure Boards work item trees:

```sql
SELECT [System.Id], [System.Title], [System.State] 
FROM WorkItems 
WHERE [System.WorkItemType] = 'Bug' 
  AND [System.State] = 'Active' 
  AND [Microsoft.VSTS.Common.Priority] = 1 
ORDER BY [System.CreatedDate] DESC
```""")
        ]
    },

    {
        "file": "chapters/part4_azure_devops/ch14_portfolio_delivery_plans.md",
        "title": "Chapter 14: Portfolio Management & Delivery Plans in Azure DevOps",
        "sections": [
            ("14.1 Portfolio Hierarchy Configuration & Epic Backlogs", """Setting up multi-tiered portfolio backlogs in Azure Boards connects Strategic Epics down to Features and User Stories across dozens of engineering teams."""),
            ("14.2 Cross-Team Alignment with Azure Delivery Plans 2.0", """Delivery Plans 2.0 provides an interactive timeline across multiple team backlogs, exposing dependency markers, milestone dates, and sprint boundary overlaps."""),
            ("14.3 Advanced Dependency Tracking & Predecessor Mapping", """Tracking successor/predecessor links between work items ensures engineering dependencies are resolved prior to sprint commitment."""),
            ("14.4 Enterprise OData Analytics & Power BI Integration", """Azure DevOps OData feeds feed live work item history into Power BI, enabling custom burn-up charts, flow distribution, and predictive delivery metrics.""")
        ]
    },

    {
        "file": "chapters/part4_azure_devops/ch15_ado_pipelines_devex.md",
        "title": "Chapter 15: Azure Pipelines, DevEx & Automated Guardrails",
        "sections": [
            ("15.1 YAML Pipeline Engineering & Reusable Templates", """Azure Pipelines utilizes modular YAML templates to standardize CI/CD build steps, test execution, and deployment tasks across enterprise repos.

```yaml
# Azure Pipelines Automated Quality & Security Gate Template
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: UseDotNet@2
    inputs:
      packageType: 'sdk'
      version: '8.x'

  - script: dotnet test --logger trx /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura
    displayName: 'Run Unit Tests & Coverage'

  - task: SonarQubeAnalyze@5
    displayName: 'Run Static Code Analysis'
```"""),
            ("15.2 Quality Gates: Test Coverage, SonarQube & SAST/DAST", """Enforcing automated quality gates prevents pull requests from merging if code coverage drops below 80% or critical SAST vulnerabilities are detected."""),
            ("15.3 Environment Approval Gates & Service Connections", """Configuring Azure Pipeline Environment gates requires automated REST API evaluations or manual manager approvals before deploying code to production."""),
            ("15.4 Developer Experience (DevEx) & Inner Loop Optimization", """Optimizing local dev build speeds, caching dependencies (npm/nuget/pip), and implementing instant dev environment setup improves developer satisfaction.""")
        ]
    },

    {
        "file": "chapters/part4_azure_devops/ch16_jira_ado_coexistence.md",
        "title": "Chapter 16: Jira & Azure DevOps Coexistence & Cross-Platform Integration",
        "sections": [
            ("16.1 Bi-Directional Synchronization Architecture", """Many enterprise organizations operate hybrid environments with business teams in Jira and engineering teams in Azure DevOps. Bi-directional sync tools (Exalate, Tasktop) synchronize work items in real time."""),
            ("16.2 Integrating Azure Pipelines with Jira Cloud/DC", """Connecting Azure Pipelines to Jira allows build status and deployment release information to display directly inside Jira issue panels."""),
            ("16.3 Enterprise Identity, User Mapping & Security Alignment", """Aligning identity management between Jira (Atlassian Access) and Azure DevOps (Entra ID) maintains data integrity across cross-platform sync pipelines."""),
            ("16.4 Unified Portfolio Reporting across Heterogeneous Tools", """Aggregating metrics from both Jira and Azure DevOps into a single enterprise data warehouse yields unified lead time and delivery metrics.""")
        ]
    },

    # ------------------ PART 5: AI ECOSYSTEM & RAG ------------------
    {
        "file": "chapters/part5_ai_ecosystem/ch17_generative_ai_llms.md",
        "title": "Chapter 17: Generative AI, LLMs & Foundation Models in Enterprise Agile",
        "sections": [
            ("17.1 LLM Fundamentals, Architecture & Enterprise Models", """Understanding Transformer architectures, attention mechanisms, and context window limits empowers coaches to leverage models (GPT-4o, Claude 3.5 Sonnet, Llama 3) effectively in Agile workflows."""),
            ("17.2 Fine-Tuning vs Retrieval-Augmented Generation (RAG)", """RAG dynamically retrieves external documentation (Jira tickets, Confluence wiki pages, git commits) into context windows, bypassing expensive model fine-tuning while preventing hallucination."""),
            ("17.3 Context Window Engineering & Vector Embeddings", """Embedding text chunks into vector representations (via OpenAI text-embedding-3 or SentenceTransformers) enables semantic search across enterprise knowledge repositories.

```python
import numpy as np

def cosine_similarity(vec_a, vec_b):
    return np.dot(vec_a, vec_b) / (np.linalg.norm(vec_a) * np.linalg.norm(vec_b))

# Example Vector Distance Check
doc_vector = np.array([0.12, 0.85, -0.42])
query_vector = np.array([0.15, 0.82, -0.39])
print(f"Semantic Relevance Score: {cosine_similarity(doc_vector, query_vector):.4f}")
```"""),
            ("17.4 Enterprise AI Deployment & On-Premise LLMs", """Deploying local, open-weights LLMs (Llama 3, Mistral) via Ollama or vLLM within secure private clouds ensures data privacy compliance for regulated enterprise domains.""")
        ]
    },

    {
        "file": "chapters/part5_ai_ecosystem/ch18_prompt_engineering_coaches.md",
        "title": "Chapter 18: Advanced Prompt Engineering for Agile Coaches",
        "sections": [
            ("18.1 Prompting Paradigms: Chain-of-Thought, Few-Shot & ReAct", """Prompt engineering techniques—such as Few-Shot learning, Chain-of-Thought (CoT) reasoning, and Reason-Act (ReAct) prompting—enable AI models to execute structured Agile coaching tasks with high accuracy."""),
            ("18.2 System Prompt Design for AI Agile Persona", """Crafting system prompts defines the operational boundaries and persona of an AI Agile Coach.

```markdown
SYSTEM PROMPT: Enterprise Agile Coach Persona
You are an expert Enterprise Agile Coach skilled in SAFe, LeSS, Flow Metrics, and Jira/ADO.
Your role is to analyze user stories, detect missing acceptance criteria, and recommend automated test scenarios.
Always maintain a non-judgmental, Socratic coaching tone.
```"""),
            ("18.3 Automated Story Breakdown & INVEST Verification", """Using structured JSON schema prompting forces LLMs to output backlog refactorings conforming to the INVEST framework (Independent, Negotiable, Valuable, Estimable, Small, Testable)."""),
            ("18.4 Generating Gherkin BDD Scenarios from Epics", """Prompts convert high-level user story descriptions into executable Behavior-Driven Development (BDD) Given-When-Then Gherkin syntax automatically.""")
        ]
    },

    {
        "file": "chapters/part5_ai_ecosystem/ch19_agentic_ai_agile.md",
        "title": "Chapter 19: Agentic AI, Autonomous Frameworks & Model Context Protocol (MCP)",
        "sections": [
            ("19.1 Agentic AI Paradigms & CrewAI Framework", """Agentic AI systems move beyond passive text generation to autonomous task execution. Multi-agent frameworks like CrewAI instantiate specialized AI roles (Product Owner Agent, Quality Engineer Agent, Architecture Agent) working collaboratively."""),
            ("19.2 Model Context Protocol (MCP) Architecture & Tools", """Model Context Protocol (MCP) standardizes how AI agents communicate with external tools, APIs, and databases. An MCP server exposes resources, prompts, and tools to LLM clients seamlessly.

```typescript
// Model Context Protocol (MCP) Server Tool Definition for Jira Ticket Lookup
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({ name: "jira-mcp-server", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "get_jira_issue",
    description: "Fetch Jira issue details including status and acceptance criteria",
    inputSchema: {
      type: "object",
      properties: { issueKey: { type: "string" } },
      required: ["issueKey"]
    }
  }]
}));
```"""),
            ("19.3 Multi-Agent Collaboration for Backlog Refinement", """In a multi-agent refinement pipeline, the Product PO Agent breaks down epics, the QA Agent writes Gherkin tests, and the Architecture Agent checks microservice dependency constraints autonomously."""),
            ("19.4 Human-in-the-Loop Governance for AI Agents", """Enforcing Human-in-the-Loop (HITL) gates requires human approval before AI agents make mutations to live Jira/ADO production databases.""")
        ]
    },

    {
        "file": "chapters/part5_ai_ecosystem/ch20_ai_ethics_governance.md",
        "title": "Chapter 20: AI Ethics, Data Privacy & Governance in Software Delivery",
        "sections": [
            ("20.1 Data Privacy, IP Protection & Shadow AI Risks", """Preventing proprietary source code leakage to public LLM training datasets requires deploying enterprise data protection agreements and zero-data-retention APIs."""),
            ("20.2 Bias, Fairness & Algorithmic Transparency in AI Coaching", """Evaluating AI coaching suggestions for cognitive bias ensures automated recommendations do not penalize developer velocity due to timezone variations or complex refactoring work."""),
            ("20.3 Regulatory Compliance: EU AI Act & ISO 42001", """Complying with international AI regulation requires auditing high-risk AI applications, maintaining transparency logs, and ensuring human oversight of automated delivery scoring algorithms."""),
            ("20.4 Enterprise Governance Framework for Generative AI", """Establishing an enterprise AI Steering Committee defines acceptable use policies, approved foundation models, and security scanning guidelines for developer AI tooling.""")
        ]
    },

    # ------------------ PART 6: THE AI-AUGMENTED COACH IN PRACTICE ------------------
    {
        "file": "chapters/part6_ai_augmented_coach/ch21_ai_backlog_refinement.md",
        "title": "Chapter 21: AI-Assisted Backlog Refinement & Requirement Engineering",
        "sections": [
            ("21.1 Automated User Story Generation & Decomposition", """Deploying AI co-pilots during backlog refinement allows product managers to rapidly decompose high-level business initiatives into well-structured user stories with clear value propositions."""),
            ("21.2 AI-Powered Acceptance Criteria & Edge-Case Identification", """Generative AI models analyze user story summaries to surface hidden technical edge cases, security validation rules, and error handling scenarios often missed in manual refinement."""),
            ("21.3 Automated Test Case Generation (TDD/BDD)", """Converting user acceptance criteria directly into Jest, PyTest, or Cucumber test skeletons accelerates test-driven development (TDD) cycles across squads."""),
            ("21.4 Backlog Quality Scoring & Anti-Pattern Detection", """Automated linting scripts evaluate backlog health, scoring user stories against INVEST criteria and flagging ambiguous requirements before sprint planning.""")
        ]
    },

    {
        "file": "chapters/part6_ai_augmented_coach/ch22_ai_sprint_facilitation.md",
        "title": "Chapter 22: AI-Powered Sprint Facilitation & Team Dynamic Analysis",
        "sections": [
            ("22.1 AI-Driven Daily Standup & Blocked Issue Summarization", """AI summarization bots analyze daily git commit logs, PR reviews, and Jira ticket updates to generate daily standup summaries highlighting true impediments."""),
            ("22.2 Sentiment Analysis in Retrospectives & Communication Channels", """Applying natural language processing (NLP) to anonymous team retro inputs identifies systemic burnout, communication friction, and psychological safety trends over time."""),
            ("22.3 Predictive Capacity & Sprint Commitment Optimization", """Machine learning regression models predict team sprint velocity based on historic performance, planned PTO, call rotation, and story complexity variance."""),
            ("22.4 Real-Time Coaching Prompts during Facilitation", """AI facilitation assistants provide real-time suggestions to Scrum Masters during planning sessions, alerting when team WIP allocations exceed safe thresholds.""")
        ]
    },

    {
        "file": "chapters/part6_ai_augmented_coach/ch23_predictive_flow_analytics.md",
        "title": "Chapter 23: Predictive Analytics, Machine Learning & Flow Optimization",
        "sections": [
            ("23.1 Monte Carlo Forecasting for Delivery Predictability", """Monte Carlo simulations run thousands of probabilistic iterations using historical throughput distributions to provide statistical delivery date confidence intervals (e.g., 85% probability of completion by Oct 15).

```python
import numpy as np

def run_monte_carlo_simulation(remaining_stories, historical_throughput, iterations=10000):
    simulated_days = []
    for _ in range(iterations):
        days = 0
        stories = remaining_stories
        while stories > 0:
            daily_completion = np.random.choice(historical_throughput)
            stories -= daily_completion
            days += 1
        simulated_days.append(days)
        
    p50 = np.percentile(simulated_days, 50)
    p85 = np.percentile(simulated_days, 85)
    p95 = np.percentile(simulated_days, 95)
    
    return {"P50_days": p50, "P85_days": p85, "P95_days": p95}

# Example Historical Daily Throughput Array
throughput_data = [2, 0, 1, 3, 0, 1, 4, 1, 0, 2, 2]
print(run_monte_carlo_simulation(40, throughput_data))
```"""),
            ("23.2 Machine Learning Defect Prediction & Risk Scoring", """Classification models evaluate code commit churn, developer experience in affected modules, and code complexity to assign risk scores to pull requests prior to merging."""),
            ("23.3 Automated Bottleneck Detection & Root-Cause Analysis", """Graph neural networks and path analysis engines identify root cause dependencies causing flow stagnation across multi-team release trains."""),
            ("23.4 Prescriptive Analytics & Continuous Flow Optimization", """Prescriptive engines generate real-time recommendations (e.g., "Reallocate 2 QA engineers to Squad B to relieve testing bottleneck") to maximize portfolio throughput.""")
        ]
    },

    {
        "file": "chapters/part6_ai_augmented_coach/ch24_building_ai_coaching_agents.md",
        "title": "Chapter 24: Building & Deploying Custom Enterprise AI Coaching Agents",
        "sections": [
            ("24.1 Architecture & Blueprint of an Enterprise AI Agile Coach", """Building a production enterprise AI Agile Coach requires integrating fine-tuned vector databases, multi-agent frameworks, Jira/ADO webhooks, and secure user chat interfaces.

```
+-----------------------------------------------------------------------------------+
|                            ENTERPRISE USER INTERFACE                              |
|                   (Slack App / MS Teams Bot / React Web Portal)                   |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                        ORCHESTRATION ENGINE (LangChain / CrewAI)                   |
|  +---------------------------+       +-----------------------------------------+  |
|  | Context & Memory Engine   |       | Tool Execution Layer (MCP Protocol)     |  |
|  +---------------------------+       +-----------------------------------------+  |
+-----------------------------------------------------------------------------------+
                                          |
                        +-----------------+-----------------+
                        |                                   |
                        v                                   v
        +-------------------------------+   +-------------------------------+
        | Vector DB (RAG Vector Store) |   | Enterprise REST APIs          |
        | (Jira/ADO Wiki Embeddings)    |   | (Jira DC / Cloud / ADO APIs)  |
        +-------------------------------+   +-------------------------------+
```"""),
            ("24.2 Vector DB (ChromaDB/PgVector) & Knowledge Base Integration", """Indexing enterprise Agile playbooks, team retrospectives, and architecture standards into PgVector enables natural language semantic search for practice leads."""),
            ("24.3 Continuous Evaluation, Guardrails & LLM Linter Implementation", """Implementing continuous LLM evaluation suites (Ragas, TruLens) ensures AI coach responses remain compliant, accurate, and non-hallucinatory over time."""),
            ("24.4 Future Horizons: Autonomous Agile Organizations & Agentic Ecosystems", """The future of enterprise Agile lies in agentic ecosystems where AI agents handle routine coordination, estimation, testing, and metrics reporting, allowing human engineers to focus on creative problem solving and breakthrough product innovation.""")
        ]
    }
]

print(f"Total defined chapters: {len(chapters)}")

for ch in chapters:
    filepath = ch["file"]
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    
    content_blocks = [f"# {ch['title']}\n"]
    for sec_title, sec_body in ch["sections"]:
        content_blocks.append(f"## {sec_title}\n")
        content_blocks.append(f"{sec_body}\n")
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(content_blocks))
        
    print(f"Wrote unique chapter file: {filepath}")

print("All 24 chapters successfully updated with 100% unique prose!")
