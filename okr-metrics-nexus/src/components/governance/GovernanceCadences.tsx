import React, { useState } from 'react';
import { GOVERNANCE_RITUALS } from '../../data/metricsData';
import { Calendar, CheckCircle2, Clock, AlertTriangle, FileText, Filter } from 'lucide-react';
import type { MetricCategory } from '../../types/metrics';

export const GovernanceCadences: React.FC = () => {
  const [selectedCadenceTier, setSelectedCadenceTier] = useState<string>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<MetricCategory | 'all'>('all');

  const filteredRituals = GOVERNANCE_RITUALS.filter(ritual => {
    const matchesCadence = selectedCadenceTier === 'all' || ritual.cadenceTier === selectedCadenceTier;
    const matchesCategory = selectedCategoryFilter === 'all' || ritual.metricsReviewed.includes(selectedCategoryFilter);
    return matchesCadence && matchesCategory;
  });

  const getCategoryBadgeClass = (category: MetricCategory) => {
    switch (category) {
      case 'OKR': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'KPI': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'KRA': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KRI': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Governance Command Center & Event Cadences</h2>
              <p className="text-xs text-slate-400">Structured event rhythm detailing exact meeting durations, required inputs, step-by-step meeting agendas, outputs, and escalation SLAs.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs shrink-0">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Rhythm Scope</span>
            <span className="text-emerald-400 font-bold">Daily to Annual Governance</span>
            <span className="text-slate-500 block text-[10px] mt-0.5">6 Event Cadences • Escalation SLAs</span>
          </div>
        </div>

        {/* Cadence Tier Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800 text-xs">
          <span className="text-slate-400 flex items-center gap-1 font-bold">
            <Clock className="w-3.5 h-3.5" /> Duration Filter:
          </span>
          <button
            onClick={() => setSelectedCadenceTier('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedCadenceTier === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            All Cadences (6)
          </button>
          {[
            { id: 'Daily', label: 'Daily (15m)' },
            { id: 'Weekly', label: 'Weekly (45m)' },
            { id: 'Bi-Weekly / Sprint', label: 'Bi-Weekly / Sprint (90m)' },
            { id: 'Monthly / PI', label: 'Monthly / PI (120m)' },
            { id: 'Quarterly (QBR)', label: 'Quarterly QBR (1-2 Days)' },
            { id: 'Annual', label: 'Annual Retreat (2-3 Days)' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedCadenceTier(item.id)}
              className={`px-3 py-1.5 rounded-lg border font-semibold transition-all ${
                selectedCadenceTier === item.id
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-bold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Review Focus Area:
          </span>
          {(['all', 'OKR', 'KPI', 'KRA', 'KRI'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${
                selectedCategoryFilter === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 font-bold'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Areas' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cadence Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRituals.map((ritual) => (
          <div
            key={ritual.id}
            className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Card Header: Duration & Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs border border-emerald-500/40 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {ritual.cadence} ({ritual.durationMinutes})
                </span>

                <div className="flex items-center gap-1">
                  {ritual.metricsReviewed.map(cat => (
                    <span key={cat} className={`px-2 py-0.5 rounded text-[10px] font-black uppercase border ${getCategoryBadgeClass(cat)}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Event Title */}
              <h3 className="text-lg font-bold text-white mt-1">{ritual.eventTitle}</h3>

              {/* Primary Roles */}
              <div className="mt-2.5 text-xs">
                <span className="text-slate-400 font-bold block text-[10px] uppercase mb-1">Participating Roles:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ritual.primaryRoles.map(role => (
                    <span key={role} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] border border-slate-800">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Required Inputs */}
              {ritual.requiredInputs && ritual.requiredInputs.length > 0 && (
                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <strong className="text-cyan-400 text-[10px] uppercase font-bold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Required Event Inputs:
                  </strong>
                  <ul className="space-y-1 list-disc list-inside text-slate-300 text-[11px]">
                    {ritual.requiredInputs.map((input, idx) => (
                      <li key={idx}>{input}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Agenda Items */}
              <div className="mt-4 space-y-1.5 text-xs">
                <strong className="text-slate-300 font-bold block text-[11px] uppercase">Meeting Agenda & Playbook:</strong>
                <div className="space-y-1.5">
                  {ritual.keyAgendaItems.map((agenda, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-[11px]">
                      {agenda}
                    </div>
                  ))}
                </div>
              </div>

              {/* Area Specific Focus Rules */}
              <div className="mt-4 p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs space-y-1.5">
                <strong className="text-indigo-300 font-bold uppercase text-[10px] block">Area Review Protocols:</strong>
                {ritual.areaFocusRules.okrRule && (
                  <p className="text-cyan-300 text-[11px]"><strong>OKR:</strong> {ritual.areaFocusRules.okrRule}</p>
                )}
                {ritual.areaFocusRules.kpiRule && (
                  <p className="text-emerald-300 text-[11px]"><strong>KPI:</strong> {ritual.areaFocusRules.kpiRule}</p>
                )}
                {ritual.areaFocusRules.kraRule && (
                  <p className="text-amber-300 text-[11px]"><strong>KRA:</strong> {ritual.areaFocusRules.kraRule}</p>
                )}
                {ritual.areaFocusRules.kriRule && (
                  <p className="text-rose-300 text-[11px]"><strong>KRI:</strong> {ritual.areaFocusRules.kriRule}</p>
                )}
              </div>
            </div>

            {/* Footer: Outputs & Escalation SLA */}
            <div className="mt-5 pt-3 border-t border-slate-800 space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-950/20 text-emerald-300 text-[11px] border border-emerald-500/20 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Key Output:</strong> {ritual.outputsAndArtifacts}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-rose-950/20 text-rose-300 text-[11px] border border-rose-500/20 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span><strong>Escalation SLA:</strong> {ritual.escalationSLA}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
