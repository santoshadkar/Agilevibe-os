import React from 'react';
import { FileText, Bookmark, X, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { SEED_SYLLABUS_DOMAINS } from '../data/seedSyllabusData';

export function NotesModal({ isOpen, onClose, savedNotesMap, onDeleteNote, onNavigateToTopic }) {
  if (!isOpen) return null;

  // Flatten topics to lookup titles easily
  const topicMap = {};
  SEED_SYLLABUS_DOMAINS.forEach((d) => {
    d.topics.forEach((t) => {
      topicMap[t.id] = { title: t.title, domainId: d.id, domainTitle: d.title };
    });
  });

  const noteKeys = Object.keys(savedNotesMap).filter((k) => savedNotesMap[k] && savedNotesMap[k].trim() !== '');

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-white text-lg">My Saved Study Notes</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-4 pr-1 flex-1">
          {noteKeys.length === 0 ? (
            <div className="text-center py-12 space-y-2 text-slate-500">
              <FileText className="w-10 h-10 mx-auto stroke-1" />
              <p className="text-sm">No study notes saved yet.</p>
              <p className="text-xs">Open any topic in the syllabus and type your notes in the "Personal Notes" tab!</p>
            </div>
          ) : (
            noteKeys.map((topId) => {
              const info = topicMap[topId] || { title: topId, domainId: 'creative-visualization' };
              return (
                <div key={topId} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-amber-400 font-bold uppercase">{info.domainTitle}</span>
                      <h4 className="font-bold text-slate-100 text-sm">{info.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onNavigateToTopic(info.domainId, topId);
                          onClose();
                        }}
                        className="text-xs text-indigo-300 hover:text-indigo-200 flex items-center gap-1 bg-indigo-950/60 border border-indigo-500/30 px-2.5 py-1 rounded-lg cursor-pointer"
                      >
                        View Topic <ArrowRight className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onDeleteNote(topId)}
                        className="p-1 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg cursor-pointer"
                        title="Delete Note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 whitespace-pre-line font-mono bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                    {savedNotesMap[topId]}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export function BookmarksModal({ isOpen, onClose, bookmarksMap, onToggleBookmark, onNavigateToTopic }) {
  if (!isOpen) return null;

  const topicMap = {};
  SEED_SYLLABUS_DOMAINS.forEach((d) => {
    d.topics.forEach((t) => {
      topicMap[t.id] = { title: t.title, domainId: d.id, domainTitle: d.title };
    });
  });

  const bookmarkedKeys = Object.keys(bookmarksMap).filter((k) => bookmarksMap[k]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4 max-h-[80vh] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-white text-lg">Bookmarked Syllabus Topics</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-3 pr-1 flex-1">
          {bookmarkedKeys.length === 0 ? (
            <div className="text-center py-10 space-y-2 text-slate-500">
              <Bookmark className="w-10 h-10 mx-auto stroke-1" />
              <p className="text-sm">No topics bookmarked yet.</p>
              <p className="text-xs">Click the "Bookmark" button on any syllabus topic for quick revision!</p>
            </div>
          ) : (
            bookmarkedKeys.map((topId) => {
              const info = topicMap[topId] || { title: topId, domainId: 'creative-visualization' };
              return (
                <div key={topId} className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase">{info.domainTitle}</span>
                    <h4 className="font-bold text-slate-100 text-sm">{info.title}</h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onNavigateToTopic(info.domainId, topId);
                        onClose();
                      }}
                      className="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-xl cursor-pointer shadow-sm"
                    >
                      Open
                    </button>
                    <button
                      onClick={() => onToggleBookmark(topId)}
                      className="p-1 text-slate-400 hover:text-rose-400 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
