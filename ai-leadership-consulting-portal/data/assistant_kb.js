window.AI_ASSISTANT_KB = [
  // 1. RAG to CFO
  {
    keywords: ["rag", "cfo", "explain rag", "retrieval augmented generation", "open book"],
    topic: "Explaining RAG to a CFO",
    response: `
<h4 style="color: var(--accent-cyan);">💡 Executive Pitch: Explaining RAG to a CFO</h4>
<p><strong>The 30-Second Elevator Pitch:</strong></p>
<blockquote style="border-left: 3px solid var(--accent-cyan); padding-left: 1rem; font-style: italic; color: #fff; margin: 0.75rem 0;">
"RAG (Retrieval-Augmented Generation) is like giving an open-book exam to a genius researcher. Instead of spending $500,000 to retrain a custom foundation model on our company data, RAG dynamically pulls exact text chunks from our internal SharePoint/PDFs at query time, feeds them into the model's context window, and forces the model to cite verbatim sources with zero hallucination."
</blockquote>

<h5 style="color: var(--accent-emerald); margin-top: 1rem;">Key CFO Financial & Operational Takeaways:</h5>
<ul class="curriculum-list">
  <li><strong>90% Cost Reduction:</strong> Eliminates model pre-training & fine-tuning compute bills ($0 model training vs $200k+).</li>
  <li><strong>Real-Time Data Freshness:</strong> Update a PDF in SharePoint today, RAG retrieves it instantly without re-indexing the model.</li>
  <li><strong>Zero Hallucination Control:</strong> Setting temperature = 0.0 forces the model to state <em>'Information not found in context'</em> if data is missing, protecting corporate liability.</li>
</ul>
    `
  },

  // 2. LoRA vs QLoRA
  {
    keywords: ["lora", "qlora", "fine tuning", "fine tune", "peft", "rank decomposition"],
    topic: "LoRA vs QLoRA vs Fine-Tuning Rationale",
    response: `
<h4 style="color: var(--accent-cyan);">⚙️ Technical Advisory: LoRA vs QLoRA vs RAG Matrix</h4>
<p><strong>RAG vs Fine-Tuning Decision Criteria:</strong></p>
<ul class="curriculum-list">
  <li><strong>Choose RAG when:</strong> Accessing real-time corporate documents, static policy manuals, or knowledge databases where source citations are legally required.</li>
  <li><strong>Choose Fine-Tuning (LoRA / QLoRA) when:</strong> Customizing output style, domain jargon, rigid JSON schema formatting, or running on low-resource edge hardware.</li>
</ul>
<p><strong>LoRA vs QLoRA Mathematical Breakdown:</strong></p>
<div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin: 0.75rem 0;">
  <code>LoRA: W = W_0 + (alpha / r) * (B * A)  [Freezes W_0, trains low-rank matrices B & A]</code><br/>
  <code>QLoRA: Quantizes W_0 to 4-bit NormalFloat (NF4), reducing GPU VRAM by 70% with 0% accuracy loss.</code>
</div>
<p><strong>Financial Impact:</strong> QLoRA reduces hardware requirements from an $80,000 GPU cluster to a single $500 commercial GPU card.</p>
    `
  },

  // 3. EU AI Act & Governance
  {
    keywords: ["eu ai act", "compliance", "high risk", "nist", "governance", "penalty", "fines"],
    topic: "EU AI Act & Regulatory Compliance Strategy",
    response: `
<h4 style="color: var(--accent-cyan);">🛡️ Executive Governance: EU AI Act Risk Tiering & Strategy</h4>
<p><strong>The 4 Regulatory Risk Tiers:</strong></p>
<ul class="curriculum-list">
  <li><strong>Unacceptable Risk (PROHIBITED):</strong> Cognitive behavioral manipulation, un-targeted facial scraping, biometric social scoring. <em>Penalties up to €35M or 7% global turnover.</em></li>
  <li><strong>High Risk Tier (Annex III):</strong> Credit scoring, employment screening, medical diagnostics, critical infrastructure. Mandatory conformity assessments, data quality logs, and Human-in-the-Loop oversight.</li>
  <li><strong>Minimal Risk Tier:</strong> Internal knowledge search RAG, customer service chatbots (requires transparency notification).</li>
</ul>
<p><strong>Consultant Action Plan:</strong> Mandate Zero Data Retention (ZDR) cloud SLAs, establish a central AI Hub-and-Spoke CoE, and maintain a logged AI Asset Registry.</p>
    `
  },

  // 4. Shadow AI Detection & Audit
  {
    keywords: ["shadow ai", "detect shadow ai", "unsanctioned ai", "casb", "dlp", "data leak"],
    topic: "Identifying, Auditing & Mitigating Shadow AI",
    response: `
<h4 style="color: var(--accent-cyan);">🕵️ Executive Advisory: How to Detect & Eliminate Shadow AI</h4>
<p><strong>What is Shadow AI?</strong> Employees uploading confidential corporate documents, source code, or customer financial records to unvetted personal AI accounts (ChatGPT, Claude) that retain data for public model retraining.</p>

<h5 style="color: var(--accent-emerald); margin-top: 0.75rem;">5 Audit Detection Methods:</h5>
<ul class="curriculum-list">
  <li><strong>1. CASB & DLP Web Telemetry:</strong> Audit Cloud Access Security Broker (CASB) logs for outbound HTTP calls to <code>openai.com</code>, <code>anthropic.com</code>, <code>huggingface.co</code>.</li>
  <li><strong>2. DNS Gateway Logs:</strong> Track unapproved AI domain resolution traffic across corporate devices.</li>
  <li><strong>3. Endpoint Extension Audits:</strong> Scan managed laptops for browser plugins copying clipboard text to AI APIs.</li>
  <li><strong>4. Credit Card Expense Audits:</strong> Audit recurring $20/month SaaS billing on corporate cards.</li>
  <li><strong>5. Anonymized Employee Surveys:</strong> Discover unaddressed workflow pain points forcing staff to use external tools.</li>
</ul>
<p style="margin-top: 0.75rem;"><strong>Golden Rule:</strong> Never just block Shadow AI with firewalls—staff will use personal phones. <strong>Deploy a secure Enterprise GenAI Portal with Zero Data Retention SLAs as an approved replacement.</strong></p>
    `
  },

  // 5. Buy vs Build vs Hybrid
  {
    keywords: ["buy vs build", "build vs buy", "hybrid", "decision framework", "make vs buy"],
    topic: "Buy vs Build vs Hybrid Strategic Framework",
    response: `
<h4 style="color: var(--accent-cyan);">📊 Strategic Decision Matrix: Buy vs. Build vs. Hybrid</h4>
<p><strong>When to Take Each Strategic Decision:</strong></p>
<ul class="curriculum-list">
  <li><strong>BUY (SaaS Off-the-Shelf):</strong> Choose for non-core commodity utilities (standard email drafting, routine HR FAQ chatbot) where speed-to-market is critical and zero proprietary IP is created.</li>
  <li><strong>BUILD (Custom Models on Air-Gapped GPUs):</strong> Choose for core competitive differentiation (trading algorithms, specialized drug discovery, defense code) where 100% IP ownership and air-gapped security are mandatory.</li>
  <li><strong>HYBRID (Enterprise Private APIs + RAG + Open Source):</strong> <strong>Recommended for 80% of Enterprise Use Cases.</strong> Combines commercial frontier reasoning (Azure OpenAI / Claude) with private vector DBs (Qdrant) and local PII scrubbing (Presidio).</li>
</ul>
    `
  },

  // 6. Forming AI Governance Team
  {
    keywords: ["governance team", "steering committee", "form governance", "committee", "coe setup"],
    topic: "Forming the Cross-Functional AI Governance Committee",
    response: `
<h4 style="color: var(--accent-cyan);">🏛️ Governance Strategy: Forming the AI Steering Committee</h4>
<p><strong>Cross-Functional Committee Composition:</strong></p>
<ul class="curriculum-list">
  <li><strong>Chief AI Officer / AI Director (Chairperson):</strong> Drives strategic roadmap, manages capital allocation.</li>
  <li><strong>CISO:</strong> Audits Zero Data Retention SLAs, encryption, and threat vectors.</li>
  <li><strong>General Counsel / Legal Lead:</strong> Enforces EU AI Act compliance, IP indemnification, and liability policies.</li>
  <li><strong>Chief Data Officer:</strong> Controls data lineage, data access permissions, and data hygiene across silos.</li>
  <li><strong>Business Unit Sponsors (CFO, VP Ops, VP Sales):</strong> Define Stop/Go KPI targets and measure labor ROI.</li>
  <li><strong>Ethics Officer:</strong> Conducts algorithmic bias audits and human oversight policy reviews.</li>
</ul>
    `
  },

  // 7. Responsible AI Employee Guidelines
  {
    keywords: ["responsible ai", "employee practice", "guidelines", "ethical ai", "acceptable use"],
    topic: "Employee Practice Guidelines for Responsible AI",
    response: `
<h4 style="color: var(--accent-cyan);">🛡️ Operational Guidelines: Responsible AI for Employees</h4>
<p><strong>The Daily Employee Operational Checklist:</strong></p>
<ul class="curriculum-list">
  <li><strong>1. Zero PII Input Rule:</strong> Never paste customer SSNs, credit cards, or names into AI prompts. Always use synthetic anonymized variables.</li>
  <li><strong>2. Verbatim Citation Verification:</strong> Never accept AI outputs without clicking ground-truth document links to verify facts.</li>
  <li><strong>3. Human-in-the-Loop Ownership:</strong> Employees remain 100% accountable for all work product. The prompt engineer is the author of record.</li>
  <li><strong>4. Bias Review:</strong> Inspect outputs for gender, racial, or regional stereotyping before publishing.</li>
  <li><strong>5. Incident Reporting:</strong> Report model hallucinations or security glitches immediately to the AI CoE team.</li>
</ul>
    `
  },

  // 8. Token TCO & FinOps
  {
    keywords: ["tco", "token cost", "calculator", "budget", "finops", "caching", "redis"],
    topic: "Calculating 3-Year TCO & Token Math",
    response: `
<h4 style="color: var(--accent-cyan);">📊 Financial Strategy: Token Cost Math & 3-Year TCO</h4>
<p><strong>Daily Token Billing Formula:</strong></p>
<div class="formula-box" style="background: rgba(16, 185, 129, 0.1); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-emerald); margin: 0.75rem 0;">
<code>Daily Compute Cost = Active Users × Queries/Day × [(Input Tokens × Rate/1M) + (Output Tokens × Rate/1M)]</code>
</div>
<p><strong>3-Year Cost Optimization Levers:</strong></p>
<ul class="curriculum-list">
  <li><strong>Semantic Caching (Redis VL):</strong> Serves 35-40% of repetitive FAQ queries for $0.00 token compute cost.</li>
  <li><strong>Small Model Routing:</strong> Route simple triage queries to Llama-8B or GPT-4o-mini ($0.15/1M tokens) instead of GPT-4o ($2.50/1M tokens).</li>
  <li><strong>API vs GPU Crossover:</strong> Self-host open-source models (vLLM) on cloud GPUs when volume exceeds 50 Million tokens/day.</li>
</ul>
    `
  },

  // 9. Pitching to CTO
  {
    keywords: ["cto", "pitch cto", "technical architecture", "decoupled", "legacy integration"],
    topic: "Pitching AI Architecture to a CTO",
    response: `
<h4 style="color: var(--accent-cyan);">🏛️ Executive Advisory: Pitching AI Strategy to a CTO</h4>
<p><strong>CTO Mindset & Core Concerns:</strong> CTOs fear tech debt, proprietary lock-in, latency bottlenecks, and breaking legacy production microservices.</p>
<h5 style="color: var(--accent-emerald); margin-top: 0.75rem;">The 4 CTO Reassurance Pillars:</h5>
<ul class="curriculum-list">
  <li><strong>1. Decoupled Read-Only Integration:</strong> RAG connects to existing SQL databases and SharePoint via read-only API connectors—zero schema alterations to core ERP/CRMs.</li>
  <li><strong>2. Cloud-Agnostic Model Gateway (LiteLLM):</strong> Prevents single-vendor lock-in. Switch between Azure OpenAI, Anthropic, or self-hosted vLLM with 1 line of config.</li>
  <li><strong>3. Sub-500ms Latency SLAs:</strong> Enforced via streaming SSE responses, Redis semantic caching, and HNSW vector indexing.</li>
  <li><strong>4. Automated Eval Suite (Ragas):</strong> CI/CD regression testing for prompt faithfulness and retrieval precision.</li>
</ul>
    `
  },

  // 10. Pitching to CISO & Security
  {
    keywords: ["ciso", "security", "pii", "phi", "zdr", "zero data retention", "prompt injection"],
    topic: "Defending AI Security to a CISO",
    response: `
<h4 style="color: var(--accent-cyan);">🛡️ Executive Advisory: Defending AI Security to a CISO</h4>
<p><strong>CISO Mindset & Primary Vulnerability Threats:</strong> CISOs fear data leakage to public training sets, PII violations, and indirect prompt injections.</p>
<h5 style="color: var(--accent-emerald); margin-top: 0.75rem;">The 4 CISO Security Safeguards:</h5>
<ul class="curriculum-list">
  <li><strong>1. Zero Data Retention (ZDR) Contractual SLA:</strong> Guarantees cloud providers (Azure OpenAI / AWS Bedrock) never log, cache, or retrain models on client data.</li>
  <li><strong>2. On-Premises PII/PHI Anonymization:</strong> Local Microsoft Presidio pipeline scrubs Social Security Numbers, names, and credit cards <em>before</em> sending text to cloud embeddings.</li>
  <li><strong>3. Dual-LLM Security Boundary:</strong> Separates untrusted external inputs from system execution prompts to prevent indirect prompt injection.</li>
  <li><strong>4. Isolated Vector Storage:</strong> Tenant-isolated vector DB clusters with TLS 1.3 encryption in transit and AES-256 at rest.</li>
</ul>
    `
  },

  // 11. Vector Database Comparison
  {
    keywords: ["vector db", "vector database", "qdrant", "pinecone", "pgvector", "milvus", "hnsw"],
    topic: "Enterprise Vector Database Selection Matrix",
    response: `
<h4 style="color: var(--accent-cyan);">📊 Technical Comparison: Enterprise Vector Databases</h4>
<p><strong>Comparing Vector Engines for Enterprise RAG:</strong></p>
<ul class="curriculum-list">
  <li><strong>Qdrant Enterprise (RECOMMENDED):</strong> Rust-based, extreme memory efficiency, native HNSW hybrid search + payload filtering, supports on-prem or cloud VPC. Best for high-scale hybrid RAG.</li>
  <li><strong>Pinecone Serverless:</strong> Fully managed SaaS, zero cluster management, scales automatically. Excellent for fast time-to-market without DevOps overhead.</li>
  <li><strong>pgvector (PostgreSQL Extension):</strong> Leverages existing Postgres SQL databases. Best for small-to-medium datasets (<1 million vectors) where maintaining a separate vector cluster is unnecessary.</li>
  <li><strong>Milvus / Zilliz:</strong> Highly distributed C++ vector database built for billion-scale vector collections in massive cloud environments.</li>
</ul>
    `
  },

  // 12. FDE and SRE Staffing
  {
    keywords: ["fde", "sre", "staffing", "forward deployed engineer", "site reliability engineer", "talent"],
    topic: "Role of FDEs and SREs in AI Delivery",
    response: `
<h4 style="color: var(--accent-cyan);">👥 Staffing Strategy: Forward Deployed (FDE) & Reliability (SRE) Engineers</h4>
<p><strong>Why Enterprise AI Projects Require Specialized Human Roles:</strong></p>
<ul class="curriculum-list">
  <li><strong>Forward Deployed Engineers (FDEs @ $220k/yr):</strong> Embed directly with client operational teams on-site in Year 1. FDEs build custom data connectors, clean legacy schemas, construct ETL pipelines, and drive user adoption.</li>
  <li><strong>AI Site Reliability Engineers (SREs @ $195k/yr):</strong> Protect production health after go-live. SREs manage vector index memory, enforce <500ms latency SLAs, configure auto-scaling GPU clusters, and handle fallback gateways during cloud outages.</li>
</ul>
<p><strong>Cost Management:</strong> FDE staffing scales down by 50% post-Year 1 as internal client CoE teams take over maintenance.</p>
    `
  }
];
