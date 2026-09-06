# GovAI CertHub — AI Governance & Tech Certification Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![Edition: 2026](https://img.shields.io/badge/Edition-2026%20Global-cyan.svg)](#)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)](#)

A comprehensive, interactive web portal designed to guide aspirants through global **AI Governance Certifications** (**IAPP AIGP**, **ISACA AAIA/AAISM**, **ISO/IEC 42001 Lead Implementer/Auditor**) alongside foundational cybersecurity, privacy, and risk credentials (**CISSP**, **CIPP/E**, **CRISC**).

---

## 🌟 Key Features

1. **🗺️ 3-Stage Sequential Pathways & Interdependency Matrix**:
   - Step-by-step career sequences (*What to do 1st, 2nd, 3rd*) tailored for Legal/Privacy, Cybersecurity, and Risk/Audit backgrounds.
   - Interactive matrix explaining exact prerequisite linkages (e.g. *How CIPP bridges into AIGP*, *How CISSP unlocks AAISM*).

2. **📊 Comprehensive Certification Catalog & Syllabus Breakdowns**:
   - Detailed profiles for **7 top global certifications**: IAPP AIGP, CISSP, CIPP/E, CRISC, ISO 42001, ISACA AAISM, and ISACA AAIA.
   - Includes official site links, handbook links, exam fees, recertification CPE rules, and expandable domain weightings.

3. **📝 Multi-Cert Practice Exam Simulator**:
   - 18 high-yield sample practice questions with an **Exam Selector Dropdown** allowing users to test specific certification tracks.
   - Detailed regulatory rationale citing **EU AI Act Articles**, **GDPR**, **NIST AI RMF 1.0**, **OWASP LLM v2.0**, and **ISO 42001 Clauses**.

4. **⚖️ Interactive AI Governance Scenario Studio**:
   - 6 immersive corporate governance case studies (e.g., *LLM Customer Support in Banking*, *Algorithmic Resume Bias Auditing*, *Healthcare Shadow AI Control*).
   - Immediate feedback evaluating choices against board oversight, EU AI Act conformity, and risk treatment controls.

5. **🎥 Curated Learning Vault, Books & Standards**:
   - Features video guides including Dr. Obi Ogbanufe's analysis: *"AI Governance Careers: Certifications vs. Real Experience"* (`e84uUgBv538`).
   - Direct links to official specifications (NIST AI RMF 1.0 PDF, EU AI Act Regulation Text, OWASP LLM Top 10) and textbooks (CISSP 10th Ed, AIGP BoK, CRISC Review Manual).

6. **🎓 Readiness Score & Custom Roadmap Evaluator**:
   - Self-assessment tool evaluating work experience, current credentials, and target goals to generate a personalized readiness score (%) and study timeline.

---

## 📁 Repository Structure

```
.
├── index.html            # Main single-page web app layout & clickable header logo
├── styles.css            # Dark-mode glassmorphic CSS design system
├── certifications-data.js# Certification metadata, prerequisites, fees & syllabus
├── resources-data.js     # Curated YouTube videos, official links & books dataset
├── questions-data.js     # Exam practice questions with legal & regulatory rationale
├── scenarios-data.js     # Scenario Studio corporate case study dilemmas
├── roadmap-data.js       # 3-stage sequential pathways & interdependencies dataset
├── app.js                # App controllers, quiz state machine & filter engines
└── README.md             # Repository documentation
```

---

## 🚀 Getting Started

### Option 1: Run via Python HTTP Server
```bash
# Clone the repository
git clone https://github.com/santoshadkar/AI-Governance-Certifications.git
cd AI-Governance-Certifications

# Start local server
python -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in any web browser.

### Option 2: Open Directly in Browser
Double-click `index.html` or open the file directly in Chrome, Edge, or Firefox.

---

## 🔗 Official References

- **IAPP AIGP**: [https://iapp.org/certify/aigp/](https://iapp.org/certify/aigp/)
- **ISACA AI Suite**: [https://www.isaca.org/credentialing](https://www.isaca.org/credentialing)
- **(ISC)² CISSP**: [https://www.isc2.org/certifications/cissp](https://www.isc2.org/certifications/cissp)
- **ISO/IEC 42001 Standard**: [https://www.iso.org/standard/81230.html](https://www.iso.org/standard/81230.html)
- **NIST AI RMF**: [https://www.nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework)

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
