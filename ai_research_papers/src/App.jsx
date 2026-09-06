import React, { useState, useEffect } from 'react';
import { papersMetaData, masterIndexContent } from './data/papersData';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PaperViewer } from './components/PaperViewer';
import { MasterOverview } from './components/MasterOverview';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activePaperId, setActivePaperId] = useState(1);
  const [isOverview, setIsOverview] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [tableOfContents, setTableOfContents] = useState([]);

  // Keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activePaper = papersMetaData.find(p => p.id === activePaperId) || papersMetaData[0];

  const handleSelectPaper = (id) => {
    setActivePaperId(id);
    setIsOverview(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOverview = () => {
    setIsOverview(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPaper = () => {
    if (activePaperId < papersMetaData.length) {
      handleSelectPaper(activePaperId + 1);
    }
  };

  const handlePrevPaper = () => {
    if (activePaperId > 1) {
      handleSelectPaper(activePaperId - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <Header
        activePaper={activePaper}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectOverview={handleSelectOverview}
        isOverview={isOverview}
      />

      {/* Main Layout Container */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          papers={papersMetaData}
          activePaperId={activePaperId}
          onSelectPaper={handleSelectPaper}
          isOverview={isOverview}
          onSelectOverview={handleSelectOverview}
          tableOfContents={tableOfContents}
        />

        {/* Content Area */}
        <main className="flex-1 min-w-0 bg-slate-950/60">
          {isOverview ? (
            <MasterOverview
              papers={papersMetaData}
              onSelectPaper={handleSelectPaper}
              masterIndexContent={masterIndexContent}
            />
          ) : (
            <PaperViewer
              paper={activePaper}
              onNavigateNext={handleNextPaper}
              onNavigatePrev={handlePrevPaper}
              hasNext={activePaperId < papersMetaData.length}
              hasPrev={activePaperId > 1}
              onTableOfContentsChange={setTableOfContents}
            />
          )}
        </main>
      </div>

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        papers={papersMetaData}
        onSelectPaper={handleSelectPaper}
      />
    </div>
  );
}
