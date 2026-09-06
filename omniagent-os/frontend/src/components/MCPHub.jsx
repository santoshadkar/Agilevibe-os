import React from 'react';
import { Plug, Terminal, ShieldAlert, CheckCircle2, Server, Cpu } from 'lucide-react';

export default function MCPHub({ servers = [], tools = [] }) {
  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Plug className="w-5 h-5 text-indigo-400" /> Model Context Protocol (MCP) Server Hub
          </h2>
          <p className="text-xs text-slate-400 font-mono">Standardized client connector for system, filesystem, and external search tools</p>
        </div>
        <div className="badge badge-emerald flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{servers.length} MCP Servers Connected</span>
        </div>
      </div>

      {/* Servers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {servers.map((server) => (
          <div key={server.id} className="glass-card p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" />
                <h3 className="font-semibold text-sm text-slate-200">{server.name}</h3>
              </div>
              <span className="badge badge-indigo text-[10px] uppercase font-mono">{server.transport}</span>
            </div>

            <div className="text-xs text-slate-400 font-mono space-y-1">
              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-emerald-400 font-bold">{server.status.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>Tools Count</span>
                <span className="text-slate-200">{server.tools.length} Registered</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Catalog Table */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Discovered Tool Definitions ({tools.length})</h3>
        <div className="overflow-x-auto rounded-xl border border-white/10 glass-card">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-white/10">
              <tr>
                <th className="p-3">Tool Name</th>
                <th className="p-3">Server</th>
                <th className="p-3">Description</th>
                <th className="p-3">HITL Safety Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {tools.map((t, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-all">
                  <td className="p-3 font-mono font-semibold text-indigo-300 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    {t.name}
                  </td>
                  <td className="p-3 font-mono text-slate-400">{t.server_name}</td>
                  <td className="p-3 text-slate-300 max-w-xs">{t.description}</td>
                  <td className="p-3 font-mono">
                    {t.requires_approval ? (
                      <span className="badge badge-amber flex items-center gap-1 w-fit">
                        <ShieldAlert className="w-3 h-3" />
                        Requires HITL ({t.risk_level?.toUpperCase()})
                      </span>
                    ) : (
                      <span className="badge badge-emerald w-fit">Direct Execution (Safe)</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
