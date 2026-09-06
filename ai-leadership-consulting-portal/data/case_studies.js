window.AI_CASE_STUDIES_DATA = [
  // CASE 1: FINTECH
  {
    id: "case-1",
    industry: "FinTech & Banking",
    title: "Global FinTech: Automated Underwriting & AI Customer Support Transformation",
    company: "Apex Global Financial (15,000 Employees, $4.2B Annual Revenue)",
    challenge: "Apex Financial handles 50,000 loan applications and 200,000 customer inquiries daily. Loan decision turnaround takes 3.5 business days, call center operating costs are escalating ($18M/yr), and strict PCI-DSS, GLBA, and FCRA regulations require 100% data privacy and legally auditable explainability for all credit denials.",
    initialBudget: "$1.5M Allocated",
    timeline: "6-Month Target Pilot",
    stages: [
      {
        stageNumber: 1,
        title: "Phase 1: Architecture & Model Selection Strategy",
        prompt: "The CEO wants fast answers, the CFO wants strict budget control, and the CISO warns that customer financial records must NEVER leak to public AI training sets. What model deployment architecture do you recommend to Apex Financial?",
        options: [
          {
            id: "opt-1a",
            label: "A. Public Commercial APIs (e.g. standard ChatGPT Team accounts for all 15,000 staff)",
            impact: { roi: -40, risk: 90, alignment: 10, confidence: 20 },
            feedback: "<strong>CRITICAL RISK!</strong> Public commercial endpoints lack enterprise zero-retention SLA and HIPAA/GLBA guarantees. This breaches financial privacy regulations and risks catastrophic data leaks. The CISO vetoes your proposal."
          },
          {
            id: "opt-1b",
            label: "B. Enterprise Cloud Private API (Azure OpenAI / AWS Bedrock) with Zero-Data-Retention SLA & Dedicated Isolated Vector DB",
            impact: { roi: 85, risk: 15, alignment: 95, confidence: 90 },
            feedback: "<strong>EXCELLENT DECISION!</strong> Enterprise Zero Data Retention guarantees client data is never stored or used for retraining. Combining private endpoints with dedicated isolated Vector DBs passes security compliance while providing frontier model reasoning capability."
          },
          {
            id: "opt-1c",
            label: "C. Build and pre-train a 70B parameter foundation model from scratch on internal hardware",
            impact: { roi: -60, risk: 70, alignment: 30, confidence: 40 },
            feedback: "<strong>POOR FINANCIAL FIT!</strong> Pre-training a foundation model costs $10M+ and takes 12-18 months. It blows past the $1.5M budget and 6-month timeline without proving early business value."
          }
        ]
      },
      {
        stageNumber: 2,
        title: "Phase 2: Credit Underwriting Automation & Regulatory Explainability",
        prompt: "The Loan Operations team wants an AI Agent to automatically approve or reject loan applications. However, financial regulators require exact explainability for every credit denial (FCRA compliance). How do you design this system?",
        options: [
          {
            id: "opt-2a",
            label: "A. Allow a fine-tuned LLM to make direct binary Approve/Reject decisions without human oversight",
            impact: { roi: 20, risk: 95, alignment: 20, confidence: 30 },
            feedback: "<strong>REGULATORY VIOLATION!</strong> Generative LLMs are probabilistic black boxes. Automatic rejection without deterministic score audit logs violates Fair Credit Reporting laws and exposes Apex to massive regulatory fines."
          },
          {
            id: "opt-2b",
            label: "B. Hybrid Architecture: Use deterministic ML (XGBoost) for credit scoring + RAG LLM to draft explainable audit notes for Human Underwriters (HITL)",
            impact: { roi: 90, risk: 10, alignment: 95, confidence: 95 },
            feedback: "<strong>MASTERFUL STRATEGY!</strong> Classical ML provides auditable, deterministic credit risk scores while the RAG LLM synthesizes income docs and drafts compliant adverse action letters for human review. Processing time drops from 3.5 days to 15 minutes with 100% regulatory compliance."
          }
        ]
      },
      {
        stageNumber: 3,
        title: "Phase 3: Financial ROI Defense & Token Cost Management",
        prompt: "The CFO expresses concern that call center bot token volume could cause unexpected cloud bill spikes during holiday loan promotion rushes. How do you mitigate token cost uncertainty?",
        options: [
          {
            id: "opt-3a",
            label: "A. Deploy an LLM Gateway (LiteLLM) with Semantic Caching (Redis) to serve repetitive FAQ queries for $0.00 compute cost, backed by departmental daily token rate caps",
            impact: { roi: 95, risk: 5, alignment: 100, confidence: 95 },
            feedback: "<strong>FINANCIAL ADVISORY VICTORY!</strong> Semantic caching handles 40% of tier-1 support traffic instantly with 10ms response time and zero token expense. The CFO signs off on Year 1 funding."
          },
          {
            id: "opt-3b",
            label: "B. Ask support agents to manually summarize customer chat logs to keep prompts short",
            impact: { roi: 30, risk: 40, alignment: 35, confidence: 40 },
            feedback: "<strong>INEFFICIENT.</strong> Manual summarization increases human agent handling time, defeating the operational efficiency goal."
          }
        ]
      },
      {
        stageNumber: 4,
        title: "Phase 4: Change Leadership & Call Center Workforce Transformation",
        prompt: "Call center union reps express fear of mass layoffs as the AI Customer Support bot goes live. Call deflection rate hits 65%. How do you manage the workforce transition?",
        options: [
          {
            id: "opt-4a",
            label: "A. Immediately lay off 50% of call center staff to maximize immediate quarterly cost savings",
            impact: { roi: 50, risk: 85, alignment: 20, confidence: 30 },
            feedback: "<strong>CULTURAL & REPUTATIONAL DAMAGE.</strong> Triggers union strikes, PR backlash, and severe drop in employee morale. Escrow support for high-net-worth clients collapses due to missing experienced personnel."
          },
          {
            id: "opt-4b",
            label: "B. Upskill tier-1 agents into 'AI Operations Specialists' who supervise agentic escalations and manage complex high-net-worth client relations",
            impact: { roi: 95, risk: 10, alignment: 100, confidence: 95 },
            feedback: "<strong>OUTSTANDING LEADERSHIP!</strong> Repurposing staff to higher-tier relationship management improves customer satisfaction (CSAT up 32%) while eliminating routine ticket backlog. Employee retention remains high."
          }
        ]
      }
    ]
  },

  // CASE 2: HEALTHCARE
  {
    id: "case-2",
    industry: "Healthcare & BioTech",
    title: "Regional Hospital Network: Clinical Knowledge RAG & HIPAA Compliance",
    company: "St. Jude Health System (8 Hospitals, 12,000 Staff)",
    challenge: "Physicians waste 2.5 hours daily searching through 400,000 EHR medical records and clinical guidelines. Medical errors due to outdated protocol search cost $6M annually. CISO mandates 100% HIPAA compliance and zero medical hallucination.",
    initialBudget: "$900,000 Allocated",
    timeline: "4-Month Pilot",
    stages: [
      {
        stageNumber: 1,
        title: "Phase 1: HIPAA Security & PHI Data Boundary",
        prompt: "How do you architect clinical document ingestion to guarantee protected health information (PHI) is never exposed to public cloud APIs?",
        options: [
          {
            id: "c2-opt-1a",
            label: "A. Local On-Premises PII/PHI Anonymization (Microsoft Presidio) + Private Azure Health Cloud Endpoint with Zero Data Retention SLA",
            impact: { roi: 90, risk: 10, alignment: 95, confidence: 95 },
            feedback: "<strong>HIPAA COMPLIANT VICTORY!</strong> Scrubbing PHI locally before passing queries over Zero Data Retention encrypted tunnels ensures 100% HIPAA compliance while providing cutting-edge clinical retrieval."
          },
          {
            id: "c2-opt-1b",
            label: "B. Send raw medical PDF scans directly to public consumer AI APIs",
            impact: { roi: -80, risk: 100, alignment: 0, confidence: 10 },
            feedback: "<strong>CATASTROPHIC HIPAA VIOLATION!</strong> Violates federal privacy laws, leading to massive HHS civil penalties and immediate shutdown."
          }
        ]
      }
    ]
  },

  // CASE 3: RETAIL
  {
    id: "case-3",
    industry: "Retail & E-Commerce",
    title: "Omnichannel Retailer: Agentic Inventory Forecasting & Customer Service Bot",
    company: "OmniCart Global (500 Stores, $2.8B Revenue)",
    challenge: "Inventory stockouts cause $35M in lost sales during peak holiday sales. Customer support resolution time averages 48 hours. The VP of Retail wants an autonomous agentic system to automate re-stocking and instant support triage.",
    initialBudget: "$1.2M Allocated",
    timeline: "5-Month Pilot",
    stages: [
      {
        stageNumber: 1,
        title: "Phase 1: Tool Execution & ERP Integration",
        prompt: "How do you connect the GenAI Customer Support Bot to OmniCart's legacy SAP ERP system to allow automatic order tracking and refund processing?",
        options: [
          {
            id: "c3-opt-1a",
            label: "A. Use LangGraph State Machines with Function Calling APIs backed by strict Human-in-the-Loop (HITL) approval for refunds over $100",
            impact: { roi: 95, risk: 10, alignment: 95, confidence: 95 },
            feedback: "<strong>PERFECT ARCHITECTURE!</strong> LangGraph orchestrates structured tool execution while HITL safeguards prevent runaway refund exploits."
          },
          {
            id: "c3-opt-1b",
            label: "B. Give the AI Agent unmonitored SQL write access directly to the production SAP database",
            impact: { roi: -50, risk: 95, alignment: 15, confidence: 20 },
            feedback: "<strong>DANGEROUS!</strong> Direct SQL write permissions without API validation allows prompt injections to corrupt inventory records or trigger fraudulent refunds."
          }
        ]
      }
    ]
  },

  // CASE 4: MANUFACTURING
  {
    id: "case-4",
    industry: "Manufacturing & Supply Chain",
    title: "Industry 4.0 Equipment Maintenance & Predictive Quality Audit",
    company: "Titan Industrial Gear (24 Factories, 35,000 Employees)",
    challenge: "Unplanned factory line downtime costs $120,000 per hour. Equipment manuals are fragmented across 80,000 legacy PDFs. Plant engineers need instant multi-lingual technical retrieval on shop floor tablets.",
    initialBudget: "$2.0M Allocated",
    timeline: "6-Month Target",
    stages: [
      {
        stageNumber: 1,
        title: "Phase 1: Shop Floor Offline Vector Search & Multilingual RAG",
        prompt: "Shop floor technicians operate in low-connectivity factory environments. How do you deploy RAG search across 80,000 technical manuals?",
        options: [
          {
            id: "c4-opt-1a",
            label: "A. Edge AI Deployment: Quantized Open-Source Llama 3 8B model (INT4) + Local Qdrant Vector DB on ruggedized shop floor edge servers",
            impact: { roi: 90, risk: 15, alignment: 95, confidence: 90 },
            feedback: "<strong>OUTSTANDING EDGE ENGINEERING!</strong> Edge server deployment guarantees 10ms local query speed even during total internet blackouts."
          },
          {
            id: "c4-opt-1b",
            label: "B. Require factory tablets to stream high-definition video to cloud APIs over 3G cellular connections",
            impact: { roi: -30, risk: 80, alignment: 20, confidence: 30 },
            feedback: "<strong>NETWORK FAILURE.</strong> Low cellular connectivity causes constant timeouts on the shop floor."
          }
        ]
      }
    ]
  },

  // CASE 5: END-TO-END ENTERPRISE LIFECYCLE SIMULATOR
  {
    id: "case-5",
    industry: "End-to-End Enterprise Transformation (Full Lifecycle)",
    title: "End-to-End Enterprise AI Life-Cycle Simulator (RFI to Post-Production OpEx Optimization)",
    company: "Global Horizon Enterprise (25,000 Staff, $6.5B Revenue)",
    challenge: "Global Horizon is undertaking a 10-phase enterprise AI transformation across 10 lifecycle stages: RFI, RFP, Deep Discovery, Architecture Design, C-Suite Decision, Phase 1 Pilot, Phase 2 Agentic Scale, Go-Live Monitoring, Scope Evolution, and OpEx/CapEx Optimization.",
    initialBudget: "$3.5M Total Multi-Year Budget Cap",
    timeline: "12-Month 10-Phase Transformation",
    stages: [
      {
        stageNumber: 1,
        title: "Stage 1: RFI (Request for Information) & Problem Framing",
        prompt: "The client files an RFI seeking 'Generative AI to automate enterprise operations.' How do you approach the initial framing as an AI Leader & Consultant?",
        options: [
          {
            id: "c5-opt-1a",
            label: "A. Frame the RFI around specific high-ROI bottlenecks (RAG Knowledge Search & Support Triage) and establish a 2-week Discovery Audit before quoting fixed prices",
            impact: { roi: 95, risk: 10, alignment: 95, confidence: 95 },
            feedback: "<strong>EXECUTIVE CONSULTANT MASTERY!</strong> Qualifies client readiness, filters out unfeasible hype, and frames the engagement around business value."
          },
          {
            id: "c5-opt-1b",
            label: "B. Promise that GenAI will replace 80% of company staff within 30 days without inspecting internal data",
            impact: { roi: -90, risk: 100, alignment: 0, confidence: 10 },
            feedback: "<strong>DISASTROUS HYPE.</strong> Sets unachievable expectations, causes union panic, and destroys advisory trust."
          }
        ]
      }
    ]
  }
];

// ==========================================================================
// DEEP 10-PHASE ENTERPRISE AI LIFECYCLE MASTER PLAYBOOK DATASET
// ==========================================================================
window.AI_LIFECYCLE_PLAYBOOK = [
  {
    phaseNumber: 1,
    phaseName: "Phase 1: RFI (Request for Information) & Problem Framing",
    phaseNameShort: "Phase 1: RFI Framing",
    goal: "Evaluate enterprise readiness, filter out unfeasible GenAI hype, identify high-impact operational bottlenecks, and determine if AI is truly required vs classical deterministic code.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Business Bottleneck Triage:</strong> The AI Leader must act as an objective gatekeeper. When business unit leaders request AI for their department, the AI Leader audits whether the problem can be solved with 100% precision using simple SQL queries, RPA scripts, or standard web forms. If classical deterministic software works, the AI Leader rejects the AI proposal to save capital.</li>
        <li><strong>Stakeholder Alignment & Expectation Control:</strong> The CEO and Board may be hypnotized by media GenAI hype. The AI Leader educates executive peers on probabilistic vs deterministic computing, clarifying that LLMs are reasoning engines, not magic databases.</li>
        <li><strong>Pre-Discovery Data Readiness Check:</strong> Before issuing external vendor RFIs, the AI Leader initiates a preliminary audit to confirm if internal document repositories (SharePoint, Confluence, ERPs) contain clean text or scanned PDF image chaos.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>RFI Response Strategy:</strong> Never submit generic marketing brochures. Respond to the RFI with verifiable domain case studies showing quantified metrics (e.g., 65% call deflection, 4.5x document review speedup).</li>
        <li><strong>Discovery Qualification Questioning:</strong> Ask probing questions to qualify client maturity: <em>"Where does your ground-truth data reside? Do you have explicit Zero Data Retention requirements? What is your acceptable hallucination error rate in production?"</em></li>
        <li><strong>Establishing the Paid Discovery Audit:</strong> Refuse to quote fixed implementation prices at the RFI stage. Pitch a 2-week paid <strong>Strategic AI Discovery Audit ($25k - $50k)</strong> to analyze legacy schemas before committing to pilot contracts.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> RFI Opportunity Framing Matrix, Problem Qualification Canvas, 2-Week Paid Discovery Proposal (.md), Vendor Capability Scorecard.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Zero multi-year CapEx commitments at RFI stage. Reserve $25k for the initial paid discovery audit."
  },
  {
    phaseNumber: 2,
    phaseName: "Phase 2: RFP (Request for Proposal) & Commercial Bidding",
    phaseNameShort: "Phase 2: RFP & Bidding",
    goal: "Scope technical architecture blueprints, establish commercial pricing structures (Fixed-Price Pilot vs T&M Scale), negotiate Zero Data Retention cloud SLAs, and set hard budget caps.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Establishing Budget Caps:</strong> Set strict initial CapEx budget caps ($150,000 for targeted pilots; $500,000 for mid-scale enterprise rollouts). Require all vendor proposals to include explicit 90-day Stop/Go KPI criteria.</li>
        <li><strong>Enforcing Security Mandates:</strong> Require all bidding vendors to sign contractual <strong>Zero Data Retention (ZDR)</strong> cloud SLAs guaranteeing that customer data will never be cached, logged, or used for model retraining by cloud providers.</li>
        <li><strong>Steering Committee Governance:</strong> Form an RFP evaluation committee comprising the CFO (financials), CISO (security), CTO (architecture), and Legal Counsel (IP protection).</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Structured 3-Phase Commercial Proposal:</strong> Structure the RFP response into 3 distinct phases to de-risk client investment: <em>Phase 1: Foundation & Governance (Days 1-30); Phase 2: RAG Knowledge Search Pilot (Days 31-90); Phase 3: Agentic Scale & ERP Integration (Days 91-180).</em></li>
        <li><strong>Human Talent Cost Transparency:</strong> Explicitly cost out specialized human talent line items alongside cloud token compute: Forward Deployed Engineers (FDEs @ $220k/yr) for data integration, and Site Reliability Engineers (SREs @ $195k/yr) for 99.99% uptime.</li>
        <li><strong>Contractual Risk Safeguards:</strong> Offer a Fixed-Price model for the Phase 1 Pilot to build trust, transitioning to Time-and-Materials (T&M) for Phase 2/3 scaling.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> RFP Master Proposal Document (.md), 3-Year Financial TCO Estimator, Enterprise ZDR SLA Contract, Vendor Evaluation Matrix.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Cap Phase 1 Pilot at $150k - $500k. Include 90-day Stop/Go milestone gates before unlocking Phase 2 capital."
  },
  {
    phaseNumber: 3,
    phaseName: "Phase 3: Deep Technical & Data Infrastructure Audit",
    phaseNameShort: "Phase 3: Deep Data Audit",
    goal: "Audit legacy data silos, schema quality, PII/PHI privacy boundaries, OCR document ingestion needs, and cloud MLOps maturity.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Unlocking Siloed Data Access:</strong> Department heads often guard their data fiercely. The AI Leader uses executive sponsorship to secure database credentials, read-only API keys, and SharePoint access for the implementation team.</li>
        <li><strong>Assigning Data Stewards:</strong> Assign dedicated business unit Data Stewards responsible for verifying ground-truth document accuracy before ingestion.</li>
        <li><strong>Compliance Alignment:</strong> Coordinate with the CISO to establish data classification tags (Public, Internal, Confidential, Restricted PII/PHI).</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>2-Week On-Site Data Maturity Audit:</strong> Deploy Forward Deployed Engineers (FDEs) on-site to inspect raw datasets. Audit PDF types (digital native vs scanned images requiring OCR), SQL relational tables, and API rate limits.</li>
        <li><strong>Local PII Anonymization Architecture:</strong> Configure Microsoft Presidio or spaCy locally on-premises to strip Social Security Numbers, credit cards, and PHI <em>before</em> text chunks are sent to cloud embedding endpoints.</li>
        <li><strong>Data Lineage Mapping:</strong> Map exact data flow from source databases through ETL clean pipelines into the vector database.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> Data Infrastructure Maturity Scorecard (1-5 Scale), Data Lineage Flowchart, Microsoft Presidio Sanitization Ruleset, ETL Pipeline Schema.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Allocate 15% to 20% of the total pilot budget specifically to data cleaning, parsing, and OCR processing."
  },
  {
    phaseNumber: 4,
    phaseName: "Phase 4: Architecture Blueprint & UI/UX Experience Design",
    phaseNameShort: "Phase 4: Architecture & UI/UX",
    goal: "Architect foundation model selection, HNSW vector database indexing, LangGraph agent loops, and zero-friction Human-in-the-Loop (HITL) UI/UX interfaces.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Human-in-the-Loop (HITL) Authority Gates:</strong> Enforce strict policy rules ensuring that AI agents <em>never</em> execute high-risk operations (e.g., approving $100k+ loans, issuing refunds, modifying medical prescriptions) without mandatory human worker confirmation.</li>
        <li><strong>User Experience Alignment:</strong> Ensure the AI copilot fits seamlessly into existing employee workflows (e.g., embedded inside Salesforce, SAP, or Teams) rather than forcing staff to learn a standalone 10th web portal.</li>
        <li><strong>Architecture SLA Approval:</strong> Sign off on target latency SLAs (<500ms for chat, <2s for document search) and availability targets (99.99%).</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Hybrid RAG Vector Architecture:</strong> Design a hybrid retrieval engine combining BM25 keyword matching with dense HNSW vector search (Qdrant Enterprise) and Cross-Encoder reranking (Cohere Rerank v3) for 95%+ precision.</li>
        <li><strong>LangGraph Agent State Machines:</strong> Orchestrate multi-step tool execution using LangGraph state graphs, defining clear state transitions, fallback loops, and error recovery routes.</li>
        <li><strong>UI/UX Wireframing:</strong> Deliver interactive UI/UX wireframes showing citation hover tooltips, verbatim source document side-by-side split screens, and one-click 'Accept AI Recommendation' buttons.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> Target AI Architecture Blueprint Diagram, LangGraph State Workflow Schema, Human-in-the-Loop UI Wireframes, Vector DB Index Specification.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Model vector DB cluster pricing ($300/mo base + $0.05 per active user) and LiteLLM gateway caching infrastructure."
  },
  {
    phaseNumber: 5,
    phaseName: "Phase 5: Executive Board & C-Suite Decision Gate",
    phaseNameShort: "Phase 5: C-Suite Signoff",
    goal: "Present the unified business case to the Executive Committee and neutralize persona pushback from the CFO, CISO, CTO, CEO, CHRO, and General Counsel.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Board Presentation Leadership:</strong> Lead the executive funding pitch. Frame the program around quantified business value: <em>"$850,000 annual labor savings, 65% customer support deflection, and 100% regulatory compliance."</em></li>
        <li><strong>Internal Political Sponsorship:</strong> Pre-wire executive peers individually before the formal Board meeting. Address the CFO's budget concerns and CISO's security fears in advance.</li>
        <li><strong>Charter Authorization:</strong> Obtain formal signatures on the Enterprise AI Master Implementation Charter.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Neutralizing C-Suite Persona Vetoes:</strong>
          <br/>• <strong>CFO Pushback:</strong> Present 3-Year TCO schedules with FDE/SRE staffing and token cost caps.
          <br/>• <strong>CISO Pushback:</strong> Present ZDR contractual SLAs, local Presidio PII scrubbing, and Dual-LLM prompt injection security guardrails.
          <br/>• <strong>CTO Pushback:</strong> Present decoupled RAG architecture that connects to legacy databases via read-only APIs without core system rewrites.
          <br/>• <strong>Legal Counsel Pushback:</strong> Guarantee vendor commercial IP indemnification clauses protecting against copyright litigation.</li>
        <li><strong>Executive Board Deck:</strong> Deliver a sleek 10-slide executive presentation deck outlining technical blueprints, financial schedules, and risk mitigations.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> Executive Board Presentation Deck (.md), C-Suite Defense Risk Matrix, Signed Enterprise AI Charter, 3-Year Payback Schedule.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Formal Board authorization releasing Phase 1 pilot funding ($150k - $500k) into escrow."
  },
  {
    phaseNumber: 6,
    phaseName: "Phase 6: Phase 1 Pilot Execution (Days 1 - 30 / Foundation & RAG MVP)",
    phaseNameShort: "Phase 6: Phase 1 Pilot",
    goal: "Establish Hub-and-Spoke AI Center of Excellence (CoE), deploy private cloud endpoints with Zero Data Retention, build RAG knowledge search MVP, and ingest core document repositories.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Establishing the AI Hub-and-Spoke CoE:</strong> Form the central AI CoE Hub responsible for managing API credentials, cloud budgets, and safety standards, while business unit Spokes drive domain adoption.</li>
        <li><strong>Publishing Acceptable Use Policy:</strong> Publish and enforce company-wide policies detailing approved GenAI tools and strictly prohibiting unvetted consumer AI accounts.</li>
        <li><strong>Pilot Group Selection:</strong> Select a champion pilot group of 50 power users (e.g. senior underwriters, tier-2 support leads) to test the Phase 1 MVP.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Forward Deployed Engineer (FDE) On-Site Sprint:</strong> Embed FDEs on-site to build clean ETL pipelines, parse 50,000 PDF documents, generate vector embeddings, and populate the Qdrant vector database.</li>
        <li><strong>Private Cloud Endpoint Provisioning:</strong> Deploy Azure OpenAI or AWS Bedrock endpoints configured with contractual Zero Data Retention (ZDR) and private VNet isolation.</li>
        <li><strong>RAG Hallucination Tuning:</strong> Set model temperature to 0.0, enforce strict system prompt citation constraints, and test retrieval accuracy using benchmark eval sets.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> Azure/AWS ZDR Private Endpoint, Qdrant Vector Cluster, Knowledge Search RAG MVP Portal, CoE Governance Charter.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Track daily token burn rate against departmental rate limits. Target <$2,000/month compute cost during Phase 1."
  },
  {
    phaseNumber: 7,
    phaseName: "Phase 7: Phase 2 Scale & Agentic Integration (Days 31 - 90)",
    phaseNameShort: "Phase 7: Phase 2 Scale",
    goal: "Scale pilot to 1,000+ staff, integrate agentic tool execution with legacy ERP/CRM systems, and deploy Redis semantic caching to deflect token costs by 35%+.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Change Leadership & Workforce Upskilling:</strong> Address employee job replacement anxiety. Upskill routine administrative staff into 'AI Operations Specialists' who supervise agentic outputs and handle high-value client relationships.</li>
        <li><strong>Business Impact Tracking:</strong> Monitor operational KPI improvements weekly: ticket turnaround time, document review velocity, and staff satisfaction (CSAT).</li>
        <li><strong>Cross-Departmental Expansion:</strong> Onboard secondary business units (HR, Finance, Legal) onto the central CoE infrastructure.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>LangGraph Agentic ERP/CRM Tool Execution:</strong> Connect LLMs to legacy SAP, Salesforce, or SQL databases via LangGraph state machines, enabling automated order tracking, refund processing, and invoice auditing.</li>
        <li><strong>LLM API Gateway & Redis Caching:</strong> Deploy LiteLLM API Gateway with Redis semantic caching. Cache repetitive user queries to serve 35%+ of queries instantly for $0.00 token compute cost.</li>
        <li><strong>Automated Evaluation Frameworks:</strong> Deploy Ragas evaluation pipelines to continuously benchmark Faithfulness, Answer Relevance, and Context Precision.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> LangGraph Agent Workflow Engines, LiteLLM Gateway Infrastructure, Redis Semantic Cache Layer, Ragas Automated Eval Dashboard.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Achieve 35% reduction in per-query token OpEx via semantic caching. Maintain overall project burn within budget caps."
  },
  {
    phaseNumber: 8,
    phaseName: "Phase 8: Production Go-Live & Operational Reliability",
    phaseNameShort: "Phase 8: Production Go-Live",
    goal: "Execute production cutover across full enterprise workforce; enforce Site Reliability Engineering (SRE) 99.99% uptime SLAs and sub-500ms latency limits.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Executive Go-Live Signoff:</strong> Authorize full enterprise production launch after confirming that Phase 2 Stop/Go KPI benchmarks (95%+ retrieval precision, zero PII leaks) are met.</li>
        <li><strong>Reporting to Board of Directors:</strong> Present 90-day pilot performance results to the Board, demonstrating operational labor deflection and initial cost savings.</li>
        <li><strong>Operational Escalation Governance:</strong> Establish executive incident response protocols for potential model hallucinations or outage events.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>AI Site Reliability Engineering (SRE) Deployment:</strong> Onboard dedicated SREs to monitor production cluster health, vector index memory consumption, API latency p99 limits (<500ms), and automated failover gateways.</li>
        <li><strong>Drift & Hallucination Monitoring:</strong> Configure real-time telemetry (LangSmith, Arize AI) to detect concept drift, prompt injection attacks, and retrieval degradation.</li>
        <li><strong>Production Runbook & Disaster Recovery:</strong> Deliver production operational runbooks detailing automated failover to secondary cloud endpoints during outage events.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> Production SRE Monitoring Dashboard, Automated Failover Gateway, Production Incident Runbook, Executive Go-Live Report.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Validate that monthly operational labor savings surpass monthly compute and SRE maintenance costs."
  },
  {
    phaseNumber: 9,
    phaseName: "Phase 9: Continuous Scope Evolution & Model Upgrades",
    phaseNameShort: "Phase 9: Scope Evolution",
    goal: "Manage client feature scope creep, evaluate new foundation model releases (e.g. GPT-4o ➔ o1 reasoning models), and conduct regression testing without breaking API contracts.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Filtering Scope Creep:</strong> Business units will continuously demand custom AI features. The AI Leader evaluates requests using the <strong>Impact vs Feasibility 2x2 Matrix</strong>, prioritizing high-ROI features while rejecting low-value distraction projects.</li>
        <li><strong>Managing Vendor Dependencies:</strong> Prevent single-vendor lock-in by enforcing cloud-agnostic API gateway architectures (LiteLLM).</li>
        <li><strong>Annual Budget Planning:</strong> Prepare Year 2 and Year 3 AI operating budgets based on empirical token consumption data.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Model Upgrade Regression Testing Suite:</strong> When frontier labs release newer models, benchmark the model against historical eval sets before upgrading production endpoints. Ensure new models do not introduce prompt regressions.</li>
        <li><strong>Managing Scope Change Orders:</strong> When clients request major architecture shifts (e.g. switching from RAG to custom LoRA fine-tuning), issue formal Change Order proposals with explicit scope, timeline, and cost additions.</li>
        <li><strong>API Schema Stability:</strong> Maintain strict backward-compatible Pydantic API schemas so frontend microservices never crash during LLM backend updates.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> Impact vs Feasibility Matrix, Model Upgrade Benchmark Suite, Formal Scope Change Order Template, Regression Test Log.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Evaluate cost-benefit of upgrading to newer reasoning model tiers vs maintaining cost-effective Flash/Haiku endpoints."
  },
  {
    phaseNumber: 10,
    phaseName: "Phase 10: OpEx Optimization & CapEx Cap Management",
    phaseNameShort: "Phase 10: OpEx Handoff",
    goal: "Optimize long-term operational expenses (FinOps token audit), evaluate API vs self-hosted GPU crossover math, demonstrate 3-Year net ROI payback, and hand off maintenance to internal CoE.",
    aiLeaderRole: `
      <p><strong>👑 Internal AI Director / VP Strategy & Executive Mindset:</strong></p>
      <ul class="curriculum-list">
        <li><strong>Transitioning from Consultant to Internal CoE:</strong> Graduate the organization from external advisory dependence to internal self-sufficiency. The AI Leader hires full-time internal MLOps engineers to assume daily maintenance.</li>
        <li><strong>3-Year Financial Payback Audit:</strong> Present final 3-Year financial ROI audit to the Board of Directors, demonstrating net positive financial return on capital investment.</li>
        <li><strong>Long-Term Strategic AI Roadmap:</strong> Establish the 3-Year enterprise AI transformation vision, scaling success across international subsidiaries.</li>
      </ul>
    `,
    aiConsultantRole: `
      <p><strong>💼 External Principal AI Consultant Advisory Playbook:</strong></p>
      <ul class="curriculum-list">
        <li><strong>FinOps Token & Infrastructure Audit:</strong> Conduct a comprehensive FinOps audit. Analyze query patterns, token prompt lengths, and cache hit rates to optimize monthly cloud bills.</li>
        <li><strong>API vs. Self-Hosted GPU Crossover Calculation:</strong> If token volume exceeds 50 million tokens/day, calculate the financial crossover point for migrating from commercial APIs to self-hosted vLLM GPU clusters (8x H100s @ $28/hr), delivering up to 60% long-term cost savings.</li>
        <li><strong>Final Engagement Handoff Charter:</strong> Deliver complete source code, architecture documentation, prompt templates, and operational runbooks, completing a successful engagement handoff.</li>
      </ul>
    `,
    toolsDeliverables: "🛠️ <strong>Deliverables & Tools:</strong> FinOps Token Optimization Audit Report, 3-Year Financial ROI Payback Charter, API vs GPU Crossover Calculator, CoE Handoff Package.",
    financialStrategy: "📊 <strong>CapEx / OpEx Allocation:</strong> Lock in 3-Year net positive ROI. Transition external consultant spend to fixed internal CoE maintenance OpEx."
  }
];
