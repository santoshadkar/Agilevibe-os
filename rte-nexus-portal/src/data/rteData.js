export const RTE_ROLES_DATA = {
  title: "Release Train Engineer (RTE) Foundations & Servant Leadership",
  subtitle: "Demystifying the Servant Leader Role, ART Handoffs, and the Fresh ART 0-90 Day Launch Playbook",
  overview: "In Scaled Agile, the RTE role is frequently misunderstood. Often mistaken for a traditional Program Manager or an executive secretary, the RTE is in fact the Chief Scrum Master, Agile Coach, and Value Stream Facilitator. Servant leadership does not mean lack of accountability—it means leading through influence, empathy, systemic problem solving, and relentless alignment.",
  servantLeaderParadox: [
    {
      myth: "Myth 1: Servant Leadership means the RTE has no authority and cannot enforce deadlines.",
      reality: "Reality: The RTE enforces Lean-Agile Guardrails, sacred timeboxes, and psychological safety. Authority comes from adherence to SAFe Principles, flow data, and transparent consensus rather than top-down commands."
    },
    {
      myth: "Myth 2: The RTE is just an event organizer who schedules PI Planning and SoS.",
      reality: "Reality: Event orchestration is only 15% of the role. The RTE actively unblocks systemic cross-team dependencies, coaches executives, and optimizes the Continuous Delivery Pipeline."
    },
    {
      myth: "Myth 3: The RTE manages the Scrum Masters directly as their line manager.",
      reality: "Reality: The RTE is a peer coach and mentor to Scrum Masters. Direct line management creates fear; servant coaching creates open reporting of impediments."
    }
  ],
  interactionProtocols: [
    {
      direction: "How the ART Approaches the RTE",
      scenarios: [
        { scenario: "Unresolved Cross-Team Dependency", action: "Scrum Master brings the blocker to Scrum of Scrums (SoS) or direct 1:1 if urgent. RTE helps negotiate priority or escorts to System Architect." },
        { scenario: "Executive Scope Creep mid-PI", action: "Product Owner / SM alerts RTE immediately. RTE engages Business Owner to enforce Lean Budget guardrails or negotiate uncommitted objective swap." },
        { scenario: "Team Conflict or Dysfunctional Dynamics", action: "SM requests RTE coaching session or joint facilitation for a neutral Retrospective." }
      ]
    },
    {
      direction: "How the RTE Approaches the ART",
      scenarios: [
        { scenario: "Detecting Velocity / Flow Efficiency Drop", action: "RTE reviews ALM dashboard (Jira/ADO), schedules a Gemba Walk with the team, and offers metric diagnostic coaching." },
        { scenario: "Pre-PI Feature Unreadiness", action: "RTE meets Product Management 6 weeks prior to PI Planning, enforcing WSJF readiness standards before Breakout 1." },
        { scenario: "Systemic CI/CD Pipeline Failure", action: "RTE syncs with System Architect and DevOps CoP champion to allocate enabler capacity in IP iteration." }
      ]
    }
  ],
  freshArtPlaybook: [
    {
      phase: "Days 1 – 30: Discovery & Relationship Baseline",
      focus: "Trust Building & Tooling Audit",
      items: [
        "Conduct 1:1 discovery chats with all Scrum Masters, Product Managers, and System Architects.",
        "Audit existing ALM tool setups (Jira Align / ADO) for board hygiene, dependency links, and capacity baselines.",
        "Establish the ART Communication Charter & Scrum of Scrums (SoS) cadence.",
        "Observe team Daily Standups and Iteration Retrospectives to evaluate baseline trust."
      ]
    },
    {
      phase: "Days 31 – 60: Pre-PI Planning Readiness & Training",
      focus: "Backlog Hygiene & Readiness Alignment",
      items: [
        "Facilitate Feature Refinement sessions with PMs and Archs to build a prioritized WSJF backlog.",
        "Run SAFe for Teams / Scrum Master alignment workshops to establish common terminology.",
        "Publish the PI Planning agenda, Miro/Mural breakout rooms, and Business Owner attendance schedules.",
        "Baseline team capacity estimation conventions (e.g. 8 pts per full-time developer per iteration)."
      ]
    },
    {
      phase: "Days 61 – 90: PI Execution & Stabilization",
      focus: "First PI Facilitation & Flow Telemetry",
      items: [
        "Facilitate the 2-day PI Planning event, ROAMing risks, and securing a Confidence Vote >= 3.0.",
        "Launch the bi-weekly System Demo and Scrum of Scrums (SoS) execution rhythms.",
        "Conduct the first full Inspect & Adapt (I&A) workshop with a 5-Whys Problem Solving Session.",
        "Publish the first ART Predictability Index & Flow Efficiency Scorecard to executive sponsors."
      ]
    }
  ],
  corePillars: [
    { id: "servant-leader", title: "Servant Leader & Coach", icon: "HeartHandshake", color: "from-blue-600 to-indigo-700", description: "Leads by serving the train, fostering psychological safety, empowering Scrum Masters, and coaching Lean-Agile mindsets.", keyAction: "Empowers teams to self-organize while removing systemic impediments." },
    { id: "value-stream", title: "Value Stream Navigator", icon: "TrendingUp", color: "from-sky-500 to-blue-600", description: "Facilitates Program Increment Execution, tracks SAFe Flow Metrics (Velocity, Efficiency, Predictability), and removes bottlenecks.", keyAction: "Ensures relentless delivery of customer value across the ART." },
    { id: "pi-facilitator", title: "Chief Event Facilitator", icon: "Calendar", color: "from-emerald-600 to-teal-700", description: "Orchestrates key ART events including Pre-PI, PI Planning, SoS, ART Sync, System Demos, and Inspect & Adapt (I&A).", keyAction: "Ensures seamless alignment between PM, System Arch, and teams." },
    { id: "risk-roam", title: "Risk & Dependency ROAMer", icon: "ShieldAlert", color: "from-amber-500 to-orange-600", description: "Facilitates the identification, resolution, and escalation of dependencies using the ROAM framework.", keyAction: "Protects ART commitments by actively neutralizing impediments." }
  ],
  roleComparison: [
    { aspect: "Scope of Leadership", sm: "Single Agile Team (5-9 people)", rte: "Agile Release Train (50–125+ people, 5–12 teams)", ste: "Solution Train (500+ people, multiple ARTs)" },
    { aspect: "Primary Events Facilitated", sm: "Iteration Planning, Standup, Retro", rte: "PI Planning, SoS, ART Sync, System Demo, I&A", ste: "Pre/Post Solution PI, Solution Sync, Solution Demo" },
    { aspect: "Key Stakeholders", sm: "Team Members, Product Owner", rte: "PM, System Arch, Business Owners, SMs, LACE", ste: "Enterprise VPs, Solution Arch, Portfolio Leads" },
    { aspect: "Primary Focus", sm: "Team delivery speed & iteration goals", rte: "Cross-team dependencies, ART flow, PI Objectives", ste: "Multi-train alignment, enterprise architecture" },
    { aspect: "Metrics Tracked", sm: "Team Velocity, Burndown", rte: "ART Predictability Index, Flow Velocity, ROAM Risks", ste: "Solution Flow, Enterprise Milestones" }
  ]
};

export const DAY_IN_LIFE_DATA = [
  {
    phaseId: "pre-pi",
    phaseName: "Pre-PI Planning (Weeks 1 - 8)",
    badge: "Cadence Prep",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    summary: "Ensuring ART Readiness before the 2-day PI Planning event.",
    activities: [
      { time: "Weeks 1-4", title: "Feature Refinement Sync", desc: "Collaborate with Product Management & System Architects to refine Top 10 Features into WSJF prioritized backlog." },
      { time: "Week 5", title: "Readiness Assessment", desc: "Evaluate Content Readiness (Features ready), Logistics (Rooms/Miro/Jira), & Executive Alignment." },
      { time: "Week 6", title: "Draft PI Objectives Review", desc: "Align with Business Owners on strategic intent and capacity allocation." },
      { time: "Week 7-8", title: "Final Briefing & Agenda Lock", desc: "Conduct SM & PO Pre-PI Briefing. Verify team capacity velocity baselines." }
    ]
  },
  {
    phaseId: "pi-day-1",
    phaseName: "PI Planning: Day 1 (Facilitation Script)",
    badge: "Event Day 1",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    summary: "Setting context, draft plan creation, and management review.",
    activities: [
      { time: "08:00 AM", title: "Opening & Business Context", desc: "Welcome team, introduce Business Executives to deliver Business Context presentation." },
      { time: "09:00 AM", title: "Product & Architecture Vision", desc: "Product Mgmt presents Feature Vision; System Arch presents Technical Vision & Guardrails." },
      { time: "10:30 AM", title: "Team Breakout #1", desc: "Teams create Draft Plans for Iterations 1-5, identify risks & dependencies on Program Board." },
      { time: "01:00 PM", title: "Draft Plan Review", desc: "Teams present draft plans, capacity, preliminary PI Objectives, and risks." },
      { time: "04:00 PM", title: "Management Review & Problem Solving", desc: "RTE leads Executives, PMs, Archs, & BOs to resolve scope/capacity imbalances and risks." }
    ]
  },
  {
    phaseId: "pi-day-2",
    phaseName: "PI Planning: Day 2 (Finalization)",
    badge: "Event Day 2",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    summary: "Final plans, ROAMing risks, Confidence Vote, and Commitment.",
    activities: [
      { time: "08:00 AM", title: "Planning Adjustments", desc: "RTE presents overnight Management adjustments and revised Feature priorities." },
      { time: "09:00 AM", title: "Team Breakout #2", desc: "Teams finalize Iteration Plans, write committed vs uncommitted Business PI Objectives with BO scoring." },
      { time: "01:00 PM", title: "Final Plan Review & ROAMing", desc: "Teams present final plans. RTE facilitates ROAMing of all train-level risks with executives." },
      { time: "03:30 PM", title: "ART Confidence Vote", desc: "Fist-of-Five confidence vote across the train. Target: average >= 3." },
      { time: "04:30 PM", title: "Planning Retrospective & Moving Forward", desc: "RTE captures PI Planning retro feedback and logs immediate post-planning action items." }
    ]
  },
  {
    phaseId: "iteration-cadence",
    phaseName: "Iteration Cadence (Iter 1 - 5)",
    badge: "Execution",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-300/30",
    summary: "Bi-weekly execution alignment and continuous risk monitoring.",
    activities: [
      { time: "Weekly (Tue)", title: "Scrum of Scrums (SoS)", desc: "RTE meets SMs to review Program Board dependencies, impedments, and milestone risks." },
      { time: "Weekly (Thu)", title: "PO Sync / ART Sync", desc: "RTE & PMs review feature progress, scope adjustments, and next PI backlog pipeline." },
      { time: "Bi-Weekly", title: "System Demo Facilitation", desc: "Integrated demonstration of full ART software increment to Business Owners and stakeholders." },
      { time: "Continuous", title: "Flow & Blocker Removal", desc: "Inspect Jira/Azure DevOps flow boards, resolve cross-ART blockages, coach SMs." }
    ]
  },
  {
    phaseId: "ip-ia-phase",
    phaseName: "IP Iteration & Inspect & Adapt (I&A)",
    badge: "Improvement",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    summary: "Innovation, Relentless Improvement, and Problem Solving.",
    activities: [
      { time: "Week 9 (IP)", title: "Innovation & Buffer Time", desc: "Facilitate Hackathons, tech debt reduction, cross-team training, and PI Planning prep." },
      { time: "I&A Part 1", title: "PI System Demo", desc: "Teams demonstrate all accomplishments across the 10-week PI to executive leadership." },
      { time: "I&A Part 2", title: "Quantitative & Qualitative Metrics", desc: "RTE presents ART Predictability Index, Flow Metrics, and objective achievement scores." },
      { time: "I&A Part 3", title: "Retrospective & Problem Solving Workshop", desc: "RTE leads root-cause analysis (Ishikawa/5 Whys) to define actionable continuous improvement backlog." }
    ]
  }
];

export const OPERATIONAL_PILLARS_DATA = [
  { 
    id: "pillar-1", 
    title: "1. PI Planning & Event Facilitation Mastery", 
    tagline: "Mastering the Heartbeat of SAFe Execution", 
    icon: "Layers", 
    color: "from-blue-600 to-indigo-700", 
    description: "The RTE is the master of ceremonies for SAFe ART events. Flawless facilitation requires meticulous pre-event alignment, real-time energy management, conflict resolution during breakouts, and executive alignment during Management Reviews.", 
    highlights: [
      "Pre-PI Backlog Refinement & WSJF Readiness Verification",
      "Digital & Physical Program Board setup across all breakout rooms",
      "Hour-by-hour facilitation script for Day 1 & Day 2",
      "Overnight Management Review & Problem Solving Session orchestration",
      "Fist-of-Five Confidence Vote remediation protocol"
    ], 
    proTip: "Never start PI Planning without signed-off Feature Briefs and agreed capacity baselines. Lack of context in Breakout 1 creates chaos by Breakout 2.",
    checklist: [
      "Top 10 Features have defined Benefit Hypothesis and WSJF scores",
      "Business Owners confirmed for Day 1 Opening & Day 2 Plan Sign-off",
      "Digital boards (Miro/Jira Align) locked & pre-templated for all teams",
      "Capacity baselines established per team (accounting for holidays & IP iteration)"
    ]
  },
  { 
    id: "pillar-2", 
    title: "2. Dependency, Risk & RAID Log Management", 
    tagline: "Proactive Impediment & Risk Neutralization", 
    icon: "ShieldCheck", 
    color: "from-amber-600 to-rose-600", 
    description: "Unmanaged risks and dependencies kill ART predictability. The RTE establishes a visual RAID Log (Risks, Assumptions, Issues, Dependencies) and uses the ROAM framework (Resolved, Owned, Accepted, Mitigated) to guarantee zero unowned impediments.", 
    highlights: [
      "ROAMing framework execution during PI Day 2",
      "Cross-ART & External Supplier dependency tracking in Scrum of Scrums (SoS)",
      "RAID Log (Risks, Assumptions, Issues, Dependencies) SLAs",
      "Root-cause impediment escalation matrix to Solution Train / LACE"
    ], 
    proTip: "An 'Accepted' risk must always have an explicit business impact statement approved by the Business Owner. 'Accepted' does not mean ignored!",
    checklist: [
      "Every ROAM risk on the board has an assigned individual owner",
      "Dependencies between teams are mapped with target delivery iterations",
      "Critical path blockers escalated within 24 hours of SoS discovery",
      "Business Owners signed off on all Accepted risks"
    ]
  },
  { 
    id: "pillar-3", 
    title: "3. Continuous Delivery & DevOps Pipeline Coaching", 
    tagline: "Coaching Built-in Quality & Continuous Pipeline Flow", 
    icon: "GitBranch", 
    color: "from-emerald-600 to-teal-700", 
    description: "Value flow requires continuous integration, automated testing, and decoupled deployment. The RTE coaches the ART on DevOps capabilities, Continuous Delivery Pipeline (CDP) health, and reducing deployment batch sizes.", 
    highlights: [
      "Continuous Integration & Continuous Deployment maturity telemetry",
      "Decoupling deployment from customer release (Feature Toggles)",
      "System Architecture guardrails enforcement",
      "Automated regression test coverage & lead time reduction"
    ], 
    proTip: "Track Deployment Frequency and Lead Time alongside team velocity to uncover hidden build pipeline bottlenecks.",
    checklist: [
      "Enabler Features allocated in team backlogs for tech debt reduction",
      "CI build success rate tracked weekly across all team repositories",
      "Automated test suites integrated into pull request merge checks",
      "Decoupled deployment pipeline verified prior to System Demo"
    ]
  },
  { 
    id: "pillar-4", 
    title: "4. SAFe Flow Metrics & Relentless Improvement", 
    tagline: "Data-Driven Continuous Growth", 
    icon: "BarChart3", 
    color: "from-purple-600 to-indigo-700", 
    description: "Modern RTEs manage by flow data, not opinion. Leveraging SAFe 6.0 Flow Metrics (Flow Velocity, Flow Efficiency, Flow Time, Flow Load, Flow Predictability, Flow Distribution), the RTE drives empirical continuous improvement.", 
    highlights: [
      "ART Predictability Index calculation (Target 80% – 100%)",
      "Flow Efficiency analysis (Active development time vs Wait time)",
      "Flow Load balancing to prevent developer burnout and WIP overload",
      "Inspect & Adapt (I&A) Problem Solving Workshop (5 Whys) execution"
    ], 
    proTip: "If your Flow Load is consistently higher than capacity, work item WIP limits are being violated. High WIP degrades Flow Efficiency exponentially.",
    checklist: [
      "ART Predictability Index calculated at the end of every PI",
      "Flow Efficiency measured bi-weekly across Value Stream stages",
      "Inspect & Adapt Retrospective action items prioritized in IP Iteration",
      "WIP limits enforced on team Kanban & Scrum boards"
    ]
  },
  { 
    id: "pillar-5", 
    title: "5. Strategic Value Stream & Portfolio Sync", 
    tagline: "Bridging Enterprise Strategy to ART Execution", 
    icon: "Compass", 
    color: "from-sky-600 to-blue-700", 
    description: "The RTE acts as a vital bridge connecting Portfolio Strategy, Epics, Strategic Themes, and Value Stream leadership down to the teams delivering daily features.", 
    highlights: [
      "Portfolio Epic refinement synchronization with Lean Portfolio Management (LPM)",
      "Lean Budget Guardrails adherence across ART capacity",
      "Participatory Budgeting feedback loops",
      "KPI & Business Outcome telemetry reporting"
    ], 
    proTip: "Ensure every Feature on your ART backlog clearly maps to an active Strategic Theme or Portfolio Epic with a measurable metric.",
    checklist: [
      "Features linked directly to Strategic Themes in ALM tool (Jira Align/ADO)",
      "Capacity allocation matches Lean Budget Guardrails (Features vs Tech Debt)",
      "Business Owners attend System Demos and review Strategic Outcomes",
      "WSJF scores updated prior to each PI refinement cycle"
    ]
  },
  { 
    id: "pillar-6", 
    title: "6. AI-Driven Transformation & Generative Automation", 
    tagline: "Augmenting the RTE with Generative AI", 
    icon: "Sparkles", 
    color: "from-indigo-600 to-sky-600", 
    description: "The next-generation RTE uses GenAI tools to automate administrative overhead, generate synthesized PI executive briefs, draft retrospective root-cause maps, and simulate risk scenarios.", 
    highlights: [
      "AI Prompt Engineering for ART backlog decomposition",
      "Automated Dependency & Risk synthesis from raw team notes",
      "AI-driven Inspect & Adapt root-cause assistant",
      "Executive Status Report generation from velocity telemetry"
    ], 
    proTip: "Use AI to analyze historical iteration velocity and defect trends to predict PI plan delivery probability before Day 2 Confidence Vote.",
    checklist: [
      "AI prompt library deployed for Scrum Masters and Product Owners",
      "Automated summary scripts configured for Scrum of Scrums (SoS) notes",
      "AI-assisted root-cause synthesis used in I&A workshops",
      "Executive Briefings generated using structured LLM super-prompts"
    ]
  }
];

export const ART_DYNAMICS_DATA = {
  tuckmanLadder: [
    { stage: "Forming", artBehavior: "Teams are tentative, unclear about cross-team handoffs, over-reliant on RTE directions during PI Breakout 1.", rteStrategy: "Provide explicit structure, clear PI agendas, standardized Miro templates, and hands-on facilitation." },
    { stage: "Storming", artBehavior: "Friction arises during Dependency ROAMing. Teams push back on inter-team commitments; scope overcapacity occurs.", rteStrategy: "Facilitate crucial conversations, enforce WSJF objective priority, and protect psychological safety." },
    { stage: "Norming", artBehavior: "Teams establish shared velocity norms, Scrum of Scrums (SoS) becomes proactive, dependency mapping is smooth.", rteStrategy: "Shift from direct facilitation to peer coaching; encourage Scrum Masters to lead SoS segments." },
    { stage: "Performing", artBehavior: "ART self-organizes during PI Planning; high flow efficiency (>35%); predictable delivery (Predictability 90-100%).", rteStrategy: "Delegate event leads to senior SMs; focus on AI automation, continuous delivery pipeline, and strategic alignment." }
  ],
  fiveDysfunctions: [
    { dysfunction: "1. Absence of Trust", symptomOnART: "Teams hide delayed features until System Demo; SMs claim 'no blockers' in SoS despite zero progress.", rteRemediation: "RTE models vulnerability in retrospectives; institutes 'blameless root-cause analysis' during I&A workshops." },
    { dysfunction: "2. Fear of Conflict", symptomOnART: "Polite silence during PI Day 1 Management Review; teams accept unrealistic dependencies without pushback.", rteRemediation: "RTE actively solicits dissenting votes during Breakouts and mandates Fist-of-Five confidence voting." },
    { dysfunction: "3. Lack of Commitment", symptomOnART: "Teams treat PI Objectives as arbitrary targets; uncommitted objectives ignored.", rteRemediation: "RTE ensures Business Owners score objectives live with team leads on Day 2; enforces explicit definition of done." },
    { dysfunction: "4. Avoidance of Accountability", symptomOnART: "Teams blame other teams for missed iteration milestones ('Team Beta didn't deliver API').", rteRemediation: "RTE uses visual Program Boards and weekly dependency check-ins in SoS to enforce peer accountability." },
    { dysfunction: "5. Inattention to Results", symptomOnART: "Teams focus only on local team velocity points rather than overall ART Feature delivery to customers.", rteRemediation: "RTE elevates System Demos and displays business value telemetry on enterprise dashboards." }
  ],
  conflictManagement: [
    { mode: "Competing (Forcing)", whenToUse: "Enforcing Lean Budget guardrails or security/compliance standards that cannot be compromised.", rteTone: "Firm & Non-negotiable" },
    { mode: "Collaborating (Problem-Solving)", whenToUse: "Resolving complex cross-ART dependencies where both teams need win-win solutions.", rteTone: "Facilitative & Exploratory" },
    { mode: "Compromising (Splitting Difference)", whenToUse: "Trimming Feature scope to fit capacity limits during overnight PI Management Review.", rteTone: "Pragmatic & Balanced" },
    { mode: "Avoiding (Withdrawal)", whenToUse: "Minor interpersonal friction between SMs during high-stress PI breakouts—give cooling period.", rteTone: "Observant & Patient" },
    { mode: "Accommodating (Yielding)", whenToUse: "Supporting a team's experimental technical approach during IP iteration to build autonomy.", rteTone: "Encouraging & Trusting" }
  ]
};

export const ALM_TOOLS_DATA = [
  {
    tool: "Jira Align / Jira Enterprise",
    purpose: "Enterprise SAFe Hierarchy Sync",
    rteConfiguration: [
      "Set up ART Room dashboard displaying Program Velocity, Epic Progress, and WSJF rankings.",
      "Configure Dependencies board to show cross-team blocker status (Not Started, In Progress, Done, Blocked).",
      "Establish Program Board mapping Team Iterations (Iter 1-5) against Top 10 Features."
    ],
    proTip: "Enforce strict link types: 'Blocks / Is Blocked By' for true dependencies. Never use 'Relates To' for PI dependencies!"
  },
  {
    tool: "Azure DevOps (ADO)",
    purpose: "Pipeline & Board Execution",
    rteConfiguration: [
      "Configure Delivery Plans 2.0 view across all ART team repositories.",
      "Use ADO Tags for #PI-2026.3, #ROAM-Risk, #Cross-ART-Blocker.",
      "Create custom Dashboards tracking ART Cumulative Flow Diagrams (CFD) and Velocity burndowns."
    ],
    proTip: "Use ADO Area Paths for Teams and Iteration Paths for PIs to ensure seamless rollup reporting."
  },
  {
    tool: "Targetprocess / Rally",
    purpose: "Portfolio to ART Flow Alignment",
    rteConfiguration: [
      "Set up SAFe PI Board with automatic WSJF calculation columns.",
      "Configure ROAM Risk Matrix view grouped by Resolved, Owned, Accepted, Mitigated.",
      "Integrate automated Flow Metrics widgets (Flow Load, Flow Efficiency)."
    ],
    proTip: "Automate email/Slack alerts to Risk Owners when a risk remains 'Unassigned' 24h after PI Day 2."
  },
  {
    tool: "Miro / Mural",
    purpose: "Live PI Planning & Workshop Canvas",
    rteConfiguration: [
      "Pre-build digital PI Planning room with 10 Team Breakout frames, Program Board, and ROAM Matrix.",
      "Lock background grids to prevent accidental drag errors during 100-person breakouts.",
      "Include sticky-note color legends (Blue = Story, Red = Dependency, Yellow = Risk, Green = Objective)."
    ],
    proTip: "Export full board PDF immediately after Day 2 Confidence Vote as an immutable audit record."
  }
];

export const AI_PROMPT_LIBRARY = [
  { id: "prompt-1", category: "PI Planning & Backlog", title: "Feature Decomposition & Acceptance Criteria Draft", description: "Converts high-level Strategic Features into crisp, INVEST-compliant User Stories with SAFe acceptance criteria.", tags: ["PI Planning", "Backlog", "User Stories"], variables: ["Feature Name", "Business Value", "Technical Scope"], promptText: `Act as a SAFe Release Train Engineer (RTE) and Agile Coach.\n\nI have a Feature for our upcoming Program Increment (PI):\n- Feature Name: {Feature Name}\n- Business Value Context: {Business Value}\n- Technical Scope: {Technical Scope}\n\nPlease generate:\n1. A concise Feature Summary with a clear Benefit Hypothesis.\n2. 5 to 7 INVEST-compliant User Story titles categorized by frontend, backend, and integration.\n3. Gherkin-format Acceptance Criteria (Given / When / Then) for each story.\n4. Highlight potential technical dependencies with other teams on the Agile Release Train.` },
  { id: "prompt-2", category: "Risk & Dependency Management", title: "ROAM Risk Categorizer & Escalation Matrix", description: "Analyzes raw team risks identified during PI Planning and categorizes them into ROAM format with executive escalation language.", tags: ["ROAM", "Risks", "PI Planning"], variables: ["Raw Risks List", "ART Name", "Business Objectives Impacted"], promptText: `Act as an expert SAFe RTE. Analyze the following raw team risks identified during PI Breakouts for ART '{ART Name}':\n\nRaw Risks:\n{Raw Risks List}\n\nImpacted PI Objectives:\n{Business Objectives Impacted}\n\nPlease format these risks into a structured ROAM Matrix:\n1. RESOLVED: Risks that can be solved immediately with suggested resolution text.\n2. OWNED: Assign recommended owners (e.g. System Architect, SM, Product Mgmt) and exact next steps.\n3. ACCEPTED: Risks that must be accepted, with clear mitigation fallback plans and Business Owner risk sign-off statements.\n4. MITIGATED: Actionable plan to reduce probability or impact.\n\nProvide a 3-bullet Executive Summary to present during the Management Review & Problem Solving Session.` },
  { id: "prompt-3", category: "Retrospectives & Problem Solving", title: "Fishbone (Ishikawa) & 5 Whys Root-Cause Synthesis", description: "Takes qualitative retrospective feedback or PI failure data and constructs a comprehensive root-cause analysis map.", tags: ["I&A", "Retrospective", "Root Cause"], variables: ["Problem Statement", "Team Feedback Notes"], promptText: `Act as a Master Facilitator for a SAFe Inspect & Adapt (I&A) Problem Solving Workshop.\n\nProblem Statement: {Problem Statement}\nTeam Feedback / Observations:\n{Team Feedback Notes}\n\nPlease conduct a structured Root Cause Analysis:\n1. Category breakdown (People, Process, Tools, Governance, Architecture).\n2. Apply the '5 Whys' technique for the top 2 systemic issues to identify root systemic failures.\n3. Propose 3 SMART Continuous Improvement Backlog items to be prioritized in the upcoming IP Iteration.` },
  { id: "prompt-4", category: "Executive Briefings", title: "PI Planning Day 1 Management Review Brief", description: "Synthesizes team draft plans, scope imbalances, and confidence red flags into a 2-minute executive briefing.", tags: ["Executive Brief", "PI Planning", "Governance"], variables: ["Capacity vs Load Summary", "Top 3 Blockers", "Confidence Score"], promptText: `Act as an RTE preparing for the PI Day 1 Management Review & Problem Solving meeting.\n\nCurrent ART Status:\n- Total ART Capacity vs Planned Load: {Capacity vs Load Summary}\n- Top 3 Critical Cross-Team Blockers: {Top 3 Blockers}\n- Initial Team Confidence Rating: {Confidence Score}\n\nSynthesize a 1-page executive brief structured as:\n1. Executive Health Score (Red / Amber / Green) with concise reasoning.\n2. Recommended Scope / Capacity adjustments for Business Owners to approve overnight.\n3. Resource / Skill bottleneck mitigations.` },
  { id: "prompt-5", category: "Metrics & Flow", title: "ART Flow Metrics Diagnostics & Action Plan", description: "Analyzes Flow Velocity, Predictability Index, and Flow Efficiency to generate targeted coaching recommendations.", tags: ["Flow Metrics", "Predictability", "Coaching"], variables: ["Predictability Score (%)", "Flow Efficiency (%)", "Flow Load"], promptText: `Act as a Lean-Agile Metric Consultant analyzing SAFe Flow Metrics for an Agile Release Train.\n\nMetrics:\n- ART Predictability Index: {Predictability Score (%)}\n- Flow Efficiency: {Flow Efficiency (%)}\n- Flow Load (WIP): {Flow Load}\n\nAnalyze these metrics:\n1. Identify systemic red flags (e.g. high WIP causing low efficiency, overcommitment).\n2. Actionable coaching tips for Scrum Masters and Product Owners.\n3. 3 operational guardrails to implement in the next PI.` }
];

export const RTE_AI_SIMULATOR_SCENARIOS = [
  { id: "scenario-1", title: "Unresolved Cross-ART Dependency in Iteration 3", severity: "High Impact", context: "Team Alpha cannot complete Feature #104 without an API endpoint from Team Omega in another ART. Team Omega has deprioritized the API due to local priorities.", options: [{ choice: "Option A: Escalate directly to VP of Engineering immediately.", feedback: "Escalating prematurely creates friction. RTEs should first facilitate cross-ART sync or leverage Solution Train Engineer / Product Mgmt alignment." }, { choice: "Option B: Facilitate an ART-to-ART Sync with RTE Omega & PMs to renegotiate WSJF priority or create a stubbed API workaround.", recommended: true, feedback: "Correct! Servant leadership means negotiating collaborative win-win alignment before executive escalation." }, { choice: "Option C: Tell Team Alpha to remove Feature #104 from the PI commitment.", feedback: "Dropping scope without investigating options damages trust with Business Owners." }], aiCoPilotAdvice: "Use AI Prompt #2 (ROAM Risk Matrix) to draft a clear dependency impact summary showing business value at risk, then schedule a 15-min alignment with RTE Omega." },
  { id: "scenario-2", title: "Low Confidence Vote (Average 2.1) on PI Day 2", severity: "Critical Event Risk", context: "After Breakout #2, the train votes 2.1 out of 5 on confidence due to unaddressed architectural tech debt and overcommitted iteration capacity.", options: [{ choice: "Option A: Override the vote and ask teams to accept the plan anyway.", feedback: "Never ignore a low confidence vote! Forcing commitment destroys psychological safety and guarantees PI failure." }, { choice: "Option B: Immediately pause, facilitate a focused 45-minute scope-trimming session with Business Owners to move stretch features to Uncommitted Objectives.", recommended: true, feedback: "Spot on! The confidence vote is the ultimate safety check. Trimming scope to match real capacity restores train confidence." }, { choice: "Option C: Cancel the PI Planning event and reschedule for next week.", feedback: "Canceling PI Planning causes massive lost momentum and organizational waste. Adjusting scope live is the correct SAFe playbook." }], aiCoPilotAdvice: "Prompt AI to generate a 'Capacity Trimming Matrix' grouping items into Must-Have Committed vs Uncommitted Objectives based on WSJF." }
];

export const COP_DATA = {
  title: "Communities of Practice (CoP) Masterclass for RTEs",
  definition: "A Community of Practice (CoP) is an organic, self-organizing network of people who share a common passion, domain, or craft. In SAFe, CoPs drive continuous learning, knowledge sharing, standard practices, and innovation across teams and ARTs.",
  rteRoleInCop: "The RTE is the catalyst and sponsor for CoPs on the train. While CoPs are self-governing, the RTE helps secure time allocations during IP Iterations, recruits passionate domain champions, aligns CoP initiatives with strategic goals, and removes systemic organizational barriers.",
  copTypes: [
    { name: "Scrum Master & Agile Coaching CoP", champion: "RTE & Senior Scrum Masters", focus: "Facilitation tools, coaching techniques, flow metric diagnostics, conflict resolution, retrospective innovations.", cadence: "Bi-weekly 45-min hands-on clinic" },
    { name: "Product Owner & Product Mgmt CoP", champion: "Product Manager / Lead PO", focus: "WSJF prioritization, user story writing, customer journey mapping, feature telemetry, backlog hygiene.", cadence: "Bi-weekly 60-min strategy sync" },
    { name: "DevOps & Engineering Excellence CoP", champion: "System Architect / Lead DevOps Engineer", focus: "CI/CD automation, test-driven development (TDD), security guardrails, cloud infrastructure best practices.", cadence: "Monthly 90-min lunch & learn + hack session" },
    { name: "Quality Assurance & Testing CoP", champion: "QA Chapter Lead", focus: "Automated regression frameworks, shift-left testing, performance simulation, contract testing.", cadence: "Bi-weekly 45-min exchange" }
  ],
  stepsToSetup: [
    { step: 1, title: "Identify Domain Needs", desc: "Survey SMs, Architects, and POs to uncover skill gaps and passion topics across the train." },
    { step: 2, title: "Recruit Domain Champions", desc: "Identify passionate leads (not just managers) to co-facilitate and curate content." },
    { step: 3, title: "Draft a CoP Charter", desc: "Define Purpose, Target Audience, Membership Expectations, Cadence, and Key Results." },
    { step: 4, title: "Secure Time & IP Iteration Slot", desc: "Integrate CoP meetups into the regular ART rhythm, using IP Iteration for deeper workshops." },
    { step: 5, title: "Measure Impact & Evolve", desc: "Track attendance, active experimentation, tool adoption, and domain growth." }
  ]
};

export const LACE_DATA = {
  title: "Lean-Agile Center of Excellence (LACE) Masterclass & RTE Synergy",
  definition: "The Lean-Agile Center of Excellence (LACE) is a dedicated, cross-functional team responsible for guiding, supporting, and driving an enterprise's SAFe transformation. While the RTE operates at the Agile Release Train level, LACE operates across the portfolio or enterprise.",
  laceCharterTemplate: `# LEAN-AGILE CENTER OF EXCELLENCE (LACE) CHARTER\n\n## 1. Mission & Strategic Intent\nTo guide, sustain, and continuously improve the enterprise's Lean-Agile transformation by establishing SAFe standards, training SPC practitioners, coaching executives, and maintaining the Enterprise Transformation Backlog.\n\n## 2. LACE Core Responsibilities\n- **Enterprise Standards**: Define Lean Budget guardrails, ALM tooling standards, and role guidelines.\n- **Capability Building**: Conduct SAFe certification training (Leading SAFe, SAFe POPM, SAFe SSM) via internal SPCs.\n- **Value Stream Mapping**: Identify and launch new Agile Release Trains (ARTs).\n- **Transformation Telemetry**: Aggregate Portfolio Flow Metrics and ART Predictability Index scores for C-Suite visibility.\n\n## 3. Organizational Structures\n- **Centralized**: Single enterprise LACE team servicing all Value Streams. Best for small/medium enterprises.\n- **Decentralized**: Value-stream dedicated LACE teams with local autonomy. Best for large enterprises.\n- **Federated**: Core central LACE + embedded Value Stream LACE nodes. The gold standard SAFe 6.0 model.`,
  rteLaceSynergy: [
    { area: "Transformation Backlog", laceRole: "Maintains the Enterprise SAFe Transformation Backlog", rteRole: "Feeds ART-level impediments, coaching needs, and operational retrospective insights into the LACE backlog.", synergy: "Ensures systemic enterprise issues (e.g. budgeting, HR policies, tooling) are solved at the enterprise level." },
    { area: "Standards & Governance", laceRole: "Establishes enterprise Lean-Agile guardrails, tool standards, and SAFe role guidelines.", rteRole: "Adapts and enforces guardrails practically within the ART execution rhythm.", synergy: "Balances organizational consistency with local ART autonomy." },
    { area: "SPC Training & Executive Coaching", laceRole: "Provides SAFe Practice Consultant (SPC) trainers, executive workshops, and certification.", rteRole: "Identifies coaching needs for Scrum Masters, POs, and team members, requesting LACE support.", synergy: "Continuous capability building without needing external expensive consultants." },
    { area: "Flow Metrics Telemetry", laceRole: "Aggregates Portfolio-wide Flow Metrics across multiple ARTs and Value Streams.", rteRole: "Provides accurate, transparent ART-level Flow Metrics and Predictability Index scores.", synergy: "Gives executive leadership true empirical visibility into transformation ROI." }
  ],
  orgBenefits: [
    "Accelerated SAFe adoption without chaos",
    "Consistent servant leadership practices across all ARTs",
    "Enterprise-wide impediment resolution mechanism",
    "Continuous capability development and Lean-Agile culture"
  ]
};

export const REPORTING_ENGINE_DATA = [
  { cadence: "Weekly Reports", title: "SoS Blocker Log & Iteration Progress", audience: "Scrum Masters, Product Managers, RTE", deliverables: ["Active Impediment & Blocker Log (Owner, Age, SLA status)", "Iteration Burnup / Velocity Trend per team", "Critical Cross-Team Dependency Status"], format: "Slack/Teams Automated Brief + Jira/ADO Board Link" },
  { cadence: "Bi-Weekly Reports", title: "System Demo Scorecard & Backlog Health", audience: "Business Owners, PMs, System Architects", deliverables: ["Integrated Feature Demo Checklist & Acceptances", "Upcoming PI Backlog Refinement Status (WSJF Top 10)", "DevOps Continuous Delivery Pipeline Health"], format: "1-Page Executive PDF + Live System Demo Recording" },
  { cadence: "Monthly Reports", title: "Flow Metrics & Capacity Utilization", audience: "LACE, Value Stream Lead, Engineering VPs", deliverables: ["SAFe Flow Metrics Scorecard (Efficiency, Load, Velocity)", "Capacity vs Actual Utilization breakdown", "Cross-ART Blocker Escalation Telemetry"], format: "Enterprise Dashboard (Jira Align / PowerBI)" },
  { cadence: "Quarterly (PI) Reports", title: "PI Executive Summary & Predictability Scorecard", audience: "Business Owners, Portfolio Management, Enterprise Executives", deliverables: ["ART Predictability Index score (% Committed Objectives achieved)", "Final ROAM Risk Audit & Business Owner Sign-off", "Inspect & Adapt (I&A) Continuous Improvement Backlog", "PI Financial & Capacity Velocity Variance"], format: "Executive Presentation Deck & Signed Audit Artifact" },
  { cadence: "Half-Yearly (6-Mo) Reports", title: "Value Stream Flow & Capability Maturity", audience: "LACE Steering Committee, Enterprise Leadership", deliverables: ["6-Month Flow Efficiency & Lead Time Trend Analysis", "Agile Team & SM Capability Maturity Index", "DevOps CDP Pipeline Automation Maturity Assessment"], format: "Strategic Assessment Briefing Document" },
  { cadence: "Annual (Full-Year) Reports", title: "ART Strategic Health & Transformation ROI", audience: "C-Suite, VP of Eng, Portfolio Leadership", deliverables: ["Annual ART Predictability Trend (Target >= 85% average)", "Strategic Theme Business Outcome Delivery Telemetry", "RTE Transformation Impact & Next-Year Roadmap"], format: "Annual Transformation Executive Report & Retrospective" }
];

export const REPORTING_TEMPLATES_DATA = {
  weekly: `# RTE WEEKLY STATUS & SOS BLOCKER REPORT\n**ART Name**: {ART_NAME} | **Target PI**: {PI_NAME} | **Iteration**: {ITERATION_NUMBER} of 5\n**Date**: {DATE} | **RTE Name**: {RTE_NAME}\n\n---\n\n## 1. Executive Health Summary\n- **Overall ART Status**: 🟢 GREEN / 🟡 AMBER / 🔴 RED\n- **Iteration Planned Load**: {PLANNED_LOAD} pts | **Completed to Date**: {COMPLETED_LOAD} pts\n- **Summary**: {EXECUTIVE_SUMMARY}\n\n## 2. Active Impediment & Blocker Log (SoS Escalations)\n| Blocker ID | Description | Impacted Team | Owner | Age (Days) | SLA Status | Action Required |\n|------------|-------------|---------------|-------|------------|------------|-----------------|\n| BLK-01 | API Spec Delay | Team Alpha | Dave (Arch) | 3 Days | 🟡 Warning | Needs Arch sign-off |\n| BLK-02 | Staging DB Down | Team Beta | Ops Team | 1 Day | 🟢 On Track | Refreshing env |\n\n## 3. Key Milestone Deliverables This Week\n- [x] Scrum of Scrums (SoS) sync completed on Tuesday\n- [x] PO Sync feature backlog refinement completed\n- [ ] System Demo preparation for Iteration increment\n\n---\n*Generated via RTE Nexus Reporting Engine*`,
  biweekly: `# RTE BI-WEEKLY SYSTEM DEMO & BACKLOG HEALTH REPORT\n**ART Name**: {ART_NAME} | **PI**: {PI_NAME} | **System Demo Date**: {DATE}\n\n---\n\n## 1. System Demo Acceptance Summary\n- **Integrated Features Demonstrated**: {DEMOED_FEATURES_COUNT}\n- **Business Owners Present**: {BUSINESS_OWNERS_LIST}\n- **Stakeholder Acceptance Score**: {ACCEPTANCE_SCORE} / 10\n\n## 2. Feature Completion & Scope Hygiene\n| Feature Name | Team | Target Iteration | Demo Status | Business Owner Sign-Off |\n|--------------|------|------------------|-------------|-------------------------|\n| Payment API v3 | Team Alpha | Iteration 2 | Accepted | Signed Off |\n| Fraud Detector | Team Beta | Iteration 2 | Deferred | Needs Retry Iteration 3 |\n\n## 3. Upcoming PI Backlog Pipeline (WSJF Top 5)\n1. Feature A (WSJF: 42) - Ready for Breakout 1\n2. Feature B (WSJF: 38) - In Refinement\n3. Feature C (WSJF: 31) - Architecture Review Pending\n\n---\n*Generated via RTE Nexus Reporting Engine*`,
  monthly: `# RTE MONTHLY FLOW METRICS & CAPACITY DIAGNOSTIC\n**ART Name**: {ART_NAME} | **Reporting Period**: {MONTH_NAME}\n\n---\n\n## 1. SAFe 6.0 Flow Metrics Diagnostics\n- **Flow Velocity**: {FLOW_VELOCITY} completed items/month\n- **Flow Efficiency**: {FLOW_EFFICIENCY}% (Active time vs Wait time)\n- **Flow Load (WIP)**: {FLOW_LOAD} active items (Target: <= {WIP_LIMIT})\n- **Flow Time (Lead Time)**: {FLOW_TIME} avg days from Backlog to Prod\n\n## 2. Resource & Capacity Utilization\n- Total ART Capacity: {TOTAL_CAPACITY} pts\n- Feature Allocation: {FEATURE_ALLOC}% | Tech Debt: {TECH_DEBT_ALLOC}% | Defects: {DEFECT_ALLOC}%\n\n## 3. Systemic Bottlenecks & LACE Recommendations\n- Bottleneck: Environment provisioning delays adding 4 days to Flow Time.\n- LACE Request: Infrastructure automation support in Enterprise Transformation Backlog.\n\n---\n*Generated via RTE Nexus Reporting Engine*`,
  quarterly: `# RTE QUARTERLY PI EXECUTIVE SUMMARY & PREDICTABILITY DECK\n**ART Name**: {ART_NAME} | **PI**: {PI_NAME} | **PI Completion Date**: {DATE}\n\n---\n\n## 1. ART Predictability Index Scorecard\n- **Total Planned Business Objectives Score**: {PLANNED_PTS} pts\n- **Total Achieved Score (Committed + Uncommitted)**: {ACHIEVED_PTS} pts\n- **ART Predictability Index**: **{PREDICTABILITY_PCT}%** (SAFe Target: 80% – 100%)\n\n## 2. Team Predictability Breakdown\n| Team Name | Committed Objectives | Achieved Score | Team Predictability Index | Status |\n|-----------|----------------------|----------------|---------------------------|--------|\n| Team Alpha | 45 pts | 42 pts | 93.3% | 🟢 Target Achieved |\n| Team Beta | 40 pts | 34 pts | 85.0% | 🟢 Target Achieved |\n| Team Gamma | 50 pts | 32 pts | 64.0% | 🔴 Below Target |\n\n## 3. Final ROAM Risk Audit\n- Resolved: {RESOLVED_COUNT} | Owned: {OWNED_COUNT} | Accepted: {ACCEPTED_COUNT} | Mitigated: {MITIGATED_COUNT}\n- Business Owner Risk Acceptance Sign-Off: Approved\n\n## 4. Inspect & Adapt (I&A) Retrospective Action Backlog\n1. Implement contract testing for microservices (Owner: Arch CoP)\n2. Reduce iteration batch size for deployment (Owner: DevOps CoP)\n\n---\n*Generated via RTE Nexus Reporting Engine*`,
  halfyear: `# RTE HALF-YEARLY (6-MONTH) VALUE STREAM FLOW & MATURITY REPORT\n**Value Stream**: {VALUE_STREAM_NAME} | **ART**: {ART_NAME} | **Period**: H1 {YEAR}\n\n---\n\n## 1. 6-Month Flow Metrics Trend\n- Flow Velocity Trend: Increased from {V1} to {V2} items/month (+{PCT_INC}%)\n- Flow Efficiency Trend: Improved from {E1}% to {E2}%\n- ART Predictability Index 2-PI Average: **{AVG_PRED}%**\n\n## 2. Scrum Master & Team Capability Maturity Index\n- Level 1 (Initial): 0 Teams\n- Level 2 (Emerging): 1 Team\n- Level 3 (Performing): 4 Teams\n- Level 4 (High Performing): 2 Teams\n\n---\n*Generated via RTE Nexus Reporting Engine*`,
  annual: `# RTE ANNUAL TRANSFORMATION ROI & ART HEALTH REPORT\n**Enterprise Portfolio**: {PORTFOLIO_NAME} | **ART**: {ART_NAME} | **Year**: {YEAR}\n\n---\n\n## 1. Annual Strategic Outcomes Telemetry\n- Strategic Themes Delivered: 4 / 4 Major Themes\n- Total Business PI Objectives Delivered: {ANNUAL_OBJECTIVES_COUNT}\n- Average Annual ART Predictability Index: **{ANNUAL_PRED}%**\n\n## 2. RTE Transformation ROI & Continuous Improvement Roadmap\n- Lead time to market reduced by {LEAD_TIME_REDUCTION_PCT}%\n- Customer defect rate reduced by {DEFECT_REDUCTION_PCT}%\n- Next-Year Strategic Focus: AI-augmented backlog refinement & automated pipeline guardrails\n\n---\n*Generated via RTE Nexus Reporting Engine*`
};

export const SYSTEM_DEMO_TEMPLATE = `# SYSTEM DEMO FACILITATION SCRIPT & SCORECARD\n**ART Name**: {ART_NAME} | **PI**: {PI_NAME} | **Iteration**: {ITERATION_NUM}\n**Facilitator (RTE)**: {RTE_NAME} | **Date**: {DATE}\n\n---\n\n## 1. System Demo Agenda (60 Minutes)\n- **00:00 – 00:05**: RTE Opening, Business Context & Demo Rules\n- **00:05 – 00:45**: Integrated System Feature Demonstrations (Live Working Software)\n- **00:45 – 00:55**: Stakeholder Q&A & Business Owner Feedback Scoring\n- **00:55 – 01:00**: Next Iteration Milestone Briefing & Adjournment\n\n## 2. Feature Demo Acceptance Checklist\n- [ ] Demo is conducted on an integrated Staging/Production-like environment\n- [ ] Powerpoint slides minimized; focus is 100% on live working software\n- [ ] Non-Functional Requirements (NFRs) verified (performance, security)\n- [ ] Business Owner formal sign-off captured\n\n---\n*Generated via RTE Nexus System Demo Studio*`;

export const PI_READINESS_CHECKLIST = [
  { id: 1, category: "Content Readiness", task: "Top 10 Features defined with Benefit Hypothesis and WSJF scores", status: false },
  { id: 2, category: "Content Readiness", task: "Product Vision & Strategic Context slides prepared by Product Management", status: false },
  { id: 3, category: "Architecture Readiness", task: "System Architect Vision & Enabler Features reviewed with engineering leads", status: false },
  { id: 4, category: "Architecture Readiness", task: "Non-Functional Requirements (NFRs) defined and communicated to teams", status: false },
  { id: 5, category: "Logistics & Tooling", task: "Digital Collaboration Board (Miro/Mural/Jira) configured with iteration templates", status: false },
  { id: 6, category: "Logistics & Tooling", task: "Facility/Zoom links, room breakout schedules, and AV equipment verified", status: false },
  { id: 7, category: "Team Readiness", task: "Team capacity velocity baselines updated for Iterations 1-5 (accounting for holidays/IP)", status: false },
  { id: 8, category: "Team Readiness", task: "Scrum Masters & Product Owners briefed on PI agenda, roles, and confidence voting procedure", status: false },
  { id: 9, category: "Executive Alignment", task: "Business Owners assigned to teams for PI Objective scoring and Day 1/2 reviews", status: false }
];

export const ROLE_PRE_PI_CHECKLISTS = {
  pm: {
    role: "Product Management (PM) Pre-PI Checklist",
    owner: "Lead Product Manager & PM Team",
    items: [
      { id: 'pm-1', task: "WSJF Prioritization completed for Top 10 Features and approved by Business Owners", status: false },
      { id: 'pm-2', task: "Feature Briefs written with clear Benefit Hypothesis and Acceptance Criteria guidelines", status: false },
      { id: 'pm-3', task: "Product Vision & Strategic Context presentation deck finalized for Day 1 Opening", status: false },
      { id: 'pm-4', task: "Non-Functional Requirements (NFRs) defined for security, compliance, and performance", status: false },
      { id: 'pm-5', task: "Dependencies with external vendor backlogs identified and pre-aligned", status: false }
    ]
  },
  po: {
    role: "Product Owner (PO) Pre-PI Checklist",
    owner: "Agile Team Product Owners",
    items: [
      { id: 'po-1', task: "Team Backlog hygiene audit completed (old stories closed/purged)", status: false },
      { id: 'po-2', task: "Draft User Stories prepared for top features to accelerate Breakout 1 planning", status: false },
      { id: 'po-3', task: "Team capacity split agreed (75% Features, 15% Enablers/Tech Debt, 10% Maintenance)", status: false },
      { id: 'po-4', task: "Product Owner sync completed with System Architect on technical enablers", status: false },
      { id: 'po-5', task: "Pre-identified cross-team dependencies tagged on draft backlog items", status: false }
    ]
  },
  sm: {
    role: "Scrum Master (SM) Pre-PI Checklist",
    owner: "Agile Team Scrum Masters",
    items: [
      { id: 'sm-1', task: "Historical team velocity baselined and capacity calculated for Iterations 1-5", status: false },
      { id: 'sm-2', task: "Planned team PTO, holidays, training, and IP iteration buffer accounted for in capacity", status: false },
      { id: 'sm-3', task: "Team digital collaboration board (Miro/Mural/Jira) set up with iteration frames", status: false },
      { id: 'sm-4', task: "Team briefed on PI Planning agenda, roles, and Fist-of-Five confidence voting procedure", status: false },
      { id: 'sm-5', task: "Scrum Master confirmed availability for overnight Management Review on Day 1", status: false }
    ]
  }
};

export const RETROSPECTIVE_TEMPLATES = {
  piPlanningRetro: `# PI PLANNING EVENT RETROSPECTIVE\n**ART Name**: {ART_NAME} | **PI Event**: {PI_NAME} | **Facilitator**: {RTE_NAME}\n**Date**: {DATE}\n\n---\n\n## 1. Event Logistics & Facilitation (What Went Well)\n- Opening context clarity (Business Context, Vision, Architecture)\n- Digital breakout room setup & Miro/Jira board performance\n- Timebox adherence during Breakout 1 & Breakout 2\n\n## 2. Planning Friction & Areas for Improvement\n- Management Review & Problem Solving overnight adjustments\n- Cross-team dependency discovery friction\n- Business Owner availability during draft plan sign-offs\n\n## 3. Action Items for Next PI Planning Event\n- [ ] Action #1: Standardize Feature brief depth 2 weeks prior (Owner: PM Lead)\n- [ ] Action #2: Add pre-built dependency links in Miro board (Owner: RTE)\n\n---\n*Generated via RTE Nexus Retrospective Studio*`,

  piExecutionRetro: `# 10-WEEK PI EXECUTION RETROSPECTIVE (INSPECT & ADAPT INPUT)\n**ART Name**: {ART_NAME} | **Completed PI**: {PI_NAME} | **Date**: {DATE}\n\n---\n\n## 1. Quantitative Telemetry Review\n- Final ART Predictability Index: **{PREDICTABILITY_PCT}%**\n- Total Features Delivered: {DELIVERED_FEATURES} / {PLANNED_FEATURES}\n- System Demo Stakeholder Attendance Rate: {ATTENDANCE_PCT}%\n\n## 2. Retrospective Categories (4Ls Framework)\n### Liked\n- High collaboration during Scrum of Scrums (SoS) to clear blockers.\n- Successful automated regression testing in Iteration 4.\n\n### Learned\n- Overcommitting in Iteration 1 creates cascade delays for Iteration 3 dependencies.\n\n### Lacked\n- Environment stability during Iteration 2 integration testing.\n\n### Longed For\n- Earlier architectural alignment on microservice contracts before PI Breakout 1.\n\n## 3. Problem Solving Workshop Input (Top 2 Bottlenecks for 5-Whys)\n1. Environment downtime during integration tests.\n2. Delayed API specifications from external platform train.\n\n---\n*Generated via RTE Nexus Retrospective Studio*`,

  sailboatRetro: `# SAILBOAT RETROSPECTIVE TEMPLATE (ITERATION / PI)\n**ART / Team Name**: {TEAM_NAME} | **Date**: {DATE}\n\n---\n\n## 🌬️ Wind (What Pushed Us Forward)\n- Great teamwork during cross-team API integration.\n- Clear WSJF feature priorities from Product Management.\n\n## ⚓ Anchor (What Dragged Us Down / Slowed Us)\n- Slow CI/CD build pipelines taking 45 minutes per pull request.\n- Unclear acceptance criteria on Feature #104.\n\n## 🪨 Rocks (Future Risks & Hazards Ahead)\n- Upcoming cloud infrastructure migration in Iteration 4.\n- Shared DBA resource bottleneck.\n\n## 🏝️ Island (Our Goal & Target Outcome)\n- Achieve 95% ART Predictability Index in current PI.\n\n---\n*Generated via RTE Nexus Retrospective Studio*`
};

export const METRIC_CAPTURE_TEMPLATES = {
  doraCompleteMasterclass: `# COMPLETE DORA DEVOPS METRIC TELEMETRY SHEET & GUIDE FOR RTEs
**ART Name**: {ART_NAME} | **PI Target**: {PI_NAME} | **Date**: {DATE}

| DORA Metric | Definition & Meaning | Source Tools | Formula / Calculation | Current ART Score | Target Tier Benchmark |
|-------------|----------------------|--------------|-----------------------|-------------------|----------------------|
| **Deployment Frequency (DF)** | How often code is successfully deployed to production | GitHub Actions, Jenkins, Harness, Jira Release Hub | \`DF = Total Prod Deploys / Total Days\` | {DEPLOY_FREQ} | Elite: Multiple Deploys/Day |
| **Lead Time for Changes (LTFC)** | Time from code commit/PR merge to running in production | Git Commit Log, GitHub API, ADO Pipeline | \`LTFC = Avg(Time Prod Deployed - Time Code Committed)\` | {LEAD_TIME_HRS} Hours | Elite: < 1 Hour |
| **Change Failure Rate (CFR)** | % of prod deployments causing an incident/rollback | PagerDuty, ServiceNow, Jira Service Desk | \`CFR = (Failed Deploys / Total Deploys) * 100%\` | {CHANGE_FAIL_PCT}% | Elite: 0% - 15% |
| **Mean Time to Restore (MTTR)** | Avg time to recover from a production outage | Datadog, PagerDuty, Incident Log | \`MTTR = Total Outage Downtime / Total Incidents\` | {MTTR_MINS} Mins | Elite: < 1 Hour |

---
*Generated via RTE Nexus Telemetry Studio*`,

  safeFlowTelemetry: `# SAFe 6.0 FLOW METRICS & PREDICTABILITY TELEMETRY SHEET
**ART Name**: {ART_NAME} | **PI Target**: {PI_NAME} | **Date**: {DATE}

## 1. Core SAFe Flow Indicators
- **ART Predictability Index**: {PREDICTABILITY_PCT}% (SAFe Target: 80% – 100%)
- **Flow Efficiency Ratio**: {FLOW_EFFICIENCY}% (Active Development Days vs Total Lead Wait Days)
- **Flow Velocity**: {FLOW_VELOCITY} Work Items Completed / PI Cycle
- **Flow Load (WIP)**: {FLOW_LOAD} Active Work Items on Board (Target WIP Limit: <= 25)

## 2. Flow Distribution Breakdown
- Features (Customer Value): 65% Allocation
- Enablers (Technical Debt & Architecture): 20% Allocation
- Maintenance & Production Defects: 15% Allocation

---
*Generated via RTE Nexus Telemetry Studio*`,

  weeklyTeamFlow: `# WEEKLY AGILE TEAM FLOW & VELOCITY TELEMETRY LOG
**ART Name**: {ART_NAME} | **Iteration**: Iteration {ITERATION_NUM} | **Date**: {DATE}

| Team Name | Planned Story Pts | Completed Story Pts | Active WIP Count | Open Defects | Cycle Time (Avg Days) | Blockers Logged |
|-----------|-------------------|---------------------|------------------|--------------|-----------------------|-----------------|
| Team Alpha | 45 Pts | 42 Pts | 6 Items | 2 Defects | 3.2 Days | 0 Active |
| Team Beta | 40 Pts | 38 Pts | 5 Items | 1 Defect | 2.8 Days | 1 Resolved |
| Team Gamma | 50 Pts | 32 Pts | 12 Items (High) | 6 Defects | 7.5 Days | 2 Escalated |
| Team Delta | 35 Pts | 35 Pts | 4 Items | 0 Defects | 2.1 Days | 0 Active |

---
*Generated via RTE Nexus Telemetry Studio*`,

  quarterlyPiTelemetry: `# QUARTERLY PI METRIC TELEMETRY DECK & SCORECARD
**ART Name**: {ART_NAME} | **PI Target**: {PI_NAME} | **Date**: {DATE}

## 1. SAFe 6.0 Flow Metrics Diagnostics
- **ART Predictability Index**: {PREDICTABILITY_PCT}% (SAFe Target: 80% – 100%)
- **Flow Efficiency Ratio**: {FLOW_EFFICIENCY}% (Active Work Time vs Total Lead Wait Time)
- **Flow Velocity**: {FLOW_VELOCITY} Work Items Completed / PI
- **Flow Load (WIP)**: {FLOW_LOAD} Active Work Items (Target Limit: <= 25)

## 2. DORA DevOps Telemetry
- Deployment Frequency: {DEPLOY_FREQ}
- Lead Time for Changes: {LEAD_TIME_HRS} Hours
- Change Failure Rate: {CHANGE_FAIL_PCT}%
- Mean Time to Restore (MTTR): {MTTR_MINS} Minutes

## 3. Quality & Architecture Telemetry
- Defect Leakage Rate to Production: 1.8%
- Automated Test Coverage: 84.5%
- Architectural Runway Readiness: 92.0%
- NFR Compliance Score: 100% Verified

## 4. Sentiment & Morale Telemetry
- Employee Net Promoter Score (eNPS): +58
- Stakeholder / Customer NPS: +64
- Team Psychological Safety Index: 4.4 / 5.0

---
*Generated via RTE Nexus Telemetry Studio*`,

  archNfrLog: `# ARCHITECTURE, KANBAN & QUALITY METRIC LOG
**ART Name**: {ART_NAME} | **Review Date**: {DATE}

## 1. Architectural Runway & Decoupling Index
- Microservice API Decoupling Score: 88% (Independent deployability)
- System Dependency Coupling Index: Low-to-Medium
- NFR Verification (Performance, Security, Compliance): Pass

## 2. Kanban Flow & Work Item Age (WIA)
- Oldest Active Work Item Age: 14 Days (Flagged for RTE unblocking)
- Cumulative Flow Diagram (CFD) Band Health: Stable parallel bands
- Throughput Stability Variance: < 10% deviation across iterations

---
*Generated via RTE Nexus Telemetry Studio*`,

  piObjectivesScoring: `# BUSINESS PI OBJECTIVES & BUSINESS OWNER SCORING SHEET
**ART Name**: {ART_NAME} | **PI Target**: {PI_NAME} | **Date**: {DATE}

| Team | PI Objective Statement | Type | Planned Value (PV 1-10) | Actual Value (AV 1-10) | Business Owner Sign-Off |
|------|------------------------|------|------------------------|-----------------------|-------------------------|
| Team Alpha | Deliver Payment API v3.0 with sub-second response | Committed | 9 | 9 | Approved |
| Team Beta | Integrate ML Fraud Detection Model v1.2 | Committed | 10 | 8 | Approved |
| Team Beta | Conduct Cloud Infrastructure Sandbox Trial | Uncommitted | 6 | 6 | Approved |

---
*Generated via RTE Nexus Telemetry Studio*`
};

export const SAFE_METRICS_MASTERCLASS_DATA = [
  {
    id: "flow-efficiency",
    name: "1. SAFe Flow Efficiency",
    category: "Flow & Cycle Time",
    meaning: "The ratio of active work time vs total elapsed lead wait time. Highlights how much time work spends sitting idle in queues.",
    whyItMatters: "Exposes systemic wait bottlenecks in handoffs, environment provisioning, and review delays.",
    sources: "Jira / ADO Board State Transition Logs (Active In-Progress time vs Waiting/Blocked time).",
    formula: "Flow Efficiency = (Active Work Days / Total Customer Lead Time Days) × 100%",
    example: "Active work = 12 days, Total lead wait time = 36 days -> Flow Efficiency = (12 / 36) × 100 = 33.3%.",
    benchmarks: { elite: ">= 40% (World Class)", high: "25% - 39% (High Flow)", medium: "15% - 24% (Industry Avg)", low: "< 15% (Heavy Queue Delay)" },
    rtePlaybook: "If low, reduce Work-in-Process (WIP) limits on team boards, eliminate manual handoff approvals, and automate environment provisioning."
  },
  {
    id: "art-predictability",
    name: "2. ART Predictability Index",
    category: "PI Alignment",
    meaning: "Measures how reliably the ART delivers on its planned PI Objectives score signed off by Business Owners.",
    whyItMatters: "Builds trust with executive leadership and Business Owners. Demonstrates commitment integrity.",
    sources: "PI Objectives Capture Sheets, Business Owner Day 2 Planned Value vs System Demo Actual Value scores.",
    formula: "Predictability Index = (Total Achieved Objective Points / Total Planned Committed Points) × 100%",
    example: "Planned committed score = 350 pts, Actual achieved score = 318 pts -> Predictability = 90.8%.",
    benchmarks: { elite: "90% - 100% (Gold Standard)", high: "80% - 89% (SAFe Target)", medium: "65% - 79% (Unpredictable)", low: "< 65% (High Execution Risk)" },
    rtePlaybook: "If low, verify capacity estimations during Breakout 1, prevent executive scope creep mid-PI, and use uncommitted objectives for stretch scope."
  },
  {
    id: "defect-leakage",
    name: "3. Defect Leakage Rate to Production",
    category: "Quality & Testing",
    meaning: "The percentage of software bugs that escape internal QA regression testing and are discovered by real customers in production.",
    whyItMatters: "Direct indicator of testing thoroughness and built-in quality discipline across team repositories.",
    sources: "Jira / ADO Defect Issue Types tagged with Environment = Production vs Environment = Staging/QA.",
    formula: "Defect Leakage % = (Bugs Found in Production / Total Bugs Found across All Environments) × 100%",
    example: "2 bugs found in production, 48 bugs found in QA -> Defect Leakage = (2 / 50) × 100 = 4.0%.",
    benchmarks: { elite: "< 2.0% (Elite Quality)", high: "2.1% - 5.0%", medium: "5.1% - 10.0%", low: "> 10.0% (Severe Escapes)" },
    rtePlaybook: "If high, mandate automated pull request build checks, implement contract testing between microservices, and run shift-left security scans."
  },
  {
    id: "arch-decoupling",
    name: "4. Microservice API Decoupling Score",
    category: "Architecture & NFR",
    meaning: "Measures how independently teams can build, test, and deploy their software microservices without cross-team deployment locks.",
    whyItMatters: "High architectural coupling creates massive cross-team dependencies and blocks continuous delivery.",
    sources: "System Architecture Dependency Matrix, Repository Dependency Analysis (SonarQube / Enterprise Arch logs).",
    formula: "Decoupling Score % = (Independently Deployable Microservices / Total Microservices on ART) × 100%",
    example: "18 microservices deployable without shared downtime out of 20 total -> Decoupling = 90.0%.",
    benchmarks: { elite: ">= 90% (Decoupled)", high: "75% - 89%", medium: "50% - 74%", low: "< 50% (Monolithic Monolith)" },
    rtePlaybook: "If low, engage System Architect to dedicate Enabler Features in IP Iteration for microservice API stubbing and contract isolation."
  },
  {
    id: "work-item-age",
    name: "5. Kanban Work Item Age (WIA)",
    category: "Kanban & Flow",
    meaning: "Measures the total elapsed time an active work item has spent in progress on a Kanban board from start date to present.",
    whyItMatters: "Identifies aging, silently stuck features long before they miss iteration deadlines.",
    sources: "Jira / ADO Control Chart & Cumulative Flow Diagram (CFD) aging reports.",
    formula: "Work Item Age = Current Timestamp - Date Work Item Moved to 'In Progress'",
    example: "Feature #104 moved to In Progress 16 days ago and is still open -> WIA = 16 Days (Stuck Alert!).",
    benchmarks: { elite: "< 5 Days", high: "5 - 10 Days", medium: "11 - 14 Days", low: "> 14 Days (Stuck Blocker)" },
    rtePlaybook: "If WIA > 14 days, highlight in Scrum of Scrums (SoS) immediately, pair developers to swarm on the item, or trim acceptance scope."
  }
];

export const DORA_DEEP_DIVE_GUIDE = [
  {
    id: "df",
    name: "1. Deployment Frequency (DF)",
    badge: "Velocity & Flow",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    meaning: "Measures how often the Agile Release Train successfully deploys code to production or staging environments.",
    whyItMatters: "High deployment frequency reduces batch size, minimizes deployment risk, and allows faster customer feedback loops.",
    sources: "GitHub Actions, GitLab CI, Harness, Jenkins pipelines, Jira Release Hub, Azure DevOps Delivery Plans.",
    formula: "DF = Total Successful Production Deployments / Observation Period (Days)",
    example: "If an ART deploys 24 times over a 10-day iteration, DF = 2.4 deployments/day.",
    benchmarks: { elite: "Multiple deployments per day (On-demand)", high: "Between once per day and once per week", medium: "Between once per week and once per month", low: "Fewer than once per month" },
    rtePlaybook: "If DF is low, coach teams to decouple deployment from customer release using Feature Toggles, reduce pull request sizes, and automate build pipeline triggers."
  },
  {
    id: "ltfc",
    name: "2. Lead Time for Changes (LTFC)",
    badge: "Speed & Pipeline Efficiency",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    meaning: "Measures the time elapsed from when code is committed to a repository to when it runs in production.",
    whyItMatters: "Short lead times reflect low pipeline friction, fast automated testing, and high developer efficiency.",
    sources: "Git commit timestamps (GitHub API), Pull Request merge logs, Jira/ADO state transition webhooks.",
    formula: "LTFC = Σ (Time of Prod Deployment - Timestamp of First Commit) / Total Deployed Work Items",
    example: "Code committed at 09:00 AM, merged at 11:00 AM, deployed at 03:00 PM -> LTFC = 6 Hours.",
    benchmarks: { elite: "Less than 1 Hour", high: "Between 1 Hour and 1 Week", medium: "Between 1 Week and 1 Month", low: "More than 1 Month" },
    rtePlaybook: "If LTFC is high, audit code review wait times in PRs, eliminate manual Change Advisory Board (CAB) approvals, and increase automated regression test execution speed."
  },
  {
    id: "cfr",
    name: "3. Change Failure Rate (CFR)",
    badge: "Quality & Stability",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    meaning: "Measures the percentage of production changes that result in service degradation, outage, or require an emergency hotfix/rollback.",
    whyItMatters: "Highlights pipeline quality guardrails and testing thoroughness. High failure rates destroy customer trust.",
    sources: "ServiceNow incident tickets, PagerDuty alerts, Jira Service Management, Git hotfix branch logs.",
    formula: "CFR = (Total Production Deployments Resulting in Incidents / Total Production Deployments) × 100%",
    example: "Out of 50 deployments, 2 caused incidents requiring rollbacks -> CFR = (2 / 50) × 100 = 4.0%.",
    benchmarks: { elite: "0% – 15%", high: "16% – 30%", medium: "31% – 45%", low: "Greater than 45%" },
    rtePlaybook: "If CFR is high, mandate shift-left security scans, enforce unit test coverage thresholds before merge, and implement contract testing between microservices."
  },
  {
    id: "mttr",
    name: "4. Mean Time to Restore (MTTR)",
    badge: "Resilience & Recovery",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    meaning: "Measures the average time required for the ART to recover and restore normal service when a production failure occurs.",
    whyItMatters: "Demonstrates production observability, telemetry alerting, and incident response readiness.",
    sources: "Datadog synthetic alerts, Dynatrace APM, PagerDuty MTTR telemetry, ServiceNow outage logs.",
    formula: "MTTR = Total Outage Downtime Minutes / Total Incident Count",
    example: "System went down at 02:00 PM, restored at 02:35 PM -> MTTR = 35 Minutes.",
    benchmarks: { elite: "Less than 1 Hour", high: "Less than 1 Day", medium: "Between 1 Day and 1 Week", low: "More than 1 Week" },
    rtePlaybook: "If MTTR is high, allocate capacity for automated rollback scripts, practice Chaos Engineering during IP Iterations, and establish blameless post-mortem CoPs."
  }
];
