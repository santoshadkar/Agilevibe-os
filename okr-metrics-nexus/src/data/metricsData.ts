import type { 
  EnterpriseRoleInfo, 
  MetricHistoryNode, 
  FrameworkComparison, 
  GovernanceRitual, 
  MetricItem 
} from '../types/metrics';

export const ENTERPRISE_ROLES: EnterpriseRoleInfo[] = [
  {
    id: 'ai-leader',
    name: 'AI Leader / CAIO',
    shortTitle: 'AI Leader',
    tagline: 'Enterprise GenAI Adoption, LLM Infra & Governance',
    iconName: 'Cpu',
    color: 'text-violet-400',
    bgGradient: 'from-violet-900/40 via-slate-900 to-indigo-900/40',
    borderColor: 'border-violet-500/40',
    focusArea: 'Model Performance, Ethics, ROI & Developer Velocity'
  },
  {
    id: 'transformation-leader',
    name: 'Agile Transformation Leader',
    shortTitle: 'Transformation',
    tagline: 'Enterprise Value Stream, Agile Maturity & Flow',
    iconName: 'Sparkles',
    color: 'text-amber-400',
    bgGradient: 'from-amber-900/40 via-slate-900 to-orange-900/40',
    borderColor: 'border-amber-500/40',
    focusArea: 'Enterprise Flow, Culture, Scaling & Business Agility'
  },
  {
    id: 'rte',
    name: 'Release Train Engineer (RTE)',
    shortTitle: 'RTE',
    tagline: 'Agile Release Train Flow, PI Predictability & System Demos',
    iconName: 'TrainTrack',
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-900/40 via-slate-900 to-teal-900/40',
    borderColor: 'border-emerald-500/40',
    focusArea: 'ART Execution, Dependencies & Program Predictability'
  },
  {
    id: 'tsm',
    name: 'Technical Scrum Master (TSM)',
    shortTitle: 'TSM / Tech Lead',
    tagline: 'Engineering Excellence, CI/CD Pipeline & Tech Debt',
    iconName: 'Terminal',
    color: 'text-cyan-400',
    bgGradient: 'from-cyan-900/40 via-slate-900 to-blue-900/40',
    borderColor: 'border-cyan-500/40',
    focusArea: 'Architecture, Automation, MTTR & Code Health'
  },
  {
    id: 'sm',
    name: 'Scrum Master (SM)',
    shortTitle: 'Scrum Master',
    tagline: 'Squad Facilitation, Flow Metrics & Team Coaching',
    iconName: 'ShieldCheck',
    color: 'text-sky-400',
    bgGradient: 'from-sky-900/40 via-slate-900 to-indigo-900/40',
    borderColor: 'border-sky-500/40',
    focusArea: 'Psychological Safety, Velocity & Sprint Goals'
  },
  {
    id: 'pm',
    name: 'Product Manager (PM)',
    shortTitle: 'Product Manager',
    tagline: 'Product Vision, WSJF Prioritization & Market Value',
    iconName: 'Compass',
    color: 'text-purple-400',
    bgGradient: 'from-purple-900/40 via-slate-900 to-pink-900/40',
    borderColor: 'border-purple-500/40',
    focusArea: 'Customer Delight, Roadmap & Strategic Epics'
  },
  {
    id: 'po',
    name: 'Product Owner (PO)',
    shortTitle: 'Product Owner',
    tagline: 'Backlog Refinement, DoR/DoD & Feature Delivery',
    iconName: 'Target',
    color: 'text-pink-400',
    bgGradient: 'from-pink-900/40 via-slate-900 to-rose-900/40',
    borderColor: 'border-pink-500/40',
    focusArea: 'Acceptance Criteria, Sprint Backlog & Value Realization'
  },
  {
    id: 'squad',
    name: 'Squad / ART Delivery Team',
    shortTitle: 'Squad / ART',
    tagline: 'Cross-functional Execution, Craftsmanship & Commitment',
    iconName: 'Users',
    color: 'text-teal-300',
    bgGradient: 'from-teal-950/40 via-slate-900 to-cyan-950/40',
    borderColor: 'border-teal-500/30',
    focusArea: 'Defect Density, Continuous Integration & Sprint Delivery'
  }
];

export const METRIC_HISTORY_TIMELINE: MetricHistoryNode[] = [
  {
    era: '1954: Foundation Era',
    year: '1954',
    title: 'Management by Objectives (MBO)',
    pioneer: 'Peter Drucker',
    summary: 'Introduced in "The Practice of Management". Shifted emphasis from micro-management of activities to setting clear, aligned business goals.',
    keyInnovation: 'Decentralized goal-setting aligned with organizational strategy.',
    badge: 'MBO Origin'
  },
  {
    era: '1970s: The Intel Evolution',
    year: '1970s',
    title: 'iMBOs (Intel Management by Objectives)',
    pioneer: 'Andy Grove (CEO of Intel)',
    summary: 'Transformed MBO into OKRs by adding "Key Results" (How do we measure success?) and introducing quarterly aspirational stretch targets.',
    keyInnovation: 'Decoupled goals from salary compensation to encourage bold risk-taking.',
    badge: 'OKR Birth'
  },
  {
    era: '1990s: Strategic Balance',
    year: '1992',
    title: 'Balanced Scorecard (BSC) & KPIs',
    pioneer: 'Robert Kaplan & David Norton',
    summary: 'Introduced financial, customer, internal process, and learning perspectives to prevent over-focus on short-term profits.',
    keyInnovation: 'Key Performance Indicators (KPIs) mapped to 4 strategic pillars.',
    badge: 'KPI Standard'
  },
  {
    era: '1999: Silicon Valley Explosion',
    year: '1999',
    title: 'Google OKR Framework',
    pioneer: 'John Doerr (Kleiner Perkins)',
    summary: 'Introduced OKRs to Larry Page and Sergey Brin at Google. Scaled OKRs from 40 employees to tens of thousands globally.',
    keyInnovation: 'Transparent, company-wide public OKRs accessible to every employee.',
    badge: 'Hyper-Growth Scale'
  },
  {
    era: '2010s: Scaled Agile Integration',
    year: '2015',
    title: 'SAFe & Lean Enterprise KRAs/KRIs',
    pioneer: 'Dean Leffingwell (Scaled Agile)',
    summary: 'Embedded Strategic Themes, PI Predictability Measures, and Key Risk Indicators (KRIs) directly into Agile Release Trains (ARTs).',
    keyInnovation: 'Cascading OKRs from Strategic Themes down to Portfolio, Solution, and Feature levels.',
    badge: 'Enterprise Agile'
  },
  {
    era: '2024+: AI Era Telemetry & Vibe Metrics',
    year: '2024 - 2026',
    title: 'AI-Augmented Dynamic Metrics & Automated KRIs',
    pioneer: 'Enterprise AI Leaders & Vibe Engineers',
    summary: 'Real-time telemetry, automated LLM sentiment analysis, predictive velocity forecasting, and instant AI-driven KRI risk alerts.',
    keyInnovation: 'Self-adjusting OKRs based on live production telemetry and real-time sprint sentiment.',
    badge: 'AI Telemetry'
  }
];

export const FRAMEWORK_COMPARISON_MATRIX: FrameworkComparison[] = [
  {
    category: 'OKR',
    fullName: 'Objectives and Key Results',
    corePurpose: 'Drive strategic direction, alignment, and aspirational stretch goals.',
    timeHorizon: 'Quarterly to Annual (Dynamic & Evolutionary)',
    primaryOwner: 'Leadership, Product Managers, RTEs, & Cross-functional Teams',
    reviewFrequency: 'Bi-Weekly Progress & End-of-Quarter Scoring (0.0 to 1.0)',
    keyQuestionAnswered: '"Where do we want to go, and how will we know if we are getting there?"',
    commonFailureMode: 'Treating OKRs as a task checklist or tying score directly to performance appraisals.'
  },
  {
    category: 'KPI',
    fullName: 'Key Performance Indicators',
    corePurpose: 'Measure ongoing operational health, stability, and efficiency baseline.',
    timeHorizon: 'Continuous / Ongoing Operational Standard',
    primaryOwner: 'Functional Owners, Tech Leads, SMs, & Operations Team',
    reviewFrequency: 'Daily Standups, Weekly Operational Reviews, Sprint Retro',
    keyQuestionAnswered: '"How well are our core systems, processes, and products running right now?"',
    commonFailureMode: 'Tracking vanity metrics (e.g. lines of code) instead of outcome-based health indicators.'
  },
  {
    category: 'KRA',
    fullName: 'Key Result Areas',
    corePurpose: 'Define boundary of accountability and scope of responsibility for a role.',
    timeHorizon: 'Annual / Strategic Role Charter',
    primaryOwner: 'Role Incumbent (e.g. CAIO, RTE, TSM, SM, PO, PM)',
    reviewFrequency: 'Monthly 1-on-1s, Mid-Year & Annual Performance Reviews',
    keyQuestionAnswered: '"What key domains is this role accountable for delivering excellence in?"',
    commonFailureMode: 'Confusing job responsibilities (activities) with high-value outcome areas.'
  },
  {
    category: 'KRI',
    fullName: 'Key Risk Indicators',
    corePurpose: 'Early warning radar signal predicting potential compliance, quality, or process failures.',
    timeHorizon: 'Real-time Telemetry to Monthly Alert Cycles',
    primaryOwner: 'Enterprise Risk Officers, RTEs, Tech Leads, & Security Leads',
    reviewFrequency: 'Continuous Automated Monitoring & Sprint Risk Check-ins',
    keyQuestionAnswered: '"What critical warning thresholds are we approaching that could derail us?"',
    commonFailureMode: 'Ignoring warning thresholds until an incident occurs or setting unrealistic alert triggers.'
  }
];

export const GOVERNANCE_RITUALS: GovernanceRitual[] = [
  {
    id: 'gov_daily',
    cadence: 'Daily (15 Minutes)',
    durationMinutes: '15 Mins',
    cadenceTier: 'Daily',
    eventTitle: 'Daily Standup / Daily Scrum Synchronous Flow',
    primaryRoles: ['Scrum Master', 'Technical Scrum Master', 'Squad Developers', 'Product Owner'],
    metricsReviewed: ['KRI', 'KPI'],
    requiredInputs: [
      'Sprint Kanban Board status',
      'CI/CD Pipeline Build Logs & SonarQube scan status',
      'Open Pull Requests aged > 24 hours',
      'Impediment & Blocker Log'
    ],
    keyAgendaItems: [
      '1. Review active KRI alerts (Stale PRs > 48h, broken main builds).',
      '2. Inspect Sprint Burndown KPI & WIP Limit adherence.',
      '3. Identify immediate cross-developer blockers needing swarming or SM escalation.'
    ],
    outputsAndArtifacts: 'Updated Sprint Board, immediate impediment escalation ticket, cleared build blocker.',
    escalationSLA: 'Immediate SM/TSM intervention within 2 hours if blocker halts sprint flow.',
    areaFocusRules: {
      kriRule: 'KRI Focus: Immediate alert triggering for broken main branch build or PR staleness > 48h.',
      kpiRule: 'KPI Focus: Daily Sprint Burndown slope & active developer WIP limit adherence.'
    }
  },
  {
    id: 'gov_weekly',
    cadence: 'Weekly (30 - 45 Minutes)',
    durationMinutes: '30–45 Mins',
    cadenceTier: 'Weekly',
    eventTitle: 'Squad Flow & Engineering Excellence Sync',
    primaryRoles: ['Technical Scrum Master', 'Lead Developers', 'DevOps Lead', 'Product Owner'],
    metricsReviewed: ['KPI', 'KRI'],
    requiredInputs: [
      'Lead Indicator Telemetry (PR turnaround times, test coverage %)',
      'Static Security Vulnerability Scan Reports (SonarQube/Snyk)',
      'Microservice API Latency Telemetry Reports'
    ],
    keyAgendaItems: [
      '1. Audit DORA Lead Indicators (PR Review Turnaround Time & Test Coverage).',
      '2. Review security vulnerability KRIs (CVSS > 7.0 unpatched bugs).',
      '3. Schedule technical debt refactoring spikes for upcoming sprint backlog.'
    ],
    outputsAndArtifacts: 'Weekly Tech Debt Backlog Spikes, PR Review Schedule, Security Patch Plan.',
    escalationSLA: 'TSM to RTE escalation within 24 hours if technical blocker impacts cross-squad dependencies.',
    areaFocusRules: {
      kpiRule: 'KPI Focus: Lead indicator telemetry (PR review speed < 4h) to predict lag outcome (Lead time for changes).',
      kriRule: 'KRI Focus: Security vulnerability severity checks (> CVSS 7.0).'
    }
  },
  {
    id: 'gov_biweekly',
    cadence: 'Bi-Weekly / Sprint (60 - 90 Minutes)',
    durationMinutes: '60–90 Mins',
    cadenceTier: 'Bi-Weekly / Sprint',
    eventTitle: 'Sprint Iteration Review, Demo & Retrospective',
    primaryRoles: ['Scrum Master', 'Product Owner', 'TSM', 'Squad Members', 'Business Stakeholders'],
    metricsReviewed: ['OKR', 'KPI'],
    requiredInputs: [
      'Potentially Shippable Product Increment (Live Demo)',
      'Sprint Business Value Points Accepted vs Committed',
      'Sprint Velocity & Flow Efficiency charts',
      'Key Result Progress Delta reports'
    ],
    keyAgendaItems: [
      '1. Validate accepted User Stories & delivered Business Value points against Sprint Goal.',
      '2. Update OKR Key Result progress confidence scores based on delivered sprint increment.',
      '3. Conduct Sprint Retrospective: Analyze flow bottlenecks & commit to 1-2 retro action items.'
    ],
    outputsAndArtifacts: 'Retro Action Items Backlog, validated Velocity Trend, updated Definition of Done (DoD).',
    escalationSLA: 'SM to RTE escalation during bi-weekly ART Sync if sprint commitment rollover exceeds 20%.',
    areaFocusRules: {
      okrRule: 'OKR Focus: Calculate bi-weekly Key Result delta & update confidence score (0.0 to 1.0).',
      kpiRule: 'KPI Focus: Delivered Business Value Points, Velocity Stability, & Cycle Time Variance.'
    }
  },
  {
    id: 'gov_monthly',
    cadence: 'Monthly / PI Iteration (60 - 120 Minutes)',
    durationMinutes: '60–120 Mins',
    cadenceTier: 'Monthly / PI',
    eventTitle: 'ART Sync, System Demo & Dependency Radar',
    primaryRoles: ['Release Train Engineer (RTE)', 'Product Managers', 'System Architect', 'Business Owners'],
    metricsReviewed: ['OKR', 'KRI', 'KRA'],
    keyAgendaItems: [
      '1. Measure ART PI Predictability Measure across all 8 delivery squads (Target: 80%-100%).',
      '2. Inspect cross-squad component dependency staleness KRIs.',
      '3. Execute ART Integrated System Demo for Business Owners.'
    ],
    outputsAndArtifacts: 'Published ART System Demo recording, ROAMed Risk Log, Dependency Mitigation Plan.',
    escalationSLA: 'RTE to Transformation Leader escalation within 48 hours for un-ROAMed cross-train blockers.',
    areaFocusRules: {
      okrRule: 'OKR Focus: Evaluate ART PI Objective completion rate.',
      kriRule: 'KRI Focus: Cross-squad component dependency staleness > 2 sprints.',
      kraRule: 'KRA Focus: Validate RTE and Product Manager role charter alignment.'
    }
  },
  {
    id: 'gov_quarterly',
    cadence: 'Quarterly (QBR & PI Planning - 1-2 Full Days)',
    durationMinutes: '1–2 Full Days',
    cadenceTier: 'Quarterly (QBR)',
    eventTitle: 'Quarterly Business Review (QBR) & PI Planning Event',
    primaryRoles: ['AI Leader / CAIO', 'Agile Transformation Leader', 'Product Managers', 'RTEs', 'C-Suite'],
    metricsReviewed: ['OKR', 'KRA', 'KRI', 'KPI'],
    keyAgendaItems: [
      '1. Grade Strategic QBR OKRs using Google 0.0 to 1.0 scoring model (Target sweet spot: 0.6-0.7).',
      '2. Adjust Value Stream funding and resourcing based on Market ROI KPIs.',
      '3. Conduct 2-day PI Planning: Align upcoming PI Objectives with C-Suite Strategic Themes.'
    ],
    outputsAndArtifacts: 'Scored Strategic OKR Deck, committed PI Objectives, Program Board, Value Stream Funding.',
    escalationSLA: 'Transformation Leader to C-Suite escalation during QBR for underperforming Value Streams.',
    areaFocusRules: {
      okrRule: 'OKR Focus: Formal grading of quarterly stretch OKRs on 0.0 to 1.0 scale.',
      kraRule: 'KRA Focus: Audit enterprise AI adoption & flow efficiency KRAs across business units.',
      kpiRule: 'KPI Focus: Executive Financial ROI, Customer Net Retention Rate (NRR), & Flow Velocity.'
    }
  },
  {
    id: 'gov_annual',
    cadence: 'Annual Strategic Retreat (2-3 Days)',
    durationMinutes: '2–3 Days',
    cadenceTier: 'Annual',
    eventTitle: 'Annual Executive Strategy & Role Charter Governance',
    primaryRoles: ['Chief Executive Officer', 'CTO', 'CXO', 'Head of Transformation', 'Board of Directors'],
    metricsReviewed: ['KRA', 'OKR', 'KRI'],
    keyAgendaItems: [
      '1. Formulate 3-year Corporate Strategic Themes & Annual Strategic OKRs.',
      '2. Audit Enterprise Role Accountability Charters (KRAs) across leadership positions.',
      '3. Review Enterprise Risk Appetite and regulatory compliance KRIs (Basel III, EU AI Act).'
    ],
    outputsAndArtifacts: 'Annual Enterprise Strategy Map, Updated Role KRA Charters, Board Risk Report.',
    escalationSLA: 'Board of Directors review and approval for annual capital allocation strategy.',
    areaFocusRules: {
      kraRule: 'KRA Focus: Complete audit and restructuring of leadership role domain charters.',
      okrRule: 'OKR Focus: Setting 1-year aspirational enterprise stretch Objectives.'
    }
  }
];

export const INITIAL_METRICS_DATABASE: MetricItem[] = [
  // ==================== 1. AI LEADER / CAIO ====================
  {
    id: 'met_ai_1',
    category: 'OKR',
    role: 'ai-leader',
    title: 'Scale Enterprise GenAI Copilot Adoption Across All Delivery Squads',
    summary: 'Drive AI-assisted engineering to boost developer throughput and code quality without compromising security.',
    whyItMatters: 'GenAI is a core multiplier for software velocity and operational efficiency in modern digital enterprises.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'AI Leader / Chief AI Officer',
    antiPatternToAvoid: 'Measuring raw code generation lines instead of net developer velocity and accepted code accuracy.',
    keyResults: [
      { id: 'kr1', description: 'Increase daily active copilot usage across engineering from 45% to 85%', current: 78, target: 85, unit: '%', status: 'on-track' },
      { id: 'kr2', description: 'Reduce mean time to initial code commit for new user stories from 14h to 4h', current: 5.2, target: 4.0, unit: 'hours', status: 'on-track' },
      { id: 'kr3', description: 'Maintain zero high-severity AI compliance or data leakage incidents', current: 0, target: 0, unit: 'incidents', status: 'achieved' }
    ]
  },
  {
    id: 'met_ai_2',
    category: 'KPI',
    role: 'ai-leader',
    title: 'Enterprise LLM Model Performance & Latency Telemetry',
    summary: 'Monitor response time, inference accuracy, and token utilization across enterprise AI endpoints.',
    whyItMatters: 'Sub-second model response times ensure high developer satisfaction and seamless UI workflows.',
    governanceCadence: 'Daily Standup',
    ownerRole: 'AI Leader & Infrastructure Team',
    antiPatternToAvoid: 'Optimizing model latency by degrading answer quality or context window safety.',
    kpiDetails: {
      metricName: 'LLM P95 Inference Latency',
      currentVal: '185 ms',
      targetVal: '< 250 ms',
      trend: 'down',
      health: 'healthy',
      benchmark: 'Industry Best Practice: < 300 ms for interactive assistant prompts'
    }
  },
  {
    id: 'met_ai_3',
    category: 'KRA',
    role: 'ai-leader',
    title: 'Enterprise AI Governance, Safety & Ethical AI Leadership',
    summary: 'Responsible AI charter enforcement, LLM safety guardrails, vendor evaluation, and AI cost optimization.',
    whyItMatters: 'Ensures the company stays compliant with global AI regulations (EU AI Act, ISO 42001) while scaling innovations.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Chief AI Officer',
    antiPatternToAvoid: 'Treating AI governance as a static approval gate that slows down squad innovation.',
    kraDetails: {
      coreDomain: 'AI Strategy, Governance & ML Infrastructure',
      accountabilityScope: 'Enterprise-wide AI deployment, model training safety, GPU cost stewardship, and AI talent enablement.',
      keyDeliverables: [
        'Automated PII scrubbing filter on all LLM inputs',
        'Enterprise AI Procurement & Open Source Model Policy',
        'AI ROI dashboard linking GPU spend to delivered feature business value'
      ],
      ownershipLevel: 'Executive Leadership (C-Suite)'
    }
  },
  {
    id: 'met_ai_4',
    category: 'KRI',
    role: 'ai-leader',
    title: 'LLM Model Hallucination & Prompt Injection Drift Threshold',
    summary: 'Early warning radar monitoring hallucination rate in production AI features and un-sanitized prompt breaches.',
    whyItMatters: 'Unchecked model hallucinations can lead to incorrect business decisions and customer trust erosion.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'AI Security Lead & AI Leader',
    antiPatternToAvoid: 'Relying solely on user complaints rather than automated synthetic evaluation test suites.',
    kriDetails: {
      riskFactor: 'GenAI Answer Toxicity & Hallucination Rate',
      triggerThreshold: '> 1.5% failed synthetic test responses',
      currentLevel: '0.8%',
      severity: 'medium',
      mitigationPlan: 'Automatic fallback to verified RAG vector database & strict system prompt guardrail reinforcement.',
      impactArea: 'Customer Trust & Enterprise Compliance'
    }
  },

  // ==================== 2. AGILE TRANSFORMATION LEADER ====================
  {
    id: 'met_trans_1',
    category: 'OKR',
    role: 'transformation-leader',
    title: 'Transition Enterprise Delivery Model to Outcome-Driven Value Streams',
    summary: 'Shift organizational mindset from feature-factory output to customer-centric value stream delivery.',
    whyItMatters: 'Unlocks faster time-to-market and eliminates enterprise waste across cross-functional silos.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'Agile Transformation Leader',
    antiPatternToAvoid: 'Enforcing rigid framework dogma without adapting to team domain context.',
    keyResults: [
      { id: 'tr_kr1', description: 'Achieve 85%+ Flow Efficiency across all enterprise ARTs (Time spent in active work vs wait time)', current: 72, target: 85, unit: '%', status: 'at-risk' },
      { id: 'tr_kr2', description: 'Reduce enterprise Lead Time from customer request to production release by 50%', current: 18, target: 12, unit: 'days', status: 'on-track' },
      { id: 'tr_kr3', description: '100% of executive leaders actively participating in quarterly VSM reviews', current: 100, target: 100, unit: '%', status: 'achieved' }
    ]
  },
  {
    id: 'met_trans_2',
    category: 'KPI',
    role: 'transformation-leader',
    title: 'Enterprise Flow Velocity & Flow Predictability Index',
    summary: 'Track total completed backlog items (Features/Stories) per iteration across all Value Streams.',
    whyItMatters: 'Stabilizes delivery throughput and provides realistic data for long-range enterprise forecasting.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'Transformation Lead & RTE Office',
    antiPatternToAvoid: 'Comparing velocity numbers between different teams to rank performance.',
    kpiDetails: {
      metricName: 'Enterprise Flow Velocity Index',
      currentVal: '420 Story Points / Sprint',
      targetVal: '> 400 Story Points',
      trend: 'up',
      health: 'healthy',
      benchmark: 'Coeff of Variation (Std Dev / Mean Velocity) < 15%'
    }
  },
  {
    id: 'met_trans_3',
    category: 'KRA',
    role: 'transformation-leader',
    title: 'Enterprise Coaching Strategy, Scaling Framework & Culture Management',
    summary: 'Lead the agile transformation strategy, enterprise agile coaching roster, tooling standardization, and culture.',
    whyItMatters: 'Sustains continuous learning and prevents teams from sliding back into waterfall habits.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Head of Agile Practice',
    antiPatternToAvoid: 'Focusing on superficial agile terminology rather than real behavioral culture change.',
    kraDetails: {
      coreDomain: 'Agile Operating Model, Coaching Excellence & Change Enablement',
      accountabilityScope: 'Agile maturity across 40+ squads, executive coaching, role competency frameworks, VSM alignment.',
      keyDeliverables: [
        'Enterprise Agile Maturity Assessment Matrix v3.0',
        'Community of Practice (CoP) charter for SMs, POs, and RTEs',
        'Executive Lean-Agile Leadership workshop series'
      ],
      ownershipLevel: 'VP of Agile Transformation'
    }
  },
  {
    id: 'met_trans_4',
    category: 'KRI',
    role: 'transformation-leader',
    title: 'Value Stream Impediment Staleness & Unplanned Work Spike KRI',
    summary: 'Monitors aged impediments (> 10 days unresolved at executive level) and unplanned emergency scope creep.',
    whyItMatters: 'Unresolved systemic impediments cause morale drop and severe PI goal dropouts.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'Agile Transformation Leader',
    antiPatternToAvoid: 'Sweeping systemic organizational blockers under the rug to make status reports look green.',
    kriDetails: {
      riskFactor: 'Systemic Blockers Aged > 14 Days',
      triggerThreshold: '> 3 active enterprise impediments',
      currentLevel: '1 impediment',
      severity: 'low',
      mitigationPlan: 'Immediate escalation to Executive Steering Committee during bi-weekly VSM synch.',
      impactArea: 'Enterprise Flow & Talent Retention'
    }
  },

  // ==================== 3. RELEASE TRAIN ENGINEER (RTE) ====================
  {
    id: 'met_rte_1',
    category: 'OKR',
    role: 'rte',
    title: 'Achieve High Predictability & Zero Critical Blockers across the Agile Release Train (ART)',
    summary: 'Ensure synchronized delivery across 8 squads during the 10-week Program Increment (PI).',
    whyItMatters: 'Delivering committed PI Objectives builds trust between business stakeholders and engineering teams.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'Release Train Engineer (RTE)',
    antiPatternToAvoid: 'Forcing teams to commit to 100% capacity without leaving buffer for unplanned maintenance.',
    keyResults: [
      { id: 'rte_kr1', description: 'Maintain ART PI Predictability Measure between 85% and 95%', current: 91, target: 90, unit: '%', status: 'on-track' },
      { id: 'rte_kr2', description: 'Resolve 100% of cross-team dependencies marked as high risk prior to Sprint 3', current: 85, target: 100, unit: '%', status: 'at-risk' },
      { id: 'rte_kr3', description: 'Conduct 100% of bi-weekly ART Syncs with active business owner participation', current: 100, target: 100, unit: '%', status: 'achieved' }
    ]
  },
  {
    id: 'met_rte_2',
    category: 'KPI',
    role: 'rte',
    title: 'ART PI Predictability Score & Cumulative Flow Metrics',
    summary: 'Measures total business value achieved versus planned across all committed PI Objectives.',
    whyItMatters: 'The gold-standard SAFe metric for gauging if an ART is delivering reliable value every iteration.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'RTE & Business Owners',
    antiPatternToAvoid: 'Changing objective point values mid-PI to artificially boost predictability scores.',
    kpiDetails: {
      metricName: 'ART Predictability Measure',
      currentVal: '91%',
      targetVal: '80% - 100%',
      trend: 'stable',
      health: 'healthy',
      benchmark: 'SAFe Benchmark Target: 80% to 100% achieved planned value'
    }
  },
  {
    id: 'met_rte_3',
    category: 'KRA',
    role: 'rte',
    title: 'PI Planning Facilitation, System Demo & ART Flow Governance',
    summary: 'Organizing PI Planning events, managing program risks (ROAM), driving Inspect & Adapt (I&A), and coaching SMs.',
    whyItMatters: 'The RTE acts as the chief scrum master for the train, orchestrating harmony among multiple squads.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'Release Train Engineer',
    antiPatternToAvoid: 'Acting as a traditional directive Project Manager rather than a servant leader.',
    kraDetails: {
      coreDomain: 'Agile Release Train Execution & Continuous Improvement',
      accountabilityScope: 'Facilitating PI Planning for 80+ team members, tracking cross-team feature progress, executing System Demos.',
      keyDeliverables: [
        'Fully ROAMed Program Risk Board for PI-2026.3',
        'Published ART System Demo video & release release notes',
        'Inspect & Adapt (I&A) problem-solving workshop retrospective action plan'
      ],
      ownershipLevel: 'Train Leadership (RTE)'
    }
  },
  {
    id: 'met_rte_4',
    category: 'KRI',
    role: 'rte',
    title: 'Cross-ART Dependency Staleness & Slippage KRI',
    summary: 'Flags dependencies between teams that have not been accepted or are blocked past target sprint.',
    whyItMatters: 'Unaddressed dependencies lead to cascading delays across the entire release train.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'RTE & Product Managers',
    antiPatternToAvoid: 'Waiting until the final sprint of a PI to test inter-team component integration.',
    kriDetails: {
      riskFactor: 'Unresolved Critical Dependencies > 2 Sprints',
      triggerThreshold: '> 2 delayed dependencies',
      currentLevel: '1 dependency',
      severity: 'medium',
      mitigationPlan: 'Trigger immediate RTE-to-RTE alignment meeting & re-assign dependency to dedicated spike squad.',
      impactArea: 'PI Commitment Reliability'
    }
  },

  // ==================== 4. TECHNICAL SCRUM MASTER (TSM) ====================
  {
    id: 'met_tsm_1',
    category: 'OKR',
    role: 'tsm',
    title: 'Eliminate Technical Debt & Achieve Continuous Deployment Resilience',
    summary: 'Upgrade core architecture, automate testing pipelines, and ensure sub-15-minute mean time to recovery.',
    whyItMatters: 'High engineering quality accelerates delivery speed and minimizes midnight production outages.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'Technical Scrum Master / Tech Lead',
    antiPatternToAvoid: 'Focusing purely on tech refactoring without aligning to business feature priorities.',
    keyResults: [
      { id: 'tsm_kr1', description: 'Increase automated unit and integration test coverage from 68% to 88%', current: 82, target: 88, unit: '%', status: 'on-track' },
      { id: 'tsm_kr2', description: 'Slash Mean Time To Recovery (MTTR) for P1 production incidents to under 15 mins', current: 11, target: 15, unit: 'minutes', status: 'achieved' },
      { id: 'tsm_kr3', description: 'Reduce deployment pipeline failure rate from 14% to under 3%', current: 4.1, target: 3.0, unit: '%', status: 'at-risk' }
    ]
  },
  {
    id: 'met_tsm_2',
    category: 'KPI',
    role: 'tsm',
    title: 'DORA Metrics: Deployment Frequency & Change Failure Rate',
    summary: 'Track four key DORA metrics (Deployment Frequency, Lead Time for Changes, MTTR, Change Failure Rate).',
    whyItMatters: 'Proven industry standard for measuring high-performing DevOps engineering teams.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'TSM & DevOps Engineers',
    antiPatternToAvoid: 'Deploying broken code frequently just to inflate deployment frequency metrics.',
    kpiDetails: {
      metricName: 'Change Failure Rate (CFR)',
      currentVal: '3.2%',
      targetVal: '< 5.0%',
      trend: 'down',
      health: 'healthy',
      benchmark: 'DORA Elite Performing Benchmark: < 5% Change Failure Rate'
    }
  },
  {
    id: 'met_tsm_3',
    category: 'KRA',
    role: 'tsm',
    title: 'Architecture Health, Code Review Rigor & Engineering Mentorship',
    summary: 'Code quality standards enforcement, CI/CD pipeline health, architectural spikes, and junior developer coaching.',
    whyItMatters: 'Balances agile sprint delivery with robust software engineering architecture.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Technical Scrum Master',
    antiPatternToAvoid: 'Becoming a bottleneck code reviewer by refusing to delegate code approvals.',
    kraDetails: {
      coreDomain: 'Technical Excellence, Code Architecture & Pipeline Automation',
      accountabilityScope: 'Squad tech stack, PR turnaround times, security vulnerability scanning, CI/CD build scripts.',
      keyDeliverables: [
        'Automated SonarQube quality gate in GitHub Actions',
        'Microservice decoupling architecture blueprint',
        'Weekly developer pair programming tech sessions'
      ],
      ownershipLevel: 'Senior Engineering Leadership'
    }
  },
  {
    id: 'met_tsm_4',
    category: 'KRI',
    role: 'tsm',
    title: 'Security Vulnerability Severity & Stale Pull Request Spike KRI',
    summary: 'Radar tracking unpatched CVE security vulnerabilities (> CVSS 7.0) and PRs open longer than 48 hours.',
    whyItMatters: 'Stale PRs lead to complex git merge conflicts and hidden production defects.',
    governanceCadence: 'Daily Standup',
    ownerRole: 'TSM & Security Lead',
    antiPatternToAvoid: 'Bypassing static security analysis to meet tight sprint deadlines.',
    kriDetails: {
      riskFactor: 'Unmerged PRs Aged > 48 Hours',
      triggerThreshold: '> 4 open stale PRs per squad',
      currentLevel: '1 PR',
      severity: 'low',
      mitigationPlan: 'Institute daily morning PR review power hour before starting new feature development.',
      impactArea: 'Code Base Stability & Security'
    }
  },

  // ==================== 5. SCRUM MASTER (SM) ====================
  {
    id: 'met_sm_1',
    category: 'OKR',
    role: 'sm',
    title: 'Cultivate a High-Trust, Self-Organizing Squad with Predictable Sprint Flow',
    summary: 'Foster psychological safety, eliminate squad impediments rapidly, and achieve stable sprint commitments.',
    whyItMatters: 'Empowered, psychologically safe teams deliver higher quality work and suffer far less burnout.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'Scrum Master',
    antiPatternToAvoid: 'Pushing teams to increase velocity numbers artificially rather than improving flow.',
    keyResults: [
      { id: 'sm_kr1', description: 'Improve squad Psychological Safety survey score from 3.9/5 to 4.7/5', current: 4.6, target: 4.7, unit: 'score', status: 'on-track' },
      { id: 'sm_kr2', description: 'Achieve 92%+ Sprint Goal Commitment completion rate over 6 consecutive sprints', current: 94, target: 92, unit: '%', status: 'achieved' },
      { id: 'sm_kr3', description: 'Close 100% of retrospective improvement action items within 2 sprints of creation', current: 88, target: 100, unit: '%', status: 'on-track' }
    ]
  },
  {
    id: 'met_sm_2',
    category: 'KPI',
    role: 'sm',
    title: 'Cycle Time Variance & Sprint Burndown Accuracy',
    summary: 'Track time elapsed from story "In Progress" to "Done", ensuring predictable task completion.',
    whyItMatters: 'Low cycle time variance indicates smooth flow without unexpected bottlenecks or scope spikes.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'Scrum Master',
    antiPatternToAvoid: 'Forcing burn-downs to look smooth by updating task hours manually at the last minute.',
    kpiDetails: {
      metricName: 'Average Story Cycle Time',
      currentVal: '3.4 Days',
      targetVal: '< 4.0 Days',
      trend: 'down',
      health: 'healthy',
      benchmark: 'Agile Standard: Story Cycle Time variance under 1.5 days'
    }
  },
  {
    id: 'met_sm_3',
    category: 'KRA',
    role: 'sm',
    title: 'Squad Facilitation, Impediment Removal & Agile Coaching',
    summary: 'Facilitating daily standups, planning, refinement, retrospectives, and removing team blockers.',
    whyItMatters: 'The Scrum Master is a servant leader who removes operational friction so developers can focus on code.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Scrum Master',
    antiPatternToAvoid: 'Acting as a scribe or administrative note-taker instead of an active agile coach.',
    kraDetails: {
      coreDomain: 'Agile Process Facilitation, Team Health & Impediment Removal',
      accountabilityScope: 'Daily Scrum, Sprint Planning, Retrospective engagement, Jira board maintenance, PO-Squad bridge.',
      keyDeliverables: [
        'Impediment Kanban Board updated daily',
        'Creative retrospective formats addressing team conflict resolution',
        'Squad Capacity Allocation calculator sheet'
      ],
      ownershipLevel: 'Team Practice Lead (SM)'
    }
  },
  {
    id: 'met_sm_4',
    category: 'KRI',
    role: 'sm',
    title: 'Sprint Rollover Rate & Team Burnout Index KRI',
    summary: 'Early warning radar tracking percentage of committed story points carried over to next sprint.',
    whyItMatters: 'High rollover (> 20%) signals over-commitment, poor story splitting, or hidden dependencies.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'Scrum Master',
    antiPatternToAvoid: 'Ignoring team fatigue signals during sprint planning sessions.',
    kriDetails: {
      riskFactor: 'Sprint Committed Points Rollover Rate',
      triggerThreshold: '> 20% carried over points',
      currentLevel: '8.5%',
      severity: 'low',
      mitigationPlan: 'Reduce upcoming sprint commitment by 15% and mandate smaller user story splitting (max 3 pts/story).',
      impactArea: 'Team Morale & Commitment Trust'
    }
  },

  // ==================== 6. PRODUCT MANAGER (PM) ====================
  {
    id: 'met_pm_1',
    category: 'OKR',
    role: 'pm',
    title: 'Maximize Product Value Realization & Drive User Growth in Target Enterprise Market',
    summary: 'Deliver killer product features prioritized by Weighted Shortest Job First (WSJF) to boost adoption.',
    whyItMatters: 'Ensures development resources focus on high-impact strategic features that drive customer ROI.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'Product Manager',
    antiPatternToAvoid: 'Prioritizing features based on loudest executive opinion (HIPPO) rather than data-driven WSJF.',
    keyResults: [
      { id: 'pm_kr1', description: 'Increase Monthly Active Users (MAU) on core workflow tools from 25k to 50k', current: 42, target: 50, unit: 'k users', status: 'on-track' },
      { id: 'pm_kr2', description: 'Achieve Net Promoter Score (NPS) of +65 across enterprise customer cohort', current: 68, target: 65, unit: 'NPS', status: 'achieved' },
      { id: 'pm_kr3', description: '100% of top-tier features delivered with validated customer telemetry metrics', current: 90, target: 100, unit: '%', status: 'on-track' }
    ]
  },
  {
    id: 'met_pm_2',
    category: 'KPI',
    role: 'pm',
    title: 'Feature Adoption Rate & Product Net Retention Rate (NRR)',
    summary: 'Track usage engagement of newly released features within 30 days of production launch.',
    whyItMatters: 'Validates whether built software actually solves real user problems and creates sticky retention.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'Product Manager & Analytics Lead',
    antiPatternToAvoid: 'Shipping features and never checking post-launch user analytics.',
    kpiDetails: {
      metricName: '30-Day Feature Adoption Rate',
      currentVal: '64%',
      targetVal: '> 60%',
      trend: 'up',
      health: 'healthy',
      benchmark: 'SaaS Industry Leader Benchmark: > 50% target feature adoption'
    }
  },
  {
    id: 'met_pm_3',
    category: 'KRA',
    role: 'pm',
    title: 'Product Vision, WSJF Backlog Prioritization & Stakeholder Alignment',
    summary: 'Crafting product vision, managing Program Backlog, conducting market research, and leading customer interviews.',
    whyItMatters: 'Translates strategic business objectives into actionable product roadmaps for release trains.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Product Manager',
    antiPatternToAvoid: 'Failing to communicate the "Why" behind feature priorities to delivery squads.',
    kraDetails: {
      coreDomain: 'Product Strategy, Value Stream Economics & Roadmap Governance',
      accountabilityScope: 'Program Backlog, WSJF scoring matrix, Epic vision briefs, customer feedback loops.',
      keyDeliverables: [
        'Quarterly Product Vision Roadmap 2026.Q4',
        'WSJF (Weighted Shortest Job First) Prioritization Matrix',
        'Customer Advisory Board (CAB) meeting insights report'
      ],
      ownershipLevel: 'Product Strategy Owner (PM)'
    }
  },
  {
    id: 'met_pm_4',
    category: 'KRI',
    role: 'pm',
    title: 'Program Backlog Refinement Deficit & Customer Churn Warning KRI',
    summary: 'Monitors available "Ready" features in the Program Backlog ahead of upcoming PI Planning.',
    whyItMatters: 'If backlog depth drops below 2 PIs of refined features, PI Planning becomes chaotic and low-quality.',
    governanceCadence: 'PI / Monthly',
    ownerRole: 'Product Manager',
    antiPatternToAvoid: 'Arriving at PI Planning with un-refined, hand-waving feature descriptions.',
    kriDetails: {
      riskFactor: 'Program Backlog Refinement Buffer',
      triggerThreshold: '< 2 PIs of estimated, prioritized features',
      currentLevel: '2.5 PIs ready',
      severity: 'low',
      mitigationPlan: 'Schedule weekly PM/PO refinement spikes to flesh out Epic acceptance criteria.',
      impactArea: 'PI Planning Readiness'
    }
  },

  // ==================== 7. PRODUCT OWNER (PO) ====================
  {
    id: 'met_po_1',
    category: 'OKR',
    role: 'po',
    title: 'Maximize Sprint Value Delivery & User Story Definition Clarity',
    summary: 'Ensure 100% of sprint user stories meet Definition of Ready (DoR) and achieve zero story rejections.',
    whyItMatters: 'Crystal-clear user stories eliminate dev ambiguity, rework, and wasted sprint capacity.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'Product Owner',
    antiPatternToAvoid: 'Writing vague acceptance criteria and expecting developers to guess user intent.',
    keyResults: [
      { id: 'po_kr1', description: '100% of backlog items in upcoming sprint meet Definition of Ready (DoR) 3 days prior', current: 95, target: 100, unit: '%', status: 'on-track' },
      { id: 'po_kr2', description: 'Reduce user story rejection rate at Sprint Review demo to under 2%', current: 1.2, target: 2.0, unit: '%', status: 'achieved' },
      { id: 'po_kr3', description: 'Maintain 2 sprints worth of fully refined, prioritized backlog items', current: 2.1, target: 2.0, unit: 'sprints', status: 'achieved' }
    ]
  },
  {
    id: 'met_po_2',
    category: 'KPI',
    role: 'po',
    title: 'Delivered Business Value per Sprint & Backlog Health Index',
    summary: 'Sum of assigned business value points delivered by squad upon sprint review acceptance.',
    whyItMatters: 'Measures net business outcomes achieved rather than raw velocity numbers.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'Product Owner',
    antiPatternToAvoid: 'Accepting half-done stories at the end of a sprint to artificially boost value numbers.',
    kpiDetails: {
      metricName: 'Delivered Sprint Business Value',
      currentVal: '88 Points / Sprint',
      targetVal: '> 80 Points',
      trend: 'up',
      health: 'healthy',
      benchmark: 'Target: > 90% of planned sprint business value accepted'
    }
  },
  {
    id: 'met_po_3',
    category: 'KRA',
    role: 'po',
    title: 'Team Backlog Management, Acceptance Criteria & Daily Squad Alignment',
    summary: 'Decomposing Epics into User Stories, writing Gherkin Given-When-Then criteria, accepting stories daily.',
    whyItMatters: 'The Product Owner is the voice of the customer inside the delivery squad.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Product Owner',
    antiPatternToAvoid: 'Being unavailable during the sprint when developers need clarification on acceptance criteria.',
    kraDetails: {
      coreDomain: 'Sprint Backlog Ownership, User Story Crafting & Value Validation',
      accountabilityScope: 'Jira team backlog prioritization, story refinement workshops, accepting done increments daily.',
      keyDeliverables: [
        'Sprint Backlog with prioritized stories & business value points',
        'Gherkin acceptance criteria for all user stories',
        'Sprint Review demo script and stakeholder sign-off notes'
      ],
      ownershipLevel: 'Squad Product Lead (PO)'
    }
  },
  {
    id: 'met_po_4',
    category: 'KRI',
    role: 'po',
    title: 'Mid-Sprint Scope Creep & Late Acceptance Delay KRI',
    summary: 'Monitors story points added or swapped after Sprint Planning has locked.',
    whyItMatters: 'Uncontrolled scope churn mid-sprint destabilizes squad focus and leads to missed sprint goals.',
    governanceCadence: 'Daily Standup',
    ownerRole: 'Product Owner & Scrum Master',
    antiPatternToAvoid: 'Allowing stakeholders to bypass the PO and inject work directly into developers\' sprint board.',
    kriDetails: {
      riskFactor: 'Mid-Sprint Unplanned Scope Creep',
      triggerThreshold: '> 10% change in committed sprint points',
      currentLevel: '4.2%',
      severity: 'low',
      mitigationPlan: 'Enforce strict change trade-off rule: if 1 new story enters mid-sprint, equal point story must exit.',
      impactArea: 'Sprint Commitment Predictability'
    }
  },

  // ==================== 8. SQUAD / ART DELIVERY TEAM ====================
  {
    id: 'met_sq_1',
    category: 'OKR',
    role: 'squad',
    title: 'Build Resilient, Modular Features with Zero High-Severity Escaped Defects',
    summary: 'Commitment to software craftsmanship, continuous integration, and total adherence to Definition of Done.',
    whyItMatters: 'High squad craftsmanship builds stable applications and prevents costly production patch hotfixes.',
    governanceCadence: 'Quarterly (QBR)',
    ownerRole: 'Squad Developers & QA Engineers',
    antiPatternToAvoid: 'Skipping unit test creation to rush features past sprint demo boundaries.',
    keyResults: [
      { id: 'sq_kr1', description: 'Zero P1/P2 escaped defects reaching production over 6 consecutive sprints', current: 0, target: 0, unit: 'defects', status: 'achieved' },
      { id: 'sq_kr2', description: '100% adherence to squad Definition of Done (DoD) before marking stories complete', current: 98, target: 100, unit: '%', status: 'on-track' },
      { id: 'sq_kr3', description: 'Slash pull request peer review turnaround time to under 12 hours', current: 9.5, target: 12.0, unit: 'hours', status: 'achieved' }
    ]
  },
  {
    id: 'met_sq_2',
    category: 'KPI',
    role: 'squad',
    title: 'Escaped Defect Density & Code Churn Index',
    summary: 'Count of production defects reported per 1,000 lines of delivered code or story point.',
    whyItMatters: 'A low defect density indicates strong developer testing and robust peer code reviews.',
    governanceCadence: 'Sprint / Iteration',
    ownerRole: 'Squad Quality Engineers & Developers',
    antiPatternToAvoid: 'Hiding defects as "enhancements" to keep defect metrics artificially low.',
    kpiDetails: {
      metricName: 'Production Defect Density',
      currentVal: '0.12 Defects / Story Point',
      targetVal: '< 0.25 Defects',
      trend: 'down',
      health: 'healthy',
      benchmark: 'High Quality Industry Standard: < 0.3 defects per story point'
    }
  },
  {
    id: 'met_sq_3',
    category: 'KRA',
    role: 'squad',
    title: 'Collective Code Ownership, Pair Programming & Sprint Goal Execution',
    summary: 'Cross-functional collaboration, test automation, swarm solving on impediments, and code maintenance.',
    whyItMatters: 'Eliminates single points of failure (bus factor) where only 1 developer knows a critical system component.',
    governanceCadence: 'Annual Strategic',
    ownerRole: 'Cross-Functional Squad Members',
    antiPatternToAvoid: 'Working in individual developer silos without pair programming or knowledge sharing.',
    kraDetails: {
      coreDomain: 'Software Engineering Execution & Quality Assurance',
      accountabilityScope: 'Writing clean code, unit/integration testing, peer reviews, updating Jira tasks daily, sprint goal.',
      keyDeliverables: [
        'Potentially shippable software increment at sprint end',
        'Automated Playwright/Cypress end-to-end regression suites',
        'Updated API documentation & Swagger contracts'
      ],
      ownershipLevel: 'Squad Developer Collective'
    }
  },
  {
    id: 'met_sq_4',
    category: 'KRI',
    role: 'squad',
    title: 'CI/CD Build Failure Rate & Work-In-Progress (WIP) Limit Violation KRI',
    summary: 'Monitors broken main branch builds and excessive open work items per developer.',
    whyItMatters: 'High WIP creates context switching fatigue and delays code integration.',
    governanceCadence: 'Daily Standup',
    ownerRole: 'Squad Developers',
    antiPatternToAvoid: 'Leaving main branch broken overnight without fixing it immediately.',
    kriDetails: {
      riskFactor: 'WIP Limit Violation (> 2 active stories per dev)',
      triggerThreshold: '> 3 squad WIP limit breaches',
      currentLevel: '1 breach',
      severity: 'low',
      mitigationPlan: 'Enforce "Stop the Line" rule: no developer picks up new story until current blocked story is swarmed and closed.',
      impactArea: 'Sprint Flow & Delivery Speed'
    }
  }
];
