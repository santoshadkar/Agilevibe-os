import React, { useState, useEffect } from 'react';
import { FileText, Copy, Trash2, Check } from 'lucide-react';

export default function Scratchpad() {
  const [content, setContent] = useState(() => {
    return localStorage.getItem('vibepulse_scratchpad') || '# Focus Scratchpad\n\n- [ ] Draft system architecture\n- [ ] Optimize soundscape synthesis loops\n- [ ] Take a 5-min walk break';
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem('vibepulse_scratchpad', content);
  }, [content]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">Focus Scratchpad</h2>
            <p className="text-xs text-slate-400">Instant Markdown notes & thoughts</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center space-x-1.5"
            title="Copy Note"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={() => setContent('')}
            className="p-2 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-rose-400 transition-all text-xs"
            title="Clear Scratchpad"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type quick notes, ideas, or to-dos here..."
        className="w-full h-44 bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500 font-mono resize-none leading-relaxed"
      />

      <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
        <span>Auto-saved to local storage</span>
        <span>{wordCount} words | {charCount} chars</span>
      </div>
    </div>
  );
}
