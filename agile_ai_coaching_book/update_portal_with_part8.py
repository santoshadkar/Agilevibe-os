import os
import json
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"
APP_PATH = os.path.join(BASE_DIR, "web_portal", "src", "App.jsx")

from build_full_quizzes import ALL_QUIZZES
from append_remaining_quizzes import PART_3_4_5_6_7
from execute_all_quizzes_update import MORE_DATA
from expand_all_quizzes_to_6 import EXTRA_QUESTIONS

ALL_QUIZZES.update(PART_3_4_5_6_7)
ALL_QUIZZES.update(MORE_DATA)

# Read Ch 25-28 data directly from files
PART8_FILES = {
    "ch25": "chapters/part8_hands_on_ai/ch25_local_slms_ollama.md",
    "ch26": "chapters/part8_hands_on_ai/ch26_langchain_langgraph_agents.md",
    "ch27": "chapters/part8_hands_on_ai/ch27_atlassian_rovo_jira_cloud.md",
    "ch28": "chapters/part8_hands_on_ai/ch28_n8n_make_zapier_automation.md"
}

CHAPTER_MAP = {}
for fname, (ch_num, bullets, q_base) in ALL_QUIZZES.items():
    q_extra = EXTRA_QUESTIONS.get(fname, [])
    all_6_q = list(q_base) + list(q_extra)
    ch_id = fname.split("_")[0]
    
    CHAPTER_MAP[ch_id] = {
        "summary": bullets,
        "quiz": [{"q": q[0], "opts": q[1], "ans": q[2], "rat": q[3]} for q in all_6_q]
    }

# Add Ch 25-28 data dynamically from files
for ch_id, rel_path in PART8_FILES.items():
    full_p = os.path.join(BASE_DIR, rel_path)
    if os.path.exists(full_p):
        with open(full_p, "r", encoding="utf-8") as f:
            txt = f.read()
        
        # Extract summary bullets
        sum_m = re.search(r'Executive Summary\n\n([\s\S]*?)\n\n---', txt)
        bullets = []
        if sum_m:
            bullets = [b.replace("- **Key Takeaway**: ", "").strip() for b in sum_m.group(1).strip().split("\n") if b.startswith("- ")]
        
        # Extract 6 questions
        q_matches = re.findall(r'### Question \d+:\s*(.*?)\n\n((?:- .*?\n)+)\n> \*\*Answer Key & Socratic Rationale\*\*:\n> \*\*Correct Answer: (.*?)\*\* — (.*?)(?=\n\n###|\n\n$)', txt, re.DOTALL)
        quiz_list = []
        for q_text, opts_text, ans, rat in q_matches:
            opts = [o.strip() for o in opts_text.strip().split("\n") if o.strip()]
            quiz_list.append({"q": q_text.strip(), "opts": opts, "ans": ans.strip(), "rat": rat.strip()})
        
        CHAPTER_MAP[ch_id] = {"summary": bullets, "quiz": quiz_list}

print(f"Total mapped chapters for React Portal: {len(CHAPTER_MAP)}")

# Update App.jsx
with open(APP_PATH, "r", encoding="utf-8") as f:
    app_text = f.read()

# Replace CHAPTER_DATA
json_data = json.dumps(CHAPTER_MAP, indent=2)
app_text = re.sub(r'const CHAPTER_DATA = \{[\s\S]*?\n\};\n', f'const CHAPTER_DATA = {json_data};\n', app_text)

# Add Part VIII to BOOK_STRUCTURE in App.jsx if not present
part8_struct = """  {
    part: "Part VIII: Hands-On AI Engineering & Enterprise Automation",
    tag: "Hands-On Engineering",
    color: "tag-blue",
    chapters: [
      { id: "ch25", title: "Chapter 25: Local SLMs & On-Premise AI Architecture", desc: "Deploying Llama 3/Phi-3 via Ollama/vLLM for Air-Gapped Zero Data Leakage" },
      { id: "ch26", title: "Chapter 26: Multi-Agent Coaching Systems with LangGraph", desc: "Stateful Graphs, Cyclic Memory & Human-in-the-Loop Approval Nodes" },
      { id: "ch27", title: "Chapter 27: Atlassian Rovo Masterclass: Jira Cloud AI Agents", desc: "Rovo Search, Rovo Chat & Custom Forge Action Module Extensions" },
      { id: "ch28", title: "Chapter 28: Enterprise No-Code/Low-Code Automation (n8n/Make)", desc: "Self-Hosted n8n Docker Pipelines, Webhooks, Make & Zapier Workflows" }
    ]
  },"""

if "Part VIII: Hands-On AI Engineering" not in app_text:
    idx_p7 = app_text.find('part: "Part VII: Executive Coaching Guardrails')
    if idx_p7 != -1:
        # Find start of object containing Part VII
        obj_start = app_text.rfind('  {', 0, idx_p7)
        app_text = app_text[:obj_start] + part8_struct + "\n" + app_text[obj_start:]

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(app_text)

print("Successfully updated App.jsx with Part VIII structure and chapter data!")
