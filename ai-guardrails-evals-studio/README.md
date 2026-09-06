# 🛡️ Nexus GuardEval Studio

> **Enterprise AI Safety, Guardrails & LLM Evaluation Platform**

Nexus GuardEval Studio is a modern, feature-rich web platform designed to configure, test, evaluate, and deploy **AI Guardrails** (real-time runtime defense) and **LLM Evaluation Frameworks (Evals)** across enterprise generative AI applications.

---

## 🌟 Key Features

- **📖 Interactive Fundamentals Landing Page**: Clear overview of Guardrails vs. Evals, system architecture flows, and industry use-case matrix.
- **🛡️ Real-Time Guardrails Playground**: Test user prompts and RAG contexts against active safety filters (Prompt Injection Shield, PII Masker, Toxicity Guard, Factuality Checker, JSON Schema Enforcer).
- **📊 LLM Evals & Benchmarking Suite**: Quantitative measurement of RAG Triad scores (*Faithfulness*, *Answer Relevance*, *Context Precision*) and a side-by-side **LLM-as-a-Judge Matrix** (Gemini 1.5 Pro, Flash, GPT-4o, Claude 3.5 Sonnet).
- **⚙️ Policy Rules Builder**: Fine-tune classification confidence cutoffs (`0.50` - `1.00`) and fallback behaviors.
- **📈 Telemetry & Monitoring Dashboard**: Track request volume, attack block rates, PII redactions, and sub-20ms latency overhead.
- **💻 Production Integration Hub**: One-click exportable code snippets for Python, LangChain, and LlamaIndex.

---

## 💡 Core Concepts Overview

| Pillar | Type | Primary Role | Key Metrics / Actions |
| :--- | :--- | :--- | :--- |
| **AI Guardrails** | Synchronous Runtime Firewall | Intercepts prompts & model outputs in real time (`<20ms`). | Block injections, Mask PII, Refuse harmful output, Enforce JSON schema. |
| **LLM Evals** | Asynchronous / CI/CD Benchmark | Quantitative evaluation of model accuracy and factual quality. | RAG Triad (Faithfulness, Relevance, Precision), LLM-as-a-Judge matrix. |

---

## 🏗️ System Architecture Flow

```
[ 👤 User Request ]
         │
         ▼
[ 🛡️ Input Guardrail Chain ] ──(Blocked?)──► [ ⛔ Refusal Response ]
         │ (Passed / Masked)
         ▼
[ 🧠 LLM Model Engine ]
         │
         ▼
[ 🛡️ Output Guardrail Chain ] ──(Hallucinated?)──► [ ⚠️ Refusal / Fallback ]
         │ (Passed)
         ▼
[ 📊 Evals Suite & Telemetry Logger ]
         │
         ▼
[ ✅ Final Response to User ]
```

---

## 🚀 Quickstart Guide

### Running Locally

No heavy node dependencies required! Run using any standard static HTTP web server:

```bash
# Clone the repository
git clone https://github.com/santoshadkar/guard-evals-nexus.git
cd guard-evals-nexus

# Start local server via Python
python -m http.server 8090
```

Open your browser and navigate to: **`http://localhost:8090`**

---

## 📁 Repository Structure

```
.
├── index.html        # Main SPA interface layout & multi-tab navigation
├── styles.css        # Modern cyber dark theme design system & glassmorphism components
├── app.js            # Core application logic, guardrail execution simulator & eval engines
├── data.js           # Test prompts, benchmark metrics, model presets & intro data
└── README.md         # Project documentation
```

---

## 🏢 Enterprise Use Cases

- **Finance & Banking**: PII redaction on customer support bots, unapproved financial advice blocking.
- **Healthcare & Clinical Search**: HIPAA record masking, zero-tolerance medical citation groundedness checks.
- **Autonomous AI Agents**: JSON schema validation to prevent invalid database tool calling.
- **E-Commerce & Support**: Protection against prompt injection exploits attempting free gift cards or $0 orders.

---

## 📄 License

MIT License. Free for enterprise use, modification, and deployment.
