'use client';
import { Framework, FrameworkProgress } from '../../lib/types';
import ProgressRing from './ProgressRing';
import Badge from './Badge';

interface FrameworkCardProps {
  framework: Framework;
  progress?: FrameworkProgress;
  onStart: () => void;
}

export default function FrameworkCard({ framework, progress, onStart }: FrameworkCardProps) {
  const score = progress?.bestScore || 0;
  const isCompleted = score > 75;

  return (
    <div 
      className="glass-strong"
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `2px solid ${framework.gradientFrom || 'var(--violet)'}`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 10px 30px -10px ${framework.gradientFrom || 'var(--violet)'}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '200px',
        height: '200px',
        background: `radial-gradient(circle, ${framework.gradientFrom || 'var(--violet)'} 0%, transparent 70%)`,
        opacity: 0.1,
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '2.5rem' }}>{framework.icon}</div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>{framework.name}</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Badge variant="info" size="sm">{framework.domains?.length || 0} Domains</Badge>
              <Badge variant="neutral" size="sm">{framework.totalQuestions || 0} Qs</Badge>
            </div>
          </div>
        </div>
        
        {progress && (
          <div style={{ position: 'relative' }}>
            <ProgressRing percentage={score} size={60} strokeWidth={6} color={isCompleted ? 'var(--emerald)' : 'var(--cyan)'} showPercentage />
          </div>
        )}
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0, zIndex: 1 }}>
        {framework.description}
      </p>

      {framework.certifications && framework.certifications.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', zIndex: 1 }}>
          {framework.certifications.map(cert => (
            <Badge key={cert} variant="neutral" size="sm">{cert}</Badge>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', zIndex: 1 }}>
        <button 
          onClick={onStart}
          style={{
            flex: 1,
            padding: '0.75rem',
            background: 'var(--surface-3)',
            color: '#fff',
            border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--violet)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--surface-3)'}
        >
          Start Assessment
        </button>
        <button 
          style={{
            padding: '0.75rem 1rem',
            background: 'transparent',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-1)',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--text-secondary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-1)';
          }}
        >
          View details
        </button>
      </div>
    </div>
  );
}
