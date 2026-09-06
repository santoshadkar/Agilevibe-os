import React, { useState } from 'react';
import { 
  BookOpen, HelpCircle, Book, Video, FileText, Bookmark, 
  CheckCircle2, Lightbulb, Sparkles, 
  Play, ExternalLink, Save, Check, Clock, ShieldAlert, Zap, Download
} from 'lucide-react';
import VisualDiagram from './VisualDiagram';
import { SEED_SYLLABUS_DOMAINS } from '../data/seedSyllabusData';
import { generateSingleTopicPDF } from '../utils/pdfGenerator';

function cleanText(text) {
  if (!text) return '';
  return text.replace(/\*\*/g, '').trim();
}

export default function TopicDetail({ 
  selectedDomainId, 
  selectedTopicId, 
  onSelectTopic, 
  completedTopicsMap, 
  onToggleCompleteTopic,
  savedNotesMap,
  onSaveNote,
  bookmarksMap,
  onToggleBookmark
}) {
  const [activeSubTab, setActiveSubTab] = useState('concept'); // 'concept', 'questions', 'resources', 'videos', 'notes'
  const [userAnswers, setUserAnswers] = useState({});
  const [showHints, setShowHints] = useState({});
  const [localNoteText, setLocalNoteText] = useState('');
  const [isNoteSaved, setIsNoteSaved] = useState(false);

  // Find active domain & topic
  const domain = SEED_SYLLABUS_DOMAINS.find(d => d.id === selectedDomainId) || SEED_SYLLABUS_DOMAINS[0];
  const topic = domain.topics.find(t => t.id === selectedTopicId) || domain.topics[0];

  React.useEffect(() => {
    setLocalNoteText(savedNotesMap[topic.id] || '');
    setIsNoteSaved(false);
  }, [topic.id, savedNotesMap]);

  const handleAnswerSelect = (qId, optionIdx) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const toggleHint = (qId) => {
    setShowHints(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSaveLocalNote = () => {
    onSaveNote(topic.id, localNoteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2500);
  };

  const isCompleted = completedTopicsMap[topic.id];
  const isBookmarked = bookmarksMap[topic.id];

  return (
    <div className="space-y-6 pb-16">
      {/* Top Breadcrumb & Topic Selector Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center text-white font-bold shadow-md`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span>{domain.title}</span>
                <span>•</span>
                <span>{domain.weightage}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">{cleanText(topic.title)}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Download Topic PDF Button */}
            <button
              onClick={() => generateSingleTopicPDF(topic, domain.title)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer"
              title="Download this topic as PDF"
            >
              <Download className="w-4 h-4 text-amber-400" />
              Download Topic PDF
            </button>

            <button
              onClick={() => onToggleBookmark(topic.id, topic.title)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>

            <button
              onClick={() => onToggleCompleteTopic(topic.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'Topic Mastered' : 'Mark as Mastered'}
            </button>
          </div>
        </div>

        {/* Sub-Topics Pill Selector */}
        <div className="flex overflow-x-auto gap-2 pt-2 border-t border-slate-800/80 no-scrollbar">
          {domain.topics.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelectTopic(domain.id, t.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                t.id === topic.id
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-sm'
                  : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {completedTopicsMap[t.id] && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
              <span>{cleanText(t.title)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Sub-Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSubTab('concept')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer whitespace-nowrap ${
            activeSubTab === 'concept'
              ? 'bg-slate-800 text-amber-400 border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4" /> Concepts & Solved Examples
        </button>

        <button
          onClick={() => setActiveSubTab('questions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer whitespace-nowrap ${
            activeSubTab === 'questions'
              ? 'bg-slate-800 text-amber-400 border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900'
          }`}
        >
          <HelpCircle className="w-4 h-4" /> Practice Quizzes ({topic.probableQuestions.length})
        </button>

        <button
          onClick={() => setActiveSubTab('resources')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer whitespace-nowrap ${
            activeSubTab === 'resources'
              ? 'bg-slate-800 text-amber-400 border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900'
          }`}
        >
          <Book className="w-4 h-4" /> Books & Articles ({topic.books.length + topic.articles.length})
        </button>

        <button
          onClick={() => setActiveSubTab('videos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer whitespace-nowrap ${
            activeSubTab === 'videos'
              ? 'bg-slate-800 text-amber-400 border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900'
          }`}
        >
          <Video className="w-4 h-4" /> Video Lessons ({topic.videos.length})
        </button>

        <button
          onClick={() => setActiveSubTab('notes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer whitespace-nowrap ${
            activeSubTab === 'notes'
              ? 'bg-slate-800 text-amber-400 border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" /> Personal Revision Notes {savedNotesMap[topic.id] && '•'}
        </button>
      </div>

      {/* SUB-TAB 1: CONCEPTS & SOLVED EXAMPLES */}
      {activeSubTab === 'concept' && (
        <div className="space-y-6">
          {/* Subheading */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-slate-300 text-sm italic">
            "{cleanText(topic.subHeading)}"
          </div>

          {/* Quick Rule & Formula Cheat Sheet Box */}
          {topic.cheatSheetRules && topic.cheatSheetRules.length > 0 && (
            <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-5 shadow-lg space-y-3">
              <h4 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" /> High-Yield Formula & Rule Cheat Sheet
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {topic.cheatSheetRules.map((rule, rIdx) => (
                  <div key={rIdx} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs text-amber-200 font-mono flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {rIdx + 1}
                    </span>
                    <span>{cleanText(rule)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exam Traps & Mistakes Alert */}
          {topic.examTraps && topic.examTraps.length > 0 && (
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-5 shadow-lg space-y-2 text-rose-200 text-xs sm:text-sm">
              <h4 className="font-bold text-rose-300 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" /> SEED Exam Trap & Candidate Warning
              </h4>
              {topic.examTraps.map((trap, tIdx) => (
                <p key={tIdx} className="leading-relaxed">
                  • {cleanText(trap)}
                </p>
              ))}
            </div>
          )}

          {/* Interactive Visual Diagram */}
          {topic.visualType && <VisualDiagram visualType={topic.visualType} />}

          {/* Detailed Concept Breakdown */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-200 leading-relaxed text-sm sm:text-base">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" /> Exhaustive Topic Principles & Rules
            </h3>

            <div className="space-y-4 font-normal text-slate-300">
              {topic.explanationParagraphs ? (
                topic.explanationParagraphs.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {cleanText(para)}
                  </p>
                ))
              ) : (
                <p>{cleanText(topic.explanation)}</p>
              )}
            </div>

            {/* Key Takeaway Bullet Grid */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="font-bold text-slate-100 text-sm">Key High-Yield Concepts to Remember:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {topic.keyConcepts.map((concept, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cleanText(concept)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Life Design Applications */}
          {topic.realLifeExamples && topic.realLifeExamples.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" /> Real-World & Design Entrance Context
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.realLifeExamples.map((ex, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                    <h4 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" /> {cleanText(ex.title)}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{cleanText(ex.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Solved Step-by-Step Examples */}
          {topic.solvedExamples && topic.solvedExamples.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Step-by-Step Solved Exam Examples ({topic.solvedExamples.length})
              </h3>
              {topic.solvedExamples.map((ex, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
                  <div className="font-semibold text-slate-100 text-sm sm:text-base">
                    <strong className="text-amber-400">Solved Example {idx + 1}: </strong>{cleanText(ex.question)}
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="text-emerald-400 font-bold">Solution: {cleanText(ex.solution)}</div>
                    <div className="text-slate-300 leading-relaxed">{cleanText(ex.explanationStep)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: PROBABLE QUESTIONS */}
      {activeSubTab === 'questions' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-400">
            Practice probable SEED entrance exam questions. Select your answer to get instant verification and step-by-step reasoning!
          </div>

          <div className="space-y-6">
            {topic.probableQuestions.map((q, qIdx) => {
              const selectedOpt = userAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctAnswer;

              return (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      Question {qIdx + 1} of {topic.probableQuestions.length}
                    </span>
                    <button
                      onClick={() => toggleHint(q.id)}
                      className="text-xs text-indigo-300 hover:text-indigo-200 flex items-center gap-1 cursor-pointer"
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      {showHints[q.id] ? 'Hide Hint' : 'Need Hint?'}
                    </button>
                  </div>

                  <h4 className="font-bold text-slate-100 text-base leading-snug">{cleanText(q.question)}</h4>

                  {/* Hint box */}
                  {showHints[q.id] && (
                    <div className="bg-indigo-950/40 border border-indigo-500/30 p-3 rounded-xl text-xs text-indigo-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div><strong>Hint:</strong> {cleanText(q.hint)}</div>
                    </div>
                  )}

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {q.options.map((opt, optIdx) => {
                      let optionStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800';

                      if (isAnswered) {
                        if (optIdx === q.correctAnswer) {
                          optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                        } else if (optIdx === selectedOpt && !isCorrect) {
                          optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                        } else {
                          optionStyle = 'bg-slate-950/50 border-slate-800/50 text-slate-500 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleAnswerSelect(q.id, optIdx)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-start gap-2.5 cursor-pointer ${optionStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-snug">{cleanText(opt)}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {isAnswered && (
                    <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 ${
                      isCorrect 
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
                        : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5">
                        {isCorrect ? <Check className="w-4 h-4 text-emerald-400" /> : <HelpCircle className="w-4 h-4 text-rose-400" />}
                        {isCorrect ? 'Correct Answer!' : 'Incorrect Choice'}
                      </div>
                      <p className="text-slate-300 leading-relaxed">{cleanText(q.explanation)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: BOOKS & ARTICLES WITH WORKING EXTERNAL LINKS */}
      {activeSubTab === 'resources' && (
        <div className="space-y-6">
          {/* Books */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Book className="w-5 h-5 text-amber-400" /> Recommended Books (Click Title to Access Resource)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topic.books.map((b, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-amber-300 hover:text-amber-200 text-base flex items-center gap-1.5 group cursor-pointer"
                      >
                        <span className="group-hover:underline">{cleanText(b.title)}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Author: {cleanText(b.author)}</p>
                    <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                      <strong>Recommended Focus:</strong> {cleanText(b.focus)}
                    </p>
                  </div>

                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full text-center text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 py-2.5 rounded-xl border border-amber-500/30 transition-all cursor-pointer mt-2"
                  >
                    Open Book Resource <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-400" /> Curated Articles & Study Notes (Click Title to Open)
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {topic.articles.map((art, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-indigo-300 hover:text-indigo-200 text-base flex items-center gap-1.5 group cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="group-hover:underline">{cleanText(art.title)}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    </a>
                    <p className="text-xs text-slate-300 leading-relaxed">{cleanText(art.summary)}</p>
                  </div>

                  <a
                    href={art.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    Read Article <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: VIDEO LESSONS */}
      {activeSubTab === 'videos' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {topic.videos.map((vid, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl space-y-4 p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-500/30 font-bold flex items-center gap-1">
                      <Play className="w-3 h-3 fill-rose-400" /> {vid.platform}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {vid.duration}
                    </span>
                  </div>

                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-slate-100 hover:text-rose-300 text-base flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="group-hover:underline">{cleanText(vid.title)}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  </a>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {cleanText(vid.description)}
                  </p>
                </div>

                <a
                  href={vid.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md cursor-pointer mt-2"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Open Video Tutorial <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: PERSONAL NOTES */}
      {activeSubTab === 'notes' && (
        <div className="space-y-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" /> Personal Study Notes for "{cleanText(topic.title)}"
            </h3>
            {isNoteSaved && (
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" /> Note Saved!
              </span>
            )}
          </div>

          <p className="text-xs text-slate-400">
            Write down key formulas, personal sketch ideas, or quick revision points. Notes are saved automatically to your local browser storage.
          </p>

          <textarea
            value={localNoteText}
            onChange={(e) => setLocalNoteText(e.target.value)}
            placeholder="Type your study revision notes, mnemonics, or key points here..."
            className="w-full h-48 bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/60 leading-relaxed font-mono"
          />

          <div className="flex justify-end">
            <button
              onClick={handleSaveLocalNote}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer text-xs sm:text-sm"
            >
              <Save className="w-4 h-4" /> Save Topic Note
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
