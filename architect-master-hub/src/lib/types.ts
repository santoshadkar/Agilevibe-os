// ─── Framework IDs ────────────────────────────────────────────────────────────
export type FrameworkId =
  | 'togaf'
  | 'ai-architecture'
  | 'cybersecurity'
  | 'enterprise'
  | 'solution'
  | 'technical';

// ─── Question Types ───────────────────────────────────────────────────────────
export type QuestionType = 'mcq' | 'scenario' | 'drag-drop';
export type Difficulty = 'foundation' | 'practitioner' | 'expert';

// ─── MCQ ──────────────────────────────────────────────────────────────────────
export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

// ─── Drag & Drop ──────────────────────────────────────────────────────────────
export interface DragDropItem {
  id: string;
  content: string;
  correctZone: string;
}

export interface DragDropZone {
  id: string;
  label: string;
}

// ─── Base Question ─────────────────────────────────────────────────────────────
export interface BaseQuestion {
  id: string;
  type: QuestionType;
  domain: string;
  difficulty: Difficulty;
  points: number;
  explanation: string;
  reference?: string;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  question: string;
  options: MCQOption[];
}

export interface ScenarioQuestion extends BaseQuestion {
  type: 'scenario';
  scenario: string;
  question: string;
  options: MCQOption[];
}

export interface DragDropQuestion extends BaseQuestion {
  type: 'drag-drop';
  instruction: string;
  items: DragDropItem[];
  zones: DragDropZone[];
}

export type Question = MCQQuestion | ScenarioQuestion | DragDropQuestion;

// ─── Domain ───────────────────────────────────────────────────────────────────
export interface Domain {
  id: string;
  name: string;
  description: string;
  weight: number;
}

// ─── Framework ────────────────────────────────────────────────────────────────
export interface Framework {
  id: FrameworkId;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  domains: Domain[];
  totalQuestions: number;
  estimatedMinutes: number;
  certifications?: string[];
}

// ─── Assessment Session ───────────────────────────────────────────────────────
export interface AssessmentSession {
  id: string;
  frameworkId: FrameworkId;
  startedAt: string;
  completedAt?: string;
  questions: Question[];
  answers: Record<string, UserAnswer>;
  status: 'in-progress' | 'completed';
  totalQuestions: number;
  timeLimit: number;
}

export interface UserAnswer {
  questionId: string;
  questionType: QuestionType;
  selectedOptionId?: string;
  dragDropAssignments?: Record<string, string>;
  isCorrect: boolean;
  pointsEarned: number;
  timeSpent: number;
}

// ─── Assessment Result ────────────────────────────────────────────────────────
export type ArchLevel =
  | 'Novice'
  | 'Foundation'
  | 'Practitioner'
  | 'Expert'
  | 'Master';

export interface DomainScore {
  domainId: string;
  domainName: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface Resource {
  title: string;
  type: 'book' | 'course' | 'official-doc' | 'article' | 'video';
  url?: string;
  estimatedHours?: number;
}

export interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  domain: string;
  title: string;
  description: string;
  resources: Resource[];
}

export interface AssessmentResult {
  id: string;
  sessionId: string;
  frameworkId: FrameworkId;
  frameworkName: string;
  completedAt: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: ArchLevel;
  domainScores: DomainScore[];
  recommendations: Recommendation[];
  timeSpent: number;
  strengths: string[];
  weaknesses: string[];
}

// ─── User Profile ──────────────────────────────────────────────────────────────
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
  framework?: FrameworkId;
}

export interface FrameworkProgress {
  frameworkId: FrameworkId;
  bestScore: number;
  lastAttempt?: string;
  attemptCount: number;
  level?: ArchLevel;
  domainMastery: Record<string, number>;
}

export interface UserProfile {
  name: string;
  targetRole: string;
  createdAt: string;
  lastActive: string;
  streakDays: number;
  lastStreakDate: string;
  badges: Badge[];
  assessmentResults: AssessmentResult[];
  frameworkProgress: Record<string, FrameworkProgress>;
}

// ─── Chart ────────────────────────────────────────────────────────────────────
export interface RadarDataPoint {
  framework: string;
  score: number;
  fullMark: number;
}
