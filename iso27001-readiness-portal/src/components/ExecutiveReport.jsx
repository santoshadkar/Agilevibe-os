import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CLAUSES_DATA, MANDATORY_DOCUMENTS, READINESS_STEPS, ANNEX_A_CATEGORIES } from '../data/iso27001Data';
import { BarChart3, ShieldCheck, AlertTriangle, Printer, CheckCircle, Award, ArrowRight, Zap, Target } from 'lucide-react';

export default function ExecutiveReport({ assessmentState, roadmapState, docState, soaState, showToast }) {
  // Calculate self-assessment score
  const allClauseQuestions = CLAUSES_DATA.flatMap(c => c.questions);
  let totalAssessmentPoints = 0;
  allClauseQuestions.forEach(q => {
    const val = assessmentState[q.id] || 0;
    totalAssessmentPoints += (val / 4) * 100;
  });
  const selfAssessmentScore = allClauseQuestions.length > 0 ? Math.round(totalAssessmentPoints / allClauseQuestions.length) : 0;

  // Calculate roadmap score
  const completedStepsCount = Object.values(roadmapState).filter(Boolean).length;
  const roadmapScore = Math.round((completedStepsCount / READINESS_STEPS.length) * 100);

  // Calculate mandatory docs score
  let approvedDocs = 0;
  MANDATORY_DOCUMENTS.forEach(d => {
    const st = docState[d.id] || 'not_started';
    if (st === 'approved' || st === 'audited') approvedDocs++;
  });
  const docScore = Math.round((approvedDocs / MANDATORY_DOCUMENTS.length) * 100);

  // Calculate overall readiness score weighted average
  const overallReadiness = Math.round((selfAssessmentScore * 0.4) + (roadmapScore * 0.3) + (docScore * 0.3));

  // Determine readiness status category
  let readinessStatus = {
    title: "Needs Remediation",
    color: "var(--accent-rose)",
    badge: "badge-rose",
    desc: "Significant foundational work required in policy formulation, risk assessment, and control implementation before scheduling external audit."
  };

  if (overallReadiness >= 80) {
    readinessStatus = {
      title: "Stage 1 & Stage 2 Audit Ready!",
      color: "var(--accent-emerald)",
      badge: "badge-emerald",
      desc: "Your organization demonstrates strong ISMS governance, documented evidence, and operational maturity. Ready for external certification body audit."
    };
  } else if (overallReadiness >= 50) {
    readinessStatus = {
      title: "Conditionally Ready (Substantial Progress)",
      color: "var(--accent-amber)",
      badge: "badge-amber",
      desc: "Core framework is established, but key documentation approvals and internal audit nonconformities require remediation."
    };
  }

  // Trigger celebration confetti if readiness >= 80
  useEffect(() => {
    if (overallReadiness >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [overallReadiness]);

  // Identify top uncompleted gaps
  const topGaps = [];
  allClauseQuestions.forEach(q => {
    const score = assessmentState[q.id] || 0;
    if (score < 2) {
      topGaps.push({ code: q.code, question: q.question, score });
    }
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Card */}
      <div className="card">
        <div className="card-glow" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
              <BarChart3 size={14} /> Executive Audit Summary & Progress Analytics
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.2rem 0' }}>ISO/IEC 27001 Executive Readiness Dashboard</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Synthesized performance metrics across self-assessment maturity, implementation roadmap, and mandatory document governance.
            </p>
          </div>

          <div className="no-print">
            <button className="btn btn-primary" onClick={handlePrint}>
              <Printer size={16} /> Print / Export PDF Report
            </button>
          </div>
        </div>
      </div>

      {/* Main Readiness Gauge Card */}
      <div className="card" style={{ background: 'linear-gradient(135deg, rgba(19,28,46,0.95), rgba(24,34,56,0.95))', border: `2px solid ${readinessStatus.color}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className={`badge ${readinessStatus.badge}`} style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              <Award size={16} /> {readinessStatus.title}
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.5rem' }}>
              Overall ISMS Readiness Index: <span style={{ color: readinessStatus.color }}>{overallReadiness}%</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              {readinessStatus.desc}
            </p>
          </div>

          <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'var(--bg-primary)', border: `8px solid ${readinessStatus.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 25px ${readinessStatus.color}40` }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: readinessStatus.color, lineHeight: 1 }}>{overallReadiness}%</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginTop: '4px' }}>Ready Score</span>
          </div>
        </div>
      </div>

      {/* Sub-score Pillar Gauges */}
      <div className="grid-3">
        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>Pillar 1 (40% Weight)</div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Self-Assessment Maturity</h4>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>{selfAssessmentScore}%</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${selfAssessmentScore}%` }} />
          </div>
        </div>

        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>Pillar 2 (30% Weight)</div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Roadmap Implementation</h4>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{roadmapScore}%</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${roadmapScore}%`, background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))' }} />
          </div>
        </div>

        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>Pillar 3 (30% Weight)</div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Mandatory Documentation</h4>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>{docScore}%</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${docScore}%`, background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-amber))' }} />
          </div>
        </div>
      </div>

      {/* Clause-by-Clause Score Breakdown */}
      <div className="card">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target size={20} color="var(--accent-cyan)" /> Clause-by-Clause Compliance Breakdown
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {CLAUSES_DATA.map(clause => {
            let pts = 0;
            clause.questions.forEach(q => {
              pts += ((assessmentState[q.id] || 0) / 4) * 100;
            });
            const clauseScore = Math.round(pts / clause.questions.length);

            return (
              <div key={clause.id} style={{ padding: '0.85rem 1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <strong style={{ fontSize: '0.92rem' }}>{clause.title}</strong>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: clauseScore >= 75 ? 'var(--accent-emerald)' : clauseScore >= 50 ? 'var(--accent-amber)' : 'var(--accent-rose)' }}>
                    {clauseScore}%
                  </span>
                </div>
                <div className="progress-bar-bg" style={{ height: '8px' }}>
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${clauseScore}%`,
                      background: clauseScore >= 75 ? 'var(--accent-emerald)' : clauseScore >= 50 ? 'var(--accent-amber)' : 'var(--accent-rose)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Gap Remediation Priorities */}
      <div className="card">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle size={20} color="var(--accent-rose)" /> Priority Remediation Gap Action Items
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Questions scored below Level 2 ("Defined") that represent significant nonconformity risk during an external ISO 27001 audit:
        </p>

        {topGaps.length === 0 ? (
          <div style={{ padding: '1.5rem', background: 'rgba(16,185,129,0.1)', border: '1px solid var(--accent-emerald)', borderRadius: 'var(--radius-md)', color: 'var(--accent-emerald)', textAlign: 'center' }}>
            <ShieldCheck size={24} style={{ marginBottom: '0.4rem' }} />
            <p style={{ fontWeight: 700 }}>No critical gap items identified!</p>
            <span style={{ fontSize: '0.85rem' }}>All evaluated clause controls meet or exceed Level 2 (Defined/Documented) maturity.</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {topGaps.map((gap, idx) => (
              <div key={idx} style={{ padding: '0.85rem 1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-rose)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span className="badge badge-rose" style={{ marginRight: '0.5rem' }}>{gap.code}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{gap.question}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-rose)', fontWeight: 700 }}>
                  Current Level: {gap.score}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
