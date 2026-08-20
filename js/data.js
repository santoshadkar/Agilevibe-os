// AgileVibe OS - Central Portal Data Repository (Comprehensive Edition)

export const RETRO_TEMPLATES = {
  '4ls': {
    title: 'The 4 Ls (Liked, Learned, Lacked, Longed For)',
    description: 'A classic balanced retrospective framework to celebrate wins, reflect on learnings, identify gaps, and wish for the future.',
    columns: [
      { id: 'liked', name: 'Liked', icon: '❤️', color: '#ec4899', desc: 'What went really well and brought joy?' },
      { id: 'learned', name: 'Learned', icon: '💡', color: '#3b82f6', desc: 'What new insights or skills did we gain?' },
      { id: 'lacked', name: 'Lacked', icon: '⚠️', color: '#f59e0b', desc: 'What was missing or blocked our flow?' },
      { id: 'longed_for', name: 'Longed For', icon: '🌟', color: '#8b5cf6', desc: 'What do we wish we had or could do next?' }
    ],
    defaultNotes: [
      { id: 'n1', columnId: 'liked', text: 'Great team collaboration on the API integration!', votes: 4 },
      { id: 'n2', columnId: 'learned', text: 'Automated test suite saved 3 hours in regression testing', votes: 5 },
      { id: 'n3', columnId: 'lacked', text: 'Design handoff was delayed by 2 days due to missing specs', votes: 3 },
      { id: 'n4', columnId: 'longed_for', text: 'Automated deployment pipeline to staging environment', votes: 6 }
    ]
  },
  'sailboat': {
    title: 'The Sailboat Retrospective',
    description: 'A visual forward-looking retrospective linking team goals, wind (promoters), anchors (blockers), and rocks (risks).',
    columns: [
      { id: 'wind', name: 'Wind (Pushing Us Forward)', icon: '💨', color: '#10b981', desc: 'What speeds us up and helps us reach our destination?' },
      { id: 'anchors', name: 'Anchors (Holding Us Back)', icon: '⚓', color: '#ef4444', desc: 'What slows us down or drags us down?' },
      { id: 'rocks', name: 'Rocks (Risks Ahead)', icon: '🪨', color: '#f59e0b', desc: 'What potential hazards or obstacles lie ahead?' },
      { id: 'island', name: 'Paradise Island (Goals)', icon: '🏝️', color: '#06b6d4', desc: 'What is our ultimate desired destination?' }
    ],
    defaultNotes: [
      { id: 'n5', columnId: 'wind', text: 'Pair programming sessions accelerated code reviews', votes: 3 },
      { id: 'n6', columnId: 'anchors', text: 'Flaky staging server caused 4 build failures', votes: 7 },
      { id: 'n7', columnId: 'rocks', text: 'Upcoming third-party API deprecation next month', votes: 5 },
      { id: 'n8', columnId: 'island', text: 'Zero-downtime releases with 99.9% uptime', votes: 4 }
    ]
  },
  'starfish': {
    title: 'Starfish Retrospective',
    description: 'Fosters granular continuous improvement by categorizing actions into Keep, More, Less, Stop, and Start.',
    columns: [
      { id: 'keep', name: 'Keep Doing', icon: '👍', color: '#10b981', desc: 'Practices that work well' },
      { id: 'more', name: 'More Of', icon: '📈', color: '#3b82f6', desc: 'Good habits to expand' },
      { id: 'less', name: 'Less Of', icon: '📉', color: '#f59e0b', desc: 'Activities yielding low value' },
      { id: 'stop', name: 'Stop Doing', icon: '🛑', color: '#ef4444', desc: 'Inefficient or harmful habits' },
      { id: 'start', name: 'Start Doing', icon: '🚀', color: '#8b5cf6', desc: 'New experiments to try' }
    ],
    defaultNotes: [
      { id: 'n9', columnId: 'keep', text: 'Daily standups under 15 minutes', votes: 4 },
      { id: 'n10', columnId: 'more', text: 'Mob programming on complex architecture stories', votes: 6 },
      { id: 'n11', columnId: 'less', text: 'Ad-hoc meetings without an agenda', votes: 5 },
      { id: 'n12', columnId: 'stop', text: 'Context switching between 3 projects at once', votes: 8 },
      { id: 'n13', columnId: 'start', text: 'AI-assisted code reviews before PR creation', votes: 7 }
    ]
  }
};

export const MATURITY_DIMENSIONS = [
  {
    id: 'culture',
    name: 'Agile Mindset & Culture',
    icon: '🌱',
    color: '#10b981',
    description: 'Psychological safety, growth mindset, alignment on values, and team autonomy.',
    questions: [
      'Team members freely admit mistakes without fear of blame.',
      'Cross-functional collaboration is prioritized over siloed handoffs.',
      'Failure is viewed as a learning opportunity across the organization.'
    ]
  },
  {
    id: 'technical',
    name: 'Technical Excellence',
    icon: '⚡',
    color: '#3b82f6',
    description: 'CI/CD, automated testing, refactoring, mob programming, and code quality standards.',
    questions: [
      'Automated unit & integration tests run automatically on every push.',
      'Deployment to staging/production can be done seamlessly with high confidence.',
      'Refactoring and tech debt payback are built into every sprint backlog.'
    ]
  },
  {
    id: 'product',
    name: 'Product & Customer Alignment',
    icon: '🎯',
    color: '#8b5cf6',
    description: 'Outcome-focused roadmaps, direct user feedback loops, rapid prototyping, and clear backlog refinement.',
    questions: [
      'User stories are defined by outcome/value rather than technical tasks.',
      'The team gets direct feedback from actual end-users at least monthly.',
      'Product Backlog items are refined with clear Acceptance Criteria prior to sprint planning.'
    ]
  },
  {
    id: 'delivery',
    name: 'Delivery Speed & Flow',
    icon: '🚀',
    color: '#06b6d4',
    description: 'Consistent velocity/throughput, small batch sizes, WIP limit discipline, and low lead times.',
    questions: [
      'Stories are broken down to be completed within 1 to 3 days.',
      'Work-In-Progress (WIP) limits are respected to prevent multitasking bottlenecks.',
      'Cycle time from code commit to production is under 48 hours.'
    ]
  },
  {
    id: 'improvement',
    name: 'Continuous Learning & Adaptation',
    icon: '🔄',
    color: '#f59e0b',
    description: 'Actionable retrospectives, team experiments, coaching engagement, and metrics tracking.',
    questions: [
      'Retrospective action items are tracked and completed in subsequent sprints.',
      'The team regularly conducts small-scale process experiments.',
      'Team metrics (flow, cycle time, happiness) are reviewed for self-correction.'
    ]
  }
];

export const PSYCH_SAFETY_QUESTIONS = [
  { id: 1, text: 'If you make a mistake on this team, it is often held against you.', reversed: true },
  { id: 2, text: 'Members of this team are able to bring up problems and tough issues.', reversed: false },
  { id: 3, text: 'People on this team sometimes reject others for being different.', reversed: true },
  { id: 4, text: 'It is safe to take a risk on this team.', reversed: false },
  { id: 5, text: 'It is difficult to ask other members of this team for help.', reversed: true },
  { id: 6, text: 'No one on this team would deliberately act in a way that undermines my efforts.', reversed: false },
  { id: 7, text: 'Working with members of this team, my unique skills and talents are valued and utilized.', reversed: false }
];

export const SCALING_FRAMEWORKS = [
  {
    id: 'safe',
    name: 'SAFe (Scaled Agile Framework)',
    icon: '🏢',
    bestFor: 'Large Enterprise (100+ people, rigid compliance & multi-level portfolio governance)',
    teamSizeRange: '100 - 5000+ people',
    pros: ['Structured portfolio & program layers', 'Strong enterprise governance', 'Clear role alignment'],
    cons: ['Heavy process overhead', 'Can feel bureaucratic if misapplied', 'Risk of top-down command'],
    keyPractices: ['PI Planning (Program Increment)', 'Agile Release Trains (ARTs)', 'Value Stream Mapping']
  },
  {
    id: 'less',
    name: 'LeSS (Large-Scale Scrum)',
    icon: '⛵',
    bestFor: 'Medium-to-Large Engineering Orgs seeking minimalist Scrum at scale (20-200 people)',
    teamSizeRange: '20 - 200 people',
    pros: ['Stays true to core Scrum principles', 'Low overhead and low management bloat', 'Focuses on feature teams'],
    cons: ['Requires high engineering maturity', 'Requires organizational willingness to flatten management'],
    keyPractices: ['Sprint Planning Part 1 (Joint)', 'Overall Retrospective', 'Area Product Owners']
  },
  {
    id: 'spotify',
    name: 'Spotify Model (Tribes, Squads, Chapters, Guilds)',
    icon: '🎵',
    bestFor: 'Product-led Tech startups and scale-ups with high engineering autonomy',
    teamSizeRange: '30 - 500 people',
    pros: ['High team autonomy & alignment', 'Strong cross-pollination via Guilds', 'Fosters vibrant tech culture'],
    cons: ['Not a formal framework (hard to copy-paste)', 'Matrix reporting can create confusion if accountability isn\'t clear'],
    keyPractices: ['Autonomous Squads', 'Chapter Leads for skill mastery', 'Guilds for community interest']
  },
  {
    id: 'nexus',
    name: 'Nexus Framework (by Scrum.org)',
    icon: '🔗',
    bestFor: '3 to 9 Scrum teams working on a single Product Backlog',
    teamSizeRange: '20 - 80 people',
    pros: ['Lightweight overlay on standard Scrum', 'Directly targets cross-team dependencies', 'Minimal added events'],
    cons: ['Focused primarily on single-product delivery', 'Doesn\'t address enterprise portfolio funding'],
    keyPractices: ['Nexus Integration Team', 'Nexus Daily Scrum', 'Nexus Sprint Review']
  }
];

export const AI_COACH_PROMPTS = [
  {
    id: 'user-story',
    title: 'INVEST User Story & Acceptance Criteria Refiner',
    category: 'Product Ownership',
    icon: '📝',
    description: 'Transform raw requirement notes into standard INVEST user stories with complete Gherkin scenario acceptance criteria.',
    promptTemplate: `You are an expert Agile Coach and Senior Product Owner. Transform the following raw requirement notes into a production-grade User Story following the INVEST framework:

Requirement: {{INPUT}}

Please provide:
1. User Story Title & Format: "As a [role], I want to [action], So that [benefit]."
2. INVEST Criteria Check (Independent, Negotiable, Valuable, Estimable, Small, Testable).
3. Detailed Acceptance Criteria in Gherkin format (Given - When - Then).
4. Edge cases & Security considerations.
5. Suggested Story Point estimate (Fibonacci) with justification.`
  },
  {
    id: 'retro-summary',
    title: 'Retrospective Feedback Theme & Action Extractor',
    category: 'Facilitation',
    icon: '🔮',
    description: 'Clusters raw retrospective sticky notes into core themes, sentiment analysis, and top SMART action items.',
    promptTemplate: `You are an Agile Coach facilitating a Sprint Retrospective. Analyze the following raw feedback notes from the team's retrospective board:

Retro Notes: {{INPUT}}

Please synthesize this into:
1. Top 3 Recurring Systemic Themes.
2. Team Sentiment Overview (Positive, Blockers, Cultural signals).
3. Top 3 SMART Action Items (Specific, Measable, Achievable, Relevant, Time-bound) with assigned roles.
4. One fun team-building micro-experiment for the next sprint.`
  },
  {
    id: 'sprint-goal',
    title: 'Outcome-Oriented Sprint Goal Formulator',
    category: 'Sprint Planning',
    icon: '🎯',
    description: 'Converts a list of backlog items into a single compelling, value-driven Sprint Goal that inspires the team.',
    promptTemplate: `You are an Agile Coach. Based on the selected backlog items for the upcoming sprint:

Backlog Items: {{INPUT}}

Formulate:
1. Primary Sprint Goal (1 crisp sentence focused on customer value, not technical output).
2. "Why This Matters" statement for stakeholders.
3. Key Risk Factors to monitor during the sprint.
4. How the team will verify Sprint Goal completion at the Demo.`
  },
  {
    id: 'conflict-resolution',
    title: 'Team Conflict & Psychological Safety Coach',
    category: 'Leadership & Culture',
    icon: '🤝',
    description: 'Provides a step-by-step non-violent communication (NVC) coaching script to resolve team friction.',
    promptTemplate: `You are an empathetic Master Agile Coach trained in Non-Violent Communication (NVC) and Psychological Safety.

Situation Description: {{INPUT}}

Provide:
1. Root Cause Analysis (Task conflict vs. Relationship conflict).
2. 1-on-1 Coaching Script for the Coach using NVC (Observation, Feeling, Need, Request).
3. Team facilitation exercise to restore psychological safety.
4. Follow-up check-in framework after 1 week.`
  }
];

// -----------------------------------------------------------------------------
// NEW: DEEP METRICS ENCYCLOPEDIA
// -------------------------------------------------------------
export const METRICS_ENCYCLOPEDIA = [
  {
    id: 'cycle-time',
    name: 'Cycle Time',
    category: 'Flow & Delivery',
    icon: '⏱️',
    formula: 'Cycle Time = Time Work Completed - Time Work Started',
    target: '< 3 days per user story',
    summary: 'Measures the elapsed time from when an item actively begins development until it reaches production.',
    deepArticle: `### 📖 Deep Dive: Cycle Time

#### What is Cycle Time?
Cycle Time is the single most critical metric for Agile flow efficiency. It measures the amount of time a work item spends in progress—from the exact moment a developer drags a ticket into "In Development" until it is deployed to production.

#### Why It Matters
- **Predictability**: Shorter cycle times drastically decrease variance, making estimation reliable.
- **Fast Feedback**: Small batch items delivered quickly allow teams to validate assumptions with real users sooner.
- **Lower Risk**: Large cycle times correlate directly with merge conflicts, scope creep, and context switching.

#### Mathematical Formula & Calculation
$$\\text{Cycle Time} = T_{\\text{Deployed}} - T_{\\text{In Progress}}$$

*Example*: If a story is picked up on Monday at 9:00 AM and deployed on Wednesday at 3:00 PM, Cycle Time = 2.25 days.

#### Goodhart's Law & Common Antipatterns
- ⚠️ **Antipattern 1: Splitting tickets artificialy without delivering value**. Splitting a 13-point ticket into 5 empty subtasks just to game cycle time.
- ⚠️ **Antipattern 2: Leaving code unmerged in PR stage**. Cycle time must include Code Review and QA time, not just active coding time!

#### How an Agile Coach Can Improve Cycle Time
1. Enforce strict **WIP (Work In Progress) Limits** on dev columns.
2. Implement **Pair / Mob Programming** to unblock code reviews within 2 hours.
3. Automate deployment pipelines (CI/CD) so deployment takes minutes, not days.`
  },
  {
    id: 'lead-time',
    name: 'Lead Time',
    category: 'Flow & Customer Value',
    icon: '⏳',
    formula: 'Lead Time = Customer Delivery Date - Feature Request Created Date',
    target: '< 14 days from backlog entry to live',
    summary: 'Measures the total elapsed customer waiting time from the initial request to final delivery.',
    deepArticle: `### 📖 Deep Dive: Lead Time

#### What is Lead Time?
Lead Time looks at flow from the **customer's perspective**. It spans the total elapsed time between when an idea/request is logged in the Product Backlog and when it is delivered to the customer's hands.

#### Difference Between Lead Time and Cycle Time
- **Lead Time**: Refinement queue time + Active Cycle Time.
- **Cycle Time**: Subset of Lead Time (Active engineering time).

#### The Flow Efficiency Equation
$$\\text{Flow Efficiency} = \\left( \\frac{\\text{Active Touch Time (Cycle Time)}}{\\text{Total Customer Lead Time}} \\right) \\times 100\\%$$

*Industry Benchmark*: Typical traditional teams have a Flow Efficiency under **15%** (meaning work spends 85% of its life waiting idle in queues). High-performing Agile teams achieve **40%+ Flow Efficiency**.

#### Coaching Actions to Reduce Lead Time
1. Prune stale backlog items older than 90 days.
2. Establish Just-In-Time (JIT) refinement to prevent items sitting in "Ready for Dev" for months.`
  },
  {
    id: 'flow-efficiency',
    name: 'Flow Efficiency %',
    category: 'Flow & Waste Elimination',
    icon: '⚡',
    formula: 'Flow Efficiency % = (Active Work Time / Total Lead Time) × 100',
    target: '> 35%',
    summary: 'Calculates the ratio of active work time versus total waiting time in bottlenecks and queues.',
    deepArticle: `### 📖 Deep Dive: Flow Efficiency

#### What is Flow Efficiency?
Flow Efficiency exposes hidden process waste. In most traditional development processes, a feature that takes 8 hours of active coding takes 6 weeks to deliver because it sits in queues waiting for approval, testing environment availability, or release windows.

#### How to Measure
1. Track active status time (Developing, Testing, Reviewing).
2. Track queue status time (Ready for QA, Awaiting Review, Blocked, Ready for Release).
3. Divide active status hours by total lead hours.

#### Key Takeaways for Agile Coaches
Focus on **reducing wait states**, not pushing developers to work faster! Speeding up active coding by 10% yields negligible savings compared to eliminating 3 days of code review waiting time.`
  },
  {
    id: 'defect-escape-rate',
    name: 'Defect Escape Rate %',
    category: 'Engineering Quality',
    icon: '🐞',
    formula: 'Defect Escape Rate = (Bugs Found in Production / Total Bugs Found) × 100',
    target: '< 5%',
    summary: 'Percentage of bugs discovered by end-users in production versus those caught during internal testing.',
    deepArticle: `### 📖 Deep Dive: Defect Escape Rate

#### Why Quality Metrics Matter in Agile
Agile emphasizes speed, but speed without quality creates a death spiral of production hotfixes and team burnout. Defect Escape Rate reflects the reliability of your automated test suite and QA process.

#### Calculation
$$\\text{Defect Escape Rate} = \\left( \\frac{\\text{Production Bugs}}{\\text{Sprint Bugs} + \\text{Production Bugs}} \\right) \\times 100\\%$$

#### Action Plan for High Defect Escape Rates
1. Introduce **Test-Driven Development (TDD)** or Behavior-Driven Development (BDD).
2. Implement automated visual regression and integration testing in CI/CD.
3. Conduct Root Cause Analysis (5 Whys) for every production incident.`
  }
];

// -----------------------------------------------------------------------------
// NEW: DEEP COACHING MODELS VAULT
// -------------------------------------------------------------
export const COACHING_MODELS = [
  {
    id: 'grow',
    name: 'The GROW Coaching Model',
    author: 'Sir John Whitmore',
    icon: '🌱',
    summary: 'The world-standard structured 4-stage coaching framework: Goal, Reality, Options, Will.',
    articleContent: `# 🧠 Deep Dive: The GROW Coaching Model

## Overview
Created by Sir John Whitmore in the 1980s, the **GROW Model** is the foundation of modern professional coaching. As an Agile Coach, GROW provides a non-directive framework to help team members, Scrum Masters, and Product Owners solve their own problems rather than telling them what to do.

---

## The 4 Pillars of GROW

\`\`\`
   [G] OAL       -->  What do you want to achieve?
   [R] EALITY    -->  Where are you right now?
   [O] PTIONS    -->  What paths could you take?
   [W] ILL       -->  What specific step will you commit to?
\`\`\`

---

### Stage 1: G - Goal (Establishing the Outcome)
Define what the coachee wants to achieve in this session and long-term.

**Powerful Coaching Questions:**
- *What would be the most valuable outcome from our conversation today?*
- *How will you know when you have achieved this goal? What does success look like?*
- *Is this goal within your direct sphere of control?*

---

### Stage 2: R - Reality (Exploring Current State)
Guide the coachee to objectively assess their current situation without self-judgment or defensive bias.

**Powerful Coaching Questions:**
- *What is currently happening right now? Who else is involved?*
- *What steps have you already tried, and what were the results?*
- *What internal or external obstacles are standing in your way?*

---

### Stage 3: O - Options (Brainstorming Possibilities)
Encourage creative, unconstrained thinking to explore all potential routes forward.

**Powerful Coaching Questions:**
- *If you had a magic wand and unlimited resources, what would you do?*
- *What would a leader you deeply respect do in this exact situation?*
- *What are the pros and cons of Option A vs. Option B?*

---

### Stage 4: W - Will / Way Forward (Building Commitment)
Convert options into concrete, time-bound, actionable commitments.

**Powerful Coaching Questions:**
- *Which specific option will you execute first?*
- *When exactly will you start and finish this action?*
- *On a scale of 1 to 10, how committed are you to completing this step? (If under 8, ask: What would make it a 10?)*`
  },
  {
    id: 'oskar',
    name: 'The OSKAR Solution-Focused Model',
    author: 'Mark McKergow & Paul Z. Jackson',
    icon: '🎯',
    summary: 'Solution-focused coaching model emphasizing strengths and past successes over problem analysis.',
    articleContent: `# 🧠 Deep Dive: The OSKAR Coaching Model

## Overview
Unlike traditional coaching models that analyze the root cause of failures, **OSKAR** is a **Solution-Focused Brief Coaching (SFBC)** framework. It focuses on finding what is already working in the system and doing more of it.

---

## The 5 Framework Steps

1. **O - Outcome**: Define the desired future state.
2. **S - Scale**: Rate current state on a 1-to-10 scale to measure progress.
3. **K - Know-how**: Identify existing team skills, strengths, and past wins.
4. **A - Action**: Determine small positive micro-steps forward.
5. **R - Review**: Review progress in the next coaching check-in.

---

## Powerful Questions Matrix

- **Scaling Question**: *"On a scale of 1 to 10, where 10 is perfect sprint flow and 1 is total chaos, where is the team today?"*
- **The Miracle Question**: *"Suppose tonight while you sleep, a miracle happens and this team conflict is completely solved. When you walk into standup tomorrow, what is the first small clue that tells you things are different?"*`
  },
  {
    id: 'cynefin',
    name: 'The Cynefin Sense-Making Framework',
    author: 'Dave Snowden',
    icon: '🌀',
    summary: 'Decision-making framework categorizing problems into Clear, Complicated, Complex, and Chaotic domains.',
    articleContent: `# 🧠 Deep Dive: The Cynefin Framework for Agile Leaders

## Overview
Developed by Dave Snowden, **Cynefin** (pronounced *kun-ev-in*) is a Welsh word meaning "place of multiple belongings." It helps coaches and leaders understand which decision-making style to use based on the complexity of the domain.

---

## The 5 Domains of Cynefin

```
   COMPLICATED (Sense-Analyze-Respond)   |   COMPLEX (Probe-Sense-Respond)
   Domain of Experts / Analysis         |   Domain of Emergence / Agile Experiments
   -------------------------------------+-----------------------------------
   CLEAR (Sense-Categorize-Respond)     |   CHAOTIC (Act-Sense-Respond)
   Domain of Best Practice & Rules      |   Domain of Crisis & Emergency
```

### 1. Clear / Simple (Best Practice)
- **Nature**: Cause and effect are obvious to everyone.
- **Action**: Sense -> Categorize -> Respond. Apply Best Practice.
- **Agile Context**: Standard checklist operations, simple bug fixes.

### 2. Complicated (Good Practice)
- **Nature**: Cause and effect exist, but require expert analysis or technical investigation.
- **Action**: Sense -> Analyze -> Respond. Apply Good Practice.
- **Agile Context**: Database performance tuning, complex refactoring.

### 3. Complex (Emergent Practice) -- THE HOME OF AGILE!
- **Nature**: Cause and effect can only be understood in retrospect. No single right answer exists.
- **Action**: **Probe -> Sense -> Respond**. Conduct small safe-to-fail experiments.
- **Agile Context**: Product feature discovery, market validation, team cultural transformation.

### 4. Chaotic (Novel Practice)
- **Nature**: High urgency, burning platform. Cause and effect cannot be determined.
- **Action**: **Act -> Sense -> Respond**. Immediate action to stop the hemorrhage.
- **Agile Context**: Production server outage, major security breach.`
  }
];

// -----------------------------------------------------------------------------
// NEW: DEEP FACILITATION METHODS & PLAYBOOKS
// -------------------------------------------------------------
export const FACILITATION_METHODS = [
  {
    id: '1-2-4-all',
    name: '1-2-4-All (Liberating Structure)',
    category: 'Liberating Structures',
    icon: '👥',
    time: '15 Minutes',
    groupSize: 'Any size (8 to 500+ people)',
    summary: 'Engages 100% of participants simultaneously to generate ideas, eliminate groupthink, and build shared alignment.',
    playbook: `### 🎪 Facilitation Playbook: 1-2-4-All

#### Purpose
Traditional meetings are dominated by the loudest 20% of voices. **1-2-4-All** ensures equal voice, rapid idea generation, and consensus in just 15 minutes.

#### Step-by-Step Timing & Script

1. **1 Minute (Silent Individual Reflection)**
   - *Script*: "Without speaking to anyone, write down your thoughts or answers to [Prompt/Question] on a piece of paper."
2. **2 Minutes (Pairs)**
   - *Script*: "Turn to the person next to you. Share your ideas, find commonalities, and build upon each other’s thoughts."
3. **4 Minutes (Groups of 4)**
   - *Script*: "Merge two pairs into a group of 4. Share the best ideas from your pairs and select 1 key insight to share with the broader room."
4. **5 Minutes (All - Plenary Synthesis)**
   - *Script*: "Each group of 4 shares their top insight in 30 seconds. Facilitator collects patterns on the main board."

#### When to Use
- Sprint Retrospectives (identifying root causes).
- Product Strategy Discovery.
- Post-incident post-mortems.`
  },
  {
    id: 'lean-coffee',
    name: 'Lean Coffee Facilitation',
    category: 'Meeting Design',
    icon: '☕',
    time: '30 - 60 Minutes',
    groupSize: '5 to 12 people per table',
    summary: 'An agenda-less, democratically driven meeting framework where topics are voted on and timed in 5-minute slots.',
    playbook: `### 🎪 Facilitation Playbook: Lean Coffee

#### Purpose
Eliminates boring meetings by ensuring the agenda is democratically set and timed by participants in real time.

#### Setup Board Columns
1. **To Discuss** (Brainstorming & Pitching topics)
2. **Discussing** (Active topic with 5-minute timer)
3. **Discussed** (Completed topics with key takeaways)

#### Steps
1. **Pitching (3 Mins)**: Everyone writes topic sticky notes and places them in *To Discuss*.
2. **Dot Voting (2 Mins)**: Everyone gets 3 dot votes to vote on their favorite topics. Sort column by vote count.
3. **Timed Discussion (5 Mins per topic)**: Move top topic to *Discussing*. Start 5-minute timer.
4. **Roman Voting (Thumbs Up / Down)**: When timer expires, vote:
   - 👍 Thumbs Up = Add 2 more minutes to this topic.
   - 👎 Thumbs Down = Move to next topic in queue.`
  },
  {
    id: 'delegation-poker',
    name: 'Delegation Poker (Management 3.0)',
    category: 'Team Governance & Empowerment',
    icon: '🎴',
    time: '45 Minutes',
    groupSize: 'Scrum Masters, Product Owners, Engineering Managers',
    summary: 'Clarifies decision-making boundaries across 7 distinct levels of delegation between leaders and autonomous teams.',
    playbook: `### 🎪 Facilitation Playbook: Delegation Poker

#### Purpose
Clarifies "Who decides what?" to prevent micromanagement and empower team autonomy.

#### The 7 Delegation Levels
1. **Tell**: Manager decides alone and informs the team.
2. **Sell**: Manager decides but tries to persuade the team.
3. **Consult**: Manager asks for team input before deciding.
4. **Agree**: Manager and team decide together in consensus.
5. **Advise**: Team decides, but manager offers advice.
6. **Inquire**: Team decides alone, and informs manager afterwards.
7. **Delegate**: Team decides completely; manager doesn't interfere.

#### Facilitation Game Steps
1. List key organizational decisions (e.g., *Hiring new team members*, *Tech stack selection*, *Sprint Goal definition*).
2. For each decision, everyone secretly plays a delegation card (1 through 7).
3. Reveal cards simultaneously. Outliers (e.g. Card 2 vs Card 6) explain their reasoning until consensus is reached on the Delegation Board.`
  }
];
