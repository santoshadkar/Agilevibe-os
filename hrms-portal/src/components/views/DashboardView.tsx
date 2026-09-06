'use client';

import React from 'react';
import { 
  Employee, 
  PayrollRun, 
  AIAnomaly, 
  UserRole,
  AttendanceRecord 
} from '../../types/hrms';
import { SensitiveSalaryMask } from '../ui/SensitiveSalaryMask';
import { 
  Users, 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  FileSpreadsheet, 
  Sparkles,
  ArrowUpRight,
  MapPin,
  CheckCircle,
  Calendar,
  DollarSign,
  Briefcase,
  Target,
  Sun,
  Moon,
  Flame,
  Award,
  FileText,
  UserCheck
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

interface DashboardViewProps {
  employees: Employee[];
  payrollRuns: PayrollRun[];
  anomalies: AIAnomaly[];
  currentRole: UserRole;
  currentUser?: Employee;
  attendance?: AttendanceRecord[];
  onNavigate: (tab: any) => void;
  onOpenAIChat: () => void;
  onCheckIn?: (empId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  employees,
  payrollRuns,
  anomalies,
  currentRole,
  currentUser,
  attendance = [],
  onNavigate,
  onOpenAIChat,
  onCheckIn
}) => {
  const activeEmp = currentUser || employees[0];

  // --------------------------------------------------------------------------
  // ROLE 1: DAILY WAGE / CONTRACT WORKER LANDING DASHBOARD
  // --------------------------------------------------------------------------
  if (currentRole === 'DAILY_WAGE_WORKER') {
    const today = new Date().toISOString().split('T')[0];
    const myTodayAttendance = attendance.find(a => a.employeeId === activeEmp.id && a.date === today);
    const daysWorkedThisMonth = 22;
    const dailyRate = activeEmp.dailyWageRate || 650;
    const estimatedPayout = daysWorkedThisMonth * dailyRate + 300; // includes 2 night shift allowances

    return (
      <div className="space-y-6">
        {/* Worker Welcome Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-cyan-950 p-6 border border-emerald-800/40 relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={activeEmp.avatar} alt={activeEmp.name} className="h-16 w-16 rounded-2xl object-cover border-2 border-emerald-400/40 shadow-md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-emerald-900/80 px-2.5 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-700">
                    Daily Wage Worker Portal
                  </span>
                  <span className="text-xs text-gray-300">• Rothe Erde Gondedumala Plant</span>
                </div>
                <h2 className="text-2xl font-extrabold text-white mt-1">
                  Welcome, {activeEmp.name}
                </h2>
                <p className="text-xs text-gray-300 mt-0.5">
                  Emp Code: <strong className="text-white">{activeEmp.empCode}</strong> • Dept: <strong className="text-white">{activeEmp.department}</strong> ({activeEmp.designation})
                </p>
              </div>
            </div>

            {/* Quick Gate Punch Button */}
            {!myTodayAttendance ? (
              <button
                onClick={() => onCheckIn && onCheckIn(activeEmp.id)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/30 hover:scale-105 transition"
              >
                <Clock className="h-5 w-5" />
                <span>Punch In Now (Web Kiosk)</span>
              </button>
            ) : (
              <div className="rounded-xl bg-emerald-900/60 p-3 border border-emerald-600/50 text-right">
                <span className="text-[10px] uppercase font-bold text-emerald-300 block">Today's Punch Status</span>
                <span className="text-xs font-extrabold text-white flex items-center gap-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> Present ({myTodayAttendance.checkIn})
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Worker Personal Metric Cards (NO COMPANY SALARIES SHOWN) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-emerald-400 uppercase">My Approved Daily Rate</p>
            <div className="text-2xl font-extrabold text-white">
              <SensitiveSalaryMask value={dailyRate} suffix=" / day" />
            </div>
            <p className="text-[10px] text-gray-400">As per Muster-Roll Agreement</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-cyan-400 uppercase">Days Worked (August 2026)</p>
            <p className="text-2xl font-extrabold text-white">{daysWorkedThisMonth} Days</p>
            <p className="text-[10px] text-emerald-400">22 Days Present • 2 Night Shifts</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-purple-400 uppercase">My Night Allowances</p>
            <div className="text-2xl font-extrabold text-purple-300">
              <SensitiveSalaryMask value={300} prefix="+₹" />
            </div>
            <p className="text-[10px] text-purple-400">₹150 x 2 Night Shifts Credited</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-amber-400 uppercase">Est. Monthly Earnings</p>
            <div className="text-2xl font-extrabold text-amber-400">
              <SensitiveSalaryMask value={estimatedPayout} />
            </div>
            <p className="text-[10px] text-gray-400">Disbursed on 31st August</p>
          </div>
        </div>

        {/* Worker Shift Schedule & Muster-Roll Logs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shift Schedule */}
          <div className="glass-panel p-5 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-emerald-400" />
              <span>My Assigned Shift Schedule</span>
            </h3>
            <div className="bg-gray-900/90 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Assigned Shift:</span>
                <span className="font-bold text-white">{activeEmp.shift}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Plant Location:</span>
                <span className="font-bold text-gray-200">Shopfloor Ring Forging Bay</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Supervisor:</span>
                <span className="font-bold text-emerald-400">Suresh Patil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contractor Agency:</span>
                <span className="font-bold text-gray-300">{activeEmp.contractorName || 'Direct Daily Wage'}</span>
              </div>
            </div>
          </div>

          {/* AI HR Assistant Helper */}
          <div className="glass-panel p-5 rounded-2xl space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Sparkles className="h-4 w-4" />
                <h3 className="text-sm font-bold text-white">AI HR Help (Hindi & English)</h3>
              </div>
              <p className="text-xs text-gray-300">
                आप अपनी उपस्थिति (Attendance), नाइट शिफ्ट भत्ता (Night Allowance) या वेतन के बारे में AI सहायक से पूछ सकते हैं।
              </p>
            </div>
            <button
              onClick={onOpenAIChat}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-xs font-bold text-white shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-purple-200" />
              <span>Ask AI Assistant in Hindi / English</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // ROLE 2: PERMANENT STAFF ENGINEER LANDING DASHBOARD
  // --------------------------------------------------------------------------
  if (currentRole === 'PERMANENT_STAFF') {
    return (
      <div className="space-y-6">
        {/* Permanent Staff Welcome Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 p-6 border border-blue-800/40 relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={activeEmp.avatar} alt={activeEmp.name} className="h-16 w-16 rounded-2xl object-cover border-2 border-blue-400/40 shadow-md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-blue-900/80 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-700">
                    Employee Self-Service Portal
                  </span>
                  <span className="text-xs text-gray-300">• Rothe Erde Gondedumala Plant</span>
                </div>
                <h2 className="text-2xl font-extrabold text-white mt-1">
                  Welcome back, {activeEmp.name}
                </h2>
                <p className="text-xs text-gray-300 mt-0.5">
                  {activeEmp.designation} • Department: <strong className="text-white">{activeEmp.department}</strong>
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('performance')}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition"
            >
              <Target className="h-4 w-4" />
              <span>View My Performance Goals (OKRs)</span>
            </button>
          </div>
        </div>

        {/* Personal Metrics Grid (NO OTHER EMPLOYEES' SALARIES) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-blue-400 uppercase">My Leave Balance</p>
            <p className="text-2xl font-extrabold text-white">12 CL / 15 EL</p>
            <p className="text-[10px] text-emerald-400">2 Days Applied for Sept</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-emerald-400 uppercase">My August Attendance</p>
            <p className="text-2xl font-extrabold text-white">25 / 26 Days</p>
            <p className="text-[10px] text-emerald-400">96.1% On-Time Record</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-purple-400 uppercase">My H1 Performance Rating</p>
            <p className="text-2xl font-extrabold text-purple-300">4.8 / 5.0</p>
            <p className="text-[10px] text-purple-400">Exceeds Expectations</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-amber-400 uppercase">My Monthly Base Salary</p>
            <div className="text-2xl font-extrabold text-white">
              <SensitiveSalaryMask value={activeEmp.baseSalaryMonthly} />
            </div>
            <p className="text-[10px] text-gray-400">PF & ESI Deducted</p>
          </div>
        </div>

        {/* My OKRs & Payslip Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-5 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-400" />
              <span>My Active OKRs & Quality Targets</span>
            </h3>
            <div className="bg-gray-900/90 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-300 font-bold">Zero Flaw Rate on Ultrasonic Testing</span>
                <span className="text-emerald-400 font-bold">85% Completed</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]" />
              </div>
              <p className="text-[11px] text-gray-400 pt-1">Target Date: October 15, 2026</p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-400" />
                <span>My Official Payslip Downloads</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Download your official monthly payslips with EPF/ESI breakdown for Rothe Erde India Pvt. Ltd.
              </p>
            </div>
            <button
              onClick={() => onNavigate('payroll')}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-blue-500 transition"
            >
              <FileText className="h-4 w-4" />
              <span>View My Payslip & Statutory Details</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // ROLE 3: PLANT SUPERVISOR LANDING DASHBOARD
  // --------------------------------------------------------------------------
  if (currentRole === 'PLANT_SUPERVISOR') {
    return (
      <div className="space-y-6">
        {/* Supervisor Welcome Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-cyan-950 via-blue-950 to-indigo-950 p-6 border border-cyan-800/40 relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={activeEmp.avatar} alt={activeEmp.name} className="h-16 w-16 rounded-2xl object-cover border-2 border-cyan-400/40 shadow-md" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-cyan-900/80 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-700">
                    Plant Shopfloor Operations Dashboard
                  </span>
                  <span className="text-xs text-gray-300">• Rothe Erde Gondedumala</span>
                </div>
                <h2 className="text-2xl font-extrabold text-white mt-1">
                  Supervisor Desk: {activeEmp.name}
                </h2>
                <p className="text-xs text-gray-300 mt-0.5">
                  Managing Shopfloor Shifts & Overtime (OT) for <strong className="text-white">{activeEmp.department}</strong>
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('attendance-hub')}
              className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-cyan-500 transition"
            >
              <Clock className="h-4 w-4" />
              <span>Open Integrated Attendance & Shift Roster</span>
            </button>
          </div>
        </div>

        {/* Shopfloor Operational Cards (NO SALARY TOTALS) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-cyan-400 uppercase">Shopfloor Present Today</p>
            <p className="text-2xl font-extrabold text-white">721 / 750</p>
            <p className="text-[10px] text-emerald-400">96.2% Shift Attendance</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-purple-400 uppercase">Active Night Shift Staff</p>
            <p className="text-2xl font-extrabold text-purple-300">150 Workers</p>
            <p className="text-[10px] text-purple-400">+₹150 Night Allowance Credited</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-amber-400 uppercase">OT Sign-Offs Pending</p>
            <p className="text-2xl font-extrabold text-amber-400">4 Records</p>
            <p className="text-[10px] text-amber-300">Factories Act 2.0x Double Rate</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-emerald-400 uppercase">Safety Compliance</p>
            <p className="text-2xl font-extrabold text-emerald-400">100% Zero Accidents</p>
            <p className="text-[10px] text-gray-400">5S Protocol Active</p>
          </div>
        </div>

        {/* Shift Roster Quick Overview */}
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white">Plant Shift Rosters & Card Reader Live Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-gray-900/90 p-4 border border-blue-500/30 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-blue-400">Morning Shift (06:00 AM - 02:00 PM)</span>
                <span className="text-xs font-semibold text-white">350 Workers</span>
              </div>
              <p className="text-[11px] text-gray-400">Primary Heavy Ring Forging & Machining</p>
            </div>
            <div className="rounded-xl bg-gray-900/90 p-4 border border-cyan-500/30 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-cyan-400">Evening Shift (02:00 PM - 10:00 PM)</span>
                <span className="text-xs font-semibold text-white">250 Workers</span>
              </div>
              <p className="text-[11px] text-gray-400">CNC Precision Turning & Quality Inspection</p>
            </div>
            <div className="rounded-xl bg-gray-900/90 p-4 border border-purple-500/30 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-purple-400">Night Shift (10:00 PM - 06:00 AM)</span>
                <span className="text-xs font-semibold text-white">150 Workers</span>
              </div>
              <p className="text-[11px] text-gray-400">Continuous Heat Treatment & Maintenance</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // ROLE 4: HR ADMIN EXECUTIVE LANDING DASHBOARD (FULL EXECUTIVE ACCESS)
  // --------------------------------------------------------------------------
  const permanentCount = employees.filter(e => e.empType === 'PERMANENT').length;
  const deptData = [
    { name: 'Ring Forging', permanent: 180, labour: 110 },
    { name: 'CNC Machining', permanent: 140, labour: 70 },
    { name: 'Quality Inspection', permanent: 75, labour: 25 },
    { name: 'Plant Maintenance', permanent: 55, labour: 35 },
    { name: 'Safety & Admin', permanent: 30, labour: 10 },
    { name: 'HR & Finance', permanent: 20, labour: 0 }
  ];

  const pieData = [
    { name: 'Permanent Staff', value: permanentCount, color: '#3b82f6' },
    { name: 'Contract Labour', value: 180, color: '#f59e0b' },
    { name: 'Direct Daily Wage', value: 70, color: '#10b981' }
  ];

  return (
    <div className="space-y-6">
      {/* Executive Welcome Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-purple-950/90 p-6 border border-blue-800/40 relative overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-300 border border-blue-400/30 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Rothe Erde India Pvt. Ltd. • Gondedumala Plant
              </span>
              <span className="text-xs text-gray-400">• Executive HR Dashboard</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Executive Plant HR & Payroll Hub
            </h2>
            <p className="text-xs text-gray-300 mt-1 max-w-2xl">
              Industrial Area, Gondedumala, Maharashtra 422010. Managing 750 workforce (500 permanent staff + 250 daily-wage/contract labour) with automated Indian statutory compliance (EPF, ESI, PT, TDS) and AI advisory engines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAIChat}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition"
            >
              <Sparkles className="h-4 w-4 text-purple-200" />
              <span>Ask AI HR Assistant</span>
            </button>
            <button
              onClick={() => onNavigate('excel-migration')}
              className="flex items-center gap-2 rounded-xl bg-gray-900 px-3.5 py-2 text-xs font-bold text-gray-200 border border-gray-700 hover:bg-gray-800 transition"
            >
              <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
              <span>AI Excel Migration</span>
            </button>
          </div>
        </div>
      </div>

      {/* Executive Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-medium">Total Active Workforce</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Users className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">750</span>
            <span className="text-xs text-blue-400 font-medium">100% Capacity</span>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center justify-between pt-2 border-t border-gray-800">
            <span>500 Permanent</span>
            <span className="text-amber-400">250 Labour</span>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-medium">Monthly Gross Payout</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Calculator className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">₹3.91 Cr</span>
            <span className="text-xs text-emerald-400 font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-0.5" /> +1.7%
            </span>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center justify-between pt-2 border-t border-gray-800">
            <span>EPF: ₹36.8L</span>
            <span className="text-emerald-400">ESI: ₹4.18L</span>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-medium">Shift Attendance Rate</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
              <Clock className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">96.2%</span>
            <span className="text-xs text-purple-400 font-medium">721 Present</span>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center justify-between pt-2 border-t border-gray-800">
            <span>Morning: 98%</span>
            <span className="text-cyan-400">Night: 93%</span>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-xl space-y-2 border-amber-500/30">
          <div className="flex items-center justify-between text-gray-400">
            <span className="text-xs font-medium text-amber-300">AI Anomalies Flagged</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
              <AlertTriangle className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-400">{anomalies.length}</span>
            <span className="text-xs text-amber-300 font-medium">Requires Sign-off</span>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center justify-between pt-2 border-t border-gray-800">
            <span className="text-rose-400">1 Overtime Spike</span>
            <span className="text-amber-400">1 ESI Ceiling</span>
          </div>
        </div>
      </div>

      {/* Recharts Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">Workforce Distribution by Department</h3>
              <p className="text-xs text-gray-400">Permanent vs. Daily Wage / Contract Labour</p>
            </div>
            <button
              onClick={() => onNavigate('employees')}
              className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View Directory</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} />
                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="permanent" name="Permanent Staff" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="labour" name="Contract Labour" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white">Workforce Classification</h3>
            <p className="text-xs text-gray-400">Compliance & Payroll Structure</p>
          </div>

          <div className="h-48 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <span className="text-xl font-extrabold text-white">750</span>
              <p className="text-[10px] text-gray-400">Total Staff</p>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            {pieData.map(item => (
              <div key={item.name} className="flex items-center justify-between text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <span className="font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
