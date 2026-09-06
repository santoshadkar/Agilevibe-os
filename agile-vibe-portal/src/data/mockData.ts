import type { 
  SMCompetency, 
  POCompetency, 
  PMCompetency,
  JiraConfig, 
  JiraIssue, 
  SprintBurndownPoint, 
  CFDDataPoint,
  AIToolPrompt
} from '../types';

export const INITIAL_SM_COMPETENCY: SMCompetency = {
  facilitation: 88,
  coaching: 82,
  impedimentRemoval: 94,
  flowMetrics: 76,
  teamHealth: 90,
  scalingAgile: 72
};

export const INITIAL_PO_COMPETENCY: POCompetency = {
  backlogRefinement: 92,
  valueOptimization: 85,
  storyCrafting: 89,
  prioritizationWSJF: 80,
  roadmapStrategy: 86,
  stakeholderMgmt: 78
};

export const INITIAL_PM_COMPETENCY: PMCompetency = {
  productVision: 90,
  marketDiscovery: 84,
  okrAlignment: 88,
  roadmapStrategy: 92,
  productAnalytics: 86,
  gtmExecution: 82
};

export const KNOWLEDGE_TOPICS = [
  // ===============================================
  // --- SCRUM MASTER (SM) TOPICS (BASICS / INTERMEDIATE / ADVANCED) ---
  // ===============================================
  {
    id: 'sm_basics_1',
    role: 'scrum-master' as const,
    level: 'Basics' as const,
    title: 'Scrum 2020 Framework Core Fundamentals',
    subtitle: '3 Accountabilities, 5 Events, 3 Artifacts & Empiricism',
    summary: 'Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.',
    keyTakeaways: [
      'Empirical Process Control relies on 3 Pillars: Transparency, Inspection, and Adaptation.',
      'Scrum Accountabilities: 1 Product Owner, Developers, and 1 Scrum Master (No Project Manager role!).',
      'The 5 Mandatory Scrum Events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.'
    ],
    bestPractices: [
      'Protect event timeboxes: Daily Scrum max 15 mins, Sprint Planning max 8 hrs for a 1-month sprint.',
      'Ensure the Definition of Done (DoD) is shared and adhered to across all increments.'
    ],
    frameworkRef: 'Scrum Guide 2020'
  },
  {
    id: 'sm_basics_2',
    role: 'scrum-master' as const,
    level: 'Basics' as const,
    title: 'Pillars of Empiricism & Definition of Done (DoD)',
    subtitle: 'Transparency, Inspection, Adaptation & Quality Thresholds',
    summary: 'Empiricism ensures that software development decisions are based on real working software increments rather than speculative predictive plans.',
    keyTakeaways: [
      'Transparency: All work items, DoD quality criteria, and sprint metrics must be visible to everyone.',
      'Inspection: Regular events inspect progress toward the Sprint Goal and detect undesirable variances.',
      'Adaptation: Adjusting processes immediately when an inspection reveals quality breaches.'
    ],
    bestPractices: [
      'Never allow un-verified code to be demonstrated in Sprint Review without satisfying 100% of DoD.',
      'Review and upgrade the Definition of Done at least once per quarter during retrospectives.'
    ],
    frameworkRef: 'Scrum Guide 2020'
  },
  {
    id: 'sm_basics_3',
    role: 'scrum-master' as const,
    level: 'Basics' as const,
    title: 'Sprint Goals & Protecting Developer Self-Management',
    subtitle: 'Outcome Orientation vs Scope Micro-Management',
    summary: 'Sprint Goals unite developers on business outcomes, allowing flexibility in technical execution while protecting squad capacity.',
    keyTakeaways: [
      'Sprint Goals give developers overarching purpose rather than a static list of tickets.',
      'Developers self-manage how they turn Product Backlog items into working software increments.',
      'No changes are made that endanger the Sprint Goal during sprint execution.'
    ],
    bestPractices: [
      'Craft Sprint Goals using the template: "In this sprint, we will achieve [Outcome] so that [User Benefit]".',
      'Shield developers from mid-sprint executive scope additions.'
    ],
    frameworkRef: 'Scrum Guide 2020'
  },

  // --- SCRUM MASTER INTERMEDIATE TOPICS ---
  {
    id: 'sm_inter_1',
    role: 'scrum-master' as const,
    level: 'Intermediate' as const,
    title: 'Facilitation & Continuous Team Health',
    subtitle: 'Sailboat Retros, 5 Whys & Spotify Safety Index',
    summary: 'High-performing Scrum Teams require psychological safety and engaging facilitation techniques to turn retrospective feedback into actionable continuous improvements.',
    keyTakeaways: [
      'Use creative retro formats (Sailboat, Starfish, 4Ls, Racecar, Mountain) to avoid retro fatigue.',
      'Apply 5 Whys Root Cause Analysis when recurring technical or organizational bottlenecks emerge.',
      'Measure squad health using the Spotify Squad Health Model across 10 dimensions.'
    ],
    bestPractices: [
      'Limit retrospective action items to top 1-2 high-impact experiments per sprint.',
      'Shift Daily Scrum focus from "status updates to SM" to "walking the board right-to-left".'
    ],
    frameworkRef: 'Agile Coaching Institute & Spotify Model'
  },
  {
    id: 'sm_inter_2',
    role: 'scrum-master' as const,
    level: 'Intermediate' as const,
    title: 'The 8 Stances of a Scrum Master & Knowing Which Hat to Wear',
    subtitle: 'Servant Leader, Teacher, Mentor, Facilitator, Coach, Impediment Remover, Change Agent, Manager of Flow',
    summary: 'A Scrum Master must master Lyssa Adkins 8 stances, knowing exactly when to step into Teaching stance vs Coaching stance vs Facilitator stance.',
    keyTakeaways: [
      'Servant Leader: Serving team growth and organizational agility without commanding authority.',
      'Teacher: Educating squad members on Scrum theory, empirical metrics, and INVEST story slicing.',
      'Facilitator: Remaining neutral process guide during Sprint events to foster team consensus.',
      'Agile Coach: Asking powerful open questions (e.g. "What would happen if we reduced WIP?") to let the team discover solutions.'
    ],
    bestPractices: [
      'Use Teaching stance during onboarding; switch to Coaching stance when team matures.',
      'Never solve technical problems for developers—coach them to find their own solutions.'
    ],
    frameworkRef: 'Lyssa Adkins Coaching Agile Teams'
  },
  {
    id: 'sm_inter_3',
    role: 'scrum-master' as const,
    level: 'Intermediate' as const,
    title: 'Team-Level Workshops & Liberating Structures',
    subtitle: '1-2-4-All, Impromptu Networking, Silent Brainstorming & Fishbowl',
    summary: 'Liberating Structures are micro-structures that include 100% of participants in generating innovative ideas and solving team friction.',
    keyTakeaways: [
      '1-2-4-All: 1 min silent reflection -> 2 min pair sync -> 4 min group sync -> All group presentation.',
      'Impromptu Networking: 3 rounds of 2-minute pair chats to build psychological safety fast.',
      'Fishbowl Facilitation: Inner ring discusses architecture trade-offs while outer ring listens actively.'
    ],
    bestPractices: [
      'Use 1-2-4-All during retrospectives to ensure introverted developers have equal voice.',
      'Timebox Liberating Structures strictly to maintain high workshop energy.'
    ],
    frameworkRef: 'Liberating Structures Handbook'
  },
  {
    id: 'sm_inter_4',
    role: 'scrum-master' as const,
    level: 'Intermediate' as const,
    title: 'Team Working Agreements & Definition of Ready (DoR)',
    subtitle: 'Establishing Squad Norms & Refinement Quality Filters',
    summary: 'Working Agreements define expected behavioral norms, communication channels, and code review SLAs to prevent team friction.',
    keyTakeaways: [
      'Working Agreements cover core hours, PR review SLAs (e.g. max 4 hrs), and mobile notification rules.',
      'Definition of Ready (DoR) establishes refinement filters before pulling stories into planning.',
      'Agreements are created by the team for the team, not mandated by management.'
    ],
    bestPractices: [
      'Review Working Agreements every 3 months during retrospectives.',
      'Keep Working Agreements visual and pinned in squad Slack channels.'
    ],
    frameworkRef: 'Scrum Alliance Best Practices'
  },

  // --- SCRUM MASTER ADVANCED TOPICS ---
  {
    id: 'sm_adv_1',
    role: 'scrum-master' as const,
    level: 'Advanced' as const,
    title: 'Kanban Flow Metrics & Scaled Agile (SAFe/LeSS)',
    subtitle: 'WIP Limits, Lead/Cycle Time, CFD & PI Planning',
    summary: 'Advanced Scrum Masters master flow optimization via Kanban metrics and coordinate cross-team dependencies across Scaled Agile Release Trains (ARTs).',
    keyTakeaways: [
      'Enforce Work-In-Progress (WIP) limits to minimize multitasking and shorten Lead/Cycle Time.',
      'Analyze Cumulative Flow Diagrams (CFD) to spot widening inventory bands indicating bottlenecks.',
      'Facilitate SAFe Program Increment (PI) Planning breakout sessions and map cross-team dependencies.'
    ],
    bestPractices: [
      'Monitor Cycle Time scatterplots to establish reliable SLA percentiles (e.g. 85th percentile = 4 days).',
      'In LeSS/Nexus, align single Product Backlog pull systems with cross-team refinement syncs.'
    ],
    frameworkRef: 'Kanban Guide & SAFe 6.0'
  },
  {
    id: 'sm_adv_2',
    role: 'scrum-master' as const,
    level: 'Advanced' as const,
    title: 'Transitioning from Scrum Master to Enterprise Agile Coach',
    subtitle: 'Systemic Impediment Removal & C-Level Executive Coaching',
    summary: 'Advancing from single-squad Scrum Master to Enterprise Agile Coach involves shifting focus from squad mechanics to organizational systemic transformation.',
    keyTakeaways: [
      'Squad SM vs Enterprise Coach: SM focuses on team flow; Enterprise Coach focuses on C-level alignment and portfolio agility.',
      'Systemic Impediment Removal: Dismantling bureaucratic HR appraisal policies and rigid annual budgeting barriers.',
      'Executive Coaching: Educating C-suite executives on Lean-Agile budgeting and outcome-based OKRs.'
    ],
    bestPractices: [
      'Build an Agile Community of Practice (CoP) across Scrum Masters to drive org-wide standards.',
      'Use empirical value stream mapping data to convince executives to descale bureaucracy.'
    ],
    frameworkRef: 'Enterprise Agile Coaching Competency Framework'
  },
  {
    id: 'sm_adv_3',
    role: 'scrum-master' as const,
    level: 'Advanced' as const,
    title: 'Empirical Flow Forecasting & Spectral SLA Modeling',
    subtitle: 'Monte Carlo Simulations & Probabilistic Forecasts',
    summary: 'Replacing deterministic single-point delivery dates with probabilistic Monte Carlo simulations based on throughput history.',
    keyTakeaways: [
      'Monte Carlo Simulation runs 10,000 statistical trials on historical throughput to forecast completion probability.',
      'Probabilistic Forecasting: "There is an 85% probability we will deliver 45 stories between Oct 12 and Oct 20."',
      'Eliminates estimation padding and arbitrary executive deadline pressures.'
    ],
    bestPractices: [
      'Present 85th percentile delivery bands to stakeholders during roadmap planning.',
      'Track throughput stability using weekly spectral charts.'
    ],
    frameworkRef: 'Actionable Agile Metrics (Daniel Vacanti)'
  },

  // ===============================================
  // --- PRODUCT OWNER (PO) TOPICS (BASICS / INTERMEDIATE / ADVANCED) ---
  // ===============================================
  {
    id: 'po_basics_1',
    role: 'product-owner' as const,
    level: 'Basics' as const,
    title: 'Product Backlog Management & Value Maximization',
    subtitle: 'Product Goals, Refinement & INVEST Criteria',
    summary: 'The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team.',
    keyTakeaways: [
      'The Product Backlog is an ordered list of everything that is known to be needed in the product.',
      'User stories must meet INVEST criteria: Independent, Negotiable, Valuable, Estimable, Small, Testable.',
      'Every Sprint Backlog item must link directly to the overarching Sprint Goal and Product Goal.'
    ],
    bestPractices: [
      'Keep the top of the Product Backlog granular and detailed, while items lower down remain high-level epics.',
      'Maintain 2 sprints worth of "Ready" stories ahead of Sprint Planning.'
    ],
    frameworkRef: 'Scrum Guide 2020 & Agile Alliance'
  },
  {
    id: 'po_basics_2',
    role: 'product-owner' as const,
    level: 'Basics' as const,
    title: 'User Story Anatomy & Acceptance Criteria Fundamentals',
    subtitle: 'User Role, Feature Benefit & Testable Criteria',
    summary: 'Crafting user stories that clearly articulate Who, What, and Why while establishing objective acceptance criteria.',
    keyTakeaways: [
      'User Story Template: "As a [User Role], I want [Feature Action], So that [Business Benefit]".',
      'Acceptance Criteria define the boundaries of the user story and confirm when it is complete.',
      'Stories are negotiable invitations to conversation between PO and Developers.'
    ],
    bestPractices: [
      'Focus on the user perspective, avoiding technical implementation jargon in story summaries.',
      'Keep stories small enough to complete within 2-3 development days.'
    ],
    frameworkRef: 'Agile Product Ownership Guide'
  },

  // --- PRODUCT OWNER INTERMEDIATE TOPICS ---
  {
    id: 'po_inter_1',
    role: 'product-owner' as const,
    level: 'Intermediate' as const,
    title: 'BDD Gherkin Acceptance Criteria & Story Mapping',
    subtitle: 'Given/When/Then BDD Syntax & User Journey Mapping',
    summary: 'Bridge the gap between customer expectations and engineering implementation by crafting precise Behavior-Driven Development (BDD) acceptance criteria.',
    keyTakeaways: [
      'Write acceptance criteria using Gherkin syntax: Given (Context), When (Action), Then (Outcome).',
      'Use Story Mapping to visualize the user journey horizontally and slice MVP releases vertically.',
      'Collaborate with Developers during backlog refinement to clarify edge cases early.'
    ],
    bestPractices: [
      'Include non-functional requirements (security, latency, scalability) in acceptance criteria.',
      'Validate feature slice boundaries with real user analytics before committing full engineering effort.'
    ],
    frameworkRef: 'BDD Guide & User Story Mapping'
  },
  {
    id: 'po_inter_2',
    role: 'product-owner' as const,
    level: 'Intermediate' as const,
    title: 'Vertical Story Slicing Techniques',
    subtitle: 'Decomposing Epics into Small Value Slices',
    summary: 'Slicing monolithic epics vertically across all architectural layers so each slice delivers end-to-end user value.',
    keyTakeaways: [
      'Vertical Slicing: Slicing by workflow step, business rule variation, or input data type.',
      'Avoid Horizontal Slicing (e.g. building DB layer in Sprint 1, UI in Sprint 2).',
      'Small vertical slices reduce integration risk and enable fast user feedback.'
    ],
    bestPractices: [
      'Slice by happy path first (MVP Slice 1), followed by error handling edge cases.',
      'Target 2-3 story points maximum per refined user story.'
    ],
    frameworkRef: 'Humanizing Work Story Slicing Cheat Sheet'
  },

  // --- PRODUCT OWNER ADVANCED TOPICS ---
  {
    id: 'po_adv_1',
    role: 'product-owner' as const,
    level: 'Advanced' as const,
    title: 'Prioritization Matrices (WSJF / RICE / Kano)',
    subtitle: 'Weighted Shortest Job First, Cost of Delay & Feature ROI',
    summary: 'Master quantitative backlog prioritization frameworks to evaluate business value, time criticality, and risk reduction against engineering effort.',
    keyTakeaways: [
      'Calculate WSJF (SAFe): Cost of Delay (Business Value + Time Criticality + Risk Reduction) divided by Job Size.',
      'Use RICE Scoring: (Reach × Impact × Confidence) ÷ Effort for consumer feature backlogs.',
      'Balance technical debt refactoring with new revenue features via capacity allocation.'
    ],
    bestPractices: [
      'Re-evaluate WSJF scores before every PI Planning or major release boundary.',
      'Forecast value points delivered vs target ROI per release cycle.'
    ],
    frameworkRef: 'SAFe 6.0 WSJF & Product Management Handbook'
  },
  {
    id: 'po_adv_2',
    role: 'product-owner' as const,
    level: 'Advanced' as const,
    title: 'Cost of Delay (CoD) Economic Modeling',
    subtitle: 'Quantifying Urgency & Financial Impact of Delays',
    summary: 'Understanding the true economic cost of delaying feature delivery over 3-month release cycles.',
    keyTakeaways: [
      'Cost of Delay combines User Value, Time Criticality, and Risk Reduction / Opportunity Value.',
      'Standard CoD vs Peak CoD: Missing holiday launch dates incurs exponential Cost of Delay.',
      'Economics-based backlog ordering replaces executive political arguments.'
    ],
    bestPractices: [
      'Calculate CoD per week of delay for top 5 strategic backlog initiatives.',
      'Prioritize items with steep Cost of Delay curves first.'
    ],
    frameworkRef: 'Reinertsen Product Development Flow'
  },

  // ===============================================
  // --- PRODUCT MANAGER (PM) TOPICS (BASICS / INTERMEDIATE / ADVANCED) ---
  // ===============================================
  {
    id: 'pm_basics_1',
    role: 'product-manager' as const,
    level: 'Basics' as const,
    title: 'Product Vision, Strategy & Customer Discovery',
    subtitle: 'Product Discovery, Value Proposition & Market Fits',
    summary: 'The Product Manager defines product vision, market strategy, customer positioning, and aligns long-term business goals with product capabilities.',
    keyTakeaways: [
      'Product Vision articulates the long-term aspirational future of the product (Why it exists).',
      'Product Strategy bridges vision to execution: Target Customer, Core Problem, Unique Value Proposition.',
      'Continuous Customer Discovery: Validate problem-solution fit before writing software code.'
    ],
    bestPractices: [
      'Conduct weekly customer interview loops to gather qualitative user insights.',
      'Define clear North Star Metrics to align cross-functional product teams.'
    ],
    frameworkRef: 'Inspired (Marty Cagan) & Strategyzer'
  },
  {
    id: 'pm_basics_2',
    role: 'product-manager' as const,
    level: 'Basics' as const,
    title: 'North Star Metric & Value Proposition Canvas',
    subtitle: 'Aligning Product Value with Long-Term Customer Retention',
    summary: 'Formulating a North Star Metric that captures customer value delivery and drives organizational alignment.',
    keyTakeaways: [
      'North Star Metric represents key customer value (e.g. Spotify: Time Spent Listening).',
      'Value Proposition Canvas maps Customer Pains/Gains to Product Pain Relievers/Gain Creators.',
      'Input Metrics feed into the North Star Metric to guide weekly squad priorities.'
    ],
    bestPractices: [
      'Ensure the North Star Metric directly correlates with long-term customer retention.',
      'Communicate the North Star Metric across all product and engineering squads.'
    ],
    frameworkRef: 'Amplitude North Star Playbook'
  },

  // --- PRODUCT MANAGER INTERMEDIATE TOPICS ---
  {
    id: 'pm_inter_1',
    role: 'product-manager' as const,
    level: 'Intermediate' as const,
    title: 'OKR Alignment & Outcome-Based Roadmapping',
    subtitle: 'Objectives & Key Results, Now/Next/Later Roadmaps',
    summary: 'Shift from output-based roadmaps (feature delivery dates) to outcome-based roadmaps tied to strategic company OKRs.',
    keyTakeaways: [
      'Objectives define qualitative intent; Key Results quantify measurable business outcomes.',
      'Structure roadmaps into Now (High Certainty), Next (In Discovery), Later (Strategic Horizon).',
      'Use Opportunity Solution Trees (Teresa Torres) to map business outcomes to customer opportunities.'
    ],
    bestPractices: [
      'Review quarterly OKRs every 4 weeks to adjust strategy based on market shifts.',
      'Avoid hard date commitments on items in the "Later" roadmap horizon.'
    ],
    frameworkRef: 'Measure What Matters (John Doerr) & Continuous Discovery Habits'
  },
  {
    id: 'pm_inter_2',
    role: 'product-manager' as const,
    level: 'Intermediate' as const,
    title: 'Continuous Customer Discovery Habits (Teresa Torres)',
    subtitle: 'Weekly Discovery Interviews & Opportunity Solution Trees',
    summary: 'Establishing continuous customer discovery habits to test assumptions before committing engineering resources.',
    keyTakeaways: [
      'Conduct 2 customer interviews per week as a continuous habit.',
      'Map opportunities using Opportunity Solution Trees (Outcome -> Opportunity -> Solution -> Experiment).',
      'Test solution assumptions using rapid wireframe prototypes rather than full software builds.'
    ],
    bestPractices: [
      'Include a Product Manager, Product Owner, and Tech Lead in discovery interview loops.',
      'Focus interview questions on past real user behaviors rather than future hypothetical opinions.'
    ],
    frameworkRef: 'Continuous Discovery Habits (Teresa Torres)'
  },

  // --- PRODUCT MANAGER ADVANCED TOPICS ---
  {
    id: 'pm_adv_1',
    role: 'product-manager' as const,
    level: 'Advanced' as const,
    title: 'Product-Led Growth (PLG) & Product Analytics',
    subtitle: 'Retention Funnels, CAC/LTV, CSAT/NPS & GTM Execution',
    summary: 'Scale product adoption using product-driven acquisition, activation, retention, revenue, and referral (AARRR Pirate Metrics).',
    keyTakeaways: [
      'PLG leverages the product itself as the primary driver of customer acquisition & retention.',
      'Track SaaS Metrics: Customer Acquisition Cost (CAC), Lifetime Value (LTV), Monthly Recurring Revenue (MRR), Churn Rate.',
      'Execute Go-To-Market (GTM) strategies coordinating product, marketing, sales, and customer success.'
    ],
    bestPractices: [
      'Maintain an LTV to CAC ratio greater than 3:1 for sustainable product growth.',
      'Optimize the Time-to-Value (TTV) onboarding funnel to maximize user activation.'
    ],
    frameworkRef: 'Product-Led Growth (OpenView) & Reforge Product Strategy'
  },
  {
    id: 'pm_adv_2',
    role: 'product-manager' as const,
    level: 'Advanced' as const,
    title: 'SaaS Unit Economics & Portfolio Horizon Strategy',
    subtitle: 'LTV:CAC Ratios, Net Revenue Retention & McKinsey 3 Horizons',
    summary: 'Mastering SaaS business models, unit economics optimization, and managing product portfolios across McKinsey 3 Horizons.',
    keyTakeaways: [
      'LTV:CAC Ratio >= 3:1 is required for profitable SaaS scaling; Payback Period should be < 12 months.',
      'Net Revenue Retention (NRR) > 110% drives exponential compound revenue growth.',
      'McKinsey 3 Horizons: Horizon 1 (Core Cash Cow 70%), Horizon 2 (Growth 20%), Horizon 3 (Bets 10%).'
    ],
    bestPractices: [
      'Calculate Net Revenue Retention monthly to evaluate expansion upsells.',
      'Protect Horizon 3 innovation budgets from short-term Horizon 1 cost cuts.'
    ],
    frameworkRef: 'Reforge Growth Series & McKinsey Strategy'
  }
];

export const MOCK_JIRA_CONFIG: JiraConfig = {
  serverType: 'cloud',
  hostUrl: 'https://enterprise-agile.atlassian.net',
  projectKey: 'PAYMENT',
  jqlQuery: 'project = "PAYMENT" AND sprint in openSprints() ORDER BY rank ASC',
  emailOrUsername: 'sarah.jenkins@enterprise-agile.io',
  apiTokenOrPassword: 'ATATT3xFfGF0...992X1',
  connected: true,
  lastSyncedAt: new Date().toISOString()
};

export const MOCK_JIRA_ISSUES: JiraIssue[] = [
  {
    id: 'issue_101',
    key: 'PAYMENT-301',
    summary: 'Implement Stripe Checkout API Integration for Subscription Billing',
    issueType: 'Story',
    status: 'In Progress',
    priority: 'Highest',
    storyPoints: 8,
    assignee: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    epic: 'EPIC-10: Payment Gateway Upgrade',
    created: '2026-08-10',
    cycleTimeDays: 4.2
  },
  {
    id: 'issue_102',
    key: 'PAYMENT-302',
    summary: 'Fix 3D-Secure 2.0 Authentication Callback Timeout in Mobile Web',
    issueType: 'Bug',
    status: 'In Review',
    priority: 'High',
    storyPoints: 5,
    assignee: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    },
    epic: 'EPIC-10: Payment Gateway Upgrade',
    created: '2026-08-12',
    cycleTimeDays: 2.1
  },
  {
    id: 'issue_103',
    key: 'PAYMENT-303',
    summary: 'Design User Flow for One-Click Re-order and Saved Cards UI',
    issueType: 'Story',
    status: 'Done',
    priority: 'Medium',
    storyPoints: 5,
    assignee: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
    },
    epic: 'EPIC-12: Checkout UX Modernization',
    created: '2026-08-08',
    cycleTimeDays: 3.5
  },
  {
    id: 'issue_104',
    key: 'PAYMENT-304',
    summary: 'Database Schema Refactoring for Multi-Tenant RBAC Audit Logs',
    issueType: 'Task',
    status: 'To Do',
    priority: 'High',
    storyPoints: 8,
    assignee: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
    },
    epic: 'EPIC-14: Security Compliance',
    created: '2026-08-15',
    cycleTimeDays: 0
  }
];

export const MOCK_BURNDOWN_DATA: SprintBurndownPoint[] = [
  { day: 'Day 1', idealRemaining: 40, actualRemaining: 40 },
  { day: 'Day 2', idealRemaining: 36, actualRemaining: 38 },
  { day: 'Day 3', idealRemaining: 32, actualRemaining: 35 },
  { day: 'Day 4', idealRemaining: 28, actualRemaining: 30 },
  { day: 'Day 5', idealRemaining: 24, actualRemaining: 22 },
  { day: 'Day 6', idealRemaining: 20, actualRemaining: 20 },
  { day: 'Day 7', idealRemaining: 16, actualRemaining: 16 },
  { day: 'Day 8', idealRemaining: 12, actualRemaining: 11 },
  { day: 'Day 9', idealRemaining: 8, actualRemaining: 6 },
  { day: 'Day 10', idealRemaining: 0, actualRemaining: 0 }
];

export const MOCK_CFD_DATA: CFDDataPoint[] = [
  { date: 'Aug 1', todo: 25, inProgress: 8, inReview: 4, done: 0 },
  { date: 'Aug 4', todo: 20, inProgress: 10, inReview: 5, done: 5 },
  { date: 'Aug 7', todo: 15, inProgress: 11, inReview: 6, done: 12 },
  { date: 'Aug 10', todo: 10, inProgress: 9, inReview: 5, done: 20 },
  { date: 'Aug 13', todo: 6, inProgress: 8, inReview: 4, done: 28 },
  { date: 'Aug 16', todo: 3, inProgress: 5, inReview: 3, done: 35 },
  { date: 'Aug 20', todo: 1, inProgress: 3, inReview: 2, done: 40 }
];

export const AI_TOOL_PROMPTS: AIToolPrompt[] = [
  // --- SCRUM MASTER AI ASSISTANTS ---
  {
    id: 'ai_retro_gen',
    name: 'AI Retrospective Facilitator (5 Themes)',
    role: 'scrum-master',
    category: 'Facilitation',
    description: 'Generates creative retro reports across 5 themes (Sailboat, Starfish, 4Ls, Mountain, Racecar) with actionable experiments.',
    templateInput: 'Sprint 24 completed. Velocity was 38 pts (planned 40). We experienced 2 staging QA environment downtime days.'
  },
  {
    id: 'ai_impediment_resolver',
    name: 'AI Impediment & 5-Whys Root Cause Analyzer',
    role: 'scrum-master',
    category: 'Coaching & Flow',
    description: 'Applies 5 Whys and Cynefin framework analysis to eliminate systemic team blockers, QA bottlenecks, and deployment script failures.',
    templateInput: 'QA testing environment was down for 3 days due to deployment script failure. Dev team couldn’t verify stories.'
  },
  {
    id: 'ai_standup_analyzer',
    name: 'AI Daily Standup Board Walkthrough Assistant',
    role: 'scrum-master',
    category: 'Daily Scrum',
    description: 'Analyzes aging Jira board items right-to-left to spot WIP limit violations and prevent mid-sprint delays.',
    templateInput: '3 stories in "In Review" have not moved for 4 days. Developers pulled 2 new "To Do" items today.'
  },
  {
    id: 'ai_team_safety_advisor',
    name: 'AI Squad Health & Psychological Safety Index',
    role: 'scrum-master',
    category: 'Team Health',
    description: 'Evaluates squad morale, retro engagement, and psychological safety index scores using Spotify Squad framework.',
    templateInput: 'Team members are quiet in retros and hesitant to voice technical concerns during planning.'
  },

  // --- PRODUCT OWNER AI ASSISTANTS ---
  {
    id: 'ai_story_gherkin',
    name: 'AI User Story & Gherkin BDD Generator',
    role: 'product-owner',
    category: 'Backlog Refinement',
    description: 'Converts high-level feature ideas into INVEST-compliant user stories with precise Given/When/Then BDD acceptance criteria.',
    templateInput: 'Allow users to save multiple credit cards during checkout and set a default primary card for auto-renewal.'
  },
  {
    id: 'ai_wsjf_calculator',
    name: 'AI WSJF & RICE Score Prioritizer',
    role: 'product-owner',
    category: 'Prioritization',
    description: 'Calculates Weighted Shortest Job First (WSJF) & RICE score matrix for backlog items based on Cost of Delay vs Effort.',
    templateInput: 'Feature A: Apple Pay Integration. Business Value: 9/10, Time Criticality: 8/10, Risk Reduction: 7/10, Job Size: 5 pts.'
  },
  {
    id: 'ai_epic_story_slicer',
    name: 'AI Epic Vertical Story Slicer',
    role: 'product-owner',
    category: 'Story Slicing',
    description: 'Slices large monolithic Epics vertically into small 2-3 point testable user stories.',
    templateInput: 'Epic: Enterprise Multi-Tenant Access Control & Audit Logging System.'
  },
  {
    id: 'ai_customer_feedback_summarizer',
    name: 'AI Customer Feedback & Review Summarizer',
    role: 'product-owner',
    category: 'Customer Discovery',
    description: 'Aggregates CSAT user reviews, support tickets, and app store feedback into prioritized backlog feature requests.',
    templateInput: '150 user support tickets complaining about slow checkout page loading on iOS mobile web browsers.'
  },

  // --- PRODUCT MANAGER AI ASSISTANTS ---
  {
    id: 'ai_pm_vision_strat',
    name: 'AI Product Vision & Strategy Canvas Generator',
    role: 'product-manager',
    category: 'Product Strategy',
    description: 'Synthesizes market research, customer problem statements, and target metrics into an inspiring Product Vision & Strategy canvas.',
    templateInput: 'Building an enterprise B2B real-time payment reconciliation microservice for cross-border financial institutions.'
  },
  {
    id: 'ai_pm_okr_roadmap',
    name: 'AI OKR & Outcome Roadmap Matrix Aligner',
    role: 'product-manager',
    category: 'Strategy & Execution',
    description: 'Maps quarterly company OKRs into outcome-based "Now / Next / Later" roadmap horizons with key result targets.',
    templateInput: 'Q3 Business Objective: Increase active user retention by 20% and reduce onboarding step-3 drop-off from 35% to 15%.'
  },
  {
    id: 'ai_competitor_intel',
    name: 'AI Competitor Intelligence & Market Analyst',
    role: 'product-manager',
    category: 'Market Intelligence',
    description: 'Analyzes competitor feature launches, pricing models, and positioning to recommend strategic differentiation.',
    templateInput: 'Chief competitor launched a free automated reconciliation feature with basic reporting.'
  },
  {
    id: 'ai_plg_funnel_optimizer',
    name: 'AI Product-Led Growth (PLG) Funnel Optimizer',
    role: 'product-manager',
    category: 'Growth & Analytics',
    description: 'Analyzes drop-off points in user activation funnels and recommends time-to-value (TTV) onboarding improvements.',
    templateInput: 'SaaS Onboarding Funnel: Signup (100%), Email Verify (92%), Identity Setup (65%), First API Call (40%).'
  }
];
