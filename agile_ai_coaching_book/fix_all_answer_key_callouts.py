import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def fix_all_files():
    ch_files = glob.glob(os.path.join(BASE_DIR, "chapters", "**", "*.md"), recursive=True)
    app_files = glob.glob(os.path.join(BASE_DIR, "appendices", "*.md"))
    all_files = ch_files + app_files

    fixed_count = 0
    for file_path in all_files:
        basename = os.path.basename(file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        if "> **Answer Key & Socratic Rationale**:" in content or "Answer Key & Socratic Rationale:" in content:
            # Clean out the redundant line
            new_content = content.replace("> **Answer Key & Socratic Rationale**:\n", "")
            new_content = new_content.replace("> **Answer Key & Socratic Rationale**:", "")
            new_content = new_content.replace("Answer Key & Socratic Rationale:\n", "")
            new_content = new_content.replace("Answer Key & Socratic Rationale:", "")
            
            # Clean double newlines in blockquotes
            new_content = re.sub(r'\n>\s*\n>\s*\*\*Correct Answer:', '\n> **Correct Answer:', new_content)

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)

            print(f"Fixed redundant callout title in: {basename}")
            fixed_count += 1

    print(f"Cleaned {fixed_count} files.")

if __name__ == "__main__":
    fix_all_files()
