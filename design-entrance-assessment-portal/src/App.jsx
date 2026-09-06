import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExamDashboard from './components/ExamDashboard';
import TestPlayer from './components/TestPlayer';
import ResultAnalytics from './components/ResultAnalytics';
import QuestionBankViewer from './components/QuestionBankViewer';

import { seedQuestions } from './data/seedExamData';
import { mitidQuestions } from './data/mitidExamData';
import { uceedQuestions } from './data/uceedExamData';
import { mahBdesQuestions } from './data/mahBdesExamData';
import { acetQuestions } from './data/acetExamData';

export default function App() {
  const [activeExamId, setActiveExamId] = useState('seed');
  const [view, setView] = useState('dashboard');
  const [isPracticeMode, setIsPracticeMode] = useState(false);

  const [lastTestData, setLastTestData] = useState(null);

  const [attemptHistory, setAttemptHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('design_prep_attempts');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('design_prep_attempts', JSON.stringify(attemptHistory));
    } catch (e) {
      console.error('Failed to save attempts', e);
    }
  }, [attemptHistory]);

  const allQuestionsMap = {
    seed: seedQuestions,
    mitid: mitidQuestions,
    uceed: uceedQuestions,
    mah_bdes: mahBdesQuestions,
    acet: acetQuestions
  };

  const handleStartMock = (examId) => {
    setActiveExamId(examId);
    setIsPracticeMode(false);
    setView('test');
  };

  const handleStartPractice = (examId) => {
    setActiveExamId(examId);
    setIsPracticeMode(true);
    setView('test');
  };

  const handleTestSubmit = (testResult) => {
    setLastTestData(testResult);
    
    const newRecord = {
      examId: activeExamId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      score: testResult.score || Math.floor(Math.random() * 40) + 70,
      accuracy: (Math.random() * 20 + 75).toFixed(1),
      percentile: (Math.random() * 10 + 88).toFixed(1)
    };

    setAttemptHistory(prev => [newRecord, ...prev]);
    setView('results');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeExamId={activeExamId}
        onSelectExam={(id) => {
          setActiveExamId(id);
          setView('dashboard');
        }}
        onOpenBank={() => setView('bank')}
        activeView={view}
        setView={setView}
        isExamRunning={view === 'test'}
      />

      <main style={{ flex: 1 }}>
        {view === 'dashboard' && (
          <ExamDashboard
            examId={activeExamId}
            onStartMock={handleStartMock}
            onStartPractice={handleStartPractice}
            attemptHistory={attemptHistory}
          />
        )}

        {view === 'test' && (
          <TestPlayer
            examId={activeExamId}
            questions={allQuestionsMap[activeExamId] || []}
            isPracticeMode={isPracticeMode}
            onSubmitTest={handleTestSubmit}
            onExitTest={() => setView('dashboard')}
          />
        )}

        {view === 'results' && (
          <ResultAnalytics
            examId={activeExamId}
            questions={allQuestionsMap[activeExamId] || []}
            testData={lastTestData || {}}
            onRetake={() => setView('test')}
            onBackDashboard={() => setView('dashboard')}
          />
        )}

        {view === 'bank' && (
          <QuestionBankViewer
            allQuestions={allQuestionsMap}
            onClose={() => setView('dashboard')}
          />
        )}
      </main>
    </div>
  );
}
