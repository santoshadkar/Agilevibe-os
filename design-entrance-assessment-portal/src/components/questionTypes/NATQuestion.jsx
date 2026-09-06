import React from 'react';
import { CheckCircle2, AlertCircle, Hash } from 'lucide-react';

export default function NATQuestion({ question, userResponse = '', onValueChange, isReviewMode }) {
  const isCorrect = isReviewMode && (
    parseFloat(userResponse) === parseFloat(question.correctNumericalValue) ||
    String(userResponse).trim() === String(question.correctNumericalValue).trim()
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.6' }}>
        {question.question}
      </div>

      <div style={{
        background: 'rgba(56, 189, 248, 0.08)',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        padding: '10px 14px',
        borderRadius: '10px',
        color: '#38bdf8',
        fontSize: '0.85rem',
        fontWeight: '600'
      }}>
        💡 NAT Rule (UCEED): Enter a precise numerical value (integer or decimal). No choices will be provided.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '360px' }}>
        <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Hash size={16} /> Enter Numerical Value:
        </label>
        <input
          type="number"
          step="any"
          value={userResponse}
          onChange={(e) => !isReviewMode && onValueChange(e.target.value)}
          placeholder="e.g. 14, 3.5, 27"
          disabled={isReviewMode}
          style={{
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: isReviewMode
              ? (isCorrect ? '2px solid #10b981' : '2px solid #f43f5e')
              : '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-mono)',
            outline: 'none'
          }}
        />
      </div>

      {isReviewMode && (
        <div style={{
          marginTop: '12px',
          padding: '16px',
          borderRadius: '12px',
          background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
          border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            {isCorrect ? <CheckCircle2 color="#10b981" size={18} /> : <AlertCircle color="#f43f5e" size={18} />}
            <span style={{ fontWeight: '600', color: isCorrect ? '#34d399' : '#fb7185' }}>
              {isCorrect ? 'Correct Answer!' : 'Incorrect / Missing Numerical Value'}
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Official Numerical Key: <strong>{question.correctNumericalValue}</strong>
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '6px' }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
