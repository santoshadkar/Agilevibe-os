import React from 'react';
import { CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function MCQQuestion({ question, userResponse, onSelectOption, isReviewMode }) {
  const renderSVGDiagram = (svgType) => {
    if (svgType === 'cube_grid') {
      return (
        <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
          <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.15)">
              <polygon points="110,20 150,40 110,60 70,40" />
              <polygon points="70,40 110,60 110,100 70,80" />
              <polygon points="110,60 150,40 150,80 110,100" />
              <polygon points="150,40 190,60 150,80 110,60" />
              <polygon points="110,100 150,80 150,120 110,140" fill="rgba(139, 92, 246, 0.3)" />
              <polygon points="70,80 110,100 110,140 70,120" fill="rgba(139, 92, 246, 0.3)" />
            </g>
            <text x="110" y="170" fill="#94a3b8" fontSize="12" textAnchor="middle">Isometric Block Figure</text>
          </svg>
        </div>
      );
    }
    if (svgType === 'gestalt_dots') {
      return (
        <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
          <svg width="200" height="160" viewBox="0 0 200 160">
            <circle cx="100" cy="80" r="50" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="8 6" />
            <circle cx="100" cy="80" r="25" fill="#f43f5e" opacity="0.8" />
            <text x="100" y="150" fill="#94a3b8" fontSize="12" textAnchor="middle">Optical Pattern Grouping</text>
          </svg>
        </div>
      );
    }
    if (svgType === 'shadow_projection') {
      return (
        <div style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
          <svg width="200" height="160" viewBox="0 0 200 160">
            <polygon points="100,30 140,110 60,110" fill="url(#coneGrad)" />
            <ellipse cx="120" cy="120" rx="50" ry="12" fill="rgba(0,0,0,0.6)" />
            <defs>
              <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <text x="100" y="150" fill="#94a3b8" fontSize="12" textAnchor="middle">45° Light Projection</text>
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.6' }}>
        {question.question}
      </div>

      {question.svgType && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          {renderSVGDiagram(question.svgType)}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
        {question.options.map((opt, idx) => {
          const isSelected = userResponse === idx;
          const isCorrect = isReviewMode && question.answer === idx;
          const isWrongSelected = isReviewMode && isSelected && question.answer !== idx;

          let btnStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyLink: 'space-between',
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
            btnStyle.background = 'rgba(99, 102, 241, 0.15)';
            btnStyle.borderColor = '#6366f1';
            btnStyle.boxShadow = '0 0 15px rgba(99, 102, 241, 0.2)';
          }

          if (isCorrect) {
            btnStyle.background = 'rgba(16, 185, 129, 0.2)';
            btnStyle.borderColor = '#10b981';
            btnStyle.color = '#34d399';
          } else if (isWrongSelected) {
            btnStyle.background = 'rgba(244, 63, 94, 0.2)';
            btnStyle.borderColor = '#f43f5e';
            btnStyle.color = '#fb7185';
          }

          const optionLabels = ['A', 'B', 'C', 'D'];

          return (
            <button
              key={idx}
              onClick={() => !isReviewMode && onSelectOption(idx)}
              style={btnStyle}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <span style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: isSelected ? '#6366f1' : 'rgba(255, 255, 255, 0.1)',
                  color: isSelected ? '#fff' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.85rem'
                }}>
                  {optionLabels[idx]}
                </span>
                <span>{opt}</span>
              </div>
              {isCorrect && <CheckCircle2 size={20} color="#10b981" />}
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
          <h4 style={{ color: '#34d399', marginBottom: '6px', fontSize: '0.95rem' }}>Explanation:</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
