import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';

export function MorningDigestModal({ isOpen, onClose, newsData }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !newsData) return null;

  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const generateDigestText = () => {
    let text = `⚡ TECHPULSE MORNING EXECUTIVE BRIEFING - ${todayStr}\n`;
    text += `Automated 08:00 AM Batch Scan | 9 Core Technology Domains\n\n`;
    
    text += `📌 TOP EXECUTIVE TAKEAWAYS:\n`;
    if (newsData.morningTLDR) {
      newsData.morningTLDR.forEach(item => {
        text += `• ${item}\n`;
      });
    }

    text += `\n---------------------------------------------------\n\n`;

    const categories = [
      { key: 'ai', name: '🤖 ARTIFICIAL INTELLIGENCE' },
      { key: 'cybersecurity', name: '🛡️ CYBERSECURITY' },
      { key: 'security', name: '🔐 SECURITY GOVERNANCE' },
      { key: 'agile', name: '⚡ AGILE & DEVSECOPS' },
      { key: 'cloud', name: '☁️ CLOUD NATIVE & PLATFORM ENG' },
      { key: 'governance', name: '⚖️ AI POLICY & GOVERNANCE' },
      { key: 'data', name: '🗄️ DATA & VECTOR SYSTEMS' },
      { key: 'quantum', name: '⚛️ QUANTUM & DEEPTECH' },
      { key: 'greentech', name: '🌱 GREEN TECH & SUSTAINABILITY' }
    ];

    categories.forEach(cat => {
      const items = newsData.articles.filter(a => a.category === cat.key).slice(0, 2);
      if (items.length > 0) {
        text += `${cat.name}\n`;
        items.forEach(a => {
          text += `► ${a.title} (${a.source})\n`;
          text += `  Summary: ${a.summary}\n`;
          if (a.takeaways) {
            a.takeaways.slice(0, 2).forEach(t => text += `  - ${t}\n`);
          }
          text += `\n`;
        });
      }
    });

    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateDigestText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText color="var(--accent-cyan)" size={24} />
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Daily Morning Digest Exporter</h2>
          </div>
          <button className="icon-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
          Format this morning's aggregated tech intelligence into a ready-to-share briefing snippet for Slack, Teams, or Email.
        </p>

        <div className="terminal-box" style={{ whiteSpace: 'pre-wrap', color: '#e5e7eb', fontFamily: 'var(--font-mono)' }}>
          {generateDigestText()}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary" onClick={handleCopy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied to Clipboard!' : 'Copy Digest Text'}
          </button>
        </div>
      </div>
    </div>
  );
}
