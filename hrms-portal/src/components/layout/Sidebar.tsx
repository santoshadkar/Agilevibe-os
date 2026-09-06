'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  Calculator, 
  Briefcase, 
  Target, 
  LineChart, 
  FileSpreadsheet, 
  Sparkles,
  Bot,
  UserCheck,
  Award,
  FileText,
  Network,
  Calendar,
  GraduationCap,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { UserRole } from '../../types/hrms';

export type ActiveTab = 
  | 'dashboard' 
  | 'employees' 
  | 'orgchart' 
  | 'attendance'
  | 'attendance-hub'
  | 'payroll' 
  | 'talent' 
  | 'performance' 
  | 'excel-migration' 
  | 'ai-analytics'
  | 'leaves'
  | 'ijp'
  | 'learnings'
  | 'holiday-calendar'
  | 'hr-policies'
  | 'dpdp-compliance'
  | 'user-guide';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentRole: UserRole;
  onOpenAIChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  currentRole,
  onOpenAIChat
}) => {
  const isHR = currentRole === 'HR_ADMIN';
  const isSupervisor = currentRole === 'PLANT_SUPERVISOR' || isHR;

  // Role-customized navigation labels & visibility
  const getNavItems = () => {
    if (currentRole === 'DAILY_WAGE_WORKER') {
      return [
        { id: 'dashboard', label: 'My Daily Wage Portal', icon: LayoutDashboard },
        { id: 'orgchart', label: 'Plant Org Chart', icon: Network },
        { id: 'attendance-hub', label: 'My Attendance Register', icon: Clock },
        { id: 'leaves', label: 'My Leaves', icon: Calendar },
        { id: 'ijp', label: 'Internal Jobs (IJP)', icon: Briefcase },
        { id: 'learnings', label: 'Assigned Safety Learnings', icon: GraduationCap },
        { id: 'holiday-calendar', label: '2026 Plant Holidays', icon: Calendar },
        { id: 'hr-policies', label: 'HR Policies & Docs', icon: FileText },
        { id: 'dpdp-compliance', label: 'DPDP Act & Data Privacy', icon: ShieldCheck },
        { id: 'user-guide', label: '📖 Portal User Guide', icon: BookOpen }
      ];
    }

    if (currentRole === 'PERMANENT_STAFF') {
      return [
        { id: 'dashboard', label: 'Employee Self-Service', icon: LayoutDashboard },
        { id: 'orgchart', label: 'Company Org Chart', icon: Network },
        { id: 'attendance-hub', label: 'My Attendance Register', icon: Clock },
        { id: 'leaves', label: 'My Leaves & Balance', icon: Calendar },
        { id: 'payroll', label: 'My Salary Payslips', icon: FileText },
        { id: 'ijp', label: 'Internal Job Postings (IJP)', icon: Briefcase },
        { id: 'learnings', label: 'Assigned Learnings', icon: GraduationCap },
        { id: 'performance', label: 'My OKRs & Reviews', icon: Target },
        { id: 'holiday-calendar', label: '2026 Plant Holidays', icon: Calendar },
        { id: 'hr-policies', label: 'HR Policies & Docs', icon: FileText },
        { id: 'dpdp-compliance', label: 'DPDP Act & Data Privacy', icon: ShieldCheck },
        { id: 'user-guide', label: '📖 Portal User Guide', icon: BookOpen }
      ];
    }

    if (currentRole === 'PLANT_SUPERVISOR') {
      return [
        { id: 'dashboard', label: 'Shopfloor Operations Desk', icon: LayoutDashboard },
        { id: 'orgchart', label: 'Company Org Chart', icon: Network },
        { id: 'employees', label: 'Employee Directory', icon: Users },
        { id: 'attendance-hub', label: 'Integrated Attendance System', icon: Clock },
        { id: 'leaves', label: 'Leave Applications', icon: Calendar },
        { id: 'talent', label: 'Talent ATS & Hiring', icon: Briefcase },
        { id: 'learnings', label: 'Safety & Technical Learnings', icon: GraduationCap },
        { id: 'performance', label: 'Performance & Goals', icon: Target },
        { id: 'holiday-calendar', label: '2026 Plant Holidays', icon: Calendar },
        { id: 'hr-policies', label: 'HR Policies & Docs', icon: FileText },
        { id: 'dpdp-compliance', label: 'DPDP Act & Data Privacy', icon: ShieldCheck },
        { id: 'user-guide', label: '📖 Portal User Guide', icon: BookOpen }
      ];
    }

    // HR ADMIN (FULL ACCESS)
    return [
      { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard },
      { id: 'orgchart', label: 'Company Org Chart', icon: Network },
      { id: 'employees', label: 'Employee Directory', icon: Users },
      { id: 'attendance-hub', label: 'Integrated Attendance System', icon: Clock },
      { id: 'leaves', label: 'Leave Management', icon: Calendar },
      { id: 'payroll', label: 'Statutory Payroll (PF/ESI)', icon: Calculator },
      { id: 'talent', label: 'Talent ATS & Onboarding', icon: Briefcase },
      { id: 'performance', label: 'Performance & Goals', icon: Target },
      { id: 'excel-migration', label: 'AI Excel Data Migration', icon: FileSpreadsheet },
      { id: 'ai-analytics', label: 'Natural Language Analytics', icon: LineChart },
      { id: 'learnings', label: 'Assigned Learnings', icon: GraduationCap },
      { id: 'holiday-calendar', label: '2026 Plant Holidays', icon: Calendar },
      { id: 'hr-policies', label: 'HR Policies & Vault', icon: FileText },
      { id: 'dpdp-compliance', label: 'DPDP Act & Data Privacy', icon: ShieldCheck },
      { id: 'user-guide', label: '📖 Portal User Guide', icon: BookOpen }
    ];
  };

  const navItems = getNavItems();

  return (
    <aside className="w-64 shrink-0 glass-panel border-r border-gray-800/80 p-4 flex flex-col justify-between hidden md:flex">
      <div className="space-y-6">
        <div>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            Rothe Erde HRMS Suite
          </p>
          <nav className="space-y-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as ActiveTab)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition ${
                    isActive 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-md shadow-blue-500/10' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* AI Features Callout Box */}
        <div className="rounded-xl bg-gradient-to-br from-indigo-950/80 to-purple-950/80 p-3 border border-purple-800/40 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>AI HR Suite Enabled</span>
          </div>
          <p className="text-[11px] text-gray-300 leading-relaxed">
            Ask AI Assistant in Hindi or English regarding attendance, leaves, or payslips.
          </p>
          <button
            onClick={onOpenAIChat}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-600/30 py-1.5 text-xs font-medium text-purple-200 hover:bg-purple-600/50 border border-purple-500/30 transition"
          >
            <Bot className="h-3.5 w-3.5" />
            <span>Launch AI Assistant</span>
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-gray-800/80 text-[11px] text-gray-400 space-y-1">
        <p className="font-bold text-white">Rothe Erde India Pvt. Ltd.</p>
        <p className="text-[10px] text-gray-400">Industrial Area, Gondedumala, MH 422010</p>
        <p className="text-emerald-400 text-[10px]">Data Residency: Mumbai (ap-south-1)</p>
      </div>
    </aside>
  );
};
