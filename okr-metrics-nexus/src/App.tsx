import React, { useState, useMemo, useEffect } from 'react';
import type { EnterpriseRole, MetricCategory, MetricItem } from './types/metrics';
import { INITIAL_METRICS_DATABASE } from './data/metricsData';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RoleSelector } from './components/metrics/RoleSelector';
import { MetricsCardGrid } from './components/metrics/MetricsCardGrid';
import { ComparisonMatrix } from './components/matrix/ComparisonMatrix';
import { HistoryTimeline } from './components/history/HistoryTimeline';
import { GovernanceCadences } from './components/governance/GovernanceCadences';
import { OKRTreeSimulator } from './components/simulator/OKRTreeSimulator';
import { ModalInspector } from './components/common/ModalInspector';
import { ConceptDeepDive } from './components/concepts/ConceptDeepDive';
import { PBWMCaseStudy } from './components/casestudy/PBWMCaseStudy';
import { Future2027Metrics } from './components/future2027/Future2027Metrics';
import { AIChatAssistant } from './components/chat/AIChatAssistant';
import { Sparkles, BarChart2, Filter, AlertCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<EnterpriseRole | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<MetricCategory | 'all'>('all');
  const [activeView, setActiveView] = useState<'foundations' | 'casestudy' | 'future2027' | 'explorer' | 'matrix' | 'timeline' | 'governance' | 'simulator'>('foundations');
  const [searchQuery, setSearchQuery] = useState('');
  const [metricsList, setMetricsList] = useState<MetricItem[]>(INITIAL_METRICS_DATABASE);
  const [inspectingMetric, setInspectingMetric] = useState<MetricItem | null>(null);

  // Dynamic Browser Tab Title Update
  useEffect(() => {
    switch (activeView) {
      case 'foundations':
        document.title = 'Foundations & 101/201 | Enterprise Metrics Nexus';
        break;
      case 'casestudy':
        document.title = 'PBWM Banking Case Study | Enterprise Metrics Nexus';
        break;
      case 'future2027':
        document.title = '2027 AI Future Telemetry | Enterprise Metrics Nexus';
        break;
      case 'explorer':
        document.title = 'Role Metrics Explorer | Enterprise Metrics Nexus';
        break;
      case 'matrix':
        document.title = 'Comparison Matrix | Enterprise Metrics Nexus';
        break;
      case 'timeline':
        document.title = 'History Timeline | Enterprise Metrics Nexus';
        break;
      case 'governance':
        document.title = 'Governance Command Center | Enterprise Metrics Nexus';
        break;
      case 'simulator':
        document.title = 'OKR Tree Simulator | Enterprise Metrics Nexus';
        break;
      default:
        document.title = 'Enterprise Metrics Nexus | OKRs, KPIs, KRAs & KRIs';
    }
  }, [activeView]);

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

  const handleAddCustomMetric = (newMetric: MetricItem) => {
    setMetricsList(prev => [newMetric, ...prev]);
  };

  const handleResetDatabase = () => {
    setMetricsList(INITIAL_METRICS_DATABASE);
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        selectedRole={selectedRole}
        onRoleSelect={setSelectedRole}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 pt-6 space-y-8">
        
        {/* Main Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-purple-950 p-6 md:p-8 border border-indigo-500/30 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Dedicated Enterprise Portal
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                OKRs, KPIs, KRAs & KRIs <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Nexus</span>
              </h1>
              <p className="mt-2 text-slate-300 text-sm max-w-3xl leading-relaxed">
                Dedicated 360° metric perspectives across <strong className="text-cyan-300">8 enterprise roles</strong>. Master foundational concepts, historical evolution (1954-2026), governance cadences, live concrete examples, and interactive simulators.
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
        </div>

        {/* VIEW 0: FOUNDATIONS & 101/201 BASICS */}
        {activeView === 'foundations' && <ConceptDeepDive />}

        {/* VIEW: PBWM BANKING CASE STUDY */}
        {activeView === 'casestudy' && <PBWMCaseStudy />}

        {/* VIEW: 2027 AI FUTURE METRICS */}
        {activeView === 'future2027' && <Future2027Metrics />}

        {/* VIEW 1: ROLE EXPLORER */}
        {activeView === 'explorer' && (
          <div className="space-y-6">
            {/* 8-Role Selector */}
            <RoleSelector
              selectedRole={selectedRole}
              onRoleSelect={setSelectedRole}
            />

            {/* Category Filter Pills */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span>Showing {filteredMetrics.length} Metrics ({selectedRole === 'all' ? 'All Roles' : selectedRole.toUpperCase()})</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
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

            {/* Metrics Card Grid */}
            {filteredMetrics.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800">
                <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-300">No Metrics Found</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting your search query or role filters.</p>
                <button
                  onClick={() => { setSelectedRole('all'); setSelectedCategory('all'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 bg-slate-800 text-cyan-400 text-xs font-semibold rounded-lg hover:bg-slate-700"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <MetricsCardGrid
                metrics={filteredMetrics}
                onInspect={setInspectingMetric}
                onUpdateKr={handleUpdateKeyResultCurrent}
              />
            )}
          </div>
        )}

        {/* VIEW 2: COMPARISON MATRIX */}
        {activeView === 'matrix' && <ComparisonMatrix />}

        {/* VIEW 3: HISTORY TIMELINE */}
        {activeView === 'timeline' && <HistoryTimeline />}

        {/* VIEW 4: GOVERNANCE CADENCES */}
        {activeView === 'governance' && <GovernanceCadences />}

        {/* VIEW 5: OKR TREE SIMULATOR */}
        {activeView === 'simulator' && (
          <OKRTreeSimulator
            metrics={metricsList}
            onAddMetric={handleAddCustomMetric}
            onResetDatabase={handleResetDatabase}
          />
        )}
      </main>

      {/* Modal Inspector */}
      <ModalInspector
        metric={inspectingMetric}
        onClose={() => setInspectingMetric(null)}
      />

      {/* Global Live AI Assistant Chatbot Widget */}
      <AIChatAssistant />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
