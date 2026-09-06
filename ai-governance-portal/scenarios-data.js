window.scenariosData = [
  {
    id: 'sc-1',
    title: 'Case 1: LLM Customer Service Deployment in Retail Banking',
    category: 'GenAI & Privacy Governance',
    context: 'A major retail bank plans to deploy a fine-tuned Large Language Model (LLM) chatbot to answer customer inquiries and process preliminary loan pre-qualification requests.',
    dilemma: 'The engineering team proposes granting the LLM direct read/write API access to customer transaction databases. As the AI Governance Lead, what is your mandatory control under the EU AI Act, NIST AI RMF, and GDPR Article 22?',
    choices: [
      {
        text: 'Option A: Approve deployment immediately because customer service chatbots are minimal risk.',
        feedback: '❌ HIGH REGULATORY RISK. Granting LLMs unrestricted API access to financial data without human oversight risks data leakage (OWASP LLM06) and violates GDPR Article 22 (automated processing with financial legal effects).',
        score: 0,
        isCorrect: false
      },
      {
        text: 'Option B: Conduct a Fundamental Rights Impact Assessment (FRIA), enforce Human-in-the-Loop (HITL) approval for loan decisions, and deploy input/output guardrails for Prompt Injection (OWASP LLM01).',
        feedback: '✅ PERFECT GOVERNANCE EXECUTION! Aligns with EU AI Act Article 9 (Risk Management), NIST AI RMF Manage function, and ISO 42001 Annex A controls.',
        score: 100,
        isCorrect: true
      },
      {
        text: 'Option C: Ban all LLM technology across the bank indefinitely.',
        feedback: '⚠️ SUB-OPTIMAL. Blanket bans drive employees to unmonitored "Shadow AI" using personal devices, creating greater unmanaged enterprise risk.',
        score: 25,
        isCorrect: false
      }
    ]
  },
  {
    id: 'sc-2',
    title: 'Case 2: Auditing an Algorithmic Recruitment Tool for Demographic Bias',
    category: 'ISO 42001 & AI Audit',
    context: 'An enterprise uses a machine learning model to score candidate resumes. An internal audit reveals that male applicants receive higher qualification scores by a 32% margin for engineering roles.',
    dilemma: 'What is the required corrective governance action under ISO/IEC 42001 Annex A.9 and ISACA AAIA audit guidelines?',
    choices: [
      {
        text: 'Option A: Suspend production automated filtering, audit historical training dataset for historical proxy variables (e.g. zip codes, sports), re-bias model, and log model lineage in the AI Registry.',
        feedback: '✅ EXCELLENT AUDIT PROCEDURE! Fulfills ISO 42001 Clause 6 risk treatment, ISACA AAIA algorithmic fairness standards, and EU AI Act Annex III compliance.',
        score: 100,
        isCorrect: true
      },
      {
        text: 'Option B: Add a disclaimer on the career site stating that AI is used in hiring.',
        feedback: '❌ NON-COMPLIANT. Disclaimers do not cure unlawful discriminatory impact or satisfy high-risk AI system risk management mandates.',
        score: 0,
        isCorrect: false
      }
    ]
  },
  {
    id: 'sc-3',
    title: 'Case 3: Managing Third-Party Vendor LLM Data Leakage & Shadow AI in Healthcare',
    category: 'CRISC & AAISM Risk Management',
    context: 'Hospital staff members have been pasting anonymized patient case notes into a public third-party commercial LLM tool to generate clinical discharge summaries.',
    dilemma: 'How should the Chief Information Security Officer (CISO) and AI Risk Manager resolve this risk under CRISC Domain 2 & AAISM standards?',
    choices: [
      {
        text: 'Option A: Issue an email reminder asking employees not to use unauthorized tools.',
        feedback: '⚠️ INSUFFICIENT CONTROL. Email reminders fail to prevent automated browser data exfiltration or third-party training data ingestion.',
        score: 20,
        isCorrect: false
      },
      {
        text: 'Option B: Implement Cloud Access Security Broker (CASB) domain blocks on unapproved GenAI sites, deploy a secure HIPAA/GDPR-compliant enterprise LLM instance, and log all queries in a centralized vendor risk registry.',
        feedback: '✅ ENTERPRISE-GRADE RISK MANAGEMENT! Combines technical prevention (CASB), secure alternative provision, and vendor governance.',
        score: 100,
        isCorrect: true
      },
      {
        text: 'Option C: Immediately terminate the employment of all staff members who used the tool.',
        feedback: '❌ DISPROPORTIONATE & WEAK GOVERNANCE. Does not address the root cause of missing enterprise AI tools or technical data safeguards.',
        score: 0,
        isCorrect: false
      }
    ]
  },
  {
    id: 'sc-4',
    title: 'Case 4: Deploying Automated Credit Risk Scoring System under EU AI Act',
    category: 'AIGP & High-Risk Compliance',
    context: 'A fintech startup built a neural network model that automatically grants or denies credit card applications in real-time based on social media behavior and utility bill history.',
    dilemma: 'Under the EU AI Act (Article 6 & Annex III), what mandatory compliance requirements must be met before launching this model in Europe?',
    choices: [
      {
        text: 'Option A: No prior requirements are needed as long as the startup has fewer than 250 employees.',
        feedback: '❌ INCORRECT. The EU AI Act applies regardless of company size for High-Risk credit scoring systems.',
        score: 0,
        isCorrect: false
      },
      {
        text: 'Option B: Conduct a formal conformity assessment, register the system in the EU High-Risk AI Database, establish a continuous risk management system, and implement a human oversight mechanism.',
        feedback: '✅ MANDATORY REGULATORY COMPLIANCE! Fulfills EU AI Act Articles 9, 10, 14, and 51 for credit scoring systems.',
        score: 100,
        isCorrect: true
      },
      {
        text: 'Option C: Only submit a voluntary self-assessment form to the local trade council.',
        feedback: '❌ NON-COMPLIANT. High-risk systems require strict mandatory conformity assessments, not voluntary forms.',
        score: 10,
        isCorrect: false
      }
    ]
  },
  {
    id: 'sc-5',
    title: 'Case 5: Web Scraping Training Data for Generative AI Models',
    category: 'CIPP & Data Protection Law',
    context: 'An AI research lab scraped 500 million public web pages containing names, emails, and forum posts to train a base foundation model without notifying individuals.',
    dilemma: 'Under GDPR Article 6 & Article 14, how should the Data Protection Officer (DPO) handle data subject rights and lawfulness?',
    choices: [
      {
        text: 'Option A: Claim public availability waives all GDPR requirements.',
        feedback: '❌ FALSE LEGAL ASSUMPTION. Regulators (such as Italy’s Garante & DPC) have ruled that public availability does not grant unrestricted legal right to process personal data for AI pre-training.',
        score: 0,
        isCorrect: false
      },
      {
        text: 'Option B: Perform a Legitimate Interest Assessment (LIA), implement data minimization & filtering, provide a centralized opt-out/deletion mechanism, and publish a comprehensive privacy policy.',
        feedback: '✅ COMPLIANT PRIVACY ARCHITECTURE! Fulfills GDPR Article 6(1)(f) balancing test and EDPB guidelines on GenAI training data.',
        score: 100,
        isCorrect: true
      }
    ]
  },
  {
    id: 'sc-6',
    title: 'Case 6: Defending Production ML Models against Indirect Prompt Injection',
    category: 'CISSP & AAISM Technical Defense',
    context: 'An AI assistant processes incoming customer emails. An attacker sends an email containing hidden invisible text that instructs the LLM to forward all confidential attachments to an external server.',
    dilemma: 'What technical security architecture controls (CISSP Domain 8 & OWASP LLM01) must be implemented to prevent this attack?',
    choices: [
      {
        text: 'Option A: Separate untrusted data context from system instruction context, enforce strict API privilege scoping, and filter output text through an independent secondary guardrail model.',
        feedback: '✅ TOP SECURITY ARCHITECTURE! Implements input isolation, least privilege execution, and output verification.',
        score: 100,
        isCorrect: true
      },
      {
        text: 'Option B: Ask users to verify that their emails do not contain malicious prompts.',
        feedback: '❌ INEFFECTIVE CONTROL. Indirect prompt injections are hidden within valid data formats and cannot be manually verified by recipients.',
        score: 0,
        isCorrect: false
      }
    ]
  }
];
