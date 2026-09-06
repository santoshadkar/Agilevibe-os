import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import OverviewSection from './components/OverviewSection';
import AssessmentTool from './components/AssessmentTool';
import ReadinessRoadmap from './components/ReadinessRoadmap';
import SoaExplorer from './components/SoaExplorer';
import DocumentTracker from './components/DocumentTracker';
import ExecutiveReport from './components/ExecutiveReport';
import ChatbotWidget from './components/ChatbotWidget';
import { CLAUSES_DATA, MANDATORY_DOCUMENTS, READINESS_STEPS, ANNEX_A_CATEGORIES } from './data/iso27001Data';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const STORAGE_KEYS = {
  THEME: 'iso27001_theme',
  ASSESSMENT: 'iso27001_assessment_v1',
  ROADMAP: 'iso27001_roadmap_v1',
  SOA: 'iso27001_soa_v1',
  DOCS: 'iso27001_docs_v1'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.THEME) || 'dark');
  const [toast, setToast] = useState(null);

  // Persistent States
  const [assessmentState, setAssessmentState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ASSESSMENT);
    return saved ? JSON.parse(saved) : {};
  });

  const [roadmapState, setRoadmapState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ROADMAP);
    return saved ? JSON.parse(saved) : {};
  });

  const [soaState, setSoaState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SOA);
    return saved ? JSON.parse(saved) : {};
  });

  const [docState, setDocState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DOCS);
    return saved ? JSON.parse(saved) : {};
  });

  // Sync theme attribute to <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  // Sync states to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ASSESSMENT, JSON.stringify(assessmentState));
  }, [assessmentState]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ROADMAP, JSON.stringify(roadmapState));
  }, [roadmapState]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SOA, JSON.stringify(soaState));
  }, [soaState]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DOCS, JSON.stringify(docState));
  }, [docState]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Assessment Handlers
  const updateQuestionScore = (questionId, level) => {
    setAssessmentState(prev => ({
      ...prev,
      [questionId]: level
    }));
  };

  const loadSampleData = () => {
    // Populate realistic baseline assessment
    const sampleAssessment = {};
    CLAUSES_DATA.flatMap(c => c.questions).forEach((q, idx) => {
      sampleAssessment[q.id] = (idx % 3 === 0) ? 4 : (idx % 2 === 0) ? 3 : 2;
    });
    setAssessmentState(sampleAssessment);

    // Populate roadmap
    const sampleRoadmap = { 1: true, 2: true, 3: true, 4: true, 5: true };
    setRoadmapState(sampleRoadmap);

    // Populate docs
    const sampleDocs = {
      'doc-1': 'approved',
      'doc-2': 'approved',
      'doc-3': 'approved',
      'doc-4': 'audited',
      'doc-5': 'draft',
      'doc-12': 'approved',
      'doc-13': 'approved'
    };
    setDocState(sampleDocs);
  };

  const resetAssessment = () => {
    setAssessmentState({});
    setRoadmapState({});
    setSoaState({});
    setDocState({});
  };

  // Roadmap Handler
  const toggleStepCompletion = (stepNum) => {
    setRoadmapState(prev => ({
      ...prev,
      [stepNum]: !prev[stepNum]
    }));
  };

  // SoA Handler
  const updateSoaControl = (controlId, status, justification) => {
    setSoaState(prev => ({
      ...prev,
      [controlId]: { status, justification }
    }));
  };

  // Document Handler
  const updateDocStatus = (docId, status) => {
    setDocState(prev => ({
      ...prev,
      [docId]: status
    }));
  };

  // Calculate overall score for navbar badge
  const allQuestions = CLAUSES_DATA.flatMap(c => c.questions);
  let totalPts = 0;
  allQuestions.forEach(q => {
    totalPts += ((assessmentState[q.id] || 0) / 4) * 100;
  });
  const assessmentPct = allQuestions.length > 0 ? Math.round(totalPts / allQuestions.length) : 0;
  const roadmapPct = Math.round((Object.values(roadmapState).filter(Boolean).length / READINESS_STEPS.length) * 100);
  const docPct = Math.round((Object.values(docState).filter(st => st === 'approved' || st === 'audited').length / MANDATORY_DOCUMENTS.length) * 100);
  const overallReadinessScore = Math.round((assessmentPct * 0.4) + (roadmapPct * 0.3) + (docPct * 0.3));

  return (
    <div className="app-container">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        readinessScore={overallReadinessScore}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">
        {activeTab === 'overview' && (
          <OverviewSection onStartAssessment={() => setActiveTab('assessment')} />
        )}

        {activeTab === 'assessment' && (
          <AssessmentTool
            assessmentState={assessmentState}
            updateQuestionScore={updateQuestionScore}
            loadSampleData={loadSampleData}
            resetAssessment={resetAssessment}
            showToast={showToast}
          />
        )}

        {activeTab === 'roadmap' && (
          <ReadinessRoadmap
            roadmapState={roadmapState}
            toggleStepCompletion={toggleStepCompletion}
            showToast={showToast}
          />
        )}

        {activeTab === 'soa' && (
          <SoaExplorer
            soaState={soaState}
            updateSoaControl={updateSoaControl}
            showToast={showToast}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentTracker
            docState={docState}
            updateDocStatus={updateDocStatus}
            showToast={showToast}
          />
        )}

        {activeTab === 'report' && (
          <ExecutiveReport
            assessmentState={assessmentState}
            roadmapState={roadmapState}
            docState={docState}
            soaState={soaState}
            showToast={showToast}
          />
        )}
      </main>

      <footer className="footer">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
          <ShieldCheck size={18} color="var(--accent-emerald)" />
          <strong style={{ color: 'var(--text-primary)' }}>ISO/IEC 27001:2022 Certification Readiness Hub</strong>
        </div>
        <p>Empowering Organizations to Master Information Security Management Systems (ISMS)</p>
      </footer>

      <ChatbotWidget />

      {toast && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={18} color="var(--accent-emerald)" />
            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
}
