import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Cpu, Award } from 'lucide-react';

export default function HeroSection({ onExploreCurriculum, onExploreTools }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#111827] via-[#0d1326] to-[#151c33] p-6 lg:p-10 mb-8 shadow-2xl">
      {/* Decorative Glow Background */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>The Complete AI Product Management Portal</span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Master <span className="glow-text-cyan">AI Product Management</span> from Specs to FAANG Interviews
        </h2>

        <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
          Your single source of truth for AI/ML architecture, non-deterministic PRD specifications, RAG vs Fine-tuning decision trees, Token ROI modeling, and continuous Evals engineering.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="glass-panel p-3 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">8 Modules</div>
              <div className="text-[10px] text-gray-400">Deep Syllabus</div>
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">5 Interactive Tools</div>
              <div className="text-[10px] text-gray-400">PRD, Cost, Evals</div>
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Real Scenarios</div>
              <div className="text-[10px] text-gray-400">Deep Assignments</div>
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-pink-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Interview Bank</div>
              <div className="text-[10px] text-gray-400">FAANG Tear-downs</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={onExploreCurriculum} className="btn-primary">
            <span>Start Learning Curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={onExploreTools} className="btn-secondary">
            <span>Launch AI PM Tools</span>
          </button>
        </div>
      </div>
    </div>
  );
}
