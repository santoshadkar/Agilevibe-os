'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle, Clock, Target, ChevronRight, Award, ArrowRight, Zap } from 'lucide-react';
import { getFrameworkProgress } from '@/lib/learn-storage';

const FRAMEWORKS = [
  { id: 'togaf',           name: 'TOGAF Standard v10',         icon: '🏛️', color: '#7c3aed', from: '#4f1d96', to: '#7c3aed', topics: 14, totalMinutes: 174, certifications: ['TOGAF Foundation', 'TOGAF Practitioner'] },
  { id: 'ai-architecture', name: 'AI Architecture',             icon: '🤖', color: '#06b6d4', from: '#0e7490', to: '#06b6d4', topics: 10, totalMinutes: 123, certifications: ['Google Professional ML Engineer', 'AWS ML Specialty'] },
  { id: 'cybersecurity',   name: 'Cybersecurity Architecture',  icon: '🛡️', color: '#ef4444', from: '#991b1b', to: '#ef4444', topics: 9,  totalMinutes: 114, certifications: ['CISSP', 'SABSA SCF-F', 'CCSP'] },
  { id: 'enterprise',      name: 'Enterprise Architecture',      icon: '🏢', color: '#f59e0b', from: '#92400e', to: '#f59e0b', topics: 8,  totalMinutes: 97,  certifications: ['TOGAF Practitioner', 'CBA'] },
  { id: 'solution',        name: 'Solution Architecture',        icon: '⚡', color: '#10b981', from: '#065f46', to: '#10b981', topics: 8,  totalMinutes: 103, certifications: ['AWS SA Professional', 'Azure SA Expert'] },
  { id: 'technical',       name: 'Technical Architecture',       icon: '⚙️', color: '#8b5cf6', from: '#4c1d95', to: '#8b5cf6', topics: 8,  totalMinutes: 108, certifications: ['CKA', 'AWS DevOps Pro'] },
];

const HOW_TO_STEPS = [
  { icon: '📖', step: '1', title: 'Choose a Framework', desc: 'Pick the architecture domain you want to master.' },
  { icon: '📚', step: '2', title: 'Study Each Topic', desc: 'Work through topics in order with rich explanations, diagrams, and examples.' },
  { icon: '✅', step: '3', title: 'Mark Topics Complete', desc: 'Track your reading progress as you go.' },
  { icon: '🎯', step: '4', title: 'Take the Assessment', desc: 'Prove your knowledge with MCQ, scenario, and drag-and-drop questions.' },
  { icon: '📊', step: '5', title: 'Review Weak Areas', desc: 'Results show which topics to revisit for improvement.' },
];

export default function LearnHub() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    setMounted(true);
    const p: Record<string, number> = {};
    FRAMEWORKS.forEach(fw => {
      p[fw.id] = getFrameworkProgress(fw.id, fw.topics);
    });
    setProgress(p);
  }, []);

  const totalTopics = FRAMEWORKS.reduce((s, fw) => s + fw.topics, 0);
  const completedTopics = mounted
    ? FRAMEWORKS.reduce((s, fw) => s + Math.round((progress[fw.id] || 0) * fw.topics / 100), 0)
    : 0;
  const totalHours = Math.round(FRAMEWORKS.reduce((s, fw) => s + fw.totalMinutes, 0) / 60);

  return (
    <div style={{ color: 'var(--text-primary)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{ padding: '4rem 2rem 3rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="glass-panel" style={{ borderRadius: 'var(--r-2xl)', padding: '3.5rem', position: 'relative', overflow: 'hidden', marginBottom: '3rem' }}>
          {/* Gradient orb */}
          <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: 200, width: 240, height: 240, background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.5rem', background: 'var(--violet-faint)', border: '1px solid var(--violet)', borderRadius: 'var(--r-md)' }}>
                <BookOpen size={24} color="var(--violet-light)" />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--violet-light)' }}>Learning Hub</span>
            </div>

            <h1 className="gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15 }}>
              Architecture Learning Hub
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: 620, lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Master every architecture framework with structured study material, real-world examples, embedded quizzes, and expert resources — then prove it with assessments.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { icon: <BookOpen size={18} />, value: '6', label: 'Frameworks', color: 'var(--violet)' },
                { icon: <Target size={18} />,   value: `${totalTopics}`, label: 'Study Topics', color: 'var(--cyan)' },
                { icon: <Clock size={18} />,    value: `${totalHours}h`, label: 'Study Content', color: 'var(--emerald)' },
                { icon: <Award size={18} />,    value: '800+', label: 'Questions', color: 'var(--amber)' },
                ...(mounted && completedTopics > 0 ? [{ icon: <CheckCircle size={18} />, value: `${completedTopics}`, label: 'Completed', color: 'var(--emerald)' }] : []),
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: s.color }}>{s.icon}</span>
                  <strong style={{ fontFamily: 'Space Grotesk', fontSize: '1.3rem', color: 'var(--text-primary)' }}>{s.value}</strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Framework Cards ── */}
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>Choose a Framework</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {FRAMEWORKS.map(fw => {
            const pct = mounted ? (progress[fw.id] || 0) : 0;
            const doneTopics = Math.round(pct * fw.topics / 100);
            return (
              <div key={fw.id} className="learn-framework-card">
                {/* Color banner */}
                <div style={{ height: 6, background: `linear-gradient(90deg, ${fw.from}, ${fw.to})` }} />
                <div style={{ padding: '1.75rem' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '2.25rem' }}>{fw.icon}</span>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, marginTop: '0.5rem', color: 'var(--text-primary)' }}>{fw.name}</h3>
                    </div>
                    {/* Circular progress */}
                    <svg width={56} height={56} viewBox="0 0 56 56">
                      <circle cx={28} cy={28} r={23} fill="none" stroke="var(--surface-2)" strokeWidth={4} />
                      <circle cx={28} cy={28} r={23} fill="none" stroke={fw.color} strokeWidth={4}
                        strokeDasharray={`${2 * Math.PI * 23}`}
                        strokeDashoffset={`${2 * Math.PI * 23 * (1 - pct / 100)}`}
                        strokeLinecap="round"
                        transform="rotate(-90 28 28)" />
                      <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="700" fill={fw.color}>{pct}%</text>
                    </svg>
                  </div>

                  {/* Meta row */}
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <BookOpen size={12} /> {fw.topics} topics
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={12} /> ~{fw.totalMinutes} min
                    </span>
                    {doneTopics > 0 && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--emerald-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <CheckCircle size={12} /> {doneTopics}/{fw.topics} done
                      </span>
                    )}
                  </div>

                  {/* Progress bar */}
                  <div style={{ height: 4, background: 'var(--border-1)', borderRadius: 2, marginBottom: '1.25rem' }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg, ${fw.from}, ${fw.to})`, borderRadius: 2, transition: 'width 0.8s ease' }} />
                  </div>

                  {/* Certifications */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {fw.certifications.slice(0, 2).map(cert => (
                      <span key={cert} style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem', background: 'var(--surface-2)', border: '1px solid var(--border-1)', borderRadius: 10, color: 'var(--text-muted)' }}>
                        🏆 {cert}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Link href={`/learn/${fw.id}`} style={{
                      flex: 1, padding: '0.75rem', background: `linear-gradient(135deg, ${fw.from}, ${fw.to})`,
                      color: '#fff', border: 'none', borderRadius: 'var(--r-md)', textDecoration: 'none',
                      fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                      boxShadow: `0 4px 16px ${fw.color}33`,
                    }}>
                      {pct > 0 ? 'Continue' : 'Start'} Learning <ArrowRight size={14} />
                    </Link>
                    <Link href={`/assessment/${fw.id}`} style={{
                      padding: '0.75rem 1rem', background: 'var(--surface-2)', color: 'var(--text-secondary)',
                      border: '1px solid var(--border-1)', borderRadius: 'var(--r-md)', textDecoration: 'none',
                      fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: 'all 0.2s',
                    }}>
                      <Zap size={14} /> Assess
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── How to Use ── */}
        <div className="glass-panel" style={{ borderRadius: 'var(--r-2xl)', padding: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
            Your Learning Path
          </h2>
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', position: 'relative' }}>
            {HOW_TO_STEPS.map((step, i) => (
              <div key={i} style={{ flex: 1, minWidth: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 1rem', position: 'relative' }}>
                {/* connector */}
                {i < HOW_TO_STEPS.length - 1 && (
                  <div style={{ position: 'absolute', top: 22, left: '60%', right: '-40%', height: 2, background: 'linear-gradient(90deg, var(--violet), var(--cyan))', opacity: 0.3 }} />
                )}
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--violet-faint)', border: '1px solid var(--violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--violet-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>Step {step.step}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{step.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
