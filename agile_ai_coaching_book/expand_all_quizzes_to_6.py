import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

# Additional questions (Questions 5 & 6 for all 24 chapters + 3 appendices)
EXTRA_QUESTIONS = {
    "ch01_modern_agile_spectrum.md": [
        ("When transitioning from a monolithic SAFe 6.0 setup to a lightweight Unfixed Framework, what is the primary risk regarding team domain knowledge?",
         ["A) Teams lose access to Jira", "B) Fluid team movement may disrupt deep domain context and long-term ownership of complex legacy codebases", "C) Unfixed requires no developers", "D) Velocity decreases by exactly 100%"],
         "B", "Unfixed emphasizes fluid allocation around dynamic problems, which can erode deep domain expertise if teams change context too frequently without platform stability."),
        ("In LeSS Huge, how are Requirement Area Frameworks managed across 2,000 developers?",
         ["A) Each Area has its own Product Owner linked to the overall Area Product Owner, managing a single unified product backlog", "B) Every squad has its own independent company", "C) Area Frameworks are disabled", "D) Excel sheets replace Jira"],
         "A", "LeSS Huge scales via Requirement Areas, where Area Product Owners manage subsets of a single unified Product Backlog without introducing extra management layers.")
    ],
    "ch02_agile_coaching_mastery.md": [
        ("An Agile Coach notices that a senior leadership team delegates all decision-making to the coach. Which anti-pattern is occurring?",
         ["A) Over-Coaching", "B) Learned Helplessness & Coach Dependency", "C) High Agility Maturity", "D) Socratic Neutrality"],
         "B", "When coaches continuously provide solutions rather than facilitating discovery, teams and leaders develop dependency, undermining self-organization."),
        ("What is the primary objective of using 'Powerful Questions' in Socratic coaching?",
         ["A) To test if the team knows Jira keyboard shortcuts", "B) To evoke clarity, inspire lateral thinking, and lead the coachee to take ownership of the solution", "C) To force the team to work faster", "D) To document meeting minutes"],
         "B", "Powerful questions are open-ended, non-judgmental prompts designed to unlock critical thinking and self-directed problem solving.")
    ],
    "ch03_enterprise_agile_coaching.md": [
        ("According to Team Topologies, how should a 'Complicated-Subsystem Team' interact with a 'Stream-Aligned Team'?",
         ["A) Complicated-Subsystem Teams act as permanent approval gates", "B) Complicated-Subsystem Teams handle specialized domain complexity (e.g., custom cryptography algorithms) and expose clear interface APIs to Stream-Aligned teams", "C) They should merge into a single 50-person squad", "D) They only communicate via phone"],
         "B", "Complicated-Subsystem teams encapsulate deep technical specialization (like ML engine core or hardware interface) to keep Stream-Aligned squad cognitive load manageable."),
        ("When establishing an Enterprise Agile Center of Excellence (CoE), what is the most effective operating model?",
         ["A) Operating as a centralized command-and-control inspection department", "B) Operating as an Enabling and Facilitating Hub that builds internal capability, shares patterns, and measures enterprise flow", "C) Replacing all project managers with external contractors", "D) Writing a 500-page policy manual"],
         "B", "High-performing CoEs focus on capability building, community enablement, and quantitative flow optimization rather than bureaucratic inspection.")
    ],
    "ch04_flow_engineering_metrics.md": [
        ("A software team has a Flow Efficiency of 8%. What does this mathematically imply about their delivery process?",
         ["A) 92% of the total Lead Time is spent waiting in queues or handoff delays", "B) 92% of code has bugs", "C) Developers work 8 hours a week", "D) The team is operating at peak performance"],
         "A", "Flow Efficiency measures active touch time vs total elapsed lead time; an 8% score indicates that 92% of time is non-value-adding queue wait time."),
        ("Why should WIP limits be applied at the workflow column level rather than per individual developer?",
         ["A) Column WIP limits expose systemic bottlenecks and encourage team swarming, whereas individual WIP limits hide queue build-ups", "B) Individual WIP limits are unsupported in Jira", "C) Column WIP limits increase server speed", "D) Individual WIP limits cause syntax errors"],
         "A", "Column WIP limits constrain stage capacity, forcing squads to swarm and clear downstream bottlenecks before pulling new work.")
    ],
    "ch05_jira_dc_architecture.md": [
        ("In a Jira Data Center multi-node cluster, what happens if node 1 suffers a physical hardware failure?",
         ["A) All user data is lost permanently", "B) The load balancer routes traffic to active remaining nodes while Hazelcast updates the cluster topology automatically", "C) The database shuts down", "D) Users cannot log in for 24 hours"],
         "B", "Active-active clustering with Hazelcast topology management and dynamic load balancing guarantees high availability and seamless failover."),
        ("How does configuring `ehcache` memory limits prevent Out-Of-Memory JVM crashes in Jira DC?",
         ["A) It caps in-memory cached objects and flushes LRU (Least Recently Used) items to disk/NFS when thresholds are reached", "B) It deletes old projects", "C) It compresses JPEG images", "D) It turns off Jira REST APIs"],
         "A", "Proper heap cache tuning prevents unchecked cache growth from exhausting the Java Virtual Machine heap memory.")
    ],
    "ch06_workflow_engineering_dc.md": [
        ("What is the difference between a Workflow Condition and a Workflow Validator in Jira DC?",
         ["A) Conditions hide/show transition buttons before action; Validators check field inputs after button click and block submission if invalid", "B) Conditions are written in Python; Validators in C++", "C) Validators only work on Mondays", "D) There is no difference"],
         "A", "Conditions evaluate permissions before displaying the transition option, while Validators validate payload constraints during form submission."),
        ("How can an administrator prevent ScriptRunner Post-Functions from causing transition timeouts during peak load?",
         ["A) Wrap execution in asynchronous thread pools or offload logic to custom Event Listeners", "B) Delete all workflow steps", "C) Increase HTTP timeout to 10 minutes", "D) Disable user comments"],
         "A", "Asynchronous thread offloading decouples heavy script execution from the main HTTP thread, keeping transition response times instant.")
    ],
    "ch07_portfolio_management_dc.md": [
        ("In Advanced Roadmaps DC, what is the role of the 'Release' entity in portfolio scheduling?",
         ["A) It defines fixed or dynamic release containers that group features across multiple projects for milestone tracking", "B) It formats PDF reports", "C) It deletes completed epics", "D) It manages user billing"],
         "A", "Releases aggregate deliverables across heterogeneous project backlogs into unified release packages for executive visibility."),
        ("How does Advanced Roadmaps handle team velocity variance during long-term capacity forecasting?",
         ["A) It assumes velocity is always 100", "B) It averages historical sprint velocity over a configurable range (e.g., last 3-6 sprints) to project realistic sprint capacity", "C) It forces developers to work overtime", "D) It ignores historical data"],
         "B", "Historical velocity averaging smooths out sprint anomalies, generating realistic future capacity projections.")
    ],
    "ch08_jira_dc_apis_jql.md": [
        ("Which JQL function allows filtering issues where the assignee is a member of the 'Architecture-Board' group?",
         ["A) `assignee = 'Architecture-Board'`", "B) `assignee in membersOf('Architecture-Board')`", "C) `assignee.group == Architecture`", "D) `userGroup = Architecture`"],
         "B", "The `membersOf()` function dynamically evaluates group membership within JQL search expressions."),
        ("When creating custom ScriptRunner REST endpoints in Jira DC, how is authentication secured?",
         ["A) Endpoint inherits Jira session authentication or OAuth 2.0 / Personal Access Token (PAT) validation", "B) Endpoints are always public to the world", "C) Passwords are hardcoded in URL parameters", "D) Security is disabled"],
         "A", "Custom REST endpoints utilize Jira's native security framework, requiring valid session cookies or PAT bearer tokens.")
    ],
    "ch09_jira_cloud_architecture.md": [
        ("What is the function of Atlassian Guard (formerly Atlassian Access) in enterprise Jira Cloud environments?",
         ["A) To manage database backups", "B) To enforce centralized SAML SSO, mandatory 2FA, automated SCIM provisioning, and CASB security policies across all cloud products", "C) To write user stories", "D) To host Git repositories"],
         "B", "Atlassian Guard provides organization-level security controls, identity federation, and data loss prevention for cloud enterprises."),
        ("How does Cloud Data Encryption at rest operate in Jira Cloud Enterprise?",
         ["A) Data is stored as plain text", "B) Customer data and attachments are encrypted using AES-256 with KMS key management at rest and TLS 1.2+ in transit", "C) Encryption is optional and costs extra", "D) Only images are encrypted"],
         "B", "Atlassian Cloud enforces AES-256 storage encryption and TLS 1.2+ transport security across all tenant environments.")
    ],
    "ch10_automation_forge_cloud.md": [
        ("In Jira Cloud Automation, what is the 'Branch Rule' component used for?",
         ["A) To create Git repository branches", "B) To execute sub-actions against related issues (e.g., parent epic, linked items, sub-tasks) within the same rule flow", "C) To delete workflow states", "D) To change project colors"],
         "B", "Branching allows automation rules to iterate over related work items (like sub-tasks or linked issues) and perform bulk actions."),
        ("What is the primary constraint of Atlassian Forge function execution time?",
         ["A) Functions can run for 24 hours", "B) Serverless backend functions have a 25-second execution timeout to protect tenant resource isolation", "C) Functions must finish in 1 millisecond", "D) There is no limit"],
         "B", "Forge serverless functions enforce a 25-second execution limit; long tasks must use Forge Async Events.")
    ],
    "ch11_jira_plans_assets_jsm.md": [
        ("In Jira Service Management (JSM), how do Service Desk Queues differ from Jira Software Backlogs?",
         ["A) Queues categorize incoming customer requests based on SLA target response times and incident urgency rather than sprint iterations", "B) Queues are stored on paper", "C) Queues do not support assignees", "D) Software backlogs cannot have bugs"],
         "A", "JSM queues are optimized for real-time SLA tracking, triage, and IT service desk response workflows."),
        ("How does an Asset Object Type inheritance structure work in JSM Assets?",
         ["A) Parent Object Types pass down attributes to Child Object Types (e.g., 'Host' attributes inherited by 'Linux Server')", "B) Attributes are deleted on inheritance", "C) Inheritance is unsupported", "D) Child objects overwrite parent code"],
         "A", "Object Type hierarchies allow common infrastructure attributes (IP address, Serial Number) to be inherited by specialized sub-types.")
    ],
    "ch12_dc_to_cloud_migration.md": [
        ("What is the purpose of running the JCMA 'Pre-Migration Check' engine prior to actual migration?",
         ["A) To format the local hard drive", "B) To identify missing email addresses, duplicate group names, incompatible app data, and invalid workflow references", "C) To send emails to all customers", "D) To upgrade Jira DC automatically"],
         "B", "JCMA pre-checks flag configuration conflicts and data integrity issues that would block or corrupt cloud migration."),
        ("How should historical Jira DC attachment files (e.g., 2TB) be migrated to Jira Cloud efficiently?",
         ["A) By uploading them one by one through the browser", "B) Using JCMA automated attachment streaming or Atlassian Cloud Migration Assistant bulk upload pipelines", "C) Sending attachments via email attachments", "D) Deleting all attachments"],
         "B", "JCMA streams attachments in background parallel threads directly to cloud storage buckets during migration windows.")
    ],
    "ch13_azure_boards_process.md": [
        ("In Azure Boards, what is the role of 'Picklists' in custom field creation?",
         ["A) Picklists define allowable dropdown values (string or integer) to enforce data standardization across work items", "B) Picklists generate random numbers", "C) Picklists pick team members for meetings", "D) Picklists format CSS styles"],
         "A", "Custom picklists constrain field inputs to pre-approved corporate option values, ensuring reporting data quality."),
        ("How does the Azure Boards 'Rollup' column feature function on backlog views?",
         ["A) It calculates progress bars or totals (e.g., total sub-task completed count or remaining effort) from child work items automatically", "B) It rolls the screen up", "C) It deletes closed items", "D) It converts currency"],
         "A", "Rollup columns aggregate progress metrics dynamically from child hierarchy levels onto parent backlog views.")
    ],
    "ch14_portfolio_delivery_plans.md": [
        ("In Azure DevOps, how can a team view work items across 5 different projects on a single Kanban board?",
         ["A) It is natively impossible on a single board; teams use Delivery Plans or cross-project query views", "B) By merging all 5 projects into 1", "C) By writing a custom HTML file", "D) By disabling security permissions"],
         "A", "Standard boards scope to a single project/area path; Delivery Plans and cross-project query widgets aggregate cross-project roadmaps."),
        ("What happens when an Iteration Path is deleted in Azure DevOps while work items are still assigned to it?",
         ["A) Work items are deleted permanently", "B) The user is prompted to re-assign affected work items to a valid target iteration path", "C) Azure DevOps crashes", "D) Work items switch to year 1990"],
         "B", "Azure DevOps prevents orphan data by requiring re-assignment of work items before confirming iteration path deletion.")
    ],
    "ch15_ado_pipelines_devex.md": [
        ("In Azure Pipelines, what is the function of a 'Service Connection'?",
         ["A) To connect two developers over phone", "B) To securely store service principal credentials or tokens for external deployments (e.g., AWS, Azure, Docker Registry)", "C) To test Wi-Fi speed", "D) To format YAML code"],
         "B", "Service Connections manage secure, role-based access credentials for external infrastructure targets without exposing secrets in YAML."),
        ("What metric measures how often code deployments to Production occur successfully within a given time period?",
         ["A) Deployment Frequency (DORA metric)", "B) Change Failure Rate", "C) Lead Time for Changes", "D) Mean Time to Recovery"],
         "A", "Deployment Frequency tracks delivery cadence and release automation maturity as a core DORA engineering metric.")
    ],
    "ch16_jira_ado_coexistence.md": [
        ("When maintaining dual-stack coexistence, how should user account identity be reconciled between Jira and Azure DevOps?",
         ["A) By matching unique corporate email addresses across identity providers (Atlassian Access AAID <-> Entra ID UPN)", "B) By using first names only", "C) Accounts cannot be reconciled", "D) By assigning all items to 'Admin'"],
         "A", "Mapping federated Entra ID (Azure AD) UPNs to Atlassian Account IDs ensures clear identity ownership across systems."),
        ("What is a 'Phased Coexistence Cutover'?",
         ["A) Migrating one value stream at a time while syncing shared portfolio epics via integration middleware until all teams transition", "B) Deleting Jira immediately", "C) Running both tools without communication", "D) Forcing all teams to switch in 1 hour"],
         "A", "Phased cutovers reduce organizational risk by maintaining inter-system synchronization while squads migrate incrementally.")
    ],
    "ch17_generative_ai_llms.md": [
        ("In Vector Databases (e.g., pgvector, Qdrant), what is an 'HNSW Index'?",
         ["A) Hierarchical Navigable Small World index, an algorithm that enables ultra-fast approximate nearest neighbor (ANN) vector searches", "B) A type of hard drive format", "C) A Java class name", "D) A security certificate"],
         "A", "HNSW indexes structure vector space for sub-millisecond similarity queries across millions of high-dimensional embeddings."),
        ("What is 'Context Window Exhaustion' in Large Language Models?",
         ["A) When the input prompt plus historical conversation exceeds the maximum token limit of the model architecture", "B) When the computer monitor turns off", "C) When the model runs out of internet", "D) When the LLM forgets English"],
         "A", "Exceeding the context window limit truncates earlier conversation tokens or causes API request rejection.")
    ],
    "ch18_prompt_engineering_coaches.md": [
        ("What is 'Temperature' tuning in LLM prompt configuration?",
         ["A) Adjusting the physical CPU heat", "B) Controlling the randomness of token prediction: 0.0 for deterministic factual responses, higher (0.7-1.0) for creative brainstorming", "C) Setting the response length", "D) Tuning network latency"],
         "B", "Temperature modulates the probability distribution of generated tokens, balancing creativity and strict determinism."),
        ("How does 'System Message' priority affect LLM compliance with safety guardrails?",
         ["A) System messages set foundational behavioral constraints that override conflicting user prompt instructions", "B) System messages are ignored by LLMs", "C) System messages are only seen by admins", "D) System messages slow down LLMs"],
         "A", "System messages establish root operational framing and security boundaries that govern subsequent conversational turns.")
    ],
    "ch19_agentic_ai_agile.md": [
        ("What is 'Tool Use' (or Function Calling) in LLM Agent architectures?",
         ["A) Allowing the LLM to output structured parameters to execute pre-defined external APIs (e.g., Jira query, DB lookup)", "B) Giving the LLM a physical keyboard", "C) Allowing the LLM to rewrite its own source code", "D) Using Excel macros"],
         "A", "Function calling enables LLMs to interface with external software tools dynamically by emitting structured execution payloads."),
        ("In multi-agent architectures, what is the role of an 'Orchestrator Agent'?",
         ["A) To decompose complex goals, delegate sub-tasks to specialized sub-agents, and aggregate their outputs into a cohesive final result", "B) To play background music", "C) To format text in bold", "D) To back up local files"],
         "A", "Orchestrator agents manage task decomposition, agent routing, state synchronization, and final response synthesis.")
    ],
    "ch20_ai_ethics_governance.md": [
        ("What is 'Model Hallucination' in generative AI systems?",
         ["A) When an LLM generates plausible-sounding but factually incorrect or completely fabricated information with high confidence", "B) When the model displays colorful graphics", "C) When the server reboots", "D) When the user inputs incorrect code"],
         "A", "Hallucination occurs when an LLM generates false assertions unsupported by training data or provided context."),
        ("How can enterprise AI architecture enforce 'Data Sovereignty'?",
         ["A) By hosting LLM infrastructure within regional cloud boundaries and guaranteeing zero cross-border data transit", "B) By disabling data encryption", "C) By storing data on public websites", "D) Data sovereignty is impossible with AI"],
         "A", "Data sovereignty guarantees that AI model hosting, prompt data, and embeddings remain strictly within specified legal jurisdictions.")
    ],
    "ch21_ai_backlog_refinement.md": [
        ("How does AI-driven Acceptance Criteria Generation improve QA test automation readiness?",
         ["A) By outputting structured Given/When/Then scenarios that can be directly converted into Playwright or Cucumber automated test scripts", "B) By deleting manual tests", "C) By writing bug reports automatically", "D) By disabling test pipelines"],
         "A", "BDD-formatted acceptance criteria map directly into automated test frameworks, bridging refinement and test automation."),
        ("What is 'Story Slicing by Business Rule Variation'?",
         ["A) Decomposing a complex story into smaller stories based on distinct business logic branches (e.g., domestic vs international shipping)", "B) Slicing user stories in half physically", "C) Estimating stories in half points", "D) Deleting complex rules"],
         "A", "Splitting by business rule isolates core logic paths, enabling incremental delivery of minimal viable functional slices.")
    ],
    "ch22_ai_sprint_facilitation.md": [
        ("How can an AI Assistant help a Scrum Master conduct a 'Sprint Retrospective Root-Cause Analysis'?",
         ["A) By automatically generating 5-Whys diagnostic trees based on retrospective feedback comments and production incident logs", "B) By deciding who gets a raise", "C) By cancelling the sprint retro", "D) By assigning blame to individual engineers"],
         "A", "AI root-cause synthesis organizes subjective feedback into structured 5-Whys or Fishbone diagrams to isolate systemic process flaws."),
        ("What is the ethical boundary regarding AI sentiment analysis during daily standups?",
         ["A) Sentiment data must be aggregated at the team level and anonymized to protect individual psychological safety", "B) Sentiment data should be posted on public bulletin boards", "C) Individual sentiment scores should determine bonuses", "D) Sentiment tracking is strictly illegal"],
         "A", "Ethical AI facilitation mandates team-level aggregation and strict privacy protection to prevent workplace surveillance anti-patterns.")
    ],
    "ch23_predictive_flow_analytics.md": [
        ("What is the '85th Percentile Lead Time' metric used for in SLA commitments?",
         ["A) It indicates that 85% of all historical work items completed in that duration or less, establishing a reliable delivery SLA", "B) It means 85% of items fail", "C) It is the average lead time plus 85 days", "D) It is an estimate made by management"],
         "A", "The 85th percentile metric provides a statistically rigorous completion SLA that accounts for common operational variability."),
        ("How does high Work-in-Progress (WIP) impact lead time tail risk in software delivery?",
         ["A) Expanding WIP increases queuing delay exponentially, producing fat-tailed distributions with extreme delivery delays", "B) High WIP speeds up lead times", "C) High WIP eliminates queue risk", "D) WIP has no mathematical impact on lead time"],
         "A", "Queuing theory demonstrates that high WIP saturates system capacity, causing exponential lead time growth and unpredictable delays.")
    ],
    "ch24_building_ai_coaching_agents.md": [
        ("In Model Context Protocol (MCP), how does a 'Resource' differ from a 'Tool'?",
         ["A) Resources are read-only data streams (like log files or issue details); Tools are executable actions that perform operations (like updating a ticket)", "B) Resources require C++; Tools require Python", "C) Resources are paid; Tools are free", "D) There is no difference"],
         "A", "MCP Resources provide context passive inspection, while MCP Tools expose side-effecting operations and executable functions."),
        ("What security mechanism should an enterprise MCP Server implement to prevent unauthorized tool execution?",
         ["A) Granular OAuth 2.0 scope validation, personal access token verification, and input parameter sanitization", "B) Storing passwords in plain text", "C) Disabling firewall rules", "D) Allowing all incoming traffic"],
         "A", "Enterprise MCP servers enforce strict token authentication, permission scoping, and schema validation before executing actions.")
    ],
    "appA_prompt_library.md": [
        ("What is the purpose of 'Negative Prompting' in enterprise prompt templates?",
         ["A) To instruct the model explicitly on what behaviors, terms, or formats to avoid (e.g., 'Do NOT use jargon', 'Do NOT output markdown code blocks')", "B) To make the prompt sound negative", "C) To cause errors on purpose", "D) Negative prompting is unsupported"],
         "A", "Negative constraints suppress undesired model behaviors, reducing formatting errors and hallucination risks."),
        ("How do 'Role-Based System Prompts' improve LLM response quality?",
         ["A) By establishing specific domain persona framing (e.g., 'You are an Enterprise Agile Coach expert in SAFe 6.0 and Flow Engineering')", "B) By changing the username", "C) By requiring login passwords", "D) System prompts have no effect"],
         "A", "Persona framing primes the LLM's latent representation space, tailoring vocabulary and reasoning patterns to the domain.")
    ],
    "appB_jql_wiql_cheatsheet.md": [
        ("In Jira JQL, what is the function of the `changed()` operator?",
         ["A) It searches for issues that underwent a specific field change, optionally filtered by user, date range, or state transition", "B) It changes the issue summary", "C) It deletes changed issues", "D) It renames custom fields"],
         "A", "The `changed()` operator allows historical field modification searching for auditing state and assignment transitions."),
        ("In Azure DevOps WIQL, how does `[System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory'` work?",
         ["A) It dynamically queries all work item types mapped to the Requirement category (e.g., User Story, PBI) in the project process", "B) It queries users in Microsoft", "C) It deletes requirement categories", "D) WIQL does not support groups"],
         "A", "Category group queries abstract individual WIT names, allowing queries to work across different process templates.")
    ],
    "appC_transformation_checklist.md": [
        ("Why does the Appendix C Maturity Matrix evaluate 'Psychological Safety' alongside technical tooling metrics?",
         ["A) Psychological safety is a prerequisite for transparent problem reporting, continuous experimentation, and honest metric collection", "B) It is required by law", "C) Psychological safety replaces software tools", "D) It is an optional metric"],
         "A", "Without psychological safety, teams hide impediments, game metrics, and resist Agile transformation initiatives."),
        ("What is the recommended cadence for conducting enterprise-wide diagnostic audits using the Appendix C matrix?",
         ["A) Every 20 years", "B) Quarterly (every 90 days) to track maturity progression and recalibrate strategic transformation goals", "C) Daily during standup", "D) Audit only when projects fail"],
         "B", "Quarterly audit cadences provide timely feedback on transformation investments while allowing sufficient time for structural change.")
    ]
}

print(f"Loaded extra questions for {len(EXTRA_QUESTIONS)} files.")
