import type { AIToolPrompt, UserRole } from '../types';

export const SM_12_AI_TOOLS: AIToolPrompt[] = [
  {
    id: 'ai_sm_tool_1',
    name: 'AI Retrospective Facilitator (5 Themes)',
    role: 'scrum-master',
    category: 'Facilitation',
    description: 'Generates creative retro reports across Sailboat, Starfish, 4Ls, Mountain, and Racecar formats.',
    templateInput: 'Sprint 24 completed. Velocity was 38 pts (planned 40). Staging QA environment was down for 2 days.'
  },
  {
    id: 'ai_sm_tool_2',
    name: 'AI Impediment & 5-Whys Root Cause Resolver',
    role: 'scrum-master',
    category: 'Coaching & Flow',
    description: 'Applies 5 Whys and Cynefin framework analysis to eliminate systemic team blockers.',
    templateInput: 'QA testing environment was down for 3 days due to deployment script failure.'
  },
  {
    id: 'ai_sm_tool_3',
    name: 'AI Daily Standup Board Walkthrough Assistant',
    role: 'scrum-master',
    category: 'Daily Scrum',
    description: 'Analyzes aging Jira board items right-to-left to spot WIP limit violations.',
    templateInput: '3 stories in "In Review" have not moved for 4 days. Developers pulled 2 new items today.'
  },
  {
    id: 'ai_sm_tool_4',
    name: 'AI Squad Health & Psychological Safety Index',
    role: 'scrum-master',
    category: 'Team Health',
    description: 'Evaluates squad morale and psychological safety index scores using Spotify Squad framework.',
    templateInput: 'Team members are quiet in retros and hesitant to voice technical concerns during planning.'
  },
  {
    id: 'ai_sm_tool_5',
    name: 'AI Definition of Done (DoD) Auditor',
    role: 'scrum-master',
    category: 'Scrum Artifacts',
    description: 'Audits current sprint deliverables against shared Definition of Done quality measures.',
    templateInput: 'Sprint 24 Increment: 8 stories completed, but unit test coverage dropped to 65%.'
  },
  {
    id: 'ai_sm_tool_6',
    name: 'AI SAFe PI Planning Dependency Mapper',
    role: 'scrum-master',
    category: 'Scaling Agile',
    description: 'Maps cross-team dependencies across release train teams and categorizes ROAM risks.',
    templateInput: 'Team Payments UI depends on Team Core API for OAuth token service in Sprint 25.'
  },
  {
    id: 'ai_sm_tool_7',
    name: 'AI Cycle Time & Scatterplot SLA Forecaster',
    role: 'scrum-master',
    category: 'Flow Metrics',
    description: 'Calculates 85th percentile Cycle Time SLAs for reliable empirical sprint forecasting.',
    templateInput: 'Completed stories cycle times: [2.1, 3.5, 4.2, 1.8, 5.1, 2.9, 3.8, 4.0] days.'
  },
  {
    id: 'ai_sm_tool_8',
    name: 'AI Cumulative Flow Diagram (CFD) Analyzer',
    role: 'scrum-master',
    category: 'Flow Metrics',
    description: 'Detects widening inventory bands on CFD charts indicating active bottlenecks.',
    templateInput: 'CFD status: To Do (5), In Progress (12), In Review (15), Done (40).'
  },
  {
    id: 'ai_sm_tool_9',
    name: 'AI Working Software Demo Script Generator',
    role: 'scrum-master',
    category: 'Sprint Review',
    description: 'Generates working software demo scripts for Sprint Review without PowerPoint slides.',
    templateInput: 'Sprint 24 Deliverables: One-Click Subscription Checkout and Stripe API integration.'
  },
  {
    id: 'ai_sm_tool_10',
    name: 'AI Conflict Resolution & Coaching Stance Guide',
    role: 'scrum-master',
    category: 'Agile Coaching',
    description: 'Guides SMs through Lyssa Adkins coaching stances during inter-team technical disagreements.',
    templateInput: 'Senior Dev and QA Lead disagree on whether automated regression tests belong in Sprint Backlog.'
  },
  {
    id: 'ai_sm_tool_11',
    name: 'AI Agile Values & Principles Evaluator',
    role: 'scrum-master',
    category: 'Agile Mindset',
    description: 'Evaluates sprint team decisions against the 4 Agile Values and 12 Principles.',
    templateInput: 'Management asking for rigid 6-month Gantt chart scope commitments.'
  },
  {
    id: 'ai_sm_tool_12',
    name: 'AI Continuous Improvement Experiment Coach',
    role: 'scrum-master',
    category: 'Continuous Learning',
    description: 'Turns retro feedback into 1 measurable experiment for the upcoming sprint.',
    templateInput: 'Retro Feedback: "Code reviews take too long and block QA testing."'
  }
];

export const PO_12_AI_TOOLS: AIToolPrompt[] = [
  {
    id: 'ai_po_tool_1',
    name: 'AI User Story & Gherkin BDD Generator',
    role: 'product-owner',
    category: 'Backlog Refinement',
    description: 'Converts feature ideas into INVEST-compliant user stories with Given/When/Then BDD criteria.',
    templateInput: 'Allow users to save multiple credit cards during checkout and set a default primary card.'
  },
  {
    id: 'ai_po_tool_2',
    name: 'AI WSJF & RICE Prioritizer',
    role: 'product-owner',
    category: 'Prioritization',
    description: 'Calculates WSJF (Cost of Delay ÷ Job Size) & RICE score matrix for backlog items.',
    templateInput: 'Feature A: Apple Pay Integration. Value: 9/10, Time Criticality: 8/10, Risk Reduction: 7/10, Effort: 5 pts.'
  },
  {
    id: 'ai_po_tool_3',
    name: 'AI Epic Vertical Story Slicer',
    role: 'product-owner',
    category: 'Story Slicing',
    description: 'Slices large monolithic Epics vertically into small 2-3 point testable user stories.',
    templateInput: 'Epic: Enterprise Multi-Tenant Access Control & Audit Logging System.'
  },
  {
    id: 'ai_po_tool_4',
    name: 'AI Customer Feedback & Review Summarizer',
    role: 'product-owner',
    category: 'Customer Discovery',
    description: 'Aggregates CSAT reviews, support tickets, and feedback into prioritized backlog features.',
    templateInput: '150 user support tickets complaining about slow checkout page loading on mobile browsers.'
  },
  {
    id: 'ai_po_tool_5',
    name: 'AI Product Backlog Refinement Coach',
    role: 'product-owner',
    category: 'Backlog Management',
    description: 'Prepares 2 sprints of "Ready" user stories ahead of Sprint Planning sessions.',
    templateInput: 'Sprint 25 Planning preparation: 12 candidate backlog items needing INVEST verification.'
  },
  {
    id: 'ai_po_tool_6',
    name: 'AI User Story Map Visualizer',
    role: 'product-owner',
    category: 'Story Mapping',
    description: 'Organizes user tasks horizontally along the user journey and slices MVP releases vertically.',
    templateInput: 'User Journey: Search Product -> Add to Cart -> Select Shipping -> Pay with Card -> Receipt.'
  },
  {
    id: 'ai_po_tool_7',
    name: 'AI Cost of Delay (CoD) Estimator',
    role: 'product-owner',
    category: 'Value Optimization',
    description: 'Calculates financial cost of delaying feature launches over 3-month horizons.',
    templateInput: 'Feature launch delay: Holiday season payment gateway update ($50K ARR impact).'
  },
  {
    id: 'ai_po_tool_8',
    name: 'AI Product Goal & Sprint Goal Aligner',
    role: 'product-owner',
    category: 'Scrum Framework',
    description: 'Connects individual Sprint Backlog items to overarching Product Goal outcomes.',
    templateInput: 'Product Goal: Reach $1M MRR with 99.99% payment transaction success rate.'
  },
  {
    id: 'ai_po_tool_9',
    name: 'AI PO Anti-Pattern Detector',
    role: 'product-owner',
    category: 'PO Excellence',
    description: 'Audits PO practices to prevent Scribe PO and Feature Factory anti-patterns.',
    templateInput: 'PO spending 100% of time writing story tickets without speaking to real customers.'
  },
  {
    id: 'ai_po_tool_10',
    name: 'AI Non-Functional Requirement (NFR) Generator',
    role: 'product-owner',
    category: 'Acceptance Criteria',
    description: 'Adds latency, security, and scalability criteria to functional user stories.',
    templateInput: 'User Story: Processing credit card payments via Stripe API.'
  },
  {
    id: 'ai_po_tool_11',
    name: 'AI Stakeholder Trade-off Communicator',
    role: 'product-owner',
    category: 'Stakeholder Mgmt',
    description: 'Drafts transparent trade-off reports for business stakeholders when priorities shift.',
    templateInput: 'VP Marketing asking why Campaign Landing Page was deferred behind Database Refactoring.'
  },
  {
    id: 'ai_po_tool_12',
    name: 'AI Feature Release ROI Predictor',
    role: 'product-owner',
    category: 'Product Analytics',
    description: 'Forecasts value points delivered vs target revenue ROI per release cycle.',
    templateInput: 'Sprint 24 Deliverables: 40 story points focused on Subscription Auto-Renewal UI.'
  }
];

export const PM_12_AI_TOOLS: AIToolPrompt[] = [
  {
    id: 'ai_pm_tool_1',
    name: 'AI Product Vision & Strategy Canvas Generator',
    role: 'product-manager',
    category: 'Product Strategy',
    description: 'Synthesizes market research, problem statements, and target metrics into a Vision Canvas.',
    templateInput: 'Enterprise B2B real-time payment reconciliation microservice for cross-border institutions.'
  },
  {
    id: 'ai_pm_tool_2',
    name: 'AI OKR & Outcome Roadmap Matrix Aligner',
    role: 'product-manager',
    category: 'Strategy & Execution',
    description: 'Maps quarterly OKRs into outcome-based "Now / Next / Later" roadmap horizons.',
    templateInput: 'Q3 Objective: Increase active user retention by 20% and reduce onboarding drop-off.'
  },
  {
    id: 'ai_pm_tool_3',
    name: 'AI Competitor Intelligence & Market Analyst',
    role: 'product-manager',
    category: 'Market Intelligence',
    description: 'Analyzes competitor feature launches, pricing models, and positioning strategy.',
    templateInput: 'Chief competitor launched a free automated reconciliation feature with basic reporting.'
  },
  {
    id: 'ai_pm_tool_4',
    name: 'AI Product-Led Growth (PLG) Funnel Optimizer',
    role: 'product-manager',
    category: 'Growth & Analytics',
    description: 'Analyzes drop-offs in user activation funnels and recommends TTV improvements.',
    templateInput: 'Onboarding Funnel: Signup (100%), Email Verify (92%), Identity Setup (65%), First API Call (40%).'
  },
  {
    id: 'ai_pm_tool_5',
    name: 'AI SaaS Unit Economics (CAC:LTV) Calculator',
    role: 'product-manager',
    category: 'SaaS Metrics',
    description: 'Evaluates LTV to CAC ratios, MRR churn rate, and payback period scalability.',
    templateInput: 'CAC = $3,200, Average LTV = $14,000, Monthly Churn = 1.2%, Gross Margin = 82%.'
  },
  {
    id: 'ai_pm_tool_6',
    name: 'AI Continuous Customer Discovery Guide',
    role: 'product-manager',
    category: 'Customer Discovery',
    description: 'Generates user interview scripts and opportunity solution trees (Teresa Torres).',
    templateInput: 'Interviewing Enterprise CFOs about payment reconciliation latency and audit fears.'
  },
  {
    id: 'ai_pm_tool_7',
    name: 'AI Go-To-Market (GTM) Alignment Planner',
    role: 'product-manager',
    category: 'GTM Execution',
    description: 'Aligns product launch milestones across Sales, Marketing, Customer Support, and Legal.',
    templateInput: 'Q4 Major Launch: Real-Time Cross-Border Multi-Currency Settlement Engine.'
  },
  {
    id: 'ai_pm_tool_8',
    name: 'AI North Star Metric Formulator',
    role: 'product-manager',
    category: 'Product Analytics',
    description: 'Defines North Star Metrics and input metrics that drive long-term customer value.',
    templateInput: 'B2B Payment Reconciliation Platform scaling from 50 to 500 enterprise customers.'
  },
  {
    id: 'ai_pm_tool_9',
    name: 'AI Pricing Tiering & Monetization Strategist',
    role: 'product-manager',
    category: 'Monetization',
    description: 'Recommends value-based pricing tiers (Freemium, Pro, Enterprise) based on usage metrics.',
    templateInput: 'Evaluating transaction volume pricing vs flat monthly user seat licenses.'
  },
  {
    id: 'ai_pm_tool_10',
    name: 'AI Portfolio Alignment & SAFe EPIC Business Case Generator',
    role: 'product-manager',
    category: 'Portfolio Management',
    description: 'Drafts SAFe Lean Business Cases for strategic enterprise epics across release trains.',
    templateInput: 'Strategic Epic: Automated AI Fraud Detection Microservice for High-Volume Gateways.'
  },
  {
    id: 'ai_pm_tool_11',
    name: 'AI Net Promoter Score (NPS) & CSAT Analyzer',
    role: 'product-manager',
    category: 'Customer Sentiment',
    description: 'Categorizes NPS promoter/detractor comments into high-leverage product enhancements.',
    templateInput: 'NPS Survey Feedback: 40 Detractors citing slow CSV export speed and lack of SSO.'
  },
  {
    id: 'ai_pm_tool_12',
    name: 'AI Executive Strategy Deck Generator',
    role: 'product-manager',
    category: 'Executive Alignment',
    description: 'Synthesizes product performance metrics into outcome-based executive board updates.',
    templateInput: 'Q3 Performance: $420K MRR (+22% YoY), 82% Retention, OKR KR1 94% completed.'
  }
];

export const GET_ROLE_AI_TOOLS = (role: UserRole): AIToolPrompt[] => {
  if (role === 'scrum-master') return SM_12_AI_TOOLS;
  if (role === 'product-owner') return PO_12_AI_TOOLS;
  return PM_12_AI_TOOLS;
};
