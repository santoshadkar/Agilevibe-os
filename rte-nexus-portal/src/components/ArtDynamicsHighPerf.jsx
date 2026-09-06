import React, { useState } from 'react';
import { ART_DYNAMICS_DATA } from '../data/rteData';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  Flame, 
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function ArtDynamicsHighPerf() {
  const [activeTab, setActiveTab] = useState('tuckman'); // 'tuckman' | 'dysfunctions' | 'conflict'

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-sapphire-400" />
              <span>Train Dynamics & High Performance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              ART Team Dynamics, <span className="text-gradient">Tuckman Ladder</span> & Conflict Management
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Transforming an Agile Release Train into a high-performing system requires mastering team maturity stages, identifying systemic dysfunctions, and resolving high-stakes conflicts.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('tuckman')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'tuckman'
                  ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tuckman Ladder
            </button>
            <button
              onClick={() => setActiveTab('dysfunctions')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dysfunctions'
                  ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              5 Dysfunctions
            </button>
            <button
              onClick={() => setActiveTab('conflict')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'conflict'
                  ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Conflict Management
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: TUCKMAN LADDER */}
      {activeTab === 'tuckman' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Tuckman Model Applied to Scaled Agile Trains</span>
            </h2>
            <p className="text-xs text-slate-400">How an ART evolves through 4 developmental stages and the RTE's corresponding leadership strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ART_DYNAMICS_DATA.tuckmanLadder.map((t, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 glass-panel-hover">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-sapphire-600 text-white flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span>Stage: {t.stage}</span>
                  </h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 text-slate-300">
                    <strong className="text-amber-400 block mb-1">Observed ART Behavior:</strong>
                    {t.artBehavior}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
                    <strong className="text-emerald-400 block mb-1">RTE Coaching Strategy:</strong>
                    {t.rteStrategy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: 5 DYSFUNCTIONS OF AN ART */}
      {activeTab === 'dysfunctions' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>The 5 Dysfunctions of an ART (Lencioni Framework)</span>
            </h2>
            <p className="text-xs text-slate-400">Identifying systemic dysfunctions at the train level and how the RTE remediates them.</p>
          </div>

          <div className="space-y-4">
            {ART_DYNAMICS_DATA.fiveDysfunctions.map((d, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3 glass-panel-hover">
                <h3 className="font-heading font-bold text-base text-white">{d.dysfunction}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/20 text-rose-200">
                    <strong className="text-rose-400 block mb-1">ART Systemic Symptom:</strong>
                    {d.symptomOnART}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
                    <strong className="text-emerald-400 block mb-1">RTE Action Plan:</strong>
                    {d.rteRemediation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CONFLICT MANAGEMENT */}
      {activeTab === 'conflict' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>Thomas-Kilmann Conflict Management Matrix for RTEs</span>
            </h2>
            <p className="text-xs text-slate-400">Selecting the right conflict response mode depending on the operational situation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ART_DYNAMICS_DATA.conflictManagement.map((c, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    Tone: {c.rteTone}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white">{c.mode}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>When to Use:</strong> {c.whenToUse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
