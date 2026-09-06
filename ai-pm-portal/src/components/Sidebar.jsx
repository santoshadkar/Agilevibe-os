import React from 'react';
import { 
  BookOpen, 
  Wrench, 
  FileText, 
  Calculator, 
  Layers, 
  HelpCircle, 
  TestTube2, 
  BrainCircuit, 
  CheckSquare,
  Award,
  Sparkles
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, activeTool, setActiveTool }) {
  const mainNavItems = [
    { id: 'curriculum', label: 'Curriculum Modules', icon: BookOpen, count: '8 Modules' },
    { id: 'tools', label: 'Interactive Tools Suite', icon: Wrench, count: '5 Tools' },
    { id: 'assignments', label: 'Deep Scenarios', icon: FileText, count: '4 Real-world' },
    { id: 'interviews', label: 'Interview Practice Bank', icon: HelpCircle, count: '50+ Prep' },
    { id: 'assessments', label: 'Quizzes & Certification', icon: CheckSquare, count: 'Graded' },
  ];

  const toolItems = [
    { id: 'prd-builder', label: 'AI PRD & Spec Generator', icon: FileText },
    { id: 'cost-calculator', label: 'Token Cost & ROI Calculator', icon: Calculator },
    { id: 'model-matrix', label: 'Model Selection Matrix', icon: Layers },
    { id: 'interview-sim', label: 'Interview Practice Simulator', icon: BrainCircuit },
    { id: 'evals-sim', label: 'Evals & Benchmarking Harness', icon: TestTube2 },
  ];

  return (
    <aside className="w-full lg:w-72 shrink-0 border-r border-white/10 bg-[#0d121f]/90 p-4 flex flex-col gap-6 min-h-[calc(100vh-65px)]">
      {/* Navigation Groups */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3 px-3">
          Main Learning Tracks
        </div>
        <nav className="flex flex-col gap-1">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/30 to-cyan-600/20 text-white border border-indigo-500/40 shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                  isActive ? 'bg-indigo-500/30 text-indigo-200' : 'bg-white/5 text-gray-500'
                }`}>
                  {item.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Embedded Tools Menu */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3 px-3 flex items-center justify-between">
          <span>AI PM Tools</span>
          <span className="badge-cyan text-[9px]">Live Tools</span>
        </div>
        <div className="flex flex-col gap-1">
          {toolItems.map((tool) => {
            const Icon = tool.icon;
            const isToolActive = activeTab === 'tools' && activeTool === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTab('tools');
                  setActiveTool(tool.id);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isToolActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isToolActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                <span className="truncate">{tool.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pro Tip Card */}
      <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-500/20">
        <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs mb-1.5">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Vibe Coding Guarantee</span>
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed">
          Designed as the definitive source of truth for POs & PMs preparing for AI product execution or FAANG interview rounds.
        </p>
      </div>
    </aside>
  );
}
