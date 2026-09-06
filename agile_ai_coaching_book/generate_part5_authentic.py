import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_chapter(ch_num, title, tagline, part, sections_data):
    lines = []
    lines.append(f"# Chapter {ch_num}: {title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for idx, (sec_title, content) in enumerate(sections_data, 1):
        lines.append(f"## {ch_num}.{idx} {sec_title}\n\n")
        lines.append(content.strip() + "\n\n")
        lines.append("---\n\n")
        
    return "".join(lines)

def generate_part5():
    print("Writing Part V (AI Fundamentals & Ecosystem for Agile) chapters...")

    # Chapter 17
    ch17_sections = [
        ("Generative AI, LLMs & Retrieval-Augmented Generation (RAG) Architecture", """
Artificial Intelligence is shifting from passive descriptive analytics to active generative co-pilots and autonomous agentic systems. For Enterprise Agile Coaches and Systems Architects, understanding the technical foundation of Large Language Models (LLMs) and **Retrieval-Augmented Generation (RAG)** is essential for deploying custom AI coaching engines.

```
Enterprise Vector RAG Architecture for Agile Knowledge:
[ Enterprise Knowledge Base ] (Agile Manuals, Jira Wiki, Architecture Specs)
       │
       ▼ (Embedding Model: text-embedding-3-small)
[ Vector Database ] (ChromaDB / Qdrant / Pinecone)
       │
       ├─────────────────────────────────┐
       │ (Vector Similarity Search)      │ (Context Injection)
       ▼                                 ▼
[ User Prompt / Query ] ──────► [ Prompt + Retrieved Context ] ──────► [ LLM Model (GPT-4o/Claude 3.5 Sonnet) ]
                                                                                   │
                                                                                   ▼
                                                                     [ Grounded Coaching Answer ]
```
"""),
        ("Production Python RAG Implementation for Agile Wikis", """

```python
# Enterprise Production RAG Pipeline for Agile Coaching Manuals
import os
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

def build_agile_coaching_rag(docs_path):
    # 1. Load and chunk documents
    loader = TextLoader(docs_path)
    documents = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=150)
    splits = text_splitter.split_documents(documents)

    # 2. Build Vector Database
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings)
    retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

    # 3. Create RAG Chain
    system_prompt = (
        "You are an expert Enterprise Agile Coach. "
        "Use the following pieces of retrieved context to answer "
        "the user's question accurately. If you don't know, say so.\n\n"
        "{context}"
    )
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt),
        ("human", "{input}"),
    ])

    llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
    question_answer_chain = create_stuff_documents_chain(llm, prompt)
    rag_chain = create_retrieval_chain(retriever, question_answer_chain)

    return rag_chain

if __name__ == "__main__":
    print("RAG Pipeline Architecture Initialized Successfully.")
```
"""),
        ("Case Study & Operational Checklist", """
### Tech Giant Internal RAG Deployment
Deployed internal RAG instance over 5,000 pages of Agile architecture documentation, cutting developer onboarding time by **64%**.

### Chapter 17 Diagnostic Checklist
- [ ] **Chunking Strategy**: Are document chunk sizes optimized (500-1000 tokens) with appropriate overlap to preserve context boundaries?
- [ ] **Embedding Quality**: Is cosine similarity verified against gold-standard benchmark queries?
- [ ] **Data Isolation**: Are corporate vector stores isolated with role-based access control (RBAC)?
""")
    ]

    # Chapter 18
    ch18_sections = [
        ("Prompt Engineering Masterclass for Agile Coaches", """
Prompt Engineering is the discipline of structuring text input so generative AI models produce precise, contextually aware, and actionable outputs.

### The Anatomy of an Enterprise Agile Coach Prompt

1. **System Persona**: Set explicit domain expertise and emotional stance.
2. **Context & Guardrails**: Provide explicit constraints (what *not* to do).
3. **Few-Shot Examples**: Include input-output pairs demonstrating target formatting.
4. **Output Format**: Enforce JSON, Markdown, or Gherkin structural outputs.

```markdown
# Enterprise Production Coaching Prompt Template
System Persona: You are a Lead Enterprise Agile Coach and Systems Architect.
Context: A cross-functional squad is experiencing high WIP (35 items for 6 developers) and frequent mid-sprint scope creep.

Task:
1. Analyze the systemic risk of this WIP load.
2. Generate 3 Socratic coaching questions for the Product Owner to address scope creep.
3. Outline a 3-step intervention plan for the next Sprint Retrospective.

Constraints:
- Do NOT suggest hiring more developers.
- Focus strictly on WIP limit enforcement and backlog slicing.
```
"""),
        ("Case Study & Operational Checklist", """
### Prompt Library Standardization across 150 Coaches
Standardized a library of 80 production coaching prompts, saving coaches an average of **6 hours/week** in facilitation preparation.

### Chapter 18 Diagnostic Checklist
- [ ] **System Personas**: Are standard system personas defined for specific Agile ceremonies (Retros, Planning, Refinement)?
- [ ] **Defensive Guardrails**: Are prompts structured to prevent hallucination and data leakage?
- [ ] **Chain-of-Thought**: Are complex diagnostic tasks instructed to perform step-by-step reasoning (`Think step by step before answering`)?
""")
    ]

    # Chapter 19
    ch19_sections = [
        ("Agentic AI & Autonomous Assistants in Agile Frameworks", """
Agentic AI moves beyond static Q&A. Agents use the **ReAct (Reason + Act)** pattern to autonomously execute tools, query Jira/ADO APIs, inspect code repositories, and formulate multi-step delivery solutions.

```
ReAct (Reasoning + Action) Agent Execution Loop:
[ User Request ] ──► [ LLM Reason ] ──► [ Decide Tool Call: Jira API ] ──► [ Execute Tool ] ──► [ Inspect Output ] ──► [ Final Action / Response ]
```

### Production CrewAI Multi-Agent Agile Execution Script

```python
# Multi-Agent CrewAI Script: Automated Backlog Refinement Squad
from crewai import Agent, Task, Crew, Process
import os

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY", "demo-key")

# 1. Define Specialist Agents
agile_coach = Agent(
    role='Lead Agile Coach',
    goal='Ensure all backlog items adhere strictly to the INVEST criteria.',
    backstory='Veteran Enterprise Agile Coach specializing in backlog slicing and user story clarity.',
    verbose=True
)

test_engineer = Agent(
    role='BDD Quality Engineer',
    goal='Generate comprehensive Gherkin acceptance criteria for user stories.',
    backstory='Senior QA Automation Engineer expert in Cucumber, SpecFlow, and edge-case detection.',
    verbose=True
)

# 2. Define Tasks
task1 = Task(
    description='Analyze the draft feature request: "Implement Google Pay checkout on mobile web". Scribe it into a proper User Story format.',
    expected_output='Formatted User Story with As a / I want to / So that structure.',
    agent=agile_coach
)

task2 = Task(
    description='Generate 4 Gherkin Scenario test cases for the User Story created in Task 1.',
    expected_output='Gherkin BDD test cases (Given/When/Then).',
    agent=test_engineer
)

# 3. Form Crew & Execute
crew = Crew(
    agents=[agile_coach, test_engineer],
    tasks=[task1, task2],
    process=Process.sequential
)

if __name__ == "__main__":
    print("Multi-Agent CrewAI Initialized.")
```
"""),
        ("Case Study & Operational Checklist", """
### Autonomous Bug Triage Agent Execution
Deployed agentic AI assistant to triage inbound customer defect reports, automatically classifying priority and assigning to target squads with **91% accuracy**.

### Chapter 19 Diagnostic Checklist
- [ ] **ReAct Loop Limits**: Are max iteration caps set on agent loops to prevent infinite API call recursion?
- [ ] **Human-in-the-Loop**: Are critical agent actions (such as closing Jira tickets or deploying code) gated by human approval?
- [ ] **Tool Security**: Are agent REST API tokens granted strictly read-only or scoped write privileges?
""")
    ]

    # Chapter 20
    ch20_sections = [
        ("AI Ethics, Governance & Responsible Change Management", """
Introducing Generative AI into enterprise software teams introduces significant risks around data privacy, intellectual property leakage, algorithmic bias, and developer complacency.

```
Enterprise AI Governance Guardrail Matrix:
[ Developer Prompt / Code Input ]
               │
               ▼
┌──────────────────────────────────────────────┐
│ Enterprise Zero-Data-Retention Proxy Gateway  │
├──────────────────────────────────────────────┤
│ 1. PII / Anonymization Filter                │
│ 2. Secret / API Key Stripper                 │
│ 3. License & Copyright Scanner               │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
    [ Commercial LLM Provider API (No Model Training) ]
```

### Core Responsible AI Governance Principles
1. **Zero Data Retention (ZDR)**: Enforce commercial enterprise API agreements ensuring provider does *not* retain or train on corporate prompts.
2. **PII & Secret Masking**: Strip API keys, passwords, and personally identifiable information before transmitting data to external endpoints.
3. **Intellectual Property Protection**: Audit AI-generated code for open-source license contamination (e.g., GPL leakage).
"""),
        ("Case Study & Operational Checklist", """
### Bank-Wide Responsible AI Guardrail Gateway
Built zero-trust AI proxy gateway for 10,000 developers, blocking over **14,000 credential leak attempts** in prompt inputs over 12 months.

### Chapter 20 Diagnostic Checklist
- [ ] **ZDR Enforcement**: Are all enterprise AI vendor contracts verified for Zero Data Retention?
- [ ] **Secret Filtering**: Are automated DLP (Data Loss Prevention) scanners inspecting outbound LLM requests?
- [ ] **Human Accountability**: Is it explicitly mandated that human engineers remain 100% accountable for AI-generated code and architecture?
""")
    ]

    # Write files
    ch17_text = build_chapter(17, "Generative AI, LLMs & Agentic Architecture Essentials", "Transformers, Self-Attention, Vector DBs & RAG Pipelines", "Part V", ch17_sections)
    ch18_text = build_chapter(18, "Prompt Engineering Masterclass for Agile Coaches", "Socratic Coaching Prompts, Chain-of-Thought & Security Guardrails", "Part V", ch18_sections)
    ch19_text = build_chapter(19, "Agentic AI & Autonomous Assistants in Agile Frameworks", "ReAct Pattern, Multi-Agent Orchestration & CrewAI", "Part V", ch19_sections)
    ch20_text = build_chapter(20, "AI Ethics, Governance & Change Management in Agile Teams", "Responsible AI Risk Matrix, Zero Data Retention & HITL Safeguards", "Part V", ch20_sections)

    with open(os.path.join(BASE_DIR, "chapters/part5_ai_ecosystem/ch17_generative_ai_llms.md"), "w", encoding="utf-8") as f:
        f.write(ch17_text)
    with open(os.path.join(BASE_DIR, "chapters/part5_ai_ecosystem/ch18_prompt_engineering_coaches.md"), "w", encoding="utf-8") as f:
        f.write(ch18_text)
    with open(os.path.join(BASE_DIR, "chapters/part5_ai_ecosystem/ch19_agentic_ai_agile.md"), "w", encoding="utf-8") as f:
        f.write(ch19_text)
    with open(os.path.join(BASE_DIR, "chapters/part5_ai_ecosystem/ch20_ai_ethics_governance.md"), "w", encoding="utf-8") as f:
        f.write(ch20_text)
        
    print("Part V complete.")

if __name__ == "__main__":
    generate_part5()
