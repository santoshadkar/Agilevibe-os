'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Activity, Book, Brain, Shield, Cloud, Layers, Layout, ChevronRight, CheckCircle2, Play, Users } from 'lucide-react';

const frameworks = [
  { id: 'togaf', name: 'TOGAF v10', desc: 'Enterprise architecture methodology and framework', icon: <Activity size={32} color="var(--violet)" />, qCount: 200, dCount: 6, color: 'var(--violet)' },
  { id: 'ai-architecture', name: 'AI Architecture', desc: 'Design scalable and secure AI systems', icon: <Brain size={32} color="var(--cyan)" />, qCount: 150, dCount: 5, color: 'var(--cyan)' },
  { id: 'cybersecurity', name: 'Cybersecurity', desc: 'Secure architecture and risk management', icon: <Shield size={32} color="#f43f5e" />, qCount: 150, dCount: 5, color: '#f43f5e' },
  { id: 'enterprise', name: 'Enterprise Arch', desc: 'Align IT and business strategy', icon: <Layers size={32} color="#f59e0b" />, qCount: 100, dCount: 4, color: '#f59e0b' },
  { id: 'solution', name: 'Solution Arch', desc: 'Translate business needs into solutions', icon: <Layout size={32} color="var(--emerald)" />, qCount: 100, dCount: 4, color: 'var(--emerald)' },
  { id: 'technical', name: 'Technical Arch', desc: 'Infrastructure, cloud, and deployment', icon: <Cloud size={32} color="#a855f7" />, qCount: 100, dCount: 4, color: '#a855f7' }
];

export default function LandingPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState({ name: '', role: 'Enterprise Architect' });

  useEffect(() => {
    const saved = localStorage.getItem('amh_profile');
    if (!saved) {
      setShowModal(true);
    }
  }, []);

  const saveProfile = () => {
    if (profile.name) {
      localStorage.setItem('amh_profile', JSON.stringify(profile));
      setShowModal(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', color: 'var(--text-primary)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--violet) 0%, transparent 70%)', opacity: 0.1, filter: 'blur(60px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--cyan) 0%, transparent 70%)', opacity: 0.1, filter: 'blur(60px)', zIndex: 0 }} />

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '6rem 0', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(to right, var(--violet), var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Space Grotesk' }}>
          Master Every Architecture Framework
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
          TOGAF v10 · AI Architecture · Cybersecurity · Enterprise · Solution · Technical
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <button onClick={() => router.push('/dashboard')} style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'var(--violet)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' }}>
            Start Your Assessment <Play size={20} />
          </button>
          <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-1)', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
            Explore Frameworks
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {['6 Frameworks', '800+ Questions', '3 Question Types', 'Personalized Paths'].map((stat, i) => (
            <div key={i} className="glass" style={{ padding: '1rem 2rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--emerald)" /> {stat}
            </div>
          ))}
        </div>
      </section>

      {/* Framework Grid */}
      <section style={{ padding: '4rem 0', position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', fontFamily: 'Space Grotesk' }}>Choose Your Architecture Domain</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {frameworks.map(fw => (
            <div key={fw.id} className="glass" style={{ padding: '2rem', borderRadius: '16px', transition: 'transform 0.3s', cursor: 'pointer', borderTop: `2px solid ${fw.color}` }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                 onClick={() => router.push(`/learn/${fw.id}`)}>
              <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', display: 'inline-block' }}>
                {fw.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'Space Grotesk' }}>{fw.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '3rem' }}>{fw.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                <span>{fw.qCount} Questions</span>
                <span>{fw.dCount} Domains</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/learn/${fw.id}`); }}
                  style={{ flex: 1, padding: '0.75rem', background: `linear-gradient(135deg, ${fw.color}, var(--violet-dark))`, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>
                  Study Topics
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); router.push(`/assessment/${fw.id}`); }}
                  style={{ padding: '0.75rem 1rem', background: 'transparent', color: fw.color, border: `1px solid ${fw.color}`, borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>
                  Assess
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '6rem 0', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'Space Grotesk' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '2px', background: 'var(--border-1)', zIndex: -1 }} />
          {[
            { step: 1, title: 'Choose Framework', desc: 'Select from 6 industry standard domains' },
            { step: 2, title: 'Take Assessment', desc: 'Answer MCQ, Scenario & Drag-Drop questions' },
            { step: 3, title: 'Get Personalized Path', desc: 'Receive targeted learning recommendations' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', width: '30%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--violet)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid var(--bg-primary)' }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Adaptive Assessment', desc: 'Difficulty adjusts based on performance' },
            { title: 'Personalized Recommendations', desc: 'Curated resources per gap area' },
            { title: 'Progress Tracking', desc: 'Radar charts across all frameworks' },
            { title: 'TOGAF v10 Aligned', desc: 'Latest standard coverage' }
          ].map((f, i) => (
            <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
                <Book color="var(--cyan)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div className="glass-strong" style={{ padding: '3rem', borderRadius: '24px', width: '100%', maxWidth: '400px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', fontFamily: 'Space Grotesk' }}>Welcome to Architect Master Hub</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center' }}>Let's personalize your experience.</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Your Name</label>
              <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-1)', borderRadius: '8px', color: 'white', fontSize: '1rem' }} placeholder="Jane Doe" />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Target Role</label>
              <select value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-1)', borderRadius: '8px', color: 'white', fontSize: '1rem' }}>
                <option>Enterprise Architect</option>
                <option>Solution Architect</option>
                <option>Technical Architect</option>
                <option>AI Architect</option>
                <option>Security Architect</option>
                <option>Student/Learning</option>
              </select>
            </div>

            <button onClick={saveProfile} style={{ width: '100%', padding: '1rem', background: 'var(--violet)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1.1rem' }}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
