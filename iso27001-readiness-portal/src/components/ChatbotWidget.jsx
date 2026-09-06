import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, X, Minimize2, Sparkles, HelpCircle, ShieldCheck, ChevronUp } from 'lucide-react';
import { CLAUSES_DATA, ANNEX_A_CATEGORIES, MANDATORY_DOCUMENTS, READINESS_STEPS } from '../data/iso27001Data';

const INITIAL_MESSAGES = [
  {
    sender: 'bot',
    text: "Hello! I'm your ISO/IEC 27001 AI Compliance Advisor. Ask me anything about ISMS Clauses 4–10, Annex A 93 controls, Risk Assessments, SoA preparation, mandatory documents, or audit readiness!",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const SUGGESTED_PROMPTS = [
  "What documents are mandatory for ISO 27001?",
  "What is the difference between Stage 1 & Stage 2 audits?",
  "How do I prepare a Statement of Applicability (SoA)?",
  "Explain technological control A.8.15 (Logging)",
  "What are the mandatory clauses in ISO 27001?"
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Expert Knowledge Matching Engine
  const generateBotResponse = (userText) => {
    const text = userText.toLowerCase();

    // Query 1: Mandatory Documents
    if (text.includes('document') || text.includes('policy') || text.includes('mandatory doc')) {
      const docList = MANDATORY_DOCUMENTS.slice(0, 6).map(d => `• **${d.title}** (${d.clause})`).join('\n');
      return `ISO/IEC 27001:2022 requires **16 mandatory documents & records**.\n\nHere are key mandatory policies:\n${docList}\n\n💡 *Tip: Check our "Mandatory Docs" tab to track approval status for all 16 documents!*`;
    }

    // Query 2: Stage 1 vs Stage 2 Audits
    if (text.includes('stage 1') || text.includes('stage 2') || text.includes('audit process')) {
      return `**ISO 27001 Certification consists of two audit stages:**\n\n1️⃣ **Stage 1 Audit (Documentation & Readiness Review):** The external auditor checks your ISMS Scope, Information Security Policy, Risk Treatment Plan, SoA, internal audit records, and management review minutes to confirm readiness.\n\n2️⃣ **Stage 2 Audit (Implementation & Control Testing):** The auditor samples operational evidence, interviews staff, tests Annex A control effectiveness, and verifies that policies are actively practiced. Upon passing, your ISO 27001 certificate is issued!`;
    }

    // Query 3: Statement of Applicability (SoA)
    if (text.includes('soa') || text.includes('statement of applicability') || text.includes('applicability')) {
      return `**Statement of Applicability (SoA)** is a mandatory ISO 27001 document that lists all **93 Annex A controls**.\n\nFor each control, the SoA must record:\n• **Inclusion or Exclusion** status.\n• **Justification** based on risk assessments, contractual obligations, or legal requirements.\n• Implementation status and operational ownership.\n\n💡 *Use our interactive "Annex A & SoA" tab to build and export your custom SoA CSV!*`;
    }

    // Query 4: Specific Annex A Controls (e.g., Logging A.8.15, Access Control A.5.15, Cryptography A.8.24)
    if (text.includes('a.8.15') || text.includes('logging') || text.includes('siem')) {
      return `**Annex A.8.15 - Logging (Technological Control):**\n\n• **Requirement:** Logs recording user activities, exceptions, security events, and administrative actions must be produced, stored, protected, and analyzed.\n• **Auditor Evidence Expected:** SIEM central log storage configs, log retention policies (e.g. 90-365 days), log tampering protections (write-once/NTP sync), and automated security alert rules.`;
    }

    if (text.includes('a.8.24') || text.includes('cryptography') || text.includes('encryption')) {
      return `**Annex A.8.24 - Use of Cryptography (Technological Control):**\n\n• **Requirement:** Rules for cryptographic key management and data encryption at rest and in transit must be defined and enforced.\n• **Auditor Evidence Expected:** TLS 1.3 / AES-256 standards, KMS/HSM key rotation procedures, disk encryption enforcement (BitLocker/FileVault) on endpoints.`;
    }

    if (text.includes('a.5.15') || text.includes('access control')) {
      return `**Annex A.5.15 - Access Control (Organizational Control):**\n\n• **Requirement:** Access to information and processing facilities must be restricted based on business and security needs (Least Privilege & Need-to-Know).\n• **Auditor Evidence Expected:** Role-Based Access Control (RBAC) matrix, user provisioning tickets, quarterly privilege review logs, and Multi-Factor Authentication (MFA) configs.`;
    }

    // Query 5: Risk Assessment & Treatment
    if (text.includes('risk') || text.includes('threat') || text.includes('vulnerability') || text.includes('rtp')) {
      return `**ISO 27001 Risk Assessment Workflow (Clause 6.1):**\n\n1. **Asset Identification:** Map all hardware, software, data, and personnel assets.\n2. **Threat & Vulnerability Scoring:** Rate Likelihood (1-5) & Impact (1-5) to derive Risk Level.\n3. **Risk Treatment Options:**\n   • **Mitigate:** Apply Annex A controls.\n   • **Transfer:** Buy cyber insurance / outsource.\n   • **Avoid:** Eliminate high-risk activity.\n   • **Accept:** Document formal risk acceptance by management.`;
    }

    // Query 6: Mandatory Clauses (4 to 10)
    if (text.includes('clause') || text.includes('4 to 10') || text.includes('standard structure')) {
      return `**ISO/IEC 27001 Mandatory Clauses (4–10):**\n\n• **Clause 4:** Context of Organization & Scope\n• **Clause 5:** Leadership & Policy\n• **Clause 6:** Risk Planning & Objectives\n• **Clause 7:** Support & Security Awareness\n• **Clause 8:** Operational Execution\n• **Clause 9:** Internal Audit & Management Review\n• **Clause 10:** Corrective Actions & Continual Improvement`;
    }

    // Default Fallback Response
    return `ISO/IEC 27001:2022 centers on systematic information security risk management across **Clauses 4–10** and **93 Annex A controls**.\n\nTo help you specifically, try asking:\n• *"What documents are mandatory?"*\n• *"Explain Stage 1 vs Stage 2 audit readiness"*:\n• *"How do I draft a Risk Treatment Plan?"*\n• *"Tell me about Annex A.8.15 (Logging) or A.5.15 (Access Control)"*`;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate natural response latency
    setTimeout(() => {
      const replyText = generateBotResponse(query);
      const botMsg = {
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '1.75rem',
            right: '1.75rem',
            zIndex: 900,
            padding: '0.85rem 1.35rem',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))',
            color: '#000000',
            fontWeight: 800,
            fontSize: '0.92rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <Bot size={22} />
          <span>Ask ISO 27001 AI</span>
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#ffffff',
            display: 'inline-block',
            boxShadow: '0 0 8px #ffffff'
          }} />
        </button>
      )}

      {/* Chat Window Modal / Widget */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 1000,
          width: '420px',
          maxWidth: '90vw',
          height: '580px',
          maxHeight: '82vh',
          background: 'var(--bg-card)',
          border: '1px solid var(--accent-emerald)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease-out'
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '1rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(19,28,46,0.95), rgba(24,34,56,0.95))',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: '#000000'
              }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-primary)' }}>ISO 27001 AI Advisor</h4>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }} /> Online & Ready
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            background: 'var(--bg-primary)'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  alignItems: 'flex-start',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: msg.sender === 'user' ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#000000',
                  flexShrink: 0,
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>

                <div style={{
                  maxWidth: '82%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: msg.sender === 'user' ? 'var(--accent-cyan)' : 'var(--bg-card)',
                  color: msg.sender === 'user' ? '#000000' : 'var(--text-primary)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  fontSize: '0.85rem',
                  lineHeight: '1.55',
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                  <div style={{ fontSize: '0.68rem', opacity: 0.7, marginTop: '0.35rem', textAlign: 'right' }}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
                  <Bot size={14} />
                </div>
                <div style={{ padding: '0.5rem 0.85rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  ISO AI Advisor is typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div style={{
            padding: '0.6rem 0.85rem',
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            gap: '0.4rem',
            overflowX: 'auto'
          }}>
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.74rem',
                  cursor: 'pointer'
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '0.75rem 1rem',
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            <input
              type="text"
              className="input-control"
              style={{ fontSize: '0.85rem', padding: '0.55rem 0.85rem' }}
              placeholder="Ask any ISO 27001 question..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '0.55rem 0.85rem' }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
