import React, { useState } from 'react';
import { 
  Library, Book, FileText, Video, ExternalLink, 
  Sparkles, Search, Printer, Filter, Download 
} from 'lucide-react';
import { SEED_SYLLABUS_DOMAINS } from '../data/seedSyllabusData';
import { generateFullSyllabusPDF } from '../utils/pdfGenerator';

function cleanText(text) {
  if (!text) return '';
  return text.replace(/\*\*/g, '').trim();
}

export default function ResourceHub({ onSelectDomain }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterDomain, setActiveFilterDomain] = useState('all');

  // Aggregate all books, articles, and videos from the syllabus data
  const allBooks = [];
  const allArticles = [];
  const allVideos = [];

  SEED_SYLLABUS_DOMAINS.forEach((dom) => {
    if (activeFilterDomain === 'all' || dom.id === activeFilterDomain) {
      dom.topics.forEach((top) => {
        top.books.forEach((b) => allBooks.push({ ...b, domainTitle: dom.title, topicTitle: top.title, domainId: dom.id }));
        top.articles.forEach((a) => allArticles.push({ ...a, domainTitle: dom.title, topicTitle: top.title, domainId: dom.id }));
        top.videos.forEach((v) => allVideos.push({ ...v, domainTitle: dom.title, topicTitle: top.title, domainId: dom.id }));
      });
    }
  });

  const filteredBooks = allBooks.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticles = allArticles.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = allVideos.filter((v) =>
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Library className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">SEED Prep Master Resource Hub</h1>
              <p className="text-slate-400 text-xs sm:text-sm">
                Recommended design entrance books, study notes, articles, and downloadable PDF study guides.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={generateFullSyllabusPDF}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Full Study Guide PDF
            </button>
          </div>
        </div>

        {/* Search & Filter controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
          {/* Search bar */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors, topics, or study guides..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          {/* Filter dropdown */}
          <div className="md:col-span-4 relative">
            <Filter className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <select
              value={activeFilterDomain}
              onChange={(e) => setActiveFilterDomain(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-500/60 appearance-none cursor-pointer"
            >
              <option value="all">All Syllabus Domains</option>
              {SEED_SYLLABUS_DOMAINS.map((d) => (
                <option key={d.id} value={d.id}>{d.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Recommended Books Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Book className="w-5 h-5 text-amber-400" /> Standard Reference Books ({filteredBooks.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBooks.map((b, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {b.domainTitle}
                  </span>
                </div>
                
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-100 hover:text-amber-300 text-base flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="group-hover:underline">{cleanText(b.title)}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                </a>

                <p className="text-xs text-slate-400 font-medium">Author: {cleanText(b.author)}</p>
                <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                  <strong>Key Chapter Focus:</strong> {cleanText(b.focus)}
                </p>
              </div>

              <a
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-center text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 py-2.5 rounded-xl border border-amber-500/30 transition-all cursor-pointer mt-2"
              >
                Access Book Online <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Curated Study Articles */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-400" /> Curated Articles & Study Notes ({filteredArticles.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.map((art, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-md flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  {art.domainTitle} • {art.topicTitle}
                </span>

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
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 py-2 rounded-xl transition-all cursor-pointer mt-2"
              >
                Read Full Article <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Video Playlist Library */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Video className="w-5 h-5 text-rose-400" /> Video Tutorials & Animations ({filteredVideos.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((v, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-rose-400 font-bold">{v.platform}</span>
                  <span className="text-slate-500">{v.duration}</span>
                </div>

                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-100 hover:text-rose-300 text-sm flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="group-hover:underline">{cleanText(v.title)}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                </a>

                <p className="text-xs text-slate-400 line-clamp-3">{cleanText(v.description)}</p>
              </div>

              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs py-2 rounded-xl transition-all shadow-md cursor-pointer mt-2"
              >
                Watch Video Tutorial <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
