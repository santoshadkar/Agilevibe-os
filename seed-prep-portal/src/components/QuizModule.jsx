import React, { useState, useEffect } from 'react';
import { 
  Award, Clock, CheckCircle2, XCircle, AlertCircle, 
  RotateCcw, Sparkles, Flag, ArrowRight, ArrowLeft, BarChart2, ShieldAlert 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEED_SYLLABUS_DOMAINS } from '../data/seedSyllabusData';

export default function QuizModule({ initialDomainId, onCompleteQuiz }) {
  const [selectedDomain, setSelectedDomain] = useState(initialDomainId || 'all');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(3600); // 60 minutes for mock test

  // Extract questions based on selected domain
  const initializeQuestions = (domainFilter) => {
    let pool = [];
    SEED_SYLLABUS_DOMAINS.forEach((dom) => {
      if (domainFilter === 'all' || dom.id === domainFilter) {
        dom.topics.forEach((top) => {
          top.probableQuestions.forEach((q) => {
            pool.push({
              ...q,
              domainTitle: dom.title,
              domainId: dom.id,
              topicTitle: top.title
            });
          });
        });
      }
    });
    return pool;
  };

  const handleStartQuiz = (domainFilter) => {
    const questions = initializeQuestions(domainFilter);
    setQuizQuestions(questions);
    setSelectedDomain(domainFilter);
    setCurrentIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setIsFinished(false);
    setIsQuizActive(true);
    setSecondsRemaining(questions.length * 90); // 1.5 mins per question
  };

  // Timer countdown hook
  useEffect(() => {
    let interval = null;
    if (isQuizActive && !isFinished && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isQuizActive, isFinished, secondsRemaining]);

  const handleSelectOption = (optIdx) => {
    const qId = quizQuestions[currentIdx].id;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const toggleFlag = () => {
    const qId = quizQuestions[currentIdx].id;
    setFlaggedQuestions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    setIsQuizActive(false);

    // Calculate score
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);
    if (percentage >= 70) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }

    if (onCompleteQuiz) {
      onCompleteQuiz(percentage);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Mode Selection View (before quiz starts)
  if (!isQuizActive && !isFinished) {
    return (
      <div className="space-y-6 pb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">SEED Practice Quiz & Mock Test Suite</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Test your speed, visual logic, and knowledge with real SEED style questions. Select a specific domain or launch the full exam simulator!
          </p>

          {/* Test Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
            <div 
              onClick={() => handleStartQuiz('all')}
              className="bg-gradient-to-br from-amber-950/60 to-slate-950 border border-amber-500/40 hover:border-amber-400 p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 shadow-lg space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  Full Mock Exam
                </span>
                <Clock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-bold text-white text-base">Full SEED Comprehensive Simulator</h3>
              <p className="text-xs text-slate-300">Contains questions across all 5 core domains with a live countdown timer.</p>
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1 pt-1">
                Launch Full Exam <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {SEED_SYLLABUS_DOMAINS.map((dom) => (
              <div 
                key={dom.id}
                onClick={() => handleStartQuiz(dom.id)}
                className="bg-slate-950 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 shadow-md space-y-2"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Domain Quiz</span>
                  <span>{dom.weightage}</span>
                </div>
                <h3 className="font-bold text-slate-100 text-sm">{dom.title}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">{dom.summary}</p>
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1 pt-1">
                  Start {dom.title.split(' ')[0]} Quiz <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Finished Score Breakdown View
  if (isFinished) {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score += 1;
    });
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="space-y-6 pb-12 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 text-white font-black text-2xl shadow-xl">
            {percentage}%
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Quiz Completed!</h2>
            <p className="text-slate-300 text-sm mt-1">
              You scored <strong className="text-amber-400">{score}</strong> out of <strong className="text-white">{quizQuestions.length}</strong> questions correctly.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setIsFinished(false)}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow-lg cursor-pointer text-sm"
            >
              <RotateCcw className="w-4 h-4" /> Try Another Quiz
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-amber-400" /> Detailed Question & Explanation Review
          </h3>

          {quizQuestions.map((q, idx) => {
            const userAns = userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;

            return (
              <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold">{q.domainTitle} • Q{idx + 1}</span>
                  <span className={`font-bold px-2.5 py-0.5 rounded-full ${
                    isCorrect ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                  </span>
                </div>

                <h4 className="font-bold text-slate-100 text-sm sm:text-base">{q.question}</h4>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1.5">
                  <div className="text-slate-300">
                    <strong>Your Choice:</strong> {userAns !== undefined ? q.options[userAns] : 'Not Attempted'}
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    <strong>Correct Answer:</strong> {q.options[q.correctAnswer]}
                  </div>
                  <p className="text-slate-400 pt-1 leading-relaxed border-t border-slate-800/80 mt-1">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Quiz View
  const currentQ = quizQuestions[currentIdx];
  const isFlagged = flaggedQuestions[currentQ.id];
  const selectedOpt = userAnswers[currentQ.id];

  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      {/* Top Quiz Header bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
            Q {currentIdx + 1} of {quizQuestions.length}
          </span>
          <span className="text-slate-400 hidden sm:inline">{currentQ.domainTitle}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <Clock className="w-4 h-4 text-cyan-400" /> {formatTime(secondsRemaining)}
          </div>

          <button
            onClick={toggleFlag}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isFlagged ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title="Flag for review"
          >
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Active Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{currentQ.topicTitle}</span>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{currentQ.question}</h3>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {currentQ.options.map((opt, optIdx) => {
            const isSelected = selectedOpt === optIdx;
            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                className={`p-4 rounded-2xl border text-xs sm:text-sm text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850'
                }`}
              >
                <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                  isSelected ? 'border-amber-400 bg-amber-500 text-slate-950' : 'border-slate-700 text-slate-400'
                }`}>
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span className="leading-relaxed">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentIdx === quizQuestions.length - 1 ? (
            <button
              onClick={handleFinishQuiz}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg cursor-pointer"
            >
              Submit Quiz <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentIdx((prev) => Math.min(quizQuestions.length - 1, prev + 1))}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 cursor-pointer shadow-md"
            >
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
