import React, { useState, useEffect } from 'react';
import { 
  Clock, AlertCircle, Bookmark, CheckCircle2, ArrowLeft, ArrowRight, 
  RotateCcw, Send, Layers, Filter, Eye, ChevronRight 
} from 'lucide-react';

import MCQQuestion from './questionTypes/MCQQuestion';
import MSQQuestion from './questionTypes/MSQQuestion';
import NATQuestion from './questionTypes/NATQuestion';
import MatchColumnQuestion from './questionTypes/MatchColumnQuestion';
import FillBlankQuestion from './questionTypes/FillBlankQuestion';
import ComprehensionQuestion from './questionTypes/ComprehensionQuestion';
import SubjectiveQuestion from './questionTypes/SubjectiveQuestion';
import DrawingCanvas from './questionTypes/DrawingCanvas';
import { EXAMS_METADATA } from '../data/mockExamsMetadata';

export default function TestPlayer({ examId, questions = [], isPracticeMode, onSubmitTest, onExitTest }) {
  const meta = EXAMS_METADATA[examId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState(meta.sections[0]?.id || '');
  const [timeLeft, setTimeLeft] = useState(meta.durationMinutes * 60);
  
  // Responses dictionary: { [qId]: answerValue }
  const [responses, setResponses] = useState({});
  // Status dictionary: { [qId]: 'visited' | 'answered' | 'review' | 'answered_review' }
  const [questionStatus, setQuestionStatus] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const currentQuestion = questions[currentIndex] || questions[0];

  // Sync active section tab when current question changes
  useEffect(() => {
    if (currentQuestion && currentQuestion.section) {
      setActiveSectionId(currentQuestion.section);
    }
  }, [currentIndex]);

  // Mark question visited on focus
  useEffect(() => {
    if (currentQuestion) {
      setQuestionStatus(prev => {
        const qId = currentQuestion.id;
        if (!prev[qId]) {
          return { ...prev, [qId]: 'visited' };
        }
        return prev;
      });
    }
  }, [currentIndex]);

  // Countdown timer effect
  useEffect(() => {
    if (isPracticeMode) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPracticeMode]);

  const handleAutoSubmit = () => {
    onSubmitTest({ responses, timeTaken: meta.durationMinutes * 60 - timeLeft });
  };

  const handleResponseUpdate = (val) => {
    const qId = currentQuestion.id;
    const updatedResponses = { ...responses, [qId]: val };
    setResponses(updatedResponses);

    setQuestionStatus(prev => {
      const isRev = prev[qId] === 'review' || prev[qId] === 'answered_review';
      return {
        ...prev,
        [qId]: isRev ? 'answered_review' : 'answered'
      };
    });
  };

  const handleClearResponse = () => {
    const qId = currentQuestion.id;
    const newResponses = { ...responses };
    delete newResponses[qId];
    setResponses(newResponses);

    setQuestionStatus(prev => ({
      ...prev,
      [qId]: 'visited'
    }));
  };

  const handleToggleMarkReview = () => {
    const qId = currentQuestion.id;
    setQuestionStatus(prev => {
      const curr = prev[qId];
      const hasAnswer = responses[qId] !== undefined && responses[qId] !== null && responses[qId] !== '';
      
      let nextStatus = 'review';
      if (curr === 'review') nextStatus = hasAnswer ? 'answered' : 'visited';
      else if (curr === 'answered_review') nextStatus = 'answered';
      else nextStatus = hasAnswer ? 'answered_review' : 'review';

      return { ...prev, [qId]: nextStatus };
    });
  };

  const navigateTo = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(responses).length;
  const reviewCount = Object.values(questionStatus).filter(s => s === 'review' || s === 'answered_review').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 70px)', background: 'var(--bg-primary)' }}>
      {/* Top Test Navigation & Section Bar */}
      <div style={{
        background: '#131b2e',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Exam Title & Exit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onExitTest} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.82rem' }}>
            <ArrowLeft size={16} /> Exit Exam
          </button>
          <div>
            <h2 style={{ fontSize: '1.1rem', color: '#fff' }}>{meta.title}</h2>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Section Switcher Tabs */}
        {meta.sections.length > 1 && (
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
            {meta.sections.map(sec => {
              const isActiveSec = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSectionId(sec.id);
                    const firstSecIndex = questions.findIndex(q => q.section === sec.id);
                    if (firstSecIndex !== -1) setCurrentIndex(firstSecIndex);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    background: isActiveSec ? '#6366f1' : 'rgba(255,255,255,0.05)',
                    color: isActiveSec ? '#fff' : 'var(--text-muted)'
                  }}
                >
                  {sec.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Countdown Timer & Submit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {!isPracticeMode && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: timeLeft < 300 ? 'rgba(244,63,94,0.2)' : 'rgba(255,255,255,0.06)',
              border: `1px solid ${timeLeft < 300 ? '#f43f5e' : 'rgba(255,255,255,0.1)'}`,
              color: timeLeft < 300 ? '#fb7185' : '#38bdf8',
              fontWeight: '700',
              fontFamily: 'var(--font-mono)'
            }}>
              <Clock size={18} />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          )}

          <button
            onClick={() => setShowSubmitModal(true)}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.88rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
          >
            <Send size={16} /> Submit Test
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px', padding: '24px', maxWidth: '1440px', margin: '0 auto', width: '100%', flex: 1 }}>
        {/* Left: Active Question Viewer */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
            <span className="badge badge-purple">
              Topic: {currentQuestion.topic || 'General Aptitude'}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Type: {currentQuestion.type?.toUpperCase()}
            </span>
          </div>

          <div style={{ flex: 1 }}>
            {currentQuestion.type === 'mcq' && (
              <MCQQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id]}
                onSelectOption={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'msq' && (
              <MSQQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id] || []}
                onSelectOptions={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'nat' && (
              <NATQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id] || ''}
                onValueChange={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'match_column' && (
              <MatchColumnQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id] || {}}
                onMatchChange={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'fill_blank' && (
              <FillBlankQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id] || ''}
                onTextChange={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'comprehension' && (
              <ComprehensionQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id]}
                onSelectOption={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'subjective' && (
              <SubjectiveQuestion
                question={currentQuestion}
                userResponse={responses[currentQuestion.id] || ''}
                onTextChange={handleResponseUpdate}
              />
            )}
            {currentQuestion.type === 'sketching' && (
              <DrawingCanvas
                question={currentQuestion}
                userResponse={responses[currentQuestion.id] || {}}
                onSaveCanvas={handleResponseUpdate}
              />
            )}
          </div>

          {/* Bottom Controls Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '18px'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleToggleMarkReview}
                className="btn-secondary"
                style={{
                  fontSize: '0.85rem',
                  padding: '8px 14px',
                  background: questionStatus[currentQuestion.id]?.includes('review') ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.05)'
                }}
              >
                <Bookmark size={16} color="#c084fc" />
                <span>Mark for Review</span>
              </button>
              <button
                onClick={handleClearResponse}
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '8px 14px' }}
              >
                <RotateCcw size={16} color="#fb7185" />
                <span>Clear Response</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                disabled={currentIndex === 0}
                onClick={() => navigateTo(currentIndex - 1)}
                className="btn-secondary"
                style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
              >
                <ArrowLeft size={16} /> Previous
              </button>
              <button
                onClick={() => navigateTo(currentIndex + 1)}
                className="btn-primary"
              >
                Save & Next <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Palette */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1rem', color: '#fff', display: 'flex', alignItems: 'center', justifyLink: 'space-between' }}>
            <span>Question Palette</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{questions.length} Qs</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.78rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="q-btn q-answered" style={{ width: '18px', height: '18px', fontSize: '10px' }}>✓</span>
              <span>Answered</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="q-btn q-not-answered" style={{ width: '18px', height: '18px', fontSize: '10px' }}>×</span>
              <span>Not Answered</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="q-btn q-review" style={{ width: '18px', height: '18px', fontSize: '10px' }}>★</span>
              <span>Marked Review</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="q-btn q-not-visited" style={{ width: '18px', height: '18px', fontSize: '10px' }}>-</span>
              <span>Not Visited</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            maxHeight: '380px',
            overflowY: 'auto',
            paddingRight: '4px'
          }}>
            {questions.map((q, idx) => {
              const qId = q.id;
              const status = questionStatus[qId] || 'not-visited';
              const isCurrent = idx === currentIndex;
              const hasAns = responses[qId] !== undefined && responses[qId] !== null && responses[qId] !== '';

              let styleClass = 'q-not-visited';
              if (status === 'answered') styleClass = 'q-answered';
              else if (status === 'answered_review') styleClass = 'q-answered-review';
              else if (status === 'review') styleClass = 'q-review';
              else if (status === 'visited' && !hasAns) styleClass = 'q-not-answered';

              return (
                <button
                  key={qId}
                  onClick={() => navigateTo(idx)}
                  className={`q-btn ${styleClass} ${isCurrent ? 'q-current' : ''}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '10px',
            padding: '12px',
            fontSize: '0.82rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#34d399' }}>
              <span>Answered:</span>
              <strong>{answeredCount}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#c084fc' }}>
              <span>Marked for Review:</span>
              <strong>{reviewCount}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>Remaining:</span>
              <strong>{questions.length - answeredCount}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Test Confirmation Modal */}
      {showSubmitModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          padding: '20px'
        }}>
          <div className="glass-panel" style={{ padding: '32px', maxWidth: '480px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Are you ready to submit your exam?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Once submitted, your test will be evaluated immediately with a detailed scorecard breakdown.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>Total Questions:</span>
                <strong>{questions.length}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#34d399' }}>
                <span>Answered Questions:</span>
                <strong>{answeredCount}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#fb7185' }}>
                <span>Unanswered Questions:</span>
                <strong>{questions.length - answeredCount}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowSubmitModal(false)} className="btn-secondary">
                Continue Test
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  onSubmitTest({ responses, timeTaken: meta.durationMinutes * 60 - timeLeft });
                }}
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
