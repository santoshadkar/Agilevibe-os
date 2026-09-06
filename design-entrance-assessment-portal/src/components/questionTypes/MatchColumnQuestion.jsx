import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MatchColumnQuestion({ question, userResponse = {}, onMatchChange, isReviewMode }) {
  // userResponse structure: { '1': 'B', '2': 'A', ... }
  const handleSelect = (itemAKey, selectedVal) => {
    if (isReviewMode) return;
    const updated = { ...userResponse, [itemAKey]: selectedVal };
    onMatchChange(updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)' }}>
        {question.title}
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Pair each item in <strong>Column A</strong> with its corresponding match in <strong>Column B</strong>:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Column A list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: '#c084fc', marginBottom: '4px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Column A</h4>
          {question.columnA.map((itemA, idx) => {
            const keyNum = `${idx + 1}`;
            const selectedMatch = userResponse[keyNum] || '';
            const isCorrect = isReviewMode && question.correctPairs[keyNum] === selectedMatch;

            return (
              <div key={idx} style={{
                padding: '14px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px'
              }}>
                <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>{itemA}</span>
                <ArrowRight size={16} color="#c084fc" />
                <select
                  value={selectedMatch}
                  onChange={(e) => handleSelect(keyNum, e.target.value)}
                  disabled={isReviewMode}
                  style={{
                    background: '#1e293b',
                    color: selectedMatch ? '#38bdf8' : '#94a3b8',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: isReviewMode ? 'default' : 'pointer'
                  }}
                >
                  <option value="">Select Pair</option>
                  {question.columnB.map((itemB, bIdx) => {
                    const optionVal = itemB.charAt(0); // 'A', 'B', 'C', 'D'
                    return (
                      <option key={bIdx} value={optionVal}>
                        Match ({optionVal})
                      </option>
                    );
                  })}
                </select>
                {isReviewMode && (
                  <span style={{ fontSize: '0.85rem', color: isCorrect ? '#34d399' : '#fb7185', fontWeight: '600' }}>
                    [Correct: {question.correctPairs[keyNum]}]
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Column B list reference */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: '#22d3ee', marginBottom: '4px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Column B Reference</h4>
          {question.columnB.map((itemB, idx) => (
            <div key={idx} style={{
              padding: '14px',
              borderRadius: '10px',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>
              {itemB}
            </div>
          ))}
        </div>
      </div>

      {isReviewMode && question.explanation && (
        <div style={{
          marginTop: '12px',
          padding: '14px',
          borderRadius: '10px',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}>
          <h4 style={{ color: '#c084fc', marginBottom: '4px', fontSize: '0.9rem' }}>Solution Explanation:</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
