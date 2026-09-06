import { 
  Employee, 
  AttendanceRecord, 
  LeaveRequest, 
  PayrollRun, 
  Payslip, 
  JobPosting, 
  Candidate, 
  PerformanceGoal, 
  PerformanceReview, 
  AIAnomaly,
  HolidayCalendarItem,
  AssignedLearning,
  AppraisalCampaign,
  AppraisalForm,
  HRDocumentPolicy,
  OfferLetterRecord,
  PlantShiftMaster
} from '../types/hrms';

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: 'emp-101',
    empCode: 'REI-HR-001',
    name: 'Mandar Parashare',
    email: 'mandar.parashare@rotheerde.co.in',
    phone: '+91 98201 44512',
    role: 'HR_ADMIN',
    empType: 'PERMANENT',
    department: 'HR & Finance',
    designation: 'Head of Human Resources',
    shift: 'General (9 AM - 5 PM)',
    joinDate: '2019-04-15',
    status: 'ACTIVE',
    baseSalaryMonthly: 125000,
    bankDetails: {
      accountNumber: '918273645012',
      ifscCode: 'HDFC0000240',
      bankName: 'HDFC Bank - Nashik Branch'
    },
    statutoryIds: {
      uan: '100982347102',
      pan: 'ABCPS8412F',
      aadhaar: '4812 9012 3411',
      esiNo: '3190283741'
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-102',
    empCode: 'REI-HR-002',
    name: 'Priya Nair',
    email: 'priya.nair@rotheerde.in',
    phone: '+91 97412 88301',
    role: 'HR_ADMIN',
    empType: 'PERMANENT',
    department: 'HR & Finance',
    designation: 'Senior HR Operations Manager',
    shift: 'General (9 AM - 5 PM)',
    joinDate: '2021-02-10',
    status: 'ACTIVE',
    baseSalaryMonthly: 78000,
    bankDetails: {
      accountNumber: '401928374610',
      ifscCode: 'ICIC0001040',
      bankName: 'ICICI Bank - Gondedumala'
    },
    statutoryIds: {
      uan: '100982347103',
      pan: 'BXPNP1029K',
      aadhaar: '7412 0981 4422'
    },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-201',
    empCode: 'REI-MFG-101',
    name: 'Suresh Patil',
    email: 'suresh.patil@rotheerde.in',
    phone: '+91 94220 11928',
    role: 'PLANT_SUPERVISOR',
    empType: 'PERMANENT',
    department: 'Ring Forging',
    designation: 'Chief Heavy Forging Supervisor',
    shift: 'Morning (6 AM - 2 PM)',
    joinDate: '2018-08-01',
    status: 'ACTIVE',
    baseSalaryMonthly: 68000,
    bankDetails: {
      accountNumber: '098123456789',
      ifscCode: 'SBIN0004120',
      bankName: 'State Bank of India - Gondedumala MIDC'
    },
    statutoryIds: {
      uan: '100982347105',
      pan: 'AWZPP4910M',
      aadhaar: '9081 2341 8899'
    },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-202',
    empCode: 'REI-CNC-102',
    name: 'Amitabh Verma',
    email: 'amitabh.v@rotheerde.in',
    phone: '+91 98112 00411',
    role: 'PLANT_SUPERVISOR',
    empType: 'PERMANENT',
    department: 'CNC Machining',
    designation: 'CNC Milling & Turning Lead',
    shift: 'Evening (2 PM - 10 PM)',
    joinDate: '2020-11-15',
    status: 'ACTIVE',
    baseSalaryMonthly: 62000,
    bankDetails: {
      accountNumber: '501002938471',
      ifscCode: 'HDFC0000240',
      bankName: 'HDFC Bank - Nashik'
    },
    statutoryIds: {
      uan: '100982347109',
      pan: 'CPVPV8812L',
      aadhaar: '6712 3490 1122'
    },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-301',
    empCode: 'REI-ENG-201',
    name: 'Ananya Deshmukh',
    email: 'ananya.d@rotheerde.in',
    phone: '+91 99231 40192',
    role: 'PERMANENT_STAFF',
    empType: 'PERMANENT',
    department: 'Quality Inspection',
    designation: 'Metallurgical Quality Engineer',
    shift: 'Morning (6 AM - 2 PM)',
    joinDate: '2022-06-01',
    status: 'ACTIVE',
    baseSalaryMonthly: 48000,
    bankDetails: {
      accountNumber: '390128471209',
      ifscCode: 'AXIS0000812',
      bankName: 'Axis Bank - Nashik'
    },
    statutoryIds: {
      uan: '100982347115',
      pan: 'DPDDD9012H',
      aadhaar: '8812 7612 0044',
      esiNo: '3190283749'
    },
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-302',
    empCode: 'REI-MNT-202',
    name: 'Ganesh Jadhav',
    email: 'ganesh.j@rotheerde.in',
    phone: '+91 91580 99401',
    role: 'PERMANENT_STAFF',
    empType: 'PERMANENT',
    department: 'Plant Maintenance',
    designation: 'Hydraulic Press Maintenance Tech',
    shift: 'Night (10 PM - 6 AM)',
    joinDate: '2021-09-20',
    status: 'ACTIVE',
    baseSalaryMonthly: 36000,
    bankDetails: {
      accountNumber: '610293847510',
      ifscCode: 'SBIN0004120',
      bankName: 'State Bank of India'
    },
    statutoryIds: {
      uan: '100982347120',
      pan: 'EGJJG7712P',
      aadhaar: '3412 8901 2299',
      esiNo: '3190283755'
    },
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-401',
    empCode: 'REI-LAB-501',
    name: 'Ramesh Pawar',
    email: 'ramesh.pawar@labour.provider.in',
    phone: '+91 93701 22410',
    role: 'DAILY_WAGE_WORKER',
    empType: 'CONTRACT_LABOUR',
    department: 'Ring Forging',
    designation: 'Hot Ring Forging Assistant',
    shift: 'Morning (6 AM - 2 PM)',
    joinDate: '2023-01-10',
    status: 'ACTIVE',
    baseSalaryMonthly: 0,
    dailyWageRate: 650,
    bankDetails: {
      accountNumber: '102938475601',
      ifscCode: 'MAHB0000102',
      bankName: 'Bank of Maharashtra - Gondedumala'
    },
    statutoryIds: {
      pan: 'FRRRP1102Q',
      aadhaar: '1209 8834 5511',
      esiNo: '3190299810'
    },
    contractorName: 'Apex Industrial Manpower Services Pvt Ltd',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-402',
    empCode: 'REI-LAB-502',
    name: 'Santosh Kadam',
    email: 'santosh.kadam@labour.provider.in',
    phone: '+91 98902 44102',
    role: 'DAILY_WAGE_WORKER',
    empType: 'DIRECT_DAILY_WAGE',
    department: 'CNC Machining',
    designation: 'Shopfloor Material Handler',
    shift: 'Morning (6 AM - 2 PM)',
    joinDate: '2023-03-15',
    status: 'ACTIVE',
    baseSalaryMonthly: 0,
    dailyWageRate: 600,
    bankDetails: {
      accountNumber: '891029384712',
      ifscCode: 'BKID0001201',
      bankName: 'Bank of India - Nashik'
    },
    statutoryIds: {
      pan: 'GSKKS4419N',
      aadhaar: '5612 0981 7733',
      esiNo: '3190299812'
    },
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'emp-403',
    empCode: 'REI-LAB-503',
    name: 'Sunil Bhosale',
    email: 'sunil.b@labour.provider.in',
    phone: '+91 94211 88392',
    role: 'DAILY_WAGE_WORKER',
    empType: 'CONTRACT_LABOUR',
    department: 'Quality Inspection',
    designation: 'Ultrasonic Flaw Detector Operator Assistant',
    shift: 'Night (10 PM - 6 AM)',
    joinDate: '2023-05-01',
    status: 'ACTIVE',
    baseSalaryMonthly: 0,
    dailyWageRate: 700,
    bankDetails: {
      accountNumber: '771290384102',
      ifscCode: 'UBIN0531201',
      bankName: 'Union Bank of India'
    },
    statutoryIds: {
      pan: 'HSBBH9901R',
      aadhaar: '9901 2284 6611',
      esiNo: '3190299820'
    },
    contractorName: 'Apex Industrial Manpower Services Pvt Ltd',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  {
    id: 'att-101',
    employeeId: 'emp-201',
    employeeName: 'Suresh Patil',
    empCode: 'REI-MFG-101',
    department: 'Ring Forging',
    date: '2026-08-29',
    checkIn: '05:52 AM',
    checkOut: '02:05 PM',
    status: 'PRESENT',
    shift: 'Morning (6 AM - 2 PM)',
    overtimeHours: 1.5,
    location: 'Industrial Area, Gondedumala Gate 1 Kiosk',
    verifiedBySupervisor: true,
    source: 'CARD_READER_CSV'
  },
  {
    id: 'att-102',
    employeeId: 'emp-301',
    employeeName: 'Ananya Deshmukh',
    empCode: 'REI-ENG-201',
    department: 'Quality Inspection',
    date: '2026-08-29',
    checkIn: '06:05 AM',
    checkOut: '02:00 PM',
    status: 'LATE',
    shift: 'Morning (6 AM - 2 PM)',
    overtimeHours: 0,
    location: 'Quality Bay Web Portal',
    verifiedBySupervisor: true,
    source: 'WEB_KIOSK'
  },
  {
    id: 'att-103',
    employeeId: 'emp-401',
    employeeName: 'Ramesh Pawar',
    empCode: 'REI-LAB-501',
    department: 'Ring Forging',
    date: '2026-08-29',
    checkIn: '05:45 AM',
    checkOut: '04:30 PM',
    status: 'PRESENT',
    shift: 'Morning (6 AM - 2 PM)',
    overtimeHours: 2.5,
    location: 'Shopfloor Forging Reader',
    verifiedBySupervisor: false,
    source: 'CARD_READER_CSV'
  },
  {
    id: 'att-104',
    employeeId: 'emp-302',
    employeeName: 'Ganesh Jadhav',
    empCode: 'REI-MNT-202',
    department: 'Plant Maintenance',
    date: '2026-08-29',
    checkIn: '10:00 PM',
    checkOut: '06:00 AM',
    status: 'PRESENT',
    shift: 'Night (10 PM - 6 AM)',
    overtimeHours: 2.0,
    location: 'Gondedumala Plant Maintenance Desk',
    verifiedBySupervisor: true,
    source: 'CARD_READER_CSV',
    isNightShift: true,
    nightShiftAllowance: 150
  }
];

export const INITIAL_LEAVE_REQUESTS: LeaveRequest[] = [
  {
    id: 'lve-101',
    employeeId: 'emp-301',
    employeeName: 'Ananya Deshmukh',
    empCode: 'REI-ENG-201',
    department: 'Quality Inspection',
    leaveType: 'CASUAL',
    startDate: '2026-09-02',
    endDate: '2026-09-03',
    days: 2,
    reason: 'Family event in Nashik',
    status: 'PENDING',
    appliedOn: '2026-08-26'
  },
  {
    id: 'lve-102',
    employeeId: 'emp-202',
    employeeName: 'Amitabh Verma',
    empCode: 'REI-CNC-102',
    department: 'CNC Machining',
    leaveType: 'EARNED',
    startDate: '2026-08-10',
    endDate: '2026-08-14',
    days: 5,
    reason: 'Annual family holiday',
    status: 'APPROVED',
    appliedOn: '2026-08-01',
    approvedBy: 'Mandar Parashare'
  }
];

export const INITIAL_PAYROLL_RUNS: PayrollRun[] = [
  {
    id: 'payrun-2026-07',
    month: 'July',
    year: 2026,
    status: 'DISBURSED',
    totalEmployees: 750,
    permanentCount: 500,
    labourCount: 250,
    grossPayout: 38450000,
    totalEPF: 3620000,
    totalESI: 410000,
    totalPT: 145000,
    totalTDS: 2890000,
    totalNetPay: 31385000,
    anomaliesFoundCount: 2,
    processedDate: '2026-07-31'
  },
  {
    id: 'payrun-2026-08',
    month: 'August',
    year: 2026,
    status: 'ANOMALIES_DETECTED',
    totalEmployees: 750,
    permanentCount: 500,
    labourCount: 250,
    grossPayout: 39120000,
    totalEPF: 3680000,
    totalESI: 418000,
    totalPT: 147000,
    totalTDS: 2950000,
    totalNetPay: 31925000,
    anomaliesFoundCount: 3,
    processedDate: '2026-08-29'
  }
];

export const INITIAL_ANOMALIES: AIAnomaly[] = [
  {
    id: 'anom-001',
    type: 'OVERTIME_SPIKE',
    employeeId: 'emp-401',
    employeeName: 'Ramesh Pawar',
    empCode: 'REI-LAB-501',
    severity: 'HIGH',
    description: 'Overtime hours increased by +140% compared to historical 3-month average (42 hrs logged in August vs 17 hrs avg).',
    metricValue: '42.5 hrs OT',
    baselineValue: '17.0 hrs avg',
    resolved: false
  },
  {
    id: 'anom-002',
    type: 'STATUTORY_MISMATCH',
    employeeId: 'emp-301',
    employeeName: 'Ananya Deshmukh',
    empCode: 'REI-ENG-201',
    severity: 'MEDIUM',
    description: 'Gross monthly salary exceeds ESI statutory threshold of ₹21,000, but ESI deduction is still active.',
    metricValue: 'Gross: ₹48,000',
    baselineValue: 'ESI Cutoff: ₹21,000',
    resolved: false
  },
  {
    id: 'anom-003',
    type: 'SALARY_VARIANCE',
    employeeId: 'emp-403',
    employeeName: 'Sunil Bhosale',
    empCode: 'REI-LAB-503',
    severity: 'LOW',
    description: 'Contract Labour Muster-roll daily rate varies by ₹50/day against master agreement with Apex Industrial Services.',
    metricValue: '₹700 / day',
    baselineValue: '₹650 / day agreed',
    resolved: false
  }
];

export const INITIAL_JOBS: JobPosting[] = [
  {
    id: 'job-101',
    title: 'Senior Ring Forging Engineer',
    department: 'Ring Forging',
    location: 'Industrial Area, Gondedumala, Maharashtra',
    type: 'FULL_TIME',
    experienceYears: '4 - 7 years',
    status: 'OPEN',
    applicantsCount: 14,
    description: 'Lead seamless rolled ring forging processes for Rothe Erde India Pvt. Ltd. windmill gear rings using 5000T radial-axial ring rolling mill.',
    requiredSkills: ['Ring Rolling Mill', 'Radial-Axial Forging', 'AutoCAD', 'Metallurgy', 'ISO 9001']
  },
  {
    id: 'job-102',
    title: 'CNC Heavy Lathe Machine Operator',
    department: 'CNC Machining',
    location: 'Industrial Area, Gondedumala, Maharashtra',
    type: 'FULL_TIME',
    experienceYears: '2 - 5 years',
    status: 'OPEN',
    applicantsCount: 22,
    description: 'Operate Fanuc-controlled 6-axis vertical turning lathes (VTL) for high-precision machining of slewing bearings.',
    requiredSkills: ['Fanuc CNC', 'VTL Turning', 'Vernier & Micrometer Inspection', 'Shopfloor Safety']
  }
];

export const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: 'cand-001',
    jobId: 'job-101',
    jobTitle: 'Senior Ring Forging Engineer',
    name: 'Vikram Salunkhe',
    email: 'vikram.salunkhe@gmail.com',
    phone: '+91 98221 00981',
    experienceYears: 6,
    stage: 'INTERVIEW',
    resumeSummary: '6 years of experience in seamless ring rolling for wind turbine gearboxes. Proficient in radial-axial hydraulic press control, thermal treatment monitoring, and ISO 9001 quality audits.',
    matchScore: 94,
    matchingSkills: ['Ring Rolling Mill', 'Radial-Axial Forging', 'Metallurgy', 'ISO 9001'],
    missingSkills: ['AutoCAD'],
    aiRecommendation: 'STRONG MATCH: Directly relevant background in wind turbine ring forging and heavy hydraulic machinery for Rothe Erde.',
    appliedDate: '2026-08-20'
  },
  {
    id: 'cand-002',
    jobId: 'job-101',
    jobTitle: 'Senior Ring Forging Engineer',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@yahoo.in',
    phone: '+91 97110 55410',
    experienceYears: 3,
    stage: 'SCREENING',
    resumeSummary: '3 years experience in general automotive steel forging. Knowledge of mechanical presses and basic metallurgy.',
    matchScore: 68,
    matchingSkills: ['Metallurgy', 'AutoCAD'],
    missingSkills: ['Ring Rolling Mill', 'Radial-Axial Forging'],
    aiRecommendation: 'MODERATE MATCH: Good foundational skills, but lacks specialized experience with large-diameter ring rolling mills.',
    appliedDate: '2026-08-22'
  }
];

export const INITIAL_GOALS: PerformanceGoal[] = [
  {
    id: 'goal-101',
    employeeId: 'emp-201',
    employeeName: 'Suresh Patil',
    title: 'Achieve 98.5% Ring Forging Yield Rate',
    category: 'PRODUCTION_YIELD',
    targetDate: '2026-09-30',
    progress: 92,
    weightage: 40,
    status: 'ON_TRACK'
  },
  {
    id: 'goal-102',
    employeeId: 'emp-301',
    employeeName: 'Ananya Deshmukh',
    title: 'Zero Ultrasonic Inspection Rejections at Assembly',
    category: 'QUALITY_REJECT_RATE',
    targetDate: '2026-10-15',
    progress: 85,
    weightage: 35,
    status: 'ON_TRACK'
  },
  {
    id: 'goal-103',
    employeeId: 'emp-302',
    employeeName: 'Ganesh Jadhav',
    title: 'Reduce Unplanned Maintenance Downtime below 1.5%',
    category: 'UPTIME',
    targetDate: '2026-09-15',
    progress: 60,
    weightage: 25,
    status: 'AT_RISK'
  }
];

export const INITIAL_REVIEWS: PerformanceReview[] = [
  {
    id: 'rev-101',
    employeeId: 'emp-201',
    employeeName: 'Suresh Patil',
    department: 'Ring Forging',
    period: 'H1 2026 (Jan - Jun)',
    rating: 4.8,
    peerFeedbackSummary: 'Suresh demonstrates outstanding leadership during heavy shift handovers and has trained 15 daily wage workers on safety protocols.',
    managerNotes: 'Consistently exceeds production targets for windmill tower rings while maintaining zero lost-time injury incidents.',
    aiGeneratedDraft: 'Suresh has performed exceptionally in H1 2026 as Chief Heavy Forging Supervisor at Rothe Erde India. Under his supervision, the Ring Forging department achieved a 98.2% yield rate with zero safety violations. Peer feedback highlights strong worker mentoring and seamless contractor team coordination.',
    status: 'SUBMITTED',
    reviewedOn: '2026-07-15'
  }
];

export const INITIAL_HOLIDAYS: HolidayCalendarItem[] = [
  { id: 'hol-01', date: '2026-01-26', day: 'Monday', holidayName: 'Republic Day', type: 'NATIONAL', mandatory: true },
  { id: 'hol-02', date: '2026-03-04', day: 'Wednesday', holidayName: 'Holi (Dhulivandan)', type: 'FESTIVAL', mandatory: true },
  { id: 'hol-03', date: '2026-05-01', day: 'Friday', holidayName: 'Maharashtra Day & May Day', type: 'STATE', mandatory: true },
  { id: 'hol-04', date: '2026-08-15', day: 'Saturday', holidayName: 'Independence Day', type: 'NATIONAL', mandatory: true },
  { id: 'hol-05', date: '2026-09-14', day: 'Monday', holidayName: 'Ganesh Chaturthi', type: 'FESTIVAL', mandatory: true },
  { id: 'hol-06', date: '2026-10-02', day: 'Friday', holidayName: 'Mahatma Gandhi Jayanti', type: 'NATIONAL', mandatory: true },
  { id: 'hol-07', date: '2026-10-20', day: 'Tuesday', holidayName: 'Dussehra (Vijayadashami)', type: 'FESTIVAL', mandatory: true },
  { id: 'hol-08', date: '2026-11-08', day: 'Sunday', holidayName: 'Diwali (Laxmi Pujan)', type: 'FESTIVAL', mandatory: true },
  { id: 'hol-09', date: '2026-11-09', day: 'Monday', holidayName: 'Diwali (Padwa / Plant Holiday)', type: 'FESTIVAL', mandatory: true },
  { id: 'hol-10', date: '2026-12-25', day: 'Friday', holidayName: 'Christmas Day', type: 'NATIONAL', mandatory: true }
];

export const INITIAL_LEARNINGS: AssignedLearning[] = [
  {
    id: 'lrn-101',
    title: 'Rothe Erde Shopfloor 5S Safety & Emergency Evacuation',
    category: 'SAFETY_5S',
    dueDate: '2026-09-15',
    progress: 100,
    status: 'COMPLETED',
    mandatory: true,
    durationHours: 3.5,
    certificateAvailable: true
  },
  {
    id: 'lrn-102',
    title: 'Heavy Forging Press & Hydraulic Safety Protocols (ISO 45001)',
    category: 'HEAVY_MACHINERY',
    dueDate: '2026-09-30',
    progress: 65,
    status: 'IN_PROGRESS',
    mandatory: true,
    durationHours: 6.0,
    certificateAvailable: false
  },
  {
    id: 'lrn-103',
    title: 'Ultrasonic Flaw Detection & Quality Assurance (ISO 9001)',
    category: 'QUALITY_ISO',
    dueDate: '2026-10-10',
    progress: 30,
    status: 'IN_PROGRESS',
    mandatory: false,
    durationHours: 8.0,
    certificateAvailable: false
  },
  {
    id: 'lrn-104',
    title: 'Prevention of Sexual Harassment (POSH Act 2013) Workplace Training',
    category: 'COMPLIANCE',
    dueDate: '2026-08-31',
    progress: 100,
    status: 'COMPLETED',
    mandatory: true,
    durationHours: 2.0,
    certificateAvailable: true
  }
];

export const INITIAL_CAMPAIGNS: AppraisalCampaign[] = [
  {
    id: 'cmp-2026-annual',
    title: 'Annual Performance Appraisal 2026',
    cycleType: 'ANNUAL',
    startDate: '2026-08-25',
    endDate: '2026-09-20',
    status: 'ACTIVE',
    initiatedBy: 'Mandar Parashare (Head of HR)'
  }
];

export const INITIAL_APPRAISAL_FORMS: AppraisalForm[] = [
  {
    id: 'apf-101',
    campaignId: 'cmp-2026-annual',
    employeeId: 'emp-301',
    employeeName: 'Ananya Deshmukh',
    empCode: 'REI-ENG-201',
    department: 'Quality Inspection',
    supervisorId: 'emp-201',
    supervisorName: 'Suresh Patil',
    selfAccomplishments: 'Achieved zero defect rates on 5000T ring rolling batch ultrasonic non-destructive testing.',
    selfRating: 4.8,
    selfGrowthAreas: 'Advanced Metallurgy Thermal Imaging Certification',
    selfSubmitted: true,
    selfSubmittedOn: '2026-08-28',
    status: 'SELF_SUBMITTED'
  },
  {
    id: 'apf-102',
    campaignId: 'cmp-2026-annual',
    employeeId: 'emp-302',
    employeeName: 'Ganesh Jadhav',
    empCode: 'REI-MNT-202',
    department: 'Plant Maintenance',
    supervisorId: 'emp-202',
    supervisorName: 'Amitabh Verma',
    selfSubmitted: false,
    status: 'NOT_STARTED'
  }
];

export const INITIAL_POLICIES: HRDocumentPolicy[] = [
  {
    id: 'pol-101',
    title: 'Rothe Erde Statutory EPF, ESI & Gratuity Act Compliance Policy 2026',
    category: 'EPF_ESI_GRATUITY',
    targetAudience: 'ALL_WORKFORCE',
    publishedDate: '2026-08-01',
    summary: 'Comprehensive guide to EPFO 12% contribution, ESIC medical benefits, and Payment of Gratuity Act 1972 (15 days basic salary per year of service after 5 years).',
    version: 'v3.2'
  },
  {
    id: 'pol-102',
    title: 'Gondedumala Plant Shift Attendance, Card Reader & Night Shift Rules',
    category: 'ATTENDANCE',
    targetAudience: 'ALL_WORKFORCE',
    publishedDate: '2026-07-15',
    summary: 'Mandatory card reader swipe rules, 15-minute grace period, regularisation procedures, and ₹150 night allowance crediting rules.',
    version: 'v2.1'
  },
  {
    id: 'pol-103',
    title: 'Statutory Payroll Deductions, PT Maharashtra & TDS Sec 192 Guidelines',
    category: 'PAYROLL',
    targetAudience: 'PERMANENT_STAFF',
    publishedDate: '2026-06-10',
    summary: 'Maharashtra Professional Tax slabs (₹200/mo), Form 16 withholding rules, and New Tax Regime statutory calculations.',
    version: 'v4.0'
  },
  {
    id: 'pol-104',
    title: '5S Shopfloor Safety, Heavy Forging Press & PPE Mandates',
    category: 'CODE_OF_CONDUCT',
    targetAudience: 'ALL_WORKFORCE',
    publishedDate: '2026-05-01',
    summary: 'ISO 45001 safety protocol mandates, helmet/safety boots rules for ring forging bays, and emergency shutdown procedures.',
    version: 'v1.8'
  }
];

export const INITIAL_OFFER_LETTERS: OfferLetterRecord[] = [
  {
    id: 'ofr-101',
    candidateName: 'Vikram Salunkhe',
    candidateEmail: 'vikram.salunkhe@gmail.com',
    designation: 'Senior Ring Forging Engineer',
    department: 'Ring Forging',
    annualCTC: 950000,
    monthlyGross: 79166,
    joiningDate: '2026-09-15',
    status: 'OFFER_SENT',
    generatedOn: '2026-08-25'
  },
  {
    id: 'ofr-102',
    candidateName: 'Mahesh Kulkarni',
    candidateEmail: 'mahesh.k@gmail.com',
    designation: 'CNC Lathe Lead Technician',
    department: 'CNC Machining',
    annualCTC: 680000,
    monthlyGross: 56666,
    joiningDate: '2026-09-01',
    status: 'ACCEPTED',
    generatedOn: '2026-08-20'
  }
];

export const INITIAL_SHIFTS: PlantShiftMaster[] = [
  {
    id: 'shf-101',
    shiftCode: 'SHIFT_A',
    shiftName: 'First Shift (Morning)',
    timings: '06:00 to 14:00 hrs',
    startTime: '06:00',
    endTime: '14:00',
    durationHours: 8,
    gracePeriodMins: 15,
    breakDurationMins: 45,
    nightAllowanceEligible: false,
    nightAllowanceAmount: 0,
    assignedCount: 290,
    description: 'Morning Forging Bay & Heavy Ring Rolling Operations'
  },
  {
    id: 'shf-102',
    shiftCode: 'SHIFT_B',
    shiftName: 'Second Shift (Afternoon)',
    timings: '14:00 to 22:00 hrs',
    startTime: '14:00',
    endTime: '22:00',
    durationHours: 8,
    gracePeriodMins: 15,
    breakDurationMins: 45,
    nightAllowanceEligible: false,
    nightAllowanceAmount: 0,
    assignedCount: 240,
    description: 'Afternoon Assembly, Ultrasonic Quality Inspection & CNC Turning'
  },
  {
    id: 'shf-103',
    shiftCode: 'SHIFT_C',
    shiftName: 'Third Shift (Night)',
    timings: '22:00 to 06:00 hrs',
    startTime: '22:00',
    endTime: '06:00',
    durationHours: 8,
    gracePeriodMins: 15,
    breakDurationMins: 45,
    nightAllowanceEligible: true,
    nightAllowanceAmount: 150,
    assignedCount: 120,
    description: 'Overnight Forging & Heat Treatment (Includes ₹150 Statutory Night Allowance + Canteen Meal Coupon)'
  },
  {
    id: 'shf-104',
    shiftCode: 'SHIFT_G',
    shiftName: 'General Shift',
    timings: '09:00 to 18:00 hrs',
    startTime: '09:00',
    endTime: '18:00',
    durationHours: 9,
    gracePeriodMins: 15,
    breakDurationMins: 60,
    nightAllowanceEligible: false,
    nightAllowanceAmount: 0,
    assignedCount: 100,
    description: 'Plant Engineering, Technical QA, HR Administration & Executive Staff'
  }
];
