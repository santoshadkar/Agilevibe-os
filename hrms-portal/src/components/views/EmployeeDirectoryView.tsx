'use client';

import React, { useState } from 'react';
import { 
  Employee, 
  AttendanceRecord, 
  LeaveRequest, 
  UserRole, 
  EmployeeType 
} from '../../types/hrms';
import { parseCardReaderCSV, getSampleCardReaderCSV } from '../../lib/cardReaderParser';
import { parseExcelDataForMigration } from '../../lib/aiEngine';
import { SensitiveSalaryMask } from '../ui/SensitiveSalaryMask';
import { 
  Search, 
  Filter, 
  Plus, 
  User, 
  ShieldCheck, 
  Building2, 
  Clock, 
  CheckCircle, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard,
  Network,
  Upload,
  FileSpreadsheet,
  Cpu,
  AlertTriangle,
  Sparkles,
  Download
} from 'lucide-react';

interface EmployeeDirectoryViewProps {
  employees: Employee[];
  attendance: AttendanceRecord[];
  leaves: LeaveRequest[];
  currentRole: UserRole;
  onAddEmployee: (emp: Employee) => void;
  onCheckIn: (employeeId: string, location: string) => void;
  onImportCardReaderCSV?: (newRecords: AttendanceRecord[]) => void;
}

export const EmployeeDirectoryView: React.FC<EmployeeDirectoryViewProps> = ({
  employees,
  attendance,
  leaves,
  currentRole,
  onAddEmployee,
  onCheckIn,
  onImportCardReaderCSV
}) => {
  const [subTab, setSubTab] = useState<'directory' | 'orgchart' | 'attendance' | 'leaves'>('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [filterDept, setFilterDept] = useState<string>('ALL');
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkExcelModal, setShowBulkExcelModal] = useState(false);
  const [excelParsedResults, setExcelParsedResults] = useState<any[]>([]);
  const [isExcelImported, setIsExcelImported] = useState(false);

  // Card Reader CSV Importer State
  const [showCardReaderImporter, setShowCardReaderImporter] = useState(false);
  const [rawCardCSV, setRawCardCSV] = useState('');
  const [cardImportSummary, setCardImportSummary] = useState<any>(null);

  // New Employee Form State
  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpType, setNewEmpType] = useState<EmployeeType>('PERMANENT');
  const [newEmpDept, setNewEmpDept] = useState<any>('Ring Forging');
  const [newEmpWage, setNewEmpWage] = useState('45000');
  const [newEmpPan, setNewEmpPan] = useState('');
  const [newEmpAadhaar, setNewEmpAadhaar] = useState('');

  const handleLoadSampleExcel = () => {
    const rawSampleData = [
      { 'Emp Name': 'Vishal Deshmukh', 'Emp Type': 'Permanent Staff', 'Dept': 'Ring Forging', 'Daily Wage': '65000', 'PAN': 'AWXPD8812K', 'Aadhaar': '9012 8812 7711', 'Mobile': '+91 98220 11902' },
      { 'Emp Name': 'Mahesh More', 'Emp Type': 'Contract Labour', 'Dept': 'CNC Machining', 'Daily Wage': '650', 'PAN': 'BXMPM9912L', 'Aadhaar': '3412 0012 4499', 'Mobile': '+91 97110 44102' }
    ];
    const results = parseExcelDataForMigration(rawSampleData);
    setExcelParsedResults(results);
    setIsExcelImported(false);
  };

  const handleFinalExcelImport = () => {
    const validEmps: Employee[] = excelParsedResults
      .filter(r => r.mappedEmployee)
      .map((r, idx) => ({
        id: `mig-${Date.now()}-${idx}`,
        empCode: r.mappedEmployee.empCode || `REI-MIG-${100 + idx}`,
        name: r.mappedEmployee.name || 'Worker',
        email: r.mappedEmployee.email || 'worker@rotheerde.in',
        phone: r.mappedEmployee.phone || '+91 98000 00000',
        role: r.mappedEmployee.role || 'DAILY_WAGE_WORKER',
        empType: r.mappedEmployee.empType || 'CONTRACT_LABOUR',
        department: r.mappedEmployee.department || 'Ring Forging',
        designation: r.mappedEmployee.designation || 'Shopfloor Assistant',
        shift: 'Morning (6 AM - 2 PM)',
        joinDate: new Date().toISOString().split('T')[0],
        status: 'ACTIVE',
        baseSalaryMonthly: r.mappedEmployee.baseSalaryMonthly || 0,
        dailyWageRate: r.mappedEmployee.dailyWageRate || 650,
        bankDetails: r.mappedEmployee.bankDetails || { accountNumber: '918273645012', ifscCode: 'SBIN0004120', bankName: 'State Bank of India' },
        statutoryIds: r.mappedEmployee.statutoryIds || { pan: 'ABCPS9910K', aadhaar: '9012 3412 8899' },
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
      }));

    validEmps.forEach(emp => onAddEmployee(emp));
    setIsExcelImported(true);
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          emp.empCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          emp.designation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'ALL' || emp.empType === filterType;
    const matchesDept = filterDept === 'ALL' || emp.department === filterDept;
    return matchesSearch && matchesType && matchesDept;
  });

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Employee = {
      id: `emp-${Date.now()}`,
      empCode: `WM-${newEmpDept.substring(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      name: newEmpName || 'New Worker',
      email: `${newEmpName.toLowerCase().replace(/\s+/g, '.')}@windmillrings.in`,
      phone: '+91 98000 11223',
      role: newEmpType === 'PERMANENT' ? 'PERMANENT_STAFF' : 'DAILY_WAGE_WORKER',
      empType: newEmpType,
      department: newEmpDept,
      designation: newEmpType === 'PERMANENT' ? 'Maintenance Engineer' : 'Shopfloor Assistant',
      shift: 'Morning (6 AM - 2 PM)',
      joinDate: new Date().toISOString().split('T')[0],
      status: 'ACTIVE',
      baseSalaryMonthly: newEmpType === 'PERMANENT' ? Number(newEmpWage) : 0,
      dailyWageRate: newEmpType !== 'PERMANENT' ? Number(newEmpWage) : undefined,
      bankDetails: {
        accountNumber: '918273645012',
        ifscCode: 'HDFC0000240',
        bankName: 'HDFC Bank - Pune'
      },
      statutoryIds: {
        pan: newEmpPan || 'ABCPS9910K',
        aadhaar: newEmpAadhaar || '9012 3412 8899'
      },
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    };
    onAddEmployee(created);
    setShowAddModal(false);
    setNewEmpName('');
  };

  const handleSimulateCardReaderImport = () => {
    const sampleCSV = getSampleCardReaderCSV(employees);
    setRawCardCSV(sampleCSV);
    const parsed = parseCardReaderCSV(sampleCSV, employees);
    setCardImportSummary(parsed);
    if (onImportCardReaderCSV && parsed.records.length > 0) {
      onImportCardReaderCSV(parsed.records);
    }
  };

  const handleProcessRawCSV = () => {
    if (!rawCardCSV.trim()) return;
    const parsed = parseCardReaderCSV(rawCardCSV, employees);
    setCardImportSummary(parsed);
    if (onImportCardReaderCSV && parsed.records.length > 0) {
      onImportCardReaderCSV(parsed.records);
    }
  };

  if (currentRole === 'PERMANENT_STAFF' || currentRole === 'DAILY_WAGE_WORKER') {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-rose-500/30 text-center space-y-4 max-w-2xl mx-auto my-12 shadow-2xl">
        <div className="h-12 w-12 rounded-2xl bg-rose-950 text-rose-400 flex items-center justify-center mx-auto border border-rose-800">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-white">Data Privacy Protection Active</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Access to the full 750-workforce directory and employee profile records is restricted to <strong>HR Administrators</strong> and <strong>Plant Supervisors</strong> to prevent unauthorized data exposure per ISO 27001 compliance standards.
          </p>
        </div>
        <div className="pt-2 text-xs text-gray-400 font-mono bg-gray-950 p-3 rounded-xl border border-gray-800">
          Logged in as: {currentRole} • Personal data protected.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* View Header & Sub-Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-4 rounded-2xl">
        <div>
          <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
            <User className="h-5 w-5 text-blue-400" />
            <span>Core HR & Workforce Lifecycle</span>
          </h2>
          <p className="text-xs text-gray-400">
            Single Source of Truth for 750 Employees (Permanent & Daily-Wage Labour)
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex items-center gap-2 bg-gray-900/90 p-1 rounded-xl border border-gray-800">
          <button
            onClick={() => setSubTab('directory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'directory' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Employee Directory
          </button>
          <button
            onClick={() => setSubTab('orgchart')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'orgchart' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Org Chart
          </button>
          <button
            onClick={() => setSubTab('attendance')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'attendance' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Attendance & Card Reader
          </button>
          <button
            onClick={() => setSubTab('leaves')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'leaves' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Leave Ledger
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: EMPLOYEE DIRECTORY */}
      {subTab === 'directory' && (
        <div className="space-y-4">
          {/* Controls bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 glass-panel p-3 rounded-xl">
            <div className="flex items-center gap-2 w-full md:w-auto flex-1">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search name, code, designation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 pl-9 pr-3 py-2 text-xs text-gray-200 border border-gray-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Type Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="rounded-xl bg-gray-950 px-3 py-2 text-xs text-gray-300 border border-gray-800 focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Employment Types</option>
                <option value="PERMANENT">Permanent Staff</option>
                <option value="CONTRACT_LABOUR">Contract Labour</option>
                <option value="DIRECT_DAILY_WAGE">Direct Daily Wage</option>
              </select>

              {/* Department Filter */}
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className="rounded-xl bg-gray-950 px-3 py-2 text-xs text-gray-300 border border-gray-800 focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Departments</option>
                <option value="Ring Forging">Ring Forging</option>
                <option value="CNC Machining">CNC Machining</option>
                <option value="Quality Inspection">Quality Inspection</option>
                <option value="Plant Maintenance">Plant Maintenance</option>
                <option value="Safety & Admin">Safety & Admin</option>
                <option value="HR & Finance">HR & Finance</option>
              </select>
            </div>

            {currentRole === 'HR_ADMIN' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowBulkExcelModal(true)}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500 transition"
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>📊 Import Bulk Excel / CSV</span>
                </button>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition"
                >
                  <Plus className="h-4 w-4" />
                  <span>+ Add Single Employee</span>
                </button>
              </div>
            )}
          </div>

          {/* Directory Table */}
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="py-3.5 px-4">Employee</th>
                    <th className="py-3.5 px-4">Type & Role</th>
                    <th className="py-3.5 px-4">Department & Shift</th>
                    <th className="py-3.5 px-4">Statutory IDs (PAN/Aadhaar)</th>
                    <th className="py-3.5 px-4">Base Salary / Daily Rate</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {filteredEmployees.map(emp => (
                    <tr key={emp.id} className="hover:bg-gray-900/40 transition">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={emp.avatar}
                            alt={emp.name}
                            className="h-9 w-9 rounded-full object-cover border border-gray-700"
                          />
                          <div>
                            <p className="font-bold text-white text-xs">{emp.name}</p>
                            <p className="text-[11px] text-gray-400">{emp.empCode} • {emp.designation}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          emp.empType === 'PERMANENT' ? 'badge-permanent' :
                          emp.empType === 'CONTRACT_LABOUR' ? 'badge-contract' : 'badge-daily'
                        }`}>
                          {emp.empType.replace('_', ' ')}
                        </span>
                        {emp.contractorName && (
                          <p className="text-[10px] text-amber-400/90 mt-0.5 truncate max-w-[140px]">
                            {emp.contractorName}
                          </p>
                        )}
                      </td>

                      <td className="py-3 px-4">
                        <p className="font-medium text-gray-200">{emp.department}</p>
                        <p className="text-[10px] text-gray-400">{emp.shift}</p>
                      </td>

                      <td className="py-3 px-4 font-mono text-[11px]">
                        <p className="text-gray-300">PAN: {emp.statutoryIds.pan}</p>
                        <p className="text-gray-400">AADHAAR: {emp.statutoryIds.aadhaar}</p>
                      </td>

                      <td className="py-3 px-4 font-semibold text-emerald-400">
                        <SensitiveSalaryMask 
                          value={emp.empType === 'PERMANENT' ? emp.baseSalaryMonthly : (emp.dailyWageRate || 650)} 
                          suffix={emp.empType === 'PERMANENT' ? ' / mo' : ' / day'}
                        />
                      </td>

                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => setSelectedEmp(emp)}
                          className="rounded-lg bg-gray-800 px-3 py-1.5 text-[11px] font-semibold text-blue-400 hover:bg-gray-700 transition"
                        >
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: ORG CHART */}
      {subTab === 'orgchart' && (
        <div className="glass-panel p-6 rounded-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Network className="h-4 w-4 text-purple-400" />
                <span>Manufacturing Plant Organizational Hierarchy</span>
              </h3>
              <p className="text-xs text-gray-400">Reporting Structure across Shopfloor Bays & Management</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="glass-panel p-4 rounded-xl border-blue-500/40 text-center space-y-1 w-64 shadow-lg shadow-blue-500/10">
                <p className="text-[10px] font-bold uppercase text-blue-400">Head of Human Resources</p>
                <p className="text-sm font-extrabold text-white">Mandar Parashare</p>
                <p className="text-xs text-gray-400">REI-HR-001 • Executive HR & Finance</p>
              </div>
            </div>

            <div className="w-0.5 h-6 bg-blue-500/40 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-4 rounded-xl border-amber-500/30 text-center space-y-1">
                <p className="text-[10px] font-bold uppercase text-amber-400">Chief Forging Supervisor</p>
                <p className="text-sm font-bold text-white">Suresh Patil</p>
                <p className="text-xs text-gray-400">Ring Forging Bay (290 Workers)</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border-cyan-500/30 text-center space-y-1">
                <p className="text-[10px] font-bold uppercase text-cyan-400">CNC Milling & Turning Lead</p>
                <p className="text-sm font-bold text-white">Amitabh Verma</p>
                <p className="text-xs text-gray-400">CNC Machining Bay (210 Workers)</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border-emerald-500/30 text-center space-y-1">
                <p className="text-[10px] font-bold uppercase text-emerald-400">Metallurgical Quality Lead</p>
                <p className="text-sm font-bold text-white">Ananya Deshmukh</p>
                <p className="text-xs text-gray-400">Quality Inspection (100 Workers)</p>
              </div>
            </div>

            <div className="w-0.5 h-6 bg-gray-700 mx-auto" />

            <div className="glass-panel p-4 rounded-xl text-center max-w-2xl mx-auto space-y-2 bg-gray-950/60">
              <p className="text-xs font-bold text-gray-300">Shopfloor Daily Wage & Contract Labour Crew (250 Workers)</p>
              <p className="text-[11px] text-gray-400">
                Managed via Apex Industrial Manpower Services Pvt Ltd & Plant Daily-Wage Roster. Tracked for Contract Labour Act Form V Muster-Roll Compliance.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: ATTENDANCE & CARD READER CSV IMPORTER */}
      {subTab === 'attendance' && (
        <div className="space-y-6">
          {/* Card Reader CSV & Web Kiosk Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card Reader CSV Importer Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/90 to-purple-950/90 p-5 border border-purple-800/40 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-purple-300">
                <Cpu className="h-5 w-5 text-purple-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Hardware Integration • Card Reader CSV Importer</span>
              </div>
              <h3 className="text-base font-bold text-white">Shopfloor RFID / Biometric Card Reader CSV Import</h3>
              <p className="text-xs text-gray-300">
                Directly import punch logs from plant gate Card Readers (.csv format). Automatically resolves Card No to Employee Code, checks for late arrivals, and calculates overtime.
              </p>
              <button
                onClick={() => setShowCardReaderImporter(true)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition"
              >
                <FileSpreadsheet className="h-4 w-4 text-purple-200" />
                <span>Open Card Reader CSV Importer</span>
              </button>
            </div>

            {/* Shopfloor Kiosk Simulator Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-950/90 to-cyan-950/90 p-5 border border-emerald-800/40 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-300">
                <Clock className="h-5 w-5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider">Plant Terminal • Web Check-In</span>
              </div>
              <h3 className="text-base font-bold text-white">Shopfloor Gate & Web Check-in Terminal</h3>
              <p className="text-xs text-gray-300">
                Fallback web terminal for workers checking in without physical cards. Instantly updates attendance ledger.
              </p>
              <button
                onClick={() => onCheckIn('emp-301', 'Chakan Plant 1 - Main Kiosk')}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500 transition"
              >
                <Clock className="h-4 w-4" />
                <span>Simulate Web Check-In (Ananya Deshmukh)</span>
              </button>
            </div>
          </div>

          {/* Attendance Log Table */}
          <div className="glass-panel rounded-2xl overflow-hidden p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Today's Plant Shift Attendance Log</h3>
              <span className="text-xs text-purple-400 font-semibold flex items-center gap-1">
                <Cpu className="h-3.5 w-3.5" /> Synchronized with Shopfloor Card Readers & Kiosk
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="py-3 px-4">Employee</th>
                    <th className="py-3 px-4">Department & Shift</th>
                    <th className="py-3 px-4">Check-In / Out</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Source</th>
                    <th className="py-3 px-4">OT Hours</th>
                    <th className="py-3 px-4">Terminal Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {attendance.map(att => (
                    <tr key={att.id} className="hover:bg-gray-900/40 transition">
                      <td className="py-3 px-4 font-bold text-white">{att.employeeName} ({att.empCode})</td>
                      <td className="py-3 px-4">{att.department} • {att.shift}</td>
                      <td className="py-3 px-4 font-mono">{att.checkIn} - {att.checkOut}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold ${
                          att.status === 'PRESENT' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                          att.status === 'LATE' ? 'bg-amber-950 text-amber-400 border border-amber-800' : 'bg-rose-950 text-rose-400'
                        }`}>
                          {att.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          att.source === 'CARD_READER_CSV' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-blue-950 text-blue-300 border border-blue-800'
                        }`}>
                          {att.source === 'CARD_READER_CSV' ? <Cpu className="h-3 w-3 text-purple-400" /> : <Clock className="h-3 w-3 text-blue-400" />}
                          {att.source === 'CARD_READER_CSV' ? 'Card Reader' : 'Web Kiosk'}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-amber-400">+{att.overtimeHours} hrs</td>
                      <td className="py-3 px-4 text-gray-400">{att.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: LEAVE LEDGER */}
      {subTab === 'leaves' && (
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">Employee Leave Ledger & Requests</h3>
              <p className="text-xs text-gray-400">Casual, Sick, and Privilege Leave Approval Matrix</p>
            </div>
          </div>

          <div className="space-y-3">
            {leaves.map(lve => (
              <div key={lve.id} className="rounded-xl bg-gray-900/90 p-4 border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-xs">{lve.employeeName} ({lve.empCode})</span>
                    <span className="rounded-md bg-purple-950 px-2 py-0.5 text-[10px] font-bold text-purple-300 border border-purple-800">
                      {lve.leaveType} LEAVE
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">Reason: "{lve.reason}"</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Duration: {lve.startDate} to {lve.endDate} ({lve.days} days) • Applied: {lve.appliedOn}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    lve.status === 'APPROVED' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                  }`}>
                    {lve.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CARD READER CSV IMPORTER MODAL */}
      {showCardReaderImporter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Cpu className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Card Reader Biometric / RFID CSV Punch Importer</h3>
              </div>
              <button onClick={() => setShowCardReaderImporter(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-gray-300">
                Paste raw punch logs exported from shopfloor RFID / Biometric Card Readers or simulate a sample hardware export.
              </p>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Card Reader CSV Content (Card_No, Emp_Code, Punch_Timestamp, Reader_Terminal, Direction)</label>
                <textarea
                  rows={5}
                  value={rawCardCSV}
                  onChange={(e) => setRawCardCSV(e.target.value)}
                  placeholder="Card_No,Emp_Code,Punch_Timestamp,Reader_Terminal,Direction..."
                  className="w-full rounded-xl bg-gray-950 p-3 text-xs text-white font-mono border border-gray-800 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSimulateCardReaderImport}
                  className="flex-1 rounded-xl bg-purple-600 py-2.5 text-xs font-bold text-white hover:bg-purple-500 transition shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Simulate Card Reader Batch CSV Import (Sample Hardware Export)</span>
                </button>

                <button
                  type="button"
                  onClick={handleProcessRawCSV}
                  className="rounded-xl bg-gray-800 px-5 py-2.5 text-xs font-bold text-gray-200 hover:bg-gray-700 transition"
                >
                  Process Pasted CSV
                </button>
              </div>

              {cardImportSummary && (
                <div className="bg-gray-950/90 p-4 rounded-xl border border-purple-900/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4" /> Card Punch Batch Import Completed
                    </span>
                    <span className="text-xs font-bold text-white">
                      {cardImportSummary.matchedEmployeesCount} Workers Updated
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="bg-gray-900 p-2 rounded-lg border border-gray-800">
                      <p className="text-gray-400">Total Punches</p>
                      <p className="font-bold text-white text-sm">{cardImportSummary.totalPunchesProcessed}</p>
                    </div>
                    <div className="bg-gray-900 p-2 rounded-lg border border-gray-800">
                      <p className="text-gray-400">Matched Workers</p>
                      <p className="font-bold text-emerald-400 text-sm">{cardImportSummary.matchedEmployeesCount}</p>
                    </div>
                    <div className="bg-gray-900 p-2 rounded-lg border border-gray-800">
                      <p className="text-gray-400">Unmatched Punches</p>
                      <p className="font-bold text-amber-400 text-sm">{cardImportSummary.unmatchedPunchesCount}</p>
                    </div>
                  </div>

                  {cardImportSummary.warnings.length > 0 && (
                    <div className="space-y-1 text-amber-400 text-[11px] pt-1">
                      {cardImportSummary.warnings.map((w: string, i: number) => (
                        <p key={i} className="flex items-center gap-1">
                          <AlertTriangle className="h-3.5 w-3.5 shrink-0" /> {w}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowCardReaderImporter(false)}
                className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white hover:bg-purple-500 transition"
              >
                Close & View Attendance Ledger
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EMPLOYEE DETAIL MODAL */}
      {selectedEmp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-gray-700 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center gap-3">
                <img src={selectedEmp.avatar} alt={selectedEmp.name} className="h-12 w-12 rounded-full object-cover border border-gray-600" />
                <div>
                  <h3 className="text-sm font-bold text-white">{selectedEmp.name}</h3>
                  <p className="text-xs text-gray-400">{selectedEmp.empCode} • {selectedEmp.designation}</p>
                </div>
              </div>
              <button onClick={() => setSelectedEmp(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="grid grid-cols-2 gap-3 bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                <div>
                  <p className="text-gray-400 text-[10px]">Employment Type</p>
                  <p className="font-bold text-white">{selectedEmp.empType}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Department</p>
                  <p className="font-bold text-white">{selectedEmp.department}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Shift Schedule</p>
                  <p className="font-bold text-white">{selectedEmp.shift}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Joining Date</p>
                  <p className="font-bold text-white">{selectedEmp.joinDate}</p>
                </div>
              </div>

              {/* Statutory Info */}
              <div className="bg-blue-950/40 p-3 rounded-xl border border-blue-800/40 space-y-1">
                <p className="text-[10px] font-bold uppercase text-blue-400 flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> Statutory Identifiers
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <p>PAN: <strong className="text-white">{selectedEmp.statutoryIds.pan}</strong></p>
                  <p>AADHAAR: <strong className="text-white">{selectedEmp.statutoryIds.aadhaar}</strong></p>
                  {selectedEmp.statutoryIds.uan && <p>UAN: <strong className="text-white">{selectedEmp.statutoryIds.uan}</strong></p>}
                  {selectedEmp.statutoryIds.esiNo && <p>ESI No: <strong className="text-white">{selectedEmp.statutoryIds.esiNo}</strong></p>}
                </div>
              </div>

              {/* Bank Account */}
              <div className="bg-gray-900/90 p-3 rounded-xl border border-gray-800 space-y-1">
                <p className="text-[10px] font-bold uppercase text-emerald-400 flex items-center gap-1">
                  <CreditCard className="h-3 w-3" /> Salary Bank Account Details
                </p>
                <p className="text-[11px]">Bank: {selectedEmp.bankDetails.bankName}</p>
                <p className="text-[11px] font-mono">A/C: {selectedEmp.bankDetails.accountNumber} • IFSC: {selectedEmp.bankDetails.ifscCode}</p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setSelectedEmp(null)}
                className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-200 hover:bg-gray-700 transition"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD EMPLOYEE MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <form onSubmit={handleCreateEmployee} className="w-full max-w-md rounded-2xl glass-modal p-6 border border-gray-700 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <h3 className="text-sm font-bold text-white">Add New Employee Record</h3>
              <button type="button" onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Switch to Bulk Excel Banner */}
            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-300 font-medium">
                <FileSpreadsheet className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Need to add multiple employees at once?</span>
              </div>
              <button
                type="button"
                onClick={() => { setShowAddModal(false); setShowBulkExcelModal(true); }}
                className="font-bold text-emerald-400 hover:text-emerald-200 underline ml-2 shrink-0"
              >
                Bulk Excel Upload →
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={newEmpName}
                  onChange={(e) => setNewEmpName(e.target.value)}
                  placeholder="e.g. Ramesh Kulkarni"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Employment Type</label>
                  <select
                    value={newEmpType}
                    onChange={(e) => setNewEmpType(e.target.value as EmployeeType)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="PERMANENT">Permanent Staff</option>
                    <option value="CONTRACT_LABOUR">Contract Labour</option>
                    <option value="DIRECT_DAILY_WAGE">Direct Daily Wage</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Department</label>
                  <select
                    value={newEmpDept}
                    onChange={(e) => setNewEmpDept(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="Ring Forging">Ring Forging</option>
                    <option value="CNC Machining">CNC Machining</option>
                    <option value="Quality Inspection">Quality Inspection</option>
                    <option value="Plant Maintenance">Plant Maintenance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">
                  {newEmpType === 'PERMANENT' ? 'Monthly Base Salary (₹)' : 'Daily Wage Rate (₹/day)'}
                </label>
                <input
                  type="number"
                  required
                  value={newEmpWage}
                  onChange={(e) => setNewEmpWage(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">PAN Number</label>
                  <input
                    type="text"
                    value={newEmpPan}
                    onChange={(e) => setNewEmpPan(e.target.value)}
                    placeholder="ABCDE1234F"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Aadhaar Number</label>
                  <input
                    type="text"
                    value={newEmpAadhaar}
                    onChange={(e) => setNewEmpAadhaar(e.target.value)}
                    placeholder="1234 5678 9012"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition"
              >
                Save Employee Record
              </button>
            </div>
          </form>
        </div>
      )}

      {/* BULK EXCEL UPLOAD MODAL */}
      {showBulkExcelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-2xl glass-modal p-6 border border-emerald-500/40 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <FileSpreadsheet className="h-6 w-6" />
                <div>
                  <h3 className="text-base font-extrabold text-white">Bulk Excel / CSV Workforce Data Importer</h3>
                  <p className="text-[11px] text-gray-400">Import 50 to 500+ employees with AI column auto-mapping (Name, Dept, Salary, PAN, Aadhaar, Bank Details)</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setShowBulkExcelModal(false); setExcelParsedResults([]); setIsExcelImported(false); }}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Demo Loader */}
            {!isExcelImported && (
              <div className="bg-gradient-to-r from-emerald-950/80 to-teal-950/80 p-4 rounded-xl border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span>Test Demo Excel File Importer</span>
                  </p>
                  <p className="text-[11px] text-gray-300">Test parsing a sample Excel sheet containing Permanent Staff & Contract Labour records.</p>
                </div>
                <button
                  type="button"
                  onClick={handleLoadSampleExcel}
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/20 shrink-0"
                >
                  ⚡ Load Customer Sample Excel (2 Records)
                </button>
              </div>
            )}

            {/* Drag and Drop Zone */}
            {excelParsedResults.length === 0 && !isExcelImported && (
              <div
                onClick={handleLoadSampleExcel}
                className="border-2 border-dashed border-gray-700 hover:border-emerald-500 rounded-2xl p-8 text-center cursor-pointer transition bg-gray-950/60 space-y-3"
              >
                <div className="h-12 w-12 rounded-2xl bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-800">
                  <Upload className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">Click or Drag & Drop your Employee Excel / CSV File</p>
                  <p className="text-[11px] text-gray-400">Supports .xlsx, .xls, and .csv formats (Auto-validates PAN, Aadhaar, Bank Details)</p>
                </div>
              </div>
            )}

            {/* Preview Parsed Results */}
            {excelParsedResults.length > 0 && !isExcelImported && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{excelParsedResults.length} Verified Employee Records Ready</span>
                  <span className="text-emerald-400 font-semibold">100% AI Mapping Confidence</span>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {excelParsedResults.map((res, i) => (
                    <div key={i} className="bg-gray-950 p-3 rounded-xl border border-gray-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-emerald-950 text-emerald-400 font-bold flex items-center justify-center border border-emerald-800">
                          #{i + 1}
                        </div>
                        <div>
                          <p className="font-bold text-white">{res.mappedEmployee.name} <span className="text-gray-400 font-normal">({res.mappedEmployee.empCode})</span></p>
                          <p className="text-[10px] text-gray-400">{res.mappedEmployee.department} • {res.mappedEmployee.empType} • Wage/Salary: ₹{res.mappedEmployee.baseSalaryMonthly || res.mappedEmployee.dailyWageRate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-full bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-800 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" /> Validated
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setExcelParsedResults([])}
                    className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                  >
                    Reset File
                  </button>
                  <button
                    type="button"
                    onClick={handleFinalExcelImport}
                    className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/30 flex items-center gap-1.5"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Import {excelParsedResults.length} Employees to Portal</span>
                  </button>
                </div>
              </div>
            )}

            {/* Success State */}
            {isExcelImported && (
              <div className="bg-emerald-950/80 p-6 rounded-2xl border border-emerald-500/50 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-white">Bulk Excel Import Successful!</h4>
                  <p className="text-xs text-emerald-200">
                    {excelParsedResults.length} new employee records have been imported into the live system database. You can now view them in the Employee Directory!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => { setShowBulkExcelModal(false); setExcelParsedResults([]); setIsExcelImported(false); }}
                  className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/30"
                >
                  Close & View Directory
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
