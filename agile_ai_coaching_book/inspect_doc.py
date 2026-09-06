import docx

path = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book\The_AI_Augmented_Enterprise_Agile_Coach.docx"
doc = docx.Document(path)
for i in range(15):
    p = doc.paragraphs[i]
    has_img = any(r._r.xpath('.//w:drawing') for r in p.runs)
    print(f"P{i}: text='{p.text}', runs={len(p.runs)}, has_img={has_img}")
