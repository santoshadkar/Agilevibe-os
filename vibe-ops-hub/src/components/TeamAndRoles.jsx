import React, { useState } from 'react';
import { TEAM_TOPOLOGIES, FDE_CAREER_GUIDE, SRE_CAREER_GUIDE } from '../data/opsData';
import { Users, Shield, Rocket, CheckCircle2, Clock, Award, BookOpen, Layers, ArrowRight, Zap, Calculator, Terminal, AlertTriangle, Code, HelpCircle, FileText, Compass, Repeat, Filter } from 'lucide-react';

export default function TeamAndRoles({ searchQuery, selectedPersona }) {
  const [subTab, setSubTab] = useState('topologies');
  const [activeFdeTab, setActiveFdeTab] = useState('roadmap');
  const [activeSreTab, setActiveSreTab] = useState('roadmap');

  const [fdeQuizAnswers, setFdeQuizAnswers] = useState({});
  const [sreQuizAnswers, setSreQuizAnswers] = useState({});

  const [targetSlo, setTargetSlo] = useState('99.9');
  const [burnMultiplier, setBurnMultiplier] = useState(14.4);

  const matchesSearch = (text) => {
    if (!searchQuery) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const sloLimits = {
    '99.9': { label: '99.9% (3 Nines)', monthlySec: 2628, labelText: '43.8 minutes downtime / month' },
    '99.99': { label: '99.99% (4 Nines)', monthlySec: 262.8, labelText: '4.38 minutes downtime / month' },
    '99.999': { label: '99.999% (5 Nines)', monthlySec: 26.28, labelText: '26.3 seconds downtime / month' }
  };

  const activeSlo = sloLimits[targetSlo];
  const budgetConsumedInOneHourSec = Math.round((activeSlo.monthlySec * (burnMultiplier / 720)));

  const calculateFdeScore = () => {
    const total = Object.values(fdeQuizAnswers).filter(Boolean).length * 20;
    if (total >= 80) return { score: total, level: "Principal / Staff FDE Ready", color: "#34d399" };
    if (total >= 60) return { score: total, level: "Senior FDE Ready", color: "#38bdf8" };
    if (total >= 40) return { score: total, level: "Production FDE (Stage 2)", color: "#c084fc" };
    return { score: total, level: "Foundational FDE (Stage 1)", color: "#fbbf24" };
  };

  const calculateSreScore = () => {
    const total = Object.values(sreQuizAnswers).filter(Boolean).length * 20;
    if (total >= 80) return { score: total, level: "Principal SRE / VP Reliability", color: "#34d399" };
    if (total >= 60) return { score: total, level: "Senior Reliability Lead", color: "#38bdf8" };
    if (total >= 40) return { score: total, level: "Production SRE (Stage 2)", color: "#c084fc" };
    return { score: total, level: "Foundational SRE (Stage 1)", color: "#fbbf24" };
  };

  const fdeEval = calculateFdeScore();
  const sreEval = calculateSreScore();

  const filteredTeamTypes = TEAM_TOPOLOGIES.teamTypes.filter(t => matchesSearch(t.name + t.desc + t.mission + t.example));
  const filteredInteractionModes = TEAM_TOPOLOGIES.interactionModes.filter(m => matchesSearch(m.mode + m.desc + m.whenToUse));
  const filteredFdeProjects = FDE_CAREER_GUIDE.portfolioProjects.filter(p => matchesSearch(p.title + p.stack + p.blueprint + p.whyImpresses));
  const filteredSreProjects = SRE_CAREER_GUIDE.portfolioProjects.filter(p => matchesSearch(p.title + p.stack + p.blueprint + p.whyImpresses));

  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 24px 60px 24px' }}>
      
      {/* Search/Persona Active Banner */}
      {(searchQuery || selectedPersona !== 'all') && (
        <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '12px 20px', borderRadius: '12px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#38bdf8' }}>
          <Filter size={16} />
          <div>
            <strong>Active Filters:</strong> {searchQuery && <span>Search: "{searchQuery}" </span>} {selectedPersona !== 'all' && <span>Persona: <strong>{selectedPersona.toUpperCase()}</strong></span>}
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(251, 191, 36, 0.12)', border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: '20px', fontSize: '0.8rem', color: '#fbbf24', fontWeight: 600, marginBottom: '12px' }}>
          <Users size={14} /> Human Systems & Engineering Operating System
        </div>
        <h2 style={{ fontSize: '2.4rem', marginBottom: '8px' }}>
          Team Topologies, <span className="gradient-text-triad">FDE & SRE Mastery Hub</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '850px' }}>
          Self-assessment diagnostics, 4-stage technical roadmaps, portfolio project blueprints, stakeholder delivery frameworks, and role transition pathways.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSubTab('topologies')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: subTab === 'topologies' ? '1px solid rgba(251, 191, 36, 0.5)' : '1px solid transparent',
            background: subTab === 'topologies' ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255,255,255,0.03)',
            color: subTab === 'topologies' ? '#fbbf24' : 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.92rem',
            cursor: 'pointer'
          }}
        >
          <Layers size={16} /> 🍕 Team Topologies ({filteredTeamTypes.length})
        </button>

        <button
          onClick={() => setSubTab('fde')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: subTab === 'fde' ? '1px solid rgba(168, 85, 247, 0.5)' : '1px solid transparent',
            background: subTab === 'fde' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.03)',
            color: subTab === 'fde' ? '#c084fc' : 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.92rem',
            cursor: 'pointer'
          }}
        >
          <Rocket size={16} /> 🚀 Forward Deployed Engineer (FDE)
        </button>

        <button
          onClick={() => setSubTab('sre')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: subTab === 'sre' ? '1px solid rgba(6, 182, 212, 0.5)' : '1px solid transparent',
            background: subTab === 'sre' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.03)',
            color: subTab === 'sre' ? '#38bdf8' : 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.92rem',
            cursor: 'pointer'
          }}
        >
          <Shield size={16} /> 🛡️ Site Reliability Engineer (SRE)
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 1. TEAM TOPOLOGIES */}
      {/* ========================================================================= */}
      {subTab === 'topologies' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Concept Intro */}
          <div className="glass-panel" style={{ padding: '28px', borderLeft: '4px solid #fbbf24' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>What is Team Topologies?</h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '16px' }}>
              {TEAM_TOPOLOGIES.concept}
            </p>

            <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.25)', marginBottom: '16px' }}>
              <div style={{ fontWeight: 700, color: '#38bdf8', fontSize: '0.95rem', marginBottom: '4px' }}>
                📜 Conway's Law & The Reverse Conway Maneuver
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                {TEAM_TOPOLOGIES.conwaysLaw}
              </p>
            </div>
            
            <div style={{ background: 'rgba(251, 191, 36, 0.08)', padding: '18px 22px', borderRadius: '14px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <div style={{ fontWeight: 700, color: '#fbbf24', fontSize: '0.95rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                💡 The Layman's Analogy: A Busy Restaurant Kitchen
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                {TEAM_TOPOLOGIES.laymanAnalogy}
              </p>
            </div>
          </div>

          {/* Cognitive Load Types */}
          <h3 style={{ fontSize: '1.4rem' }}>Cognitive Load Theory in Engineering</h3>
          <div className="grid-3">
            {TEAM_TOPOLOGIES.cognitiveLoadTypes.map((cog, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.75rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '4px' }}>
                  Load Type #{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{cog.type}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cog.desc}</p>
              </div>
            ))}
          </div>

          {/* 4 Team Types Grid */}
          <h3 style={{ fontSize: '1.4rem', marginTop: '12px' }}>The 4 Fundamental Team Types</h3>
          <div className="grid-2">
            {filteredTeamTypes.map((team, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px', borderTop: `4px solid ${team.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '1.2rem', color: team.color }}>{team.name}</h4>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: '12px', background: `${team.color}20`, color: team.color, border: `1px solid ${team.color}40` }}>
                    {team.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '12px', lineHeight: 1.5 }}>{team.desc}</p>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Primary Mission:</strong> {team.mission}
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>
                  Example: {team.example}
                </div>
              </div>
            ))}
          </div>

          {/* Anti Patterns */}
          <h3 style={{ fontSize: '1.4rem', marginTop: '12px' }}>Common Organizational Anti-Patterns to Avoid</h3>
          <div className="grid-3">
            {TEAM_TOPOLOGIES.antiPatterns.map((anti, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px', borderTop: '3px solid #ef4444' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontWeight: 700, marginBottom: '6px' }}>
                  <AlertTriangle size={16} /> Anti-Pattern: {anti.antiPattern}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{anti.description}</p>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. FORWARD DEPLOYED ENGINEER (FDE) */}
      {/* ========================================================================= */}
      {subTab === 'fde' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          <div className="glass-panel" style={{ padding: '28px', borderLeft: '4px solid #a855f7' }}>
            <div style={{ fontSize: '0.8rem', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '4px' }}>
              Career Mastery Engine
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{FDE_CAREER_GUIDE.title}</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>{FDE_CAREER_GUIDE.subtitle}</p>

            {/* FDE Navigation Sub-Bar */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              {[
                { id: 'quiz', label: '📊 Self-Assessment Diagnostic' },
                { id: 'roadmap', label: '🗺️ 4-Stage Learning Roadmap' },
                { id: 'projects', label: '🛠️ Portfolio Projects' },
                { id: 'delivery', label: '📋 Information Delivery Framework' },
                { id: 'transitions', label: '🔄 Who Can Become FDE?' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveFdeTab(t.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: activeFdeTab === t.id ? '1px solid #c084fc' : '1px solid transparent',
                    background: activeFdeTab === t.id ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: activeFdeTab === t.id ? '#c084fc' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* FDE Sub-tab Content */}
          {activeFdeTab === 'quiz' && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem' }}>FDE Readiness Self-Assessment Quiz</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Check the technical capabilities you currently possess:</p>
                </div>
                <div style={{ background: `${fdeEval.color}20`, padding: '10px 18px', borderRadius: '12px', border: `1px solid ${fdeEval.color}50` }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Your Current Standing</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: fdeEval.color }}>{fdeEval.level} ({fdeEval.score}/100)</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {FDE_CAREER_GUIDE.selfAssessmentQuestions.map((q) => (
                  <label key={q.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.02)', padding: '14px 18px', borderRadius: '10px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <input 
                      type="checkbox"
                      checked={!!fdeQuizAnswers[q.id]}
                      onChange={(e) => setFdeQuizAnswers({ ...fdeQuizAnswers, [q.id]: e.target.checked })}
                      style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: '#a855f7' }}
                    />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{q.question}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeFdeTab === 'roadmap' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {FDE_CAREER_GUIDE.careerStages.map((stage, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #c084fc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.25rem', color: '#c084fc' }}>{stage.stage}</h4>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>{stage.title}</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                    <strong>Focus:</strong> {stage.focus}
                  </div>
                  
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Must-Master Skills:</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                      {stage.skills.map((s, sIdx) => (
                        <span key={sIdx} style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '4px 12px', borderRadius: '8px', fontSize: '0.82rem', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#34d399' }}>
                    🎯 <strong>Stage Milestone:</strong> {stage.milestones}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeFdeTab === 'projects' && (
            <div className="grid-2">
              {filteredFdeProjects.map((proj, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: '#c084fc', marginBottom: '10px' }}>{proj.title}</h4>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', color: '#e2e8f0', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                      Stack: {proj.stack}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {proj.blueprint}
                    </p>
                  </div>
                  <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
                    💡 <strong>Why This Impresses Hiring Managers:</strong> {proj.whyImpresses}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeFdeTab === 'delivery' && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>FDE Information Delivery Framework</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>What precise artifacts an FDE must deliver to client and internal stakeholders at each project stage:</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {FDE_CAREER_GUIDE.informationDeliveryFramework.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#c084fc', marginBottom: '6px' }}>{item.phase}</div>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.88rem', marginBottom: '8px' }}>
                      <span style={{ color: '#38bdf8' }}>📄 <strong>Deliverable Artifact:</strong> {item.artifact}</span>
                      <span style={{ color: '#34d399' }}>👤 <strong>Recipient:</strong> {item.recipient}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeFdeTab === 'transitions' && (
            <div className="grid-3">
              {FDE_CAREER_GUIDE.transitionPathways.map((path, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '22px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '6px' }}>
                    Starting Point #{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{path.fromRole} → FDE</h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
                    <strong style={{ color: '#ef4444' }}>Skill Gap to Bridge:</strong> {path.gapToBridge}
                  </div>
                  <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#34d399' }}>
                    🚀 <strong>Action Plan:</strong> {path.actionPlan}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. SITE RELIABILITY ENGINEER (SRE) */}
      {/* ========================================================================= */}
      {subTab === 'sre' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          <div className="glass-panel" style={{ padding: '28px', borderLeft: '4px solid #06b6d4' }}>
            <div style={{ fontSize: '0.8rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '4px' }}>
              Career Mastery Engine
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{SRE_CAREER_GUIDE.title}</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>{SRE_CAREER_GUIDE.subtitle}</p>

            {/* SRE Navigation Sub-Bar */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              {[
                { id: 'quiz', label: '📊 Self-Assessment Diagnostic' },
                { id: 'roadmap', label: '🗺️ 4-Stage Learning Roadmap' },
                { id: 'projects', label: '🛠️ Portfolio Projects' },
                { id: 'delivery', label: '📋 Stakeholder Delivery Framework' },
                { id: 'transitions', label: '🔄 Who Can Become SRE?' },
                { id: 'calculator', label: '⚡ Error Budget Calculator' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveSreTab(t.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: activeSreTab === t.id ? '1px solid #38bdf8' : '1px solid transparent',
                    background: activeSreTab === t.id ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: activeSreTab === t.id ? '#38bdf8' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* SRE Sub-tab Content */}
          {activeSreTab === 'quiz' && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem' }}>SRE Readiness Self-Assessment Quiz</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Check the SRE engineering capabilities you currently possess:</p>
                </div>
                <div style={{ background: `${sreEval.color}20`, padding: '10px 18px', borderRadius: '12px', border: `1px solid ${sreEval.color}50` }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Your Current Standing</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: sreEval.color }}>{sreEval.level} ({sreEval.score}/100)</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {SRE_CAREER_GUIDE.selfAssessmentQuestions.map((q) => (
                  <label key={q.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.02)', padding: '14px 18px', borderRadius: '10px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <input 
                      type="checkbox"
                      checked={!!sreQuizAnswers[q.id]}
                      onChange={(e) => setSreQuizAnswers({ ...sreQuizAnswers, [q.id]: e.target.checked })}
                      style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: '#06b6d4' }}
                    />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{q.question}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeSreTab === 'roadmap' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {SRE_CAREER_GUIDE.careerStages.map((stage, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #06b6d4' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.25rem', color: '#38bdf8' }}>{stage.stage}</h4>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>{stage.title}</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                    <strong>Focus:</strong> {stage.focus}
                  </div>
                  
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Must-Master Skills:</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                      {stage.skills.map((s, sIdx) => (
                        <span key={sIdx} style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#38bdf8', padding: '4px 12px', borderRadius: '8px', fontSize: '0.82rem', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#34d399' }}>
                    🎯 <strong>Stage Milestone:</strong> {stage.milestones}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSreTab === 'projects' && (
            <div className="grid-2">
              {filteredSreProjects.map((proj, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: '#38bdf8', marginBottom: '10px' }}>{proj.title}</h4>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', color: '#e2e8f0', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                      Stack: {proj.stack}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {proj.blueprint}
                    </p>
                  </div>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#f8fafc', border: '1px solid rgba(6, 182, 212, 0.25)' }}>
                    💡 <strong>Why This Impresses SRE Hiring Managers:</strong> {proj.whyImpresses}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSreTab === 'delivery' && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>SRE Information Delivery Framework</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>What precise reliability artifacts an SRE must deliver at each incident and operational stage:</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {SRE_CAREER_GUIDE.informationDeliveryFramework.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', marginBottom: '6px' }}>{item.phase}</div>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.88rem', marginBottom: '8px' }}>
                      <span style={{ color: '#c084fc' }}>📄 <strong>Deliverable Artifact:</strong> {item.artifact}</span>
                      <span style={{ color: '#34d399' }}>👤 <strong>Recipient:</strong> {item.recipient}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSreTab === 'transitions' && (
            <div className="grid-3">
              {SRE_CAREER_GUIDE.transitionPathways.map((path, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '22px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '6px' }}>
                    Starting Point #{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{path.fromRole} → SRE</h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
                    <strong style={{ color: '#ef4444' }}>Skill Gap to Bridge:</strong> {path.gapToBridge}
                  </div>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#34d399' }}>
                    🚀 <strong>Action Plan:</strong> {path.actionPlan}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSreTab === 'calculator' && (
            <div className="glass-panel" style={{ padding: '28px', borderTop: '4px solid #06b6d4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Calculator size={20} color="#06b6d4" />
                <h3 style={{ fontSize: '1.3rem' }}>Interactive Error Budget & Burn Rate Simulator</h3>
              </div>
              
              <div className="grid-2" style={{ marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>Select Target Service Level Objective (SLO):</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {Object.keys(sloLimits).map((key) => (
                      <button
                        key={key}
                        onClick={() => setTargetSlo(key)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          border: targetSlo === key ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                          background: targetSlo === key ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.03)',
                          color: targetSlo === key ? '#38bdf8' : 'var(--text-muted)',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        {key}%
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Burn Rate Multiplier:</span>
                    <strong style={{ color: '#38bdf8' }}>{burnMultiplier}x (1-Hour Consumption)</strong>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="1"
                    value={burnMultiplier} 
                    onChange={(e) => setBurnMultiplier(Number(e.target.value))}
                    style={{ accentColor: '#06b6d4' }}
                  />
                </div>
              </div>

              <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.25)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{activeSlo.labelText}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#38bdf8', marginTop: '4px' }}>
                  Estimated Downtime Budget Consumed in 1 Hour: {budgetConsumedInOneHourSec} Seconds
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                  Formula: {SRE_CAREER_GUIDE.burnRateAlertingFormula}
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </section>
  );
}
