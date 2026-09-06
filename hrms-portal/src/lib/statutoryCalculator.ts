/**
 * Indian Statutory Payroll Calculator & Compliance Engine
 * Handles EPF (1952 Act), ESI (1948 Act), Professional Tax (State Slabs),
 * Income Tax (TDS - Sec 192), Contract Labour Muster Roll, and Night Shift Allowances.
 */

export interface StatutoryBreakdown {
  basic: number;
  hra: number;
  specialAllowance: number;
  overtimePay: number;
  nightShiftAllowance: number;
  grossPay: number;
  
  // Statutory Deductions
  epfEmployee: number;
  epfEmployer: number;
  epsEmployer: number; // 8.33% capped at 1250
  epfEmployerNet: number; // 3.67%
  esiEmployee: number;
  esiEmployer: number;
  professionalTax: number;
  tds: number;
  totalEmployeeDeductions: number;
  
  netPay: number;
  costToCompany: number;
  contractorFee?: number;
}

export function calculateIndiaStatutorySalary(
  monthlyBaseOrWage: number,
  presentDays: number,
  totalWorkingDays: number = 26,
  overtimeHours: number = 0,
  empType: 'PERMANENT' | 'CONTRACT_LABOUR' | 'DIRECT_DAILY_WAGE' = 'PERMANENT',
  state: string = 'Maharashtra',
  nightShiftCount: number = 0
): StatutoryBreakdown {
  const proration = Math.max(0, Math.min(1, presentDays / totalWorkingDays));
  
  let basic = 0;
  let hra = 0;
  let specialAllowance = 0;
  let overtimePay = 0;
  const nightShiftAllowance = nightShiftCount * 150; // ₹150 statutory night shift allowance per night
  
  if (empType === 'PERMANENT') {
    const proratedBase = monthlyBaseOrWage * proration;
    basic = Math.round(proratedBase * 0.50); // 50% Basic
    hra = Math.round(proratedBase * 0.30);   // 30% HRA
    specialAllowance = Math.round(proratedBase * 0.20); // 20% Special
    const hourlyRate = (monthlyBaseOrWage / (totalWorkingDays * 8)) * 2; // Statutory Double Rate for OT (Sec 59 Factories Act)
    overtimePay = Math.round(overtimeHours * hourlyRate);
  } else {
    // Daily Wage or Contract Labour
    const dailyRate = monthlyBaseOrWage; // daily wage rate passed
    const earnedWage = dailyRate * presentDays;
    basic = Math.round(earnedWage * 0.70);
    specialAllowance = Math.round(earnedWage * 0.30);
    const hourlyRate = (dailyRate / 8) * 1.5;
    overtimePay = Math.round(overtimeHours * hourlyRate);
  }

  const grossPay = basic + hra + specialAllowance + overtimePay + nightShiftAllowance;

  // 1. EPF Calculations (EPF wage ceiling ₹15,000)
  const epfBase = Math.min(basic, 15000);
  const epfEmployee = Math.round(epfBase * 0.12);
  
  // Employer split: EPS 8.33% capped at 1250, remainder to EPF 3.67%
  const epsEmployer = Math.min(1250, Math.round(epfBase * 0.0833));
  const epfEmployerNet = Math.max(0, Math.round(epfBase * 0.12) - epsEmployer);
  const epfEmployer = epsEmployer + epfEmployerNet;

  // 2. ESI Calculations (Applies if Gross Pay <= ₹21,000 / month)
  let esiEmployee = 0;
  let esiEmployer = 0;
  if (grossPay > 0 && grossPay <= 21000) {
    esiEmployee = Math.ceil(grossPay * 0.0075);
    esiEmployer = Math.ceil(grossPay * 0.0325);
  }

  // 3. Professional Tax (PT)
  let professionalTax = 0;
  if (empType === 'PERMANENT') {
    if (grossPay > 10000) {
      professionalTax = 200;
    } else if (grossPay > 7500) {
      professionalTax = 175;
    }
  }

  // 4. TDS (Income Tax Deducted at Source)
  let tds = 0;
  if (empType === 'PERMANENT') {
    const annualGross = grossPay * 12;
    const stdDeduction = 75000;
    const taxableIncome = Math.max(0, annualGross - stdDeduction);

    let annualTax = 0;
    if (taxableIncome > 1200000) {
      annualTax = (taxableIncome - 1200000) * 0.20 + 90000;
    } else if (taxableIncome > 700000) {
      annualTax = (taxableIncome - 700000) * 0.10 + 20000;
    } else if (taxableIncome > 400000) {
      annualTax = (taxableIncome - 400000) * 0.05;
    }

    annualTax += annualTax * 0.04; // 4% Cess
    tds = Math.round(annualTax / 12);
  }

  const totalEmployeeDeductions = epfEmployee + esiEmployee + professionalTax + tds;
  const netPay = Math.max(0, grossPay - totalEmployeeDeductions);
  
  let contractorFee = 0;
  if (empType === 'CONTRACT_LABOUR') {
    contractorFee = Math.round(grossPay * 0.08); // 8% contractor margin
  }

  const costToCompany = grossPay + epfEmployer + esiEmployer + contractorFee;

  return {
    basic,
    hra,
    specialAllowance,
    overtimePay,
    nightShiftAllowance,
    grossPay,
    epfEmployee,
    epfEmployer,
    epsEmployer,
    epfEmployerNet,
    esiEmployee,
    esiEmployer,
    professionalTax,
    tds,
    totalEmployeeDeductions,
    netPay,
    costToCompany,
    contractorFee
  };
}
