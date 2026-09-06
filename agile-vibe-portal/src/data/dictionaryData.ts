import type { DictionaryTerm } from '../types';

export const AGILE_DICTIONARY_TERMS: DictionaryTerm[] = [
  // ==========================================
  // --- SCRUM MASTER (SM) TERMS (35 TERMS) ---
  // ==========================================
  {
    id: 'dict_sm_1',
    term: 'Empiricism (Empirical Process Control)',
    role: 'scrum-master',
    category: 'Scrum Fundamentals',
    definition: 'An empirical approach means making decisions based on observed facts, real experimental evidence, and experience rather than predictive gut feel or rigid long-term plans. Empiricism rests on 3 pillars: Transparency, Inspection, and Adaptation.',
    exampleScenario: 'Instead of estimating a 12-month release date on day 1, the Scrum Master tracks sprint cycle times to forecast delivery based on actual empirical data.',
    keyTakeaway: 'Decisions must be driven by working software increments and empirical metrics.'
  },
  {
    id: 'dict_sm_2',
    term: 'Definition of Done (DoD)',
    role: 'scrum-master',
    category: 'Scrum Artifacts',
    definition: 'A formal description of the state of the Increment when it meets the quality measures required for the product. The DoD creates transparency and prevents hidden technical debt.',
    exampleScenario: 'A user story cannot be marked "Done" unless unit tests pass, code reviews pass, regression tests pass, and acceptance criteria are verified.',
    keyTakeaway: 'No item can be presented in Sprint Review without satisfying 100% of the DoD.'
  },
  {
    id: 'dict_sm_3',
    term: 'Definition of Ready (DoR)',
    role: 'scrum-master',
    category: 'Scrum Artifacts',
    definition: 'A working agreement defining the criteria a backlog item must satisfy before developers pull it into Sprint Planning (e.g., clear acceptance criteria, dependencies resolved, estimated).',
    exampleScenario: 'The team refuses to pull Story X into Sprint 25 because its third-party API dependencies have not been confirmed by the vendor.',
    keyTakeaway: 'DoR prevents sprint bottlenecks by ensuring items are refined before sprint execution begins.'
  },
  {
    id: 'dict_sm_4',
    term: 'Cumulative Flow Diagram (CFD)',
    role: 'scrum-master',
    category: 'Flow Metrics',
    definition: 'An area chart depicting the total work items in each workflow state (To Do, In Progress, Review, Done) over time. Widening bands indicate bottlenecks.',
    exampleScenario: 'A widening "In Review" band signals that code review delays are blocking developer throughput.',
    keyTakeaway: 'Use CFD charts during retro to spot WIP limit violations early.'
  },
  {
    id: 'dict_sm_5',
    term: 'Cycle Time vs Lead Time',
    role: 'scrum-master',
    category: 'Flow Metrics',
    definition: 'Lead Time measures the total time elapsed from item creation to completion. Cycle Time measures active work time from start of development to completion.',
    exampleScenario: 'Lead time = 14 days (waiting in backlog), but Cycle time = 3 days (active coding + testing).',
    keyTakeaway: 'Focus on reducing Cycle Time variance to improve team velocity predictability.'
  },
  {
    id: 'dict_sm_6',
    term: 'Psychological Safety',
    role: 'scrum-master',
    category: 'Agile Coaching',
    definition: 'A shared team belief that the team is safe for interpersonal risk-taking, where members feel comfortable admitting mistakes and proposing creative ideas without fear of embarrassment.',
    exampleScenario: 'During retros, developers feel safe admitting an architecture error without receiving blame from leadership.',
    keyTakeaway: 'High psychological safety is the single biggest predictor of squad performance (Google Project Aristotle).'
  },
  {
    id: 'dict_sm_7',
    term: 'SAFe Program Increment (PI) Planning',
    role: 'scrum-master',
    category: 'Scaling Agile',
    definition: 'A 2-day cadence-based event in the Scaled Agile Framework where all teams on an Agile Release Train (ART) align on vision, dependencies, and commit to PI Objectives.',
    exampleScenario: 'Scrum Masters facilitate team breakout sessions to map dependencies on the Program Board.',
    keyTakeaway: 'Resolves cross-team dependencies before Sprints begin.'
  },
  {
    id: 'dict_sm_8',
    term: 'Timeboxing',
    role: 'scrum-master',
    category: 'Scrum Events',
    definition: 'Allocating a fixed maximum unit of time to an activity or Scrum event to prevent scope expansion and maintain focused momentum.',
    exampleScenario: 'Daily Scrum is timeboxed to strictly 15 minutes, ensuring high energy and focus.',
    keyTakeaway: 'Timeboxes encourage focus and force essential prioritization.'
  },
  {
    id: 'dict_sm_9',
    term: 'Sprint Goal',
    role: 'scrum-master',
    category: 'Scrum Artifacts',
    definition: 'The single overarching objective for the Sprint created during Sprint Planning that provides flexibility to developers regarding exact scope implementation.',
    exampleScenario: 'Sprint Goal: "Enable self-serve credit card checkout for EU customers."',
    keyTakeaway: 'Sprint Goals unite developers on business outcomes rather than individual ticket checklists.'
  },
  {
    id: 'dict_sm_10',
    term: 'Sprint Retrospective Themes (Sailboat, Racecar, 4Ls)',
    role: 'scrum-master',
    category: 'Scrum Events',
    definition: 'Facilitation metaphors used by Scrum Masters to vary retrospective perspectives and identify actionable continuous improvement experiments.',
    exampleScenario: 'Using the Sailboat retro (Wind = Drivers, Anchors = Inhibitors, Rocks = Risks, Sun = Gratitude) to unearth hidden process blockers.',
    keyTakeaway: 'Rotate retro formats to avoid retro fatigue and encourage honest feedback.'
  },
  {
    id: 'dict_sm_11',
    term: 'Daily Scrum (Walking the Board Right-to-Left)',
    role: 'scrum-master',
    category: 'Scrum Events',
    definition: 'A 15-minute daily event where developers inspect progress toward the Sprint Goal by reviewing board items starting from right (nearest Done) to left.',
    exampleScenario: 'Instead of person-by-person status updates, the team inspects aging "In Review" cards first to unblock completion.',
    keyTakeaway: 'Stop starting, start finishing.'
  },
  {
    id: 'dict_sm_12',
    term: 'Sprint Review vs Product Demo',
    role: 'scrum-master',
    category: 'Scrum Events',
    definition: 'Sprint Review is a collaborative working session where the Scrum Team and stakeholders inspect the increment and adapt the Product Backlog, not just a static PowerPoint demo.',
    exampleScenario: 'Stakeholders test the working software increment hands-on and adjust upcoming Q4 backlog priorities.',
    keyTakeaway: 'Sprint Review is an empirical feedback loop, not a one-way presentation.'
  },
  {
    id: 'dict_sm_13',
    term: 'Impediment vs Blocker',
    role: 'scrum-master',
    category: 'Agile Coaching',
    definition: 'A Blocker halts work on a specific item. An Impediment is an organizational barrier that slows down overall squad flow or prevents full agile adoption.',
    exampleScenario: 'Blocker: Broken API key. Impediment: Security team requiring a 3-week manual approval process for every deployment script.',
    keyTakeaway: 'The SM actively resolves organizational impediments to increase squad throughput.'
  },
  {
    id: 'dict_sm_14',
    term: '5 Whys Root Cause Analysis',
    role: 'scrum-master',
    category: 'Continuous Improvement',
    definition: 'An iterative interrogative technique used to explore the cause-and-effect relationships underlying a process defect by asking "Why?" 5 times.',
    exampleScenario: 'Asking 5 Whys reveals that staging deployment script failures stem from missing environment variables in CI/CD config.',
    keyTakeaway: 'Fix underlying system causes rather than temporary symptoms.'
  },
  {
    id: 'dict_sm_15',
    term: 'Cynefin Framework',
    role: 'scrum-master',
    category: 'Agile Coaching',
    definition: 'A conceptual decision-making framework created by Dave Snowden that categorizes problems into 5 domains: Clear, Complicated, Complex, Chaotic, and Confusion.',
    exampleScenario: 'Software development operates primarily in the Complex domain (Probe-Sense-Respond), requiring empirical iteration.',
    keyTakeaway: 'Avoid applying linear plan-driven approaches to complex software domains.'
  },
  {
    id: 'dict_sm_16',
    term: 'Work-In-Progress (WIP) Limits',
    role: 'scrum-master',
    category: 'Kanban & Flow',
    definition: 'Explicit constraints placed on the maximum number of work items allowed in a workflow column to prevent context switching and bottlenecks.',
    exampleScenario: 'Setting a WIP limit of 3 on "In Review" forces developers to complete pending reviews before pulling new coding tasks.',
    keyTakeaway: 'WIP limits accelerate throughput by promoting team swarming.'
  },
  {
    id: 'dict_sm_17',
    term: "Little's Law",
    role: 'scrum-master',
    category: 'Kanban & Flow',
    definition: 'A mathematical law stating that Average Cycle Time = Work In Progress (WIP) ÷ Throughput. Reducing WIP directly shortens cycle time.',
    exampleScenario: 'Cutting active WIP from 20 items to 10 items reduces average feature delivery cycle time from 10 days to 5 days.',
    keyTakeaway: 'Control WIP to systematically reduce cycle time.'
  },
  {
    id: 'dict_sm_18',
    term: 'Throughput & Cycle Time Scatterplot',
    role: 'scrum-master',
    category: 'Flow Metrics',
    definition: 'A scatterplot graphing completed items against cycle time, highlighting 50th, 85th, and 95th percentile SLAs for probabilistic forecasting.',
    exampleScenario: 'The team uses their 85th percentile SLA (4 days) to confidently answer "When will this story be done?"',
    keyTakeaway: 'Use percentile SLAs instead of single-point deterministic estimates.'
  },
  {
    id: 'dict_sm_19',
    term: 'Velocity & Predictability Trend',
    role: 'scrum-master',
    category: 'Flow Metrics',
    definition: 'Metric tracking planned vs delivered story points over multiple sprints to gauge team stability and sprint commitment reliability.',
    exampleScenario: 'A team delivering 38, 40, 39, and 41 points has high velocity predictability.',
    keyTakeaway: 'Velocity is a capacity planning tool for the team, not a comparative performance metric between teams.'
  },
  {
    id: 'dict_sm_20',
    term: 'Servant Leadership Stance',
    role: 'scrum-master',
    category: 'Agile Coaching',
    definition: 'A leadership philosophy where the leader primary goal is to serve the team by removing obstacles, facilitating growth, and enabling self-management.',
    exampleScenario: 'The SM shields developers from executive micro-management, empowering them to choose technical execution details.',
    keyTakeaway: 'Lead through influence and empowerment, not command-and-control authority.'
  },
  {
    id: 'dict_sm_21',
    term: 'Spotify Squad Model (Squads, Tribes, Chapters, Guilds)',
    role: 'scrum-master',
    category: 'Scaling Agile',
    definition: 'An organizational scaling framework comprising autonomous cross-functional Squads, aligned Tribes, functional discipline Chapters, and interest-based Guilds.',
    exampleScenario: 'Scrum Masters belong to the Agile Coaching Chapter to share retrospective facilitation tools across squads.',
    keyTakeaway: 'Balances squad autonomy with organizational alignment.'
  },
  {
    id: 'dict_sm_22',
    term: 'Spotify Health Radar Check',
    role: 'scrum-master',
    category: 'Team Health',
    definition: 'A workshop technique evaluating squad health across 10 dimensions (Easy to Release, Suitable Architecture, Fun, Learning, Value delivered).',
    exampleScenario: 'Red scores on "Easy to Release" prompt a joint SM & DevOps initiative to automate pipeline testing.',
    keyTakeaway: 'Visualizes qualitative team sentiment to drive retrospective improvements.'
  },
  {
    id: 'dict_sm_23',
    term: 'Lyssa Adkins 4 Coaching Stances',
    role: 'scrum-master',
    category: 'Agile Coaching',
    definition: 'The 4 fundamental stances of an Agile Coach: Teaching (explaining concepts), Mentoring (sharing experience), Facilitating (neutral process guide), and Coaching (asking powerful questions).',
    exampleScenario: 'When a squad struggles with estimation, the SM switches to Teaching stance to explain relative story points.',
    keyTakeaway: 'Consciously choose the appropriate coaching stance for each situation.'
  },
  {
    id: 'dict_sm_24',
    term: 'Large-Scale Scrum (LeSS)',
    role: 'scrum-master',
    category: 'Scaling Agile',
    definition: 'A lightweight framework designed by Craig Larman and Bas Vodde for scaling Scrum across up to 8 teams working on a single Product Backlog with 1 Product Owner.',
    exampleScenario: 'Multiple LeSS teams attend a joint Overall Sprint Review to inspect one single integrated product increment.',
    keyTakeaway: 'Descale organizational complexity before adding heavy scaling frameworks.'
  },
  {
    id: 'dict_sm_25',
    term: 'Nexus Framework (Scrum.org)',
    role: 'scrum-master',
    category: 'Scaling Agile',
    definition: 'A scaling framework developed by Ken Schwaber that adds a Nexus Integration Team (NIT) to coordinate dependencies across 3 to 9 Scrum teams.',
    exampleScenario: 'The NIT ensures daily integration builds compile cleanly without cross-team branch conflicts.',
    keyTakeaway: 'Focuses heavily on continuous integration and dependency management.'
  },
  {
    id: 'dict_sm_26',
    term: 'SAFe Agile Release Train (ART)',
    role: 'scrum-master',
    category: 'Scaling Agile',
    definition: 'A long-term team of Agile teams (50-125 people) that plans, commits, and executes together on a synchronized Program Increment cadence.',
    exampleScenario: 'The ART aligns 8 squads toward launching a joint enterprise cloud banking gateway.',
    keyTakeaway: 'Synchronizes teams along common business value streams.'
  },
  {
    id: 'dict_sm_27',
    term: 'ROAM Risk Categorization',
    role: 'scrum-master',
    category: 'Scaling Agile',
    definition: 'A technique used in PI Planning to classify program risks into 4 categories: Resolved, Owned, Accepted, or Mitigated.',
    exampleScenario: 'A third-party API outage risk is "Owned" by Senior Architect Alex for resolution before Sprint 25.',
    keyTakeaway: 'Ensures no program risk is left unowned or unmonitored.'
  },
  {
    id: 'dict_sm_28',
    term: 'Scrum Anti-Pattern: Scribe Scrum Master',
    role: 'scrum-master',
    category: 'Anti-Patterns',
    definition: 'An anti-pattern where the Scrum Master acts merely as an administrative secretary updating Jira cards instead of coaching the team on empiricism.',
    exampleScenario: 'Developers wait for the SM to update card statuses during standup instead of dragging their own cards.',
    keyTakeaway: 'Empower developers to own their workflow board.'
  },
  {
    id: 'dict_sm_29',
    term: 'Scrum Anti-Pattern: Daily Status Report',
    role: 'scrum-master',
    category: 'Anti-Patterns',
    definition: 'An anti-pattern where developers report "What I did yesterday" directly to management during Daily Scrum instead of collaborating with peers on the Sprint Goal.',
    exampleScenario: 'Developers look at the engineering manager when speaking instead of looking at fellow team members.',
    keyTakeaway: 'Daily Scrum is by developers, for developers.'
  },
  {
    id: 'dict_sm_30',
    term: 'Mob Programming & Swarming',
    role: 'scrum-master',
    category: 'Engineering Practices',
    definition: 'A software development approach where the whole team works on the same thing, at the same time, in the same space, at the same computer.',
    exampleScenario: 'The team mobs on a critical security flaw to resolve code, unit tests, and staging verification in 2 hours.',
    keyTakeaway: 'Eliminates handoff wait times and accelerates knowledge sharing.'
  },
  {
    id: 'dict_sm_31',
    term: 'Technical Debt Capacity Allocation',
    role: 'scrum-master',
    category: 'Agile Flow',
    definition: 'Reserving a fixed percentage of sprint capacity (e.g. 20%) specifically for refactoring, architecture health, and tool maintenance.',
    exampleScenario: 'Reserving 8 story points in Sprint 24 to upgrade legacy Node.js dependencies.',
    keyTakeaway: 'Prevents system erosion and long-term velocity decay.'
  },
  {
    id: 'dict_sm_32',
    term: 'Sprint Burndown vs Burnup Chart',
    role: 'scrum-master',
    category: 'Flow Metrics',
    definition: 'A Burndown tracks remaining work down to zero. A Burnup tracks completed work upward toward a scope line, making scope additions transparent.',
    exampleScenario: 'A Burnup chart reveals that a flat burndown line was caused by mid-sprint scope creep rather than slow developer progress.',
    keyTakeaway: 'Burnup charts clearly differentiate scope changes from delivery velocity.'
  },
  {
    id: 'dict_sm_33',
    term: 'Sustainable Pace & Team Capacity',
    role: 'scrum-master',
    category: 'Team Health',
    definition: 'The principle that agile teams should be able to maintain a constant, healthy work pace indefinitely without burnout or forced overtime.',
    exampleScenario: 'The SM advises against pulling extra stories at 5 PM on Sprint Planning day to protect team longevity.',
    keyTakeaway: 'Overtime is an indicator of broken process planning, not dedication.'
  },
  {
    id: 'dict_sm_34',
    term: 'AI-Augmented Retrospective Facilitation',
    role: 'scrum-master',
    category: 'AI Practices',
    definition: 'Using AI prompt templates to summarize squad retro notes, categorize recurring impediments, and draft actionable experiment proposals.',
    exampleScenario: 'Feeding raw retro sticky notes into AI Studio to generate 5 Whys analysis and 1 committed experiment.',
    keyTakeaway: 'Leverage AI to streamline retro administrative synthesis.'
  },
  {
    id: 'dict_sm_35',
    term: 'Pair Programming & Code Review SLA',
    role: 'scrum-master',
    category: 'Engineering Practices',
    definition: 'A team working agreement establishing a 4-hour maximum turnaround time for peer code reviews to keep stories moving across the board.',
    exampleScenario: 'Developers set Slack notifications for pending pull requests, preventing stories from idling in "In Review".',
    keyTakeaway: 'Eliminates idle wait time between coding and testing stages.'
  },

  // ==========================================
  // --- PRODUCT OWNER (PO) TERMS (35 TERMS) ---
  // ==========================================
  {
    id: 'dict_po_1',
    term: 'INVEST Criteria',
    role: 'product-owner',
    category: 'Backlog Refinement',
    definition: 'Acronym for writing high-quality user stories: Independent, Negotiable, Valuable, Estimable, Small, and Testable.',
    exampleScenario: 'A story "Build entire billing platform" fails INVEST because it is not Small or Independent. It must be sliced vertically.',
    keyTakeaway: 'User stories must meet INVEST guidelines before Sprint Planning.'
  },
  {
    id: 'dict_po_2',
    term: 'BDD Gherkin Syntax (Given / When / Then)',
    role: 'product-owner',
    category: 'Acceptance Criteria',
    definition: 'A domain-specific language used in Behavior-Driven Development to specify acceptance criteria: Given (Context), When (Event), Then (Expected Outcome).',
    exampleScenario: 'Given user is logged in, When they click cancel subscription, Then display confirmation dialog and issue refund token.',
    keyTakeaway: 'Eliminates requirement ambiguity between PO, developers, and QA testers.'
  },
  {
    id: 'dict_po_3',
    term: 'Weighted Shortest Job First (WSJF)',
    role: 'product-owner',
    category: 'Prioritization',
    definition: 'A prioritization model used to sequence jobs by dividing Cost of Delay (CoD) by Job Size / Duration. High WSJF items deliver highest ROI fastest.',
    exampleScenario: 'Feature A (CoD = 20, Size = 2) has WSJF = 10. Feature B (CoD = 30, Size = 10) has WSJF = 3. Feature A is prioritized first.',
    keyTakeaway: 'Replaces executive opinion battles with data-driven economic scoring.'
  },
  {
    id: 'dict_po_4',
    term: 'User Story Mapping',
    role: 'product-owner',
    category: 'Product Backlog',
    definition: 'A visual technique created by Jeff Patton where user tasks are arranged horizontally along the user journey, and release slices are carved vertically.',
    exampleScenario: 'The team maps out a Checkout flow from cart addition to payment confirmation, carving MVP release 1.0 along top priority cards.',
    keyTakeaway: 'Keeps team focused on holistic customer experience rather than isolated backlog items.'
  },
  {
    id: 'dict_po_5',
    term: 'Cost of Delay (CoD)',
    role: 'product-owner',
    category: 'Value Optimization',
    definition: 'The financial impact of delaying feature delivery, calculated by combining User Value, Time Criticality, and Risk Reduction value.',
    exampleScenario: 'Missing a holiday shopping launch incurs $100K/day in Cost of Delay due to extreme time criticality.',
    keyTakeaway: 'Prioritize items with steep Cost of Delay curves.'
  },
  {
    id: 'dict_po_6',
    term: 'Product Backlog Refinement (Grooming)',
    role: 'product-owner',
    category: 'Backlog Management',
    definition: 'An ongoing collaborative event where the PO and Developers add detail, estimates, and acceptance criteria to Product Backlog items.',
    exampleScenario: 'The team holds two 1-hour refinement sessions per sprint to ensure 2 sprints of "Ready" stories exist ahead of planning.',
    keyTakeaway: 'Continuous refinement prevents Sprint Planning delays.'
  },
  {
    id: 'dict_po_7',
    term: 'Product Goal',
    role: 'product-owner',
    category: 'Scrum Artifacts',
    definition: 'A long-term target for the Scrum Team defined in the Scrum Guide 2020 that fulfills the Product Vision and bounds individual Sprint Goals.',
    exampleScenario: 'Product Goal: "Achieve $1M ARR with 99.99% transaction reliability on global payment gateways."',
    keyTakeaway: 'The Product Backlog emerges to satisfy the current Product Goal.'
  },
  {
    id: 'dict_po_8',
    term: 'Minimum Viable Product (MVP)',
    role: 'product-owner',
    category: 'Product Ownership',
    definition: 'The smallest version of a product that allows the team to collect the maximum amount of validated learning about customers with the least effort.',
    exampleScenario: 'Launching a landing page with a manual backend workflow to validate user demand before writing complex database code.',
    keyTakeaway: 'MVP is a learning experiment, not a buggy first release.'
  },
  {
    id: 'dict_po_9',
    term: 'Minimum Lovable Product (MLP)',
    role: 'product-owner',
    category: 'Product Ownership',
    definition: 'An evolution of MVP that delivers the minimum features needed to delight early adopters and generate passionate brand advocacy.',
    exampleScenario: 'Adding delightful micro-animations and intuitive onboarding UX to the initial release of a consumer budgeting app.',
    keyTakeaway: 'Delight users from day 1 to drive self-serve adoption.'
  },
  {
    id: 'dict_po_10',
    term: 'Enabler Spike (Technical / Functional)',
    role: 'product-owner',
    category: 'Backlog Refinement',
    definition: 'A timeboxed research story used to investigate an unknown technical dependency, prototype an architecture, or clear estimation risk.',
    exampleScenario: 'Creating a 2-point spike in Sprint 24 to evaluate whether Stripe vs Adyen API handles multi-currency settlement better.',
    keyTakeaway: 'Timebox spikes strictly to acquire the knowledge needed for estimation.'
  },
  {
    id: 'dict_po_11',
    term: 'Vertical Story Slicing',
    role: 'product-owner',
    category: 'Story Slicing',
    definition: 'Decomposing a large feature across all architectural layers (UI, Logic, DB) so each slice delivers end-to-end working software value.',
    exampleScenario: 'Slicing "Export Reports" into "Export CSV for top 10 rows" (Slice 1) instead of building the complete UI layer first.',
    keyTakeaway: 'Horizontal slicing delays integration; vertical slicing yields early feedback.'
  },
  {
    id: 'dict_po_12',
    term: 'RICE Prioritization Framework',
    role: 'product-owner',
    category: 'Prioritization',
    definition: 'Scoring model calculating (Reach × Impact × Confidence) ÷ Effort to evaluate candidate backlog features objectively.',
    exampleScenario: 'Feature A (Reach: 5K, Impact: 3, Conf: 80%, Effort: 2) gets RICE = 6,000. Feature B gets 2,000. Feature A is prioritized.',
    keyTakeaway: 'Reduces bias by explicitly factoring team confidence level.'
  },
  {
    id: 'dict_po_13',
    term: 'Kano Model',
    role: 'product-owner',
    category: 'Prioritization',
    definition: 'A feature prioritization theory categorizing customer preferences into Must-Haves (Threshold), Performance (Linear), and Delighters (Excitement).',
    exampleScenario: 'SSL encryption is a Must-Have; 1-click checkout is a Performance feature; AI personalized recommendations is a Delighter.',
    keyTakeaway: 'Must-Haves prevent user churn; Delighters drive competitive differentiation.'
  },
  {
    id: 'dict_po_14',
    term: 'MoSCoW Prioritization',
    role: 'product-owner',
    category: 'Prioritization',
    definition: 'A technique categorizing backlog requirements into Must Have, Should Have, Could Have, and Won\'t Have (for this release).',
    exampleScenario: 'Sorting release 2.0 backlog so Must Haves occupy no more than 60% of available sprint capacity.',
    keyTakeaway: 'Protects release dates by making Could Haves flexible scope buffers.'
  },
  {
    id: 'dict_po_15',
    term: 'User Persona & Empathy Map',
    role: 'product-owner',
    category: 'Customer Ownership',
    definition: 'Semi-fictional representation of target customers based on user research, describing their goals, pain points, behaviors, and buying motivations.',
    exampleScenario: 'Creating "Enterprise CFO Elena" persona to guide security and audit export feature requirements.',
    keyTakeaway: 'Build features for real user personas, not generic internal assumptions.'
  },
  {
    id: 'dict_po_16',
    term: 'Epics vs Features vs User Stories vs Tasks',
    role: 'product-owner',
    category: 'Backlog Hierarchy',
    definition: 'The standard hierarchy of backlog items: Epics (large multi-sprint strategic initiatives) -> Features -> User Stories (deliverable sprint items) -> Tasks.',
    exampleScenario: 'Epic: Global Billing -> Feature: EU VAT Compliance -> Story: Calculate French VAT at Checkout -> Task: Write VAT unit tests.',
    keyTakeaway: 'Maintain clear vertical traceability across backlog levels.'
  },
  {
    id: 'dict_po_17',
    term: 'PO Anti-Pattern: Scribe Product Owner',
    role: 'product-owner',
    category: 'Anti-Patterns',
    definition: 'An anti-pattern where the PO acts merely as a order-taker writing tickets dictated by executives without authority to prioritize value.',
    exampleScenario: 'The PO accepts every stakeholder request into the backlog without evaluating ROI or saying "No".',
    keyTakeaway: 'The PO must have authority to order the Product Backlog for maximum value.'
  },
  {
    id: 'dict_po_18',
    term: 'PO Anti-Pattern: Feature Factory',
    role: 'product-owner',
    category: 'Anti-Patterns',
    definition: 'An organization focused exclusively on shipping a high volume of output features without measuring whether those features achieve business outcomes.',
    exampleScenario: 'Shipping 50 new buttons in Q2 while overall active user retention drops by 15%.',
    keyTakeaway: 'Measure success by customer outcomes, not feature output quantity.'
  },
  {
    id: 'dict_po_19',
    term: 'Backlog Ordering vs Backlog Prioritization',
    role: 'product-owner',
    category: 'Backlog Management',
    definition: 'Prioritization assigns importance ranks. Ordering places items in a strict sequential sequence considering dependencies, risk, and learning value.',
    exampleScenario: 'A medium-priority architecture story is ordered first because top-priority feature B depends on it.',
    keyTakeaway: 'The Product Backlog is a strictly ordered 1-to-N list.'
  },
  {
    id: 'dict_po_20',
    term: 'Non-Functional Requirements (NFRs)',
    role: 'product-owner',
    category: 'Acceptance Criteria',
    definition: 'Constraints placed on system attributes such as performance, security, availability, latency, and compliance.',
    exampleScenario: 'Specifying that payment processing must complete in under 500ms at 10,000 requests/sec peak load.',
    keyTakeaway: 'Embed critical NFRs directly into acceptance criteria or Definition of Done.'
  },
  {
    id: 'dict_po_21',
    term: 'Relative Point Estimation (Planning Poker)',
    role: 'product-owner',
    category: 'Estimation',
    definition: 'An agile estimation technique where developers compare story effort relatively against baseline reference stories using Fibonacci numbers (1, 2, 3, 5, 8, 13).',
    exampleScenario: 'Story A is estimated as 3 points because it is twice as complex as the 1-point baseline login story.',
    keyTakeaway: 'Relative estimation is faster and more accurate than absolute hour guesses.'
  },
  {
    id: 'dict_po_22',
    term: 'Fibonacci Sequence in Agile Estimation',
    role: 'product-owner',
    category: 'Estimation',
    definition: 'Using non-linear numbers (1, 2, 3, 5, 8, 13, 21) to reflect increasing uncertainty as work items grow larger.',
    exampleScenario: 'Choosing between 8 vs 13 forces developers to acknowledge high technical ambiguity.',
    keyTakeaway: 'Items estimated at 13 or 21 points must be sliced smaller before sprint entry.'
  },
  {
    id: 'dict_po_23',
    term: 'Value Point Forecast',
    role: 'product-owner',
    category: 'Value Optimization',
    definition: 'Assigning value points (e.g. 10 to 100) to backlog items alongside effort points to track business value burnup delivered per sprint.',
    exampleScenario: 'Sprint 24 delivered 35 effort points yielding 450 business value points.',
    keyTakeaway: 'Tracks ROI delivered per story point expended.'
  },
  {
    id: 'dict_po_24',
    term: 'Release Burndown & Scope Management',
    role: 'product-owner',
    category: 'Product Ownership',
    definition: 'A chart tracking remaining story points toward a target milestone release date across multiple sprints.',
    exampleScenario: 'Seeing a release burndown trend line slip prompts the PO to remove 3 low-WSJF stories to preserve release date.',
    keyTakeaway: 'Flex scope to hit hard milestone market deadlines.'
  },
  {
    id: 'dict_po_25',
    term: 'Customer Feedback Loop Triaging',
    role: 'product-owner',
    category: 'Customer Discovery',
    definition: 'The process of collecting, categorizing, and triaging support tickets, CSAT scores, and user reviews into structured backlog improvements.',
    exampleScenario: 'Converting 50 user complaints about slow checkout into 2 high-priority optimization user stories.',
    keyTakeaway: 'Close the loop with users by delivering their top-requested improvements.'
  },
  {
    id: 'dict_po_26',
    term: 'Stakeholder Expectation Management',
    role: 'product-owner',
    category: 'Stakeholder Mgmt',
    definition: 'Communicating backlog priorities, empirical velocity, and delivery forecasts transparently to manage stakeholder expectations.',
    exampleScenario: 'Using empirical sprint velocity data to show Sales why Feature Y is scheduled for Sprint 27 rather than Sprint 24.',
    keyTakeaway: 'Use empirical data to replace emotional negotiations.'
  },
  {
    id: 'dict_po_27',
    term: 'Trade-off Matrix (Scope, Time, Cost, Quality)',
    role: 'product-owner',
    category: 'Product Ownership',
    definition: 'A decision tool establishing which variables are Fixed, Constrained, or Flexible during project execution.',
    exampleScenario: 'For an enterprise compliance release: Quality and Time are Fixed; Scope is Flexible.',
    keyTakeaway: 'Never compromise on Quality; flex Scope to manage time constraints.'
  },
  {
    id: 'dict_po_28',
    term: 'Product Backlog Transparency',
    role: 'product-owner',
    category: 'Scrum Artifacts',
    definition: 'Ensuring the Product Backlog is visible, accessible, clear, and understood by the entire organization.',
    exampleScenario: 'Maintaining a public Jira roadmap view where all stakeholders can see exact story ordering and status.',
    keyTakeaway: 'High backlog transparency builds organizational trust.'
  },
  {
    id: 'dict_po_29',
    term: 'Third-Party Vendor Dependency Integration',
    role: 'product-owner',
    category: 'Backlog Management',
    definition: 'Managing external vendor API dependencies by scheduling early integration spikes and backup fallbacks.',
    exampleScenario: 'Creating a fallback mock gateway story in case the vendor sandbox API launch is delayed.',
    keyTakeaway: 'De-risk external dependencies early in the release cycle.'
  },
  {
    id: 'dict_po_30',
    term: 'AI-Augmented User Story Generation',
    role: 'product-owner',
    category: 'AI Practices',
    definition: 'Leveraging AI prompt templates to draft INVEST-compliant user stories and Given/When/Then acceptance criteria from raw notes.',
    exampleScenario: 'Using AI Studio to convert a 2-paragraph feature request into 3 testable Gherkin user stories in seconds.',
    keyTakeaway: 'Accelerate story refinement while maintaining human validation.'
  },
  {
    id: 'dict_po_31',
    term: 'Value Stream Mapping (VSM)',
    role: 'product-owner',
    category: 'Agile Flow',
    definition: 'A lean methodology mapping all steps required to take a feature request from initial idea to production release, measuring total lead time vs value-add time.',
    exampleScenario: 'Mapping VSM reveals that stories spend 14 days waiting for security review compliance.',
    keyTakeaway: 'Eliminate non-value-adding wait time across the delivery pipeline.'
  },
  {
    id: 'dict_po_32',
    term: 'Opportunity Backlog',
    role: 'product-owner',
    category: 'Customer Discovery',
    definition: 'A high-level backlog of unvalidated customer problems and business opportunities maintained prior to story commitment.',
    exampleScenario: 'Logging 10 potential growth opportunities in an Opportunity Backlog before running discovery interviews.',
    keyTakeaway: 'Validate customer opportunities before writing solution code.'
  },
  {
    id: 'dict_po_33',
    term: 'Story Point Calibration Baseline',
    role: 'product-owner',
    category: 'Estimation',
    definition: 'Selecting 2-3 well-understood historical stories as permanent reference points (e.g. 2-point reference, 5-point reference) for team estimation.',
    exampleScenario: 'Comparing new stories against "User Login API" (2-point reference card) during refinement.',
    keyTakeaway: 'Consistent reference cards maintain stable velocity metrics over time.'
  },
  {
    id: 'dict_po_34',
    term: 'Definition of Ready (DoR) Checklist',
    role: 'product-owner',
    category: 'Backlog Refinement',
    definition: 'A 5-point checklist verifying that a story has clear summary, INVEST compliance, BDD criteria, UX wireframe, and engineering estimate.',
    exampleScenario: 'Checking off all 5 DoR items before marking a story "Ready for Sprint Planning".',
    keyTakeaway: 'DoR checklist prevents mid-sprint story execution blockers.'
  },
  {
    id: 'dict_po_35',
    term: 'Sprint Review Value Demonstration',
    role: 'product-owner',
    category: 'Scrum Events',
    definition: 'The PO leading the business value summary during Sprint Review, articulating how completed increments move key business metrics.',
    exampleScenario: 'Presenting how Sprint 24 stories increased checkout conversion by 4.2%.',
    keyTakeaway: 'Connect working software increments to business outcomes during review.'
  },

  // ==========================================
  // --- PRODUCT MANAGER (PM) TERMS (35 TERMS) -
  // ==========================================
  {
    id: 'dict_pm_1',
    term: 'Product Vision & Strategy Canvas',
    role: 'product-manager',
    category: 'Product Leadership',
    definition: 'Product Vision defines the long-term aspirational future state (Why we exist). Product Strategy defines the path to get there: Target Customer, Core Problem, Unique Value Proposition.',
    exampleScenario: 'Vision: Zero-friction real-time cross-border settlements. Strategy: Target Tier 1 fintech gateways with 99.999% uptime APIs.',
    keyTakeaway: 'Vision provides North Star alignment; Strategy guides resource allocation.'
  },
  {
    id: 'dict_pm_2',
    term: 'Outcome-Based Roadmaps (Now / Next / Later)',
    role: 'product-manager',
    category: 'Roadmapping',
    definition: 'A modern roadmap structure that replaces fixed output delivery dates with problem-focused horizons tied to measurable OKRs.',
    exampleScenario: 'Now Horizon: Reduce onboarding drop-off from 35% to 15%. Next Horizon: Enterprise audit log exports.',
    keyTakeaway: 'Avoids committing to hard dates for unvalidated features.'
  },
  {
    id: 'dict_pm_3',
    term: 'Objectives and Key Results (OKRs)',
    role: 'product-manager',
    category: 'Strategic Execution',
    definition: 'A goal-setting framework where Objectives state qualitative strategic intent and Key Results quantify 3-5 measurable outcomes.',
    exampleScenario: 'Objective: Accelerate SaaS User Activation. Key Result: Increase 30-day user retention rate from 65% to 80%.',
    keyTakeaway: 'Focuses engineering and product efforts on business outcomes, not feature volume.'
  },
  {
    id: 'dict_pm_4',
    term: 'Product-Led Growth (PLG)',
    role: 'product-manager',
    category: 'Growth & Analytics',
    definition: 'A business strategy where the product itself serves as the primary driver of customer acquisition, onboarding, retention, and expansion.',
    exampleScenario: 'Slack or Zoom offering a frictionless self-serve freemium model that virally expands inside enterprise teams.',
    keyTakeaway: 'Optimizes Time-To-Value (TTV) to maximize self-serve user conversion.'
  },
  {
    id: 'dict_pm_5',
    term: 'Customer Acquisition Cost (CAC)',
    role: 'product-manager',
    category: 'SaaS Metrics',
    definition: 'The total cost of sales, marketing, and onboarding expenditure required to acquire a single new paying customer.',
    exampleScenario: 'Spent $30,000 in marketing to acquire 10 enterprise clients -> CAC = $3,000.',
    keyTakeaway: 'Keep CAC low relative to Lifetime Value for sustainable scaling.'
  },
  {
    id: 'dict_pm_6',
    term: 'Customer Lifetime Value (LTV)',
    role: 'product-manager',
    category: 'SaaS Metrics',
    definition: 'The total net profit a customer is estimated to generate for a business throughout their entire relationship duration.',
    exampleScenario: 'Average monthly subscription = $500, average customer lifespan = 24 months -> LTV = $12,000.',
    keyTakeaway: 'Increasing retention rate dramatically increases customer LTV.'
  },
  {
    id: 'dict_pm_7',
    term: 'CAC to LTV Ratio (3:1 Benchmark)',
    role: 'product-manager',
    category: 'SaaS Metrics',
    definition: 'Ratio comparing Lifetime Value (LTV) to Customer Acquisition Cost (CAC). A healthy SaaS business maintains an LTV:CAC ratio >= 3:1.',
    exampleScenario: 'LTV = $12,000, CAC = $3,000 -> Ratio is 4:1 (Healthy unit economics).',
    keyTakeaway: 'Key metric for evaluating product-market fit scalability.'
  },
  {
    id: 'dict_pm_8',
    term: 'North Star Metric (NSM)',
    role: 'product-manager',
    category: 'Product Analytics',
    definition: 'The single key metric that best captures the core value your product delivers to customers, serving as the primary guide for long-term growth.',
    exampleScenario: 'Spotify: "Time Spent Listening"; Airbnb: "Nights Booked"; Amplitude: "Weekly Active Queries".',
    keyTakeaway: 'Align all product squads around driving the North Star Metric.'
  },
  {
    id: 'dict_pm_9',
    term: 'Opportunity Solution Tree (Teresa Torres)',
    role: 'product-manager',
    category: 'Customer Discovery',
    definition: 'A visual framework connecting a clear business outcome to customer opportunities, solution ideas, and discovery experiments.',
    exampleScenario: 'Outcome: Reduce churn -> Opportunity: Users struggle with invoice export -> Solution: Auto-email PDF invoices.',
    keyTakeaway: 'Prevents jumping straight to solutions before exploring customer opportunities.'
  },
  {
    id: 'dict_pm_10',
    term: 'Product-Market Fit (PMF) & Sean Ellis Test',
    role: 'product-manager',
    category: 'Product Strategy',
    definition: 'The stage where a product satisfies strong market demand. Measured by the Sean Ellis survey question: ">40% of users would be very disappointed if product disappeared."',
    exampleScenario: 'Surveying 200 users: 52% state they would be "Very Disappointed" without the platform -> PMF achieved.',
    keyTakeaway: 'Do not scale sales & marketing spend until PMF is proven.'
  },
  {
    id: 'dict_pm_11',
    term: 'AARRR Pirate Metrics Funnel',
    role: 'product-manager',
    category: 'Growth & Analytics',
    definition: 'Growth framework tracking 5 user lifecycle stages: Acquisition, Activation, Retention, Revenue, and Referral.',
    exampleScenario: 'Identifying that Activation drop-off (Step 2) is the primary bottleneck preventing Revenue expansion.',
    keyTakeaway: 'Optimize Retention and Activation before spending heavily on Acquisition.'
  },
  {
    id: 'dict_pm_12',
    term: 'Time-To-Value (TTV)',
    role: 'product-manager',
    category: 'Growth & Analytics',
    definition: 'The time elapsed from when a customer signs up for your product to when they achieve their first "Aha!" moment of realized value.',
    exampleScenario: 'Reducing TTV from 15 minutes to 90 seconds by offering pre-populated account templates.',
    keyTakeaway: 'Shorter TTV directly boosts self-serve conversion rates.'
  },
  {
    id: 'dict_pm_13',
    term: 'Churn Rate (Logo Churn vs Net Revenue Churn)',
    role: 'product-manager',
    category: 'SaaS Metrics',
    definition: 'Logo Churn measures % of lost customers. Net Revenue Churn measures lost MRR minus expansion MRR from existing customers.',
    exampleScenario: 'Negative Net Revenue Churn occurs when expansion revenue from retained accounts exceeds revenue lost to churn.',
    keyTakeaway: 'Achieve negative net churn through account expansion and upsells.'
  },
  {
    id: 'dict_pm_14',
    term: 'Net Promoter Score (NPS)',
    role: 'product-manager',
    category: 'Customer Sentiment',
    definition: 'Customer loyalty metric based on 0-10 rating: Promoters (9-10), Passives (7-8), Detractors (0-6). NPS = % Promoters minus % Detractors.',
    exampleScenario: 'NPS survey yields 60% Promoters and 10% Detractors -> NPS = +50 (Excellent sentiment).',
    keyTakeaway: 'Investigate Detractor feedback to uncover systemic product friction.'
  },
  {
    id: 'dict_pm_15',
    term: 'Monthly Recurring Revenue (MRR) & ARR',
    role: 'product-manager',
    category: 'SaaS Metrics',
    definition: 'Predictable recurring revenue generated by active subscriptions per month (MRR) or annualized (ARR = MRR × 12).',
    exampleScenario: 'Tracking MRR breakdown: New MRR + Expansion MRR - Churned MRR = Net New MRR.',
    keyTakeaway: 'MRR is the primary health metric for SaaS business models.'
  },
  {
    id: 'dict_pm_16',
    term: 'Net Expansion MRR Rate',
    role: 'product-manager',
    category: 'SaaS Metrics',
    definition: 'Percentage increase in recurring revenue generated from existing customers via add-on features, seat upgrades, and tier expansions.',
    exampleScenario: 'Existing accounts upgraded seats generating an extra $25,000 MRR in Q3.',
    keyTakeaway: 'Expansion revenue is 5x cheaper than acquiring brand-new accounts.'
  },
  {
    id: 'dict_pm_17',
    term: 'Go-To-Market (GTM) Strategy',
    role: 'product-manager',
    category: 'GTM Execution',
    definition: 'An execution plan detailing how a product will reach target customers, achieve competitive advantage, and drive initial sales revenue.',
    exampleScenario: 'Aligning Product, Marketing, Sales, and Support for the Q4 enterprise AI gateway launch.',
    keyTakeaway: 'Great products fail without an aligned GTM strategy.'
  },
  {
    id: 'dict_pm_18',
    term: 'Value Proposition Canvas (Strategyzer)',
    role: 'product-manager',
    category: 'Product Strategy',
    definition: 'A tool mapping Customer Profile (Jobs, Pains, Gains) to Value Map (Products/Services, Pain Relievers, Gain Creators).',
    exampleScenario: 'Ensuring new API product features directly solve "Manual Reconciliation Pain" for CFOs.',
    keyTakeaway: 'Achieve fit between product features and customer pain relievers.'
  },
  {
    id: 'dict_pm_19',
    term: 'Jobs-to-be-Done (JTBD) Framework',
    role: 'product-manager',
    category: 'Customer Discovery',
    definition: 'A theory stating that customers do not buy products; they "hire" products to accomplish a specific progress job in their life.',
    exampleScenario: 'Customers do not want a 1/4 inch drill bit; they hire the drill to create a 1/4 inch hole to hang a frame.',
    keyTakeaway: 'Focus feature design on underlying customer jobs, not feature specs.'
  },
  {
    id: 'dict_pm_20',
    term: 'Continuous Customer Discovery Interviews',
    role: 'product-manager',
    category: 'Customer Discovery',
    definition: 'Conducting weekly structured customer interviews (Teresa Torres habit) to discover unarticulated needs and test prototypes continuously.',
    exampleScenario: 'PM conducts two 30-minute user interviews every Thursday morning.',
    keyTakeaway: 'Continuous discovery prevents building unvalidated executive pet features.'
  },
  {
    id: 'dict_pm_21',
    term: 'Product Analytics & Funnel Cohorts',
    role: 'product-manager',
    category: 'Product Analytics',
    definition: 'Tracking user behavior event streams and cohort retention curves to identify drop-off points in feature adoption.',
    exampleScenario: 'Cohort analysis reveals users who use feature X in week 1 have 3x higher 90-day retention.',
    keyTakeaway: 'Base product decisions on behavioral analytics data.'
  },
  {
    id: 'dict_pm_22',
    term: 'Feature Adoption Rate & Depth of Use',
    role: 'product-manager',
    category: 'Product Analytics',
    definition: 'Measuring what % of active users adopt a newly released feature and how frequently they use it (Depth of Use).',
    exampleScenario: 'Feature adoption reached 45% of active users within 14 days of launch.',
    keyTakeaway: 'Low adoption signals poor discoverability or lack of customer value.'
  },
  {
    id: 'dict_pm_23',
    term: 'Product Portfolio Management',
    role: 'product-manager',
    category: 'Product Leadership',
    definition: 'Managing investment allocations, strategy alignment, and lifecycle stages across multiple products within a company.',
    exampleScenario: 'Reallocating 30% engineering budget from mature Cash Cow product to high-growth Enterprise AI product.',
    keyTakeaway: 'Balance risk and revenue growth across portfolio horizons.'
  },
  {
    id: 'dict_pm_24',
    term: 'Market Positioning & Competitor Intelligence',
    role: 'product-manager',
    category: 'Market Intelligence',
    definition: 'Analyzing competitor feature moves, pricing tiers, and market positioning to carve out a unique defensible value proposition.',
    exampleScenario: 'Positioning our product as "The Enterprise Audit Compliant Alternative" to a low-cost competitor.',
    keyTakeaway: 'Position around your unique, hard-to-replicate strengths.'
  },
  {
    id: 'dict_pm_25',
    term: 'Value-Based Pricing & Monetization Tiers',
    role: 'product-manager',
    category: 'Monetization',
    definition: 'Setting product pricing tiers (e.g. Starter, Pro, Enterprise) based on perceived customer value and usage metrics rather than cost-plus.',
    exampleScenario: 'Charging enterprise tiers based on monthly transaction volume metrics.',
    keyTakeaway: 'Align pricing metrics directly with the customer value metric.'
  },
  {
    id: 'dict_pm_26',
    term: 'McKinsey 3 Horizons Strategy',
    role: 'product-manager',
    category: 'Product Strategy',
    definition: 'Categorizing products into Horizon 1 (Core cash cow business), Horizon 2 (Emerging growth engines), and Horizon 3 (Future bets/R&D).',
    exampleScenario: 'Allocating 70% budget to Horizon 1, 20% to Horizon 2, and 10% to Horizon 3 bets.',
    keyTakeaway: 'Protect future innovation while funding current core revenue.'
  },
  {
    id: 'dict_pm_27',
    term: 'Product-Led Sales (PLS) Hybrid Model',
    role: 'product-manager',
    category: 'Growth & Analytics',
    definition: 'A hybrid growth motion combining self-serve PLG onboarding with product usage data alerts that signal sales teams when to land enterprise deals.',
    exampleScenario: 'Sales team reaches out when a freemium account hits 50 active squad members.',
    keyTakeaway: 'Use product usage data to warm up enterprise sales leads.'
  },
  {
    id: 'dict_pm_28',
    term: 'Product Requirements Document (PRD) in Agile',
    role: 'product-manager',
    category: 'Product Ownership',
    definition: 'A lightweight problem-focused document defining the problem space, target metrics, user stories, and non-goals before engineering refinement.',
    exampleScenario: 'Writing a 2-page PRD highlighting problem context and OKR metrics rather than a static 50-page spec.',
    keyTakeaway: 'Keep PRDs problem-focused and living, not static rigid specifications.'
  },
  {
    id: 'dict_pm_29',
    term: 'Product Governance & Steering Committee',
    role: 'product-manager',
    category: 'Product Leadership',
    definition: 'Cadence-based alignment review where PMs present outcome metric progress, budget allocations, and strategic roadmaps to C-level executives.',
    exampleScenario: 'Presenting Q3 OKR Key Result achievement and requesting headcount for Q4 expansion.',
    keyTakeaway: 'Governance should focus on outcome metrics, not micromanaging features.'
  },
  {
    id: 'dict_pm_30',
    term: 'DAU / MAU Ratio (Product Stickiness)',
    role: 'product-manager',
    category: 'Product Analytics',
    definition: 'Ratio of Daily Active Users (DAU) to Monthly Active Users (MAU) measuring product stickiness. A ratio >20% is considered good for SaaS.',
    exampleScenario: 'DAU = 2,000, MAU = 8,000 -> Stickiness Ratio = 25%.',
    keyTakeaway: 'Higher stickiness indicates strong daily habits and low future churn risk.'
  },
  {
    id: 'dict_pm_31',
    term: 'TAM, SAM, and SOM Market Sizing',
    role: 'product-manager',
    category: 'Product Strategy',
    definition: 'Market sizing metrics: Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM).',
    exampleScenario: 'TAM = $10B global payments; SAM = $2B EU B2B gateways; SOM = $100M target market share.',
    keyTakeaway: 'Focus initial GTM launch on realistic, high-converting SOM.'
  },
  {
    id: 'dict_pm_32',
    term: 'AI-Augmented Product Analytics & Intelligence',
    role: 'product-manager',
    category: 'AI Practices',
    definition: 'Using AI tools to analyze complex funnel drop-offs, summarize user interview transcripts, and generate competitive intelligence matrices.',
    exampleScenario: 'Feeding 20 customer interview recordings into AI Studio to extract top 3 recurring feature opportunities.',
    keyTakeaway: 'Accelerate qualitative discovery synthesis with AI.'
  },
  {
    id: 'dict_pm_33',
    term: 'Customer Churn Cohort Heatmap',
    role: 'product-manager',
    category: 'Product Analytics',
    definition: 'A visual matrix tracking customer signup cohorts month-by-month to evaluate retention stabilization over 12-month periods.',
    exampleScenario: 'Noticing that retention flattens after Month 3, confirming a stable core user base.',
    keyTakeaway: 'Flat cohort curves indicate true product-market fit.'
  },
  {
    id: 'dict_pm_34',
    term: 'Product Feature Sunsetting / Deprecation',
    role: 'product-manager',
    category: 'Product Lifecycle',
    definition: 'The strategic process of retiring low-adoption legacy features to eliminate technical debt and focus squad capacity on high-ROI modules.',
    exampleScenario: 'Deprecating legacy v1 REST API after giving enterprise customers 6 months migration notice.',
    keyTakeaway: 'Killing dead features frees up resources for innovation.'
  },
  {
    id: 'dict_pm_35',
    term: 'Executive Outcome Review vs Gantt Review',
    role: 'product-manager',
    category: 'Executive Alignment',
    definition: 'Conducting executive alignment meetings focused on OKR metric outcomes delivered rather than inspecting output feature delivery dates.',
    exampleScenario: 'Demonstrating how Q3 releases reduced user onboarding drop-off by 22%.',
    keyTakeaway: 'Shift executive mindset from output dates to outcome metric impact.'
  }
];
