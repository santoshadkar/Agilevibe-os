import type { RoleDeepGuide, UserRole, RetroTheme } from '../types';

export const ROLE_DEEP_GUIDES: Record<UserRole, RoleDeepGuide> = {
  'scrum-master': {
    role: 'scrum-master',
    title: 'Scrum Master (SM) — Servant Leader, Agile Coach & Flow Optimizer',
    mission: 'Accountable for establishing Scrum as defined in the Scrum Guide by helping everyone understand Scrum theory and practice, both within the Scrum Team and the organization.',
    whyVitalToday: [
      'Fosters Psychological Safety in Distributed/Hybrid Workplaces: Modern remote teams require deliberate facilitation to maintain high trust, transparent communication, and continuous learning.',
      'Protects Teams from Volatile Distractions: In fast-paced AI and SaaS environments, SMs shield developers from mid-sprint scope creep while educating stakeholders on empirical trade-offs.',
      'Unblocks Organizational Dependencies: Drives systemic impediment removal across complex enterprise departments to keep delivery throughput fast and steady.',
      'Master of Flow Metrics & Empirical Process Control: Replaces gut-feel estimations with objective data (WIP limits, Cycle Time, CFD) to improve predictability.'
    ],
    coachingStancesGuide: {
      title: 'Scrum Master Career Evolution: Knowing When to act as SM vs Agile Coach & Wearing the 8 Hats',
      whenToBeSM: [
        'Squad Focus: When working directly with 1-2 cross-functional squads to establish Scrum theory, event hygiene, and Definition of Done.',
        'Tactical Flow Control: When actively walking the daily board, enforcing WIP limits, and unblocking immediate sprint impediments.',
        'Shielding Developers: Protecting squad capacity from mid-sprint executive scope insertions.'
      ],
      whenToBecomeCoach: [
        'Organizational Scale: When scaling agile practices across multiple release trains (SAFe ARTs, LeSS, Nexus) and C-level executive leadership.',
        'Systemic Transformation: When shifting organizational policies (HR appraisal systems, annual budgeting, vendor contracting) toward Lean-Agile principles.',
        'Mentoring Scrum Masters: Leading a Scrum Master Chapter/Guild to elevate agile maturity across the entire enterprise.'
      ],
      eightHats: [
        {
          hat: '1. Servant Leader',
          whenToWear: 'Always as foundational mindset.',
          keyBehavior: 'Serving squad growth, fostering psychological safety, and leading through influence rather than command-and-control authority.'
        },
        {
          hat: '2. Teacher',
          whenToWear: 'During squad onboarding or process breaches.',
          keyBehavior: 'Explicitly educating developers and POs on Scrum 2020 theory, INVEST criteria, and empiricism pillars.'
        },
        {
          hat: '3. Mentor',
          whenToWear: 'When sharing personal agile experience.',
          keyBehavior: 'Guiding practitioners based on real-world past experience while letting them make their own decisions.'
        },
        {
          hat: '4. Facilitator',
          whenToWear: 'During mandatory Scrum events & workshops.',
          keyBehavior: 'Remaining neutral, enforcing timeboxes, and using Liberating Structures (1-2-4-All) so 100% of voices are heard.'
        },
        {
          hat: '5. Agile Coach',
          whenToWear: 'During technical friction or retro reflections.',
          keyBehavior: 'Asking powerful open-ended questions (e.g., "What would happen if we reduced WIP limits by half?") to let the team discover solutions.'
        },
        {
          hat: '6. Impediment Remover',
          whenToWear: 'When systemic blockers halt developer flow.',
          keyBehavior: 'Relentlessly resolving organizational bottlenecks (QA environment access, security sign-offs, vendor APIs).'
        },
        {
          hat: '7. Change Agent',
          whenToWear: 'When enterprise policies obstruct agility.',
          keyBehavior: 'Driving cultural mindset shifts across HR, Legal, Finance, and C-suite leadership.'
        },
        {
          hat: '8. Manager of Flow',
          whenToWear: 'During daily execution & metrics reviews.',
          keyBehavior: 'Monitoring Cumulative Flow Diagrams (CFDs), 85th percentile Cycle Time SLAs, and Work-In-Progress limits.'
        }
      ]
    },
    facilitationWorkshops: {
      title: 'Practical Team-Level Workshop Blueprints & Facilitation Techniques',
      techniques: [
        {
          name: '1-2-4-All (Liberating Structure)',
          format: '1 min silent reflection -> 2 min pair sync -> 4 min group sync -> All group presentation.',
          teamBenefit: 'Guarantees 100% equal participation, ensuring introverted developers contribute as much as outspoken members.',
          stepByStep: '1. Give 1 min for individual silent notes. 2. Form pairs for 2 mins. 3. Merge pairs into groups of 4 for 4 mins. 4. Share top ideas with the room.'
        },
        {
          name: 'Impromptu Networking (Trust & Morale Workshop)',
          format: '3 rounds of 2-minute rapid pair conversations addressing a core challenge.',
          teamBenefit: 'Builds rapid psychological safety and breaks down silos in remote or newly formed squads.',
          stepByStep: '1. State the prompt: "What challenge are you facing this sprint?". 2. Randomly pair members for 2 mins. 3. Repeat 3 times with new partners.'
        },
        {
          name: 'Team Working Agreement Construction Workshop',
          format: '90-minute interactive workshop mapping squad norms, core hours, and PR SLAs.',
          teamBenefit: 'Eliminates implicit friction by establishing explicit squad rules of engagement.',
          stepByStep: '1. Silent brainstorm on "What helps us work best?". 2. Group into categories (Communication, Code Reviews, Meetings). 3. Vote and finalize top 5 agreements.'
        },
        {
          name: 'Definition of Done (DoD) Co-Creation Workshop',
          format: '2-hour collaborative session with Developers, QA, and Product Owner.',
          teamBenefit: 'Creates shared quality transparency and prevents hidden technical debt escaping to production.',
          stepByStep: '1. List all quality checks (unit tests, code review, regression, security). 2. Categorize into "Current Capability" vs "Target Quality". 3. Publish initial DoD.'
        },
        {
          name: 'Value Stream Mapping & WIP Limit Workshop',
          format: 'Half-day mapping of feature flow from idea to production release.',
          teamBenefit: 'Uncovers hidden wait times and establishes visual WIP limits for every workflow column.',
          stepByStep: '1. Map all workflow states on a board. 2. Measure active work time vs wait time. 3. Set WIP limits on bottleneck columns.'
        }
      ]
    },
    aiInScaledFrameworks: {
      title: 'How Scrum Masters Leverage AI in Scaled Agile (SAFe 6.0 / LeSS / Nexus)',
      useCases: [
        {
          title: 'Predictive Cross-Team Dependency Tracking',
          desc: 'Using LLM analytics on Jira commit logs and dependency maps during SAFe PI Planning to flag critical path risks before Sprints begin.',
          scaledBenefit: 'Prevents mid-PI bottlenecks across 10+ release train teams by 40%.'
        },
        {
          title: 'AI Retrospective Facilitator & Sentiment Analyzer',
          desc: 'Analyzing sprint retros, Slack sentiment, and cycle time anomalies to auto-generate creative, tailored retro themes (Sailboat, Starfish, Racecar).',
          scaledBenefit: 'Eliminates retro fatigue and uncovers hidden technical debt or team health issues.'
        },
        {
          title: 'Automated 5-Whys Root Cause Resolver',
          desc: 'Guiding teams through AI-assisted 5-Whys root cause analysis whenever deployment failures or QA bottlenecks occur.',
          scaledBenefit: 'Turns recurring production bugs into actionable continuous improvement experiments.'
        }
      ]
    },
    eventExpectations: [
      {
        event: 'Sprint Planning',
        roleAccountability: 'Facilitates the event, ensures the team understands the Product Goal, and protects Developers\' self-management in selecting items.',
        keyPreparation: 'Verify Definition of Done is updated, past velocity/capacity is visible, and backlog refinement items are pre-analyzed.',
        antipatternsToAvoid: 'Assigning tasks to developers or letting Product Owner mandate impossible capacity workload.'
      },
      {
        event: 'Daily Scrum (Standup)',
        roleAccountability: 'Ensures the 15-minute event takes place, remains focused on Sprint Goal progress, and empowers Developers to adapt their daily plan.',
        keyPreparation: 'Walk the board right-to-left focusing on aging items and unblocking active impediments.',
        antipatternsToAvoid: 'Turning standup into a status report to the Scrum Master or letting discussions exceed 15 minutes.'
      },
      {
        event: 'Backlog Refinement',
        roleAccountability: 'Supports PO and Developers in slicing large epics vertically into small INVEST-compliant user stories.',
        keyPreparation: 'Ensure BDD Gherkin criteria exist and technical debt capacity is discussed.',
        antipatternsToAvoid: 'Treating refinement as a compulsory planning meeting without technical debate.'
      },
      {
        event: 'Sprint Review / Demo',
        roleAccountability: 'Facilitates empirical stakeholder feedback on the working Increment delivered during the Sprint.',
        keyPreparation: 'Ensure working software is deployed on a staging environment and key business stakeholders attend.',
        antipatternsToAvoid: 'Presenting PowerPoint slides instead of demonstrating actual working software.'
      },
      {
        event: 'Sprint Retrospective',
        roleAccountability: 'Creates a safe environment for the team to inspect itself (people, relationships, process, tools) and create improvement experiments.',
        keyPreparation: 'Select an engaging retro format (Sailboat, Starfish, 4Ls) and review action items from previous retro.',
        antipatternsToAvoid: 'Allowing blame games, skipping retros when busy, or leaving without 1-2 actionable committed experiments.'
      }
    ]
  },

  'product-owner': {
    role: 'product-owner',
    title: 'Product Owner (PO) — Value Maximizer & Backlog Authority',
    mission: 'Accountable for maximizing the value of the product resulting from the work of the Scrum Team, owned through effective Product Backlog management.',
    whyVitalToday: [
      'Single Point of Product Accountability: Prevents conflicting stakeholder demands by maintaining an ordered, transparent Product Backlog.',
      'Bridges Customer Needs with Technical Execution: Translates complex user feedback into INVEST user stories with clear BDD acceptance criteria.',
      'Optimizes Return on Investment (ROI): Uses quantitative frameworks (WSJF, RICE) to prioritize high-value features over low-impact requests.',
      'Drives Product Goal Alignment: Ensures every Sprint deliverable moves the needle on strategic quarterly outcomes.'
    ],
    aiInScaledFrameworks: {
      title: 'How Product Owners Leverage AI in Scaled Agile (SAFe 6.0 / LeSS / Nexus)',
      useCases: [
        {
          title: 'AI User Story & Gherkin Acceptance Criteria Generator',
          desc: 'Instantly generating INVEST-compliant user stories complete with Given/When/Then BDD criteria from high-level feature ideas.',
          scaledBenefit: 'Reduces backlog refinement preparation time by 60% while ensuring edge case testability.'
        },
        {
          title: 'Automated WSJF & RICE Score Calculator',
          desc: 'Calculating Cost of Delay over Job Size using AI algorithms that analyze market data, time criticality, and risk reduction values.',
          scaledBenefit: 'Objective, data-driven feature prioritization during SAFe PI Planning breakouts.'
        },
        {
          title: 'Customer Feedback & Review Summarizer',
          desc: 'Aggregating thousands of customer reviews, CSAT surveys, and support tickets into categorized feature requests.',
          scaledBenefit: 'Ensures Product Backlog items directly address verified customer friction points.'
        }
      ]
    },
    eventExpectations: [
      {
        event: 'Sprint Planning',
        roleAccountability: 'Presents the Product Goal, answers questions on Product Backlog items, and collaborates on defining a clear Sprint Goal.',
        keyPreparation: 'Order top backlog items, ensure acceptance criteria are clear, and clarify business value context.',
        antipatternsToAvoid: 'Dictating how many story points developers must commit to or changing priorities mid-meeting.'
      },
      {
        event: 'Daily Scrum (Standup)',
        roleAccountability: 'Attends to answer functional scope questions if needed, but lets Developers lead the daily sync.',
        keyPreparation: 'Be available post-standup for quick clarifications on story acceptance details.',
        antipatternsToAvoid: 'Interrupting developers during standup to demand status updates.'
      },
      {
        event: 'Backlog Refinement',
        roleAccountability: 'Leads the breakdown of high-level epics into small, estimable user stories with Developers.',
        keyPreparation: 'Bring user persona context, customer feedback, and BDD Gherkin scenarios to the table.',
        antipatternsToAvoid: 'Refining items alone in isolation without developer input.'
      },
      {
        event: 'Sprint Review / Demo',
        roleAccountability: 'Demonstrates completed increments to stakeholders, explains Product Backlog status, and gathers feedback for future sprints.',
        keyPreparation: 'Invite key business stakeholders, customers, and executive sponsors.',
        antipatternsToAvoid: 'Accepting incomplete stories that do not meet the Definition of Done.'
      },
      {
        event: 'Sprint Retrospective',
        roleAccountability: 'Participates as an equal Scrum Team member to inspect backlog management practices and collaboration.',
        keyPreparation: 'Be open to feedback on story clarity, responsiveness, or scope changes.',
        antipatternsToAvoid: 'Defending bad user stories or skipping the retro.'
      }
    ]
  },

  'product-manager': {
    role: 'product-manager',
    title: 'Product Manager (PM) — Strategic Visionary, Market Strategist & Growth Leader',
    mission: 'Accountable for defining the product vision, long-term market strategy, target customer positioning, business OKRs, and Product-Led Growth (PLG) execution.',
    whyVitalToday: [
      'Drives Market Alignment & Business Growth: Navigates competitive SaaS markets by connecting customer discovery with corporate revenue goals.',
      'Master of Outcome-Based Roadmapping: Replaces brittle calendar feature commitments with "Now / Next / Later" outcome-driven roadmaps tied to OKRs.',
      'Optimizes Product Unit Economics: Tracks metrics (LTV, CAC, MRR, Churn, NPS) to ensure sustainable, scalable product growth.',
      'Executes Go-To-Market (GTM) Alignment: Unifies Product, Marketing, Sales, and Customer Success around unified launch initiatives.'
    ],
    aiInScaledFrameworks: {
      title: 'How Product Managers Leverage AI in Scaled Agile (SAFe 6.0 / LeSS / Nexus)',
      useCases: [
        {
          title: 'AI Product Vision & Strategy Generator',
          desc: 'Synthesizing market research, competitor teardowns, and customer interviews into structured Product Vision & Strategy canvases.',
          scaledBenefit: 'Aligns 50+ engineers across multiple release trains on a unified North Star metric.'
        },
        {
          title: 'OKR & Outcome Roadmap Matrix Aligner',
          desc: 'Mapping quarterly corporate OKRs to outcome-based "Now / Next / Later" roadmap horizons automatically.',
          scaledBenefit: 'Replaces output feature dates with measurable business impact Key Results.'
        },
        {
          title: 'AI Competitor Intelligence & Market Analyst',
          desc: 'Monitoring competitor product releases, pricing changes, and user reviews in real time.',
          scaledBenefit: 'Enables rapid strategic pivots before quarterly PI Planning boundaries.'
        }
      ]
    },
    eventExpectations: [
      {
        event: 'PI Planning / Scaled Alignment',
        roleAccountability: 'Presents the overall Product Vision, Top 10 Features, and strategic business context to all Release Train teams.',
        keyPreparation: 'Prepare Market Vision slides, strategic OKR targets, and high-level feature business cases.',
        antipatternsToAvoid: 'Presenting un-prioritized laundry lists of 100 features without WSJF ordering.'
      },
      {
        event: 'Customer Discovery Loops',
        roleAccountability: 'Conducts continuous user interviews and usability tests to validate problem-solution fit before engineering investment.',
        keyPreparation: 'Prepare prototype wireframes, user interview scripts, and analytics telemetry data.',
        antipatternsToAvoid: 'Building features based on internal executive opinions without customer validation.'
      },
      {
        event: 'Sprint Review / Demo',
        roleAccountability: 'Inspects product increments to assess progress toward strategic OKRs and market launch readiness.',
        keyPreparation: 'Review telemetry analytics and align GTM launch messaging with Marketing/Sales.',
        antipatternsToAvoid: 'Focusing on minor UI bugs instead of strategic outcome metrics.'
      },
      {
        event: 'Roadmap & Portfolio Sync',
        roleAccountability: 'Reviews quarterly progress against North Star metrics and adjusts the "Now / Next / Later" roadmap horizons.',
        keyPreparation: 'Aggregate LTV, CAC, Churn, and MRR metrics for executive reviews.',
        antipatternsToAvoid: 'Locking into 12-month static Gantt charts that ignore changing market conditions.'
      },
      {
        event: 'GTM & Launch Readiness Sync',
        roleAccountability: 'Coordinates product launch readiness across Sales, Marketing, Customer Support, and Product documentation.',
        keyPreparation: 'Ensure release notes, sales enablement collateral, and support training are complete.',
        antipatternsToAvoid: 'Launching major features without informing customer support or sales teams.'
      }
    ]
  }
};

export const RETRO_THEMES: RetroTheme[] = [
  {
    id: 'sailboat',
    name: 'Sailboat Retrospective',
    metaphor: 'Navigating the sprint across open waters toward our island goal.',
    categories: [
      { key: 'wind', name: '💨 Wind (Pushing us forward)', icon: '💨', description: 'What propelled us forward and sped up velocity?' },
      { key: 'anchors', name: '⚓ Anchors (Holding us back)', icon: '⚓', description: 'What dragged us down or caused delays?' },
      { key: 'rocks', name: '🪨 Rocks (Risks ahead)', icon: '🪨', description: 'What potential hazards/dependencies lie ahead?' },
      { key: 'sun', name: '☀️ Sun (Appreciations)', icon: '☀️', description: 'Who or what deserves recognition and thanks?' }
    ]
  },
  {
    id: 'starfish',
    name: 'Starfish Retrospective',
    metaphor: '5-prong spectrum for fine-tuning team practices.',
    categories: [
      { key: 'keep', name: '🟢 Keep Doing', icon: '🟢', description: 'What practices are working well and should continue?' },
      { key: 'more', name: '🔵 Do More Of', icon: '🔵', description: 'What is producing good results that we should expand?' },
      { key: 'less', name: '🟡 Do Less Of', icon: '🟡', description: 'What is adding friction or waste that we should reduce?' },
      { key: 'stop', name: '🔴 Stop Doing', icon: '🔴', description: 'What is not working at all and should be halted?' },
      { key: 'start', name: '🟣 Start Doing', icon: '🟣', description: 'What new idea or experiment should we try next sprint?' }
    ]
  },
  {
    id: 'four-ls',
    name: '4Ls Retrospective',
    metaphor: 'Emotional and factual evaluation of the sprint experience.',
    categories: [
      { key: 'liked', name: '❤️ Liked', icon: '❤️', description: 'What did you enjoy most about this sprint?' },
      { key: 'learned', name: '💡 Learned', icon: '💡', description: 'What new insights or technical knowledge did we gain?' },
      { key: 'lacked', name: '⚠️ Lacked', icon: '⚠️', description: 'What was missing that prevented optimal delivery?' },
      { key: 'longed', name: '🌟 Longed For', icon: '🌟', description: 'What do you wish we had in terms of tools, clarity, or support?' }
    ]
  },
  {
    id: 'mountain',
    name: 'Mountain Climber Retrospective',
    metaphor: 'Conquering steep terrain to reach the summit goal.',
    categories: [
      { key: 'boulders', name: '🪨 Boulders (Impediments)', icon: '🪨', description: 'What major blockers obstructed our climb?' },
      { key: 'equipment', name: '🛠️ Gear (Tools & Practices)', icon: '🛠️', description: 'What tools or techniques helped us scale safely?' },
      { key: 'summit', name: '🏔️ Summit (Achievements)', icon: '🏔️', description: 'What major milestones did we conquer?' },
      { key: 'weather', name: '⛈️ Weather (External Climate)', icon: '⛈️', description: 'How did external stakeholder demands impact us?' }
    ]
  },
  {
    id: 'racecar',
    name: 'Racecar Retrospective',
    metaphor: 'High-speed Formula 1 lap around the sprint track.',
    categories: [
      { key: 'engine', name: '🏎️ Engine (Speed Drivers)', icon: '🏎️', description: 'What gave us peak speed and acceleration?' },
      { key: 'brakes', name: '🛑 Brakes (Slowing Us Down)', icon: '🛑', description: 'What caused us to hit the brakes unexpectedly?' },
      { key: 'pitstop', name: '🛠️ Pitstop (Maintenance)', icon: '🛠️', description: 'What refactoring or tech debt maintenance is needed?' },
      { key: 'fuel', name: '⛽ Fuel (Team Energy)', icon: '⛽', description: 'How is team morale and energy level for the next lap?' }
    ]
  }
];
