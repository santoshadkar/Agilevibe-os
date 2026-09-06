import os
import glob
import re

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

QUIZ_DATA = {
    "ch01_modern_agile_spectrum.md": {
        "ch_num": "1",
        "summary": [
            "Scaling frameworks (SAFe 6.0, LeSS, Scrum@Scale, Unfixed) require matching enterprise architectural complexity with organizational design rather than forcing monolithic blueprints.",
            "SAFe 6.0 provides prescriptive governance and alignment for heavily regulated environments, whereas LeSS maximizes squad autonomy by stripping away middle-management synchronization layers.",
            "Quantitative flow mapping and value stream identification must precede tool configuration in Jira or Azure DevOps to prevent automating existing organizational anti-patterns."
        ],
        "questions": [
            {
                "q": "An enterprise with 50 squads in a highly regulated financial services sector suffers from severe cross-team compliance bottlenecks. Which scaling framework configuration offers the most explicit governance structure for regulatory alignment?",
                "opts": ["A) Single-team Scrum with ad-hoc Slack syncs", "B) SAFe 6.0 with Large Solution Train & Compliance Guardrails", "C) Unfixed Framework with fully fluid team allocation", "D) Pure LeSS Huge without governance layers"],
                "ans": "B",
                "rat": "SAFe 6.0 explicitly provides Solution Train and Compliance guardrail patterns designed specifically for audit-heavy, highly regulated environments requiring formal compliance verification."
            },
            {
                "q": "What is the primary operational trade-off when adopting Large-Scale Scrum (LeSS) over SAFe 6.0 in an enterprise technology division?",
                "opts": ["A) LeSS increases middle-management overhead", "B) LeSS requires higher engineering capability and feature-team domain flexibility while drastically reducing management roles", "C) LeSS mandates mandatory quarterly PI Planning events", "D) LeSS enforces rigid release train cadences"],
                "ans": "B",
                "rat": "LeSS descales organizational complexity by eliminating intermediate management layers, which demands highly autonomous feature teams capable of working across the entire codebase."
            },
            {
                "q": "When conducting Value Stream Identification across a multi-tier technology organization, what is the most critical metric to optimize first?",
                "opts": ["A) Total lines of code written per sprint", "B) Individual developer utilization percentage", "C) Value Stream Lead Time and Flow Efficiency (Touch Time vs. Wait Time)", "D) Number of Jira tickets closed per squad"],
                "ans": "C",
                "rat": "Optimizing Flow Efficiency and reducing wait time between handoffs yields the highest systemic acceleration in value delivery, whereas optimizing individual utilization increases queue sizes and lead times."
            },
            {
                "q": "A practice lead notices that squads are experiencing massive dependency blockages despite adopting Scrum@Scale. What is the root dynamic at play?",
                "opts": ["A) The Executive Action Team (EAT) is meeting too frequently", "B) Teams are component-bound rather than feature-aligned, causing mandatory cross-team coordination queues", "C) Scrum of Scrums (SoS) meetings lack PowerPoint slides", "D) Teams are using story points instead of throughput"],
                "ans": "B",
                "rat": "Scrum@Scale relies on modular, autonomous Scrum teams. Component-bound teams create structural handoffs and inter-team dependencies that no scaling framework ceremony can eliminate without organizational redesign."
            }
        ]
    },
    "ch02_agile_coaching_mastery.md": {
        "ch_num": "2",
        "summary": [
            "Agile coaching mastery requires fluidly shifting across 8 core stances (Teacher, Mentor, Coach, Facilitator, Technical Advisor, Business Partner, Transformation Leader, Change Agent) based on domain context.",
            "Neutrality is the foundation of professional coaching: guiding leaders and teams to discover their own solutions prevents learned helplessness and builds organizational resilience.",
            "Socratic inquiry paired with empirical data (cycle time, CFD, throughput) moves retrospective discussions away from emotional speculation toward actionable system optimization."
        ],
        "questions": [
            {
                "q": "A senior Product Owner insists that the Agile Coach dictate how the engineering squad should estimate backlog items. Which coaching stance should the coach adopt?",
                "opts": ["A) Technical Stance: Force the team to use Fibonacci story points", "B) Neutral Facilitator & Socratic Coach: Ask powerful questions to guide the PO and squad to establish their own agreed estimation definition", "C) Dictatorial Stance: Mandate no estimates", "D) Passive Observer Stance: Ignore the request completely"],
                "ans": "B",
                "rat": "Coaching mastery involves maintaining neutrality and using Socratic inquiry to build team ownership and consensus rather than imposing personal preferences."
            },
            {
                "q": "During a high-friction retrospective, two team members argue over code review delays. How should an enterprise coach intervene?",
                "opts": ["A) Take a side and rule in favor of the senior developer", "B) Shift to Facilitator mode, project empirical Pull Request cycle-time metrics on screen, and guide the team to diagnose system bottlenecks objectively", "C) Cancel the retrospective immediately", "D) Escalate the dispute to human resources"],
                "ans": "B",
                "rat": "Anchoring coaching interventions in empirical telemetry (PR cycle time) de-escalates interpersonal friction and shifts focus to objective workflow optimization."
            },
            {
                "q": "What differentiates the Mentoring stance from the Professional Coaching stance?",
                "opts": ["A) Mentoring involves sharing personal expertise and domain guidance, while Professional Coaching facilitates self-directed discovery without offering direct solutions", "B) Mentoring is only for executives, while Coaching is only for developers", "C) Mentoring requires Jira certification, while Coaching requires AWS certification", "D) There is no difference between the two stances"],
                "ans": "A",
                "rat": "Mentoring transfers specific subject matter experience from mentor to mentee, whereas Professional Coaching assumes the client possesses the answers and facilitates internal discovery."
            },
            {
                "q": "An Enterprise Agile Coach working with C-suite executives encounters resistance to decentralized decision-making. What is the most effective approach?",
                "opts": ["A) File a formal grievance with the board of directors", "B) Use strategic Socratic coaching linked to business Agility metrics (Time-to-Market, Cost of Delay) to demonstrate the financial impact of centralized approval bottlenecks", "C) Force executives to take a 3-day Scrum Master course", "D) Unilaterally change executive approval workflows in Jira"],
                "ans": "B",
                "rat": "Executive alignment requires connecting organizational governance changes directly to high-level financial and market performance metrics like Cost of Delay."
            }
        ]
    },
    "ch03_enterprise_agile_coaching.md": {
        "ch_num": "3",
        "summary": [
            "Applying Team Topologies (Stream-aligned, Enabling, Complicated-Subsystem, Platform) reduces team cognitive load and creates clear boundary APIs between squads.",
            "Line-of-sight from strategic executive OKRs down to squad-level backlog items requires explicit hierarchy mapping in Jira Cloud Plans or Azure DevOps Delivery Plans.",
            "Enterprise transformation fails when structural realignment is decoupled from governance evolution and leadership capability development."
        ],
        "questions": [
            {
                "q": "A software engineering department suffers from high cognitive load across all squads because every team must maintain specialized Kubernetes infrastructure alongside feature code. Which Team Topologies pattern addresses this?",
                "opts": ["A) Create 10 more Stream-Aligned Teams", "B) Establish a dedicated Platform Team that provides infrastructure as an internal Self-Service API", "C) Eliminate all engineering roles", "D) Require all teams to work 60 hours a week"],
                "ans": "B",
                "rat": "Platform Teams build self-service internal developer platforms that abstract complex infrastructure, reducing cognitive load for Stream-Aligned feature teams."
            },
            {
                "q": "How does an Enterprise Agile Coach establish unbroken line-of-sight between C-suite strategic goals and daily squad execution?",
                "opts": ["A) By requiring developers to send daily email reports to the CEO", "B) By structuring a multi-tier portfolio hierarchy in Jira/ADO linking Strategic OKRs -> Portfolio Epics -> Features -> User Stories", "C) By eliminating User Stories and only tracking OKRs", "D) By hosting a weekly 4-hour meeting with all 500 employees"],
                "ans": "B",
                "rat": "Hierarchical parent-child linking in enterprise tooling ensures every user story traces directly back to an overarching corporate strategic initiative."
            },
            {
                "q": "An organization creates an 'Enabling Team' during their AI transformation. What is the primary mandate of this team?",
                "opts": ["A) To write all production code for feature squads", "B) To capability-build and upskill Stream-Aligned teams in emerging domains (e.g., AI/LLM engineering) until the squads become self-sufficient", "C) To act as a permanent approval gate for all code commits", "D) To manage employee payroll and benefits"],
                "ans": "B",
                "rat": "Enabling Teams are temporary capability incubators that cross-skill feature squads in specialized domains before stepping back."
            },
            {
                "q": "What is the principal indicator that an enterprise organizational redesign has succeeded?",
                "opts": ["A) Increase in total org chart boxes and job titles", "B) Reduction in cross-team dependencies, decreased Lead Time for changes, and improved Flow Efficiency", "C) 100% attendance at quarterly town halls", "D) Total deprecation of all documentation"],
                "ans": "B",
                "rat": "Organizational design success is measured by telemetry: reduced inter-team handoffs, faster Lead Time, and streamlined value delivery."
            }
        ]
    },
    "ch04_flow_engineering_metrics.md": {
        "ch_num": "4",
        "summary": [
            "Quantitative flow metrics (Cycle Time, Lead Time, Throughput, Work-in-Progress, Flow Efficiency) reveal systemic bottlenecks far more accurately than subjective estimates.",
            "Cumulative Flow Diagrams (CFD) visually expose workflow instability: widening bands indicate expanding WIP and rising lead times, while flat bands highlight starvation or blocking.",
            "Applying Little's Law ($Average Lead Time = WIP / Throughput$) demonstrates that capping Work-in-Progress is the mathematically guaranteed path to accelerating delivery speed."
        ],
        "questions": [
            {
                "q": "On a Cumulative Flow Diagram (CFD), the band representing 'In QA Review' is widening continuously while the 'Done' band remains flat. What does this mathematical signature indicate?",
                "opts": ["A) QA team is delivering code too fast", "B) Work-in-Progress is accumulating in QA, creating a severe bottleneck and increasing overall Lead Time", "C) The project is ahead of schedule", "D) Story point velocity is increasing"],
                "ans": "B",
                "rat": "A widening band on a CFD indicates accumulating WIP at that specific workflow stage, which directly increases average lead time according to Little's Law."
            },
            {
                "q": "A squad has an average WIP of 20 work items and a stable Throughput of 4 items per day. According to Little's Law, what is the squad's average Lead Time?",
                "opts": ["A) 80 days", "B) 5 days", "C) 0.2 days", "D) 24 days"],
                "ans": "B",
                "rat": "Little's Law: $Lead Time = WIP / Throughput$. $20 / 4 = 5$ days."
            },
            {
                "q": "A team spends 10 hours actively coding a feature, but the feature sits in queues waiting for reviews and deployments for 90 hours. What is the team's Flow Efficiency?",
                "opts": ["A) 90%", "B) 10%", "C) 50%", "D) 100%"],
                "ans": "B",
                "rat": "$\text{Flow Efficiency} = (\text{Active Touch Time} / \text{Total Lead Time}) \times 100 = (10 / (10 + 90)) \times 100 = (10 / 100) \times 100 = 10\%$"
            },
            {
                "q": "Why is optimizing story point velocity across multiple squads considered an anti-pattern in enterprise Flow Engineering?",
                "opts": ["A) Story points are unitless, subjective estimates that vary between teams and encourage point inflation rather than actual value delivery", "B) Velocity is illegal under SAFe 6.0", "C) Story points require expensive software licenses", "D) Velocity can only be calculated in Python"],
                "ans": "A",
                "rat": "Story points are relative team estimates. Comparing velocity across teams leads to artificial point inflation and destroys honest estimation."
            }
        ]
    }
}

print("Loaded base script for quiz generator.")
