export const assignmentsData = [
  {
    id: 'assign-1',
    title: 'Enterprise AI Search PRD & Fallback Architecture',
    difficulty: 'Hard',
    estimatedTime: '45 mins',
    tags: ['PRD Writing', 'RAG Architecture', 'Fallback UX'],
    scenario: `You are the Lead AI Product Manager at a B2B SaaS company with 50,000 enterprise users. Your team is tasked with building an internal "Enterprise AI Knowledge Search" that synthesizes answers across Jira, Confluence, and Slack.

Your CTO requires p95 latency under 1.8 seconds, zero data leakage between customer tenants, and a concrete fallback strategy when vector retrieval returns low-confidence matches.`,
    deliverables: [
      'Draft non-functional SLAs for latency, token budget, and precision.',
      'Define vector retrieval chunking strategy and metadata filtering.',
      'Construct a 3-tier fallback matrix for low-confidence queries or API timeouts.',
      'Specify the feedback collection loop (implicit + explicit).'
    ],
    rubric: [
      { criterion: 'Technical Specificity', description: 'Mentions exact SLAs, chunk size limits, and context window limits.' },
      { criterion: 'Fallback Robustness', description: 'Covers low-confidence thresholds, rate-limits, and gracefully degraded UI.' },
      { criterion: 'Data Governance', description: 'Explicit tenant isolation (RBAC) and zero-retention commitments.' }
    ],
    sampleSolution: `# AI PRD Teardown: Enterprise AI Search

## 1. Non-Functional SLAs
- **p95 Latency:** < 1.8s (First Token < 350ms via SSE streaming).
- **Cost Target:** <= $0.006 per query across input context + output.
- **Evaluation Gate:** Answer Groundedness >= 0.92, Context Precision >= 0.88.

## 2. RAG Retrieval Architecture
- **Chunking Strategy:** Semantic chunking of 500 tokens with 50 token overlap + Parent Document Retrieval.
- **Metadata Filters:** Mandatory \`tenant_id\` and \`user_role_permissions\` passed in HNSW vector query filter.

## 3. Fallback Pyramid
- **Tier 1 (High Confidence >= 0.80):** Full RAG synthesis with inline citation pills [1].
- **Tier 2 (Medium Confidence 0.55-0.79):** Render direct document links without LLM synthesis + prompt "Refine your question".
- **Tier 3 (Low Confidence / Timeout > 2.5s):** Standard Elastic Keyword Search results + notification to helpdesk.`
  },
  {
    id: 'assign-2',
    title: 'AI Cost Audit & Latency Optimization Challenge',
    difficulty: 'Medium',
    estimatedTime: '30 mins',
    tags: ['Unit Economics', 'Token Budget', 'Latency', 'Model Selection'],
    scenario: `Your AI Support Assistant currently processes 100,000 requests per day using GPT-4o. The CFO flags that monthly OpenAI bills hit $45,000/month, blowing past the budget by 300%.

The average input prompt contains 4,500 tokens (system prompt + past ticket history + knowledge base docs) and generates 350 output tokens.`,
    deliverables: [
      'Calculate current monthly API cost.',
      'Propose 3 distinct cost reduction strategies (e.g. Prompt Caching, Model Routing to Llama 3 8B, Context Trimming).',
      'Model the projected monthly cost savings for each strategy.',
      'Detail the impact on response quality and latency.'
    ],
    rubric: [
      { criterion: 'Mathematical Accuracy', description: 'Correct token price math for input/output tokens.' },
      { criterion: 'Strategic Hybrid Routing', description: 'Combines cheap SLM for routine queries + Frontier model for complex tickets.' },
      { criterion: 'Prompt Caching Optimization', description: 'Identifies prefix prompt caching benefits.' }
    ],
    sampleSolution: `# AI Cost Audit & ROI Roadmap

## 1. Current Cost Breakdown
- Daily Queries: 100,000
- Input Tokens/day: 450M tokens @ $2.50 / 1M = $1,125/day
- Output Tokens/day: 35M tokens @ $10.00 / 1M = $350/day
- **Total Monthly Spend:** ~$44,250 / month.

## 2. Optimization Strategy & Savings
1. **Prompt Caching Implementation:** The system prompt + knowledge docs (4,000 tokens) are static across queries. Prompt caching reduces input token cost by 50% ($562/day savings).
2. **Intent Classification & Hybrid Routing:**
   - 65% of support tickets are simple FAQ lookups -> Route to Llama 3.1 8B on groq/Ollama ($0.05 / 1M tokens).
   - 35% complex tickets -> Route to Claude 3.5 Sonnet / GPT-4o.
- **New Projected Monthly Cost:** ~$8,200 / month (**81.5% Cost Reduction!**).`
  },
  {
    id: 'assign-3',
    title: 'Building a Medical AI Summary Evaluation Harness',
    difficulty: 'Hard',
    estimatedTime: '50 mins',
    tags: ['Evals', 'LLM-as-a-Judge', 'Healthcare', 'Safety'],
    scenario: `You are building an AI tool that summarizes doctor-patient consultation audio transcripts into structured Electronic Health Record (EHR) SOAP notes.

Because hallucinations in medical notes can cause patient harm, safety and accuracy are non-negotiable. You must construct an evaluation framework before launching to beta testing.`,
    deliverables: [
      'Design a 50-sample Golden Test Dataset schema.',
      'Specify 4 quantitative eval metrics (Medical Accuracy, Omission Rate, Hallucination Rate, Format Adherence).',
      'Write an LLM-as-a-Judge prompt to evaluate medical fidelity.',
      'Establish red-line launch blockers.'
    ],
    rubric: [
      { criterion: 'Safety Risk Mitigation', description: 'Zero tolerance for synthetic facts in dosage or diagnosis.' },
      { criterion: 'Eval Engineering', description: 'Provides clear step-by-step LLM-as-a-Judge scoring rubric (1-5 scale).' }
    ],
    sampleSolution: `# Medical AI Evaluation Harness

## 1. Golden Dataset Schema
| Column | Description |
| :--- | :--- |
| \`consult_id\` | Unique identifier |
| \`raw_transcript\` | Audio transcript input |
| \`gold_soap_note\` | Board-certified physician ground truth note |
| \`edge_case_type\` | Overlapping speakers, medical jargon, accent variance |

## 2. LLM-as-a-Judge Rubric Prompt
\`\`\`
You are an expert Medical Auditor. Compare the AI Generated SOAP Note against the Physician Ground Truth.
Rate "Hallucination Risk" from 1 (Severe synthetic medical facts present) to 5 (100% grounded in transcript).
Any discrepancy in dosage, allergy, or diagnosis MUST trigger score = 1.
\`\`\`

## 3. Red-Line Launch Blockers
- Hallucination Rate MUST be 0.00% on medical facts.
- Formatting adherence to FHIR standard >= 99.5%.`
  }
];
