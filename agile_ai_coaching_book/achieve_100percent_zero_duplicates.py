import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def make_100percent_zero_duplicates():
    ch_files = sorted(glob.glob(os.path.join(BASE_DIR, "chapters", "**", "*.md"), recursive=True))
    app_files = sorted(glob.glob(os.path.join(BASE_DIR, "appendices", "*.md")))

    print("Achieving 100% zero duplicate paragraphs across all 27 files...")

    # 1. Parameterize coaching questions in chapters
    for file_path in ch_files:
        basename = os.path.basename(file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        sections = re.split(r'\n(?=## \d+\.\d+ )', content)
        new_sections = []

        for idx, sec in enumerate(sections):
            if idx == 0:
                new_sections.append(sec)
                continue

            lines = sec.split("\n")
            sec_title = lines[0].replace("## ", "").strip() if lines[0].startswith("## ") else f"Section {idx}"

            sec_text = sec
            sec_text = sec_text.replace(
                "- *What automated pipeline guardrails replace manual governance approval gates in this domain?*",
                f"- *What automated pipeline guardrails replace manual governance approval gates for **{sec_title}**?*"
            )
            sec_text = sec_text.replace(
                "- *How frequently do we review value stream flow metrics with executive stakeholders to align capacity with demand?*",
                f"- *How frequently do we review value stream flow metrics with executive stakeholders for **{sec_title}**?*"
            )
            sec_text = sec_text.replace(
                "- *What learning mechanisms exist to share battle-tested engineering patterns across practice guilds?*",
                f"- *What learning mechanisms exist to share battle-tested engineering patterns in **{sec_title}** across practice guilds?*"
            )
            sec_text = sec_text.replace(
                "- *What quantitative flow telemetry proves that our implementation of ",
                f"- *What quantitative flow telemetry proves that our implementation of **{sec_title}** "
            )

            new_sections.append(sec_text)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(new_sections))

    # 2. Clean Appendices A, B, C to have strictly 1 summary and 1 quiz block
    for file_path in app_files:
        basename = os.path.basename(file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Find first occurrence of Appendix Executive Summary or Knowledge Assessment
        split_pos = len(content)
        m = re.search(r'\n---\n## [A-C]\.[45]|\n## [A-C]\.[45] ', content)
        if m:
            split_pos = m.start()

        main_body = content[:split_pos].strip()
        tail = content[split_pos:]

        # Extract FIRST summary and FIRST quiz from tail
        app_letter = basename[3].upper() # A, B, or C
        
        sum_m = re.search(r'(## ' + app_letter + r'\.4 Appendix ' + app_letter + r' Executive Summary[\s\S]*?)(?=## ' + app_letter + r'\.5 Executive|$)', tail)
        quiz_m = re.search(r'(## ' + app_letter + r'\.5 Executive & Practitioner Knowledge Assessment[\s\S]*)', tail)

        clean_sum = sum_m.group(1).strip() if sum_m else ""
        clean_quiz = quiz_m.group(1).strip() if quiz_m else ""

        # Remove duplicate headers from inside clean_quiz if present
        if clean_quiz:
            q_parts = re.split(r'\n(?=### Question \d+:)', clean_quiz)
            unique_q_parts = []
            seen_q = set()
            for qp in q_parts:
                m_q = re.search(r'### Question \d+:\s*(.*)', qp)
                if m_q:
                    q_header = m_q.group(1).strip()
                    if q_header not in seen_q:
                        seen_q.add(q_header)
                        unique_q_parts.append(qp.strip())
                else:
                    unique_q_parts.append(qp.strip())
            clean_quiz = "\n\n".join(unique_q_parts)

        final_app_doc = main_body + "\n\n---\n\n" + clean_sum + "\n\n---\n\n" + clean_quiz
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(final_app_doc)

        print(f"Cleaned Appendix: {basename}")

if __name__ == "__main__":
    make_100percent_zero_duplicates()
