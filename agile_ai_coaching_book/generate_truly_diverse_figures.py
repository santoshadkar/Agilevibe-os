import os
import math
from PIL import Image, ImageDraw

OUTPUT_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\diagrams"
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Generating 27 completely unique, visually diverse architectural diagrams and graphs...")

def get_canvas(title, width=1200, height=600):
    img = Image.new("RGB", (width, height), color="#FFFFFF")
    draw = ImageDraw.Draw(img)
    draw.rectangle([0, 0, width, 70], fill="#1E3A8A")
    draw.text((width // 2, 35), title, fill="#FFFFFF", anchor="mm", font_size=22)
    draw.rectangle([0, height - 15, width, height], fill="#1E3A8A")
    return img, draw, width, height

# LAYOUT STYLE A: STACK DIAGRAM
def draw_stack_diagram(filename, title, layers):
    img, draw, width, height = get_canvas(title)
    n = len(layers)
    layer_h = 75
    start_y = 100
    gap = 25
    colors = ["#1E3A8A", "#3B82F6", "#4F46E5", "#0D9488", "#059669"]

    for idx, (l_title, l_desc, items) in enumerate(layers):
        y1 = start_y + idx * (layer_h + gap)
        y2 = y1 + layer_h
        color = colors[idx % len(colors)]

        draw.rounded_rectangle([80, y1, width - 80, y2], radius=12, fill=color)
        draw.text((110, y1 + layer_h // 2), l_title, fill="#FFFFFF", anchor="lm", font_size=18)
        
        x_item = width - 110
        for item in reversed(items):
            item_w = len(item) * 11 + 20
            draw.rounded_rectangle([x_item - item_w, y1 + 18, x_item, y2 - 18], radius=8, fill="#FFFFFF")
            draw.text((x_item - item_w // 2, y1 + layer_h // 2), item, fill=color, anchor="mm", font_size=13)
            x_item -= (item_w + 15)

        if idx < n - 1:
            arrow_y = y2 + 4
            draw.line([width // 2, arrow_y, width // 2, arrow_y + 16], fill="#1E3A8A", width=3)
            draw.polygon([(width // 2 - 6, arrow_y + 12), (width // 2 + 6, arrow_y + 12), (width // 2, arrow_y + 20)], fill="#1E3A8A")

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# LAYOUT STYLE B: RADIAL AGENT NETWORK
def draw_agent_network(filename, title, center_node, outer_nodes):
    img, draw, width, height = get_canvas(title)
    cx, cy = width // 2, height // 2 + 30
    cr = 75

    draw.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], fill="#1E3A8A", outline="#3B82F6", width=4)
    draw.text((cx, cy), center_node, fill="#FFFFFF", anchor="mm", font_size=15, align="center")

    n = len(outer_nodes)
    radius = 185
    colors = ["#4F46E5", "#0284C7", "#059669", "#7C3AED", "#D97706"]

    for idx, (node_name, node_desc) in enumerate(outer_nodes):
        angle = idx * (2 * math.pi / n) - (math.pi / 2)
        nx = int(cx + radius * math.cos(angle))
        ny = int(cy + radius * math.sin(angle))

        draw.line([cx, cy, nx, ny], fill="#94A3B8", width=3)

        box_w, box_h = 190, 70
        x1, y1 = nx - box_w // 2, ny - box_h // 2
        x2, y2 = nx + box_w // 2, ny + box_h // 2
        draw.rounded_rectangle([x1, y1, x2, y2], radius=10, fill=colors[idx % len(colors)])
        draw.text((nx, ny - 10), node_name, fill="#FFFFFF", anchor="mm", font_size=14)
        draw.text((nx, ny + 12), node_desc, fill="#F3F4F6", anchor="mm", font_size=11)

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# LAYOUT STYLE C: DECISION FLOWCHART
def draw_decision_flowchart(filename, title, steps):
    img, draw, width, height = get_canvas(title)
    y_curr = 100

    for idx, step in enumerate(steps):
        s_type = step.get("type", "process")

        if s_type == "start" or s_type == "end":
            draw.rounded_rectangle([width // 2 - 140, y_curr, width // 2 + 140, y_curr + 50], radius=25, fill="#1E3A8A")
            draw.text((width // 2, y_curr + 25), step["label"], fill="#FFFFFF", anchor="mm", font_size=15)
            y_curr += 80

        elif s_type == "process":
            draw.rounded_rectangle([width // 2 - 220, y_curr, width // 2 + 220, y_curr + 65], radius=10, fill="#2563EB")
            draw.text((width // 2, y_curr + 20), step["title"], fill="#FFFFFF", anchor="mm", font_size=15)
            draw.text((width // 2, y_curr + 45), step["sub"], fill="#E0E7FF", anchor="mm", font_size=12)
            y_curr += 95

        elif s_type == "decision":
            cx, cy = width // 2, y_curr + 40
            pts = [(cx, cy - 40), (cx + 160, cy), (cx, cy + 40), (cx - 160, cy)]
            draw.polygon(pts, fill="#D97706")
            draw.text((cx, cy), step["label"], fill="#FFFFFF", anchor="mm", font_size=13)

            draw.line([cx - 160, cy, cx - 280, cy, cx - 280, cy + 50], fill="#DC2626", width=3)
            draw.rounded_rectangle([cx - 360, cy + 50, cx - 200, cy + 95], radius=8, fill="#DC2626")
            draw.text((cx - 280, cy + 72), step["no_label"], fill="#FFFFFF", anchor="mm", font_size=12)

            draw.line([cx, cy + 40, cx, cy + 70], fill="#059669", width=3)
            y_curr += 120

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# LAYOUT STYLE D: SIDE-BY-SIDE COMPARISON
def draw_side_by_side(filename, title, left_title, left_points, right_title, right_points):
    img, draw, width, height = get_canvas(title)

    draw.rounded_rectangle([80, 100, 560, 540], radius=14, fill="#1E3A8A")
    draw.text((320, 140), left_title, fill="#FFFFFF", anchor="mm", font_size=20)
    draw.line([110, 175, 530, 175], fill="#60A5FA", width=2)
    y_p = 210
    for pt in left_points:
        draw.text((120, y_p), f"• {pt}", fill="#F3F4F6", anchor="lm", font_size=15)
        y_p += 55

    draw.ellipse([570, 290, 630, 350], fill="#D97706", outline="#FFFFFF", width=3)
    draw.text((600, 320), "VS", fill="#FFFFFF", anchor="mm", font_size=18)

    draw.rounded_rectangle([640, 100, 1120, 540], radius=14, fill="#0D9488")
    draw.text((880, 140), right_title, fill="#FFFFFF", anchor="mm", font_size=20)
    draw.line([670, 175, 1090, 175], fill="#2DD4BF", width=2)
    y_p = 210
    for pt in right_points:
        draw.text((680, y_p), f"• {pt}", fill="#F3F4F6", anchor="lm", font_size=15)
        y_p += 55

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# LAYOUT STYLE E: SEQUENCE TIMELINE
def draw_sequence_timeline(filename, title, steps):
    img, draw, width, height = get_canvas(title)

    n = len(steps)
    draw.line([100, 300, width - 100, 300], fill="#1E3A8A", width=6)

    x_positions = [100 + idx * (width - 200) // (n - 1) for idx in range(n)]
    colors = ["#1E3A8A", "#2563EB", "#0284C7", "#059669", "#7C3AED"]

    for idx, (step_title, step_desc) in enumerate(steps):
        x = x_positions[idx]
        y_node = 300

        draw.ellipse([x - 22, y_node - 22, x + 22, y_node + 22], fill=colors[idx % len(colors)], outline="#FFFFFF", width=3)
        draw.text((x, y_node), str(idx + 1), fill="#FFFFFF", anchor="mm", font_size=16)

        is_top = (idx % 2 == 0)
        card_y1 = y_node - 180 if is_top else y_node + 40
        card_y2 = y_node - 40 if is_top else y_node + 180

        draw.line([x, y_node, x, card_y2 if is_top else card_y1], fill="#94A3B8", width=2)
        draw.rounded_rectangle([x - 90, card_y1, x + 90, card_y2], radius=10, fill=colors[idx % len(colors)])
        draw.text((x, card_y1 + 25), step_title, fill="#FFFFFF", anchor="mm", font_size=14)
        draw.text((x, card_y1 + 55), step_desc, fill="#F9FAFB", anchor="mm", font_size=11)

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# Generate ALL 27 Visually Distinct Diagrams
print("Generating all 27 distinct diagrams...")

draw_side_by_side("fig_ch01.png", "Figure 1: Enterprise Scaling Frameworks Trade-off Comparison",
                  "Scaled Agile (SAFe 6.0)", ["Agile Release Trains (ARTs)", "Program Increment (8-12 wks)", "High Governance Overhead", "Best for Regulated Domains"],
                  "Large-Scale Scrum (LeSS)", ["Single Backlog & PO", "Systemic Descaling Philosophy", "Low Process Overhead", "Best for Tech-Native Teams"])

draw_agent_network("fig_ch02.png", "Figure 2: Lyssa Adkins Agile Coaching Stances & Competency Wheel",
                   "Agile Coach\nCompetency",
                   [("Teaching Stance", "Instructional Skill Build"),
                    ("Mentoring Stance", "Experience Sharing"),
                    ("Coaching Stance", "Socratic Inquiry"),
                    ("Facilitation", "High-Stakes Sessions"),
                    ("Domain Mastery", "Technical Engineering")])

draw_sequence_timeline("fig_ch03.png", "Figure 3: Executive Strategic OKR to Squad Backlog Line-of-Sight",
                       [("Strategic OKR", "Executive ARR Target"), ("Portfolio Epic", "WSJF Investment"),
                        ("Feature Story", "Squad Backlog Ticket"), ("CI/CD Pipeline", "Automated Policy Gate"),
                        ("Production Release", "Value Telemetry")])

draw_stack_diagram("fig_ch04.png", "Figure 4: Enterprise Flow Telemetry & Percentile Lead Time Stack",
                  [("Executive Flow Dashboard", "Real-Time Telemetry Interface", ["Grafana", "Power BI", "Tableau"]),
                   ("Flow Metrics Engine", "Core Analytics Calculations", ["Flow Velocity", "Flow Time (P85)", "Flow Load", "Flow Efficiency"]),
                   ("Data Pipeline Ingestion", "Issue & CI/CD Streaming", ["Kafka Event Bus", "Jira REST API", "ADO OData Feed"]),
                   ("Persistence Store", "Time-Series Data Storage", ["Elasticsearch", "PostgreSQL", "InfluxDB"])])

draw_stack_diagram("fig_ch05.png", "Figure 5: Jira Data Center Clustered Infrastructure Architecture",
                  [("Load Balancing Tier", "Traffic Distribution & SSL Termination", ["HAProxy", "AWS ALB", "F5 Big-IP"]),
                   ("Application Cluster Nodes", "Active-Active Processing & Hazelcast", ["Jira App Node 1", "Jira App Node 2", "Lucene Index"]),
                   ("Shared File System", "Centralized Attachments & Avatars", ["Amazon EFS", "Shared NFS Store"]),
                   ("Database Tier", "Primary-Replica Database Persistence", ["PostgreSQL Primary", "PostgreSQL Read Replica"])])

draw_decision_flowchart("fig_ch06.png", "Figure 6: Jira DC Workflow Validator & ScriptRunner Governance Gate",
                        [{"type": "start", "label": "Developer Submits Resolution Transition"},
                         {"type": "process", "title": "ScriptRunner Validator Check", "sub": "Inspect linked pull requests & sub-tasks"},
                         {"type": "decision", "label": "PR Merged & Sub-Tasks Closed?", "no_label": "Block Transition"},
                         {"type": "process", "title": "Execute Post-Function Script", "sub": "Update parent Epic & send Slack alert"},
                         {"type": "end", "label": "Transition Issue to Done"}])

draw_sequence_timeline("fig_ch07.png", "Figure 7: Advanced Roadmaps Multi-Tier Portfolio Hierarchy Timeline",
                       [("Initiative Level 3", "Strategic Corporate Pillar"), ("Portfolio Epic Level 2", "Program Increment Scale"),
                        ("Jira Epic Level 1", "Feature Squad Backlog"), ("Capacity Allocation", "Sprint Point Balancing"),
                        ("Target Date Commit", "Sandbox Live Update")])

draw_agent_network("fig_ch08.png", "Figure 8: Jira REST API v2 & Webhook Event Streaming Architecture",
                   "Jira DC Event\nEngine",
                   [("REST API v2 Search", "Programmatic JQL Queries"),
                    ("Webhook Event Stream", "Real-Time JSON Payloads"),
                    ("PostgreSQL SQL", "Direct DB Schema Analytics"),
                    ("Kafka Event Bus", "High-Throughput Streaming"),
                    ("ScriptRunner REST", "Custom Script Endpoints")])

draw_stack_diagram("fig_ch09.png", "Figure 9: Jira Cloud Multi-Tenant Architecture & Atlassian Access",
                  [("Atlassian Access Layer", "Centralized Identity Governance", ["Okta SAML SSO", "Entra ID SCIM", "User Lifecycle"]),
                   ("Multi-Tenant EKS Platform", "AWS Hosted Microservices", ["GraphQL API Gateway", "Jira Software Cloud", "JSM Cloud"]),
                   ("Data Residency Pinning", "In-Region Compliant Storage", ["US Data Residency", "EU Data Residency", "AU Data Residency"]),
                   ("Atlassian Data Lake", "Aggregated Cross-Product Analytics", ["SQL Query Engine", "Atlassian Analytics"])])

draw_side_by_side("fig_ch10.png", "Figure 10: Atlassian Forge Serverless Runtime vs Connect Architecture",
                  "Atlassian Forge Platform", ["Serverless AWS Lambda Hosting", "Built-In Data Residency", "Atlassian Managed Security", "Declarative UI Kit Framework"],
                  "Connect Framework", ["Remote Custom Server (AWS/GCP)", "Custom JWT Authentication", "Self-Managed Infrastructure", "Custom Remote iFrame UI"])

draw_decision_flowchart("fig_ch11.png", "Figure 11: JSM P1 Critical Incident Escalation & Asset CMDB Flow",
                        [{"type": "start", "label": "P1 Production Outage Reported"},
                         {"type": "process", "title": "Opsgenie On-Call Escalation", "sub": "Auto-trigger SMS & Slack alerts"},
                         {"type": "decision", "label": "Assets CMDB Object Identified?", "no_label": "Manual Triage"},
                         {"type": "process", "title": "Automated Deployment Rollback", "sub": "Trigger GitHub Actions rollback"},
                         {"type": "end", "label": "Incident Resolved & MTTR Logged"}])

draw_sequence_timeline("fig_ch12.png", "Figure 12: Jira DC to Cloud Migration Execution Blueprint",
                       [("Readiness Assessment", "Custom Field & Script Scrubbing"), ("Dry Run Staging", "48-Hour Migration Sandbox"),
                        ("JCMA Execution", "Project Batch Data Migration"), ("Forge Refactoring", "Groovy to TypeScript Rewrite"),
                        ("Post-Migration Audit", "100% Data Parity Verification")])

draw_stack_diagram("fig_ch13.png", "Figure 13: Azure Boards Process Architecture & Area/Iteration Paths",
                  [("Process Model Layer", "Inherited WIT Configurations", ["Agile Process", "Scrum Process", "CMMI Process"]),
                   ("Work Item Type Layer", "Custom WIT Definitions & Rules", ["Epic WIT", "Feature WIT", "User Story WIT", "Bug WIT"]),
                   ("Area Path Boundary", "Organizational Value Streams", ["Enterprise \\ Division A \\ Squad Alpha"]),
                   ("Iteration Path Cadence", "Time-Bound Delivery Timelines", ["Release 2026 \\ PI 3 \\ Sprint 3.2"])])

draw_sequence_timeline("fig_ch14.png", "Figure 14: Azure Delivery Plans 2.0 & Predecessor Dependency Timeline",
                       [("Portfolio Backlogs", "Feature Epic Scope"), ("Delivery Plans 2.0", "Multi-Team Timeline"),
                        ("Predecessor Link", "Critical Path Marker"), ("Capacity Balance", "Sprint Workload Adjustment"),
                        ("OData Telemetry", "Power BI Flow Dashboard")])

draw_decision_flowchart("fig_ch15.png", "Figure 15: Azure Pipelines YAML Security & Quality Gate Pipeline",
                        [{"type": "start", "label": "Developer Submits Pull Request"},
                         {"type": "process", "title": "YAML Build & Unit Test Stage", "sub": "Verify unit test coverage > 80%"},
                         {"type": "decision", "label": "SonarQube SAST Gate Passed?", "no_label": "Reject Pull Request"},
                         {"type": "process", "title": "Environment REST Gate Approval", "sub": "Trigger automated staging deploy"},
                         {"type": "end", "label": "Production Release Deployed"}])

draw_agent_network("fig_ch16.png", "Figure 16: Jira & Azure DevOps Coexistence & Cross-Platform Sync",
                   "Coexistence\nHub",
                   [("Jira Cloud Master", "Business Backlog Master"),
                    ("Exalate Engine", "Bi-Directional Payload Sync"),
                    ("Azure Boards", "Engineering Task Squad"),
                    ("Entra ID SSO", "Unified User Identity Map"),
                    ("Enterprise Data Lake", "Cross-Platform Reporting")])

draw_stack_diagram("fig_ch17.png", "Figure 17: Enterprise Generative AI Stack & PgVector RAG Architecture",
                  [("User Application Layer", "Developer & Coach Interface", ["Slack Bot", "MS Teams App", "IDE Plugin"]),
                   ("RAG Context Orchestrator", "Hybrid Vector Search Engine", ["Dense Embeddings", "BM25 Sparse", "Cohere Rerank"]),
                   ("Vector Database Store", "Semantic Embeddings Repository", ["PgVector Store", "ChromaDB", "Qdrant Store"]),
                   ("Foundation LLM Engine", "Enterprise Model Execution", ["GPT-4o", "Claude 3.5 Sonnet", "Llama 3 70B"])])

draw_sequence_timeline("fig_ch18.png", "Figure 18: Chain-of-Thought Prompt Engineering & BDD Generation",
                       [("Requirement Summary", "Raw Epic Input"), ("Few-Shot System Prompt", "Socratic Persona"),
                        ("Chain-of-Thought", "Step-by-Step Logic"), ("INVEST Quality Linter", "JSON Schema Check"),
                        ("Gherkin BDD Scenarios", "Given-When-Then Output")])

draw_agent_network("fig_ch19.png", "Figure 19: CrewAI Multi-Agent Autonomous Squad & MCP Server Architecture",
                   "CrewAI Agent\nManager",
                   [("PO Agent", "Epic Story Refinement"),
                    ("QA Agent", "Gherkin BDD Generator"),
                    ("Architecture Agent", "Microservice Dependency Check"),
                    ("MCP Jira Server", "Programmatic Issue API"),
                    ("MCP Test Runner", "Automated Execution Engine")])

draw_decision_flowchart("fig_ch20.png", "Figure 20: EU AI Act Compliance & PII Masking Gateway Architecture",
                        [{"type": "start", "label": "Developer Sends Prompt Request"},
                         {"type": "process", "title": "PII Masking Gateway Inspection", "sub": "Anonymize sensitive customer PII"},
                         {"type": "decision", "label": "Zero Data Retention SLA Valid?", "no_label": "Block API Request"},
                         {"type": "process", "title": "Enterprise LLM Processing", "sub": "Execute model prompt safely"},
                         {"type": "end", "label": "Audit Logged in Compliance Ledger"}])

draw_decision_flowchart("fig_ch21.png", "Figure 21: AI Backlog Refinement & INVEST Scoring Linter Pipeline",
                        [{"type": "start", "label": "Raw Epic Requirement Received"},
                         {"type": "process", "title": "LLM Backlog Decomposition", "sub": "Decompose into 5 Feature Stories"},
                         {"type": "decision", "label": "INVEST Score > 85/100?", "no_label": "Re-prompt PO Agent"},
                         {"type": "process", "title": "Automated BDD Generation", "sub": "Generate Given-When-Then Scenarios"},
                         {"type": "end", "label": "Approved for Sprint Intake"}])

draw_sequence_timeline("fig_ch22.png", "Figure 22: AI Standup Summarizer & Retrospective Sentiment Telemetry",
                       [("Git Commits + PR Logs", "Daily Telemetry Ingestion"), ("AI Standup Bot", "Slack Blocker Notification"),
                        ("Retro Note Sentiment", "NLP Psychological Safety Score"), ("Action Experiment", "Auto-Created Jira Task"),
                        ("Velocity Impact Audit", "Cycle Time Telemetry Review")])

draw_side_by_side("fig_ch23.png", "Figure 23: Monte Carlo 10,000-Run Delivery Forecast Distribution",
                  "Monte Carlo Probabilistic Targets", ["P50 Target (50% Likelihood): 18 Days", "P85 Commitment (85% Likelihood): 24 Days", "P95 Risk Buffer (95% Likelihood): 30 Days"],
                  "Determinism Risk (Anti-Pattern)", ["Single-Date Commitments (High Risk)", "Ignoring Velocity Variance", "Unbuffered Buffer Depletion"])

draw_stack_diagram("fig_ch24.png", "Figure 24: Enterprise AI Agile Coach Bot Full-Stack Architecture",
                  [("Conversational UI Layer", "Enterprise Client Interfaces", ["Slack App", "MS Teams Bot", "React Web Portal"]),
                   ("CrewAI Orchestration", "Agent Reasoning & Routing Engine", ["PO Agent", "QA Agent", "Retro Sentiment Agent"]),
                   ("Model Context Protocol (MCP)", "Standardized Tool API Server Gateway", ["Jira REST MCP", "ADO OData MCP", "Git MCP"]),
                   ("Knowledge & LLM Layer", "Vector RAG Store & Foundation LLM", ["PgVector Store", "Private Llama 3 70B", "Azure OpenAI"])])

draw_stack_diagram("fig_appA.png", "Figure 25: Appendix A: Prompt Engineering Library Catalog Schema",
                  [("System Persona Tier", "Socratic Coaching Persona Prompts", ["Agile Persona", "QA Persona", "PO Persona"]),
                   ("Task Execution Tier", "Story Decomposition & BDD Generation", ["Epic Splitter", "Gherkin Gen", "INVEST Linter"]),
                   ("INVEST Linter Guardrail", "Pydantic JSON Schema Validation", ["Strict Schema", "Fallback Retry"]),
                   ("Token Parameter Tier", "Model Temperature & Top-P Configuration", ["Temp: 0.2", "Top-P: 0.95"])])

draw_side_by_side("fig_appB.png", "Figure 26: Appendix B: JQL vs WIQL Query Translation Architecture",
                  "Jira Query Language (JQL)", ["Target: Jira DC & Cloud", "Syntax: issueFunction in epicsOf()", "AST Parser: Programmatic JQL AST"],
                  "Work Item Query Language (WIQL)", ["Target: Azure Boards Engine", "Syntax: SELECT [System.Id] WHERE WorkItemType", "Data Output: Power BI OData Feed"])

draw_agent_network("fig_appC.png", "Figure 27: Appendix C: Transformation Maturity Assessment Model",
                   "Agile & AI\nMaturity Model",
                   [("Phase 1: Audit", "Value Stream Queue Mapping"),
                    ("Phase 2: Guardrails", "Automated CI/CD Policy Gates"),
                    ("Phase 3: Telemetry", "Real-Time Flow Dashboards"),
                    ("Phase 4: AI Scaling", "Agentic Squad Execution")])

print("All 27 visually diverse diagrams successfully generated!")
