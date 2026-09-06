/* ----------------------------------------------------
   SANTOSHANAND ADKAR - EXECUTIVE PORTFOLIO DATA & SCRIPT
   Filterable AI Portals Ecosystem, CV Roadmap, AI Assistant
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
    tags: ["Agentic AI", "Orchestration", "LLM Pipelines", "Task Routing"],
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
    title: "AI Governance & Ethics Portal",
    category: "governance",
    badge: "Enterprise Risk",
    badgeClass: "badge-gov",
    icon: "⚖️",
    desc: "Strategic framework & compliance dashboard for ethical AI deployment, model oversight, shadow AI prevention, and regulatory readiness.",
    tags: ["AI Ethics", "NIST AI RMF", "Compliance", "Model Risk"],
    launchUrl: "../ai-governance-portal/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "okr-metrics-nexus",
    title: "OKR & Executive Metrics Nexus",
    category: "leadership",
    badge: "Executive Flow",
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
    desc: "Comprehensive coaching competencies vault, PCC/MCC credentialing simulator, and transformative leadership practice studio.",
    tags: ["ICF Competencies", "Executive Coaching", "Mentorship"],
    launchUrl: "../icf-credentialing-hub/index.html",
    isExternal: false,
    featured: true
  },
  {
    id: "iso27001-readiness-portal",
    title: "ISO 27001 Audit Readiness Portal",
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
    desc: "SAFe ART management, Program Increment (PI) planning studio, dependency matrix mapper, and confidence vote analyzer.",
    tags: ["SAFe RTE", "PI Planning", "ART Sync", "Dependency Mapping"],
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
    title: "AI Leadership & Consulting Portal",
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
    desc: "Agentic coding assistant hub, prompt engineering playground, and modern vibe-coding methodology accelerator.",
    tags: ["Vibe Coding", "Agentic Code", "Prompt Studio", "Dev Productivity"],
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
    desc: "Architectural blue-prints, LangChain/LlamaIndex code patterns, vector database benchmarks, and RAG optimization patterns.",
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
    desc: "Mentorship blueprints, team impediment remover, daily standup optimization studio, and Agile coach toolkit.",
    tags: ["Scrum Master", "Team Coaching", "Impediment Vault"],
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
    desc: "Deployment frequency metrics, lead time analyzer, Dora metrics engine, and continuous value stream delivery portal.",
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
  }
];

// 2. CAREER TIMELINE DATA
const TIMELINE_DATA = [
  {
    period: "2022 - PRESENT",
    role: "Principal Enterprise Agile Coach & AI Systems Architect",
    company: "Global Enterprise Transformation Advisory",
    description: "Leading enterprise-wide agile & AI transformations across 50+ cross-functional squads, driving continuous flow metrics and governance.",
    achievements: [
      "Architected 36+ specialized AI & Agile portals improving team delivery speed by 40%.",
      "Pioneered Flow Metrics & DORA analytics dashboards for C-suite executive reporting.",
      "Facilitated SAFe Enterprise Scaling, ART syncs, and PI Planning for 300+ engineers."
    ]
  },
  {
    period: "2019 - 2022",
    role: "Senior Agile Transformation Consultant & RTE",
    company: "Technology Solutions & Consulting Practice",
    description: "Directed complex program execution, Release Train Engineering (RTE), and psychological safety initiatives.",
    achievements: [
      "Reduced sprint flow waste by $2.4M annually across multi-disciplinary product lines.",
      "Mentored Scrum Masters and Product Owners using ICF Coaching frameworks.",
      "Spearheaded ISO 27001 security compliance integration into DevSecOps pipelines."
    ]
  },
  {
    period: "2015 - 2019",
    role: "Senior Program Manager & Scrum Master Lead",
    company: "FinTech & Cloud Engineering Division",
    description: "Managed mission-critical software delivery trains, stakeholder alignment, and enterprise product roadmaps.",
    achievements: [
      "Scaled Scrum/Kanban adoption across 18 teams with 95% on-time milestone delivery.",
      "Implemented OKRs framework connecting strategic vision to squad-level backlog items."
    ]
  }
];

// 3. INITIALIZATION & DOM RENDERING
document.addEventListener("DOMContentLoaded", () => {
  renderPortalsGrid(PORTALS_DATA);
  renderTimeline(TIMELINE_DATA);
  setupFilterListeners();
  setupCvTabs();
  setupAiAssistant();
  setupContactForm();
});

// Render Portals Grid
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
        <button class="btn btn-secondary" onclick="openPortalPreviewModal('${p.id}')" style="font-size: 12px; padding: 6px 12px;">🔍 Preview</button>
        <a href="${p.launchUrl}" class="btn btn-primary" style="font-size: 12px; padding: 6px 14px; text-decoration: none;" ${p.isExternal ? 'target="_blank"' : ''}>🚀 Launch Portal</a>
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
      <li>Production-ready interactive web application with zero external dependencies.</li>
      <li>Custom design system built with CSS Glassmorphism and responsive architecture.</li>
      <li>Integrated into Santoshanand Adkar's master AI ecosystem.</li>
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
        let answer = "Santoshanand Adkar is an Enterprise Agile Coach, AI Transformation Leader, and Systems Architect with extensive experience in scaling squads, flow metrics, and AI RAG systems.";
        if (query.toLowerCase().includes("contact") || query.toLowerCase().includes("email") || query.toLowerCase().includes("hire")) {
          answer = "You can contact Santoshanand Adkar directly via the consultation form below, or reach out via LinkedIn!";
        } else if (query.toLowerCase().includes("agilevibe") || query.toLowerCase().includes("portal")) {
          answer = "AgileVibe OS is Santoshanand's central coaching portal featuring 19 modules including CFD generator, Retrospective Studio, and Estimation Poker. You can launch it using the top navigation bar link!";
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
