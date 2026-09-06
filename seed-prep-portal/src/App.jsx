import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TopicDetail from './components/TopicDetail';
import QuizModule from './components/QuizModule';
import SpatialWorkshop from './components/SpatialWorkshop';
import ResourceHub from './components/ResourceHub';
import { NotesModal, BookmarksModal } from './components/NotesBookmarksModals';
import { SEED_SYLLABUS_DOMAINS } from './data/seedSyllabusData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDomainId, setSelectedDomainId] = useState('creative-visualization');
  const [selectedTopicId, setSelectedTopicId] = useState('2d-3d-geometry-unfolding');

  // Persistence in localStorage
  const [completedTopicsMap, setCompletedTopicsMap] = useState(() => {
    try {
      const stored = localStorage.getItem('seed_completed_topics');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  const [savedNotesMap, setSavedNotesMap] = useState(() => {
    try {
      const stored = localStorage.getItem('seed_personal_notes');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  const [bookmarksMap, setBookmarksMap] = useState(() => {
    try {
      const stored = localStorage.getItem('seed_bookmarks');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  const [quizDomainIdFilter, setQuizDomainIdFilter] = useState('all');
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isBookmarksModalOpen, setIsBookmarksModalOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('seed_completed_topics', JSON.stringify(completedTopicsMap));
  }, [completedTopicsMap]);

  useEffect(() => {
    localStorage.setItem('seed_personal_notes', JSON.stringify(savedNotesMap));
  }, [savedNotesMap]);

  useEffect(() => {
    localStorage.setItem('seed_bookmarks', JSON.stringify(bookmarksMap));
  }, [bookmarksMap]);

  // Compute total topics & readiness percentage
  let totalTopicsCount = 0;
  SEED_SYLLABUS_DOMAINS.forEach((d) => {
    totalTopicsCount += d.topics.length;
  });
  const completedCount = Object.keys(completedTopicsMap).filter((k) => completedTopicsMap[k]).length;
  const readinessPercentage = Math.round((completedCount / totalTopicsCount) * 100);

  // Handlers
  const handleSelectDomain = (domainId) => {
    const domain = SEED_SYLLABUS_DOMAINS.find((d) => d.id === domainId) || SEED_SYLLABUS_DOMAINS[0];
    setSelectedDomainId(domain.id);
    setSelectedTopicId(domain.topics[0].id);
    setActiveTab('syllabus');
  };

  const handleSelectTopic = (domainId, topicId) => {
    setSelectedDomainId(domainId);
    setSelectedTopicId(topicId);
    setActiveTab('syllabus');
  };

  const handleToggleCompleteTopic = (topicId) => {
    setCompletedTopicsMap((prev) => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handleSaveNote = (topicId, noteContent) => {
    setSavedNotesMap((prev) => ({
      ...prev,
      [topicId]: noteContent
    }));
  };

  const handleDeleteNote = (topicId) => {
    setSavedNotesMap((prev) => {
      const copy = { ...prev };
      delete copy[topicId];
      return copy;
    });
  };

  const handleToggleBookmark = (topicId) => {
    setBookmarksMap((prev) => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handleStartQuizFromDashboard = (domainId) => {
    setQuizDomainIdFilter(domainId || 'all');
    setActiveTab('quiz');
  };

  const savedNotesCount = Object.keys(savedNotesMap).filter((k) => savedNotesMap[k] && savedNotesMap[k].trim() !== '').length;
  const bookmarksCount = Object.keys(bookmarksMap).filter((k) => bookmarksMap[k]).length;

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans antialiased flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        readinessPercentage={readinessPercentage}
        savedNotesCount={savedNotesCount}
        bookmarksCount={bookmarksCount}
        onOpenNotesModal={() => setIsNotesModalOpen(true)}
        onOpenBookmarksModal={() => setIsBookmarksModalOpen(true)}
      />

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'dashboard' && (
          <Dashboard
            onSelectDomain={handleSelectDomain}
            onStartQuiz={handleStartQuizFromDashboard}
            onOpenSpatial={() => setActiveTab('spatial')}
            completedTopicsMap={completedTopicsMap}
            readinessPercentage={readinessPercentage}
          />
        )}

        {activeTab === 'syllabus' && (
          <TopicDetail
            selectedDomainId={selectedDomainId}
            selectedTopicId={selectedTopicId}
            onSelectTopic={handleSelectTopic}
            completedTopicsMap={completedTopicsMap}
            onToggleCompleteTopic={handleToggleCompleteTopic}
            savedNotesMap={savedNotesMap}
            onSaveNote={handleSaveNote}
            bookmarksMap={bookmarksMap}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizModule
            initialDomainId={quizDomainIdFilter}
            onCompleteQuiz={(percentage) => {
              // Automatically increment completed topics metric or track progress
            }}
          />
        )}

        {activeTab === 'spatial' && <SpatialWorkshop />}

        {activeTab === 'resources' && (
          <ResourceHub onSelectDomain={handleSelectDomain} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span>SEED Exam Preparation Portal • Dedicated to Design Aspirants</span>
          <span>Symbiosis Entrance Exam for Design (SID) Syllabus 2026</span>
        </div>
      </footer>

      {/* Modals */}
      <NotesModal
        isOpen={isNotesModalOpen}
        onClose={() => setIsNotesModalOpen(false)}
        savedNotesMap={savedNotesMap}
        onDeleteNote={handleDeleteNote}
        onNavigateToTopic={handleSelectTopic}
      />

      <BookmarksModal
        isOpen={isBookmarksModalOpen}
        onClose={() => setIsBookmarksModalOpen(false)}
        bookmarksMap={bookmarksMap}
        onToggleBookmark={handleToggleBookmark}
        onNavigateToTopic={handleSelectTopic}
      />
    </div>
  );
}
