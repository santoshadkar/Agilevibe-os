import React from 'react';
import { Activity, Cpu, DollarSign, Scale, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function Hero({ activeDomain, setActiveDomain, setActiveView }) {
  return (
    <section style={{ position: 'relative', padding: '48px 24px 36px 24px', textAlign: 'center', background: 'radial-gradient(ellipse at top, rgba(168, 85, 247, 0.12) 0%, rgba(11, 15, 25, 0) 70%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '0.82rem', color: '#fbbf24', marginBottom: '20px', fontWeight: 600 }}>
          <Sparkles size={14} /> The Enterprise AI Operating System & Governance Hub
        </div>

        {/* Main Headline */}
        <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.04em' }}>
          Master <span className="gradient-text-triad">AIOps, MLOps, FinOps & Responsible AI</span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
          Complete operational blueprints, mathematical models, OpenTelemetry & Python code, 0-to-1 roadmaps, Team Topologies, FDE & SRE career guides, interactive outage labs, and governance templates.
        </p>

        {/* Domain Quick Cards */}
        <div className="grid-4" style={{ gap: '16px', marginBottom: '32px' }}>
          
          {/* AIOps Card */}
          <div 
            onClick={() => { setActiveView('deepdive'); setActiveDomain('aiops'); }}
            className="glass-panel hover-glow"
            style={{
              padding: '20px',
              cursor: 'pointer',
              borderLeft: '4px solid #06b6d4',
              background: activeDomain === 'aiops' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.02)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={20} color="#06b6d4" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4' }}>AIOps</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Autonomous IT Ops</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Telemetry, alert correlation & self-healing playbooks.</p>
          </div>

          {/* MLOps Card */}
          <div 
            onClick={() => { setActiveView('deepdive'); setActiveDomain('mlops'); }}
            className="glass-panel hover-glow"
            style={{
              padding: '20px',
              cursor: 'pointer',
              borderLeft: '4px solid #a855f7',
              background: activeDomain === 'mlops' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.02)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={20} color="#a855f7" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc' }}>MLOps</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>ML Lifecycle Engineering</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Feature Stores, PSI data drift & vLLM inference serving.</p>
          </div>

          {/* FinOps Card */}
          <div 
            onClick={() => { setActiveView('deepdive'); setActiveDomain('finops'); }}
            className="glass-panel hover-glow"
            style={{
              padding: '20px',
              cursor: 'pointer',
              borderLeft: '4px solid #10b981',
              background: activeDomain === 'finops' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.02)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={20} color="#10b981" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>FinOps</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Cloud & AI Economics</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>FOCUS 1.0 SQL, prompt caching & Kubecost pod allocation.</p>
          </div>

          {/* Responsible AI Card */}
          <div 
            onClick={() => { setActiveView('deepdive'); setActiveDomain('responsibleai'); }}
            className="glass-panel hover-glow"
            style={{
              padding: '20px',
              cursor: 'pointer',
              borderLeft: '4px solid #e11d48',
              background: activeDomain === 'responsibleai' ? 'rgba(225, 29, 72, 0.15)' : 'rgba(255,255,255,0.02)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scale size={20} color="#e11d48" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.2)', color: '#e11d48' }}>RAI Ops</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>AI Governance & Safety</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bias audits, SHAP XAI, NeMo Guardrails & EU AI Act.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
