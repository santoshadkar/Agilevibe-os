'use client';

import React from 'react';
import { UserRole, Employee } from '../../types/hrms';
import { RotheErdeLogo } from '../ui/RotheErdeLogo';
import { 
  ShieldCheck, 
  UserCheck, 
  Sparkles,
  AlertTriangle,
  LogOut,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  currentRole: UserRole;
  currentUser?: Employee;
  onRoleChange: (role: UserRole) => void;
  anomaliesCount: number;
  onOpenAIChat: () => void;
  onOpenAnomalies: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  currentUser,
  onRoleChange,
  anomaliesCount,
  onOpenAIChat,
  onOpenAnomalies,
  onLogout
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800/80 glass-panel px-4 lg:px-8 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Brand logo & Official Address */}
        <div className="flex items-center gap-3">
          <RotheErdeLogo size="md" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-black tracking-tight text-white uppercase">
                thyssenkrupp <span className="text-cyan-400 font-extrabold lowercase font-sans">rothe erde</span>
              </h1>
              <span className="rounded-md bg-blue-950/80 px-2 py-0.5 text-xs font-semibold text-cyan-300 border border-blue-800/50 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Rothe Erde India • Gondedumala
              </span>
            </div>
            <p className="text-[11px] text-gray-400 flex items-center gap-1.5">
              <span>Industrial Area, Gondedumala, Maharashtra 422010</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> ISO 9001 / ISO 45001 Plant
              </span>
            </p>
          </div>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          {/* AI Floating Chat Quick Launcher */}
          <button
            onClick={onOpenAIChat}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600/30 to-purple-600/30 px-3 py-1.5 text-xs font-medium text-purple-300 border border-purple-500/30 hover:border-purple-400 transition"
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
            <span>AI Assistant (EN/HI)</span>
          </button>

          {/* AI Anomalies Notification Badge */}
          <button
            onClick={onOpenAnomalies}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition"
            title="AI Payroll & Compliance Anomalies"
          >
            <AlertTriangle className={`h-4 w-4 ${anomaliesCount > 0 ? 'text-amber-400 animate-bounce' : 'text-gray-400'}`} />
            {anomaliesCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {anomaliesCount}
              </span>
            )}
          </button>

          {/* User Account Info & Quick Persona Switcher */}
          {currentUser && (
            <div className="flex items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800">
              <img src={currentUser.avatar} alt={currentUser.name} className="h-7 w-7 rounded-full object-cover border border-gray-700" />
              <div className="hidden lg:block text-left pr-1">
                <p className="text-xs font-bold text-white leading-none">{currentUser.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{currentUser.role}</p>
              </div>

              {/* Persona Switcher Dropdown */}
              <select
                value={currentRole}
                onChange={(e) => onRoleChange(e.target.value as UserRole)}
                className="bg-transparent text-xs font-semibold text-gray-200 focus:outline-none pr-1 cursor-pointer"
              >
                <option value="HR_ADMIN" className="bg-gray-900 text-gray-200">Role: HR Admin</option>
                <option value="PLANT_SUPERVISOR" className="bg-gray-900 text-gray-200">Role: Plant Supervisor</option>
                <option value="PERMANENT_STAFF" className="bg-gray-900 text-gray-200">Role: Permanent Engineer</option>
                <option value="DAILY_WAGE_WORKER" className="bg-gray-900 text-gray-200">Role: Daily Wage Worker</option>
              </select>

              {/* Sign Out / Lock Session Button */}
              <button
                onClick={onLogout}
                className="flex items-center gap-1 rounded-lg bg-gray-800 px-2.5 py-1 text-[11px] font-bold text-rose-400 hover:bg-rose-950/60 hover:text-rose-300 border border-gray-700 transition ml-1"
                title="Lock Session & Sign Out"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
