import React from 'react';
import { Sparkles, Search, Award, BookOpen, Wrench, FileCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  completedModules, 
  totalModules,
  onOpenCertificate 
}) {
  const percentComplete = Math.round((completedModules.length / totalModules) * 100);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090d16]/80 backdrop-blur-md px-4 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
      {/* Brand Header */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('curriculum')}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20">
          <div className="w-full h-full bg-[#0d121f] rounded-[10px] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg text-white tracking-tight">AI PM Portal</h1>
            <span className="badge-neon">Single Source of Truth</span>
          </div>
          <p className="text-xs text-gray-400 font-medium">Vibe Coding Masterclass for POs & PMs</p>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="relative flex-1 max-w-md hidden md:block">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search LLMs, RAG, Evals, PRD Generator, Interview Prep..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Action Stats & Certification Badge */}
      <div className="flex items-center gap-3">
        {/* Course Progress */}
        <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs">
          <div className="text-right">
            <div className="font-semibold text-gray-200">{completedModules.length} / {totalModules} Modules</div>
            <div className="text-[10px] text-gray-400">{percentComplete}% Complete</div>
          </div>
          <div className="w-10 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>

        {/* Certificate Trigger */}
        <button
          onClick={onOpenCertificate}
          className="btn-primary py-2 px-3.5 text-xs font-medium flex items-center gap-2"
        >
          <Award className="w-4 h-4 text-yellow-300" />
          <span>Certificate</span>
        </button>
      </div>
    </header>
  );
}
