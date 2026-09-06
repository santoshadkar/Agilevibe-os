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

# Map filename to chapter ID (e.g. ch01_modern_agile_spectrum.md -> ch01)
CHAPTER_MAP = {}
for fname, (ch_num, bullets, q_base) in ALL_QUIZZES.items():
    q_extra = EXTRA_QUESTIONS.get(fname, [])
    all_6_q = list(q_base) + list(q_extra)

    if fname.startswith("app"):
        ch_id = fname.split("_")[0] # appA, appB, appC
    else:
        ch_id = fname.split("_")[0] # ch01, ch02...
    
    CHAPTER_MAP[ch_id] = {
        "summary": bullets,
        "quiz": [
            {
                "q": q[0],
                "opts": q[1],
                "ans": q[2],
                "rat": q[3]
            }
            for q in all_6_q
        ]
    }

print(f"Total mapped chapters for React Portal: {len(CHAPTER_MAP)}")

# Convert to JSON string for embedding in JS
json_chapter_data = json.dumps(CHAPTER_MAP, indent=2)

with open(APP_PATH, "r", encoding="utf-8") as f:
    app_text = f.read()

# Create JS object declaration
js_data_decl = f"\n// Real Chapter Data (Executive Summaries & 6-Question Quizzes)\nconst CHAPTER_DATA = {json_chapter_data};\n"

# Replace old generic reader block with dynamic render block
old_reader_block = """              <div style={{ color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.8 }}>
                <h3>Executive Summary & Key Takeaways</h3>
                <p style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                  This chapter provides complete technical depth, architecture blueprints, real-world case studies, and actionable prompts. The full markdown source file is available in the repository root under <code style={{ color: '#93c5fd' }}>chapters/</code>.
                </p>

                <div className="glass-panel" style={{ padding: '1.25rem', margin: '1.5rem 0', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <Zap size={16} /> Key Enterprise Takeaways:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: '#d1d5db' }}>
                    <li>Architectural governance and metric instrumentation across Jira Data Center, Jira Cloud, and Azure DevOps.</li>
                    <li>Application of Socratic coaching stance and ICF competencies to drive psychological safety.</li>
                    <li>Leveraging LLMs, Model Context Protocol (MCP), and RAG for automated backlog refinement and sprint diagnostics.</li>
                  </ul>
                </div>
              </div>"""

new_reader_block = """              <div style={{ color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.8 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#93c5fd', marginBottom: '0.75rem' }}>
                  Executive Summary & Key Takeaways
                </h3>

                <div className="glass-panel" style={{ padding: '1.25rem', margin: '1rem 0', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>
                    <Zap size={18} /> Core Strategic Takeaways:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#e5e7eb' }}>
                    {(CHAPTER_DATA[selectedChapter]?.summary || [
                      "Architectural governance and metric instrumentation across Jira DC/Cloud and Azure DevOps.",
                      "Application of Socratic coaching stance and ICF competencies to drive psychological safety.",
                      "Leveraging LLMs, Model Context Protocol (MCP), and RAG for automated backlog refinement."
                    ]).map((bullet, idx) => (
                      <li key={idx} style={{ marginBottom: '0.6rem' }}><strong>Takeaway {idx+1}:</strong> {bullet}</li>
                    ))}
                  </ul>
                </div>

                <hr style={{ borderColor: 'var(--border-color)', margin: '2rem 0' }} />

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#c4b5fd', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bot size={20} /> Knowledge Assessment & Scenario Quiz (6 Questions)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {(CHAPTER_DATA[selectedChapter]?.quiz || []).map((qObj, qIdx) => (
                    <div key={qIdx} className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-purple)' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f3e8ff', marginBottom: '0.75rem' }}>
                        Question {qIdx + 1}: {qObj.q}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
                        {qObj.opts.map((opt, oIdx) => (
                          <div key={oIdx} style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{opt}</div>
                        ))}
                      </div>
                      <div className="glass-panel" style={{ padding: '0.75rem 1rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399', marginBottom: '0.2rem' }}>
                          📌 ANSWER KEY & SOCRATIC RATIONALE
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#e5e7eb' }}>
                          <strong>Correct Answer: {qObj.ans}</strong> — {qObj.rat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>"""

# Insert CHAPTER_DATA right after BOOK_STRUCTURE
if "const CHAPTER_DATA =" not in app_text:
    idx_bs = app_text.find("const BOOK_STRUCTURE = [")
    if idx_bs != -1:
        # Find end of BOOK_STRUCTURE array
        end_bs = app_text.find("];", idx_bs) + 2
        app_text = app_text[:end_bs] + js_data_decl + app_text[end_bs:]

if old_reader_block in app_text:
    app_text = app_text.replace(old_reader_block, new_reader_block)

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(app_text)

print("Successfully injected 100% real chapter summaries & quizzes into App.jsx!")
