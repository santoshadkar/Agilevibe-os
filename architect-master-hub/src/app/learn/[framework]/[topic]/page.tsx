'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft, ChevronRight, CheckCircle, Circle,
  ExternalLink, Copy, Check, AlertTriangle,
  Lightbulb, Info, Star, Clock, ArrowRight, Target
} from 'lucide-react';
import { getTopicsForFramework, getTopicById } from '@/lib/content-loader';
import { markTopicComplete, isTopicComplete, setLastVisited } from '@/lib/learn-storage';
import type { ContentBlock, ExternalResource } from '@/lib/content-types';

// ── Helpers ────────────────────────────────────────────────────────────────────
function resourceIcon(type: ExternalResource['type']) {
  const map: Record<string, string> = { video: '📺', book: '📚', course: '🎓', 'official-doc': '📄', article: '🔗' };
  return map[type] ?? '🔗';
}

function CalloutIcon({ kind }: { kind?: string }) {
  if (kind === 'warning')   return <AlertTriangle size={16} />;
  if (kind === 'tip')       return <Lightbulb size={16} />;
  if (kind === 'important') return <Star size={16} />;
  return <Info size={16} />;
}

// ── Block Renderer ─────────────────────────────────────────────────────────────
function BlockRenderer({ block }: { block: ContentBlock }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(block.content || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  switch (block.type) {
    case 'paragraph':
      return <p className="content-paragraph">{block.content}</p>;

    case 'bullets':
      return (
        <ul className="content-bullets">
          {(block.items ?? []).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );

    case 'numbered':
      return (
        <ol className="content-numbered">
          {(block.items ?? []).map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );

    case 'diagram':
      return (
        <div className="content-diagram">
          {block.title && <p style={{ fontSize: '0.75rem', color: 'var(--cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>{block.title}</p>}
          <pre>{block.content}</pre>
        </div>
      );

    case 'code':
      return (
        <div className="content-code">
          {block.title && <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'monospace' }}>{block.title}</p>}
          <button className="copy-btn" onClick={copy}>
            {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
          </button>
          <pre>{block.content}</pre>
        </div>
      );

    case 'callout':
      return (
        <div className={`callout callout-${block.calloutType ?? 'info'}`}>
          <span style={{ flexShrink: 0 }}><CalloutIcon kind={block.calloutType} /></span>
          <div className="callout-body">
            {block.title && <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{block.title}</strong>}
            {block.content}
          </div>
        </div>
      );

    case 'example':
      return (
        <div className="content-example">
          <div className="example-label">💼 Example{block.title ? ` — ${block.title}` : ''}</div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{block.content}</p>
        </div>
      );

    case 'key-concept':
      return (
        <div className="content-key-concept">
          <div className="key-concept-label">🔑 Key Concept{block.title ? ` — ${block.title}` : ''}</div>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{block.content}</p>
        </div>
      );

    case 'table':
      if (!block.table) return null;
      return (
        <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
          {block.title && <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{block.title}</p>}
          <table className="content-table">
            <thead><tr>{block.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {block.table.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

// ── Practice Quiz ──────────────────────────────────────────────────────────────
function EmbeddedQuiz({ question, index }: {
  question: { id: string; question: string; options: { id: string; text: string; isCorrect: boolean }[]; explanation: string };
  index: number;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="quiz-card">
      <div className="quiz-label">🧠 Practice Question {index + 1}</div>
      <p className="quiz-question">{question.question}</p>
      <div>
        {question.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (selected) {
            if (opt.isCorrect) cls += ' correct';
            else if (selected === opt.id) cls += ' wrong';
          }
          return (
            <button key={opt.id} className={cls} onClick={() => !selected && setSelected(opt.id)} disabled={!!selected}>
              <span style={{
                minWidth: 22, height: 22, borderRadius: '50%',
                background: selected ? (opt.isCorrect ? 'var(--emerald)' : selected === opt.id ? 'var(--rose)' : 'var(--surface-2)') : 'var(--surface-2)',
                color: selected && (opt.isCorrect || selected === opt.id) ? '#fff' : 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
              }}>
                {letters[i]}
              </span>
              {opt.text}
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="quiz-explanation">
          {question.options.find(o => o.isCorrect)?.id === selected ? '✅ Correct! ' : '❌ Not quite. '}
          {question.explanation}
        </div>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function TopicPage() {
  const params = useParams();
  const frameworkId = params.framework as string;
  const topicId = params.topic as string;

  // Synchronous — no async needed
  const topic = getTopicById(frameworkId, topicId);
  const allTopics = getTopicsForFramework(frameworkId);

  const [completed, setCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readProgress, setReadProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (topic) {
      setCompleted(isTopicComplete(frameworkId, topic.id));
      setLastVisited(frameworkId, topic.id);
    }
  }, [frameworkId, topicId, topic]);

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollHeight <= clientHeight ? 100 : Math.min(100, (scrollTop / (scrollHeight - clientHeight)) * 100);
      setReadProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active ToC item
  useEffect(() => {
    if (!topic) return;
    const ids = topic.sections.map(s => `section-${s.id}`);
    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id.replace('section-', ''));
      }, { rootMargin: '-20% 0px -70% 0px' });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [topic]);

  const handleMarkComplete = () => {
    if (!topic) return;
    markTopicComplete(frameworkId, topic.id, Math.round(topic.estimatedMinutes * 60 * readProgress / 100));
    setCompleted(true);
  };

  if (!topic) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-primary)' }}>
        <h2 style={{ marginBottom: '1rem' }}>Topic not found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Could not find topic "{topicId}" in framework "{frameworkId}"</p>
        <Link href={`/learn/${frameworkId}`} style={{ color: 'var(--violet-light)', textDecoration: 'none' }}>← Back to framework</Link>
      </div>
    );
  }

  const topicIndex = allTopics.findIndex(t => t.id === topicId);
  const prevTopic = topicIndex > 0 ? allTopics[topicIndex - 1] : null;
  const nextTopic = topicIndex < allTopics.length - 1 ? allTopics[topicIndex + 1] : null;

  const diffColor = topic.difficulty === 'expert' ? 'var(--rose)' : topic.difficulty === 'practitioner' ? 'var(--amber)' : 'var(--emerald)';
  const diffBg    = topic.difficulty === 'expert' ? 'rgba(244,63,94,0.12)' : topic.difficulty === 'practitioner' ? 'rgba(245,158,11,0.12)' : 'rgba(16,185,129,0.12)';

  return (
    <>
      {/* Reading progress bar */}
      <div className="reading-progress">
        <div className="reading-progress-fill" style={{ width: `${readProgress}%` }} />
      </div>

      <div className="topic-reader-layout">

        {/* ── ToC Sidebar ── */}
        <aside className="toc-sidebar">
          <Link href={`/learn/${frameworkId}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
            <ChevronLeft size={14} /> All Topics
          </Link>

          {/* Status */}
          <div style={{ padding: '0.75rem', borderRadius: 'var(--r-md)', background: mounted && completed ? 'var(--emerald-faint)' : 'var(--surface-2)', border: `1px solid ${mounted && completed ? 'var(--emerald)' : 'var(--border-1)'}`, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {mounted && completed ? <CheckCircle size={16} color="var(--emerald)" /> : <Circle size={16} color="var(--text-muted)" />}
            <span style={{ fontSize: '0.8rem', color: mounted && completed ? 'var(--emerald-light)' : 'var(--text-muted)' }}>
              {mounted && completed ? 'Completed ✓' : 'In Progress'}
            </span>
          </div>

          {/* Reading progress */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>Read progress</span><span>{Math.round(readProgress)}%</span>
            </div>
            <div style={{ height: 4, background: 'var(--border-1)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: `${readProgress}%`, background: 'linear-gradient(90deg, var(--violet), var(--cyan))', borderRadius: 2 }} />
            </div>
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Contents</p>
          {topic.sections.map(section => (
            <a key={section.id} href={`#section-${section.id}`} className={`toc-item${activeSection === section.id ? ' active' : ''}`}>
              {section.title}
            </a>
          ))}
          <a href="#key-terms"  className="toc-item">Key Terms</a>
          <a href="#resources"  className="toc-item">Resources</a>
          <a href="#practice"   className="toc-item">Practice Questions</a>
          {topic.examTips?.length > 0 && <a href="#exam-tips" className="toc-item">Exam Tips</a>}
        </aside>

        {/* ── Main Content ── */}
        <main style={{ color: 'var(--text-primary)', minWidth: 0 }}>

          {/* Header card */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--r-2xl)', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--violet), var(--cyan))' }} />
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ padding: '0.25rem 0.75rem', background: diffBg, color: diffColor, border: `1px solid ${diffColor}`, borderRadius: 'var(--r-sm)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'capitalize' }}>
                {topic.difficulty}
              </span>
              <span style={{ padding: '0.25rem 0.75rem', background: 'var(--surface-2)', color: 'var(--text-secondary)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-sm)', fontSize: '0.75rem' }}>
                {topic.domain}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                <Clock size={13} /> {topic.estimatedMinutes} min read
              </span>
            </div>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {topic.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{topic.subtitle}</p>
            {topic.overview && (
              <div style={{ marginTop: '1.25rem', padding: '1rem 1.25rem', background: 'var(--surface-1)', borderRadius: 'var(--r-lg)', borderLeft: '3px solid var(--violet)', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {topic.overview}
              </div>
            )}
          </div>

          {/* Content Sections */}
          {topic.sections.map(section => (
            <section key={section.id} id={`section-${section.id}`} style={{ marginBottom: '0.5rem' }}>
              <h2 className="content-section-title">{section.title}</h2>
              {section.blocks.map((block, i) => <BlockRenderer key={i} block={block} />)}
            </section>
          ))}

          <hr className="content-divider" />

          {/* Key Terms */}
          {topic.keyTerms?.length > 0 && (
            <section id="key-terms" style={{ marginBottom: '2rem' }}>
              <h2 className="content-section-title">Key Terms</h2>
              <div className="key-terms-grid">
                {topic.keyTerms.map(kt => (
                  <div key={kt.term} className="key-term-card">
                    <div className="key-term-name">{kt.term}</div>
                    <div className="key-term-def">{kt.definition}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <hr className="content-divider" />

          {/* External Resources */}
          {topic.externalResources?.length > 0 && (
            <section id="resources" style={{ marginBottom: '2.5rem' }}>
              <h2 className="content-section-title">Curated Learning Resources &amp; References</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Hand-picked books, official standards, video talks, and architectural whitepapers curated for architects studying this domain.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {Object.entries(
                  (topic.externalResources || []).reduce((acc, res) => {
                    const groupKey = res.type === 'book' ? 'Books & Reference Guides' :
                                     res.type === 'official-doc' ? 'Official Specs & Standards' :
                                     res.type === 'video' ? 'Video Talks & Lectures' :
                                     res.type === 'course' ? 'Courses & Certification Prep' :
                                     'Articles & Architecture Guides';
                    if (!acc[groupKey]) acc[groupKey] = [];
                    acc[groupKey].push(res);
                    return acc;
                  }, {} as Record<string, typeof topic.externalResources>)
                ).map(([category, items]) => (
                  <div key={category}>
                    <h3 style={{ fontSize: '1.05rem', fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {category.startsWith('Books') ? '📚' : category.startsWith('Official') ? '📄' : category.startsWith('Video') ? '📺' : category.startsWith('Courses') ? '🎓' : '🔗'} {category} ({items.length})
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                      {items.map((res, i) => (
                        <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="resource-card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', height: '100%' }}>
                          <div className="resource-icon">{resourceIcon(res.type)}</div>
                          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                              <div className="resource-title">{res.title}</div>
                              <div className="resource-desc">{res.description}</div>
                            </div>
                            <div className="resource-meta" style={{ marginTop: '0.75rem' }}>
                              {res.publisher && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{res.publisher}</span>}
                              {res.duration  && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>• {res.duration}</span>}
                              <span className={res.isFree ? 'badge-free' : 'badge-paid'}>{res.isFree ? 'FREE' : 'PAID'}</span>
                            </div>
                          </div>
                          <ExternalLink size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <hr className="content-divider" />

          {/* Practice Questions */}
          {topic.embeddedQuestions?.length > 0 && (
            <section id="practice" style={{ marginBottom: '2rem' }}>
              <h2 className="content-section-title">Practice Questions</h2>
              {topic.embeddedQuestions.map((q, i) => <EmbeddedQuiz key={q.id} question={q} index={i} />)}
            </section>
          )}

          {/* Exam Tips + Common Mistakes */}
          {(topic.examTips?.length > 0 || topic.commonMistakes?.length > 0) && (
            <>
              <hr className="content-divider" />
              <section id="exam-tips" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {topic.examTips?.length > 0 && (
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--r-xl)' }}>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', marginBottom: '1rem', color: 'var(--emerald-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Target size={18} /> Exam Tips
                      </h3>
                      <ul className="tips-list">
                        {topic.examTips.map((tip, i) => <li key={i}>🎯 {tip}</li>)}
                      </ul>
                    </div>
                  )}
                  {topic.commonMistakes?.length > 0 && (
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--r-xl)' }}>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', marginBottom: '1rem', color: 'var(--amber-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertTriangle size={18} /> Common Mistakes
                      </h3>
                      <ul className="tips-list">
                        {topic.commonMistakes.map((m, i) => <li key={i}>⚠️ {m}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </>
          )}

          <hr className="content-divider" />

          {/* Footer actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                className={`complete-btn ${mounted && completed ? 'done' : 'pending'}`}
                onClick={handleMarkComplete}
                disabled={mounted && completed}
              >
                {mounted && completed ? <><CheckCircle size={18} /> Topic Completed!</> : <>✓ Mark as Complete</>}
              </button>
              <Link href={`/assessment/${frameworkId}`} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 1.5rem', background: 'var(--surface-2)',
                color: 'var(--text-secondary)', border: '1px solid var(--border-1)',
                borderRadius: 'var(--r-lg)', textDecoration: 'none', fontWeight: 600,
              }}>
                Take Assessment <ArrowRight size={16} />
              </Link>
            </div>

            {/* Prev / Next */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {prevTopic ? (
                <Link href={`/learn/${frameworkId}/${prevTopic.id}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1rem 1.25rem', background: 'var(--surface-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-xl)', textDecoration: 'none' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <ChevronLeft size={12} /> Previous
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{prevTopic.title}</span>
                </Link>
              ) : <div style={{ flex: 1 }} />}
              {nextTopic && (
                <Link href={`/learn/${frameworkId}/${nextTopic.id}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1rem 1.25rem', background: 'var(--surface-1)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-xl)', textDecoration: 'none', textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'flex-end' }}>
                    Next <ChevronRight size={12} />
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{nextTopic.title}</span>
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
