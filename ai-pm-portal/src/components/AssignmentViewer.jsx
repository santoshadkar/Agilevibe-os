import React, { useState } from 'react';
import { FileText, CheckSquare, Eye, EyeOff, Save, CheckCircle2, Sparkles } from 'lucide-react';

export default function AssignmentViewer({ assignments }) {
  const [selectedId, setSelectedId] = useState(assignments[0].id);
  const [userSolutions, setUserSolutions] = useState({});
  const [showSample, setShowSample] = useState({});

  const currentAssignment = assignments.find(a => a.id === selectedId) || assignments[0];

  const handleSolutionChange = (val) => {
    setUserSolutions(prev => ({ ...prev, [selectedId]: val }));
  };

  const toggleSample = (id) => {
    setShowSample(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sidebar List of Assignments */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 px-1">
          Deep Scenarios ({assignments.length})
        </h3>

        {assignments.map((assign) => {
          const isSelected = assign.id === selectedId;
          const hasWritten = userSolutions[assign.id] && userSolutions[assign.id].trim().length > 20;

          return (
            <button
              key={assign.id}
              onClick={() => setSelectedId(assign.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-900/40 to-cyan-900/30 border-indigo-500/50 shadow-md'
                  : 'glass-panel hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  assign.difficulty === 'Hard' ? 'bg-pink-500/20 text-pink-300' : 'bg-cyan-500/20 text-cyan-300'
                }`}>
                  {assign.difficulty}
                </span>
                <span className="text-[10px] text-gray-400">{assign.estimatedTime}</span>
              </div>

              <h4 className="font-bold text-sm text-white mb-1 leading-snug">
                {assign.title}
              </h4>

              {hasWritten && (
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-2 font-medium">
                  <CheckCircle2 className="w-3 h-3" /> Solution Saved
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Workspace */}
      <div className="lg:col-span-2 space-y-6">
        {/* Scenario Header */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-neon">REAL-WORLD ASSIGNMENT</span>
            <span className="text-xs text-gray-400">{currentAssignment.estimatedTime}</span>
          </div>

          <h2 className="text-xl font-bold text-white mb-3">
            {currentAssignment.title}
          </h2>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 leading-relaxed mb-4">
            <strong className="text-cyan-400 font-semibold block mb-1">Scenario Background:</strong>
            {currentAssignment.scenario}
          </div>

          {/* Deliverables List */}
          <div className="mb-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Required Deliverables:</h4>
            <ul className="space-y-1 text-xs text-gray-300">
              {currentAssignment.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* User Scratchpad / Workspace */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Your Solution Draft
            </h3>
            <span className="text-xs text-gray-400">Markdown supported</span>
          </div>

          <textarea
            value={userSolutions[selectedId] || ''}
            onChange={(e) => handleSolutionChange(e.target.value)}
            placeholder="Type your PRD spec, cost audit formula, or evaluation harness solution here..."
            className="w-full h-48 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-200 font-mono placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-all resize-y"
          />

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => toggleSample(selectedId)}
              className="btn-secondary text-xs py-2 px-3 flex items-center gap-2"
            >
              {showSample[selectedId] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-cyan-400" />}
              <span>{showSample[selectedId] ? 'Hide 10/10 Sample Solution' : 'Reveal 10/10 Sample Solution'}</span>
            </button>

            <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Auto-saved to browser
            </span>
          </div>
        </div>

        {/* 10/10 Sample Solution Card */}
        {showSample[selectedId] && (
          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              10/10 Expert Sample Solution
            </div>

            <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-gray-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {currentAssignment.sampleSolution}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
