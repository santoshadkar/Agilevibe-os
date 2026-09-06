import os
import math
from PIL import Image, ImageDraw

OUTPUT_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\section_diagrams"
os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Generating 85+ concept diagrams for embedding inline within all chapter sections...")

def get_canvas(title, width=1100, height=520):
    img = Image.new("RGB", (width, height), color="#FFFFFF")
    draw = ImageDraw.Draw(img)
    # Header Banner
    draw.rectangle([0, 0, width, 65], fill="#1E3A8A")
    draw.text((width // 2, 32), title, fill="#FFFFFF", anchor="mm", font_size=20)
    # Border
    draw.rectangle([0, height - 12, width, height], fill="#1E3A8A")
    return img, draw, width, height

# STYLE 1: STACK
def draw_stack(filename, title, layers):
    img, draw, width, height = get_canvas(title)
    n = len(layers)
    layer_h = 65
    start_y = 90
    gap = 20
    colors = ["#1E3A8A", "#3B82F6", "#4F46E5", "#0D9488", "#059669"]

    for idx, (l_title, items) in enumerate(layers):
        y1 = start_y + idx * (layer_h + gap)
        y2 = y1 + layer_h
        color = colors[idx % len(colors)]

        draw.rounded_rectangle([60, y1, width - 60, y2], radius=10, fill=color)
        draw.text((90, y1 + layer_h // 2), l_title, fill="#FFFFFF", anchor="lm", font_size=16)
        
        x_item = width - 90
        for item in reversed(items):
            item_w = len(item) * 10 + 16
            draw.rounded_rectangle([x_item - item_w, y1 + 14, x_item, y2 - 14], radius=6, fill="#FFFFFF")
            draw.text((x_item - item_w // 2, y1 + layer_h // 2), item, fill=color, anchor="mm", font_size=12)
            x_item -= (item_w + 12)

        if idx < n - 1:
            arrow_y = y2 + 2
            draw.line([width // 2, arrow_y, width // 2, arrow_y + 14], fill="#1E3A8A", width=3)
            draw.polygon([(width // 2 - 5, arrow_y + 10), (width // 2 + 5, arrow_y + 10), (width // 2, arrow_y + 16)], fill="#1E3A8A")

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# STYLE 2: FLOWCHART
def draw_flowchart(filename, title, steps):
    img, draw, width, height = get_canvas(title)
    y_curr = 85

    for idx, step in enumerate(steps):
        s_type = step.get("type", "process")

        if s_type == "start" or s_type == "end":
            draw.rounded_rectangle([width // 2 - 130, y_curr, width // 2 + 130, y_curr + 45], radius=22, fill="#1E3A8A")
            draw.text((width // 2, y_curr + 22), step["label"], fill="#FFFFFF", anchor="mm", font_size=14)
            y_curr += 70

        elif s_type == "process":
            draw.rounded_rectangle([width // 2 - 200, y_curr, width // 2 + 200, y_curr + 55], radius=8, fill="#2563EB")
            draw.text((width // 2, y_curr + 18), step["title"], fill="#FFFFFF", anchor="mm", font_size=14)
            draw.text((width // 2, y_curr + 38), step["sub"], fill="#E0E7FF", anchor="mm", font_size=11)
            y_curr += 80

        elif s_type == "decision":
            cx, cy = width // 2, y_curr + 35
            pts = [(cx, cy - 35), (cx + 140, cy), (cx, cy + 35), (cx - 140, cy)]
            draw.polygon(pts, fill="#D97706")
            draw.text((cx, cy), step["label"], fill="#FFFFFF", anchor="mm", font_size=12)

            draw.line([cx - 140, cy, cx - 240, cy, cx - 240, cy + 40], fill="#DC2626", width=3)
            draw.rounded_rectangle([cx - 310, cy + 40, cx - 170, cy + 80], radius=8, fill="#DC2626")
            draw.text((cx - 240, cy + 60), step["no_label"], fill="#FFFFFF", anchor="mm", font_size=11)

            draw.line([cx, cy + 35, cx, cy + 60], fill="#059669", width=3)
            y_curr += 105

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# STYLE 3: SIDE-BY-SIDE CARDS
def draw_comparison(filename, title, left_title, left_pts, right_title, right_pts):
    img, draw, width, height = get_canvas(title)

    draw.rounded_rectangle([60, 85, 520, 470], radius=12, fill="#1E3A8A")
    draw.text((290, 120), left_title, fill="#FFFFFF", anchor="mm", font_size=18)
    draw.line([90, 150, 490, 150], fill="#60A5FA", width=2)
    y_p = 185
    for pt in left_pts:
        draw.text((100, y_p), f"• {pt}", fill="#F3F4F6", anchor="lm", font_size=14)
        y_p += 50

    draw.ellipse([525, 250, 575, 300], fill="#D97706", outline="#FFFFFF", width=3)
    draw.text((550, 275), "VS", fill="#FFFFFF", anchor="mm", font_size=16)

    draw.rounded_rectangle([580, 85, 1040, 470], radius=12, fill="#0D9488")
    draw.text((810, 120), right_title, fill="#FFFFFF", anchor="mm", font_size=18)
    draw.line([610, 150, 1010, 150], fill="#2DD4BF", width=2)
    y_p = 185
    for pt in right_pts:
        draw.text((620, y_p), f"• {pt}", fill="#F3F4F6", anchor="lm", font_size=14)
        y_p += 50

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# STYLE 4: RADIAL NETWORK
def draw_network(filename, title, center_name, outer_list):
    img, draw, width, height = get_canvas(title)
    cx, cy = width // 2, height // 2 + 25
    cr = 65

    draw.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], fill="#1E3A8A", outline="#3B82F6", width=3)
    draw.text((cx, cy), center_name, fill="#FFFFFF", anchor="mm", font_size=14, align="center")

    n = len(outer_list)
    radius = 160
    colors = ["#4F46E5", "#0284C7", "#059669", "#7C3AED", "#D97706"]

    for idx, (node_title, node_desc) in enumerate(outer_list):
        angle = idx * (2 * math.pi / n) - (math.pi / 2)
        nx = int(cx + radius * math.cos(angle))
        ny = int(cy + radius * math.sin(angle))

        draw.line([cx, cy, nx, ny], fill="#94A3B8", width=2)

        box_w, box_h = 170, 60
        x1, y1 = nx - box_w // 2, ny - box_h // 2
        x2, y2 = nx + box_w // 2, ny + box_h // 2
        draw.rounded_rectangle([x1, y1, x2, y2], radius=8, fill=colors[idx % len(colors)])
        draw.text((nx, ny - 8), node_title, fill="#FFFFFF", anchor="mm", font_size=13)
        draw.text((nx, ny + 10), node_desc, fill="#F3F4F6", anchor="mm", font_size=10)

    img.save(os.path.join(OUTPUT_DIR, filename), quality=95)

# Generate Section Diagrams for all 24 chapters (3 per chapter = 72 section diagrams)
print("Generating section concept diagrams...")

for ch_idx in range(1, 25):
    # Diagram for Section .1
    draw_comparison(f"ch{ch_idx:02d}_sec1.png", f"Chapter {ch_idx} Concept Diagram: Strategic Model Comparison",
                     "Target Execution Model", ["High Automation Guardrails", "Persistent Squad Autonomy", "Decoupled Microservices", "Real-Time Telemetry"],
                     "Legacy Anti-Pattern Model", ["Manual Stage-Gate Review", "Temporary Project Allocation", "Monolithic Shared Dependencies", "Manual Weekly Status Decks"])
    
    # Diagram for Section .2
    draw_stack(f"ch{ch_idx:02d}_sec2.png", f"Chapter {ch_idx} Concept Diagram: System Architecture & Observability",
               [("Application & API Layer", ["REST v3 API", "GraphQL Gateway", "Webhook Stream"]),
                ("Security & Guardrail Layer", ["SAML SSO", "SonarQube SAST", "PII Masking Linter"]),
                ("Data & Telemetry Engine", ["PostgreSQL Database", "Kafka Event Bus", "PgVector RAG Store"])])

    # Diagram for Section .3
    draw_flowchart(f"ch{ch_idx:02d}_sec3.png", f"Chapter {ch_idx} Concept Diagram: Automated Quality Gate Decision Flow",
                   [{"type": "start", "label": "Developer Submits Pull Request"},
                    {"type": "process", "title": "Automated Unit Test & SAST Verification", "sub": "Verify code coverage > 80% and zero critical CVEs"},
                    {"type": "decision", "label": "Security Gate Passed?", "no_label": "Block Merge & Alert Team"},
                    {"type": "process", "title": "Automated Staging Deployment", "sub": "Execute automated smoke test suite"},
                    {"type": "end", "label": "Approved for Production Deployment"}])

print("Successfully generated 72 section concept diagrams!")
