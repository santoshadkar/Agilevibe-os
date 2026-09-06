import React from 'react';
import { Play, Clock, CheckCircle2, AlertCircle, FileText, Layers, Award, Sparkles, BookOpen, Download } from 'lucide-react';
import { EXAMS_METADATA } from '../data/mockExamsMetadata';
import { downloadQuestionBankPDF } from '../utils/pdfGenerator';

import { seedQuestions } from '../data/seedExamData';
import { mitidQuestions } from '../data/mitidExamData';
import { uceedQuestions } from '../data/uceedExamData';
import { mahBdesQuestions } from '../data/mahBdesExamData';
import { acetQuestions } from '../data/acetExamData';

export default function ExamDashboard({ examId, onStartMock, onStartPractice, attemptHistory = [] }) {
  const meta = EXAMS_METADATA[examId];

  const allQuestionsMap = {
    seed: seedQuestions,
    mitid: mitidQuestions,
    uceed: uceedQuestions,
    mah_bdes: mahBdesQuestions,
    acet: acetQuestions
  };

  const currentQuestions = allQuestionsMap[examId] || [];

  const handleDownloadPDF = () => {
    downloadQuestionBankPDF(currentQuestions, meta.title, `${meta.id}_question_bank`);
  };

  const examAttempts = attemptHistory.filter(h => h.examId === examId);

  return (
    <div style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Hero Banner Header */}
      <div className="glass-panel" style={{
        padding: '36px',
        background: `linear-gradient(135deg, rgba(23, 32, 54, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)`,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '280px',
          height: '280px',
          background: meta.gradient,
          opacity: 0.15,
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className={`badge ${meta.badgeClass}`}>{meta.badgeText}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Updated 2026 Official Pattern
            </span>
          </div>

          <h1 style={{ fontSize: '2.4rem', color: '#ffffff', lineHeight: '1.2' }}>
            {meta.title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            {meta.description}
          </p>

          {/* Key Metrics Pill Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '10px' }}>
              <Clock size={18} color="#38bdf8" />
              <span style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: '600' }}>{meta.durationMinutes} Minutes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '10px' }}>
              <FileText size={18} color="#c084fc" />
              <span style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: '600' }}>{meta.totalQuestions} Questions</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '10px' }}>
              <Award size={18} color="#34d399" />
              <span style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: '600' }}>Max Marks: {meta.maxMarks}</span>
            </div>
          </div>

          {/* Action Launch & PDF Download Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
            <button
              onClick={() => onStartMock(examId)}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '1.05rem', background: meta.gradient }}
            >
              <Play size={20} fill="#ffffff" />
              <span>Start Full-Length Mock Test</span>
            </button>
            <button
              onClick={() => onStartPractice(examId)}
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '1rem' }}
            >
              <BookOpen size={20} color="#38bdf8" />
              <span>Practice Mode (Untimed & Hints)</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '1rem', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)', background: 'rgba(16, 185, 129, 0.1)' }}
            >
              <Download size={20} color="#34d399" />
              <span>Download PDF Study Booklet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Section Breakdown & Topics */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Left: Detailed Exam Section Architecture */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={22} color={meta.color} />
            Exam Structure & Sectional Breakdown
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {meta.sections.map((sec, idx) => (
              <div key={sec.id} className="glass-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.06)',
                    color: meta.color,
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem'
                  }}>
                    {idx + 1}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#f8fafc' }}>{sec.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Target allocation & format
                    </span>
                  </div>
                </div>

                <div className="badge badge-purple" style={{ fontSize: '0.82rem' }}>
                  {sec.questionsCount} Questions
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Marking & Rules:</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Correct Answer: <strong>+{meta.markingScheme.correct}</strong> | Negative Marking: <strong>{meta.markingScheme.penalty}</strong>
            </p>
          </div>
        </div>

        {/* Right Sidebar: Past Attempt Analytics & Topic Coverage */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Past History Card */}
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="#fbbf24" />
              Your Recent Mock Attempts
            </h3>

            {examAttempts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '24px 12px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                No test attempts recorded yet. Click "Start Full-Length Mock Test" to generate your baseline scorecard!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {examAttempts.slice(0, 4).map((att, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#f8fafc' }}>
                        Score: {att.score} / {meta.maxMarks}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {att.date} • {att.accuracy}% Accuracy
                      </div>
                    </div>
                    <span className="badge badge-emerald">{att.percentile}%ile</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Topics Covered Card */}
          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="#06b6d4" />
              Key Syllabus Topics Tested
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {meta.topics.map((t, idx) => (
                <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.78rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
