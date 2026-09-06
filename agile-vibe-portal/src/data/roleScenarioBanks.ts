import type { ScenarioItem, UserRole } from '../types';

export const SM_15_SCENARIOS: ScenarioItem[] = Array.from({ length: 15 }).map((_, i) => {
  const num = i + 1;
  return {
    id: `scen_sm_bank_${num}`,
    targetRole: 'scrum-master',
    title: `Scrum Master Challenge #${num}: ${
      num === 1 ? 'The Mid-Sprint Scope Surge' :
      num === 2 ? 'QA Environment Pipeline Breakdown' :
      num === 3 ? 'Retrospective Apathy & Silent Team' :
      num === 4 ? 'SAFe PI Cross-Team Dependency Blocker' :
      num === 5 ? 'Daily Standup Status Report Anti-Pattern' :
      num === 6 ? 'Defects Escaping Definition of Done' :
      num === 7 ? 'Executive Override of Team Capacity' :
      num === 8 ? 'WIP Limit Overflow & Multitasking Friction' :
      num === 9 ? 'Distributed Remote Squad Conflict' :
      num === 10 ? 'Refinement Without Technical Debt Budget' :
      num === 11 ? 'Sprint Review PowerPoint vs Working Increment' :
      num === 12 ? 'Kanban CFD Band Widening Emergency' :
      num === 13 ? 'Product Owner Micro-management' :
      num === 14 ? 'Sprint Goal Commitment vs Scope Creep' :
      'Agile Coaching Transition & Leadership Alignment'
    }`,
    framework: num % 2 === 0 ? 'Kanban Flow & Empiricism' : 'Scrum Guide 2020 & SAFe',
    complexity: num > 10 ? 'Master' : num > 5 ? 'Advanced' : 'Intermediate',
    description: `Real-world scenario #${num} facing the Scrum Master: Team velocity and psychological safety are tested when unexpected organizational friction arises during Sprint execution.`,
    context: `Organizational friction: Stakeholders demand immediate trade-offs while Developers struggle with staging environment stability.`,
    options: [
      {
        id: `opt_${num}_1`,
        text: `Enforce empirical Scrum process control, facilitate transparent trade-off discussions between PO and Developers, and protect team WIP limits.`,
        score: 100,
        isOptimal: true
      },
      {
        id: `opt_${num}_2`,
        text: `Force Developers to work overtime to accommodate external demands without adjusting Definition of Done.`,
        score: 25,
        isOptimal: false
      },
      {
        id: `opt_${num}_3`,
        text: `Cancel the sprint immediately and blame engineering management.`,
        score: 15,
        isOptimal: false
      }
    ],
    expertGuidance: `The Scrum Master acts as a servant leader, establishing empiricism and protecting Developer self-management while educating stakeholders on empirical trade-offs.`
  };
});

export const PO_15_SCENARIOS: ScenarioItem[] = Array.from({ length: 15 }).map((_, i) => {
  const num = i + 1;
  return {
    id: `scen_po_bank_${num}`,
    targetRole: 'product-owner',
    title: `Product Owner Challenge #${num}: ${
      num === 1 ? 'Balancing Technical Debt vs New Features' :
      num === 2 ? 'Ambiguous User Stories & Mid-Sprint Blockers' :
      num === 3 ? 'Conflicting High-Priority Stakeholder Requests' :
      num === 4 ? 'WSJF Prioritization Battle in PI Planning' :
      num === 5 ? 'User Story Mapping & Vertical MVP Slicing' :
      num === 6 ? 'BDD Gherkin Criteria Verification' :
      num === 7 ? 'Cost of Delay Escalation for Enterprise Launch' :
      num === 8 ? 'Feature Factory Syndrome vs Outcome Focus' :
      num === 9 ? 'Sprint Review Feedback Integration' :
      num === 10 ? 'Product Backlog Refinement Readiness' :
      num === 11 ? 'Managing Scribe PO Organizational Pressure' :
      num === 12 ? 'Acceptance Criteria Non-Functional Edge Cases' :
      num === 13 ? 'RICE Scoring vs Customer Complaints' :
      num === 14 ? 'Value Points Forecast vs Velocity' :
      'Product Goal Alignment Across Release Trains'
    }`,
    framework: num % 2 === 0 ? 'INVEST & BDD Gherkin' : 'WSJF & Agile Product Ownership',
    complexity: num > 10 ? 'Master' : num > 5 ? 'Advanced' : 'Intermediate',
    description: `Real-world scenario #${num} facing the Product Owner: Backlog prioritization and value optimization are tested when competing business requests collide.`,
    context: `Friction: Engineering demands database refactoring while Sales demands emergency custom features.`,
    options: [
      {
        id: `opt_${num}_1`,
        text: `Calculate WSJF (Cost of Delay ÷ Job Size), define BDD Gherkin acceptance criteria, and maintain 2 sprints of "Ready" items.`,
        score: 100,
        isOptimal: true
      },
      {
        id: `opt_${num}_2`,
        text: `Build all requested features simultaneously without technical debt capacity.`,
        score: 20,
        isOptimal: false
      },
      {
        id: `opt_${num}_3`,
        text: `Delegate backlog ordering to an external consultant.`,
        score: 30,
        isOptimal: false
      }
    ],
    expertGuidance: `The PO maximizes product value through transparent, data-driven WSJF prioritization and precise BDD acceptance criteria.`
  };
});

export const PM_15_SCENARIOS: ScenarioItem[] = Array.from({ length: 15 }).map((_, i) => {
  const num = i + 1;
  return {
    id: `scen_pm_bank_${num}`,
    targetRole: 'product-manager',
    title: `Product Manager Challenge #${num}: ${
      num === 1 ? 'Pivoting Strategy Based on Product Analytics' :
      num === 2 ? 'Executive Demands for Static 12-Month Gantt Charts' :
      num === 3 ? 'Competitor Launch & Market Positioning Pivot' :
      num === 4 ? 'OKR Key Result Miss & Mid-Quarter Pivot' :
      num === 5 ? 'Product-Led Growth (PLG) Funnel Drop-off' :
      num === 6 ? 'CAC:LTV Unit Economics Scaling Bottleneck' :
      num === 7 ? 'Opportunity Solution Tree Alignment' :
      num === 8 ? 'Continuous Customer Discovery Interview Loops' :
      num === 9 ? 'Go-To-Market (GTM) Sales Enablement Friction' :
      num === 10 ? 'North Star Metric Selection Disagreement' :
      num === 11 ? 'Pricing Model Tiering Strategy Shift' :
      num === 12 ? 'Now / Next / Later Horizon Communication' :
      num === 13 ? 'Empowered Product Team vs Feature Factory' :
      num === 14 ? 'Net Promoter Score (NPS) Churn Analysis' :
      'Portfolio Portfolio Alignment Across Scaled Trains'
    }`,
    framework: num % 2 === 0 ? 'PLG & Product Analytics' : 'Outcome Roadmaps & OKRs',
    complexity: num > 10 ? 'Master' : num > 5 ? 'Advanced' : 'Intermediate',
    description: `Strategic scenario #${num} facing the Product Manager: Market positioning and product-led growth metrics are tested amidst competitive disruption.`,
    context: `Friction: Executive leadership demands hard feature dates while analytics indicate onboarding funnel churn.`,
    options: [
      {
        id: `opt_${num}_1`,
        text: `Present an outcome-based "Now / Next / Later" roadmap tied to strategic company OKRs, optimizing product activation funnels.`,
        score: 100,
        isOptimal: true
      },
      {
        id: `opt_${num}_2`,
        text: `Fabricate 12-month feature delivery dates to satisfy executive leadership.`,
        score: 25,
        isOptimal: false
      },
      {
        id: `opt_${num}_3`,
        text: `Cut product pricing by 90% without validating product-market fit.`,
        score: 15,
        isOptimal: false
      }
    ],
    expertGuidance: `Product Managers drive strategic growth by aligning empowered teams around outcome-based roadmaps and verified customer analytics.`
  };
});

export const GET_ROLE_SCENARIOS = (role: UserRole): ScenarioItem[] => {
  if (role === 'scrum-master') return SM_15_SCENARIOS;
  if (role === 'product-owner') return PO_15_SCENARIOS;
  return PM_15_SCENARIOS;
};
