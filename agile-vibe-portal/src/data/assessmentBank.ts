import type { AssessmentQuestion, FrameworkDomain } from '../types';

export const DOMAIN_METADATA: Record<FrameworkDomain, { name: string; color: string; desc: string }> = {
  'scrum-framework': { 
    name: 'Scrum 2020 Framework', 
    color: 'text-cyan-400', 
    desc: 'Empiricism, 3 Accountabilities, 5 Events, 3 Artifacts & Definition of Done' 
  },
  'agile-principles': { 
    name: 'Agile Values & Principles', 
    color: 'text-emerald-400', 
    desc: 'Agile Manifesto Values, Customer Collaboration & Sustainable Delivery Pace' 
  },
  'kanban-flow': { 
    name: 'Kanban & Flow Metrics', 
    color: 'text-purple-400', 
    desc: 'WIP Limits, Lead/Cycle Time, Bottleneck Removal & Cumulative Flow Diagrams' 
  },
  'scrumban-hybrid': { 
    name: 'Scrumban Execution', 
    color: 'text-amber-400', 
    desc: 'Pull Systems, On-demand Replenishment & Continuous Workflow Cadence' 
  },
  'scaling-agile': { 
    name: 'Scaling Agile (SAFe / LeSS / Nexus)', 
    color: 'text-pink-400', 
    desc: 'PI Planning, Program Boards, Dependency Mapping & Cross-Team Sync' 
  },
  'product-ownership': { 
    name: 'Product Ownership & Backlog', 
    color: 'text-indigo-400', 
    desc: 'INVEST User Stories, BDD Gherkin Syntax, Product Goal & Value Maximization' 
  },
  'product-strategy': { 
    name: 'Product Strategy & PM', 
    color: 'text-blue-400', 
    desc: 'Product Vision, OKRs, Outcome Roadmaps, SaaS Metrics & PLG Funnels' 
  },
  'ai-augmented-agile': { 
    name: 'AI-Augmented Agile Leadership', 
    color: 'text-violet-400', 
    desc: 'Leveraging LLMs & Predictive Analytics for Retros, Risk Prediction & Backlog Refinement' 
  }
};

export const FORTY_ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // --- DIMENSION 1: SCRUM FRAMEWORK (5 Questions) ---
  {
    id: 'q_scrum_1',
    domain: 'scrum-framework',
    domainName: 'Scrum 2020 Framework',
    scenario: 'During Sprint Planning, the Product Owner insists on adding 5 extra high-priority user stories into the Sprint Backlog after the Developers have already reached maximum capacity.',
    question: 'According to the Scrum Guide 2020, how should the Scrum Master respond?',
    options: [
      'Allow the Product Owner to override capacity since they are accountable for product success.',
      'Explain that the Developers alone select what is included in the Sprint Backlog based on their capacity and the Sprint Goal.',
      'Cancel the Sprint immediately and restart Sprint Planning with fewer stories.',
      'Instruct the Developers to work overtime to accommodate all stories requested by the Product Owner.'
    ],
    correctIndex: 1,
    explanation: 'The Scrum Guide 2020 states that Developers select items for the Sprint Backlog. Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the Sprint.'
  },
  {
    id: 'q_scrum_2',
    domain: 'scrum-framework',
    domainName: 'Scrum 2020 Framework',
    scenario: 'A Scrum Team member suggests skipping the Sprint Retrospective because "everything went smoothly this sprint and we don\'t have time to waste."',
    question: 'What is the most appropriate action for the Scrum Master to take?',
    options: [
      'Cancel the Retrospective for this sprint to save time for development.',
      'Hold the Retrospective, reinforcing that continuous improvement is an essential Scrum event for empirical process control.',
      'Replace the Retrospective with an informal Slack message thread.',
      'Escalate to the Engineering VP to mandate attendance.'
    ],
    correctIndex: 1,
    explanation: 'The Retrospective is a mandatory Scrum event where the team inspects itself and creates a plan for improvements to be enacted during the next Sprint. Even high-performing teams inspect & adapt.'
  },
  {
    id: 'q_scrum_3',
    domain: 'scrum-framework',
    domainName: 'Scrum 2020 Framework',
    scenario: 'A developer completes coding a feature but skips unit testing and security checks, claiming it is "Done" because the code compiles.',
    question: 'What defines when an Increment is ready for release in Scrum?',
    options: [
      'When the code compiles without syntax errors on the local machine.',
      'When the item meets the shared Definition of Done (DoD) agreed upon by the team.',
      'When the Product Owner verbally signs off without testing.',
      'When the Sprint timebox expires.'
    ],
    correctIndex: 1,
    explanation: 'An Increment is usable and release-ready only when it satisfies the shared Definition of Done (DoD), ensuring high quality across all backlog items.'
  },
  {
    id: 'q_scrum_4',
    domain: 'scrum-framework',
    domainName: 'Scrum 2020 Framework',
    scenario: 'The Product Owner wants to change the Sprint Goal on Day 6 of a 10-day Sprint because a new competitor feature was launched.',
    question: 'Under what condition can a Sprint be cancelled in Scrum?',
    options: [
      'Only the Product Owner has the authority to cancel a Sprint if the Sprint Goal becomes obsolete.',
      'The Scrum Master cancels the Sprint whenever scope changes.',
      'The Developers cancel the Sprint if they feel stressed.',
      'Sprints can never be cancelled under any circumstances.'
    ],
    correctIndex: 0,
    explanation: 'A Sprint may be cancelled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint.'
  },
  {
    id: 'q_scrum_5',
    domain: 'scrum-framework',
    domainName: 'Scrum 2020 Framework',
    scenario: 'A stakeholder asks the Scrum Master who is responsible for managing the Developers\' day-to-day task assignments.',
    question: 'How are tasks managed within a Scrum Team?',
    options: [
      'The Scrum Master assigns tasks daily.',
      'The Product Owner assigns tasks based on business priority.',
      'The Developers are self-managing and pull work from the Sprint Backlog.',
      'An external Engineering Manager assigns all tasks.'
    ],
    correctIndex: 2,
    explanation: 'Scrum Teams are self-managing, meaning Developers internally decide who does what, when, and how within the Sprint Backlog.'
  },

  // --- DIMENSION 2: AGILE VALUES & PRINCIPLES (5 Questions) ---
  {
    id: 'q_agile_1',
    domain: 'agile-principles',
    domainName: 'Agile Values & Principles',
    scenario: 'A traditional project manager demands a static 12-month Gantt chart with fixed scope, fixed deadlines, and fixed budget for an exploratory microservice project.',
    question: 'Which core Agile Manifesto principle directly addresses this scenario?',
    options: [
      'Following a plan over responding to change.',
      'Responding to change over following a plan, while acknowledging that working software is the primary measure of progress.',
      'Comprehensive documentation over working software.',
      'Contract negotiation over customer collaboration.'
    ],
    correctIndex: 1,
    explanation: 'Agile values responding to change over following a plan. In complex environments, detailed early plans are often inaccurate, whereas iterative delivery of working software yields real feedback.'
  },
  {
    id: 'q_agile_2',
    domain: 'agile-principles',
    domainName: 'Agile Values & Principles',
    scenario: 'A software team is pushed to work 70-hour weeks for 3 consecutive months to hit an arbitrary release date set by marketing.',
    question: 'Which Agile principle is violated by prolonged overtime?',
    options: [
      'Simplicity—the art of maximizing the amount of work not done—is essential.',
      'Agile processes promote sustainable development. Sponsors, developers, and users should be able to maintain a constant pace indefinitely.',
      'Working software is the primary measure of progress.',
      'Build projects around motivated individuals.'
    ],
    correctIndex: 1,
    explanation: 'Agile Principle 8 mandates sustainable development where team members maintain a constant, healthy pace indefinitely to prevent burnout and quality degradation.'
  },
  {
    id: 'q_agile_3',
    domain: 'agile-principles',
    domainName: 'Agile Values & Principles',
    scenario: 'A product team spends 6 weeks writing a 200-page functional spec document before writing a single line of code.',
    question: 'What does the Agile Manifesto prioritize regarding documentation?',
    options: [
      'Zero documentation should ever be written.',
      'Working software over comprehensive documentation, focusing effort on delivering tangible user value.',
      'Comprehensive documentation over customer feedback.',
      'Documentation should be audited by external legal teams first.'
    ],
    correctIndex: 1,
    explanation: 'While documentation has value, Agile prioritizes working software over comprehensive documentation to validate assumptions quickly with real users.'
  },
  {
    id: 'q_agile_4',
    domain: 'agile-principles',
    domainName: 'Agile Values & Principles',
    scenario: 'A customer requests a minor UI modification during a Sprint Review demo. The team lead refuses, stating "The scope contract was signed 2 weeks ago."',
    question: 'Which Manifesto value addresses customer interaction?',
    options: [
      'Processes and tools over individuals and interactions.',
      'Customer collaboration over contract negotiation.',
      'Following a plan over responding to change.',
      'Contract negotiation over working software.'
    ],
    correctIndex: 1,
    explanation: 'Agile values customer collaboration over contract negotiation, encouraging continuous alignment with customer needs over rigid scope contracts.'
  },
  {
    id: 'q_agile_5',
    domain: 'agile-principles',
    domainName: 'Agile Values & Principles',
    scenario: 'An engineering team designs a complex over-engineered microservice architecture with 15 abstractions for a simple internal tool used by 10 people.',
    question: 'Which Agile principle guides architectural simplicity?',
    options: [
      'Simplicity—the art of maximizing the amount of work not done—is essential.',
      'Comprehensive documentation is mandatory.',
      'Self-organizing teams require formal corporate hierarchy.',
      'Welcome changing requirements late in development.'
    ],
    correctIndex: 0,
    explanation: 'Agile Principle 10 emphasizes simplicity: maximizing the amount of work NOT done to avoid waste and over-engineering.'
  },

  // --- DIMENSION 3: KANBAN & FLOW METRICS (5 Questions) ---
  {
    id: 'q_kanban_1',
    domain: 'kanban-flow',
    domainName: 'Kanban & Flow Metrics',
    scenario: 'A team using Kanban notices their "In Code Review" column regularly accumulates 15+ items while developers start new tasks from the "To Do" column.',
    question: 'What is the primary Kanban practice to solve this bottleneck?',
    options: [
      'Add 5 more code reviewers to the team.',
      'Enforce Work-In-Progress (WIP) limits on the "In Code Review" column and adopt a "Stop Starting, Start Finishing" principle.',
      'Eliminate code reviews altogether to speed up throughput.',
      'Increase Sprint length from 2 weeks to 4 weeks.'
    ],
    correctIndex: 1,
    explanation: 'Limiting Work In Progress (WIP) is a core Kanban practice. It prevents multitasking, reduces lead time, highlights bottlenecks, and encourages team members to collaborate on completing existing items before starting new ones.'
  },
  {
    id: 'q_kanban_2',
    domain: 'kanban-flow',
    domainName: 'Kanban & Flow Metrics',
    scenario: 'You are inspecting a Cumulative Flow Diagram (CFD). The band representing "In QA Testing" is widening rapidly over the past 3 weeks.',
    question: 'What does a widening band on a CFD indicate?',
    options: [
      'The process step is operating at peak efficiency.',
      'Work is accumulating in QA faster than it is being completed, signaling a bottleneck.',
      'Cycle time is decreasing across the board.',
      'The team has completed all stories ahead of schedule.'
    ],
    correctIndex: 1,
    explanation: 'On a Cumulative Flow Diagram, an expanding horizontal/vertical distance between state lines indicates growing WIP and accumulation of work in that state, pointing directly to a workflow bottleneck.'
  },
  {
    id: 'q_kanban_3',
    domain: 'kanban-flow',
    domainName: 'Kanban & Flow Metrics',
    scenario: 'A Scrum Master wants to calculate how long a work item takes from the moment it is committed to when it is delivered to production.',
    question: 'Which flow metric measures total elapsed time from commitment to delivery?',
    options: [
      'Cycle Time',
      'Lead Time',
      'Velocity Points',
      'Story Point Burnup'
    ],
    correctIndex: 1,
    explanation: 'Lead Time measures the total time elapsed from customer request/commitment to final delivery. Cycle Time measures the time spent actively working on the item.'
  },
  {
    id: 'q_kanban_4',
    domain: 'kanban-flow',
    domainName: 'Kanban & Flow Metrics',
    scenario: 'According to Little\'s Law, what happens to Lead Time when Work In Progress (WIP) increases while throughput remains constant?',
    question: 'How does WIP impact Lead Time under Little\'s Law?',
    options: [
      'Lead Time decreases proportionally.',
      'Lead Time increases (Lead Time = WIP / Throughput).',
      'Lead Time remains unchanged.',
      'Throughput doubles automatically.'
    ],
    correctIndex: 1,
    explanation: 'Little\'s Law establishes that Average Lead Time = Average WIP / Average Throughput. Increasing WIP directly increases Lead Time.'
  },
  {
    id: 'q_kanban_5',
    domain: 'kanban-flow',
    domainName: 'Kanban & Flow Metrics',
    scenario: 'A Kanban team wants to set a Service Level Expectation (SLE) for their stakeholders based on historical throughput data.',
    question: 'How is a reliable SLE calculated on a Cycle Time Scatterplot?',
    options: [
      'By taking the single best/fastest completion time ever recorded.',
      'By selecting a high percentile boundary (e.g. 85th percentile of completed items) to state "85% of items finish in X days or less."',
      'By averaging all items including incomplete work.',
      'By guessing based on story point estimates.'
    ],
    correctIndex: 1,
    explanation: 'An empirical SLE uses percentile boundaries (e.g. 85th percentile) on a Cycle Time Scatterplot to give stakeholders probabilistic delivery confidence.'
  },

  // --- DIMENSION 4: SCRUMBAN HYBRID (5 Questions) ---
  {
    id: 'q_scrumban_1',
    domain: 'scrumban-hybrid',
    domainName: 'Scrumban Execution',
    scenario: 'A support-heavy product development team is struggling with fixed 2-week Sprint scope commitments due to continuous urgent incoming production bug fixes.',
    question: 'How does Scrumban optimize this environment compared to traditional Scrum?',
    options: [
      'Scrumban abolishes all team meetings and relies solely on email.',
      'Scrumban combines Scrum events (Retros, Dailies) with Kanban pull-based execution, WIP limits, and trigger-based replenishment instead of rigid Sprint batching.',
      'Scrumban forces the Product Owner to reject all production bugs until the next release.',
      'Scrumban replaces story points with financial dollar estimates.'
    ],
    correctIndex: 1,
    explanation: 'Scrumban allows teams to maintain Scrum cadence events while introducing Kanban pull systems and WIP limits, making it ideal for teams with continuous or unpredictable input streams.'
  },
  {
    id: 'q_scrumban_2',
    domain: 'scrumban-hybrid',
    domainName: 'Scrumban Execution',
    scenario: 'In a Scrumban team, the "To Do" column drops below 3 items. Instead of waiting for a bi-weekly Sprint Planning meeting, what mechanism is triggered?',
    question: 'How does replenishment work in Scrumban?',
    options: [
      'The team halts all work until the next quarterly release.',
      'Trigger-based replenishment: A backlog replenishment meeting is called as soon as ready work drops below a minimum threshold.',
      'Developers pick random tasks from archived sprints.',
      'The Engineering VP assigns new tickets.'
    ],
    correctIndex: 1,
    explanation: 'Scrumban uses trigger-based replenishment where new work is pulled from the Product Backlog whenever the buffer drops below a pre-set threshold.'
  },
  {
    id: 'q_scrumban_3',
    domain: 'scrumban-hybrid',
    domainName: 'Scrumban Execution',
    scenario: 'A Scrumban team has eliminated story point estimations in favor of throughput counting. What enables this shift?',
    question: 'Why can Scrumban teams rely on item count throughput instead of story point estimation?',
    options: [
      'Because all items are right-sized into small, granular, similarly-sized tasks before entering the workflow.',
      'Because story points are illegal under ISO standards.',
      'Because throughput counts require advanced quantum computing.',
      'Because estimating story points takes zero time.'
    ],
    correctIndex: 0,
    explanation: 'When work items are right-sized into small, consistent granular tasks, counting item throughput yields accurate statistical forecasting without story point estimation overhead.'
  },
  {
    id: 'q_scrumban_4',
    domain: 'scrumban-hybrid',
    domainName: 'Scrumban Execution',
    scenario: 'When should a team consider transitioning from pure Scrum to Scrumban?',
    question: 'Which team environment is best suited for Scrumban?',
    options: [
      'Teams working on maintenance, continuous support, or highly volatile backlog priorities where 2-week Sprint goals are constantly broken by urgent bugs.',
      'Teams that want to eliminate all accountability and retrospectives.',
      'Teams working on 5-year hardware projects with fixed scope.',
      'Single-person freelancer projects.'
    ],
    correctIndex: 0,
    explanation: 'Scrumban excels in high-interruption, continuous flow, maintenance, or operations environments where rigid sprint batching creates unnecessary overhead.'
  },
  {
    id: 'q_scrumban_5',
    domain: 'scrumban-hybrid',
    domainName: 'Scrumban Execution',
    scenario: 'How are Retrospectives handled in Scrumban compared to Scrum?',
    question: 'What is the Retrospective cadence in Scrumban?',
    options: [
      'Retrospectives are banned in Scrumban.',
      'Retrospectives can occur on a fixed time-based cadence (e.g. bi-weekly) OR on-demand when a workflow bottleneck/process anomaly is detected.',
      'Retrospectives are held once per year.',
      'Retrospectives are conducted exclusively by external auditors.'
    ],
    correctIndex: 1,
    explanation: 'Scrumban supports flexible retro cadences—either regular cadence-based reviews or event-driven retros triggered when WIP anomalies occur.'
  },

  // --- DIMENSION 5: SCALING AGILE (SAFe / LeSS / Nexus) (5 Questions) ---
  {
    id: 'q_scaling_1',
    domain: 'scaling-agile',
    domainName: 'Scaling Agile Frameworks',
    scenario: 'In SAFe (Scaled Agile Framework), during Program Increment (PI) Planning, two Agile Release Train (ART) teams discover a critical cross-team API dependency that blocks their release.',
    question: 'How is this cross-team dependency managed on the Program Board?',
    options: [
      'The teams ignore the dependency and resolve it after code deployment.',
      'The dependency is visually mapped on the Program Board with string/connectors, and a plan is agreed upon during PI Planning breakout sessions.',
      'The System Architect writes a 50-page spec document to mandate API specs.',
      'PI Planning is aborted and teams revert to waterfall delivery.'
    ],
    correctIndex: 1,
    explanation: 'In SAFe PI Planning, dependencies between teams are identified, discussed, and mapped visually on the ART Program Board to ensure alignment, target sprint resolution, and risk mitigation.'
  },
  {
    id: 'q_scaling_2',
    domain: 'scaling-agile',
    domainName: 'Scaling Agile Frameworks',
    scenario: 'In Large Scale Scrum (LeSS), multiple Scrum Teams work on a single Product Backlog.',
    question: 'Who is accountable for managing the single Product Backlog in LeSS?',
    options: [
      'Each Scrum Team has its own individual Product Owner who operates independently.',
      'One overall Product Owner owns the entire Product Backlog across all LeSS teams.',
      'The Chief Executive Officer.',
      'A committee of Scrum Masters.'
    ],
    correctIndex: 1,
    explanation: 'In LeSS, there is only ONE Product Owner for the entire product who owns the single Product Backlog, ensuring single-point alignment while multiple teams pull items from it.'
  },
  {
    id: 'q_scaling_3',
    domain: 'scaling-agile',
    domainName: 'Scaling Agile Frameworks',
    scenario: 'In the Nexus Framework (by Scrum.org), 3 to 10 Scrum Teams work together on a single Product Backlog to build a single Increment.',
    question: 'What is the role of the Nexus Integration Team (NIT)?',
    options: [
      'To do all the coding work for all teams.',
      'To ensure that an integrated Increment (satisfying the Definition of Done) is produced at least every Sprint by coordinating cross-team integration.',
      'To manage human resources and performance reviews.',
      'To audit team timesheets.'
    ],
    correctIndex: 1,
    explanation: 'The Nexus Integration Team is accountable for ensuring that a integrated, release-ready Increment is produced every Sprint by coaching and resolving cross-team integration friction.'
  },
  {
    id: 'q_scaling_4',
    domain: 'scaling-agile',
    domainName: 'Scaling Agile Frameworks',
    scenario: 'During SAFe PI Planning, teams categorize risks using the ROAM framework.',
    question: 'What does the acronym ROAM stand for in SAFe risk management?',
    options: [
      'Resolved, Owned, Accepted, Mitigated.',
      'Rejected, Overridden, Approved, Managed.',
      'Review, Organize, Analyze, Monitor.',
      'Run, Operate, Automate, Maintain.'
    ],
    correctIndex: 0,
    explanation: 'ROAM risk management categorizes PI risks into: Resolved (no longer a risk), Owned (assigned to someone), Accepted (acknowledged), or Mitigated (plan created to reduce impact).'
  },
  {
    id: 'q_scaling_5',
    domain: 'scaling-agile',
    domainName: 'Scaling Agile Frameworks',
    scenario: 'Multiple teams scaling Agile experience code integration conflicts because teams only merge code once at the end of a 10-week PI.',
    question: 'Which engineering practice is essential for scaled agile teams to avoid integration hell?',
    options: [
      'Continuous Integration (CI) where code is integrated and verified multiple times daily across all teams.',
      'Merging code only once a year on release night.',
      'Developing on isolated local laptops without git commits.',
      'Manual regression testing lasting 4 weeks post-PI.'
    ],
    correctIndex: 0,
    explanation: 'Continuous Integration (CI) and automated build testing are fundamental technical practices required when scaling Agile to ensure the integrated codebase remains deployable at all times.'
  },

  // --- DIMENSION 6: PRODUCT OWNERSHIP & BACKLOG (5 Questions) ---
  {
    id: 'q_po_1',
    domain: 'product-ownership',
    domainName: 'Product Ownership & Backlog',
    scenario: 'A Product Owner writes a user story: "As an admin, I want a database so that data is stored." The Developers complain it is vague and untestable.',
    question: 'Which criteria acronym evaluates effective user story quality?',
    options: [
      'INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable).',
      'SMART (Specific, Measurable, Achievable, Relevant, Time-bound).',
      'SWOT (Strengths, Weaknesses, Opportunities, Threats).',
      'RICE (Reach, Impact, Confidence, Effort).'
    ],
    correctIndex: 0,
    explanation: 'The INVEST mnemonic (Bill Wake) describes characteristics of high-quality user stories: Independent, Negotiable, Valuable, Estimable, Small, and Testable.'
  },
  {
    id: 'q_po_2',
    domain: 'product-ownership',
    domainName: 'Product Ownership & Backlog',
    scenario: 'To eliminate ambiguity between Developers and QA testers, the Product Owner writes acceptance criteria using Behavior-Driven Development (BDD).',
    question: 'What is the standard Gherkin syntax structure for BDD acceptance criteria?',
    options: [
      'Given [Context], When [Action], Then [Expected Outcome].',
      'If [Condition], Then [Execute], Else [Stop].',
      'Select [Field], From [Table], Where [Filter].',
      'As a [Role], I want [Feature], So that [Benefit].'
    ],
    correctIndex: 0,
    explanation: 'Gherkin syntax uses Given (initial state/context), When (user action/event), Then (expected outcome/behavior) to clarify behavior unambiguously.'
  },
  {
    id: 'q_po_3',
    domain: 'product-ownership',
    domainName: 'Product Ownership & Backlog',
    scenario: 'A Product Owner spends 100% of their time writing detailed JIRA tickets and has zero time to speak with customers or analyze product usage data.',
    question: 'What is an anti-pattern in Product Ownership demonstrated here?',
    options: [
      'Functioning as a "Scribe / Backlog Administrator" instead of an empowered Value Maximizer and Customer Advocate.',
      'Practicing effective time management.',
      'Delegating story writing to Developers.',
      'Conducting A/B testing.'
    ],
    correctIndex: 0,
    explanation: 'The "Scribe PO" anti-pattern occurs when a PO becomes a passive ticket writer for stakeholders rather than actively discovering customer value and managing product strategy.'
  },
  {
    id: 'q_po_4',
    domain: 'product-ownership',
    domainName: 'Product Ownership & Backlog',
    scenario: 'During backlog refinement, the Product Owner and Developers slice a giant 40-point epic feature into 5 smaller user stories.',
    question: 'What is the primary benefit of story slicing in Agile?',
    options: [
      'Shorter cycle times, faster feedback loops, and earlier incremental value delivery.',
      'It increases total story point count to make the team look faster.',
      'It allows managers to micro-manage developers.',
      'It eliminates the need for sprint testing.'
    ],
    correctIndex: 0,
    explanation: 'Slicing stories vertically into small, valuable increments reduces cycle time, enables rapid user feedback, and minimizes risk.'
  },
  {
    id: 'q_po_5',
    domain: 'product-ownership',
    domainName: 'Product Ownership & Backlog',
    scenario: 'Who is ultimately accountable for prioritizing and ordering items in the Product Backlog?',
    question: 'Who owns Product Backlog prioritization in Scrum?',
    options: [
      'The Product Owner alone.',
      'The Lead Architect.',
      'The Scrum Master.',
      'The Chief Executive Officer.'
    ],
    correctIndex: 0,
    explanation: 'The Product Owner is solely accountable for ordering the Product Backlog to maximize product value. Others may influence, but the PO has final accountability.'
  },

  // --- DIMENSION 7: PRODUCT STRATEGY & PM (5 Questions) ---
  {
    id: 'q_pm_1',
    domain: 'product-strategy',
    domainName: 'Product Strategy & PM',
    scenario: 'A Product Manager is designing a quarterly roadmap. Business executives demand specific delivery calendar dates for 20 new features over the next 12 months.',
    question: 'How should an outcome-driven Product Manager structure the roadmap to balance executive alignment with agile agility?',
    options: [
      'Commit to fixed calendar dates for all 20 features and penalize developers if missed.',
      'Structure the roadmap into "Now / Next / Later" horizons tied to measurable Key Results (OKRs) rather than hard calendar output dates.',
      'Refuse to share any roadmap or feature plans with executives.',
      'Delegate all roadmap decisions to an external consultant.'
    ],
    correctIndex: 1,
    explanation: 'Outcome-based roadmaps using "Now / Next / Later" horizons focus on solving customer problems and achieving measurable Key Results (OKRs) rather than locking into brittle long-term output commitments.'
  },
  {
    id: 'q_pm_2',
    domain: 'product-strategy',
    domainName: 'Product Strategy & PM',
    scenario: 'A SaaS product has high user acquisition numbers but a 35% churn rate on Day 30. Sales wants to launch new enterprise features immediately.',
    question: 'In Product-Led Growth (PLG), how should the Product Manager prioritize?',
    options: [
      'Focus product effort on fixing user onboarding activation and retention funnels to plug the "leaky bucket" before driving more acquisition.',
      'Ignore churn and spend all budget on Google Ad marketing.',
      'Build 50 more unvalidated features.',
      'Double product pricing.'
    ],
    correctIndex: 0,
    explanation: 'In PLG, fixing retention and activation funnels ("leaky bucket") is prioritized over new feature bloat to ensure sustainable unit economics.'
  },
  {
    id: 'q_pm_3',
    domain: 'product-strategy',
    domainName: 'Product Strategy & PM',
    scenario: 'A Product Manager evaluates a feature using WSJF (Weighted Shortest Job First). Feature X has a Cost of Delay of 30 and Job Size of 5. Feature Y has Cost of Delay of 40 and Job Size of 20.',
    question: 'Which feature has a higher WSJF score and should be prioritized first?',
    options: [
      'Feature X (WSJF = 30 / 5 = 6.0) is prioritized over Feature Y (WSJF = 40 / 20 = 2.0).',
      'Feature Y is prioritized because its total Cost of Delay is higher.',
      'Both features have equal priority.',
      'Neither feature should be built.'
    ],
    correctIndex: 0,
    explanation: 'WSJF = Cost of Delay / Job Size. Feature X (6.0) delivers more value per unit of effort than Feature Y (2.0), making Feature X the higher priority.'
  },
  {
    id: 'q_pm_4',
    domain: 'product-strategy',
    domainName: 'Product Strategy & PM',
    scenario: 'What metric measures the financial sustainability of acquiring new customers relative to their lifetime revenue value in SaaS Product Management?',
    question: 'Which metric ratio indicates healthy SaaS business unit economics?',
    options: [
      'LTV / CAC Ratio (Lifetime Value to Customer Acquisition Cost) > 3.0',
      'CSAT / Net Promoter Ratio',
      'Sprint Velocity / Story Point Ratio',
      'Code Coverage Ratio'
    ],
    correctIndex: 0,
    explanation: 'A healthy SaaS business targets an LTV:CAC ratio greater than 3:1, meaning customer lifetime value is at least 3x the cost to acquire them.'
  },
  {
    id: 'q_pm_5',
    domain: 'product-strategy',
    domainName: 'Product Strategy & PM',
    scenario: 'An executive asks the Product Manager the difference between a Product Vision and a Product Strategy.',
    question: 'How are Product Vision and Product Strategy differentiated?',
    options: [
      'Vision is the aspirational long-term "Why/Future"; Strategy is the strategic plan ("Who, What, How") to achieve that vision.',
      'Vision and Strategy are identical terms.',
      'Vision is written by Developers; Strategy is written by Scrum Masters.',
      'Vision applies only to sales teams.'
    ],
    correctIndex: 0,
    explanation: 'Product Vision defines the aspirational ultimate purpose of the product. Product Strategy outlines the target market, value proposition, and roadmap path to realize that vision.'
  },

  // --- DIMENSION 8: AI-AUGMENTED AGILE LEADERSHIP (5 Questions) ---
  {
    id: 'q_ai_1',
    domain: 'ai-augmented-agile',
    domainName: 'AI-Augmented Agile Leadership',
    scenario: 'A Scrum Master uses an LLM AI assistant to analyze recent sprint transcripts, Jira cycle times, and retro comments.',
    question: 'How can AI most effectively augment the Scrum Master in Sprint Planning & Retrospectives?',
    options: [
      'By automatically making all human decisions without team discussion.',
      'By synthesizing sentiment, spotting hidden cycle time bottlenecks, and generating creative retrospective icebreakers/formats based on squad health.',
      'By replacing the team members entirely with AI bots.',
      'By automatically firing slow developers.'
    ],
    correctIndex: 1,
    explanation: 'AI acts as a co-pilot for Agile coaches, synthesizing historical data, detecting subtle flow bottlenecks, and recommending tailored retrospectives.'
  },
  {
    id: 'q_ai_2',
    domain: 'ai-augmented-agile',
    domainName: 'AI-Augmented Agile Leadership',
    scenario: 'A Product Owner uses an AI Story Generator to draft BDD Gherkin acceptance criteria for 10 new user stories.',
    question: 'What is the essential human Product Owner responsibility when using AI-generated user stories?',
    options: [
      'Copy and paste AI output directly into production without reviewing.',
      'Validate, refine, and verify that AI-generated stories meet INVEST criteria, reflect real customer intent, and undergo developer refinement.',
      'Delete the AI stories and write them manually on paper.',
      'Force developers to sign off without reading.'
    ],
    correctIndex: 1,
    explanation: 'AI accelerates initial drafting, but human PO accountability requires verifying accuracy, INVEST compliance, edge cases, and customer alignment.'
  },
  {
    id: 'q_ai_3',
    domain: 'ai-augmented-agile',
    domainName: 'AI-Augmented Agile Leadership',
    scenario: 'In a SAFe environment with 12 teams, an AI predictive risk engine analyzes historical cross-team dependency logs during PI Planning.',
    question: 'What value does AI predictive analytics bring to Scaled Agile PI Planning?',
    options: [
      'It predicts cross-team API dependency delays and alerts Release Train Engineers (RTEs) to high-risk critical path stories before Sprints start.',
      'It eliminates the need for PI Planning altogether.',
      'It automatically writes 100% of the software code.',
      'It manages financial payroll.'
    ],
    correctIndex: 0,
    explanation: 'AI predictive analytics models historical velocity and cross-team dependencies to flag high-risk bottlenecks early during PI Planning.'
  },
  {
    id: 'q_ai_4',
    domain: 'ai-augmented-agile',
    domainName: 'AI-Augmented Agile Leadership',
    scenario: 'A Product Manager prompts an AI assistant: "Generate 5 outcome-based roadmaps for my fintech app."',
    question: 'Which prompt engineering technique yields the highest quality strategic AI output for Product Management?',
    options: [
      'Providing rich context: target customer segment, strategic OKRs, current North Star metrics, constraint boundaries, and desired output format (Now/Next/Later).',
      'Writing a 1-word prompt: "Roadmap".',
      'Asking the AI to guess the company strategy.',
      'Using random text strings.'
    ],
    correctIndex: 0,
    explanation: 'High-quality AI prompt engineering requires supplying role context, strategic OKR targets, customer constraints, and structured output formatting.'
  },
  {
    id: 'q_ai_5',
    domain: 'ai-augmented-agile',
    domainName: 'AI-Augmented Agile Leadership',
    scenario: 'An Agile Coach evaluates AI tools for impediment root cause analysis using the 5 Whys technique.',
    question: 'What is the primary benefit of AI-assisted 5-Whys root cause analysis for Scrum Masters?',
    options: [
      'It helps unblock complex systemic friction by exploring non-obvious technical and organizational causal chains systematically.',
      'It blames individual team members automatically.',
      'It replaces git code repositories.',
      'It guarantees zero bugs forever.'
    ],
    correctIndex: 0,
    explanation: 'AI-assisted 5-Whys analysis systematically guides coaches through multi-layer root cause exploration, helping separate surface symptoms from systemic bottlenecks.'
  }
];
