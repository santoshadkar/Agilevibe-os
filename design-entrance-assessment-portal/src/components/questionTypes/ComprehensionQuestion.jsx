import React from 'react';
import MCQQuestion from './MCQQuestion';
import { BookOpen } from 'lucide-react';

export default function ComprehensionQuestion({ question, userResponse, onSelectOption, isReviewMode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
      {/* Left Pane: Sticky Passage Reader */}
      <div style={{
        background: 'rgba(15, 23, 42, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '20px',
        maxHeight: '480px',
        overflowY: 'auto',
        position: 'sticky',
        top: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '12px' }}>
          <BookOpen size={20} />
          <h3 style={{ fontSize: '1rem', fontWeight: '700' }}>{question.passageTitle}</h3>
        </div>
        <div style={{
          whiteSpace: 'pre-line',
          color: '#cbd5e1',
          fontSize: '0.92rem',
          lineHeight: '1.7',
          fontFamily: 'var(--font-sans)'
        }}>
          {question.passageText}
        </div>
      </div>

      {/* Right Pane: Linked MCQ Sub-question */}
      <div>
        <MCQQuestion
          question={question}
          userResponse={userResponse}
          onSelectOption={onSelectOption}
          isReviewMode={isReviewMode}
        />
      </div>
    </div>
  );
}
