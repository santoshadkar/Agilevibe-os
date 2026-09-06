import os
import sys

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def write_chapter(rel_path, title, tagline, sections):
    """
    sections is a list of tuples: (sec_title, paragraph_blocks)
    where paragraph_blocks is a list of strings (paragraphs)
    """
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    
    lines = []
    lines.append(f"# {title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for idx, (sec_title, blocks) in enumerate(sections, 1):
        lines.append(f"## {idx}. {sec_title}\n\n")
        for b in blocks:
            lines.append(b.strip() + "\n\n")
        lines.append("---\n\n")
        
    content = "".join(lines)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    
    words = len(content.split())
    print(f"Wrote {rel_path}: {words:,} words")
    return words

print("Building full 125k word manuscript builder infrastructure...")
