import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_chapter_file(rel_path, title, tagline, sections):
    """
    sections is a list of tuples: (section_title, list_of_paragraphs)
    """
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    
    lines = []
    lines.append(f"# {title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for idx, (s_title, p_list) in enumerate(sections, 1):
        lines.append(f"## {idx}. {s_title}\n\n")
        for p in p_list:
            lines.append(p.strip() + "\n\n")
        lines.append("---\n\n")
        
    content = "".join(lines)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    words = len(content.split())
    print(f"Generated {rel_path:55s}: {words:6,d} words")
    return words

print("Massive authentic 500-page builder module ready.")
