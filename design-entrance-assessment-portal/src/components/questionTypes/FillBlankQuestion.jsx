import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function FillBlankQuestion({ question, userResponse = '', onTextChange, isReviewMode }) {
  const isCorrect = isReviewMode && question.acceptableAnswers.some(
    ans => ans.toLowerCase().trim() === userResponse.toLowerCase().trim()
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.6' }}>
        {question.question}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Your Answer:
        </label>
        <input
          type="text"
          value={userResponse}
          onChange={(e) => !isReviewMode && onTextChange(e.target.value)}
          placeholder="Type your answer here..."
          disabled={isReviewMode}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: isReviewMode
              ? (isCorrect ? '2px solid #10b981' : '2px solid #f43f5e')
              : '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            fontSize: '1.05rem',
            outline: 'none',
            transition: 'all 0.2s ease'
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
              {isCorrect ? 'Correct Answer!' : 'Incorrect / Incomplete'}
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Accepted Key Answers: <strong>{question.acceptableAnswers.join(', ')}</strong>
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '6px' }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
