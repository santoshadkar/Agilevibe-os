import React from 'react';
import { Sparkles, BookOpen, Award, PenTool, Library, Bookmark, FileText, LayoutDashboard, Download } from 'lucide-react';
import { generateFullSyllabusPDF } from '../utils/pdfGenerator';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  readinessPercentage, 
  savedNotesCount, 
  bookmarksCount, 
  onOpenNotesModal,
  onOpenBookmarksModal 
}) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Portal Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-amber-500/20 font-bold text-white text-xl border border-amber-400/30">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-indigo-300 text-lg tracking-tight">
                  SEED Prep Portal
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  2026 Edition
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Symbiosis Entrance Exam for Design • Master Prep</p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab('syllabus')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'syllabus'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Syllabus & Topics
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-4 h-4" />
              Practice Quizzes & Mock Test
            </button>

            <button
              onClick={() => setActiveTab('spatial')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'spatial'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <PenTool className="w-4 h-4" />
              Sketch & Spatial Lab
            </button>

            <button
              onClick={() => setActiveTab('resources')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'resources'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Library className="w-4 h-4" />
              Resource Hub
            </button>
          </nav>

          {/* Right Controls (PDF Download, Score & Saved Notes/Bookmarks) */}
          <div className="flex items-center gap-2">
            {/* Download Master PDF Button */}
            <button
              onClick={generateFullSyllabusPDF}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-xl transition-all shadow-md cursor-pointer"
              title="Download Full SEED Study Guide as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF Guide</span>
            </button>

            {/* Readiness Meter Pill */}
            <div className="hidden lg:flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <div>
                <span className="text-slate-400">Prep Readiness:</span>{' '}
                <strong className="text-amber-400">{readinessPercentage}%</strong>
              </div>
            </div>

            {/* My Notes Quick Button */}
            <button
              onClick={onOpenNotesModal}
              title="View saved personal notes"
              className="relative p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              {savedNotesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedNotesCount}
                </span>
              )}
            </button>

            {/* Bookmarks Quick Button */}
            <button
              onClick={onOpenBookmarksModal}
              title="View bookmarked items"
              className="relative p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarksCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex overflow-x-auto gap-1 py-2 border-t border-slate-800/80 no-scrollbar">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeTab === 'dashboard' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 bg-slate-950/60'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeTab === 'syllabus' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 bg-slate-950/60'
            }`}
          >
            Syllabus
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeTab === 'quiz' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 bg-slate-950/60'
            }`}
          >
            Quizzes & Mock Test
          </button>
          <button
            onClick={() => setActiveTab('spatial')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeTab === 'spatial' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 bg-slate-950/60'
            }`}
          >
            Sketch & Spatial Lab
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
              activeTab === 'resources' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 bg-slate-950/60'
            }`}
          >
            Resources
          </button>
        </div>
      </div>
    </header>
  );
}
