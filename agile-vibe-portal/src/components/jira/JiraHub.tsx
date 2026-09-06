import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  BarChart,
  Bar
} from 'recharts';
import { 
  Share2, 
  RefreshCw, 
  CheckCircle2, 
  Sliders, 
  Plus, 
  Search, 
  Activity, 
  TrendingUp, 
  Zap, 
  Layers, 
  AlertTriangle,
  Server,
  Cloud
} from 'lucide-react';
import { MOCK_CFD_DATA } from '../../data/mockData';

export const JiraHub: React.FC = () => {
  const { jiraConfig, jiraIssues, updateJiraConfig, addJiraIssue } = useApp();
  const [jqlQuery, setJqlQuery] = useState(jiraConfig.jqlQuery);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // New Issue Form state
  const [newSummary, setNewSummary] = useState('');
  const [newType, setNewType] = useState<'Story' | 'Bug' | 'Task'>('Story');
  const [newPoints, setNewPoints] = useState(3);

  const filteredIssues = jiraIssues.filter(i => {
    if (statusFilter === 'all') return true;
    return i.status.toLowerCase().replace(' ', '') === statusFilter;
  });

  const velocityData = [
    { sprint: 'Sprint 20', planned: 35, delivered: 34 },
    { sprint: 'Sprint 21', planned: 38, delivered: 36 },
    { sprint: 'Sprint 22', planned: 40, delivered: 38 },
    { sprint: 'Sprint 23', planned: 42, delivered: 40 },
    { sprint: 'Sprint 24', planned: 40, delivered: 38 }
  ];

  const handleSyncJira = () => {
    updateJiraConfig({ lastSyncedAt: new Date().toISOString() });
  };

  const handleCreateIssue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSummary.trim()) return;

    addJiraIssue({
      id: `issue_${Date.now()}`,
      key: `PAYMENT-${Math.floor(Math.random() * 800 + 400)}`,
      summary: newSummary,
      issueType: newType,
      status: 'To Do',
      priority: 'High',
      storyPoints: newPoints,
      assignee: {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80'
      },
      epic: 'EPIC-10: Payment Gateway Upgrade',
      created: new Date().toISOString().split('T')[0],
      cycleTimeDays: 0
    });

    setNewSummary('');
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-lg shadow-blue-500/20">
              <Share2 className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">Jira Cloud & Data Center Metrics Hub</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {jiraConfig.serverType === 'cloud' ? 'Jira Cloud Connected' : 'Jira Data Center Connected'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Real-time Flow Metrics: Velocity Predictability, CFD Bottlenecks, Cycle Time Scatterplots & Burndown Charts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSyncJira}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <RefreshCw className="w-4 h-4 text-blue-400" />
              <span>Sync Now</span>
            </button>

            <button
              onClick={() => setShowConfigModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <Sliders className="w-4 h-4 text-blue-400" />
              <span>Settings</span>
            </button>

            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Create Jira Issue</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Summary Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
          <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
            <span>Velocity Predictability</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-bold text-white">95.0%</div>
          <div className="text-[10px] text-emerald-400">38 / 40 pts delivered</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
          <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
            <span>Cycle Time 85th %</span>
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xl font-bold text-white">3.8 Days</div>
          <div className="text-[10px] text-cyan-400">SLA Benchmark</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
          <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
            <span>Active WIP Inventory</span>
            <Layers className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-xl font-bold text-white">12 Stories</div>
          <div className="text-[10px] text-purple-400">WIP limit compliance</div>
        </div>

        <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
          <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
            <span>Defect Density Ratio</span>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-xl font-bold text-white">2.1%</div>
          <div className="text-[10px] text-amber-400">Zero escaped bugs</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Velocity Trend Chart */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Velocity & Predictability Trend (Sprints 20 - 24)
              </h3>
              <p className="text-[11px] text-slate-400">Planned Story Points vs Delivered Story Points</p>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="sprint" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
                <Bar dataKey="planned" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Planned Points" />
                <Bar dataKey="delivered" fill="#10b981" radius={[4, 4, 0, 0]} name="Delivered Points" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cumulative Flow Diagram */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                Cumulative Flow Diagram (CFD)
              </h3>
              <p className="text-[11px] text-slate-400">Work In Progress distribution across workflow states</p>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CFD_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
                <Area type="monotone" dataKey="done" stackId="1" stroke="#10b981" fill="#10b981" name="Done" />
                <Area type="monotone" dataKey="inReview" stackId="1" stroke="#38bdf8" fill="#38bdf8" name="In Review" />
                <Area type="monotone" dataKey="inProgress" stackId="1" stroke="#a855f7" fill="#a855f7" name="In Progress" />
                <Area type="monotone" dataKey="todo" stackId="1" stroke="#475569" fill="#475569" name="To Do" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Live Issue Stream */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Live Jira Issue Stream & JQL Console
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Current Active Sprint Backlog synced from {jiraConfig.hostUrl}
            </p>
          </div>

          {/* JQL Search Bar */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={jqlQuery}
                onChange={(e) => setJqlQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-950 text-xs text-slate-200 rounded-xl border border-slate-800 focus:border-blue-500 focus:outline-none font-mono"
                placeholder="Enter JQL Query..."
              />
            </div>
            <div className="flex gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              {['all', 'todo', 'inprogress', 'done'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                    statusFilter === st
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Issue Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
                <th className="pb-3 px-3">Key</th>
                <th className="pb-3 px-3">Summary</th>
                <th className="pb-3 px-3">Type</th>
                <th className="pb-3 px-3">Status</th>
                <th className="pb-3 px-3">Priority</th>
                <th className="pb-3 px-3">Points</th>
                <th className="pb-3 px-3">Assignee</th>
                <th className="pb-3 px-3 text-right">Cycle Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredIssues.map((issue) => (
                <tr key={issue.id} className="hover:bg-slate-900/60 transition-colors">
                  <td className="py-3 px-3 font-bold text-blue-400 font-mono">{issue.key}</td>
                  <td className="py-3 px-3 font-semibold text-slate-200">{issue.summary}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 text-[10px] rounded font-bold uppercase ${
                      issue.issueType === 'Story' ? 'bg-emerald-500/20 text-emerald-300' :
                      issue.issueType === 'Bug' ? 'bg-rose-500/20 text-rose-300' : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {issue.issueType}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300">
                      {issue.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-300">{issue.priority}</td>
                  <td className="py-3 px-3 font-bold text-white">{issue.storyPoints} pts</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <img src={issue.assignee.avatar} alt={issue.assignee.name} className="w-5 h-5 rounded-full object-cover" />
                      <span className="text-slate-300">{issue.assignee.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-cyan-300">{issue.cycleTimeDays || 0} Days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE ISSUE MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-6 rounded-2xl border border-blue-500/40 w-full max-w-md space-y-4 animate-fadeIn">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-blue-400" />
              Create New Jira Issue
            </h3>

            <form onSubmit={handleCreateIssue} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Issue Summary</label>
                <input
                  type="text"
                  required
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="e.g. Implement Stripe Checkout 3D-Secure authentication"
                  className="w-full p-3 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Issue Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full p-3 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Story">Story</option>
                    <option value="Bug">Bug</option>
                    <option value="Task">Task</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Story Points</label>
                  <input
                    type="number"
                    min="1"
                    max="13"
                    value={newPoints}
                    onChange={(e) => setNewPoints(parseInt(e.target.value) || 1)}
                    className="w-full p-3 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/25"
                >
                  Save Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* JIRA CONFIG MODAL */}
      {showConfigModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 w-full max-w-md space-y-4 animate-fadeIn">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-blue-400" />
              Jira Server Connection Settings
            </h3>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Deployment Model</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => updateJiraConfig({ serverType: 'cloud' })}
                    className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 font-bold ${
                      jiraConfig.serverType === 'cloud'
                        ? 'bg-blue-600/30 border-blue-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Cloud className="w-4 h-4 text-blue-400" />
                    <span>Jira Cloud</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateJiraConfig({ serverType: 'data-center' })}
                    className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 font-bold ${
                      jiraConfig.serverType === 'data-center'
                        ? 'bg-blue-600/30 border-blue-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Server className="w-4 h-4 text-purple-400" />
                    <span>Data Center</span>
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Host URL</label>
                <input
                  type="text"
                  value={jiraConfig.hostUrl}
                  onChange={(e) => updateJiraConfig({ hostUrl: e.target.value })}
                  className="w-full p-3 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold block">Project Key</label>
                <input
                  type="text"
                  value={jiraConfig.projectKey}
                  onChange={(e) => updateJiraConfig({ projectKey: e.target.value })}
                  className="w-full p-3 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:border-blue-500 focus:outline-none font-mono"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold"
                >
                  Save Connection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
