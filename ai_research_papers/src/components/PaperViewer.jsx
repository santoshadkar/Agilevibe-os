import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { MermaidDiagram } from './MermaidDiagram';
import { 
  Clock, 
  Calendar, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  Award,
  Info,
  Lightbulb,
  AlertTriangle,
  ShieldAlert,
  AlertCircle
} from 'lucide-react';

// Component to render GitHub-style Alerts inside Markdown blockquotes
const AlertBlockquote = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const textContent = childrenArray.map(child => {
    if (typeof child === 'string') return child;
    if (child?.props?.children) {
      if (Array.isArray(child.props.children)) {
        return child.props.children.map(c => (typeof c === 'string' ? c : '')).join('');
      }
      return typeof child.props.children === 'string' ? child.props.children : '';
    }
    return '';
  }).join(' ');

  let type = 'NOTE';
  if (textContent.includes('[!IMPORTANT]')) type = 'IMPORTANT';
  else if (textContent.includes('[!TIP]')) type = 'TIP';
  else if (textContent.includes('[!WARNING]')) type = 'WARNING';
  else if (textContent.includes('[!CAUTION]')) type = 'CAUTION';

  const alertConfigs = {
    NOTE: {
      border: 'border-l-cyan-500 bg-cyan-500/10 text-cyan-200 border-cyan-500/20',
      icon: Info,
      title: 'NOTE',
      titleColor: 'text-cyan-400'
    },
    TIP: {
      border: 'border-l-emerald-500 bg-emerald-500/10 text-emerald-200 border-emerald-500/20',
      icon: Lightbulb,
      title: 'TIP',
      titleColor: 'text-emerald-400'
    },
    IMPORTANT: {
      border: 'border-l-purple-500 bg-purple-500/10 text-purple-200 border-purple-500/20',
      icon: AlertCircle,
      title: 'IMPORTANT',
      titleColor: 'text-purple-400'
    },
    WARNING: {
      border: 'border-l-amber-500 bg-amber-500/10 text-amber-200 border-amber-500/20',
      icon: AlertTriangle,
      title: 'WARNING',
      titleColor: 'text-amber-400'
    },
    CAUTION: {
      border: 'border-l-rose-500 bg-rose-500/10 text-rose-200 border-rose-500/20',
      icon: ShieldAlert,
      title: 'CAUTION',
      titleColor: 'text-rose-400'
    }
  };

  const config = alertConfigs[type] || alertConfigs.NOTE;
  const IconComponent = config.icon;

  return (
    <div className={`my-6 p-4 rounded-r-xl border-l-4 border ${config.border} shadow-lg backdrop-blur-sm`}>
      <div className={`flex items-center gap-2 font-mono text-xs font-bold tracking-wider mb-1.5 ${config.titleColor}`}>
        <IconComponent className="w-4 h-4" />
        <span>{config.title}</span>
      </div>
      <div className="text-sm text-slate-200 leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
};

export const PaperViewer = ({ 
  paper, 
  onNavigateNext, 
  onNavigatePrev, 
  hasNext, 
  hasPrev,
  onTableOfContentsChange 
}) => {
  const [copied, setCopied] = useState(false);

  // Extract table of contents (h2 headings) from markdown
  useEffect(() => {
    if (!paper || !paper.content) return;
    const lines = paper.content.split('\n');
    const toc = [];
    lines.forEach(line => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        toc.push({ text, id });
      }
    });
    if (onTableOfContentsChange) {
      onTableOfContentsChange(toc);
    }
  }, [paper]);

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(paper.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!paper) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-8 py-8 pb-28">
      {/* Header Hero Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 mb-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {paper.documentId}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-700/80">
              {paper.category}
            </span>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Markdown!' : 'Copy Source'}
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 leading-tight tracking-tight">
          {paper.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-light">
          {paper.subtitle}
        </p>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">{paper.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{paper.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{paper.readTime} Read</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-emerald-400 font-medium">~20-25 Pages</span>
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {paper.tags.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-950/80 text-slate-400 border border-slate-800/80">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Markdown Content */}
      <div className="prose-custom">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            blockquote({ children }) {
              return <AlertBlockquote>{children}</AlertBlockquote>;
            },
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const lang = match ? match[1] : '';

              if (lang === 'mermaid') {
                return <MermaidDiagram chart={String(children).replace(/\n$/, '')} />;
              }

              if (inline) {
                return <code className={className} {...props}>{children}</code>;
              }

              return (
                <div className="relative group my-6">
                  <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 overflow-x-auto text-sm font-mono shadow-inner">
                    <code>{children}</code>
                  </pre>
                </div>
              );
            },
            h2({ children }) {
              const text = String(children);
              const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return <h2 id={id}>{children}</h2>;
            }
          }}
        >
          {paper.content}
        </ReactMarkdown>
      </div>

      {/* Footer Navigation */}
      <div className="mt-20 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {hasPrev ? (
          <button
            onClick={onNavigatePrev}
            className="flex items-center gap-3 p-4 rounded-2xl glass-card text-left text-slate-300 hover:text-white group max-w-sm w-full sm:w-auto"
          >
            <ChevronLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div>
              <div className="text-[10px] uppercase font-mono text-slate-400">Previous Paper</div>
              <div className="text-xs font-semibold line-clamp-1">Paper {paper.id - 1}</div>
            </div>
          </button>
        ) : <div />}

        {hasNext ? (
          <button
            onClick={onNavigateNext}
            className="flex items-center gap-3 p-4 rounded-2xl glass-card text-right text-slate-300 hover:text-white group max-w-sm w-full sm:w-auto ml-auto"
          >
            <div>
              <div className="text-[10px] uppercase font-mono text-slate-400">Next Paper</div>
              <div className="text-xs font-semibold line-clamp-1">Paper {paper.id + 1}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        ) : <div />}
      </div>
    </article>
  );
};
