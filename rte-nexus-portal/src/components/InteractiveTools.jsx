import React, { useState } from 'react';
import { PI_READINESS_CHECKLIST, METRIC_CAPTURE_TEMPLATES, DORA_DEEP_DIVE_GUIDE, SAFE_METRICS_MASTERCLASS_DATA } from '../data/rteData';
import { 
  Wrench, 
  ShieldAlert, 
  CheckSquare, 
  BarChart3, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Sparkles,
  Activity,
  Gauge,
  FileSpreadsheet,
  BookOpen,
  Calculator,
  Database
} from 'lucide-react';

export default function InteractiveTools() {
  const [activeTool, setActiveTool] = useState('raid'); // Set default to RAID Log Manager so user sees it instantly

  // ==========================================
  // 1. RAID LOG MANAGER STATE (FULL & PROMINENT)
  // ==========================================
  const [raidTypeFilter, setRaidTypeFilter] = useState('All');
  const [raidItems, setRaidItems] = useState([
    { id: 1, type: 'Risk', text: 'Legacy Payment Gateway API documentation missing', owner: 'Dave (Arch)', status: 'Active', severity: 'High' },
    { id: 2, type: 'Dependency', text: 'Team Alpha waiting on Team Beta API endpoint v2.0', owner: 'Team Beta', status: 'Active', severity: 'High' },
    { id: 3, type: 'Issue', text: 'Staging Database server crashed during regression build', owner: 'DevOps Ops', status: 'Active', severity: 'Critical' },
    { id: 4, type: 'Assumption', text: 'Third-party OAuth provider maintains 99.9% uptime during Q3', owner: 'Product Mgmt', status: 'Closed', severity: 'Medium' },
    { id: 5, type: 'Risk', text: 'Security audit finding on JWT token refresh handling', owner: 'Sec Lead', status: 'Active', severity: 'High' }
  ]);
  const [newRaidType, setNewRaidType] = useState('Risk');
  const [newRaidText, setNewRaidText] = useState('');
  const [newRaidOwner, setNewRaidOwner] = useState('');
  const [newRaidSeverity, setNewRaidSeverity] = useState('High');
  const [copiedRaid, setCopiedRaid] = useState(false);

  const handleAddRaid = (e) => {
    e.preventDefault();
    if (!newRaidText.trim()) return;
    setRaidItems([
      ...raidItems,
      { id: Date.now(), type: newRaidType, text: newRaidText, owner: newRaidOwner || 'Unassigned', status: 'Active', severity: newRaidSeverity }
    ]);
    setNewRaidText('');
    setNewRaidOwner('');
  };

  const handleToggleRaidStatus = (id) => {
    setRaidItems(raidItems.map(item => item.id === id ? { ...item, status: item.status === 'Active' ? 'Closed' : 'Active' } : item));
  };

  const handleDeleteRaid = (id) => setRaidItems(raidItems.filter(item => item.id !== id));

  const handleExportRaid = () => {
    const report = `# RTE RAID LOG (RISKS, ASSUMPTIONS, ISSUES, DEPENDENCIES)\nDate: ${new Date().toLocaleDateString()}\n\n## RISKS (${raidItems.filter(r => r.type === 'Risk').length})\n${raidItems.filter(r => r.type === 'Risk').map(r => `- [${r.status}] ${r.text} (Owner: ${r.owner}, Severity: ${r.severity})`).join('\n') || '- None'}\n\n## ASSUMPTIONS (${raidItems.filter(r => r.type === 'Assumption').length})\n${raidItems.filter(r => r.type === 'Assumption').map(r => `- [${r.status}] ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## ISSUES (${raidItems.filter(r => r.type === 'Issue').length})\n${raidItems.filter(r => r.type === 'Issue').map(r => `- [${r.status}] ${r.text} (Owner: ${r.owner}, Severity: ${r.severity})`).join('\n') || '- None'}\n\n## DEPENDENCIES (${raidItems.filter(r => r.type === 'Dependency').length})\n${raidItems.filter(r => r.type === 'Dependency').map(r => `- [${r.status}] ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n`;
    navigator.clipboard.writeText(report);
    setCopiedRaid(true);
    setTimeout(() => setCopiedRaid(false), 2500);
  };

  // ==========================================
  // 2. CAPTURE TEMPLATE STUDIO STATE
  // ==========================================
  const [selectedTemplateKey, setSelectedTemplateKey] = useState('doraCompleteMasterclass');
  const [metricArtName, setMetricArtName] = useState('Titan Value Stream');
  const [metricPiName, setMetricPiName] = useState('PI-2026.3');
  const [generatedMetricTemplate, setGeneratedMetricTemplate] = useState('');
  const [copiedMetricTemplate, setCopiedMetricTemplate] = useState(false);

  const handleGenerateMetricTemplate = () => {
    let raw = METRIC_CAPTURE_TEMPLATES[selectedTemplateKey] || METRIC_CAPTURE_TEMPLATES.doraCompleteMasterclass;
    const filled = raw
      .replace(/{ART_NAME}/g, metricArtName)
      .replace(/{PI_NAME}/g, metricPiName)
      .replace(/{ITERATION_NUM}/g, '2')
      .replace(/{DATE}/g, new Date().toLocaleDateString())
      .replace(/{PREDICTABILITY_PCT}/g, '91.5')
      .replace(/{FLOW_EFFICIENCY}/g, '33.3')
      .replace(/{FLOW_VELOCITY}/g, '48')
      .replace(/{FLOW_LOAD}/g, '32')
      .replace(/{DEPLOY_FREQ}/g, 'Daily (2.4 deploys/day)')
      .replace(/{LEAD_TIME_HRS}/g, '18')
      .replace(/{CHANGE_FAIL_PCT}/g, '4.2')
      .replace(/{MTTR_MINS}/g, '35');

    setGeneratedMetricTemplate(filled);
  };

  // ==========================================
  // 3. ROAM BOARD STATE
  // ==========================================
  const [risks, setRisks] = useState([
    { id: 1, text: 'Legacy Payment Gateway API documentation missing', owner: 'Dave (Arch)', status: 'Owned' },
    { id: 2, text: 'Cloud sandbox environment refresh delayed by 3 days', owner: 'Ops Team', status: 'Mitigated' },
    { id: 3, text: 'Third-party vendor SLA risk for Q3 release', owner: 'VP Tech', status: 'Accepted' },
    { id: 4, text: 'Database migration script verified in Staging', owner: 'Team Alpha', status: 'Resolved' },
    { id: 5, text: 'Cross-ART dependency on Core Identity SSO Service', owner: 'RTE Identity', status: 'Owned' }
  ]);
  const [newRiskText, setNewRiskText] = useState('');
  const [newRiskOwner, setNewRiskOwner] = useState('');
  const [newRiskStatus, setNewRiskStatus] = useState('Owned');
  const [copiedRoam, setCopiedRoam] = useState(false);

  const handleAddRisk = (e) => {
    e.preventDefault();
    if (!newRiskText.trim()) return;
    setRisks([...risks, { id: Date.now(), text: newRiskText, owner: newRiskOwner || 'Unassigned', status: newRiskStatus }]);
    setNewRiskText('');
    setNewRiskOwner('');
  };
  const handleMoveRisk = (id, newStatus) => setRisks(risks.map(r => r.id === id ? { ...r, status: newStatus } : r));
  const handleDeleteRisk = (id) => setRisks(risks.filter(r => r.id !== id));

  const handleExportRoamReport = () => {
    const report = `# PI PLANNING ROAM RISK BOARD REPORT\nDate: ${new Date().toLocaleDateString()}\n\n## RESOLVED (${risks.filter(r => r.status === 'Resolved').length})\n${risks.filter(r => r.status === 'Resolved').map(r => `- ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## OWNED (${risks.filter(r => r.status === 'Owned').length})\n${risks.filter(r => r.status === 'Owned').map(r => `- ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## ACCEPTED (${risks.filter(r => r.status === 'Accepted').length})\n${risks.filter(r => r.status === 'Accepted').map(r => `- ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## MITIGATED (${risks.filter(r => r.status === 'Mitigated').length})\n${risks.filter(r => r.status === 'Mitigated').map(r => `- ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n`;
    navigator.clipboard.writeText(report);
    setCopiedRoam(true);
    setTimeout(() => setCopiedRoam(false), 2500);
  };

  // READINESS INSPECTOR
  const [readinessChecklist, setReadinessChecklist] = useState(PI_READINESS_CHECKLIST);
  const toggleChecklist = (id) => setReadinessChecklist(readinessChecklist.map(item => item.id === id ? { ...item, status: !item.status } : item));
  const completedCount = readinessChecklist.filter(c => c.status).length;
  const readinessPct = Math.round((completedCount / readinessChecklist.length) * 100);

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header Tool Switcher - ALL 6 POWER TOOLS EXPLICIT */}
      <div className="glass-panel p-6 rounded-3xl border border-sapphire-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center space-x-2">
            <Wrench className="w-6 h-6 text-sapphire-400" />
            <span>Interactive RTE <span className="text-gradient">Power Tools</span></span>
          </h1>
          <p className="text-xs text-slate-400">RAID Log Manager, SAFe Flow Masterclass, DORA Masterclass, 6-Template Studio & ROAM Board.</p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTool('raid')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'raid' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            🛡️ RAID Log Manager
          </button>
          <button
            onClick={() => setActiveTool('safe-metrics-masterclass')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'safe-metrics-masterclass' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            📊 SAFe Flow Masterclass
          </button>
          <button
            onClick={() => setActiveTool('dora-masterclass')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'dora-masterclass' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            🔥 DORA Masterclass
          </button>
          <button
            onClick={() => setActiveTool('metric-templates')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'metric-templates' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            📋 Capture Template Studio (6)
          </button>
          <button
            onClick={() => setActiveTool('roam')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'roam' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            📌 ROAM Board
          </button>
          <button
            onClick={() => setActiveTool('readiness')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'readiness' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Readiness Inspector
          </button>
        </div>
      </div>

      {/* TOOL 1: RAID LOG MANAGER (100% UN-TRUNCATED FULL UI) */}
      {activeTool === 'raid' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Governance Tracker</span>
                <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                  <span>RAID Log (Risks, Assumptions, Issues, Dependencies)</span>
                </h2>
              </div>

              <button
                onClick={handleExportRaid}
                className="px-4 py-2.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-bold flex items-center space-x-2 shadow-glow-sapphire"
              >
                {copiedRaid ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedRaid ? 'RAID Report Copied!' : 'Export RAID Report'}</span>
              </button>
            </div>

            {/* Add RAID Item Form */}
            <form onSubmit={handleAddRaid} className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <select
                value={newRaidType}
                onChange={(e) => setNewRaidType(e.target.value)}
                className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white font-bold"
              >
                <option value="Risk">Risk</option>
                <option value="Assumption">Assumption</option>
                <option value="Issue">Issue</option>
                <option value="Dependency">Dependency</option>
              </select>

              <input
                type="text"
                placeholder="Description of RAID item..."
                value={newRaidText}
                onChange={(e) => setNewRaidText(e.target.value)}
                className="md:col-span-2 bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sapphire-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Owner (e.g. System Arch)"
                value={newRaidOwner}
                onChange={(e) => setNewRaidOwner(e.target.value)}
                className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sapphire-400 focus:outline-none"
              />

              <button
                type="submit"
                className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1 shadow-glow-emerald"
              >
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            </form>

            <div className="flex items-center space-x-2 pt-2">
              <span className="text-xs text-slate-400 font-bold">Filter By Type:</span>
              {['All', 'Risk', 'Assumption', 'Issue', 'Dependency'].map((type) => (
                <button
                  key={type}
                  onClick={() => setRaidTypeFilter(type)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    raidTypeFilter === type ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {raidItems
              .filter(item => raidTypeFilter === 'All' || item.type === raidTypeFilter)
              .map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-navy-900 border border-slate-800 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        item.type === 'Risk' ? 'bg-rose-500/20 text-rose-300' :
                        item.type === 'Issue' ? 'bg-amber-500/20 text-amber-300' :
                        item.type === 'Dependency' ? 'bg-sky-500/20 text-sky-300' : 'bg-indigo-500/20 text-indigo-300'
                      }`}>
                        {item.type}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        item.status === 'Active' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-white font-medium">{item.text}</p>
                    <span className="text-[11px] text-slate-400 block">Owner: <strong className="text-slate-300">{item.owner}</strong></span>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <button
                      onClick={() => handleToggleRaidStatus(item.id)}
                      className="px-3 py-1.5 rounded-xl bg-navy-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Toggle Status ({item.status})
                    </button>
                    <button onClick={() => handleDeleteRaid(item.id)} className="p-2 text-slate-500 hover:text-rose-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TOOL 2: SAFE FLOW METRICS MASTERCLASS */}
      {activeTool === 'safe-metrics-masterclass' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-sapphire-400" />
              <span>SAFe Metric Diagnostic Blueprint</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-white">
              SAFe Flow & Performance Metrics <span className="text-gradient">Field Masterclass</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
              Complete operational breakdown of SAFe Flow Efficiency, ART Predictability Index, Defect Leakage, Microservice API Decoupling, and Work Item Age (WIA). Structured on the DORA Masterclass model with definitions, tooling sources, exact formulas, benchmarks, and RTE coaching playbooks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {SAFE_METRICS_MASTERCLASS_DATA.map((metric) => (
              <div key={metric.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 bg-navy-900/90">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-heading font-bold text-white flex items-center space-x-3">
                    <Gauge className="w-5 h-5 text-sapphire-400" />
                    <span>{metric.name}</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold border border-sapphire-500/30 bg-sapphire-500/10 text-sapphire-300">
                    {metric.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                      <span className="font-bold text-sapphire-400 block uppercase tracking-wider text-[10px]">What it Means & Definition</span>
                      <p className="text-slate-200 leading-relaxed">{metric.meaning}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                      <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[10px]">Why it Matters for the ART</span>
                      <p className="text-slate-300 leading-relaxed">{metric.whyItMatters}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                      <span className="font-bold text-indigo-400 block uppercase tracking-wider text-[10px] flex items-center space-x-1">
                        <Database className="w-3.5 h-3.5" />
                        <span>Where the RTE Captures This Data (Source Tools)</span>
                      </span>
                      <p className="text-slate-200 font-medium leading-relaxed">{metric.sources}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-navy-950 border border-sapphire-500/30 space-y-2">
                      <span className="font-bold text-sapphire-300 block uppercase tracking-wider text-[10px] flex items-center space-x-1">
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Exact Mathematical Formula & Calculation</span>
                      </span>
                      <code className="block p-3 rounded-xl bg-navy-900 text-sky-300 font-mono text-[11px] border border-slate-800">
                        {metric.formula}
                      </code>
                      <p className="text-[11px] text-slate-400 italic">Example: {metric.example}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-2">
                      <span className="font-bold text-amber-400 block uppercase tracking-wider text-[10px]">ART Target Tier Benchmarks</span>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30">
                          <strong className="text-emerald-300 block">World Class / Gold:</strong>
                          <span className="text-slate-300">{metric.benchmarks.elite}</span>
                        </div>
                        <div className="p-2 rounded bg-sky-950/40 border border-sky-500/30">
                          <strong className="text-sky-300 block">High Flow Target:</strong>
                          <span className="text-slate-300">{metric.benchmarks.high}</span>
                        </div>
                        <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
                          <strong className="text-amber-300 block">Industry Average:</strong>
                          <span className="text-slate-300">{metric.benchmarks.medium}</span>
                        </div>
                        <div className="p-2 rounded bg-rose-950/40 border border-rose-500/30">
                          <strong className="text-rose-300 block">High Execution Risk:</strong>
                          <span className="text-slate-300">{metric.benchmarks.low}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-sapphire-950/60 to-navy-950 border border-sapphire-500/30 space-y-1">
                  <span className="font-bold text-sapphire-300 text-xs flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-sapphire-400" />
                    <span>RTE Data-Driven Coaching Playbook</span>
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">{metric.rtePlaybook}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TOOL 3: DORA MASTERCLASS */}
      {activeTool === 'dora-masterclass' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>DORA Metrics Field Guide for RTEs</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-white">
              Complete DORA Metrics Masterclass & <span className="text-gradient">Data Capture Blueprint</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
              DevOps Research and Assessment (DORA) metrics are the gold standard for measuring engineering throughput, delivery speed, and system stability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {DORA_DEEP_DIVE_GUIDE.map((dora) => (
              <div key={dora.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 bg-navy-900/90">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-heading font-bold text-white flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-sky-400" />
                    <span>{dora.name}</span>
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${dora.badgeColor}`}>
                    {dora.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                      <span className="font-bold text-sky-400 block uppercase tracking-wider text-[10px]">What it Means & Definition</span>
                      <p className="text-slate-200 leading-relaxed">{dora.meaning}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                      <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[10px]">Why it Matters for the ART</span>
                      <p className="text-slate-300 leading-relaxed">{dora.whyItMatters}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                      <span className="font-bold text-indigo-400 block uppercase tracking-wider text-[10px] flex items-center space-x-1">
                        <Database className="w-3.5 h-3.5" />
                        <span>Where the RTE Captures This Data (Source Tools)</span>
                      </span>
                      <p className="text-slate-200 font-medium leading-relaxed">{dora.sources}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-navy-950 border border-sapphire-500/30 space-y-2">
                      <span className="font-bold text-sapphire-300 block uppercase tracking-wider text-[10px] flex items-center space-x-1">
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Exact Mathematical Formula & Calculation</span>
                      </span>
                      <code className="block p-3 rounded-xl bg-navy-900 text-sky-300 font-mono text-[11px] border border-slate-800">
                        {dora.formula}
                      </code>
                      <p className="text-[11px] text-slate-400 italic">Example: {dora.example}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-2">
                      <span className="font-bold text-amber-400 block uppercase tracking-wider text-[10px]">DORA Performance Tier Benchmarks</span>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30">
                          <strong className="text-emerald-300 block">Elite Tier:</strong>
                          <span className="text-slate-300">{dora.benchmarks.elite}</span>
                        </div>
                        <div className="p-2 rounded bg-sky-950/40 border border-sky-500/30">
                          <strong className="text-sky-300 block">High Tier:</strong>
                          <span className="text-slate-300">{dora.benchmarks.high}</span>
                        </div>
                        <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
                          <strong className="text-amber-300 block">Medium Tier:</strong>
                          <span className="text-slate-300">{dora.benchmarks.medium}</span>
                        </div>
                        <div className="p-2 rounded bg-rose-950/40 border border-rose-500/30">
                          <strong className="text-rose-300 block">Low Tier:</strong>
                          <span className="text-slate-300">{dora.benchmarks.low}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-sapphire-950/60 to-navy-950 border border-sapphire-500/30 space-y-1">
                  <span className="font-bold text-sapphire-300 text-xs flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-sapphire-400" />
                    <span>RTE Data-Driven Coaching Playbook</span>
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">{dora.rtePlaybook}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TOOL 4: CAPTURE TEMPLATE STUDIO (ALL 6 TEMPLATES READY & EXPANDED) */}
      {activeTool === 'metric-templates' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Executable Telemetry Log Sheets</span>
              <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                <span>Metric Capture Template Studio (6 Templates)</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTemplateKey('doraCompleteMasterclass')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'doraCompleteMasterclass' ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  🔥 Complete DORA Telemetry Sheet
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('safeFlowTelemetry')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'safeFlowTelemetry' ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  📊 SAFe Flow Telemetry Sheet
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('weeklyTeamFlow')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'weeklyTeamFlow' ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  📅 Weekly Team Velocity Log
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('quarterlyPiTelemetry')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'quarterlyPiTelemetry' ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  📊 Quarterly PI Executive Deck
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('archNfrLog')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'archNfrLog' ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  📐 Arch & NFR Log
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('piObjectivesScoring')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'piObjectivesScoring' ? 'bg-sapphire-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  🏆 Business PI Objectives Scoring
                </button>
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">ART Name</label>
                <input
                  type="text"
                  value={metricArtName}
                  onChange={(e) => setMetricArtName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">PI Target</label>
                <input
                  type="text"
                  value={metricPiName}
                  onChange={(e) => setMetricPiName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <button
                onClick={handleGenerateMetricTemplate}
                className="w-full py-3.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-bold flex items-center justify-center space-x-2 shadow-glow-sapphire transition-all"
              >
                <Copy className="w-4 h-4" />
                <span>Synthesize Metric Capture Log</span>
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Markdown Data Sheet Output</span>
                {generatedMetricTemplate && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedMetricTemplate);
                      setCopiedMetricTemplate(true);
                      setTimeout(() => setCopiedMetricTemplate(false), 2500);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-semibold"
                  >
                    {copiedMetricTemplate ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMetricTemplate ? 'Copied Log!' : 'Copy Markdown'}</span>
                  </button>
                )}
              </div>

              {generatedMetricTemplate ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedMetricTemplate}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <FileSpreadsheet className="w-10 h-10 text-slate-700" />
                  <p className="text-xs">Select a template above and click <strong>"Synthesize Metric Capture Log"</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TOOL 5: FULL INTERACTIVE ROAM BOARD */}
      {activeTool === 'roam' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">PI Planning Risk Engine</span>
                <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                  <span>Interactive ROAM Risk Board</span>
                </h2>
              </div>

              <button
                onClick={handleExportRoamReport}
                className="px-4 py-2.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-bold flex items-center space-x-2 shadow-glow-sapphire"
              >
                {copiedRoam ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedRoam ? 'ROAM Report Copied!' : 'Export ROAM Report'}</span>
              </button>
            </div>

            <form onSubmit={handleAddRisk} className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Enter risk description..."
                value={newRiskText}
                onChange={(e) => setNewRiskText(e.target.value)}
                className="md:col-span-2 bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sapphire-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Risk Owner (e.g. System Arch)"
                value={newRiskOwner}
                onChange={(e) => setNewRiskOwner(e.target.value)}
                className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sapphire-400 focus:outline-none"
              />
              <div className="flex space-x-2">
                <select
                  value={newRiskStatus}
                  onChange={(e) => setNewRiskStatus(e.target.value)}
                  className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sapphire-400 focus:outline-none flex-1 font-bold"
                >
                  <option value="Owned">Owned</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Mitigated">Mitigated</option>
                </select>
                <button type="submit" className="px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Resolved', 'Owned', 'Accepted', 'Mitigated'].map((colStatus) => {
              const colRisks = risks.filter(r => r.status === colStatus);
              return (
                <div key={colStatus} className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold border border-slate-700 bg-navy-950 text-slate-300 block text-center">
                    {colStatus} ({colRisks.length})
                  </span>
                  <div className="space-y-3 min-h-[200px]">
                    {colRisks.map((r) => (
                      <div key={r.id} className="p-4 rounded-2xl bg-navy-900 border border-slate-800 space-y-2">
                        <p className="text-xs text-white">{r.text}</p>
                        <span className="text-[10px] text-slate-400 block">Owner: {r.owner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TOOL 6: READINESS INSPECTOR */}
      {activeTool === 'readiness' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="flex justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white">PI Planning Readiness Inspector</h2>
            <span className="text-xl font-bold text-emerald-400">{readinessPct}% Ready</span>
          </div>

          <div className="space-y-3">
            {readinessChecklist.map((item) => (
              <div key={item.id} onClick={() => toggleChecklist(item.id)} className="p-4 rounded-2xl border cursor-pointer flex items-start space-x-4 bg-navy-900 border-slate-800">
                <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${item.status ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-slate-700 bg-navy-950'}`}>
                  {item.status && <Check className="w-3.5 h-3.5" />}
                </div>
                <p className="text-xs font-medium text-slate-200">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
