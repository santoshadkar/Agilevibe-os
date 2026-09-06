import os
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

OUTPUT_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\diagrams"
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Generating 27 high-resolution publication figures for all chapters & appendices...")

# Function to draw a clean architecture box diagram
def create_block_diagram(filename, title, blocks, colors):
    fig, ax = plt.subplots(figsize=(10, 4.5), dpi=300)
    ax.axis('off')
    n = len(blocks)
    x_positions = np.linspace(0.12, 0.88, n)
    for idx, (b_title, b_desc) in enumerate(blocks):
        box_props = dict(boxstyle='round,pad=0.8', facecolor=colors[idx % len(colors)], edgecolor='none')
        ax.text(x_positions[idx], 0.5, f"{b_title}\n\n{b_desc}", ha='center', va='center', color='white', fontweight='bold', fontsize=10, bbox=box_props)
        if idx < n - 1:
            ax.annotate('', xy=(x_positions[idx+1]-0.10, 0.5), xytext=(x_positions[idx]+0.10, 0.5),
                        arrowprops=dict(arrowstyle="->", lw=2.5, color='#1E3A8A'))
    ax.set_title(title, fontsize=13, fontweight='bold', pad=15)
    plt.tight_layout()
    plt.savefig(os.path.join(OUTPUT_DIR, filename))
    plt.close()

# 1-4 generated already
# 5. Jira DC Cluster
create_block_diagram("fig_ch05.png", "Jira Data Center Active-Active Clustered Topology",
                     [("HAProxy Load Balancer", "Sticky Session Cookie"), ("Jira DC Node 1", "Hazelcast Cluster State"),
                      ("Jira DC Node 2", "Lucene Local Index"), ("PostgreSQL Replica", "Shared EFS Attachments")],
                     ['#1E3A8A', '#4F46E5', '#0284C7', '#059669'])

# 6. Workflow Engineering
create_block_diagram("fig_ch06.png", "Jira Workflow State Machine & ScriptRunner Validation Gates",
                     [("Open State", "Draft Requirement"), ("In Progress", "ScriptRunner Validator"),
                      ("Code Review", "Merged PR Required"), ("Closed / Done", "Immutable Log Gate")],
                     ['#475569', '#2563EB', '#D97706', '#059669'])

# 7. Advanced Roadmaps Hierarchy
create_block_diagram("fig_ch07.png", "Advanced Roadmaps Multi-Tier Portfolio Hierarchy Timeline",
                     [("Strategic Initiative", "Level 3 Hierarchy"), ("Portfolio Epic", "Level 2 Hierarchy"),
                      ("Jira Epic", "Level 1 Hierarchy"), ("Feature User Story", "Squad Level Execution")],
                     ['#312E81', '#4338CA', '#3B82F6', '#10B981'])

# 8. Jira REST API & Webhooks
create_block_diagram("fig_ch08.png", "Jira REST API Event Listener & Webhook Telemetry Streaming",
                     [("Jira Issue Event", "Status Transition"), ("Webhook Listener", "JSON Payload Stream"),
                      ("Kafka Event Bus", "High-Throughput Queue"), ("Flow Analytics Engine", "Real-Time Dashboard")],
                     ['#1E3A8A', '#0284C7', '#7C3AED', '#059669'])

# 9. Jira Cloud AWS Architecture
create_block_diagram("fig_ch09.png", "Jira Cloud Multi-Tenant AWS Infrastructure & Atlassian Access SAML",
                     [("Atlassian Access", "SAML SSO / SCIM Sync"), ("AWS Multi-Tenant API", "REST v3 Rate Bucket"),
                      ("Tenant Data Residency", "In-Region AWS Pinning"), ("Atlassian Data Lake", "SQL BI Engine")],
                     ['#1E3A8A', '#2563EB', '#0D9488', '#059669'])

# 10. Forge vs Connect
create_block_diagram("fig_ch10.png", "Atlassian Forge Serverless Architecture vs Connect Framework",
                     [("Forge UI Kit App", "TypeScript Component"), ("Serverless AWS Lambda", "Atlassian Managed Sandbox"),
                      ("Forge Storage API", "Key-Value Store"), ("Jira API Event Gate", "Automated Validation")],
                     ['#4338CA', '#6D28D9', '#2563EB', '#059669'])

# 11. JSM Incident & Assets CMDB
create_block_diagram("fig_ch11.png", "Jira Service Management Incident Escalation & Assets CMDB Graph",
                     [("Customer Portal Request", "Self-Service Deflection"), ("Opsgenie P1 Alert", "Auto-Trigger On-Call"),
                      ("Assets CMDB Object", "Infrastructure Dependency"), ("GitHub Auto-Rollback", "Incident Recovery")],
                     ['#991B1B', '#DC2626', '#D97706', '#059669'])

# 12. DC to Cloud Migration
create_block_diagram("fig_ch12.png", "Jira DC to Cloud Migration Execution & JCMA Batch Process",
                     [("Readiness Assessment", "Groovy & Field Scrub"), ("JCMA Batch Execution", "48-Hour Weekend Migration"),
                      ("Forge Script Refactoring", "TypeScript Conversion"), ("Post-Migration Audit", "100% Data Parity Check")],
                     ['#1E3A8A', '#4F46E5', '#0284C7', '#059669'])

# 13. Azure Boards Area & Iteration Paths
create_block_diagram("fig_ch13.png", "Azure Boards Custom Process & Area/Iteration Path Architecture",
                     [("Enterprise Process Model", "Inherited WIT Template"), ("Area Path Boundary", "Value Stream Topology"),
                      ("Iteration Path Cadence", "PI Sprint Cadence"), ("WIQL Telemetry Engine", "Work Item Tree Analytics")],
                     ['#1E3A8A', '#2563EB', '#0284C7', '#059669'])

# 14. ADO Delivery Plans 2.0
create_block_diagram("fig_ch14.png", "Azure Delivery Plans 2.0 Timeline & Dependency Predecessor Links",
                     [("Portfolio Backlog", "Feature Epic Alignment"), ("Delivery Plans 2.0", "Multi-Team Timeline View"),
                      ("Predecessor Link Marker", "Critical Path Alert"), ("OData Telemetry Feed", "Power BI Dashboards")],
                     ['#312E81', '#4338CA', '#2563EB', '#059669'])

# 15. Azure Pipelines Quality Gates
create_block_diagram("fig_ch15.png", "Azure Pipelines YAML CI/CD & SonarQube SAST Quality Gates",
                     [("YAML Build Stage", "Unit Test Coverage >80%"), ("SonarQube SAST Scan", "Zero Critical CVE Gate"),
                      ("Environment REST Gate", "Automated Approval Policy"), ("Production Release", "Continuous Delivery")],
                     ['#1E3A8A', '#0284C7', '#D97706', '#059669'])

# 16. Jira & ADO Coexistence Sync
create_block_diagram("fig_ch16.png", "Jira & Azure DevOps Bi-Directional Synchronization Architecture",
                     [("Jira Cloud Backlog", "Business Requirement Epics"), ("Exalate Sync Engine", "Bi-Directional Payload Sync"),
                      ("Azure Boards Work Items", "Engineering Feature Squad"), ("Unified Data Lake", "Cross-Platform Flow Telemetry")],
                     ['#1E3A8A', '#7C3AED', '#2563EB', '#059669'])

# 17. Generative AI & Vector RAG Architecture
create_block_diagram("fig_ch17.png", "Enterprise Generative AI Stack & PgVector RAG Hybrid Search Architecture",
                     [("User Prompt Input", "Context & History"), ("PgVector Hybrid Search", "Dense + Sparse BM25 RAG"),
                      ("Foundation LLM (GPT-4o)", "Context Window Reasoning"), ("Automated Output Gate", "Fact-Checked Response")],
                     ['#312E81', '#4F46E5', '#0284C7', '#059669'])

# 18. Prompt Engineering & Chain-of-Thought
create_block_diagram("fig_ch18.png", "Chain-of-Thought Prompt Engineering & INVEST Verification Pipeline",
                     [("Epic Requirement Text", "Raw Requirement Input"), ("Few-Shot System Prompt", "Socratic Coaching Persona"),
                      ("Chain-of-Thought Reasoning", "Step-by-Step Logic Execution"), ("INVEST JSON Output", "Pydantic Schema Validation")],
                     ['#1E3A8A', '#4338CA', '#7C3AED', '#059669'])

# 19. CrewAI & MCP Server Framework
create_block_diagram("fig_ch19.png", "CrewAI Multi-Agent Squad & Model Context Protocol (MCP) Server Integration",
                     [("Product Owner Agent", "Epic Story Decomposition"), ("Model Context Protocol", "TypeScript MCP Server"),
                      ("Jira & ADO APIs", "Tool Execution Layer"), ("QA Engineer Agent", "Gherkin BDD Test Generation")],
                     ['#1E3A8A', '#0284C7', '#059669', '#D97706'])

# 20. AI Ethics & EU AI Act Governance
create_block_diagram("fig_ch20.png", "EU AI Act Regulatory Compliance Governance & PII Masking Gateway",
                     [("User Prompt Input", "Developer Query"), ("PII Masking Gateway", "Anonymization Linter"),
                      ("Enterprise LLM API", "Zero-Data-Retention SLA"), ("Audit Decision Log", "EU AI Act Traceability")],
                     ['#312E81', '#4F46E5', '#059669', '#D97706'])

# 21. AI Backlog Refinement Pipeline
create_block_diagram("fig_ch21.png", "AI-Powered Backlog Refinement & INVEST Quality Scoring Pipeline",
                     [("Draft Requirement Ticket", "Raw User Feedback"), ("LLM Feature Refiner", "Edge Case Discovery"),
                      ("Gherkin Generator", "Given-When-Then BDD Scenarios"), ("INVEST Scorecard >85", "Approved for Sprint Intake")],
                     ['#1E3A8A', '#2563EB', '#0D9488', '#059669'])

# 22. AI Standup & Retro Sentiment Telemetry
create_block_diagram("fig_ch22.png", "AI Daily Standup Summarizer & Retrospective Sentiment Telemetry",
                     [("Git Commits + PR Logs", "Daily Telemetry Ingestion"), ("AI Standup Bot", "Blocker Alerting in Slack"),
                      ("Retro Note Sentiment NLP", "Psychological Safety Scoring"), ("Action Experiment Tracker", "Jira Automation Loop")],
                     ['#1E3A8A', '#7C3AED', '#0284C7', '#059669'])

# 23. Monte Carlo 10,000-Run Probability Distribution
fig, ax = plt.subplots(figsize=(10, 4.5), dpi=300)
sim_days = np.random.negative_binomial(15, 0.4, 10000) + 10
ax.hist(sim_days, bins=35, color='#4F46E5', alpha=0.75, edgecolor='black')
p50, p85, p95 = np.percentile(sim_days, [50, 85, 95])
ax.axvline(p50, color='#F59E0B', linestyle='--', linewidth=2.5, label=f'P50 Target: {p50:.0f} Days')
ax.axvline(p85, color='#EF4444', linestyle='--', linewidth=2.5, label=f'P85 Commitment: {p85:.0f} Days')
ax.axvline(p95, color='#B91C1C', linestyle='--', linewidth=2.5, label=f'P95 Risk Buffer: {p95:.0f} Days')
ax.set_title('Monte Carlo 10,000-Run Simulation Release Delivery Forecast Distribution', fontsize=13, fontweight='bold', pad=15)
ax.set_xlabel('Simulated Days to Release Completion', fontsize=11)
ax.set_ylabel('Simulation Frequency', fontsize=11)
ax.legend(fontsize=11)
plt.tight_layout()
plt.savefig(os.path.join(OUTPUT_DIR, "fig_ch23.png"))
plt.close()

# 24. Custom AI Coaching Agent Architecture
create_block_diagram("fig_ch24.png", "Enterprise AI Agile Coach Full-Stack Architecture Blueprint",
                     [("Slack / Teams Interface", "Conversational AI Client"), ("LangChain / CrewAI Engine", "Agent Reasoning & Routing"),
                      ("PgVector Knowledge Store", "Company Agile Playbook RAG"), ("Jira / ADO MCP Tools", "Autonomous Database Execution")],
                     ['#1E3A8A', '#4F46E5', '#0284C7', '#059669'])

# Appendices A, B, C
create_block_diagram("fig_appA.png", "Appendix A: Enterprise AI Prompt Engineering Library Catalog Schema",
                     [("System Persona Prompt", "Socratic Coaching Stance"), ("Task Prompt Template", "Context & Variables"),
                      ("INVEST Guardrail Rule", "Pydantic Schema Output"), ("Model Token Parameter", "Temperature & Top-P Setup")],
                     ['#1E3A8A', '#2563EB', '#7C3AED', '#059669'])

create_block_diagram("fig_appB.png", "Appendix B: JQL vs WIQL Query Translation & Telemetry Matrix Schema",
                     [("JQL Query Syntax", "Jira Data Center / Cloud"), ("Query Translation Layer", "AST Query Parsing Engine"),
                      ("WIQL Query Syntax", "Azure Boards Execution"), ("Unified Flow Data", "Cross-Platform Analytics Feed")],
                     ['#1E3A8A', '#0284C7', '#2563EB', '#059669'])

create_block_diagram("fig_appC.png", "Appendix C: Enterprise Agile & AI Transformation Maturity Assessment Radar",
                     [("Baseline Audit Phase", "Value Stream Mapping"), ("Automated Quality Gates", "CI/CD Policy Enforcement"),
                      ("Telemetry Dashboarding", "Flow Efficiency Metrics"), ("AI Co-Pilot Scaling", "Agentic Squad Execution")],
                     ['#312E81', '#4F46E5', '#0D9488', '#059669'])

print("All 27 figures generated successfully!")
