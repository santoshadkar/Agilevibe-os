window.questionsData = [
  // --- IAPP AIGP QUESTIONS ---
  {
    id: 'q-aigp-1',
    certId: 'aigp',
    certName: 'IAPP AIGP',
    question: 'Under the EU Artificial Intelligence Act, an AI system used in automated resume screening and candidate ranking for employment is classified under which risk tier?',
    options: [
      'Minimal Risk (Unregulated)',
      'Specific Transparency Risk',
      'High-Risk AI System',
      'Unacceptable Risk (Prohibited)'
    ],
    correctIndex: 2,
    explanation: 'Annex III of the EU AI Act explicitly categorizes AI systems used in employment, workers management, and access to self-employment (e.g., automated recruitment and candidate filtering) as High-Risk AI Systems, requiring conformity assessments, risk management, and human oversight.',
    reference: 'EU AI Act Article 6 & Annex III (Employment & Recruitment)'
  },
  {
    id: 'q-aigp-2',
    certId: 'aigp',
    certName: 'IAPP AIGP',
    question: 'Which core function of the NIST AI Risk Management Framework (AI RMF 1.0) is responsible for establishing enterprise risk tolerance, organizational governance structures, and accountability policies?',
    options: [
      'MAP',
      'GOVERN',
      'MEASURE',
      'MANAGE'
    ],
    correctIndex: 1,
    explanation: 'The GOVERN function is the foundational pillar of the NIST AI RMF. It establishes organizational risk culture, policies, processes, roles, and accountability frameworks required for all other functions (Map, Measure, Manage) to operate effectively.',
    reference: 'NIST AI RMF 1.0 - Section 3.1 (Govern Function)'
  },
  {
    id: 'q-aigp-3',
    certId: 'aigp',
    certName: 'IAPP AIGP',
    question: 'What is the mandatory obligation for General Purpose AI (GPAI) model providers under the EU AI Act regarding training data transparency?',
    options: [
      'Publishing a detailed summary about the content used for training the GPAI model',
      'Submitting all source code to a public open-source repository',
      'Paying a mandatory annual tax per parameter',
      'Restricting training data exclusively to European servers'
    ],
    correctIndex: 0,
    explanation: 'Article 53 of the EU AI Act requires providers of General Purpose AI (GPAI) models to draw up and make publicly available a sufficiently detailed summary of the content used for training the GPAI model, respecting trade secrets.',
    reference: 'EU AI Act Article 53 (Obligations for Providers of GPAI Models)'
  },
  {
    id: 'q-aigp-4',
    certId: 'aigp',
    certName: 'IAPP AIGP',
    question: 'Under the OECD AI Principles, which principle dictates that AI systems must be designed to be transparent, explainable, and enable affected individuals to understand outputs?',
    options: [
      'Principle 1.1: Inclusive growth and sustainable development',
      'Principle 1.2: Human-centered values and fairness',
      'Principle 1.3: Transparency and explainability',
      'Principle 1.4: Robustness, security and safety'
    ],
    correctIndex: 2,
    explanation: 'OECD Principle 1.3 emphasizes transparency and responsible disclosure regarding AI systems to foster general understanding and enable individuals to challenge AI-based outcomes.',
    reference: 'OECD AI Principles (2019/2024 Revision) - Principle 1.3'
  },

  // --- CISSP QUESTIONS ---
  {
    id: 'q-cissp-1',
    certId: 'cissp',
    certName: 'CISSP',
    question: 'An enterprise deploys a fine-tuned LLM. An attacker crafts an input prompt that bypasses system instructions and tricks the model into revealing internal backend API keys. What attack vector has occurred?',
    options: [
      'Model Inversion Attack',
      'Prompt Injection (Direct / Indirect)',
      'Data Poisoning',
      'Distributed Denial of Service (DDoS)'
    ],
    correctIndex: 1,
    explanation: 'Prompt Injection occurs when untrusted user inputs manipulate the LLM’s context execution window, overriding developer instructions and causing the model to reveal sensitive data or execute unintended commands.',
    reference: 'OWASP Top 10 for LLM Applications (LLM01: Prompt Injection) / CISSP Software Security'
  },
  {
    id: 'q-cissp-2',
    certId: 'cissp',
    certName: 'CISSP',
    question: 'In Identity and Access Management (IAM), what security principle mandates that a machine learning engineer running AI model training jobs should only be granted access to the exact datasets necessary for their specific assigned task?',
    options: [
      'Need to Know & Least Privilege',
      'Separation of Duties',
      'Implicit Trust',
      'Single Sign-On (SSO)'
    ],
    correctIndex: 0,
    explanation: 'The principle of Least Privilege ensures that users and processes are granted only the minimum permissions necessary to complete their job tasks, reducing the attack surface and mitigating unauthorized training data access.',
    reference: 'CISSP Domain 5: Identity & Access Management (IAM)'
  },
  {
    id: 'q-cissp-3',
    certId: 'cissp',
    certName: 'CISSP',
    question: 'An attacker repeatedly queries a production machine learning API and uses the returned probability confidence scores to reconstruct a local duplicate of the proprietary model. What attack vector has occurred?',
    options: [
      'Model Extraction / Model Theft Attack',
      'SQL Injection',
      'Man-in-the-Middle Attack',
      'Buffer Overflow'
    ],
    correctIndex: 0,
    explanation: 'Model Extraction (or Model Theft) involves querying a black-box machine learning API repeatedly to reconstruct the underlying model architecture, parameters, or training decision boundaries.',
    reference: 'CISSP Domain 3: Security Architecture & Engineering'
  },

  // --- CIPP/E & CIPP/US QUESTIONS ---
  {
    id: 'q-cipp-1',
    certId: 'cipp',
    certName: 'CIPP/E',
    question: 'Under GDPR Article 22, data subjects have the right NOT to be subject to a decision based solely on automated processing (including profiling) if that decision:',
    options: [
      'Involves non-sensitive personal data',
      'Produces legal effects or similarly significantly affects them',
      'Is executed in a cloud infrastructure outside Europe',
      'Takes more than 30 days to process'
    ],
    correctIndex: 1,
    explanation: 'GDPR Article 22(1) guarantees that individuals have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning them or similarly significantly affects them.',
    reference: 'GDPR Article 22 (Automated Individual Decision-Making)'
  },
  {
    id: 'q-cipp-2',
    certId: 'cipp',
    certName: 'CIPP/E',
    question: 'An AI company scrapes public web data containing personal names and photos to train a facial recognition model. Under GDPR Article 6, what must the controller demonstrate?',
    options: [
      'That all web data is automatically exempt from GDPR',
      'A valid legal basis (such as explicit consent or legitimate interest balancing test) prior to processing',
      'That the AI model produces 100% accurate results',
      'That the training server is physically located in Switzerland'
    ],
    correctIndex: 1,
    explanation: 'GDPR Article 6 requires every processing activity involving personal data (including AI model pre-training) to rely on a valid legal basis. Public availability of data does not automatically grant a legal right to process.',
    reference: 'GDPR Article 6 (Lawfulness of Processing) & EDPB Guidelines on Web Scraping'
  },
  {
    id: 'q-cipp-3',
    certId: 'cipp',
    certName: 'CIPP/US',
    question: 'Under the California Consumer Privacy Act (CCPA/CPRA), what specific right do California residents have regarding automated decision-making technology (ADMT)?',
    options: [
      'The right to opt-out of automated decision-making and profiling for significant financial or employment decisions',
      'The right to mandate open-source code publication',
      'The right to demand free hardware devices',
      'The right to sue in federal criminal court'
    ],
    correctIndex: 0,
    explanation: 'The CPRA amendments to CCPA grant California consumers the right to access information about automated decision-making technology and the right to opt-out of its use for significant legal/financial profiling.',
    reference: 'CCPA/CPRA Regulations - Automated Decision-Making Technology (ADMT)'
  },

  // --- CRISC QUESTIONS ---
  {
    id: 'q-crisc-1',
    certId: 'crisc',
    certName: 'CRISC',
    question: 'When assessing third-party vendor AI tools integrated into company operations, what represents the primary control for mitigating "Shadow AI" risk?',
    options: [
      'Relying solely on vendor self-certification questionnaires',
      'Implementing automated CASB/network monitoring, AI usage policies, and centralized vendor risk registry',
      'Disabling all outbound internet connections for all employees',
      'Mandating that all employees complete an annual 40-hour ethics course'
    ],
    correctIndex: 1,
    explanation: 'Mitigating Shadow AI requires a combination of continuous technical monitoring (Cloud Access Security Brokers), clear governance policy, and centralized third-party vendor onboarding risk assessments.',
    reference: 'ISACA CRISC Domain 2 (IT Risk Assessment & Third-Party Management)'
  },
  {
    id: 'q-crisc-2',
    certId: 'crisc',
    certName: 'CRISC',
    question: 'In enterprise risk management, what is the term for the remaining risk level after internal controls, risk treatment plans, and AI safeguards have been implemented?',
    options: [
      'Inherent Risk',
      'Residual Risk',
      'Systemic Bias',
      'Operational Vulnerability'
    ],
    correctIndex: 1,
    explanation: 'Residual risk is the risk that remains after management has taken actions (controls) to mitigate inherent risk.',
    reference: 'ISACA CRISC Domain 1 (Governance & Risk Assessment)'
  },

  // --- ISO 42001 QUESTIONS ---
  {
    id: 'q-iso42001-1',
    certId: 'iso42001',
    certName: 'ISO/IEC 42001',
    question: 'In ISO/IEC 42001 Clause 6.1.2, what is the primary purpose of conducting an AI Risk Assessment within an AI Management System (AIMS)?',
    options: [
      'To guarantee zero algorithmic errors across all production runs',
      'To identify risks related to AI objectives, impact on stakeholders, and define risk treatment plans',
      'To replace traditional ISO 27001 information security controls completely',
      'To calculate the exact financial cost of hardware infrastructure'
    ],
    correctIndex: 1,
    explanation: 'ISO/IEC 42001 Clause 6.1.2 mandates a structured AI risk assessment to identify threats to AI system objectives, ethical impact on individuals, and systematically formulate risk treatment controls.',
    reference: 'ISO/IEC 42001:2023 Standard - Clause 6.1.2 (AI Risk Assessment)'
  },
  {
    id: 'q-iso42001-2',
    certId: 'iso42001',
    certName: 'ISO/IEC 42001 Lead Auditor',
    question: 'During an ISO/IEC 42001 Lead Audit, what objective evidence must an auditor request to verify compliance with Annex A Control A.6 (AI System Lifecycle Management)?',
    options: [
      'Marketing brochures describing the AI system capabilities',
      'Documented model lineage, training dataset specifications, model performance logs, and change management records',
      'An informal verbal assurance from the lead developer',
      'A list of office physical security keycard access logs'
    ],
    correctIndex: 1,
    explanation: 'ISO 42001 Lead Auditors require objective documented evidence verifying that AI models have documented provenance, data lineage, validation testing metrics, and version-controlled deployment logs.',
    reference: 'ISO/IEC 42001 Annex A.6 & Clause 9.2 (Internal Audit)'
  },

  // --- ISACA AAISM QUESTIONS ---
  {
    id: 'q-aaism-1',
    certId: 'aaism',
    certName: 'ISACA AAISM',
    question: 'An attacker injects malicious, corrupted records into an enterprise ML model training pipeline, causing the model to misclassify specific fraud indicators. What type of attack has occurred?',
    options: [
      'Model Inversion',
      'Data Poisoning Attack',
      'Side-Channel Analysis',
      'Evasion Attack'
    ],
    correctIndex: 1,
    explanation: 'Data Poisoning involves manipulating the training dataset prior to or during model training to introduce backdoors or corrupt model behavior during inference.',
    reference: 'ISACA AAISM Domain 1 & OWASP Machine Learning Security Top 10'
  },
  {
    id: 'q-aaism-2',
    certId: 'aaism',
    certName: 'ISACA AAISM',
    question: 'An enterprise connects a Large Language Model (LLM) to an automated SQL database query engine. What security vulnerability occurs if user input is directly concatenated into SQL queries generated by the LLM?',
    options: [
      'Indirect Prompt Injection / Insecure Plugin Design (OWASP LLM07)',
      'Cross-Site Scripting (XSS) only',
      'Hardware Thermal Throttling',
      'DDoS Invalidation'
    ],
    correctIndex: 0,
    explanation: 'OWASP LLM07 (Insecure Plugin Design) occurs when LLM plugins execute backend commands (like SQL queries or shell scripts) without validating or parameterizing inputs.',
    reference: 'ISACA AAISM Domain 2 & OWASP LLM07 (Insecure Plugin Design)'
  },

  // --- ISACA AAIA QUESTIONS ---
  {
    id: 'q-aaia-1',
    certId: 'aaia',
    certName: 'ISACA AAIA',
    question: 'An IT Auditor evaluates a credit-approval neural network and requires a mathematical technique to explain which individual input features contributed to a specific rejection decision. Which interpretability tool should be recommended?',
    options: [
      'SHAP (Shapley Additive exPlanations) / LIME',
      'SHA-256 Hashing',
      'K-Means Clustering',
      'Monte Carlo Simulation'
    ],
    correctIndex: 0,
    explanation: 'SHAP (Shapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) are industry-standard post-hoc interpretability frameworks used by auditors to explain black-box model predictions to regulators and affected individuals.',
    reference: 'ISACA AAIA Domain 3 (Explainability & Interpretability Auditing)'
  },
  {
    id: 'q-aaia-2',
    certId: 'aaia',
    certName: 'ISACA AAIA',
    question: 'In algorithmic fairness auditing, what is the "Four-Fifths Rule" (80% Rule) used to evaluate?',
    options: [
      'Disparate Impact / Adverse Impact against a protected demographic group',
      'The exact CPU utilization percentage during model inference',
      'The ratio of true positives to false negatives in binary classification',
      'The financial budget spent on hardware training clusters'
    ],
    correctIndex: 0,
    explanation: 'The Four-Fifths (80%) Rule is a legal and statistical benchmark in bias auditing: if the selection rate for a protected group is less than 80% of the rate for the highest group, it indicates potential disparate impact.',
    reference: 'ISACA AAIA Domain 1 & EEOC Algorithmic Bias Auditing Guidelines'
  }
];
