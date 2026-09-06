import React, { useState } from 'react';
import { BrainCircuit, Eye, EyeOff, CheckCircle2, Bookmark, Award, Clock, ArrowRight } from 'lucide-react';
import { interviewQuestionsData } from '../data/interviewQuestionsData';

export default function InterviewSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const currentQ = interviewQuestionsData[selectedIdx] || interviewQuestionsData[0];

  const toggleAnswer = () => setShowAnswer(prev => !prev);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-neon">CAREER PREP TOOL</span>
          <span className="text-xs text-gray-400 font-mono">INTERVIEW SIMULATOR</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-cyan-400" />
          FAANG AI PM Practice & Mock Simulator
        </h2>
        <p className="text-xs text-gray-300">
          Simulate real technical and product design questions from Google, OpenAI, Meta, Microsoft, and Notion. Review CIRCLES-AI frameworks and 10/10 sample responses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Questions Selector List */}
        <div className="space-y-2 lg:col-span-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 px-1 mb-2">
            Interview Question Bank ({interviewQuestionsData.length})
          </h3>

          {interviewQuestionsData.map((q, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={q.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setShowAnswer(false);
                }}
                className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-900/40 to-cyan-900/30 border-indigo-500 text-white font-bold'
                    : 'glass-panel text-gray-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="badge-cyan text-[9px]">{q.company}</span>
                  <span className="text-[10px] text-gray-400">{q.category}</span>
                </div>
                <div className="line-clamp-2 leading-snug">{q.title}</div>
              </button>
            );
          })}
        </div>

        {/* Practice Arena Workspace */}
        <div className="lg:col-span-2 space-y-6">
          {/* Question Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="badge-neon">{currentQ.company}</span>
                <span className="badge-cyan">{currentQ.category}</span>
                <span className="text-xs text-gray-400 font-mono">Framework: {currentQ.framework}</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white leading-snug">
              {currentQ.title}
            </h3>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 leading-relaxed">
              <strong className="text-cyan-400 block mb-1">Interviewer Prompt Context:</strong>
              {currentQ.questionSummary}
            </div>

            {/* Key Criteria checklist */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400 mb-2">Key Criteria Interviewer is Looking For:</h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {currentQ.keyPointsToCover.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={toggleAnswer}
                className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
              >
                {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showAnswer ? 'Hide Sample Answer' : 'Reveal 10/10 Sample Answer'}</span>
              </button>
            </div>
          </div>

          {/* Sample Answer Breakdown */}
          {showAnswer && (
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-cyan-950/10 space-y-4">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <Award className="w-4 h-4 text-yellow-400" />
                10/10 Exemplary Answer Teardown
              </div>

              <pre className="p-4 rounded-xl bg-black/70 border border-white/10 text-xs font-mono text-gray-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {currentQ.sampleAnswer}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
