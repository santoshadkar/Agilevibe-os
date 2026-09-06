import os
import glob
import re
from collections import Counter

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

# Topic-specific rich replacement prose generator to replace repetitive generic template paragraphs
TOPIC_PROSE = {
    "ch01": [
        "Mastering framework selection requires analyzing organizational taxonomy, team size, and regulatory coupling. While SAFe 6.0 imposes top-down alignment, LeSS descales organizational structures to empower autonomous feature teams.",
        "System mechanics must balance release train cadence with value stream independence. Introducing decoupled software architecture ensures squads can release code without waiting for cross-department synchronization gates.",
        "Quantitative telemetry across scaled frameworks prioritizes Flow Efficiency and Cycle Time reduction over velocity metrics, eliminating non-value-adding waiting queues in portfolio pipelines.",
        "1. **Value Stream Mapping**: Identify end-to-end customer delivery boundaries and eliminate structural handoffs.\n2. **Governance Tailoring**: Adapt compliance guardrails to match regional regulatory requirements.\n3. **Continuous Alignment**: Sync strategic OKRs with squad backlog execution quarterly."
    ],
    "ch02": [
        "Agile coaching mastery relies on maintaining stance awareness, seamlessly transitioning between Facilitator, Mentor, Teacher, and Socratic Coach based on team maturity and emotional friction.",
        "Coaching stance mechanics demand active listening and neutrality. By guiding coachees through self-directed inquiry, enterprise practice leads build long-term problem-solving resilience across squads.",
        "Empirical coaching metrics track squad autonomy, retrospective action item completion rates, and psychological safety indicators rather than imposing subjective performance targets.",
        "1. **Stance Calibration**: Assess team dynamics before selecting a coaching stance.\n2. **Socratic Inquiry**: Pose open-ended, reflective questions to drive team ownership.\n3. **Empirical Grounding**: De-escalate conflicts using objective flow telemetry."
    ],
    "ch03": [
        "Enterprise organizational design utilizes Team Topologies to structure Stream-Aligned, Enabling, Complicated-Subsystem, and Platform teams, minimizing cognitive load across value streams.",
        "Interaction modes (Collaboration, X-as-a-Service, Facilitating) define explicit boundary APIs between engineering groups, preventing informal, undocumented cross-team dependencies.",
        "Organizational design telemetry measures dependency frequency, cross-squad wait times, and internal developer platform adoption rates across enterprise value streams.",
        "1. **Topologies Audit**: Classify existing teams into Team Topologies patterns.\n2. **Platform Enablement**: Build self-service developer portals to abstract infrastructure.\n3. **Cognitive Load Reduction**: Limit team scope to single domain boundaries."
    ],
    "ch04": [
        "Flow engineering applies quantitative operational analysis—Cycle Time, Lead Time, Throughput, and Work-in-Progress—to eliminate systemic bottlenecks across software pipelines.",
        "Mathematical flow mechanics leverage Little's Law ($WIP = Throughput \\times Lead Time$) to demonstrate that capping Work-in-Progress is the single most effective lever for accelerating delivery speed.",
        "Cumulative Flow Diagram (CFD) analysis detects queue accumulation and process instability, allowing coaches to intervene before delivery dates are compromised.",
        "1. **WIP Constraint Enforcement**: Establish strict WIP limits at every workflow state.\n2. **CFD Monitoring**: Audit CFD band widths weekly to identify emerging bottlenecks.\n3. **Flow Efficiency Optimization**: Target touch-time vs. wait-time ratios above 25%."
    ],
    "ch05": [
        "Jira Data Center active-active clustering demands high-performance shared storage (NFSv4/EFS), Hazelcast cache replication, and dedicated inter-node network channels.",
        "Cluster state mechanics depend on synchronized database connection pools (HikariCP) and Lucene index replication to maintain sub-second search responses under heavy user concurrency.",
        "Infrastructure telemetry monitors JVM heap consumption, thread pool saturation, index replication latency, and Hazelcast cluster heartbeat health.",
        "1. **Cluster Health Check**: Monitor Hazelcast node discovery and split-brain resolution.\n2. **DB Pool Tuning**: Match HikariCP connection limits to PostgreSQL hardware specs.\n3. **Zero Downtime Upgrades**: Execute sequential node upgrades without user downtime."
    ],
    "ch06": [
        "Workflow engineering in Jira Data Center requires constructing robust state machines governed by transition properties, custom validators, and automated ScriptRunner hooks.",
        "Custom field governance prevents Lucene indexing degradation by restricting field scope to specific project contexts and purging redundant fields.",
        "Transition mechanics utilize asynchronous event listeners for heavy API calls and email notifications, preventing HTTP thread blocking during issue updates.",
        "1. **State Machine Audit**: Simplify workflow states to essential approval gates.\n2. **Field Contextualization**: Limit custom field availability to target issue types.\n3. **Asynchronous Processing**: Offload post-function REST calls to background event listeners."
    ],
    "ch07": [
        "Advanced Roadmaps in Jira DC delivers multi-tier portfolio visibility, enabling executives to align Strategic Themes down to Epic and Feature execution backlogs.",
        "Portfolio auto-scheduling algorithms combine team velocity, target dates, and explicit parent-child dependencies to forecast realistic delivery milestones.",
        "Cross-project dependency management highlights timeline collisions and critical path blockages directly on interactive portfolio roadmaps.",
        "1. **Hierarchy Definition**: Map custom issue types to portfolio hierarchy tiers.\n2. **Scenario Planning**: Test target date changes in uncommitted sandbox mode.\n3. **Dependency Alignment**: Resolve red dependency warnings before committing releases."
    ],
    "ch08": [
        "Data Center REST APIs and JQL mastery empower engineers to query historical issue state transitions using advanced operators (`WAS IN`, `CHANGED`, `membersOf()`).",
        "API integration architecture utilizes paged REST queries (`startAt`/`maxResults`) and ScriptRunner custom REST endpoints to expose lightweight backend services.",
        "Event streaming pipelines connect Jira DC Webhooks to enterprise message brokers (Kafka/RabbitMQ) for real-time executive dashboard updates.",
        "1. **JQL Optimization**: Avoid leading wildcards in text searches to prevent full index scans.\n2. **Paged REST Queries**: Process large dataset extractions in 200-item chunks.\n3. **Webhook Streaming**: Push issue events to message queues for data warehouse sync."
    ],
    "ch09": [
        "Jira Cloud Enterprise architecture isolates tenant data across cloud-native microservices, secured by Atlassian Access SAML SSO and SCIM identity provisioning.",
        "Cloud Data Residency controls ensure compliance with geographic data sovereignty regulations by pinning issue data and attachments to designated AWS regions.",
        "Organization-level administration centralizes security policy enforcement, user access lifecycle management, and global audit logging across multiple cloud sites.",
        "1. **SCIM Identity Sync**: Automate user provisioning from Okta/Azure AD via Atlassian Access.\n2. **Residency Pinning**: Select geographic realm boundaries for European and US data stores.\n3. **Org Audit Logging**: Aggregate user access events across all enterprise cloud instances."
    ],
    "ch10": [
        "Jira Cloud Automation and Atlassian Forge provide codeless workflow automation and secure, serverless FaaS app execution within Atlassian's cloud sandbox.",
        "Forge runtime architecture enforces manifest-declared OAuth 2.0 permissions and provides isolated Storage APIs for tenant key-value persistence.",
        "Smart Value scripting (`{{issue.fields.summary}}`) and webhook triggers enable rapid integration with third-party developer platforms.",
        "1. **Smart Value Rules**: Build dynamic automation triggers using issue context fields.\n2. **Forge Manifest Scopes**: Declare strict egress endpoints in `manifest.yml` for security.\n3. **Async Storage Execution**: Use Forge Storage API for secure key-value app data."
    ],
    "ch11": [
        "Jira Service Management (JSM) and Assets (Insight) unify IT service desk incident management with software engineering backlogs and CMDB asset schemas.",
        "Asset Query Language (AQL) enables querying complex CMDB object relationships and automatically linking infrastructure assets to incoming change requests.",
        "Jira Plans (Cloud) calculates cross-team capacity, target release dates, and scenario roll-ups across enterprise software portfolios.",
        "1. **Asset Schema Design**: Structure Object Types and Attributes for IT infrastructure.\n2. **AQL Integration**: Filter CMDB objects dynamically inside JSM custom fields.\n3. **ITSM-DevOps Traceability**: Link change tickets directly to software release epics."
    ],
    "ch12": [
        "Migrating from Data Center to Jira Cloud demands a structured strategy: Pre-Migration Assessment, Data Cleanup, App Migration, User Mapping, and Production Cutover.",
        "Jira Cloud Migration Assistant (JCMA) automates project data transfer while user accounts are mapped to global Atlassian Account IDs (AAIDs).",
        "Cutover execution locks the legacy Data Center instance to Read-Only mode while running final delta synchronization scripts and post-migration sanity checks.",
        "1. **Legacy Cleanup**: Purge inactive workflows, custom fields, and archived projects.\n2. **App Path Audit**: Rewrite server Groovy scripts into Cloud Automation or Forge apps.\n3. **Read-Only Cutover**: Freeze DC writes during final delta data migration to Cloud."
    ],
    "ch13": [
        "Azure Boards enterprise process architecture relies on Inherited Process Models to define custom Work Item Types (WIT), custom states, and automated field rules.",
        "State Category mapping links custom workflow states to backlog categories (Proposed, In Progress, Resolved, Completed) for reliable cross-project reporting.",
        "Area Path and Iteration Path hierarchies establish domain ownership boundaries and time-boxed delivery schedules across scaled teams.",
        "1. **Inherited Process Setup**: Create custom WITs at the Organization level for reuse.\n2. **State Category Mapping**: Assign all custom workflow states to standard categories.\n3. **Area Path Subscription**: Configure team backlog boundaries using area tree nodes."
    ],
    "ch14": [
        "Azure DevOps Delivery Plans 2.0 provides multi-team portfolio roadmaps, iteration alignment, and visual cross-team dependency markers.",
        "Portfolio backlog hierarchies (Epic -> Feature -> PBI/Bug) aggregate progress bars and remaining effort metrics across distributed engineering teams.",
        "Dependency management highlights red schedule conflict lines when predecessor work items are assigned to iterations occurring after successor items.",
        "1. **Multi-Team Roadmaps**: Configure Delivery Plans to track cross-project iterations.\n2. **Dependency Sequencing**: Resolve red timeline connectors by adjusting sprint assignments.\n3. **Rollup Visualization**: Track completed work item counts across portfolio levels."
    ],
    "ch15": [
        "Azure Pipelines YAML CI/CD integration connects automated build and release gates directly to Azure Boards Work Items for end-to-end traceability.",
        "Branch policies and Pull Request governance enforce mandatory code reviews, automated status checks, and work item linking before merging code into main.",
        "Developer Experience (DevEx) metrics combine deployment frequency, pipeline duration, and PR lead time to eliminate engineering friction.",
        "1. **Pipeline-as-Code**: Store multi-stage YAML definitions in Git repository roots.\n2. **Branch Policy Enforcement**: Mandate work item linking and approval gates on PRs.\n3. **Environment Checks**: Configure manual approval checkpoints for Production stages."
    ],
    "ch16": [
        "Dual-stack Jira and Azure DevOps coexistence requires robust bi-directional sync engines (Exalate, OpsHub) with explicit loop detection and field translation.",
        "Data model mapping aligns Jira Issue Types, workflow states, and custom fields with corresponding Azure DevOps Work Item Types and state categories.",
        "Phased value stream migration isolates operational risk by transitioning independent business units while maintaining cross-platform portfolio reporting.",
        "1. **Sync Loop Detection**: Configure sync middleware to prevent recursive updates.\n2. **Schema Translation**: Map Jira statuses to Azure DevOps state categories.\n3. **Phased Migration**: Move value streams sequentially to maintain business continuity."
    ],
    "ch17": [
        "Generative AI and Large Language Models process software development context through high-dimensional vector embeddings and transformer attention mechanisms.",
        "Retrieval-Augmented Generation (RAG) grounds LLM outputs by injecting real-time Jira/ADO ticket data into the prompt context window, eliminating hallucinations.",
        "Vector databases (pgvector, Qdrant) utilize HNSW indexing and Cosine Similarity to identify duplicate backlog items and relevant engineering documentation.",
        "1. **RAG Pipeline Setup**: Chunk and embed enterprise backlog data into a vector DB.\n2. **Cosine Similarity Search**: Retrieve top-k semantically relevant tickets for prompt context.\n3. **Context Window Management**: Truncate historical tokens to fit model context limits."
    ],
    "ch18": [
        "Prompt engineering taxonomy includes Chain-of-Thought (CoT), Few-Shot examples, System Prompts, and Socratic Inquiry pipelines tailored for Agile leaders.",
        "Structuring system prompts with explicit roles, domain constraints, negative guardrails, and JSON schemas ensures deterministic AI responses.",
        "Socratic prompting guides Scrum Masters and Product Owners through reflective problem-solving rather than returning superficial answers.",
        "1. **System Framing**: Set strict persona roles and negative guardrails in system prompts.\n2. **Few-Shot Examples**: Provide sample input/output pairs to guide format accuracy.\n3. **Chain-of-Thought**: Instruct the model to display step-by-step reasoning."
    ],
    "ch19": [
        "Agentic AI operates on the ReAct (Reason + Act) paradigm, allowing autonomous LLMs to plan, execute external API tools, and evaluate system observations.",
        "Autonomous Agile Facilitator agents inspect Jira backlogs, calculate statistical flow metrics, and generate retrospective themes without human intervention.",
        "Human-in-the-Loop (HITL) guardrails enforce authorization checkpoints for high-risk agent operations like ticket deletion or deployment triggers.",
        "1. **ReAct Loop Implementation**: Structure agent cycles around Thought, Action, and Observation.\n2. **API Tool Binding**: Expose Jira/ADO REST tools to the agent with strict schemas.\n3. **HITL Safeguards**: Require human confirmation for destructive system actions."
    ],
    "ch20": [
        "Enterprise AI governance mandates PII/PHI scrubbing, data leakage prevention, and zero-retention policies with commercial LLM API providers.",
        "Algorithmic fairness audits evaluate AI performance prompts to prevent model bias from skewing team evaluation metrics or performance reviews.",
        "An Enterprise AI Acceptable Use Policy balances developer productivity gains with intellectual property protection and regulatory security boundaries.",
        "1. **PII Sanitization**: Deploy pre-prompt regex/NER filters to redact employee names and keys.\n2. **Vendor Zero-Retention**: Contractually ensure API providers do not store or train on prompt data.\n3. **Ethical Telemetry**: Exclude subjective AI sentiment scores from official HR reviews."
    ],
    "ch21": [
        "AI-powered backlog engineering transforms vague ideas into INVEST-compliant User Stories with automated BDD (Given/When/Then) acceptance criteria.",
        "LLM-driven story splitting patterns decompose large Epics into thin vertical functional slices based on workflow steps, business rules, and data variations.",
        "Automated ambiguity detection scans backlog items prior to refinement meetings, identifying missing edge cases and security requirements.",
        "1. **INVEST Validation**: Audit user story testability and value statements automatically.\n2. **BDD Formatting**: Generate GIVEN/WHEN/THEN criteria ready for automated test suites.\n3. **Pre-Refinement Scan**: Flag missing edge cases before sprint planning meetings."
    ],
    "ch22": [
        "AI facilitation tools analyze team telemetry, Slack/Teams communication, and standup updates to detect emerging friction and burnout indicators.",
        "Semantic clustering algorithms group disparate retrospective feedback notes into actionable root-cause categories using NLP vector embeddings.",
        "Real-Time Sentiment Radars monitor psychological safety trends, alerting coaches to team friction while maintaining strict individual privacy.",
        "1. **Retro Clustering**: Group retro cards semantically to focus discussion on key themes.\n2. **Impediment Detection**: Flag multi-day standup blockers for immediate coaching swarms.\n3. **Psychological Safety**: Aggregate team sentiment data to preserve individual trust."
    ],
    "ch23": [
        "Predictive flow analytics utilizes Monte Carlo simulations and historical throughput distributions to calculate risk-adjusted completion dates.",
        "Weibull and lognormal distribution modeling fits heavy-tailed software lead time datasets far better than invalid Gaussian normal curves.",
        "Predictive velocity forecasting incorporates upcoming calendar capacity and throughput variance to prevent systemic sprint over-commitment.",
        "1. **Monte Carlo Trials**: Run 10,000 simulations against historical throughput for 85% SLAs.\n2. **Tail-Risk Analysis**: Fit Weibull distributions to capture long-tail blocking delays.\n3. **Capacity Forecasting**: Adjust sprint targets based on holiday calendars and variance."
    ],
    "ch24": [
        "Model Context Protocol (MCP) provides an open architectural standard for securely connecting AI models to enterprise data sources, tools, and prompts.",
        "Custom MCP Servers written in Python or TypeScript expose Jira REST APIs, Azure DevOps WITs, and internal databases as clean tool primitives.",
        "Building in-house MCP servers preserves enterprise data governance, authentication security tokens, and proprietary business logic boundaries.",
        "1. **MCP Primitive Binding**: Define Tools, Resources, and Prompts in custom server code.\n2. **OAuth 2.0 Auth**: Validate personal access tokens inside MCP server request handlers.\n3. **Client Integration**: Connect custom MCP servers to Claude Desktop or Antigravity agents."
    ],
    "appA": [
        "Appendix A presents over 105 production-tested prompt templates across Agile Coaching, Backlog Refinement, Scrum Master, and Executive Leadership domains.",
        "Every prompt adheres to the enterprise Prompt Taxonomy: Role, Context, Task, Input Schema, Output Schema, and Operational Guardrails.",
        "Contextual prompt tuning allows coaches to adapt generic templates to local organizational compliance rules and technical stack requirements.",
        "1. **Prompt Catalog Lookup**: Select pre-built templates by operational coaching domain.\n2. **Schema Enforcement**: Ensure output formats match target enterprise application inputs.\n3. **Contextual Tuning**: Inject local DoD and tech stack rules into prompt contexts."
    ],
    "appB": [
        "Appendix B offers a comprehensive syntax reference and 50 cross-platform query templates translating between Jira JQL, Azure DevOps WIQL, and Assets AQL.",
        "Cross-system query translation maps relational operators, date range functions, and historical change operators across Atlassian and Microsoft ecosystems.",
        "Query optimization rules prevent full index scans, reducing database load and speeding up executive dashboard rendering across portals.",
        "1. **JQL-to-WIQL Translation**: Map JQL `WAS IN` queries to WIQL `EVER` date range clauses.\n2. **AQL Object Filtering**: Structure asset queries to link IT CMDB objects with Jira issues.\n3. **Index Optimization**: Avoid leading wildcards in queries to maintain fast search speeds."
    ],
    "appC": [
        "Appendix C delivers a 35-criteria quantitative Agile & AI Maturity Assessment Checklist across 5 operational engineering dimensions.",
        "Diagnostic scoring rubrics (Level 1 Initial to Level 5 Optimized) establish objective baselines for enterprise transformation roadmaps.",
        "Quarterly diagnostic cadences track organizational maturity trends, ensuring transformation investments deliver measurable Flow Efficiency gains.",
        "1. **Baseline Assessment**: Score organizational maturity across 5 operational dimensions.\n2. **Radar Chart Mapping**: Visualize maturity gaps to prioritize coaching interventions.\n3. **Quarterly Recalibration**: Audit progress every 90 days to measure transformation ROI."
    ]
}

def deduplicate_and_clean_all():
    ch_dir = os.path.join(BASE_DIR, "chapters")
    app_dir = os.path.join(BASE_DIR, "appendices")
    all_files = sorted(glob.glob(os.path.join(ch_dir, "**", "*.md"), recursive=True) + glob.glob(os.path.join(app_dir, "*.md")))

    print("Cleaning and deduplicating all 27 chapter & appendix files...")

    for file_path in all_files:
        basename = os.path.basename(file_path)
        prefix_key = basename.split("_")[0]
        if prefix_key not in TOPIC_PROSE and "app" not in prefix_key:
            continue
        
        prose_key = prefix_key if prefix_key in TOPIC_PROSE else basename.split("_")[0]

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Step 1: Replace generic template paragraphs with topic-specific prose
        prose_list = TOPIC_PROSE.get(prose_key, TOPIC_PROSE["ch01"])

        content = content.replace("Establishing persistent alignment requires transparent communication channels across executive leadership and squad execution. When strategy is decoupled from execution, systemic delays emerge.", prose_list[0])
        content = content.replace("Architectural decoupling is a prerequisite for rapid software delivery. Monolithic dependencies create artificial handoffs, increasing lead times and reducing overall throughput.", prose_list[1])
        content = content.replace("Furthermore, system mechanics must incorporate continuous observability. Tracking telemetry across workflow stages exposes hidden WIP buildup and queuing bottlenecks.", prose_list[2])
        content = content.replace("Quantitative metrics provide objective empirical evidence of operational bottlenecks, enabling targeted intervention without relying on subjective estimation.", prose_list[3])
        content = content.replace("1. **Baseline Assessment & Value Stream Audit**: Map existing operational workflows to isolate handoff friction.\n2. **Governance Tailoring**: Adapt compliance requirements to eliminate unnecessary approval gates.\n3. **Continuous Alignment**: Sync squad execution with strategic OKRs on a quarterly cadence.", prose_list[3])

        # Step 2: Fix duplicate Executive Summary and Quiz sections
        # Keep everything before the first occurrence of summary/quiz header
        split_match = re.search(r'\n---\n## \d+\.7|\n---\n## [A-C]\.4|\n---\n## Executive Summary|\n## \d+\.7 Chapter Executive Summary|\n## [A-C]\.4 Appendix Executive Summary|\n## \d+\.8 Executive', content)
        if split_match:
            main_content = content[:split_match.start()].strip()
            summary_and_quiz_content = content[split_match.start():]
            
            # Extract FIRST summary section and FIRST quiz section cleanly
            sum_match = re.search(r'(## (?:[0-9]+|A|B|C)\.(?:7|4) (?:Chapter|Appendix)? ?Executive Summary[\s\S]*?)(?=## (?:[0-9]+|A|B|C)\.(?:8|5) Executive|$)', summary_and_quiz_content)
            quiz_match = re.search(r'(## (?:[0-9]+|A|B|C)\.(?:8|5) Executive & Practitioner Knowledge Assessment[\s\S]*)', summary_and_quiz_content)

            clean_sum = sum_match.group(1).strip() if sum_match else ""
            clean_quiz = quiz_match.group(1).strip() if quiz_match else ""

            # Ensure only 1 copy of summary and quiz exists
            content = main_content + "\n\n---\n\n" + clean_sum + "\n\n---\n\n" + clean_quiz

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"Deduplicated & Cleaned: {basename}")

if __name__ == "__main__":
    deduplicate_and_clean_all()
