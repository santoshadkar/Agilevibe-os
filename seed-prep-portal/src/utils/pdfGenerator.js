import { SEED_SYLLABUS_DOMAINS } from '../data/seedSyllabusData';

function cleanText(text) {
  if (!text) return '';
  return text.replace(/\*\*/g, '').trim();
}

export function generateFullSyllabusPDF() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SEED Exam Complete Master Study Guide 2026</title>
        <style>
          @page {
            size: A4;
            margin: 18mm 12mm 18mm 12mm;
          }
          body {
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
            color: #1e293b;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            background: #fff;
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #f59e0b;
            padding-bottom: 12px;
            margin-bottom: 20px;
          }
          .header h1 {
            color: #0f172a;
            font-size: 22pt;
            margin: 0 0 4px 0;
          }
          .header p {
            color: #64748b;
            font-size: 10pt;
            margin: 0;
          }
          .domain-section {
            page-break-before: always;
          }
          .domain-section:first-of-type {
            page-break-before: avoid;
          }
          .domain-title {
            background: #0f172a;
            color: #f59e0b;
            padding: 8px 14px;
            font-size: 14pt;
            font-weight: bold;
            border-radius: 6px;
            margin-top: 15px;
            margin-bottom: 12px;
          }
          .topic-card {
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            padding: 14px;
            margin-bottom: 18px;
            page-break-inside: avoid;
          }
          .topic-title {
            color: #0f172a;
            font-size: 13pt;
            font-weight: bold;
            margin-bottom: 4px;
          }
          .topic-sub {
            color: #64748b;
            font-size: 9.5pt;
            font-style: italic;
            margin-bottom: 10px;
          }
          .cheat-sheet-box {
            background: #fffbeb;
            border: 1px solid #fde68a;
            border-left: 4px solid #f59e0b;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 9pt;
            margin-bottom: 10px;
          }
          .exam-trap-box {
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-left: 4px solid #ef4444;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 9pt;
            margin-bottom: 10px;
            color: #991b1b;
          }
          .concept-para {
            font-size: 9.5pt;
            color: #334155;
            margin-bottom: 6px;
            text-align: justify;
          }
          .solved-ex-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 8px 10px;
            border-radius: 4px;
            margin-top: 8px;
            font-size: 9pt;
          }
          .solved-ex-title {
            color: #0f172a;
            font-weight: bold;
          }
          .solved-ex-ans {
            color: #047857;
            font-weight: bold;
          }
          .footer {
            text-align: center;
            font-size: 8.5pt;
            color: #94a3b8;
            margin-top: 25px;
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>SEED Entrance Exam Master Study Guide 2026</h1>
          <p>Symbiosis Entrance Exam for Design • Complete Syllabus & Revision Handbook</p>
        </div>

        ${SEED_SYLLABUS_DOMAINS.map(domain => `
          <div class="domain-section">
            <div class="domain-title">${domain.title} (${domain.weightage})</div>
            <p style="font-size: 9.5pt; color: #475569; margin-bottom: 12px;">${domain.summary}</p>

            ${domain.topics.map(topic => `
              <div class="topic-card">
                <div class="topic-title">${cleanText(topic.title)}</div>
                <div class="topic-sub">"${cleanText(topic.subHeading)}"</div>

                ${topic.cheatSheetRules ? `
                  <div class="cheat-sheet-box">
                    <strong style="color: #b45309;">High-Yield Rules & Formulas:</strong>
                    <ul style="margin: 4px 0 0 14px; padding: 0;">
                      ${topic.cheatSheetRules.map(rule => `<li>${cleanText(rule)}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}

                ${topic.examTraps ? `
                  <div class="exam-trap-box">
                    <strong>Exam Warning & Common Mistakes:</strong>
                    <ul style="margin: 4px 0 0 14px; padding: 0;">
                      ${topic.examTraps.map(trap => `<li>${cleanText(trap)}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}

                <div style="margin-top: 8px;">
                  <strong style="font-size: 9.5pt; color: #0f172a;">Core Concepts:</strong>
                  ${(topic.explanationParagraphs || [topic.explanation]).map(p => `
                    <p class="concept-para">${cleanText(p)}</p>
                  `).join('')}
                </div>

                ${topic.solvedExamples ? `
                  <div style="margin-top: 10px;">
                    <strong style="font-size: 9.5pt; color: #0f172a;">Solved Exam Examples:</strong>
                    ${topic.solvedExamples.map(ex => `
                      <div class="solved-ex-box">
                        <div class="solved-ex-title">Q: ${cleanText(ex.question)}</div>
                        <div class="solved-ex-ans">Answer: ${cleanText(ex.solution)}</div>
                        <div style="color: #475569; margin-top: 2px;">Step: ${cleanText(ex.explanationStep)}</div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `).join('')}

        <div class="footer">
          SEED Exam Preparation Portal • Dedicated to Symbiosis Entrance Exam for Design Aspirants
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

export function generateSingleTopicPDF(topic, domainTitle) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SEED Topic Guide - ${cleanText(topic.title)}</title>
        <style>
          @page {
            size: A4;
            margin: 18mm 12mm 18mm 12mm;
          }
          body {
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
            color: #1e293b;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            background: #fff;
          }
          .header {
            border-bottom: 3px solid #f59e0b;
            padding-bottom: 8px;
            margin-bottom: 15px;
          }
          .domain-badge {
            color: #d97706;
            font-weight: bold;
            font-size: 9.5pt;
            text-transform: uppercase;
          }
          .topic-h1 {
            color: #0f172a;
            font-size: 18pt;
            margin: 4px 0;
          }
          .subheading {
            color: #64748b;
            font-size: 10pt;
            font-style: italic;
          }
          .cheat-sheet-box {
            background: #fffbeb;
            border: 1px solid #fde68a;
            border-left: 4px solid #f59e0b;
            padding: 10px 12px;
            border-radius: 6px;
            font-size: 9.5pt;
            margin: 12px 0;
          }
          .exam-trap-box {
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-left: 4px solid #ef4444;
            padding: 10px 12px;
            border-radius: 6px;
            font-size: 9.5pt;
            margin: 12px 0;
            color: #991b1b;
          }
          .section-title {
            color: #0f172a;
            font-size: 12pt;
            font-weight: bold;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 4px;
            margin-top: 15px;
            margin-bottom: 8px;
          }
          .concept-para {
            font-size: 9.5pt;
            color: #334155;
            margin-bottom: 8px;
            text-align: justify;
          }
          .solved-card {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 10px;
            margin-bottom: 8px;
            font-size: 9.5pt;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="domain-badge">${domainTitle}</div>
          <h1 class="topic-h1">${cleanText(topic.title)}</h1>
          <div class="subheading">"${cleanText(topic.subHeading)}"</div>
        </div>

        ${topic.cheatSheetRules ? `
          <div class="cheat-sheet-box">
            <strong style="color: #b45309;">High-Yield Rules & Formulas:</strong>
            <ul style="margin: 4px 0 0 14px; padding: 0;">
              ${topic.cheatSheetRules.map(rule => `<li>${cleanText(rule)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${topic.examTraps ? `
          <div class="exam-trap-box">
            <strong>Exam Warning & Common Traps:</strong>
            <ul style="margin: 4px 0 0 14px; padding: 0;">
              ${topic.examTraps.map(trap => `<li>${cleanText(trap)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="section-title">Core Principles & Topic Breakdown</div>
        ${(topic.explanationParagraphs || [topic.explanation]).map(p => `
          <p class="concept-para">${cleanText(p)}</p>
        `).join('')}

        ${topic.solvedExamples ? `
          <div class="section-title">Solved Exam Examples</div>
          ${topic.solvedExamples.map(ex => `
            <div class="solved-card">
              <div style="font-weight: bold; color: #0f172a;">Q: ${cleanText(ex.question)}</div>
              <div style="color: #047857; font-weight: bold; margin-top: 3px;">Answer: ${cleanText(ex.solution)}</div>
              <div style="color: #475569; margin-top: 2px;">Step: ${cleanText(ex.explanationStep)}</div>
            </div>
          `).join('')}
        ` : ''}

        ${topic.probableQuestions ? `
          <div class="section-title">Practice Exam Questions</div>
          ${topic.probableQuestions.map((q, idx) => `
            <div class="solved-card">
              <div style="font-weight: bold; color: #0f172a;">Q${idx + 1}: ${cleanText(q.question)}</div>
              <div style="margin: 4px 0; color: #334155;">
                Options: ${q.options.map((opt, oIdx) => `(${String.fromCharCode(65 + oIdx)}) ${cleanText(opt)}`).join('  ')}
              </div>
              <div style="color: #047857; font-weight: bold;">Correct Option: (${String.fromCharCode(65 + q.correctAnswer)}) ${cleanText(q.options[q.correctAnswer])}</div>
              <div style="color: #475569; margin-top: 2px;">Reason: ${cleanText(q.explanation)}</div>
            </div>
          `).join('')}
        ` : ''}

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
