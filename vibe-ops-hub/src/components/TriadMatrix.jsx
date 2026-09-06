import React from 'react';
import { TRIAD_COMPARISON, INTERSECTION_MATRIX } from '../data/opsData';
import { Layers, Activity, Cpu, DollarSign, Scale, Sparkles } from 'lucide-react';

export default function TriadMatrix({ setActiveDomain, setActiveView }) {
  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 24px 60px 24px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '20px', fontSize: '0.8rem', color: '#c084fc', fontWeight: 600, marginBottom: '12px' }}>
          <Layers size={14} /> Side-by-Side Comparison & Synergies
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
          The Engineering & Governance <span className="gradient-text-triad">Quad Matrix</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '850px' }}>
          Compare core objectives, telemetry inputs, automation patterns, and tool ecosystems across AIOps, MLOps, FinOps, and Responsible AI.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="glass-panel" style={{ overflowX: 'auto', marginBottom: '48px', padding: '4px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1100px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '18px 16px', color: 'var(--text-dim)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '16%' }}>Dimension</th>
              <th style={{ padding: '18px 16px', color: '#38bdf8', fontSize: '0.98rem', width: '21%', background: 'rgba(6, 182, 212, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} /> AIOps
                </div>
              </th>
              <th style={{ padding: '18px 16px', color: '#c084fc', fontSize: '0.98rem', width: '21%', background: 'rgba(168, 85, 247, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cpu size={18} /> MLOps
                </div>
              </th>
              <th style={{ padding: '18px 16px', color: '#34d399', fontSize: '0.98rem', width: '21%', background: 'rgba(16, 185, 129, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <DollarSign size={18} /> FinOps
                </div>
              </th>
              <th style={{ padding: '18px 16px', color: '#e11d48', fontSize: '0.98rem', width: '21%', background: 'rgba(225, 29, 72, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Scale size={18} /> Responsible AI
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {TRIAD_COMPARISON.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s ease' }}>
                <td style={{ padding: '16px', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.88rem' }}>
                  {row.category}
                </td>
                <td style={{ padding: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(6, 182, 212, 0.02)', lineHeight: 1.5 }}>
                  {row.aiops}
                </td>
                <td style={{ padding: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(168, 85, 247, 0.02)', lineHeight: 1.5 }}>
                  {row.mlops}
                </td>
                <td style={{ padding: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(16, 185, 129, 0.02)', lineHeight: 1.5 }}>
                  {row.finops}
                </td>
                <td style={{ padding: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(225, 29, 72, 0.02)', lineHeight: 1.5 }}>
                  {row.responsibleai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Intersections & Overlaps */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles color="#fbbf24" size={22} /> Modern Intersections: Where the 4 Ops Converge
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          Modern cloud-native, GenAI, and enterprise AI platforms demand unified operations. Here is how AIOps, MLOps, FinOps, and Responsible AI cross-pollinate:
        </p>

        <div className="grid-2" style={{ gap: '20px' }}>
          {INTERSECTION_MATRIX.map((item, index) => (
            <div key={index} className="glass-panel" style={{ padding: '24px', position: 'relative' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Synergy Concept #{index + 1}
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '12px', lineHeight: 1.3 }}>{item.title}</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
