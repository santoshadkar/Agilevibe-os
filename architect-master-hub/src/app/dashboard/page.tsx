'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TrendingUp, Award, Target, Clock, Zap, BookOpen, Activity, Brain, Shield, Cloud, Layers, Layout, ChevronRight } from 'lucide-react';

const frameworks = [
  { id: 'togaf', name: 'TOGAF v10', icon: <Activity size={24} color="var(--violet)" />, color: 'var(--violet)' },
  { id: 'ai-architecture', name: 'AI Architecture', icon: <Brain size={24} color="var(--cyan)" />, color: 'var(--cyan)' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield size={24} color="#f43f5e" />, color: '#f43f5e' },
  { id: 'enterprise', name: 'Enterprise Arch', icon: <Layers size={24} color="#f59e0b" />, color: '#f59e0b' },
  { id: 'solution', name: 'Solution Arch', icon: <Layout size={24} color="var(--emerald)" />, color: 'var(--emerald)' },
  { id: 'technical', name: 'Technical Arch', icon: <Cloud size={24} color="#a855f7" />, color: '#a855f7' }
];

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState({ name: 'Guest', role: 'Enterprise Architect' });

  useEffect(() => {
    const saved = localStorage.getItem('amh_profile');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', color: 'var(--text-primary)' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'Space Grotesk', marginBottom: '0.5rem' }}>Your Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome back, {profile.name} • Last active today</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-1)', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid var(--border-1)' }}>
          <Zap color="#f59e0b" size={20} />
          <span style={{ fontWeight: 600 }}>5 Day Streak</span>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { label: 'Total Assessments', value: '12', icon: <Target color="var(--violet)" /> },
          { label: 'Average Score', value: '78%', icon: <Award color="var(--cyan)" /> },
          { label: 'Frameworks Explored', value: '4/6', icon: <BookOpen color="var(--emerald)" /> },
          { label: 'Current Streak', value: '5 Days', icon: <Zap color="#f59e0b" /> }
        ].map((stat, i) => (
          <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: '12px' }}>
              {stat.icon}
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{stat.label}</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'Space Grotesk' }}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Radar Chart Area */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>Competency Radar</h2>
          <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-1)', borderRadius: '12px', border: '1px solid var(--border-1)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>[Radar Chart Placeholder: Score breakdown across 6 frameworks]</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
            {frameworks.map(fw => (
              <div key={fw.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: fw.color }}></span>
                {fw.name}
              </div>
            ))}
          </div>
        </div>

        {/* Framework Progress */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>Framework Progress</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {frameworks.map(fw => (
              <div key={fw.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px', border: '1px solid var(--border-1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {fw.icon}
                  <div>
                    <p style={{ fontWeight: 600 }}>{fw.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Foundation Level</p>
                  </div>
                </div>
                <div style={{ width: '150px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                    <span>Best Score</span>
                    <span>65%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--surface-2)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '65%', height: '100%', background: fw.color }}></div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => router.push(`/learn/${fw.id}`)} style={{ padding: '0.5rem 0.85rem', background: `linear-gradient(135deg, ${fw.color}, var(--violet-dark))`, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                    Study
                  </button>
                  <button onClick={() => router.push(`/assessment/${fw.id}`)} style={{ padding: '0.5rem 0.85rem', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-1)', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
                    Assess
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Recent Assessments */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>Recent Assessments</h2>
          <div style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', paddingBottom: '1rem', borderBottom: '1px solid var(--border-1)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <span>Framework</span>
              <span>Score</span>
              <span>Level</span>
              <span>Date</span>
              <span>Action</span>
            </div>
            {[1, 2].map(i => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '1rem 0', borderBottom: '1px solid var(--border-1)', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={16} color="var(--violet)" /> TOGAF v10
                </div>
                <span style={{ fontWeight: 600, color: 'var(--emerald)' }}>82%</span>
                <span>Practitioner</span>
                <span style={{ color: 'var(--text-secondary)' }}>Oct 24, 2023</span>
                <button style={{ background: 'transparent', border: 'none', color: 'var(--violet)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  View <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>Top Recommendations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { type: 'Course', title: 'TOGAF Phase B Deep Dive', time: '2 hours' },
              { type: 'Reading', title: 'Security Architecture Patterns', time: '45 mins' },
              { type: 'Practice', title: 'Business Scenarios', time: '1 hour' }
            ].map((rec, i) => (
              <div key={i} style={{ padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px', border: '1px solid var(--border-1)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--violet)', marginBottom: '0.25rem', fontWeight: 600 }}>{rec.type} • {rec.time}</p>
                <p style={{ fontWeight: 500 }}>{rec.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
