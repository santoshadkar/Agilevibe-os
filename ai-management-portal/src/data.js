// Master Dataset: 6 Major Industry Sectors with Complete Standalone Roles, Roles & Responsibilities, 4-Step Roadmaps, and Accredited Industry Certifications (PMI, SHRM, ASCM, IMA, Product School, HIMSS, ASQ, etc.)

export const ROLES_ELEVATION_DATA = [
  {
    id: "project_manager",
    title: "Project Manager (PM)",
    industry: "Technology & Services",
    icon: "fa-list-check",
    accent: "#7C3AED",
    badge: "Tactical Execution Lead",
    rolesAndResponsibilities: {
      purpose: "Responsible for managing individual project lifecycles, ensuring on-time delivery within scope and budget.",
      keyTasks: [
        "Create Work Breakdown Structures (WBS) and sprint schedules",
        "Track daily task progress, blockers, and team deliverables",
        "Maintain project documentation and stakeholder status emails",
        "Manage project scope changes and resource allocations"
      ]
    },
    certifications: [
      { name: "PMP® (Project Management Professional)", body: "PMI", link: "https://www.pmi.org/certifications/project-management-pmp" },
      { name: "PMI-ACP® (Agile Certified Practitioner)", body: "PMI", link: "https://www.pmi.org/certifications/agile-acp" },
      { name: "AI in Project Management Certification", body: "PMI & DeepLearning.AI", link: "https://www.pmi.org/learning/courses/ai-in-project-management" }
    ],
    currentReality: "Buried in manual status update emails, spreadsheet chasing, and endless meeting note-taking.",
    portalElevation: "Automates 80% of daily status compilation, standup synthesis, and task follow-up emails.",
    timeSavings: "11.0 hrs/week reclaimed",
    salaryBoost: "+26% average comp increase",
    keyCapability: "Automated Daily Standup Synthesis & 1-Page Status Digests"
  },
  {
    id: "program_manager",
    title: "Program Manager (PgM)",
    industry: "Technology & Enterprise",
    icon: "fa-diagram-project",
    accent: "#9333EA",
    badge: "Strategic Governance Lead",
    rolesAndResponsibilities: {
      purpose: "Oversees a portfolio of interconnected projects, driving strategic alignment, cross-functional dependencies, and executive governance.",
      keyTasks: [
        "Align multi-project roadmaps with organizational business goals",
        "Manage cross-project risk, dependencies, and resource conflicts",
        "Lead C-suite Steering Committee reviews and executive digests",
        "Govern program budget allocation and strategic benefits realization"
      ]
    },
    certifications: [
      { name: "PgMP® (Program Management Professional)", body: "PMI", link: "https://www.pmi.org/certifications/program-management-pgmp" },
      { name: "MSP® (Managing Successful Programmes)", body: "Axelos / PeopleCert", link: "https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/MSP-2" },
      { name: "Executive AI Strategy Certificate", body: "Harvard Business School Online", link: "https://online.hbs.edu/courses/digital-strategy/" }
    ],
    currentReality: "Overwhelmed by cross-project risk tracking, dependency friction, and manual steering committee deck creation.",
    portalElevation: "Generates predictive RAID risk matrices across 10+ projects simultaneously and automates C-suite board briefs.",
    timeSavings: "12.5 hrs/week reclaimed",
    salaryBoost: "+32% average comp increase",
    keyCapability: "Multi-Project Predictive RAID Matrix & C-Suite Steering Digests"
  },
  {
    id: "product_manager",
    title: "Product Manager (PdM)",
    industry: "Software & SaaS",
    icon: "fa-cubes",
    accent: "#06B6D4",
    badge: "Product Vision Lead",
    rolesAndResponsibilities: {
      purpose: "Defines the product vision, customer discovery strategy, feature roadmap, and user stories for engineering execution.",
      keyTasks: [
        "Conduct customer discovery and user interview synthesis",
        "Draft detailed Product Requirement Documents (PRDs) & user stories",
        "Prioritize backlog features based on ROI impact vs engineering effort",
        "Analyze product analytics, user feedback, and market positioning"
      ]
    },
    certifications: [
      { name: "AIPM (AI Product Manager Certification)", body: "Product School", link: "https://productschool.com/certifications/ai-product-manager" },
      { name: "AI Product Management Specialization", body: "Duke University", link: "https://www.coursera.org/search?query=AI+Product+Management+Duke" },
      { name: "CSPO® (Certified Scrum Product Owner)", body: "Scrum Alliance", link: "https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner" }
    ],
    currentReality: "Stuck in slow PRD drafting, backlog ticket formatting, and manually reading hundreds of user feedback notes.",
    portalElevation: "Clusters 1,000+ customer call transcripts instantly and drafts complete 80% PRDs with edge cases in 15 minutes.",
    timeSavings: "13.5 hrs/week reclaimed",
    salaryBoost: "+35% valuation shift",
    keyCapability: "15-Minute PRD Generation & Customer Feedback Clustering"
  },
  {
    id: "engineering_manager",
    title: "Engineering Manager (EM)",
    industry: "Software & Engineering",
    icon: "fa-code-branch",
    accent: "#3B82F6",
    badge: "Technical Talent Lead",
    rolesAndResponsibilities: {
      purpose: "Leads engineering team delivery, code quality, developer velocity, technical architecture, and team talent coaching.",
      keyTasks: [
        "Manage engineering team sprint velocity and technical debt",
        "Conduct 1-on-1s, performance reviews, and career coaching",
        "Oversee technical design architecture and code review standards",
        "Balance feature delivery speed with system scalability and stability"
      ]
    },
    certifications: [
      { name: "AWS Certified Solutions Architect - Professional", body: "Amazon Web Services", link: "https://aws.amazon.com/certification/certified-solutions-architect-professional/" },
      { name: "Generative AI for Software Leaders", body: "LinkedIn Learning", link: "https://www.linkedin.com/learning/search?keywords=Generative+AI+for+Business+Leaders" },
      { name: "Certified Engineering Leadership (CEL)", body: "IEEE Computer Society", link: "https://www.computer.org/" }
    ],
    currentReality: "Spending hours writing performance reviews, compiling sprint velocity reports, and conducting manual code debt audits.",
    portalElevation: "Auto-summarizes developer performance notes, flags technical debt clusters, and optimizes code review workflows.",
    timeSavings: "11.5 hrs/week reclaimed",
    salaryBoost: "+30% comp growth",
    keyCapability: "Automated Code Review Audits & Talent Feedback Framing"
  },
  {
    id: "financial_controller",
    title: "Financial Controller",
    industry: "Banking & Corporate Finance",
    icon: "fa-calculator",
    accent: "#10B981",
    badge: "Accounting Integrity Lead",
    rolesAndResponsibilities: {
      purpose: "Ensures accounting accuracy, internal controls, month-end ledger close, financial reporting compliance, and audit readiness.",
      keyTasks: [
        "Oversee monthly, quarterly, and annual financial close processes",
        "Ensure compliance with GAAP/IFRS and internal control audits",
        "Manage trial balance reconciliations and ledger integrity",
        "Prepare official statutory financial statements for auditors"
      ]
    },
    certifications: [
      { name: "CMA® (Certified Management Accountant)", body: "Institute of Management Accountants (IMA)", link: "https://www.imanet.org/cma-certification" },
      { name: "CPA (Certified Public Accountant)", body: "AICPA", link: "https://www.aicpa-cima.com/" },
      { name: "Microsoft Copilot for Excel Master Certificate", body: "CFI", link: "https://corporatefinanceinstitute.com/" }
    ],
    currentReality: "Spending days manually reconciling ledger line items and drafting audit trail explanations.",
    portalElevation: "Automates ledger reconciliation diagnostics and generates instant audit trail documentation.",
    timeSavings: "12.0 hrs/week reclaimed",
    salaryBoost: "+28% advancement rate",
    keyCapability: "Trial Balance Reconciliation Diagnostics & Audit Prep Automation"
  },
  {
    id: "fpa_manager",
    title: "FP&A Manager",
    industry: "Corporate Finance & SaaS",
    icon: "fa-chart-line",
    accent: "#059669",
    badge: "Strategic Finance Partner",
    rolesAndResponsibilities: {
      purpose: "Drives financial planning, budgeting, long-term forecasting, variance commentary, and strategic capital allocation.",
      keyTasks: [
        "Build 3-statement financial forecasting models and budgets",
        "Analyze monthly P&L variance (Budget vs Actuals) across departments",
        "Draft executive commentary explaining financial deviations to the CFO",
        "Perform scenario sensitivity analysis for strategic capital investments"
      ]
    },
    certifications: [
      { name: "Corporate FP&A Certified Professional (FPAC™)", body: "Association for Financial Professionals (AFP)", link: "https://fpacert.afponline.org/" },
      { name: "FMVA® (Financial Modeling & Valuation Analyst)", body: "CFI", link: "https://corporatefinanceinstitute.com/certifications/financial-modeling-valuation-analyst-fmva/" },
      { name: "AI in Financial Services Certification", body: "NYU Stern", link: "https://www.coursera.org/search?query=AI+in+Financial+Services+NYU+Stern" }
    ],
    currentReality: "Wasting hours writing manual P&L variance commentary line-by-line for department heads.",
    portalElevation: "Generates natural-language variance commentary directly from Excel exports and models scenario forecasts 5x faster.",
    timeSavings: "13.0 hrs/week reclaimed",
    salaryBoost: "+32% comp premium",
    keyCapability: "Automated P&L Variance Commentary & Scenario Forecasting"
  },
  {
    id: "risk_manager",
    title: "Risk & Compliance Manager",
    industry: "Banking, Insurance & Enterprise",
    icon: "fa-shield-halved",
    accent: "#DC2626",
    badge: "Governance & Risk Lead",
    rolesAndResponsibilities: {
      purpose: "Identifies, assesses, and mitigates enterprise operational risks, regulatory compliance breaches (SOX/GDPR), and policy violations.",
      keyTasks: [
        "Conduct enterprise operational risk audits and risk scoring",
        "Ensure corporate compliance with regulatory mandates and frameworks",
        "Manage policy documentation, incident logs, and compliance training",
        "Coordinate with external regulatory auditors and legal counsel"
      ]
    },
    certifications: [
      { name: "FRM® (Financial Risk Manager)", body: "GARP (Global Association of Risk Professionals)", link: "https://www.garp.org/frm" },
      { name: "CRISC® (Certified in Risk and Information Systems Control)", body: "ISACA", link: "https://www.isaca.org/credentialing/crisc" },
      { name: "Certified Regulatory Compliance Manager (CRCM)", body: "American Bankers Association (ABA)", link: "https://www.aba.com/" }
    ],
    currentReality: "Reading through hundreds of compliance policy pages and manually cross-referencing audit checklists.",
    portalElevation: "Uses ChatPDF to scan 200+ page regulatory manuals instantly and auto-generate compliance gap matrices.",
    timeSavings: "11.0 hrs/week reclaimed",
    salaryBoost: "+27% advancement rate",
    keyCapability: "ChatPDF Compliance Document Audit & Risk Matrix Generator"
  },
  {
    id: "clinical_ops_manager",
    title: "Clinical Operations Manager",
    industry: "Healthcare & Life Sciences",
    icon: "fa-notes-medical",
    accent: "#8B5CF6",
    badge: "Clinical Delivery Lead",
    rolesAndResponsibilities: {
      purpose: "Manages clinical trial execution, medical facility operations, patient flow efficiency, and clinical staff coordination.",
      keyTasks: [
        "Oversee daily clinical workflow and patient throughput logistics",
        "Ensure clinical trials comply with FDA and IRB protocol guidelines",
        "Manage clinical staff shift schedules and resource allocations",
        "Coordinate clinical trial data collection and site audit readiness"
      ]
    },
    certifications: [
      { name: "CCRC® (Certified Clinical Research Coordinator)", body: "ACRP", link: "https://acrpnet.org/certifications/ccrc-certification/" },
      { name: "CPHQ (Certified Professional in Healthcare Quality)", body: "NAHQ", link: "https://nahq.org/certification/cphq/" },
      { name: "AI in Healthcare Specialization", body: "Stanford Medicine", link: "https://www.coursera.org/search?query=AI+in+Healthcare+Stanford" }
    ],
    currentReality: "Drowning in clinical audit paperwork, shift scheduling gaps, and manual protocol compliance checking.",
    portalElevation: "Drafts HIPAA-compliant clinical administrative SOPs and auto-populates site audit readiness checklists.",
    timeSavings: "10.5 hrs/week reclaimed",
    salaryBoost: "+26% advancement rate",
    keyCapability: "HIPAA-Compliant Clinical SOPs & Audit Readiness Checklists"
  },
  {
    id: "healthcare_admin",
    title: "Healthcare Administrator",
    industry: "Hospital Systems & Clinics",
    icon: "fa-hospital",
    accent: "#7C3AED",
    badge: "Medical Facility Lead",
    rolesAndResponsibilities: {
      purpose: "Oversees the business administration, regulatory accreditation, billing compliance, and operational budget of healthcare facilities.",
      keyTasks: [
        "Direct department budgets, facility operations, and vendor billing",
        "Ensure compliance with Joint Commission (JCAHO) accreditation rules",
        "Optimize patient care administration and medical records management",
        "Lead facility staff performance evaluations and policy rollouts"
      ]
    },
    certifications: [
      { name: "FACHE® (Fellow of the American College of Healthcare Executives)", body: "ACHE", link: "https://www.ache.org/credentialing" },
      { name: "CPHIMS® (Certified Professional in Health Information & Mgmt Systems)", body: "HIMSS", link: "https://www.himss.org/our-membership/certifications/cphims" },
      { name: "Certified Medical Manager (CMM)", body: "PAHCOM", link: "https://www.pahcom.com/" }
    ],
    currentReality: "Buried in hospital administration reports, accreditation paperwork, and staff policy inquiries.",
    portalElevation: "Automates administrative policy summarization, accreditation audit prep, and shift gap predictions.",
    timeSavings: "11.0 hrs/week reclaimed",
    salaryBoost: "+25% promotion velocity",
    keyCapability: "JCAHO Accreditation Audit Prep & Facility Policy Bots"
  },
  {
    id: "supply_chain_manager",
    title: "Supply Chain Manager",
    industry: "Logistics & Manufacturing",
    icon: "fa-truck-ramp-box",
    accent: "#F59E0B",
    badge: "Logistics Throughput Lead",
    rolesAndResponsibilities: {
      purpose: "Drives end-to-end supply chain optimization, inventory forecasting, supplier relationship management, and logistics fulfillment.",
      keyTasks: [
        "Optimize inventory stock levels to prevent stockouts and overstock",
        "Manage global freight suppliers, customs, and distribution logistics",
        "Evaluate supplier proposals, contract SLAs, and pricing terms",
        "Mitigate supply chain disruptions and bottleneck delays"
      ]
    },
    certifications: [
      { name: "CSCP® (Certified Supply Chain Professional)", body: "ASCM / APICS", link: "https://www.ascm.org/learning-development/certifications-credentials/cscp/" },
      { name: "CPSM® (Certified Professional in Supply Management)", body: "ISM (Institute for Supply Management)", link: "https://www.ismworld.org/certification-and-training/certification/cpsm/" },
      { name: "Supply Chain Analytics Certificate", body: "MIT CTL", link: "https://ctl.mit.edu/" }
    ],
    currentReality: "Firefighting supplier delay logs, reading 50-page freight PDF proposals, and manually calculating stockouts.",
    portalElevation: "Converts vendor PDF proposals into side-by-side decision matrices instantly and predicts inventory bottlenecks.",
    timeSavings: "11.5 hrs/week reclaimed",
    salaryBoost: "+28% comp growth",
    keyCapability: "Vendor RFP Decision Matrices & Inventory Delay Predictor"
  },
  {
    id: "procurement_lead",
    title: "Procurement & Sourcing Lead",
    industry: "Retail, Manufacturing & Corporate",
    icon: "fa-file-signature",
    accent: "#D97706",
    badge: "Sourcing & Contract Lead",
    rolesAndResponsibilities: {
      purpose: "Leads vendor selection, RFP sourcing events, contract negotiations, supplier cost containment, and vendor performance audits.",
      keyTasks: [
        "Draft vendor Request for Proposals (RFPs) and scoring rubrics",
        "Negotiate pricing terms, SLAs, and payment schedules with suppliers",
        "Evaluate vendor proposal compliance, security, and financial stability",
        "Audit ongoing vendor performance against contractual SLA commitments"
      ]
    },
    certifications: [
      { name: "CPSM® (Certified Professional in Supply Management)", body: "ISM", link: "https://www.ismworld.org/certification-and-training/certification/cpsm/" },
      { name: "MCIPS (Member of the Chartered Institute of Procurement & Supply)", body: "CIPS", link: "https://www.cips.org/" },
      { name: "Certified Procurement Professional (CPP)", body: "AIPMM", link: "https://aipmm.com/" }
    ],
    currentReality: "Manually comparing stack of 100-page vendor proposals and typing out negotiation leverage sheets.",
    portalElevation: "Parses multiple vendor RFPs in seconds to output side-by-side cost, SLA, and risk trade-off matrices.",
    timeSavings: "12.0 hrs/week reclaimed",
    salaryBoost: "+29% advancement rate",
    keyCapability: "Side-by-Side RFP Comparison Engine & Negotiation Scripting"
  },
  {
    id: "hrbp_lead",
    title: "HR Business Partner (HRBP)",
    industry: "Enterprise Corporate & Retail",
    icon: "fa-users-gear",
    accent: "#EC4899",
    badge: "Talent & Strategy Partner",
    rolesAndResponsibilities: {
      purpose: "Aligns human resources strategy with business goals, advising business unit leaders on talent retention, org design, and engagement.",
      keyTasks: [
        "Advise department managers on team performance and organizational design",
        "Analyze employee engagement survey trends and retention risks",
        "Manage complex employee relations, performance improvement plans (PIPs)",
        "Drive talent succession planning and leadership development"
      ]
    },
    certifications: [
      { name: "SHRM-SCP® / SHRM-CP®", body: "Society for Human Resource Management (SHRM)", link: "https://www.shrm.org/certification" },
      { name: "SPHR® / PHR®", body: "HRCI (HR Certification Institute)", link: "https://www.hrci.org/our-programs/our-certifications/sphr" },
      { name: "Generative AI in HR Certification", body: "AIHR (Academy to Innovate HR)", link: "https://www.aihr.com/courses/generative-ai-in-hr/" }
    ],
    currentReality: "Spending days reading hundreds of qualitative employee survey comments and drafting performance review templates.",
    portalElevation: "Performs instant sentiment analysis on employee pulse surveys and frames objective performance feedback.",
    timeSavings: "10.0 hrs/week reclaimed",
    salaryBoost: "+25% promotion rate",
    keyCapability: "Employee Sentiment Clustering & Objective Performance Framing"
  },
  {
    id: "talent_acquisition_lead",
    title: "Talent Acquisition Manager",
    industry: "Enterprise, Tech & Services",
    icon: "fa-user-plus",
    accent: "#DB2777",
    badge: "Recruiting Strategy Lead",
    rolesAndResponsibilities: {
      purpose: "Leads candidate sourcing, interview rubric design, employer brand strategy, and hiring pipeline metrics.",
      keyTasks: [
        "Design structured competency-based interview scorecards",
        "Manage candidate sourcing channels and recruiting pipeline metrics",
        "Partner with hiring managers to define role requirements and JD scope",
        "Analyze time-to-hire, offer acceptance rate, and candidate experience"
      ]
    },
    certifications: [
      { name: "SHRM-CP® (Certified Professional)", body: "SHRM", link: "https://www.shrm.org/certification" },
      { name: "CDR (Certified Diversity Recruiter)", body: "AIRS / ADP", link: "https://www.airsdirectory.com/" },
      { name: "People Analytics Specialization", body: "Wharton", link: "https://www.coursera.org/search?query=People+Analytics+Wharton" }
    ],
    currentReality: "Writing job descriptions from scratch and manually screening resume batches for specialized skills.",
    portalElevation: "Generates tailored competency job descriptions and auto-matches candidate resume skills against job rubrics.",
    timeSavings: "11.0 hrs/week reclaimed",
    salaryBoost: "+26% comp growth",
    keyCapability: "Tailored JD Rubric Generation & Candidate Skill Matching"
  },
  {
    id: "plant_manager",
    title: "Plant & Production Manager",
    industry: "Manufacturing & Heavy Industry",
    icon: "fa-industry",
    accent: "#2563EB",
    badge: "Factory Operations Lead",
    rolesAndResponsibilities: {
      purpose: "Directs shop floor manufacturing production, machine uptime, plant safety compliance, and lean throughput optimization.",
      keyTasks: [
        "Manage daily manufacturing production schedules and throughput targets",
        "Enforce plant safety compliance (OSHA) and quality standards (ISO)",
        "Diagnose equipment downtime logs and oversee preventive maintenance",
        "Lead shop floor team leads and lean manufacturing continuous improvement"
      ]
    },
    certifications: [
      { name: "Six Sigma Black Belt (CSSBB)", body: "ASQ (American Society for Quality)", link: "https://asq.org/cert/six-sigma-black-belt" },
      { name: "Lean Manufacturing Professional Certification", body: "SME (Society of Manufacturing Engineers)", link: "https://www.sme.org/training/lean-certification/" },
      { name: "Smart Manufacturing & AI Analytics Certificate", body: "MIT xPro", link: "https://xpro.mit.edu/courses/smart-manufacturing/" }
    ],
    currentReality: "Manually analyzing machine failure logs, writing shift handover notes, and typing safety inspection checklists.",
    portalElevation: "Translates raw machine error codes into clear diagnostic action steps and auto-generates OSHA safety SOPs.",
    timeSavings: "11.5 hrs/week reclaimed",
    salaryBoost: "+29% comp shift",
    keyCapability: "Equipment Diagnostic Prompts & OSHA Safety SOP Generator"
  },
  {
    id: "construction_pgm",
    title: "Construction Program Manager",
    industry: "Construction & Infrastructure",
    icon: "fa-helmet-safety",
    accent: "#1D4ED8",
    badge: "Site Execution Lead",
    rolesAndResponsibilities: {
      purpose: "Oversees large-scale construction site delivery, subcontractor timelines, safety compliance, and capital budget tracking.",
      keyTasks: [
        "Manage subcontractor milestone delivery schedules and site WBS",
        "Inspect site safety compliance and quality inspection logs",
        "Control construction change orders, RFI tracking, and budget variances",
        "Report site milestone progress to real estate developers and owners"
      ]
    },
    certifications: [
      { name: "CCM® (Certified Construction Manager)", body: "CMAA (Construction Management Assoc. of America)", link: "https://www.cmaa.org/certification" },
      { name: "PMP® (Project Management Professional)", body: "PMI", link: "https://www.pmi.org/certifications/project-management-pmp" },
      { name: "LEED AP (Accredited Professional)", body: "USGBC", link: "https://www.usgbc.org/credentials/leed-ap" }
    ],
    currentReality: "Chasing subcontractor site updates, writing site inspection summaries, and managing paper RFI change orders.",
    portalElevation: "Runs subcontractor progress reports through AI prompts to auto-flag milestone delay risks and format site RFIs.",
    timeSavings: "12.0 hrs/week reclaimed",
    salaryBoost: "+30% comp growth",
    keyCapability: "Subcontractor Milestone Risk Flagging & RFI Formatting"
  }
];

export const INDUSTRIES_DATA = [
  // 1. TECHNOLOGY & SOFTWARE
  {
    id: "tech",
    title: "Technology & Software Development",
    icon: "fa-laptop-code",
    accent: "#06B6D4",
    tagline: "Software, Cloud Computing, SaaS & Consumer Tech",
    roles: [
      {
        id: "project_manager",
        title: "Project Manager (PM)",
        hoursSaved: "11.0 hrs/week",
        salaryBoost: "+26% average comp growth",
        summary: "Responsible for tactical project sprint delivery, team task coordination, and status tracking.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Mindset Shift & AI Governance in Delivery",
            duration: "Weeks 1-2",
            valueAdded: "Establishes secure AI guidelines preventing project data leaks while showing team members how AI assists task execution.",
            keyActionable: "Set up enterprise AI usage guidelines for team status notes and standup recording.",
            resources: {
              courses: [{ title: "AI for Everyone", platform: "Coursera / DeepLearning.AI", instructor: "Andrew Ng", link: "https://www.coursera.org/search?query=AI+for+Everyone+Andrew+Ng", duration: "6 hrs", badge: "Top Recommendation" }],
              videos: [{ title: "AI in Project Management Masterclass", speaker: "PMI Leadership", platform: "PMI YouTube", duration: "20 mins", link: "https://www.youtube.com/results?search_query=PMI+AI+in+Project+Management+Masterclass" }],
              books: [{ title: "Co-Intelligence", author: "Ethan Mollick", description: "Working with AI as a thought partner.", link: "https://www.amazon.com/s?k=Co-Intelligence+Ethan+Mollick" }],
              articles: [{ title: "How AI Transforms Project Delivery", publication: "Harvard Business Review", readTime: "8 min read", link: "https://hbr.org/search?term=How+Generative+AI+Will+Change+Middle+Management" }]
            }
          },
          {
            stepNumber: 2,
            title: "Automating Standup Synthesis & Status Digests",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 6+ hours/week by auto-generating weekly status digests from messy daily standup notes.",
            keyActionable: "Use structured prompt templates to turn Slack standup updates into 1-page executive digests.",
            resources: {
              courses: [{ title: "Prompt Engineering for ChatGPT", platform: "Vanderbilt (Coursera)", instructor: "Dr. Jules White", link: "https://www.coursera.org/search?query=Prompt+Engineering+for+ChatGPT+Vanderbilt", duration: "12 hrs", badge: "Practical Value" }],
              videos: [{ title: "Building Status Reports with Copilot", speaker: "Microsoft Dev Team", platform: "Microsoft Tech", duration: "15 mins", link: "https://www.youtube.com/results?search_query=Copilot+Project+Management+Status+Reports" }],
              books: [{ title: "The AI Advantage", author: "Thomas Davenport", description: "Deploying AI technology practically.", link: "https://www.amazon.com/s?k=The+AI+Advantage+Thomas+Davenport" }],
              articles: [{ title: "Prompt Templates for PMs", publication: "Pragmatic Engineer", readTime: "7 min read", link: "https://blog.pragmaticengineer.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Meeting Intelligence & Task Automation",
            duration: "Weeks 5-8",
            valueAdded: "Eliminates manual meeting note-taking by auto-extracting action items into Jira/Asana.",
            keyActionable: "Connect Otter.ai meeting transcripts directly to your project task board.",
            resources: {
              courses: [{ title: "Building Custom AI Workflows", platform: "DeepLearning.AI", instructor: "Andrew Ng", link: "https://www.deeplearning.ai/?s=Building+Custom+GPTs", duration: "4 hrs", badge: "Hands-on" }],
              videos: [{ title: "Otter.ai & Asana Workflow Integration", speaker: "Tech Lead", platform: "YouTube", duration: "18 mins", link: "https://www.youtube.com/results?search_query=Otter+AI+Asana+Workflow+Integration" }],
              books: [{ title: "Accelerate", author: "Nicole Forsgren et al.", description: "Modern project delivery metrics.", link: "https://www.amazon.com/s?k=Accelerate+Nicole+Forsgren" }],
              articles: [{ title: "Automating Meeting Intelligence", publication: "MIT Sloan Review", readTime: "8 min read", link: "https://sloanreview.mit.edu/" }]
            }
          },
          {
            stepNumber: 4,
            title: "Executive Delivery Positioning",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Senior PM / Program Manager roles by demonstrating 30% faster project delivery.",
            keyActionable: "Present a quarterly delivery velocity report to senior leadership.",
            resources: {
              courses: [{ title: "Executive Leadership in AI", platform: "Harvard Online", instructor: "HBS Faculty", link: "https://online.hbs.edu/courses/digital-strategy/", duration: "4 weeks", badge: "Executive Level" }],
              videos: [{ title: "Strategic Delivery Leadership", speaker: "Atlassian PM Lead", platform: "LeadDev", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Atlassian+Strategic+Delivery+Leadership+AI" }],
              books: [{ title: "Prediction Machines", author: "Ajay Agrawal et al.", description: "AI economics in project planning.", link: "https://www.amazon.com/s?k=Prediction+Machines+Ajay+Agrawal" }],
              articles: [{ title: "Top Tech Delivery Trends", publication: "Gartner Research", readTime: "10 min read", link: "https://www.gartner.com/en/information-technology/insights/top-technology-trends" }]
            }
          }
        ]
      },
      {
        id: "program_manager",
        title: "Program Manager (PgM)",
        hoursSaved: "12.5 hrs/week",
        salaryBoost: "+32% average comp growth",
        summary: "Oversees interconnected project portfolios, strategic cross-functional dependencies, and governance.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Program Governance & AI Policy",
            duration: "Weeks 1-2",
            valueAdded: "Establishes enterprise AI governance across multi-project portfolios preventing data leak risk.",
            keyActionable: "Draft program-wide AI acceptable use policy for all project managers.",
            resources: {
              courses: [{ title: "Generative AI for Leaders", platform: "LinkedIn Learning", instructor: "Tomer Cohen", link: "https://www.linkedin.com/learning/search?keywords=Generative+AI+for+Business+Leaders", duration: "3 hrs", badge: "Essential" }],
              videos: [{ title: "AI in Program Governance", speaker: "Satya Nadella", platform: "Microsoft Tech", duration: "18 mins", link: "https://www.youtube.com/results?search_query=Satya+Nadella+AI+program+governance" }],
              books: [{ title: "Competing in the Age of AI", author: "Marco Iansiti", description: "Architecting program delivery around AI.", link: "https://www.amazon.com/s?k=Competing+in+the+Age+of+AI+Marco+Iansiti" }],
              articles: [{ title: "Managing Program Portfolios with AI", publication: "Harvard Business Review", readTime: "9 min read", link: "https://hbr.org/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Multi-Project Predictive RAID Matrixing",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by auto-synthesizing risks, assumptions, issues, and dependencies across 10+ projects.",
            keyActionable: "Run multi-project weekly notes through a master RAID prompt template.",
            resources: {
              courses: [{ title: "Prompt Engineering for Managers", platform: "Vanderbilt", instructor: "Dr. Jules White", link: "https://www.coursera.org/search?query=Prompt+Engineering+Vanderbilt", duration: "12 hrs", badge: "Practical" }],
              videos: [{ title: "Predictive Risk Tracking with Copilot", speaker: "GitHub PMO", platform: "YouTube", duration: "20 mins", link: "https://www.youtube.com/results?search_query=Predictive+Risk+Tracking+Copilot" }],
              books: [{ title: "The AI Advantage", author: "Thomas Davenport", description: "Deploying AI in corporate programs.", link: "https://www.amazon.com/s?k=The+AI+Advantage+Thomas+Davenport" }],
              articles: [{ title: "Predictive Risk Analytics in PgM", publication: "Gartner", readTime: "11 min read", link: "https://www.gartner.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "C-Suite Steering Committee Automation",
            duration: "Weeks 5-8",
            valueAdded: "Reduces executive deck drafting time by 80% using natural-language slide generation tools.",
            keyActionable: "Automate quarterly Steering Committee progress briefing generation.",
            resources: {
              courses: [{ title: "Custom GPTs for Enterprise", platform: "DeepLearning.AI", instructor: "Andrew Ng", link: "https://www.deeplearning.ai/", duration: "4 hrs", badge: "Advanced" }],
              videos: [{ title: "Executive Steering Briefings with AI", speaker: "CPO of Atlassian", platform: "LeadDev", duration: "30 mins", link: "https://www.youtube.com/results?search_query=Executive+Steering+Briefings+AI" }],
              books: [{ title: "Prediction Machines", author: "Ajay Agrawal", description: "Economics of AI in strategic planning.", link: "https://www.amazon.com/s?k=Prediction+Machines+Ajay+Agrawal" }],
              articles: [{ title: "C-Suite Reporting with AI", publication: "MIT Sloan", readTime: "8 min read", link: "https://sloanreview.mit.edu/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Program Management Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of PMO / VP of Delivery roles by showcasing portfolio velocity and 40% risk reduction.",
            keyActionable: "Present a program-wide AI ROI report to the COO and Board.",
            resources: {
              courses: [{ title: "Executive Program in Strategy", platform: "Columbia Business School", instructor: "Columbia Faculty", link: "https://execed.business.columbia.edu", duration: "2 months", badge: "Executive Certificate" }],
              videos: [{ title: "The Future of Program Leadership", speaker: "VP of PMO at Salesforce", platform: "Forbes Forum", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Salesforce+VP+PMO+Program+Leadership+AI" }],
              books: [{ title: "TRANSFORMED", author: "Marty Cagan", description: "Moving to product operating model.", link: "https://www.amazon.com/s?k=TRANSFORMED+Marty+Cagan" }],
              articles: [{ title: "Top Strategic Tech Trends", publication: "Gartner Research", readTime: "12 min read", link: "https://www.gartner.com/" }]
            }
          }
        ]
      },
      {
        id: "product_manager",
        title: "Product Manager (PdM)",
        hoursSaved: "13.5 hrs/week",
        salaryBoost: "+35% valuation shift",
        summary: "Defines product vision, customer discovery, feature prioritization, and user stories.",
        roadmap: [
          {
            stepNumber: 1,
            title: "AI Product Opportunity Identification",
            duration: "Weeks 1-2",
            valueAdded: "Teaches you how to evaluate AI features in your product roadmap vs gimmick features.",
            keyActionable: "Audit existing user journey for manual friction points suitable for AI enhancement.",
            resources: {
              courses: [{ title: "AI Product Management", platform: "Duke University (Coursera)", instructor: "Pramod Singh", link: "https://www.coursera.org/search?query=AI+Product+Management+Duke", duration: "1 month", badge: "Top Rated" }],
              videos: [{ title: "Product Management in the Age of AI", speaker: "Shreyas Doshi", platform: "Mind the Product", duration: "45 mins", link: "https://www.youtube.com/results?search_query=Shreyas+Doshi+Product+Management+AI" }],
              books: [{ title: "INSPIRED", author: "Marty Cagan", description: "Creating tech products customers love.", link: "https://www.amazon.com/s?k=INSPIRED+Marty+Cagan" }],
              articles: [{ title: "The AI Product Manager Handbook", publication: "Product School", readTime: "10 min read", link: "https://productschool.com/blog/ai-product-manager" }]
            }
          },
          {
            stepNumber: 2,
            title: "15-Minute PRD Drafting & Customer Synthesis",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 10 hours/week by automating call transcript analysis and initial PRD drafting.",
            keyActionable: "Use Claude 3.5 Sonnet to turn 20 user call transcripts into structured PRDs.",
            resources: {
              courses: [{ title: "Generative AI for Product Managers", platform: "Product School", instructor: "Diego Granados", link: "https://productschool.com/", duration: "8 hrs", badge: "Certified" }],
              videos: [{ title: "Writing PRDs with AI", speaker: "Lenny Rachitsky", platform: "Lenny's Podcast", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Lenny+Rachitsky+Writing+PRDs+with+AI" }],
              books: [{ title: "Continuous Discovery Habits", author: "Teresa Torres", description: "Structured discovery with data.", link: "https://www.amazon.com/s?k=Continuous+Discovery+Habits+Teresa+Torres" }],
              articles: [{ title: "How AI Changes PRDs", publication: "Reforge", readTime: "9 min read", link: "https://www.reforge.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "AI Feature Prioritization & Backlog Grooming",
            duration: "Weeks 5-8",
            valueAdded: "Speeds up backlog grooming by 50% using AI effort vs impact scoring models.",
            keyActionable: "Build an automated user feedback sentiment monitor in Notion AI.",
            resources: {
              courses: [{ title: "Data-Driven Product Management", platform: "MIT xPro", instructor: "MIT Faculty", link: "https://xpro.mit.edu/", duration: "6 weeks", badge: "Certificate" }],
              videos: [{ title: "AI Strategy for Product Leaders", speaker: "CPO of Amplitude", platform: "ProductCon", duration: "30 mins", link: "https://www.youtube.com/results?search_query=Amplitude+CPO+ProductCon+AI+Strategy" }],
              books: [{ title: "Escaping the Build Trap", author: "Melissa Perri", description: "Focusing on strategic outcomes.", link: "https://www.amazon.com/s?k=Escaping+the+Build+Trap+Melissa+Perri" }],
              articles: [{ title: "LLMs for Customer Clustering", publication: "Product Coalition", readTime: "7 min read", link: "https://productcoalition.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "Head of Product Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Head of Product / CPO roles by scaling product portfolio output without linear headcount growth.",
            keyActionable: "Present an AI-native product line expansion plan to executive stakeholders.",
            resources: {
              courses: [{ title: "CPO Executive Program", platform: "Kellogg Executive Ed", instructor: "Kellogg Faculty", link: "https://www.kellogg.northwestern.edu/", duration: "3 months", badge: "Executive Track" }],
              videos: [{ title: "Leading Product Teams in the AI Revolution", speaker: "Marty Cagan", platform: "SVPG Talks", duration: "50 mins", link: "https://www.youtube.com/results?search_query=Marty+Cagan+SVPG+Leading+Product+Teams+AI" }],
              books: [{ title: "TRANSFORMED", author: "Marty Cagan", description: "Product operating model transformation.", link: "https://www.amazon.com/s?k=TRANSFORMED+Marty+Cagan" }],
              articles: [{ title: "The Next Era of Product Leadership", publication: "McKinsey Digital", readTime: "11 min read", link: "https://www.mckinsey.com/" }]
            }
          }
        ]
      },
      {
        id: "engineering_manager",
        title: "Engineering Manager (EM)",
        hoursSaved: "11.5 hrs/week",
        salaryBoost: "+30% comp growth",
        summary: "Leads engineering team delivery, technical architecture, code quality, and team coaching.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Engineering AI Tooling & Governance",
            duration: "Weeks 1-2",
            valueAdded: "Establishes clear GitHub Copilot guidelines preventing IP leakage while improving developer velocity.",
            keyActionable: "Deploy developer AI usage policy and set up secure code review sandboxes.",
            resources: {
              courses: [{ title: "AI for Software Leaders", platform: "LinkedIn Learning", instructor: "Tomer Cohen", link: "https://www.linkedin.com/learning/", duration: "3 hrs", badge: "Essential" }],
              videos: [{ title: "Developer Velocity & Copilot", speaker: "GitHub Engineering", platform: "GitHub Dev", duration: "22 mins", link: "https://www.youtube.com/results?search_query=GitHub+Copilot+Developer+Velocity" }],
              books: [{ title: "Accelerate", author: "Nicole Forsgren et al.", description: "DevOps and engineering metrics.", link: "https://www.amazon.com/s?k=Accelerate+Nicole+Forsgren" }],
              articles: [{ title: "Building AI-First Engineering Teams", publication: "MIT Sloan", readTime: "8 min read", link: "https://sloanreview.mit.edu/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Automated Code Review & Tech Debt Audits",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 7 hours/week by using AI to auto-cluster technical debt logs and draft code review feedback.",
            keyActionable: "Use Claude 3.5 Sonnet to analyze pull request velocity and tech debt bottlenecks.",
            resources: {
              courses: [{ title: "Prompt Engineering for Developers", platform: "DeepLearning.AI", instructor: "Andrew Ng", link: "https://www.deeplearning.ai/", duration: "5 hrs", badge: "Top Rated" }],
              videos: [{ title: "AI Code Audits & Refactoring", speaker: "Tech Lead at Stripe", platform: "LeadDev", duration: "25 mins", link: "https://www.youtube.com/results?search_query=LeadDev+AI+Code+Audits+Refactoring" }],
              books: [{ title: "Competing in the Age of AI", author: "Marco Iansiti", description: "Software architecture with AI.", link: "https://www.amazon.com/s?k=Competing+in+the+Age+of+AI+Marco+Iansiti" }],
              articles: [{ title: "AI for Engineering Managers", publication: "Pragmatic Engineer", readTime: "10 min read", link: "https://blog.pragmaticengineer.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Talent Performance Reviews & 1-on-1 Prep",
            duration: "Weeks 5-8",
            valueAdded: "Reduces 1-on-1 prep and performance review drafting time by 60% with objective feedback framing prompts.",
            keyActionable: "Build prompt templates for drafting performance reviews from 360-degree feedback notes.",
            resources: {
              courses: [{ title: "People Analytics for Tech Managers", platform: "Wharton (Coursera)", instructor: "Prof. Cappelli", link: "https://www.coursera.org/", duration: "8 hrs", badge: "Practical" }],
              videos: [{ title: "Engineering Leadership & Performance Coaching", speaker: "VP Eng at Google", platform: "LeadDev", duration: "30 mins", link: "https://www.youtube.com/results?search_query=LeadDev+Google+Engineering+Leadership" }],
              books: [{ title: "The Manager's Path", author: "Camille Fournier", description: "Guide for tech leaders navigating growth.", link: "https://www.amazon.com/s?k=The+Managers+Path+Camille+Fournier" }],
              articles: [{ title: "Objective Performance Framing in Tech", publication: "HBR", readTime: "7 min read", link: "https://hbr.org/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Engineering Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of Engineering / Director roles by demonstrating 35% higher developer velocity and lower bug escape rate.",
            keyActionable: "Present a developer productivity ROI matrix to the CTO.",
            resources: {
              courses: [{ title: "Executive Leadership Program", platform: "Harvard Business School", instructor: "HBS Faculty", link: "https://online.hbs.edu/", duration: "4 weeks", badge: "Executive Certificate" }],
              videos: [{ title: "How AI Makes You a Strategic Tech Leader", speaker: "Atlassian CTO", platform: "LeadDev", duration: "28 mins", link: "https://www.youtube.com/results?search_query=Atlassian+CTO+Strategic+Engineering+Leadership+AI" }],
              books: [{ title: "Prediction Machines", author: "Ajay Agrawal", description: "AI economics in tech leadership.", link: "https://www.amazon.com/s?k=Prediction+Machines+Ajay+Agrawal" }],
              articles: [{ title: "Top Strategic Tech Trends", publication: "Gartner", readTime: "12 min read", link: "https://www.gartner.com/" }]
            }
          }
        ]
      }
    ]
  },

  // 2. FINANCIAL SERVICES & BANKING
  {
    id: "finance",
    title: "Financial Services & Banking",
    icon: "fa-chart-line",
    accent: "#10B981",
    tagline: "Corporate Finance, Investment Banking, Accounting & Insurance",
    roles: [
      {
        id: "financial_controller",
        title: "Financial Controller",
        hoursSaved: "12.0 hrs/week",
        salaryBoost: "+28% advancement rate",
        summary: "Ensures accounting accuracy, internal controls, month-end ledger close, and audit readiness.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Financial Integrity & Safe Enterprise AI",
            duration: "Weeks 1-2",
            valueAdded: "Ensures SOX compliance while deploying zero-data-retention sandboxes for non-sensitive commentary.",
            keyActionable: "Establish enterprise sandboxing protocols for Copilot in Excel to prevent data leakage.",
            resources: {
              courses: [{ title: "AI in Financial Services", platform: "NYU Stern (Coursera)", instructor: "Prof. Kose John", link: "https://www.coursera.org/search?query=AI+in+Financial+Services+NYU+Stern", duration: "10 hrs", badge: "Top Financial AI Course" }],
              videos: [{ title: "The Future of Accounting: AI Controls", speaker: "CFO of Microsoft", platform: "Microsoft Summit", duration: "22 mins", link: "https://www.youtube.com/results?search_query=Microsoft+Finance+Summit+AI+FP%26A" }],
              books: [{ title: "Artificial Intelligence in Finance", author: "Yves Hilpisch", description: "AI in financial analytics.", link: "https://www.amazon.com/s?k=Artificial+Intelligence+in+Finance+Yves+Hilpisch" }],
              articles: [{ title: "Generative AI in Accounting", publication: "CFO Magazine", readTime: "8 min read", link: "https://www.cfo.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Automated Ledger Reconciliation Diagnostics",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week during month-end close by auto-highlighting trial balance discrepancies.",
            keyActionable: "Run trial balance data through Copilot to flag ledger items with >5% unexpected variance.",
            resources: {
              courses: [{ title: "Copilot for Excel Masterclass", platform: "CFI", instructor: "CFI Experts", link: "https://corporatefinanceinstitute.com/", duration: "5 hrs", badge: "Practical CPE" }],
              videos: [{ title: "Automating Monthly Close with AI", speaker: "Head of FP&A at Stripe", platform: "FinTech Connect", duration: "28 mins", link: "https://www.youtube.com/results?search_query=Automating+Monthly+Financial+Close+with+AI+Stripe" }],
              books: [{ title: "Financial Intelligence", author: "Karen Berman", description: "Understanding numbers behind decisions.", link: "https://www.amazon.com/s?k=Financial+Intelligence+Karen+Berman" }],
              articles: [{ title: "AI Reshaping Monthly Close", publication: "Journal of Accountancy", readTime: "7 min read", link: "https://www.journalofaccountancy.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Audit Trail & Contract Penalty Scanning",
            duration: "Weeks 5-8",
            valueAdded: "Speeds up vendor payment audit and contract compliance checks by 70% using ChatPDF.",
            keyActionable: "Use ChatPDF to scan 100+ page vendor contracts to extract penalty clauses.",
            resources: {
              courses: [{ title: "Financial Analytics & AI", platform: "Wharton Online", instructor: "Wharton Faculty", link: "https://online.wharton.upenn.edu/", duration: "4 weeks", badge: "Ivy League" }],
              videos: [{ title: "LLMs for Financial Contract Audit", speaker: "Bloomberg AI Lead", platform: "Bloomberg Tech", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Bloomberg+LLMs+for+Financial+Data+Analysis" }],
              books: [{ title: "Financial Modeling in Excel", author: "Michael Rees", description: "Building robust models with AI.", link: "https://www.amazon.com/s?k=Financial+Modeling+in+Excel+Michael+Rees" }],
              articles: [{ title: "AI for Internal Controls", publication: "WSJ CFO Journal", readTime: "10 min read", link: "https://www.wsj.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Finance Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of Finance / Chief Accounting Officer by reducing audit prep cycle time by 50%.",
            keyActionable: "Present an automated accounting controls audit deck to the board.",
            resources: {
              courses: [{ title: "The Strategic CFO Program", platform: "Columbia Business School", instructor: "Columbia Faculty", link: "https://execed.business.columbia.edu", duration: "2 months", badge: "Executive Track" }],
              videos: [{ title: "Financial Controllers as Strategic Leaders", speaker: "CFO of Salesforce", platform: "Forbes Forum", duration: "40 mins", link: "https://www.youtube.com/results?search_query=Salesforce+CFO+Strategic+Business+Partner" }],
              books: [{ title: "Reinventing the CFO", author: "Jeremy Hope", description: "Moving from scorekeeper to strategic creator.", link: "https://www.amazon.com/s?k=Reinventing+the+CFO+Jeremy+Hope" }],
              articles: [{ title: "The AI-Enabled CFO", publication: "McKinsey Finance", readTime: "12 min read", link: "https://www.mckinsey.com/" }]
            }
          }
        ]
      },
      {
        id: "fpa_manager",
        title: "FP&A Manager",
        hoursSaved: "13.0 hrs/week",
        salaryBoost: "+32% comp premium",
        summary: "Drives financial planning, budgeting, forecasting, variance commentary, and capital allocation.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Financial Modeling & AI Baseline",
            duration: "Weeks 1-2",
            valueAdded: "Establishes secure AI guidelines for forecasting models without compromising sensitive revenue figures.",
            keyActionable: "Set up enterprise AI data masking templates for monthly P&L commentary.",
            resources: {
              courses: [{ title: "AI in Financial Services", platform: "NYU Stern", instructor: "Prof. Kose John", link: "https://www.coursera.org/", duration: "10 hrs", badge: "Top Course" }],
              videos: [{ title: "AI in FP&A Forecasting", speaker: "CFO of Microsoft", platform: "Microsoft Summit", duration: "22 mins", link: "https://www.youtube.com/results?search_query=Microsoft+Finance+Summit+AI+FP%26A" }],
              books: [{ title: "Artificial Intelligence in Finance", author: "Yves Hilpisch", description: "AI applications in FP&A.", link: "https://www.amazon.com/s?k=Artificial+Intelligence+in+Finance+Yves+Hilpisch" }],
              articles: [{ title: "Generative AI in FP&A", publication: "CFO Magazine", readTime: "8 min read", link: "https://www.cfo.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Automated P&L Variance Commentary",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 9 hours/week during monthly close by using Copilot to draft P&L variance explanations.",
            keyActionable: "Run trial balance data through Copilot to draft department heads' variance notes.",
            resources: {
              courses: [{ title: "Copilot for Excel Masterclass", platform: "CFI", instructor: "CFI Experts", link: "https://corporatefinanceinstitute.com/", duration: "5 hrs", badge: "CPE Credits" }],
              videos: [{ title: "Automating FP&A Variance Reports", speaker: "Head of FP&A at Stripe", platform: "FinTech Connect", duration: "28 mins", link: "https://www.youtube.com/results?search_query=Automating+Monthly+Financial+Close+with+AI+Stripe" }],
              books: [{ title: "Financial Intelligence", author: "Karen Berman", description: "Understanding financial drivers.", link: "https://www.amazon.com/s?k=Financial+Intelligence+Karen+Berman" }],
              articles: [{ title: "AI Reshaping Monthly Commentary", publication: "Journal of Accountancy", readTime: "7 min read", link: "https://www.journalofaccountancy.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Predictive Scenario Sensitivity Modeling",
            duration: "Weeks 5-8",
            valueAdded: "Models 5-year revenue sensitivity scenarios 5x faster using natural-language python interpreters.",
            keyActionable: "Build natural-language financial forecasting models for board scenarios.",
            resources: {
              courses: [{ title: "Financial Analytics & AI", platform: "Wharton Online", instructor: "Wharton Faculty", link: "https://online.wharton.upenn.edu/", duration: "4 weeks", badge: "Certificate" }],
              videos: [{ title: "Using LLMs for Financial Data Analysis", speaker: "Bloomberg AI Lead", platform: "Bloomberg", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Bloomberg+LLMs+for+Financial+Data+Analysis" }],
              books: [{ title: "Financial Modeling in Excel", author: "Michael Rees", description: "Building models augmented by AI.", link: "https://www.amazon.com/s?k=Financial+Modeling+in+Excel+Michael+Rees" }],
              articles: [{ title: "AI Levers for Capital Allocation", publication: "WSJ CFO Journal", readTime: "10 min read", link: "https://www.wsj.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "CFO Succession & Strategic Partnering",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Director of FP&A / CFO succession by delivering proactive capital allocation insights.",
            keyActionable: "Present a strategic capital forecasting deck to executive leadership.",
            resources: {
              courses: [{ title: "Strategic CFO Program", platform: "Columbia Business School", instructor: "Columbia Faculty", link: "https://execed.business.columbia.edu", duration: "2 months", badge: "Executive" }],
              videos: [{ title: "How FP&A Leaders Become Strategic Partners", speaker: "CFO of Salesforce", platform: "Forbes Forum", duration: "40 mins", link: "https://www.youtube.com/results?search_query=Salesforce+CFO+Strategic+Business+Partner" }],
              books: [{ title: "Reinventing the CFO", author: "Jeremy Hope", description: "Moving from scorekeeper to strategic creator.", link: "https://www.amazon.com/s?k=Reinventing+the+CFO+Jeremy+Hope" }],
              articles: [{ title: "The AI-Enabled CFO", publication: "McKinsey Finance", readTime: "12 min read", link: "https://www.mckinsey.com/" }]
            }
          }
        ]
      },
      {
        id: "risk_manager",
        title: "Risk & Compliance Manager",
        hoursSaved: "11.0 hrs/week",
        salaryBoost: "+27% advancement rate",
        summary: "Identifies, assesses, and mitigates enterprise operational risks, regulatory compliance breaches, and policy violations.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Regulatory Compliance & Safe AI",
            duration: "Weeks 1-2",
            valueAdded: "Ensures compliance with regulatory frameworks (SOX/GDPR) while scanning compliance policy updates.",
            keyActionable: "Audit current risk reporting workflows for AI document search integration.",
            resources: {
              courses: [{ title: "AI Risk Governance", platform: "Coursera", instructor: "Dr. Jules White", link: "https://www.coursera.org/", duration: "8 hrs", badge: "Essential" }],
              videos: [{ title: "AI in Financial Risk & Regulation", speaker: "FinTech Legal Lead", platform: "YouTube", duration: "20 mins", link: "https://www.youtube.com/results?search_query=AI+in+Financial+Risk+and+Regulation" }],
              books: [{ title: "The AI Advantage", author: "Thomas Davenport", description: "Deploying AI in enterprise risk.", link: "https://www.amazon.com/s?k=The+AI+Advantage+Thomas+Davenport" }],
              articles: [{ title: "AI Levers for Risk Management", publication: "Gartner Risk", readTime: "9 min read", link: "https://www.gartner.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "ChatPDF Compliance Document Auditing",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by converting 200+ page regulatory documents into gap analysis tables instantly.",
            keyActionable: "Use ChatPDF to scan updated SOX guidelines and map gaps to internal controls.",
            resources: {
              courses: [{ title: "Document Intelligence Masterclass", platform: "DeepLearning.AI", instructor: "Andrew Ng", link: "https://www.deeplearning.ai/", duration: "4 hrs", badge: "Hands-on" }],
              videos: [{ title: "Scanning Regulatory PDFs with LLMs", speaker: "Compliance Tech Lead", platform: "YouTube", duration: "18 mins", link: "https://www.youtube.com/results?search_query=Scanning+Regulatory+PDFs+with+LLMs" }],
              books: [{ title: "Prediction Machines", author: "Ajay Agrawal", description: "Predictive risk modeling.", link: "https://www.amazon.com/s?k=Prediction+Machines+Ajay+Agrawal" }],
              articles: [{ title: "Automating Regulatory Compliance", publication: "WSJ Compliance", readTime: "8 min read", link: "https://www.wsj.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Automated Audit Readiness Checklists",
            duration: "Weeks 5-8",
            valueAdded: "Cuts external auditor prep time by 50% using automated compliance evidence formatting.",
            keyActionable: "Create reusable prompt templates for evidence gathering during annual audit.",
            resources: {
              courses: [{ title: "Enterprise AI Security", platform: "Wharton", instructor: "Wharton Faculty", link: "https://online.wharton.upenn.edu/", duration: "4 weeks", badge: "Certificate" }],
              videos: [{ title: "Building Audit Readiness with AI", speaker: "PwC Risk Partner", platform: "PwC YouTube", duration: "25 mins", link: "https://www.youtube.com/results?search_query=PwC+Building+Audit+Readiness+with+AI" }],
              books: [{ title: "Competing in the Age of AI", author: "Marco Iansiti", description: "Risk management in digital orgs.", link: "https://www.amazon.com/s?k=Competing+in+the+Age+of+AI+Marco+Iansiti" }],
              articles: [{ title: "Audit Trail Automation", publication: "Journal of Accountancy", readTime: "10 min read", link: "https://www.journalofaccountancy.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "Chief Risk Officer (CRO) Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Chief Risk Officer / VP of Governance roles by delivering proactive enterprise risk mitigation.",
            keyActionable: "Present an AI-powered Enterprise Risk Management (ERM) strategy to the Audit Committee.",
            resources: {
              courses: [{ title: "Executive Program in Risk Leadership", platform: "Columbia", instructor: "Columbia Faculty", link: "https://execed.business.columbia.edu", duration: "2 months", badge: "Executive" }],
              videos: [{ title: "The Next Era of Risk Leadership", speaker: "CRO of JPMorgan", platform: "Risk Summit", duration: "35 mins", link: "https://www.youtube.com/results?search_query=JPMorgan+CRO+Next+Era+of+Risk+Leadership" }],
              books: [{ title: "Reinventing Risk Management", author: "Jeremy Hope", description: "Strategic risk management.", link: "https://www.amazon.com/s?k=Reinventing+Risk+Management" }],
              articles: [{ title: "Top Priorities for CROs", publication: "McKinsey Risk", readTime: "11 min read", link: "https://www.mckinsey.com/" }]
            }
          }
        ]
      }
    ]
  },

  // 3. HEALTHCARE & LIFE SCIENCES
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: "fa-heart-pulse",
    accent: "#8B5CF6",
    tagline: "Hospitals, Health Tech, Clinical Research & Pharmaceuticals",
    roles: [
      {
        id: "clinical_ops_manager",
        title: "Clinical Operations Manager",
        hoursSaved: "10.5 hrs/week",
        salaryBoost: "+26% advancement rate",
        summary: "Manages clinical trial execution, medical facility operations, patient flow, and clinical staff coordination.",
        roadmap: [
          {
            stepNumber: 1,
            title: "HIPAA Compliance & Administrative AI Baseline",
            duration: "Weeks 1-2",
            valueAdded: "Ensures zero PHI risk while enabling administrative productivity tools for clinical scheduling.",
            keyActionable: "Implement zero-data-retention BAA enterprise AI settings for administrative clinical documentation.",
            resources: {
              courses: [{ title: "AI in Healthcare Specialization", platform: "Stanford University (Coursera)", instructor: "Dr. Andrew Ng", link: "https://www.coursera.org/search?query=AI+in+Healthcare+Stanford", duration: "1 month", badge: "Top Healthcare Course" }],
              videos: [{ title: "AI and HIPAA Compliance", speaker: "CMO at Mayo Clinic", platform: "Mayo Tech", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Mayo+Clinic+AI+and+HIPAA+compliance" }],
              books: [{ title: "Deep Medicine", author: "Eric Topol, MD", description: "How AI frees clinicians from paperwork.", link: "https://www.amazon.com/s?k=Deep+Medicine+Eric+Topol" }],
              articles: [{ title: "Governing AI in Clinical Ops", publication: "NEJM AI", readTime: "9 min read", link: "https://ai.nejm.org/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Clinical Audit Prep & Shift Schedule Optimization",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by auto-summarizing complex clinical guidelines and predicting staffing coverage gaps.",
            keyActionable: "Use Claude 3.5 Sonnet with zero-PHI data to generate hospital compliance audit checklists.",
            resources: {
              courses: [{ title: "Healthcare Operations & AI", platform: "Harvard Medical School", instructor: "HMS Faculty", link: "https://postgraduateeducation.hms.harvard.edu/", duration: "2 weeks", badge: "Medical Leadership" }],
              videos: [{ title: "Reducing Admin Burden in Hospitals", speaker: "COO of Johns Hopkins", platform: "Admin Summit", duration: "30 mins", link: "https://www.youtube.com/results?search_query=Johns+Hopkins+reducing+administrative+burden+AI" }],
              books: [{ title: "The Digital Doctor", author: "Robert Wachter, MD", description: "Navigating tech transformation in hospital ops.", link: "https://www.amazon.com/s?k=The+Digital+Doctor+Robert+Wachter" }],
              articles: [{ title: "AI in Clinical Operations", publication: "HFMA Journal", readTime: "8 min read", link: "https://www.hfma.org/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Automated Patient Workflow & SOP Generation",
            duration: "Weeks 5-8",
            valueAdded: "Reduces patient discharge bottlenecks by 30% using automated administrative summary formatting.",
            keyActionable: "Draft standardized clinical administrative SOPs using structured prompts.",
            resources: {
              courses: [{ title: "Health Informatics & AI", platform: "Johns Hopkins", instructor: "JHU Health Faculty", link: "https://www.coursera.org/", duration: "4 weeks", badge: "Clinical Informatics" }],
              videos: [{ title: "Ambient Intelligence & Admin Automation", speaker: "Microsoft Nuance Team", platform: "Microsoft Health", duration: "20 mins", link: "https://www.youtube.com/results?search_query=Microsoft+Nuance+DAX+Ambient+Clinical+Intelligence" }],
              books: [{ title: "Care After COVID", author: "Shantanu Nundy, MD", description: "Redesigning health ops with AI.", link: "https://www.amazon.com/s?k=Care+After+COVID+Shantanu+Nundy" }],
              articles: [{ title: "Streamlining Clinical Workflows", publication: "Health Affairs", readTime: "10 min read", link: "https://www.healthaffairs.org/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Clinical Operations Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of Clinical Operations / Health System COO roles by cutting administrative overhead by 35%.",
            keyActionable: "Present a hospital-wide administrative AI ROI strategy to the executive board.",
            resources: {
              courses: [{ title: "Executive Healthcare Leadership", platform: "Yale SOM", instructor: "Yale Faculty", link: "https://som.yale.edu", duration: "6 weeks", badge: "Executive Certificate" }],
              videos: [{ title: "Leading Healthcare Organizations", speaker: "CEO of Kaiser", platform: "HLTH Conference", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Kaiser+Permanente+CEO+HLTH+Conference" }],
              books: [{ title: "Managing Healthcare Operations", author: "John Kimberly", description: "Strategic health system management.", link: "https://www.amazon.com/s?k=Managing+Healthcare+Operations+John+Kimberly" }],
              articles: [{ title: "Top Priorities for Health COOs", publication: "Modern Healthcare", readTime: "11 min read", link: "https://www.modernhealthcare.com/" }]
            }
          }
        ]
      },
      {
        id: "healthcare_admin",
        title: "Healthcare Administrator",
        hoursSaved: "11.0 hrs/week",
        salaryBoost: "+25% promotion velocity",
        summary: "Oversees business administration, Joint Commission accreditation, billing compliance, and facility budget.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Medical Facility AI Policy & Governance",
            duration: "Weeks 1-2",
            valueAdded: "Establishes administrative AI safety protocols for facility business staff without PHI exposure.",
            keyActionable: "Deploy facility-wide AI guidelines for administrative billing notes and staff schedules.",
            resources: {
              courses: [{ title: "AI in Healthcare Admin", platform: "Stanford (Coursera)", instructor: "Stanford Faculty", link: "https://www.coursera.org/", duration: "1 month", badge: "Top Rated" }],
              videos: [{ title: "Hospital Business Ops with AI", speaker: "COO of Cleveland Clinic", platform: "HLTH", duration: "22 mins", link: "https://www.youtube.com/results?search_query=Cleveland+Clinic+COO+Hospital+Business+Ops+AI" }],
              books: [{ title: "Deep Medicine", author: "Eric Topol, MD", description: "AI in administrative healthcare.", link: "https://www.amazon.com/s?k=Deep+Medicine+Eric+Topol" }],
              articles: [{ title: "AI for Health System Admin", publication: "Modern Healthcare", readTime: "8 min read", link: "https://www.modernhealthcare.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "JCAHO Accreditation Audit Prep",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week during accreditation season by auto-formatting facility compliance evidence.",
            keyActionable: "Use Claude 3.5 Sonnet to format Joint Commission audit prep checklists.",
            resources: {
              courses: [{ title: "Healthcare Admin & Operations", platform: "Harvard Medical School", instructor: "HMS Faculty", link: "https://postgraduateeducation.hms.harvard.edu/", duration: "2 weeks", badge: "Certificate" }],
              videos: [{ title: "Preparing Joint Commission Audits with AI", speaker: "JCAHO Auditor", platform: "YouTube", duration: "20 mins", link: "https://www.youtube.com/results?search_query=Preparing+Joint+Commission+Audits+with+AI" }],
              books: [{ title: "The Digital Doctor", author: "Robert Wachter, MD", description: "Digital hospital transformation.", link: "https://www.amazon.com/s?k=The+Digital+Doctor+Robert+Wachter" }],
              articles: [{ title: "Accreditation Efficiency Levers", publication: "HFMA Journal", readTime: "7 min read", link: "https://www.hfma.org/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Shift Gap Prediction & Staff Scheduling",
            duration: "Weeks 5-8",
            valueAdded: "Reduces overtime scheduling costs by 20% by using AI to predict peak patient admission periods.",
            keyActionable: "Build natural-language shift gap predictor models for nurse staffing.",
            resources: {
              courses: [{ title: "Health System Analytics", platform: "Johns Hopkins", instructor: "JHU Faculty", link: "https://www.coursera.org/", duration: "4 weeks", badge: "Informatics" }],
              videos: [{ title: "Nurse Scheduling Optimization with AI", speaker: "Director of Ops at Mayo", platform: "YouTube", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Nurse+Scheduling+Optimization+with+AI" }],
              books: [{ title: "Managing Healthcare Operations", author: "John Kimberly", description: "Health facility leadership.", link: "https://www.amazon.com/s?k=Managing+Healthcare+Operations+John+Kimberly" }],
              articles: [{ title: "AI Levers for Hospital Staffing", publication: "Health Affairs", readTime: "9 min read", link: "https://www.healthaffairs.org/" }]
            }
          },
          {
            stepNumber: 4,
            title: "Chief Administrative Officer (CAO) Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Chief Administrative Officer / Vice President of Hospital Ops by reducing operating overhead.",
            keyActionable: "Present a hospital business transformation roadmap to the Board of Trustees.",
            resources: {
              courses: [{ title: "Executive Program in Health Ops", platform: "Yale SOM", instructor: "Yale Faculty", link: "https://som.yale.edu", duration: "6 weeks", badge: "Executive" }],
              videos: [{ title: "Leading Hospitals of the Future", speaker: "CEO of Mount Sinai", platform: "Healthcare Summit", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Mount+Sinai+CEO+Healthcare+Summit" }],
              books: [{ title: "Care After COVID", author: "Shantanu Nundy", description: "Future health system ops.", link: "https://www.amazon.com/s?k=Care+After+COVID+Shantanu+Nundy" }],
              articles: [{ title: "Top Healthcare Admin Trends", publication: "Modern Healthcare", readTime: "11 min read", link: "https://www.modernhealthcare.com/" }]
            }
          }
        ]
      }
    ]
  },

  // 4. RETAIL, E-COMMERCE & SUPPLY CHAIN
  {
    id: "retail",
    title: "Retail, E-Commerce & Supply Chain",
    icon: "fa-shopping-cart",
    accent: "#F59E0B",
    tagline: "Consumer Goods, Logistics, E-Commerce & Omni-Channel Retail",
    roles: [
      {
        id: "supply_chain_manager",
        title: "Supply Chain Manager",
        hoursSaved: "11.5 hrs/week",
        salaryBoost: "+28% comp growth",
        summary: "Drives end-to-end supply chain optimization, inventory forecasting, supplier management, and fulfillment.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Supply Chain Resilience & AI Baseline",
            duration: "Weeks 1-2",
            valueAdded: "Shifts focus from floor troubleshooting to designing self-optimizing inventory workflows.",
            keyActionable: "Audit existing supplier delay data and export CSVs for AI pattern analysis.",
            resources: {
              courses: [{ title: "Supply Chain Management Specialization", platform: "Rutgers (Coursera)", instructor: "Prof. Leuschner", link: "https://www.coursera.org/search?query=Supply+Chain+Management+Rutgers", duration: "1 month", badge: "Industry Standard" }],
              videos: [{ title: "AI in Global Supply Chain", speaker: "Chief Logistics Officer at Amazon", platform: "Supply Chain Brain", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Amazon+AI+Global+Supply+Chain+Operations" }],
              books: [{ title: "The Resilient Enterprise", author: "Yossi Sheffi", description: "Resilient supply networks.", link: "https://www.amazon.com/s?k=The+Resilient+Enterprise+Yossi+Sheffi" }],
              articles: [{ title: "Generative AI in Supply Chain", publication: "SCMR", readTime: "8 min read", link: "https://www.scmr.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Vendor RFP Decision Matrices",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by converting 50+ page vendor PDF proposals into side-by-side decision matrices instantly.",
            keyActionable: "Use ChatPDF to compare 3 freight supplier proposals on cost, SLA guarantees, and fuel surcharges.",
            resources: {
              courses: [{ title: "AI & Data Analytics in Supply Chain", platform: "MIT CTL", instructor: "MIT Faculty", link: "https://ctl.mit.edu/", duration: "3 weeks", badge: "MIT Certificate" }],
              videos: [{ title: "Automating Procurement RFPs with AI", speaker: "Head of Procurement at Walmart", platform: "Summit", duration: "22 mins", link: "https://www.youtube.com/results?search_query=Walmart+Procurement+Automating+RFPs+AI" }],
              books: [{ title: "Strategic Supply Management", author: "Paul Cousins", description: "Advanced procurement strategy.", link: "https://www.amazon.com/s?k=Strategic+Supply+Management+Paul+Cousins" }],
              articles: [{ title: "Streamlining Logistics Procurement", publication: "Inbound Logistics", readTime: "7 min read", link: "https://www.inboundlogistics.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Predictive Inventory SOPs & Warehouse Bottlenecks",
            duration: "Weeks 5-8",
            valueAdded: "Reduces inventory stockout incidents by 25% using natural language forecasting prompts.",
            keyActionable: "Build an automated safety audit checklist for warehouse floor leads using Notion AI.",
            resources: {
              courses: [{ title: "Predictive Analytics for Logistics", platform: "Georgia Tech (edX)", instructor: "Georgia Tech Faculty", link: "https://www.edx.org/", duration: "4 weeks", badge: "Top Rated" }],
              videos: [{ title: "Building AI Workflows for Warehouse Ops", speaker: "Director of Ops at FedEx", platform: "Logistics Tech", duration: "30 mins", link: "https://www.youtube.com/results?search_query=FedEx+Building+AI+Workflows+for+Warehouse+Ops" }],
              books: [{ title: "Warehouse Management", author: "Gwynne Richards", description: "Distribution center best practices.", link: "https://www.amazon.com/s?k=Warehouse+Management+Gwynne+Richards" }],
              articles: [{ title: "AI Levers for Inventory", publication: "McKinsey Operations", readTime: "9 min read", link: "https://www.mckinsey.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Supply Chain Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Director / VP of Supply Chain roles by cutting logistics lead times by 35%.",
            keyActionable: "Present an end-to-end supply chain AI transformation strategy to the COO.",
            resources: {
              courses: [{ title: "Executive Program in Supply Chain", platform: "Stanford GSB", instructor: "Stanford Faculty", link: "https://www.gsb.stanford.edu/", duration: "1 month", badge: "Executive" }],
              videos: [{ title: "The Next 5 Years in Supply Chain Leadership", speaker: "COO of Target", platform: "NRF Big Show", duration: "40 mins", link: "https://www.youtube.com/results?search_query=Target+COO+NRF+Big+Show+Supply+Chain" }],
              books: [{ title: "The New Supply Chain Agenda", author: "Reuben Slone", description: "Supply chain as a competitive weapon.", link: "https://www.amazon.com/s?k=The+New+Supply+Chain+Agenda+Reuben+Slone" }],
              articles: [{ title: "Top Supply Chain Trends", publication: "Gartner", readTime: "12 min read", link: "https://www.gartner.com/" }]
            }
          }
        ]
      },
      {
        id: "procurement_lead",
        title: "Procurement & Sourcing Lead",
        hoursSaved: "12.0 hrs/week",
        salaryBoost: "+29% advancement rate",
        summary: "Leads vendor selection, RFP sourcing events, contract negotiations, and supplier cost containment.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Strategic Sourcing & AI Baseline",
            duration: "Weeks 1-2",
            valueAdded: "Establishes secure AI workflows for parsing vendor proposal documents and terms.",
            keyActionable: "Set up enterprise AI prompts for evaluating supplier financial stability.",
            resources: {
              courses: [{ title: "Procurement & Supply Management", platform: "Rutgers (Coursera)", instructor: "Rutgers Faculty", link: "https://www.coursera.org/", duration: "1 month", badge: "Essential" }],
              videos: [{ title: "AI in Procurement Strategy", speaker: "CPO of IBM", platform: "Procurement Leaders", duration: "22 mins", link: "https://www.youtube.com/results?search_query=IBM+CPO+AI+in+Procurement+Strategy" }],
              books: [{ title: "Strategic Supply Management", author: "Paul Cousins", description: "Advanced procurement strategy.", link: "https://www.amazon.com/s?k=Strategic+Supply+Management+Paul+Cousins" }],
              articles: [{ title: "Generative AI for Sourcing Leads", publication: "Procurement Magazine", readTime: "8 min read", link: "https://procurementmag.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Side-by-Side RFP Comparison Matrixing",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 9 hours/week by automatically parsing 100-page vendor proposals into clear comparison tables.",
            keyActionable: "Use ChatPDF to extract pricing tiers, SLAs, and risk clauses across 4 vendor proposals.",
            resources: {
              courses: [{ title: "AI Contract & RFP Intelligence", platform: "MIT CTL", instructor: "MIT Faculty", link: "https://ctl.mit.edu/", duration: "3 weeks", badge: "MIT Certificate" }],
              videos: [{ title: "Parsing RFPs with Claude & ChatGPT", speaker: "Procurement Director", platform: "YouTube", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Parsing+RFPs+with+Claude+ChatGPT" }],
              books: [{ title: "The AI Advantage", author: "Thomas Davenport", description: "Deploying AI in corporate sourcing.", link: "https://www.amazon.com/s?k=The+AI+Advantage+Thomas+Davenport" }],
              articles: [{ title: "Automating Sourcing Events", publication: "Supply Chain Digest", readTime: "7 min read", link: "https://www.scdigest.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Negotiation Leverage Script Generation",
            duration: "Weeks 5-8",
            valueAdded: "Improves supplier contract cost savings by 15% using AI-generated negotiation leverage talking points.",
            keyActionable: "Build structured prompt templates to draft supplier counter-offer letters.",
            resources: {
              courses: [{ title: "Negotiation & Strategic Contracting", platform: "Wharton", instructor: "Wharton Faculty", link: "https://online.wharton.upenn.edu/", duration: "4 weeks", badge: "Certificate" }],
              videos: [{ title: "AI-Powered Procurement Negotiations", speaker: "Sourcing VP at Walmart", platform: "Procurement Summit", duration: "28 mins", link: "https://www.youtube.com/results?search_query=Walmart+Sourcing+VP+Procurement+Negotiations+AI" }],
              books: [{ title: "Negotiating the Impossible", author: "Deepak Malhotra", description: "Mastering tough supplier deals.", link: "https://www.amazon.com/s?k=Negotiating+the+Impossible+Deepak+Malhotra" }],
              articles: [{ title: "AI Levers for Supplier Cost Reductions", publication: "McKinsey Operations", readTime: "9 min read", link: "https://www.mckinsey.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "Chief Procurement Officer (CPO) Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for Chief Procurement Officer / VP of Sourcing by scaling vendor coverage without linear team cost.",
            keyActionable: "Present a corporate supplier AI transformation roadmap to the CFO.",
            resources: {
              courses: [{ title: "Executive Procurement Leadership", platform: "Stanford GSB", instructor: "Stanford Faculty", link: "https://www.gsb.stanford.edu/", duration: "1 month", badge: "Executive" }],
              videos: [{ title: "The Strategic Role of the CPO", speaker: "CPO of Apple", platform: "Supply Chain Forum", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Apple+CPO+Supply+Chain+Forum" }],
              books: [{ title: "The New Supply Chain Agenda", author: "Reuben Slone", description: "Transforming procurement into strategy.", link: "https://www.amazon.com/s?k=The+New+Supply+Chain+Agenda+Reuben+Slone" }],
              articles: [{ title: "Top Priorities for CPOs", publication: "Gartner Sourcing", readTime: "11 min read", link: "https://www.gartner.com/" }]
            }
          }
        ]
      }
    ]
  },

  // 5. HUMAN RESOURCES & CORPORATE OPERATIONS
  {
    id: "hr",
    title: "Human Resources & Corporate Operations",
    icon: "fa-users-gear",
    accent: "#EC4899",
    tagline: "Corporate HR, People Analytics, Talent & Office Ops",
    roles: [
      {
        id: "hrbp_lead",
        title: "HR Business Partner (HRBP)",
        hoursSaved: "10.0 hrs/week",
        salaryBoost: "+25% promotion rate",
        summary: "Aligns human resources strategy with business goals, advising leaders on talent retention and org design.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Ethical HR AI & Data Privacy Protocols",
            duration: "Weeks 1-2",
            valueAdded: "Ensures strict adherence to anti-bias regulations and privacy rules in hiring, promotions, and reviews.",
            keyActionable: "Draft an Enterprise Acceptable AI Use policy for HR recruiting tools and internal communications.",
            resources: {
              courses: [{ title: "AI & People Analytics", platform: "Wharton (Coursera)", instructor: "Prof. Peter Cappelli", link: "https://www.coursera.org/search?query=People+Analytics+Wharton", duration: "8 hrs", badge: "Top HR Analytics Course" }],
              videos: [{ title: "Ethical AI in Human Resources", speaker: "CPO at LinkedIn", platform: "HR Tech", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Ethical+AI+in+Human+Resources+LinkedIn" }],
              books: [{ title: "Data-Driven HR", author: "Bernard Marr", description: "Using AI and analytics in HR.", link: "https://www.amazon.com/s?k=Data-Driven+HR+Bernard+Marr" }],
              articles: [{ title: "Navigating AI Bias in Talent", publication: "SHRM Insights", readTime: "8 min read", link: "https://www.shrm.org/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Pulse Survey Sentiment & Rubric Generation",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 7 hours/week by converting 500+ qualitative survey comments into clear emotional tone clusters.",
            keyActionable: "Use ChatGPT Team to cluster employee exit interview feedback into top 3 retention risk factors.",
            resources: {
              courses: [{ title: "Generative AI for HR Leaders", platform: "AIHR", instructor: "AIHR Experts", link: "https://www.aihr.com/", duration: "10 hrs", badge: "HR Certified" }],
              videos: [{ title: "Analyzing Employee Surveys with LLMs", speaker: "Head of People Analytics at Google", platform: "World", duration: "28 mins", link: "https://www.youtube.com/results?search_query=Google+Head+of+People+Analytics+LLMs" }],
              books: [{ title: "Work Rules!", author: "Laszlo Bock", description: "Insights from Inside Google.", link: "https://www.amazon.com/s?k=Work+Rules+Laszlo+Bock" }],
              articles: [{ title: "How AI Transforms HR Ops", publication: "McKinsey People", readTime: "9 min read", link: "https://www.mckinsey.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Personalized Onboarding & Performance Framing",
            duration: "Weeks 5-8",
            valueAdded: "Improves 90-day new hire retention by 20% through automated, role-tailored 30-60-90 onboarding roadmaps.",
            keyActionable: "Build a Custom HR GPT trained on your company's benefit guidelines and internal handbook.",
            resources: {
              courses: [{ title: "Strategic HR Management", platform: "Cornell ILR", instructor: "Cornell Faculty", link: "https://ecornell.cornell.edu", duration: "4 weeks", badge: "Ivy League HR" }],
              videos: [{ title: "Building the AI-Enabled HR Department", speaker: "Josh Bersin", platform: "Bersin Academy", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Josh+Bersin+Building+the+AI+Enabled+HR+Department" }],
              books: [{ title: "The AI-Powered HR Department", author: "Josh Bersin", description: "Rebuilding talent around AI.", link: "https://joshbersin.com/" }],
              articles: [{ title: "Top HR Technology Trends", publication: "Gartner HR", readTime: "10 min read", link: "https://www.gartner.com/en/human-resources" }]
            }
          },
          {
            stepNumber: 4,
            title: "Chief People Officer (CPO) Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for CPO / VP of HR roles by transforming HR into a proactive talent retention and productivity engine.",
            keyActionable: "Present a board deck outlining your company's 3-year AI Talent Upskilling Strategy.",
            resources: {
              courses: [{ title: "CHRO Executive Program", platform: "Wharton", instructor: "Wharton Faculty", link: "https://executiveeducation.wharton.upenn.edu", duration: "3 months", badge: "Executive Track" }],
              videos: [{ title: "The Future of People Leadership", speaker: "CHRO of Salesforce", platform: "HR Forum", duration: "40 mins", link: "https://www.youtube.com/results?search_query=Salesforce+CHRO+Future+of+People+Leadership" }],
              books: [{ title: "Talent Wins", author: "Ram Charan et al.", description: "Aligning human capital with strategy.", link: "https://www.amazon.com/s?k=Talent+Wins+Ram+Charan" }],
              articles: [{ title: "The Strategic Role of the CHRO", publication: "Harvard Business Review", readTime: "12 min read", link: "https://hbr.org/" }]
            }
          }
        ]
      },
      {
        id: "talent_acquisition_lead",
        title: "Talent Acquisition Manager",
        hoursSaved: "11.0 hrs/week",
        salaryBoost: "+26% comp growth",
        summary: "Leads candidate sourcing, interview rubric design, employer brand strategy, and hiring pipeline metrics.",
        roadmap: [
          {
            stepNumber: 1,
            title: "AI Recruiting Baseline & Privacy",
            duration: "Weeks 1-2",
            valueAdded: "Establishes non-discriminatory candidate screening protocols using AI prompt rubrics.",
            keyActionable: "Deploy structured interview scoring rubrics generated by Claude 3.5 Sonnet.",
            resources: {
              courses: [{ title: "AI & Talent Acquisition", platform: "Wharton (Coursera)", instructor: "Wharton Faculty", link: "https://www.coursera.org/", duration: "8 hrs", badge: "Top Rated" }],
              videos: [{ title: "AI in Recruiting & Hiring", speaker: "Head of Talent at LinkedIn", platform: "Talent Connect", duration: "22 mins", link: "https://www.youtube.com/results?search_query=LinkedIn+Head+of+Talent+AI+in+Recruiting" }],
              books: [{ title: "Data-Driven HR", author: "Bernard Marr", description: "Metrics in recruiting.", link: "https://www.amazon.com/s?k=Data-Driven+HR+Bernard+Marr" }],
              articles: [{ title: "Non-Discriminatory AI Screening", publication: "SHRM", readTime: "8 min read", link: "https://www.shrm.org/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Tailored JD Rubric & Scorecard Generation",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by generating job descriptions and interview scorecards in minutes.",
            keyActionable: "Use structured prompts to turn raw hiring manager intake notes into competency scorecards.",
            resources: {
              courses: [{ title: "Generative AI for Recruiters", platform: "AIHR", instructor: "AIHR Experts", link: "https://www.aihr.com/", duration: "8 hrs", badge: "Certificate" }],
              videos: [{ title: "Drafting Scorecards with ChatGPT", speaker: "Recruiting Lead", platform: "YouTube", duration: "18 mins", link: "https://www.youtube.com/results?search_query=Drafting+Recruiting+Scorecards+with+ChatGPT" }],
              books: [{ title: "Work Rules!", author: "Laszlo Bock", description: "Google recruiting best practices.", link: "https://www.amazon.com/s?k=Work+Rules+Laszlo+Bock" }],
              articles: [{ title: "Accelerating Time-to-Hire", publication: "McKinsey", readTime: "7 min read", link: "https://www.mckinsey.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Candidate Resume Skill Matching",
            duration: "Weeks 5-8",
            valueAdded: "Reduces initial resume screening cycle time by 70% using natural-language skill matching.",
            keyActionable: "Build an automated resume summary assistant for hiring managers.",
            resources: {
              courses: [{ title: "Talent Analytics & AI", platform: "Cornell ILR", instructor: "Cornell Faculty", link: "https://ecornell.cornell.edu", duration: "3 weeks", badge: "Ivy League" }],
              videos: [{ title: "Automating Resume Matching with AI", speaker: "Recruiting Tech VP", platform: "HR Tech", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Automating+Resume+Matching+with+AI" }],
              books: [{ title: "The AI-Powered HR Department", author: "Josh Bersin", description: "Recruiting in the AI era.", link: "https://joshbersin.com/" }],
              articles: [{ title: "Candidate Experience Levers", publication: "Gartner HR", readTime: "9 min read", link: "https://www.gartner.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Talent Acquisition Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of Talent Acquisition by cutting time-to-hire by 40% while improving 90-day retention.",
            keyActionable: "Present an AI Recruiting Pipeline ROI strategy to the Chief People Officer.",
            resources: {
              courses: [{ title: "Executive Program in Talent Leadership", platform: "Wharton", instructor: "Wharton Faculty", link: "https://executiveeducation.wharton.upenn.edu", duration: "2 months", badge: "Executive" }],
              videos: [{ title: "The Future of Talent Acquisition", speaker: "CHRO of Microsoft", platform: "Talent Forum", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Microsoft+CHRO+Future+of+Talent+Acquisition" }],
              books: [{ title: "Talent Wins", author: "Ram Charan", description: "Connecting talent with enterprise value.", link: "https://www.amazon.com/s?k=Talent+Wins+Ram+Charan" }],
              articles: [{ title: "Top Talent Acquisition Trends", publication: "HBR", readTime: "11 min read", link: "https://hbr.org/" }]
            }
          }
        ]
      }
    ]
  },

  // 6. MANUFACTURING, INFRASTRUCTURE & CONSTRUCTION
  {
    id: "manufacturing",
    title: "Manufacturing & Infrastructure",
    icon: "fa-industry",
    accent: "#3B82F6",
    tagline: "Industrial Production, Heavy Equipment, Construction & Infrastructure",
    roles: [
      {
        id: "plant_manager",
        title: "Plant & Production Manager",
        hoursSaved: "11.5 hrs/week",
        salaryBoost: "+29% comp shift",
        summary: "Directs shop floor manufacturing production, machine uptime, plant safety compliance, and lean throughput.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Industrial Operations & AI Baseline",
            duration: "Weeks 1-2",
            valueAdded: "Establishes baseline AI tools for converting raw machine error codes and maintenance logs into clear action steps.",
            keyActionable: "Deploy AI prompt templates to digest equipment maintenance logs and highlight recurring fault patterns.",
            resources: {
              courses: [{ title: "Smart Manufacturing & AI Analytics", platform: "MIT xPro", instructor: "MIT Faculty", link: "https://xpro.mit.edu/courses/smart-manufacturing/", duration: "4 weeks", badge: "Industrial AI" }],
              videos: [{ title: "AI in Heavy Manufacturing & Operations", speaker: "COO of Siemens", platform: "Automation Summit", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Siemens+COO+AI+in+Heavy+Manufacturing" }],
              books: [{ title: "Industry 4.0", author: "Alasdair Gilchrist", description: "Industrial Internet of Things.", link: "https://www.amazon.com/s?k=Industry+4.0+Alasdair+Gilchrist" }],
              articles: [{ title: "AI-Driven Maintenance in Plant Ops", publication: "IndustryWeek", readTime: "8 min read", link: "https://www.industryweek.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Predictive Maintenance & Safety SOP Generation",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by automatically generating safety checklists and shift handover summaries.",
            keyActionable: "Use structured prompts to turn raw site notes into OSHA-aligned safety checklists.",
            resources: {
              courses: [{ title: "Predictive Maintenance Analytics", platform: "TU Delft (edX)", instructor: "TU Delft Faculty", link: "https://www.edx.org/", duration: "3 weeks", badge: "Certificate" }],
              videos: [{ title: "Automating Safety SOPs with AI", speaker: "Head of Safety at Caterpillar", platform: "Safety Summit", duration: "20 mins", link: "https://www.youtube.com/results?search_query=Caterpillar+Automating+Safety+SOPs+AI" }],
              books: [{ title: "Maintenance Best Practices", author: "Ramesh Gulati", description: "Operational reliability handbook.", link: "https://www.amazon.com/s?k=Maintenance+and+Reliability+Best+Practices+Ramesh+Gulati" }],
              articles: [{ title: "Generative AI Levers for Plant Managers", publication: "McKinsey", readTime: "9 min read", link: "https://www.mckinsey.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Throughput Bottleneck Elimination",
            duration: "Weeks 5-8",
            valueAdded: "Increases shop floor throughput by 15% using natural-language assembly bottleneck analysis.",
            keyActionable: "Build an automated shift handover log summary tool for floor supervisors.",
            resources: {
              courses: [{ title: "Industrial AI & Analytics", platform: "University of Michigan", instructor: "Michigan Faculty", link: "https://michiganross.umich.edu/", duration: "4 weeks", badge: "Certificate" }],
              videos: [{ title: "Factory Floor Optimization with AI", speaker: "Plant Director at GE", platform: "Industrial Forum", duration: "30 mins", link: "https://www.youtube.com/results?search_query=GE+Plant+Director+Factory+Floor+Optimization+AI" }],
              books: [{ title: "The Goal", author: "Eliyahu M. Goldratt", description: "Theory of constraints in manufacturing.", link: "https://www.amazon.com/s?k=The+Goal+Eliyahu+Goldratt" }],
              articles: [{ title: "Lean Manufacturing & AI", publication: "IndustryWeek", readTime: "8 min read", link: "https://www.industryweek.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Manufacturing Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of Operations / Plant Director roles by cutting unscheduled downtime by 40%.",
            keyActionable: "Present an AI Smart Plant ROI roadmap to the Executive VP of Operations.",
            resources: {
              courses: [{ title: "Manufacturing Leadership Program", platform: "Michigan Ross", instructor: "Michigan Faculty", link: "https://michiganross.umich.edu", duration: "1 month", badge: "Executive" }],
              videos: [{ title: "The Next Era of Industrial Operations", speaker: "CEO of GE Vernova", platform: "Forum", duration: "35 mins", link: "https://www.youtube.com/results?search_query=GE+Vernova+CEO+Industrial+Leadership+Forum" }],
              books: [{ title: "The Machine That Changed the World", author: "James Womack", description: "Lean principles and modern AI.", link: "https://www.amazon.com/s?k=The+Machine+That+Changed+the+World+Womack" }],
              articles: [{ title: "Top Manufacturing Priorities", publication: "Gartner Operations", readTime: "11 min read", link: "https://www.gartner.com/" }]
            }
          }
        ]
      },
      {
        id: "construction_pgm",
        title: "Construction Program Manager",
        hoursSaved: "12.0 hrs/week",
        salaryBoost: "+30% comp growth",
        summary: "Oversees large-scale construction site delivery, subcontractor timelines, safety compliance, and capital budget.",
        roadmap: [
          {
            stepNumber: 1,
            title: "Site Execution & AI Baseline",
            duration: "Weeks 1-2",
            valueAdded: "Establishes secure AI guidelines for digesting site inspection notes and subcontractor updates.",
            keyActionable: "Deploy AI prompt templates to format daily site progress reports.",
            resources: {
              courses: [{ title: "Construction Management & AI", platform: "Columbia (Coursera)", instructor: "Prof. Ibrahim Odeh", link: "https://www.coursera.org/search?query=Construction+Management+Columbia", duration: "4 weeks", badge: "Top Rated" }],
              videos: [{ title: "AI in Construction Site Management", speaker: "PMO Lead at Bechtel", platform: "Civil Engineering", duration: "25 mins", link: "https://www.youtube.com/results?search_query=Bechtel+Predictive+Schedule+Risk+AI" }],
              books: [{ title: "Construction Project Management", author: "Frederick Gould", description: "Modern site execution.", link: "https://www.amazon.com/s?k=Construction+Project+Management+Frederick+Gould" }],
              articles: [{ title: "AI Technology in Infrastructure", publication: "ENR", readTime: "8 min read", link: "https://www.enr.com/" }]
            }
          },
          {
            stepNumber: 2,
            title: "Subcontractor Timeline & WBS Risk Flagging",
            duration: "Weeks 3-4",
            valueAdded: "Reclaims 8 hours/week by using AI to auto-flag subcontractor schedule milestone delay risks.",
            keyActionable: "Run subcontractor progress updates through AI to highlight 10-day delay risks.",
            resources: {
              courses: [{ title: "Infrastructure Risk Analytics", platform: "Columbia", instructor: "Columbia Faculty", link: "https://www.coursera.org/", duration: "3 weeks", badge: "Certificate" }],
              videos: [{ title: "Predictive Schedule Risk in Infrastructure", speaker: "Bechtel Tech VP", platform: "YouTube", duration: "28 mins", link: "https://www.youtube.com/results?search_query=Bechtel+Predictive+Schedule+Risk+AI" }],
              books: [{ title: "The AI Advantage", author: "Thomas Davenport", description: "Deploying AI in capital projects.", link: "https://www.amazon.com/s?k=The+AI+Advantage+Thomas+Davenport" }],
              articles: [{ title: "Automating Site RFIs", publication: "ENR Magazine", readTime: "7 min read", link: "https://www.enr.com/" }]
            }
          },
          {
            stepNumber: 3,
            title: "Site Safety Inspection & RFI Automation",
            duration: "Weeks 5-8",
            valueAdded: "Reduces change order processing delays by 40% using automated RFI natural-language formatting.",
            keyActionable: "Build structured prompt templates to auto-format construction RFIs.",
            resources: {
              courses: [{ title: "Construction Analytics", platform: "Georgia Tech", instructor: "Georgia Tech Faculty", link: "https://www.edx.org/", duration: "4 weeks", badge: "Top Rated" }],
              videos: [{ title: "Automating Safety Inspection Logs", speaker: "Safety Lead at Turner Construction", platform: "YouTube", duration: "22 mins", link: "https://www.youtube.com/results?search_query=Turner+Construction+Automating+Safety+Logs" }],
              books: [{ title: "Project Management for Construction", author: "Chris Hendrickson", description: "Fundamental site principles.", link: "https://www.amazon.com/s?k=Project+Management+for+Construction" }],
              articles: [{ title: "AI Levers for Capital Construction", publication: "McKinsey Infrastructure", readTime: "9 min read", link: "https://www.mckinsey.com/" }]
            }
          },
          {
            stepNumber: 4,
            title: "VP of Infrastructure Progression",
            duration: "Weeks 9-12",
            valueAdded: "Positions you for VP of Infrastructure / Real Estate Development Lead by delivering projects 25% faster under budget.",
            keyActionable: "Present a capital infrastructure AI delivery strategy to executive developers.",
            resources: {
              courses: [{ title: "Executive Construction Leadership", platform: "Columbia Business School", instructor: "Columbia Faculty", link: "https://execed.business.columbia.edu", duration: "2 months", badge: "Executive" }],
              videos: [{ title: "The Future of Megaproject Execution", speaker: "CEO of Skanska", platform: "Infrastructure Forum", duration: "35 mins", link: "https://www.youtube.com/results?search_query=Skanska+CEO+Infrastructure+Forum" }],
              books: [{ title: "Prediction Machines", author: "Ajay Agrawal", description: "AI economics in megaprojects.", link: "https://www.amazon.com/s?k=Prediction+Machines+Ajay+Agrawal" }],
              articles: [{ title: "Top Infrastructure Trends", publication: "Gartner", readTime: "11 min read", link: "https://www.gartner.com/" }]
            }
          }
        ]
      }
    ]
  }
];

export const BASELINE_15_QUESTIONS = [
  // Pillar 1: AI Mindset & Core Literacy
  {
    id: "q1",
    pillar: "Mindset & Literacy",
    question: "How do you view AI's primary role in your day-to-day management workflow?",
    options: [
      { label: "A potential risk or replacement that requires caution and manual double-checking.", score: 1 },
      { label: "A convenient search assistant for quick answers, rewriting emails, or definitions.", score: 2 },
      { label: "A 24/7 Strategic Thought Partner that handles routine synthesis so I focus on high-impact leadership.", score: 3 }
    ]
  },
  {
    id: "q2",
    pillar: "Mindset & Literacy",
    question: "When an AI model produces a convincing answer that seems slightly off (a hallucination), what is your protocol?",
    options: [
      { label: "I get frustrated and stop using AI for that type of task altogether.", score: 1 },
      { label: "I manually re-check the facts using traditional search engines.", score: 2 },
      { label: "I use multi-shot verification prompting and ground the AI model with authoritative source documents.", score: 3 }
    ]
  },
  {
    id: "q3",
    pillar: "Mindset & Literacy",
    question: "How do you explain AI adoption to your direct reports or project team?",
    options: [
      { label: "We haven't discussed it formally; team members use personal accounts independently.", score: 1 },
      { label: "I encourage them to try ChatGPT for writing tasks if it saves them time.", score: 2 },
      { label: "I frame AI as a team force-multiplier, set clear SOPs, and show how it frees time for strategic projects.", score: 3 }
    ]
  },
  // Pillar 2: Prompt Engineering Mastery
  {
    id: "q4",
    pillar: "Prompt Engineering",
    question: "Which prompting technique do you regularly use when asking AI to generate complex managerial deliverables?",
    options: [
      { label: "Single short prompts like: 'Write a status report for my project.'", score: 1 },
      { label: "Role-based prompts like: 'Act as a Senior Program Manager and summarize these notes.'", score: 2 },
      { label: "Structured multi-shot prompts specifying Persona, Context, Constraints, Markdown Formatting, and Edge Cases.", score: 3 }
    ]
  },
  {
    id: "q5",
    pillar: "Prompt Engineering",
    question: "How do you handle raw, unstructured meeting notes or Slack threads when preparing C-suite updates?",
    options: [
      { label: "I manually read through all notes and type out bullet points line-by-line (2-4 hours).", score: 1 },
      { label: "I copy-paste raw text into ChatGPT and ask for a quick summary.", score: 2 },
      { label: "I run raw transcripts through a tailored Executive Digest Prompt template that outputs a 1-page RAID matrix.", score: 3 }
    ]
  },
  {
    id: "q6",
    pillar: "Prompt Engineering",
    question: "When evaluating complex documents (200-page vendor RFPs, clinical guidelines, or contracts), how do you use AI?",
    options: [
      { label: "I read and highlight PDFs manually.", score: 1 },
      { label: "I paste small sections into chat windows.", score: 2 },
      { label: "I use document intelligence tools (ChatPDF/Humata/Claude 3.5) to run side-by-side matrix comparisons.", score: 3 }
    ]
  },
  // Pillar 3: Data Security & Enterprise Governance
  {
    id: "q7",
    pillar: "Security & Governance",
    question: "What is your organization's setup for AI data privacy and security?",
    options: [
      { label: "Unregulated; employees use free public accounts without enterprise controls.", score: 1 },
      { label: "We have basic rules (e.g., don't paste customer names), but no sandboxed enterprise tools.", score: 2 },
      { label: "We deploy enterprise zero-data-retention sandboxes (Copilot 365, ChatGPT Team, BAA compliant setups).", score: 3 }
    ]
  },
  {
    id: "q8",
    pillar: "Security & Governance",
    question: "How do you handle sensitive employee reviews, financial data, or proprietary source code in prompts?",
    options: [
      { label: "I avoid putting any internal work data into AI tools out of security fear.", score: 1 },
      { label: "I paste internal data assuming the tool is private.", score: 2 },
      { label: "I strictly use enterprise-sandboxed models and apply anonymization templates before inputting data.", score: 3 }
    ]
  },
  {
    id: "q9",
    pillar: "Security & Governance",
    question: "Does your team have a documented Enterprise Acceptable AI Use Policy?",
    options: [
      { label: "No policy exists.", score: 1 },
      { label: "An informal verbal policy exists.", score: 2 },
      { label: "Yes, a formal documented policy covering IP protection, bias review, and human-in-the-loop signoff.", score: 3 }
    ]
  },
  // Pillar 4: Workflow Automation & SOP Integration
  {
    id: "q10",
    pillar: "Workflow Automation",
    question: "How are meeting action items and retrospectives handled in your team?",
    options: [
      { label: "Someone manually takes notes and emails them after the call.", score: 1 },
      { label: "We use basic meeting recording, but manual follow-up is still required.", score: 2 },
      { label: "Meeting AI bots (Otter/Fireflies) auto-record, extract action items, and sync directly to Jira/Asana.", score: 3 }
    ]
  },
  {
    id: "q11",
    pillar: "Workflow Automation",
    question: "Have you built custom GPTs or reusable prompt templates for your department?",
    options: [
      { label: "No, I type new prompts from scratch every time.", score: 1 },
      { label: "I save a few useful prompts in a personal document.", score: 2 },
      { label: "Yes, I built custom team GPTs pre-loaded with brand guidelines, PRD templates, and SOP rubrics.", score: 3 }
    ]
  },
  {
    id: "q12",
    pillar: "Workflow Automation",
    question: "How do you update recurring monthly/quarterly executive reporting decks?",
    options: [
      { label: "Manual spreadsheet updates and manual slide formatting (4-8+ hours).", score: 1 },
      { label: "Copying data into templates and asking AI to rewrite slide bullet points.", score: 2 },
      { label: "Automated pipelines where AI ingests ledger/project metrics and populates slide commentary instantly.", score: 3 }
    ]
  },
  // Pillar 5: Strategic Leadership & ROI Metrics
  {
    id: "q13",
    pillar: "Strategic ROI Leadership",
    question: "How do you track the business ROI of your team's AI adoption?",
    options: [
      { label: "We do not track AI ROI metrics.", score: 1 },
      { label: "We track qualitative feedback (e.g. 'team feels faster').", score: 2 },
      { label: "We measure exact weekly hours reclaimed, reduction in project cycle times, and cost savings.", score: 3 }
    ]
  },
  {
    id: "q14",
    pillar: "Strategic ROI Leadership",
    question: "How much of your weekly work hours are spent on strategic executive initiatives vs. administrative firefighting?",
    options: [
      { label: "80% administrative firefighting, 20% strategic leadership.", score: 1 },
      { label: "50% admin, 50% strategic project delivery.", score: 2 },
      { label: "20% automated admin, 80% strategic leadership, cross-functional growth, and executive positioning.", score: 3 }
    ]
  },
  {
    id: "q15",
    pillar: "Strategic ROI Leadership",
    question: "How do you position your AI achievements during executive performance reviews or promotion discussions?",
    options: [
      { label: "I don't mention AI tools; I just talk about completed tasks.", score: 1 },
      { label: "I mention that I use ChatGPT to work faster.", score: 2 },
      { label: "I present data-backed case studies showing how AI automation expanded my scope and elevated team delivery velocity.", score: 3 }
    ]
  }
];
