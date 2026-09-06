export const agileKnowledge = [
  // --- AGILE COACHING DOMAIN ---
  {
    id: "ac-001",
    title: "Lyssa Adkins Agile Coaching Competency Framework",
    category: "Agile Coaching",
    tags: ["Coaching", "Competencies", "Facilitation", "Transformation"],
    summary: "Framework defining the core competencies required for effective Agile Coaching.",
    content: `The Agile Coaching Competency Framework (developed by Lyssa Adkins & Michael Spayd) establishes eight key skill areas:
1. Lean-Agile Practitioner: Deep understanding of Agile values, 12 principles, Lean thinking, and mindset.
2. Professional Coaching: Ability to act as an ICF-aligned coach, asking powerful open-ended questions, maintaining neutrality, and helping coachees discover their own solutions.
3. Mentoring: Imparting advice, experience, and guidance based on real-world practical experience.
4. Teaching: Educating teams and leaders on Agile frameworks, practices, roles, and mindset.
5. Facilitation: Serving as a neutral guide for group process to achieve consensus and effective decision-making.
6. Technical Mastery: Hands-on understanding of XP practices, TDD, CI/CD, refactoring, and software engineering craftsmanship.
7. Business Mastery: Understanding business strategy, product management, value streams, ROI, and organizational metrics.
8. Transformation Mastery: Expertise in organizational change management, culture shift, leadership alignment, and scaling frameworks.`,
    score: 0.96
  },
  {
    id: "ac-002",
    title: "Five Dysfunctions of a Team & Coaching Interventions",
    category: "Agile Coaching",
    tags: ["Team Dynamics", "Psychological Safety", "Conflict", "Leadership"],
    summary: "Patrick Lencioni's model of team dysfunctions and specific Agile coaching remedies.",
    content: `Patrick Lencioni outlines five interconnected team dysfunctions:
1. Absence of Trust: Team members hesitate to be vulnerable with one another.
   - Coaching Remedy: Personal histories exercises, 360-degree feedback, vulnerability-first leadership modeling.
2. Fear of Conflict: Teams avoid productive ideological debate, resulting in artificial harmony.
   - Coaching Remedy: Mined conflict techniques, Thomas-Kilmann conflict mode instrument, establishing team working agreements.
3. Lack of Commitment: Failure to buy into decisions due to lack of genuine debate.
   - Coaching Remedy: Cascading messages, worst-case scenario analysis, clear Sprint Goals.
4. Avoidance of Accountability: Team members hesitate to call out peers on behaviors or performance.
   - Coaching Remedy: Publication of team goals/standards, peer-to-peer feedback reviews, Definition of Done enforcement.
5. Inattention to Results: Individuals prioritize personal ego or departmental silos over team outcomes.
   - Coaching Remedy: Public scoreboards, outcome-oriented metrics (Cycle time, value delivered), celebrating team wins over individual output.`,
    score: 0.95
  },
  {
    id: "ac-003",
    title: "Lean & Flow Metrics: Cycle Time, Throughput, and CFD",
    category: "Agile Coaching",
    tags: ["Metrics", "Flow", "Kanban", "WIP", "Analytics"],
    summary: "Essential quantitative metrics for analyzing team flow, bottlenecks, and delivery predictability.",
    content: `Flow metrics measure how value moves through a system:
1. Lead Time: Total time elapsed from customer request to final delivery in production.
2. Cycle Time: Time elapsed from when work actually starts on an item to when it reaches 'Done'.
3. Throughput: Number of completed work items delivered per unit of time (e.g., items per sprint or per week).
4. Work in Progress (WIP): Number of items currently being worked on. Little's Law states: Average Lead Time = Average WIP / Average Throughput. Controlling WIP directly reduces Lead Time.
5. Cumulative Flow Diagram (CFD): Visual graph showing work items in each workflow state over time.
   - Band expansion: Indicates a bottleneck in that specific column (e.g., testing column widening means testing cannot keep up with development).
   - Band collapse: Indicates starvation in downstream processes.
6. Flow Efficiency: (Active Working Time / Total Cycle Time) * 100%. Typical unoptimized software teams operate at 5-15% flow efficiency due to wait times and context switching.`,
    score: 0.94
  },
  {
    id: "ac-004",
    title: "Scaling Agile Frameworks: SAFe vs LeSS vs Nexus",
    category: "Agile Coaching",
    tags: ["Scaling", "SAFe", "LeSS", "Nexus", "Enterprise"],
    summary: "Comparison of multi-team enterprise scaling patterns and trade-offs.",
    content: `Enterprise scaling frameworks address alignment across multiple Scrum teams:
1. Scaled Agile Framework (SAFe 6.0):
   - Structured enterprise framework using Agile Release Trains (ARTs), Program Increments (PI Planning), and Value Streams.
   - Best for: Large enterprise organizations requiring strict governance, compliance, and multi-layered alignment.
2. Large-Scale Scrum (LeSS):
   - Bare-bones scaling approach applying standard single Scrums to multi-team environments (up to 8 teams per Product Owner).
   - Single Product Backlog, single Product Owner, shared Sprint Planning, and joint Sprint Review.
   - Best for: Organizations seeking to simplify architecture and minimize management overhead.
3. Nexus (by Scrum.org):
   - Lightweight framework adding a Nexus Integration Team (NIT) to coordinate 3 to 9 Scrum teams working on one Product Backlog.
   - Focuses heavily on cross-team dependency management and integration spikes.`,
    score: 0.93
  },

  // --- SCRUM MASTERY DOMAIN ---
  {
    id: "sm-001",
    title: "The 2020 Scrum Guide Core Rules & Accountabilities",
    category: "Scrum Mastery",
    tags: ["Scrum Guide", "Framework", "Roles", "Events", "Artifacts"],
    summary: "Definitive summary of the official Scrum framework rules, accountabilities, and commitments.",
    content: `Scrum is a lightweight framework based on empiricism (Transparency, Inspection, Adaptation) and Lean thinking.
Accountabilities (formerly Roles):
1. Scrum Master: Accountable for establishing Scrum as defined in the Scrum Guide and for team effectiveness. Serves as a true leader who serves the Scrum Team and organization.
2. Product Owner: Accountable for maximizing the value of the product resulting from work of the Scrum Team. Manages Product Backlog and Product Goal.
3. Developers: Accountable for creating a plan for the Sprint (Sprint Backlog), instilling quality through Definition of Done, and adapting their plan daily toward the Sprint Goal.

Events:
- The Sprint (1 to 4 weeks container)
- Sprint Planning (sets Sprint Goal & Sprint Backlog)
- Daily Scrum (15-min inspection of progress toward Sprint Goal)
- Sprint Review (inspects Increment with stakeholders)
- Sprint Retrospective (inspects process, team dynamics, and plans quality improvements)

Artifact Commitments:
- Product Backlog -> Product Goal
- Sprint Backlog -> Sprint Goal
- Increment -> Definition of Done (DoD)`,
    score: 0.98
  },
  {
    id: "sm-002",
    title: "Retrospective Techniques & Liberating Structures",
    category: "Scrum Mastery",
    tags: ["Retrospective", "Facilitation", "Continuous Improvement", "Liberating Structures"],
    summary: "Facilitation frameworks to drive actionable continuous improvement in retrospectives.",
    content: `Effective Retrospectives move beyond simple 'What went well / What didn't':
1. Sailboat Retrospective:
   - Anchors: What slowed us down or held us back?
   - Wind in Sails: What propelled us forward and sped us up?
   - Rocks: What future risks or hazards lay ahead?
   - Sun / Island: What is our destination/goal?
2. 4Ls Retrospective: Liked, Learned, Lacked, Longed For. Excellent for balanced emotional & intellectual feedback.
3. Liberating Structures for Team Engagement:
   - 1-2-4-All: 1 min silent reflection, 2 min pair discussion, 4 min quad discussion, then share top ideas with All. Guarantees 100% participation and eliminates loud-voice bias.
   - TRIZ: Ask "How can we guarantee complete failure of our next sprint?" Team lists destructive habits, then inspects which ones they currently perform and creates action items to stop them.
4. SMART Action Items: Limit retrospective outputs to 1-2 concrete, assigned SMART action items added directly into the upcoming Sprint Backlog.`,
    score: 0.97
  },
  {
    id: "sm-003",
    title: "Impediment Removal & Servant Leadership Strategies",
    category: "Scrum Mastery",
    tags: ["Impediments", "Servant Leadership", "Problem Solving", "Escalation"],
    summary: "Structured approach for Scrum Masters to detect, classify, and eliminate team impediments.",
    content: `Impediment removal is a primary accountability of the Scrum Master:
1. Team vs Organizational Impediments:
   - Team Level: Code review delays, unclear acceptance criteria, environment configuration issues. Coach the team to solve these internally.
   - Organizational Level: Cross-departmental dependencies, budget approvals, toxic behavior, lack of tooling. Scrum Master owns these directly.
2. Escalation & Impediment Board:
   - Categorize by Impact (High/Med/Low) and Urgency.
   - Track owner, blocker root cause, and target resolution date on a visible Impediment Kanban board.
3. Root Cause Analysis: Use the 5 Whys technique and Fishbone (Ishikawa) diagram during retrospective or triage to fix systemic causes rather than quick temporary patches.`,
    score: 0.94
  },
  {
    id: "sm-004",
    title: "Technical Debt & Engineering Excellence Coaching",
    category: "Scrum Mastery",
    tags: ["Technical Debt", "Refactoring", "CI/CD", "TDD", "Craftsmanship"],
    summary: "Guiding teams to balance feature velocity with technical debt reduction and XP practices.",
    content: `Technical Debt represents future rework created by choosing an easy short-term solution over a better long-term technical design:
1. The Technical Debt Quadrant (Martin Fowler):
   - Deliberate vs Inadvertent, Reckless vs Prudent.
2. XP Engineering Practices:
   - Test-Driven Development (TDD): Red -> Green -> Refactor cycle.
   - Continuous Integration (CI): Merging code into main branch multiple times daily with automated test suites.
   - Pair / Mob Programming: Real-time code review and knowledge sharing.
3. Managing Technical Debt in Scrum:
   - Dedicate 15-20% of Sprint capacity or include technical refactoring as explicit acceptance criteria in existing user stories.
   - Define technical standards in the Definition of Done (e.g. static code analysis metrics, security scan compliance, test coverage thresholds).`,
    score: 0.95
  },

  // --- PRODUCT OWNER & PRODUCT MANAGER DOMAIN ---
  {
    id: "po-001",
    title: "User Story Writing & INVEST Criteria",
    category: "Product Management",
    tags: ["User Stories", "INVEST", "Acceptance Criteria", "Gherkin"],
    summary: "Best practices for writing high-quality, actionable user stories and acceptance criteria.",
    content: `User Stories act as invitations to conversations rather than rigid specification documents.
Template:
"As a <type of user>, I want <some goal/action> so that <some value/benefit>."

INVEST Criteria for High Quality Stories:
- I (Independent): Can be developed and released without strict coupling to other stories.
- N (Negotiable): Details are co-created through conversation with Developers.
- V (Valuable): Delivers clear business or customer value.
- E (Estimable): Developers understand the scope enough to provide a high-level estimate.
- S (Small): Fits comfortably within a single Sprint (typically 1-3 days of effort).
- T (Testable): Has unambiguous Acceptance Criteria for verification.

Acceptance Criteria (Gherkin Format):
Given <pre-condition/initial state>
When <action/event occurs>
Then <expected result/outcome>`,
    score: 0.98
  },
  {
    id: "po-002",
    title: "Prioritization Frameworks: WSJF, RICE, and MoSCoW",
    category: "Product Management",
    tags: ["Prioritization", "WSJF", "RICE", "MoSCoW", "Cost of Delay"],
    summary: "Quantitative and qualitative frameworks for ordering the Product Backlog.",
    content: `Prioritization ensures teams work on the highest value items first:
1. Weighted Shortest Job First (WSJF):
   - Formula: WSJF = Cost of Delay / Job Duration (or Job Size).
   - Cost of Delay = User/Business Value + Time Criticality + Risk Reduction / Opportunity Enablement.
   - Higher WSJF scores are prioritized first.
2. RICE Scoring Framework:
   - Formula: RICE Score = (Reach * Impact * Confidence) / Effort.
   - Reach: Number of users impacted per time period.
   - Impact: 3 = Massive, 2 = High, 1 = Medium, 0.5 = Low, 0.25 = Minimal.
   - Confidence: Percentage (100% = high confidence, 80% = medium, 50% = low).
   - Effort: Person-months or story points.
3. MoSCoW Method:
   - Must Have: Non-negotiable release requirements.
   - Should Have: Important but not vital for immediate launch.
   - Could Have: Desirable additions if time/budget permits.
   - Won't Have (this time): Explicitly out of scope for current milestone.`,
    score: 0.97
  },
  {
    id: "po-003",
    title: "Product Discovery & Story Mapping Playbook",
    category: "Product Management",
    tags: ["Product Discovery", "Story Mapping", "User Journey", "MVP"],
    summary: "Techniques for mapping user journeys and slicing minimum viable products (MVPs).",
    content: `User Story Mapping (Jeff Patton model) organizes user stories into a visual grid:
1. User Activities (Backbone): High-level steps in the user journey (e.g. Search Product -> Add to Cart -> Checkout -> Pay).
2. User Tasks (Ribs): Specific steps under each activity arranged left to right chronologically.
3. Details & Stories (Body): Specific user stories placed vertically below each task in order of priority.
4. Horizontal Slicing: Draw horizontal lines across the map to define release slices (e.g. Release 1 / Walking Skeleton / MVP, Release 2, Release 3).
5. Opportunity Solution Trees (Teresa Torres): Connect desired outcomes to customer opportunities, candidate solutions, and rapid experiments to test assumptions before building.`,
    score: 0.96
  },
  {
    id: "po-004",
    title: "Product Metrics, OKRs, and Value Optimization",
    category: "Product Management",
    tags: ["Metrics", "OKRs", "Product Strategy", "KPIs", "Value"],
    summary: "Aligning product backlog delivery with strategic business outcomes and key results.",
    content: `Product Managers must track outcomes rather than output:
1. OKR Structure (Objectives & Key Results):
   - Objective: Qualitative, inspiring goal (e.g., "Become the most loved checkout experience for mobile buyers").
   - Key Results: 3-5 quantitative, measurable metrics (e.g., "Increase mobile checkout conversion rate from 3.2% to 5.0%").
2. North Star Metric:
   - The single key metric that best captures the core value your product delivers to customers (e.g. Spotify: Listening Time; Airbnb: Nights Booked).
3. AARRR Pirate Metrics:
   - Acquisition (How do users find you?)
   - Activation (Do users have a great first experience?)
   - Retention (Do users come back?)
   - Revenue (How do you monetize?)
   - Referral (Do users tell others?)`,
    score: 0.95
  }
];
