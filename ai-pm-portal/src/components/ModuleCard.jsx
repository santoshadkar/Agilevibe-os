import React from 'react';
import { Clock, CheckCircle2, BookOpen, ArrowRight, Award } from 'lucide-react';

export default function ModuleCard({ module, isCompleted, onSelectModule, onStartQuiz }) {
  return (
    <div className="glass-panel glass-panel-hover p-6 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Top Banner Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
            MODULE {module.number}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {module.estimatedTime}
            </span>
            {isCompleted && (
              <span className="badge-emerald flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Completed
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
          {module.title}
        </h3>

        <p className="text-xs text-gray-400 font-medium mb-4 line-clamp-2">
          {module.subtitle}
        </p>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {module.summary}
        </p>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {module.tags.map((tag, idx) => (
            <span key={idx} className="text-[11px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-4 border-t border-white/10 mt-auto">
        <button
          onClick={() => onSelectModule(module)}
          className="flex-1 btn-secondary text-xs py-2 justify-center"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read Lesson</span>
        </button>

        <button
          onClick={() => onStartQuiz(module.id)}
          className="btn-primary text-xs py-2 px-3 justify-center"
          title="Take Module Quiz"
        >
          <Award className="w-3.5 h-3.5" />
          <span>Quiz</span>
        </button>
      </div>
    </div>
  );
}
