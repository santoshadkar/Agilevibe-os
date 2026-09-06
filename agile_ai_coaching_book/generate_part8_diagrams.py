import os
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"
IMG_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\diagrams"
SEC_IMG_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\section_diagrams"

os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(SEC_IMG_DIR, exist_ok=True)

# Color Palette for Part VIII: Hands-On AI Engineering & Enterprise Automation (Slate / Cyan / Gold)
BG_COLOR = (15, 23, 42) # #0F172A Slate 900
BOX_BG = (30, 41, 59) # #1E293B Slate 800
BORDER_COLOR = (2, 132, 199) # #0284C7 Sky 600
TEXT_MAIN = (255, 255, 255)
TEXT_SUB = (203, 213, 225)
ACCENT_CYAN = (14, 165, 233)
ACCENT_GOLD = (234, 179, 8)
ACCENT_TEAL = (13, 148, 136)

font_bd = r"C:\Windows\Fonts\arialbd.ttf"
font_reg = r"C:\Windows\Fonts\arial.ttf"

try:
    f_title = ImageFont.truetype(font_bd, 22)
    f_box_title = ImageFont.truetype(font_bd, 16)
    f_box_text = ImageFont.truetype(font_reg, 13)
    f_footer = ImageFont.truetype(font_reg, 12)
except:
    f_title = f_box_title = f_box_text = f_footer = ImageFont.load_default()

def create_base_diagram(title_text):
    width, height = 1100, 480
    img = Image.new("RGB", (width, height), BG_COLOR)
    draw = ImageDraw.Draw(img)

    # Outer border
    draw.rectangle([10, 10, width-10, height-10], outline=BORDER_COLOR, width=2)
    
    # Title Banner
    draw.rectangle([20, 20, width-20, 65], fill=(30, 58, 138))
    draw.text((width//2, 42), title_text, font=f_title, fill=TEXT_MAIN, anchor="mm")
    
    # Footer
    draw.text((width//2, height-25), "Part VIII: Hands-On AI Engineering & Enterprise Automation Masterclass  •  Santoshanand Adkar", font=f_footer, fill=(148, 163, 184), anchor="mm")
    
    return img, draw

def generate_all_part8_diagrams():
    diagrams = {
        "fig_ch25.png": ("Figure 25: Local SLM (Ollama/vLLM) & Air-Gapped Enterprise Architecture", [
            ("Air-Gapped Enterprise VPC", [("NVIDIA GPU Server", "Ollama / vLLM Server"), ("Llama 3 8B / Phi-3 SLM", "PagedAttention Engine")]),
            ("Local Rest API Gateway", [("Python SLM Bridge", "Local Ollama API"), ("Zero Data Egress", "Air-Gapped Compliance")]),
            ("Enterprise Tooling Nodes", [("Jira Data Center", "PostgreSQL / Hazelcast"), ("Azure DevOps / Git", "Local Pipeline Gates")])
        ]),
        "fig_ch26.png": ("Figure 26: LangGraph Stateful Multi-Agent Graph & HITL Approval Node", [
            ("LangGraph Agent State", [("TypedDict Schema", "Messages & Feedback"), ("Memory Checkpointer", "SqliteSaver / Redis")]),
            ("Agent Execution Nodes", [("Gathering & NLP", "Semantic Clustering"), ("Action Generation", "ReAct Logic Engine")]),
            ("HITL Safety Checkpoint", [("Human Coach Approval", "Slack / Teams Gate"), ("Deterministic Execution", "Jira/ADO Tool Actions")])
        ]),
        "fig_ch27.png": ("Figure 27: Atlassian Rovo Agent, Teamwork Graph & Forge Action Module", [
            ("Atlassian Teamwork Graph", [("Jira / Confluence Data", "GitHub & Figma Sync"), ("Atlassian Access ACLs", "User Permission Scope")]),
            ("Atlassian Rovo Modalities", [("Rovo Search Engine", "Rovo Chat Sidebar"), ("Custom Rovo Agents", "Backlog & Incident Co-Pilot")]),
            ("Atlassian Forge Actions", [("manifest.yml Scopes", "Serverless FaaS Handler"), ("Automated Issue Updates", "BDD Criteria Generation")])
        ]),
        "fig_ch28.png": ("Figure 28: Self-Hosted n8n Event Pipeline, Webhooks & AI Node Workflow", [
            ("Enterprise Event Sources", [("Jira Issue Webhooks", "Azure DevOps Hooks"), ("GitHub Commit Events", "Real-Time Payload Streaming")]),
            ("Self-Hosted n8n Engine", [("Docker VPC Container", "PostgreSQL DB Backend"), ("n8n Workflow Nodes", "JSON Payload Transformer")]),
            ("AI & Alert Destinations", [("OpenAI / Ollama Node", "AI Root Cause Summary"), ("Slack / Teams Alerts", "Automated Triage Alerts")])
        ])
    }

    for fname, (title, blocks) in diagrams.items():
        img, draw = create_base_diagram(title)
        
        # Draw 3 columns
        col_w = 320
        col_gap = 30
        left_start = 50
        
        for idx, (b_title, items) in enumerate(blocks):
            cx = left_start + idx * (col_w + col_gap)
            cy = 90
            
            # Column Box
            draw.rectangle([cx, cy, cx+col_w, cy+330], fill=BOX_BG, outline=BORDER_COLOR, width=2)
            draw.rectangle([cx, cy, cx+col_w, cy+45], fill=(15, 118, 110))
            draw.text((cx+col_w//2, cy+22), b_title, font=f_box_title, fill=TEXT_MAIN, anchor="mm")
            
            # Item sub-boxes
            iy = cy + 65
            for it1, it2 in items:
                draw.rectangle([cx+15, iy, cx+col_w-15, iy+100], fill=(15, 23, 42), outline=ACCENT_CYAN, width=1)
                draw.text((cx+col_w//2, iy+35), it1, font=f_box_title, fill=ACCENT_GOLD, anchor="mm")
                draw.text((cx+col_w//2, iy+68), it2, font=f_box_text, fill=TEXT_SUB, anchor="mm")
                iy += 125
        
        out_path = os.path.join(IMG_DIR, fname)
        img.save(out_path)
        print(f"Generated diagram: {fname}")

    # Generate section diagrams for ch25, ch26, ch27, ch28
    sec_diagrams = ["ch25_sec1.png", "ch25_sec2.png", "ch26_sec1.png", "ch26_sec2.png", "ch27_sec1.png", "ch27_sec2.png", "ch28_sec1.png", "ch28_sec2.png"]
    for sname in sec_diagrams:
        stitle = f"Conceptual Reference Diagram for {sname.split('.')[0].upper()}"
        img, draw = create_base_diagram(stitle)
        
        # Simple high-impact flowchart
        draw.rectangle([60, 140, 320, 340], fill=BOX_BG, outline=ACCENT_CYAN, width=2)
        draw.text((190, 240), "Input Domain Data", font=f_box_title, fill=TEXT_MAIN, anchor="mm")

        draw.line([(320, 240), (420, 240)], fill=ACCENT_GOLD, width=3)

        draw.rectangle([420, 140, 680, 340], fill=BOX_BG, outline=ACCENT_TEAL, width=2)
        draw.text((550, 240), "AI Execution Engine", font=f_box_title, fill=ACCENT_GOLD, anchor="mm")

        draw.line([(680, 240), (780, 240)], fill=ACCENT_GOLD, width=3)

        draw.rectangle([780, 140, 1040, 340], fill=BOX_BG, outline=BORDER_COLOR, width=2)
        draw.text((910, 240), "Enterprise Delivery", font=f_box_title, fill=TEXT_MAIN, anchor="mm")

        out_sec_path = os.path.join(SEC_IMG_DIR, sname)
        img.save(out_sec_path)
        print(f"Generated section diagram: {sname}")

if __name__ == "__main__":
    generate_all_part8_diagrams()
