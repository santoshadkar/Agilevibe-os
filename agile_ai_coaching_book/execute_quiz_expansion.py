import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

from build_full_quizzes import ALL_QUIZZES
from append_remaining_quizzes import PART_3_4_5_6_7
from execute_all_quizzes_update import MORE_DATA
from expand_all_quizzes_to_6 import EXTRA_QUESTIONS

ALL_QUIZZES.update(PART_3_4_5_6_7)
ALL_QUIZZES.update(MORE_DATA)

def run_expansion():
    ch_dir = os.path.join(BASE_DIR, "chapters")
    app_dir = os.path.join(BASE_DIR, "appendices")

    all_files = sorted(glob.glob(os.path.join(ch_dir, "**", "*.md"), recursive=True) + glob.glob(os.path.join(app_dir, "*.md")))
    
    updated_count = 0
    for file_path in all_files:
        basename = os.path.basename(file_path)
        if basename not in ALL_QUIZZES:
            print(f"Skipping: {basename}")
            continue

        ch_num, summary_bullets, q_base = ALL_QUIZZES[basename]
        q_extra = EXTRA_QUESTIONS.get(basename, [])

        all_6_questions = list(q_base) + list(q_extra)

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Strip existing summary/quiz section if present
        split_patterns = [
            r'\n---\n## \d+\.7', r'\n---\n## [A-C]\.4', r'\n---\n## [A-C]\.7',
            r'\n---\n## Executive Summary', r'\n## \d+\.7 Chapter Executive Summary',
            r'\n## [A-C]\.4 Appendix Executive Summary', r'\n## \d+\.8 Executive'
        ]
        for pattern in split_patterns:
            content = re.split(pattern, content)[0]

        # Build clean formatted sections
        prefix = f"Appendix {ch_num}" if ch_num in ["A", "B", "C"] else f"Chapter {ch_num}"
        sec_num_sum = f"{ch_num}.7" if ch_num.isdigit() else f"{ch_num}.4"
        sec_num_quiz = f"{ch_num}.8" if ch_num.isdigit() else f"{ch_num}.5"

        summary_md = f"\n\n---\n\n## {sec_num_sum} {prefix} Executive Summary\n\n"
        for bullet in summary_bullets:
            summary_md += f"- **Key Takeaway**: {bullet}\n"

        quiz_md = f"\n---\n\n## {sec_num_quiz} Executive & Practitioner Knowledge Assessment\n\n"
        for idx, q_tuple in enumerate(all_6_questions, 1):
            q_text = q_tuple[0]
            opts = q_tuple[1]
            ans = q_tuple[2]
            rat = q_tuple[3]

            quiz_md += f"### Question {idx}: {q_text}\n\n"
            for opt in opts:
                quiz_md += f"- {opt}\n"
            # CLEAN FORMAT: No double title printing!
            quiz_md += f"\n> **Correct Answer: {ans}** — {rat}\n\n"

        new_content = content.strip() + summary_md + quiz_md

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Updated {basename} with 6-question quiz.")
        updated_count += 1

    print(f"Successfully expanded quizzes to 6 questions across {updated_count} files!")

if __name__ == "__main__":
    run_expansion()
