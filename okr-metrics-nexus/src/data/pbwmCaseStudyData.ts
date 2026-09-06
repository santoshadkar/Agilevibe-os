export interface PBWMExecutiveBriefing {
  bankName: string;
  globalHeadquarters: string;
  totalAUM: string;
  activeHNWClients: string;
  agileReleaseTrains: string;
  deliverySquads: string;
  businessOverview: string;
  coreBusinessChallenges: {
    challengeTitle: string;
    impact: string;
  }[];
  transformationVision: string;
  cascadingStoryWalkthrough: string[];
}

export interface PBWMCascadingNode {
  levelId: 'ceo' | 'cto' | 'cxo' | 'rte' | 'tsm' | 'sm-po' | 'squad';
  levelName: string;
  roleTitle: string;
  incumbentName: string;
  strategicFocus: string;
  
  okr: {
    objective: string;
    keyResults: { description: string; target: string; current: string; progressPercent: number }[];
  };
  kpi: {
    name: string;
    currentVal: string;
    targetVal: string;
    trend: 'up' | 'down' | 'stable';
  };
  kra: {
    coreDomain: string;
    keyAccountability: string;
  };
  kri: {
    riskFactor: string;
    threshold?: string;
    triggerThreshold?: string;
    currentLevel?: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    mitigation: string;
  };

  parentAlignment?: string;
}

export const PBWM_EXECUTIVE_BRIEFING: PBWMExecutiveBriefing = {
  bankName: 'Global Horizon Private Bank & Wealth Management (PBWM)',
  globalHeadquarters: 'London, UK (Hubs in Singapore, New York, Zurich)',
  totalAUM: '$248.5 Billion USD',
  activeHNWClients: '142,000 High-Net-Worth & Ultra-HNW Clients',
  agileReleaseTrains: '8 Scaled Wealth ARTs',
  deliverySquads: '65 Cross-Functional Engineering Squads',
  businessOverview: `
    Global Horizon PBWM is a tier-1 global private wealth bank providing bespoke portfolio management, tax advisory, structured lending, and algorithmic asset allocation to Ultra High Net Worth (UHNW) families and institutional private clients. 
    Operating across North America, Europe, and Asia-Pacific, the bank is undergoing a major digital transformation to transition from traditional human-only advisor models into an AI-Augmented Hybrid Private Banking Platform.
  `,
  coreBusinessChallenges: [
    {
      challengeTitle: '1. Legacy Core Banking Latency Bottlenecks',
      impact: 'Portfolio valuation engines required 850ms to calculate multi-currency yield risks, leading to client dissatisfaction during high-volatility market events.'
    },
    {
      challengeTitle: '2. Wealth Advisor Operational Workload',
      impact: 'Private Wealth Advisors spent 5 hours daily manually assembling rebalancing spreadsheets, limiting time spent building client relationships.'
    },
    {
      challengeTitle: '3. Agile & Engineering Silos',
      impact: 'Engineering squads delivered software features in isolation without alignment to top-level C-Suite Assets Under Management (AUM) growth targets.'
    }
  ],
  transformationVision: `
    To dominate the digital wealth management era, the Board of Directors commissioned project "Nexus 2027"—an enterprise-wide transformation aligning 65 delivery squads across 8 Agile Release Trains (ARTs) using a unified OKR, KPI, KRA, and KRI cascading architecture.
  `,
  cascadingStoryWalkthrough: [
    'Tier 1 (CEO): Sets Enterprise Theme -> Expand Net AUM by +$15.0B & Launch AI Advisor.',
    'Tier 2 (CTO): Translates CEO Vision to Tech Blueprint -> Decouple Legacy Core, Achieve 99.99% Uptime & Sub-120ms Latency.',
    'Tier 3 (CXO): Translates Tech Capabilities to Wealth Product -> Achieve +72 Client NPS & Automate 80% Portfolio Rebalancing.',
    'Tier 4 (RTE): Translates Product Vision to ART Commitments -> Deliver 94% ART PI Predictability Measure across 8 Squads.',
    'Tier 5 (TSM): Translates ART Objectives to Engineering Rigor -> Achieve DORA Elite Status, Zero CVSS > 7.0 Vulnerabilities & Sub-10m MTTR.',
    'Tier 6 (SM/PO): Translates Engineering Standards to Sprint Backlogs -> Maintain 100% Backlog Definition of Ready (DoR) & Sprint Goal Commitment.',
    'Tier 7 (Squad): Executes Sprint Backlog -> Deliver Defect-Free Microservices with 100% Definition of Done (DoD) Adherence.'
  ]
};

export const PBWM_CASE_STUDY_METRICS: PBWMCascadingNode[] = [
  {
    levelId: 'ceo',
    levelName: 'Tier 1: Enterprise C-Suite (Executive Vision)',
    roleTitle: 'Chief Executive Officer (CEO)',
    incumbentName: 'Global Horizon Private Bank & Wealth Management (PBWM)',
    strategicFocus: 'Global AUM Expansion, GenAI Wealth Management & Sustainable Returns',
    okr: {
      objective: 'Position PBWM as the Premier Digital-First Wealth Management Bank globally',
      keyResults: [
        { description: 'Expand Net New Assets Under Management (AUM) by +$15.0 Billion across HNW clients', target: '+$15.0B', current: '+$11.8B', progressPercent: 78.6 },
        { description: 'Onboard 40% of Private Wealth clients to AI Automated Advisory Workflows', target: '40%', current: '32%', progressPercent: 80.0 },
        { description: 'Achieve Return on Tangible Equity (ROTE) of 18.5%', target: '18.5%', current: '17.8%', progressPercent: 96.2 }
      ]
    },
    kpi: {
      name: 'Global Assets Under Management (AUM)',
      currentVal: '$248.5 Billion',
      targetVal: '$255.0 Billion',
      trend: 'up'
    },
    kra: {
      coreDomain: 'Global Enterprise Strategy & Shareholder Value Creation',
      keyAccountability: 'Ultimate corporate governance, capital allocation, board reporting, and market capitalization expansion.'
    },
    kri: {
      riskFactor: 'Systemic Financial Regulatory Capital Breaches & Reputation Erosion',
      threshold: 'CET1 Ratio < 13.0%',
      severity: 'critical',
      mitigation: 'Immediate capital reallocation & liquidity buffer release per Basel III guidelines.'
    }
  },
  {
    levelId: 'cto',
    levelName: 'Tier 2: Executive Technology (Infrastructure & Platform)',
    roleTitle: 'Chief Technology Officer (CTO - Private Banking Tech)',
    incumbentName: 'Technology & Cloud Architecture Group',
    strategicFocus: 'Core Banking Cloud Modernization, 99.99% Availability & Microservice Decoupling',
    parentAlignment: 'Derived from CEO OKR: Digital-First Wealth Bank & AI Advisory Scale',
    okr: {
      objective: 'Build High-Speed, Resilient Cloud Microservices Infrastructure for PBWM Digital Products',
      keyResults: [
        { description: 'Migrate 85% of legacy Wealth Trading engines to Multi-Cloud Kubernetes clusters', target: '85%', current: '74%', progressPercent: 87.0 },
        { description: 'Slash sub-second Portfolio Valuation API latency from 850ms to < 120ms P99', target: '< 120ms', current: '145ms', progressPercent: 82.7 },
        { description: 'Achieve 99.99% High Availability across PBWM Trading & Portfolio Portals', target: '99.99%', current: '99.97%', progressPercent: 98.0 }
      ]
    },
    kpi: {
      name: 'Portfolio Engine P99 Latency & System Availability',
      currentVal: '145 ms (99.97% Uptime)',
      targetVal: '< 120 ms (99.99% Uptime)',
      trend: 'down'
    },
    kra: {
      coreDomain: 'Enterprise Cloud Architecture, Engineering Governance & Cloud Spend',
      keyAccountability: 'Technology strategy, cyber-resilience framework, API gateway standards, and tech debt reduction.'
    },
    kri: {
      riskFactor: 'Unplanned Core Trading Downtime & Cloud Cost Overrun Spike',
      threshold: 'Unplanned Outage > 5 mins per quarter or Budget > 115%',
      severity: 'high',
      mitigation: 'Automated multi-region failover triggers & active cloud cost optimizer bot.'
    }
  },
  {
    levelId: 'cxo',
    levelName: 'Tier 3: Product Strategy & Wealth Experience (Business Unit)',
    roleTitle: 'Chief Wealth Officer (CWO) / Head of PBWM Product',
    incumbentName: 'Digital Wealth & Client Experience Division',
    strategicFocus: 'Hyper-Personalized Wealth Portfolios, Advisory Mobile App & Client Delight',
    parentAlignment: 'Derived from CEO OKR (AUM Growth) & CTO OKR (Cloud Speed)',
    okr: {
      objective: 'Launch Next-Gen AI Wealth Advisory Engine & Elevate HNW Client Engagement',
      keyResults: [
        { description: 'Achieve Net Promoter Score (NPS) of +72 among High-Net-Worth clients', target: '+72', current: '+68', progressPercent: 94.4 },
        { description: 'Increase daily active wealth portfolio mobile logins from 120k to 300k', target: '300k', current: '265k', progressPercent: 88.3 },
        { description: 'Automate 80% of routine client portfolio rebalancing recommendations via GenAI', target: '80%', current: '71%', progressPercent: 88.7 }
      ]
    },
    kpi: {
      name: 'Client Digital Engagement Rate & Portfolio Rebalance Rate',
      currentVal: '71% Automated',
      targetVal: '80% Automated',
      trend: 'up'
    },
    kra: {
      coreDomain: 'Wealth Product Strategy, UX Design & Advisory Product Roadmap',
      keyAccountability: 'Product roadmap prioritization, client retention analytics, wealth advisor tooling enablement.'
    },
    kri: {
      riskFactor: 'HNW Client Churn Rate Spike & Advisor Workload Bottleneck',
      threshold: 'Monthly Churn Rate > 1.2%',
      severity: 'medium',
      mitigation: 'Trigger VIP retention team outreach & accelerate automated AI advisory features.'
    }
  },
  {
    levelId: 'rte',
    levelName: 'Tier 4: Scaled Agile Release Train (ART Delivery)',
    roleTitle: 'Release Train Engineer (RTE - Wealth ART)',
    incumbentName: 'PBWM Advisory Agile Release Train (8 Squads)',
    strategicFocus: 'ART Synchronization, PI Predictability, Cross-Team Dependencies & ROAM Risks',
    parentAlignment: 'Derived from CXO Product OKR (AI Advisory Launch & App Engagement)',
    okr: {
      objective: 'Deliver 100% of Committed PI Objectives for PBWM AI Advisory Capabilities with Zero Blockers',
      keyResults: [
        { description: 'Maintain Wealth ART PI Predictability Measure between 90% and 95%', target: '92%', current: '94%', progressPercent: 100.0 },
        { description: 'Eliminate 100% of cross-squad dependencies prior to Sprint 3 of the PI', target: '100%', current: '88%', progressPercent: 88.0 },
        { description: 'Achieve 85%+ ART Flow Efficiency (Active development time vs wait time)', target: '85%', current: '79%', progressPercent: 92.9 }
      ]
    },
    kpi: {
      name: 'Wealth ART PI Predictability Measure',
      currentVal: '94%',
      targetVal: '90% - 95%',
      trend: 'stable'
    },
    kra: {
      coreDomain: 'Agile Release Train Facilitation, PI Planning & Dependency Resolution',
      keyAccountability: 'Facilitating PI planning for 85+ developers, managing ROAM risk log, driving System Demos.'
    },
    kri: {
      riskFactor: 'Cross-Squad Component Dependency Slippage > 2 Sprints',
      threshold: '> 2 unresolved dependencies',
      severity: 'medium',
      mitigation: 'Reassign dependency to dedicated integration spike squad during ART sync.'
    }
  },
  {
    levelId: 'tsm',
    levelName: 'Tier 5: Engineering Leadership (Tech Lead / TSM)',
    roleTitle: 'Technical Scrum Master (TSM - Wealth Microservices)',
    incumbentName: 'PBWM Engineering Lead',
    strategicFocus: 'Engineering Excellence, DORA DevOps Metrics, Security Vulnerability Scans & MTTR',
    parentAlignment: 'Derived from CTO OKR (API Latency & Uptime) & RTE ART Objectives',
    okr: {
      objective: 'Achieve DORA Elite Performance Status with Zero Vulnerabilities on PBWM Services',
      keyResults: [
        { description: 'Increase automated API integration test coverage from 72% to 90%', target: '90%', current: '86%', progressPercent: 95.5 },
        { description: 'Slash Mean Time To Recovery (MTTR) for trading engine incidents to < 10 mins', target: '< 10 mins', current: '8 mins', progressPercent: 100.0 },
        { description: 'Achieve zero unpatched CVSS > 7.0 security vulnerabilities in production', target: '0', current: '0', progressPercent: 100.0 }
      ]
    },
    kpi: {
      name: 'DORA Change Failure Rate (CFR) & Deployment Frequency',
      currentVal: '2.1% CFR (Daily Deploys)',
      targetVal: '< 3.0% CFR',
      trend: 'down'
    },
    kra: {
      coreDomain: 'Code Quality Governance, CI/CD Pipeline & Tech Debt Refactoring',
      keyAccountability: 'Architecture reviews, static SonarQube analysis, automated deployment scripts, junior dev coaching.'
    },
    kri: {
      riskFactor: 'Unmerged Pull Request Staleness > 48 Hours & Build Failure Spike',
      threshold: '> 3 stale PRs or Build Failure Rate > 10%',
      severity: 'low',
      mitigation: 'Institute daily morning PR review power hour & fix main branch broken build immediately.'
    }
  },
  {
    levelId: 'sm-po',
    levelName: 'Tier 6: Squad Facilitation & Product Ownership',
    roleTitle: 'Scrum Master (SM) & Product Owner (PO) Partnership',
    incumbentName: 'AI Wealth Advisory Squad Leads',
    strategicFocus: 'Sprint Goal Commitment, Backlog DoR/DoD Adherence & Team Health',
    parentAlignment: 'Derived from RTE Objectives & TSM Technical Excellence OKR',
    okr: {
      objective: 'Maximize Sprint Value Delivery & Maintain 100% Definition of Ready (DoR) Backlog',
      keyResults: [
        { description: '100% of upcoming sprint backlog stories meet DoR with complete Gherkin acceptance criteria', target: '100%', current: '96%', progressPercent: 96.0 },
        { description: 'Achieve 95%+ Sprint Commitment Reliability over 6 consecutive iterations', target: '95%', current: '94%', progressPercent: 98.9 },
        { description: 'Improve squad Psychological Safety survey score to 4.8 / 5.0', target: '4.8', current: '4.7', progressPercent: 97.9 }
      ]
    },
    kpi: {
      name: 'Accepted Business Value Points per Sprint & Cycle Time',
      currentVal: '92 Points / Sprint (3.2 Days Cycle Time)',
      targetVal: '> 85 Points (< 4.0 Days Cycle Time)',
      trend: 'up'
    },
    kra: {
      coreDomain: 'Sprint Backlog Ownership, Ceremony Facilitation & Impediment Removal',
      keyAccountability: 'Sprint backlog refinement, writing user stories, retrospective action tracking, daily blocker clearing.'
    },
    kri: {
      riskFactor: 'Mid-Sprint Scope Creep & Sprint Point Rollover > 15%',
      threshold: '> 15% carried over points',
      severity: 'low',
      mitigation: 'Apply 1-in-1-out scope swap policy and mandate smaller story point splitting.'
    }
  },
  {
    levelId: 'squad',
    levelName: 'Tier 7: Individual Team & Developer Execution',
    roleTitle: 'Squad Software Engineers, QA Automation & Data Scientists',
    incumbentName: 'Wealth Microservices & GenAI Feature Squad',
    strategicFocus: 'Defect-Free Code Increment, DoD Adherence & Peer Code Reviews',
    parentAlignment: 'Derived from SM/PO Sprint Goals & TSM Engineering Excellence',
    okr: {
      objective: 'Deliver High-Quality, Resilient Portfolio Rebalance Microservices with Zero Escaped Bugs',
      keyResults: [
        { description: 'Zero P1/P2 escaped production defects across 6 consecutive sprint releases', target: '0', current: '0', progressPercent: 100.0 },
        { description: '100% compliance with squad Definition of Done (DoD) prior to story acceptance', target: '100%', current: '100%', progressPercent: 100.0 },
        { description: 'Slash peer PR review turnaround time to under 8 hours', target: '< 8h', current: '6.5h', progressPercent: 100.0 }
      ]
    },
    kpi: {
      name: 'Escaped Defect Density per Story Point',
      currentVal: '0.08 Defects / Point',
      targetVal: '< 0.20 Defects / Point',
      trend: 'down'
    },
    kra: {
      coreDomain: 'Software Craftsmanship, Pair Programming & Test Automation',
      keyAccountability: 'Writing clean TypeScript/Go microservices, Playwright E2E tests, daily Jira task updates.'
    },
    kri: {
      riskFactor: 'Work-In-Progress (WIP) Limit Violations > 2 Stories per Developer',
      threshold: '> 2 WIP violations',
      severity: 'low',
      mitigation: 'Stop-the-Line rule: developer swarms on existing blocked PR before taking new task.'
    }
  }
];
