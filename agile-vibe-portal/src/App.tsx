import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { SMDashboard } from './components/scrum-master/SMDashboard';
import { PODashboard } from './components/product-owner/PODashboard';
import { PMDashboard } from './components/product-manager/PMDashboard';
import { SelfAssessment } from './components/assessment/SelfAssessment';
import { ScenarioArena } from './components/scenario-arena/ScenarioArena';
import { AIToolsStudio } from './components/ai-studio/AIToolsStudio';
import { AgileDictionary } from './components/dictionary/AgileDictionary';
import { LiveAIAssistant } from './components/assistant/LiveAIAssistant';
import { JiraHub } from './components/jira/JiraHub';

const MainPortalView: React.FC = () => {
  const { activeTab, activeRole } = useApp();

  const renderRoleDashboard = () => {
    if (activeRole === 'scrum-master') return <SMDashboard />;
    if (activeRole === 'product-owner') return <PODashboard />;
    return <PMDashboard />;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderRoleDashboard();
      case 'assessments':
        return <SelfAssessment />;
      case 'scenarios':
        return <ScenarioArena />;
      case 'ai-studio':
        return <AIToolsStudio />;
      case 'dictionary':
        return <AgileDictionary />;
      case 'live-assistant':
        return <LiveAIAssistant />;
      case 'jira':
        return <JiraHub />;
      default:
        return renderRoleDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainPortalView />
    </AppProvider>
  );
};

export default App;
