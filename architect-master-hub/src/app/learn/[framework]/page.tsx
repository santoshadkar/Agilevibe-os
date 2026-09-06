'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Circle, Clock, ChevronRight, ArrowRight, Zap } from 'lucide-react';
import { getTopicsForFramework } from '@/lib/content-loader';
import { getLearnProgress } from '@/lib/learn-storage';
import type { TopicContent } from '@/lib/content-types';

const FW_META: Record<string, { name: string; icon: string; color: string; from: string; to: string; desc: string }> = {
  togaf:             { name: 'TOGAF Standard v10',         icon: '🏛️', color: '#7c3aed', from: '#4f1d96', to: '#7c3aed', desc: 'The Open Group Architecture Framework — Enterprise Architecture methodology and framework' },
  'ai-architecture': { name: 'AI Architecture',            icon: '🤖', color: '#06b6d4', from: '#0e7490', to: '#06b6d4', desc: 'Design patterns and frameworks for AI/ML systems, LLMOps, and AI governance' },
  cybersecurity:     { name: 'Cybersecurity Architecture', icon: '🛡️', color: '#ef4444', from: '#991b1b', to: '#ef4444', desc: 'SABSA, Zero Trust, NIST CSF 2.0, cloud security, and identity architecture' },
  enterprise:        { name: 'Enterprise Architecture',    icon: '🏢', color: '#f59e0b', from: '#92400e', to: '#f59e0b', desc: 'Zachman, FEAF, business architecture, operating models, and EA governance' },
  solution:          { name: 'Solution Architecture',      icon: '⚡', color: '#10b981', from: '#065f46', to: '#10b981', desc: 'Microservices, event-driven, cloud well-architected, API design, and NFRs' },
  technical:         { name: 'Technical Architecture',     icon: '⚙️', color: '#8b5cf6', from: '#4c1d95', to: '#8b5cf6', desc: 'Kubernetes, IaC, Platform Engineering, DevSecOps, SRE, and FinOps' },
};

const DIFF_STYLE: Record<string, { bg: string; color: string }> = {
  foundation:   { bg: 'rgba(16,185,129,0.12)',  color: '#6ee7b7' },
  practitioner: { bg: 'rgba(245,158,11,0.12)',  color: '#fcd34d' },
  expert:       { bg: 'rgba(244,63,94,0.12)',   color: '#fda4af' },
};

export default function FrameworkLearnPage() {
  const params = useParams();
  const frameworkId = params.framework as string;
  const meta = FW_META[frameworkId] ?? { name: frameworkId, icon: '📚', color: '#7c3aed', from: '#4f1d96', to: '#7c3aed', desc: '' };

  // Load topics synchronously from static import
  const topics: TopicContent[] = getTopicsForFramework(frameworkId);

  const [completedSet, setCompletedSet] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const done = new Set(
      getLearnProgress().completedTopics
        .filter(c => c.frameworkId === frameworkId)
        .map(c => c.topicId)
    );
    setCompletedSet(done);
    setMounted(true);
  }, [frameworkId]);

  const pct = topics.length > 0 ? Math.round((completedSet.size / topics.length) * 100) : 0;
  const totalMins = topics.reduce((s, t) => s + t.estimatedMinutes, 0);
  const firstIncomplete = topics.find(t => !completedSet.has(t.id));

  return (
    <div style={{ color: 'var(--text-primary)', minHeight: '100vh' }}>

      {/* ── Hero Banner ── */}
      <div style={{ background: `linear-gradient(135deg, ${meta.from}22, ${meta.to}11)`, borderBottom: '1px solid var(--border-1)', padding: '3rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '1.5rem' }}>
            ← Learning Hub
          </Link>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>{meta.icon}</span>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{meta.name}</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 600, lineHeight: 1.6, marginBottom: '1.25rem' }}>{meta.desc}</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📚 {topics.length} topics</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>⏱️ ~{Math.round(totalMins / 60)}h {totalMins % 60}m total</span>
                {mounted && completedSet.size > 0 && (
                  <span style={{ fontSize: '0.85rem', color: '#6ee7b7' }}>✅ {completedSet.size}/{topics.length} completed</span>
                )}
              </div>
            </div>

            {/* Progress ring */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <svg width={80} height={80} viewBox="0 0 80 80">
                <circle cx={40} cy={40} r={33} fill="none" stroke="var(--surface-2)" strokeWidth={6} />
                <circle cx={40} cy={40} r={33} fill="none" stroke={meta.color} strokeWidth={6}
                  strokeDasharray={`${2 * Math.PI * 33}`}
                  strokeDashoffset={`${2 * Math.PI * 33 * (1 - pct / 100)}`}
                  strokeLinecap="round" transform="rotate(-90 40 40)" />
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="16" fontWeight="700" fill={meta.color}>{mounted ? pct : 0}%</text>
              </svg>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Progress</span>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ height: 6, background: 'var(--surface-2)', borderRadius: 3 }}>
              <div style={{ height: '100%', width: mounted ? `${pct}%` : '0%', background: `linear-gradient(90deg, ${meta.from}, ${meta.to})`, borderRadius: 3, transition: 'width 0.8s ease' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '2rem', alignItems: 'start' }}>

        {/* Topics List */}
        <div>
          {/* Continue banner */}
          {firstIncomplete && (
            <Link href={`/learn/${frameworkId}/${firstIncomplete.id}`} style={{
              display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem',
              background: `linear-gradient(135deg, ${meta.from}33, ${meta.to}22)`,
              border: `1px solid ${meta.color}55`, borderRadius: 'var(--r-xl)',
              textDecoration: 'none', marginBottom: '2rem',
            }}>
              <div style={{ padding: '0.75rem', background: `${meta.color}22`, borderRadius: 'var(--r-md)', flexShrink: 0 }}>
                <ArrowRight size={20} color={meta.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.75rem', color: meta.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                  {mounted && completedSet.size > 0 ? 'Continue where you left off' : 'Start here'}
                </p>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {firstIncomplete.title}
                </p>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            </Link>
          )}

          {topics.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No topics found</p>
              <p style={{ fontSize: '0.875rem' }}>Framework ID: {frameworkId}</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {topics.map((topic, i) => {
                const done = mounted && completedSet.has(topic.id);
                const diff = DIFF_STYLE[topic.difficulty] ?? DIFF_STYLE.foundation;
                return (
                  <Link
                    key={topic.id}
                    href={`/learn/${frameworkId}/${topic.id}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1.5rem',
                      padding: '1.25rem 1.5rem',
                      background: 'var(--surface-1)',
                      border: `1px solid ${done ? 'var(--emerald)' : 'var(--border-1)'}`,
                      borderLeft: `3px solid ${done ? 'var(--emerald)' : meta.color}`,
                      borderRadius: 'var(--r-xl)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    {/* Number */}
                    <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: done ? 'var(--emerald)' : 'var(--text-muted)', minWidth: '2.5rem', flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Status icon */}
                    <div style={{ flexShrink: 0 }}>
                      {done
                        ? <CheckCircle size={22} color="var(--emerald)" />
                        : <Circle size={22} color="var(--text-muted)" />}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontWeight: 600, fontSize: '0.975rem', color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                        {topic.title}
                      </p>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                        {topic.subtitle}
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Clock size={11} /> {topic.estimatedMinutes} min
                        </span>
                        <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', background: diff.bg, color: diff.color, borderRadius: 4, textTransform: 'capitalize' }}>
                          {topic.difficulty}
                        </span>
                        <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', background: 'var(--surface-2)', color: 'var(--text-muted)', borderRadius: 4 }}>
                          {topic.domain}
                        </span>
                      </div>
                    </div>

                    <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div style={{ position: 'sticky', top: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Assessment CTA */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
            <Zap size={28} color={meta.color} style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to test yourself?</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Take the full assessment to gauge your level and get personalised recommendations.
            </p>
            <Link href={`/assessment/${frameworkId}`} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.875rem', background: `linear-gradient(135deg, ${meta.from}, ${meta.to})`,
              color: '#fff', borderRadius: 'var(--r-md)', textDecoration: 'none', fontWeight: 700,
              fontSize: '0.9rem', boxShadow: `0 4px 16px ${meta.color}33`,
            }}>
              Start Assessment <ArrowRight size={16} />
            </Link>
          </div>

          {/* Progress checklist */}
          <div className="glass" style={{ padding: '1.25rem', borderRadius: 'var(--r-xl)', maxHeight: 400, overflowY: 'auto' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Your Progress</p>
            {topics.map(t => (
              <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0' }}>
                {mounted && completedSet.has(t.id)
                  ? <CheckCircle size={13} color="var(--emerald)" style={{ flexShrink: 0 }} />
                  : <Circle size={13} color="var(--border-2)" style={{ flexShrink: 0 }} />}
                <span style={{ fontSize: '0.78rem', color: mounted && completedSet.has(t.id) ? 'var(--emerald-light)' : 'var(--text-muted)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {t.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
