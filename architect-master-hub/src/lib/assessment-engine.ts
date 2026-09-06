import {
  AssessmentSession,
  Question,
  FrameworkId,
  DragDropQuestion,
  AssessmentResult,
  Framework,
  DomainScore
} from './types';
import { generateRecommendations } from './recommendations';

export function createSession(frameworkId: FrameworkId, questions: Question[], timeLimit: number): AssessmentSession {
  return {
    id: crypto.randomUUID(),
    frameworkId,
    startedAt: new Date().toISOString(),
    questions,
    answers: {},
    status: 'in-progress',
    totalQuestions: questions.length,
    timeLimit
  };
}

export function submitMCQAnswer(
  session: AssessmentSession,
  questionId: string,
  optionId: string
): AssessmentSession {
  const question = session.questions.find(q => q.id === questionId);
  if (!question || (question.type !== 'mcq' && question.type !== 'scenario')) return session;

  const selectedOption = question.options.find(o => o.id === optionId);
  const isCorrect = selectedOption ? selectedOption.isCorrect : false;

  const newAnswers = {
    ...session.answers,
    [questionId]: {
      questionId,
      questionType: question.type,
      selectedOptionId: optionId,
      isCorrect,
      pointsEarned: isCorrect ? question.points : 0,
      timeSpent: 0 // Mock implementation, would need actual tracking
    }
  };

  return { ...session, answers: newAnswers };
}

export function evaluateDragDrop(
  question: DragDropQuestion,
  assignments: Record<string, string>
): { isCorrect: boolean; pointsEarned: number } {
  let correctCount = 0;
  question.items.forEach(item => {
    if (assignments[item.id] === item.correctZone) {
      correctCount++;
    }
  });

  const isCorrect = correctCount === question.items.length;
  // Partial credit possible
  const pointsEarned = Math.round((correctCount / question.items.length) * question.points);

  return { isCorrect, pointsEarned };
}

export function submitDragDropAnswer(
  session: AssessmentSession,
  questionId: string,
  assignments: Record<string, string>
): AssessmentSession {
  const question = session.questions.find(q => q.id === questionId);
  if (!question || question.type !== 'drag-drop') return session;

  const { isCorrect, pointsEarned } = evaluateDragDrop(question, assignments);

  const newAnswers = {
    ...session.answers,
    [questionId]: {
      questionId,
      questionType: question.type,
      dragDropAssignments: assignments,
      isCorrect,
      pointsEarned,
      timeSpent: 0
    }
  };

  return { ...session, answers: newAnswers };
}

export function completeSession(session: AssessmentSession): AssessmentSession {
  return {
    ...session,
    status: 'completed',
    completedAt: new Date().toISOString()
  };
}

export function calculateResult(session: AssessmentSession, framework: Framework): AssessmentResult {
  let totalScore = 0;
  let maxScore = 0;
  let timeSpent = 0; // mocked

  const domainScoreMap: Record<string, { earned: number; max: number; name: string }> = {};

  framework.domains.forEach(d => {
    domainScoreMap[d.id] = { earned: 0, max: 0, name: d.name };
  });

  session.questions.forEach(q => {
    maxScore += q.points;
    if (domainScoreMap[q.domain]) {
      domainScoreMap[q.domain].max += q.points;
    } else {
      domainScoreMap[q.domain] = { earned: 0, max: q.points, name: q.domain };
    }

    const ans = session.answers[q.id];
    if (ans) {
      totalScore += ans.pointsEarned;
      timeSpent += ans.timeSpent;
      if (domainScoreMap[q.domain]) {
        domainScoreMap[q.domain].earned += ans.pointsEarned;
      }
    }
  });

  const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
  
  let level: AssessmentResult['level'] = 'Novice';
  if (percentage >= 90) level = 'Master';
  else if (percentage >= 75) level = 'Expert';
  else if (percentage >= 60) level = 'Practitioner';
  else if (percentage >= 40) level = 'Foundation';

  const domainScores: DomainScore[] = Object.keys(domainScoreMap).map(domainId => {
    const ds = domainScoreMap[domainId];
    return {
      domainId,
      domainName: ds.name,
      score: ds.earned,
      maxScore: ds.max,
      percentage: ds.max > 0 ? (ds.earned / ds.max) * 100 : 0
    };
  });

  const strengths = domainScores.filter(ds => ds.percentage > 75).map(ds => ds.domainName);
  const weaknesses = domainScores.filter(ds => ds.percentage < 50).map(ds => ds.domainName);

  const recommendations = generateRecommendations(framework.id, domainScores, level);

  return {
    id: crypto.randomUUID(),
    sessionId: session.id,
    frameworkId: framework.id,
    frameworkName: framework.name,
    completedAt: session.completedAt || new Date().toISOString(),
    totalScore,
    maxScore,
    percentage,
    level,
    domainScores,
    recommendations,
    timeSpent,
    strengths,
    weaknesses
  };
}

export function selectQuestions(allQuestions: Question[], count: number): Question[] {
  // Simple random selection for now, robust implementation would balance domains/difficulty
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
