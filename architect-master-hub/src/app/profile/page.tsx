'use client';
import { useState, useEffect } from 'react';
import { User, Award, Activity, Calendar, Settings, Edit3, Target } from 'lucide-react';

const frameworks = [
  { name: 'TOGAF v10', score: 82, color: 'var(--violet)' },
  { name: 'AI Architecture', score: 95, color: 'var(--cyan)' },
  { name: 'Cybersecurity', score: 60, color: '#f43f5e' },
  { name: 'Enterprise Arch', score: 75, color: '#f59e0b' },
  { name: 'Solution Arch', score: 88, color: 'var(--emerald)' },
  { name: 'Technical Arch', score: 0, color: '#a855f7' }
];

export default function ProfilePage() {
  const [profile, setProfile] = useState({ name: 'Guest', role: 'Enterprise Architect' });

  useEffect(() => {
    const saved = localStorage.getItem('amh_profile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', color: 'var(--text-primary)' }}>
      
      {/* Profile Header */}
      <div className="glass" style={{ padding: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to right, var(--violet), var(--cyan))', opacity: 0.2 }} />
        
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--surface-1)', border: '4px solid var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
          <User size={60} color="var(--text-secondary)" />
        </div>
        
        <div style={{ zIndex: 1, flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontFamily: 'Space Grotesk', marginBottom: '0.5rem' }}>{profile.name}</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--violet)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={20} /> {profile.role}
              </p>
              <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <Calendar size={16} /> Joined October 2023
              </p>
            </div>
            <button style={{ padding: '0.5rem 1rem', background: 'var(--surface-1)', color: 'var(--text-primary)', border: '1px solid var(--border-1)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Edit3 size={16} /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Stats */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Assessments</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>12</p>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Avg Score</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>80%</p>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Mastered</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Space Grotesk', color: 'var(--emerald)' }}>2</p>
              </div>
              <div style={{ padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Streak</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Space Grotesk', color: '#f59e0b' }}>5 Days</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Badges</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🚀', name: 'Fast Learner' },
                { icon: '🧠', name: 'AI Expert' },
                { icon: '🎯', name: 'Perfect Score' },
                { icon: '🔥', name: '7-Day Streak' }
              ].map((b, i) => (
                <div key={i} style={{ padding: '1rem', background: 'var(--surface-1)', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-1)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{b.icon}</div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{b.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Mastery */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Framework Mastery</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {frameworks.map((fw, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'var(--surface-1)', borderRadius: '12px', borderLeft: `4px solid ${fw.color}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 600 }}>{fw.name}</span>
                    <span style={{ color: fw.score > 0 ? fw.color : 'var(--text-muted)' }}>{fw.score}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--surface-2)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${fw.score}%`, height: '100%', background: fw.color }} />
                  </div>
                  {fw.score > 75 && <p style={{ fontSize: '0.75rem', color: 'var(--emerald)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Award size={12} /> Mastered</p>}
                </div>
              ))}
            </div>
          </div>

          {/* History */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk', marginBottom: '1.5rem' }}>Assessment History</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { fw: 'TOGAF v10', date: 'Oct 24', score: 82, color: 'var(--violet)' },
                { fw: 'AI Architecture', date: 'Oct 20', score: 95, color: 'var(--cyan)' },
                { fw: 'Enterprise Arch', date: 'Oct 15', score: 75, color: '#f59e0b' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--surface-1)', borderRadius: '8px', border: '1px solid var(--border-1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                    <div>
                      <p style={{ fontWeight: 600 }}>{item.fw}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.date}</p>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>
                    {item.score}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
