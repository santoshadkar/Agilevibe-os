import os
import sys

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_deep_authentic_chapter(path, title, tagline, sections):
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    out = [f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n"]
    for idx, (sec_name, text_blocks) in enumerate(sections, 1):
        out.append(f"## {idx}. {sec_name}\n\n")
        for block in text_blocks:
            out.append(f"{block.strip()}\n\n")
        out.append("---\n\n")
    content = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    w_count = len(content.split())
    print(f"Generated {path:55s}: {w_count:6,d} words")
    return w_count

print("Starting generation of 115,000-word authentic manuscript across 24 chapters...")
