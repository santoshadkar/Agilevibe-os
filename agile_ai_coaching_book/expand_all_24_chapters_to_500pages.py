import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_unique_md(path, title, tagline, sections):
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    out = [f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n"]
    for idx, (sec_name, p_blocks) in enumerate(sections, 1):
        out.append(f"## {idx}. {sec_name}\n\n")
        for b in p_blocks:
            out.append(f"{b.strip()}\n\n")
        out.append("---\n\n")
    text = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(text)
    w_count = len(text.split())
    print(f"Generated {path:55s}: {w_count:6,d} words")
    return w_count

# Custom paragraph generator for 100% unique prose per chapter section
def make_custom_section(sec_title, text_p1, text_p2, tech_block, case_study_p, checklist):
    return [
        text_p1,
        text_p2,
        tech_block,
        f"### Enterprise Case Study & Empirical Results\n\n{case_study_p}",
        f"### Agile Coaching Playbook & Diagnostic Checklist\n\n" +
        f"* *\"How does our implementation of {sec_title} reduce handoff friction and empower squad autonomy?\"*\n" +
        f"* *\"What quantitative flow telemetry proves that our configuration for {sec_title} is driving customer outcomes?\"*\n\n" +
        "#### Diagnostic Guardrails:\n" +
        "\n".join([f"- [ ] **{t}**: {d}" for t, d in checklist])
    ]

print("Custom section builder ready.")
