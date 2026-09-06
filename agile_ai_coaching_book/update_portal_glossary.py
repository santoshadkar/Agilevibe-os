import os

APP_PATH = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book\web_portal\src\App.jsx"

with open(APP_PATH, "r", encoding="utf-8") as f:
    text = f.read()

target = "const BOOK_STRUCTURE = ["
replacement = """const BOOK_STRUCTURE = [
  {
    part: "Executive Overview & Architectural Reference",
    tag: "Role Paths & Glossary",
    color: "tag-amber",
    chapters: [
      { id: "role_paths", title: "How to Read This Playbook: Role-Based Executive Reading Paths", desc: "Tailored 4-role reading pathways for Coaches, Admins, Engineers, and CTOs" },
      { id: "glossary", title: "Enterprise Technology & AI Architectural Glossary", desc: "Executive reference definitions for RAG, MCP, ReAct, Hazelcast, AQL, WIQL & Flow Metrics" }
    ]
  },"""

if target in text and "role_paths" not in text:
    text = text.replace(target, replacement, 1)
    with open(APP_PATH, "w", encoding="utf-8") as f:
        f.write(text)
    print("Successfully added Role Paths and Glossary to App.jsx BOOK_STRUCTURE!")
else:
    print("Already present or target not found.")
