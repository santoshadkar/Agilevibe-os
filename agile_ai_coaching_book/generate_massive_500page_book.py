import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_full_chapter(ch_num, title, tagline, sections_data):
    doc = []
    doc.append(f"# Chapter {ch_num}: {title}\n")
    doc.append(f"> *\"{tagline}\"*\n")
    doc.append("---\n")
    
    for sec_num, sec_title, body_paragraphs, code_block, mermaid_diagram, table_data in sections_data:
        doc.append(f"## {ch_num}.{sec_num} {sec_title}\n")
        
        for p in body_paragraphs:
            doc.append(f"{p}\n")
            
        if mermaid_diagram:
            doc.append("```mermaid")
            doc.append(mermaid_diagram.strip())
            doc.append("```\n")
            
        if table_data:
            headers, rows = table_data
            header_line = "| " + " | ".join(headers) + " |"
            sep_line = "| " + " | ".join([":---"] * len(headers)) + " |"
            doc.append(header_line)
            doc.append(sep_line)
            for row in rows:
                doc.append("| " + " | ".join(row) + " |")
            doc.append("\n")
            
        if code_block:
            lang, code_content = code_block
            doc.append(f"``` {lang}".strip())
            doc.append(code_content.strip())
            doc.append("```\n")
            
        doc.append("\n")
        
    return "\n".join(doc)

print("Generator helper defined.")
