'use client';

import React, { useState } from 'react';
import { 
  Employee, 
  LeaveRequest, 
  JobPosting, 
  AssignedLearning, 
  HolidayCalendarItem, 
  UserRole 
} from '../../types/hrms';
import { generateAIJobDescription } from '../../lib/aiEngine';
import { 
  Network, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Send, 
  CheckCircle, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Plus, 
  Download, 
  ChevronRight,
  UserCheck,
  Building2,
  Check,
  X,
  Search,
  MapPin,
  AlertTriangle,
  Lock
} from 'lucide-react';

interface EmployeeSelfServiceHubViewProps {
  employees: Employee[];
  leaves: LeaveRequest[];
  jobs: JobPosting[];
  learnings: AssignedLearning[];
  holidays: HolidayCalendarItem[];
  currentUser: Employee;
  currentRole: UserRole;
  activeSubTab: 'orgchart' | 'leaves' | 'ijp' | 'learnings' | 'holiday-calendar';
  setActiveSubTab: (tab: 'orgchart' | 'leaves' | 'ijp' | 'learnings' | 'holiday-calendar') => void;
  onApplyLeave: (leave: LeaveRequest) => void;
  onAddJobPosting?: (newJob: JobPosting) => void;
  onAddHoliday?: (holiday: HolidayCalendarItem) => void;
}

export const EmployeeSelfServiceHubView: React.FC<EmployeeSelfServiceHubViewProps> = ({
  employees,
  leaves,
  jobs,
  learnings,
  holidays,
  currentUser,
  currentRole,
  activeSubTab,
  setActiveSubTab,
  onApplyLeave,
  onAddJobPosting,
  onAddHoliday
}) => {
  // Leave Form State
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveType, setLeaveType] = useState<any>('CASUAL');
  const [startDate, setStartDate] = useState('2026-09-10');
  const [endDate, setEndDate] = useState('2026-09-11');
  const [reason, setReason] = useState('Personal family event in Nashik');
  const [isLeaveSubmitted, setIsLeaveSubmitted] = useState(false);

  // Applied IJPs state
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  // IJP Search & Location Filter State
  const [ijpLocationFilter, setIjpLocationFilter] = useState<string>('ALL');
  const [ijpSearchQuery, setIjpSearchQuery] = useState<string>('');

  // Tenure Error Modal State
  const [tenureErrorModal, setTenureErrorModal] = useState<{
    show: boolean;
    jobTitle: string;
    tenureMonths: number;
  }>({ show: false, jobTitle: '', tenureMonths: 0 });

  // Create New IJP Modal State (For Admin & Supervisor)
  const [showCreateIJPModal, setShowCreateIJPModal] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobDept, setNewJobDept] = useState<any>('Ring Forging');
  const [newJobLocation, setNewJobLocation] = useState('Industrial Area, Gondedumala, Maharashtra');
  const [newJobExp, setNewJobExp] = useState('3 - 6 years');
  const [newJobDesc, setNewJobDesc] = useState('');
  const [newJobSkills, setNewJobSkills] = useState('Ring Rolling Mill, Hydraulic Press, Shopfloor Safety');

  // Add Plant Holiday State (HR Admin)
  const [showAddHolidayModal, setShowAddHolidayModal] = useState(false);
  const [newHolName, setNewHolName] = useState('');
  const [newHolDate, setNewHolDate] = useState('2026-11-26');
  const [newHolDay, setNewHolDay] = useState('Thursday');
  const [newHolType, setNewHolType] = useState<any>('FESTIVAL');

  const handleAddHolidaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHolName.trim()) return;

    const newHol: HolidayCalendarItem = {
      id: `hol-${Date.now()}`,
      holidayName: newHolName,
      date: newHolDate,
      day: newHolDay,
      type: newHolType,
      mandatory: true
    };

    if (onAddHoliday) onAddHoliday(newHol);
    setShowAddHolidayModal(false);
    setNewHolName('');
    alert(`Plant Holiday "${newHol.holidayName}" added to 2026 Official Calendar!`);
  };

  const isSupervisorOrAdmin = currentRole === 'HR_ADMIN' || currentRole === 'PLANT_SUPERVISOR';

  // Calculate Tenure Months for Current User
  const calculateTenureMonths = (joinDateStr: string): number => {
    const join = new Date(joinDateStr);
    const now = new Date('2026-08-29'); // Current plant date
    const years = now.getFullYear() - join.getFullYear();
    const months = now.getMonth() - join.getMonth();
    return Math.max(0, years * 12 + months);
  };

  // Filter leaves for current user
  const myLeaves = leaves.filter(l => l.employeeId === currentUser.id);

  // Filter IJPs based on location and search query
  const filteredJobs = jobs.filter(job => {
    const matchesLocation = ijpLocationFilter === 'ALL' || job.location.toLowerCase().includes(ijpLocationFilter.toLowerCase());
    const matchesSearch = job.title.toLowerCase().includes(ijpSearchQuery.toLowerCase()) ||
                          job.department.toLowerCase().includes(ijpSearchQuery.toLowerCase()) ||
                          job.requiredSkills.some(s => s.toLowerCase().includes(ijpSearchQuery.toLowerCase()));
    return matchesLocation && matchesSearch;
  });

  const handleLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLeave: LeaveRequest = {
      id: `lve-${Date.now()}`,
      employeeId: currentUser.id,
      employeeName: currentUser.name,
      empCode: currentUser.empCode,
      department: currentUser.department,
      leaveType,
      startDate,
      endDate,
      days: 2,
      reason,
      status: 'PENDING',
      appliedOn: new Date().toISOString().split('T')[0]
    };

    onApplyLeave(newLeave);
    setIsLeaveSubmitted(true);
    setTimeout(() => {
      setIsLeaveSubmitted(false);
      setShowLeaveModal(false);
    }, 1200);
  };

  const handleApplyIJP = (job: JobPosting) => {
    const tenureMonths = calculateTenureMonths(currentUser.joinDate);
    
    // 12-MONTH TENURE CHECK REQUIREMENT
    if (tenureMonths < 12) {
      setTenureErrorModal({
        show: true,
        jobTitle: job.title,
        tenureMonths
      });
      return;
    }

    setAppliedJobs(prev => [...prev, job.id]);
    alert(`✓ Success! Your internal job transfer application for "${job.title}" at Rothe Erde India has been submitted to HR. (Tenure Verified: ${tenureMonths} Months in ${currentUser.department})`);
  };

  const handleCreateIJP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim()) return;

    const createdJob: JobPosting = {
      id: `job-${Date.now()}`,
      title: newJobTitle,
      department: newJobDept,
      location: newJobLocation,
      type: 'FULL_TIME',
      experienceYears: newJobExp,
      status: 'OPEN',
      applicantsCount: 0,
      description: newJobDesc || 'Key role at Rothe Erde India Gondedumala plant operations.',
      requiredSkills: newJobSkills.split(',').map(s => s.trim()).filter(Boolean)
    };

    if (onAddJobPosting) {
      onAddJobPosting(createdJob);
    }
    setShowCreateIJPModal(false);
    setNewJobTitle('');
    setNewJobDesc('');
    alert(`Internal Job Posting "${createdJob.title}" has been published to the plant portal!`);
  };

  return (
    <div className="space-y-6">
      {/* View Header & Navigation Sub-Tabs */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-purple-950/90 p-6 border border-blue-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-900/80 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-700">
              Rothe Erde India • Self-Service Hub
            </span>
            <span className="text-xs text-gray-400">• Employee Mobility & Statutory Rights</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            Workforce Portal: Org Chart, Leaves, IJPs, Learnings & Calendar
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            Single pane access to company organization structure, leave balances & applications, internal job postings, mandatory safety trainings, and annual plant holidays.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {activeSubTab === 'leaves' && (
            <button
              onClick={() => setShowLeaveModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span>Apply for Leave</span>
            </button>
          )}

          {activeSubTab === 'ijp' && isSupervisorOrAdmin && (
            <button
              onClick={() => setShowCreateIJPModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span>Create New IJP</span>
            </button>
          )}
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800">
        <button
          onClick={() => setActiveSubTab('orgchart')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'orgchart' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Network className="h-4 w-4" />
          <span>Org Chart & Hierarchy</span>
        </button>

        <button
          onClick={() => setActiveSubTab('leaves')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'leaves' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Calendar className="h-4 w-4" />
          <span>My Leaves & Balance</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ijp')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'ijp' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Briefcase className="h-4 w-4" />
          <span>Internal Job Postings (IJP)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('learnings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'learnings' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          <span>Assigned Learnings & Safety</span>
        </button>

        <button
          onClick={() => setActiveSubTab('holiday-calendar')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'holiday-calendar' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Calendar className="h-4 w-4 text-purple-400" />
          <span>2026 Plant Holiday Calendar</span>
        </button>
      </div>

      {/* SUB-TAB 1: ORG CHART & HIERARCHY */}
      {activeSubTab === 'orgchart' && (
        <div className="glass-panel p-6 rounded-2xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Network className="h-5 w-5 text-blue-400" />
              <span>Rothe Erde India Pvt. Ltd. — Plant Org Structure</span>
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Gondedumala Manufacturing Plant Leadership & Department Reporting Hierarchy
            </p>
          </div>

          <div className="space-y-6">
            {/* Level 1: Executive Leadership */}
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/50 shadow-xl text-center space-y-1 min-w-[260px]">
                <img src={employees[0].avatar} alt={employees[0].name} className="h-14 w-14 rounded-full mx-auto object-cover border-2 border-blue-400" />
                <p className="text-xs font-extrabold text-white">{employees[0].name}</p>
                <p className="text-[11px] text-blue-300 font-semibold">{employees[0].designation}</p>
                <span className="inline-block rounded-md bg-blue-900/80 px-2 py-0.5 text-[10px] font-bold text-blue-200 border border-blue-700">
                  Head of HR & Executive Board
                </span>
              </div>
              <div className="h-8 w-0.5 bg-blue-500/50" />
            </div>

            {/* Level 2: Department Supervisors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-gray-900/90 border border-cyan-500/30 text-center space-y-1">
                <img src={employees[2].avatar} alt={employees[2].name} className="h-12 w-12 rounded-full mx-auto object-cover border border-cyan-400" />
                <p className="text-xs font-bold text-white">{employees[2].name}</p>
                <p className="text-[11px] text-cyan-300">{employees[2].designation}</p>
                <p className="text-[10px] text-gray-400">Department: {employees[2].department}</p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-900/90 border border-purple-500/30 text-center space-y-1">
                <img src={employees[3].avatar} alt={employees[3].name} className="h-12 w-12 rounded-full mx-auto object-cover border border-purple-400" />
                <p className="text-xs font-bold text-white">{employees[3].name}</p>
                <p className="text-[11px] text-purple-300">{employees[3].designation}</p>
                <p className="text-[10px] text-gray-400">Department: {employees[3].department}</p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-900/90 border border-emerald-500/30 text-center space-y-1">
                <img src={employees[1].avatar} alt={employees[1].name} className="h-12 w-12 rounded-full mx-auto object-cover border border-emerald-400" />
                <p className="text-xs font-bold text-white">{employees[1].name}</p>
                <p className="text-[11px] text-emerald-300">{employees[1].designation}</p>
                <p className="text-[10px] text-gray-400">Department: {employees[1].department}</p>
              </div>
            </div>

            {/* Level 3: Permanent Staff & Daily Wage Workforce Directory Grid */}
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-xs font-bold text-gray-300 mb-3">Engineers & Shopfloor Workforce Roster</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {employees.map(emp => (
                  <div key={emp.id} className="p-3 rounded-xl bg-gray-950 border border-gray-800 flex items-center gap-3">
                    <img src={emp.avatar} alt={emp.name} className="h-9 w-9 rounded-full object-cover border border-gray-700" />
                    <div>
                      <p className="text-xs font-bold text-white">{emp.name}</p>
                      <p className="text-[10px] text-gray-400">{emp.empCode} • {emp.department}</p>
                      <span className="text-[9px] font-semibold text-blue-400">{emp.shift}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: MY LEAVES & APPLICATION */}
      {activeSubTab === 'leaves' && (
        <div className="space-y-6">
          {/* Personal Leave Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-panel p-4 rounded-xl space-y-1 border-blue-500/30">
              <p className="text-[11px] font-bold text-blue-400 uppercase">Casual Leaves (CL)</p>
              <p className="text-2xl font-extrabold text-white">12 Days</p>
              <p className="text-[10px] text-gray-400">10 Available • 2 Taken</p>
            </div>

            <div className="glass-panel p-4 rounded-xl space-y-1 border-emerald-500/30">
              <p className="text-[11px] font-bold text-emerald-400 uppercase">Earned Leaves (EL)</p>
              <p className="text-2xl font-extrabold text-white">15 Days</p>
              <p className="text-[10px] text-emerald-400">Accrued Annually</p>
            </div>

            <div className="glass-panel p-4 rounded-xl space-y-1 border-purple-500/30">
              <p className="text-[11px] font-bold text-purple-400 uppercase">Sick Leaves (SL)</p>
              <p className="text-2xl font-extrabold text-white">10 Days</p>
              <p className="text-[10px] text-purple-300">Fully Paid Statutory Leave</p>
            </div>

            <div className="glass-panel p-4 rounded-xl space-y-1 border-amber-500/30">
              <p className="text-[11px] font-bold text-amber-400 uppercase">Compensatory Offs (Comp-Off)</p>
              <p className="text-2xl font-extrabold text-amber-300">2 Days</p>
              <p className="text-[10px] text-gray-400">Overtime Holiday Credit</p>
            </div>
          </div>

          {/* Leave History Table */}
          <div className="glass-panel p-5 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">My Leave Application History</h3>
              <button
                onClick={() => setShowLeaveModal(true)}
                className="rounded-xl bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-500 transition flex items-center gap-1"
              >
                <Plus className="h-4 w-4" /> Apply New Leave
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="py-3 px-4">Leave Type</th>
                    <th className="py-3 px-4">Duration & Dates</th>
                    <th className="py-3 px-4">Reason</th>
                    <th className="py-3 px-4">Applied On</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {myLeaves.map(lve => (
                    <tr key={lve.id} className="hover:bg-gray-900/40 transition">
                      <td className="py-3 px-4 font-bold text-white">{lve.leaveType} LEAVE</td>
                      <td className="py-3 px-4">{lve.days} Days ({lve.startDate} to {lve.endDate})</td>
                      <td className="py-3 px-4 text-gray-300">"{lve.reason}"</td>
                      <td className="py-3 px-4 font-mono text-gray-400">{lve.appliedOn}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          lve.status === 'APPROVED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-purple-950 text-purple-300 border border-purple-800'
                        }`}>
                          {lve.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: INTERNAL JOB POSTINGS (IJP) WITH SEARCH, LOCATION & TENURE GUARD */}
      {activeSubTab === 'ijp' && (
        <div className="glass-panel p-6 rounded-2xl space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-purple-400" />
                <span>Internal Job Postings (IJP) — Rothe Erde India</span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Internal mobility opportunities. Requires <strong>minimum 12-month tenure</strong> in current department per ISO 9001 policy.
              </p>
            </div>

            {isSupervisorOrAdmin && (
              <button
                onClick={() => setShowCreateIJPModal(true)}
                className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-purple-500 transition shrink-0"
              >
                <Plus className="h-4 w-4" />
                <span>+ Create New IJP</span>
              </button>
            )}
          </div>

          {/* Location-wise Filter & Search Facility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-gray-950/80 p-3 rounded-xl border border-gray-800">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                value={ijpSearchQuery}
                onChange={(e) => setIjpSearchQuery(e.target.value)}
                placeholder="Search IJP by title, department, or skills (e.g. Ring Rolling, CNC, VTL)..."
                className="w-full rounded-xl bg-gray-900 pl-9 pr-4 py-2 text-xs text-white border border-gray-800 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Location Selector */}
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-400 shrink-0" />
              <select
                value={ijpLocationFilter}
                onChange={(e) => setIjpLocationFilter(e.target.value)}
                className="w-full rounded-xl bg-gray-900 px-3 py-2 text-xs text-white border border-gray-800 focus:border-purple-500 focus:outline-none"
              >
                <option value="ALL">All Plant Locations</option>
                <option value="Gondedumala">Gondedumala, MH (Main Plant)</option>
                <option value="Pune">MIDC Bhosari, Pune</option>
                <option value="Chennai">Sriperumbudur, Chennai</option>
              </select>
            </div>
          </div>

          {/* IJP Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map(job => {
              const isApplied = appliedJobs.includes(job.id);
              const userTenureMonths = calculateTenureMonths(currentUser.joinDate);
              const isTenureEligible = userTenureMonths >= 12;

              return (
                <div key={job.id} className="rounded-xl bg-gray-900/90 p-5 border border-purple-500/30 space-y-3 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{job.title}</h4>
                      <p className="text-xs text-purple-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-purple-400" />
                        <span>{job.department} • {job.location}</span>
                      </p>
                    </div>
                    <span className="rounded-md bg-purple-950 px-2.5 py-0.5 text-[10px] font-bold text-purple-300 border border-purple-800">
                      {job.experienceYears}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.requiredSkills.map(skill => (
                      <span key={skill} className="rounded-md bg-gray-950 px-2 py-0.5 text-[10px] font-semibold text-gray-300 border border-gray-800">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-800 flex justify-between items-center">
                    <div>
                      <span className="text-[11px] text-gray-400">{job.applicantsCount} Applicants</span>
                      <span className="block text-[10px] text-emerald-400 font-semibold">
                        Your Tenure: {userTenureMonths} Months ({isTenureEligible ? '✓ Eligible' : '⚠️ <12 Mo Policy Guard'})
                      </span>
                    </div>

                    <button
                      onClick={() => handleApplyIJP(job)}
                      disabled={isApplied}
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition flex items-center gap-1.5 ${
                        isApplied 
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800 cursor-default'
                          : isTenureEligible
                          ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-md'
                          : 'bg-amber-950/80 text-amber-300 border border-amber-700/50 hover:bg-amber-900/60'
                      }`}
                    >
                      {isApplied ? (
                        <><Check className="h-3.5 w-3.5" /> Applied Internally</>
                      ) : (
                        <>Apply Internally</>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredJobs.length === 0 && (
              <div className="col-span-2 text-center py-10 text-gray-400 space-y-1">
                <Search className="h-8 w-8 mx-auto text-gray-600" />
                <p className="text-xs font-semibold text-white">No IJPs found matching location "{ijpLocationFilter}" or query "{ijpSearchQuery}"</p>
                <p className="text-[11px] text-gray-500">Try adjusting your location dropdown or search terms.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: ASSIGNED LEARNINGS & SAFETY */}
      {activeSubTab === 'learnings' && (
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-emerald-400" />
              <span>Assigned Safety & Technical Learnings</span>
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Mandatory plant safety courses, 5S shopfloor training, POSH awareness, and metallurgical ISO certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learnings.map(lrn => (
              <div key={lrn.id} className="rounded-xl bg-gray-900/90 p-5 border border-emerald-500/30 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-800">
                      {lrn.category}
                    </span>
                    <h4 className="text-xs font-extrabold text-white mt-1.5">{lrn.title}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-purple-300">{lrn.durationHours} Hrs</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">Completion Status</span>
                    <span className="font-bold text-white">{lrn.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${lrn.progress}%` }} />
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-[11px]">
                  <span className="text-gray-400">Due: {lrn.dueDate}</span>
                  {lrn.certificateAvailable ? (
                    <button
                      onClick={() => alert(`Downloading official Training Certificate for ${lrn.title}...`)}
                      className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold text-white hover:bg-emerald-500 transition flex items-center gap-1"
                    >
                      <Download className="h-3.5 w-3.5" /> Certificate PDF
                    </button>
                  ) : (
                    <span className="text-amber-400 font-semibold">In Progress</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: 2026 PLANT HOLIDAY CALENDAR */}
      {activeSubTab === 'holiday-calendar' && (
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span>Rothe Erde India Pvt. Ltd. — 2026 Official Plant Holiday Calendar</span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Industrial Area, Gondedumala, Maharashtra Factory Statutory Holiday List
              </p>
            </div>

            {currentRole === 'HR_ADMIN' && (
              <button
                onClick={() => setShowAddHolidayModal(true)}
                className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-500 transition"
              >
                <Plus className="h-4 w-4" />
                <span>+ Add Plant Holiday</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {holidays.map(hol => (
              <div key={hol.id} className="rounded-xl bg-gray-900/90 p-4 border border-gray-800 space-y-1.5 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-blue-950 px-2 py-0.5 text-[10px] font-bold text-cyan-300 border border-blue-800">
                    {hol.type} HOLIDAY
                  </span>
                  <h4 className="text-xs font-bold text-white mt-1">{hol.holidayName}</h4>
                  <p className="text-[11px] text-purple-300 font-mono">{hol.date} ({hol.day})</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-purple-950/80 border border-purple-700/50 flex flex-col items-center justify-center text-purple-200">
                  <Calendar className="h-5 w-5 text-purple-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL 1: 12-MONTH TENURE RESTRICTION ALERT MODAL */}
      {tenureErrorModal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl glass-modal p-6 border border-amber-500/50 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-amber-500/30 pb-3">
              <div className="h-10 w-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center border border-amber-700">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">ISO 9001 Tenure Restriction</h3>
                <p className="text-[11px] text-amber-400">12-Month Department Requirement Not Met</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
              <p>
                Rothe Erde India internal mobility guidelines require permanent employees to complete a minimum of <strong>12 months</strong> in their assigned department or project before applying for internal transfers.
              </p>

              <div className="bg-gray-950 p-3.5 rounded-xl border border-gray-800 space-y-1 font-mono text-[11px]">
                <p><span className="text-gray-400">Target Role:</span> <strong className="text-white">{tenureErrorModal.jobTitle}</strong></p>
                <p><span className="text-gray-400">Your Current Dept:</span> <strong className="text-white">{currentUser.department}</strong></p>
                <p><span className="text-gray-400">Join Date:</span> <strong className="text-white">{currentUser.joinDate}</strong></p>
                <p><span className="text-gray-400">Completed Tenure:</span> <strong className="text-rose-400">{tenureErrorModal.tenureMonths} Months</strong> (Req: 12 Months)</p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setTenureErrorModal({ show: false, jobTitle: '', tenureMonths: 0 })}
                className="rounded-xl bg-amber-600 px-5 py-2 text-xs font-bold text-white hover:bg-amber-500 transition"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: CREATE NEW IJP MODAL (FOR HR ADMIN & SUPERVISORS) */}
      {showCreateIJPModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Briefcase className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Create New Internal Job Posting (IJP)</h3>
              </div>
              <button onClick={() => setShowCreateIJPModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateIJP} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Job Title</label>
                <input
                  type="text"
                  required
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  placeholder="e.g. Senior Metallurgy Engineer"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Department</label>
                  <select
                    value={newJobDept}
                    onChange={(e) => setNewJobDept(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="Ring Forging">Ring Forging</option>
                    <option value="CNC Machining">CNC Machining</option>
                    <option value="Quality Inspection">Quality Inspection</option>
                    <option value="Plant Maintenance">Plant Maintenance</option>
                    <option value="HR & Finance">HR & Finance</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Experience Required</label>
                  <input
                    type="text"
                    value={newJobExp}
                    onChange={(e) => setNewJobExp(e.target.value)}
                    placeholder="e.g. 3 - 5 years"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Plant Location</label>
                <input
                  type="text"
                  value={newJobLocation}
                  onChange={(e) => setNewJobLocation(e.target.value)}
                  placeholder="e.g. Industrial Area, Gondedumala, Maharashtra"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Required Skills (Comma separated)</label>
                <input
                  type="text"
                  value={newJobSkills}
                  onChange={(e) => setNewJobSkills(e.target.value)}
                  placeholder="Ring Rolling, Ultrasonic QA, Fanuc VTL"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-gray-300 font-semibold block">Job Description</label>
                  <button
                    type="button"
                    onClick={() => {
                      const title = newJobTitle.trim() || 'Senior Ring Forging Engineer';
                      const dept = newJobDept || 'Ring Forging';
                      const aiJD = generateAIJobDescription(title, dept);
                      setNewJobDesc(aiJD);
                    }}
                    className="text-[11px] font-bold text-purple-300 hover:text-purple-200 bg-purple-950/80 px-2.5 py-0.5 rounded-md border border-purple-700/60 transition flex items-center gap-1.5"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
                    <span>✨ Auto-Generate AI JD</span>
                  </button>
                </div>
                <textarea
                  rows={5}
                  value={newJobDesc}
                  onChange={(e) => setNewJobDesc(e.target.value)}
                  placeholder="Describe key responsibilities and technical mandates, or click ✨ Auto-Generate AI JD..."
                  className="w-full rounded-xl bg-gray-950 p-3 text-xs text-white border border-gray-800 focus:outline-none font-sans leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateIJPModal(false)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:bg-purple-500 transition"
                >
                  Publish IJP to Plant Portal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* APPLY LEAVE MODAL */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-blue-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-blue-500/30 pb-3">
              <div className="flex items-center gap-2 text-blue-300">
                <Calendar className="h-5 w-5 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Apply for Leave</h3>
              </div>
              <button onClick={() => setShowLeaveModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {!isLeaveSubmitted ? (
              <form onSubmit={handleLeaveSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Leave Type</label>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="CASUAL">Casual Leave (CL)</option>
                    <option value="SICK">Sick Leave (SL)</option>
                    <option value="EARNED">Earned Leave (EL)</option>
                    <option value="COMP_OFF">Compensatory Off</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-gray-300 font-semibold mb-1 block">Start Date</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 font-semibold mb-1 block">End Date</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Reason for Leave</label>
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 p-3 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLeaveModal(false)}
                    className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-2">
                <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-sm font-bold text-white">Leave Application Submitted!</h4>
                <p className="text-xs text-gray-300">Sent to Plant Supervisor for approval.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 3: ADD NEW PLANT HOLIDAY MODAL (FOR HR ADMIN) */}
      {showAddHolidayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Calendar className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Add New Plant Holiday (2026 Calendar)</h3>
              </div>
              <button onClick={() => setShowAddHolidayModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddHolidaySubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Holiday Name</label>
                <input
                  type="text"
                  required
                  value={newHolName}
                  onChange={(e) => setNewHolName(e.target.value)}
                  placeholder="e.g. Constitution Day / Plant Founders Day"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Date</label>
                  <input
                    type="date"
                    required
                    value={newHolDate}
                    onChange={(e) => setNewHolDate(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Day of Week</label>
                  <input
                    type="text"
                    required
                    value={newHolDay}
                    onChange={(e) => setNewHolDay(e.target.value)}
                    placeholder="e.g. Thursday"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Holiday Category</label>
                <select
                  value={newHolType}
                  onChange={(e) => setNewHolType(e.target.value as any)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                >
                  <option value="NATIONAL">NATIONAL HOLIDAY</option>
                  <option value="STATE">STATE HOLIDAY (Maharashtra)</option>
                  <option value="FESTIVAL">FESTIVAL HOLIDAY</option>
                  <option value="RESTRICTED">RESTRICTED HOLIDAY</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddHolidayModal(false)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-purple-500 transition"
                >
                  Publish Holiday
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
