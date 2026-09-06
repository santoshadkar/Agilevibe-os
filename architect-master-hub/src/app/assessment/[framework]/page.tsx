'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle, AlertCircle } from 'lucide-react';
import { Question, MCQQuestion, ScenarioQuestion, DragDropQuestion, AssessmentSession, Framework } from '../../../lib/types';
import { createSession, submitMCQAnswer, submitDragDropAnswer, completeSession, calculateResult } from '../../../lib/assessment-engine';
import { saveAssessmentSession, saveAssessmentResult } from '../../../lib/storage';

import { getFrameworkDataset } from '../../../data';

// ── Framework color map ───────────────────────────────────────────────────────
const FRAMEWORK_COLORS: Record<string, string> = {
  togaf: '#7c3aed',
  'ai-architecture': '#06b6d4',
  cybersecurity: '#f43f5e',
  enterprise: '#f59e0b',
  solution: '#10b981',
  technical: '#8b5cf6',
};

const FRAMEWORK_LABELS: Record<string, string> = {
  togaf: 'TOGAF Standard v10',
  'ai-architecture': 'AI Architecture',
  cybersecurity: 'Cybersecurity Architecture',
  enterprise: 'Enterprise Architecture',
  solution: 'Solution Architecture',
  technical: 'Technical Architecture',
};

// ── Drag-Drop State ───────────────────────────────────────────────────────────
interface DragDropState {
  assignments: Record<string, string>; // itemId -> zoneId
  dragging: string | null;
}

// ── MCQ / Scenario Question Card ──────────────────────────────────────────────
function MCQCard({
  question,
  selectedId,
  onSelect,
  color,
}: {
  question: MCQQuestion | ScenarioQuestion;
  selectedId?: string;
  onSelect: (id: string) => void;
  color: string;
}) {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  return (
    <div>
      {question.type === 'scenario' && (
        <div className="scenario-box" style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{question.scenario}</p>
        </div>
      )}
      <p style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
        {question.question}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {question.options.map((opt, idx) => (
          <button
            key={opt.id}
            className={`option-card${selectedId === opt.id ? ' selected' : ''}`}
            onClick={() => onSelect(opt.id)}
            style={{ borderColor: selectedId === opt.id ? color : undefined }}
          >
            <span
              className="option-letter"
              style={{
                background: selectedId === opt.id ? color : undefined,
                color: selectedId === opt.id ? '#fff' : undefined,
                borderColor: selectedId === opt.id ? color : undefined,
              }}
            >
              {letters[idx]}
            </span>
            <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Drag-Drop Question Card ───────────────────────────────────────────────────
function DragDropCard({
  question,
  state,
  onChange,
}: {
  question: DragDropQuestion;
  state: DragDropState;
  onChange: (s: DragDropState) => void;
}) {
  const unassigned = question.items.filter(item => !state.assignments[item.id]);

  const handleDrop = (zoneId: string) => {
    if (!state.dragging) return;
    onChange({
      dragging: null,
      assignments: { ...state.assignments, [state.dragging]: zoneId },
    });
  };

  const removeFromZone = (itemId: string) => {
    const next = { ...state.assignments };
    delete next[itemId];
    onChange({ ...state, assignments: next });
  };

  return (
    <div>
      <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
        {question.instruction}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Items pool */}
        <div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: 600 }}>
            Items to place
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minHeight: '80px' }}>
            {unassigned.map(item => (
              <div
                key={item.id}
                className={`drag-item${state.dragging === item.id ? ' dragging' : ''}`}
                draggable
                onDragStart={() => onChange({ ...state, dragging: item.id })}
                onDragEnd={() => onChange({ ...state, dragging: null })}
              >
                {item.content}
              </div>
            ))}
            {unassigned.length === 0 && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>All items placed ✓</p>
            )}
          </div>
        </div>
        {/* Drop zones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {question.zones.map(zone => {
            const placedItems = question.items.filter(i => state.assignments[i.id] === zone.id);
            return (
              <div
                key={zone.id}
                className={`drop-zone${state.dragging ? ' over' : ''}`}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop(zone.id)}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                  {zone.label}
                </p>
                {placedItems.map(item => (
                  <div
                    key={item.id}
                    className="drag-item placed"
                    onClick={() => removeFromZone(item.id)}
                    style={{ cursor: 'pointer' }}
                    title="Click to remove"
                  >
                    {item.content} ✕
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Main Assessment Page ──────────────────────────────────────────────────────
export default function AssessmentRunner() {
  const params = useParams();
  const router = useRouter();
  const frameworkId = params.framework as string;
  const color = FRAMEWORK_COLORS[frameworkId] || 'var(--violet)';
  const label = FRAMEWORK_LABELS[frameworkId] || frameworkId;

  // Phases: setup | running | review | calculating
  const [phase, setPhase] = useState<'setup' | 'running' | 'review' | 'calculating'>('setup');
  const [session, setSession] = useState<AssessmentSession | null>(null);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [framework, setFramework] = useState<Framework | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [dragStates, setDragStates] = useState<Record<string, DragDropState>>({});
  const [loading, setLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState(20);

  const [selectedExamId, setSelectedExamId] = useState<string>('');

  // Load framework data
  useEffect(() => {
    const data = getFrameworkDataset(frameworkId);
    if (data) {
      setAllQuestions(data.questions);
      setFramework(data.framework);
      // Default to Official Certification Exam Mode count
      const officialCount = frameworkId === 'solution' || frameworkId === 'technical' ? 65 : (frameworkId === 'ai-architecture' || frameworkId === 'cybersecurity' ? 50 : 48);
      const defaultExamId = frameworkId === 'technical' ? 'nata' : 'official';
      setSelectedExamId(defaultExamId);
      setQuestionCount(frameworkId === 'technical' ? 125 : officialCount);
    }
    setLoading(false);
  }, [frameworkId]);

  // Timer countdown
  useEffect(() => {
    if (phase !== 'running' || !session) return;
    if (timeLeft <= 0) { handleSubmit(); return; }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft, session]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const timerClass = timeLeft < 300 ? 'timer danger' : timeLeft < 600 ? 'timer warning' : 'timer';

  const startAssessment = () => {
    if (!framework || allQuestions.length === 0) return;
    
    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    const mcqs = shuffle(allQuestions.filter(q => q.type === 'mcq'));
    const scenarios = shuffle(allQuestions.filter(q => q.type === 'scenario'));
    const drags = shuffle(allQuestions.filter(q => q.type === 'drag-drop'));

    const targetCount = Math.min(questionCount, allQuestions.length);
    const nDrag = Math.min(Math.floor(targetCount * 0.15), drags.length);
    const nScen = Math.min(Math.floor(targetCount * 0.25), scenarios.length);

    const pickedMap = new Map<string, Question>();
    drags.slice(0, nDrag).forEach(q => pickedMap.set(q.id, q));
    scenarios.slice(0, nScen).forEach(q => pickedMap.set(q.id, q));

    for (const q of mcqs) {
      if (pickedMap.size >= targetCount) break;
      pickedMap.set(q.id, q);
    }

    if (pickedMap.size < targetCount) {
      for (const q of shuffle(allQuestions)) {
        if (pickedMap.size >= targetCount) break;
        pickedMap.set(q.id, q);
      }
    }

    const selected = shuffle(Array.from(pickedMap.values()));
    
    let timeLimit = targetCount * 90;
    if (selectedExamId === 'nata' || selectedExamId === 'sei' || selectedExamId === 'gate') {
      timeLimit = 180 * 60; // 180 Mins (3 Hours) for NATA, SEI, GATE AR
    } else if (selectedExamId === 'aws-tech') {
      timeLimit = 130 * 60; // 130 Mins for AWS
    } else if (questionCount === 125 || questionCount === 95) {
      timeLimit = 180 * 60;
    } else if (questionCount === 65) {
      timeLimit = (frameworkId === 'technical' ? 180 : 130) * 60;
    } else if (questionCount === 48) {
      timeLimit = 150 * 60;
    } else if (questionCount === 50) {
      timeLimit = 120 * 60;
    }

    const sess = createSession(frameworkId as any, selected, timeLimit);
    setSession(sess);
    setTimeLeft(timeLimit);
    setPhase('running');
    saveAssessmentSession(sess);
  };

  const currentQuestion = session?.questions[currentIdx];

  const handleMCQAnswer = (qId: string, optId: string) => {
    if (!session) return;
    const updated = submitMCQAnswer(session, qId, optId);
    setSession(updated);
    saveAssessmentSession(updated);
  };

  const handleDragDropChange = (qId: string, state: DragDropState) => {
    setDragStates(prev => ({ ...prev, [qId]: state }));
    if (!session) return;
    const updated = submitDragDropAnswer(session, qId, state.assignments);
    setSession(updated);
    saveAssessmentSession(updated);
  };

  const handleSubmit = useCallback(() => {
    if (!session || !framework) return;
    setPhase('calculating');
    const completed = completeSession(session);
    const result = calculateResult(completed, framework);
    saveAssessmentResult(result);
    setTimeout(() => {
      router.push(`/assessment/results/${result.id}`);
    }, 2000);
  }, [session, framework, router]);

  const answeredCount = session ? Object.keys(session.answers).length : 0;
  const totalQ = session?.questions.length || questionCount;

  // ── Setup Phase ─────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="animate-spin" style={{ width: 48, height: 48, border: `3px solid ${color}`, borderTopColor: 'transparent', borderRadius: '50%', margin: '0 auto 1rem' }} />
          <p style={{ color: 'var(--text-secondary)' }}>Loading assessment...</p>
        </div>
      </div>
    );
  }

  if (phase === 'setup') {
    return (
      <div style={{ maxWidth: 800, margin: '3rem auto', padding: '2rem', color: 'var(--text-primary)' }}>
        <div
          className="glass-panel"
          style={{ padding: '3rem', borderRadius: 24, textAlign: 'center', borderTop: `4px solid ${color}`, position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`, pointerEvents: 'none' }} />
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{framework?.icon || '🏛️'}</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '2.25rem', marginBottom: '0.75rem' }}>{label}</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Assess your knowledge across all domains and get personalized recommendations.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', background: 'var(--surface-1)', padding: '1.5rem', borderRadius: 16 }}>
            {[
              { label: 'Questions', value: questionCount },
              { label: 'Time Limit', value: `${Math.floor(timeLeft / 60)} min` },
              { label: 'Question Types', value: '3' },
              { label: 'Domains', value: framework?.domains.length || 0 },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'Space Grotesk', color }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Exam Mode Selector */}
          <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 600 }}>
              Select Assessment Mode &amp; Exam Format
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {(() => {
                if (frameworkId === 'technical') {
                  return [
                    { id: 'nata', count: 125, title: '🏛️ NATA Exam (National Aptitude)', desc: '125 Questions · 180 Mins · 200 Marks', badge: 'NATA Official' },
                    { id: 'sei', count: 95, title: '⚙️ SEI Software Architecture Exam', desc: '95 Questions · 180 Mins · Quality Attributes', badge: 'SEI Official' },
                    { id: 'gate', count: 65, title: '🎓 GATE Architecture & Planning (AR)', desc: '65 Questions · 180 Mins · General + Core', badge: 'GATE AR' },
                    { id: 'aws-tech', count: 65, title: '☁️ AWS Certified Solutions Architect', desc: '65 Questions · 130 Mins · Cloud Tech', badge: 'AWS SA' },
                    { id: 'sprint', count: 10, title: '⚡ Quick Diagnostic', desc: '10 Questions · 15 Mins', badge: 'Sprint' },
                  ];
                }

                const officialCount = frameworkId === 'solution' ? 65 : (frameworkId === 'ai-architecture' || frameworkId === 'cybersecurity' ? 50 : 48);
                const officialTime = frameworkId === 'togaf' || frameworkId === 'enterprise' ? '150 Mins' : (frameworkId === 'ai-architecture' ? '120 Mins' : '130 Mins');
                const officialTitle = frameworkId === 'togaf' ? '🏆 Full Combined Exam (Part 1 + Part 2)' : '🏆 Official Certification Exam';
                const officialSub = frameworkId === 'togaf' ? '40 Part 1 MCQs + 8 Part 2 Scenarios' : `${officialCount} Questions · ${officialTime}`;

                return [
                  { id: 'sprint', count: 10, title: '⚡ Quick Diagnostic', desc: '10 Questions · 15 Mins', badge: 'Sprint' },
                  { id: 'practice', count: 20, title: '🎯 Standard Practice', desc: '20 Questions · 30 Mins', badge: 'Recommended' },
                  { id: 'official', count: officialCount, title: officialTitle, desc: `${officialSub} (${officialTime})`, badge: 'Official Exam Mode' }
                ];
              })().map((opt) => {
                const isSelected = selectedExamId === opt.id || (questionCount === opt.count && !selectedExamId);
                return (
                  <div
                    key={opt.id}
                    onClick={() => {
                      setSelectedExamId(opt.id);
                      setQuestionCount(opt.count);
                    }}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '16px',
                      background: isSelected ? `${color}18` : 'var(--surface-1)',
                      border: `2px solid ${isSelected ? color : 'var(--border-1)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? `0 4px 16px ${color}33` : 'none',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '6px', background: isSelected ? color : 'var(--surface-2)', color: isSelected ? '#fff' : 'var(--text-muted)' }}>
                        {opt.badge}
                      </span>
                      {isSelected && <span style={{ color, fontSize: '0.9rem', fontWeight: 700 }}>✓</span>}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {opt.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {opt.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Domains */}
          {framework && (
            <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 600 }}>
                Domains Covered
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {framework.domains.map(d => (
                  <div key={d.id} className="glass" style={{ padding: '0.75rem', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{d.name}</span>
                    <span style={{ fontSize: '0.75rem', color, fontWeight: 700 }}>{d.weight}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            className="btn btn-primary btn-xl"
            onClick={startAssessment}
            disabled={allQuestions.length === 0}
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 4px 20px ${color}44` }}
          >
            Start Assessment →
          </button>
        </div>
      </div>
    );
  }

  // ── Calculating Phase ────────────────────────────────────────────────────────
  if (phase === 'calculating') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '1.5rem' }}>
        <div style={{ width: 64, height: 64, border: `4px solid ${color}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.75rem' }}>Calculating your results...</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Analyzing domain scores and generating personalized recommendations</p>
      </div>
    );
  }

  // ── Review Phase ─────────────────────────────────────────────────────────────
  if (phase === 'review') {
    const questions = session?.questions || [];
    return (
      <div style={{ maxWidth: 800, margin: '3rem auto', padding: '2rem', color: 'var(--text-primary)' }}>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '2rem', marginBottom: '0.5rem' }}>Review Your Answers</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {answeredCount} of {totalQ} answered. You can go back and change answers before submitting.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {questions.map((q, i) => {
            const answered = session?.answers[q.id];
            return (
              <button
                key={q.id}
                onClick={() => { setCurrentIdx(i); setPhase('running'); }}
                style={{
                  padding: '0.75rem',
                  borderRadius: 8,
                  border: `1px solid ${answered ? color : 'var(--border-1)'}`,
                  background: answered ? `${color}22` : 'var(--surface-1)',
                  color: answered ? color : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-ghost" onClick={() => { setCurrentIdx(0); setPhase('running'); }}>
            Continue Answering
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
          >
            <Flag size={16} /> Submit Assessment
          </button>
        </div>
      </div>
    );
  }

  // ── Running Phase ─────────────────────────────────────────────────────────────
  if (!currentQuestion || !session) return null;
  const progress = ((currentIdx + 1) / totalQ) * 100;
  const q = currentQuestion;

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '2rem', color: 'var(--text-primary)' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Question {currentIdx + 1} of {totalQ}</span>
          <span className={`badge badge-${q.difficulty === 'foundation' ? 'emerald' : q.difficulty === 'practitioner' ? 'amber' : 'rose'}`}>
            {q.difficulty}
          </span>
          <span className="badge badge-violet">{q.type === 'drag-drop' ? 'Drag & Drop' : q.type === 'scenario' ? 'Scenario' : 'MCQ'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Clock size={16} color={timeLeft < 300 ? 'var(--rose)' : 'var(--text-muted)'} />
          <span className={timerClass}>{formatTime(timeLeft)}</span>
          <button className="btn btn-ghost btn-sm" onClick={() => setPhase('review')}>
            <Flag size={14} /> Review
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-track" style={{ marginBottom: '2rem', height: 4 }}>
        <div className="progress-fill" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${color}, ${color}bb)` }} />
      </div>

      {/* Question card */}
      <div className="question-card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {session.answers[q.id] ? (
              <CheckCircle size={18} color="var(--emerald)" />
            ) : (
              <AlertCircle size={18} color="var(--text-muted)" />
            )}
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{q.domain}</span>
          </div>
          <span style={{ fontSize: '0.8rem', color, fontWeight: 700 }}>{q.points} pt{q.points > 1 ? 's' : ''}</span>
        </div>

        {(q.type === 'mcq' || q.type === 'scenario') && (
          <MCQCard
            question={q as MCQQuestion | ScenarioQuestion}
            selectedId={session.answers[q.id]?.selectedOptionId}
            onSelect={(optId) => handleMCQAnswer(q.id, optId)}
            color={color}
          />
        )}

        {q.type === 'drag-drop' && (
          <DragDropCard
            question={q as DragDropQuestion}
            state={dragStates[q.id] || { assignments: {}, dragging: null }}
            onChange={(s) => handleDragDropChange(q.id, s)}
          />
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          className="btn btn-ghost"
          onClick={() => setCurrentIdx(p => Math.max(0, p - 1))}
          disabled={currentIdx === 0}
        >
          <ChevronLeft size={16} /> Previous
        </button>

        <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          {answeredCount}/{totalQ} answered
        </span>

        {currentIdx < totalQ - 1 ? (
          <button
            className="btn btn-secondary"
            onClick={() => setCurrentIdx(p => Math.min(totalQ - 1, p + 1))}
          >
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => setPhase('review')}
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
          >
            <Flag size={16} /> Finish
          </button>
        )}
      </div>
    </div>
  );
}
