import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { jsPDF } from 'jspdf';
import { Award, CheckCircle2, XCircle, Clock, RotateCcw, Download, BookOpen, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { EXAMS_METADATA } from '../data/mockExamsMetadata';

import MCQQuestion from './questionTypes/MCQQuestion';
import MSQQuestion from './questionTypes/MSQQuestion';
import NATQuestion from './questionTypes/NATQuestion';
import MatchColumnQuestion from './questionTypes/MatchColumnQuestion';
import FillBlankQuestion from './questionTypes/FillBlankQuestion';
import ComprehensionQuestion from './questionTypes/ComprehensionQuestion';
import SubjectiveQuestion from './questionTypes/SubjectiveQuestion';
import DrawingCanvas from './questionTypes/DrawingCanvas';

export default function ResultAnalytics({ examId, questions = [], testData = {}, onRetake, onBackDashboard }) {
  const meta = EXAMS_METADATA[examId];
  const responses = testData.responses || {};
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  let totalScore = 0;

  const questionResults = questions.map((q) => {
    const userAns = responses[q.id];
    let isCorrect = false;
    let isAnswered = userAns !== undefined && userAns !== null && userAns !== '';

    if (!isAnswered) {
      unansweredCount++;
    } else if (q.type === 'mcq' || q.type === 'image_based' || q.type === 'comprehension') {
      if (userAns === q.answer) {
        isCorrect = true;
        correctCount++;
        totalScore += meta.markingScheme.correct === 'number' ? meta.markingScheme.correct : 1;
      } else {
        incorrectCount++;
        if (typeof meta.markingScheme.penalty === 'number') {
          totalScore += meta.markingScheme.penalty;
        }
      }
    } else if (q.type === 'msq') {
      const correctAnswers = q.correctAnswers || [];
      const userSelected = Array.isArray(userAns) ? userAns : [];
      const matchesAll = correctAnswers.length === userSelected.length &&
        correctAnswers.every(val => userSelected.includes(val));
      
      if (matchesAll) {
        isCorrect = true;
        correctCount++;
        totalScore += 4;
      } else {
        incorrectCount++;
        totalScore -= 1;
      }
    } else if (q.type === 'nat') {
      if (parseFloat(userAns) === parseFloat(q.correctNumericalValue) || String(userAns).trim() === String(q.correctNumericalValue).trim()) {
        isCorrect = true;
        correctCount++;
        totalScore += 4;
      } else {
        incorrectCount++;
      }
    } else if (q.type === 'fill_blank') {
      const match = q.acceptableAnswers?.some(ans => ans.toLowerCase().trim() === String(userAns).toLowerCase().trim());
      if (match) {
        isCorrect = true;
        correctCount++;
        totalScore += 1;
      } else {
        incorrectCount++;
      }
    } else if (q.type === 'match_column') {
      let correctPairsCount = 0;
      Object.keys(q.correctPairs || {}).forEach(k => {
        if (userAns && userAns[k] === q.correctPairs[k]) correctPairsCount++;
      });
      if (correctPairsCount === Object.keys(q.correctPairs || {}).length) {
        isCorrect = true;
        correctCount++;
        totalScore += 1;
      } else {
        incorrectCount++;
      }
    } else {
      isCorrect = true;
      correctCount++;
      totalScore += 5;
    }

    return {
      ...q,
      userAns,
      isCorrect,
      isAnswered
    };
  });

  const accuracy = ((correctCount / (correctCount + incorrectCount || 1)) * 100).toFixed(1);
  const percentage = Math.max(0, ((totalScore / (meta.maxMarks || 100)) * 100)).toFixed(1);
  const estimatedPercentile = Math.min(99.8, Math.max(50, Number(percentage) * 0.95 + 10)).toFixed(1);

  const exportPDFScorecard = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(`Official Scorecard: ${meta.title}`, 14, 22);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date of Assessment: ${new Date().toLocaleDateString()}`, 14, 32);
    doc.text(`Total Questions: ${questions.length}`, 14, 40);
    doc.text(`Total Score Secured: ${totalScore} / ${meta.maxMarks}`, 14, 48);
    doc.text(`Accuracy Rate: ${accuracy}%`, 14, 56);
    doc.text(`Estimated Percentile: ${estimatedPercentile} %ile`, 14, 64);

    doc.save(`${meta.id}_scorecard_${Date.now()}.pdf`);
  };

  const filteredSolutions = questionResults.filter(q => {
    if (selectedFilter === 'correct') return q.isCorrect && q.isAnswered;
    if (selectedFilter === 'incorrect') return !q.isCorrect && q.isAnswered;
    if (selectedFilter === 'unanswered') return !q.isAnswered;
    return true;
  });

  return (
    <div style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Top Banner Result Card */}
      <div className="glass-panel" style={{
        padding: '36px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
          }}>
            <Award size={36} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
              Assessment Evaluation Complete
            </div>
            <h1 style={{ fontSize: '2.2rem', color: '#ffffff' }}>
              {meta.title} Performance
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Overall Accuracy: <strong>{accuracy}%</strong> • Estimated Percentile: <strong>{estimatedPercentile} %ile</strong>
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={onRetake} className="btn-secondary">
            <RotateCcw size={16} /> Retake Test
          </button>
          <button onClick={exportPDFScorecard} className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }}>
            <Download size={16} /> PDF Scorecard
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            background: activeTab === 'overview' ? '#6366f1' : 'transparent',
            color: activeTab === 'overview' ? '#fff' : 'var(--text-muted)',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Scorecard & Metrics Overview
        </button>
        <button
          onClick={() => setActiveTab('solutions')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            background: activeTab === 'solutions' ? '#6366f1' : 'transparent',
            color: activeTab === 'solutions' ? '#fff' : 'var(--text-muted)',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Detailed Solutions & Answer Key ({questions.length} Qs)
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Score</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#38bdf8', marginTop: '6px' }}>
              {totalScore} <span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>/ {meta.maxMarks}</span>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Correct Answers</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#34d399', marginTop: '6px' }}>
              {correctCount}
            </div>
          </div>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Incorrect Answers</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fb7185', marginTop: '6px' }}>
              {incorrectCount}
            </div>
          </div>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Unanswered</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#c084fc', marginTop: '6px' }}>
              {unansweredCount}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Detailed Solutions */}
      {activeTab === 'solutions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['all', 'correct', 'incorrect', 'unanswered'].map(f => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  textTransform: 'capitalize',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  background: selectedFilter === f ? '#38bdf8' : 'rgba(255,255,255,0.05)',
                  color: selectedFilter === f ? '#0f172a' : 'var(--text-muted)'
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {filteredSolutions.map((q) => (
              <div key={q.id} className="glass-panel" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="badge badge-purple">
                    Q{q.number} • {q.topic || 'General'}
                  </span>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: q.isCorrect ? '#34d399' : (q.isAnswered ? '#fb7185' : '#c084fc')
                  }}>
                    {q.isCorrect ? '✓ Correct' : (q.isAnswered ? '× Incorrect' : '- Unanswered')}
                  </span>
                </div>

                {q.type === 'mcq' && (
                  <MCQQuestion
                    question={q}
                    userResponse={q.userAns}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'msq' && (
                  <MSQQuestion
                    question={q}
                    userResponse={q.userAns || []}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'nat' && (
                  <NATQuestion
                    question={q}
                    userResponse={q.userAns || ''}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'match_column' && (
                  <MatchColumnQuestion
                    question={q}
                    userResponse={q.userAns || {}}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'fill_blank' && (
                  <FillBlankQuestion
                    question={q}
                    userResponse={q.userAns || ''}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'comprehension' && (
                  <ComprehensionQuestion
                    question={q}
                    userResponse={q.userAns}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'subjective' && (
                  <SubjectiveQuestion
                    question={q}
                    userResponse={q.userAns || ''}
                    isReviewMode={true}
                  />
                )}
                {q.type === 'sketching' && (
                  <DrawingCanvas
                    question={q}
                    userResponse={q.userAns || {}}
                    isReviewMode={true}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
