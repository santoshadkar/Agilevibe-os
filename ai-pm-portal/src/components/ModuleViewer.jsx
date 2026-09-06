import React from 'react';
import { ArrowLeft, CheckCircle2, Award, Clock, BookOpen, Share2 } from 'lucide-react';

export default function ModuleViewer({ module, isCompleted, onBack, onStartQuiz, onToggleComplete }) {
  return (
    <div className="max-w-4xl mx-auto py-4">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button onClick={onBack} className="btn-secondary text-xs py-2 px-3">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Curriculum</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggleComplete(module.id)}
            className={`text-xs py-2 px-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
          </button>

          <button onClick={() => onStartQuiz(module.id)} className="btn-primary text-xs py-2 px-4">
            <Award className="w-4 h-4 text-yellow-300" />
            <span>Take Knowledge Quiz</span>
          </button>
        </div>
      </div>

      {/* Module Title Banner */}
      <div className="glass-panel p-6 lg:p-8 rounded-2xl mb-8 border border-indigo-500/30 bg-gradient-to-br from-[#111827] via-[#0e1424] to-[#151c33]">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge-neon">MODULE {module.number}</span>
          <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {module.estimatedTime} read
          </span>
          <span className="badge-cyan">{module.level}</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
          {module.title}
        </h1>

        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {module.subtitle}
        </p>

        {/* Key Takeaways Box */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Key PM Learning Objectives
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-300">
            {module.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sections Content */}
      <div className="space-y-8 mb-12">
        {module.sections.map((section, idx) => (
          <div key={idx} className="glass-panel p-6 lg:p-8 rounded-2xl border border-white/10 prose-ai">
            <h2>{section.heading}</h2>
            <div 
              dangerouslySetInnerHTML={{ __html: formatMarkdownToHtml(section.content) }} 
            />
          </div>
        ))}
      </div>

      {/* Bottom Quiz Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Ready to test your knowledge?</h3>
          <p className="text-xs text-gray-300">Complete the module quiz to earn your AI PM Certificate badge.</p>
        </div>
        <button onClick={() => onStartQuiz(module.id)} className="btn-primary">
          <Award className="w-4 h-4 text-yellow-300" />
          <span>Start Assessment Quiz</span>
        </button>
      </div>
    </div>
  );
}

// Simple markdown formatter helper for lesson text
function formatMarkdownToHtml(markdown) {
  if (!markdown) return '';
  
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>');

  return `<p>${html}</p>`;
}
