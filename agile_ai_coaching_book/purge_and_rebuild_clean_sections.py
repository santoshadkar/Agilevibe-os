import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def purge_and_rebuild():
    ch_files = sorted(glob.glob(os.path.join(BASE_DIR, "chapters", "**", "*.md"), recursive=True))
    app_files = sorted(glob.glob(os.path.join(BASE_DIR, "appendices", "*.md")))

    print("Executing complete section purging and dynamic blueprint contextualization...")

    for file_path in ch_files + app_files:
        basename = os.path.basename(file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Step 1: Fix duplicated summary/quiz blocks at end of file
        # Cut at the VERY FIRST occurrence of any summary/quiz heading
        first_sum_pos = len(content)
        matches = list(re.finditer(r'\n---\n## \d+\.7|\n---\n## [A-C]\.4|\n---\n## Executive|\n## \d+\.7 |\n## [A-C]\.4 |\n## \d+\.8 |\n## [A-C]\.5 ', content))
        if matches:
            first_sum_pos = matches[0].start()

        main_body = content[:first_sum_pos].strip()
        tail_content = content[first_sum_pos:]

        # Extract single clean summary and single clean quiz
        sum_match = re.search(r'(## (?:[0-9]+|A|B|C)\.(?:7|4) (?:Chapter|Appendix)? ?Executive Summary[\s\S]*?)(?=## (?:[0-9]+|A|B|C)\.(?:8|5) Executive|$)', tail_content)
        quiz_match = re.search(r'(## (?:[0-9]+|A|B|C)\.(?:8|5) Executive & Practitioner Knowledge Assessment[\s\S]*)', tail_content)

        # If 6-question quiz is in tail_content, keep it
        clean_sum = sum_match.group(1).strip() if sum_match else ""
        clean_quiz = quiz_match.group(1).strip() if quiz_match else ""

        # Step 2: Dynamically contextualize all bullet points & paragraphs in main_body
        lines = main_body.split("\n")
        new_lines = []
        current_sec = "Enterprise Architecture"

        for line in lines:
            line_s = line.strip()
            if line_s.startswith("## "):
                current_sec = line_s.replace("## ", "").strip()
                new_lines.append(line)
                continue

            # Replace repeated intro paragraph
            if "Establishing persistent alignment requires transparent communication" in line_s or "Establishing persistent alignment" in line_s:
                new_lines.append(f"Achieving high-throughput execution in **{current_sec}** requires aligning leadership strategy with squad-level backlog delivery. Eliminating architectural coupling and handoff queues ensures value flows continuously.")
                continue

            # Replace repeated 5-step blueprint bullets
            if line_s.startswith("1. **Baseline Assessment & Value Stream Audit**"):
                new_lines.append(f"1. **{current_sec} Audit**: Conduct a comprehensive value stream audit to identify manual handoffs in {current_sec}.")
            elif line_s.startswith("2. **Platform Automation & Guardrail Integration**"):
                new_lines.append(f"2. **Automation & Guardrail Deployment**: Implement automated pipeline quality gates tailored to {current_sec}.")
            elif line_s.startswith("3. **Telemetry Instrumentation & Real-Time Dashboarding**"):
                new_lines.append(f"3. **Telemetry Instrumentation**: Connect build and deployment pipelines to capture real-time flow metrics for {current_sec}.")
            elif line_s.startswith("4. **AI Co-Pilot & Continuous Feedback Integration**"):
                new_lines.append(f"4. **AI Augmentation**: Deploy specialized AI coaching agents to assist squads executing {current_sec}.")
            elif line_s.startswith("5. **Continuous Improvement & Retrospective Governance**"):
                new_lines.append(f"5. **Retrospective Governance**: Review quantitative Flow Efficiency and Lead Time metrics bi-weekly to refine {current_sec} practices.")
            else:
                new_lines.append(line)

        rebuilt_body = "\n".join(new_lines)

        # Re-assemble cleanly with EXACTLY ONE summary and ONE quiz
        final_doc = rebuilt_body.strip()
        if clean_sum:
            final_doc += "\n\n---\n\n" + clean_sum
        if clean_quiz:
            final_doc += "\n\n---\n\n" + clean_quiz

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(final_doc)

        print(f"Purged & Rebuilt: {basename}")

if __name__ == "__main__":
    purge_and_rebuild()
