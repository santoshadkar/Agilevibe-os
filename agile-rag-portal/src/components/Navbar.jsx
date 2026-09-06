import React from 'react';
import { 
  Sparkles, 
  Database, 
  FileCode, 
  SlidersHorizontal, 
  Key, 
  Layers, 
  MessageSquare,
  BookOpen,
  Cpu
} from 'lucide-react';
import { PERSONA_CONFIGS } from '../utils/geminiApi';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  activePersona, 
  setActivePersona, 
  apiKey, 
  onOpenApiKeyModal,
  corpusCount 
}) {
  const currentPersona = PERSONA_CONFIGS[activePersona];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('chat')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-emerald-500 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-indigo-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
                  AgileMind <span className="text-indigo-400 text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">RAG 2.0</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Agile Coaching • Scrum Mastery • Product Management Intelligence
              </p>
            </div>
          </div>

          {/* Persona Selection Buttons */}
          <div className="hidden lg:flex items-center p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
            {Object.values(PERSONA_CONFIGS).map((p) => {
              const isSelected = activePersona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePersona(p.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? `bg-gradient-to-r ${p.color} text-white shadow-md shadow-indigo-900/40 scale-[1.02]`
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="text-sm">{p.avatar}</span>
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Top Actions & Settings */}
          <div className="flex items-center space-x-3">
            {/* API Key Indicator / Trigger */}
            <button
              onClick={onOpenApiKeyModal}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                apiKey
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700/80'
              }`}
              title="Configure Gemini API Key"
            >
              <Key className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {apiKey ? 'Gemini 2.5 Active' : 'Set Gemini API Key'}
              </span>
            </button>

            {/* Document Corpus Counter */}
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
              <Database className="w-3.5 h-3.5 text-indigo-400" />
              <span>{corpusCount} RAG Docs</span>
            </div>
          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto py-2 border-t border-slate-800/60 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'chat'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span>RAG Assistant & Chat</span>
          </button>

          <button
            onClick={() => setActiveTab('visualizer')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'visualizer'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />
            <span>Semantic Vector Visualizer</span>
          </button>

          <button
            onClick={() => setActiveTab('artifacts')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'artifacts'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>Agile Artifact Generator</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'documents'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>Document Ingestion & Index</span>
          </button>

          <button
            onClick={() => setActiveTab('corpus')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'corpus'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Agile Knowledge Library</span>
          </button>
        </div>

      </div>
    </header>
  );
}
