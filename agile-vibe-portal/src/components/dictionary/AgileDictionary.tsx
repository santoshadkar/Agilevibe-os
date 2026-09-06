import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AGILE_DICTIONARY_TERMS } from '../../data/dictionaryData';
import type { UserRole } from '../../types';
import { 
  BookMarked, 
  Search, 
  ShieldCheck, 
  Compass, 
  Target, 
  ChevronDown,
  BookOpen
} from 'lucide-react';

export const AgileDictionary: React.FC = () => {
  const { activeRole } = useApp();
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>(activeRole);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTermId, setExpandedTermId] = useState<string | null>(AGILE_DICTIONARY_TERMS[0].id);

  const filteredTerms = AGILE_DICTIONARY_TERMS.filter(item => {
    const matchesRole = roleFilter === 'all' || item.role === roleFilter || item.role === 'all';
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/20">
              <BookMarked className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">Single Source of Truth Agile & Product Dictionary</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {filteredTerms.length} Definitions
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Official terminology, real-world scenario examples, and key takeaways for Scrum Masters, Product Owners, and Product Managers
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms, frameworks, metrics..."
              className="w-full pl-9 pr-3 py-2.5 bg-slate-950 text-xs text-slate-200 rounded-xl border border-slate-800 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Role Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setRoleFilter('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'all'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          All Roles ({AGILE_DICTIONARY_TERMS.length})
        </button>
        <button
          onClick={() => setRoleFilter('scrum-master')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'scrum-master'
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Scrum Master Terms</span>
        </button>
        <button
          onClick={() => setRoleFilter('product-owner')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'product-owner'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Product Owner Terms</span>
        </button>
        <button
          onClick={() => setRoleFilter('product-manager')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'product-manager'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>Product Manager Terms</span>
        </button>
      </div>

      {/* Dictionary Items Accordion List */}
      <div className="space-y-4">
        {filteredTerms.map((item) => {
          const isExpanded = expandedTermId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all ${
                isExpanded
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setExpandedTermId(isExpanded ? null : item.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] rounded font-bold uppercase bg-emerald-500/20 text-emerald-300">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">
                        Role: {item.role.replace('-', ' ')}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mt-1">{item.term}</h4>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 space-y-4 border-t border-slate-800/80 pt-4 text-xs text-slate-300 animate-fadeIn">
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider text-[11px] block">
                      Definition:
                    </span>
                    <p className="text-slate-200 leading-relaxed">{item.definition}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                      <span className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] block">
                        Real-World Application Scenario:
                      </span>
                      <p className="text-slate-300 leading-relaxed">{item.exampleScenario}</p>
                    </div>

                    <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-1">
                      <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block">
                        Key Practitioner Takeaway:
                      </span>
                      <p className="text-slate-200 leading-relaxed font-semibold">{item.keyTakeaway}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
