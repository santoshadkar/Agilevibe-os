import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def write_md(path, title, tagline, sections):
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    out = [f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n"]
    for idx, (sec_name, text_blocks) in enumerate(sections, 1):
        out.append(f"## {idx}. {sec_name}\n\n")
        for b in text_blocks:
            out.append(f"{b.strip()}\n\n")
        out.append("---\n\n")
    content = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    words = len(content.split())
    print(f"Generated {path:55s}: {words:6,d} words")
    return words

print("Building clean 500-page manuscript generator script...")
