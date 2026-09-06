import type { AssessmentQuestion, UserRole } from '../types';

// Helper to generate 40 scenario-based questions per role
export const SM_40_QUESTIONS: AssessmentQuestion[] = Array.from({ length: 40 }).map((_, i) => {
  const index = i + 1;
  const domains = [
    'scrum-framework',
    'agile-principles',
    'kanban-flow',
    'scrumban-hybrid',
    'scaling-agile',
    'scrum-framework',
    'agile-principles',
    'ai-augmented-agile'
  ] as const;
  const domain = domains[i % 8];

  return {
    id: `sm_q_${index}`,
    domain,
    domainName: domain.toUpperCase().replace('-', ' '),
    scenario: `[Scrum Master Real Scenario #${index}]: A high-velocity sprint is underway. Day ${Math.min(9, (index % 8) + 1)}: ${
      index % 3 === 0
        ? 'Stakeholders request mid-sprint additions without Product Owner alignment.'
        : index % 3 === 1
        ? 'Daily Scrum turns into an extended status report directly to management.'
        : 'Staging environment deployment script fails, blocking QA story verification.'
    }`,
    question: `As a Scrum Master, what is your empirical servant-leadership response to resolve this issue?`,
    options: [
      `Enforce empirical Scrum process control, protect team capacity, and coach stakeholders on Product Backlog ordering.`,
      `Instruct Developers to work overtime to accommodate mid-sprint additions without altering Definition of Done.`,
      `Cancel the sprint immediately and report team members to executive management.`,
      `Ignore the bottleneck and let developers resolve it after sprint deadline.`
    ],
    correctIndex: 0,
    explanation: `Option A is optimal according to the Scrum Guide 2020. The Scrum Master serves the Scrum Team and organization by establishing empiricism, protecting Developer self-management, and adhering to Definition of Done.`
  };
});

export const PO_40_QUESTIONS: AssessmentQuestion[] = Array.from({ length: 40 }).map((_, i) => {
  const index = i + 1;
  const domains = [
    'product-ownership',
    'product-strategy',
    'agile-principles',
    'scaling-agile',
    'product-ownership',
    'product-strategy',
    'ai-augmented-agile',
    'kanban-flow'
  ] as const;
  const domain = domains[i % 8];

  return {
    id: `po_q_${index}`,
    domain,
    domainName: domain.toUpperCase().replace('-', ' '),
    scenario: `[Product Owner Real Scenario #${index}]: Backlog Refinement Session: ${
      index % 3 === 0
        ? 'Developers complain a top-priority story lacks testable Given/When/Then BDD criteria.'
        : index % 3 === 1
        ? 'Executive leadership demands Feature A, while Sales demands Feature B simultaneously.'
        : 'Tech debt refactoring requests conflict with new feature launch goals.'
    }`,
    question: `As a Product Owner accountable for value maximization, how do you handle this backlog priority?`,
    options: [
      `Calculate WSJF (Cost of Delay ÷ Job Size), define BDD Gherkin criteria with developers, and maintain 2 sprints of "Ready" items.`,
      `Build both features simultaneously by forcing developers to work weekends.`,
      `Delegate all Product Backlog decisions to external sales consultants.`,
      `Accept vague stories without acceptance criteria and fix production bugs later.`
    ],
    correctIndex: 0,
    explanation: `Option A is optimal. The Product Owner maximizes value through ordered, INVEST-compliant Product Backlog management and objective WSJF prioritization.`
  };
});

export const PM_40_QUESTIONS: AssessmentQuestion[] = Array.from({ length: 40 }).map((_, i) => {
  const index = i + 1;
  const domains = [
    'product-strategy',
    'product-ownership',
    'scaling-agile',
    'agile-principles',
    'product-strategy',
    'ai-augmented-agile',
    'kanban-flow',
    'scrumban-hybrid'
  ] as const;
  const domain = domains[i % 8];

  return {
    id: `pm_q_${index}`,
    domain,
    domainName: domain.toUpperCase().replace('-', ' '),
    scenario: `[Product Manager Strategic Scenario #${index}]: Quarterly Strategic Planning: ${
      index % 3 === 0
        ? 'Product analytics show a 30% drop-off in user onboarding step 3.'
        : index % 3 === 1
        ? 'Board of Directors demands a static 12-month feature release calendar.'
        : 'Chief competitor launches a free AI payment reconciliation feature.'
    }`,
    question: `As a Product Manager driving strategic growth, what is your outcome-driven decision?`,
    options: [
      `Present an outcome-based "Now / Next / Later" roadmap tied to OKR Key Results and optimize activation funnels.`,
      `Commit to brittle 12-month Gantt chart feature dates to satisfy leadership temporarily.`,
      `Lower product pricing by 80% without analyzing unit economics (CAC:LTV).`,
      `Ignore analytics data and build unvalidated features requested by internal executives.`
    ],
    correctIndex: 0,
    explanation: `Option A is optimal. Product Managers focus on strategic outcomes, continuous customer discovery, and product-led growth (PLG) metrics.`
  };
});

export const GET_ROLE_ASSESSMENT_QUESTIONS = (role: UserRole): AssessmentQuestion[] => {
  if (role === 'scrum-master') return SM_40_QUESTIONS;
  if (role === 'product-owner') return PO_40_QUESTIONS;
  return PM_40_QUESTIONS;
};
