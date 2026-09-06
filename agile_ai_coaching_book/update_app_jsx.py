with open('web_portal/src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = """      { id: "ch24", title: "Chapter 24: Building Custom AI Coaching Agents & MCP Servers", desc: "Model Context Protocol (MCP) Jira/ADO Servers & Custom GPT Coaching Assistants" },
    ]
  }
];"""

replacement = """      { id: "ch24", title: "Chapter 24: Building Custom AI Coaching Agents & MCP Servers", desc: "Model Context Protocol (MCP) Jira/ADO Servers & Custom GPT Coaching Assistants" },
    ]
  },
  {
    part: "Part VII: Executive Coaching Guardrails & Operational Appendices",
    tag: "Appendices & Guardrails",
    color: "tag-emerald",
    chapters: [
      { id: "appA", title: "Appendix A: Enterprise AI Coaching Prompt Library", desc: "📌 EXECUTIVE COACHING GUARDRAIL: Over 100 Production-Tested Prompts for Agile Coaches, Scrum Masters, Product Owners & Enterprise Leaders" },
      { id: "appB", title: "Appendix B: Enterprise JQL, WIQL & AQL Cheat Sheet", desc: "📌 EXECUTIVE COACHING GUARDRAIL: Complete Syntax Reference for Jira JQL, Azure DevOps WIQL & Assets AQL" },
      { id: "appC", title: "Appendix C: Enterprise Agile & AI Maturity Assessment Checklist", desc: "📌 EXECUTIVE COACHING GUARDRAIL: Comprehensive Operational Audit & Diagnostic Tool for Technology Leadership" }
    ]
  }
];"""

if target in text:
    text = text.replace(target, replacement)
    with open('web_portal/src/App.jsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully updated App.jsx with Part VII Appendices.")
else:
    print("Could not find target in App.jsx")
