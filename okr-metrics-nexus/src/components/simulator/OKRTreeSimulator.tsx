import React, { useState } from 'react';
import type { MetricItem, MetricCategory, EnterpriseRole } from '../../types/metrics';
import { ENTERPRISE_ROLES } from '../../data/metricsData';
import { Zap, Plus, RefreshCw, Activity, CheckCircle2 } from 'lucide-react';

interface OKRTreeSimulatorProps {
  metrics: MetricItem[];
  onAddMetric: (newMetric: MetricItem) => void;
  onResetDatabase: () => void;
}

export const OKRTreeSimulator: React.FC<OKRTreeSimulatorProps> = ({
  metrics,
  onAddMetric,
  onResetDatabase
}) => {
  const [customGoalTitle, setCustomGoalTitle] = useState('');
  const [customGoalRole, setCustomGoalRole] = useState<EnterpriseRole>('sm');
  const [customGoalCategory, setCustomGoalCategory] = useState<MetricCategory>('OKR');
  const [customKrDescription, setCustomKrDescription] = useState('');
  const [customKrTarget, setCustomKrTarget] = useState(100);
  const [customKrUnit, setCustomKrUnit] = useState('%');
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  const handleCreateCustomMetric = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customGoalTitle.trim()) return;

    const newMetric: MetricItem = {
      id: `custom_met_${Date.now()}`,
      category: customGoalCategory,
      role: customGoalRole,
      title: customGoalTitle,
      summary: `User-defined ${customGoalCategory} generated via Vibe Engine.`,
      whyItMatters: 'Aligned with squad operational priorities and target key results.',
      governanceCadence: 'Sprint / Iteration',
      ownerRole: ENTERPRISE_ROLES.find(r => r.id === customGoalRole)?.name || 'Squad Lead',
      antiPatternToAvoid: 'Setting targets without team commitment during sprint planning.',
      keyResults: customGoalCategory === 'OKR' ? [
        {
          id: `kr_${Date.now()}`,
          description: customKrDescription || 'Achieve baseline execution target',
          current: 0,
          target: Number(customKrTarget) || 100,
          unit: customKrUnit || '%',
          status: 'on-track'
        }
      ] : undefined,
      kpiDetails: customGoalCategory === 'KPI' ? {
        metricName: customGoalTitle,
        currentVal: '0 Unit',
        targetVal: `${customKrTarget} ${customKrUnit}`,
        trend: 'up',
        health: 'healthy',
        benchmark: 'Internal Benchmark Standard'
      } : undefined,
      kraDetails: customGoalCategory === 'KRA' ? {
        coreDomain: 'Operational Domain',
        accountabilityScope: 'Defined team accountability area',
        keyDeliverables: [customKrDescription || 'Deliverable 1'],
        ownershipLevel: 'Team Lead'
      } : undefined,
      kriDetails: customGoalCategory === 'KRI' ? {
        riskFactor: customGoalTitle,
        triggerThreshold: `> ${customKrTarget} ${customKrUnit}`,
        currentLevel: '0 Unit',
        severity: 'medium',
        mitigationPlan: 'Escalate to SM/RTE during standup',
        impactArea: 'Sprint Continuity'
      } : undefined
    };

    onAddMetric(newMetric);
    setCustomGoalTitle('');
    setCustomKrDescription('');
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Form: Create Custom Metric */}
      <div className="lg:col-span-1 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-bold text-white">Vibe Metric Generator</h2>
        </div>
        <p className="text-xs text-slate-400">Craft custom OKRs, KPIs, KRAs, or KRIs and add them instantly to your workstation database.</p>

        {showAddSuccess && (
          <div className="p-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 rounded-xl text-xs flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Custom Metric successfully injected!</span>
          </div>
        )}

        <form onSubmit={handleCreateCustomMetric} className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-400 font-semibold mb-1">Target Category</label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['OKR', 'KPI', 'KRA', 'KRI'] as const).map(cat => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCustomGoalCategory(cat)}
                  className={`py-1.5 rounded-lg font-bold border transition-all ${
                    customGoalCategory === cat
                      ? cat === 'OKR' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-purple-500 text-white border-purple-400'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-slate-400 font-semibold mb-1">Target Enterprise Role</label>
            <select
              value={customGoalRole}
              onChange={(e) => setCustomGoalRole(e.target.value as EnterpriseRole)}
              className="w-full bg-slate-950 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500"
            >
              {ENTERPRISE_ROLES.map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-400 font-semibold mb-1">Objective / Metric Title</label>
            <input
              type="text"
              placeholder="e.g. Accelerate Zero-Trust Microservice Deployments"
              value={customGoalTitle}
              onChange={(e) => setCustomGoalTitle(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-slate-400 font-semibold mb-1">Key Result / Benchmark Target</label>
            <input
              type="text"
              placeholder="e.g. Reduce pipeline build duration from 45 min to 10 min"
              value={customKrDescription}
              onChange={(e) => setCustomKrDescription(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Target Value</label>
              <input
                type="number"
                value={customKrTarget}
                onChange={(e) => setCustomKrTarget(Number(e.target.value))}
                className="w-full bg-slate-950 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Unit</label>
              <input
                type="text"
                placeholder="%, min, pts"
                value={customKrUnit}
                onChange={(e) => setCustomKrUnit(e.target.value)}
                className="w-full bg-slate-950 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Inject Metric into Telemetry
          </button>
        </form>
      </div>

      {/* Goal Tree Visualizer */}
      <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Live Strategic Goal Cascading Tree
            </h2>
            <p className="text-xs text-slate-400">Interactive preview of how Enterprise Strategic Themes cascade to ART and Squad Key Results.</p>
          </div>

          <button
            onClick={onResetDatabase}
            className="px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white rounded-lg text-xs border border-slate-800 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Database
          </button>
        </div>

        <div className="space-y-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          {metrics.filter(m => m.category === 'OKR').slice(0, 3).map((okr, idx) => (
            <div key={okr.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30 font-bold">
                  Strategic Objective #{idx + 1}
                </span>
                <span className="text-xs text-slate-400 capitalize">{okr.ownerRole}</span>
              </div>

              <h3 className="text-sm font-bold text-white">{okr.title}</h3>

              {okr.keyResults && (
                <div className="space-y-2 pl-4 border-l-2 border-cyan-500/30">
                  {okr.keyResults.map(kr => {
                    const progress = Math.min(100, Math.round((kr.current / kr.target) * 100));
                    return (
                      <div key={kr.id} className="text-xs space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span>• {kr.description}</span>
                          <span className="font-mono font-bold text-cyan-300">{kr.current} / {kr.target} {kr.unit} ({progress}%)</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              progress >= 100 ? 'bg-emerald-400' : progress >= 75 ? 'bg-cyan-400' : 'bg-amber-400'
                            }`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
