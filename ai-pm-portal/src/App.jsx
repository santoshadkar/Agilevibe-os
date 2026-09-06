import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import ModuleCard from './components/ModuleCard';
import ModuleViewer from './components/ModuleViewer';
import AssignmentViewer from './components/AssignmentViewer';
import QuizModal from './components/QuizModal';
import CertificateModal from './components/CertificateModal';

import PrdGenerator from './tools/PrdGenerator';
import CostRoiCalculator from './tools/CostRoiCalculator';
import ModelDecisionMatrix from './tools/ModelDecisionMatrix';
import InterviewSimulator from './tools/InterviewSimulator';
import EvalsSimulator from './tools/EvalsSimulator';

import { modulesData } from './data/modulesData';
import { assignmentsData } from './data/assignmentsData';
import { interviewQuestionsData } from './data/interviewQuestionsData';
import { Award, BookOpen, CheckSquare, Search, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' | 'tools' | 'assignments' | 'interviews' | 'assessments'
  const [activeTool, setActiveTool] = useState('prd-builder');
  const [selectedModule, setSelectedModule] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [completedModules, setCompletedModules] = useState(() => {
    const saved = localStorage.getItem('ai_pm_completed_modules');
    return saved ? JSON.parse(saved) : ['mod-1'];
  });

  const [activeQuizModuleId, setActiveQuizModuleId] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    localStorage.setItem('ai_pm_completed_modules', JSON.stringify(completedModules));
  }, [completedModules]);

  const toggleModuleComplete = (id) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handlePassModule = (id) => {
    if (!completedModules.includes(id)) {
      setCompletedModules(prev => [...prev, id]);
    }
  };

  // Filter modules based on search query
  const filteredModules = modulesData.filter(m => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q) ||
      m.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="relative min-h-screen bg-[#090d16] text-gray-100 flex flex-col font-sans">
      {/* Background Orbs */}
      <div className="ambient-bg">
        <div className="orb-1" />
        <div className="orb-2" />
      </div>

      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedModules={completedModules}
        totalModules={modulesData.length}
        onOpenCertificate={() => setShowCertificate(true)}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        {/* Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedModule(null);
          }}
          activeTool={activeTool}
          setActiveTool={setActiveTool}
        />

        {/* Center Main Content Workspace */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
          {/* CURRICULUM TAB */}
          {activeTab === 'curriculum' && (
            <div>
              {selectedModule ? (
                <ModuleViewer
                  module={selectedModule}
                  isCompleted={completedModules.includes(selectedModule.id)}
                  onBack={() => setSelectedModule(null)}
                  onStartQuiz={(id) => setActiveQuizModuleId(id)}
                  onToggleComplete={toggleModuleComplete}
                />
              ) : (
                <div>
                  <HeroSection
                    onExploreCurriculum={() => {
                      setSelectedModule(modulesData[0]);
                    }}
                    onExploreTools={() => {
                      setActiveTab('tools');
                      setActiveTool('prd-builder');
                    }}
                  />

                  {/* Section Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-indigo-400" />
                        AI PM Learning Modules ({filteredModules.length})
                      </h2>
                      <p className="text-xs text-gray-400">Step-by-step masterclass syllabus designed for POs & PMs</p>
                    </div>
                  </div>

                  {/* Module Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredModules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isCompleted={completedModules.includes(module.id)}
                        onSelectModule={(m) => setSelectedModule(m)}
                        onStartQuiz={(id) => setActiveQuizModuleId(id)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* INTERACTIVE TOOLS TAB */}
          {activeTab === 'tools' && (
            <div>
              {activeTool === 'prd-builder' && <PrdGenerator />}
              {activeTool === 'cost-calculator' && <CostRoiCalculator />}
              {activeTool === 'model-matrix' && <ModelDecisionMatrix />}
              {activeTool === 'interview-sim' && <InterviewSimulator />}
              {activeTool === 'evals-sim' && <EvalsSimulator />}
            </div>
          )}

          {/* DEEP SCENARIO ASSIGNMENTS TAB */}
          {activeTab === 'assignments' && (
            <AssignmentViewer assignments={assignmentsData} />
          )}

          {/* INTERVIEW PRACTICE BANK TAB */}
          {activeTab === 'interviews' && (
            <InterviewSimulator />
          )}

          {/* ASSESSMENTS & CERTIFICATION TAB */}
          {activeTab === 'assessments' && (
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge-neon">ASSESSMENT ENGINE</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-cyan-400" />
                  Module Quizzes & Certification Readiness
                </h2>
                <p className="text-xs text-gray-300">
                  Pass module knowledge checks to earn your Certified AI Product Manager credential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modulesData.map((m) => {
                  const isComp = completedModules.includes(m.id);
                  return (
                    <div key={m.id} className="glass-panel p-5 rounded-xl flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-mono text-indigo-400 font-bold">MODULE {m.number}</div>
                        <h4 className="font-bold text-sm text-white mb-1">{m.title}</h4>
                        <div className="text-xs text-gray-400">
                          Status: {isComp ? <span className="text-emerald-400 font-semibold">Passed & Verified</span> : 'Pending Quiz'}
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveQuizModuleId(m.id)}
                        className="btn-primary text-xs py-2 px-3 shrink-0"
                      >
                        <Award className="w-4 h-4 text-yellow-300" />
                        <span>{isComp ? 'Retake Quiz' : 'Start Quiz'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* QUIZ MODAL */}
      {activeQuizModuleId && (
        <QuizModal
          moduleId={activeQuizModuleId}
          onClose={() => setActiveQuizModuleId(null)}
          onPassModule={handlePassModule}
        />
      )}

      {/* CERTIFICATE MODAL */}
      {showCertificate && (
        <CertificateModal
          completedCount={completedModules.length}
          totalModules={modulesData.length}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
}
