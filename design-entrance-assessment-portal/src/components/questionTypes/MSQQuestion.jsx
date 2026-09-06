import React from 'react';
import { CheckSquare, Square, CheckCircle2 } from 'lucide-react';

export default function MSQQuestion({ question, userResponse = [], onSelectOptions, isReviewMode }) {
  // userResponse is an array of selected option indices e.g. [0, 2]
  const toggleOption = (idx) => {
    if (isReviewMode) return;
    const current = Array.isArray(userResponse) ? userResponse : [];
    let updated;
    if (current.includes(idx)) {
      updated = current.filter(i => i !== idx);
    } else {
      updated = [...current, idx];
    }
    onSelectOptions(updated);
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.6' }}>
        {question.question}
      </div>

      <div style={{
        background: 'rgba(236, 72, 153, 0.08)',
        border: '1px solid rgba(236, 72, 153, 0.2)',
        padding: '10px 14px',
        borderRadius: '10px',
        color: '#f472b6',
        fontSize: '0.85rem',
        fontWeight: '600'
      }}>
        ⚠️ MSQ Rule (UCEED): One or MORE than one option can be correct. Select ALL correct choices.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
        {question.options.map((opt, idx) => {
          const isSelected = Array.isArray(userResponse) && userResponse.includes(idx);
          const isCorrectChoice = question.correctAnswers?.includes(idx);

          let btnStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-main)',
            fontSize: '1rem',
            cursor: isReviewMode ? 'default' : 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'left'
          };

          if (isSelected && !isReviewMode) {
            btnStyle.background = 'rgba(236, 72, 153, 0.15)';
            btnStyle.borderColor = '#ec4899';
            btnStyle.boxShadow = '0 0 15px rgba(236, 72, 153, 0.2)';
          }

          if (isReviewMode && isCorrectChoice) {
            btnStyle.background = 'rgba(16, 185, 129, 0.2)';
            btnStyle.borderColor = '#10b981';
            btnStyle.color = '#34d399';
          }

          return (
            <button
              key={idx}
              onClick={() => toggleOption(idx)}
              style={btnStyle}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <span style={{ color: isSelected ? '#ec4899' : 'var(--text-muted)' }}>
                  {isSelected ? <CheckSquare size={20} /> : <Square size={20} />}
                </span>
                <span style={{ fontWeight: '700', fontSize: '0.88rem', color: '#94a3b8' }}>
                  ({optionLabels[idx]})
                </span>
                <span>{opt}</span>
              </div>
              {isReviewMode && isCorrectChoice && <CheckCircle2 size={20} color="#10b981" />}
            </button>
          );
        })}
      </div>

      {isReviewMode && question.explanation && (
        <div style={{
          marginTop: '16px',
          padding: '16px',
          borderRadius: '12px',
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <h4 style={{ color: '#34d399', marginBottom: '6px', fontSize: '0.95rem' }}>Solutions & Correct Keys:</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
