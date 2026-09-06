// ISO/IEC 27001:2022 Comprehensive Knowledge & Assessment Data

export const OVERVIEW_INFO = {
  title: "ISO/IEC 27001:2022 Standard Overview",
  version: "ISO/IEC 27001:2022 (Latest Revision)",
  description: "ISO/IEC 27001 is the international gold standard for Information Security Management Systems (ISMS). It enables organizations to protect sensitive financial data, intellectual property, employee credentials, and third-party information through systematic risk management.",
  ciaTriad: [
    { title: "Confidentiality", desc: "Ensuring information is accessible only to authorized individuals and entities.", icon: "Lock" },
    { title: "Integrity", desc: "Safeguarding the accuracy, completeness, and authenticity of data and processing methods.", icon: "ShieldCheck" },
    { title: "Availability", desc: "Ensuring authorized users have timely, reliable access to information assets whenever required.", icon: "Server" }
  ],
  pdcaCycle: [
    { step: "Plan", title: "Establish ISMS", desc: "Analyze context, define scope, assess security risks, and formulate treatment plans." },
    { step: "Do", title: "Implement & Operate", desc: "Deploy security controls, enact policies, deliver awareness training, and manage operational workflows." },
    { step: "Check", title: "Monitor & Evaluate", desc: "Conduct internal audits, review control metrics, measure performance, and perform management reviews." },
    { step: "Act", title: "Maintain & Improve", desc: "Take corrective actions for non-conformities and continuously optimize security posture." }
  ]
};

export const CLAUSES_DATA = [
  {
    id: "clause-4",
    title: "Clause 4: Context of the Organization",
    summary: "Determines internal & external security issues, stakeholder needs, and defines the official ISMS scope boundaries.",
    questions: [
      {
        id: "q4_1",
        code: "4.1",
        question: "Has the organization identified internal and external issues relevant to its purpose and information security outcomes?",
        guidance: "Review business objectives, regulatory requirements, market conditions, and internal capabilities.",
        evidence: "SWOT analysis, Context of Organization document, register of internal/external issues."
      },
      {
        id: "q4_2",
        code: "4.2",
        question: "Are interested parties (clients, regulators, partners) and their information security requirements explicitly documented?",
        guidance: "Map all stakeholders and contractual/legal security mandates expected from your organization.",
        evidence: "Interested Parties Matrix, Legal & Regulatory Compliance Register, SLA contracts."
      },
      {
        id: "q4_3",
        code: "4.3",
        question: "Is the boundary and applicability of the Information Security Management System (ISMS) clearly defined and documented?",
        guidance: "Include locations, business units, assets, and technology stacks covered under certification.",
        evidence: "Official ISMS Scope Statement document, architecture diagrams."
      },
      {
        id: "q4_4",
        code: "4.4",
        question: "Is an ISMS established, implemented, maintained, and continually improved in accordance with ISO 27001 requirements?",
        guidance: "Demonstrate that ISMS processes interlink effectively.",
        evidence: "ISMS Framework Overview, process maps, governance records."
      }
    ]
  },
  {
    id: "clause-5",
    title: "Clause 5: Leadership",
    summary: "Ensures top management demonstrates commitment, establishes security policy, and assigns organizational roles.",
    questions: [
      {
        id: "q5_1",
        code: "5.1",
        question: "Does top management demonstrate active leadership, executive support, and alignment of ISMS with strategic direction?",
        guidance: "Management must allocate resources, approve budgets, and champion security culture.",
        evidence: "Board meeting minutes, budget approvals, executive messaging."
      },
      {
        id: "q5_2",
        code: "5.2",
        question: "Is an Information Security Policy approved by top management, communicated across the organization, and available to stakeholders?",
        guidance: "Policy must include commitment to meeting security requirements and continual improvement.",
        evidence: "Top-level Information Security Policy signed by CEO/Board, intranet publication records."
      },
      {
        id: "q5_3",
        code: "5.3",
        question: "Are security roles, responsibilities, and operational authorities clearly assigned and communicated across all levels?",
        guidance: "Assign CISO/ISM responsibilities, incident handlers, and control owners.",
        evidence: "RACI Matrix, job descriptions, organizational chart, appointment letters."
      }
    ]
  },
  {
    id: "clause-6",
    title: "Clause 6: Planning",
    summary: "Addresses security risks and opportunities, formulates Risk Treatment Plans, and sets measurable security objectives.",
    questions: [
      {
        id: "q6_1_1",
        code: "6.1.1",
        question: "Has the organization established a repeatable Risk Assessment Process that identifies threats, vulnerabilities, likelihood, and impact?",
        guidance: "Methodology must set criteria for risk acceptance and risk assessment thresholds.",
        evidence: "Information Security Risk Assessment & Treatment Methodology."
      },
      {
        id: "q6_1_2",
        code: "6.1.2",
        question: "Is a formal Risk Treatment Plan (RTP) created to address identified risks with clear control selection and ownership?",
        guidance: "Select controls from Annex A or custom options, assign owners and target completion dates.",
        evidence: "Risk Register & Risk Treatment Plan (RTP)."
      },
      {
        id: "q6_1_3",
        code: "6.1.3",
        question: "Is a formal Statement of Applicability (SoA) documented, covering all Annex A controls with justifications for inclusion/exclusion?",
        guidance: "Must account for mandatory legal/contractual requirements and risk assessment findings.",
        evidence: "Signed Statement of Applicability (SoA) document."
      },
      {
        id: "q6_2",
        code: "6.2",
        question: "Are measurable Information Security Objectives established at relevant functions and levels, with tracking mechanisms?",
        guidance: "Objectives must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound).",
        evidence: "Security Objectives Matrix, KPI tracking dashboards."
      }
    ]
  },
  {
    id: "clause-7",
    title: "Clause 7: Support",
    summary: "Provides necessary resources, competence, security awareness training, internal communication, and documented information control.",
    questions: [
      {
        id: "q7_1_2",
        code: "7.1 & 7.2",
        question: "Are adequate resources provided, and are personnel competent based on appropriate education, training, or experience?",
        guidance: "Verify security certifications, skill assessments, and resource budgeting.",
        evidence: "Training certificates, competency matrix, resume audits."
      },
      {
        id: "q7_3",
        code: "7.3",
        question: "Do all employees and contractors receive regular security awareness training relevant to their role?",
        guidance: "Covers phishing, password safety, data handling, and incident reporting.",
        evidence: "Awareness training attendance logs, LMS completion metrics, phishing simulation test results."
      },
      {
        id: "q7_5",
        code: "7.5",
        question: "Is documented information properly controlled, created, updated, protected, and version-controlled?",
        guidance: "Maintain document control procedures with approval headers, version tables, and retention rules.",
        evidence: "Document Control Procedure, version history headers on policies."
      }
    ]
  },
  {
    id: "clause-8",
    title: "Clause 8: Operation",
    summary: "Executes security operational processes, conducts regular risk assessments, and enforces control implementation.",
    questions: [
      {
        id: "q8_1",
        code: "8.1",
        question: "Are operational security processes planned, implemented, and controlled in accordance with Clause 6 requirements?",
        guidance: "Ensure third-party operational processes are managed and change management is enforced.",
        evidence: "Change Request logs, operational procedure documentation."
      },
      {
        id: "q8_2_3",
        code: "8.2 & 8.3",
        question: "Are information security risk assessments and risk treatments conducted at planned intervals or when significant changes occur?",
        guidance: "Assess new systems, major software releases, and infrastructure updates.",
        evidence: "Updated Risk Register entries, project risk evaluations."
      }
    ]
  },
  {
    id: "clause-9",
    title: "Clause 9: Performance Evaluation",
    summary: "Monitors, measures, analyzes, conducts internal ISMS audits, and performs formal Executive Management Reviews.",
    questions: [
      {
        id: "q9_1",
        code: "9.1",
        question: "Does the organization evaluate information security performance and the effectiveness of the ISMS?",
        guidance: "Track metrics such as patch response time, incident counts, SLA compliance.",
        evidence: "Metrics & KPI dashboard reports."
      },
      {
        id: "q9_2",
        code: "9.2",
        question: "Are internal audits conducted at planned intervals to confirm ISMS compliance with standard requirements?",
        guidance: "Internal auditors must be competent and independent of the audited department.",
        evidence: "Internal Audit Plan, Internal Audit Report, Audit Findings Log."
      },
      {
        id: "q9_3",
        code: "9.3",
        question: "Does top management review the ISMS at planned intervals to ensure its continuing suitability and effectiveness?",
        guidance: "Review previous action items, audit results, risk assessment outputs, and feedback.",
        evidence: "Management Review Meeting (MRM) Minutes & Signed Action Items."
      }
    ]
  },
  {
    id: "clause-10",
    title: "Clause 10: Improvement",
    summary: "Drives continual improvement and manages nonconformities through root-cause analysis and corrective actions.",
    questions: [
      {
        id: "q10_1_2",
        code: "10.1 & 10.2",
        question: "When nonconformities occur, are root-cause analyses performed and effective corrective actions implemented to prevent recurrence?",
        guidance: "Document nonconformity, determine cause, take corrective action, and review effectiveness.",
        evidence: "Corrective Action Reports (CARs), Nonconformity Register."
      }
    ]
  }
];

export const ANNEX_A_CATEGORIES = [
  {
    id: "A.5",
    name: "Organizational Controls",
    count: 37,
    description: "Controls related to governance, security policies, asset management, access authorization, supplier relationships, and incident management.",
    controls: [
      { id: "A.5.1", name: "Policies for information security", type: "Preventative", concept: "Identify", desc: "Security policies defined, approved by management, published, and reviewed periodically." },
      { id: "A.5.2", name: "Information security roles and responsibilities", type: "Preventative", concept: "Identify", desc: "Security roles defined and allocated according to organizational needs." },
      { id: "A.5.3", name: "Segregation of duties", type: "Preventative", concept: "Protect", desc: "Conflicting duties and areas of responsibility segregated to reduce misuse risks." },
      { id: "A.5.4", name: "Management responsibilities", type: "Preventative", concept: "Protect", desc: "Management requires all personnel to apply security in accordance with policies." },
      { id: "A.5.5", name: "Contact with authorities", type: "Preventative", concept: "Identify", desc: "Establish contact with relevant authorities (cyber crime, law enforcement)." },
      { id: "A.5.6", name: "Contact with special interest groups", type: "Preventative", concept: "Identify", desc: "Maintain contact with security forums and professional associations." },
      { id: "A.5.7", name: "Threat intelligence", type: "Preventative", concept: "Identify", desc: "Information relating to security threats collected and analyzed." },
      { id: "A.5.8", name: "Information security in project management", type: "Preventative", concept: "Protect", desc: "Integrate security into project lifecycle regardless of project type." },
      { id: "A.5.9", name: "Inventory of information and other associated assets", type: "Preventative", concept: "Identify", desc: "Develop and maintain inventory of assets including owners." },
      { id: "A.5.10", name: "Acceptable use of information and assets", type: "Preventative", concept: "Protect", desc: "Rules for acceptable use of assets and handling procedures documented." },
      { id: "A.5.11", name: "Return of assets", type: "Corrective", concept: "Protect", desc: "Personnel return all organizational assets upon termination." },
      { id: "A.5.12", name: "Classification of information", type: "Preventative", concept: "Identify", desc: "Classify information according to legal/value/sensitivity criteria." },
      { id: "A.5.13", name: "Labelling of information", type: "Preventative", concept: "Protect", desc: "Develop labelling procedures in line with classification scheme." },
      { id: "A.5.14", name: "Information transfer", type: "Preventative", concept: "Protect", desc: "Rules and agreements for secure transfer of information across channels." },
      { id: "A.5.15", name: "Access control", type: "Preventative", concept: "Protect", desc: "Rules to control physical and logical access based on business needs." },
      { id: "A.5.16", name: "Identity management", type: "Preventative", concept: "Protect", desc: "Full lifecycle of identities managed from creation to deletion." },
      { id: "A.5.17", name: "Authentication information", type: "Preventative", concept: "Protect", desc: "Allocation and management of authentication info (passwords, MFA keys)." },
      { id: "A.5.18", name: "Access rights", type: "Preventative", concept: "Protect", desc: "Access rights granted, modified, and revoked in accordance with policy." },
      { id: "A.5.19", name: "Information security in supplier relationships", type: "Preventative", concept: "Identify", desc: "Processes to manage security risks associated with supplier access." },
      { id: "A.5.20", name: "Addressing information security within supplier agreements", type: "Preventative", concept: "Protect", desc: "Security requirements established and agreed upon in supplier contracts." },
      { id: "A.5.21", name: "Managing information security in the ICT supply chain", type: "Preventative", concept: "Identify", desc: "Processes to manage ICT product and service supply chain risks." },
      { id: "A.5.22", name: "Monitoring, review and change management of supplier services", type: "Detective", concept: "Detect", desc: "Regularly monitor, review, and audit supplier service delivery." },
      { id: "A.5.23", name: "Information security for use of cloud services", type: "Preventative", concept: "Protect", desc: "Processes for cloud service acquisition, use, management, and exit." },
      { id: "A.5.24", name: "Information security incident management planning and preparation", type: "Corrective", concept: "Respond", desc: "Establish incident management processes, roles, and escalation procedures." },
      { id: "A.5.25", name: "Assessment and decision on information security events", type: "Detective", concept: "Detect", desc: "Evaluate security events to determine if they constitute security incidents." },
      { id: "A.5.26", name: "Response to information security incidents", type: "Corrective", concept: "Respond", desc: "Respond to incidents according to documented procedures." },
      { id: "A.5.27", name: "Learning from information security incidents", type: "Corrective", concept: "Recover", desc: "Knowledge gained from security incidents used to strengthen controls." },
      { id: "A.5.28", name: "Collection of evidence", type: "Corrective", concept: "Respond", desc: "Establish procedures to identify, collect, and preserve digital evidence." },
      { id: "A.5.29", name: "Information security during disruption", type: "Corrective", concept: "Recover", desc: "Plan how to maintain security at an acceptable level during disruptions." },
      { id: "A.5.30", name: "ICT readiness for business continuity", type: "Corrective", concept: "Recover", desc: "Ensure ICT readiness based on business continuity objectives (RTO/RPO)." },
      { id: "A.5.31", name: "Legal, statutory, regulatory and contractual requirements", type: "Preventative", concept: "Identify", desc: "Identify and document all legal and regulatory security compliance requirements." },
      { id: "A.5.32", name: "Intellectual property rights", type: "Preventative", concept: "Protect", desc: "Implement procedures to protect intellectual property and software licenses." },
      { id: "A.5.33", name: "Protection of records", type: "Preventative", concept: "Protect", desc: "Records protected from loss, destruction, falsification, and unauthorized access." },
      { id: "A.5.34", name: "Privacy and protection of PII", type: "Preventative", concept: "Protect", desc: "Ensure privacy and protection of Personally Identifiable Information (GDPR/Data Laws)." },
      { id: "A.5.35", name: "Independent review of information security", type: "Detective", concept: "Detect", desc: "Approach to managing security reviewed independently at planned intervals." },
      { id: "A.5.36", name: "Compliance with policies and standards for information security", type: "Detective", concept: "Detect", desc: "Regularly review compliance of operational systems with security policies." },
      { id: "A.5.37", name: "Documented operating procedures", type: "Preventative", concept: "Protect", desc: "Operating procedures for information processing facilities documented and available." }
    ]
  },
  {
    id: "A.6",
    name: "People Controls",
    count: 8,
    description: "Controls involving human resources, pre-employment background screening, security awareness training, and remote working.",
    controls: [
      { id: "A.6.1", name: "Screening", type: "Preventative", concept: "Identify", desc: "Background verification checks conducted on all candidates prior to employment." },
      { id: "A.6.2", name: "Terms and conditions of employment", type: "Preventative", concept: "Protect", desc: "Employment agreements state security responsibilities of employee and organization." },
      { id: "A.6.3", name: "Information security awareness, education and training", type: "Preventative", concept: "Protect", desc: "Personnel receive security awareness training appropriate to their role." },
      { id: "A.6.4", name: "Disciplinary process", type: "Corrective", concept: "Respond", desc: "Formal disciplinary process to take action against security breaches." },
      { id: "A.6.5", name: "Responsibilities after termination or change of employment", type: "Preventative", concept: "Protect", desc: "Security duties that remain valid after termination are enforced." },
      { id: "A.6.6", name: "Confidentiality or non-disclosure agreements", type: "Preventative", concept: "Protect", desc: "NDAs reflecting organizational needs signed by staff and contractors." },
      { id: "A.6.7", name: "Remote working", type: "Preventative", concept: "Protect", desc: "Security measures implemented when personnel work remotely." },
      { id: "A.6.8", name: "Information security event reporting", type: "Detective", concept: "Detect", desc: "Mechanism for employees to report observed or suspected security weaknesses." }
    ]
  },
  {
    id: "A.7",
    name: "Physical Controls",
    count: 14,
    description: "Physical perimeters, secure entry, equipment protection, cabling security, and clear desk policies.",
    controls: [
      { id: "A.7.1", name: "Physical security perimeters", type: "Preventative", concept: "Protect", desc: "Security perimeters defined and used to protect areas containing sensitive data." },
      { id: "A.7.2", name: "Physical entry", type: "Preventative", concept: "Protect", desc: "Secure entry controls protect physical premises against unauthorized access." },
      { id: "A.7.3", name: "Securing offices, rooms and facilities", type: "Preventative", concept: "Protect", desc: "Physical security for offices and facilities designed and applied." },
      { id: "A.7.4", name: "Physical security monitoring", type: "Detective", concept: "Detect", desc: "Premises continuously monitored for unauthorized physical access (CCTV, alarms)." },
      { id: "A.7.5", name: "Protecting against physical and environmental threats", type: "Preventative", concept: "Protect", desc: "Protection against natural disasters, fire, flood, power failure designed." },
      { id: "A.7.6", name: "Working in secure areas", type: "Preventative", concept: "Protect", desc: "Safety procedures and access limits for working in secure areas established." },
      { id: "A.7.7", name: "Clear desk and clear screen", type: "Preventative", concept: "Protect", desc: "Clear desk rules for papers and clear screen rules for computers enforced." },
      { id: "A.7.8", name: "Equipment siting and protection", type: "Preventative", concept: "Protect", desc: "Equipment sited securely to reduce risks from environmental hazards and access." },
      { id: "A.7.9", name: "Security of assets off-premises", type: "Preventative", concept: "Protect", desc: "Off-premises assets protected considering different risks outside office." },
      { id: "A.7.10", name: "Storage media", type: "Preventative", concept: "Protect", desc: "Storage media managed, stored, sanitized, and disposed of securely." },
      { id: "A.7.11", name: "Supporting utilities", type: "Preventative", concept: "Protect", desc: "Utilities (power, HVAC, water) protected from failures and disruptions." },
      { id: "A.7.12", name: "Cabling security", type: "Preventative", concept: "Protect", desc: "Power and telecommunications cables protected from interception or damage." },
      { id: "A.7.13", name: "Equipment maintenance", type: "Preventative", concept: "Protect", desc: "Equipment correctly maintained to ensure integrity and availability." },
      { id: "A.7.14", name: "Secure disposal or re-use of equipment", type: "Preventative", concept: "Protect", desc: "Equipment containing storage media verified clear before disposal." }
    ]
  },
  {
    id: "A.8",
    name: "Technological Controls",
    count: 34,
    description: "Access controls, cryptographic protection, malware prevention, network security, vulnerability management, logging & monitoring.",
    controls: [
      { id: "A.8.1", name: "User endpoint devices", type: "Preventative", concept: "Protect", desc: "Information on user endpoints protected with encryption, EDR, and remote wipe." },
      { id: "A.8.2", name: "Privileged access rights", type: "Preventative", concept: "Protect", desc: "Allocation and use of privileged access rights strictly controlled and audited." },
      { id: "A.8.3", name: "Information access restriction", type: "Preventative", concept: "Protect", desc: "Access to information restricted in accordance with access control policy." },
      { id: "A.8.4", name: "Access to source code", type: "Preventative", concept: "Protect", desc: "Read/write access to source code and developer repos strictly managed." },
      { id: "A.8.5", name: "Secure authentication", type: "Preventative", concept: "Protect", desc: "Secure authentication techniques (MFA, passwordless) implemented." },
      { id: "A.8.6", name: "Capacity management", type: "Preventative", concept: "Protect", desc: "Resource use monitored and projected to meet future capacity needs." },
      { id: "A.8.7", name: "Protection against malware", type: "Preventative", concept: "Protect", desc: "Malware detection software deployed and updated regularly across systems." },
      { id: "A.8.8", name: "Management of technical vulnerabilities", type: "Preventative", concept: "Protect", desc: "Vulnerabilities evaluated, patched, and mitigated in timely manner." },
      { id: "A.8.9", name: "Configuration management", type: "Preventative", concept: "Protect", desc: "Hardware, software, and cloud configs established, hardened, and tracked." },
      { id: "A.8.10", name: "Information deletion", type: "Preventative", concept: "Protect", desc: "Data deleted securely when no longer required by retention policy." },
      { id: "A.8.11", name: "Data masking", type: "Preventative", concept: "Protect", desc: "Data masking/anonymization used in accordance with access policies." },
      { id: "A.8.12", name: "Data leakage prevention (DLP)", type: "Detective", concept: "Detect", desc: "DLP measures applied to prevent unauthorized data exfiltration." },
      { id: "A.8.13", name: "Information backup", type: "Corrective", concept: "Recover", desc: "Backups of data and software taken and tested regularly (immutable/offsite)." },
      { id: "A.8.14", name: "Redundancy of information processing facilities", type: "Preventative", concept: "Protect", desc: "High availability and redundancy designed into critical infrastructure." },
      { id: "A.8.15", name: "Logging", type: "Detective", concept: "Detect", desc: "Audit logs recording events, user activities, and errors created and retained." },
      { id: "A.8.16", name: "Monitoring activities", type: "Detective", concept: "Detect", desc: "Networks and systems monitored for anomalous behavior and SIEM alerts." },
      { id: "A.8.17", name: "Clock synchronization", type: "Preventative", concept: "Protect", desc: "Clocks of all systems synchronized to accurate time sources (NTP)." },
      { id: "A.8.18", name: "Use of privileged utility programs", type: "Preventative", concept: "Protect", desc: "Utility programs capable of overriding system controls restricted." },
      { id: "A.8.19", name: "Installation of software on operational systems", type: "Preventative", concept: "Protect", desc: "Software installation on live systems strictly controlled." },
      { id: "A.8.20", name: "Networks security", type: "Preventative", concept: "Protect", desc: "Networks secured and managed to protect underlying systems." },
      { id: "A.8.21", name: "Security of network services", type: "Preventative", concept: "Protect", desc: "Security mechanisms and service levels of network services identified." },
      { id: "A.8.22", name: "Segregation of networks", type: "Preventative", concept: "Protect", desc: "Groups of information services and users segregated into network subnets." },
      { id: "A.8.23", name: "Web filtering", type: "Preventative", concept: "Protect", desc: "Access to malicious external websites managed to prevent infection." },
      { id: "A.8.24", name: "Use of cryptography", type: "Preventative", concept: "Protect", desc: "Encryption algorithms and key management implemented (at rest & transit)." },
      { id: "A.8.25", name: "Secure development life cycle (SDLC)", type: "Preventative", concept: "Protect", desc: "Rules for secure software development established and enforced." },
      { id: "A.8.26", name: "Application security requirements", type: "Preventative", concept: "Protect", desc: "Security specs identified when acquiring or developing applications." },
      { id: "A.8.27", name: "Secure system architecture and engineering principles", type: "Preventative", concept: "Protect", desc: "Principles for engineering secure systems established and documented." },
      { id: "A.8.28", name: "Secure coding", type: "Preventative", concept: "Protect", desc: "Secure coding guidelines applied during software development." },
      { id: "A.8.29", name: "Security testing in development and acceptance", type: "Detective", concept: "Detect", desc: "Security testing (SAST/DAST/Pentest) performed during development." },
      { id: "A.8.30", name: "Outsourced development", type: "Preventative", concept: "Protect", desc: "Supervise and monitor outsourced software development activities." },
      { id: "A.8.31", name: "Separation of development, test and production environments", type: "Preventative", concept: "Protect", desc: "Development, testing, and prod environments segregated." },
      { id: "A.8.32", name: "Change management", type: "Preventative", concept: "Protect", desc: "Changes to processing facilities and software subjected to formal controls." },
      { id: "A.8.33", name: "Test information", type: "Preventative", concept: "Protect", desc: "Test data selected, protected, and controlled (avoid production PII)." },
      { id: "A.8.34", name: "Protection of information systems during audit testing", type: "Preventative", concept: "Protect", desc: "Audit tests involving live systems planned and agreed to minimize disruption." }
    ]
  }
];

export const READINESS_STEPS = [
  {
    step: 1,
    title: "Executive Sponsorship & Project Charter",
    duration: "Weeks 1 - 2",
    description: "Obtain formal executive commitment, allocate budget, assign CISO / ISMS Lead, and establish the steering committee.",
    deliverables: ["Project Charter", "Budget Allocation", "ISMS Lead Appointment"]
  },
  {
    step: 2,
    title: "Define ISMS Scope & Boundaries",
    duration: "Weeks 2 - 3",
    description: "Determine physical locations, business units, tech stacks, external interfaces, and third parties covered by certification.",
    deliverables: ["ISMS Scope Document", "Architecture Diagram", "Interested Parties Matrix"]
  },
  {
    step: 3,
    title: "Information Risk Assessment & Treatment",
    duration: "Weeks 4 - 6",
    description: "Inventory information assets, identify threats & vulnerabilities, score risk impact & likelihood, and draft Risk Treatment Plan (RTP).",
    deliverables: ["Asset Inventory", "Risk Assessment Methodology", "Risk Register & RTP"]
  },
  {
    step: 4,
    title: "Statement of Applicability (SoA) Formulation",
    duration: "Weeks 6 - 7",
    description: "Evaluate all 93 Annex A controls against risk assessments, business objectives, and regulatory requirements. Record inclusions & exclusions.",
    deliverables: ["Signed Statement of Applicability (SoA)"]
  },
  {
    step: 5,
    title: "Draft Security Policies & Procedures",
    duration: "Weeks 7 - 10",
    description: "Formulate top-level Security Policy and operational procedures (Access Control, Incident Response, BC/DR, Vendor Security, Data Classification).",
    deliverables: ["Information Security Policy", "Operational SOPs", "Document Control Standard"]
  },
  {
    step: 6,
    title: "Control Implementation & Technical Safeguards",
    duration: "Weeks 10 - 16",
    description: "Deploy technical, physical, and organizational controls: MFA, EDR, SIEM logging, encryption, secure coding guidelines, physical access keys.",
    deliverables: ["SIEM Configuration", "MFA Rollout", "Patch Management Schedules"]
  },
  {
    step: 7,
    title: "Organization-Wide Security Training & Awareness",
    duration: "Weeks 14 - 18",
    description: "Roll out mandatory employee security awareness training, conduct phishing simulation benchmarks, and train incident response teams.",
    deliverables: ["Awareness Training Logs", "Phishing Campaign Metrics"]
  },
  {
    step: 8,
    title: "Comprehensive Internal Audit",
    duration: "Weeks 18 - 20",
    description: "Conduct independent internal audit covering Clauses 4-10 and all active Annex A controls. Record nonconformities (NCs) and observations.",
    deliverables: ["Internal Audit Plan", "Internal Audit Report", "Nonconformity Register"]
  },
  {
    step: 9,
    title: "Formal Executive Management Review",
    duration: "Week 21",
    description: "Conduct Management Review Meeting (MRM) with leadership to review audit findings, risk register status, security KPIs, and continuous improvement.",
    deliverables: ["Management Review Minutes", "Signed Executive Action Items"]
  },
  {
    step: 10,
    title: "Stage 1 & Stage 2 External Certification Audit",
    duration: "Weeks 22 - 26",
    description: "Stage 1: Certification body checks documentation readiness. Stage 2: Auditor samples evidence, interviews staff, tests controls, and issues ISO 27001 Certificate.",
    deliverables: ["Stage 1 Clearance", "Stage 2 Audit Report", "ISO/IEC 27001 Certificate"]
  }
];

export const MANDATORY_DOCUMENTS = [
  { id: "doc-1", title: "ISMS Scope Statement", clause: "Clause 4.3", required: true, desc: "Defines the exact boundaries, locations, technologies, and services included in the ISMS." },
  { id: "doc-2", title: "Information Security Policy & Objectives", clause: "Clause 5.2 & 6.2", required: true, desc: "High-level commitment signed by top management establishing security vision and measurable targets." },
  { id: "doc-3", title: "Risk Assessment & Risk Treatment Methodology", clause: "Clause 6.1.2", required: true, desc: "Defines criteria for risk evaluation, threat scoring matrix, and acceptable risk thresholds." },
  { id: "doc-4", title: "Statement of Applicability (SoA)", clause: "Clause 6.1.3", required: true, desc: "Formal list of 93 Annex A controls with inclusion/exclusion status and legal/contractual rationale." },
  { id: "doc-5", title: "Risk Treatment Plan (RTP)", clause: "Clause 6.1.3 & 8.3", required: true, desc: "Action plan specifying risk owners, selected controls, budget, and implementation deadlines." },
  { id: "doc-6", title: "Risk Assessment & Risk Treatment Report", clause: "Clause 8.2 & 8.3", required: true, desc: "Documented results of the security risk evaluation and mitigation decisions." },
  { id: "doc-7", title: "Competence Records & Security Training Logs", clause: "Clause 7.2 & 7.3", required: true, desc: "Evidence of staff qualifications, security awareness sessions, and training completion." },
  { id: "doc-8", title: "Operational SOPs & Change Control Records", clause: "Clause 8.1", required: true, desc: "Standard operating procedures for IT operations, backup routines, and software deployment changes." },
  { id: "doc-9", title: "Internal Audit Process & Audit Reports", clause: "Clause 9.2", required: true, desc: "Independent audit schedule, audit plans, gathered evidence, and audit outcome logs." },
  { id: "doc-10", title: "Management Review Meeting (MRM) Minutes", clause: "Clause 9.3", required: true, desc: "Signed minutes of executive management review sessions evaluating ISMS performance." },
  { id: "doc-11", title: "Nonconformities & Corrective Action Logs", clause: "Clause 10.2", required: true, desc: "Tracked security incidents, audit nonconformities, root-cause findings, and preventive steps." },
  { id: "doc-12", title: "Access Control & Password Policy", clause: "Annex A.5.15", required: true, desc: "Rules for provisioning, privilege management, password complexity, and MFA." },
  { id: "doc-13", title: "Incident Response & Management Plan", clause: "Annex A.5.24", required: true, desc: "Step-by-step triage, escalation, containment, and post-incident reporting protocol." },
  { id: "doc-14", title: "Business Continuity & ICT Readiness Plan", clause: "Annex A.5.30", required: true, desc: "RTO/RPO targets, backup recovery workflows, and disaster simulation exercises." },
  { id: "doc-15", title: "Supplier Security Management Policy", clause: "Annex A.5.19", required: true, desc: "Vendor security vetting rules, contract clauses, and annual supplier security reviews." },
  { id: "doc-16", title: "Data Classification & Asset Handling Rules", clause: "Annex A.5.12", required: true, desc: "Defines Confidential, Internal, and Public data levels and handling/labeling rules." }
];
