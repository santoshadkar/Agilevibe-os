import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

from build_full_quizzes import ALL_QUIZZES
from append_remaining_quizzes import PART_3_4_5_6_7

ALL_QUIZZES.update(PART_3_4_5_6_7)

# Part V, VI, VII Data
MORE_DATA = {
    # PART V
    "ch17_generative_ai_llms.md": (
        "17",
        [
            "Generative AI and Large Language Models (LLMs) process textual context via high-dimensional vector embeddings and transformer attention mechanisms.",
            "Retrieval-Augmented Generation (RAG) grounds LLM outputs by injecting enterprise Jira/ADO knowledge into the prompt context window.",
            "Vector databases (pgvector, Pinecone, Qdrant) calculate cosine similarity to retrieve relevant backlog context in real-time."
        ],
        [
            ("What is the primary role of Retrieval-Augmented Generation (RAG) in an enterprise AI Agile coaching assistant?",
             ["A) To replace the Jira web server", "B) To retrieve relevant external enterprise documents/tickets and ground LLM answers, preventing hallucination", "C) To generate random story points", "D) To translate text to binary"],
             "B", "RAG retrieves specific context from enterprise knowledge bases and feeds it into the LLM prompt, ensuring factual, grounded answers."),
            ("Which mathematical metric measures the semantic similarity between two backlog item text embeddings in vector space?",
             ["A) Fibonacci sequence", "B) Cosine Similarity (or Dot Product)", "C) Standard Deviation", "D) Linear regression slope"],
             "B", "Cosine similarity measures the angle between two embedding vectors, identifying semantically similar issues regardless of exact wording."),
            ("Why are high-dimensional vector embeddings superior to keyword searches for finding duplicate user stories?",
             ["A) Embeddings capture conceptual and semantic meaning rather than relying on exact word matches", "B) Embeddings use less disk space", "C) Keyword search requires Linux", "D) Embeddings disable security permissions"],
             "A", "Embeddings map semantic intent, allowing AI to match 'Login Failure' with 'Cannot Sign In' even with zero keyword overlap."),
            ("What occurs during LLM 'Tokenization'?",
             ["A) Raw input text is split into numeric sub-word units (tokens) that the transformer neural network processes", "B) Tickets are assigned to users", "C) Data is saved to PostgreSQL", "D) Files are compressed into zip format"],
             "A", "Tokenization converts character strings into token IDs, the numerical input representation required by LLM transformer models.")
        ]
    ),
    "ch18_prompt_engineering_coaches.md": (
        "18",
        [
            "Prompt engineering taxonomy includes Chain-of-Thought (CoT), Few-Shot, System Prompts, and Socratic Inquiry pipelines.",
            "Structuring system prompts with explicit roles, domain constraints, output schemas (JSON/Markdown), and guardrails prevents model drift.",
            "Socratic prompting guides Scrum Masters and Product Owners through reflective problem-solving rather than returning superficial answers."
        ],
        [
            ("Which prompt engineering technique forces an LLM to display step-by-step reasoning before outputting a final recommendation?",
             ["A) Zero-shot prompting", "B) Chain-of-Thought (CoT) prompting", "C) Random sampling", "D) Temperature maxing"],
             "B", "Chain-of-Thought prompting directs the model to break down complex logic into explicit intermediate reasoning steps."),
            ("An Agile Coach wants an LLM to analyze user stories and output ONLY valid JSON matching a specific schema. What should be included in the system prompt?",
             ["A) A polite thank-you message", "B) Explicit JSON schema definition, negative constraints ('Output ONLY JSON'), and temperature set to 0.0", "C) Asking the LLM to write a poem", "D) Setting max tokens to 5"],
             "B", "Enforcing deterministic JSON requires schema templates, negative constraints, and zero temperature for low variance."),
            ("What is the 'Few-Shot' prompting technique?",
             ["A) Providing 2-3 high-quality input/output examples within the prompt to guide the model's response format and reasoning style", "B) Running the prompt 3 times in a row", "C) Asking 5 different people for help", "D) Using 1-word prompts"],
             "A", "Few-shot prompting provides concrete exemplary pairs within the context window, dramatically improving output accuracy."),
            ("How does Socratic Prompting improve leadership coaching outcomes?",
             ["A) It forces the LLM to agree with everything the user says", "B) It instructs the LLM to ask probing, reflective questions rather than providing immediate direct solutions", "C) It deletes all sprint backlog items", "D) It generates automatic code commits"],
             "B", "Socratic prompting configures the AI to act as a reflective sounding board, encouraging leaders to analyze root causes independently.")
        ]
    ),
    "ch19_agentic_ai_agile.md": (
        "19",
        [
            "Agentic AI operates on the ReAct (Reason + Act) paradigm, enabling autonomous LLMs to plan, call external APIs, and evaluate results dynamically.",
            "Autonomous Agile Facilitator agents can inspect Jira backlogs, run statistical flow analysis, and generate retrospective themes without human intervention.",
            "Human-in-the-Loop (HITL) guardrails ensure critical decisions (story deletion, sprint commitment, pipeline triggers) require explicit human approval."
        ],
        [
            ("What is the core execution loop of a ReAct (Reason + Act) AI Agent?",
             ["A) Thought -> Action -> Observation -> Repeat", "B) Write -> Read -> Delete", "C) Start -> Stop -> Exit", "D) Compile -> Link -> Run"],
             "A", "ReAct agents iteratively generate a reasoning Thought, select/execute a tool Action, evaluate the system Observation, and continue."),
            ("Why are Human-in-the-Loop (HITL) guardrails essential in autonomous AI Agile agents?",
             ["A) AI agents run too slowly", "B) To prevent destructive or irreversible operations (e.g., deleting Jira projects, deploying unverified code) without human authorization", "C) HITL is required by Microsoft Word", "D) AI agents cannot use tools"],
             "B", "HITL introduces approval checkpoints for high-risk agent actions, balancing autonomy with enterprise safety."),
            ("An AI agent attempts to fetch backlog items, but the Jira API returns a 401 Unauthorized error. How should a robust ReAct agent respond?",
             ["A) Crash the application immediately", "B) Observe the error, reason about the auth failure, and notify the user or request updated credentials", "C) Ignore the error and pretend it succeeded", "D) Delete the repository"],
             "B", "Autonomous agents process error observations dynamically, attempting recovery strategies or escalating gracefully."),
            ("What distinguishes an Agentic AI workflow from a traditional fixed automation script?",
             ["A) Fixed scripts follow hardcoded IF/THEN paths; Agentic AI dynamically determines tool calls and execution steps based on context", "B) Agentic AI runs on paper", "C) Fixed scripts require LLMs", "D) There is no difference"],
             "A", "Agentic AI reasons about dynamic goals and selects appropriate tools conditionally, unlike deterministic hardcoded scripts.")
        ]
    ),
    "ch20_ai_ethics_governance.md": (
        "20",
        [
            "Enterprise AI governance requires mandatory PII/PHI scrubbing, data leakage prevention, and zero data retention policies with LLM vendors.",
            "Model bias and algorithmic fairness must be monitored to ensure team performance evaluations are not skewed by flawed metric prompts.",
            "Establishing an Enterprise AI Acceptable Use Policy balances developer productivity gains with intellectual property and security risk management."
        ],
        [
            ("Why should enterprise technology organizations prohibit submitting raw source code or customer PII to public, un-gated LLM APIs?",
             ["A) It slows down the internet connection", "B) Public APIs may retain, log, or train future public models on sensitive corporate IP and private customer data", "C) Public APIs do not support text", "D) It violates HTML standards"],
             "B", "Un-gated public LLM endpoints risk exposing confidential trade secrets and violating regulatory privacy laws (GDPR/HIPAA)."),
            ("What technique dynamically redacts employee names, email addresses, and API keys before sending prompts to an LLM?",
             ["A) Direct database query", "B) Automated PII/PHI Sanitization Filter (using regex/NER masking)", "C) Manual text deleting", "D) Base64 encoding"],
             "B", "Automated sanitization filters replace sensitive PII entities with anonymous placeholders (e.g., `[USER_1]`) prior to API transmission."),
            ("How can an Enterprise AI Governance Board prevent algorithmic bias in AI-driven performance analytics?",
             ["A) By banning all software tools", "B) By auditing prompt criteria, excluding subjective sentiment prompts from HR evaluations, and relying on objective telemetry", "C) By allowing AI to fire low-performing employees", "D) By hiding all metrics from developers"],
             "B", "Ethical AI governance mandates auditing evaluation algorithms and barring subjective or biased prompts from HR decision pipelines."),
            ("What is the primary objective of an Enterprise AI Acceptable Use Policy?",
             ["A) To prevent employees from using computers", "B) To define clear operational guardrails, security standards, approved tools, and legal compliance boundaries for AI usage", "C) To increase software licensing costs", "D) To require manual handwriting"],
             "B", "An Acceptable Use Policy provides clear governance frameworks so teams can leverage AI safely within legal and security boundaries.")
        ]
    ),
    # PART VI
    "ch21_ai_backlog_refinement.md": (
        "21",
        [
            "AI-powered backlog engineering transforms vague business ideas into INVEST-compliant User Stories with automated BDD (Given/When/Then) acceptance criteria.",
            "LLM-driven story splitting patterns (by workflow step, business rule, data variation) break massive Epics into thin vertical slices.",
            "Automated ambiguity detection identifies missing edge cases and security requirements before backlog items enter sprint planning."
        ],
        [
            ("An AI agent reviews a user story: 'As a user, I want a fast login page so that I am happy.' What critique will the AI INVEST validator generate?",
             ["A) Story is perfect", "B) Story violates Testable and Measurable criteria ('fast' and 'happy' are subjective and non-quantifiable)", "C) Story is too long", "D) Story needs more story points"],
             "B", "INVEST criteria require stories to be Testable; vague descriptors like 'fast' or 'happy' must be replaced with concrete SLAs."),
            ("Which Behavior-Driven Development (BDD) syntax format should an AI agent generate for acceptance criteria?",
             ["A) IF / THEN / ELSE", "B) GIVEN [initial context] WHEN [event occurs] THEN [expected outcome]", "C) SELECT / FROM / WHERE", "D) INPUT / PROCESS / OUTPUT"],
             "B", "GIVEN/WHEN/THEN is the industry-standard BDD Cucumber syntax for executable, testable acceptance criteria."),
            ("How does AI assist Product Owners in vertical story splitting?",
             ["A) By deleting half the requirements", "B) By analyzing complex stories and identifying natural slicing boundaries (e.g., spike vs MVP, happy path vs error handling)", "C) By converting stories to PDF", "D) By assigning all stories to one developer"],
             "B", "AI story-splitting patterns analyze multi-faceted stories and propose thin, valuable vertical slices that deliver end-to-end functionality."),
            ("What is the benefit of running AI Ambiguity Detection on backlog items prior to Sprint Refinement?",
             ["A) Reduces refinement meeting duration by flagging missing edge cases, security requirements, and API contracts in advance", "B) Eliminates the need for developers", "C) Automatically estimates items in exact hours", "D) Closes all open bugs"],
             "A", "Pre-refinement AI scans catch hidden assumptions and gaps early, dramatically improving sprint readiness and meeting efficiency.")
        ]
    ),
    "ch22_ai_sprint_facilitation.md": (
        "22",
        [
            "AI facilitation tools analyze sprint telemetry, Slack/Teams sentiment, and standup blockers to highlight emerging team friction in real-time.",
            "Automated retrospective theme clustering groups disparate team feedback into actionable root-cause categories using semantic embeddings.",
            "Real-Time Sentiment Radars monitor team psychological safety and burnout indicators without intrusive manual surveys."
        ],
        [
            ("During a 2-week sprint, an AI sentiment radar detects a sharp rise in negative sentiment tokens in code review comments. What action should the Scrum Master take?",
             ["A) Ignore the signal", "B) Facilitate a focused Socratic retrospective check-in on PR review norms and team psychological safety", "C) Reprimand the entire team", "D) Cancel code reviews"],
             "B", "Early sentiment warnings allow coaches to address emerging team friction and psychological safety concerns proactively."),
            ("How does AI semantic clustering improve Retrospective effectiveness for a 50-person department?",
             ["A) By deleting duplicate cards and grouping similar feedback items into high-level thematic clusters automatically", "B) By picking the retrospective leader randomly", "C) By forcing everyone to agree", "D) By extending the meeting to 4 hours"],
             "A", "Semantic clustering uses NLP to consolidate dozens of retro notes into core actionable themes, saving time and revealing patterns."),
            ("An AI Daily Standup Assistant analyzes squad updates and flags that 3 developers have been blocked by the same database migration for 3 days. What is this signature?",
             ["A) High throughput", "B) Systemic impediment requiring immediate swarm coaching or technical intervention", "C) Perfect sprint execution", "D) Scope creep"],
             "B", "Persistent multi-developer blockers indicate a critical impediment that demands immediate facilitation or technical escalation."),
            ("Why should AI sprint facilitation tools focus on team-level telemetry rather than individual developer monitoring?",
             ["A) Individual monitoring destroys trust, damages psychological safety, and encourages metric gaming", "B) AI cannot process individual names", "C) Individual data is too small", "D) Team metrics are cheaper"],
             "A", "Agile principles emphasize team accountability; tracking individual surveillance metrics undermines trust and collaboration.")
        ]
    ),
    "ch23_predictive_flow_analytics.md": (
        "23",
        [
            "Monte Carlo simulations utilize historical throughput distributions to calculate probabilistic completion dates (e.g., 85% confidence level).",
            "Weibull distribution modeling accurately fits heavy-tailed software lead time datasets better than simplistic Gaussian normal distributions.",
            "Predictive velocity forecasting prevents over-commitment during sprint planning by accounting for historical capacity variance and holidays."
        ],
        [
            ("Why are Monte Carlo probabilistic forecasts superior to single-point deterministic estimates (e.g., 'We will finish on Oct 15')?",
             ["A) Deterministic estimates ignore uncertainty; Monte Carlo models thousands of simulations to yield probabilistic confidence bands (e.g., '85% chance by Oct 15')", "B) Monte Carlo requires no data", "C) Single-point estimates are always wrong by 100 days", "D) Monte Carlo is easier to calculate by hand"],
             "A", "Probabilistic forecasting provides realistic risk-adjusted completion date ranges based on actual historical performance variability."),
            ("A technology director asks: 'When will these 50 features be done with 85% certainty?' How does a coach answer using Monte Carlo telemetry?",
             ["A) Pick a random date in 3 months", "B) Run 10,000 Monte Carlo trials against squad historical throughput and select the 85th percentile completion date", "C) Ask the lead developer for a guess", "D) Multiply story points by 2"],
             "B", "Running 10,000 simulation iterations against real throughput samples yields the precise 85th percentile statistical completion target."),
            ("Why is assuming a 'Normal Gaussian Bell Curve' for software lead times mathematically invalid?",
             ["A) Lead time distributions are right-skewed and heavy-tailed (Weibull/Lognormal) due to blocking and queueing delays", "B) Software has no lead times", "C) Normal distributions are for physics only", "D) Lead time is always constant"],
             "A", "Software delivery data has a hard lower bound and long right tail (outliers caused by blockages), making normal distribution math misleading."),
            ("How does predictive AI velocity forecasting assist in Sprint Planning?",
             ["A) It dictates exact assignments to developers", "B) It analyzes upcoming capacity, holiday calendars, and historical throughput variance to recommend a safe sprint commitment range", "C) It doubles the team's commitment", "D) It eliminates Sprint Planning entirely"],
             "B", "Predictive forecasting incorporates capacity variables and past variance to protect squads from systemic over-commitment.")
        ]
    ),
    "ch24_building_ai_coaching_agents.md": (
        "24",
        [
            "Model Context Protocol (MCP) establishes a standardized architectural specification for connecting AI models to external tools, resources, and prompts.",
            "Custom MCP Servers written in Python or TypeScript expose enterprise APIs (Jira REST, Azure DevOps, Git) as clean tool definitions to LLM client applications.",
            "Building custom AI coaching agents enables tailored enterprise automation while maintaining strict security, authentication, and execution boundaries."
        ],
        [
            ("What is the primary architectural purpose of the Model Context Protocol (MCP)?",
             ["A) To replace the HTTP protocol", "B) To provide an open standard for securely connecting AI models to local/remote data sources, tools, and context providers", "C) To format Markdown text", "D) To build database hardware"],
             "B", "MCP standardizes how applications expose tools, resources, and prompts to LLM client interfaces like Antigravity or Claude Desktop."),
            ("In an MCP Server implementation, what three core primitives can be exposed to an AI client?",
             ["A) HTML, CSS, JavaScript", "B) Tools (executable functions), Resources (readable data), and Prompts (reusable templates)", "C) Tables, Columns, Rows", "D) Users, Passwords, Tokens"],
             "B", "The MCP specification is structured around three primitives: Tools for action, Resources for data access, and Prompts for workflow templates."),
            ("A custom Python MCP Server exposes a tool `search_jira_issues(jql_query)`. How does an LLM client execute this tool?",
             ["A) By guessing the SQL query", "B) The LLM outputs a JSON tool call matching the tool schema, which the MCP client routes to the server function for execution", "C) By opening a web browser manually", "D) By restarting the server"],
             "B", "LLMs generate structured JSON invocations matching the exposed tool parameters; the MCP host executes the function and returns the result."),
            ("Why is building custom in-house MCP servers preferred over using generic third-party plugins in enterprise environments?",
             ["A) In-house MCP servers keep authentication, corporate security guardrails, and proprietary API logic strictly within the enterprise network", "B) Custom servers require no code", "C) Generic plugins are illegal", "D) MCP servers run without electricity"],
             "A", "Custom MCP servers ensure enterprise data governance, custom security tokens, and internal API schemas remain strictly under enterprise control.")
        ]
    ),
    # APPENDICES
    "appA_prompt_library.md": (
        "A",
        [
            "Appendix A provides over 105 production-tested prompts categorized across Agile Coaching, Backlog Engineering, Scrum Master, and Executive Leadership domains.",
            "Every prompt follows the structured Prompt Taxonomy: Role, Context, Task, Input Schema, Output Schema, and Operational Guardrails.",
            "Contextual prompt tuning adapts baseline prompt templates to specific organizational governance standards and enterprise tooling constraints."
        ],
        [
            ("What is the structural role of the 'Guardrails' section in an enterprise system prompt template?",
             ["A) To slow down API response speed", "B) To define explicit negative constraints (e.g., 'Do NOT invent story points', 'Do NOT include PII') that prevent model drift and policy violations", "C) To format text as bold", "D) Guardrails are optional comments"],
             "B", "Guardrails set firm operational boundaries, preventing the LLM from hallucinating, leaking PII, or violating domain policies."),
            ("When deploying an Appendix A prompt for 'Automated Acceptance Criteria Generation', why is specifying an Output Schema mandatory?",
             ["A) To ensure the generated output can be parsed programmatically or pasted directly into Jira/ADO without manual reformatting", "B) To make the prompt longer", "C) To test the CPU speed", "D) Output schemas are not supported"],
             "A", "Defining an output schema guarantees structured, consistent formatting (e.g., Markdown/JSON) ready for enterprise integration."),
            ("How should an Agile Coach customize a generic prompt template from Appendix A for a specific engineering division?",
             ["A) Inject division-specific terminology, technical stack context, definition of done rules, and team agreement guardrails", "B) Delete all instructions and write 1 sentence", "C) Change the font size", "D) Prompts should never be customized"],
             "A", "Contextual prompt tuning tailors generic templates to local domain practices, terminology, and compliance requirements."),
            ("Which category of prompts in Appendix A assists Scrum Masters during Sprint Retrospectives?",
             ["A) Database backup prompts", "B) Retrospective Theme Clustering, Root-Cause Fishbone Prompts, and Action Item Generator Prompts", "C) Payroll calculation prompts", "D) C++ compiler prompts"],
             "B", "Appendix A retro prompts focus on NLP theme grouping, root-cause analysis, and translating discussion into SMART action items.")
        ]
    ),
    "appB_jql_wiql_cheatsheet.md": (
        "B",
        [
            "Appendix B provides a complete syntax reference and 50 cross-platform query templates translating between Jira JQL, Azure DevOps WIQL, and Assets AQL.",
            "Translating query patterns between Atlassian and Microsoft ecosystems requires mapping corresponding relational operators and temporal functions.",
            "Optimizing query performance prevents long-running database locks and speeds up dashboard widget rendering across enterprise portals."
        ],
        [
            ("Which Azure DevOps WIQL clause is equivalent to the Jira JQL clause `status WAS IN ('In Progress') DURING ('2026-08-01', '2026-08-31')`?",
             ["A) `[System.State] = 'In Progress'`", "B) `[System.State] EVER 'In Progress' AND [System.ChangedDate] >= '2026-08-01' AND [System.ChangedDate] <= '2026-08-31'`", "C) `SELECT * FROM WorkItems`", "D) `WIQL has no history`"],
             "B", "WIQL uses the `EVER` operator combined with `[System.ChangedDate]` ranges to query historical work item state transitions."),
            ("What is the primary syntax difference between JQL and Asset Query Language (AQL)?",
             ["A) JQL queries issue records; AQL queries object instances and attribute relationships inside the JSM CMDB", "B) AQL only works in Excel", "C) JQL requires XML", "D) There is no difference"],
             "A", "JQL operates on Jira issues, whereas AQL targets object schemas, attributes, and connected IT asset relationships."),
            ("Why should wildcards at the beginning of search terms (e.g., `text ~ '* error'`) be avoided in enterprise JQL queries?",
             ["A) Leading wildcards force a full index scan across Lucene, causing severe search latency and CPU spikes", "B) Leading wildcards delete tickets", "C) JQL does not support text", "D) Leading wildcards require root access"],
             "A", "Leading wildcards prevent index tree traversal, forcing inefficient full text scans across millions of indexed fields."),
            ("How does WIQL handle parent-child hierarchy queries compared to JQL?",
             ["A) WIQL uses `WorkItemLinks` tree queries (`mode(Recursive)`), whereas JQL uses functions like `parent =` or `portfolioChildOf()`", "B) WIQL cannot query hierarchies", "C) JQL requires C# code", "D) Both use identical SQL syntax"],
             "A", "WIQL structures hierarchy queries using explicit link type joins (`WorkItemLinks`), while JQL uses parent functions or Jira Plans extensions.")
        ]
    ),
    "appC_transformation_checklist.md": (
        "C",
        [
            "Appendix C delivers a 35-criteria quantitative Agile & AI Maturity Assessment Checklist across 5 operational dimensions.",
            "Radar charting and maturity scoring rubrics (Level 1 Initial to Level 5 Optimized) provide an objective baseline for enterprise transformation roadmaps.",
            "Periodic quarterly diagnostic audits ensure organizational changes deliver measurable improvements in Flow Efficiency and Business Agility."
        ],
        [
            ("In the 35-criteria maturity assessment model, what characterizes an enterprise operating at 'Level 5: Optimized AI-Augmented Agility'?",
             ["A) No processes exist", "B) Continuous quantitative flow optimization, fully integrated agentic AI workflows, automated governance, and high Flow Efficiency (>40%)", "C) 100% manual paperwork", "D) Using story points for everything"],
             "B", "Level 5 maturity represents continuous empirical optimization, self-healing automated workflows, and deeply embedded AI capabilities."),
            ("How should an Enterprise Agile Coach utilize the Appendix C diagnostic scoring rubric during an initial transformation engagement?",
             ["A) To assign grades and punish low-scoring squads", "B) To establish an objective quantitative baseline across leadership, flow, tooling, and AI dimensions to prioritize target improvement initiatives", "C) To replace the company org chart", "D) To cancel all software projects"],
             "B", "Diagnostic rubrics provide objective, data-backed baselines that highlight systemic gaps and guide transformation roadmap investments."),
            ("What are the 5 core operational dimensions evaluated in the Appendix C Maturity Matrix?",
             ["A) Sales, Marketing, HR, Legal, Finance", "B) Enterprise Governance, Flow Engineering & Telemetry, Tooling Architecture (Jira/ADO), AI Augmentation & Automation, Culture & Psychological Safety", "C) Java, Python, C++, HTML, SQL", "D) SAFe, LeSS, Scrum, Kanban, XP"],
             "B", "The 35 criteria span Governance, Flow Metrics, Tooling, AI Engineering, and Cultural Readiness for comprehensive evaluation."),
            ("Why are quarterly re-assessments using the Appendix C matrix critical for transformation leads?",
             ["A) To verify progress trends, measure ROI on AI/Agile investments, and adjust coaching strategies based on empirical data changes", "B) To increase meeting count", "C) To change vendor contracts", "D) Re-assessments are not necessary"],
             "A", "Regular diagnostic cadences track maturity trajectory, ensuring transformation programs adapt to evolving enterprise operational needs.")
        ]
    )
}

ALL_QUIZZES.update(MORE_DATA)

print(f"Total quizzes loaded: {len(ALL_QUIZZES)}")

def apply_quizzes_to_files():
    ch_dir = os.path.join(BASE_DIR, "chapters")
    app_dir = os.path.join(BASE_DIR, "appendices")

    all_files = glob.glob(os.path.join(ch_dir, "**", "*.md"), recursive=True) + glob.glob(os.path.join(app_dir, "*.md"))
    
    updated_count = 0
    for file_path in all_files:
        basename = os.path.basename(file_path)
        if basename not in ALL_QUIZZES:
            print(f"Skipping (no quiz data): {basename}")
            continue

        ch_num, summary_bullets, questions = ALL_QUIZZES[basename]

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Check if file already has quiz
        if "## " in content and ("Executive Summary" in content or "Knowledge Assessment" in content):
            print(f"Already has summary/quiz: {basename}")
            # Strip existing summary/quiz if present to refresh
            content = re.split(r'\n---\n## \d+\.7|\n---\n## [A-C]\.7|\n---\n## Executive Summary|\n## \d+\.7 Chapter Executive Summary|\n## [A-C]\.1 Chapter Executive Summary|\n## [A-C]\.7 Appendix Executive Summary', content)[0]

        # Format Summary
        prefix = f"Appendix {ch_num}" if ch_num in ["A", "B", "C"] else f"Chapter {ch_num}"
        sec_num_sum = f"{ch_num}.7" if ch_num.isdigit() else f"{ch_num}.4"
        sec_num_quiz = f"{ch_num}.8" if ch_num.isdigit() else f"{ch_num}.5"

        summary_md = f"\n\n---\n\n## {sec_num_sum} {prefix} Executive Summary\n\n"
        for bullet in summary_bullets:
            summary_md += f"- **Key Takeaway**: {bullet}\n"

        # Format Quiz
        quiz_md = f"\n---\n\n## {sec_num_quiz} Executive & Practitioner Knowledge Assessment\n\n"
        for idx, (q_text, opts, ans, rat) in enumerate(questions, 1):
            quiz_md += f"### Question {idx}: {q_text}\n\n"
            for opt in opts:
                quiz_md += f"- {opt}\n"
            quiz_md += f"\n> **Answer Key & Socratic Rationale**:\n> **Correct Answer: {ans}** — {rat}\n\n"

        new_content = content.strip() + summary_md + quiz_md

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Successfully updated: {basename}")
        updated_count += 1

    print(f"Finished updating {updated_count} files with Summaries & Quizzes!")

if __name__ == "__main__":
    apply_quizzes_to_files()
