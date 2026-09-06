/* ----------------------------------------------------
   SANTOSHANAND ADKAR - EXECUTIVE PORTFOLIO DATA & SCRIPT
   Updated with Barclays VP Role, 26+ Years History & 36 AI Portals
   ---------------------------------------------------- */

// 1. ALL 36 AI PORTALS REPOSITORY DATA
const PORTALS_DATA = [
  {
    id: "agilevibe-os",
    title: "AgileVibe OS",
    category: "agile",
    badge: "Flagship OS",
    badgeClass: "badge-agile",
    icon: "⚡",
    desc: "Interactive central portal for Agile Coaches featuring 19 coaching modules, retrospective tools, estimation poker, metrics encyclopedia, and CFD generator.",
    tags: ["Agile Coaching", "CFD Flow Generator", "Poker", "Metrics Vault"],
    launchUrl: "agilevibe-os/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "omniagent-os",
    title: "OmniAgent OS",
    category: "ai",
    badge: "Multi-Agent AI",
    badgeClass: "badge-ai",
    icon: "🤖",
    desc: "Autonomous multi-agent orchestration studio for enterprise workflows, agent collaboration, and dynamic task execution.",
    tags: ["Agentic AI", "Orchestration", "LLM Pipelines", "MCP Protocols"],
    launchUrl: "../omniagent-os/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "cyber-rag-studio",
    title: "CyberSec RAG Studio",
    category: "ai",
    badge: "Security AI",
    badgeClass: "badge-ai",
    icon: "🛡️",
    desc: "Vector search & RAG intelligence platform designed for real-time cybersecurity threat monitoring and compliance audit analysis.",
    tags: ["RAG Engine", "Cybersecurity", "Threat Intel", "Vector Search"],
    launchUrl: "../cyber-rag-studio/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "ai-governance-portal",
    title: "AI Governance & ISO 42001 Portal",
    category: "governance",
    badge: "AI Compliance",
    badgeClass: "badge-gov",
    icon: "⚖️",
    desc: "Strategic framework & compliance dashboard for ethical AI deployment, ISO 42001 self-assessment, model risk oversight, and shadow AI prevention.",
    tags: ["ISO 42001", "AI Ethics", "NIST AI RMF", "Model Governance"],
    launchUrl: "../ai-governance-portal/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "okr-metrics-nexus",
    title: "OKR & Executive Metrics Nexus",
    category: "leadership",
    badge: "Executive Alignment",
    badgeClass: "badge-lead",
    icon: "📊",
    desc: "Executive strategic alignment OS connecting enterprise objectives (OKRs) with engineering flow velocity and value stream delivery.",
    tags: ["OKR Alignment", "Flow Metrics", "Executive Dashboards"],
    launchUrl: "../okr-metrics-nexus/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "icf-credentialing-hub",
    title: "ICF Executive Credentialing Hub",
    category: "leadership",
    badge: "Executive Coaching",
    badgeClass: "badge-lead",
    icon: "🎓",
    desc: "Comprehensive coaching competencies vault, GROW model session trainer, Shu-Ha-Ri progression rubric, and PCC/MCC mastery studio.",
    tags: ["ICF Competencies", "GROW Model", "Shu-Ha-Ri", "Executive Coaching"],
    launchUrl: "../icf-credentialing-hub/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "iso27001-readiness-portal",
    title: "ISO 27001 Security Audit Portal",
    category: "governance",
    badge: "Security Audit",
    badgeClass: "badge-gov",
    icon: "🔒",
    desc: "Interactive security controls matrix, ISMS policy generator, and audit prep studio for ISO 27001 certification compliance.",
    tags: ["ISO 27001", "ISMS", "Security Audit", "Risk Register"],
    launchUrl: "../iso27001-readiness-portal/index.html",
    isExternal: false
  },
  {
    id: "ai-guardrails-evals-studio",
    title: "AI Guardrails & Evals Studio",
    category: "ai",
    badge: "LLM Safety",
    badgeClass: "badge-ai",
    icon: "🧪",
    desc: "Real-time prompt evaluation, toxic input filtration, hallucination benchmarking, and LLM safety testing suite.",
    tags: ["LLM Evals", "Prompt Safety", "Red Teaming", "Guardrails"],
    launchUrl: "../ai-guardrails-evals-studio/index.html",
    isExternal: false
  },
  {
    id: "rte-nexus-portal",
    title: "Release Train Engineer (RTE) Nexus",
    category: "agile",
    badge: "Enterprise Scaling",
    badgeClass: "badge-agile",
    icon: "🚆",
    desc: "SAFe 6.0 ART management, Big Room Planning (BRP) studio, dependency matrix mapper, and confidence vote analyzer.",
    tags: ["SAFe 6.0 RTE", "BRP Planning", "ART Sync", "Dependency Mapping"],
    launchUrl: "../rte-nexus-portal/index.html",
    isExternal: false
  },
  {
    id: "aura-private-wealth",
    title: "Aura Private Wealth OS",
    category: "fintech",
    badge: "FinTech AI",
    badgeClass: "badge-fin",
    icon: "💎",
    desc: "AI-driven wealth management, portfolio asset allocation modeling, and high-net-worth financial roadmap simulator.",
    tags: ["Private Wealth", "Portfolio AI", "FinTech", "Risk Analytics"],
    launchUrl: "../aura-private-wealth/index.html",
    isExternal: false
  },
  {
    id: "ai-leadership-consulting-portal",
    title: "AI Leadership & Advisory Portal",
    category: "leadership",
    badge: "Executive Advisory",
    badgeClass: "badge-lead",
    icon: "💼",
    desc: "Executive playbook for C-Suite advisory, generative AI strategy adoption, organizational change, and digital ROI calculation.",
    tags: ["AI Strategy", "C-Suite Advisory", "Change Management"],
    launchUrl: "../ai-leadership-consulting-portal/index.html",
    isExternal: false
  },
  {
    id: "agile-rag-portal",
    title: "Agile RAG Knowledge Engine",
    category: "ai",
    badge: "Vector Knowledge",
    badgeClass: "badge-ai",
    icon: "🧠",
    desc: "Semantic document retriever for Scrum guidelines, framework whitepapers, and enterprise agile practices.",
    tags: ["RAG Engine", "Agile RAG", "Knowledge Base", "Vector DB"],
    launchUrl: "../agile-rag-portal/index.html",
    isExternal: false
  },
  {
    id: "ai-pm-portal",
    title: "AI Product Management OS",
    category: "leadership",
    badge: "Product Vision",
    badgeClass: "badge-lead",
    icon: "🎯",
    desc: "Product roadmap generator, AI user story crafting studio, PRD generator, and product discovery workbench.",
    tags: ["AI Product Manager", "PRD Studio", "User Stories", "Roadmaps"],
    launchUrl: "../ai-pm-portal/index.html",
    isExternal: false
  },
  {
    id: "vibe-coding-portal",
    title: "Vibe Coding & Agentic Pair Studio",
    category: "ai",
    badge: "AI Engineering",
    badgeClass: "badge-ai",
    icon: "💻",
    desc: "Agentic coding assistant hub, prompt engineering playground, and modern vibe-coding methodology accelerator (Cursor, Vercel, GitHub).",
    tags: ["Vibe Coding", "Agentic Code", "Cursor AI", "Dev Productivity"],
    launchUrl: "../vibe-coding-portal/index.html",
    isExternal: false
  },
  {
    id: "agilesecops-sentinel",
    title: "AgileSecOps Sentinel",
    category: "governance",
    badge: "DevSecOps",
    badgeClass: "badge-gov",
    icon: "🛡️",
    desc: "Continuous automated security pipeline monitoring, SAST/DAST metrics tracker, and compliance vulnerability dashboard.",
    tags: ["AgileSecOps", "Vulnerability Tracker", "DevSecOps"],
    launchUrl: "../agilesecops-sentinel/index.html",
    isExternal: false
  },
  {
    id: "ai-job-hunter-agent",
    title: "AI Job Hunter & Career Agent",
    category: "ai",
    badge: "Career Automation",
    badgeClass: "badge-ai",
    icon: "🚀",
    desc: "Automated resume optimizer, interview preparation coach, job match scoring engine, and career agent studio.",
    tags: ["Career Agent", "Resume AI", "Interview Prep", "Job Hunter"],
    launchUrl: "../ai-job-hunter-agent/index.html",
    isExternal: false
  },
  {
    id: "python-rag-mastery",
    title: "Python RAG Mastery Portal",
    category: "ai",
    badge: "Developer Hub",
    badgeClass: "badge-ai",
    icon: "🐍",
    desc: "Architectural blueprints, LangChain/LlamaIndex code patterns, vector database benchmarks, and RAG optimization patterns.",
    tags: ["Python RAG", "LangChain", "Vector Indexes", "Embedding Models"],
    launchUrl: "../python-rag-mastery/index.html",
    isExternal: false
  },
  {
    id: "scrum_master_coaching",
    title: "Scrum Master Coaching Suite",
    category: "agile",
    badge: "Team Acceleration",
    badgeClass: "badge-agile",
    icon: "🏆",
    desc: "Mentorship blueprints, team impediment remover, daily standup optimization studio, and Tribe Scrum Master Horizontal playbook.",
    tags: ["Scrum Master", "Team Coaching", "Impediment Vault", "TSM Horizontal"],
    launchUrl: "../scrum_master_coaching/index.html",
    isExternal: false
  },
  {
    id: "securebank",
    title: "SecureBank AI Portal",
    category: "fintech",
    badge: "Banking Security",
    badgeClass: "badge-fin",
    icon: "🏦",
    desc: "Enterprise financial compliance, AML transaction anomaly analyzer, and banking risk regulation portal.",
    tags: ["SecureBank", "AML Compliance", "Risk Engine", "FinTech AI"],
    launchUrl: "../securebank/index.html",
    isExternal: false
  },
  {
    id: "vibe-ops-hub",
    title: "Vibe Ops Hub & Delivery Engine",
    category: "agile",
    badge: "CI/CD & Flow",
    badgeClass: "badge-agile",
    icon: "⚡",
    desc: "Deployment frequency metrics, lead time analyzer, DORA metrics engine, and continuous value stream delivery portal.",
    tags: ["DORA Metrics", "Delivery Flow", "Vibe Ops", "CI/CD"],
    launchUrl: "../vibe-ops-hub/index.html",
    isExternal: false
  },
  {
    id: "vibepulse-studio",
    title: "VibePulse Sentiment Studio",
    category: "leadership",
    badge: "Team Health",
    badgeClass: "badge-lead",
    icon: "❤️",
    desc: "Real-time team psychological safety sentiment pulse, burnout monitor, and organizational happiness analytics.",
    tags: ["Team Vibe", "Psych Safety", "Sentiment Analysis", "Burnout Monitor"],
    launchUrl: "../vibepulse-studio/index.html",
    isExternal: false
  },
  {
    id: "tech-pulse-hub",
    title: "TechPulse Hub & Tech Radar",
    category: "governance",
    badge: "Engineering Standards",
    badgeClass: "badge-gov",
    icon: "🌐",
    desc: "Enterprise technology radar, adopted languages/frameworks tracker, and software architecture standard vault.",
    tags: ["Tech Radar", "Engineering Standards", "Architecture Guild"],
    launchUrl: "../tech-pulse-hub/index.html",
    isExternal: false
  },
  {
    id: "product_vision_credit_management",
    title: "Product Vision & Credit Management",
    category: "fintech",
    badge: "FinTech Vision",
    badgeClass: "badge-fin",
    icon: "💳",
    desc: "Credit risk score model previewer, financial product strategy board, and portfolio credit line management OS.",
    tags: ["Credit Vision", "Risk Scorecard", "Product Strategy"],
    launchUrl: "../product_vision_credit_management/index.html",
    isExternal: false
  },
  {
    id: "soft-skills-portal",
    title: "Executive Soft Skills & Influence OS",
    category: "leadership",
    badge: "Executive Leadership",
    badgeClass: "badge-lead",
    icon: "🗣️",
    desc: "Conflict resolution playbooks, stakeholder influence frameworks, active listening scenarios, and executive presence guide.",
    tags: ["Executive Presence", "Influence", "Conflict Resolution"],
    launchUrl: "../soft-skills-portal/index.html",
    isExternal: false
  },
  {
    id: "ai-management-portal",
    title: "AI Engineering Management OS",
    category: "leadership",
    badge: "Engineering Management",
    badgeClass: "badge-lead",
    icon: "⚙️",
    desc: "Engineering leadership workbench for managing distributed software teams, resource allocation, and AI productivity tools.",
    tags: ["Engineering Management", "Resource Planning", "DevOps"],
    launchUrl: "../ai-management-portal/index.html",
    isExternal: false
  },
  {
    id: "architect-master-hub",
    title: "Enterprise Architect Master Hub",
    category: "governance",
    badge: "Cloud Architecture",
    badgeClass: "badge-gov",
    icon: "🏗️",
    desc: "System design patterns vault, cloud architecture decision records (ADR), and legacy modernization blueprints.",
    tags: ["System Architecture", "ADR Templates", "Legacy Modernization"],
    launchUrl: "../architect-master-hub/index.html",
    isExternal: false
  },
  {
    id: "hrms-portal",
    title: "Nexus AI HRMS Portal",
    category: "leadership",
    badge: "HR Tech",
    badgeClass: "badge-lead",
    icon: "👥",
    desc: "Talent acquisition management, employee career pathing, skill matrix assessment, and HR automation portal.",
    tags: ["HRMS", "Talent Management", "Skill Matrix", "Career Paths"],
    launchUrl: "../hrms-portal/index.html",
    isExternal: false
  },
  {
    id: "design-entrance-assessment-portal",
    title: "Design Entrance & Creative Assessment",
    category: "leadership",
    badge: "Creative Evaluation",
    badgeClass: "badge-lead",
    icon: "🎨",
    desc: "Design thinking skill evaluator, UX/UI assessment rubric, and creative problem-solving challenge studio.",
    tags: ["Design Thinking", "UX Assessment", "Creative Evaluation"],
    launchUrl: "../design-entrance-assessment-portal/index.html",
    isExternal: false
  },
  {
    id: "mcp-api-server",
    title: "Model Context Protocol (MCP) Server",
    category: "ai",
    badge: "MCP Infrastructure",
    badgeClass: "badge-ai",
    icon: "🔌",
    desc: "Custom Model Context Protocol (MCP) server & tooling infrastructure for connecting AI agents to local filesystem and enterprise tools.",
    tags: ["MCP Server", "Agent Tooling", "Protocol", "Custom APIs"],
    launchUrl: "../mcp-api-server/index.html",
    isExternal: false
  },
  {
    id: "myhealth",
    title: "HealthPulse Personal Wellness AI",
    category: "ai",
    badge: "Personal AI",
    badgeClass: "badge-ai",
    icon: "🩺",
    desc: "Personalized health tracking OS, daily stress & energy optimizer, and executive wellness dashboard.",
    tags: ["Personal AI", "Health Tech", "Wellness Analytics"],
    launchUrl: "../myhealth/index.html",
    isExternal: false
  },
  {
    id: "seed-prep-portal",
    title: "Seed Pitch & Venture Prep Portal",
    category: "fintech",
    badge: "Venture Capital",
    badgeClass: "badge-fin",
    icon: "🚀",
    desc: "Startup investor pitch deck evaluator, financial runway calculator, and seed round preparation workbench.",
    tags: ["Pitch Deck", "Seed Funding", "Financial Model"],
    launchUrl: "../seed-prep-portal/index.html",
    isExternal: false
  },
  {
    id: "taskpulse_app",
    title: "TaskPulse High-Flow Task OS",
    category: "agile",
    badge: "Sprint Execution",
    badgeClass: "badge-agile",
    icon: "⏱️",
    desc: "Personal and squad task management engine with WIP limit enforcement, cycle time tracking, and focus timers.",
    tags: ["Task Management", "WIP Limits", "Sprint Board"],
    launchUrl: "../taskpulse_app/index.html",
    isExternal: false
  },
  {
    id: "astrology_portal",
    title: "AstroPulse Intelligence Hub",
    category: "ai",
    badge: "Personal AI",
    badgeClass: "badge-ai",
    icon: "✨",
    desc: "Astrological chart calculator and personal horizon analytics platform using custom algorithms.",
    tags: ["Personal Horizon", "Calculators", "Algorithms"],
    launchUrl: "../astrology_portal/index.html",
    isExternal: false
  },
  {
    id: "agile_ai_coaching_book",
    title: "Agile AI Coaching Interactive Book",
    category: "agile",
    badge: "Literature & Guide",
    badgeClass: "badge-agile",
    icon: "📖",
    desc: "Interactive playbook detailing how GenAI, Cursor, and Agentic Workflows revolutionize enterprise agile coaching.",
    tags: ["Agile Book", "GenAI Coaching", "Playbook"],
    launchUrl: "../agile_ai_coaching_book/index.html",
    isExternal: false
  },
  {
    id: "agile-vibe-portal",
    title: "Agile Vibe Coaching Suite",
    category: "agile",
    badge: "Coaching Suite",
    badgeClass: "badge-agile",
    icon: "🌊",
    desc: "Companion coaching studio providing team health surveys, ceremony guides, and retrospective icebreakers.",
    tags: ["Team Vibe", "Ceremony Facilitation", "Icebreakers"],
    launchUrl: "../agile-vibe-portal/index.html",
    isExternal: false
  },
  {
    id: "ai_research_papers",
    title: "AI Frontier Research Papers Summarizer",
    category: "ai",
    badge: "AI Research",
    badgeClass: "badge-ai",
    icon: "📄",
    desc: "Curated summaries and architectural breakdowns of top AI research papers across LLMs, RAG, and Agentic Systems.",
    tags: ["AI Papers", "LLM Research", "Architectural Summaries"],
    launchUrl: "../ai_research_papers/index.html",
    isExternal: false
  }
];

// 2. CAREER TIMELINE DATA (UPDATED WITH BARCLAYS VP ROLE & 26+ YEARS DETAILED EXPERIENCE)
const TIMELINE_DATA = [
  {
    period: "MAY 2025 - PRESENT",
    role: "Vice President, Agile Strategy & Transformation",
    company: "Barclays — Pune, India",
    description: "Leading Agile strategy and transformation across PBWM (Private Bank & Wealth Management) domain, embedded across Smart Investing, CLM (Client Lifecycle Management), and Data & Analytics tribes.",
    achievements: [
      "Built & rolled out a uniform 10-dimension, 50-question Agile Maturity Assessment across PBWM, backed by an 839-question independent verification bank across 8 dimensions & 5 maturity levels.",
      "Established tribe-wide standardized Definition of Ready (DoR), Definition of Done (DoD), and Spike definitions.",
      "Jira Data Center Subject Matter Expert — designed standardized work breakdown structure & new front-door intake process for Process Automation team.",
      "Initiated & run the bi-weekly Tribe Scrum Master Horizontal to coach TSMs as a peer group; conduct 1:1 GROW-model and Shu-Ha-Ri coaching sessions for SMs and POs.",
      "Standardized Big Room Planning (BRP) and PI Planning templates across tribes; implemented phased OKRs and Jira metrics governance dashboards."
    ]
  },
  {
    period: "JAN 2023 - APR 2025",
    role: "Enterprise Agile Coach & Release Train Engineer (RTE)",
    company: "Wolters Kluwer India Ltd — Pune",
    description: "Served as Agile Process Coach for Tax & Accounting (TAA) business unit and RTE for the Developer Platform Agile Release Train (ART).",
    achievements: [
      "Established the Lean-Agile Center (LAC) and Lean-Agile metrics framework at TAA North America level.",
      "Formed Community of Practice (CoP) for Scrum Masters and Product Owners in India; built CoE standards.",
      "Established SAFe 6.0 framework for platform engineering teams."
    ]
  },
  {
    period: "JAN 2022 - JAN 2023",
    role: "Enterprise Agile Coach (Large Manufacturing Client, USA)",
    company: "Infosys Ltd — Pune",
    description: "Guided leaders and associates in large-scale manufacturing client's Agile transformation.",
    achievements: [
      "Created tailored Agile frameworks to optimize team productivity and reduce delivery lead times.",
      "Conducted Lean Coffee sessions to surface systemic impediments and drive continuous improvement."
    ]
  },
  {
    period: "NOV 2019 - DEC 2021",
    role: "Enterprise Agile Coach (Large Telecom Client, Slough, UK)",
    company: "Tech Mahindra Ltd — Pune",
    description: "Helped UK telecom giant transition networks area to Agile ways of working and SAFe framework.",
    achievements: [
      "Migrated legacy network systems to Agile; introduced Epics & User Stories for requirements capture.",
      "Initiated SAFe for multi-vendor programs; trained customer teams on Scrum, SAFe, and IoT proof-of-concept.",
      "Designed front-door intake process using Jira and Kanban boards."
    ]
  },
  {
    period: "JAN 2018 - OCT 2019",
    role: "Senior Consultant – Agile, Learning & Development Group",
    company: "Tech Mahindra Ltd — Pune",
    description: "Provided delivery team coaching and facilitated Design Thinking workshops across business units.",
    achievements: [
      "Delivered Scrum Master Agile Fundamentals course with 100,000+ views — most-viewed course on Tech Mahindra's internal social learning network.",
      "Consulted business units on Design Thinking and managed enterprise digital transformation training."
    ]
  },
  {
    period: "DEC 2016 - DEC 2017",
    role: "Agile Coach & Scrum Master (Telecom Client, Atlanta, USA)",
    company: "Tech Mahindra Ltd — Pune",
    description: "Scrum Master and Agile Coach for complex billing software project with multi-vendor teams.",
    achievements: [
      "Tracked risks, managed inter-dependencies, and cleared roadblocks for smooth offshore/onsite delivery."
    ]
  },
  {
    period: "FEB 2014 - NOV 2016",
    role: "Senior Consultant – Program Quality Assurance",
    company: "Wipro Technologies Ltd — Pune",
    description: "Project management & QA consulting across SDLC; Project Risk Officer building Risk Registers.",
    achievements: [
      "Created standardized project management templates organization-wide and EBITDA-controlling statistical levers."
    ]
  },
  {
    period: "JUL 2013 - FEB 2014",
    role: "Scrum Master – UK-Based Insurance Company Portal",
    company: "Wipro Technologies Ltd — Pune",
    description: "Scrum Master consolidating isolated insurance systems (policy creation, claims, billing).",
    achievements: [
      "Managed product backlog refinement, daily standups, and stakeholder collaboration."
    ]
  },
  {
    period: "OCT 2011 - JUL 2013",
    role: "Consultant – Talent Management Academy",
    company: "Wipro Technologies Ltd — Pune",
    description: "Developed project management programs for entry-level and experienced project managers.",
    achievements: [
      "Delivered PM programs in UK and South Africa with 95%+ feedback ratings; conceptualized Technical Leads Program (TLCP)."
    ]
  },
  {
    period: "MAR 2006 - OCT 2011",
    role: "Project Manager – Projects in Canada, Austria & Pune",
    company: "Wipro Technologies Ltd — Pune",
    description: "Led end-to-end project management for India's largest insurance company & global banking org.",
    achievements: [
      "Managed estimation, initiation, execution, code reviews, and stakeholder escalations."
    ]
  },
  {
    period: "DEC 2003 - MAR 2006",
    role: "Team Leader / Project Lead",
    company: "IBM Global Services India Ltd — Netherlands & Pune",
    description: "Led 12-member team for Dutch Transport & Logistics Application Management spanning 13 countries and 45 offices.",
    achievements: [
      "Ensured 24x7 customer support and earned top customer ratings."
    ]
  },
  {
    period: "DEC 1999 - NOV 2003",
    role: "Software & Systems Engineer (Multiple Roles)",
    company: "Opus Software | BOSCH | CNPL | Saptarishi Infomatics",
    description: "Hands-on software development, systems engineering, testing, and application maintenance.",
    achievements: [
      "Built solid foundation in software engineering across financial, automotive, and IT domains."
    ]
  }
];

// 3. INITIALIZATION & DOM RENDERING
document.addEventListener("DOMContentLoaded", () => {
  renderSidebarPortals(PORTALS_DATA);
  renderPortalsGrid(PORTALS_DATA);
  renderTimeline(TIMELINE_DATA);
  setupFilterListeners();
  setupCvTabs();
  setupAiAssistant();
  setupContactForm();
  setupSidebarToggle();
});

// Render Left Sidebar Quick Directory of 36 AI Portals
function renderSidebarPortals(portals) {
  const container = document.getElementById("sidebarPortalsList");
  if (!container) return;

  container.innerHTML = portals.map(p => `
    <a href="${p.launchUrl}" class="sidebar-portal-item" title="${p.title}">
      <span class="sidebar-portal-icon">${p.icon}</span>
      <div class="sidebar-portal-info">
        <div class="sidebar-portal-name">${p.title}</div>
        <div class="sidebar-portal-tag">${p.category.toUpperCase()}</div>
      </div>
      <span class="sidebar-portal-arrow">↗</span>
    </a>
  `).join('');
}

// Render Main Portals Grid
function renderPortalsGrid(portals) {
  const container = document.getElementById("portalsGridContainer");
  if (!container) return;

  container.innerHTML = portals.map(p => `
    <div class="portal-card" data-category="${p.category}">
      <div>
        <div class="portal-header-top">
          <div class="portal-icon">${p.icon}</div>
          <span class="portal-badge ${p.badgeClass}">${p.badge}</span>
        </div>
        <h3 class="portal-title">${p.title}</h3>
        <p class="portal-desc">${p.desc}</p>
        <div class="portal-tags">
          ${p.tags.map(t => `<span class="portal-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
      <div class="portal-actions">
        <button class="btn btn-secondary" onclick="openPortalPreviewModal('${p.id}')" style="font-size: 12px; padding: 6px 12px;">🔍 Details</button>
        <a href="${p.launchUrl}" class="btn btn-primary" style="font-size: 12px; padding: 6px 14px; text-decoration: none;" ${p.isExternal ? 'target="_blank"' : ''}>🚀 Launch</a>
      </div>
    </div>
  `).join('');
}

// Setup Filter Buttons
function setupFilterListeners() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      
      if (category === "all") {
        renderPortalsGrid(PORTALS_DATA);
      } else {
        const filtered = PORTALS_DATA.filter(p => p.category === category);
        renderPortalsGrid(filtered);
      }
    });
  });

  // Sidebar Portals Search Filter
  const sidebarSearch = document.getElementById("sidebarSearchInput");
  if (sidebarSearch) {
    sidebarSearch.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = PORTALS_DATA.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.desc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
      renderSidebarPortals(filtered);
    });
  }
}

// Render Timeline
function renderTimeline(timeline) {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  container.innerHTML = timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${item.period}</div>
        <h3 class="timeline-role">${item.role}</h3>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-body">${item.description}</p>
        <ul class="timeline-list">
          ${item.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Setup CV Tabs
function setupCvTabs() {
  const tabs = document.querySelectorAll(".cv-tab-btn");
  const panels = document.querySelectorAll(".cv-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

// Sidebar Mobile Toggle
function setupSidebarToggle() {
  const toggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebar = document.getElementById("mainSidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("active");
    });
  }
  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
  }
}

// Preview Modal Handler
function openPortalPreviewModal(id) {
  const portal = PORTALS_DATA.find(p => p.id === id);
  if (!portal) return;

  const modal = document.getElementById("portalModal");
  const modalBody = document.getElementById("portalModalBody");

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
      <span style="font-size: 40px;">${portal.icon}</span>
      <div>
        <h2 style="font-family: var(--font-heading); color: #fff; font-size: 24px;">${portal.title}</h2>
        <span class="portal-badge ${portal.badgeClass}">${portal.badge}</span>
      </div>
    </div>
    <p style="font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">${portal.desc}</p>
    <h4 style="color: var(--accent-cyan); margin-bottom: 10px;">Key Capabilities & Features:</h4>
    <ul style="padding-left: 20px; color: #e2e8f0; margin-bottom: 24px; font-size: 14px; line-height: 1.8;">
      <li>Production-ready interactive web application built by Santoshanand Adkar.</li>
      <li>Designed with CSS Glassmorphism and responsive modular architecture.</li>
      <li>Part of Santoshanand's 36+ AI Systems & Enterprise Agile Portfolio.</li>
    </ul>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
      <button class="btn btn-secondary" onclick="closePortalModal()">Close</button>
      <a href="${portal.launchUrl}" class="btn btn-primary" style="text-decoration: none;">🚀 Launch ${portal.title}</a>
    </div>
  `;

  modal.classList.add("active");
}

function closePortalModal() {
  const modal = document.getElementById("portalModal");
  if (modal) modal.classList.remove("active");
}

// AI Assistant Floating Chat
function setupAiAssistant() {
  const fab = document.getElementById("aiChatFab");
  const modal = document.getElementById("aiChatModal");
  const sendBtn = document.getElementById("sendAiMsgBtn");
  const input = document.getElementById("aiMsgInput");
  const chatLog = document.getElementById("aiChatLog");

  if (fab) {
    fab.addEventListener("click", () => modal.classList.toggle("active"));
  }

  if (sendBtn && input) {
    sendBtn.addEventListener("click", () => {
      const query = input.value.trim();
      if (!query) return;

      chatLog.innerHTML += `<div style="background: rgba(56, 189, 248, 0.15); border: 1px solid var(--border-glow); padding: 10px 14px; border-radius: 12px; margin-bottom: 10px; font-size: 13px; align-self: flex-end;"><strong>You:</strong> ${query}</div>`;
      input.value = "";
      chatLog.scrollTop = chatLog.scrollHeight;

      setTimeout(() => {
        let answer = "Santoshanand Adkar is Vice President, Agile Strategy & Transformation at Barclays with 26+ years of experience delivering SAFe Agile transformations, AI-assisted tools, and managing $50M+ revenue programs.";
        if (query.toLowerCase().includes("barclays") || query.toLowerCase().includes("current")) {
          answer = "At Barclays (VP, Agile Strategy & Transformation), Santoshanand leads PBWM domain coaching across Smart Investing, CLM, and Data & Analytics tribes. He built the 10-dimension 50-question Agile Maturity Assessment backed by an 839-question verification bank.";
        } else if (query.toLowerCase().includes("contact") || query.toLowerCase().includes("email")) {
          answer = "You can reach Santoshanand Adkar at santoshadkar@gmail.com or +91-9822911777!";
        } else if (query.toLowerCase().includes("certif")) {
          answer = "Santoshanand holds SAFe 6.0 Release Train Engineer (RTE), SAFe 4.5 Agilist, ICAgile Certified Professional (ICP-ACC, ICP-CAT, ICP-ENT), and CSM certifications.";
        }
        chatLog.innerHTML += `<div style="background: var(--bg-card); border: 1px solid var(--border-glass); padding: 10px 14px; border-radius: 12px; margin-bottom: 10px; font-size: 13px;"><strong>Santoshanand's AI Assistant:</strong> ${answer}</div>`;
        chatLog.scrollTop = chatLog.scrollHeight;
      }, 600);
    });
  }
}

// Setup Contact Form
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your request has been received. Santoshanand Adkar will get back to you shortly.");
    form.reset();
  });
}
