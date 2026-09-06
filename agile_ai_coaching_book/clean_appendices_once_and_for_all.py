import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def clean_appendices():
    app_files = sorted(glob.glob(os.path.join(BASE_DIR, "appendices", "*.md")))

    for file_path in app_files:
        basename = os.path.basename(file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Split at the VERY FIRST occurrence of Executive Summary or Knowledge Assessment
        parts = re.split(r'\n---\n## [A-C]\.[45]|\n## [A-C]\.[45] ', content)
        body = parts[0].strip()

        # Now extract the last 6 questions and summary bullets from parts
        full_tail = "\n".join(parts[1:])

        # Find clean Executive Summary block
        sum_m = re.search(r'(## [A-C]\.4 Appendix [A-C] Executive Summary[\s\S]*?)(?=## [A-C]\.5 Executive|$)', full_tail)
        clean_sum = sum_m.group(1).strip() if sum_m else ""

        # Find 6 unique questions
        questions = []
        q_matches = re.findall(r'(### Question \d+:[\s\S]*?)(?=### Question \d+:|$)', full_tail)
        seen_q = set()
        unique_q_blocks = []
        for qb in q_matches:
            q_title_match = re.search(r'### Question \d+:\s*(.*)', qb)
            if q_title_match:
                qt = q_title_match.group(1).strip()
                if qt not in seen_q:
                    seen_q.add(qt)
                    unique_q_blocks.append(qb.strip())

        app_letter = basename[3].upper()
        clean_quiz = f"## {app_letter}.5 Executive & Practitioner Knowledge Assessment\n\n" + "\n\n".join(unique_q_blocks)

        final_content = body + "\n\n---\n\n" + clean_sum + "\n\n---\n\n" + clean_quiz
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(final_content)

        print(f"Cleaned Appendix cleanly: {basename}")

if __name__ == "__main__":
    clean_appendices()
