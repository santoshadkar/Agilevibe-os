import React, { useState, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  Search, 
  Layers, 
  Zap, 
  BarChart3, 
  BookOpen, 
  Sparkles,
  Filter,
  Activity
} from 'lucide-react';
import { getRagIndex } from '../utils/ragEngine';

export default function RagVisualizer() {
  const [testQuery, setTestQuery] = useState("sprint retrospective sailboat INVEST criteria");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [topK, setTopK] = useState(5);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    runSearch();
  }, [testQuery, categoryFilter, topK]);

  const runSearch = () => {
    if (!testQuery.trim()) {
      setSearchResult(null);
      return;
    }
    const index = getRagIndex();
    const filter = categoryFilter === "All" ? null : categoryFilter;
    const result = index.search(testQuery, topK, filter);
    setSearchResult(result);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-purple-950/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Semantic Vector Space Visualizer</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Inspect how the RAG Engine tokenizes input queries, computes TF-IDF term weights, and measures Cosine Similarity against indexed Agile Knowledge chunks.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center space-x-2">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Real-Time Cosine Search</span>
            </div>
          </div>
        </div>
      </div>

      {/* Query Controls */}
      <div className="glass-panel rounded-2xl p-4 border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Query Input */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={testQuery}
              onChange={(e) => setTestQuery(e.target.value)}
              placeholder="Enter search terms (e.g., 'WSJF backlog coaching dysfunctions')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="All">All Categories</option>
              <option value="Agile Coaching">Agile Coaching</option>
              <option value="Scrum Mastery">Scrum Mastery</option>
              <option value="Product Management">Product Management</option>
            </select>
          </div>

          {/* Top K Limit */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">Top K:</span>
            <select
              value={topK}
              onChange={(e) => setTopK(Number(e.target.value))}
              className="px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value={3}>3 Matches</option>
              <option value={5}>5 Matches</option>
              <option value={8}>8 Matches</option>
            </select>
          </div>

        </div>

        {/* Extracted Tokens */}
        {searchResult && searchResult.queryTokens.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800 text-xs">
            <span className="text-slate-400 mr-2">Tokenized Vector Tokens:</span>
            {searchResult.queryTokens.map((token, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono text-[11px] border border-purple-500/30">
                {token}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Vector Results & Score Heatmap */}
      {searchResult && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Found {searchResult.totalMatches} matches in vector corpus</span>
            <span>Query execution: <strong className="text-indigo-400">{searchResult.executionTimeMs} ms</strong></span>
          </div>

          {searchResult.topChunks.length === 0 ? (
            <div className="p-8 text-center glass-panel rounded-2xl border border-slate-800 text-slate-400">
              No matching chunks found for this query and filter.
            </div>
          ) : (
            <div className="space-y-4">
              {searchResult.topChunks.map((item, idx) => {
                const isHighMatch = item.similarityPercentage >= 40;
                return (
                  <div 
                    key={idx}
                    className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-purple-500/40 transition space-y-3"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          #{idx + 1}
                        </span>
                        <h3 className="font-bold text-sm text-white">{item.chunk.title}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {item.chunk.category}
                        </span>
                      </div>

                      {/* Similarity Bar Badge */}
                      <div className="flex items-center space-x-3">
                        <div className="w-32 h-2 rounded-full bg-slate-950 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              isHighMatch
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                                : 'bg-gradient-to-r from-amber-500 to-orange-500'
                            }`}
                            style={{ width: `${item.similarityPercentage}%` }}
                          />
                        </div>
                        <span className="font-mono font-bold text-xs text-purple-300">
                          {item.similarityPercentage}%
                        </span>
                      </div>
                    </div>

                    {/* Content Snippet */}
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800 font-sans">
                      {item.chunk.content}
                    </p>

                    {/* Metadata Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-1">
                      <div className="flex items-center space-x-2">
                        <span>Chunk ID: <code className="text-indigo-300">{item.chunk.chunkId}</code></span>
                        <span>• Words: {item.chunk.wordCount}</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <span>Matched Tokens:</span>
                        {item.matchedTerms.map((term, tIdx) => (
                          <span key={tIdx} className="px-1.5 py-0.2 rounded bg-indigo-950 text-indigo-300 font-mono text-[10px] border border-indigo-800">
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
