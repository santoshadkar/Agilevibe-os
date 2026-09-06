import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Grid, 
  FileSpreadsheet, 
  Users, 
  Layout, 
  Settings, 
  Wrench, 
  Bot, 
  Award,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('leadership');

  // Categories with RTE Career Hub included
  const categories = [
    {
      id: 'leadership',
      label: 'Leadership & Strategy',
      icon: Compass,
      items: [
        { id: 'foundations', label: 'RTE Definition & Roles', icon: Compass },
        { id: 'servant-leadership', label: 'Servant Leadership & Fresh ART', icon: HeartHandshake },
        { id: 'rte-career-hub', label: 'Career, Assessment & Certs', icon: Award },
        { id: 'art-dynamics', label: 'ART Dynamics & Tuckman', icon: TrendingUp },
        { id: 'lace-guide', label: 'LACE Synergy', icon: ShieldCheck },
      ]
    },
    {
      id: 'execution',
      label: 'Execution & Cadence',
      icon: Clock,
      items: [
        { id: 'day-in-life', label: 'Day in the Life', icon: Clock },
        { id: 'pillars', label: '6 Operational Areas', icon: Grid },
        { id: 'reporting-engine', label: 'Reporting Engine', icon: FileSpreadsheet },
        { id: 'cop-masterclass', label: 'CoP Toolkit', icon: Users },
      ]
    },
    {
      id: 'workshops',
      label: 'Workshops & Tools',
      icon: Wrench,
      items: [
        { id: 'workshop-studio', label: 'ART & Team Canvas', icon: Layout },
        { id: 'alm-tools', label: 'ALM Stack & Dashboards', icon: Settings },
        { id: 'power-tools', label: 'Interactive Tools', icon: Wrench },
      ]
    },
    {
      id: 'ai',
      label: 'AI Co-Pilot Suite',
      icon: Bot,
      items: [
        { id: 'ai-copilot', label: 'AI Prompts, Workbench & Simulator', icon: Bot }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.items.some(i => i.id === activeTab)) || categories[0];

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    const cat = categories.find(c => c.id === catId);
    if (cat && cat.items.length > 0) {
      setActiveTab(cat.items[0].id);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 backdrop-blur-md">
      
      {/* LEVEL 1: Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-slate-800/60">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer shrink-0" 
            onClick={() => {
              setSelectedCategory('leadership');
              setActiveTab('foundations');
            }}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-sapphire-600 to-sky-400 p-0.5 shadow-glow-sapphire">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sapphire-400" />
              </div>
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white block leading-none">
                RTE <span className="text-gradient">NEXUS</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block mt-0.5">
                SAFe 6.0 Enterprise Portal
              </span>
            </div>
          </div>

          {/* Level 1 Category Pills */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = (selectedCategory === cat.id) || currentCategory.id === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-navy-950 text-slate-300 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* LEVEL 2: Sub-tabs Bar */}
        <div className="hidden md:flex items-center space-x-2 py-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-2">
            Views:
          </span>
          {currentCategory.items.map((item) => {
            const Icon = item.icon;
            const isTabActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  isTabActive
                    ? 'bg-sapphire-500/20 text-sapphire-300 border border-sapphire-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-navy-950/60 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 p-4 space-y-4">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-2">
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider block border-b border-slate-800 pb-1">
                {cat.label}
              </span>
              <div className="grid grid-cols-1 gap-1">
                {cat.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 ${
                      activeTab === item.id ? 'bg-sapphire-600 text-white' : 'text-slate-300 hover:bg-navy-950'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
