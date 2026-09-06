/**
 * ICF Credentials Eligibility & Gap Analysis Calculator
 */

function calculateEligibility(trainingHours, totalHours, paidHours, mentorHours, targetCredential, hasPcc) {
  const requirements = {
    acc: { minTraining: 60, minTotal: 100, minPaid: 75, minMentor: 10, minClients: 8 },
    pcc: { minTraining: 125, minTotal: 500, minPaid: 450, minMentor: 10, minClients: 25 },
    mcc: { minTraining: 200, minTotal: 2500, minPaid: 2250, minMentor: 10, minClients: 35 }
  };

  const req = requirements[targetCredential];
  if (!req) return null;

  const results = {
    target: targetCredential.toUpperCase(),
    eligible: true,
    gaps: [],
    progress: {},
    recommendation: ''
  };

  // Special pre-requisite for MCC: must hold PCC
  if (targetCredential === 'mcc' && !hasPcc) {
    results.eligible = false;
    results.gaps.push({
      item: 'PCC Credential Requirement',
      current: 'No Active PCC',
      required: 'Must currently hold or have held an active PCC credential',
      missing: 'Prerequisite missing: You must achieve PCC certification before applying for MCC.'
    });
  }

  // Education Gap
  const trainingDiff = req.minTraining - trainingHours;
  const trainingPercent = Math.min(100, Math.round((trainingHours / req.minTraining) * 100));
  results.progress.training = { current: trainingHours, required: req.minTraining, percentage: trainingPercent };
  if (trainingDiff > 0) {
    results.eligible = false;
    results.gaps.push({
      item: 'Coach Education Hours',
      current: `${trainingHours} hours`,
      required: `${req.minTraining} hours`,
      missing: `Need ${trainingDiff} more hours of ICF-approved training.`
    });
  }

  // Total Client Hours Gap
  const totalDiff = req.minTotal - totalHours;
  const totalPercent = Math.min(100, Math.round((totalHours / req.minTotal) * 100));
  results.progress.totalHours = { current: totalHours, required: req.minTotal, percentage: totalPercent };
  if (totalDiff > 0) {
    results.eligible = false;
    results.gaps.push({
      item: 'Total Client Experience Hours',
      current: `${totalHours} hours`,
      required: `${req.minTotal} hours`,
      missing: `Need ${totalDiff} more client coaching hours.`
    });
  }

  // Paid Hours Gap
  const paidDiff = req.minPaid - paidHours;
  const paidPercent = Math.min(100, Math.round((paidHours / req.minPaid) * 100));
  results.progress.paidHours = { current: paidHours, required: req.minPaid, percentage: paidPercent };
  if (paidDiff > 0) {
    results.eligible = false;
    results.gaps.push({
      item: 'Paid Client Coaching Hours',
      current: `${paidHours} paid hours`,
      required: `${req.minPaid} paid hours`,
      missing: `Need ${paidDiff} more paid client coaching hours (pro-bono limit exceeded).`
    });
  }

  // Mentor Coaching Gap
  const mentorDiff = req.minMentor - mentorHours;
  const mentorPercent = Math.min(100, Math.round((mentorHours / req.minMentor) * 100));
  results.progress.mentorHours = { current: mentorHours, required: req.minMentor, percentage: mentorPercent };
  if (mentorDiff > 0) {
    results.eligible = false;
    results.gaps.push({
      item: 'Mentor Coaching Hours',
      current: `${mentorHours} hours`,
      required: `${req.minMentor} hours over 3+ months`,
      missing: `Need ${mentorDiff} more mentor coaching hours with an eligible ICF Mentor Coach.`
    });
  }

  // Generate Personalized Action Recommendation
  if (results.eligible) {
    results.recommendation = `🎉 Congratulations! You meet all numeric experience and education prerequisites for the ICF ${targetCredential.toUpperCase()} Credential. Your next steps: Select your application pathway (Level 1/2/3 or Portfolio), prepare performance evaluation recordings if needed, and book your ICF Credentialing Exam via Pearson VUE.`;
  } else {
    results.recommendation = `You are on your way toward ${targetCredential.toUpperCase()}! Focus on fulfilling your ${results.gaps.length} remaining gap(s) listed above before submitting your official application to ICF.`;
  }

  return results;
}
