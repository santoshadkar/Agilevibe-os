import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

# Deep chapter builder function
def build_chapter_text(ch_num, title, tagline, topic_sections):
    lines = []
    lines.append(f"# Chapter {ch_num}: {title}\n")
    lines.append(f"> *\"{tagline}\"*\n")
    lines.append("---\n\n")

    for sec_title, p1, p2, p3, p4, p5, sub_items, code_snippet in topic_sections:
        lines.append(f"## {ch_num}.{sec_title}\n\n")
        lines.append(f"{p1}\n\n")
        lines.append(f"{p2}\n\n")
        lines.append(f"{p3}\n\n")
        lines.append(f"{p4}\n\n")
        lines.append(f"{p5}\n\n")

        if sub_items:
            for item_title, item_desc in sub_items:
                lines.append(f"* **{item_title}**: {item_desc}\n")
            lines.append("\n")

        if code_snippet:
            lang, code = code_snippet
            lines.append(f"``` {lang}".strip())
            lines.append(code.strip())
            lines.append("```\n\n")

    return "".join(lines)

print("Deep chapter builder defined.")
