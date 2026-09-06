import React, { useState } from 'react';
import { X, Play, RefreshCw, CheckCircle2, Clock, Terminal, Activity } from 'lucide-react';

export function BatchMonitorModal({ isOpen, onClose, batchStatus, onTriggerManualBatch }) {
  const [isRunning, setIsRunning] = useState(false);

  if (!isOpen) return null;

  const handleRunNow = async () => {
    setIsRunning(true);
    await onTriggerManualBatch();
    setIsRunning(false);
  };

  const lastRunFormatted = batchStatus?.lastRunAt 
    ? new Date(batchStatus.lastRunAt).toLocaleString() 
    : 'Pending';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Activity color="var(--accent-emerald)" size={24} />
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800' }}>08:00 AM Batch Daemon Control Center</h2>
          </div>
          <button className="icon-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '14px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cron Schedule</div>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
              <Clock size={16} /> Everyday @ 08:00 AM
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '14px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Daemon Status</div>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
              <CheckCircle2 size={16} /> ACTIVE (0 8 * * *)
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '14px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Last Batch Run</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#fff', marginTop: '4px' }}>
              {lastRunFormatted}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Terminal size={16} /> Live Batch Execution Logs
          </span>

          <button 
            className="btn-primary" 
            onClick={handleRunNow} 
            disabled={isRunning}
            style={{ padding: '6px 14px', fontSize: '0.82rem' }}
          >
            {isRunning ? <RefreshCw className="spin" size={14} /> : <Play size={14} />}
            {isRunning ? 'Running Morning Batch...' : 'Trigger Morning Batch Now'}
          </button>
        </div>

        <div className="terminal-box">
          {batchStatus?.logs && batchStatus.logs.length > 0 ? (
            batchStatus.logs.map((log, idx) => (
              <div key={idx} className="terminal-line">{log}</div>
            ))
          ) : (
            <div className="terminal-line">[SYSTEM] Ready for next 08:00 AM batch schedule execution...</div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button className="btn-secondary" onClick={onClose}>Close Control Center</button>
        </div>
      </div>
    </div>
  );
}
