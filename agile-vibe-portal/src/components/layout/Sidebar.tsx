import React from 'react';
import { useApp } from '../../context/AppContext';
import type { NavigationTab } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  Award, 
  BrainCircuit, 
  Sparkles, 
  Share2,
  BookMarked,
  Bot
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, activeRole } = useApp();

  const navItems: { id: NavigationTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { 
      id: 'dashboard', 
      label: activeRole === 'scrum-master' ? 'SM Workstation' : activeRole === 'product-owner' ? 'PO Workstation' : 'PM Workstation', 
      icon: <LayoutDashboard className="w-4 h-4" /> 
    },
    { 
      id: 'assessments', 
      label: '40-Q Self-Assessment', 
      icon: <Award className="w-4 h-4" />,
      badge: '40 Qs'
    },
    { 
      id: 'scenarios', 
      label: 'AI Scenario Arena (15/role)', 
      icon: <BrainCircuit className="w-4 h-4" />,
      badge: '45 Real'
    },
    { 
      id: 'ai-studio', 
      label: 'AI Tools Studio (12/role)', 
      icon: <Sparkles className="w-4 h-4" />,
      badge: '36 Tools'
    },
    { 
      id: 'dictionary', 
      label: 'Agile & Product Dictionary', 
      icon: <BookMarked className="w-4 h-4" />,
      badge: 'Glossary'
    },
    { 
      id: 'live-assistant', 
      label: 'Live AI Assistant', 
      icon: <Bot className="w-4 h-4" />,
      badge: 'Interactive'
    },
    { 
      id: 'jira', 
      label: 'Jira Cloud / Data Center', 
      icon: <Share2 className="w-4 h-4" /> 
    }
  ];

  return (
    <aside className="w-full md:w-64 bg-slate-950/80 border-r border-slate-800/80 p-4 space-y-6 shrink-0">
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3">
          Single Source Navigation
        </span>
        <nav className="space-y-1 pt-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-1.5 py-0.5 text-[9px] rounded font-bold ${
                    isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
