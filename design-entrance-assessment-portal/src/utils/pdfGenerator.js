import { jsPDF } from 'jspdf';

/**
 * Utility to generate and download comprehensive PDF Question Bank booklets
 * including Question Text, Options, Correct Answer Keys, and Explanations.
 */
export const downloadQuestionBankPDF = (questions = [], examTitle = 'Design Entrance Exam', fileName = 'question_bank') => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  let y = 20;

  // Header Banner
  doc.setFillColor(19, 27, 46); // Dark blue accent
  doc.rect(0, 0, pageWidth, 28, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text('DesignPrep PRO', margin, 12);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(56, 189, 248); // Cyan
  doc.text(`Official Question Bank & Solution Guide - ${examTitle}`, margin, 20);

  y = 36;

  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(`Generated on: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • Total Questions: ${questions.length}`, margin, y);
  y += 10;

  // Line separator
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  // Iterate over questions
  questions.forEach((q, index) => {
    // Check page space remaining
    if (y > pageHeight - 35) {
      doc.addPage();
      y = 20;
    }

    // Question Number & Topic
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(139, 92, 246); // Purple accent
    doc.text(`Q${index + 1}. [${q.topic || 'General Aptitude'}] (${q.type ? q.type.toUpperCase() : 'MCQ'})`, margin, y);
    y += 6;

    // Question Text (Multi-line wrap)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42); // Dark slate
    const qLines = doc.splitTextToSize(q.question || q.title || '', pageWidth - margin * 2);
    doc.text(qLines, margin, y);
    y += qLines.length * 5 + 2;

    // Passage Text if Comprehension
    if (q.passageText) {
      if (y > pageHeight - 35) { doc.addPage(); y = 20; }
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      const passageLines = doc.splitTextToSize(`Passage Context: ${q.passageText.substring(0, 300)}...`, pageWidth - margin * 2);
      doc.text(passageLines, margin, y);
      y += passageLines.length * 4.2 + 2;
    }

    // Options list if MCQ / Image Based / MSQ
    if (q.options && Array.isArray(q.options)) {
      const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
      q.options.forEach((opt, optIdx) => {
        if (y > pageHeight - 20) { doc.addPage(); y = 20; }
        const isCorrect = (q.answer === optIdx) || (Array.isArray(q.correctAnswers) && q.correctAnswers.includes(optIdx));
        
        doc.setFont('helvetica', isCorrect ? 'bold' : 'normal');
        doc.setFontSize(9);
        doc.setTextColor(isCorrect ? 16 : 51, isCorrect ? 185 : 65, isCorrect ? 129 : 85); // Green if correct else dark gray
        
        const optText = `   (${optionLabels[optIdx]}) ${opt} ${isCorrect ? '  [CORRECT KEY]' : ''}`;
        const optLines = doc.splitTextToSize(optText, pageWidth - margin * 2);
        doc.text(optLines, margin + 4, y);
        y += optLines.length * 4.5;
      });
      y += 2;
    }

    // Correct Key for Fill Blank or NAT or Match Column
    if (q.acceptableAnswers) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(16, 185, 129);
      doc.text(`   Correct Key Answers: ${q.acceptableAnswers.join(', ')}`, margin + 4, y);
      y += 5;
    }

    if (q.correctNumericalValue !== undefined) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(16, 185, 129);
      doc.text(`   Correct Numerical Answer: ${q.correctNumericalValue}`, margin + 4, y);
      y += 5;
    }

    if (q.correctPairs) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(16, 185, 129);
      const pairsText = Object.entries(q.correctPairs).map(([k, v]) => `${k}→${v}`).join(', ');
      doc.text(`   Correct Matching Pairs: ${pairsText}`, margin + 4, y);
      y += 5;
    }

    // Explanation Box
    if (q.explanation) {
      if (y > pageHeight - 30) { doc.addPage(); y = 20; }
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      const expLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, pageWidth - margin * 2);
      doc.text(expLines, margin + 4, y);
      y += expLines.length * 4 + 4;
    }

    // Dotted separator between questions
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  });

  // Footer Page Numbers
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`DesignPrep PRO • ${examTitle} PDF Book • Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 8, { align: 'center' });
  }

  doc.save(`${fileName}_${Date.now()}.pdf`);
};
