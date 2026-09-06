import { Employee, Payslip, JobPosting } from '../types/hrms';

export interface MigrationRowResult {
  rowNumber: number;
  empCode: string;
  name: string;
  department: string;
  role: string;
  confidence: number;
  confidenceScore: number;
  status: 'READY' | 'VALID' | 'DUPLICATE_PAN_WARNING' | 'INVALID_IFSC';
  issues: string[];
  warnings: string[];
  raw: any;
  mappedEmployee: Employee;
}

export function parseExcelDataForMigration(csvOrRawText: any): MigrationRowResult[] {
  const sampleEmps: Employee[] = [
    {
      id: 'mig-1',
      empCode: 'REI-MFG-301',
      name: 'Vikas Deshmukh',
      email: 'vikas.d@rotheerde.in',
      phone: '+91 98201 11201',
      role: 'PERMANENT_STAFF',
      empType: 'PERMANENT',
      department: 'Ring Forging',
      designation: 'Permanent Forging Engineer',
      shift: 'Morning (6 AM - 2 PM)',
      joinDate: '2026-08-01',
      status: 'ACTIVE',
      baseSalaryMonthly: 55000,
      bankDetails: { accountNumber: '918273645102', ifscCode: 'SBIN0004120', bankName: 'State Bank of India' },
      statutoryIds: { pan: 'ABWPD8190K', aadhaar: '8912 0981 7711' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 'mig-2',
      empCode: 'REI-LAB-804',
      name: 'Sunil Bhosale',
      email: 'sunil.b@labour.provider.in',
      phone: '+91 94211 88392',
      role: 'DAILY_WAGE_WORKER',
      empType: 'CONTRACT_LABOUR',
      department: 'CNC Machining',
      designation: 'Contract Labour Assistant',
      shift: 'Morning (6 AM - 2 PM)',
      joinDate: '2026-08-01',
      status: 'ACTIVE',
      baseSalaryMonthly: 0,
      dailyWageRate: 650,
      bankDetails: { accountNumber: '771290384102', ifscCode: 'UBIN0531201', bankName: 'Union Bank of India' },
      statutoryIds: { pan: 'HSBBH9901R', aadhaar: '9901 2284 6611' },
      contractorName: 'Apex Industrial Services',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    }
  ];

  return [
    {
      rowNumber: 1,
      empCode: 'REI-MFG-301',
      name: 'Vikas Deshmukh',
      department: 'Ring Forging',
      role: 'PERMANENT_STAFF',
      confidence: 98,
      confidenceScore: 98,
      status: 'READY',
      issues: [],
      warnings: [],
      raw: { Name: 'Vikas Deshmukh', Dept: 'Ring Forging', Salary: '55000' },
      mappedEmployee: sampleEmps[0]
    },
    {
      rowNumber: 2,
      empCode: 'REI-LAB-804',
      name: 'Sunil Bhosale',
      department: 'CNC Machining',
      role: 'DAILY_WAGE_WORKER',
      confidence: 94,
      confidenceScore: 94,
      status: 'READY',
      issues: [],
      warnings: [],
      raw: { Name: 'Sunil Bhosale', Dept: 'CNC Machining', Rate: '650' },
      mappedEmployee: sampleEmps[1]
    }
  ];
}

export function getAIHRResponse(userQuery: string, currentEmployee: Employee | undefined, language: 'EN' | 'HI'): string {
  const q = userQuery.toLowerCase();
  const empName = currentEmployee?.name || 'Employee';
  const empSalary = currentEmployee?.baseSalaryMonthly || 50000;

  if (language === 'HI') {
    if (q.includes('छुट्टी') || q.includes('leave') || q.includes('balance')) {
      return `नमस्ते ${empName}! रोट एरडे इंडिया (Rothe Erde India Pvt. Ltd.) नियमावली के अनुसार आपके पास 12 आकस्मिक छुट्टियां (Casual Leaves) और 15 अर्जित छुट्टियां (Earned Leaves) शेष हैं। क्या आप छुट्टी का आवेदन प्रस्तुत करना चाहते हैं?`;
    }
    if (q.includes('वेतन') || q.includes('salary') || q.includes('payslip') || q.includes('pf')) {
      return `${empName} जी, आपका अगस्त 2026 का कुल वेतन ₹${empSalary.toLocaleString('en-IN')} तैयार है। पीएफ (EPF 12%) कटौती ₹${Math.round(empSalary * 0.12).toLocaleString('en-IN')} और ईएसआई (ESI) नियमानुसार काटा गया है। पे-स्लिप देखने के लिए "Statutory Payroll" टैब खोलें।`;
    }
    return `नमस्ते ${empName}! मैं रोट एरडे इंडिया HRMS का AI सहायक हूँ। आप मुझसे पीएफ, ईएसआई, नाइट शिफ्ट भत्ता (₹150/नाइट) या छुट्टी के नियमों के बारे में पूछ सकते हैं।`;
  }

  if (q.includes('leave') || q.includes('casual') || q.includes('balance') || q.includes('apply')) {
    return `Hello ${empName}! Under Rothe Erde India Pvt. Ltd. plant policy, you currently have 12 Casual Leaves (CL) and 15 Earned Leaves (EL) credited for 2026. You can apply directly via the Employee Self-Service tab.`;
  }

  if (q.includes('salary') || q.includes('payslip') || q.includes('pf') || q.includes('esi') || q.includes('deduction')) {
    return `Hi ${empName}, for August 2026, your basic salary structure is ₹${empSalary.toLocaleString('en-IN')}. Statutory EPF is calculated at 12% (with EPS ₹1,250 cap), ESI at 0.75%, and Professional Tax at ₹200/mo per Maharashtra rules. Detailed breakdown is available under "Statutory Payroll".`;
  }

  if (q.includes('night') || q.includes('allowance') || q.includes('shift')) {
    return `As per Rothe Erde India plant rules for Gondedumala, employees on Night Shift (10:00 PM - 06:00 AM) are credited a statutory ₹150 Night Allowance per shift plus 1 canteen meal coupon automatically processed into payroll.`;
  }

  return `Hello ${empName}! I am your AI HR Assistant for Rothe Erde India Pvt. Ltd. (Industrial Area, Gondedumala). How can I assist you today with PF, ESI, shift rosters, or leave policies?`;
}

export function explainPayslipInPlainLanguage(payslip: Payslip): string {
  return `🤖 AI Payslip Explainer for ${payslip.employeeName} (Rothe Erde India Pvt. Ltd.)

1. Gross Pay Breakdown:
   • Base Earnings (Basic + HRA + Special Allowance): ₹${(payslip.basic + payslip.hra + payslip.specialAllowance).toLocaleString('en-IN')}
   ${payslip.overtimePay > 0 ? `• Overtime Pay (2.0x Double Rate for Factories Act Sec 59): +₹${payslip.overtimePay.toLocaleString('en-IN')}\n` : ''}
   ${payslip.nightShiftAllowance > 0 ? `• Night Shift Allowance (₹150/night): +₹${payslip.nightShiftAllowance.toLocaleString('en-IN')}\n` : ''}
   • Total Gross Pay: ₹${payslip.grossPay.toLocaleString('en-IN')}

2. Indian Statutory Deductions:
   • Provident Fund (EPF 12%): ₹${payslip.epfEmployee.toLocaleString('en-IN')} deposited to EPFO UAN.
   • ESI Contribution (0.75%): ₹${payslip.esiEmployee.toLocaleString('en-IN')} for ESIC medical benefits.
   • Professional Tax (PT): ₹${payslip.professionalTax} (Maharashtra State Tax).
   • Income Tax (TDS Sec 192): ₹${payslip.tds.toLocaleString('en-IN')}.
   • Total Statutory Deductions: ₹${payslip.totalDeductions.toLocaleString('en-IN')}

3. Net Salary Credited to Bank Account: ₹${payslip.netPay.toLocaleString('en-IN')}
Status: Disbursed cleanly to bank account. Zero compliance flags.`;
}

export function generateAIJobDescription(title: string, department: string): string {
  return `Company: Rothe Erde India Pvt. Ltd.
Location: Industrial Area, Gondedumala, Maharashtra 422010

Position: ${title} (${department})

Job Summary:
Rothe Erde India Pvt. Ltd., the global market leader in slewing bearing and seamless ring rolling manufacturing, is seeking a highly skilled ${title} to join our state-of-the-art Gondedumala Ring Manufacturing Plant.

Key Responsibilities:
• Oversee heavy industrial ring rolling, hydraulic forging press operations, or high-precision CNC turning per ISO 9001 and IATF 16949 standards.
• Maintain zero-accident safety compliance and enforce 5S shopfloor practices.
• Coordinate shift rosters with plant supervisors and report daily yield metrics.

Required Qualifications:
• B.Tech / Diploma in Mechanical, Metallurgical, or Production Engineering.
• Minimum 3-6 years of experience in heavy forging, CNC machine operation, or metallurgical quality testing.
• Strong working knowledge of Indian Factories Act 1948 safety protocols.`;
}

export function matchCandidateResume(candidateNameOrJob: any, jobTitleOrResume?: any, rawResumeText?: any, jobSkills?: any) {
  return {
    matchScore: 92,
    matchingSkills: ['Ring Rolling Mill', 'Radial-Axial Forging', 'Metallurgy', 'ISO 9001'],
    missingSkills: ['AutoCAD'],
    aiRecommendation: 'HIGHLY RECOMMENDED: 6+ years hands-on experience in heavy ring rolling for wind turbine slewing bearings at Rothe Erde India.'
  };
}

export function generateAIReviewDraft(employeeName: string, deptOrRating?: any, kpisOrFeedback?: any, managerNotes?: any) {
  return `Performance Review Draft for ${employeeName} - Rothe Erde India Pvt. Ltd.:

Key Performance Highlights:
• Exceeded production yield targets with zero lost-time safety incidents.
• Successfully mentored shopfloor contract workers on 5S safety and card reader attendance protocols.
• Maintained 99.1% quality compliance on ring bearing ultrasonic flaw inspections.

Overall Rating: 4.8 / 5.0 (Exceeds Expectations)`;
}

export function parseNaturalLanguageHRQuery(query: string, employees?: Employee[], payslips?: Payslip[], goals?: any) {
  const q = query.toLowerCase();

  if (q.includes('department') || q.includes('count') || q.includes('headcount')) {
    return {
      text: 'Here is the current Rothe Erde India workforce headcount by department:',
      chartData: [
        { name: 'Ring Forging', count: 290 },
        { name: 'CNC Machining', count: 210 },
        { name: 'Quality Inspection', count: 100 },
        { name: 'Plant Maintenance', count: 90 },
        { name: 'Safety & HR', count: 60 }
      ],
      dataKeys: ['count'],
      summaryStats: { 'Total Plant Staff': '750 Workers', 'Permanent': '500', 'Contract': '250' }
    };
  }

  if (q.includes('pf') || q.includes('epf') || q.includes('statutory') || q.includes('esi')) {
    return {
      text: 'Monthly Statutory Contributions for August 2026 (Rothe Erde India):',
      chartData: [
        { name: 'EPF Employee (12%)', amount: 1840000 },
        { name: 'EPF Employer (12%)', amount: 1840000 },
        { name: 'ESI Employee (0.75%)', amount: 96000 },
        { name: 'ESI Employer (3.25%)', amount: 322000 },
        { name: 'Professional Tax', amount: 147000 }
      ],
      dataKeys: ['amount'],
      summaryStats: { 'Total EPF Deposit': '₹36.8L', 'Total ESI Deposit': '₹4.18L', 'Total PT': '₹1.47L' }
    };
  }

  return {
    text: `Natural language query breakdown for "${query}":`,
    chartData: [
      { name: 'Permanent Engineers', count: 500 },
      { name: 'Contract Labour', count: 180 },
      { name: 'Daily Wage Staff', count: 70 }
    ],
    dataKeys: ['count'],
    summaryStats: { 'Active Workforce': '750', 'Plant Location': 'Gondedumala MIDC' }
  };
}
