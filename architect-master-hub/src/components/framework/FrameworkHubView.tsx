'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  BookOpen, Clock, Award, CheckCircle2, ChevronRight,
  List, Zap, ArrowRight, Activity, Brain, Shield, Layers, Layout, Cloud
} from 'lucide-react';
import { getTopicsForFramework } from '@/lib/content-loader';
import type { FrameworkId } from '@/lib/types';

interface FrameworkHubViewProps {
  id: FrameworkId;
  name: string;
  shortName: string;
  description: string;
  iconName: 'togaf' | 'ai-architecture' | 'cybersecurity' | 'enterprise' | 'solution' | 'technical';
  color: string;
  fromColor: string;
  toColor: string;
  totalQuestions: number;
  estimatedMinutes: number;
  certifications: string[];
  domains: { name: string; desc: string; weight: string; qCount: number }[];
}

export default function FrameworkHubView({
  id,
  name,
  description,
  iconName,
  color,
  fromColor,
  toColor,
  totalQuestions,
  estimatedMinutes,
  certifications,
  domains
}: FrameworkHubViewProps) {
  const router = useRouter();
  const topics = getTopicsForFramework(id);
  const totalStudyMinutes = topics.reduce((s, t) => s + t.estimatedMinutes, 0);

  const renderIcon = () => {
    switch (iconName) {
      case 'togaf': return <Activity size={36} color="white" />;
      case 'ai-architecture': return <Brain size={36} color="white" />;
      case 'cybersecurity': return <Shield size={36} color="white" />;
      case 'enterprise': return <Layers size={36} color="white" />;
      case 'solution': return <Layout size={36} color="white" />;
      case 'technical': return <Cloud size={36} color="white" />;
      default: return <BookOpen size={36} color="white" />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '0', color: 'var(--text-primary)' }}>

      {/* ── Hero Banner ── */}
      <div style={{
        background: `linear-gradient(135deg, var(--bg-primary) 0%, ${fromColor}33 100%)`,
        padding: '3.5rem 2rem',
        borderBottom: '1px solid var(--border-1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', background: color, borderRadius: '16px', display: 'inline-flex', boxShadow: `0 8px 24px ${color}44` }}>
              {renderIcon()}
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: color, fontWeight: 700 }}>
                Architecture Framework
              </span>
              <h1 style={{ fontSize: '2.75rem', fontFamily: 'Space Grotesk', fontWeight: 700, lineHeight: 1.1 }}>{name}</h1>
            </div>
          </div>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '2rem', lineHeight: 1.6 }}>
            {description}
          </p>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <BookOpen size={18} color={color} /> <strong>{topics.length}</strong> Study Topics (~{Math.round(totalStudyMinutes / 60)}h)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <List size={18} color="var(--cyan)" /> <strong>{totalQuestions}+</strong> Assessment Questions
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <Clock size={18} color="var(--emerald)" /> <strong>{estimatedMinutes} Min</strong> Assessment
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <Award size={18} color="var(--amber)" /> <strong>{certifications.join(' · ')}</strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => router.push(`/learn/${id}`)}
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: `0 4px 20px ${color}55`
              }}
            >
              <BookOpen size={18} /> Start Studying Topics ({topics.length}) <ArrowRight size={18} />
            </button>

            <button
              onClick={() => router.push(`/assessment/${id}`)}
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                background: 'var(--surface-2)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-2)',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Zap size={18} color="#f59e0b" /> Take Assessment
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>

        {/* ── Section 1: Study Topics & Syllabus ── */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.25rem' }}>
                Study Material &amp; Syllabus Topics
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Master each topic in order with structured study content, architectural diagrams, key terms, and practice quizzes.
              </p>
            </div>
            <Link
              href={`/learn/${id}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: color,
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              Open Learning Hub <ChevronRight size={16} />
            </Link>
          </div>

          {topics.length === 0 ? (
            <div className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No study topics found.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1rem' }}>
              {topics.map((topic, i) => (
                <Link
                  key={topic.id}
                  href={`/learn/${id}/${topic.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    background: 'var(--surface-1)',
                    border: '1px solid var(--border-1)',
                    borderLeft: `4px solid ${color}`,
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-muted)', minWidth: '2rem', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {topic.title}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {topic.subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <Clock size={11} /> {topic.estimatedMinutes} min
                      </span>
                      <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', background: 'var(--surface-2)', color: 'var(--text-muted)', borderRadius: '4px', textTransform: 'capitalize' }}>
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ── Section 2: Assessment Domains Breakdown ── */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.5rem' }}>
            Assessment Domain Breakdown
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            Questions are weighted across these key knowledge domains during your assessment evaluation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {domains.map((domain, i) => (
              <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: `4px solid ${color}` }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'Space Grotesk', fontWeight: 600 }}>{domain.name}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.875rem', minHeight: '2.5rem', lineHeight: 1.5 }}>{domain.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <span>Weight: <strong>{domain.weight}</strong></span>
                  <span style={{ color: 'var(--text-muted)' }}>{domain.qCount} questions</span>
                </div>
                <div style={{ height: '6px', background: 'var(--surface-2)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: domain.weight, height: '100%', background: color }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Certifications Path ── */}
        {certifications.length > 0 && (
          <section>
            <h2 style={{ fontSize: '1.85rem', fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '1.5rem' }}>
              Target Certifications &amp; Standards
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {certifications.map((cert, i) => (
                <div key={i} className="glass" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--surface-2)', borderRadius: '12px', color: color }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontFamily: 'Space Grotesk', fontWeight: 600, marginBottom: '0.35rem' }}>{cert}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      Aligned with industry requirements for {name} architects.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
