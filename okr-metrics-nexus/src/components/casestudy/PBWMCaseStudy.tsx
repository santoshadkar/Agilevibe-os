import React, { useState } from 'react';
import { PBWM_CASE_STUDY_METRICS, PBWM_EXECUTIVE_BRIEFING } from '../../data/pbwmCaseStudyData';
import { Building2, ArrowDown, AlertTriangle, TrendingUp, ChevronDown, ChevronUp, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const PBWMCaseStudy: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>('all');
  const [showBriefing, setShowBriefing] = useState<boolean>(true);

  const filteredTiers = PBWM_CASE_STUDY_METRICS.filter(
    tier => activeTierId === 'all' || tier.levelId === activeTierId
  );

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/40">
                  Live Banking Case Study
                </span>
                <span className="text-xs text-slate-400 font-mono">Domain: Private Wealth Management</span>
              </div>
              <h2 className="text-xl font-extrabold text-white mt-1">
                {PBWM_EXECUTIVE_BRIEFING.bankName}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5 max-w-3xl">
                End-to-end top-to-bottom cascading tree demonstrating how Strategic OKRs, KPIs, KRAs, and KRIs flow seamlessly from the <strong className="font-bold text-white">CEO &amp; C-Suite</strong> down to the <strong className="font-bold text-cyan-300">RTE, TSM, SM, PO, and Individual Squad Members</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px] font-semibold uppercase">Global AUM Scope</span>
              <span className="text-cyan-400 font-bold">{PBWM_EXECUTIVE_BRIEFING.totalAUM}</span>
              <span className="text-slate-500 block text-[10px] mt-0.5">{PBWM_EXECUTIVE_BRIEFING.activeHNWClients}</span>
            </div>

            <button
              onClick={() => setShowBriefing(!showBriefing)}
              className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>{showBriefing ? 'Hide Briefing' : 'Read Briefing'}</span>
              {showBriefing ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Collapsible Executive Briefing Section */}
        {showBriefing && (
          <div className="pt-4 border-t border-slate-800/80 space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
              <strong className="text-cyan-400 font-bold uppercase text-[11px] block">Executive Case Overview</strong>
              <p className="text-slate-300 leading-relaxed">{PBWM_EXECUTIVE_BRIEFING.businessOverview}</p>
            </div>

            {/* Business Challenges Grid */}
            <div className="space-y-2">
              <strong className="text-amber-400 font-bold uppercase text-[11px] block">3 Core Enterprise Challenges Driving Transformation</strong>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PBWM_EXECUTIVE_BRIEFING.coreBusinessChallenges.map((challenge, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-white block">{challenge.challengeTitle}</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{challenge.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Story Walkthrough */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-2">
              <strong className="text-indigo-300 font-bold uppercase text-[11px] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-400" /> 7-Tier Cascading Alignment Walkthrough
              </strong>
              <div className="space-y-1.5 pt-1">
                {PBWM_EXECUTIVE_BRIEFING.cascadingStoryWalkthrough.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tier Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => setActiveTierId('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTierId === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            Full Top-to-Bottom Tree (7 Tiers)
          </button>
          {PBWM_CASE_STUDY_METRICS.map((tier) => (
            <button
              key={tier.levelId}
              onClick={() => setActiveTierId(tier.levelId)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                activeTierId === tier.levelId
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500 font-bold'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {tier.roleTitle.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Cascading Tree Directory */}
      <div className="space-y-6">
        {filteredTiers.map((tier, idx) => (
          <div key={tier.levelId} className="relative">
            {/* Directional Downward Arrow for Tree Flow */}
            {idx > 0 && activeTierId === 'all' && (
              <div className="flex justify-center -my-3 relative z-20">
                <div className="p-1.5 rounded-full bg-slate-900 border border-indigo-500/40 text-cyan-400 shadow-md">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            )}

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all space-y-5 shadow-xl bg-slate-900/70">
              {/* Header: Tier Level & Role Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    {tier.levelName}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5 flex items-center gap-2">
                    <span>{tier.roleTitle}</span>
                    <span className="text-xs text-slate-400 font-normal">({tier.incumbentName})</span>
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium mt-0.5">
                    Strategic Focus: {tier.strategicFocus}
                  </p>
                </div>

                {tier.parentAlignment && (
                  <div className="px-3 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-[11px] text-indigo-200 max-w-sm">
                    <strong className="text-cyan-300 block text-[10px] uppercase font-bold">Upward Alignment:</strong>
                    {tier.parentAlignment}
                  </div>
                )}
              </div>

              {/* 4 Framework Sections Grid (OKR, KPI, KRA, KRI) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Derived OKR Card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      Derived OKR
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono font-bold">Strategic Outcome</span>
                  </div>

                  <h4 className="text-xs font-bold text-white leading-snug">{tier.okr.objective}</h4>

                  <div className="space-y-2 pt-1 border-t border-slate-900">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Key Results Progress:</span>
                    {tier.okr.keyResults.map((kr, i) => (
                      <div key={i} className="text-[11px] space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="line-clamp-1">{kr.description}</span>
                          <span className="font-mono text-cyan-300 font-bold shrink-0 pl-2">{kr.current} / {kr.target}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cyan-400 transition-all"
                            style={{ width: `${kr.progressPercent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Derived KPI Card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        Derived KPI
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">Operational Baseline</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-200">{tier.kpi.name}</h4>

                    <div className="mt-3 flex items-center justify-between bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-bold uppercase">Current Value</span>
                        <span className="text-sm font-black text-emerald-400">{tier.kpi.currentVal}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-bold uppercase">Target Standard</span>
                        <span className="text-xs font-bold text-slate-200">{tier.kpi.targetVal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-emerald-300 flex items-center gap-1 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" /> Direct Telemetry Monitored Continuous SLA
                  </div>
                </div>

                {/* 3. Derived KRA Card */}
                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Derived KRA Scope
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono font-bold">Role Charter</span>
                  </div>

                  <div>
                    <strong className="text-amber-400 text-[10px] uppercase font-bold block">Accountability Domain:</strong>
                    <span className="text-white font-bold text-xs">{tier.kra.coreDomain}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-900">
                    <strong className="text-slate-400 text-[10px] uppercase font-bold block">Primary Responsibility:</strong>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{tier.kra.keyAccountability}</p>
                  </div>
                </div>

                {/* 4. Derived KRI Card */}
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-rose-400" /> Derived KRI Radar
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-rose-600 text-white">
                      {tier.kri.severity} Severity
                    </span>
                  </div>

                  <div>
                    <strong className="text-rose-400 text-[10px] uppercase font-bold block">Risk Threshold Factor:</strong>
                    <span className="text-slate-200 font-medium">{tier.kri.riskFactor}</span>
                  </div>

                  <div className="bg-slate-950 p-2 rounded border border-rose-500/20 font-mono text-[11px] text-rose-300">
                    Threshold: {tier.kri.threshold || tier.kri.triggerThreshold}
                  </div>

                  <div className="pt-1 text-[11px]">
                    <strong className="text-rose-300">Pre-scripted Mitigation:</strong>
                    <p className="text-slate-300 mt-0.5">{tier.kri.mitigation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
