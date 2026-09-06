import React, { useState } from 'react';
import { Zap, Clock, Play, RefreshCw, Send, CheckCircle2 } from 'lucide-react';

export default function WebhookCronCenter({ cronJobs = [], onToggleCron, onSendWebhook }) {
  const [webhookId, setWebhookId] = useState('github-pr-opened');
  const [payloadText, setPayloadText] = useState(JSON.stringify({ repo: 'omniagent-os', pr_id: 42, author: 'anany' }, null, 2));
  const [webhookResponse, setWebhookResponse] = useState(null);

  const handleWebhookSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = JSON.parse(payloadText);
      const res = await onSendWebhook(webhookId, payload);
      setWebhookResponse(res);
    } catch (err) {
      alert("Invalid JSON payload");
    }
  };

  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" /> Webhooks & Background Cron Loops
          </h2>
          <p className="text-xs text-slate-400 font-mono">Asynchronous external trigger ingress & scheduled agent loops</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Webhook Dispatch Laboratory */}
        <div className="glass-card p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 space-y-4">
          <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
            <Send className="w-4 h-4 text-cyan-400" /> External Webhook Dispatch Tester
          </h3>

          <form onSubmit={handleWebhookSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-mono">Webhook Endpoint ID</label>
              <input
                type="text"
                value={webhookId}
                onChange={(e) => setWebhookId(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-lg p-2.5 text-slate-100 font-mono"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-mono">JSON Event Payload</label>
              <textarea
                value={payloadText}
                onChange={(e) => setPayloadText(e.target.value)}
                rows={5}
                className="w-full bg-slate-950 border border-white/10 rounded-lg p-2.5 text-slate-100 font-mono"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" /> Trigger Asynchronous Agent Workflow
            </button>
          </form>

          {webhookResponse && (
            <div className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-xs space-y-1 font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Webhook Accepted
              </div>
              <div className="text-slate-400 text-[11px]">Spawned Thread ID: {webhookResponse.thread_id}</div>
            </div>
          )}
        </div>

        {/* Scheduled Cron Loops */}
        <div className="glass-card p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 space-y-4">
          <h3 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" /> Active Cron & Polling Loops
          </h3>

          <div className="space-y-3">
            {cronJobs.map((job) => (
              <div key={job.id} className="p-4 rounded-xl bg-slate-950/70 border border-white/10 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-xs text-slate-200">{job.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{job.description}</p>
                  </div>
                  <button
                    onClick={() => onToggleCron(job.id)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                      job.status === 'active'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 border border-white/10'
                    }`}
                  >
                    {job.status}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
                  <span>Schedule: {job.schedule}</span>
                  <span>Next: {job.next_run}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
