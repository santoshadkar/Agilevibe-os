'use client';
import { useRouter } from 'next/navigation';
import { Award, Share2, RotateCcw, ArrowRight, BookOpen, FileText, PlayCircle } from 'lucide-react';

export default function AssessmentResultsPage() {
  const router = useRouter();
  
  const score = 82;
  const level = 'Practitioner';
  const color = 'var(--violet)';

  const strengths = ['Architecture Governance', 'Enterprise Continuum', 'ADM Phases A-D'];
  const weaknesses = ['Architecture Content Framework', 'Migration Planning'];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', color: 'var(--text-primary)' }}>
      
      {/* Header Summary */}
      <div className="glass" style={{ padding: '3rem', borderRadius: '24px', textAlign: 'center', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: color }} />
        <h1 style={{ fontSize: '2rem', fontFamily: 'Space Grotesk', marginBottom: '0.5rem' }}>Assessment Complete!</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>TOGAF v10 • Oct 24, 2023 • 25m 14s</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Final Score</p>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', border: `8px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', background: 'var(--surface-1)' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>{score}%</span>
            </div>
          </div>
          
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Achieved Level</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Award size={40} color={color} />
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Space Grotesk', color }}>{level}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>Excellent work! You have demonstrated strong understanding of core concepts.</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
          <button style={{ padding: '0.75rem 1.5rem', background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--border-1)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Share2 size={18} /> Share Results
          </button>
          <button onClick={() => router.push('/dashboard')} style={{ padding: '0.75rem 1.5rem', background: color, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Return to Dashboard <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Strengths & Weaknesses */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Performance Analysis</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--emerald)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--emerald)' }} /> Top Strengths
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {strengths.map((s, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--emerald)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '20px', fontSize: '0.875rem' }}>{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} /> Areas to Improve
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {weaknesses.map((w, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '20px', fontSize: '0.875rem' }}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Radar Chart Placeholder */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem', alignSelf: 'flex-start' }}>Domain Breakdown</h2>
          <div style={{ width: '100%', height: '300px', background: 'var(--surface-1)', borderRadius: '12px', border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            [Radar Chart: Domain Scores]
          </div>
        </div>

      </div>

      {/* Recommendations */}
      <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Personalized Learning Path</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Based on your performance, we recommend focusing on these resources to master the framework.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: <BookOpen color="#f59e0b" />, type: 'Official Guide', title: 'Architecture Content Framework deep dive', time: '2 hours', domain: 'Content Framework' },
            { icon: <PlayCircle color={color} />, type: 'Video Course', title: 'Phase E & F: Migration Planning strategies', time: '45 mins', domain: 'Migration Planning' },
            { icon: <FileText color="var(--cyan)" />, type: 'Practice', title: 'Deliverable Templates Exercise', time: '1 hour', domain: 'Content Framework' }
          ].map((rec, i) => (
            <div key={i} style={{ padding: '1.5rem', background: 'var(--surface-1)', borderRadius: '12px', border: '1px solid var(--border-1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ padding: '0.5rem', background: 'var(--surface-2)', borderRadius: '8px' }}>{rec.icon}</div>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-1)' }}>{rec.domain}</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{rec.type}</p>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>{rec.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{rec.time}</span>
                <button style={{ background: 'transparent', border: 'none', color: color, cursor: 'pointer', fontWeight: 600 }}>Start</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
