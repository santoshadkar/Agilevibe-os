import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

ALL_QUIZZES = {
    # PART I
    "ch01_modern_agile_spectrum.md": (
        "1",
        [
            "Scaling frameworks (SAFe 6.0, LeSS, Scrum@Scale, Unfixed) require matching enterprise architectural complexity with organizational design rather than forcing monolithic blueprints.",
            "SAFe 6.0 provides prescriptive governance and alignment for heavily regulated environments, whereas LeSS maximizes squad autonomy by stripping away middle-management synchronization layers.",
            "Quantitative flow mapping and value stream identification must precede tool configuration in Jira or Azure DevOps to prevent automating existing organizational anti-patterns."
        ],
        [
            ("An enterprise with 50 squads in a highly regulated financial services sector suffers from severe cross-team compliance bottlenecks. Which scaling framework configuration offers the most explicit governance structure for regulatory alignment?",
             ["A) Single-team Scrum with ad-hoc Slack syncs", "B) SAFe 6.0 with Large Solution Train & Compliance Guardrails", "C) Unfixed Framework with fully fluid team allocation", "D) Pure LeSS Huge without governance layers"],
             "B", "SAFe 6.0 explicitly provides Solution Train and Compliance guardrail patterns designed specifically for audit-heavy, highly regulated environments requiring formal compliance verification."),
            ("What is the primary operational trade-off when adopting Large-Scale Scrum (LeSS) over SAFe 6.0 in an enterprise technology division?",
             ["A) LeSS increases middle-management overhead", "B) LeSS requires higher engineering capability and feature-team domain flexibility while drastically reducing management roles", "C) LeSS mandates mandatory quarterly PI Planning events", "D) LeSS enforces rigid release train cadences"],
             "B", "LeSS descales organizational complexity by eliminating intermediate management layers, which demands highly autonomous feature teams capable of working across the entire codebase."),
            ("When conducting Value Stream Identification across a multi-tier technology organization, what is the most critical metric to optimize first?",
             ["A) Total lines of code written per sprint", "B) Individual developer utilization percentage", "C) Value Stream Lead Time and Flow Efficiency (Touch Time vs. Wait Time)", "D) Number of Jira tickets closed per squad"],
             "C", "Optimizing Flow Efficiency and reducing wait time between handoffs yields the highest systemic acceleration in value delivery, whereas optimizing individual utilization increases queue sizes and lead times."),
            ("A practice lead notices that squads are experiencing massive dependency blockages despite adopting Scrum@Scale. What is the root dynamic at play?",
             ["A) The Executive Action Team (EAT) is meeting too frequently", "B) Teams are component-bound rather than feature-aligned, causing mandatory cross-team coordination queues", "C) Scrum of Scrums (SoS) meetings lack PowerPoint slides", "D) Teams are using story points instead of throughput"],
             "B", "Scrum@Scale relies on modular, autonomous Scrum teams. Component-bound teams create structural handoffs and inter-team dependencies that no scaling framework ceremony can eliminate without organizational redesign.")
        ]
    ),
    "ch02_agile_coaching_mastery.md": (
        "2",
        [
            "Agile coaching mastery requires fluidly shifting across 8 core stances (Teacher, Mentor, Coach, Facilitator, Technical Advisor, Business Partner, Transformation Leader, Change Agent) based on domain context.",
            "Neutrality is the foundation of professional coaching: guiding leaders and teams to discover their own solutions prevents learned helplessness and builds organizational resilience.",
            "Socratic inquiry paired with empirical data (cycle time, CFD, throughput) moves retrospective discussions away from emotional speculation toward actionable system optimization."
        ],
        [
            ("A senior Product Owner insists that the Agile Coach dictate how the engineering squad should estimate backlog items. Which coaching stance should the coach adopt?",
             ["A) Technical Stance: Force the team to use Fibonacci story points", "B) Neutral Facilitator & Socratic Coach: Ask powerful questions to guide the PO and squad to establish their own agreed estimation definition", "C) Dictatorial Stance: Mandate no estimates", "D) Passive Observer Stance: Ignore the request completely"],
             "B", "Coaching mastery involves maintaining neutrality and using Socratic inquiry to build team ownership and consensus rather than imposing personal preferences."),
            ("During a high-friction retrospective, two team members argue over code review delays. How should an enterprise coach intervene?",
             ["A) Take a side and rule in favor of the senior developer", "B) Shift to Facilitator mode, project empirical Pull Request cycle-time metrics on screen, and guide the team to diagnose system bottlenecks objectively", "C) Cancel the retrospective immediately", "D) Escalate the dispute to human resources"],
             "B", "Anchoring coaching interventions in empirical telemetry (PR cycle time) de-escalates interpersonal friction and shifts focus to objective workflow optimization."),
            ("What differentiates the Mentoring stance from the Professional Coaching stance?",
             ["A) Mentoring involves sharing personal expertise and domain guidance, while Professional Coaching facilitates self-directed discovery without offering direct solutions", "B) Mentoring is only for executives, while Coaching is only for developers", "C) Mentoring requires Jira certification, while Coaching requires AWS certification", "D) There is no difference between the two stances"],
             "A", "Mentoring transfers specific subject matter experience from mentor to mentee, whereas Professional Coaching assumes the client possesses the answers and facilitates internal discovery."),
            ("An Enterprise Agile Coach working with C-suite executives encounters resistance to decentralized decision-making. What is the most effective approach?",
             ["A) File a formal grievance with the board of directors", "B) Use strategic Socratic coaching linked to business Agility metrics (Time-to-Market, Cost of Delay) to demonstrate the financial impact of centralized approval bottlenecks", "C) Force executives to take a 3-day Scrum Master course", "D) Unilaterally change executive approval workflows in Jira"],
             "B", "Executive alignment requires connecting organizational governance changes directly to high-level financial and market performance metrics like Cost of Delay.")
        ]
    ),
    "ch03_enterprise_agile_coaching.md": (
        "3",
        [
            "Applying Team Topologies (Stream-aligned, Enabling, Complicated-Subsystem, Platform) reduces team cognitive load and creates clear boundary APIs between squads.",
            "Line-of-sight from strategic executive OKRs down to squad-level backlog items requires explicit hierarchy mapping in Jira Cloud Plans or Azure DevOps Delivery Plans.",
            "Enterprise transformation fails when structural realignment is decoupled from governance evolution and leadership capability development."
        ],
        [
            ("A software engineering department suffers from high cognitive load across all squads because every team must maintain specialized Kubernetes infrastructure alongside feature code. Which Team Topologies pattern addresses this?",
             ["A) Create 10 more Stream-Aligned Teams", "B) Establish a dedicated Platform Team that provides infrastructure as an internal Self-Service API", "C) Eliminate all engineering roles", "D) Require all teams to work 60 hours a week"],
             "B", "Platform Teams build self-service internal developer platforms that abstract complex infrastructure, reducing cognitive load for Stream-Aligned feature teams."),
            ("How does an Enterprise Agile Coach establish unbroken line-of-sight between C-suite strategic goals and daily squad execution?",
             ["A) By requiring developers to send daily email reports to the CEO", "B) By structuring a multi-tier portfolio hierarchy in Jira/ADO linking Strategic OKRs -> Portfolio Epics -> Features -> User Stories", "C) By eliminating User Stories and only tracking OKRs", "D) By hosting a weekly 4-hour meeting with all 500 employees"],
             "B", "Hierarchical parent-child linking in enterprise tooling ensures every user story traces directly back to an overarching corporate strategic initiative."),
            ("An organization creates an 'Enabling Team' during their AI transformation. What is the primary mandate of this team?",
             ["A) To write all production code for feature squads", "B) To capability-build and upskill Stream-Aligned teams in emerging domains (e.g., AI/LLM engineering) until the squads become self-sufficient", "C) To act as a permanent approval gate for all code commits", "D) To manage employee payroll and benefits"],
             "B", "Enabling Teams are temporary capability incubators that cross-skill feature squads in specialized domains before stepping back."),
            ("What is the principal indicator that an enterprise organizational redesign has succeeded?",
             ["A) Increase in total org chart boxes and job titles", "B) Reduction in cross-team dependencies, decreased Lead Time for changes, and improved Flow Efficiency", "C) 100% attendance at quarterly town halls", "D) Total deprecation of all documentation"],
             "B", "Organizational design success is measured by telemetry: reduced inter-team handoffs, faster Lead Time, and streamlined value delivery.")
        ]
    ),
    "ch04_flow_engineering_metrics.md": (
        "4",
        [
            "Quantitative flow metrics (Cycle Time, Lead Time, Throughput, Work-in-Progress, Flow Efficiency) reveal systemic bottlenecks far more accurately than subjective estimates.",
            "Cumulative Flow Diagrams (CFD) visually expose workflow instability: widening bands indicate expanding WIP and rising lead times, while flat bands highlight starvation or blocking.",
            "Applying Little's Law ($Average Lead Time = WIP / Throughput$) demonstrates that capping Work-in-Progress is the mathematically guaranteed path to accelerating delivery speed."
        ],
        [
            ("On a Cumulative Flow Diagram (CFD), the band representing 'In QA Review' is widening continuously while the 'Done' band remains flat. What does this mathematical signature indicate?",
             ["A) QA team is delivering code too fast", "B) Work-in-Progress is accumulating in QA, creating a severe bottleneck and increasing overall Lead Time", "C) The project is ahead of schedule", "D) Story point velocity is increasing"],
             "B", "A widening band on a CFD indicates accumulating WIP at that specific workflow stage, which directly increases average lead time according to Little's Law."),
            ("A squad has an average WIP of 20 work items and a stable Throughput of 4 items per day. According to Little's Law, what is the squad's average Lead Time?",
             ["A) 80 days", "B) 5 days", "C) 0.2 days", "D) 24 days"],
             "B", "Little's Law: $Lead Time = WIP / Throughput$. $20 / 4 = 5$ days."),
            ("A team spends 10 hours actively coding a feature, but the feature sits in queues waiting for reviews and deployments for 90 hours. What is the team's Flow Efficiency?",
             ["A) 90%", "B) 10%", "C) 50%", "D) 100%"],
             "B", "Flow Efficiency = (Active Touch Time / Total Lead Time) * 100 = (10 / (10 + 90)) * 100 = 10%."),
            ("Why is optimizing story point velocity across multiple squads considered an anti-pattern in enterprise Flow Engineering?",
             ["A) Story points are unitless, subjective estimates that vary between teams and encourage point inflation rather than actual value delivery", "B) Velocity is illegal under SAFe 6.0", "C) Story points require expensive software licenses", "D) Velocity can only be calculated in Python"],
             "A", "Story points are relative team estimates. Comparing velocity across teams leads to artificial point inflation and destroys honest estimation.")
        ]
    ),
    # PART II
    "ch05_jira_dc_architecture.md": (
        "5",
        [
            "Jira Data Center active-active clustering requires dedicated high-bandwidth interconnects, shared Hazelcast distributed caching, and a shared NFS file system.",
            "Database pool tuning (HikariCP/Commons-DBCP) and index replication optimization are essential to support 10,000+ concurrent enterprise users without thread exhaustion.",
            "High-availability disaster recovery (HA/DR) architectures demand automated DB read-replica failover and zero-downtime upgrades (ZDU)."
        ],
        [
            ("What technology handles real-time node state synchronization and distributed cache replication across Jira Data Center cluster nodes?",
             ["A) Apache Kafka", "B) Hazelcast", "C) Redis Enterprise", "D) RabbitMQ"],
             "B", "Hazelcast is embedded in Jira Data Center for cluster node discovery, distributed caching, and real-time state synchronization."),
            ("During a spike to 8,000 concurrent users, Jira DC node CPU utilization is low, but HTTP request threads are blocked waiting for DB connections. How should the administrator resolve this?",
             ["A) Increase Hazelcast memory by 100GB", "B) Tune the HikariCP database connection pool size and increase PostgreSQL max_connections", "C) Add 50 more Jira cluster nodes", "D) Disable all custom fields"],
             "B", "Thread contention for database connections indicates HikariCP pool exhaustion, which is resolved by tuning connection pool sizing relative to DB resources."),
            ("Which shared storage configuration is required across all Jira Data Center nodes for attachments and avatars?",
             ["A) Local SSD on each node without sync", "B) Shared Network File System (NFSv4) or AWS EFS mounted across all cluster nodes", "C) USB flash drive attached to node 1", "D) FTP server running on port 21"],
             "B", "Jira DC architecture mandates a high-performance shared file system (NFSv4/EFS) accessible to all cluster nodes for shared artifacts."),
            ("What is the primary benefit of Zero Downtime Upgrades (ZDU) in Jira Data Center?",
             ["A) It doubles the database index size automatically", "B) It allows cluster nodes to be upgraded sequentially to new bug-fix versions without taking the entire site offline", "C) It deletes stale user accounts during upgrade", "D) It renames all custom fields to uppercase"],
             "B", "ZDU puts Jira DC into mixed-mode, allowing nodes to be upgraded one by one while keeping the site active for end users.")
        ]
    ),
    "ch06_workflow_engineering_dc.md": (
        "6",
        [
            "Jira DC workflow engineering requires structuring clean state machines, explicit transition properties (`jira.permission.*`), and ScriptRunner validation hooks.",
            "Custom field bloat drastically degrades database indexing speed; field contexts and global field reduction must be actively governed.",
            "Automated post-functions should leverage asynchronous event listeners to avoid blocking user UI thread execution during complex issue transitions."
        ],
        [
            ("An enterprise team needs to restrict the 'Approve Budget' workflow transition in Jira DC strictly to users with the 'Finance Leads' project role. Which mechanism enforces this cleanly?",
             ["A) A plain text custom field", "B) Workflow Transition Condition using 'User Is In Project Role'", "C) Sending an email to the Scrum Master", "D) Creating a secondary Jira project"],
             "B", "Workflow Conditions prevent the transition button from rendering unless the executing user meets the defined criteria (e.g., project role membership)."),
            ("A ScriptRunner workflow Validator fails when a user transitions an issue. What happens to the issue transition?",
             ["A) The issue transitions anyway, but logs an error", "B) The transition is blocked, changes are rolled back, and an error message displays on the user screen", "C) The Jira database crashes immediately", "D) The issue is deleted"],
             "B", "Validators execute before transition commit; if validation fails, the transition is aborted and an error prompt is returned to the user."),
            ("Why does accumulating over 1,000 global custom fields cause severe performance degradation in Jira DC?",
             ["A) Custom fields consume all CPU memory instantly", "B) Every global custom field creates entries in `customfieldvalue` and expands Lucene indexing overhead on every issue create/update", "C) Jira limits custom fields to exactly 50", "D) Custom fields disable dark mode"],
             "B", "Global custom fields force Lucene to index empty values across all issues in all projects, causing massive index size inflation and search lag."),
            ("What is the recommended practice for executing long-running REST API calls during a workflow transition in Jira DC?",
             ["A) Run them synchronously inside a workflow post-function", "B) Offload execution to an asynchronous ScriptRunner Event Listener bound to `IssueEvent`", "C) Put the script in a custom field description", "D) Block the user interface for 60 seconds"],
             "B", "Offloading heavy tasks to asynchronous Event Listeners prevents thread blocking on the primary user HTTP request thread during transition.")
        ]
    ),
    "ch07_portfolio_management_dc.md": (
        "7",
        [
            "Advanced Roadmaps in Jira DC enables multi-tier portfolio hierarchies (Strategic Theme -> Portfolio Epic -> Solution Epic -> Feature -> Story).",
            "Unconstrained capacity planning using target start/end dates and team velocity auto-scheduling reveals realistic delivery milestone timelines.",
            "Cross-project dependency mapping highlights critical paths and warns of schedule conflicts before release dates are committed."
        ],
        [
            ("In Advanced Roadmaps (Jira DC), how is an unestimated Epic scheduled across multiple sprints during auto-scheduling?",
             ["A) It is deleted automatically", "B) Advanced Roadmaps uses configured default target duration or team historical velocity estimates to project dates", "C) It schedules the Epic on yesterday's date", "D) It requires manual database insertion"],
             "B", "Auto-scheduling algorithms calculate timeline placement based on configured default estimates, team velocity, and explicit parent-child dependencies."),
            ("What occurs when a dependency conflict exists in Advanced Roadmaps (e.g., Feature B starts before dependent Feature A finishes)?",
             ["A) Jira sends a SMS to the CEO", "B) A visual red warning indicator highlights the schedule conflict on the timeline view", "C) Both features are deleted", "D) The sprint is closed automatically"],
             "B", "Advanced Roadmaps continuously validates dependency timelines and flags violations with red highlight warnings across the portfolio view."),
            ("How do Portfolio Managers configure a custom hierarchy level (e.g., 'Initiative') above 'Epic' in Jira DC?",
             ["A) By editing PostgreSQL tables directly", "B) In Jira Administration -> Advanced Roadmaps Hierarchy Settings, linking custom issue types to new hierarchy levels", "C) It is impossible to add levels above Epic", "D) By installing Microsoft Excel"],
             "B", "Jira Administrators define custom hierarchy levels in Advanced Roadmaps configuration by assigning custom issue types to hierarchy tiers above Epic."),
            ("Why should portfolio plans use 'Target Dates' instead of standard 'Due Date' fields for strategic scheduling?",
             ["A) Target Dates support roll-up algorithms across parent-child hierarchies without overwriting squad-level issue due dates", "B) Due Date only works in Jira Cloud", "C) Target Dates are encrypted", "D) Due Date crashes Lucene search"],
             "A", "Target Start/End dates allow portfolio planners to simulate and calculate hierarchy roll-ups independently of team-managed due dates.")
        ]
    ),
    "ch08_jira_dc_apis_jql.md": (
        "8",
        [
            "Advanced JQL functions (`WAS IN`, `CHANGED`, `membersOf()`) enable powerful historical state auditing and dynamic reporting across issue datasets.",
            "Jira DC REST API v2 provides structured JSON endpoints for automated issue manipulation, bulk operations, and ScriptRunner REST endpoint creation.",
            "Webhook event streaming integrated with message queues (Kafka/RabbitMQ) powers real-time enterprise telemetry and reporting dashboards."
        ],
        [
            ("Which JQL query identifies all issues that were moved into the 'In Progress' status by a member of the 'DevOps-Leads' group during the month of August?",
             ["A) status = 'In Progress' AND team = DevOps", "B) status WAS IN ('In Progress') BY membersOf('DevOps-Leads') DURING ('2026-08-01', '2026-08-31')", "C) issueType = Bug AND status = Done", "D) project = DEV AND user in DevOps"],
             "B", "The `WAS IN` operator combined with `BY membersOf()` and `DURING` allows precise historical temporal auditing in JQL."),
            ("When querying the Jira DC REST API v2 `/rest/api/2/search` for 50,000 issues, what pagination strategy prevents Out-Of-Memory (OOM) errors?",
             ["A) Requesting `maxResults=50000` in a single HTTP call", "B) Iterating with `startAt` and `maxResults=200` parameter chunks", "C) Downloading the database backup file", "D) Disabling API security authentication"],
             "B", "Paging API queries in controlled chunks (e.g., 200 items per request) avoids overloading JVM heap memory during large data extractions."),
            ("What is the primary function of a custom ScriptRunner REST Endpoint in Jira DC?",
             ["A) To replace the Jira login screen", "B) To expose custom lightweight, authenticated Groovy services that execute complex server-side business logic and return JSON", "C) To host static HTML websites", "D) To compile C++ binary files"],
             "B", "ScriptRunner REST Endpoints allow administrators to build custom backend micro-services inside Jira DC that process requests and interface directly with Jira Java APIs."),
            ("How do enterprise Webhooks ensure eventual consistency between Jira DC and an external reporting data warehouse?",
             ["A) Webhooks push real-time event payloads to an API gateway/message queue, backed by periodic reconciliation JQL sync scripts", "B) Webhooks lock the database during delivery", "C) Webhooks delete issues after sending", "D) Webhooks format all data as XML attachments"],
             "A", "Combining real-time webhook streaming with background polling/reconciliation guarantees reliable event synchronization without missing dropped packets.")
        ]
    )
}

print("Loaded Part I and Part II quizzes.")
