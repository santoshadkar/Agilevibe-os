window.roadmapData = [
  {
    pathwayId: 'legal-privacy',
    pathwayName: 'Pathway A: Legal, Privacy & Compliance Career Track',
    targetRoles: 'Chief Privacy Officer, AI Compliance Officer, Legal Counsel, AI Policy Lead',
    steps: [
      {
        stepNumber: 1,
        certId: 'cipp',
        certName: 'CIPP/E (IAPP)',
        title: 'Step 1: Foundational Privacy Law',
        prereqs: 'None (Open to all)',
        purpose: 'Master GDPR principles, lawfulness of processing, and data subject rights.',
        unlocks: 'Unlocks 50% of the legal context required for IAPP AIGP.'
      },
      {
        stepNumber: 2,
        certId: 'aigp',
        certName: 'IAPP AIGP',
        title: 'Step 2: Core AI Governance & EU AI Act',
        prereqs: 'CIPP/E recommended',
        purpose: 'Learn EU AI Act high-risk classifications, NIST AI RMF, and corporate AI policy.',
        unlocks: 'Unlocks corporate AI governance lead roles and ISO 42001 implementation.'
      },
      {
        stepNumber: 3,
        certId: 'iso42001',
        certName: 'ISO/IEC 42001 Lead Implementer',
        title: 'Step 3: Enterprise AI Management Systems (AIMS)',
        prereqs: 'AIGP + 3 yrs governance experience',
        purpose: 'Operationalize AI policy into auditable ISO standards (Clauses 4-10).',
        unlocks: 'Qualifies you to build & lead ISO 42001 certified AI programs.'
      }
    ]
  },
  {
    pathwayId: 'security-tech',
    pathwayName: 'Pathway B: Cybersecurity & Technical Engineering Track',
    targetRoles: 'AI Security Lead, CISO, DevSecOps Manager, Red Team Lead',
    steps: [
      {
        stepNumber: 1,
        certId: 'cissp',
        certName: 'CISSP ((ISC)²)',
        title: 'Step 1: Enterprise Cybersecurity Architecture',
        prereqs: '5 Years Work Experience',
        purpose: 'Master infrastructure security, cloud defense, software security, and IAM.',
        unlocks: 'Fulfills technical security baseline needed for specialized AI defense.'
      },
      {
        stepNumber: 2,
        certId: 'aaism',
        certName: 'ISACA AAISM',
        title: 'Step 2: Advanced AI Security Management',
        prereqs: 'CISSP or CISM recommended',
        purpose: 'Defend against prompt injection, model poisoning, LLM data leaks, and OWASP LLM Top 10.',
        unlocks: 'Specializes you as an AI Security Architect defending production ML models.'
      },
      {
        stepNumber: 3,
        certId: 'aigp',
        certName: 'IAPP AIGP',
        title: 'Step 3: Executive AI Risk & Regulatory Alignment',
        prereqs: 'CISSP + AAISM background',
        purpose: 'Bridge technical security controls into executive regulatory compliance.',
        unlocks: 'Positions you for CISO / Chief AI Officer leadership.'
      }
    ]
  },
  {
    pathwayId: 'risk-audit',
    pathwayName: 'Pathway C: Enterprise Risk & IT Audit Track',
    targetRoles: 'IT Audit Director, Enterprise Risk Lead, Model Auditor',
    steps: [
      {
        stepNumber: 1,
        certId: 'crisc',
        certName: 'CRISC (ISACA)',
        title: 'Step 1: IT & Enterprise Risk Controls',
        prereqs: '3 Years Work Experience',
        purpose: 'Master threat modeling, IT risk identification, and internal control design.',
        unlocks: 'Establishes systemic risk evaluation framework for AI systems.'
      },
      {
        stepNumber: 2,
        certId: 'aaia',
        certName: 'ISACA AAIA',
        title: 'Step 2: Advanced AI System Audit',
        prereqs: 'CRISC or CISA recommended',
        purpose: 'Audit algorithmic bias, evaluate SHAP/LIME explainability, and verify data lineage.',
        unlocks: 'Qualifies you to conduct technical audits of complex neural networks.'
      },
      {
        stepNumber: 3,
        certId: 'iso42001',
        certName: 'ISO/IEC 42001 Lead Auditor',
        title: 'Step 3: Formal Accreditation Lead Auditor',
        prereqs: 'AAIA + verified audit log',
        purpose: 'Conduct formal third-party ISO 42001 certification audits for enterprises.',
        unlocks: 'Senior ISO accreditation auditor status.'
      }
    ]
  }
];

window.interdependenciesData = [
  { from: 'CIPP/E', to: 'IAPP AIGP', strength: 'Strong Direct Pre-requisite', description: 'CIPP provides the GDPR and data protection law foundation that forms ~40% of AIGP syllabus.' },
  { from: 'CISSP', to: 'ISACA AAISM', strength: 'Strong Technical Pre-requisite', description: 'CISSP covers general security architecture, while AAISM specifically targets adversarial AI threat defense.' },
  { from: 'CRISC', to: 'ISO 42001 Lead', strength: 'Direct Methodological Bridge', description: 'CRISC risk evaluation methodologies directly map into ISO 42001 Clause 6 risk assessments.' },
  { from: 'IAPP AIGP', to: 'ISO 42001 Lead', strength: 'Policy-to-Standards Bridge', description: 'AIGP establishes high-level AI policy, while ISO 42001 provides the auditable operational controls.' },
  { from: 'CRISC', to: 'ISACA AAIA', strength: 'Control-to-Algorithmic Audit', description: 'CRISC internal controls transition into AAIA algorithmic fairness and bias testing procedures.' }
];
