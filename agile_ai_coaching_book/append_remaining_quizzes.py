import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

# Load existing script and extend dictionary
from build_full_quizzes import ALL_QUIZZES

PART_3_4_5_6_7 = {
    # PART III
    "ch09_jira_cloud_architecture.md": (
        "9",
        [
            "Jira Cloud multi-tenant architecture decouples tenant storage using isolated microservices and Atlassian Access SAML/SCIM identity management.",
            "Cloud Data Residency controls ensure compliance with regional sovereignty requirements (GDPR, HIPAA, Financial Services regulations).",
            "Organization-level administration enables centralized policy enforcement, audit logging, and automated user provisioning across all cloud sites."
        ],
        [
            ("In Jira Cloud Enterprise, what mechanism handles automated user provisioning and de-provisioning from Okta or Azure Active Directory?",
             ["A) Manual CSV upload every Monday", "B) SCIM (System for Cross-domain Identity Management) via Atlassian Access", "C) JDBC direct database connection", "D) User-initiated self-registration"],
             "B", "SCIM protocol integration via Atlassian Access automatically synchronizes identity changes from enterprise IdPs to Jira Cloud."),
            ("How does Atlassian Cloud Data Residency guarantee compliance for a European banking client?",
             ["A) By encrypting data with rot13", "B) By allowing administrators to pin primary product content (issues, user data, attachments) to specific EU AWS data centers", "C) By moving all data to a local laptop", "D) Data Residency is not supported in cloud"],
             "B", "Cloud Data Residency allows enterprise admins to select geographic realm boundaries (e.g., EU, US, AU) for stored issue data and attachments."),
            ("What is the main architectural difference between Jira Data Center and Jira Cloud Enterprise multi-tenancy?",
             ["A) Jira Cloud uses shared multi-tenant micro-service pods with logical tenant data isolation, whereas DC uses dedicated customer-managed IaaS/PaaS nodes", "B) Jira Cloud runs on Windows 95", "C) Jira DC has no database", "D) Jira Cloud does not support custom fields"],
             "A", "Jira Cloud operates a cloud-native microservices architecture with tenant-isolated data stores, contrasting with customer-managed DC clusters."),
            ("An organization manages 15 Jira Cloud sites under one enterprise umbrella. Which tool provides unified audit logs across all sites?",
             ["A) Individual site admin pages", "B) Atlassian Organization Admin Hub", "C) A python script running on a local machine", "D) Local text files"],
             "B", "The Organization Admin Hub centralizes domain management, security policies, and aggregated audit logs across all enterprise cloud sites.")
        ]
    ),
    "ch10_automation_forge_cloud.md": (
        "10",
        [
            "Jira Cloud Automation utilizes Smart Values (`{{issue.fields.summary}}`) and trigger conditions for codeless enterprise workflow automation.",
            "Atlassian Forge provides a secure, serverless FaaS (Function-as-a-Service) runtime executing inside Atlassian's isolated cloud boundary.",
            "Forge Custom UI and Storage API enable building highly customized enterprise extensions with granular OAuth 2.0 scopes and zero infrastructure overhead."
        ],
        [
            ("Which Smart Value in Jira Cloud Automation retrieves the display name of the user who triggered an automation rule?",
             ["A) `{{user.name}}`", "B) `{{initiator.displayName}}`", "C) `{{issue.reporter}}`", "D) `{{actor.email}}`"],
             "B", "`{{initiator.displayName}}` dynamically resolves to the full name of the actor who fired the event trigger."),
            ("Why is Atlassian Forge considered more secure for custom app development than legacy Connect apps?",
             ["A) Forge apps run on the developer's home computer", "B) Forge runs serverless code within Atlassian's security boundary and enforces strict manifest-declared OAuth 2.0 egress permissions", "C) Forge does not support Javascript", "D) Connect apps do not require passwords"],
             "B", "Forge executes within Atlassian's secure cloud runtime and blocks unauthorized external network calls unless explicitly declared in `manifest.yml`."),
            ("A developer needs to store persistent key-value configuration data for a Forge app. Which built-in API should they use?",
             ["A) `localStorage` in browser", "B) Forge Storage API (`storage.get() / storage.set()`)", "C) Writing to a local file system", "D) Storing data in issue summary text"],
             "B", "The Forge Storage API provides secure, tenant-isolated key-value and entity storage built directly into the serverless platform."),
            ("What happens when a Jira Cloud Automation rule exceeds its monthly execution limit on a Standard plan?",
             ["A) The entire Jira site is deleted", "B) Rule executions are throttled/paused until the next billing cycle, or until upgraded to Premium/Enterprise", "C) The site switches to Data Center automatically", "D) Emails are sent to all users"],
             "B", "Jira Cloud enforces rule execution caps based on license tier; exceeding limits pauses rule execution until limit resets or plan is upgraded.")
        ]
    ),
    "ch11_jira_plans_assets_jsm.md": (
        "11",
        [
            "Jira Service Management (JSM) unifies ITSM incident, problem, and change management workflows directly with software engineering development backlogs.",
            "Assets (formerly Insight) in JSM provides an object-oriented CMDB structure queryable via Asset Query Language (AQL).",
            "Jira Plans (Cloud) auto-calculates cross-team capacity, dependencies, and target release windows across enterprise portfolios."
        ],
        [
            ("Which Asset Query Language (AQL) statement retrieves all hardware asset objects of object type 'Laptop' assigned to user 'sadkar'?",
             ["A) status = Active", "B) objectType = 'Laptop' AND 'Assignee' = 'sadkar'", "C) JQL issueType = Asset", "D) SELECT * FROM Laptops"],
             "B", "AQL syntax filters CMDB object attributes using `objectType = 'TypeName' AND 'Attribute' = 'Value'`."),
            ("How does linking a JSM Change Request directly to a Jira Software Epic improve enterprise governance?",
             ["A) It automatically approves all budget requests", "B) It creates full traceability between software deployment commits and ITSM change approval audits", "C) It deletes all bugs reported by customers", "D) It requires developers to take phone calls"],
             "B", "Bi-directional linking between JSM Change Requests and software engineering backlogs provides automated audit compliance for deployments."),
            ("In Jira Plans (Cloud), what scenario planning feature allows planners to test 'What-If' scope additions without altering live squad backlogs?",
             ["A) Production commit button", "B) Uncommitted Changes / Scenario Sandbox Mode", "C) Hardcoding dates in Excel", "D) Deleting the project plan"],
             "B", "Jira Plans maintains an uncommitted scenario layer allowing managers to simulate scheduling changes before committing them to live Jira issues."),
            ("What is the primary function of an Asset Schema in JSM?",
             ["A) To format Jira comment text", "B) To define a structured domain container holding Object Types, Attributes, and Object relationships (e.g., IT Infrastructure, Services)", "C) To manage user passwords", "D) To host video files"],
             "B", "An Asset Schema defines the conceptual structure and relationships for enterprise CMDB objects within Jira Service Management.")
        ]
    ),
    "ch12_dc_to_cloud_migration.md": (
        "12",
        [
            "Migrating from Jira Data Center to Cloud requires structured execution: Assessment, Cleanup, Test Migrations, User Mapping, and Production Cutover.",
            "Jira Cloud Migration Assistant (JCMA) automates project and issue migration, but app data (ScriptRunner, Tempo) requires dedicated app migration paths.",
            "User anonymization, identity migration via Atlassian Access, and post-migration validation are critical to ensure zero data loss during cutover."
        ],
        [
            ("What is the recommended first step before executing a test migration with Jira Cloud Migration Assistant (JCMA)?",
             ["A) Delete all Jira DC users", "B) Conduct a comprehensive Data Clean-up and App Assessment audit to purge inactive custom fields, workflows, and unused projects", "C) Shut down the network router", "D) Change all project keys to AAA"],
             "B", "Cleaning up legacy technical debt and auditing app compatibility before migration dramatically increases JCMA success rates."),
            ("During a DC to Cloud migration, why can't ScriptRunner Groovy scripts be migrated 1:1 automatically by JCMA?",
             ["A) Groovy is illegal in the cloud", "B) Jira DC runs on Java server APIs, whereas Jira Cloud uses REST APIs, Cloud Automation, and Forge serverless execution models", "C) Cloud does not support code", "D) JCMA only migrates images"],
             "B", "Architectural differences between server Java APIs and Cloud REST/Forge APIs require rewriting custom server scripts into Cloud Automation or Forge apps."),
            ("What is the primary role of the 'User Mapping' phase in JCMA?",
             ["A) To assign new passwords to all users", "B) To map legacy Jira DC usernames/emails to unified Atlassian Account IDs (AAIDs) in Atlassian Access", "C) To delete duplicate users", "D) To merge all users into one account"],
             "B", "Cloud security requires mapping legacy username strings to global Atlassian Account IDs (AAIDs) for identity federation."),
            ("In an enterprise production cutover plan, what is the purpose of setting Jira Data Center to 'Read-Only' mode?",
             ["A) To prevent users from creating or modifying issues on DC while final delta migration scripts run", "B) To test network speed", "C) To force users to take a lunch break", "D) To backup the database"],
             "A", "Locking the legacy DC instance to Read-Only prevents data divergence while final delta changes are copied to the live Jira Cloud site.")
        ]
    ),
    # PART IV
    "ch13_azure_boards_process.md": (
        "13",
        [
            "Azure Boards enterprise process architecture relies on standard (Agile, Scrum, CMMI, Basic) or Inherited Process Models for custom Work Item Types (WIT).",
            "State machine customization in Azure Boards maps custom workflow states to backlog categories (Proposed, In Progress, Resolved, Completed).",
            "Field rules, picklists, and WIT XML layout governance ensure consistent data capture across scaled engineering departments."
        ],
        [
            ("In Azure Boards, how does an organization create a custom Work Item Type (WIT) called 'Architecture Spike' across 50 projects?",
             ["A) By editing XML files on each developer's laptop", "B) By creating an Inherited Process from a system process (e.g., Scrum) and defining the new WIT at the organization level", "C) By emailing Microsoft support", "D) It is impossible in Azure DevOps"],
             "B", "Inherited Processes allow org admins to define custom WITs, fields, and rules centrally and apply them across multiple projects."),
            ("What happens if a custom state in Azure Boards is not mapped to a State Category (e.g., 'In Progress')?",
             ["A) The work item is deleted", "B) The work item will not render correctly on Kanban boards, Cumulative Flow Diagrams, or Velocity charts", "C) Azure DevOps crashes", "D) The state becomes encrypted"],
             "B", "State Categories drive reporting aggregations; unmapped states break board column displays and analytical charts."),
            ("Which Azure Boards rule condition dynamically makes the 'Root Cause Analysis' field required when a Bug transitions to 'Resolved'?",
             ["A) Mandatory Field Rule triggered `WHEN A work item state changes to Resolved`", "B) Sending a Slack notification", "C) Creating a C# plugin", "D) Disabling the save button"],
             "A", "Azure Boards Process Rules support conditional field requirements based on state transitions without writing custom code."),
            ("What is the structural relationship between Area Paths and Team Backlogs in Azure DevOps?",
             ["A) Area Paths determine user passwords", "B) Area Paths define logical component/product domains and are assigned to teams to filter their backlog ownership", "C) Area Paths control git commit hashes", "D) Area Paths are used for credit card processing"],
             "B", "Area Paths establish domain boundaries, allowing squads to subscribe to specific nodes in the enterprise area hierarchy for backlog ownership.")
        ]
    ),
    "ch14_portfolio_delivery_plans.md": (
        "14",
        [
            "Azure DevOps Delivery Plans 2.0 provides multi-team portfolio visibility, iteration alignment, and visual dependency tracking across value streams.",
            "Area Path and Iteration Path hierarchies govern portfolio roll-up from Squad PBI/Bugs to Feature and Epic backlogs.",
            "Cross-team dependency markers highlight red/green status markers directly on delivery roadmaps to prevent release collisions."
        ],
        [
            ("In Azure DevOps Delivery Plans 2.0, what does a red dependency connector line between two work items indicate?",
             ["A) The items are assigned to the same user", "B) A predecessor item is scheduled in an iteration later than its successor item, violating timeline sequencing", "C) Both items are closed", "D) The items have no estimation"],
             "B", "Delivery Plans automatically flags dependency sequencing errors in red when a prerequisite task is scheduled after the dependent task."),
            ("How do Enterprise Portfolio Managers configure a 4-tier backlog hierarchy in Azure Boards (Epic -> Feature -> Story -> Subtask)?",
             ["A) Hierarchy is fixed and cannot be changed", "B) In Organization Settings -> Process -> Portfolio Backlogs, adding custom backlog levels and assigning corresponding WITs", "C) By creating 4 separate Azure DevOps organizations", "D) By using Excel spreadsheets only"],
             "B", "Azure Boards allows customizing Portfolio Backlog levels within an Inherited Process to support multi-level enterprise planning."),
            ("What is the primary function of Iteration Paths in Azure DevOps?",
             ["A) To define geographic office locations", "B) To define time-boxed delivery windows (e.g., Sprints, Releases) across the organizational calendar", "C) To store database passwords", "D) To measure internet bandwidth"],
             "B", "Iteration Paths establish the temporal dimension of planning, mapping work items to specific time boxes and release cadences."),
            ("How does Delivery Plans 2.0 handle cross-organization dependency tracking across different Azure DevOps organizations?",
             ["A) Delivery Plans natively tracks dependencies across different organizations natively without configuration", "B) Delivery Plans tracks dependencies within a single organization; cross-org tracking requires explicit REST API/integration sync", "C) Delivery Plans deletes cross-org items", "D) Cross-org dependencies are illegal"],
             "B", "Native Delivery Plans dependency connectors operate within an organization boundary; cross-org mapping requires integration tooling or API sync.")
        ]
    ),
    "ch15_ado_pipelines_devex.md": (
        "15",
        [
            "Azure Pipelines YAML CI/CD integration automates build, test, and release gates directly linked to Azure Boards Work Items.",
            "Branch policies and Pull Request governance enforce mandatory code reviews, automated status checks, and work item linking before merging.",
            "Developer Experience (DevEx) metrics combine pipeline duration, deployment frequency, and PR lead time to eliminate friction."
        ],
        [
            ("Which YAML keyword in an Azure DevOps Pipeline definition creates a mandatory manual approval gate before deploying to Production?",
             ["A) `trigger: manual`", "B) `environment: Production` linked to a pipeline Environment with configured Approvals and Checks", "C) `script: pause`", "D) `lock: true`"],
             "B", "Pipeline Environments allow security admins to enforce pre-deployment checks, manual approvals, and branch policies before stage execution."),
            ("How does enforcing 'Work Item Linking' in Azure Repos branch policies improve compliance?",
             ["A) It speeds up C++ compilation", "B) It blocks Pull Request merges unless the PR is explicitly linked to an active Azure Boards Work Item, establishing traceability", "C) It deletes unlinked branches automatically", "D) It sends an SMS to the Scrum Master"],
             "B", "Work item linking policies guarantee that no code enters the main branch without traceability to an approved backlog requirement."),
            ("What metric measures the total duration from when a developer opens a Pull Request to when it is successfully merged into main?",
             ["A) Velocity", "B) Pull Request Lead Time (or PR Cycle Time)", "C) Code Coverage Percentage", "D) Sprint Burndown"],
             "B", "PR Lead Time measures code review and validation friction, key components of Developer Experience and DORA metrics."),
            ("What is the advantage of using Multi-Stage YAML Pipelines over legacy Classic Release Pipelines in ADO?",
             ["A) YAML pipelines can be version-controlled, code-reviewed, and stored directly alongside application source code in Git", "B) Classic pipelines are faster", "C) YAML pipelines require no YAML knowledge", "D) Classic pipelines are mandatory in 2026"],
             "A", "Pipeline-as-Code (YAML) allows pipeline infrastructure to evolve, branch, and revert alongside application code in repository control.")
        ]
    ),
    "ch16_jira_ado_coexistence.md": (
        "16",
        [
            "Dual-stack Jira and Azure DevOps coexistence requires robust bi-directional sync architectures (Exalate, OpsHub, custom Webhooks).",
            "Mapping data models between Jira Issues (Types, Fields, Workflow States) and Azure DevOps WITs demands standardized schema translation.",
            "Migration execution strategies (Big Bang vs. Phased Value Stream Migration) depend on organizational risk tolerance and system coupling."
        ],
        [
            ("When integrating Jira (used by Product) with Azure DevOps (used by Engineering), what is the primary challenge in bi-directional field mapping?",
             ["A) Jira uses SQL, ADO uses HTML", "B) Asynchronous status loops and state machine mismatch (e.g., Jira 'In Progress' vs ADO 'Active' causing infinite update loops)", "C) Both tools use identical IDs", "D) Ethernet cables are incompatible"],
             "B", "Bi-directional sync engines must implement loop detection and status mapping logic to prevent recursive event firing between systems."),
            ("Which migration strategy minimizes enterprise operational risk when transitioning 2,000 users from Jira to Azure DevOps?",
             ["A) Big Bang cutover over a holiday weekend without backups", "B) Phased Value Stream Migration, moving independent business units value stream by value stream", "C) Operating both tools forever without data sync", "D) Deleting all historical data"],
             "B", "Phased Value Stream migration isolates risk, allows operational learning, and ensures business continuity during tool transition."),
            ("In an Exalate Groovy integration script between Jira and ADO, what is the role of the `replica` object?",
             ["A) It holds the local database password", "B) It acts as an intermediate payload data bridge containing the fields being exported to the remote system", "C) It deletes remote work items", "D) It converts text to PDF"],
             "B", "The `replica` object decouples source and target schemas by acting as a payload buffer during bi-directional synchronization."),
            ("What is the key metric for verifying data integrity after a dual-stack migration?",
             ["A) Total file size of text logs", "B) 100% field, attachment, comment, and link reconciliation check between source and target work item counts", "C) Number of emails sent during migration", "D) CPU temperature"],
             "B", "Reconciliation scripts validate that issue counts, relationship hierarchies, comments, and attachments match perfectly post-migration.")
        ]
    )
}

print("Loaded Part III and Part IV quizzes.")
