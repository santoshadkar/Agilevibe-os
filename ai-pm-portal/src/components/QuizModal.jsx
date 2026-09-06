import React, { useState } from 'react';
import { X, Award, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { quizData } from '../data/quizData';

export default function QuizModal({ moduleId, onClose, onPassModule }) {
  const quiz = quizData[moduleId];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!quiz) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="glass-panel p-6 rounded-2xl max-w-md w-full text-center">
          <h3 className="text-lg font-bold text-white mb-2">Quiz Coming Soon</h3>
          <p className="text-xs text-gray-400 mb-4">Quiz content for this module is currently being updated.</p>
          <button onClick={onClose} className="btn-secondary text-xs">Close</button>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentIdx];
  const totalQ = quiz.questions.length;

  const handleSelectOption = (optIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleNext = () => {
    if (currentIdx < totalQ - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setShowResults(true);
      // Calculate score
      let correctCount = 0;
      quiz.questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctAnswer) {
          correctCount++;
        }
      });
      const finalScore = Math.round((correctCount / totalQ) * 100);
      if (finalScore >= quiz.passingScore) {
        onPassModule(moduleId);
      }
    }
  };

  const calculateScore = () => {
    let count = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) count++;
    });
    return Math.round((count / totalQ) * 100);
  };

  const score = showResults ? calculateScore() : 0;
  const isPassed = score >= quiz.passingScore;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel max-w-xl w-full rounded-2xl overflow-hidden border border-indigo-500/30 bg-[#0d121f] shadow-2xl">
        {/* Header */}
        <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <h3 className="font-bold text-sm text-white">{quiz.moduleTitle}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!showResults ? (
          <div className="p-6 space-y-6">
            {/* Progress */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>Question {currentIdx + 1} of {totalQ}</span>
              <span>Passing score: {quiz.passingScore}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all"
                style={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }}
              />
            </div>

            {/* Question */}
            <h4 className="text-base font-bold text-white leading-snug">
              {currentQ.question}
            </h4>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[currentIdx] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-medium border transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-500 text-white'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 ${
                      isSelected ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300 font-bold' : 'border-gray-600 text-gray-400'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-normal">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer buttons */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                disabled={selectedAnswers[currentIdx] === undefined}
                onClick={handleNext}
                className="btn-primary text-xs py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{currentIdx < totalQ - 1 ? 'Next Question' : 'Submit Answers'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="p-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-indigo-500/20 border border-indigo-500/40">
              <Award className={`w-8 h-8 ${isPassed ? 'text-yellow-400' : 'text-pink-400'}`} />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">
                {isPassed ? 'Congratulations! You Passed!' : 'Quiz Attempt Completed'}
              </h3>
              <p className="text-xs text-gray-400">
                {isPassed 
                  ? 'You have demonstrated mastery in this AI PM module topic.'
                  : 'Review the explanations below and try again to unlock your badge.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-xs mx-auto">
              <div className="text-xs text-gray-400 uppercase font-bold">Your Score</div>
              <div className={`text-4xl font-extrabold my-1 ${isPassed ? 'text-emerald-400' : 'text-pink-400'}`}>
                {score}%
              </div>
              <div className="text-[11px] text-gray-400">Passing requirement: {quiz.passingScore}%</div>
            </div>

            {/* Explanations List */}
            <div className="text-left space-y-3 max-h-56 overflow-y-auto pr-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase">Answer Review:</h4>
              {quiz.questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2 font-bold text-white mb-1">
                      {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-pink-400" />}
                      <span>{q.question}</span>
                    </div>
                    <p className="text-gray-300 font-medium mb-1">Explanation: {q.explanation}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-3">
              <button onClick={() => { setShowResults(false); setCurrentIdx(0); setSelectedAnswers({}); }} className="btn-secondary text-xs">
                <RotateCcw className="w-4 h-4" />
                <span>Retry Quiz</span>
              </button>

              <button onClick={onClose} className="btn-primary text-xs">
                <span>Continue Learning</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
