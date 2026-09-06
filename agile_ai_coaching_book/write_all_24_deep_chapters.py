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

print("Deep chapter generator module ready.")
