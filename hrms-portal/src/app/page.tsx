'use client';

import React, { useState, useEffect } from 'react';
import { 
  UserRole, 
  Employee, 
  PayrollRun, 
  AIAnomaly, 
  Candidate, 
  AttendanceRecord, 
  LeaveRequest,
  AppraisalCampaign,
  AppraisalForm,
  HRDocumentPolicy,
  OfferLetterRecord,
  HolidayCalendarItem,
  PlantShiftMaster
} from '../types/hrms';
import { 
  INITIAL_EMPLOYEES, 
  INITIAL_ATTENDANCE, 
  INITIAL_LEAVE_REQUESTS, 
  INITIAL_PAYROLL_RUNS, 
  INITIAL_ANOMALIES, 
  INITIAL_JOBS, 
  INITIAL_CANDIDATES, 
  INITIAL_GOALS, 
  INITIAL_REVIEWS,
  INITIAL_HOLIDAYS,
  INITIAL_LEARNINGS,
  INITIAL_CAMPAIGNS,
  INITIAL_APPRAISAL_FORMS,
  INITIAL_POLICIES,
  INITIAL_OFFER_LETTERS,
  INITIAL_SHIFTS
} from '../lib/mockData';

import { Navbar } from '../components/layout/Navbar';
import { Sidebar, ActiveTab } from '../components/layout/Sidebar';
import { AIHRFloatingChatbot } from '../components/ai/AIHRFloatingChatbot';
import { LoginPage } from '../components/auth/LoginPage';

import { PendingActionModal } from '../components/modals/PendingActionModal';
import { MissingSwipeAlertModal } from '../components/modals/MissingSwipeAlertModal';

import { DashboardView } from '../components/views/DashboardView';
import { EmployeeDirectoryView } from '../components/views/EmployeeDirectoryView';
import { AttendanceManagementView } from '../components/views/AttendanceManagementView';
import { ExcelMigrationView } from '../components/views/ExcelMigrationView';
import { PayrollView } from '../components/views/PayrollView';
import { TalentATSView } from '../components/views/TalentATSView';
import { PerformanceAnalyticsView } from '../components/views/PerformanceAnalyticsView';
import { EmployeeSelfServiceHubView } from '../components/views/EmployeeSelfServiceHubView';
import { HRPolicyVaultView } from '../components/views/HRPolicyVaultView';
import { DPDPComplianceVaultView } from '../components/views/DPDPComplianceVaultView';

export default function HRMSPortalPage() {
  const [mounted, setMounted] = useState(false);

  // Authentication & Session State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<Employee>(INITIAL_EMPLOYEES[0]); // Default HR Admin
  const [currentRole, setCurrentRole] = useState<UserRole>('HR_ADMIN');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Navigation & AI State
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  // SME Pop-Up Control States
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [showSwipeAlertModal, setShowSwipeAlertModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  // Core Data States
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(INITIAL_ATTENDANCE);
  const [leaves, setLeaves] = useState<LeaveRequest[]>(INITIAL_LEAVE_REQUESTS);
  const [payrollRuns, setPayrollRuns] = useState<PayrollRun[]>(INITIAL_PAYROLL_RUNS);
  const [anomalies, setAnomalies] = useState<AIAnomaly[]>(INITIAL_ANOMALIES);
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [goals, setGoals] = useState(INITIAL_GOALS);
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [holidays, setHolidays] = useState<HolidayCalendarItem[]>(INITIAL_HOLIDAYS);
  const [learnings, setLearnings] = useState(INITIAL_LEARNINGS);
  const [campaigns, setCampaigns] = useState<AppraisalCampaign[]>(INITIAL_CAMPAIGNS);
  const [appraisalForms, setAppraisalForms] = useState<AppraisalForm[]>(INITIAL_APPRAISAL_FORMS);
  const [policies, setPolicies] = useState<HRDocumentPolicy[]>(INITIAL_POLICIES);
  const [offerLetters, setOfferLetters] = useState<OfferLetterRecord[]>(INITIAL_OFFER_LETTERS);
  const [shifts, setShifts] = useState<PlantShiftMaster[]>(INITIAL_SHIFTS);

  const pendingLeaves = leaves.filter(l => l.status === 'PENDING');

  // Auth Handlers
  const handleLoginSuccess = (user: Employee, role: UserRole) => {
    setCurrentUser(user);
    setCurrentRole(role);
    setIsAuthenticated(true);
    setActiveTab('dashboard');
    setShowPendingModal(false);
    setShowSwipeAlertModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowPendingModal(false);
    setShowSwipeAlertModal(false);
  };

  const handleRoleChange = (newRole: UserRole) => {
    setCurrentRole(newRole);
    const matchingEmp = employees.find(e => e.role === newRole) || employees[0];
    setCurrentUser(matchingEmp);
  };

  // Data Handlers
  const handleApproveLeave = (leaveId: string) => {
    setLeaves(prev => prev.map(l => l.id === leaveId ? { ...l, status: 'APPROVED' } : l));
  };

  const handleResolveAnomaly = (anomalyId: string) => {
    setAnomalies(prev => prev.filter(a => a.id !== anomalyId));
  };

  const handleAddEmployee = (newEmp: Employee) => {
    setEmployees(prev => [newEmp, ...prev]);
  };

  const handleImportBatch = (batch: Employee[]) => {
    setEmployees(prev => [...batch, ...prev]);
  };

  const handleImportCardReaderCSV = (newRecords: AttendanceRecord[]) => {
    setAttendance(prev => [...newRecords, ...prev]);
  };

  const handleDisbursePayroll = (runId: string) => {
    setPayrollRuns(prev => prev.map(r => r.id === runId ? { ...r, status: 'DISBURSED' } : r));
    setAnomalies([]);
  };

  const handleUpdateCandidateStage = (candId: string, stage: any) => {
    setCandidates(prev => prev.map(c => c.id === candId ? { ...c, stage } : c));
  };

  const handleCheckIn = (employeeId: string, location: string = 'Rothe Erde Gondedumala Gate') => {
    const targetEmp = employees.find(e => e.id === employeeId) || currentUser;

    const newAtt: AttendanceRecord = {
      id: `att-${Date.now()}`,
      employeeId: targetEmp.id,
      employeeName: targetEmp.name,
      empCode: targetEmp.empCode,
      department: targetEmp.department,
      date: new Date().toISOString().split('T')[0],
      checkIn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      checkOut: 'In Progress',
      status: 'PRESENT' as const,
      shift: targetEmp.shift,
      overtimeHours: 0,
      location,
      verifiedBySupervisor: true,
      source: 'WEB_KIOSK'
    };
    setAttendance(prev => [newAtt, ...prev]);
  };

  const handleSubmitRegularization = (reason: string) => {
    const newLeaveReq: LeaveRequest = {
      id: `reg-${Date.now()}`,
      employeeId: currentUser.id,
      employeeName: currentUser.name,
      empCode: currentUser.empCode,
      department: currentUser.department,
      leaveType: 'CASUAL',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      days: 1,
      reason: `Swipe Regularisation: ${reason}`,
      status: 'PENDING',
      appliedOn: new Date().toISOString().split('T')[0]
    };
    setLeaves(prev => [newLeaveReq, ...prev]);
  };

  // Appraisal Handlers
  const handleInitiateCampaign = (newCamp: AppraisalCampaign) => {
    setCampaigns(prev => [newCamp, ...prev]);
  };

  const handleSubmitSelfAppraisal = (formId: string, selfAccomplishments: string, selfRating: number, selfGrowthAreas: string) => {
    setAppraisalForms(prev => prev.map(f => f.id === formId ? {
      ...f,
      selfAccomplishments,
      selfRating,
      selfGrowthAreas,
      selfSubmitted: true,
      selfSubmittedOn: new Date().toISOString().split('T')[0],
      status: 'SELF_SUBMITTED'
    } : f));
  };

  const handleSubmitSupervisorAppraisal = (formId: string, supervisorComments: string, supervisorRating: number, supervisorRecommendation: string) => {
    setAppraisalForms(prev => prev.map(f => f.id === formId ? {
      ...f,
      supervisorComments,
      supervisorRating,
      supervisorRecommendation,
      status: 'COMPLETED'
    } : f));
  };

  // Policy, Offer & Holiday Handlers
  const handlePublishPolicy = (newPol: HRDocumentPolicy) => {
    setPolicies(prev => [newPol, ...prev]);
  };

  const handleGenerateOfferLetter = (newOffer: OfferLetterRecord) => {
    setOfferLetters(prev => [newOffer, ...prev]);
  };

  const handleAddHoliday = (newHol: HolidayCalendarItem) => {
    setHolidays(prev => [newHol, ...prev]);
  };

  // Render Login Page if Unauthenticated or before client mount
  if (!mounted || !isAuthenticated) {
    return <LoginPage employees={employees} onLoginSuccess={handleLoginSuccess} />;
  }

  const handleTriggerBackgroundNotification = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.register('/sw.js');
            registration.showNotification('Rothe Erde HRMS — 3x Daily Shift Action Required', {
              body: `[09:00 AM Shift A Trigger] ${currentUser.name}, you have 4 pending leave approvals and attendance clearances waiting for sign-off.`,
              icon: '/thyssenkrupp_logo.png',
              badge: '/thyssenkrupp_logo.png',
              vibrate: [100, 50, 100]
            } as any);
          } else {
            new Notification('Rothe Erde HRMS — 3x Daily Shift Action Required', {
              body: `[09:00 AM Shift A Trigger] ${currentUser.name}, you have 4 pending leave approvals and attendance clearances waiting for sign-off.`,
              icon: '/thyssenkrupp_logo.png'
            });
          }
        } else {
          setShowNotificationModal(true);
        }
      } catch (e) {
        setShowNotificationModal(true);
      }
    } else {
      setShowNotificationModal(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-gray-100 font-sans">
      {/* Navbar */}
      <Navbar
        currentRole={currentRole}
        currentUser={currentUser}
        onRoleChange={handleRoleChange}
        anomaliesCount={anomalies.length}
        onOpenAIChat={() => setIsAIChatOpen(true)}
        onOpenAnomalies={() => setActiveTab('payroll')}
        onLogout={handleLogout}
      />

      {/* SME DEMO POP-UP TRIGGER BAR */}
      <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-blue-950 px-4 py-2 border-b border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-purple-300 font-bold">
          <span>⚡ SME Pop-Up & Background Notifier Tester:</span>
          <span className="text-gray-400 font-normal">Test Approvals, Missing Swipes & 3x Daily Push</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleTriggerBackgroundNotification}
            className="rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition flex items-center gap-1.5"
          >
            <span>🔔 Trigger 3x Daily Background System Notification (OS Toast)</span>
          </button>

          {(currentRole === 'HR_ADMIN' || currentRole === 'PLANT_SUPERVISOR') && (
            <button
              onClick={() => setShowPendingModal(true)}
              className="rounded-lg bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition"
            >
              Trigger Admin/Supervisor Pending Pop-Up ({pendingLeaves.length + anomalies.length} Pending)
            </button>
          )}

          {(currentRole === 'PERMANENT_STAFF' || currentRole === 'DAILY_WAGE_WORKER') && (
            <button
              onClick={() => setShowSwipeAlertModal(true)}
              className="rounded-lg bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300 border border-rose-500/40 hover:bg-rose-500/30 transition"
            >
              Trigger Employee Missing Swipe Alert Pop-Up
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentRole={currentRole}
          onOpenAIChat={() => setIsAIChatOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-6">
          {activeTab === 'dashboard' && (
            <DashboardView
              employees={employees}
              payrollRuns={payrollRuns}
              anomalies={anomalies}
              currentRole={currentRole}
              currentUser={currentUser}
              attendance={attendance}
              onNavigate={setActiveTab}
              onOpenAIChat={() => setIsAIChatOpen(true)}
              onCheckIn={handleCheckIn}
            />
          )}

          {activeTab === 'employees' && (
            <EmployeeDirectoryView
              employees={employees}
              attendance={attendance}
              leaves={leaves}
              currentRole={currentRole}
              onAddEmployee={handleAddEmployee}
              onCheckIn={handleCheckIn}
              onImportCardReaderCSV={handleImportCardReaderCSV}
            />
          )}

          {(activeTab === 'orgchart' || activeTab === 'leaves' || activeTab === 'ijp' || activeTab === 'learnings' || activeTab === 'holiday-calendar') && (
            <EmployeeSelfServiceHubView
              employees={employees}
              leaves={leaves}
              jobs={jobs}
              learnings={learnings}
              holidays={holidays}
              currentUser={currentUser}
              currentRole={currentRole}
              activeSubTab={activeTab as any}
              setActiveSubTab={setActiveTab as any}
              onApplyLeave={(newLeave) => setLeaves(prev => [newLeave, ...prev])}
              onAddJobPosting={(newJob) => setJobs(prev => [newJob, ...prev])}
              onAddHoliday={handleAddHoliday}
            />
          )}

          {(activeTab === 'attendance-hub' || activeTab === 'attendance') && (
            <AttendanceManagementView
              attendance={attendance}
              employees={employees}
              currentRole={currentRole}
              currentUser={currentUser}
              shifts={shifts}
              onCheckIn={handleCheckIn}
              onImportCardReaderCSV={handleImportCardReaderCSV}
              onUpdateShift={(updatedShift) => setShifts(prev => prev.map(s => s.id === updatedShift.id ? updatedShift : s))}
            />
          )}

          {activeTab === 'excel-migration' && (
            <ExcelMigrationView onImportBatch={handleImportBatch} currentRole={currentRole} />
          )}

          {activeTab === 'payroll' && (
            <PayrollView
              employees={employees}
              payrollRuns={payrollRuns}
              anomalies={anomalies}
              currentRole={currentRole}
              currentUser={currentUser}
              onApproveAnomaly={handleResolveAnomaly}
              onDisbursePayroll={handleDisbursePayroll}
            />
          )}

          {activeTab === 'talent' && (
            <TalentATSView
              jobs={jobs}
              candidates={candidates}
              currentRole={currentRole}
              offerLetters={offerLetters}
              onUpdateCandidateStage={handleUpdateCandidateStage}
              onAddCandidate={(c) => setCandidates(prev => [c, ...prev])}
              onGenerateOfferLetter={handleGenerateOfferLetter}
            />
          )}

          {activeTab === 'performance' && (
            <PerformanceAnalyticsView
              goals={goals}
              reviews={reviews}
              employees={employees}
              payslips={[]}
              currentRole={currentRole}
              currentUser={currentUser}
              campaigns={campaigns}
              appraisalForms={appraisalForms}
              onInitiateCampaign={handleInitiateCampaign}
              onSubmitSelfAppraisal={handleSubmitSelfAppraisal}
              onSubmitSupervisorAppraisal={handleSubmitSupervisorAppraisal}
            />
          )}

          {activeTab === 'ai-analytics' && (
            <PerformanceAnalyticsView
              goals={goals}
              reviews={reviews}
              employees={employees}
              payslips={[]}
              currentRole={currentRole}
              currentUser={currentUser}
              campaigns={campaigns}
              appraisalForms={appraisalForms}
              isAnalyticsTabOnly={true}
            />
          )}

          {activeTab === 'hr-policies' && (
            <HRPolicyVaultView
              policies={policies}
              employees={employees}
              currentRole={currentRole}
              currentUser={currentUser}
              onPublishPolicy={handlePublishPolicy}
            />
          )}

          {(activeTab === 'dpdp-compliance' || activeTab === 'user-guide') && (
            <DPDPComplianceVaultView
              currentRole={currentRole}
              currentUser={currentUser}
              employees={employees}
            />
          )}
        </main>
      </div>

      {/* POP-UP 1: ADMIN / SUPERVISOR PENDING ACTIONS MODAL */}
      <PendingActionModal
        isOpen={showPendingModal}
        onClose={() => setShowPendingModal(false)}
        pendingLeaves={pendingLeaves}
        anomalies={anomalies}
        currentRole={currentRole}
        onApproveLeave={handleApproveLeave}
        onResolveAnomaly={handleResolveAnomaly}
      />

      {/* POP-UP 2: EMPLOYEE MISSING SWIPE ALERT MODAL */}
      <MissingSwipeAlertModal
        isOpen={showSwipeAlertModal}
        onClose={() => setShowSwipeAlertModal(false)}
        currentUser={currentUser}
        onPunchInNow={handleCheckIn}
        onSubmitRegularization={handleSubmitRegularization}
      />

      {/* Floating AI HR Chatbot */}
      <AIHRFloatingChatbot
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        currentEmployee={currentUser}
      />

      {/* POP-UP 3: BROWSER NOTIFICATION UNBLOCK GUIDE MODAL */}
      {showNotificationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-emerald-500/40 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="text-xl">🔔</span>
                <h3 className="text-base font-extrabold text-white">How to Allow Desktop Push Notifications</h3>
              </div>
              <button onClick={() => setShowNotificationModal(false)} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30">
                <p className="font-bold text-emerald-300">Why enable notifications?</p>
                <p className="text-[11px] text-gray-300 mt-1">
                  Enables 3x daily automatic desktop toasts (09:00 AM, 01:00 PM, 05:00 PM) for pending leave approvals and attendance clearances even when your browser tab is closed!
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <p className="font-bold text-white uppercase text-[11px] tracking-wider">Follow these 3 easy steps to unblock:</p>
                
                <div className="flex items-start gap-2.5 bg-gray-950 p-3 rounded-xl border border-gray-800">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                  <div>
                    <p className="font-bold text-white">Click the Address Bar Tune / Lock Icon</p>
                    <p className="text-[11px] text-gray-400">At the top left of your browser address bar next to <code className="text-cyan-300">https://...</code>, click the lock or tune icon (🎛️ or 🔒).</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-gray-950 p-3 rounded-xl border border-gray-800">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                  <div>
                    <p className="font-bold text-white">Change Notifications to "Allow"</p>
                    <p className="text-[11px] text-gray-400">Change the dropdown for <strong>Notifications</strong> from <em>Block</em> to <strong>Allow</strong>.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-gray-950 p-3 rounded-xl border border-gray-800">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                  <div>
                    <p className="font-bold text-white">Refresh the Page</p>
                    <p className="text-[11px] text-gray-400">Press <strong>F5</strong> or <strong>Ctrl + R</strong>, then click the notification test button again!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowNotificationModal(false)}
                className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/30"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
