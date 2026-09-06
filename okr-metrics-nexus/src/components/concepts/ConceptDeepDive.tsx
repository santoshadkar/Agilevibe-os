import React, { useState } from 'react';
import { CONCEPT_FRAMEWORKS } from '../../data/conceptsData';
import { BookOpen, Clock, AlertTriangle, ShieldCheck, ArrowRight, Lightbulb, Award } from 'lucide-react';
import type { MetricCategory } from '../../types/metrics';

export const ConceptDeepDive: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<'okr' | 'kpi' | 'kra' | 'kri'>('okr');
  const [activeSubTab, setActiveSubTab] = useState<'definition' | 'history' | 'basics101' | 'advanced201' | 'masterclass301'>('definition');

  const currentData = CONCEPT_FRAMEWORKS.find(c => c.id === selectedConcept) || CONCEPT_FRAMEWORKS[0];

  const getCategoryBadgeClass = (category: MetricCategory) => {
    switch (category) {
      case 'OKR': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'KPI': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'KRA': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KRI': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    }
  };

  const formatMarkdownText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      const parts = line.split('**');
      return (
        <React.Fragment key={lineIdx}>
          {parts.map((part, partIdx) => {
            if (partIdx % 2 === 1) {
              return <strong key={partIdx} className="font-bold text-cyan-200">{part}</strong>;
            }
            return <span key={partIdx}>{part}</span>;
          })}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Framework Foundations & Evolution Masterclass</h2>
            <p className="text-xs text-slate-400">Master anatomical structures, origin stories, 101 rules, 201 lead/lag matrices, and 301 scoring formulas for OKRs, KPIs, KRAs, and KRIs.</p>
          </div>
        </div>

        {/* Concept Framework Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {CONCEPT_FRAMEWORKS.map((framework) => {
            const isSelected = selectedConcept === framework.id;
            return (
              <button
                key={framework.id}
                onClick={() => setSelectedConcept(framework.id)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? framework.id === 'okr' ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/30'
                      : framework.id === 'kpi' ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-400/30'
                      : framework.id === 'kra' ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/30'
                      : 'bg-rose-500/15 border-rose-500 text-white shadow-lg shadow-rose-500/10 ring-1 ring-rose-400/30'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase border ${getCategoryBadgeClass(framework.acronym as MetricCategory)}`}>
                    {framework.acronym}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>}
                </div>
                <div className="text-sm font-bold mt-2.5 text-white">{framework.name}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{framework.oneLinerDefinition}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Tab Navigation Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-xs">
        <button
          onClick={() => setActiveSubTab('definition')}
          className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
            activeSubTab === 'definition'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          1. Concept & Deep Definition
        </button>
        <button
          onClick={() => setActiveSubTab('history')}
          className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
            activeSubTab === 'history'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          2. Origin Story & History ({currentData.historyAndEvolution.originYear})
        </button>
        <button
          onClick={() => setActiveSubTab('basics101')}
          className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
            activeSubTab === 'basics101'
              ? 'bg-emerald-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          3. Basics 101 & Anatomy
        </button>
        <button
          onClick={() => setActiveSubTab('advanced201')}
          className={`px-3.5 py-2 rounded-lg font-bold transition-all ${
            activeSubTab === 'advanced201'
              ? 'bg-purple-500 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          4. Advanced 201 & Lead/Lag Matrix
        </button>
        {currentData.masterclass301 && (
          <button
            onClick={() => setActiveSubTab('masterclass301')}
            className={`px-3.5 py-2 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              activeSubTab === 'masterclass301'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md'
                : 'text-violet-300 bg-violet-950/40 border border-violet-500/30 hover:bg-violet-900/50'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>5. Masterclass 301 Formulas</span>
          </button>
        )}
      </div>

      {/* SUB-TAB 1: CONCEPT & DEEP DEFINITION */}
      {activeSubTab === 'definition' && (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <span className={`px-3 py-1 rounded-md text-sm font-black uppercase border ${getCategoryBadgeClass(currentData.acronym as MetricCategory)}`}>
              {currentData.acronym}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{currentData.name}</h3>
              <p className="text-xs text-cyan-300 font-medium mt-0.5">{currentData.oneLinerDefinition}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200 leading-relaxed">
            {formatMarkdownText(currentData.deepDefinition)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <strong className="text-cyan-400 font-bold uppercase text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Why It Matters to the Enterprise
              </strong>
              <p className="text-slate-300">{currentData.whyItMatters}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <strong className="text-purple-400 font-bold uppercase text-[11px] flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Practical Real-World Utility
              </strong>
              <p className="text-slate-300">{currentData.realWorldUtility}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 text-xs space-y-2">
            <div className="text-cyan-300 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-cyan-400" />
              <span>How {currentData.acronym} is Derived</span>
            </div>
            <p className="text-slate-200">{currentData.derivationLogic}</p>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: HISTORY & ORIGIN STORY */}
      {activeSubTab === 'history' && (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Clock className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-xl font-bold text-white">Historical Origin & Evolution Story of {currentData.acronym}</h3>
              <p className="text-xs text-slate-400">Originated in {currentData.historyAndEvolution.originYear} • Pioneers: <strong className="text-slate-200">{currentData.historyAndEvolution.pioneers}</strong></p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
            {currentData.historyAndEvolution.evolutionStory}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Historical Evolution Milestones Timeline</h4>
            <div className="space-y-2.5">
              {currentData.historyAndEvolution.historicalMilestones.map((milestone, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px] border border-amber-500/40">
                    {idx + 1}
                  </span>
                  <span className="mt-0.5 leading-relaxed">{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: BASICS 101 & ANATOMY */}
      {activeSubTab === 'basics101' && (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{currentData.acronym} 101: Essential Basics & Anatomy</h3>
              <p className="text-xs text-emerald-400 font-semibold mt-0.5">{currentData.basics101.coreRule}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              Foundation Level 101
            </span>
          </div>

          {/* Simple Example */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
            <strong className="text-cyan-400 text-[11px] uppercase font-bold">Simple Concrete Example:</strong>
            <p className="text-slate-200 font-mono text-xs">{currentData.basics101.simpleExample}</p>
          </div>

          {/* Anatomical Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Anatomy & Structural Parts of a {currentData.acronym}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentData.basics101.anatomyBreakdown.map((part, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-white block">{part.part}</span>
                  <p className="text-[11px] text-slate-300">{part.description}</p>
                  <div className="p-2 rounded bg-slate-950 font-mono text-[10px] text-cyan-300 border border-slate-800">
                    Example: {part.example}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dos & Don'ts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <strong className="text-emerald-400 font-bold uppercase text-[11px] block">Key Best Practices (DOs)</strong>
              <ul className="space-y-2 list-disc list-inside text-slate-200">
                {currentData.basics101.keyDos.map((doItem, i) => (
                  <li key={i}>{doItem}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <strong className="text-rose-400 font-bold uppercase text-[11px] block">Common Mistakes (DON'Ts)</strong>
              <ul className="space-y-2 list-disc list-inside text-slate-200">
                {currentData.basics101.keyDonts.map((dontItem, i) => (
                  <li key={i}>{dontItem}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: ADVANCED 201 & LEAD/LAG MATRIX */}
      {activeSubTab === 'advanced201' && (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{currentData.acronym} 201: Advanced Mechanics</h3>
              <p className="text-xs text-purple-300 font-semibold mt-0.5">{currentData.advanced201.advancedConcept}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
              Advanced Level 201
            </span>
          </div>

          {/* Lead vs Lag Matrix Table if available */}
          {currentData.advanced201.leadVsLagMatrix && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Lead vs. Lag Indicator Matrix</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950 text-slate-300 font-bold uppercase">
                      <th className="p-3">Domain</th>
                      <th className="p-3">Lead Indicator (Input)</th>
                      <th className="p-3">Lag Indicator (Output Outcome)</th>
                      <th className="p-3">Strategic Business Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {currentData.advanced201.leadVsLagMatrix.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-900/60">
                        <td className="p-3 font-bold text-cyan-300">{row.metricType}</td>
                        <td className="p-3 font-mono text-emerald-300">{row.leadIndicator}</td>
                        <td className="p-3 font-mono text-purple-300">{row.lagIndicator}</td>
                        <td className="p-3 text-slate-300">{row.businessImpact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
            <strong className="text-cyan-400 text-[11px] uppercase font-bold">Cascading Pattern across Tiers:</strong>
            <p className="text-slate-200 font-medium">{currentData.advanced201.cascadingPattern}</p>
          </div>

          {/* Anti-Pattern Cards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Enterprise Anti-Patterns Audit & Remediation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentData.advanced201.antiPatterns.map((ap, i) => (
                <div key={i} className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 text-xs">
                  <span className="font-bold text-rose-300 text-xs block">{ap.name}</span>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Symptom:</span>
                    <p className="text-slate-300 text-[11px]">{ap.symptom}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Root Cause:</span>
                    <p className="text-slate-400 text-[11px]">{ap.rootCause}</p>
                  </div>
                  <div className="pt-2 border-t border-rose-500/20 text-emerald-300 text-[11px]">
                    <strong>Remedy:</strong> {ap.remedy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 5: MASTERCLASS 301 FORMULAS */}
      {activeSubTab === 'masterclass301' && currentData.masterclass301 && (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{currentData.acronym} 301: Masterclass Scoring & Math Playbook</h3>
              <p className="text-xs text-amber-300 font-semibold mt-0.5">{currentData.masterclass301.scoringModelName}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
              Masterclass Level 301
            </span>
          </div>

          {/* Math Formula Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
            <strong className="text-amber-400 text-[11px] uppercase font-bold">Calculation Formula:</strong>
            <p className="text-slate-200 font-mono text-xs">{currentData.masterclass301.scoringFormula}</p>
          </div>

          {/* Scoring Scale Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Evaluation & Action Scale</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentData.masterclass301.scoringScale.map((scale, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-amber-300 text-sm">{scale.scoreRange}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Tier {i + 1}</span>
                  </div>
                  <p className="text-slate-200 text-[11px] leading-relaxed">{scale.meaning}</p>
                  <div className="pt-2 border-t border-slate-800 text-cyan-300 text-[11px]">
                    <strong>Action Required:</strong> {scale.actionRequired}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step Creation Playbook */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step-by-Step Enterprise Creation Playbook</h4>
            <div className="space-y-2">
              {currentData.masterclass301.stepByStepCreationPlaybook.map((step, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-[11px] border border-cyan-500/40">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
