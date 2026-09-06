import React, { useState } from 'react';
import { CLAUSES_DATA, ANNEX_A_CATEGORIES } from '../data/iso27001Data';
import { CheckSquare, AlertCircle, Info, RefreshCw, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

const MATURITY_LEVELS = [
  { level: 0, label: "0 - Not Implemented", percent: 0, color: "var(--accent-rose)", desc: "Control does not exist or is ignored." },
  { level: 1, label: "1 - Initial / Ad-hoc", percent: 25, color: "var(--accent-amber)", desc: "Informal, ad-hoc, relies on individual effort." },
  { level: 2, label: "2 - Defined / Documented", percent: 50, color: "var(--accent-cyan)", desc: "Documented procedure exists, partially enforced." },
  { level: 3, label: "3 - Managed & Operationalized", percent: 75, color: "var(--accent-purple)", desc: "Consistently implemented, monitored, and assigned." },
  { level: 4, label: "4 - Optimized & Audited", percent: 100, color: "var(--accent-emerald)", desc: "Fully automated, regularly audited, and optimized." }
];

export default function AssessmentTool({ assessmentState, updateQuestionScore, loadSampleData, resetAssessment, showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');

  // Collect all clause questions
  const allQuestions = CLAUSES_DATA.flatMap(clause => 
    clause.questions.map(q => ({ ...q, sectionId: clause.id, sectionTitle: clause.title }))
  );

  const filteredQuestions = allQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.sectionId === selectedCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchFilter.toLowerCase()) || 
                          q.code.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate scores
  const answeredCount = Object.keys(assessmentState).length;
  const totalCount = allQuestions.length;
  
  let totalPointsEarned = 0;
  Object.values(assessmentState).forEach(val => {
    totalPointsEarned += (val / 4) * 100;
  });
  const overallPercentage = totalCount > 0 ? Math.round(totalPointsEarned / totalCount) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Assessment Header Card */}
      <div className="card">
        <div className="card-glow" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
              <CheckSquare size={14} /> Interactive ISO 27001 Audit Questionnaire
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.2rem 0' }}>ISO/IEC 27001 Self-Assessment</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Evaluate your organization's maturity across mandatory Clauses 4–10. Ratings auto-save instantly.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Maturity Score</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: overallPercentage >= 75 ? 'var(--accent-emerald)' : overallPercentage >= 50 ? 'var(--accent-amber)' : 'var(--accent-rose)' }}>
                {overallPercentage}%
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{answeredCount} of {totalCount} evaluated</div>
            </div>

            <div style={{ width: '120px' }}>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${overallPercentage}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <select
              className="select-control"
              style={{ width: '240px' }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Clauses (Clauses 4 to 10)</option>
              {CLAUSES_DATA.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>

            <input
              type="text"
              className="input-control"
              style={{ width: '220px' }}
              placeholder="Search clause or keyword..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              className="btn btn-secondary"
              onClick={() => {
                loadSampleData();
                showToast("Loaded sample ISO 27001 assessment state!");
              }}
            >
              <Sparkles size={16} color="var(--accent-cyan)" /> Load Sample Ratings
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (window.confirm("Are you sure you want to reset all assessment scores?")) {
                  resetAssessment();
                  showToast("Assessment reset successfully.");
                }
              }}
            >
              <RefreshCw size={16} /> Reset All
            </button>
          </div>
        </div>
      </div>

      {/* Maturity Rating Key Legend */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Capability Maturity Scale (0 to 4)
        </h4>
        <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {MATURITY_LEVELS.map(lvl => (
            <div key={lvl.level} style={{ padding: '0.65rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: `1px solid ${lvl.color}` }}>
              <div style={{ fontWeight: 700, fontSize: '0.82rem', color: lvl.color }}>{lvl.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{lvl.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredQuestions.map((q) => {
          const currentLevel = assessmentState[q.id] !== undefined ? assessmentState[q.id] : undefined;

          return (
            <div
              key={q.id}
              className="card"
              style={{
                borderLeft: currentLevel !== undefined ? `4px solid ${MATURITY_LEVELS[currentLevel]?.color}` : '4px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="badge badge-emerald">{q.code}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{q.sectionTitle}</span>
                </div>

                {currentLevel !== undefined && (
                  <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: MATURITY_LEVELS[currentLevel]?.color, border: `1px solid ${MATURITY_LEVELS[currentLevel]?.color}` }}>
                    Score: {MATURITY_LEVELS[currentLevel]?.percent}% ({MATURITY_LEVELS[currentLevel]?.label.split('-')[1]})
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {q.question}
              </h3>

              <div style={{ padding: '0.85rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-secondary)', display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <Info size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Implementation Guidance:</strong> {q.guidance}
                  </div>
                </div>
                <div style={{ marginTop: '0.4rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Required Evidence:</strong> {q.evidence}
                  </div>
                </div>
              </div>

              {/* Rating Button Selection Group */}
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Select Organizational Maturity Level:
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {MATURITY_LEVELS.map(lvl => {
                    const isSelected = currentLevel === lvl.level;
                    return (
                      <button
                        key={lvl.level}
                        onClick={() => {
                          updateQuestionScore(q.id, lvl.level);
                          showToast(`Updated ${q.code} maturity to Level ${lvl.level}`);
                        }}
                        style={{
                          flex: '1 1 120px',
                          padding: '0.6rem 0.75rem',
                          borderRadius: 'var(--radius-md)',
                          background: isSelected ? lvl.color : 'var(--bg-primary)',
                          color: isSelected ? (lvl.level >= 3 ? '#000000' : '#ffffff') : 'var(--text-primary)',
                          border: isSelected ? `2px solid ${lvl.color}` : '1px solid var(--border-color)',
                          cursor: 'pointer',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div>Level {lvl.level}</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.85 }}>{lvl.percent}%</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
