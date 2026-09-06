// ─── Content Block Types ──────────────────────────────────────────────────────
export type ContentBlockType =
  | 'paragraph'
  | 'bullets'
  | 'numbered'
  | 'diagram'
  | 'code'
  | 'callout'
  | 'example'
  | 'table'
  | 'key-concept';

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ContentBlock {
  type: ContentBlockType;
  title?: string;
  // paragraph / callout / diagram / code
  content?: string;
  // bullets / numbered
  items?: string[];
  // table
  table?: TableData;
  // callout style
  calloutType?: 'info' | 'warning' | 'tip' | 'important';
}

// ─── Topic Section ────────────────────────────────────────────────────────────
export interface TopicSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

// ─── Key Term ─────────────────────────────────────────────────────────────────
export interface KeyTerm {
  term: string;
  definition: string;
}

// ─── External Resource ────────────────────────────────────────────────────────
export type ResourceType = 'official-doc' | 'video' | 'article' | 'book' | 'course';

export interface ExternalResource {
  title: string;
  type: ResourceType;
  url: string;
  description: string;
  isFree: boolean;
  duration?: string; // e.g. "45 min", "3 hrs"
  publisher?: string;
}

// ─── Practice Question (embedded, lightweight) ────────────────────────────────
export interface EmbeddedQuestion {
  id: string;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

// ─── Topic Content ────────────────────────────────────────────────────────────
import { FrameworkId, Difficulty } from './types';

export interface TopicContent {
  id: string;
  frameworkId: FrameworkId;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  difficulty: Difficulty;
  domain: string;
  overview: string;         // 2-3 sentence summary shown in cards
  sections: TopicSection[];
  keyTerms: KeyTerm[];
  examTips: string[];
  commonMistakes: string[];
  externalResources: ExternalResource[];
  relatedTopicIds: string[];
  embeddedQuestions: EmbeddedQuestion[];
}

// ─── Framework Learning Hub ───────────────────────────────────────────────────
export interface FrameworkCurriculum {
  frameworkId: FrameworkId;
  topics: TopicContent[];
}
