export const interviewQuestionsData = [
  {
    id: 'int-1',
    category: 'AI Product Design',
    company: 'Google / Meta',
    title: 'Design an AI Assistant for Gmail to help sales reps close deals faster.',
    difficulty: 'Hard',
    framework: 'CIRCLES-AI',
    questionSummary: 'How would you build a native AI feature inside Gmail that acts as an enterprise copilot for account executives?',
    keyPointsToCover: [
      'Clarify target sales persona (B2B Account Executives managing 20+ active pipeline deals).',
      'Identify core pain point: Context switching between CRM (Salesforce) and email threads.',
      'AI Solution: Automatic thread summarization + CRM deal health scoring + 1-click tailored email drafting.',
      'Architecture: RAG over CRM history & email threads; SLM for quick drafting.',
      'Evals: Acceptance rate of draft suggestions, time saved per reply, hallucination rate on price quotes.'
    ],
    sampleAnswer: `**1. Clarify & Goals:**
Targeting B2B Account Executives (AEs). The goal is to reduce email turnaround time from 4 hours to 15 minutes and ensure AEs never misquote pricing or promise unreleased features.

**2. Core AI Capabilities & Specs:**
- *Feature A: Smart Context Sidebar:* Real-time RAG fetching Salesforce opportunity status, recent contract terms, and customer feature requests.
- *Feature B: Grounded Response Generator:* Generates reply drafts with automatic citation of internal deal room docs.
- *Feature C: Price & Commitment Guardrail:* Deterministic check ensuring quoted discounts match company approval rules.

**3. System Design & Model Selection:**
- Fast intent classifier model (DistilBERT / Llama 3B) categorizes incoming email intent (Pricing inquiry, Feature question, Objections).
- RAG pipeline fetches deal context.
- Claude 3.5 Sonnet generates human-like response draft.

**4. Failure Handling & UX:**
- Highlight AI-generated text in soft violet tint.
- Allow 1-click edit inline.
- If pricing details are ambiguous in CRM, show warning badge: *"Verify custom discount with Sales Ops before sending."*

**5. Success Metrics:**
- Primary: Email draft acceptance rate (Target: > 68%).
- Guardrail Metric: Zero unapproved pricing errors in sent emails.`
  },

  {
    id: 'int-2',
    category: 'Technical AI Feasibility',
    company: 'OpenAI / Anthropic',
    title: 'How do you decide between Fine-Tuning a Llama 3 8B model vs running RAG with GPT-4o?',
    difficulty: 'Medium',
    framework: 'Trade-off Matrix',
    questionSummary: 'Explain the decision criteria, cost trade-offs, and maintenance overhead for Fine-Tuning vs RAG.',
    keyPointsToCover: [
      'Knowledge Updates: RAG is dynamic (real-time); Fine-tuning is static (snapshot at training time).',
      'Domain Adaptability: Fine-tuning excels at learning unique syntax, medical formatting, or JSON schemas; RAG excels at factual retrieval.',
      'Cost & Scale: Fine-tuning a small model (8B) reduces inference token costs significantly at high request volumes (1M+ daily queries).',
      'Hallucination Risk: RAG provides explicit citations and lower hallucination when grounded correctly.'
    ],
    sampleAnswer: `I evaluate this choice across 4 dimensions: Data Dynamics, Task Nuance, Unit Economics, and Data Privacy.

1. **Data Dynamics (Factual Freshness):**
   - If the feature requires access to real-time, rapidly updating data (e.g. news, customer support docs, inventory stock), **RAG is mandatory**. Fine-tuning cannot keep up with continuous retraining.

2. **Task Nuance & Format Rigidity:**
   - If the goal is getting an SLM to output ultra-specific JSON schemas or master a proprietary medical coding dialect without bloated system prompts, **Fine-Tuning is superior**.

3. **Inference Economics at Scale:**
   - For 10,000 queries/day: GPT-4o RAG API costs are reasonable (~$50/day).
   - For 10,000,000 queries/day: RAG on GPT-4o will cost $50,000/day. Fine-tuning a Llama 3 8B model hosted on vLLM GPU nodes will reduce costs to ~$2,500/day—a **95% cost reduction**.

4. **Recommendation:** Start with RAG on a frontier model to prove product-market fit. Once prompt patterns stabilize, extract high-quality user interaction pairs to fine-tune a small open-weight model.`
  },

  {
    id: 'int-3',
    category: 'AI System Design & Metrics',
    company: 'Microsoft / Amazon',
    title: 'Design an AI Customer Support Agent and explain how you measure hallucination rate.',
    difficulty: 'Hard',
    framework: 'RAG-Triad + Eval Engineering',
    questionSummary: 'Walk through end-to-end product design, metrics SLA, and continuous evaluation for a fully autonomous customer support agent.',
    keyPointsToCover: [
      'Problem definition: Resolve tier-1 customer inquiries without human intervention.',
      'RAG pipeline with vector DB (Pinecone/pgvector) indexing knowledge base.',
      'Guardrail layer checking intent toxicity and prompt injection.',
      'Evaluation: Measuring RAG Triad (Context Relevance, Faithfulness, Answer Relevance).',
      'LLM-as-a-Judge test set execution before each prompt/pipeline deploy.'
    ],
    sampleAnswer: `**1. System Architecture:**
- User Question -> **Guardrail Filter** (Prompt injection & PII check) -> **Vector Search** (Hybrid Keyword + Semantic search on Pinecone) -> **LLM Generation** (GPT-4o / Claude 3.5 Sonnet with System Rules) -> **Output Audit** (LLM-as-a-Judge faithfulness check) -> User UI.

**2. Measuring Hallucination Rate (Faithfulness):**
Hallucination occurs when the model outputs statements *not present* in the retrieved reference documents.

We measure Faithfulness mathematically using **LLM-as-a-Judge**:
- *Step 1:* Break the generated response into discrete claims $C_1, C_2, ... C_n$.
- *Step 2:* For each claim, verify if it is logically entailed by the retrieved context $K$.
- *Faithfulness Score* = $\\frac{\\text{Number of Verified Claims}}{\\text{Total Claims}}$.

**3. Launch Threshold:**
- Faithfulness MUST be >= 0.98.
- If Faithfulness < 0.98, the response is blocked from user display and automatically falls back to: *"Let me connect you with a human specialist."*`
  },

  {
    id: 'int-4',
    category: 'AI Product Strategy & Execution',
    company: 'Stripe / Notion',
    title: 'Your AI model hallucinated sensitive information in production. How do you handle the incident?',
    difficulty: 'Hard',
    framework: 'Incident Response & Root Cause Analysis (RCA)',
    questionSummary: 'Describe your immediate containment, engineering mitigation, and long-term product guardrails.',
    keyPointsToCover: [
      'Immediate Containment: Roll back prompt/model version or activate fallback deterministic UI.',
      'Root Cause Analysis: Determine if failure was due to vector retrieval mismatch, model hallucination, or prompt injection.',
      'Customer Communication: Transparent update, post-mortem report.',
      'Systemic Prevention: Add failing sample to Golden Dataset, deploy output verification guardrail.'
    ],
    sampleAnswer: `**Phase 1: Immediate Containment (T + 0 to 15 mins)**
- Flip feature flag to switch the affected component to Tier-2 Fallback (Static template search or human routing).
- Notify security, legal, and product leadership.

**Phase 2: Root Cause Analysis (T + 1 to 4 hours)**
- Inspect raw telemetry logs: Input prompt, retrieved vector context chunks, model temperature settings, and output payload.
- Determine failure vector: Was it a vector retrieval failure (bad chunk ingested), prompt leakage, or model hallucination?

**Phase 3: Prevention & Eval Dataset Update**
- Create a test case reproducing the exact hallucination scenario.
- Add it to our continuous **Golden Dataset Eval Suite**.
- Implement a secondary output verification guardrail (e.g. Llama Guard / PII regex filter) that flags hallucinated entities before rendering to the client.`
  }
];
