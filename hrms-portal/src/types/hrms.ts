export type EmployeeType = 'PERMANENT' | 'CONTRACT_LABOUR' | 'DIRECT_DAILY_WAGE';
export type UserRole = 'HR_ADMIN' | 'PLANT_SUPERVISOR' | 'PERMANENT_STAFF' | 'DAILY_WAGE_WORKER';
export type DepartmentName = 'Ring Forging' | 'Quality Inspection' | 'CNC Machining' | 'Plant Maintenance' | 'Safety & Admin' | 'HR & Finance';
export type ShiftType = 'Morning (6 AM - 2 PM)' | 'Evening (2 PM - 10 PM)' | 'Night (10 PM - 6 AM)' | 'General (9 AM - 5 PM)' | 'Double Shift (Night -> Morning)';

export interface Employee {
  id: string;
  empCode: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  empType: EmployeeType;
  department: DepartmentName;
  designation: string;
  shift: ShiftType;
  joinDate: string;
  status: 'ACTIVE' | 'ON_LEAVE' | 'TERMINATED';
  baseSalaryMonthly: number; // For permanent staff
  dailyWageRate?: number; // For daily wage / contract labour
  bankDetails: {
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
  statutoryIds: {
    uan?: string;
    pan: string;
    aadhaar: string;
    esiNo?: string;
  };
  contractorName?: string; // For contract labour
  avatar: string;
}

export interface CardPunchRecord {
  cardNo: string;
  empCode: string;
  employeeName: string;
  punchTime: string; // e.g., "2026-08-29 05:52:10"
  terminalId: string; // e.g., "GATE_1_CARD_READER_A"
  direction: 'IN' | 'OUT';
}

export interface CardReaderCSVImportResult {
  totalPunchesProcessed: number;
  matchedEmployeesCount: number;
  unmatchedPunchesCount: number;
  records: AttendanceRecord[];
  warnings: string[];
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  empCode: string;
  department: DepartmentName;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'PRESENT' | 'LATE' | 'ABSENT' | 'HALF_DAY' | 'ON_LEAVE';
  shift: ShiftType;
  overtimeHours: number;
  location: string;
  verifiedBySupervisor?: boolean;
  source?: 'WEB_KIOSK' | 'CARD_READER_CSV' | 'MANUAL_ENTRY';
  
  // Shift tracking & Consecutive Shift Compliance
  isNightShift?: boolean;
  nightShiftAllowance?: number; // ₹150 statutory night allowance
  isDoubleShift?: boolean; // Worked consecutive Night + Morning shift
  continuousHours?: number; // Total continuous work duration e.g. 16 hrs
  fatigueWarning?: boolean; // AI Safety alert
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  empCode: string;
  department: DepartmentName;
  leaveType: 'CASUAL' | 'SICK' | 'EARNED' | 'MATERNITY' | 'COMP_OFF';
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  appliedOn: string;
  approvedBy?: string;
}

export interface Payslip {
  id: string;
  payrollRunId: string;
  employeeId: string;
  empCode: string;
  employeeName: string;
  department: DepartmentName;
  designation: string;
  empType: EmployeeType;
  month: string;
  year: number;
  workingDays: number;
  presentDays: number;
  leaveDays: number;
  
  // Earnings
  basic: number;
  hra: number;
  specialAllowance: number;
  overtimePay: number;
  nightShiftAllowance: number;
  grossPay: number;
  
  // Deductions (Indian Statutory)
  epfEmployee: number;
  epfEmployer: number;
  esiEmployee: number;
  esiEmployer: number;
  professionalTax: number;
  tds: number;
  totalDeductions: number;
  
  netPay: number;
  contractorFee?: number;
  status: 'PAID' | 'PENDING_APPROVAL' | 'FLAGGED_ANOMALY';
}

export interface PayrollRun {
  id: string;
  month: string;
  year: number;
  status: 'DRAFT' | 'ANOMALIES_DETECTED' | 'APPROVED' | 'DISBURSED';
  totalEmployees: number;
  permanentCount: number;
  labourCount: number;
  grossPayout: number;
  totalEPF: number;
  totalESI: number;
  totalPT: number;
  totalTDS: number;
  totalNetPay: number;
  anomaliesFoundCount: number;
  processedDate: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: DepartmentName;
  location: string;
  type: 'FULL_TIME' | 'CONTRACT' | 'DAILY_WAGE';
  experienceYears: string;
  status: 'OPEN' | 'CLOSED' | 'DRAFT';
  applicantsCount: number;
  description: string;
  requiredSkills: string[];
}

export interface Candidate {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  experienceYears: number;
  stage: 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'HIRED' | 'REJECTED';
  resumeSummary: string;
  matchScore: number; // 0 - 100
  matchingSkills: string[];
  missingSkills: string[];
  aiRecommendation: string;
  appliedDate: string;
}

export interface PerformanceGoal {
  id: string;
  employeeId: string;
  employeeName: string;
  title: string;
  category: 'PRODUCTION_YIELD' | 'SAFETY_ZERO_ACCIDENTS' | 'QUALITY_REJECT_RATE' | 'UPTIME' | 'SKILL_UPGRADE';
  targetDate: string;
  progress: number; // 0 to 100
  weightage: number;
  status: 'ON_TRACK' | 'AT_RISK' | 'COMPLETED';
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  employeeName: string;
  department: DepartmentName;
  period: string;
  rating: number; // 1 to 5
  peerFeedbackSummary: string;
  managerNotes: string;
  aiGeneratedDraft: string;
  status: 'DRAFT' | 'SUBMITTED' | 'FINALIZED';
  reviewedOn: string;
}

export interface AIAnomaly {
  id: string;
  type: 'OVERTIME_SPIKE' | 'STATUTORY_MISMATCH' | 'ATTENDANCE_GAP' | 'SALARY_VARIANCE' | 'DOUBLE_SHIFT_FATIGUE';
  employeeId: string;
  employeeName: string;
  empCode: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  description: string;
  metricValue: string;
  baselineValue: string;
  resolved: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'USER' | 'AI_ASSISTANT';
  text: string;
  language: 'EN' | 'HI';
  timestamp: string;
  suggestedActions?: string[];
}

export interface AssignedLearning {
  id: string;
  title: string;
  category: 'SAFETY_5S' | 'HEAVY_MACHINERY' | 'QUALITY_ISO' | 'COMPLIANCE' | 'TECHNICAL_SKILL';
  dueDate: string;
  progress: number; // 0 - 100
  status: 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED';
  mandatory: boolean;
  durationHours: number;
  certificateAvailable?: boolean;
}

export interface HolidayCalendarItem {
  id: string;
  date: string;
  day: string;
  holidayName: string;
  type: 'NATIONAL' | 'STATE' | 'FESTIVAL' | 'RESTRICTED';
  mandatory: boolean;
}

export interface AppraisalCampaign {
  id: string;
  title: string;
  cycleType: 'ANNUAL' | 'MID_TERM';
  startDate: string;
  endDate: string;
  status: 'ACTIVE' | 'CLOSED';
  initiatedBy: string;
}

export interface AppraisalForm {
  id: string;
  campaignId: string;
  employeeId: string;
  employeeName: string;
  empCode: string;
  department: DepartmentName;
  supervisorId: string;
  supervisorName: string;
  selfAccomplishments?: string;
  selfRating?: number;
  selfGrowthAreas?: string;
  selfSubmitted: boolean;
  selfSubmittedOn?: string;
  supervisorComments?: string;
  supervisorRating?: number;
  supervisorRecommendation?: string;
  status: 'NOT_STARTED' | 'SELF_SUBMITTED' | 'COMPLETED';
}

export interface HRDocumentPolicy {
  id: string;
  title: string;
  category: 'ATTENDANCE' | 'PAYROLL' | 'EPF_ESI_GRATUITY' | 'CODE_OF_CONDUCT' | 'COMPENSATION_BENEFITS';
  targetAudience: 'ALL_WORKFORCE' | 'PERMANENT_STAFF' | 'DAILY_WAGE_LABOUR';
  publishedDate: string;
  summary: string;
  version: string;
}

export interface OfferLetterRecord {
  id: string;
  candidateName: string;
  candidateEmail: string;
  designation: string;
  department: DepartmentName;
  annualCTC: number;
  monthlyGross: number;
  joiningDate: string;
  status: 'DRAFT' | 'OFFER_SENT' | 'ACCEPTED' | 'JOINED';
  generatedOn: string;
}

export interface PlantShiftMaster {
  id: string;
  shiftCode: 'SHIFT_A' | 'SHIFT_B' | 'SHIFT_C' | 'SHIFT_G';
  shiftName: string;
  timings: string; // e.g. '06:00 to 14:00 hrs'
  startTime: string; // '06:00'
  endTime: string;   // '14:00'
  durationHours: number;
  gracePeriodMins: number;
  breakDurationMins: number;
  nightAllowanceEligible: boolean;
  nightAllowanceAmount: number;
  assignedCount: number;
  description: string;
}
