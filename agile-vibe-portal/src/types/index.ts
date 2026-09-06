export type UserRole = 'scrum-master' | 'product-owner' | 'product-manager';

export interface SMCompetency {
  facilitation: number;
  coaching: number;
  impedimentRemoval: number;
  flowMetrics: number;
  teamHealth: number;
  scalingAgile: number;
}

export interface POCompetency {
  backlogRefinement: number;
  valueOptimization: number;
  storyCrafting: number;
  prioritizationWSJF: number;
  roadmapStrategy: number;
  stakeholderMgmt: number;
}

export interface PMCompetency {
  productVision: number;
  marketDiscovery: number;
  okrAlignment: number;
  roadmapStrategy: number;
  productAnalytics: number;
  gtmExecution: number;
}

export type KnowledgeLevel = 'Basics' | 'Intermediate' | 'Advanced';

export interface ResourceLink {
  id: string;
  role: UserRole | 'all';
  type: 'book' | 'paper' | 'article' | 'guide';
  title: string;
  author: string;
  url: string;
  summary: string;
  readingTime: string;
  keyTopics: string[];
}

export interface DictionaryTerm {
  id: string;
  term: string;
  role: UserRole | 'all';
  category: string;
  definition: string;
  exampleScenario: string;
  keyTakeaway: string;
}

export interface RoleDeepGuide {
  role: UserRole;
  title: string;
  mission: string;
  whyVitalToday: string[];
  aiInScaledFrameworks: {
    title: string;
    useCases: { title: string; desc: string; scaledBenefit: string }[];
  };
  eventExpectations: {
    event: string;
    roleAccountability: string;
    keyPreparation: string;
    antipatternsToAvoid: string;
  }[];
  coachingStancesGuide?: {
    title: string;
    whenToBeSM: string[];
    whenToBecomeCoach: string[];
    eightHats: { hat: string; whenToWear: string; keyBehavior: string }[];
  };
  facilitationWorkshops?: {
    title: string;
    techniques: { name: string; format: string; teamBenefit: string; stepByStep: string }[];
  };
}

export type FrameworkDomain = 
  | 'scrum-framework'
  | 'agile-principles'
  | 'kanban-flow'
  | 'scrumban-hybrid'
  | 'scaling-agile'
  | 'product-ownership'
  | 'product-strategy'
  | 'ai-augmented-agile';

export interface AssessmentQuestion {
  id: string;
  domain: FrameworkDomain;
  domainName: string;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AssessmentResult {
  date: string;
  role: UserRole;
  domainScores: Record<FrameworkDomain, number>;
  overallScore: number;
  passedDomains: string[];
  growthAreas: string[];
  recommendations: string[];
  roadmap: {
    day30: string[];
    day60: string[];
    day90: string[];
  };
}

export interface ScenarioItem {
  id: string;
  targetRole: UserRole;
  title: string;
  framework: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  description: string;
  context: string;
  options: {
    id: string;
    text: string;
    score: number;
    isOptimal: boolean;
  }[];
  expertGuidance: string;
}

export interface ScenarioAttempt {
  scenarioId: string;
  selectedOptionId: string;
  userRationale?: string;
  score: number;
  aiCoachingText: string;
  timestamp: string;
}

export type RetroThemeId = 'sailboat' | 'starfish' | 'four-ls' | 'mountain' | 'racecar';

export interface RetroTheme {
  id: RetroThemeId;
  name: string;
  metaphor: string;
  categories: { key: string; name: string; icon: string; description: string }[];
}

export type JiraServerType = 'cloud' | 'data-center';

export interface JiraConfig {
  serverType: JiraServerType;
  hostUrl: string;
  projectKey: string;
  jqlQuery: string;
  emailOrUsername: string;
  apiTokenOrPassword: string;
  connected: boolean;
  lastSyncedAt?: string;
}

export interface JiraIssue {
  id: string;
  key: string;
  summary: string;
  issueType: 'Story' | 'Bug' | 'Task' | 'Epic' | 'Initiative';
  status: 'To Do' | 'In Progress' | 'In Review' | 'Done';
  priority: 'Highest' | 'High' | 'Medium' | 'Low';
  storyPoints: number;
  assignee: {
    name: string;
    avatar: string;
  };
  epic: string;
  created: string;
  cycleTimeDays?: number;
}

export interface SprintBurndownPoint {
  day: string;
  idealRemaining: number;
  actualRemaining: number;
}

export interface CFDDataPoint {
  date: string;
  todo: number;
  inProgress: number;
  inReview: number;
  done: number;
}

export interface AIToolPrompt {
  id: string;
  name: string;
  role: UserRole;
  description: string;
  category: string;
  templateInput: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedTerms?: string[];
}
