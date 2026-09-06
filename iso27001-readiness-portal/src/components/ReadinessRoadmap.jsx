import React from 'react';
import { READINESS_STEPS } from '../data/iso27001Data';
import { Map, CheckCircle2, Circle, Clock, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ReadinessRoadmap({ roadmapState, toggleStepCompletion, showToast }) {
  const completedCount = Object.values(roadmapState).filter(Boolean).length;
  const totalSteps = READINESS_STEPS.length;
  const roadmapProgress = Math.round((completedCount / totalSteps) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Card */}
      <div className="card">
        <div className="card-glow" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
              <Map size={14} /> 10-Phase Certification Roadmap
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.2rem 0' }}>ISO 27001 Organizational Readiness Roadmap</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Follow this proven 10-stage implementation workflow to prepare your organization for successful ISO/IEC 27001 certification.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Roadmap Completion</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-emerald)' }}>
                {roadmapProgress}%
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{completedCount} of {totalSteps} Phases Complete</div>
            </div>

            <div style={{ width: '120px' }}>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${roadmapProgress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 10-Phase Timeline Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
        {READINESS_STEPS.map((step) => {
          const isDone = Boolean(roadmapState[step.step]);

          return (
            <div
              key={step.step}
              className="card"
              style={{
                background: isDone ? 'linear-gradient(135deg, rgba(16,185,129,0.08), var(--bg-card))' : 'var(--bg-card)',
                border: isDone ? '1px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <button
                    onClick={() => {
                      toggleStepCompletion(step.step);
                      showToast(isDone ? `Marked Phase ${step.step} as pending` : `Completed Phase ${step.step}!`);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: isDone ? 'var(--accent-emerald)' : 'var(--text-muted)',
                      marginTop: '2px',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    {isDone ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                  </button>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                      <span className={`badge ${isDone ? 'badge-emerald' : 'badge-cyan'}`}>
                        Phase {step.step}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                        <Clock size={14} /> {step.duration}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: isDone ? 'var(--accent-emerald)' : 'var(--text-primary)' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.25rem', maxWidth: '850px' }}>
                      {step.description}
                    </p>

                    {/* Key Deliverables Tag List */}
                    <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700 }}>Key Deliverables:</span>
                      {step.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.78rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-primary)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--accent-cyan)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                          }}
                        >
                          <FileCheck size={12} /> {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className={`btn ${isDone ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => {
                    toggleStepCompletion(step.step);
                    showToast(isDone ? `Marked Phase ${step.step} as pending` : `Completed Phase ${step.step}!`);
                  }}
                  style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}
                >
                  {isDone ? 'Mark as Incomplete' : 'Complete Phase'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
