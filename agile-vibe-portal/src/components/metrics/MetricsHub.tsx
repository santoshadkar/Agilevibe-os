import React, { useState, useMemo } from 'react';
import type { 
  MetricCategory, 
  EnterpriseRole, 
  MetricItem 
} from '../../types/metrics';
import { 
  ENTERPRISE_ROLES, 
  METRIC_HISTORY_TIMELINE, 
  FRAMEWORK_COMPARISON_MATRIX, 
  GOVERNANCE_RITUALS, 
  INITIAL_METRICS_DATABASE 
} from '../../data/metricsData';
import { 
  Target, 
  BarChart2, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  Cpu, 
  TrainTrack, 
  Terminal, 
  Compass, 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  Plus, 
  RefreshCw, 
  ChevronRight, 
  X,
  Zap,
  Activity,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const MetricsHub: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<EnterpriseRole | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<MetricCategory | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'metrics' | 'comparison' | 'history' | 'governance' | 'simulator'>('metrics');
  const [searchQuery, setSearchQuery] = useState('');
  const [metricsList, setMetricsList] = useState<MetricItem[]>(INITIAL_METRICS_DATABASE);

  // Modal / Detail Inspector State
  const [inspectingMetric, setInspectingMetric] = useState<MetricItem | null>(null);

  // Custom Goal Generator State
  const [customGoalTitle, setCustomGoalTitle] = useState('');
  const [customGoalRole, setCustomGoalRole] = useState<EnterpriseRole>('sm');
  const [customGoalCategory, setCustomGoalCategory] = useState<MetricCategory>('OKR');
  const [customKrDescription, setCustomKrDescription] = useState('');
  const [customKrTarget, setCustomKrTarget] = useState(100);
  const [customKrUnit, setCustomKrUnit] = useState('%');
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  // Role icon helper
  const renderRoleIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'TrainTrack': return <TrainTrack className={className} />;
      case 'Terminal': return <Terminal className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Users': return <Users className={className} />;
      default: return <BarChart2 className={className} />;
    }
  };

  // Filtered metrics logic
  const filteredMetrics = useMemo(() => {
    return metricsList.filter(item => {
      const matchesRole = selectedRole === 'all' || item.role === selectedRole;
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery = searchQuery.trim() === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ownerRole.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesRole && matchesCategory && matchesQuery;
    });
  }, [metricsList, selectedRole, selectedCategory, searchQuery]);

  // Handle updates to key results in the simulator or cards
  const handleUpdateKeyResultCurrent = (metricId: string, krId: string, newVal: number) => {
    setMetricsList(prev => prev.map(metric => {
      if (metric.id !== metricId || !metric.keyResults) return metric;
      
      const updatedKrs = metric.keyResults.map(kr => {
        if (kr.id !== krId) return kr;
        const current = Math.max(0, newVal);
        let status: 'on-track' | 'at-risk' | 'behind' | 'achieved' = 'on-track';
        
        const ratio = kr.target > 0 ? current / kr.target : 1;
        if (ratio >= 1.0) status = 'achieved';
        else if (ratio >= 0.75) status = 'on-track';
        else if (ratio >= 0.5) status = 'at-risk';
        else status = 'behind';

        return { ...kr, current, status };
      });

      return { ...metric, keyResults: updatedKrs };
    }));
  };

  // Create Custom Metric / OKR
  const handleCreateCustomMetric = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customGoalTitle.trim()) return;

    const newMetric: MetricItem = {
      id: `custom_met_${Date.now()}`,
      category: customGoalCategory,
      role: customGoalRole,
      title: customGoalTitle,
      summary: `User-defined ${customGoalCategory} generated via AgilePulse Vibe Engine.`,
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

    setMetricsList(prev => [newMetric, ...prev]);
    setCustomGoalTitle('');
    setCustomKrDescription('');
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 3000);
  };

  // Category badge color renderer
  const getCategoryBadgeClass = (category: MetricCategory) => {
    switch (category) {
      case 'OKR': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'KPI': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'KRA': return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KRI': return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner & Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-purple-950 p-6 md:p-8 border border-indigo-500/30 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Enterprise Governance & Metrics Hub v3.0
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              OKRs, KPIs, KRAs & KRIs <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Mastery Hub</span>
            </h1>
            <p className="mt-2 text-slate-300 text-sm max-w-3xl leading-relaxed">
              Explore 360° metric perspectives across <strong className="text-cyan-300">8 enterprise roles</strong>. Master foundational concepts, historical evolution, review cadences, live examples, and interactive OKR/KRI simulators.
            </p>
          </div>

          {/* Quick Metrics Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 shrink-0">
            <div className="text-center px-2">
              <div className="text-2xl font-black text-cyan-400">
                {metricsList.filter(m => m.category === 'OKR').length}
              </div>
              <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">OKRs</div>
            </div>
            <div className="text-center px-2 border-l border-slate-800">
              <div className="text-2xl font-black text-emerald-400">
                {metricsList.filter(m => m.category === 'KPI').length}
              </div>
              <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">KPIs</div>
            </div>
            <div className="text-center px-2 border-l border-slate-800">
              <div className="text-2xl font-black text-amber-400">
                {metricsList.filter(m => m.category === 'KRA').length}
              </div>
              <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">KRAs</div>
            </div>
            <div className="text-center px-2 border-l border-slate-800">
              <div className="text-2xl font-black text-rose-400">
                {metricsList.filter(m => m.category === 'KRI').length}
              </div>
              <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">KRIs</div>
            </div>
          </div>
        </div>

        {/* Main Tab Navigation Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-6">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'metrics'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Role Perspective Explorer</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'comparison'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Framework Comparison Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'history'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>History & Evolution (1954-2026)</span>
          </button>

          <button
            onClick={() => setActiveTab('governance')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'governance'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Governance & Cadences</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'simulator'
                ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>OKR Tree & AI Generator</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: ROLE PERSPECTIVE EXPLORER */}
      {/* ========================================================================= */}
      {activeTab === 'metrics' && (
        <div className="space-y-6">
          {/* Role Selector Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Select Role Perspective (8 Leadership & Squad Views)</span>
              </h2>
              {selectedRole !== 'all' && (
                <button
                  onClick={() => setSelectedRole('all')}
                  className="text-xs text-cyan-400 hover:underline font-semibold"
                >
                  Show All Roles
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              <button
                onClick={() => setSelectedRole('all')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedRole === 'all'
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-xs font-bold">All 8 Roles</div>
                <div className="text-[10px] text-slate-400 mt-1">Enterprise Overview</div>
              </button>

              {ENTERPRISE_ROLES.map((role) => {
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? `bg-gradient-to-b ${role.bgGradient} ${role.borderColor} text-white shadow-lg ring-1 ring-white/20`
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={role.color}>
                        {renderRoleIcon(role.iconName, 'w-4 h-4')}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      )}
                    </div>
                    <div className="text-xs font-bold mt-2 truncate">{role.shortTitle}</div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{role.focusArea}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search & Category Filter Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
            {/* Search input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search OKRs, KPIs, KRAs, KRIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 text-slate-100 text-xs rounded-lg pl-9 pr-4 py-2 border border-slate-800 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {(['all', 'OKR', 'KPI', 'KRA', 'KRI'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                    selectedCategory === cat
                      ? cat === 'OKR' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                        : cat === 'KPI' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                        : cat === 'KRA' ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                        : cat === 'KRI' ? 'bg-rose-500/20 text-rose-300 border-rose-500'
                        : 'bg-white/10 text-white border-white/30'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {cat === 'all' ? 'All Frameworks' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Metrics Grid Cards */}
          {filteredMetrics.length === 0 ? (
            <div className="p-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
              <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-300">No Metrics Found</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting search query or selecting a different category/role filter.</p>
              <button
                onClick={() => { setSelectedRole('all'); setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-slate-800 text-cyan-400 text-xs font-semibold rounded-lg hover:bg-slate-700"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMetrics.map((item) => {
                const roleMeta = ENTERPRISE_ROLES.find(r => r.id === item.role);

                return (
                  <div
                    key={item.id}
                    className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/5"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider border ${getCategoryBadgeClass(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            <Clock className="w-3 h-3 text-slate-500" />
                            {item.governanceCadence}
                          </span>
                        </div>

                        {roleMeta && (
                          <div className={`text-[11px] font-semibold flex items-center gap-1.5 ${roleMeta.color}`}>
                            {renderRoleIcon(roleMeta.iconName, 'w-3.5 h-3.5')}
                            <span>{roleMeta.shortTitle}</span>
                          </div>
                        )}
                      </div>

                      {/* Title & Summary */}
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* CATEGORY SPECIFIC RENDERING */}
                      
                      {/* 1. OKR RENDERING */}
                      {item.category === 'OKR' && item.keyResults && (
                        <div className="mt-4 space-y-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                          <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                            <span>Key Results (Target vs Actual Progress)</span>
                            <span className="text-slate-500 font-normal">Click + to simulate</span>
                          </div>
                          {item.keyResults.map((kr) => {
                            const percent = Math.min(100, Math.round((kr.current / kr.target) * 100));
                            return (
                              <div key={kr.id} className="space-y-1 text-xs">
                                <div className="flex items-center justify-between text-slate-200">
                                  <span className="line-clamp-1 font-medium">{kr.description}</span>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <span className="font-mono text-cyan-300 font-bold">
                                      {kr.current} / {kr.target} {kr.unit}
                                    </span>
                                    <button
                                      onClick={() => handleUpdateKeyResultCurrent(item.id, kr.id, kr.current + 1)}
                                      className="w-5 h-5 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 flex items-center justify-center text-xs font-bold"
                                      title="Simulate incrementing metric"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>

                                {/* Progress bar */}
                                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden flex">
                                  <div
                                    className={`h-full transition-all duration-500 ${
                                      percent >= 100 ? 'bg-emerald-400' : percent >= 75 ? 'bg-cyan-400' : percent >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                                    }`}
                                    style={{ width: `${percent}%` }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* 2. KPI RENDERING */}
                      {item.category === 'KPI' && item.kpiDetails && (
                        <div className="mt-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-[10px] text-slate-400 font-semibold uppercase">Current Telemetry</div>
                            <div className="text-lg font-black text-emerald-400 mt-0.5 flex items-center gap-1.5">
                              {item.kpiDetails.currentVal}
                              {item.kpiDetails.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                              {item.kpiDetails.trend === 'down' && <TrendingDown className="w-4 h-4 text-cyan-400" />}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] text-slate-400 font-semibold uppercase">Target Standard</div>
                            <div className="text-sm font-bold text-slate-200 mt-1">{item.kpiDetails.targetVal}</div>
                          </div>
                          <div className="col-span-2 pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                            <strong className="text-slate-300">Benchmark:</strong> {item.kpiDetails.benchmark}
                          </div>
                        </div>
                      )}

                      {/* 3. KRA RENDERING */}
                      {item.category === 'KRA' && item.kraDetails && (
                        <div className="mt-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 space-y-2 text-xs">
                          <div>
                            <strong className="text-amber-400 uppercase text-[10px] font-bold block">Accountability Scope</strong>
                            <span className="text-slate-300 mt-0.5 block">{item.kraDetails.accountabilityScope}</span>
                          </div>
                          <div>
                            <strong className="text-slate-400 text-[11px]">Key Role Deliverables:</strong>
                            <ul className="mt-1 space-y-1 list-disc list-inside text-slate-300 text-[11px]">
                              {item.kraDetails.keyDeliverables.map((del, i) => (
                                <li key={i}>{del}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* 4. KRI RENDERING */}
                      {item.category === 'KRI' && item.kriDetails && (
                        <div className="mt-4 bg-rose-950/20 p-3.5 rounded-xl border border-rose-500/30 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-rose-400 font-bold uppercase text-[10px] flex items-center gap-1">
                              <AlertTriangle className="w-3.5 h-3.5" /> Risk Threshold
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              item.kriDetails.severity === 'critical' ? 'bg-rose-600 text-white' :
                              item.kriDetails.severity === 'high' ? 'bg-rose-500/20 text-rose-300 border border-rose-500' :
                              'bg-amber-500/20 text-amber-300 border border-amber-500'
                            }`}>
                              {item.kriDetails.severity} Severity
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div>
                              <span className="text-slate-400">Trigger Threshold:</span>
                              <div className="font-mono text-rose-300 font-bold">{item.kriDetails.triggerThreshold}</div>
                            </div>
                            <div>
                              <span className="text-slate-400">Current Level:</span>
                              <div className="font-mono text-emerald-400 font-bold">{item.kriDetails.currentLevel}</div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-rose-500/20 text-[11px]">
                            <strong className="text-rose-300">Mitigation Action Plan:</strong>
                            <p className="text-slate-300 mt-0.5">{item.kriDetails.mitigationPlan}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="text-slate-400 text-[11px]">
                        Owner: <strong className="text-slate-200">{item.ownerRole}</strong>
                      </div>
                      <button
                        onClick={() => setInspectingMetric(item)}
                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                      >
                        Inspect Governance <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: FRAMEWORK COMPARISON MATRIX */}
      {/* ========================================================================= */}
      {activeTab === 'comparison' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Side-by-Side Framework Comparison Matrix</h2>
                <p className="text-xs text-slate-400">Deep-dive structural comparison between OKRs, KPIs, KRAs, and KRIs.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-300">
                    <th className="p-3.5 font-bold uppercase tracking-wider">Framework</th>
                    <th className="p-3.5 font-bold uppercase tracking-wider">Core Strategic Purpose</th>
                    <th className="p-3.5 font-bold uppercase tracking-wider">Time Horizon</th>
                    <th className="p-3.5 font-bold uppercase tracking-wider">Review Frequency</th>
                    <th className="p-3.5 font-bold uppercase tracking-wider">Primary Owner</th>
                    <th className="p-3.5 font-bold uppercase tracking-wider">Common Failure Mode / Anti-Pattern</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {FRAMEWORK_COMPARISON_MATRIX.map((row) => (
                    <tr key={row.category} className="hover:bg-slate-900/60 transition-colors">
                      <td className="p-3.5 font-bold align-top">
                        <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-black uppercase border ${getCategoryBadgeClass(row.category)}`}>
                          {row.category}
                        </span>
                        <div className="text-[11px] text-slate-400 font-normal mt-1">{row.fullName}</div>
                      </td>
                      <td className="p-3.5 align-top leading-relaxed text-slate-200">{row.corePurpose}</td>
                      <td className="p-3.5 align-top text-slate-300 font-medium">{row.timeHorizon}</td>
                      <td className="p-3.5 align-top text-slate-300 font-medium">{row.reviewFrequency}</td>
                      <td className="p-3.5 align-top text-cyan-300 font-semibold">{row.primaryOwner}</td>
                      <td className="p-3.5 align-top text-rose-300 text-[11px] leading-relaxed bg-rose-950/10 rounded-lg">
                        {row.commonFailureMode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: HISTORY & EVOLUTION TIMELINE */}
      {/* ========================================================================= */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Historical Evolution of Goal & Performance Systems</h2>
                <p className="text-xs text-slate-400">From Drucker's MBOs in 1954 to 2026 AI-Augmented Vibe Telemetry.</p>
              </div>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-8 py-2">
              {METRIC_HISTORY_TIMELINE.map((node, index) => (
                <div key={index} className="relative pl-6 md:pl-8 group">
                  {/* Circle dot on line */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 font-bold text-xs shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all bg-slate-900/60">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                        {node.badge} • {node.year}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">Pioneer: <strong className="text-slate-200">{node.pioneer}</strong></span>
                    </div>

                    <h3 className="text-lg font-bold text-white mt-1">{node.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{node.summary}</p>

                    <div className="mt-3 p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-amber-200/90 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong>Key Innovation:</strong> {node.keyInnovation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: GOVERNANCE & REVIEW CADENCES */}
      {/* ========================================================================= */}
      {activeTab === 'governance' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Governance Architecture & Review Cadence Map</h2>
                <p className="text-xs text-slate-400">Structured event rhythm connecting daily team Standups to Quarterly Business Reviews (QBR).</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GOVERNANCE_RITUALS.map((ritual, idx) => (
                <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                        {ritual.cadence}
                      </span>
                      <div className="flex gap-1">
                        {ritual.metricsReviewed.map(m => (
                          <span key={m} className={`px-1.5 py-0.5 text-[10px] font-black rounded border ${getCategoryBadgeClass(m)}`}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white">{ritual.eventTitle}</h3>

                    <div className="mt-3 text-xs text-slate-300">
                      <strong className="text-slate-400 block text-[11px] uppercase font-bold mb-1">Key Agenda Items:</strong>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                        {ritual.keyAgendaItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-xs">
                    <div className="text-slate-400 text-[11px] mb-1">Primary Participating Roles:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {ritual.primaryRoles.map(r => (
                        <span key={r} className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] border border-slate-800">
                          {r}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 p-2 rounded-lg bg-emerald-950/20 text-emerald-300 text-[11px] border border-emerald-500/20 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><strong>Key Output:</strong> {ritual.outputsAndArtifacts}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: OKR TREE SIMULATOR & AI GENERATOR */}
      {/* ========================================================================= */}
      {activeTab === 'simulator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Form: Create Custom OKR */}
          <div className="lg:col-span-1 glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Vibe Metric Generator</h2>
            </div>
            <p className="text-xs text-slate-400">Craft custom OKRs, KPIs, KRAs, or KRIs and add them instantly to your workstation telemetry database.</p>

            {showAddSuccess && (
              <div className="p-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 rounded-xl text-xs flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Custom Metric successfully injected into live database!</span>
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
                  <label className="block text-slate-400 font-semibold mb-1">Target Numeric Value</label>
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

          {/* Right Live OKR Tree & Interactive Telemetry */}
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
                onClick={() => setMetricsList(INITIAL_METRICS_DATABASE)}
                className="px-3 py-1.5 bg-slate-900 text-slate-400 hover:text-white rounded-lg text-xs border border-slate-800 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Database
              </button>
            </div>

            <div className="space-y-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              {metricsList.filter(m => m.category === 'OKR').slice(0, 3).map((okr, idx) => (
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
      )}

      {/* ========================================================================= */}
      {/* GOVERNANCE INSPECTION MODAL */}
      {/* ========================================================================= */}
      {inspectingMetric && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-2xl p-6 rounded-2xl border border-slate-800 shadow-2xl relative space-y-4">
            <button
              onClick={() => setInspectingMetric(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase border ${getCategoryBadgeClass(inspectingMetric.category)}`}>
                {inspectingMetric.category}
              </span>
              <span className="text-xs text-slate-400">Governance Breakdown</span>
            </div>

            <h2 className="text-xl font-bold text-white">{inspectingMetric.title}</h2>
            <p className="text-xs text-slate-300 leading-relaxed">{inspectingMetric.summary}</p>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <div>
                <strong className="text-cyan-400 block font-bold mb-0.5">Why This Metric Matters to the Enterprise:</strong>
                <p className="text-slate-300">{inspectingMetric.whyItMatters}</p>
              </div>

              <div className="pt-2 border-t border-slate-900">
                <strong className="text-rose-400 block font-bold mb-0.5">Anti-Pattern / Common Pitfall to Avoid:</strong>
                <p className="text-rose-200/90">{inspectingMetric.antiPatternToAvoid}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Accountable Owner</span>
                <span className="text-white font-bold mt-1 block">{inspectingMetric.ownerRole}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Review Event Cadence</span>
                <span className="text-emerald-400 font-bold mt-1 block">{inspectingMetric.governanceCadence}</span>
              </div>
            </div>

            <div className="pt-3 flex justify-end">
              <button
                onClick={() => setInspectingMetric(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsHub;
