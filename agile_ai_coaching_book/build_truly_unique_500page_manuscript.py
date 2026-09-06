import os
import sys

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def write_clean_md(path, title, tagline, sections):
    """
    sections is a list of tuples: (section_title, list_of_paragraphs)
    """
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    
    out = [f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n"]
    for idx, (s_title, p_blocks) in enumerate(sections, 1):
        out.append(f"## {idx}. {s_title}\n\n")
        for b in p_blocks:
            out.append(f"{b.strip()}\n\n")
        out.append("---\n\n")
        
    content = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    words = len(content.split())
    print(f"Generated {path:55s}: {words:6,d} words")
    return words

print("Clean 500-page manuscript writer initialized.")
