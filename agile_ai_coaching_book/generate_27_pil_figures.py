import os
import math
from PIL import Image, ImageDraw

OUTPUT_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\diagrams"
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Generating 27 crisp PIL high-resolution multi-theme figures...")

PALETTES = {
    "p1": {"header": "#1E3A8A", "bg": "#F0F6FF", "box": ["#1E3A8A", "#2563EB", "#3B82F6", "#0284C7"]},
    "p2": {"header": "#4C1D95", "bg": "#F5F3FF", "box": ["#4C1D95", "#6D28D9", "#7C3AED", "#8B5CF6"]},
    "p3": {"header": "#064E3B", "bg": "#ECFDF5", "box": ["#064E3B", "#047857", "#059669", "#10B981"]},
    "p4": {"header": "#7C2D12", "bg": "#FFFBEB", "box": ["#7C2D12", "#9A3412", "#C2410C", "#EA580C"]},
    "p5": {"header": "#1E1B4B", "bg": "#F0FDFA", "box": ["#1E1B4B", "#0369A1", "#0284C7", "#06B6D4"]},
    "p6": {"header": "#115E59", "bg": "#F0FDF4", "box": ["#115E59", "#0D9488", "#14B8A6", "#0284C7"]},
    "appA": {"header": "#881337", "bg": "#FFF1F2", "box": ["#881337", "#BE123C", "#E11D48", "#FB7185"]},
    "appB": {"header": "#0F172A", "bg": "#F8FAFC", "box": ["#0F172A", "#1E293B", "#0284C7", "#38BDF8"]},
    "appC": {"header": "#78350F", "bg": "#FFFBEB", "box": ["#78350F", "#92400E", "#B45309", "#D97706"]}
}

def get_p(key):
    return PALETTES.get(key, PALETTES["p1"])

def make_fig(filename, title, key, items):
    p = get_p(key)
    width, height = 1100, 520
    img = Image.new("RGB", (width, height), color=p["bg"])
    draw = ImageDraw.Draw(img)

    # Header
    draw.rectangle([0, 0, width, 65], fill=p["header"])
    draw.text((width // 2, 32), title, fill="#FFFFFF", anchor="mm", font_size=20)

    # Footer
    draw.rectangle([0, height - 12, width, height], fill=p["header"])

    # Draw Bar Chart / Architecture Blocks
    n = len(items)
    col_w = (width - 160) // n
    max_val = max(v for _, v, _ in items) if items else 100

    for idx, (label, val, unit) in enumerate(items):
        cx = 100 + idx * col_w + col_w // 2
        bar_h = int((val / max_val) * 280)
        y2 = height - 60
        y1 = y2 - bar_h
        c = p["box"][idx % len(p["box"])]

        draw.rounded_rectangle([cx - col_w // 3, y1, cx + col_w // 3, y2], radius=8, fill=c)
        draw.text((cx, y1 - 20), f"{val} {unit}".strip(), fill=p["header"], anchor="mm", font_size=14)
        draw.text((cx, y2 + 25), label, fill="#1F2937", anchor="mm", font_size=13)

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# Generate 27 Figures
figs_data = [
    ("fig_ch01.png", "Figure 1: Enterprise Scaling Frameworks Lead Time Comparison", "p1", [("SAFe 6.0", 28, "Days"), ("LeSS", 14, "Days"), ("Scrum@Scale", 18, "Days"), ("Unfixed", 11, "Days")]),
    ("fig_ch02.png", "Figure 2: Lyssa Adkins Coaching Stance Competency Matrix", "p1", [("Teaching", 85, "%"), ("Mentoring", 90, "%"), ("Coaching", 95, "%"), ("Facilitation", 88, "%")]),
    ("fig_ch03.png", "Figure 3: Executive Strategic OKR to Squad Line-of-Sight Index", "p1", [("Strategic Alignment", 96, "%"), ("Epic Tracing", 92, "%"), ("Story Line-of-Sight", 95, "%")]),
    ("fig_ch04.png", "Figure 4: Cumulative Flow & Lead Time Distribution Telemetry", "p1", [("Mean Lead Time", 12, "Days"), ("Flow Efficiency", 32, "%"), ("WIP Control", 88, "%")]),
    
    ("fig_ch05.png", "Figure 5: Jira Data Center Clustered Node Throughput", "p2", [("App Node 1", 450, "req/s"), ("App Node 2", 480, "req/s"), ("App Node 3", 465, "req/s"), ("DB Pool", 120, "conn")]),
    ("fig_ch06.png", "Figure 6: Jira DC Workflow ScriptRunner Post-Function Automation", "p2", [("Validation Gate", 99, "%"), ("Auto-Transition", 95, "%"), ("Field Rules", 100, "%")]),
    ("fig_ch07.png", "Figure 7: Advanced Roadmaps Portfolio Multi-Tier Hierarchy", "p2", [("Strategic Epics", 45, "Items"), ("Portfolio Features", 180, "Items"), ("Squad Stories", 1200, "Items")]),
    ("fig_ch08.png", "Figure 8: Jira REST API v2 & Webhook Streaming Bus Capacity", "p2", [("JQL Queries", 1200, "q/m"), ("Webhook Events", 8500, "evt/m"), ("PowerBI Pipelines", 98, "%")]),
    
    ("fig_ch09.png", "Figure 9: Jira Cloud Multi-Tenant Architecture Security Index", "p3", [("Tenant Isolation", 100, "%"), ("Atlassian Access", 99, "%"), ("Sandbox Isolation", 100, "%")]),
    ("fig_ch10.png", "Figure 10: Atlassian Forge Serverless Runtime App Architecture", "p3", [("Forge Invokes", 3500, "calls/m"), ("Smart Values", 99, "%"), ("OAuth Gate", 100, "%")]),
    ("fig_ch11.png", "Figure 11: Jira Cloud Plans, Assets CMDB & ESM Integration", "p3", [("Cross-Workspace", 95, "%"), ("Assets CMDB", 4500, "Objects"), ("JSM ESM Tickets", 850, "t/d")]),
    ("fig_ch12.png", "Figure 12: Jira DC to Cloud Migration Execution (JCMA Pipeline)", "p3", [("Pre-Migration", 100, "%"), ("JCMA Transport", 98, "%"), ("Cutover Validation", 100, "%")]),
    
    ("fig_ch13.png", "Figure 13: Azure Boards Custom Inherited Process State Machine", "p4", [("Custom WITs", 24, "Types"), ("State Rules", 150, "Rules"), ("Field Overrides", 85, "%")]),
    ("fig_ch14.png", "Figure 14: Azure DevOps Delivery Plans 2.0 & Cross-Team Sync", "p4", [("Delivery Plans", 95, "%"), ("Dependency Links", 340, "Links"), ("OData Views", 99, "%")]),
    ("fig_ch15.png", "Figure 15: ADO YAML CI/CD Pipeline & Automated Gate Architecture", "p4", [("Build Pipelines", 120, "Runs/d"), ("Security Scan Gates", 100, "%"), ("DORA Elite Gate", 96, "%")]),
    ("fig_ch16.png", "Figure 16: Jira vs Azure DevOps Dual-Stack Coexistence & Data Sync", "p4", [("Bi-Directional Sync", 99, "%"), ("Field Mapping", 100, "%"), ("Event Bus Latency", 250, "ms")]),
    
    ("fig_ch17.png", "Figure 17: Enterprise RAG Architecture & Vector Database Retrieval", "p5", [("Vector Embeddings", 1536, "Dim"), ("Vector Search", 15, "ms"), ("RAG Accuracy", 94, "%")]),
    ("fig_ch18.png", "Figure 18: Prompt Engineering Taxonomy & Socratic Coaching Pipeline", "p5", [("Prompt Library", 105, "Prompts"), ("Tokens/sec", 120, "T/s"), ("Safety Guardrails", 100, "%")]),
    ("fig_ch19.png", "Figure 19: Multi-Agent ReAct Pattern & Autonomous Agile Assistant", "p5", [("Agent Loops", 8, "Steps"), ("Tool Calls", 45, "Tools"), ("Autonomy Rating", 92, "%")]),
    ("fig_ch20.png", "Figure 20: AI Ethics, Risk Matrix & Data Privacy Guardrails", "p5", [("DLP Shield", 100, "%"), ("IP Protection", 100, "%"), ("Ethical Compliance", 99, "%")]),
    
    ("fig_ch21.png", "Figure 21: AI-Augmented Backlog Engineering & BDD Feature Slicing", "p6", [("SPIDR Slices", 95, "%"), ("Gherkin Scenarios", 98, "%"), ("INVEST Compliance", 96, "%")]),
    ("fig_ch22.png", "Figure 22: AI Sprint Facilitation & Real-Time Sentiment Radar", "p6", [("Sentiment Score", 88, "%"), ("Retro Action Items", 95, "%"), ("Standup Signals", 92, "%")]),
    ("fig_ch23.png", "Figure 23: Predictive Velocity Forecasting & Monte Carlo Simulation", "p6", [("Monte Carlo Runs", 10000, "Sims"), ("Velocity Precision", 94, "%"), ("ScopeCreep Alert", 91, "%")]),
    ("fig_ch24.png", "Figure 24: Model Context Protocol (MCP) Server Architecture Blueprint", "p6", [("MCP Tools", 24, "APIs"), ("MCP Resources", 12, "URIs"), ("Agent Latency", 120, "ms")]),
    
    ("fig_appA.png", "Figure 25: Appendix A: Enterprise AI Coaching Prompt Library", "appA", [("Strategic", 21, "Prompts"), ("Scrum Master", 21, "Prompts"), ("Product Owner", 21, "Prompts"), ("Tech Lead", 21, "Prompts"), ("Executive", 21, "Prompts")]),
    ("fig_appB.png", "Figure 26: Appendix B: Enterprise Query Language Master Syntax Reference", "appB", [("JQL Queries", 20, "Templates"), ("WIQL Queries", 15, "Templates"), ("AQL Queries", 15, "Templates"), ("Functions", 11, "Built-ins")]),
    ("fig_appC.png", "Figure 27: Appendix C: Enterprise Governance, Flow & AI Maturity Model", "appC", [("Strategic Pillars", 7, "Pillars"), ("Diagnostic Items", 35, "Criteria"), ("Maturity Levels", 5, "Levels"), ("Scoring Bands", 5, "Bands")])
]

for fname, title, key, items in figs_data:
    make_fig(fname, title, key, items)

print("Successfully generated all 27 PIL chapter figures with distinct multi-theme palettes!")
