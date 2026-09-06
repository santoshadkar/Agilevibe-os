'use client';

import React, { useState } from 'react';
import { 
  PerformanceGoal, 
  PerformanceReview, 
  Employee, 
  Payslip, 
  UserRole,
  AppraisalCampaign,
  AppraisalForm
} from '../../types/hrms';
import { generateAIReviewDraft, parseNaturalLanguageHRQuery } from '../../lib/aiEngine';
import { 
  Target, 
  Sparkles, 
  LineChart, 
  CheckCircle, 
  AlertTriangle, 
  Send, 
  X, 
  BarChart2, 
  Award, 
  Lock, 
  ShieldCheck,
  Calendar,
  Clock,
  Plus,
  FileText,
  UserCheck,
  Check
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface PerformanceAnalyticsViewProps {
  goals: PerformanceGoal[];
  reviews: PerformanceReview[];
  employees: Employee[];
  payslips: Payslip[];
  currentRole: UserRole;
  currentUser?: Employee;
  campaigns?: AppraisalCampaign[];
  appraisalForms?: AppraisalForm[];
  isAnalyticsTabOnly?: boolean;
  onInitiateCampaign?: (campaign: AppraisalCampaign) => void;
  onSubmitSelfAppraisal?: (formId: string, selfAccomplishments: string, selfRating: number, selfGrowthAreas: string) => void;
  onSubmitSupervisorAppraisal?: (formId: string, supervisorComments: string, supervisorRating: number, recommendation: string) => void;
}

export const PerformanceAnalyticsView: React.FC<PerformanceAnalyticsViewProps> = ({
  goals,
  reviews,
  employees,
  payslips,
  currentRole,
  currentUser,
  campaigns = [],
  appraisalForms = [],
  isAnalyticsTabOnly = false,
  onInitiateCampaign,
  onSubmitSelfAppraisal,
  onSubmitSupervisorAppraisal
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'appraisals' | 'okrs' | 'reviews' | 'nl-query'>(isAnalyticsTabOnly ? 'nl-query' : 'appraisals');
  
  const [nlQuery, setNlQuery] = useState('Show headcount distribution by department for Rothe Erde India');
  const [nlQueryResult, setNlQueryResult] = useState<any>(null);

  // AI Review Draft Assistant Modal
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [revEmpName, setRevEmpName] = useState('Suresh Patil');
  const [revDept, setRevDept] = useState('Ring Forging');
  const [revRating, setRevRating] = useState('4.8');
  const [revPeerFeedback, setRevPeerFeedback] = useState('Outstanding shift handover discipline.');
  const [revManagerNotes, setRevManagerNotes] = useState('Maintained zero lost-time accidents.');
  const [generatedDraftText, setGeneratedDraftText] = useState<string | null>(null);

  // HR Initiate Campaign Modal
  const [showInitiateCampaignModal, setShowInitiateCampaignModal] = useState(false);
  const [campTitle, setCampTitle] = useState('Annual Performance Appraisal 2026');
  const [campCycleType, setCampCycleType] = useState<'ANNUAL' | 'MID_TERM'>('ANNUAL');
  const [campStartDate, setCampStartDate] = useState('2026-08-25');
  const [campEndDate, setCampEndDate] = useState('2026-09-20');

  // Employee Self-Appraisal Form State
  const [selectedSelfForm, setSelectedSelfForm] = useState<AppraisalForm | null>(null);
  const [selfAccomplishments, setSelfAccomplishments] = useState('');
  const [selfRating, setSelfRating] = useState('4.5');
  const [selfGrowthAreas, setSelfGrowthAreas] = useState('');

  // Supervisor Review Appraisal Form State
  const [selectedSupForm, setSelectedSupForm] = useState<AppraisalForm | null>(null);
  const [supComments, setSupComments] = useState('');
  const [supRating, setSupRating] = useState('4.8');
  const [supRecommendation, setSupRecommendation] = useState('Recommend for Senior Engineer Promotion');

  const isHR = currentRole === 'HR_ADMIN';
  const isSupervisor = currentRole === 'PLANT_SUPERVISOR' || isHR;

  // Active Appraisal Campaign
  const activeCampaign = campaigns.find(c => c.status === 'ACTIVE') || campaigns[0];

  // DATA PRIVACY FILTER FOR PERFORMANCE GOALS & REVIEWS
  const myEmpId = currentUser?.id || 'emp-301';
  const displayGoals = isSupervisor ? goals : goals.filter(g => g.employeeId === myEmpId);
  const displayReviews = isSupervisor ? reviews : reviews.filter(r => r.employeeId === myEmpId);

  // My Self Appraisal Form
  const myAppraisalForm = appraisalForms.find(f => f.employeeId === myEmpId);
  // Reportee Appraisal Forms (For Supervisors & HR)
  const reporteeForms = isHR 
    ? appraisalForms 
    : appraisalForms.filter(f => f.supervisorId === myEmpId || f.department === currentUser?.department);

  // RESTRICT NL ANALYTICS FOR NON-HR USERS
  if (isAnalyticsTabOnly && !isHR) {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-rose-500/30 text-center space-y-4 max-w-2xl mx-auto my-12 shadow-2xl">
        <div className="h-12 w-12 rounded-2xl bg-rose-950 text-rose-400 flex items-center justify-center mx-auto border border-rose-800">
          <Lock className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-white">Natural Language Analytics Restricted</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Company-wide query execution and macro analytics are restricted to <strong>HR Administrators</strong> to protect company data privacy per ISO 27001 standards.
          </p>
        </div>
      </div>
    );
  }

  const handleExecuteQuery = (e: React.FormEvent) => {
    e.preventDefault();
    const res = parseNaturalLanguageHRQuery(nlQuery, employees, payslips);
    setNlQueryResult(res);
  };

  const handleGenerateReviewDraft = () => {
    const text = generateAIReviewDraft(revEmpName, revDept, revPeerFeedback, revManagerNotes);
    setGeneratedDraftText(text);
  };

  const handleInitiateCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCamp: AppraisalCampaign = {
      id: `cmp-${Date.now()}`,
      title: campTitle,
      cycleType: campCycleType,
      startDate: campStartDate,
      endDate: campEndDate,
      status: 'ACTIVE',
      initiatedBy: `${currentUser?.name || 'HR Admin'} (Head of HR)`
    };

    if (onInitiateCampaign) onInitiateCampaign(newCamp);
    setShowInitiateCampaignModal(false);
    alert(`Appraisal Campaign "${newCamp.title}" has been published to all plant employees!`);
  };

  const handleSelfAppraisalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSelfForm) return;

    if (onSubmitSelfAppraisal) {
      onSubmitSelfAppraisal(selectedSelfForm.id, selfAccomplishments, Number(selfRating), selfGrowthAreas);
    }
    setSelectedSelfForm(null);
    alert('✓ Your Self-Appraisal Form has been submitted to your supervisor!');
  };

  const handleSupervisorAppraisalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSupForm) return;

    if (onSubmitSupervisorAppraisal) {
      onSubmitSupervisorAppraisal(selectedSupForm.id, supComments, Number(supRating), supRecommendation);
    }
    setSelectedSupForm(null);
    alert('✓ Final Supervisor Performance Appraisal submitted successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-950/90 via-purple-950/90 to-blue-950/90 p-6 border border-purple-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-purple-900/80 px-2.5 py-0.5 text-xs font-bold text-purple-300 border border-purple-700">
              Rothe Erde India • Performance & Appraisal Engine
            </span>
            <span className="text-xs text-gray-400">• Role: {currentRole}</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            {isSupervisor ? 'Performance Management & Annual / Mid-Term Appraisals' : `My Performance Appraisals & OKRs (${currentUser?.name})`}
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            Manage HR-initiated appraisal campaigns, employee self-evaluations, supervisor reviews for reportees, and AI 360 review drafts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isHR && (
            <button
              onClick={() => setShowInitiateCampaignModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition shrink-0"
            >
              <Plus className="h-4 w-4" />
              <span>Initiate Appraisal Campaign</span>
            </button>
          )}

          {isSupervisor && (
            <button
              onClick={() => setShowReviewModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-bold text-gray-200 border border-gray-700 hover:bg-gray-800 transition shrink-0"
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>AI Review Draft Assistant</span>
            </button>
          )}
        </div>
      </div>

      {/* HR ACTIVE APPRAISAL CAMPAIGN ANNOUNCEMENT BANNER */}
      {activeCampaign && (
        <div className="rounded-2xl bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-blue-900/90 p-5 border border-purple-500/50 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-purple-300">
              <Calendar className="h-5 w-5 text-purple-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider bg-purple-950 px-2 py-0.5 rounded-md border border-purple-700">
                Active HR Campaign • {activeCampaign.cycleType} APPRAISAL
              </span>
            </div>
            <h3 className="text-base font-extrabold text-white">{activeCampaign.title}</h3>
            <p className="text-xs text-gray-200">
              Initiated by {activeCampaign.initiatedBy}. Submission Window: <strong>{activeCampaign.startDate}</strong> to <strong>{activeCampaign.endDate}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="rounded-xl bg-gray-950/80 p-3 border border-purple-700 text-right font-mono">
              <span className="text-[10px] text-gray-400 block uppercase">Submission Deadline</span>
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {activeCampaign.endDate}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800 w-fit">
        <button
          onClick={() => setActiveSubTab('appraisals')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'appraisals' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Award className="h-4 w-4" />
          <span>{isSupervisor ? 'Supervisor Appraisal Desk' : 'My Appraisal Form'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('okrs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'okrs' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Target className="h-4 w-4" />
          <span>{isSupervisor ? 'Plant OKRs & Goals' : 'My Work Goals'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('reviews')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeSubTab === 'reviews' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>{isSupervisor ? 'Review History' : 'My Reviews'}</span>
        </button>

        {isHR && (
          <button
            onClick={() => setActiveSubTab('nl-query')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeSubTab === 'nl-query' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <LineChart className="h-4 w-4" />
            <span>Natural Language Analytics</span>
          </button>
        )}
      </div>

      {/* SUB-TAB 0: APPRAISAL DESK (EMPLOYEE SELF-APPRAISAL & SUPERVISOR REPORTEE REVIEWS) */}
      {activeSubTab === 'appraisals' && (
        <div className="space-y-6">
          {/* SECTION A: EMPLOYEE SELF-APPRAISAL CARD (FOR ALL EMPLOYEES) */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-purple-500/30">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  <span>My Employee Self-Appraisal Form</span>
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Complete your self-evaluation for active campaign: <strong>{activeCampaign?.title || 'Annual 2026'}</strong>
                </p>
              </div>

              {myAppraisalForm?.selfSubmitted ? (
                <span className="rounded-full bg-emerald-950 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-800 flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> Self-Appraisal Submitted
                </span>
              ) : (
                <button
                  onClick={() => {
                    setSelectedSelfForm(myAppraisalForm || {
                      id: `apf-${Date.now()}`,
                      campaignId: activeCampaign?.id || 'cmp-2026-annual',
                      employeeId: myEmpId,
                      employeeName: currentUser?.name || 'Employee',
                      empCode: currentUser?.empCode || 'REI-ENG-201',
                      department: currentUser?.department || 'Quality Inspection',
                      supervisorId: 'emp-201',
                      supervisorName: 'Suresh Patil',
                      selfSubmitted: false,
                      status: 'NOT_STARTED'
                    });
                  }}
                  className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-purple-500 transition flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" /> Fill Self-Appraisal Form
                </button>
              )}
            </div>

            {myAppraisalForm?.selfSubmitted && (
              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Self Rating:</span>
                  <span className="font-bold text-purple-300">★ {myAppraisalForm.selfRating} / 5.0</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 block font-semibold">Key Accomplishments:</span>
                  <p className="text-gray-200 font-sans italic bg-gray-900 p-2.5 rounded-lg">"{myAppraisalForm.selfAccomplishments}"</p>
                </div>
              </div>
            )}
          </div>

          {/* SECTION B: SUPERVISOR REPORTEE APPRAISALS (FOR ALL DEPARTMENT SUPERVISORS & HR) */}
          {isSupervisor && (
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-blue-400" />
                    <span>Department Reportee Appraisals Desk</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Review submitted self-appraisals and enter final supervisor evaluations & ratings for your reportees.
                  </p>
                </div>
                <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" /> Authorized Supervisor Mode
                </span>
              </div>

              <div className="space-y-3">
                {reporteeForms.map(form => (
                  <div key={form.id} className="rounded-xl bg-gray-900/90 p-4 border border-gray-800 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-bold text-white">{form.employeeName} ({form.empCode})</h4>
                        <p className="text-[10px] text-gray-400">Department: {form.department} • Supervisor: {form.supervisorName}</p>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        form.status === 'COMPLETED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                        form.status === 'SELF_SUBMITTED' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-gray-800 text-gray-400'
                      }`}>
                        {form.status.replace('_', ' ')}
                      </span>
                    </div>

                    {form.selfSubmitted ? (
                      <div className="bg-gray-950 p-3 rounded-xl border border-gray-800/80 text-xs text-gray-300 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-purple-300 font-bold">Submitted Self-Rating:</span>
                          <span className="font-extrabold text-white">★ {form.selfRating} / 5.0</span>
                        </div>
                        <p><strong className="text-gray-400">Employee Accomplishments:</strong> "{form.selfAccomplishments}"</p>
                        {form.selfGrowthAreas && <p><strong className="text-blue-300">Growth Needs:</strong> "{form.selfGrowthAreas}"</p>}
                      </div>
                    ) : (
                      <p className="text-xs text-amber-400 italic">Self-appraisal pending submission by employee.</p>
                    )}

                    <div className="pt-2 border-t border-gray-800 flex justify-between items-center">
                      <span className="text-[10px] text-gray-400">Campaign: Annual 2026</span>
                      {form.status !== 'COMPLETED' ? (
                        <button
                          onClick={() => setSelectedSupForm(form)}
                          disabled={!form.selfSubmitted}
                          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition flex items-center gap-1 ${
                            form.selfSubmitted 
                              ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md' 
                              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          Evaluate Reportee Appraisal
                        </button>
                      ) : (
                        <span className="text-xs font-extrabold text-emerald-400">✓ Finalized (Rating: ★ {form.supervisorRating})</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 1: OKRS */}
      {activeSubTab === 'okrs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Active Goals & Quality Targets</h3>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> Role Filtered
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayGoals.map(goal => (
              <div key={goal.id} className="glass-panel p-4 rounded-xl space-y-3 border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-purple-950 px-2 py-0.5 text-[10px] font-bold text-purple-300 border border-purple-800">
                    {goal.category}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400">{goal.status}</span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white">{goal.title}</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Assigned to: {goal.employeeName}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-bold text-white">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full" style={{ width: `${goal.progress}%` }} />
                  </div>
                </div>

                <div className="text-[10px] text-gray-400 flex justify-between pt-2 border-t border-gray-800">
                  <span>Target Date: {goal.targetDate}</span>
                  <span className="text-purple-300 font-semibold">Weight: {goal.weightage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: REVIEWS */}
      {activeSubTab === 'reviews' && (
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white">Performance Review History</h3>

          <div className="space-y-3">
            {displayReviews.map(rev => (
              <div key={rev.id} className="rounded-xl bg-gray-900/90 p-4 border border-gray-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.employeeName} ({rev.department})</h4>
                    <p className="text-[10px] text-gray-400">Period: {rev.period} • Rated on {rev.reviewedOn}</p>
                  </div>
                  <span className="rounded-md bg-emerald-950 px-2.5 py-1 text-xs font-extrabold text-emerald-400 border border-emerald-800">
                    ★ {rev.rating} / 5.0
                  </span>
                </div>

                <div className="bg-gray-950 p-3 rounded-lg border border-gray-800/80 text-xs text-gray-300 space-y-1">
                  <p><strong className="text-purple-300">Manager Notes:</strong> "{rev.managerNotes}"</p>
                  <p className="text-[11px] text-gray-400"><strong className="text-blue-300">Peer Feedback:</strong> "{rev.peerFeedbackSummary}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: NATURAL LANGUAGE QUERY (HR ADMIN ONLY) */}
      {activeSubTab === 'nl-query' && isHR && (
        <div className="glass-panel p-6 rounded-2xl space-y-5 border border-purple-500/40">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-purple-400">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <h3 className="text-sm font-bold text-white">Natural Language HR Analytics Query Engine</h3>
            </div>
            <p className="text-xs text-gray-300">
              Ask any question in natural plain language to query Rothe Erde workforce & statutory data.
            </p>
          </div>

          <form onSubmit={handleExecuteQuery} className="flex gap-2">
            <input
              type="text"
              value={nlQuery}
              onChange={(e) => setNlQuery(e.target.value)}
              placeholder="e.g. Show headcount distribution by department for Rothe Erde India"
              className="flex-1 rounded-xl bg-gray-950 px-4 py-2.5 text-xs text-white border border-gray-800 focus:border-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:bg-purple-500 transition flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              <span>Query HR Database</span>
            </button>
          </form>

          {nlQueryResult && (
            <div className="bg-gray-950/90 p-5 rounded-xl border border-purple-900/60 space-y-4 animate-in fade-in duration-200">
              <p className="text-xs font-bold text-purple-300">{nlQueryResult.text}</p>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={nlQueryResult.chartData}>
                    <XAxis dataKey="name" stroke="#6b7280" fontSize={10} />
                    <YAxis stroke="#6b7280" fontSize={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', borderRadius: '8px', fontSize: '12px' }} />
                    <Bar dataKey={nlQueryResult.dataKeys[0]} fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODAL 1: HR INITIATE APPRAISAL CAMPAIGN */}
      {showInitiateCampaignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Award className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Initiate New Performance Appraisal Campaign</h3>
              </div>
              <button onClick={() => setShowInitiateCampaignModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleInitiateCampaignSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Campaign Title</label>
                <input
                  type="text"
                  required
                  value={campTitle}
                  onChange={(e) => setCampTitle(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Appraisal Cycle Type</label>
                  <select
                    value={campCycleType}
                    onChange={(e) => setCampCycleType(e.target.value as any)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="ANNUAL">Annual Performance Appraisal</option>
                    <option value="MID_TERM">Mid-Term Performance Review</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Submission Deadline</label>
                  <input
                    type="date"
                    value={campEndDate}
                    onChange={(e) => setCampEndDate(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowInitiateCampaignModal(false)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-purple-500 transition"
                >
                  Publish Campaign to Plant Portal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: EMPLOYEE FILL SELF-APPRAISAL FORM */}
      {selectedSelfForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <FileText className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">Employee Self-Appraisal Form</h3>
              </div>
              <button onClick={() => setSelectedSelfForm(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSelfAppraisalSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Key Accomplishments & Deliverables</label>
                <textarea
                  rows={3}
                  required
                  value={selfAccomplishments}
                  onChange={(e) => setSelfAccomplishments(e.target.value)}
                  placeholder="Summarize your key achievements, zero-defect quality contributions, and safety adherence..."
                  className="w-full rounded-xl bg-gray-950 p-3 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Self-Rating (1.0 to 5.0)</label>
                <select
                  value={selfRating}
                  onChange={(e) => setSelfRating(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                >
                  <option value="5.0">5.0 — Outstanding / Role Model</option>
                  <option value="4.5">4.5 — Exceeds Expectations</option>
                  <option value="4.0">4.0 — Meets All Expectations</option>
                  <option value="3.5">3.5 — Partially Meets Expectations</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Training Needs & Career Growth Areas</label>
                <input
                  type="text"
                  value={selfGrowthAreas}
                  onChange={(e) => setSelfGrowthAreas(e.target.value)}
                  placeholder="e.g. Advanced CNC VTL Programming, ISO 45001 Safety Lead"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedSelfForm(null)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-purple-500 transition"
                >
                  Submit Self-Appraisal to Supervisor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: SUPERVISOR EVALUATE REPORTEE APPRAISAL FORM */}
      {selectedSupForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-blue-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-blue-500/30 pb-3">
              <div className="flex items-center gap-2 text-blue-300">
                <UserCheck className="h-5 w-5 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Supervisor Performance Evaluation ({selectedSupForm.employeeName})</h3>
              </div>
              <button onClick={() => setSelectedSupForm(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSupervisorAppraisalSubmit} className="space-y-3 text-xs">
              <div className="bg-gray-950 p-3 rounded-xl border border-gray-800 text-xs text-gray-300 space-y-1">
                <p className="text-purple-300 font-bold">Submitted Employee Self-Accomplishments:</p>
                <p className="text-gray-200 italic">"{selectedSupForm.selfAccomplishments}"</p>
                <p className="text-[11px] text-gray-400">Self-Rating: ★ {selectedSupForm.selfRating} / 5.0</p>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Supervisor Evaluation Comments</label>
                <textarea
                  rows={3}
                  required
                  value={supComments}
                  onChange={(e) => setSupComments(e.target.value)}
                  placeholder="Enter supervisor review notes regarding quality, shift attendance, and technical proficiency..."
                  className="w-full rounded-xl bg-gray-950 p-3 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Final Recommended Rating</label>
                  <select
                    value={supRating}
                    onChange={(e) => setSupRating(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="5.0">5.0 — Outstanding / Promotion Ready</option>
                    <option value="4.8">4.8 — Exceeds All Expectations</option>
                    <option value="4.0">4.0 — Meets All Expectations</option>
                    <option value="3.5">3.5 — Needs Skill Upgrade</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Recommendation</label>
                  <input
                    type="text"
                    value={supRecommendation}
                    onChange={(e) => setSupRecommendation(e.target.value)}
                    placeholder="e.g. Recommend for Promotion / Grade Band Upgrade"
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedSupForm(null)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-blue-500 transition"
                >
                  Finalize & Submit Appraisal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AI REVIEW DRAFT MODAL */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <h3 className="text-sm font-bold text-white">AI 360 Review Draft Generator</h3>
              </div>
              <button onClick={() => setShowReviewModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Employee</label>
                <input
                  type="text"
                  value={revEmpName}
                  onChange={(e) => setRevEmpName(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <button
                onClick={handleGenerateReviewDraft}
                className="w-full rounded-xl bg-purple-600 py-2.5 text-xs font-bold text-white hover:bg-purple-500 transition"
              >
                Generate AI Review Draft
              </button>

              {generatedDraftText && (
                <div className="bg-gray-950/90 p-4 rounded-xl border border-purple-900/60 text-xs text-gray-200 leading-relaxed font-sans whitespace-pre-wrap">
                  {generatedDraftText}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
