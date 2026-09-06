import paper1Raw from '../../paper_01_agentic_ai_mcp.md?raw';
import paper2Raw from '../../paper_02_life_beyond_ai.md?raw';
import paper3Raw from '../../paper_03_agile_and_ai.md?raw';
import paper4Raw from '../../paper_04_ai_cybersecurity_governance.md?raw';
import paper5Raw from '../../paper_05_tri_ops_ai_ml_finops.md?raw';
import paper6Raw from '../../paper_06_augmented_leadership.md?raw';
import paper7Raw from '../../paper_07_the_ai_mindset.md?raw';
import indexRaw from '../../index.md?raw';

export const papersMetaData = [
  {
    id: 1,
    slug: 'agentic-ai-systems-mcp',
    documentId: 'EWP-2026-AGT-001',
    title: 'Agentic AI Systems: The Convergence of Autonomous Agents, RAG, and MCP',
    shortTitle: 'Agentic AI Systems & MCP',
    subtitle: 'An Enterprise Executive Whitepaper on Architecture, Governance, Interoperability, and Scalable Implementation',
    category: 'AI Architecture & Protocols',
    readTime: '25 min',
    author: 'Advanced Agentic Systems Practice',
    date: 'August 2026',
    filename: 'paper_01_agentic_ai_mcp.md',
    content: paper1Raw,
    tags: ['Agents', 'RAG', 'MCP', 'LangGraph', 'GraphRAG', 'JSON-RPC']
  },
  {
    id: 2,
    slug: 'life-beyond-ai-human-agency',
    documentId: 'EWP-2026-SOC-002',
    title: 'Life Beyond AI: Human Agency, Societal Shifts, and Frameworks for Human-AI Flourishing',
    shortTitle: 'Life Beyond AI & Human Agency',
    subtitle: 'An Enterprise & Societal Executive Whitepaper on Cognitive Preservation, Economic Evolution, and Human Governance',
    category: 'Societal & Human Policy',
    readTime: '22 min',
    author: 'Strategic Futures & Policy Practice',
    date: 'August 2026',
    filename: 'paper_02_life_beyond_ai.md',
    content: paper2Raw,
    tags: ['Epistemic Atrophy', 'C2PA', 'Cognitive Preservation', 'Post-Labor Economics', 'Intentionality']
  },
  {
    id: 3,
    slug: 'agile-and-ai-integration-sdlc',
    documentId: 'EWP-2026-SDLC-003',
    title: 'Agile and AI Integration: Synergizing Modern SDLCs with Intelligent Autonomous Systems',
    shortTitle: 'Agile & AI SDLC Integration',
    subtitle: 'An Enterprise Executive Whitepaper on Software Development Evolution and Autonomous Agile Synthesis',
    category: 'Software Engineering & DevOps',
    readTime: '20 min',
    author: 'Enterprise Software Architecture Practice',
    date: 'August 2026',
    filename: 'paper_03_agile_and_ai.md',
    content: paper3Raw,
    tags: ['Autonomous Agile Synthesis', 'DORA Metrics', 'Self-Healing CI/CD', 'MCP Tools', 'PR Automation']
  },
  {
    id: 4,
    slug: 'ai-and-cybersecurity-governance',
    documentId: 'EWP-2026-SEC-004',
    title: 'AI and Cybersecurity Governance: Mitigating Shadow AI, Enforcing Responsible AI, and Securing Enterprise Intelligence',
    shortTitle: 'AI Cybersecurity & Governance',
    subtitle: 'An Enterprise Executive Whitepaper on Threat Vectors, Zero-Trust Governance, and Regulatory Compliance',
    category: 'Cybersecurity & Compliance',
    readTime: '24 min',
    author: 'Enterprise Cybersecurity Practice',
    date: 'August 2026',
    filename: 'paper_04_ai_cybersecurity_governance.md',
    content: paper4Raw,
    tags: ['OWASP LLM', 'Shadow AI', 'ZTAGA', 'EU AI Act', 'NIST AI RMF', 'Input Guardrails']
  },
  {
    id: 5,
    slug: 'tri-ops-synergy-ai-ml-finops',
    documentId: 'EWP-2026-OPS-005',
    title: 'Tri-Ops Synergy: Integrating AIOps, MLOps, and FinOps for Cost-Controlled Enterprise AI Scaling',
    shortTitle: 'Tri-Ops (AIOps, MLOps, FinOps)',
    subtitle: 'An Enterprise Executive Whitepaper on Token Economics, Telemetry, Model Governance, and ROI Optimization',
    category: 'Cloud Ops & FinOps',
    readTime: '21 min',
    author: 'Cloud Infrastructure & FinOps Practice',
    date: 'August 2026',
    filename: 'paper_05_tri_ops_ai_ml_finops.md',
    content: paper5Raw,
    tags: ['FinOps', 'TCO-AI', 'Semantic Caching', 'SLM Router', 'GPU Optimization', 'Chargeback']
  },
  {
    id: 6,
    slug: 'augmented-leadership-executive-decision-science',
    documentId: 'EWP-2026-LDR-006',
    title: 'Augmented Leadership: Optimizing Executive Thought Processes, Strategic Decision-Making, and Execution via AI',
    shortTitle: 'Augmented Leadership & Executive AI',
    subtitle: 'An Enterprise Executive Whitepaper on Cognitive Amplification, Decision Science, and Strategic Execution',
    category: 'Executive Leadership & Strategy',
    readTime: '23 min',
    author: 'Executive Leadership Practice',
    date: 'August 2026',
    filename: 'paper_06_augmented_leadership.md',
    content: paper6Raw,
    tags: ['ECAF', 'Counter-Bias Engine', 'Pre-Mortem', 'Middle Management', 'Decision Provenance']
  },
  {
    id: 7,
    slug: 'the-ai-mindset-organizational-transformation',
    documentId: 'EWP-2026-MND-007',
    title: 'The AI Mindset: Strategic Frameworks for Identifying High-Impact Use Cases, Cultural Readiness, and Organizational Transformation',
    shortTitle: 'The AI Mindset & Culture',
    subtitle: 'An Enterprise Executive Whitepaper on Organizational Culture, Probabilistic Thinking, and Change Management',
    category: 'Culture & Transformation',
    readTime: '20 min',
    author: 'Organizational Strategy Practice',
    date: 'August 2026',
    filename: 'paper_07_the_ai_mindset.md',
    content: paper7Raw,
    tags: ['AIM-F', 'Probabilistic Thinking', 'EAVI Matrix', 'ADKAR-AI', 'Federated Champions']
  }
];

export const masterIndexContent = indexRaw;
