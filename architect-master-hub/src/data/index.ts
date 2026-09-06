import { togafQuestions, togafFramework } from './togaf';
import { aiArchQuestions, aiArchFramework } from './ai-architecture';
import { cyberQuestions, cyberFramework } from './cybersecurity';
import { enterpriseQuestions, enterpriseFramework } from './enterprise';
import { solutionQuestions, solutionFramework } from './solution';
import { technicalQuestions, technicalFramework } from './technical';
import { FrameworkId, Question, Framework } from '../lib/types';

export const FRAMEWORK_ROUTES: Record<string, FrameworkId> = {
  togaf: 'togaf',
  'ai-architecture': 'ai-architecture',
  cybersecurity: 'cybersecurity',
  enterprise: 'enterprise',
  solution: 'solution',
  technical: 'technical',
};

export const FRAMEWORK_DATA: Record<FrameworkId, { questions: Question[]; framework: Framework }> = {
  togaf: { questions: togafQuestions, framework: togafFramework },
  'ai-architecture': { questions: aiArchQuestions, framework: aiArchFramework },
  cybersecurity: { questions: cyberQuestions, framework: cyberFramework },
  enterprise: { questions: enterpriseQuestions, framework: enterpriseFramework },
  solution: { questions: solutionQuestions, framework: solutionFramework },
  technical: { questions: technicalQuestions, framework: technicalFramework },
};

export function getFrameworkDataset(id: string): { questions: Question[]; framework: Framework } | null {
  return FRAMEWORK_DATA[id as FrameworkId] || null;
}

export const ASSESSMENT_CONFIG = {
  defaultQuestionCount: 20,
  maxQuestionCount: 65,
  timePerQuestion: 90, // seconds
  minQuestionsPerDomain: 2,
};
