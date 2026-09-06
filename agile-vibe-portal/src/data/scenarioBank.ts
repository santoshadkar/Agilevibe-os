import type { ScenarioItem } from '../types';

export const EXPANDED_SCENARIOS: ScenarioItem[] = [
  // --- SCRUM MASTER (SM) SCENARIOS ---
  {
    id: 'scen_sm_1',
    targetRole: 'scrum-master',
    title: 'The Mid-Sprint Scope Surge',
    framework: 'Scrum 2020',
    complexity: 'Intermediate',
    description: 'Day 4 of a 10-day Sprint: A senior VP contacts the Developers directly and requests an urgent feature addition for an enterprise client, bypassing the Product Owner.',
    context: 'The Developers are eager to please leadership and start refactoring code immediately without assessing impact on the Sprint Goal.',
    options: [
      {
        id: 'opt_1',
        text: 'Facilitate a conversation between the VP, Product Owner, and Developers to inspect the impact on the Sprint Goal and evaluate trade-offs or buffer for future sprints.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Strictly ban the VP from ever speaking to the Developers again.',
        score: 40,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Tell the Developers to quietly build it after hours so nobody notices.',
        score: 10,
        isOptimal: false
      }
    ],
    expertGuidance: 'The Scrum Master protects the team from external disruptions while educating stakeholders on proper channels. The Product Owner manages Product Backlog items, and any mid-sprint scope change must not endanger the Sprint Goal.'
  },
  {
    id: 'scen_sm_2',
    targetRole: 'scrum-master',
    title: 'QA Bottleneck & Environmental Failure',
    framework: 'Kanban Flow & Empiricism',
    complexity: 'Intermediate',
    description: 'Day 7 of the Sprint: The dedicated Staging QA environment experiences script failures, blocking 8 completed stories from being verified.',
    context: 'Developers are idling or pulling new un-refined work from the backlog, causing "In Code Review" and "QA" WIP limits to overflow.',
    options: [
      {
        id: 'opt_1',
        text: 'Swarm the team around fixing the QA environment script issue immediately ("Stop Starting, Start Finishing") before pulling any new work.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Skip QA testing for this sprint and mark all 8 stories as "Done" to protect sprint velocity.',
        score: 15,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Extend the Sprint by 5 extra days to wait for IT operations to fix the staging server.',
        score: 30,
        isOptimal: false
      }
    ],
    expertGuidance: 'Swarming to unblock aging work is a core flow practice. Marking unverified items as Done violates the Definition of Done (DoD) and introduces hidden defects.'
  },
  {
    id: 'scen_sm_3',
    targetRole: 'scrum-master',
    title: 'Retrospective Fatigue & Apathy',
    framework: 'Agile Coaching Stances',
    complexity: 'Advanced',
    description: 'During the past 3 Retrospectives, team members remained silent, gave one-word answers, and complained that retros are a waste of time because action items are never executed.',
    context: 'The team has been using the same standard "What went well / What didn\'t" format for 6 months.',
    options: [
      {
        id: 'opt_1',
        text: 'Switch to a dynamic visual retro theme (Sailboat or Racecar), review past unexecuted action items transparently, and commit to only 1 high-impact experiment for next sprint.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Cancel retrospectives altogether until team morale naturally improves.',
        score: 20,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Report silent team members to engineering management for lack of participation.',
        score: 10,
        isOptimal: false
      }
    ],
    expertGuidance: 'Retrospective apathy stems from lack of psychological safety or failure to act on previous feedback. Changing formats and enforcing single actionable experiments restores engagement.'
  },
  {
    id: 'scen_sm_4',
    targetRole: 'scrum-master',
    title: 'SAFe PI Cross-Team Dependency Blocker',
    framework: 'Scaled Agile (SAFe 6.0)',
    complexity: 'Advanced',
    description: 'During SAFe Program Increment (PI) Execution, Team B (Core API) notifies your team (Payments UI) that their auth microservice release is delayed by 2 Sprints.',
    context: 'Your team cannot complete 3 critical PI Objectives without Team B\'s microservice integration.',
    options: [
      {
        id: 'opt_1',
        text: 'Escalate to the Release Train Engineer (RTE) and facilitate a cross-team sync to create mock API contracts or re-sequence PI dependencies on the Program Board.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Wait quietly for 2 sprints until Team B finishes their release.',
        score: 25,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Re-write Team B\'s core API code yourselves without informing their lead architect.',
        score: 35,
        isOptimal: false
      }
    ],
    expertGuidance: 'In scaled frameworks, cross-team dependencies are mapped on the Program Board. Facilitating API contract mocks ensures your team can continue front-end development without waiting.'
  },

  // --- PRODUCT OWNER (PO) SCENARIOS ---
  {
    id: 'scen_po_1',
    targetRole: 'product-owner',
    title: 'Balancing Technical Debt vs New Features',
    framework: 'Agile Product Management',
    complexity: 'Advanced',
    description: 'The Lead Architect warns that legacy database schemas are causing performance degradation. Refactoring will take 2 full Sprints with zero visible user features.',
    context: 'Business leadership is pushing hard for 3 new revenue-generating features. How do you balance value and sustainability?',
    options: [
      {
        id: 'opt_1',
        text: 'Allocate a fixed percentage (e.g. 20-30%) of team capacity per Sprint for tech debt refactoring, collaborating with engineering to prioritize high-risk debt via WSJF.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Deny all tech debt requests until all requested business features are delivered.',
        score: 25,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Halt all business feature development for 2 full sprints without stakeholder alignment.',
        score: 40,
        isOptimal: false
      }
    ],
    expertGuidance: 'Sustainable product velocity requires balancing short-term feature value with long-term architecture health. Allocating ongoing capacity or using WSJF aligns business & tech goals.'
  },
  {
    id: 'scen_po_2',
    targetRole: 'product-owner',
    title: 'Ambiguous User Stories & Mid-Sprint Blockers',
    framework: 'INVEST & BDD Gherkin',
    complexity: 'Intermediate',
    description: 'Midway through the Sprint, Developers realize a top-priority story "User Profile Upgrade" lacks acceptance criteria for multi-currency currency conversions.',
    context: 'Developers are making arbitrary assumptions about exchange rate calculation rules.',
    options: [
      {
        id: 'opt_1',
        text: 'Conduct an immediate mini-refinement with the Lead Developer, define BDD Given/When/Then criteria for exchange rates, and update the story acceptance criteria.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Let developers guess the rules and fix any wrong assumptions in production later.',
        score: 20,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Remove the story from the sprint and leave developers idle for 3 days.',
        score: 30,
        isOptimal: false
      }
    ],
    expertGuidance: 'The PO must remain accessible to clarify functional scope promptly. Using BDD Gherkin syntax removes ambiguity during sprint execution.'
  },
  {
    id: 'scen_po_3',
    targetRole: 'product-owner',
    title: 'Conflicting High-Priority Stakeholder Requests',
    framework: 'WSJF & Backlog Prioritization',
    complexity: 'Advanced',
    description: 'The VP of Marketing demands Feature X (Campaign Landing Page), while the VP of Sales demands Feature Y (Enterprise SSO Export). Both claim top priority.',
    context: 'The team only has bandwidth for one feature in the upcoming release cycle.',
    options: [
      {
        id: 'opt_1',
        text: 'Calculate WSJF (Cost of Delay ÷ Job Size) transparently with both VPs present to let data-driven economic prioritization determine backlog order.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Flip a coin or pick whichever VP spoke to you most recently.',
        score: 15,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Try to build half of Feature X and half of Feature Y simultaneously, delivering neither.',
        score: 25,
        isOptimal: false
      }
    ],
    expertGuidance: 'WSJF provides an objective economic framework for evaluating Cost of Delay, eliminating executive opinion battles during backlog ordering.'
  },

  // --- PRODUCT MANAGER (PM) SCENARIOS ---
  {
    id: 'scen_pm_1',
    targetRole: 'product-manager',
    title: 'Pivoting Strategy Based on Product Analytics & Churn',
    framework: 'Product Strategy & PLG',
    complexity: 'Advanced',
    description: 'Q2 Product Analytics reveal a 25% user drop-off during user onboarding step 3, while user retention for completed onboarding is high (85%).',
    context: 'Sales demands launching a brand new Enterprise Reporting module. How do you prioritize resources as Product Manager?',
    options: [
      {
        id: 'opt_1',
        text: 'Focus product & UX engineering on optimizing the onboarding funnel to unlock leaky bucket revenue before expanding into new complex modules.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Ignore the onboarding drop-off and build the Enterprise Reporting module requested by Sales.',
        score: 30,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Lower subscription pricing by 50% to compensate for onboarding drop-off.',
        score: 20,
        isOptimal: false
      }
    ],
    expertGuidance: 'Product-Led Growth dictates fixing activation and onboarding friction first. High retention post-onboarding means improving activation will yield exponential growth compared to adding unvalidated features.'
  },
  {
    id: 'scen_pm_2',
    targetRole: 'product-manager',
    title: 'Executive Demands for Static 12-Month Gantt Charts',
    framework: 'Outcome Roadmaps & OKRs',
    complexity: 'Advanced',
    description: 'The Board of Directors demands a fixed 12-month roadmap with exact delivery dates for 25 upcoming SaaS features.',
    context: 'Market conditions in your AI domain are shifting rapidly every 6 weeks.',
    options: [
      {
        id: 'opt_1',
        text: 'Present an outcome-based "Now / Next / Later" roadmap tied to strategic company OKRs, explaining that feature output dates are updated iteratively per quarter.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Fabricate fake 12-month feature delivery dates to satisfy the board temporarily.',
        score: 20,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Refuse to provide any roadmap or strategic vision slides to executive leadership.',
        score: 15,
        isOptimal: false
      }
    ],
    expertGuidance: 'Outcome-based roadmaps focus on customer problems and business OKRs rather than locking into brittle long-term output commitments that become obsolete.'
  },
  {
    id: 'scen_pm_3',
    targetRole: 'product-manager',
    title: 'Competitor Launch & Market Positioning Pivot',
    framework: 'Market Discovery & Strategy',
    complexity: 'Master',
    description: 'A chief competitor launches a free AI-powered payment reconciliation feature that mirrors your core paid module.',
    context: 'Your team is halfway through a 3-month development cycle for a similar feature.',
    options: [
      {
        id: 'opt_1',
        text: 'Pivot your product positioning toward unique enterprise compliance and real-time SLA guarantees that competitors lack, while accelerating core API integrations.',
        score: 100,
        isOptimal: true
      },
      {
        id: 'opt_2',
        text: 'Panic and copy the competitor\'s exact UI layout line for line.',
        score: 30,
        isOptimal: false
      },
      {
        id: 'opt_3',
        text: 'Cancel your entire product line and shut down engineering operations.',
        score: 10,
        isOptimal: false
      }
    ],
    expertGuidance: 'Product Leaders respond to competitor moves by doubling down on unique value propositions (compliance, SLA, integration depth) rather than racing to the bottom.'
  }
];
