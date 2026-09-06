import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_ch(path, title, tagline, sections):
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    out = [f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n"]
    for idx, (sec_name, paragraphs) in enumerate(sections, 1):
        out.append(f"## {idx}. {sec_name}\n\n")
        for p in paragraphs:
            out.append(f"{p.strip()}\n\n")
        out.append("---\n\n")
    text = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(text)
    w_count = len(text.split())
    print(f"Generated {path:55s}: {w_count:6,d} words")
    return w_count

def make_sec_blocks(sec_title, text_p1, text_p2, tech_code_block, case_study_text, checklist_items):
    return [
        text_p1,
        text_p2,
        tech_code_block,
        f"### Enterprise Case Study & Real-World Execution\n\n{case_study_text}",
        f"### Agile Coaching Toolkit & Operational Checklist\n\n" +
        f"* *\"How does our implementation of {sec_title} reduce systemic handoff delays and empower team autonomy?\"*\n" +
        f"* *\"What quantitative flow telemetry verifies that our configuration for {sec_title} is driving business outcomes?\"*\n\n" +
        "#### Operational Diagnostic Checklist:\n" +
        "\n".join([f"- [ ] **{t}**: {d}" for t, d in checklist_items])
    ]

print("Script template ready.")
