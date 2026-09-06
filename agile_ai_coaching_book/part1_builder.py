import os
from build_truly_unique_500page_manuscript import write_clean_md

def build_part1():
    print("Building Part I (Enterprise Agile Coaching Foundations) - 100% Unique Prose...")

    # Chapter 1
    ch01_sections = [
        ("The Evolution of Modern Agile Frameworks", [
            "Over the past two decades, the Agile software development movement has undergone a massive paradigm shift. What began as a grassroots manifesto written by seventeen software developers in Snowbird, Utah in 2001 has transformed into multi-thousand-person enterprise transformation engines. In early software teams, Agile methods such as Extreme Programming (XP) and Scrum were applied at the single-team level (typically 3 to 9 developers working on a unified codebase). However, as modern digital organizations grew, scaling software delivery across dozens or hundreds of interconnected squads became the central operational challenge of enterprise technology leadership.",
            "To navigate this complexity, several enterprise scaling frameworks emerged, each offering a distinct philosophy regarding structural alignment, descaling, governance, and culture. Understanding the architectural differences, structural trade-offs, and underlying philosophies between contemporary Agile frameworks is a mandatory prerequisite for any Enterprise Agile Coach.",
            "Agile Manifesto Values: Individuals and interactions over processes and tools; Working software over comprehensive documentation; Customer collaboration over contract negotiation; Responding to change over following a plan.",
            "Team-Level Foundations: Scrum (Sprint timeboxes, PO, SM, Dev Team), Kanban (Flow visualization, WIP limits), Extreme Programming (Pair programming, TDD, CI/CD). Enterprise Scaled Frameworks: SAFe 6.0 (Structured alignment), LeSS (Large-Scale Scrum descaling), Spotify Model (Networked Tribes & Guilds), Unfix (Dynamic team design).",
            "```\nEnterprise Value Stream Flow Alignment:\n[ Executive Portfolio Strategy ] ──► [ Value Stream Funding & OKRs ] ──► [ Feature Squad Execution ] ──► [ Automated CI/CD Pipeline ] ──► [ Continuous Customer Value ]\n```"
        ]),
        ("SAFe 6.0 (Scaled Agile Framework) Architectural Deep Dive", [
            "SAFe 6.0 is the most widely adopted enterprise scaling framework in Fortune 500 corporations. Built on Lean, Systems Thinking, Agile, and DevOps principles, SAFe structures execution across four configuration levels: Essential SAFe, Large Solution SAFe, Portfolio SAFe, and Full SAFe.",
            "The primary execution mechanism in SAFe is the Agile Release Train (ART)—a long-lived team of Agile teams (typically 50 to 125 individuals) that plans, commits, builds, tests, and deploys software incrementally in synchronized 8 to 12-week timeboxes called Program Increments (PIs).",
            "Release Train Engineer (RTE): The servant leader and chief Scrum Master for the ART, responsible for facilitating PI Planning events, managing risks, and driving continuous improvement. Product Management: The product authority responsible for defining and prioritizing the Program Backlog (Features). System Architect: The technical authority responsible for aligning architecture across squads and defining the architectural runway.",
            "PI Planning Ceremony Playbook: PI Planning is a two-day face-to-face or virtual event where all members of an ART align on shared goals, map cross-team dependencies, and establish PI Objectives: 1. Executive Context & Vision: Product Management presents the top 10 Features and business context.",
            "2. Team Breakouts: Squads estimate capacity, draft sprint plans, and identify cross-team dependencies. 3. Management Review: Leadership resolves capacity bottlenecks and adjusts scope commitments. 4. Final Plan Commitment: Squads present final PI Objectives and vote on plan confidence. 5. ROAMing Risks: Identified risks are categorized as Resolved, Owned, Accepted, or Mitigated."
        ]),
        ("LeSS (Large-Scale Scrum) & Descaling Complexity", [
            "In stark contrast to SAFe's structured alignment layers, Large-Scale Scrum (LeSS) operates on the principle of descaling organizational complexity. LeSS asserts that enterprise agility is achieved by eliminating unnecessary management layers, organizational silos, and separate program backlogs.",
            "LeSS Core Principles: 1. Single Product Owner & Single Product Backlog: Multiple cross-functional Scrum teams work from one prioritized Product Backlog owned by a single Product Owner.",
            "2. Feature Teams over Component Teams: Every LeSS team is a cross-functional Feature Team capable of completing customer stories end-to-end without external dependencies.",
            "3. Sprint Synchronization: All teams operate on identical Sprint boundaries, starting and finishing Sprints simultaneously.",
            "Descaling Strategy: Rather than scaling up management structures to handle cross-team coordination, LeSS descales organizational design to enable direct team-to-team interaction and joint Sprint Planning."
        ]),
        ("The Spotify Model: Networked Culture & Autonomous Guilds", [
            "The Spotify Model organizes product engineering groups into autonomous units called Squads, Tribes, Chapters, and Guilds.",
            "Squad: Autonomous cross-functional team (6-10 people) focused on a single product area. Tribe: A cluster of related Squads working in the same business domain (e.g., Digital Payments Tribe).",
            "Chapter: A functional competence group (e.g., Java Developers, QA Testers) across squads, managed by a Chapter Lead responsible for professional development.",
            "Guild: An organic, company-wide community of practice for shared passions (e.g., DevOps Guild, AI Guild, Security Guild).",
            "Decoupling Matrix: Matrix organization succeeds only when supported by microservices software architecture that allows squads to deploy independently."
        ]),
        ("Enterprise Scaling Anti-Patterns & Dysfunction Diagnostics", [
            "Cargo Cult Agile ('Agile in Name Only'): Symptom: Teams rename status meetings to 'Daily Standups', project managers become 'Product Owners', and functional silos become 'Squads', but the underlying behavior remains strictly waterfall and command-and-control.",
            "Root Cause: Implementing ceremonies and changing job titles without shifting leadership incentives, performance evaluation metrics, or organizational trust.",
            "Coaching Intervention: Shift leadership focus from ritual compliance to objective outcome measurement (e.g., Lead Time reduction, customer value velocity, Flow Efficiency).",
            "The Feature Factory Anti-Pattern: Symptom: Teams achieve high velocity in story point output and close hundreds of Jira/ADO tickets every sprint, yet customer satisfaction, business revenue, and market growth remain stagnant.",
            "Root Cause: Organizational incentives prioritize output (volume of code/tickets) over outcomes (business impact). Product Owners act as back-order takers rather than strategic value creators. Coaching Intervention: Introduce OKRs (Objectives and Key Results) linked directly to feature adoption and customer retention metrics rather than story point volume."
        ]),
        ("Case Study: Descaling a Financial Services Giant", [
            "The Background: Global FinTech Corp possessed 1,200 software engineers organized into 45 siloed component teams. Feature releases required an average Lead Time of 26 weeks from concept to production deployment.",
            "The Transformation Strategy: 1. Value Stream Mapping (VSM): Mapped end-to-end flow of value, revealing that 82% of total Lead Time was spent waiting in handoff queues between component teams.",
            "2. Re-Architecting Squads: Combined UI developers, backend engineers, database specialists, and QA automation engineers into 32 autonomous, cross-functional Feature Squads aligned to customer journeys.",
            "3. Tooling Standardization: Consolidated 12 fragmented Jira Data Center and Azure DevOps instances into a single Jira Cloud Enterprise platform connected to Atlassian Access and GitHub Enterprise.",
            "The Results: Lead Time Reduction: Reduced concept-to-cash Lead Time from 26 weeks to 2.4 weeks. Flow Efficiency Increase: Improved Flow Efficiency from 8.5% to 38.2%. Defect Rate Drop: Reduced production severity-1 incidents by 64% due to automated CI/CD pipeline quality gates."
        ])
    ]

    # Chapter 2
    ch02_sections = [
        ("The Eight Stances of the Lyssa Adkins Coaching Framework", [
            "Agile coaching is neither project management under a new title nor is it limited to facilitating Scrum ceremonies. As articulated in Lyssa Adkins' foundational framework Coaching Agile Teams, an Enterprise Agile Coach must master eight distinct operational stances. True coaching mastery lies in knowing when and how to transition between these stances based on team maturity, organizational complexity, and interpersonal dynamics.",
            "```\nThe Agile Coaching Stance Framework:\n[ Professional Coach ] ◄───────► [ Facilitator ] ───────► [ Teacher ]\n          ▲                                                   ▲\n          │               [ THE AGILE COACH ]                 │\n          ▼                                                   ▼\n[ Technical Mentor ] ◄───────► [ Business Advisor ] ────► [ Transformation Leader ]\n```",
            "Professional Coach: Operating from a stance of neutral inquiry, believing that the coachee or team possesses the internal wisdom to resolve their own challenges. Facilitator: Neutral guide of group decision processes.",
            "Teacher: Imparting foundational Agile and Lean concepts. Mentor: Sharing battle-tested experience. Technical Advisor: Guiding engineering practices like XP and TDD.",
            "Business Advisor: Partnering on product slicing and OKRs. Impediment Remover: Resolving cross-departmental blockers. Transformation Leader: Driving enterprise cultural shift."
        ]),
        ("ICF Core Competencies & Active Listening Levels", [
            "To elevate Agile coaching from informal advisory into a rigorous professional discipline, modern coaches integrate the core competencies established by the International Coaching Federation (ICF). These standards encompass ethical practice, establishing coaching agreements, cultivating trust, maintaining coaching presence, active listening, evoking awareness, and facilitating client growth.",
            "Active Listening Level 1 (Internal Listening): The coach's focus is on their own internal thoughts and prepared advice while the client speaks. Novice coaches often get trapped here.",
            "Active Listening Level 2 (Focused Listening): Complete concentration on the speaker's exact words, tone of voice, body language, and physical posture. The coach sets aside personal agenda to fully receive the speaker's message.",
            "Active Listening Level 3 (Global Listening): Sensing the surrounding dynamic, unspoken systemic tension, group energy, and implicit organizational culture. The coach perceives what is not being said in the room.",
            "Powerful Questioning: Asking open-ended, non-leading questions starting with 'What' or 'How' rather than 'Why' (which can trigger defensive reactions)."
        ]),
        ("Dr. Timothy Clark's 4 Stages of Psychological Safety", [
            "Psychological safety is the single most significant predictor of team performance. As demonstrated by Google's multi-year research initiative, Project Aristotle, high-performing teams are not distinguished by individual member IQ or credentials, but by how team members treat one another.",
            "```\nThe Four Progressive Stages of Psychological Safety:\nStage 1: Inclusion Safety ➔ Stage 2: Learner Safety ➔ Stage 3: Contributor Safety ➔ Stage 4: Challenger Safety\n```",
            "Stage 1 (Inclusion Safety): Members feel safe to belong, be their authentic selves, and be accepted regardless of role or rank.",
            "Stage 2 (Learner Safety): Members feel safe to ask questions, experiment, and admit mistakes without fear of public embarrassment.",
            "Stage 3 (Contributor Safety): Members feel safe to participate fully and contribute work without micromanagement. Stage 4 (Challenger Safety): Members feel safe to challenge existing processes and push back on executive demands without fear of career reprisal."
        ]),
        ("Transforming Toxic Engineering Cultures & Blameless Post-Mortems", [
            "Punitively blaming developers for production bugs destroys innovation. Replacing fault-finding sessions with blameless post-mortems shifts focus to systemic failure modes.",
            "Diagnostic Audit: A fintech enterprise with 480 software engineers suffered from high turnover (31% annual attrition) and intense inter-departmental conflict. Incidents were followed by hostile post-mortems blaming developers publicly.",
            "Coaching Interventions: 1. Anonymous retro safety votes (1 to 5 scale). If safety scored below 3.5, the meeting pivoted immediately to addressing psychological safety.",
            "2. Replacing fault-finding sessions with blameless post-mortems focused strictly on systemic failure modes, missing test coverage, and infrastructure resilience.",
            "3. Weekly 1-on-1 ICF-style coaching with VPs, shifting leadership from directive control to supportive enablement. Results: Annual attrition dropped from 31% to 3.8%. Production defect escapes decreased by 58%, and psychological safety scores rose to 4.7/5."
        ]),
        ("Socratic Coaching Toolkit & Professional Mastery Checklist", [
            "Powerful Socratic Inquiries by Stances:\nCoaching a Struggling Scrum Master: 'What is the structural difference between solving a problem for a team versus creating the space for them to solve it themselves?'",
            "Coaching an Overwhelmed Product Owner: 'If you could only deliver a single user capability this month that would make all other backlog items secondary, what would it be?'",
            "Coaching a Command Manager: 'What organizational outcomes might become possible if you trusted the engineering squad to design their own implementation details?'",
            "Mastery Diagnostic Checklist:\n- [ ] Does the coach deliberately select their stance before entering conversations?\n- [ ] Are formal ICF coaching agreements established, maintaining absolute confidentiality?\n- [ ] Is psychological safety measured regularly across squads using validated instruments?\n- [ ] Are production outages analyzed using blameless post-mortem protocols?\n- [ ] Does the coach spend at least 30% of their time observing team dynamics silently?"
        ])
    ]

    # Chapter 3
    ch03_sections = [
        ("Systems Thinking & Deming's Enterprise Principles", [
            "Enterprise Agile Coaching requires shifting focus from local squad optimization to the entire organizational system. As quality pioneer Dr. W. Edwards Deming observed, '94% of performance variations in business systems are caused by the system structure, not the individual worker.' Attempting to optimize individual developer velocity without resolving cross-departmental dependencies, rigid funding models, and architectural bottlenecks produces local optimization at the expense of global system throughput.",
            "Systems Thinking provides the analytical discipline required to perceive underlying organizational structures, feedback loops, and systemic delay vectors.",
            "```\nSystemic Causal Loop Diagram in Enterprise Delivery:\n[ Local Velocity Pressure ] ──(+)──► [ Technical Shortcuts Taken ] ──(+)──► [ Technical Debt Accumulation ]\n            ▲                                                                     │\n            │                                                                    (+)\n            │                                                                     ▼\n[ Lead Time Delay ] ◄────────────────────(+)─────────────────────────── [ Production Bugs & Outages ]\n```",
            "Key systemic concepts include Local vs. Global Optimization (optimizing frontend output creates QA bottlenecks), Reinforcing vs. Balancing Feedback Loops (vicious cycles vs. stabilizing mechanisms), and Systemic Delays (the lag between hiring decisions and active delivery capacity)."
        ]),
        ("Navigating Organizational Complexity: The Cynefin Framework", [
            "Developed by Dave Snowden, the Cynefin Framework helps leaders and enterprise coaches diagnose prevailing operational contexts and select appropriate decision-making models.",
            "```\nThe Cynefin Complexity Matrix:\n┌───────────────────────────────────┬───────────────────────────────────┐\n│            COMPLEX                │           COMPLICATED             │\n│   Cause & effect only apparent    │   Cause & effect separated in     │\n│           in hindsight            │        space and time             │\n│      Probe ➔ Sense ➔ Respond      │      Sense ➔ Analyze ➔ Respond    │\n│    (Emergent Practice / Agile)    │    (Good Practice / Experts)      │\n├───────────────────────────────────┼───────────────────────────────────┤\n│            CHAOTIC                │              CLEAR                │\n│    No cause & effect relation     │   Cause & effect self-evident     │\n│            perceivable            │        to everyone                │\n│       Act ➔ Sense ➔ Respond       │     Sense ➔ Categorize ➔ Respond  │\n│     (Novel Practice / Triage)     │     (Best Practice / SOPs)        │\n└───────────────────────────────────┴───────────────────────────────────┘\n```",
            "Clear Domain: Standard operating procedures apply. Automate routine tasks. Complicated Domain: Cause and effect require expert analysis (Sense -> Analyze -> Respond).",
            "Complex Domain: The primary realm of software development. Cause and effect can only be understood in hindsight (Probe -> Sense -> Respond). Chaotic Domain: Crisis triage (Act -> Sense -> Respond)."
        ]),
        ("Kotter's 8-Step Model & Cascading OKRs", [
            "Executing a sustainable enterprise transformation requires a structured change management strategy. John Kotter's 8-Step Change Model provides a proven roadmap: 1. Create Urgency, 2. Build Guiding Coalition, 3. Form Strategic Vision, 4. Enlist Volunteer Army, 5. Enable Action by Removing Barriers, 6. Generate Short-Term Wins, 7. Sustain Acceleration, 8. Institute Change.",
            "Cascading Objectives & Key Results (OKRs) bridge the strategic gap between executive vision and squad execution.",
            "Strategic Objective (Qualitative): 'Deliver the most secure, frictionless mobile banking onboarding experience in the financial sector.'",
            "Key Result 1 (Quantitative): Reduce account creation time from 16 minutes to under 2 minutes. Key Result 2: Zero high-severity vulnerabilities during penetration audits. Key Result 3: Increase 30-day active user retention from 38% to 72%."
        ]),
        ("Real-World Case Study: Global Telecom Enterprise Transformation", [
            "A global telecommunications corporation with 22,000 employees suffered from declining market share and sluggish software updates. A major next-generation customer portal was 16 months behind schedule.",
            "The Enterprise Agile Coaching practice initiated a systemic transformation. First, they formed an Executive Guiding Coalition comprising the VP of Engineering, CPO, VP of HR, and Lead Enterprise Coach.",
            "Second, they mapped Cynefin domains across IT, categorizing infrastructure migration as Complicated (expert-led) and digital product feature development as Complex (hypothesis-driven Sprints).",
            "Third, they replaced rigid annual project plans with quarterly OKRs updated transparently across all engineering tribes. Results: Product time-to-market reduced by 64% within 12 months. Portfolio OKR achievement rate rose from 28% to 86%, and cross-departmental friction decreased by 52%."
        ]),
        ("Systems Coaching Toolkit & Executive Audit Checklist", [
            "Executive Systems Inquiries:\n1. 'When we observe recurring friction between software engineering and security compliance, what specific incentives in our organizational design are actively encouraging that conflict?'",
            "2. 'Are we managing this complex digital product initiative as a Complicated problem with fixed plans, or as a Complex problem requiring rapid empirical feedback loops?'",
            "3. 'How do our annual capital allocation processes hinder our capacity to fund value streams dynamically based on real-time market validation?'",
            "Chapter 3 Diagnostic Checklist:\n- [ ] Are leaders evaluating global value stream flow metrics rather than isolated squad outputs?\n- [ ] Are product development initiatives managed using empirical, hypothesis-driven iteration?\n- [ ] Is an active, cross-functional Guiding Coalition leading transformation initiatives?\n- [ ] Are squad backlogs demonstrably connected to quarterly strategic OKRs?\n- [ ] Are delays in decision-making and escalation channels measured and actively reduced?"
        ])
    ]

    # Chapter 4
    ch04_sections = [
        ("The Five Core Flow Metrics & Telemetry", [
            "In modern software engineering, traditional velocity metrics (story points completed per sprint) are easily manipulated and often encourage toxic behavior such as story point inflation. Flow Metrics, popularized by Dr. Mik Kersten in Project to Product, provide an empirical framework for measuring value delivery velocity without relying on subjective estimates.",
            "```\nThe Flow Framework Telemetry Ecosystem:\n[ Business Strategy & OKRs ] ──► [ Value Stream Flow Metrics ] ──► [ Delivery Pipeline Execution ]\n                                          │\n    ┌──────────────────┬──────────────────┼──────────────────┬──────────────────┐\n    ▼                  ▼                  ▼                  ▼                  ▼\n[ Flow Velocity ]  [ Flow Time ]      [ Flow Load ]    [ Flow Efficiency ] [ Flow Predictability ]\n```",
            "1. Flow Velocity: The number of flow items (Features, Defects, Risks, Technical Debt) completed within a specified timeframe. 2. Flow Time: The elapsed time from when work is pulled into the active workflow until it is delivered to production.",
            "3. Flow Load: The total number of active flow items currently in progress (WIP). 4. Flow Efficiency: Active work time divided by total elapsed Flow Time (often under 10% in legacy enterprises). 5. Flow Predictability: Variance in delivery throughput over time."
        ]),
        ("Cumulative Flow Diagram (CFD) Diagnostics & Little's Law", [
            "The Cumulative Flow Diagram (CFD) is the ultimate diagnostic tool for flow engineering. By tracking cumulative work items at each workflow stage over time, coaches can visually identify systemic bottlenecks.",
            "CFD Diagnostic Patterns: An expanding band width indicates a growing bottleneck at that stage (e.g., an expanding 'In Testing' band indicates QA capacity is insufficient). A flat top line indicates work input has stalled. Jagged S-curves indicate batch delivery rather than continuous flow.",
            "Little's Law in Operations Research proves the mathematical relationship: Lead Time = Work-in-Progress (WIP) / Throughput. To cut delivery lead time, an organization must either increase throughput (difficult) or reduce active WIP (immediate and controllable)."
        ]),
        ("Monte Carlo Probabilistic Forecasting Implementation", [
            "Deterministic estimation ('This epic will take 6 weeks') is inherently flawed in complex software systems. Monte Carlo simulation replaces guesswork with probabilistic forecasting by running thousands of randomized trials based on historical throughput data.",
            "```python\n# Production Monte Carlo Throughput Simulator for Agile Coaches\nimport numpy as np\nimport pandas as pd\n\ndef run_monte_carlo_simulation(historical_throughput, remaining_backlog_items, simulations=10000):\n    results = []\n    for _ in range(simulations):\n        days = 0\n        completed = 0\n        while completed < remaining_backlog_items:\n            daily_completion = np.random.choice(historical_throughput)\n            completed += daily_completion\n            days += 1\n        results.append(days)\n    \n    df_results = pd.Series(results)\n    p50 = int(df_results.quantile(0.50))\n    p85 = int(df_results.quantile(0.85))\n    p95 = int(df_results.quantile(0.95))\n    \n    print(f'--- Monte Carlo Results ({simulations} trials) ---')\n    print(f'50% Likelihood Completion: {p50} days')\n    print(f'85% Likelihood Completion (Target Commitment): {p85} days')\n    print(f'95% Likelihood Completion (Conservative Guardrail): {p95} days')\n    return p50, p85, p95\n\nif __name__ == '__main__':\n    throughput_sample = [1, 2, 0, 3, 1, 0, 4, 2, 1, 0, 2, 3]\n    run_monte_carlo_simulation(throughput_sample, remaining_backlog_items=45)\n```"
        ]),
        ("Real-World Case Study: Global Logistics Enterprise Flow Optimization", [
            "A global supply chain logistics corporation operating across 30 countries struggled with delivery predictability. Concept-to-cash Flow Time averaged 48 days, with over 80% of feature requests delayed beyond target commitment dates.",
            "Flow Interventions: 1. Reduced active Flow Load across 75 squads by 55%, capping WIP at 2 active items per developer. 2. Identified an expanding 18-day waiting queue between Code Complete and Security Audit, replacing manual reviews with automated container security scanning.",
            "3. Mandated Monte Carlo simulation (85th percentile confidence) for all enterprise epic commitments, replacing manual story point estimation. Results: Flow Time reduced from 48 days to 11.2 days. Flow Efficiency rose from 7.4% to 38.2%. Delivery predictability achieved 94% commitment accuracy over 4 consecutive quarters."
        ]),
        ("Flow Engineering Toolkit & Operational Diagnostic Checklist", [
            "Socratic Flow Questions:\n1. 'If we inspect our Cumulative Flow Diagram today, which stage's expanding band indicates our primary systemic bottleneck?'",
            "2. 'According to Little's Law, what would happen to our delivery lead time if we cut our active Work-in-Progress in half tomorrow?'",
            "3. 'What prevents us from using 85th percentile Monte Carlo historical data for release commitments instead of manual estimation meetings?'",
            "Chapter 4 Operational Checklist:\n- [ ] Are teams tracking Flow Time, Flow Velocity, and Flow Efficiency automatically in Jira/ADO?\n- [ ] Are Cumulative Flow Diagrams reviewed weekly to detect expanding bottleneck bands?\n- [ ] Are delivery dates communicated using Monte Carlo 85th percentile confidence ranges?\n- [ ] Are hard WIP limits configured and enforced across all active workflow boards?\n- [ ] Are stale items (>30 days inactive) automatically purged or flagged for backlog cleanup?"
        ])
    ]

    write_clean_md("chapters/part1_coaching/ch01_modern_agile_spectrum.md", "Chapter 1: The Modern Enterprise Agile Spectrum", "Scrum, Kanban, SAFe 6.0, LeSS, Spotify & Organizational Descaling", ch01_sections)
    write_clean_md("chapters/part1_coaching/ch02_agile_coaching_mastery.md", "Chapter 2: The Mastery of Agile Coaching", "Adkins Coaching Arc, ICF Competencies & Psychological Safety", ch02_sections)
    write_clean_md("chapters/part1_coaching/ch03_enterprise_agile_coaching.md", "Chapter 3: Enterprise Agile Coaching & Organizational Design", "Systems Thinking, Cynefin, Kotter Change Management & OKRs", ch03_sections)
    write_clean_md("chapters/part1_coaching/ch04_flow_engineering_metrics.md", "Chapter 4: Flow Engineering, Metrics & Business Agility", "Flow Metrics, CFD Diagnostics & Monte Carlo Simulation", ch04_sections)

if __name__ == "__main__":
    build_part1()
