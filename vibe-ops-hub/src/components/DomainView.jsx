import React, { useState } from 'react';
import { OPS_DOMAINS } from '../data/opsData';
import { BookOpen, GitFork, Flag, BarChart2, Building2, RefreshCw, Users, CheckCircle2, ArrowRight, Code, Calculator, Terminal, Copy, Check, Filter } from 'lucide-react';

export default function DomainView({ activeDomain, setActiveDomain, searchQuery, selectedPersona }) {
  const domainData = OPS_DOMAINS[activeDomain] || OPS_DOMAINS.aiops;
  const [subTab, setSubTab] = useState('overview');
  const [copiedIdx, setCopiedIdx] = useState(null);

  const primaryColor = domainData.colorTheme.primary;

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  // Search & Persona Filtering Logic
  const matchesSearch = (text) => {
    if (!searchQuery) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const matchesPersona = (roleName) => {
    if (!selectedPersona || selectedPersona === 'all') return true;
    if (selectedPersona === 'sre') return roleName.toLowerCase().includes('sre') || roleName.toLowerCase().includes('devops') || roleName.toLowerCase().includes('reliability');
    if (selectedPersona === 'ml') return roleName.toLowerCase().includes('ml') || roleName.toLowerCase().includes('data') || roleName.toLowerCase().includes('ai');
    if (selectedPersona === 'finops') return roleName.toLowerCase().includes('finops') || roleName.toLowerCase().includes('finance') || roleName.toLowerCase().includes('cost');
    if (selectedPersona === 'exec') return roleName.toLowerCase().includes('cto') || roleName.toLowerCase().includes('cfo') || roleName.toLowerCase().includes('vp') || roleName.toLowerCase().includes('head') || roleName.toLowerCase().includes('risk') || roleName.toLowerCase().includes('compliance');
    return true;
  };

  const filteredPillars = domainData.definition.corePillars.filter(p => matchesSearch(p.name + p.desc));
  const filteredMath = (domainData.mathModels || []).filter(m => matchesSearch(m.name + m.formula + m.description));
  const filteredCode = (domainData.codeSnippets || []).filter(c => matchesSearch(c.title + c.code + c.language));
  const filteredMetrics = domainData.metrics.filter(m => matchesSearch(m.name + m.formula + m.impact));
  const filteredCaseStudies = domainData.caseStudies.filter(c => matchesSearch(c.company + c.challenge + c.solution + c.outcomes));
  const filteredPersonas = domainData.userPersonas.filter(p => matchesPersona(p.role) && matchesSearch(p.role + p.focus));

  const subNavItems = [
    { id: 'overview', label: `Definition (${filteredPillars.length})`, icon: BookOpen },
    { id: 'architecture', label: 'Workflow & Tech Stack', icon: GitFork },
    { id: 'math', label: `Math Models (${filteredMath.length})`, icon: Calculator },
    { id: 'code', label: `Code & Specs (${filteredCode.length})`, icon: Code },
    { id: 'roadmap', label: '0-to-1 Implementation', icon: Flag },
    { id: 'metrics', label: `Metrics Engine (${filteredMetrics.length})`, icon: BarChart2 },
    { id: 'casestudies', label: `Case Studies (${filteredCaseStudies.length})`, icon: Building2 },
    { id: 'improvements', label: 'Best Practices', icon: RefreshCw },
    { id: 'personas', label: `Who Uses It (${filteredPersonas.length})`, icon: Users }
  ];

  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 60px 24px' }}>
      
      {/* Search/Persona Active Banner */}
      {(searchQuery || selectedPersona !== 'all') && (
        <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '12px 20px', borderRadius: '12px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#38bdf8' }}>
          <Filter size={16} />
          <div>
            <strong>Active Filters:</strong> {searchQuery && <span>Search: "{searchQuery}" </span>} {selectedPersona !== 'all' && <span>Persona: <strong>{selectedPersona.toUpperCase()}</strong></span>}
          </div>
        </div>
      )}

      {/* Domain Title Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', background: `${primaryColor}20`, color: primaryColor, border: `1px solid ${primaryColor}40` }}>
            {domainData.badge}
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800 }}>
            {domainData.fullName} (<span style={{ color: primaryColor }}>{domainData.title}</span>)
          </h2>
        </div>

        {/* Domain Switcher Buttons */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveDomain('aiops')}
            style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: activeDomain === 'aiops' ? 'rgba(6, 182, 212, 0.2)' : 'transparent', color: activeDomain === 'aiops' ? '#38bdf8' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}
          >
            AIOps
          </button>
          <button 
            onClick={() => setActiveDomain('mlops')}
            style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: activeDomain === 'mlops' ? 'rgba(168, 85, 247, 0.2)' : 'transparent', color: activeDomain === 'mlops' ? '#c084fc' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}
          >
            MLOps
          </button>
          <button 
            onClick={() => setActiveDomain('finops')}
            style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: activeDomain === 'finops' ? 'rgba(16, 185, 129, 0.2)' : 'transparent', color: activeDomain === 'finops' ? '#34d399' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}
          >
            FinOps
          </button>
          <button 
            onClick={() => setActiveDomain('responsibleai')}
            style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: activeDomain === 'responsibleai' ? 'rgba(225, 29, 72, 0.2)' : 'transparent', color: activeDomain === 'responsibleai' ? '#e11d48' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}
          >
            RAI Ops
          </button>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {subNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = subTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSubTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                border: isActive ? `1px solid ${primaryColor}50` : '1px solid transparent',
                background: isActive ? `${primaryColor}15` : 'rgba(255,255,255,0.02)',
                color: isActive ? primaryColor : 'var(--text-muted)',
                fontWeight: isActive ? 600 : 400,
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={16} /> {item.label}
            </button>
          );
        })}
      </div>

      {/* SubTab Content Renderer */}
      <div>
        
        {/* 1. OVERVIEW & DEFINITION */}
        {subTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '32px', borderLeft: `4px solid ${primaryColor}` }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Core Definition</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '16px', fontWeight: 500 }}>
                {domainData.definition.short}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {domainData.definition.detailed}
              </p>
            </div>

            <h3 style={{ fontSize: '1.4rem', marginTop: '12px', marginBottom: '4px' }}>The 5 Core Pillars</h3>
            <div className="grid-2">
              {filteredPillars.map((pillar, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `${primaryColor}20`, color: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem' }}>
                      {idx + 1}
                    </div>
                    <h4 style={{ fontSize: '1.1rem' }}>{pillar.name}</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. ARCHITECTURE & WORKFLOW */}
        {subTab === 'architecture' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>End-to-End System Architecture</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>{domainData.architecture.description}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {domainData.architecture.steps.map((step, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderLeft: `3px solid ${primaryColor}` }}>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: primaryColor, marginBottom: '10px' }}>
                      {step.phase}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {step.components.map((comp, cIdx) => (
                        <span key={cIdx} style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono)' }}>
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. MATHEMATICAL MODELS */}
        {subTab === 'math' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="grid-2">
              {filteredMath.map((item, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', borderTop: `4px solid ${primaryColor}` }}>
                  <div style={{ fontSize: '0.75rem', color: primaryColor, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '6px' }}>
                    Mathematical Equation #{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{item.name}</h4>
                  
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: '1.05rem', color: '#fbbf24', marginBottom: '14px', textAlign: 'center' }}>
                    {item.formula}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. CODE SNIPPETS */}
        {subTab === 'code' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {filteredCode.map((snippet, idx) => (
              <div key={idx} className="glass-panel" style={{ overflow: 'hidden' }}>
                <div style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 700, color: primaryColor }}>
                    <Terminal size={18} /> {snippet.title}
                  </div>
                  <button 
                    onClick={() => copyToClipboard(snippet.code, idx)}
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-main)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    {copiedIdx === idx ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    {copiedIdx === idx ? "Copied!" : "Copy Code"}
                  </button>
                </div>

                <pre style={{ padding: '20px', background: '#090d16', overflowX: 'auto', margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        )}

        {/* 5. 0-TO-1 ROADMAP */}
        {subTab === 'roadmap' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{domainData.howToStart.strategy}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Follow this phased blueprint to adopt {domainData.title} in your engineering organization without friction.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {domainData.howToStart.phases.map((phase, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '24px', position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <CheckCircle2 color={primaryColor} size={22} />
                      <h4 style={{ fontSize: '1.2rem', color: primaryColor }}>{phase.phase}</h4>
                    </div>
                    <ul style={{ paddingLeft: '24px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {phase.actions.map((act, aIdx) => (
                        <li key={aIdx} style={{ fontSize: '0.92rem', lineHeight: 1.5 }}>{act}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. METRICS & FORMULAS */}
        {subTab === 'metrics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="grid-2">
              {filteredMetrics.map((metric, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <h4 style={{ fontSize: '1.15rem' }}>{metric.name}</h4>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: '12px', background: `${primaryColor}20`, color: primaryColor, border: `1px solid ${primaryColor}40` }}>
                        Target: {metric.benchmark}
                      </span>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '14px' }}>
                      Formula: {metric.formula}
                    </div>
                  </div>

                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Business Impact:</strong> {metric.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. CASE STUDIES */}
        {subTab === 'casestudies' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="grid-2">
              {filteredCaseStudies.map((cs, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.4rem' }}>{cs.company}</h3>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '12px', color: 'var(--text-muted)' }}>
                      {cs.industry}
                    </span>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <strong style={{ color: '#ef4444', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Challenge:</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>{cs.challenge}</p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <strong style={{ color: '#38bdf8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Solution:</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>{cs.solution}</p>
                  </div>

                  <div style={{ background: `${primaryColor}15`, padding: '14px 18px', borderRadius: '12px', border: `1px solid ${primaryColor}30` }}>
                    <strong style={{ color: primaryColor, fontSize: '0.9rem' }}>Quantifiable Outcomes:</strong>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginTop: '4px', fontWeight: 500 }}>{cs.outcomes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. BEST PRACTICES */}
        {subTab === 'improvements' && (
          <div className="glass-panel" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Continuous Improvement Loops & Best Practices</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {domainData.improvements.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.02)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <ArrowRight color={primaryColor} size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. USER PERSONAS */}
        {subTab === 'personas' && (
          <div className="grid-2">
            {filteredPersonas.map((persona, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.75rem', color: primaryColor, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '6px' }}>
                  Target Role #{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{persona.role}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Key Responsibilities & Focus:</strong> {persona.focus}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

    </section>
  );
}
