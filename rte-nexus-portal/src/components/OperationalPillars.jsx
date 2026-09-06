import React, { useState } from 'react';
import { OPERATIONAL_PILLARS_DATA } from '../data/rteData';
import { 
  Layers, 
  ShieldCheck, 
  GitBranch, 
  BarChart3, 
  Compass, 
  Sparkles, 
  Check, 
  Lightbulb, 
  ArrowRight,
  CheckSquare,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function OperationalPillars({ onOpenAiSuite }) {
  const [activePillarId, setActivePillarId] = useState('pillar-1');
  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview' | 'checklist' | 'pro-tips'

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'ShieldCheck': return ShieldCheck;
      case 'GitBranch': return GitBranch;
      case 'BarChart3': return BarChart3;
      case 'Compass': return Compass;
      case 'Sparkles': return Sparkles;
      default: return Layers;
    }
  };

  const currentPillar = OPERATIONAL_PILLARS_DATA.find(p => p.id === activePillarId) || OPERATIONAL_PILLARS_DATA[0];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-sapphire-400" />
          <span>Operational Excellence Framework</span>
        </div>
        <h1 className="text-3xl font-heading font-extrabold text-white">
          The 6 Core Operational Areas of an <span className="text-gradient">RTE</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          An RTE operates across 6 vital operational vectors to ensure continuous value flow, risk mitigation, systemic quality, and team empowerment. Explore each operational pillar below.
        </p>
      </div>

      {/* 6 Pillar Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OPERATIONAL_PILLARS_DATA.map((pillar) => {
          const Icon = getIcon(pillar.icon);
          const isSelected = activePillarId === pillar.id;
          return (
            <div
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`glass-panel p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'border-sapphire-500 bg-navy-900 shadow-glow-sapphire scale-[1.02]'
                  : 'border-slate-800/80 hover:border-slate-700 glass-panel-hover'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <span className="px-2.5 py-0.5 rounded-full bg-sapphire-500/20 text-sapphire-300 border border-sapphire-500/40 text-[10px] font-bold">
                      Selected Pillar
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-white">{pillar.title}</h3>
                  <p className="text-xs font-medium text-sapphire-400 mt-0.5">{pillar.tagline}</p>
                </div>

                <p className="text-slate-300 text-xs line-clamp-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
                <span className="text-slate-400 font-semibold">{pillar.highlights.length} Core Capabilities</span>
                <span className={`font-bold flex items-center space-x-1 ${isSelected ? 'text-sapphire-300' : 'text-slate-500'}`}>
                  <span>Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Deep Dive Panel */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 space-y-6 bg-navy-900/90">
        
        {/* Deep Dive Header & Sub-Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-4">
            {(() => {
              const Icon = getIcon(currentPillar.icon);
              return (
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentPillar.color} flex items-center justify-center text-white shadow-xl`}>
                  <Icon className="w-7 h-7" />
                </div>
              );
            })()}
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-white">{currentPillar.title}</h2>
              <p className="text-xs text-sapphire-300 font-semibold">{currentPillar.tagline}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveSubTab('overview')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'overview' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Capabilities
            </button>
            <button
              onClick={() => setActiveSubTab('checklist')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'checklist' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Checklist ({currentPillar.checklist ? currentPillar.checklist.length : 4})
            </button>
            <button
              onClick={() => setActiveSubTab('pro-tips')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'pro-tips' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Pro Tip
            </button>
          </div>
        </div>

        {/* SUB TAB 1: OVERVIEW & CAPABILITIES */}
        {activeSubTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-slate-300">
                Core Execution Capabilities
              </h3>
              <div className="space-y-3">
                {currentPillar.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-navy-950/80 border border-slate-800">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-200 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-slate-300">
                Detailed Scope Description
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed p-5 rounded-2xl bg-navy-950 border border-slate-800">
                {currentPillar.description}
              </p>
            </div>
          </div>
        )}

        {/* SUB TAB 2: CHECKLIST */}
        {activeSubTab === 'checklist' && (
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-slate-300">
              Operational Readiness Checklist
            </h3>
            <div className="space-y-3">
              {currentPillar.checklist && currentPillar.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-navy-950 border border-slate-800 text-xs text-slate-200">
                  <CheckSquare className="w-4 h-4 text-sapphire-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB TAB 3: PRO TIPS */}
        {activeSubTab === 'pro-tips' && (
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-3">
            <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Field-Tested RTE Insight</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed italic">
              "{currentPillar.proTip}"
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
