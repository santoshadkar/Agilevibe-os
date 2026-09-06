import React from 'react';
import { Cpu, Activity, DollarSign, Scale, Layers, Search, UserCheck, Users, Zap, FileText } from 'lucide-react';

export default function Navbar({ activeDomain, setActiveDomain, searchQuery, setSearchQuery, selectedPersona, setSelectedPersona, activeView, setActiveView }) {
  const personas = [
    { id: "all", label: "All Personas" },
    { id: "sre", label: "SRE / DevOps" },
    { id: "ml", label: "ML / Data Scientist" },
    { id: "finops", label: "FinOps Specialist" },
    { id: "exec", label: "CTO / CFO / Executive" }
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(20px)', backgroundColor: 'rgba(11, 15, 25, 0.85)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => { setActiveView('deepdive'); setActiveDomain('aiops'); }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 33%, #10b981 66%, #e11d48 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
          }}>
            <Layers size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
              VibeOps <span className="gradient-text-triad">Masterclass Hub</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Systems • Governance • Teams • Live Labs & Templates
            </div>
          </div>
        </div>

        {/* Global Nav Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
          <button 
            className={`nav-tab ${activeView === 'deepdive' && activeDomain === 'aiops' ? 'active-aiops' : ''}`}
            onClick={() => { setActiveView('deepdive'); setActiveDomain('aiops'); }}
          >
            <Activity size={16} color="#06b6d4" /> AIOps
          </button>
          <button 
            className={`nav-tab ${activeView === 'deepdive' && activeDomain === 'mlops' ? 'active-mlops' : ''}`}
            onClick={() => { setActiveView('deepdive'); setActiveDomain('mlops'); }}
          >
            <Cpu size={16} color="#a855f7" /> MLOps
          </button>
          <button 
            className={`nav-tab ${activeView === 'deepdive' && activeDomain === 'finops' ? 'active-finops' : ''}`}
            onClick={() => { setActiveView('deepdive'); setActiveDomain('finops'); }}
          >
            <DollarSign size={16} color="#10b981" /> FinOps
          </button>
          <button 
            className={`nav-tab ${activeView === 'deepdive' && activeDomain === 'responsibleai' ? 'active-mlops' : ''}`}
            onClick={() => { setActiveView('deepdive'); setActiveDomain('responsibleai'); }}
            style={{
              borderColor: activeView === 'deepdive' && activeDomain === 'responsibleai' ? '#e11d48' : 'transparent',
              background: activeView === 'deepdive' && activeDomain === 'responsibleai' ? 'rgba(225, 29, 72, 0.18)' : 'transparent',
              color: activeView === 'deepdive' && activeDomain === 'responsibleai' ? '#e11d48' : 'var(--text-muted)'
            }}
          >
            <Scale size={16} color="#e11d48" /> Responsible AI
          </button>
          <button 
            className={`nav-tab ${activeView === 'team-roles' ? 'active-mlops' : ''}`}
            onClick={() => setActiveView('team-roles')}
          >
            <Users size={16} color="#fbbf24" /> Team & Roles
          </button>
          <button 
            className={`nav-tab ${activeView === 'simulators' ? 'active-aiops' : ''}`}
            onClick={() => setActiveView('simulators')}
          >
            <Zap size={16} color="#ef4444" /> 🚨 Live Labs
          </button>
          <button 
            className={`nav-tab ${activeView === 'templates' ? 'active-finops' : ''}`}
            onClick={() => setActiveView('templates')}
          >
            <FileText size={16} color="#38bdf8" /> 📋 Templates
          </button>
          <button 
            className={`nav-tab ${activeView === 'matrix' ? 'active-aiops' : ''}`}
            onClick={() => setActiveView('matrix')}
          >
            <Layers size={16} /> Quad Matrix
          </button>
          <button 
            className={`nav-tab ${activeView === 'calculators' ? 'active-finops' : ''}`}
            onClick={() => setActiveView('calculators')}
          >
            ⚡ ROI Calculators
          </button>
        </div>

        {/* Search & Persona Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
            <input 
              type="text"
              placeholder="Search concepts, labs, templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '8px 12px 8px 36px',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                outline: 'none',
                width: '210px'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <UserCheck size={16} color="#38bdf8" />
            <select
              value={selectedPersona}
              onChange={(e) => setSelectedPersona(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: 500,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {personas.map(p => (
                <option key={p.id} value={p.id} style={{ background: '#0f172a', color: '#fff' }}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </header>
  );
}
