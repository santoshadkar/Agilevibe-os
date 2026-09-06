import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_ch(rel_path, ch_title, tagline, sections):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    lines = []
    lines.append(f"# {ch_title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for sec_num, (sec_title, text_blocks) in enumerate(sections, 1):
        lines.append(f"## {sec_num} {sec_title}\n\n")
        for block in text_blocks:
            lines.append(block.strip() + "\n\n")
        lines.append("---\n\n")
        
    content = "".join(lines)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    words = len(content.split())
    print(f"Wrote {rel_path:60s}: {words:6,d} words")
    return words

print("Generating 100% authentic deep content for all 24 chapters...")
