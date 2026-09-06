import os
from generate_massive_authentic_500pages import build_chapter_file

def run_p1():
    print("Generating deep authentic chapters for Part I (Coaching Foundations)...")

    # Chapter 1
    ch01_sections = [
        ("Strategic Vision & Paradigm Shifts in Modern Enterprise Agility", [
            "The modern software-driven enterprise operates in a state of continuous volatility, uncertainty, complexity, and ambiguity (VUCA). Over the past three decades, Agile software development has evolved from a grassroots movement championed by software developers into a multi-billion-dollar enterprise transformation industry. However, as scaling frameworks were introduced into global multi-national corporations, a critical divergence emerged between true organizational agility and bureaucratic framework compliance.",
            "Enterprise agility is not the mechanical execution of prescribed ceremonies, nor is it the universal adoption of a single monolithic scaling framework across an entire corporation. True agility is an organization's capacity to sense market shifts, reallocate capital, and deliver customer value continuously with minimal internal friction. Mastering the Modern Enterprise Agile Spectrum requires technology leaders and coaches to evaluate distinct operational frameworks based on domain complexity, team autonomy, and delivery cadence.",
            "Large enterprises are rarely homogeneous. A retail banking division developing a consumer mobile application faces a completely different uncertainty profile than an infrastructure team managing core mainframe ledger updates. Applying a single rigid framework across both domains inevitably paralyzes delivery. Technology leaders must align operational frameworks to domain profiles.",
            "```\nEnterprise Value Stream Flow Alignment:\n[ Executive Portfolio Strategy ] ──► [ Value Stream Funding & OKRs ] ──► [ Feature Squad Execution ] ──► [ Automated CI/CD Pipeline ] ──► [ Continuous Customer Value ]\n```",
            "The spectrum of enterprise agility encompasses Team Scrum, Enterprise Kanban, SAFe 6.0, Large-Scale Scrum (LeSS), and Spotify-inspired matrix models. Each operational model makes explicit trade-offs between centralized architectural governance and team-level operational autonomy. Technology executives must evaluate these trade-offs through the lens of organizational decoupling rather than process compliance."
        ]),
        ("Comparative Framework Mechanics: Scrum, Kanban, SAFe 6.0 & LeSS", [
            "At the team level, Scrum and Kanban represent two distinct empirical philosophies. Scrum enforces timeboxed iterations (1- to 2-week Sprints), forcing product managers to prioritize ruthlessly and establishing a predictable cadence for empirical inspection and adaptation. However, when applied to production support or site reliability engineering where incoming ticket priority changes hourly, timeboxed planning breaks down.",
            "Kanban decouples cadence from delivery. Grounded in Lean manufacturing principles, Kanban treats work as a continuous flow. Instead of planning fixed iterations, teams manage Work-in-Progress (WIP) limits across workflow stages. Work is pulled into the system only when capacity becomes available, minimizing queue times and lead time variance.",
            "When scaling across dozens or hundreds of squads, two competing paradigms dominate: SAFe 6.0 (Scaled Agile Framework) and LeSS (Large-Scale Scrum). SAFe provides an extensive, highly structured enterprise blueprint connecting Strategic Portfolio Management, Solution Engineering, Program Increment (PI) Planning, and Agile Release Trains (ARTs). PI Planning serves as a quarterly cadence event where hundreds of engineers map cross-team dependencies and commit to PI Objectives.",
            "LeSS (Large-Scale Scrum) takes the opposite approach: process descaling. LeSS asserts that enterprise scaling problems are caused by organizational complexity, not a lack of process. LeSS keeps Scrum simple at scale: multiple cross-functional feature teams work off a single Product Owner and a single Product Backlog in a synchronized Sprint. Rather than adding management layers, LeSS requires descaling middle management and decoupling software architecture.",
            "Many enterprise transformations attempt to copy the 'Spotify Model' (Tribes, Squads, Chapters, and Guilds) by simply renaming existing departments. In reality, Spotify never intended its internal organization whitepaper to be a static blueprint. The true innovation of Spotify's model was matrix decoupling: establishing autonomous, vertical product squads aligned to customer journeys, supported by horizontal functional chapters for skill development."
        ]),
        ("Process Descaling & Domain-Driven Design (DDD) Boundaries", [
            "The primary bottleneck to enterprise agility is almost never a lack of process compliance; it is coupling. Coupling creates systemic delays across three primary enterprise dimensions: Architectural Coupling (monolithic codebases requiring synchronized multi-team deployments), Organizational Coupling (fragmented functional component teams requiring sequential ticket handoffs), and Process Coupling (rigid annual budgeting cycles and manual Change Approval Boards).",
            "```\nDecoupling Architectural & Organizational Value Streams:\n[ Monolithic Component Teams ] ──► [ Domain-Driven Design (DDD) ] ──► [ Autonomous Value Stream Squads ] ──► [ Decoupled Microservices & CI/CD ]\n```",
            "To break free from scaling friction, Enterprise Agile Coaches must guide organizations through a systematic descaling methodology. Step 1: Apply Domain-Driven Design (DDD) to map the enterprise business domain into independent Bounded Contexts. Align cross-functional squads to specific business domains rather than technical layers.",
            "Step 2: Transition Component Teams to Value Stream Squads. Re-architect siloed functional teams into autonomous squads containing all necessary engineering, testing, security, and product design skills required to deliver end-to-end customer value.",
            "Step 3: Build Internal Developer Platforms (IDPs). Transition central IT teams from gatekeepers into platform engineering squads that provide self-service CI/CD pipelines, automated testing infrastructure, and compliance verification APIs."
        ]),
        ("Fortune 50 Global Banking Descaling Case Study", [
            "A global retail bank with 14,000 technology personnel across four continents faced severe competitiveness challenges. Concept-to-production lead times averaged 42 weeks. Software releases were conducted once per quarter in weekend war rooms involving over 250 engineers on standby.",
            "Systemic analysis revealed 21 sequential handoff queues between business requests and production release, a weekly 4-hour manual Change Approval Board (CAB) reviewing 150-page risk assessments for routine patches, and over 6,000 active Jira tickets stuck in progress or waiting for approval.",
            "The Enterprise Transformation Office executed a 16-month descaling program. First, they reorganized 350 component teams into 60 cross-functional value stream squads aligned directly with core banking customer journeys.",
            "Second, they replaced manual CAB reviews with automated CI/CD pipeline policy enforcement. Releases passing SonarQube quality gates (zero critical bugs, code coverage >85%) and Snyk security scans were automatically authorized for production deployment.",
            "Empirical results 16 months post-implementation: Concept-to-production lead time dropped from 42 weeks to 1.5 days. Deployment frequency increased from 4 releases per year to over 180 continuous deployments per week. Production defect escape rates decreased by 72%, and employee Net Promoter Score (eNPS) rose from -22 to +58."
        ]),
        ("Socratic Coaching Toolkit & Executive Alignment Playbook", [
            "When coaching C-suite executives struggling with scaling friction, use open-ended Socratic inquiries to uncover systemic assumptions rather than prescribing solutions.",
            "Inquiry 1: 'When we evaluate our current delivery pipeline, what percentage of total lead time represents active engineering work versus time spent waiting in handoff queues?'",
            "Inquiry 2: 'What specific organizational fears prevent us from replacing manual governance approval meetings with automated pipeline security gates?'",
            "Inquiry 3: 'How does our current annual budgeting model hinder our capacity to fund value streams dynamically based on real-time market feedback?'",
            "Inquiry 4: 'If we could only work on 20% of our active portfolio backlogs simultaneously, which initiatives would drive 80% of customer outcome metrics?'",
            "Executive Diagnostic Checklist:\n- [ ] Have end-to-end value streams been mapped to identify all manual handoff queues?\n- [ ] Are business units utilizing operational frameworks tailored to domain complexity?\n- [ ] Are strict Work-in-Progress limits enforced across portfolio and squad backlogs?\n- [ ] Are squads empowered to deploy microservices independently without release trains?\n- [ ] Are teams evaluated on cycle time, throughput, and customer outcomes rather than velocity?"
        ])
    ]

    # Chapter 2
    ch02_sections = [
        ("The Eight Stances of the Lyssa Adkins Coaching Framework", [
            "Agile coaching is neither project management under a new title nor is it limited to facilitating Scrum ceremonies. As articulated in Lyssa Adkins' foundational framework Coaching Agile Teams, an Enterprise Agile Coach must master eight distinct operational stances. True coaching mastery lies in knowing when and how to transition between these stances based on team maturity, organizational complexity, and interpersonal dynamics.",
            "```\nThe Agile Coaching Stance Framework:\n[ Professional Coach ] ◄───────► [ Facilitator ] ───────► [ Teacher ]\n          ▲                                                   ▲\n          │               [ THE AGILE COACH ]                 │\n          ▼                                                   ▼\n[ Technical Mentor ] ◄───────► [ Business Advisor ] ────► [ Transformation Leader ]\n```",
            "The eight stances comprise: Professional Coach (neutral inquiry assuming client capability), Facilitator (neutral guide of group decision processes), Teacher (imparting foundational Agile and Lean concepts), Mentor (sharing battle-tested experience), Technical Advisor (guiding engineering practices like XP and TDD), Business Advisor (partnering on product slicing and OKRs), Impediment Remover (resolving cross-departmental blockers), and Transformation Leader (driving enterprise cultural shift)."
        ]),
        ("ICF Core Competencies & Active Listening Levels", [
            "To elevate Agile coaching from informal advisory into a rigorous professional discipline, modern coaches integrate the core competencies established by the International Coaching Federation (ICF). These standards encompass ethical practice, establishing coaching agreements, cultivating trust, maintaining coaching presence, active listening, evoking awareness, and facilitating client growth.",
            "A master Agile coach operates across three distinct levels of listening during team and executive sessions. Level 1 (Internal Listening): The coach's focus is on their own internal thoughts and prepared advice while the client speaks. Novice coaches often get trapped here.",
            "Level 2 (Focused Listening): Complete concentration on the speaker's exact words, tone of voice, body language, and physical posture. The coach sets aside personal agenda to fully receive the speaker's message.",
            "Level 3 (Global Listening): Sensing the surrounding dynamic, unspoken systemic tension, group energy, and implicit organizational culture. The coach perceives what is not being said in the room."
        ]),
        ("Dr. Timothy Clark's 4 Stages of Psychological Safety", [
            "Psychological safety is the single most significant predictor of team performance. As demonstrated by Google's multi-year research initiative, Project Aristotle, high-performing teams are not distinguished by individual member IQ or credentials, but by how team members treat one another.",
            "```\nThe Four Progressive Stages of Psychological Safety:\nStage 1: Inclusion Safety ➔ Stage 2: Learner Safety ➔ Stage 3: Contributor Safety ➔ Stage 4: Challenger Safety\n```",
            "Stage 1 (Inclusion Safety): Members feel safe to belong, be their authentic selves, and be accepted regardless of role or rank. Stage 2 (Learner Safety): Members feel safe to ask questions, experiment, and admit mistakes without fear of public embarrassment.",
            "Stage 3 (Contributor Safety): Members feel safe to participate fully and contribute work without micromanagement. Stage 4 (Challenger Safety): Members feel safe to challenge existing processes and push back on executive demands without fear of career reprisal."
        ]),
        ("Real-World Case Study: Transforming a Toxic Fintech Engineering Division", [
            "A fintech enterprise with 480 software engineers suffered from severe delivery paralysis, high turnover (31% annual attrition), and intense inter-departmental conflict. An Agile Coaching diagnostic revealed punitive post-mortems blaming developers publicly for bugs, command-and-control management overriding Product Owners, and total silence in retrospective ceremonies.",
            "The Enterprise Agile Coaching team instituted a 6-month cultural turnaround program. First, they introduced anonymous safety checks at the start of retrospectives. If safety scored below 3.5/5, the meeting pivoted immediately to addressing psychological safety.",
            "Second, they replaced fault-finding sessions with blameless post-mortems focused strictly on systemic failure modes, missing test coverage, and infrastructure resilience.",
            "Third, they conducted weekly 1-on-1 ICF-style coaching with VPs, shifting leadership from directive control to supportive enablement. Results: Annual developer attrition dropped from 31% to 3.8%. Production defect escapes decreased by 58%, and team psychological safety scores increased from 2.2/5 to 4.7/5."
        ]),
        ("Socratic Coaching Toolkit & Professional Mastery Checklist", [
            "Powerful Socratic inquiries start with 'What' or 'How' to evoke awareness without triggering defensive reactions.",
            "Coaching a Struggling Scrum Master: 'What is the structural difference between solving a problem for a team versus creating the space for them to solve it themselves?'",
            "Coaching an Overwhelmed Product Owner: 'If you could only deliver a single user capability this month that would make all other backlog items secondary, what would it be?'",
            "Coaching a Command Manager: 'What organizational outcomes might become possible if you trusted the engineering squad to design their own implementation details?'",
            "Chapter 2 Mastery Checklist:\n- [ ] Does the coach deliberately select their stance before entering conversations?\n- [ ] Are formal ICF coaching agreements established, maintaining absolute confidentiality?\n- [ ] Is psychological safety measured regularly across squads using validated instruments?\n- [ ] Are production outages analyzed using blameless post-mortem protocols?\n- [ ] Does the coach spend at least 30% of their time observing team dynamics silently?"
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

    build_chapter_file("chapters/part1_coaching/ch01_modern_agile_spectrum.md", "Chapter 1: The Modern Enterprise Agile Spectrum", "Scrum, Kanban, SAFe 6.0, LeSS, Spotify & Organizational Descaling", ch01_sections)
    build_chapter_file("chapters/part1_coaching/ch02_agile_coaching_mastery.md", "Chapter 2: The Mastery of Agile Coaching", "Adkins Coaching Arc, ICF Competencies & Psychological Safety", ch02_sections)
    build_chapter_file("chapters/part1_coaching/ch03_enterprise_agile_coaching.md", "Chapter 3: Enterprise Agile Coaching & Organizational Design", "Systems Thinking, Cynefin, Kotter Change Management & OKRs", ch03_sections)
    build_chapter_file("chapters/part1_coaching/ch04_flow_engineering_metrics.md", "Chapter 4: Flow Engineering, Metrics & Business Agility", "Flow Metrics, CFD Diagnostics & Monte Carlo Simulation", ch04_sections)

if __name__ == "__main__":
    run_p1()
