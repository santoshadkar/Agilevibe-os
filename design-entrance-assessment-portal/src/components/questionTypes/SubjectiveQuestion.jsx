import React, { useState } from 'react';
import { Eye, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export default function SubjectiveQuestion({ question, userResponse = '', onTextChange, isReviewMode }) {
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  const wordCount = userResponse.trim() ? userResponse.trim().split(/\s+/).length : 0;
  const isWithinLimit = question.wordLimit
    ? wordCount >= question.wordLimit.min && wordCount <= question.wordLimit.max
    : true;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.6' }}>
        {question.question}
      </div>

      {/* Rubric Evaluation Box */}
      {question.rubricPoints && (
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '12px',
          padding: '14px 18px'
        }}>
          <h4 style={{ color: '#fbbf24', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={16} /> Key Evaluation Criteria & Rubric:
          </h4>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {question.rubricPoints.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Answer TextArea & Live Counter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Your Written Response:
          </label>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: question.wordLimit ? (isWithinLimit ? '#34d399' : '#fb7185') : 'var(--text-muted)'
          }}>
            Word Count: {wordCount} {question.wordLimit && `(Target: ${question.wordLimit.min}-${question.wordLimit.max} words)`}
          </span>
        </div>

        <textarea
          rows={7}
          value={userResponse}
          onChange={(e) => !isReviewMode && onTextChange(e.target.value)}
          placeholder="Write your detailed design response, methodology, material justification, and user scenario here..."
          disabled={isReviewMode}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            fontSize: '0.98rem',
            lineHeight: '1.6',
            outline: 'none',
            fontFamily: 'var(--font-sans)',
            resize: 'vertical'
          }}
        />
      </div>

      {/* Model Answer Preview */}
      {(isReviewMode || showModelAnswer) && question.sampleModelAnswer && (
        <div style={{
          padding: '18px',
          borderRadius: '12px',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.3)'
        }}>
          <h4 style={{ color: '#818cf8', marginBottom: '8px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={18} /> Model Solution & Design Breakdown:
          </h4>
          <p style={{ color: '#e2e8f0', fontSize: '0.92rem', whiteSpace: 'pre-line', lineHeight: '1.6' }}>
            {question.sampleModelAnswer}
          </p>
        </div>
      )}

      {!isReviewMode && question.sampleModelAnswer && (
        <div>
          <button
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="btn-secondary"
            style={{ fontSize: '0.85rem', padding: '8px 14px' }}
          >
            {showModelAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
            {showModelAnswer ? 'Hide Sample Model Answer' : 'Peek Model Solution Guide'}
          </button>
        </div>
      )}
    </div>
  );
}
