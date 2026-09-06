'use client';

import React, { useState } from 'react';
import { AttendanceRecord, Employee, UserRole, PlantShiftMaster } from '../../types/hrms';
import { 
  parseCardReaderCSV, 
  getSampleCardReaderCSV,
  parseBiometricDATFile,
  getSampleBiometricDATText
} from '../../lib/cardReaderParser';
import { 
  Clock, 
  Cpu, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  ShieldCheck, 
  UserCheck, 
  Plus, 
  FileSpreadsheet, 
  Check, 
  X, 
  Sparkles,
  ArrowRight,
  Moon,
  Sun,
  Flame,
  Zap,
  Play,
  Lock,
  Building2,
  Table,
  Edit,
  Save
} from 'lucide-react';

interface AttendanceManagementViewProps {
  attendance: AttendanceRecord[];
  employees: Employee[];
  currentRole: UserRole;
  currentUser?: Employee;
  shifts?: PlantShiftMaster[];
  onCheckIn: (employeeId: string, location: string) => void;
  onImportCardReaderCSV: (records: AttendanceRecord[]) => void;
  onUpdateShift?: (updatedShift: PlantShiftMaster) => void;
}

export const AttendanceManagementView: React.FC<AttendanceManagementViewProps> = ({
  attendance,
  employees,
  currentRole,
  currentUser,
  shifts = [],
  onCheckIn,
  onImportCardReaderCSV,
  onUpdateShift
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'shift-master' | 'realtime' | 'night-double-shifts' | 'roster' | 'ot-approvals'>('shift-master');
  const [showCSVModal, setShowCSVModal] = useState(false);
  const [rawCSVText, setRawCSVText] = useState('');
  const [csvResult, setCsvResult] = useState<any>(null);

  // DAT File Modal State
  const [showDATModal, setShowDATModal] = useState(false);
  const [rawDATText, setRawDATText] = useState('');

  // Edit Shift Modal State for HR Admin
  const [editingShift, setEditingShift] = useState<PlantShiftMaster | null>(null);
  const [editShiftName, setEditShiftName] = useState('');
  const [editTimings, setEditTimings] = useState('');
  const [editStartTime, setEditStartTime] = useState('');
  const [editEndTime, setEditEndTime] = useState('');
  const [editDuration, setEditDuration] = useState('8');
  const [editGrace, setEditGrace] = useState('15');
  const [editBreak, setEditBreak] = useState('45');
  const [editNightEligible, setEditNightEligible] = useState(false);
  const [editNightAmount, setEditNightAmount] = useState('150');
  const [editDesc, setEditDesc] = useState('');

  const isHR = currentRole === 'HR_ADMIN';
  const isSupervisor = currentRole === 'PLANT_SUPERVISOR' || isHR;

  // DATA PRIVACY FILTER FOR ATTENDANCE LOGS
  const displayAttendance = isSupervisor 
    ? attendance 
    : attendance.filter(a => a.employeeId === (currentUser?.id || 'emp-301'));

  const [activeSimulationResult, setActiveSimulationResult] = useState<any>(null);

  const handleRunBatchCSVSimulator = () => {
    const csvContent = getSampleCardReaderCSV(employees);
    const parsed = parseCardReaderCSV(csvContent, employees);
    onImportCardReaderCSV(parsed.records);

    setActiveSimulationResult({
      title: '🏭 Gate Terminal Biometric Batch CSV Ingestion',
      description: `Successfully processed ${parsed.totalPunchesProcessed} card punch logs from Gate Terminal Readers. Updated ${parsed.matchedEmployeesCount} employee attendance records.`,
      badge: 'RFID/Biometric Sync Success',
      details: [
        `Total Card Punches Processed: ${parsed.totalPunchesProcessed}`,
        `Matched Employee Accounts: ${parsed.matchedEmployeesCount}`,
        `Unmatched Card Alerts: ${parsed.unmatchedPunchesCount}`,
        `Attendance Table Source Tag: CARD_READER_CSV`
      ]
    });
  };

  const handleSimulateNightShift = () => {
    const targetEmp = employees[2] || employees[0];
    const nightRecord: AttendanceRecord = {
      id: `att-night-${Date.now()}`,
      employeeId: targetEmp.id,
      employeeName: targetEmp.name,
      empCode: targetEmp.empCode,
      department: targetEmp.department,
      date: new Date().toISOString().split('T')[0],
      checkIn: '10:00 PM',
      checkOut: '06:00 AM (Next Day)',
      status: 'PRESENT',
      shift: 'Night (10 PM - 6 AM)',
      overtimeHours: 0,
      location: 'Rothe Erde Gondedumala - Forging Bay Card Reader',
      verifiedBySupervisor: true,
      source: 'CARD_READER_CSV',
      isNightShift: true,
      nightShiftAllowance: 150
    };

    onImportCardReaderCSV([nightRecord]);

    setActiveSimulationResult({
      title: '🌙 Night Shift (10 PM - 6 AM) Capture Simulation',
      description: `Logged midnight-crossing Night Shift for ${targetEmp.name} (${targetEmp.empCode}).`,
      badge: 'Night Shift Active (+₹150 Allowance)',
      details: [
        `Employee Name: ${targetEmp.name} (${targetEmp.department})`,
        `Punch In: 10:00 PM (Day 1) | Punch Out: 06:00 AM (Day 2)`,
        `Midnight Crossing Handling: Assigned to Night Shift Roster Date`,
        `Statutory Benefit: +₹150 Night Shift Allowance credited to August Payslip`
      ]
    });
  };

  const handleSimulateDoubleShift = () => {
    const targetEmp = employees[3] || employees[1];
    const doubleRecord: AttendanceRecord = {
      id: `att-double-${Date.now()}`,
      employeeId: targetEmp.id,
      employeeName: targetEmp.name,
      empCode: targetEmp.empCode,
      department: targetEmp.department,
      date: new Date().toISOString().split('T')[0],
      checkIn: '10:00 PM (Day 1)',
      checkOut: '02:00 PM (Day 2 - 16 Hours Total)',
      status: 'PRESENT',
      shift: 'Double Shift (Night -> Morning)',
      overtimeHours: 8,
      location: 'Rothe Erde Gondedumala - Ring Rolling Terminal',
      verifiedBySupervisor: true,
      source: 'CARD_READER_CSV',
      isNightShift: true,
      nightShiftAllowance: 150
    };

    onImportCardReaderCSV([doubleRecord]);

    setActiveSimulationResult({
      title: '⚡ 16-Hour Double Shift Fatigue Alert Simulation',
      description: `Detected 16 continuous working hours for ${targetEmp.name}. Statutory Overtime + Night Allowance triggered.`,
      badge: 'Double Shift Fatigue Anomaly',
      details: [
        `Employee Name: ${targetEmp.name} (${targetEmp.empCode})`,
        `Total Hours Worked: 16 Consecutive Hours`,
        `Shift Split A (Night Shift): 8 Normal Working Hours + ₹150 Night Allowance`,
        `Shift Split B (Morning Shift): 8 Overtime Hours paid at Statutory 2.0x Double Rate`,
        `Safety Alert: AI Fatigue Warning Triggered on Supervisor & HR Dashboard!`
      ]
    });
  };

  const handleRunDATSimulator = () => {
    const datContent = getSampleBiometricDATText(employees);
    const parsed = parseBiometricDATFile(datContent, employees);
    onImportCardReaderCSV(parsed.records);

    setActiveSimulationResult({
      title: '📁 Biometric .DAT File Log (attlog.dat) Ingestion',
      description: `Parsed ZKTeco / eSSL / Matrix hardware DAT log file for Rothe Erde plant employees. Ingested ${parsed.records.length} matched biometric punches.`,
      badge: 'Biometric .DAT Log Ingested',
      details: [
        `File Format: Hardware Biometric Log (.DAT / Tab-Delimited Log)`,
        `Total Log Lines Processed: ${parsed.totalPunchesProcessed}`,
        `Matched Employee Punch Records: ${parsed.matchedEmployeesCount}`,
        `Status: Successfully mapped to shift rosters & attendance tables`
      ]
    });
  };

  const handleOpenEditShiftModal = (shift: PlantShiftMaster) => {
    setEditingShift(shift);
    setEditShiftName(shift.shiftName);
    setEditTimings(shift.timings);
    setEditStartTime(shift.startTime);
    setEditEndTime(shift.endTime);
    setEditDuration(shift.durationHours.toString());
    setEditGrace(shift.gracePeriodMins.toString());
    setEditBreak(shift.breakDurationMins.toString());
    setEditNightEligible(shift.nightAllowanceEligible);
    setEditNightAmount(shift.nightAllowanceAmount.toString());
    setEditDesc(shift.description);
  };

  const handleSaveShiftEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingShift) return;

    const updated: PlantShiftMaster = {
      ...editingShift,
      shiftName: editShiftName,
      timings: editTimings,
      startTime: editStartTime,
      endTime: editEndTime,
      durationHours: Number(editDuration) || 8,
      gracePeriodMins: Number(editGrace) || 15,
      breakDurationMins: Number(editBreak) || 45,
      nightAllowanceEligible: editNightEligible,
      nightAllowanceAmount: Number(editNightAmount) || 0,
      description: editDesc
    };

    if (onUpdateShift) onUpdateShift(updated);
    setEditingShift(null);
    alert(`✓ Shift Schedule for "${updated.shiftName}" updated cleanly by HR Admin!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/90 via-blue-950/90 to-indigo-950/90 p-6 border border-cyan-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-cyan-900/80 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-700">
              Rothe Erde India • Attendance & Shift Suite
            </span>
            <span className="text-xs text-gray-400">• Role: {currentRole}</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            Central Plant Shift Master, Card Reader Feed & Attendance Register
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            Centralized shift schedule management (First, Second, Third/Night & General Shifts), shopfloor card reader logs, and overtime sign-offs.
          </p>
        </div>

        {isSupervisor && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDATModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
            >
              <Cpu className="h-4 w-4" />
              <span>Import Biometric .DAT File</span>
            </button>

            <button
              onClick={() => setShowCSVModal(true)}
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:bg-purple-500 transition shrink-0"
            >
              <FileSpreadsheet className="h-4 w-4" />
              <span>Paste Card Reader CSV</span>
            </button>
          </div>
        )}
      </div>

      {/* SME TESTER BAR FOR SUPERVISOR / ADMIN */}
      {isSupervisor && (
        <div className="glass-panel p-5 rounded-2xl border-purple-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-300">
              <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
              <h3 className="text-sm font-bold text-white">Supervisor Test Simulators</h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
              1-Click Live Test Simulators
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <button
              onClick={handleRunBatchCSVSimulator}
              className="rounded-xl bg-gradient-to-r from-purple-950 to-indigo-950 p-3 border border-purple-700/50 hover:border-purple-400 text-left transition space-y-1 group"
            >
              <div className="flex items-center justify-between text-purple-300 font-bold text-xs">
                <span>1. Card Reader CSV</span>
                <Play className="h-3.5 w-3.5 text-purple-400 group-hover:scale-125 transition" />
              </div>
              <p className="text-[11px] text-gray-400">Simulate 12 card punches</p>
            </button>

            <button
              onClick={handleRunDATSimulator}
              className="rounded-xl bg-gradient-to-r from-emerald-950 to-teal-950 p-3 border border-emerald-700/50 hover:border-emerald-400 text-left transition space-y-1 group"
            >
              <div className="flex items-center justify-between text-emerald-300 font-bold text-xs">
                <span>2. Biometric .DAT File</span>
                <Cpu className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-125 transition" />
              </div>
              <p className="text-[11px] text-gray-400">Parse attlog.dat raw hardware file</p>
            </button>

            <button
              onClick={handleSimulateNightShift}
              className="rounded-xl bg-gradient-to-r from-blue-950 to-indigo-950 p-3 border border-blue-700/50 hover:border-blue-400 text-left transition space-y-1 group"
            >
              <div className="flex items-center justify-between text-cyan-300 font-bold text-xs">
                <span>3. Night Shift (10 PM - 6 AM)</span>
                <Moon className="h-3.5 w-3.5 text-cyan-400 group-hover:scale-125 transition" />
              </div>
              <p className="text-[11px] text-gray-400">+₹150 Night Allowance</p>
            </button>

            <button
              onClick={handleSimulateDoubleShift}
              className="rounded-xl bg-gradient-to-r from-rose-950 to-purple-950 p-3 border border-rose-700/50 hover:border-rose-400 text-left transition space-y-1 group"
            >
              <div className="flex items-center justify-between text-rose-300 font-bold text-xs">
                <span>4. 16-Hr Double Shift Alert</span>
                <Flame className="h-3.5 w-3.5 text-rose-400 group-hover:scale-125 transition" />
              </div>
              <p className="text-[11px] text-gray-400">Fatigue detector + 2.0x OT</p>
            </button>
          </div>

          {activeSimulationResult && (
            <div className="bg-gray-950 p-4 rounded-xl border border-purple-800/80 space-y-2 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-white">{activeSimulationResult.title}</h4>
                <span className="rounded-full bg-purple-900 px-2.5 py-0.5 text-[10px] font-bold text-purple-200">
                  {activeSimulationResult.badge}
                </span>
              </div>
              <p className="text-xs text-gray-300">{activeSimulationResult.description}</p>
              <div className="bg-gray-900/90 p-2.5 rounded-lg text-[11px] font-mono text-gray-300 space-y-1">
                {activeSimulationResult.details.map((d: string, i: number) => (
                  <p key={i}>• {d}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800 w-fit">
        <button
          onClick={() => setActiveSubTab('shift-master')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'shift-master' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Table className="h-4 w-4" />
          <span>Central Plant Shift Master</span>
        </button>

        <button
          onClick={() => setActiveSubTab('realtime')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'realtime' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {isSupervisor ? 'Real-Time Punch Register' : 'My Punch Logs'}
        </button>

        {isSupervisor && (
          <>
            <button
              onClick={() => setActiveSubTab('night-double-shifts')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeSubTab === 'night-double-shifts' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Night & Double Shift Rules
            </button>
            <button
              onClick={() => setActiveSubTab('roster')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeSubTab === 'roster' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Shift Roster Schedule
            </button>
            <button
              onClick={() => setActiveSubTab('ot-approvals')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeSubTab === 'ot-approvals' ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Overtime (OT) Sign-Off Matrix
            </button>
          </>
        )}
      </div>

      {/* SUB-TAB 0: CENTRAL PLANT SHIFT MASTER TABLE */}
      {activeSubTab === 'shift-master' && (
        <div className="glass-panel p-6 rounded-2xl space-y-5 border border-cyan-500/40 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-400" />
                <h3 className="text-sm font-extrabold text-white">
                  Rothe Erde India Pvt. Ltd. — Central Plant Shift Master Table
                </h3>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Industrial Area, Gondedumala, Maharashtra Plant Standard Operating Shift Schedules
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isHR && (
                <span className="text-xs text-purple-300 font-bold bg-purple-950 px-3 py-1 rounded-full border border-purple-800 flex items-center gap-1">
                  <Edit className="h-3.5 w-3.5 text-purple-400" /> HR Admin Editable Mode Active
                </span>
              )}
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800 flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Factories Act 1948 Standard Work Hours
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {shifts.map(shift => (
              <div key={shift.id} className="rounded-xl bg-gray-900/90 p-5 border border-cyan-500/30 space-y-3 shadow-lg hover:border-cyan-400/60 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="rounded-md bg-cyan-950 px-2 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-800">
                      {shift.shiftCode}
                    </span>
                    <h4 className="text-sm font-extrabold text-white mt-1">{shift.shiftName}</h4>
                  </div>
                  {shift.nightAllowanceEligible && (
                    <span className="rounded-full bg-purple-950 p-1.5 text-purple-300 border border-purple-700" title="Night Shift Allowance Eligible">
                      <Moon className="h-4 w-4 text-purple-400" />
                    </span>
                  )}
                </div>

                <div className="bg-gray-950 p-3 rounded-xl border border-gray-800 font-mono space-y-1">
                  <span className="text-[10px] text-gray-400 block uppercase">Scheduled Hours</span>
                  <span className="text-sm font-black text-cyan-300 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" /> {shift.timings}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="font-bold text-white">{shift.durationHours} Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Grace Period:</span>
                    <span className="font-bold text-emerald-400">{shift.gracePeriodMins} Mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Break Duration:</span>
                    <span className="font-bold text-white">{shift.breakDurationMins} Mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Night Allowance:</span>
                    <span className={`font-bold ${shift.nightAllowanceEligible ? 'text-purple-300' : 'text-gray-500'}`}>
                      {shift.nightAllowanceEligible ? `+₹${shift.nightAllowanceAmount} / shift` : 'N/A'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-[11px]">
                  <span className="text-gray-400">Active Crew: <strong className="text-cyan-400">{shift.assignedCount}</strong></span>
                  {isHR && (
                    <button
                      onClick={() => handleOpenEditShiftModal(shift)}
                      className="rounded-lg bg-purple-950/80 px-2.5 py-1 text-xs font-bold text-purple-300 border border-purple-700 hover:bg-purple-900 transition flex items-center gap-1"
                    >
                      <Edit className="h-3 w-3" /> Edit Shift
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Master Reference Table */}
          <div className="pt-4 border-t border-gray-800">
            <h4 className="text-xs font-bold text-gray-300 mb-3">Shift Master Summary Table</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="py-3 px-4">Shift Code</th>
                    <th className="py-3 px-4">Shift Name</th>
                    <th className="py-3 px-4">Timings (24-Hr)</th>
                    <th className="py-3 px-4">Work Duration</th>
                    <th className="py-3 px-4">Grace Window</th>
                    <th className="py-3 px-4">Statutory Allowance</th>
                    <th className="py-3 px-4">Assigned Crew</th>
                    {isHR && <th className="py-3 px-4 text-right">HR Action</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60 font-mono">
                  {shifts.map(sh => (
                    <tr key={sh.id} className="hover:bg-gray-900/40 transition">
                      <td className="py-3 px-4 font-bold text-cyan-300">{sh.shiftCode}</td>
                      <td className="py-3 px-4 font-sans font-extrabold text-white">{sh.shiftName}</td>
                      <td className="py-3 px-4 font-bold text-amber-300">{sh.timings}</td>
                      <td className="py-3 px-4 text-gray-300">{sh.durationHours} Hours</td>
                      <td className="py-3 px-4 text-emerald-400">{sh.gracePeriodMins} Mins Grace</td>
                      <td className="py-3 px-4 font-sans">
                        {sh.nightAllowanceEligible ? (
                          <span className="rounded-md bg-purple-950 px-2 py-0.5 text-[10px] font-bold text-purple-300 border border-purple-800">
                            +₹{sh.nightAllowanceAmount} Night Allowance
                          </span>
                        ) : (
                          <span className="text-gray-500 font-mono">Standard Rate</span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-bold text-white">{sh.assignedCount} Workers</td>
                      {isHR && (
                        <td className="py-3 px-4 text-right font-sans">
                          <button
                            onClick={() => handleOpenEditShiftModal(sh)}
                            className="rounded-lg bg-gray-800 px-3 py-1 text-xs font-semibold text-purple-300 hover:bg-purple-950 hover:text-purple-200 transition"
                          >
                            Edit
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ATTENDANCE REGISTER TABLE (DATA PRIVACY ENFORCED) */}
      {activeSubTab === 'realtime' && (
        <div className="glass-panel rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">
              {isSupervisor ? 'Live Shift Attendance Punch Register' : `Attendance Register for ${currentUser?.name}`}
            </h3>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> Data Encrypted & Role-Filtered
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Shift</th>
                  <th className="py-3 px-4">Check-In</th>
                  <th className="py-3 px-4">Check-Out</th>
                  <th className="py-3 px-4">Source Terminal</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {displayAttendance.map(att => (
                  <tr key={att.id} className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-white">
                      {att.employeeName} ({att.empCode})
                      <span className="block text-[10px] text-gray-400 font-normal">{att.department}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-gray-300">{att.date}</td>
                    <td className="py-3 px-4 font-semibold text-purple-300">{att.shift}</td>
                    <td className="py-3 px-4 font-mono text-emerald-400 font-bold">{att.checkIn}</td>
                    <td className="py-3 px-4 font-mono text-cyan-300">{att.checkOut}</td>
                    <td className="py-3 px-4 text-gray-400 text-[11px]">{att.location}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        att.status === 'PRESENT' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}>
                        {att.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* NIGHT & DOUBLE SHIFT RULES */}
      {activeSubTab === 'night-double-shifts' && isSupervisor && (
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Moon className="h-5 w-5 text-purple-400" />
            <span>Night Shift (22:00 - 06:00 hrs) & Double Shift Fatigue Protocols</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300">
            <div className="bg-gray-900/90 p-4 rounded-xl border border-purple-800/40 space-y-2">
              <h4 className="font-bold text-purple-300 flex items-center gap-1">
                <Moon className="h-4 w-4" /> Night Allowance Rules
              </h4>
              <p className="text-gray-300">
                Third Shift (22:00 to 06:00 hrs) workers automatically receive statutory <strong>₹150 Night Allowance</strong> per shift + 1 free canteen meal coupon.
              </p>
            </div>

            <div className="bg-gray-900/90 p-4 rounded-xl border border-rose-800/40 space-y-2">
              <h4 className="font-bold text-rose-300 flex items-center gap-1">
                <Flame className="h-4 w-4" /> Double Shift Fatigue Protocol
              </h4>
              <p className="text-gray-300">
                Working 16 continuous hours triggers an automatic AI Fatigue Alert. 8 overtime hours are paid at <strong>2.0x Statutory Double Rate</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: EDIT PLANT SHIFT MASTER MODAL (FOR HR ADMIN) */}
      {editingShift && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-cyan-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
              <div className="flex items-center gap-2 text-cyan-300">
                <Edit className="h-5 w-5 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Edit Plant Shift Schedule ({editingShift.shiftCode})</h3>
              </div>
              <button onClick={() => setEditingShift(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveShiftEdit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Shift Name</label>
                <input
                  type="text"
                  required
                  value={editShiftName}
                  onChange={(e) => setEditShiftName(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Shift Timings (24-Hr Format)</label>
                <input
                  type="text"
                  required
                  value={editTimings}
                  onChange={(e) => setEditTimings(e.target.value)}
                  placeholder="e.g. 06:00 to 14:00 hrs"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs font-mono text-cyan-300 border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Start Time (HH:MM)</label>
                  <input
                    type="text"
                    required
                    value={editStartTime}
                    onChange={(e) => setEditStartTime(e.target.value)}
                    placeholder="06:00"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs font-mono text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">End Time (HH:MM)</label>
                  <input
                    type="text"
                    required
                    value={editEndTime}
                    onChange={(e) => setEditEndTime(e.target.value)}
                    placeholder="14:00"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs font-mono text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Duration (Hrs)</label>
                  <input
                    type="number"
                    required
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Grace (Mins)</label>
                  <input
                    type="number"
                    required
                    value={editGrace}
                    onChange={(e) => setEditGrace(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Break (Mins)</label>
                  <input
                    type="number"
                    required
                    value={editBreak}
                    onChange={(e) => setEditBreak(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-950 border border-gray-800 space-y-2">
                <label className="flex items-center gap-2 text-xs text-gray-300 font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editNightEligible}
                    onChange={(e) => setEditNightEligible(e.target.checked)}
                    className="rounded border-gray-700 bg-gray-900 text-purple-600 focus:ring-purple-500"
                  />
                  <span>Night Shift Statutory Allowance Eligible</span>
                </label>

                {editNightEligible && (
                  <div>
                    <label className="text-gray-400 font-semibold mb-1 block text-[11px]">Allowance Amount per Shift (INR)</label>
                    <input
                      type="number"
                      value={editNightAmount}
                      onChange={(e) => setEditNightAmount(e.target.value)}
                      className="w-full rounded-xl bg-gray-900 px-3 py-1.5 text-xs text-purple-300 border border-gray-800 focus:outline-none font-mono"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Shift Description</label>
                <input
                  type="text"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingShift(null)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-cyan-500 transition"
                >
                  Save Shift Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: PASTE CARD READER CSV MODAL */}
      {showCSVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Cpu className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Import Gate Card Reader CSV</h3>
              </div>
              <button onClick={() => setShowCSVModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <textarea
                rows={6}
                value={rawCSVText}
                onChange={(e) => setRawCSVText(e.target.value)}
                placeholder="Paste CSV logs from Rothe Erde Gondedumala Card Readers..."
                className="w-full rounded-xl bg-gray-950 p-3 text-xs font-mono text-white border border-gray-800 focus:outline-none"
              />

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setRawCSVText(getSampleCardReaderCSV(employees))}
                  className="text-xs text-purple-300 font-semibold hover:underline"
                >
                  Load Sample Card Logs
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const parsed = parseCardReaderCSV(rawCSVText || getSampleCardReaderCSV(employees), employees);
                    onImportCardReaderCSV(parsed.records);
                    setShowCSVModal(false);
                    alert(`✓ Ingested ${parsed.totalPunchesProcessed} card punches cleanly!`);
                  }}
                  className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white hover:bg-purple-500 transition"
                >
                  Parse & Import CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* MODAL 3: PASTE BIOMETRIC .DAT LOG FILE MODAL */}
      {showDATModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-emerald-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
              <div className="flex items-center gap-2 text-emerald-300">
                <Cpu className="h-5 w-5 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Import Biometric Hardware .DAT Log File</h3>
              </div>
              <button onClick={() => setShowDATModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <p className="text-gray-300">
                Paste raw hardware log file content exported from ZKTeco, eSSL, or Matrix gate terminals (e.g., <code className="text-emerald-300 font-mono">attlog.dat</code>):
              </p>

              <textarea
                rows={6}
                value={rawDATText}
                onChange={(e) => setRawDATText(e.target.value)}
                placeholder="REI-HR-001	2026-08-29	05:58:10	0	1	0..."
                className="w-full rounded-xl bg-gray-950 p-3 text-xs font-mono text-emerald-300 border border-gray-800 focus:outline-none leading-relaxed"
              />

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setRawDATText(getSampleBiometricDATText(employees))}
                  className="text-xs text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <Sparkles className="h-3 w-3" /> Load Sample .DAT Log File
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const parsed = parseBiometricDATFile(rawDATText || getSampleBiometricDATText(employees), employees);
                    onImportCardReaderCSV(parsed.records);
                    setShowDATModal(false);
                    alert(`✓ Successfully imported ${parsed.totalPunchesProcessed} biometric .DAT log punches!`);
                  }}
                  className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-500/20"
                >
                  Parse & Import .DAT Logs
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
