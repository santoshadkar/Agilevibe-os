import React, { useState } from 'react';
import { 
  BookOpen, 
  Terminal, 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  Layers, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  ChevronRight, 
  BookMarked, 
  Zap,
  Bot
} from 'lucide-react';

// Book Parts & Chapters Metadata
const BOOK_STRUCTURE = [
  {
    part: "Executive Overview & Architectural Reference",
    tag: "Role Paths & Glossary",
    color: "tag-amber",
    chapters: [
      { id: "role_paths", title: "How to Read This Playbook: Role-Based Executive Reading Paths", desc: "Tailored 4-role reading pathways for Coaches, Admins, Engineers, and CTOs" },
      { id: "glossary", title: "Enterprise Technology & AI Architectural Glossary", desc: "Executive reference definitions for RAG, MCP, ReAct, Hazelcast, AQL, WIQL & Flow Metrics" }
    ]
  },
  {
    part: "Part I: Enterprise Agile Coaching Foundations",
    tag: "Coaching & Culture",
    color: "tag-blue",
    chapters: [
      { id: "ch01", title: "Chapter 1: The Modern Enterprise Agile Spectrum", desc: "Scrum, Kanban, SAFe 6.0, LeSS, Spotify & Anti-Patterns" },
      { id: "ch02", title: "Chapter 2: The Mastery of Agile Coaching", desc: "Adkins Coaching Arc, ICF Competencies & Psychological Safety" },
      { id: "ch03", title: "Chapter 3: Enterprise Agile Coaching & Org Design", desc: "Systems Thinking, Cynefin, Change Management & Executive Alignment" },
      { id: "ch04", title: "Chapter 4: Flow Engineering, Metrics & Business Agility", desc: "Flow Metrics, CFD, Cycle Time Distributions & Monte Carlo Simulation" },
    ]
  },
  {
    part: "Part II: Jira Data Center Masterclass",
    tag: "Jira DC Infrastructure",
    color: "tag-purple",
    chapters: [
      { id: "ch05", title: "Chapter 5: Jira Data Center Architecture & Admin", desc: "Clustering, Load Balancing, Indexing, JVM & PostgreSQL Tuning" },
      { id: "ch06", title: "Chapter 6: Workflow Engineering & Custom Fields in DC", desc: "ScriptRunner, Groovy Post Functions, Custom Field Contexts" },
      { id: "ch07", title: "Chapter 7: Portfolio Management & Advanced Roadmaps DC", desc: "Hierarchy, Capacity Planning, Dependency Management & Scenarios" },
      { id: "ch08", title: "Chapter 8: Data Center REST APIs, JQL Mastery & Reporting", desc: "Advanced JQL, REST API v2, Webhooks & Power BI Pipelines" },
    ]
  },
  {
    part: "Part III: Jira Cloud Enterprise Masterclass",
    tag: "Jira Cloud Platform",
    color: "tag-emerald",
    chapters: [
      { id: "ch09", title: "Chapter 9: Modern Jira Cloud Architecture & Capabilities", desc: "Tenant Isolation, Atlassian Access, Security Sandbox & Project Types" },
      { id: "ch10", title: "Chapter 10: Advanced Jira Cloud Automation & Forge Extensions", desc: "Cloud Automation Engine, Smart Values & Forge App Development" },
      { id: "ch11", title: "Chapter 11: Jira Cloud Plans, Assets (Insight) & JSM", desc: "Cross-Workspace Plans, Assets CMDB & ESM Integration" },
      { id: "ch12", title: "Chapter 12: Migration Strategy: Data Center to Jira Cloud", desc: "JCMA Blueprint, Pre-migration Audit, Automated Testing & Cutover" },
    ]
  },
  {
    part: "Part IV: Azure DevOps (ADO) Enterprise Execution",
    tag: "Azure DevOps ALM",
    color: "tag-amber",
    chapters: [
      { id: "ch13", title: "Chapter 13: Azure Boards & Enterprise Process Architecture", desc: "Process Templates, Custom Inherited WITs, Fields & State Rules" },
      { id: "ch14", title: "Chapter 14: Portfolio Planning, Delivery Plans & Dependencies", desc: "Delivery Plans 2.0, Analytics Views, OData & Power BI Dashboards" },
      { id: "ch15", title: "Chapter 15: ADO Pipeline Integration & Developer Flow", desc: "Automated Work Item Transitions, Branch Policies & DORA Metrics" },
      { id: "ch16", title: "Chapter 16: Jira vs. Azure DevOps Coexistence & Migration Matrix", desc: "Feature Matrix, Dual-Stack Integration Patterns & Migration Scripts" },
    ]
  },
  {
    part: "Part V: AI Fundamentals & Ecosystem for Agile",
    tag: "Generative AI & LLMs",
    color: "tag-blue",
    chapters: [
      { id: "ch17", title: "Chapter 17: Generative AI, LLMs & Agentic Architecture", desc: "Transformers, Tokens, Vector DBs, RAG & Knowledge Graphs" },
      { id: "ch18", title: "Chapter 18: Prompt Engineering Masterclass for Agile Coaches", desc: "Socratic Coaching Prompts, Chain-of-Thought & Security Guardrails" },
      { id: "ch19", title: "Chapter 19: Agentic AI & Autonomous Assistants in Agile", desc: "ReAct Pattern, Multi-Agent Orchestration & Autonomous Scrum Masters" },
      { id: "ch20", title: "Chapter 20: AI Ethics, Governance & Change Management", desc: "Responsible AI, Risk Matrix, Privacy Protection & Managing AI Anxiety" },
    ]
  },
  {
    part: "Part VI: The AI-Augmented Agile Coach Playbook",
    tag: "AI Coaching Applications",
    color: "tag-purple",
    chapters: [
      { id: "ch21", title: "Chapter 21: AI-Powered Backlog Engineering & Story Refinement", desc: "Gherkin Acceptance Criteria, SPIDR Story Splitting & INVEST Validation" },
      { id: "ch22", title: "Chapter 22: AI Facilitation: Sprint Planning, Retros & Standups", desc: "Sentiment Analysis, Retrospective Clustering & Impediment Detection" },
      { id: "ch23", title: "Chapter 23: Predictive Analytics & AI Flow Optimization", desc: "Velocity Forecasting, Scope Creep Models & Automated Diagnostics" },
      { id: "ch24", title: "Chapter 24: Building Custom AI Coaching Agents & MCP Servers", desc: "Model Context Protocol (MCP) Jira/ADO Servers & Custom GPT Coaching Assistants" },
    ]
  },
  {
    part: "Part VIII: Hands-On AI Engineering & Enterprise Automation",
    tag: "Hands-On Engineering",
    color: "tag-blue",
    chapters: [
      { id: "ch25", title: "Chapter 25: Local SLMs & On-Premise AI Architecture", desc: "Deploying Llama 3/Phi-3 via Ollama/vLLM for Air-Gapped Zero Data Leakage" },
      { id: "ch26", title: "Chapter 26: Multi-Agent Coaching Systems with LangGraph", desc: "Stateful Graphs, Cyclic Memory & Human-in-the-Loop Approval Nodes" },
      { id: "ch27", title: "Chapter 27: Atlassian Rovo Masterclass: Jira Cloud AI Agents", desc: "Rovo Search, Rovo Chat & Custom Forge Action Module Extensions" },
      { id: "ch28", title: "Chapter 28: Enterprise No-Code/Low-Code Automation (n8n/Make)", desc: "Self-Hosted n8n Docker Pipelines, Webhooks, Make & Zapier Workflows" }
    ]
  },
  {
    part: "Part VII: Executive Coaching Guardrails & Operational Appendices",
    tag: "Appendices & Guardrails",
    color: "tag-emerald",
    chapters: [
      { id: "appA", title: "Appendix A: Enterprise AI Coaching Prompt Library", desc: "📌 EXECUTIVE COACHING GUARDRAIL: Over 100 Production-Tested Prompts for Agile Coaches, Scrum Masters, Product Owners & Enterprise Leaders" },
      { id: "appB", title: "Appendix B: Enterprise JQL, WIQL & AQL Cheat Sheet", desc: "📌 EXECUTIVE COACHING GUARDRAIL: Complete Syntax Reference for Jira JQL, Azure DevOps WIQL & Assets AQL" },
      { id: "appC", title: "Appendix C: Enterprise Agile & AI Maturity Assessment Checklist", desc: "📌 EXECUTIVE COACHING GUARDRAIL: Comprehensive Operational Audit & Diagnostic Tool for Technology Leadership" }
    ]
  }
];
// Real Chapter Data (Executive Summaries & 6-Question Quizzes)
const CHAPTER_DATA = {
  "ch01": {
    "summary": [
      "Scaling frameworks (SAFe 6.0, LeSS, Scrum@Scale, Unfixed) require matching enterprise architectural complexity with organizational design rather than forcing monolithic blueprints.",
      "SAFe 6.0 provides prescriptive governance and alignment for heavily regulated environments, whereas LeSS maximizes squad autonomy by stripping away middle-management synchronization layers.",
      "Quantitative flow mapping and value stream identification must precede tool configuration in Jira or Azure DevOps to prevent automating existing organizational anti-patterns."
    ],
    "quiz": [
      {
        "q": "An enterprise with 50 squads in a highly regulated financial services sector suffers from severe cross-team compliance bottlenecks. Which scaling framework configuration offers the most explicit governance structure for regulatory alignment?",
        "opts": [
          "A) Single-team Scrum with ad-hoc Slack syncs",
          "B) SAFe 6.0 with Large Solution Train & Compliance Guardrails",
          "C) Unfixed Framework with fully fluid team allocation",
          "D) Pure LeSS Huge without governance layers"
        ],
        "ans": "B",
        "rat": "SAFe 6.0 explicitly provides Solution Train and Compliance guardrail patterns designed specifically for audit-heavy, highly regulated environments requiring formal compliance verification."
      },
      {
        "q": "What is the primary operational trade-off when adopting Large-Scale Scrum (LeSS) over SAFe 6.0 in an enterprise technology division?",
        "opts": [
          "A) LeSS increases middle-management overhead",
          "B) LeSS requires higher engineering capability and feature-team domain flexibility while drastically reducing management roles",
          "C) LeSS mandates mandatory quarterly PI Planning events",
          "D) LeSS enforces rigid release train cadences"
        ],
        "ans": "B",
        "rat": "LeSS descales organizational complexity by eliminating intermediate management layers, which demands highly autonomous feature teams capable of working across the entire codebase."
      },
      {
        "q": "When conducting Value Stream Identification across a multi-tier technology organization, what is the most critical metric to optimize first?",
        "opts": [
          "A) Total lines of code written per sprint",
          "B) Individual developer utilization percentage",
          "C) Value Stream Lead Time and Flow Efficiency (Touch Time vs. Wait Time)",
          "D) Number of Jira tickets closed per squad"
        ],
        "ans": "C",
        "rat": "Optimizing Flow Efficiency and reducing wait time between handoffs yields the highest systemic acceleration in value delivery, whereas optimizing individual utilization increases queue sizes and lead times."
      },
      {
        "q": "A practice lead notices that squads are experiencing massive dependency blockages despite adopting Scrum@Scale. What is the root dynamic at play?",
        "opts": [
          "A) The Executive Action Team (EAT) is meeting too frequently",
          "B) Teams are component-bound rather than feature-aligned, causing mandatory cross-team coordination queues",
          "C) Scrum of Scrums (SoS) meetings lack PowerPoint slides",
          "D) Teams are using story points instead of throughput"
        ],
        "ans": "B",
        "rat": "Scrum@Scale relies on modular, autonomous Scrum teams. Component-bound teams create structural handoffs and inter-team dependencies that no scaling framework ceremony can eliminate without organizational redesign."
      },
      {
        "q": "When transitioning from a monolithic SAFe 6.0 setup to a lightweight Unfixed Framework, what is the primary risk regarding team domain knowledge?",
        "opts": [
          "A) Teams lose access to Jira",
          "B) Fluid team movement may disrupt deep domain context and long-term ownership of complex legacy codebases",
          "C) Unfixed requires no developers",
          "D) Velocity decreases by exactly 100%"
        ],
        "ans": "B",
        "rat": "Unfixed emphasizes fluid allocation around dynamic problems, which can erode deep domain expertise if teams change context too frequently without platform stability."
      },
      {
        "q": "In LeSS Huge, how are Requirement Area Frameworks managed across 2,000 developers?",
        "opts": [
          "A) Each Area has its own Product Owner linked to the overall Area Product Owner, managing a single unified product backlog",
          "B) Every squad has its own independent company",
          "C) Area Frameworks are disabled",
          "D) Excel sheets replace Jira"
        ],
        "ans": "A",
        "rat": "LeSS Huge scales via Requirement Areas, where Area Product Owners manage subsets of a single unified Product Backlog without introducing extra management layers."
      }
    ]
  },
  "ch02": {
    "summary": [
      "Agile coaching mastery requires fluidly shifting across 8 core stances (Teacher, Mentor, Coach, Facilitator, Technical Advisor, Business Partner, Transformation Leader, Change Agent) based on domain context.",
      "Neutrality is the foundation of professional coaching: guiding leaders and teams to discover their own solutions prevents learned helplessness and builds organizational resilience.",
      "Socratic inquiry paired with empirical data (cycle time, CFD, throughput) moves retrospective discussions away from emotional speculation toward actionable system optimization."
    ],
    "quiz": [
      {
        "q": "A senior Product Owner insists that the Agile Coach dictate how the engineering squad should estimate backlog items. Which coaching stance should the coach adopt?",
        "opts": [
          "A) Technical Stance: Force the team to use Fibonacci story points",
          "B) Neutral Facilitator & Socratic Coach: Ask powerful questions to guide the PO and squad to establish their own agreed estimation definition",
          "C) Dictatorial Stance: Mandate no estimates",
          "D) Passive Observer Stance: Ignore the request completely"
        ],
        "ans": "B",
        "rat": "Coaching mastery involves maintaining neutrality and using Socratic inquiry to build team ownership and consensus rather than imposing personal preferences."
      },
      {
        "q": "During a high-friction retrospective, two team members argue over code review delays. How should an enterprise coach intervene?",
        "opts": [
          "A) Take a side and rule in favor of the senior developer",
          "B) Shift to Facilitator mode, project empirical Pull Request cycle-time metrics on screen, and guide the team to diagnose system bottlenecks objectively",
          "C) Cancel the retrospective immediately",
          "D) Escalate the dispute to human resources"
        ],
        "ans": "B",
        "rat": "Anchoring coaching interventions in empirical telemetry (PR cycle time) de-escalates interpersonal friction and shifts focus to objective workflow optimization."
      },
      {
        "q": "What differentiates the Mentoring stance from the Professional Coaching stance?",
        "opts": [
          "A) Mentoring involves sharing personal expertise and domain guidance, while Professional Coaching facilitates self-directed discovery without offering direct solutions",
          "B) Mentoring is only for executives, while Coaching is only for developers",
          "C) Mentoring requires Jira certification, while Coaching requires AWS certification",
          "D) There is no difference between the two stances"
        ],
        "ans": "A",
        "rat": "Mentoring transfers specific subject matter experience from mentor to mentee, whereas Professional Coaching assumes the client possesses the answers and facilitates internal discovery."
      },
      {
        "q": "An Enterprise Agile Coach working with C-suite executives encounters resistance to decentralized decision-making. What is the most effective approach?",
        "opts": [
          "A) File a formal grievance with the board of directors",
          "B) Use strategic Socratic coaching linked to business Agility metrics (Time-to-Market, Cost of Delay) to demonstrate the financial impact of centralized approval bottlenecks",
          "C) Force executives to take a 3-day Scrum Master course",
          "D) Unilaterally change executive approval workflows in Jira"
        ],
        "ans": "B",
        "rat": "Executive alignment requires connecting organizational governance changes directly to high-level financial and market performance metrics like Cost of Delay."
      },
      {
        "q": "An Agile Coach notices that a senior leadership team delegates all decision-making to the coach. Which anti-pattern is occurring?",
        "opts": [
          "A) Over-Coaching",
          "B) Learned Helplessness & Coach Dependency",
          "C) High Agility Maturity",
          "D) Socratic Neutrality"
        ],
        "ans": "B",
        "rat": "When coaches continuously provide solutions rather than facilitating discovery, teams and leaders develop dependency, undermining self-organization."
      },
      {
        "q": "What is the primary objective of using 'Powerful Questions' in Socratic coaching?",
        "opts": [
          "A) To test if the team knows Jira keyboard shortcuts",
          "B) To evoke clarity, inspire lateral thinking, and lead the coachee to take ownership of the solution",
          "C) To force the team to work faster",
          "D) To document meeting minutes"
        ],
        "ans": "B",
        "rat": "Powerful questions are open-ended, non-judgmental prompts designed to unlock critical thinking and self-directed problem solving."
      }
    ]
  },
  "ch03": {
    "summary": [
      "Applying Team Topologies (Stream-aligned, Enabling, Complicated-Subsystem, Platform) reduces team cognitive load and creates clear boundary APIs between squads.",
      "Line-of-sight from strategic executive OKRs down to squad-level backlog items requires explicit hierarchy mapping in Jira Cloud Plans or Azure DevOps Delivery Plans.",
      "Enterprise transformation fails when structural realignment is decoupled from governance evolution and leadership capability development."
    ],
    "quiz": [
      {
        "q": "A software engineering department suffers from high cognitive load across all squads because every team must maintain specialized Kubernetes infrastructure alongside feature code. Which Team Topologies pattern addresses this?",
        "opts": [
          "A) Create 10 more Stream-Aligned Teams",
          "B) Establish a dedicated Platform Team that provides infrastructure as an internal Self-Service API",
          "C) Eliminate all engineering roles",
          "D) Require all teams to work 60 hours a week"
        ],
        "ans": "B",
        "rat": "Platform Teams build self-service internal developer platforms that abstract complex infrastructure, reducing cognitive load for Stream-Aligned feature teams."
      },
      {
        "q": "How does an Enterprise Agile Coach establish unbroken line-of-sight between C-suite strategic goals and daily squad execution?",
        "opts": [
          "A) By requiring developers to send daily email reports to the CEO",
          "B) By structuring a multi-tier portfolio hierarchy in Jira/ADO linking Strategic OKRs -> Portfolio Epics -> Features -> User Stories",
          "C) By eliminating User Stories and only tracking OKRs",
          "D) By hosting a weekly 4-hour meeting with all 500 employees"
        ],
        "ans": "B",
        "rat": "Hierarchical parent-child linking in enterprise tooling ensures every user story traces directly back to an overarching corporate strategic initiative."
      },
      {
        "q": "An organization creates an 'Enabling Team' during their AI transformation. What is the primary mandate of this team?",
        "opts": [
          "A) To write all production code for feature squads",
          "B) To capability-build and upskill Stream-Aligned teams in emerging domains (e.g., AI/LLM engineering) until the squads become self-sufficient",
          "C) To act as a permanent approval gate for all code commits",
          "D) To manage employee payroll and benefits"
        ],
        "ans": "B",
        "rat": "Enabling Teams are temporary capability incubators that cross-skill feature squads in specialized domains before stepping back."
      },
      {
        "q": "What is the principal indicator that an enterprise organizational redesign has succeeded?",
        "opts": [
          "A) Increase in total org chart boxes and job titles",
          "B) Reduction in cross-team dependencies, decreased Lead Time for changes, and improved Flow Efficiency",
          "C) 100% attendance at quarterly town halls",
          "D) Total deprecation of all documentation"
        ],
        "ans": "B",
        "rat": "Organizational design success is measured by telemetry: reduced inter-team handoffs, faster Lead Time, and streamlined value delivery."
      },
      {
        "q": "According to Team Topologies, how should a 'Complicated-Subsystem Team' interact with a 'Stream-Aligned Team'?",
        "opts": [
          "A) Complicated-Subsystem Teams act as permanent approval gates",
          "B) Complicated-Subsystem Teams handle specialized domain complexity (e.g., custom cryptography algorithms) and expose clear interface APIs to Stream-Aligned teams",
          "C) They should merge into a single 50-person squad",
          "D) They only communicate via phone"
        ],
        "ans": "B",
        "rat": "Complicated-Subsystem teams encapsulate deep technical specialization (like ML engine core or hardware interface) to keep Stream-Aligned squad cognitive load manageable."
      },
      {
        "q": "When establishing an Enterprise Agile Center of Excellence (CoE), what is the most effective operating model?",
        "opts": [
          "A) Operating as a centralized command-and-control inspection department",
          "B) Operating as an Enabling and Facilitating Hub that builds internal capability, shares patterns, and measures enterprise flow",
          "C) Replacing all project managers with external contractors",
          "D) Writing a 500-page policy manual"
        ],
        "ans": "B",
        "rat": "High-performing CoEs focus on capability building, community enablement, and quantitative flow optimization rather than bureaucratic inspection."
      }
    ]
  },
  "ch04": {
    "summary": [
      "Quantitative flow metrics (Cycle Time, Lead Time, Throughput, Work-in-Progress, Flow Efficiency) reveal systemic bottlenecks far more accurately than subjective estimates.",
      "Cumulative Flow Diagrams (CFD) visually expose workflow instability: widening bands indicate expanding WIP and rising lead times, while flat bands highlight starvation or blocking.",
      "Applying Little's Law ($Average Lead Time = WIP / Throughput$) demonstrates that capping Work-in-Progress is the mathematically guaranteed path to accelerating delivery speed."
    ],
    "quiz": [
      {
        "q": "On a Cumulative Flow Diagram (CFD), the band representing 'In QA Review' is widening continuously while the 'Done' band remains flat. What does this mathematical signature indicate?",
        "opts": [
          "A) QA team is delivering code too fast",
          "B) Work-in-Progress is accumulating in QA, creating a severe bottleneck and increasing overall Lead Time",
          "C) The project is ahead of schedule",
          "D) Story point velocity is increasing"
        ],
        "ans": "B",
        "rat": "A widening band on a CFD indicates accumulating WIP at that specific workflow stage, which directly increases average lead time according to Little's Law."
      },
      {
        "q": "A squad has an average WIP of 20 work items and a stable Throughput of 4 items per day. According to Little's Law, what is the squad's average Lead Time?",
        "opts": [
          "A) 80 days",
          "B) 5 days",
          "C) 0.2 days",
          "D) 24 days"
        ],
        "ans": "B",
        "rat": "Little's Law: $Lead Time = WIP / Throughput$. $20 / 4 = 5$ days."
      },
      {
        "q": "A team spends 10 hours actively coding a feature, but the feature sits in queues waiting for reviews and deployments for 90 hours. What is the team's Flow Efficiency?",
        "opts": [
          "A) 90%",
          "B) 10%",
          "C) 50%",
          "D) 100%"
        ],
        "ans": "B",
        "rat": "Flow Efficiency = (Active Touch Time / Total Lead Time) * 100 = (10 / (10 + 90)) * 100 = 10%."
      },
      {
        "q": "Why is optimizing story point velocity across multiple squads considered an anti-pattern in enterprise Flow Engineering?",
        "opts": [
          "A) Story points are unitless, subjective estimates that vary between teams and encourage point inflation rather than actual value delivery",
          "B) Velocity is illegal under SAFe 6.0",
          "C) Story points require expensive software licenses",
          "D) Velocity can only be calculated in Python"
        ],
        "ans": "A",
        "rat": "Story points are relative team estimates. Comparing velocity across teams leads to artificial point inflation and destroys honest estimation."
      },
      {
        "q": "A software team has a Flow Efficiency of 8%. What does this mathematically imply about their delivery process?",
        "opts": [
          "A) 92% of the total Lead Time is spent waiting in queues or handoff delays",
          "B) 92% of code has bugs",
          "C) Developers work 8 hours a week",
          "D) The team is operating at peak performance"
        ],
        "ans": "A",
        "rat": "Flow Efficiency measures active touch time vs total elapsed lead time; an 8% score indicates that 92% of time is non-value-adding queue wait time."
      },
      {
        "q": "Why should WIP limits be applied at the workflow column level rather than per individual developer?",
        "opts": [
          "A) Column WIP limits expose systemic bottlenecks and encourage team swarming, whereas individual WIP limits hide queue build-ups",
          "B) Individual WIP limits are unsupported in Jira",
          "C) Column WIP limits increase server speed",
          "D) Individual WIP limits cause syntax errors"
        ],
        "ans": "A",
        "rat": "Column WIP limits constrain stage capacity, forcing squads to swarm and clear downstream bottlenecks before pulling new work."
      }
    ]
  },
  "ch05": {
    "summary": [
      "Jira Data Center active-active clustering requires dedicated high-bandwidth interconnects, shared Hazelcast distributed caching, and a shared NFS file system.",
      "Database pool tuning (HikariCP/Commons-DBCP) and index replication optimization are essential to support 10,000+ concurrent enterprise users without thread exhaustion.",
      "High-availability disaster recovery (HA/DR) architectures demand automated DB read-replica failover and zero-downtime upgrades (ZDU)."
    ],
    "quiz": [
      {
        "q": "What technology handles real-time node state synchronization and distributed cache replication across Jira Data Center cluster nodes?",
        "opts": [
          "A) Apache Kafka",
          "B) Hazelcast",
          "C) Redis Enterprise",
          "D) RabbitMQ"
        ],
        "ans": "B",
        "rat": "Hazelcast is embedded in Jira Data Center for cluster node discovery, distributed caching, and real-time state synchronization."
      },
      {
        "q": "During a spike to 8,000 concurrent users, Jira DC node CPU utilization is low, but HTTP request threads are blocked waiting for DB connections. How should the administrator resolve this?",
        "opts": [
          "A) Increase Hazelcast memory by 100GB",
          "B) Tune the HikariCP database connection pool size and increase PostgreSQL max_connections",
          "C) Add 50 more Jira cluster nodes",
          "D) Disable all custom fields"
        ],
        "ans": "B",
        "rat": "Thread contention for database connections indicates HikariCP pool exhaustion, which is resolved by tuning connection pool sizing relative to DB resources."
      },
      {
        "q": "Which shared storage configuration is required across all Jira Data Center nodes for attachments and avatars?",
        "opts": [
          "A) Local SSD on each node without sync",
          "B) Shared Network File System (NFSv4) or AWS EFS mounted across all cluster nodes",
          "C) USB flash drive attached to node 1",
          "D) FTP server running on port 21"
        ],
        "ans": "B",
        "rat": "Jira DC architecture mandates a high-performance shared file system (NFSv4/EFS) accessible to all cluster nodes for shared artifacts."
      },
      {
        "q": "What is the primary benefit of Zero Downtime Upgrades (ZDU) in Jira Data Center?",
        "opts": [
          "A) It doubles the database index size automatically",
          "B) It allows cluster nodes to be upgraded sequentially to new bug-fix versions without taking the entire site offline",
          "C) It deletes stale user accounts during upgrade",
          "D) It renames all custom fields to uppercase"
        ],
        "ans": "B",
        "rat": "ZDU puts Jira DC into mixed-mode, allowing nodes to be upgraded one by one while keeping the site active for end users."
      },
      {
        "q": "In a Jira Data Center multi-node cluster, what happens if node 1 suffers a physical hardware failure?",
        "opts": [
          "A) All user data is lost permanently",
          "B) The load balancer routes traffic to active remaining nodes while Hazelcast updates the cluster topology automatically",
          "C) The database shuts down",
          "D) Users cannot log in for 24 hours"
        ],
        "ans": "B",
        "rat": "Active-active clustering with Hazelcast topology management and dynamic load balancing guarantees high availability and seamless failover."
      },
      {
        "q": "How does configuring `ehcache` memory limits prevent Out-Of-Memory JVM crashes in Jira DC?",
        "opts": [
          "A) It caps in-memory cached objects and flushes LRU (Least Recently Used) items to disk/NFS when thresholds are reached",
          "B) It deletes old projects",
          "C) It compresses JPEG images",
          "D) It turns off Jira REST APIs"
        ],
        "ans": "A",
        "rat": "Proper heap cache tuning prevents unchecked cache growth from exhausting the Java Virtual Machine heap memory."
      }
    ]
  },
  "ch06": {
    "summary": [
      "Jira DC workflow engineering requires structuring clean state machines, explicit transition properties (`jira.permission.*`), and ScriptRunner validation hooks.",
      "Custom field bloat drastically degrades database indexing speed; field contexts and global field reduction must be actively governed.",
      "Automated post-functions should leverage asynchronous event listeners to avoid blocking user UI thread execution during complex issue transitions."
    ],
    "quiz": [
      {
        "q": "An enterprise team needs to restrict the 'Approve Budget' workflow transition in Jira DC strictly to users with the 'Finance Leads' project role. Which mechanism enforces this cleanly?",
        "opts": [
          "A) A plain text custom field",
          "B) Workflow Transition Condition using 'User Is In Project Role'",
          "C) Sending an email to the Scrum Master",
          "D) Creating a secondary Jira project"
        ],
        "ans": "B",
        "rat": "Workflow Conditions prevent the transition button from rendering unless the executing user meets the defined criteria (e.g., project role membership)."
      },
      {
        "q": "A ScriptRunner workflow Validator fails when a user transitions an issue. What happens to the issue transition?",
        "opts": [
          "A) The issue transitions anyway, but logs an error",
          "B) The transition is blocked, changes are rolled back, and an error message displays on the user screen",
          "C) The Jira database crashes immediately",
          "D) The issue is deleted"
        ],
        "ans": "B",
        "rat": "Validators execute before transition commit; if validation fails, the transition is aborted and an error prompt is returned to the user."
      },
      {
        "q": "Why does accumulating over 1,000 global custom fields cause severe performance degradation in Jira DC?",
        "opts": [
          "A) Custom fields consume all CPU memory instantly",
          "B) Every global custom field creates entries in `customfieldvalue` and expands Lucene indexing overhead on every issue create/update",
          "C) Jira limits custom fields to exactly 50",
          "D) Custom fields disable dark mode"
        ],
        "ans": "B",
        "rat": "Global custom fields force Lucene to index empty values across all issues in all projects, causing massive index size inflation and search lag."
      },
      {
        "q": "What is the recommended practice for executing long-running REST API calls during a workflow transition in Jira DC?",
        "opts": [
          "A) Run them synchronously inside a workflow post-function",
          "B) Offload execution to an asynchronous ScriptRunner Event Listener bound to `IssueEvent`",
          "C) Put the script in a custom field description",
          "D) Block the user interface for 60 seconds"
        ],
        "ans": "B",
        "rat": "Offloading heavy tasks to asynchronous Event Listeners prevents thread blocking on the primary user HTTP request thread during transition."
      },
      {
        "q": "What is the difference between a Workflow Condition and a Workflow Validator in Jira DC?",
        "opts": [
          "A) Conditions hide/show transition buttons before action; Validators check field inputs after button click and block submission if invalid",
          "B) Conditions are written in Python; Validators in C++",
          "C) Validators only work on Mondays",
          "D) There is no difference"
        ],
        "ans": "A",
        "rat": "Conditions evaluate permissions before displaying the transition option, while Validators validate payload constraints during form submission."
      },
      {
        "q": "How can an administrator prevent ScriptRunner Post-Functions from causing transition timeouts during peak load?",
        "opts": [
          "A) Wrap execution in asynchronous thread pools or offload logic to custom Event Listeners",
          "B) Delete all workflow steps",
          "C) Increase HTTP timeout to 10 minutes",
          "D) Disable user comments"
        ],
        "ans": "A",
        "rat": "Asynchronous thread offloading decouples heavy script execution from the main HTTP thread, keeping transition response times instant."
      }
    ]
  },
  "ch07": {
    "summary": [
      "Advanced Roadmaps in Jira DC enables multi-tier portfolio hierarchies (Strategic Theme -> Portfolio Epic -> Solution Epic -> Feature -> Story).",
      "Unconstrained capacity planning using target start/end dates and team velocity auto-scheduling reveals realistic delivery milestone timelines.",
      "Cross-project dependency mapping highlights critical paths and warns of schedule conflicts before release dates are committed."
    ],
    "quiz": [
      {
        "q": "In Advanced Roadmaps (Jira DC), how is an unestimated Epic scheduled across multiple sprints during auto-scheduling?",
        "opts": [
          "A) It is deleted automatically",
          "B) Advanced Roadmaps uses configured default target duration or team historical velocity estimates to project dates",
          "C) It schedules the Epic on yesterday's date",
          "D) It requires manual database insertion"
        ],
        "ans": "B",
        "rat": "Auto-scheduling algorithms calculate timeline placement based on configured default estimates, team velocity, and explicit parent-child dependencies."
      },
      {
        "q": "What occurs when a dependency conflict exists in Advanced Roadmaps (e.g., Feature B starts before dependent Feature A finishes)?",
        "opts": [
          "A) Jira sends a SMS to the CEO",
          "B) A visual red warning indicator highlights the schedule conflict on the timeline view",
          "C) Both features are deleted",
          "D) The sprint is closed automatically"
        ],
        "ans": "B",
        "rat": "Advanced Roadmaps continuously validates dependency timelines and flags violations with red highlight warnings across the portfolio view."
      },
      {
        "q": "How do Portfolio Managers configure a custom hierarchy level (e.g., 'Initiative') above 'Epic' in Jira DC?",
        "opts": [
          "A) By editing PostgreSQL tables directly",
          "B) In Jira Administration -> Advanced Roadmaps Hierarchy Settings, linking custom issue types to new hierarchy levels",
          "C) It is impossible to add levels above Epic",
          "D) By installing Microsoft Excel"
        ],
        "ans": "B",
        "rat": "Jira Administrators define custom hierarchy levels in Advanced Roadmaps configuration by assigning custom issue types to hierarchy tiers above Epic."
      },
      {
        "q": "Why should portfolio plans use 'Target Dates' instead of standard 'Due Date' fields for strategic scheduling?",
        "opts": [
          "A) Target Dates support roll-up algorithms across parent-child hierarchies without overwriting squad-level issue due dates",
          "B) Due Date only works in Jira Cloud",
          "C) Target Dates are encrypted",
          "D) Due Date crashes Lucene search"
        ],
        "ans": "A",
        "rat": "Target Start/End dates allow portfolio planners to simulate and calculate hierarchy roll-ups independently of team-managed due dates."
      },
      {
        "q": "In Advanced Roadmaps DC, what is the role of the 'Release' entity in portfolio scheduling?",
        "opts": [
          "A) It defines fixed or dynamic release containers that group features across multiple projects for milestone tracking",
          "B) It formats PDF reports",
          "C) It deletes completed epics",
          "D) It manages user billing"
        ],
        "ans": "A",
        "rat": "Releases aggregate deliverables across heterogeneous project backlogs into unified release packages for executive visibility."
      },
      {
        "q": "How does Advanced Roadmaps handle team velocity variance during long-term capacity forecasting?",
        "opts": [
          "A) It assumes velocity is always 100",
          "B) It averages historical sprint velocity over a configurable range (e.g., last 3-6 sprints) to project realistic sprint capacity",
          "C) It forces developers to work overtime",
          "D) It ignores historical data"
        ],
        "ans": "B",
        "rat": "Historical velocity averaging smooths out sprint anomalies, generating realistic future capacity projections."
      }
    ]
  },
  "ch08": {
    "summary": [
      "Advanced JQL functions (`WAS IN`, `CHANGED`, `membersOf()`) enable powerful historical state auditing and dynamic reporting across issue datasets.",
      "Jira DC REST API v2 provides structured JSON endpoints for automated issue manipulation, bulk operations, and ScriptRunner REST endpoint creation.",
      "Webhook event streaming integrated with message queues (Kafka/RabbitMQ) powers real-time enterprise telemetry and reporting dashboards."
    ],
    "quiz": [
      {
        "q": "Which JQL query identifies all issues that were moved into the 'In Progress' status by a member of the 'DevOps-Leads' group during the month of August?",
        "opts": [
          "A) status = 'In Progress' AND team = DevOps",
          "B) status WAS IN ('In Progress') BY membersOf('DevOps-Leads') DURING ('2026-08-01', '2026-08-31')",
          "C) issueType = Bug AND status = Done",
          "D) project = DEV AND user in DevOps"
        ],
        "ans": "B",
        "rat": "The `WAS IN` operator combined with `BY membersOf()` and `DURING` allows precise historical temporal auditing in JQL."
      },
      {
        "q": "When querying the Jira DC REST API v2 `/rest/api/2/search` for 50,000 issues, what pagination strategy prevents Out-Of-Memory (OOM) errors?",
        "opts": [
          "A) Requesting `maxResults=50000` in a single HTTP call",
          "B) Iterating with `startAt` and `maxResults=200` parameter chunks",
          "C) Downloading the database backup file",
          "D) Disabling API security authentication"
        ],
        "ans": "B",
        "rat": "Paging API queries in controlled chunks (e.g., 200 items per request) avoids overloading JVM heap memory during large data extractions."
      },
      {
        "q": "What is the primary function of a custom ScriptRunner REST Endpoint in Jira DC?",
        "opts": [
          "A) To replace the Jira login screen",
          "B) To expose custom lightweight, authenticated Groovy services that execute complex server-side business logic and return JSON",
          "C) To host static HTML websites",
          "D) To compile C++ binary files"
        ],
        "ans": "B",
        "rat": "ScriptRunner REST Endpoints allow administrators to build custom backend micro-services inside Jira DC that process requests and interface directly with Jira Java APIs."
      },
      {
        "q": "How do enterprise Webhooks ensure eventual consistency between Jira DC and an external reporting data warehouse?",
        "opts": [
          "A) Webhooks push real-time event payloads to an API gateway/message queue, backed by periodic reconciliation JQL sync scripts",
          "B) Webhooks lock the database during delivery",
          "C) Webhooks delete issues after sending",
          "D) Webhooks format all data as XML attachments"
        ],
        "ans": "A",
        "rat": "Combining real-time webhook streaming with background polling/reconciliation guarantees reliable event synchronization without missing dropped packets."
      },
      {
        "q": "Which JQL function allows filtering issues where the assignee is a member of the 'Architecture-Board' group?",
        "opts": [
          "A) `assignee = 'Architecture-Board'`",
          "B) `assignee in membersOf('Architecture-Board')`",
          "C) `assignee.group == Architecture`",
          "D) `userGroup = Architecture`"
        ],
        "ans": "B",
        "rat": "The `membersOf()` function dynamically evaluates group membership within JQL search expressions."
      },
      {
        "q": "When creating custom ScriptRunner REST endpoints in Jira DC, how is authentication secured?",
        "opts": [
          "A) Endpoint inherits Jira session authentication or OAuth 2.0 / Personal Access Token (PAT) validation",
          "B) Endpoints are always public to the world",
          "C) Passwords are hardcoded in URL parameters",
          "D) Security is disabled"
        ],
        "ans": "A",
        "rat": "Custom REST endpoints utilize Jira's native security framework, requiring valid session cookies or PAT bearer tokens."
      }
    ]
  },
  "ch09": {
    "summary": [
      "Jira Cloud multi-tenant architecture decouples tenant storage using isolated microservices and Atlassian Access SAML/SCIM identity management.",
      "Cloud Data Residency controls ensure compliance with regional sovereignty requirements (GDPR, HIPAA, Financial Services regulations).",
      "Organization-level administration enables centralized policy enforcement, audit logging, and automated user provisioning across all cloud sites."
    ],
    "quiz": [
      {
        "q": "In Jira Cloud Enterprise, what mechanism handles automated user provisioning and de-provisioning from Okta or Azure Active Directory?",
        "opts": [
          "A) Manual CSV upload every Monday",
          "B) SCIM (System for Cross-domain Identity Management) via Atlassian Access",
          "C) JDBC direct database connection",
          "D) User-initiated self-registration"
        ],
        "ans": "B",
        "rat": "SCIM protocol integration via Atlassian Access automatically synchronizes identity changes from enterprise IdPs to Jira Cloud."
      },
      {
        "q": "How does Atlassian Cloud Data Residency guarantee compliance for a European banking client?",
        "opts": [
          "A) By encrypting data with rot13",
          "B) By allowing administrators to pin primary product content (issues, user data, attachments) to specific EU AWS data centers",
          "C) By moving all data to a local laptop",
          "D) Data Residency is not supported in cloud"
        ],
        "ans": "B",
        "rat": "Cloud Data Residency allows enterprise admins to select geographic realm boundaries (e.g., EU, US, AU) for stored issue data and attachments."
      },
      {
        "q": "What is the main architectural difference between Jira Data Center and Jira Cloud Enterprise multi-tenancy?",
        "opts": [
          "A) Jira Cloud uses shared multi-tenant micro-service pods with logical tenant data isolation, whereas DC uses dedicated customer-managed IaaS/PaaS nodes",
          "B) Jira Cloud runs on Windows 95",
          "C) Jira DC has no database",
          "D) Jira Cloud does not support custom fields"
        ],
        "ans": "A",
        "rat": "Jira Cloud operates a cloud-native microservices architecture with tenant-isolated data stores, contrasting with customer-managed DC clusters."
      },
      {
        "q": "An organization manages 15 Jira Cloud sites under one enterprise umbrella. Which tool provides unified audit logs across all sites?",
        "opts": [
          "A) Individual site admin pages",
          "B) Atlassian Organization Admin Hub",
          "C) A python script running on a local machine",
          "D) Local text files"
        ],
        "ans": "B",
        "rat": "The Organization Admin Hub centralizes domain management, security policies, and aggregated audit logs across all enterprise cloud sites."
      },
      {
        "q": "What is the function of Atlassian Guard (formerly Atlassian Access) in enterprise Jira Cloud environments?",
        "opts": [
          "A) To manage database backups",
          "B) To enforce centralized SAML SSO, mandatory 2FA, automated SCIM provisioning, and CASB security policies across all cloud products",
          "C) To write user stories",
          "D) To host Git repositories"
        ],
        "ans": "B",
        "rat": "Atlassian Guard provides organization-level security controls, identity federation, and data loss prevention for cloud enterprises."
      },
      {
        "q": "How does Cloud Data Encryption at rest operate in Jira Cloud Enterprise?",
        "opts": [
          "A) Data is stored as plain text",
          "B) Customer data and attachments are encrypted using AES-256 with KMS key management at rest and TLS 1.2+ in transit",
          "C) Encryption is optional and costs extra",
          "D) Only images are encrypted"
        ],
        "ans": "B",
        "rat": "Atlassian Cloud enforces AES-256 storage encryption and TLS 1.2+ transport security across all tenant environments."
      }
    ]
  },
  "ch10": {
    "summary": [
      "Jira Cloud Automation utilizes Smart Values (`{{issue.fields.summary}}`) and trigger conditions for codeless enterprise workflow automation.",
      "Atlassian Forge provides a secure, serverless FaaS (Function-as-a-Service) runtime executing inside Atlassian's isolated cloud boundary.",
      "Forge Custom UI and Storage API enable building highly customized enterprise extensions with granular OAuth 2.0 scopes and zero infrastructure overhead."
    ],
    "quiz": [
      {
        "q": "Which Smart Value in Jira Cloud Automation retrieves the display name of the user who triggered an automation rule?",
        "opts": [
          "A) `{{user.name}}`",
          "B) `{{initiator.displayName}}`",
          "C) `{{issue.reporter}}`",
          "D) `{{actor.email}}`"
        ],
        "ans": "B",
        "rat": "`{{initiator.displayName}}` dynamically resolves to the full name of the actor who fired the event trigger."
      },
      {
        "q": "Why is Atlassian Forge considered more secure for custom app development than legacy Connect apps?",
        "opts": [
          "A) Forge apps run on the developer's home computer",
          "B) Forge runs serverless code within Atlassian's security boundary and enforces strict manifest-declared OAuth 2.0 egress permissions",
          "C) Forge does not support Javascript",
          "D) Connect apps do not require passwords"
        ],
        "ans": "B",
        "rat": "Forge executes within Atlassian's secure cloud runtime and blocks unauthorized external network calls unless explicitly declared in `manifest.yml`."
      },
      {
        "q": "A developer needs to store persistent key-value configuration data for a Forge app. Which built-in API should they use?",
        "opts": [
          "A) `localStorage` in browser",
          "B) Forge Storage API (`storage.get() / storage.set()`)",
          "C) Writing to a local file system",
          "D) Storing data in issue summary text"
        ],
        "ans": "B",
        "rat": "The Forge Storage API provides secure, tenant-isolated key-value and entity storage built directly into the serverless platform."
      },
      {
        "q": "What happens when a Jira Cloud Automation rule exceeds its monthly execution limit on a Standard plan?",
        "opts": [
          "A) The entire Jira site is deleted",
          "B) Rule executions are throttled/paused until the next billing cycle, or until upgraded to Premium/Enterprise",
          "C) The site switches to Data Center automatically",
          "D) Emails are sent to all users"
        ],
        "ans": "B",
        "rat": "Jira Cloud enforces rule execution caps based on license tier; exceeding limits pauses rule execution until limit resets or plan is upgraded."
      },
      {
        "q": "In Jira Cloud Automation, what is the 'Branch Rule' component used for?",
        "opts": [
          "A) To create Git repository branches",
          "B) To execute sub-actions against related issues (e.g., parent epic, linked items, sub-tasks) within the same rule flow",
          "C) To delete workflow states",
          "D) To change project colors"
        ],
        "ans": "B",
        "rat": "Branching allows automation rules to iterate over related work items (like sub-tasks or linked issues) and perform bulk actions."
      },
      {
        "q": "What is the primary constraint of Atlassian Forge function execution time?",
        "opts": [
          "A) Functions can run for 24 hours",
          "B) Serverless backend functions have a 25-second execution timeout to protect tenant resource isolation",
          "C) Functions must finish in 1 millisecond",
          "D) There is no limit"
        ],
        "ans": "B",
        "rat": "Forge serverless functions enforce a 25-second execution limit; long tasks must use Forge Async Events."
      }
    ]
  },
  "ch11": {
    "summary": [
      "Jira Service Management (JSM) unifies ITSM incident, problem, and change management workflows directly with software engineering development backlogs.",
      "Assets (formerly Insight) in JSM provides an object-oriented CMDB structure queryable via Asset Query Language (AQL).",
      "Jira Plans (Cloud) auto-calculates cross-team capacity, dependencies, and target release windows across enterprise portfolios."
    ],
    "quiz": [
      {
        "q": "Which Asset Query Language (AQL) statement retrieves all hardware asset objects of object type 'Laptop' assigned to user 'sadkar'?",
        "opts": [
          "A) status = Active",
          "B) objectType = 'Laptop' AND 'Assignee' = 'sadkar'",
          "C) JQL issueType = Asset",
          "D) SELECT * FROM Laptops"
        ],
        "ans": "B",
        "rat": "AQL syntax filters CMDB object attributes using `objectType = 'TypeName' AND 'Attribute' = 'Value'`."
      },
      {
        "q": "How does linking a JSM Change Request directly to a Jira Software Epic improve enterprise governance?",
        "opts": [
          "A) It automatically approves all budget requests",
          "B) It creates full traceability between software deployment commits and ITSM change approval audits",
          "C) It deletes all bugs reported by customers",
          "D) It requires developers to take phone calls"
        ],
        "ans": "B",
        "rat": "Bi-directional linking between JSM Change Requests and software engineering backlogs provides automated audit compliance for deployments."
      },
      {
        "q": "In Jira Plans (Cloud), what scenario planning feature allows planners to test 'What-If' scope additions without altering live squad backlogs?",
        "opts": [
          "A) Production commit button",
          "B) Uncommitted Changes / Scenario Sandbox Mode",
          "C) Hardcoding dates in Excel",
          "D) Deleting the project plan"
        ],
        "ans": "B",
        "rat": "Jira Plans maintains an uncommitted scenario layer allowing managers to simulate scheduling changes before committing them to live Jira issues."
      },
      {
        "q": "What is the primary function of an Asset Schema in JSM?",
        "opts": [
          "A) To format Jira comment text",
          "B) To define a structured domain container holding Object Types, Attributes, and Object relationships (e.g., IT Infrastructure, Services)",
          "C) To manage user passwords",
          "D) To host video files"
        ],
        "ans": "B",
        "rat": "An Asset Schema defines the conceptual structure and relationships for enterprise CMDB objects within Jira Service Management."
      },
      {
        "q": "In Jira Service Management (JSM), how do Service Desk Queues differ from Jira Software Backlogs?",
        "opts": [
          "A) Queues categorize incoming customer requests based on SLA target response times and incident urgency rather than sprint iterations",
          "B) Queues are stored on paper",
          "C) Queues do not support assignees",
          "D) Software backlogs cannot have bugs"
        ],
        "ans": "A",
        "rat": "JSM queues are optimized for real-time SLA tracking, triage, and IT service desk response workflows."
      },
      {
        "q": "How does an Asset Object Type inheritance structure work in JSM Assets?",
        "opts": [
          "A) Parent Object Types pass down attributes to Child Object Types (e.g., 'Host' attributes inherited by 'Linux Server')",
          "B) Attributes are deleted on inheritance",
          "C) Inheritance is unsupported",
          "D) Child objects overwrite parent code"
        ],
        "ans": "A",
        "rat": "Object Type hierarchies allow common infrastructure attributes (IP address, Serial Number) to be inherited by specialized sub-types."
      }
    ]
  },
  "ch12": {
    "summary": [
      "Migrating from Jira Data Center to Cloud requires structured execution: Assessment, Cleanup, Test Migrations, User Mapping, and Production Cutover.",
      "Jira Cloud Migration Assistant (JCMA) automates project and issue migration, but app data (ScriptRunner, Tempo) requires dedicated app migration paths.",
      "User anonymization, identity migration via Atlassian Access, and post-migration validation are critical to ensure zero data loss during cutover."
    ],
    "quiz": [
      {
        "q": "What is the recommended first step before executing a test migration with Jira Cloud Migration Assistant (JCMA)?",
        "opts": [
          "A) Delete all Jira DC users",
          "B) Conduct a comprehensive Data Clean-up and App Assessment audit to purge inactive custom fields, workflows, and unused projects",
          "C) Shut down the network router",
          "D) Change all project keys to AAA"
        ],
        "ans": "B",
        "rat": "Cleaning up legacy technical debt and auditing app compatibility before migration dramatically increases JCMA success rates."
      },
      {
        "q": "During a DC to Cloud migration, why can't ScriptRunner Groovy scripts be migrated 1:1 automatically by JCMA?",
        "opts": [
          "A) Groovy is illegal in the cloud",
          "B) Jira DC runs on Java server APIs, whereas Jira Cloud uses REST APIs, Cloud Automation, and Forge serverless execution models",
          "C) Cloud does not support code",
          "D) JCMA only migrates images"
        ],
        "ans": "B",
        "rat": "Architectural differences between server Java APIs and Cloud REST/Forge APIs require rewriting custom server scripts into Cloud Automation or Forge apps."
      },
      {
        "q": "What is the primary role of the 'User Mapping' phase in JCMA?",
        "opts": [
          "A) To assign new passwords to all users",
          "B) To map legacy Jira DC usernames/emails to unified Atlassian Account IDs (AAIDs) in Atlassian Access",
          "C) To delete duplicate users",
          "D) To merge all users into one account"
        ],
        "ans": "B",
        "rat": "Cloud security requires mapping legacy username strings to global Atlassian Account IDs (AAIDs) for identity federation."
      },
      {
        "q": "In an enterprise production cutover plan, what is the purpose of setting Jira Data Center to 'Read-Only' mode?",
        "opts": [
          "A) To prevent users from creating or modifying issues on DC while final delta migration scripts run",
          "B) To test network speed",
          "C) To force users to take a lunch break",
          "D) To backup the database"
        ],
        "ans": "A",
        "rat": "Locking the legacy DC instance to Read-Only prevents data divergence while final delta changes are copied to the live Jira Cloud site."
      },
      {
        "q": "What is the purpose of running the JCMA 'Pre-Migration Check' engine prior to actual migration?",
        "opts": [
          "A) To format the local hard drive",
          "B) To identify missing email addresses, duplicate group names, incompatible app data, and invalid workflow references",
          "C) To send emails to all customers",
          "D) To upgrade Jira DC automatically"
        ],
        "ans": "B",
        "rat": "JCMA pre-checks flag configuration conflicts and data integrity issues that would block or corrupt cloud migration."
      },
      {
        "q": "How should historical Jira DC attachment files (e.g., 2TB) be migrated to Jira Cloud efficiently?",
        "opts": [
          "A) By uploading them one by one through the browser",
          "B) Using JCMA automated attachment streaming or Atlassian Cloud Migration Assistant bulk upload pipelines",
          "C) Sending attachments via email attachments",
          "D) Deleting all attachments"
        ],
        "ans": "B",
        "rat": "JCMA streams attachments in background parallel threads directly to cloud storage buckets during migration windows."
      }
    ]
  },
  "ch13": {
    "summary": [
      "Azure Boards enterprise process architecture relies on standard (Agile, Scrum, CMMI, Basic) or Inherited Process Models for custom Work Item Types (WIT).",
      "State machine customization in Azure Boards maps custom workflow states to backlog categories (Proposed, In Progress, Resolved, Completed).",
      "Field rules, picklists, and WIT XML layout governance ensure consistent data capture across scaled engineering departments."
    ],
    "quiz": [
      {
        "q": "In Azure Boards, how does an organization create a custom Work Item Type (WIT) called 'Architecture Spike' across 50 projects?",
        "opts": [
          "A) By editing XML files on each developer's laptop",
          "B) By creating an Inherited Process from a system process (e.g., Scrum) and defining the new WIT at the organization level",
          "C) By emailing Microsoft support",
          "D) It is impossible in Azure DevOps"
        ],
        "ans": "B",
        "rat": "Inherited Processes allow org admins to define custom WITs, fields, and rules centrally and apply them across multiple projects."
      },
      {
        "q": "What happens if a custom state in Azure Boards is not mapped to a State Category (e.g., 'In Progress')?",
        "opts": [
          "A) The work item is deleted",
          "B) The work item will not render correctly on Kanban boards, Cumulative Flow Diagrams, or Velocity charts",
          "C) Azure DevOps crashes",
          "D) The state becomes encrypted"
        ],
        "ans": "B",
        "rat": "State Categories drive reporting aggregations; unmapped states break board column displays and analytical charts."
      },
      {
        "q": "Which Azure Boards rule condition dynamically makes the 'Root Cause Analysis' field required when a Bug transitions to 'Resolved'?",
        "opts": [
          "A) Mandatory Field Rule triggered `WHEN A work item state changes to Resolved`",
          "B) Sending a Slack notification",
          "C) Creating a C# plugin",
          "D) Disabling the save button"
        ],
        "ans": "A",
        "rat": "Azure Boards Process Rules support conditional field requirements based on state transitions without writing custom code."
      },
      {
        "q": "What is the structural relationship between Area Paths and Team Backlogs in Azure DevOps?",
        "opts": [
          "A) Area Paths determine user passwords",
          "B) Area Paths define logical component/product domains and are assigned to teams to filter their backlog ownership",
          "C) Area Paths control git commit hashes",
          "D) Area Paths are used for credit card processing"
        ],
        "ans": "B",
        "rat": "Area Paths establish domain boundaries, allowing squads to subscribe to specific nodes in the enterprise area hierarchy for backlog ownership."
      },
      {
        "q": "In Azure Boards, what is the role of 'Picklists' in custom field creation?",
        "opts": [
          "A) Picklists define allowable dropdown values (string or integer) to enforce data standardization across work items",
          "B) Picklists generate random numbers",
          "C) Picklists pick team members for meetings",
          "D) Picklists format CSS styles"
        ],
        "ans": "A",
        "rat": "Custom picklists constrain field inputs to pre-approved corporate option values, ensuring reporting data quality."
      },
      {
        "q": "How does the Azure Boards 'Rollup' column feature function on backlog views?",
        "opts": [
          "A) It calculates progress bars or totals (e.g., total sub-task completed count or remaining effort) from child work items automatically",
          "B) It rolls the screen up",
          "C) It deletes closed items",
          "D) It converts currency"
        ],
        "ans": "A",
        "rat": "Rollup columns aggregate progress metrics dynamically from child hierarchy levels onto parent backlog views."
      }
    ]
  },
  "ch14": {
    "summary": [
      "Azure DevOps Delivery Plans 2.0 provides multi-team portfolio visibility, iteration alignment, and visual dependency tracking across value streams.",
      "Area Path and Iteration Path hierarchies govern portfolio roll-up from Squad PBI/Bugs to Feature and Epic backlogs.",
      "Cross-team dependency markers highlight red/green status markers directly on delivery roadmaps to prevent release collisions."
    ],
    "quiz": [
      {
        "q": "In Azure DevOps Delivery Plans 2.0, what does a red dependency connector line between two work items indicate?",
        "opts": [
          "A) The items are assigned to the same user",
          "B) A predecessor item is scheduled in an iteration later than its successor item, violating timeline sequencing",
          "C) Both items are closed",
          "D) The items have no estimation"
        ],
        "ans": "B",
        "rat": "Delivery Plans automatically flags dependency sequencing errors in red when a prerequisite task is scheduled after the dependent task."
      },
      {
        "q": "How do Enterprise Portfolio Managers configure a 4-tier backlog hierarchy in Azure Boards (Epic -> Feature -> Story -> Subtask)?",
        "opts": [
          "A) Hierarchy is fixed and cannot be changed",
          "B) In Organization Settings -> Process -> Portfolio Backlogs, adding custom backlog levels and assigning corresponding WITs",
          "C) By creating 4 separate Azure DevOps organizations",
          "D) By using Excel spreadsheets only"
        ],
        "ans": "B",
        "rat": "Azure Boards allows customizing Portfolio Backlog levels within an Inherited Process to support multi-level enterprise planning."
      },
      {
        "q": "What is the primary function of Iteration Paths in Azure DevOps?",
        "opts": [
          "A) To define geographic office locations",
          "B) To define time-boxed delivery windows (e.g., Sprints, Releases) across the organizational calendar",
          "C) To store database passwords",
          "D) To measure internet bandwidth"
        ],
        "ans": "B",
        "rat": "Iteration Paths establish the temporal dimension of planning, mapping work items to specific time boxes and release cadences."
      },
      {
        "q": "How does Delivery Plans 2.0 handle cross-organization dependency tracking across different Azure DevOps organizations?",
        "opts": [
          "A) Delivery Plans natively tracks dependencies across different organizations natively without configuration",
          "B) Delivery Plans tracks dependencies within a single organization; cross-org tracking requires explicit REST API/integration sync",
          "C) Delivery Plans deletes cross-org items",
          "D) Cross-org dependencies are illegal"
        ],
        "ans": "B",
        "rat": "Native Delivery Plans dependency connectors operate within an organization boundary; cross-org mapping requires integration tooling or API sync."
      },
      {
        "q": "In Azure DevOps, how can a team view work items across 5 different projects on a single Kanban board?",
        "opts": [
          "A) It is natively impossible on a single board; teams use Delivery Plans or cross-project query views",
          "B) By merging all 5 projects into 1",
          "C) By writing a custom HTML file",
          "D) By disabling security permissions"
        ],
        "ans": "A",
        "rat": "Standard boards scope to a single project/area path; Delivery Plans and cross-project query widgets aggregate cross-project roadmaps."
      },
      {
        "q": "What happens when an Iteration Path is deleted in Azure DevOps while work items are still assigned to it?",
        "opts": [
          "A) Work items are deleted permanently",
          "B) The user is prompted to re-assign affected work items to a valid target iteration path",
          "C) Azure DevOps crashes",
          "D) Work items switch to year 1990"
        ],
        "ans": "B",
        "rat": "Azure DevOps prevents orphan data by requiring re-assignment of work items before confirming iteration path deletion."
      }
    ]
  },
  "ch15": {
    "summary": [
      "Azure Pipelines YAML CI/CD integration automates build, test, and release gates directly linked to Azure Boards Work Items.",
      "Branch policies and Pull Request governance enforce mandatory code reviews, automated status checks, and work item linking before merging.",
      "Developer Experience (DevEx) metrics combine pipeline duration, deployment frequency, and PR lead time to eliminate friction."
    ],
    "quiz": [
      {
        "q": "Which YAML keyword in an Azure DevOps Pipeline definition creates a mandatory manual approval gate before deploying to Production?",
        "opts": [
          "A) `trigger: manual`",
          "B) `environment: Production` linked to a pipeline Environment with configured Approvals and Checks",
          "C) `script: pause`",
          "D) `lock: true`"
        ],
        "ans": "B",
        "rat": "Pipeline Environments allow security admins to enforce pre-deployment checks, manual approvals, and branch policies before stage execution."
      },
      {
        "q": "How does enforcing 'Work Item Linking' in Azure Repos branch policies improve compliance?",
        "opts": [
          "A) It speeds up C++ compilation",
          "B) It blocks Pull Request merges unless the PR is explicitly linked to an active Azure Boards Work Item, establishing traceability",
          "C) It deletes unlinked branches automatically",
          "D) It sends an SMS to the Scrum Master"
        ],
        "ans": "B",
        "rat": "Work item linking policies guarantee that no code enters the main branch without traceability to an approved backlog requirement."
      },
      {
        "q": "What metric measures the total duration from when a developer opens a Pull Request to when it is successfully merged into main?",
        "opts": [
          "A) Velocity",
          "B) Pull Request Lead Time (or PR Cycle Time)",
          "C) Code Coverage Percentage",
          "D) Sprint Burndown"
        ],
        "ans": "B",
        "rat": "PR Lead Time measures code review and validation friction, key components of Developer Experience and DORA metrics."
      },
      {
        "q": "What is the advantage of using Multi-Stage YAML Pipelines over legacy Classic Release Pipelines in ADO?",
        "opts": [
          "A) YAML pipelines can be version-controlled, code-reviewed, and stored directly alongside application source code in Git",
          "B) Classic pipelines are faster",
          "C) YAML pipelines require no YAML knowledge",
          "D) Classic pipelines are mandatory in 2026"
        ],
        "ans": "A",
        "rat": "Pipeline-as-Code (YAML) allows pipeline infrastructure to evolve, branch, and revert alongside application code in repository control."
      },
      {
        "q": "In Azure Pipelines, what is the function of a 'Service Connection'?",
        "opts": [
          "A) To connect two developers over phone",
          "B) To securely store service principal credentials or tokens for external deployments (e.g., AWS, Azure, Docker Registry)",
          "C) To test Wi-Fi speed",
          "D) To format YAML code"
        ],
        "ans": "B",
        "rat": "Service Connections manage secure, role-based access credentials for external infrastructure targets without exposing secrets in YAML."
      },
      {
        "q": "What metric measures how often code deployments to Production occur successfully within a given time period?",
        "opts": [
          "A) Deployment Frequency (DORA metric)",
          "B) Change Failure Rate",
          "C) Lead Time for Changes",
          "D) Mean Time to Recovery"
        ],
        "ans": "A",
        "rat": "Deployment Frequency tracks delivery cadence and release automation maturity as a core DORA engineering metric."
      }
    ]
  },
  "ch16": {
    "summary": [
      "Dual-stack Jira and Azure DevOps coexistence requires robust bi-directional sync architectures (Exalate, OpsHub, custom Webhooks).",
      "Mapping data models between Jira Issues (Types, Fields, Workflow States) and Azure DevOps WITs demands standardized schema translation.",
      "Migration execution strategies (Big Bang vs. Phased Value Stream Migration) depend on organizational risk tolerance and system coupling."
    ],
    "quiz": [
      {
        "q": "When integrating Jira (used by Product) with Azure DevOps (used by Engineering), what is the primary challenge in bi-directional field mapping?",
        "opts": [
          "A) Jira uses SQL, ADO uses HTML",
          "B) Asynchronous status loops and state machine mismatch (e.g., Jira 'In Progress' vs ADO 'Active' causing infinite update loops)",
          "C) Both tools use identical IDs",
          "D) Ethernet cables are incompatible"
        ],
        "ans": "B",
        "rat": "Bi-directional sync engines must implement loop detection and status mapping logic to prevent recursive event firing between systems."
      },
      {
        "q": "Which migration strategy minimizes enterprise operational risk when transitioning 2,000 users from Jira to Azure DevOps?",
        "opts": [
          "A) Big Bang cutover over a holiday weekend without backups",
          "B) Phased Value Stream Migration, moving independent business units value stream by value stream",
          "C) Operating both tools forever without data sync",
          "D) Deleting all historical data"
        ],
        "ans": "B",
        "rat": "Phased Value Stream migration isolates risk, allows operational learning, and ensures business continuity during tool transition."
      },
      {
        "q": "In an Exalate Groovy integration script between Jira and ADO, what is the role of the `replica` object?",
        "opts": [
          "A) It holds the local database password",
          "B) It acts as an intermediate payload data bridge containing the fields being exported to the remote system",
          "C) It deletes remote work items",
          "D) It converts text to PDF"
        ],
        "ans": "B",
        "rat": "The `replica` object decouples source and target schemas by acting as a payload buffer during bi-directional synchronization."
      },
      {
        "q": "What is the key metric for verifying data integrity after a dual-stack migration?",
        "opts": [
          "A) Total file size of text logs",
          "B) 100% field, attachment, comment, and link reconciliation check between source and target work item counts",
          "C) Number of emails sent during migration",
          "D) CPU temperature"
        ],
        "ans": "B",
        "rat": "Reconciliation scripts validate that issue counts, relationship hierarchies, comments, and attachments match perfectly post-migration."
      },
      {
        "q": "When maintaining dual-stack coexistence, how should user account identity be reconciled between Jira and Azure DevOps?",
        "opts": [
          "A) By matching unique corporate email addresses across identity providers (Atlassian Access AAID <-> Entra ID UPN)",
          "B) By using first names only",
          "C) Accounts cannot be reconciled",
          "D) By assigning all items to 'Admin'"
        ],
        "ans": "A",
        "rat": "Mapping federated Entra ID (Azure AD) UPNs to Atlassian Account IDs ensures clear identity ownership across systems."
      },
      {
        "q": "What is a 'Phased Coexistence Cutover'?",
        "opts": [
          "A) Migrating one value stream at a time while syncing shared portfolio epics via integration middleware until all teams transition",
          "B) Deleting Jira immediately",
          "C) Running both tools without communication",
          "D) Forcing all teams to switch in 1 hour"
        ],
        "ans": "A",
        "rat": "Phased cutovers reduce organizational risk by maintaining inter-system synchronization while squads migrate incrementally."
      }
    ]
  },
  "ch17": {
    "summary": [
      "Generative AI and Large Language Models (LLMs) process textual context via high-dimensional vector embeddings and transformer attention mechanisms.",
      "Retrieval-Augmented Generation (RAG) grounds LLM outputs by injecting enterprise Jira/ADO knowledge into the prompt context window.",
      "Vector databases (pgvector, Pinecone, Qdrant) calculate cosine similarity to retrieve relevant backlog context in real-time."
    ],
    "quiz": [
      {
        "q": "What is the primary role of Retrieval-Augmented Generation (RAG) in an enterprise AI Agile coaching assistant?",
        "opts": [
          "A) To replace the Jira web server",
          "B) To retrieve relevant external enterprise documents/tickets and ground LLM answers, preventing hallucination",
          "C) To generate random story points",
          "D) To translate text to binary"
        ],
        "ans": "B",
        "rat": "RAG retrieves specific context from enterprise knowledge bases and feeds it into the LLM prompt, ensuring factual, grounded answers."
      },
      {
        "q": "Which mathematical metric measures the semantic similarity between two backlog item text embeddings in vector space?",
        "opts": [
          "A) Fibonacci sequence",
          "B) Cosine Similarity (or Dot Product)",
          "C) Standard Deviation",
          "D) Linear regression slope"
        ],
        "ans": "B",
        "rat": "Cosine similarity measures the angle between two embedding vectors, identifying semantically similar issues regardless of exact wording."
      },
      {
        "q": "Why are high-dimensional vector embeddings superior to keyword searches for finding duplicate user stories?",
        "opts": [
          "A) Embeddings capture conceptual and semantic meaning rather than relying on exact word matches",
          "B) Embeddings use less disk space",
          "C) Keyword search requires Linux",
          "D) Embeddings disable security permissions"
        ],
        "ans": "A",
        "rat": "Embeddings map semantic intent, allowing AI to match 'Login Failure' with 'Cannot Sign In' even with zero keyword overlap."
      },
      {
        "q": "What occurs during LLM 'Tokenization'?",
        "opts": [
          "A) Raw input text is split into numeric sub-word units (tokens) that the transformer neural network processes",
          "B) Tickets are assigned to users",
          "C) Data is saved to PostgreSQL",
          "D) Files are compressed into zip format"
        ],
        "ans": "A",
        "rat": "Tokenization converts character strings into token IDs, the numerical input representation required by LLM transformer models."
      },
      {
        "q": "In Vector Databases (e.g., pgvector, Qdrant), what is an 'HNSW Index'?",
        "opts": [
          "A) Hierarchical Navigable Small World index, an algorithm that enables ultra-fast approximate nearest neighbor (ANN) vector searches",
          "B) A type of hard drive format",
          "C) A Java class name",
          "D) A security certificate"
        ],
        "ans": "A",
        "rat": "HNSW indexes structure vector space for sub-millisecond similarity queries across millions of high-dimensional embeddings."
      },
      {
        "q": "What is 'Context Window Exhaustion' in Large Language Models?",
        "opts": [
          "A) When the input prompt plus historical conversation exceeds the maximum token limit of the model architecture",
          "B) When the computer monitor turns off",
          "C) When the model runs out of internet",
          "D) When the LLM forgets English"
        ],
        "ans": "A",
        "rat": "Exceeding the context window limit truncates earlier conversation tokens or causes API request rejection."
      }
    ]
  },
  "ch18": {
    "summary": [
      "Prompt engineering taxonomy includes Chain-of-Thought (CoT), Few-Shot, System Prompts, and Socratic Inquiry pipelines.",
      "Structuring system prompts with explicit roles, domain constraints, output schemas (JSON/Markdown), and guardrails prevents model drift.",
      "Socratic prompting guides Scrum Masters and Product Owners through reflective problem-solving rather than returning superficial answers."
    ],
    "quiz": [
      {
        "q": "Which prompt engineering technique forces an LLM to display step-by-step reasoning before outputting a final recommendation?",
        "opts": [
          "A) Zero-shot prompting",
          "B) Chain-of-Thought (CoT) prompting",
          "C) Random sampling",
          "D) Temperature maxing"
        ],
        "ans": "B",
        "rat": "Chain-of-Thought prompting directs the model to break down complex logic into explicit intermediate reasoning steps."
      },
      {
        "q": "An Agile Coach wants an LLM to analyze user stories and output ONLY valid JSON matching a specific schema. What should be included in the system prompt?",
        "opts": [
          "A) A polite thank-you message",
          "B) Explicit JSON schema definition, negative constraints ('Output ONLY JSON'), and temperature set to 0.0",
          "C) Asking the LLM to write a poem",
          "D) Setting max tokens to 5"
        ],
        "ans": "B",
        "rat": "Enforcing deterministic JSON requires schema templates, negative constraints, and zero temperature for low variance."
      },
      {
        "q": "What is the 'Few-Shot' prompting technique?",
        "opts": [
          "A) Providing 2-3 high-quality input/output examples within the prompt to guide the model's response format and reasoning style",
          "B) Running the prompt 3 times in a row",
          "C) Asking 5 different people for help",
          "D) Using 1-word prompts"
        ],
        "ans": "A",
        "rat": "Few-shot prompting provides concrete exemplary pairs within the context window, dramatically improving output accuracy."
      },
      {
        "q": "How does Socratic Prompting improve leadership coaching outcomes?",
        "opts": [
          "A) It forces the LLM to agree with everything the user says",
          "B) It instructs the LLM to ask probing, reflective questions rather than providing immediate direct solutions",
          "C) It deletes all sprint backlog items",
          "D) It generates automatic code commits"
        ],
        "ans": "B",
        "rat": "Socratic prompting configures the AI to act as a reflective sounding board, encouraging leaders to analyze root causes independently."
      },
      {
        "q": "What is 'Temperature' tuning in LLM prompt configuration?",
        "opts": [
          "A) Adjusting the physical CPU heat",
          "B) Controlling the randomness of token prediction: 0.0 for deterministic factual responses, higher (0.7-1.0) for creative brainstorming",
          "C) Setting the response length",
          "D) Tuning network latency"
        ],
        "ans": "B",
        "rat": "Temperature modulates the probability distribution of generated tokens, balancing creativity and strict determinism."
      },
      {
        "q": "How does 'System Message' priority affect LLM compliance with safety guardrails?",
        "opts": [
          "A) System messages set foundational behavioral constraints that override conflicting user prompt instructions",
          "B) System messages are ignored by LLMs",
          "C) System messages are only seen by admins",
          "D) System messages slow down LLMs"
        ],
        "ans": "A",
        "rat": "System messages establish root operational framing and security boundaries that govern subsequent conversational turns."
      }
    ]
  },
  "ch19": {
    "summary": [
      "Agentic AI operates on the ReAct (Reason + Act) paradigm, enabling autonomous LLMs to plan, call external APIs, and evaluate results dynamically.",
      "Autonomous Agile Facilitator agents can inspect Jira backlogs, run statistical flow analysis, and generate retrospective themes without human intervention.",
      "Human-in-the-Loop (HITL) guardrails ensure critical decisions (story deletion, sprint commitment, pipeline triggers) require explicit human approval."
    ],
    "quiz": [
      {
        "q": "What is the core execution loop of a ReAct (Reason + Act) AI Agent?",
        "opts": [
          "A) Thought -> Action -> Observation -> Repeat",
          "B) Write -> Read -> Delete",
          "C) Start -> Stop -> Exit",
          "D) Compile -> Link -> Run"
        ],
        "ans": "A",
        "rat": "ReAct agents iteratively generate a reasoning Thought, select/execute a tool Action, evaluate the system Observation, and continue."
      },
      {
        "q": "Why are Human-in-the-Loop (HITL) guardrails essential in autonomous AI Agile agents?",
        "opts": [
          "A) AI agents run too slowly",
          "B) To prevent destructive or irreversible operations (e.g., deleting Jira projects, deploying unverified code) without human authorization",
          "C) HITL is required by Microsoft Word",
          "D) AI agents cannot use tools"
        ],
        "ans": "B",
        "rat": "HITL introduces approval checkpoints for high-risk agent actions, balancing autonomy with enterprise safety."
      },
      {
        "q": "An AI agent attempts to fetch backlog items, but the Jira API returns a 401 Unauthorized error. How should a robust ReAct agent respond?",
        "opts": [
          "A) Crash the application immediately",
          "B) Observe the error, reason about the auth failure, and notify the user or request updated credentials",
          "C) Ignore the error and pretend it succeeded",
          "D) Delete the repository"
        ],
        "ans": "B",
        "rat": "Autonomous agents process error observations dynamically, attempting recovery strategies or escalating gracefully."
      },
      {
        "q": "What distinguishes an Agentic AI workflow from a traditional fixed automation script?",
        "opts": [
          "A) Fixed scripts follow hardcoded IF/THEN paths; Agentic AI dynamically determines tool calls and execution steps based on context",
          "B) Agentic AI runs on paper",
          "C) Fixed scripts require LLMs",
          "D) There is no difference"
        ],
        "ans": "A",
        "rat": "Agentic AI reasons about dynamic goals and selects appropriate tools conditionally, unlike deterministic hardcoded scripts."
      },
      {
        "q": "What is 'Tool Use' (or Function Calling) in LLM Agent architectures?",
        "opts": [
          "A) Allowing the LLM to output structured parameters to execute pre-defined external APIs (e.g., Jira query, DB lookup)",
          "B) Giving the LLM a physical keyboard",
          "C) Allowing the LLM to rewrite its own source code",
          "D) Using Excel macros"
        ],
        "ans": "A",
        "rat": "Function calling enables LLMs to interface with external software tools dynamically by emitting structured execution payloads."
      },
      {
        "q": "In multi-agent architectures, what is the role of an 'Orchestrator Agent'?",
        "opts": [
          "A) To decompose complex goals, delegate sub-tasks to specialized sub-agents, and aggregate their outputs into a cohesive final result",
          "B) To play background music",
          "C) To format text in bold",
          "D) To back up local files"
        ],
        "ans": "A",
        "rat": "Orchestrator agents manage task decomposition, agent routing, state synchronization, and final response synthesis."
      }
    ]
  },
  "ch20": {
    "summary": [
      "Enterprise AI governance requires mandatory PII/PHI scrubbing, data leakage prevention, and zero data retention policies with LLM vendors.",
      "Model bias and algorithmic fairness must be monitored to ensure team performance evaluations are not skewed by flawed metric prompts.",
      "Establishing an Enterprise AI Acceptable Use Policy balances developer productivity gains with intellectual property and security risk management."
    ],
    "quiz": [
      {
        "q": "Why should enterprise technology organizations prohibit submitting raw source code or customer PII to public, un-gated LLM APIs?",
        "opts": [
          "A) It slows down the internet connection",
          "B) Public APIs may retain, log, or train future public models on sensitive corporate IP and private customer data",
          "C) Public APIs do not support text",
          "D) It violates HTML standards"
        ],
        "ans": "B",
        "rat": "Un-gated public LLM endpoints risk exposing confidential trade secrets and violating regulatory privacy laws (GDPR/HIPAA)."
      },
      {
        "q": "What technique dynamically redacts employee names, email addresses, and API keys before sending prompts to an LLM?",
        "opts": [
          "A) Direct database query",
          "B) Automated PII/PHI Sanitization Filter (using regex/NER masking)",
          "C) Manual text deleting",
          "D) Base64 encoding"
        ],
        "ans": "B",
        "rat": "Automated sanitization filters replace sensitive PII entities with anonymous placeholders (e.g., `[USER_1]`) prior to API transmission."
      },
      {
        "q": "How can an Enterprise AI Governance Board prevent algorithmic bias in AI-driven performance analytics?",
        "opts": [
          "A) By banning all software tools",
          "B) By auditing prompt criteria, excluding subjective sentiment prompts from HR evaluations, and relying on objective telemetry",
          "C) By allowing AI to fire low-performing employees",
          "D) By hiding all metrics from developers"
        ],
        "ans": "B",
        "rat": "Ethical AI governance mandates auditing evaluation algorithms and barring subjective or biased prompts from HR decision pipelines."
      },
      {
        "q": "What is the primary objective of an Enterprise AI Acceptable Use Policy?",
        "opts": [
          "A) To prevent employees from using computers",
          "B) To define clear operational guardrails, security standards, approved tools, and legal compliance boundaries for AI usage",
          "C) To increase software licensing costs",
          "D) To require manual handwriting"
        ],
        "ans": "B",
        "rat": "An Acceptable Use Policy provides clear governance frameworks so teams can leverage AI safely within legal and security boundaries."
      },
      {
        "q": "What is 'Model Hallucination' in generative AI systems?",
        "opts": [
          "A) When an LLM generates plausible-sounding but factually incorrect or completely fabricated information with high confidence",
          "B) When the model displays colorful graphics",
          "C) When the server reboots",
          "D) When the user inputs incorrect code"
        ],
        "ans": "A",
        "rat": "Hallucination occurs when an LLM generates false assertions unsupported by training data or provided context."
      },
      {
        "q": "How can enterprise AI architecture enforce 'Data Sovereignty'?",
        "opts": [
          "A) By hosting LLM infrastructure within regional cloud boundaries and guaranteeing zero cross-border data transit",
          "B) By disabling data encryption",
          "C) By storing data on public websites",
          "D) Data sovereignty is impossible with AI"
        ],
        "ans": "A",
        "rat": "Data sovereignty guarantees that AI model hosting, prompt data, and embeddings remain strictly within specified legal jurisdictions."
      }
    ]
  },
  "ch21": {
    "summary": [
      "AI-powered backlog engineering transforms vague business ideas into INVEST-compliant User Stories with automated BDD (Given/When/Then) acceptance criteria.",
      "LLM-driven story splitting patterns (by workflow step, business rule, data variation) break massive Epics into thin vertical slices.",
      "Automated ambiguity detection identifies missing edge cases and security requirements before backlog items enter sprint planning."
    ],
    "quiz": [
      {
        "q": "An AI agent reviews a user story: 'As a user, I want a fast login page so that I am happy.' What critique will the AI INVEST validator generate?",
        "opts": [
          "A) Story is perfect",
          "B) Story violates Testable and Measurable criteria ('fast' and 'happy' are subjective and non-quantifiable)",
          "C) Story is too long",
          "D) Story needs more story points"
        ],
        "ans": "B",
        "rat": "INVEST criteria require stories to be Testable; vague descriptors like 'fast' or 'happy' must be replaced with concrete SLAs."
      },
      {
        "q": "Which Behavior-Driven Development (BDD) syntax format should an AI agent generate for acceptance criteria?",
        "opts": [
          "A) IF / THEN / ELSE",
          "B) GIVEN [initial context] WHEN [event occurs] THEN [expected outcome]",
          "C) SELECT / FROM / WHERE",
          "D) INPUT / PROCESS / OUTPUT"
        ],
        "ans": "B",
        "rat": "GIVEN/WHEN/THEN is the industry-standard BDD Cucumber syntax for executable, testable acceptance criteria."
      },
      {
        "q": "How does AI assist Product Owners in vertical story splitting?",
        "opts": [
          "A) By deleting half the requirements",
          "B) By analyzing complex stories and identifying natural slicing boundaries (e.g., spike vs MVP, happy path vs error handling)",
          "C) By converting stories to PDF",
          "D) By assigning all stories to one developer"
        ],
        "ans": "B",
        "rat": "AI story-splitting patterns analyze multi-faceted stories and propose thin, valuable vertical slices that deliver end-to-end functionality."
      },
      {
        "q": "What is the benefit of running AI Ambiguity Detection on backlog items prior to Sprint Refinement?",
        "opts": [
          "A) Reduces refinement meeting duration by flagging missing edge cases, security requirements, and API contracts in advance",
          "B) Eliminates the need for developers",
          "C) Automatically estimates items in exact hours",
          "D) Closes all open bugs"
        ],
        "ans": "A",
        "rat": "Pre-refinement AI scans catch hidden assumptions and gaps early, dramatically improving sprint readiness and meeting efficiency."
      },
      {
        "q": "How does AI-driven Acceptance Criteria Generation improve QA test automation readiness?",
        "opts": [
          "A) By outputting structured Given/When/Then scenarios that can be directly converted into Playwright or Cucumber automated test scripts",
          "B) By deleting manual tests",
          "C) By writing bug reports automatically",
          "D) By disabling test pipelines"
        ],
        "ans": "A",
        "rat": "BDD-formatted acceptance criteria map directly into automated test frameworks, bridging refinement and test automation."
      },
      {
        "q": "What is 'Story Slicing by Business Rule Variation'?",
        "opts": [
          "A) Decomposing a complex story into smaller stories based on distinct business logic branches (e.g., domestic vs international shipping)",
          "B) Slicing user stories in half physically",
          "C) Estimating stories in half points",
          "D) Deleting complex rules"
        ],
        "ans": "A",
        "rat": "Splitting by business rule isolates core logic paths, enabling incremental delivery of minimal viable functional slices."
      }
    ]
  },
  "ch22": {
    "summary": [
      "AI facilitation tools analyze sprint telemetry, Slack/Teams sentiment, and standup blockers to highlight emerging team friction in real-time.",
      "Automated retrospective theme clustering groups disparate team feedback into actionable root-cause categories using semantic embeddings.",
      "Real-Time Sentiment Radars monitor team psychological safety and burnout indicators without intrusive manual surveys."
    ],
    "quiz": [
      {
        "q": "During a 2-week sprint, an AI sentiment radar detects a sharp rise in negative sentiment tokens in code review comments. What action should the Scrum Master take?",
        "opts": [
          "A) Ignore the signal",
          "B) Facilitate a focused Socratic retrospective check-in on PR review norms and team psychological safety",
          "C) Reprimand the entire team",
          "D) Cancel code reviews"
        ],
        "ans": "B",
        "rat": "Early sentiment warnings allow coaches to address emerging team friction and psychological safety concerns proactively."
      },
      {
        "q": "How does AI semantic clustering improve Retrospective effectiveness for a 50-person department?",
        "opts": [
          "A) By deleting duplicate cards and grouping similar feedback items into high-level thematic clusters automatically",
          "B) By picking the retrospective leader randomly",
          "C) By forcing everyone to agree",
          "D) By extending the meeting to 4 hours"
        ],
        "ans": "A",
        "rat": "Semantic clustering uses NLP to consolidate dozens of retro notes into core actionable themes, saving time and revealing patterns."
      },
      {
        "q": "An AI Daily Standup Assistant analyzes squad updates and flags that 3 developers have been blocked by the same database migration for 3 days. What is this signature?",
        "opts": [
          "A) High throughput",
          "B) Systemic impediment requiring immediate swarm coaching or technical intervention",
          "C) Perfect sprint execution",
          "D) Scope creep"
        ],
        "ans": "B",
        "rat": "Persistent multi-developer blockers indicate a critical impediment that demands immediate facilitation or technical escalation."
      },
      {
        "q": "Why should AI sprint facilitation tools focus on team-level telemetry rather than individual developer monitoring?",
        "opts": [
          "A) Individual monitoring destroys trust, damages psychological safety, and encourages metric gaming",
          "B) AI cannot process individual names",
          "C) Individual data is too small",
          "D) Team metrics are cheaper"
        ],
        "ans": "A",
        "rat": "Agile principles emphasize team accountability; tracking individual surveillance metrics undermines trust and collaboration."
      },
      {
        "q": "How can an AI Assistant help a Scrum Master conduct a 'Sprint Retrospective Root-Cause Analysis'?",
        "opts": [
          "A) By automatically generating 5-Whys diagnostic trees based on retrospective feedback comments and production incident logs",
          "B) By deciding who gets a raise",
          "C) By cancelling the sprint retro",
          "D) By assigning blame to individual engineers"
        ],
        "ans": "A",
        "rat": "AI root-cause synthesis organizes subjective feedback into structured 5-Whys or Fishbone diagrams to isolate systemic process flaws."
      },
      {
        "q": "What is the ethical boundary regarding AI sentiment analysis during daily standups?",
        "opts": [
          "A) Sentiment data must be aggregated at the team level and anonymized to protect individual psychological safety",
          "B) Sentiment data should be posted on public bulletin boards",
          "C) Individual sentiment scores should determine bonuses",
          "D) Sentiment tracking is strictly illegal"
        ],
        "ans": "A",
        "rat": "Ethical AI facilitation mandates team-level aggregation and strict privacy protection to prevent workplace surveillance anti-patterns."
      }
    ]
  },
  "ch23": {
    "summary": [
      "Monte Carlo simulations utilize historical throughput distributions to calculate probabilistic completion dates (e.g., 85% confidence level).",
      "Weibull distribution modeling accurately fits heavy-tailed software lead time datasets better than simplistic Gaussian normal distributions.",
      "Predictive velocity forecasting prevents over-commitment during sprint planning by accounting for historical capacity variance and holidays."
    ],
    "quiz": [
      {
        "q": "Why are Monte Carlo probabilistic forecasts superior to single-point deterministic estimates (e.g., 'We will finish on Oct 15')?",
        "opts": [
          "A) Deterministic estimates ignore uncertainty; Monte Carlo models thousands of simulations to yield probabilistic confidence bands (e.g., '85% chance by Oct 15')",
          "B) Monte Carlo requires no data",
          "C) Single-point estimates are always wrong by 100 days",
          "D) Monte Carlo is easier to calculate by hand"
        ],
        "ans": "A",
        "rat": "Probabilistic forecasting provides realistic risk-adjusted completion date ranges based on actual historical performance variability."
      },
      {
        "q": "A technology director asks: 'When will these 50 features be done with 85% certainty?' How does a coach answer using Monte Carlo telemetry?",
        "opts": [
          "A) Pick a random date in 3 months",
          "B) Run 10,000 Monte Carlo trials against squad historical throughput and select the 85th percentile completion date",
          "C) Ask the lead developer for a guess",
          "D) Multiply story points by 2"
        ],
        "ans": "B",
        "rat": "Running 10,000 simulation iterations against real throughput samples yields the precise 85th percentile statistical completion target."
      },
      {
        "q": "Why is assuming a 'Normal Gaussian Bell Curve' for software lead times mathematically invalid?",
        "opts": [
          "A) Lead time distributions are right-skewed and heavy-tailed (Weibull/Lognormal) due to blocking and queueing delays",
          "B) Software has no lead times",
          "C) Normal distributions are for physics only",
          "D) Lead time is always constant"
        ],
        "ans": "A",
        "rat": "Software delivery data has a hard lower bound and long right tail (outliers caused by blockages), making normal distribution math misleading."
      },
      {
        "q": "How does predictive AI velocity forecasting assist in Sprint Planning?",
        "opts": [
          "A) It dictates exact assignments to developers",
          "B) It analyzes upcoming capacity, holiday calendars, and historical throughput variance to recommend a safe sprint commitment range",
          "C) It doubles the team's commitment",
          "D) It eliminates Sprint Planning entirely"
        ],
        "ans": "B",
        "rat": "Predictive forecasting incorporates capacity variables and past variance to protect squads from systemic over-commitment."
      },
      {
        "q": "What is the '85th Percentile Lead Time' metric used for in SLA commitments?",
        "opts": [
          "A) It indicates that 85% of all historical work items completed in that duration or less, establishing a reliable delivery SLA",
          "B) It means 85% of items fail",
          "C) It is the average lead time plus 85 days",
          "D) It is an estimate made by management"
        ],
        "ans": "A",
        "rat": "The 85th percentile metric provides a statistically rigorous completion SLA that accounts for common operational variability."
      },
      {
        "q": "How does high Work-in-Progress (WIP) impact lead time tail risk in software delivery?",
        "opts": [
          "A) Expanding WIP increases queuing delay exponentially, producing fat-tailed distributions with extreme delivery delays",
          "B) High WIP speeds up lead times",
          "C) High WIP eliminates queue risk",
          "D) WIP has no mathematical impact on lead time"
        ],
        "ans": "A",
        "rat": "Queuing theory demonstrates that high WIP saturates system capacity, causing exponential lead time growth and unpredictable delays."
      }
    ]
  },
  "ch24": {
    "summary": [
      "Model Context Protocol (MCP) establishes a standardized architectural specification for connecting AI models to external tools, resources, and prompts.",
      "Custom MCP Servers written in Python or TypeScript expose enterprise APIs (Jira REST, Azure DevOps, Git) as clean tool definitions to LLM client applications.",
      "Building custom AI coaching agents enables tailored enterprise automation while maintaining strict security, authentication, and execution boundaries."
    ],
    "quiz": [
      {
        "q": "What is the primary architectural purpose of the Model Context Protocol (MCP)?",
        "opts": [
          "A) To replace the HTTP protocol",
          "B) To provide an open standard for securely connecting AI models to local/remote data sources, tools, and context providers",
          "C) To format Markdown text",
          "D) To build database hardware"
        ],
        "ans": "B",
        "rat": "MCP standardizes how applications expose tools, resources, and prompts to LLM client interfaces like Antigravity or Claude Desktop."
      },
      {
        "q": "In an MCP Server implementation, what three core primitives can be exposed to an AI client?",
        "opts": [
          "A) HTML, CSS, JavaScript",
          "B) Tools (executable functions), Resources (readable data), and Prompts (reusable templates)",
          "C) Tables, Columns, Rows",
          "D) Users, Passwords, Tokens"
        ],
        "ans": "B",
        "rat": "The MCP specification is structured around three primitives: Tools for action, Resources for data access, and Prompts for workflow templates."
      },
      {
        "q": "A custom Python MCP Server exposes a tool `search_jira_issues(jql_query)`. How does an LLM client execute this tool?",
        "opts": [
          "A) By guessing the SQL query",
          "B) The LLM outputs a JSON tool call matching the tool schema, which the MCP client routes to the server function for execution",
          "C) By opening a web browser manually",
          "D) By restarting the server"
        ],
        "ans": "B",
        "rat": "LLMs generate structured JSON invocations matching the exposed tool parameters; the MCP host executes the function and returns the result."
      },
      {
        "q": "Why is building custom in-house MCP servers preferred over using generic third-party plugins in enterprise environments?",
        "opts": [
          "A) In-house MCP servers keep authentication, corporate security guardrails, and proprietary API logic strictly within the enterprise network",
          "B) Custom servers require no code",
          "C) Generic plugins are illegal",
          "D) MCP servers run without electricity"
        ],
        "ans": "A",
        "rat": "Custom MCP servers ensure enterprise data governance, custom security tokens, and internal API schemas remain strictly under enterprise control."
      },
      {
        "q": "In Model Context Protocol (MCP), how does a 'Resource' differ from a 'Tool'?",
        "opts": [
          "A) Resources are read-only data streams (like log files or issue details); Tools are executable actions that perform operations (like updating a ticket)",
          "B) Resources require C++; Tools require Python",
          "C) Resources are paid; Tools are free",
          "D) There is no difference"
        ],
        "ans": "A",
        "rat": "MCP Resources provide context passive inspection, while MCP Tools expose side-effecting operations and executable functions."
      },
      {
        "q": "What security mechanism should an enterprise MCP Server implement to prevent unauthorized tool execution?",
        "opts": [
          "A) Granular OAuth 2.0 scope validation, personal access token verification, and input parameter sanitization",
          "B) Storing passwords in plain text",
          "C) Disabling firewall rules",
          "D) Allowing all incoming traffic"
        ],
        "ans": "A",
        "rat": "Enterprise MCP servers enforce strict token authentication, permission scoping, and schema validation before executing actions."
      }
    ]
  },
  "appA": {
    "summary": [
      "Appendix A provides over 105 production-tested prompts categorized across Agile Coaching, Backlog Engineering, Scrum Master, and Executive Leadership domains.",
      "Every prompt follows the structured Prompt Taxonomy: Role, Context, Task, Input Schema, Output Schema, and Operational Guardrails.",
      "Contextual prompt tuning adapts baseline prompt templates to specific organizational governance standards and enterprise tooling constraints."
    ],
    "quiz": [
      {
        "q": "What is the structural role of the 'Guardrails' section in an enterprise system prompt template?",
        "opts": [
          "A) To slow down API response speed",
          "B) To define explicit negative constraints (e.g., 'Do NOT invent story points', 'Do NOT include PII') that prevent model drift and policy violations",
          "C) To format text as bold",
          "D) Guardrails are optional comments"
        ],
        "ans": "B",
        "rat": "Guardrails set firm operational boundaries, preventing the LLM from hallucinating, leaking PII, or violating domain policies."
      },
      {
        "q": "When deploying an Appendix A prompt for 'Automated Acceptance Criteria Generation', why is specifying an Output Schema mandatory?",
        "opts": [
          "A) To ensure the generated output can be parsed programmatically or pasted directly into Jira/ADO without manual reformatting",
          "B) To make the prompt longer",
          "C) To test the CPU speed",
          "D) Output schemas are not supported"
        ],
        "ans": "A",
        "rat": "Defining an output schema guarantees structured, consistent formatting (e.g., Markdown/JSON) ready for enterprise integration."
      },
      {
        "q": "How should an Agile Coach customize a generic prompt template from Appendix A for a specific engineering division?",
        "opts": [
          "A) Inject division-specific terminology, technical stack context, definition of done rules, and team agreement guardrails",
          "B) Delete all instructions and write 1 sentence",
          "C) Change the font size",
          "D) Prompts should never be customized"
        ],
        "ans": "A",
        "rat": "Contextual prompt tuning tailors generic templates to local domain practices, terminology, and compliance requirements."
      },
      {
        "q": "Which category of prompts in Appendix A assists Scrum Masters during Sprint Retrospectives?",
        "opts": [
          "A) Database backup prompts",
          "B) Retrospective Theme Clustering, Root-Cause Fishbone Prompts, and Action Item Generator Prompts",
          "C) Payroll calculation prompts",
          "D) C++ compiler prompts"
        ],
        "ans": "B",
        "rat": "Appendix A retro prompts focus on NLP theme grouping, root-cause analysis, and translating discussion into SMART action items."
      },
      {
        "q": "What is the purpose of 'Negative Prompting' in enterprise prompt templates?",
        "opts": [
          "A) To instruct the model explicitly on what behaviors, terms, or formats to avoid (e.g., 'Do NOT use jargon', 'Do NOT output markdown code blocks')",
          "B) To make the prompt sound negative",
          "C) To cause errors on purpose",
          "D) Negative prompting is unsupported"
        ],
        "ans": "A",
        "rat": "Negative constraints suppress undesired model behaviors, reducing formatting errors and hallucination risks."
      },
      {
        "q": "How do 'Role-Based System Prompts' improve LLM response quality?",
        "opts": [
          "A) By establishing specific domain persona framing (e.g., 'You are an Enterprise Agile Coach expert in SAFe 6.0 and Flow Engineering')",
          "B) By changing the username",
          "C) By requiring login passwords",
          "D) System prompts have no effect"
        ],
        "ans": "A",
        "rat": "Persona framing primes the LLM's latent representation space, tailoring vocabulary and reasoning patterns to the domain."
      }
    ]
  },
  "appB": {
    "summary": [
      "Appendix B provides a complete syntax reference and 50 cross-platform query templates translating between Jira JQL, Azure DevOps WIQL, and Assets AQL.",
      "Translating query patterns between Atlassian and Microsoft ecosystems requires mapping corresponding relational operators and temporal functions.",
      "Optimizing query performance prevents long-running database locks and speeds up dashboard widget rendering across enterprise portals."
    ],
    "quiz": [
      {
        "q": "Which Azure DevOps WIQL clause is equivalent to the Jira JQL clause `status WAS IN ('In Progress') DURING ('2026-08-01', '2026-08-31')`?",
        "opts": [
          "A) `[System.State] = 'In Progress'`",
          "B) `[System.State] EVER 'In Progress' AND [System.ChangedDate] >= '2026-08-01' AND [System.ChangedDate] <= '2026-08-31'`",
          "C) `SELECT * FROM WorkItems`",
          "D) `WIQL has no history`"
        ],
        "ans": "B",
        "rat": "WIQL uses the `EVER` operator combined with `[System.ChangedDate]` ranges to query historical work item state transitions."
      },
      {
        "q": "What is the primary syntax difference between JQL and Asset Query Language (AQL)?",
        "opts": [
          "A) JQL queries issue records; AQL queries object instances and attribute relationships inside the JSM CMDB",
          "B) AQL only works in Excel",
          "C) JQL requires XML",
          "D) There is no difference"
        ],
        "ans": "A",
        "rat": "JQL operates on Jira issues, whereas AQL targets object schemas, attributes, and connected IT asset relationships."
      },
      {
        "q": "Why should wildcards at the beginning of search terms (e.g., `text ~ '* error'`) be avoided in enterprise JQL queries?",
        "opts": [
          "A) Leading wildcards force a full index scan across Lucene, causing severe search latency and CPU spikes",
          "B) Leading wildcards delete tickets",
          "C) JQL does not support text",
          "D) Leading wildcards require root access"
        ],
        "ans": "A",
        "rat": "Leading wildcards prevent index tree traversal, forcing inefficient full text scans across millions of indexed fields."
      },
      {
        "q": "How does WIQL handle parent-child hierarchy queries compared to JQL?",
        "opts": [
          "A) WIQL uses `WorkItemLinks` tree queries (`mode(Recursive)`), whereas JQL uses functions like `parent =` or `portfolioChildOf()`",
          "B) WIQL cannot query hierarchies",
          "C) JQL requires C# code",
          "D) Both use identical SQL syntax"
        ],
        "ans": "A",
        "rat": "WIQL structures hierarchy queries using explicit link type joins (`WorkItemLinks`), while JQL uses parent functions or Jira Plans extensions."
      },
      {
        "q": "In Jira JQL, what is the function of the `changed()` operator?",
        "opts": [
          "A) It searches for issues that underwent a specific field change, optionally filtered by user, date range, or state transition",
          "B) It changes the issue summary",
          "C) It deletes changed issues",
          "D) It renames custom fields"
        ],
        "ans": "A",
        "rat": "The `changed()` operator allows historical field modification searching for auditing state and assignment transitions."
      },
      {
        "q": "In Azure DevOps WIQL, how does `[System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory'` work?",
        "opts": [
          "A) It dynamically queries all work item types mapped to the Requirement category (e.g., User Story, PBI) in the project process",
          "B) It queries users in Microsoft",
          "C) It deletes requirement categories",
          "D) WIQL does not support groups"
        ],
        "ans": "A",
        "rat": "Category group queries abstract individual WIT names, allowing queries to work across different process templates."
      }
    ]
  },
  "appC": {
    "summary": [
      "Appendix C delivers a 35-criteria quantitative Agile & AI Maturity Assessment Checklist across 5 operational dimensions.",
      "Radar charting and maturity scoring rubrics (Level 1 Initial to Level 5 Optimized) provide an objective baseline for enterprise transformation roadmaps.",
      "Periodic quarterly diagnostic audits ensure organizational changes deliver measurable improvements in Flow Efficiency and Business Agility."
    ],
    "quiz": [
      {
        "q": "In the 35-criteria maturity assessment model, what characterizes an enterprise operating at 'Level 5: Optimized AI-Augmented Agility'?",
        "opts": [
          "A) No processes exist",
          "B) Continuous quantitative flow optimization, fully integrated agentic AI workflows, automated governance, and high Flow Efficiency (>40%)",
          "C) 100% manual paperwork",
          "D) Using story points for everything"
        ],
        "ans": "B",
        "rat": "Level 5 maturity represents continuous empirical optimization, self-healing automated workflows, and deeply embedded AI capabilities."
      },
      {
        "q": "How should an Enterprise Agile Coach utilize the Appendix C diagnostic scoring rubric during an initial transformation engagement?",
        "opts": [
          "A) To assign grades and punish low-scoring squads",
          "B) To establish an objective quantitative baseline across leadership, flow, tooling, and AI dimensions to prioritize target improvement initiatives",
          "C) To replace the company org chart",
          "D) To cancel all software projects"
        ],
        "ans": "B",
        "rat": "Diagnostic rubrics provide objective, data-backed baselines that highlight systemic gaps and guide transformation roadmap investments."
      },
      {
        "q": "What are the 5 core operational dimensions evaluated in the Appendix C Maturity Matrix?",
        "opts": [
          "A) Sales, Marketing, HR, Legal, Finance",
          "B) Enterprise Governance, Flow Engineering & Telemetry, Tooling Architecture (Jira/ADO), AI Augmentation & Automation, Culture & Psychological Safety",
          "C) Java, Python, C++, HTML, SQL",
          "D) SAFe, LeSS, Scrum, Kanban, XP"
        ],
        "ans": "B",
        "rat": "The 35 criteria span Governance, Flow Metrics, Tooling, AI Engineering, and Cultural Readiness for comprehensive evaluation."
      },
      {
        "q": "Why are quarterly re-assessments using the Appendix C matrix critical for transformation leads?",
        "opts": [
          "A) To verify progress trends, measure ROI on AI/Agile investments, and adjust coaching strategies based on empirical data changes",
          "B) To increase meeting count",
          "C) To change vendor contracts",
          "D) Re-assessments are not necessary"
        ],
        "ans": "A",
        "rat": "Regular diagnostic cadences track maturity trajectory, ensuring transformation programs adapt to evolving enterprise operational needs."
      },
      {
        "q": "Why does the Appendix C Maturity Matrix evaluate 'Psychological Safety' alongside technical tooling metrics?",
        "opts": [
          "A) Psychological safety is a prerequisite for transparent problem reporting, continuous experimentation, and honest metric collection",
          "B) It is required by law",
          "C) Psychological safety replaces software tools",
          "D) It is an optional metric"
        ],
        "ans": "A",
        "rat": "Without psychological safety, teams hide impediments, game metrics, and resist Agile transformation initiatives."
      },
      {
        "q": "What is the recommended cadence for conducting enterprise-wide diagnostic audits using the Appendix C matrix?",
        "opts": [
          "A) Every 20 years",
          "B) Quarterly (every 90 days) to track maturity progression and recalibrate strategic transformation goals",
          "C) Daily during standup",
          "D) Audit only when projects fail"
        ],
        "ans": "B",
        "rat": "Quarterly audit cadences provide timely feedback on transformation investments while allowing sufficient time for structural change."
      }
    ]
  },
  "ch25": {
    "summary": [],
    "quiz": []
  },
  "ch26": {
    "summary": [],
    "quiz": []
  },
  "ch27": {
    "summary": [],
    "quiz": []
  },
  "ch28": {
    "summary": [],
    "quiz": []
  }
};


const PROMPT_LIBRARY = [
  { id: 1, title: "Socratic Sprint Retrospective Facilitator", category: "Coaching", tag: "ICF Coaching", prompt: "System Persona: You are an ICF Master Coach specializing in psychological safety.\nInput Context: The team has missed 4 consecutive sprint commitments due to late QA.\nTask: Provide 3 powerful open-ended Socratic questions to help the team explore systemic WIP bottlenecks without blame." },
  { id: 2, title: "Gherkin BDD Acceptance Criteria Generator", category: "Backlog Engineering", tag: "BDD / Gherkin", prompt: "System Persona: Lead QA Specialist.\nInput Story: 'Users should be able to complete payment with Apple Pay.'\nTask: Generate 4 testable Gherkin scenarios (Happy path, Card declined, Timeout, Auth retry)." },
  { id: 3, title: "Natural Language to JQL Converter", category: "Jira Query", tag: "JQL", prompt: "User Intent: 'Find all critical bugs in project MOBILE created in the last 30 days that are unassigned or blocked.'\nJQL Output: project = 'MOBILE' AND type = Bug AND priority in (Critical, Blocker) AND created >= -30d AND (status = Blocked OR assignee IS EMPTY)" },
  { id: 4, title: "SPIDR Epic Splitting Engine", category: "Backlog Engineering", tag: "Story Splitting", prompt: "System Persona: Agile Product Owner.\nInput Epic: 'As an admin, manage all global user permissions, SSO, and audit logs.'\nTask: Apply SPIDR (Spikes, Paths, Interfaces, Data, Rules) to break this into 4 INVEST-compliant stories with Gherkin criteria." },
  { id: 5, title: "WIQL Active Sprint Query Generator", category: "Azure DevOps", tag: "WIQL", prompt: "Task: Write a WIQL query returning all Active User Stories in @CurrentIteration sorted by backlog priority." },
  { id: 6, title: "Executive Communication on WIP Limits", category: "Leadership", tag: "Change Management", prompt: "Task: Draft an executive message to a VP explaining why adding 10 mid-quarter features requires pausing lower-priority work based on Little's Law." }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('reader'); // reader, prompts, queries, simulator
  const [selectedChapter, setSelectedChapter] = useState('ch01');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  
  // Simulator State
  const [simQuery, setSimQuery] = useState('');
  const [simResponse, setSimResponse] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const runSimulation = () => {
    if (!simQuery.trim()) return;
    setIsSimulating(true);
    setTimeout(() => {
      setSimResponse({
        observation: "Analysis indicates a systemic Flow Efficiency drop (12.4%) caused by late-stage manual regression testing.",
        questions: [
          "What is preventing QA from testing stories incrementally throughout the sprint rather than on day 9?",
          "How might we introduce automated Gherkin criteria during refinement to catch edge cases earlier?",
          "What lower-priority task can we pause today to swarm on unblocking active testing queues?"
        ],
        jql: `project = "ACTIVE" AND statusCategory = "In Progress" AND updated < -5d ORDER BY updated ASC`
      });
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ padding: '0.5rem', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '8px' }}>
              <BookOpen size={20} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: '1rem', fontWeight: 700 }} className="gradient-text">Agile & AI Coach</h1>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>By Santoshanand Adkar  •  Executive Master Edition</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.25rem', marginTop: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem', borderRadius: '8px' }}>
            <button 
              onClick={() => setActiveTab('reader')}
              style={{ flex: 1, padding: '0.4rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: activeTab === 'reader' ? 'var(--accent-blue)' : 'transparent', color: activeTab === 'reader' ? 'white' : 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
            >
              <BookMarked size={14} /> Chapters
            </button>
            <button 
              onClick={() => setActiveTab('prompts')}
              style={{ flex: 1, padding: '0.4rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: activeTab === 'prompts' ? 'var(--accent-purple)' : 'transparent', color: activeTab === 'prompts' ? 'white' : 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
            >
              <Sparkles size={14} /> Prompts
            </button>
            <button 
              onClick={() => setActiveTab('simulator')}
              style={{ flex: 1, padding: '0.4rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: activeTab === 'simulator' ? 'var(--accent-emerald)' : 'transparent', color: activeTab === 'simulator' ? 'white' : 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
            >
              <Bot size={14} /> AI Studio
            </button>
          </div>
        </div>

        {/* Chapter Navigation List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
          {activeTab === 'reader' && BOOK_STRUCTURE.map((part, pIdx) => (
            <div key={pIdx} style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{part.part}</span>
                <span className={`tag-badge ${part.color}`} style={{ fontSize: '0.65rem' }}>{part.tag}</span>
              </div>
              {part.chapters.map((ch) => (
                <div 
                  key={ch.id}
                  onClick={() => setSelectedChapter(ch.id)}
                  style={{
                    padding: '0.6rem 0.75rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '0.25rem',
                    background: selectedChapter === ch.id ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                    borderLeft: selectedChapter === ch.id ? '3px solid var(--accent-blue)' : '3px solid transparent',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ fontSize: '0.825rem', fontWeight: selectedChapter === ch.id ? 700 : 500, color: selectedChapter === ch.id ? 'white' : '#d1d5db' }}>{ch.title}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ch.desc}</div>
                </div>
              ))}
            </div>
          ))}

          {activeTab === 'prompts' && (
            <div>
              <div style={{ padding: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{ position: 'absolute', left: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="Search 100+ prompts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', fontSize: '0.75rem' }}
                  />
                </div>
              </div>
              {PROMPT_LIBRARY.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.tag.toLowerCase().includes(searchQuery.toLowerCase())).map((p) => (
                <div key={p.id} className="glass-panel" style={{ padding: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#e5e7eb' }}>{p.title}</span>
                    <span className="tag-badge tag-purple">{p.tag}</span>
                  </div>
                  <pre style={{ fontSize: '0.7rem', maxHeight: '80px', overflow: 'hidden', margin: '0.4rem 0' }}>{p.prompt}</pre>
                  <button 
                    onClick={() => handleCopy(p.id, p.prompt)}
                    className="btn-primary" 
                    style={{ width: '100%', padding: '0.3rem', fontSize: '0.7rem', justifyContent: 'center' }}
                  >
                    {copiedId === p.id ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === p.id ? "Copied to Clipboard!" : "Copy Prompt"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'simulator' && (
            <div style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', color: '#93c5fd' }}>AI Coaching Simulator</div>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Simulate real-time Socratic coaching diagnostics for team impediments, JQL queries, and story refinement.</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Viewer */}
      <main className="main-content">
        {/* Top Header */}
        <header style={{ padding: '1rem 2.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(17, 24, 39, 0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} color="#60a5fa" />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Book Explorer</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>{selectedChapter.toUpperCase()}</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className="tag-badge tag-emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={12} /> Production Ready (~500 Pages)
            </span>
          </div>
        </header>

        {/* Dynamic Workspace Body */}
        <div className="content-body">
          {activeTab === 'reader' && selectedChapter === 'role_paths' && (
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="tag-badge tag-amber">Executive Reading Guide</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>4 Customized Role Pathways</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }} className="gradient-text">
                How to Read This Playbook: Role-Based Executive Reading Paths
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Select your leadership or engineering role to view the recommended chapter sequence and key operational focus area.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-blue)' }}>
                  <h3 style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>1. Enterprise Agile Coach & CoE Lead</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part I, Part V, Part VI & Appendix C</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Framework scaling trade-offs (SAFe vs LeSS), Lyssa Adkins coaching stances, Team Topologies, AI prompt engineering & 35-criteria maturity diagnostic.</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-purple)' }}>
                  <h3 style={{ color: '#c4b5fd', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>2. Jira Data Center & Cloud Administrator</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part II, Part III & Appendix B</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Hazelcast active-active clustering, HikariCP pool tuning, Forge serverless apps, Atlassian Access SAML/SCIM, JSM Assets & JQL reference.</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-emerald)' }}>
                  <h3 style={{ color: '#6ee7b7', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>3. Azure DevOps & DevEx Platform Engineer</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part IV, Part VI & Appendix B</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Azure Boards Inherited Process, Delivery Plans 2.0, Multi-Stage YAML Pipelines, DORA metrics & WIQL query translation.</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #f43f5e' }}>
                  <h3 style={{ color: '#fda4af', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>4. VP of Engineering, CTO & Product Executive</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part I, Part III, Part V & Appendix A</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Strategic OKRs to backlog line-of-sight, AI ethics & governance, RAG vector architectures, agentic MCP & prompt library.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reader' && selectedChapter === 'glossary' && (
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="tag-badge tag-purple">Architectural Glossary</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>16 Executive Terms</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }} className="gradient-text">
                Enterprise Technology & AI Architectural Glossary
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                An executive reference guide to core architectural, engineering, and AI terms referenced throughout this playbook:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {[
                  { term: "Retrieval-Augmented Generation (RAG)", def: "AI architecture that grounds LLM responses by dynamically retrieving relevant internal enterprise data (Jira/ADO tickets, docs) into prompt context." },
                  { term: "Model Context Protocol (MCP)", def: "An open standard protocol for securely exposing enterprise data sources, tools, and prompt templates to AI model client applications." },
                  { term: "ReAct Agent Pattern (Reason + Act)", def: "An autonomous agent execution loop where an LLM dynamically generates a Thought, executes a software Tool action, and evaluates Observations." },
                  { term: "Vector Embeddings & Cosine Similarity", def: "High-dimensional numerical representations of text capturing semantic intent; Cosine Similarity measures conceptual closeness between tickets." },
                  { term: "HNSW Index (Vector Search)", def: "Hierarchical Navigable Small World algorithm enabling sub-millisecond approximate nearest neighbor (ANN) similarity searches across vector DBs." },
                  { term: "Atlassian Forge", def: "Serverless FaaS application runtime executing custom app code inside Atlassian's secure cloud boundary with manifest OAuth scopes." },
                  { term: "Atlassian Guard (Access) & SCIM", def: "Enterprise identity management tool enforcing SAML SSO, 2FA, and automated user provisioning via System for Cross-domain Identity Management." },
                  { term: "Hazelcast Clustering (Jira DC)", def: "Embedded active-active distributed memory cache used in Jira Data Center for real-time node discovery, state sync, and cache distribution." },
                  { term: "HikariCP Connection Pool", def: "High-performance JDBC database connection pool manager configured in Jira DC to optimize JVM thread database access under heavy load." },
                  { term: "Asset Query Language (AQL)", def: "Relational query language used in Jira Service Management (JSM) Assets to filter and query IT CMDB object attributes and relationships." },
                  { term: "Work Item Query Language (WIQL)", def: "SQL-like query language used in Azure DevOps to query work item fields, historical state changes (EVER), and linked link trees." },
                  { term: "Little's Law (WIP = Throughput * Lead Time)", def: "Fundamental queuing theory equation proving that constraining Work-in-Progress (WIP) mathematically reduces average Lead Time." },
                  { term: "Flow Efficiency", def: "Quantitative metric measuring active touch-time vs. total elapsed Lead Time: Flow Efficiency = (Active Time / Total Lead Time) * 100." },
                  { term: "Monte Carlo Flow Simulation", def: "Probabilistic forecasting technique running thousands of trials against historical throughput to project completion dates at 85% confidence." },
                  { term: "Team Topologies", def: "Organizational design framework structuring teams into 4 types (Stream-Aligned, Enabling, Complicated-Subsystem, Platform) to minimize cognitive load." },
                  { term: "Socratic Prompting", def: "Prompt engineering technique framing AI as a reflective coach that asks probing diagnostic questions rather than issuing prescriptive commands." }
                ].map((g, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--accent-blue)' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#93c5fd', marginBottom: '0.25rem' }}>{g.term}</div>
                    <div style={{ fontSize: '0.85rem', color: '#d1d5db', lineHeight: 1.5 }}>{g.def}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reader' && selectedChapter !== 'role_paths' && selectedChapter !== 'glossary' && (
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="tag-badge tag-blue">Selected Chapter</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Source: chapters/{selectedChapter}.md</span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }} className="gradient-text">
                {BOOK_STRUCTURE.flatMap(p => p.chapters).find(c => c.id === selectedChapter)?.title || "Chapter View"}
              </h2>

              <p style={{ fontSize: '1rem', color: '#d1d5db', marginBottom: '1.5rem', fontStyle: 'italic', borderLeft: '3px solid var(--accent-purple)', paddingLeft: '1rem' }}>
                "{BOOK_STRUCTURE.flatMap(p => p.chapters).find(c => c.id === selectedChapter)?.desc}"
              </p>

              <hr style={{ borderColor: 'var(--border-color)', margin: '1.5rem 0' }} />

              <div style={{ color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.8 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#93c5fd', marginBottom: '0.75rem' }}>
                  Executive Summary & Key Takeaways
                </h3>

                <div className="glass-panel" style={{ padding: '1.25rem', margin: '1rem 0', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60a5fa', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>
                    <Zap size={18} /> Core Strategic Takeaways:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#e5e7eb' }}>
                    {(CHAPTER_DATA[selectedChapter]?.summary || [
                      "Architectural governance and metric instrumentation across Jira DC/Cloud and Azure DevOps.",
                      "Application of Socratic coaching stance and ICF competencies to drive psychological safety.",
                      "Leveraging LLMs, Model Context Protocol (MCP), and RAG for automated backlog refinement."
                    ]).map((bullet, idx) => (
                      <li key={idx} style={{ marginBottom: '0.6rem' }}><strong>Takeaway {idx+1}:</strong> {bullet}</li>
                    ))}
                  </ul>
                </div>

                <hr style={{ borderColor: 'var(--border-color)', margin: '2rem 0' }} />

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#c4b5fd', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bot size={20} /> Knowledge Assessment & Scenario Quiz (6 Questions)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {(CHAPTER_DATA[selectedChapter]?.quiz || []).map((qObj, qIdx) => (
                    <div key={qIdx} className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-purple)' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f3e8ff', marginBottom: '0.75rem' }}>
                        Question {qIdx + 1}: {qObj.q}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
                        {qObj.opts.map((opt, oIdx) => (
                          <div key={oIdx} style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{opt}</div>
                        ))}
                      </div>
                      <div className="glass-panel" style={{ padding: '0.75rem 1rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399', marginBottom: '0.2rem' }}>
                          📌 ANSWER KEY & SOCRATIC RATIONALE
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#e5e7eb' }}>
                          <strong>Correct Answer: {qObj.ans}</strong> — {qObj.rat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }} className="gradient-text">
                  AI Agile Coach Facilitation Studio
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Enter any team impediment or challenge (e.g., "QA testing is delayed at end of sprint", "VP wants to add 5 stories mid-sprint", "How to query stale issues in Jira").
                </p>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="Describe team scenario or request JQL/WIQL..."
                    value={simQuery}
                    onChange={(e) => setSimQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && runSimulation()}
                    style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', color: 'white', fontSize: '0.9rem' }}
                  />
                  <button onClick={runSimulation} disabled={isSimulating} className="btn-primary">
                    {isSimulating ? "Analyzing..." : "Generate Insights"}
                  </button>
                </div>
              </div>

              {simResponse && (
                <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-emerald)' }}>
                  <h4 style={{ color: '#6ee7b7', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Bot size={18} /> Socratic Diagnostic & Facilitation Blueprint
                  </h4>

                  <div style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#e5e7eb' }}>
                    <strong>Observation:</strong> {simResponse.observation}
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ fontSize: '0.85rem', color: '#93c5fd' }}>3 Socratic Questions for Retrospective:</strong>
                    <ul style={{ paddingLeft: '1.25rem', marginTop: '0.4rem', fontSize: '0.85rem', color: '#d1d5db' }}>
                      {simResponse.questions.map((q, idx) => <li key={idx} style={{ marginBottom: '0.3rem' }}>{q}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong style={{ fontSize: '0.85rem', color: '#c4b5fd' }}>Recommended JQL Audit Query:</strong>
                    <pre>{simResponse.jql}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'prompts' && (
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }} className="gradient-text">Prompt Engineering Studio (100+ Prompts)</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Production-ready prompts for Socratic facilitation, backlog engineering, JQL/WIQL generation, and executive alignment.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1rem' }}>
                {PROMPT_LIBRARY.map((p) => (
                  <div key={p.id} className="glass-panel" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'white' }}>{p.title}</h4>
                      <span className="tag-badge tag-purple">{p.tag}</span>
                    </div>
                    <pre style={{ maxHeight: '140px', overflowY: 'auto' }}>{p.prompt}</pre>
                    <button 
                      onClick={() => handleCopy(p.id, p.prompt)}
                      className="btn-primary" 
                      style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                    >
                      {copiedId === p.id ? <Check size={14} /> : <Copy size={14} />}
                      {copiedId === p.id ? "Copied!" : "Copy Full Prompt"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
