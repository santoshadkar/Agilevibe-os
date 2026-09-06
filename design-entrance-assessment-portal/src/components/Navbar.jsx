import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, BarChart3, Award, Palette, Layers, Download, FileText } from 'lucide-react';
import { EXAMS_METADATA } from '../data/mockExamsMetadata';
import { downloadQuestionBankPDF } from '../utils/pdfGenerator';

import { seedQuestions } from '../data/seedExamData';
import { mitidQuestions } from '../data/mitidExamData';
import { uceedQuestions } from '../data/uceedExamData';
import { mahBdesQuestions } from '../data/mahBdesExamData';
import { acetQuestions } from '../data/acetExamData';

export default function Navbar({ activeExamId, onSelectExam, onOpenBank, activeView, setView, isExamRunning }) {
  const [showPDFDropdown, setShowPDFDropdown] = useState(false);

  const allQuestionsMap = {
    seed: seedQuestions,
    mitid: mitidQuestions,
    uceed: uceedQuestions,
    mah_bdes: mahBdesQuestions,
    acet: acetQuestions
  };

  const handleDownloadExamPDF = (examId) => {
    const meta = EXAMS_METADATA[examId];
    const qList = allQuestionsMap[examId] || [];
    downloadQuestionBankPDF(qList, meta.title, `${meta.id}_study_booklet`);
    setShowPDFDropdown(false);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 15, 25, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '12px 24px'
    }}>
      <div style={{
        maxWidth: '1380px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => !isExamRunning && setView('dashboard')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
          }}>
            <Palette size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              DesignPrep <span style={{ color: '#06b6d4' }}>PRO</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Design Entrance Assessment Portal
            </div>
          </div>
        </div>

        {/* Exam Module Switcher Tabs (SEED, MITID DAT, UCEED, MAH-CET, ACET) */}
        {!isExamRunning && (
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '4px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflowX: 'auto'
          }}>
            {Object.values(EXAMS_METADATA).map(exam => {
              const isActive = activeExamId === exam.id && activeView === 'dashboard';
              return (
                <button
                  key={exam.id}
                  onClick={() => {
                    onSelectExam(exam.id);
                    setView('dashboard');
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: isActive ? exam.gradient : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.3)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Layers size={15} />
                  <span>{exam.shortTitle}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Menu Utilities & PDF Dropdown */}
        {!isExamRunning && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
            <button
              onClick={() => setShowPDFDropdown(!showPDFDropdown)}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <Download size={16} color="#34d399" />
              <span>PDF Booklets</span>
            </button>

            {/* PDF Quick Download Dropdown */}
            {showPDFDropdown && (
              <div style={{
                position: 'absolute',
                top: '46px',
                right: '0',
                background: '#131b2e',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                zIndex: 200,
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', padding: '6px 10px', fontWeight: '700' }}>
                  Download PDF Study Guide:
                </div>
                {Object.values(EXAMS_METADATA).map(exam => (
                  <button
                    key={exam.id}
                    onClick={() => handleDownloadExamPDF(exam.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: 'transparent',
                      color: '#fff',
                      border: 'none',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.08)'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                  >
                    <FileText size={14} color={exam.color} />
                    <span>{exam.shortTitle} PDF</span>
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={onOpenBank}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <BookOpen size={16} color="#38bdf8" />
              <span>530+ Q Bank</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
