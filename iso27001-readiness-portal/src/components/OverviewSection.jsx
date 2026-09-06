import React, { useState } from 'react';
import { OVERVIEW_INFO, CLAUSES_DATA, ANNEX_A_CATEGORIES } from '../data/iso27001Data';
import { ShieldCheck, Lock, Server, RefreshCw, CheckCircle2, Award, FileSpreadsheet, ArrowRight, HelpCircle } from 'lucide-react';

export default function OverviewSection({ onStartAssessment }) {
  const [activeClauseTab, setActiveClauseTab] = useState('clause-4');

  const benefits = [
    { title: "Client Trust & Market Competitive Edge", desc: "Demonstrates to enterprise clients and auditors that data is handled with rigorous security controls." },
    { title: "Regulatory Compliance Alignment", desc: "Satisfies security requirements for GDPR, HIPAA, SOC 2, DORA, and national cybersecurity laws." },
    { title: "Risk & Breach Cost Reduction", desc: "Proactively identifies threats, reducing the probability and impact of security incidents and ransomware." },
    { title: "Structured Security Governance", desc: "Establishes clear roles, executive accountability, and repeatable security operating procedures." }
  ];

  const faqs = [
    { q: "What is the difference between ISO 27001:2013 and ISO 27001:2022?", a: "The 2022 revision restructured Annex A controls from 114 controls across 14 domains into 93 streamlined controls categorized under 4 modern themes: Organizational, People, Physical, and Technological." },
    { q: "How long does it take to achieve ISO 27001 certification?", a: "For small-to-medium organizations, implementation typically takes 4 to 9 months. Larger enterprises or complex multi-site organizations may take 9 to 14 months." },
    { q: "What is a Statement of Applicability (SoA)?", a: "The SoA is a mandatory document listing all 93 Annex A controls, specifying whether each control is included or excluded, along with the technical, legal, or risk-based justification." },
    { q: "Can we exclude Annex A controls from our ISMS scope?", a: "Yes! Controls can be excluded if they are not applicable (e.g., physical facility controls if 100% remote without data centers), provided valid justifications are documented in the SoA." }
  ];

  return (
    <div className="overview-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Hero Card */}
      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(19,28,46,0.95), rgba(24,34,56,0.95))', border: '1px solid rgba(16,185,129,0.3)' }}>
        <div className="card-glow" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} /> Official Guide & Standard Breakdown
            </span>
            <h1 className="hero-title">{OVERVIEW_INFO.title}</h1>
            <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
              {OVERVIEW_INFO.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onStartAssessment}>
                Launch Self-Assessment <ArrowRight size={16} />
              </button>
              <a className="btn btn-secondary" href="#clauses-section">
                Explore Clauses 4–10
              </a>
            </div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', minWidth: '240px' }}>
            <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={18} /> Quick Facts
            </h4>
            <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <div><strong>Standard:</strong> ISO/IEC 27001:2022</div>
              <div><strong>Mandatory Clauses:</strong> Clauses 4 to 10</div>
              <div><strong>Annex A Controls:</strong> 93 Controls</div>
              <div><strong>Control Themes:</strong> 4 Domains</div>
              <div><strong>Audit Phases:</strong> Stage 1 & Stage 2</div>
            </div>
          </div>
        </div>
      </div>

      {/* CIA Triad & PDCA Grid */}
      <div className="grid-2">
        {/* CIA Triad */}
        <div className="card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lock size={20} color="var(--accent-emerald)" /> Core Pillar: CIA Triad
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            All ISO 27001 information security controls aim to preserve three essential attributes of organizational information assets:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {OVERVIEW_INFO.ciaTriad.map((item, idx) => (
              <div key={idx} style={{ padding: '0.85rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>{item.title}</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PDCA Continuous Improvement */}
        <div className="card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={20} color="var(--accent-cyan)" /> Continuous Improvement: PDCA Cycle
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            ISO 27001 follows the Plan-Do-Check-Act methodology to ensure security governance continuously evolves with threat landscapes:
          </p>
          <div className="grid-2" style={{ gap: '0.75rem' }}>
            {OVERVIEW_INFO.pdcaCycle.map((pdca, idx) => (
              <div key={idx} style={{ padding: '0.85rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div className="badge badge-emerald" style={{ marginBottom: '0.35rem' }}>{pdca.step}</div>
                <h5 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{pdca.title}</h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{pdca.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mandatory Clauses 4 to 10 Detailed Explorer */}
      <div id="clauses-section" className="card">
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Mandatory Standard Clauses (4 to 10)</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          An ISMS must satisfy all requirements in Clauses 4 through 10 to qualify for ISO/IEC 27001 certification.
        </p>

        {/* Tab buttons for clauses */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          {CLAUSES_DATA.map((clause) => (
            <button
              key={clause.id}
              onClick={() => setActiveClauseTab(clause.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: activeClauseTab === clause.id ? 'var(--accent-emerald)' : 'var(--bg-primary)',
                color: activeClauseTab === clause.id ? '#000000' : 'var(--text-primary)',
                fontWeight: activeClauseTab === clause.id ? 700 : 500,
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontSize: '0.85rem'
              }}
            >
              {clause.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Selected clause details */}
        {(() => {
          const selected = CLAUSES_DATA.find(c => c.id === activeClauseTab);
          if (!selected) return null;
          return (
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>{selected.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{selected.summary}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {selected.questions.map((q) => (
                  <div key={q.id} style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span className="badge badge-cyan">{q.code}</span>
                      <strong style={{ fontSize: '0.95rem' }}>{q.question}</strong>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', paddingLeft: '0.5rem', borderLeft: '2px solid var(--accent-emerald)' }}>
                      <div><strong>Guidance:</strong> {q.guidance}</div>
                      <div style={{ marginTop: '0.2rem' }}><strong>Evidence Auditor Looks For:</strong> {q.evidence}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Annex A Control Categories */}
      <div className="card">
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Annex A Control Themes (ISO 27001:2022)</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Annex A provides 93 security controls organized across four operational themes. Controls are selected based on your Risk Treatment Plan.
        </p>

        <div className="grid-4">
          {ANNEX_A_CATEGORIES.map((cat) => (
            <div key={cat.id} style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge badge-purple">{cat.id}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>{cat.count} Controls</span>
                </div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{cat.name}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits & FAQs */}
      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={20} color="var(--accent-emerald)" /> Organizational Benefits
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {benefits.map((b, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.9rem' }}>{b.title}</strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <HelpCircle size={20} color="var(--accent-cyan)" /> Frequently Asked Questions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ padding: '0.85rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <strong style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)' }}>{faq.q}</strong>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
