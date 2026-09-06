/**
 * localStorage helpers for tracking learning progress.
 * SSR-safe & bulletproof against missing or legacy localStorage data.
 */

const LEARN_PROGRESS_KEY = 'amh_learn_progress';

export interface TopicProgress {
  topicId: string;
  frameworkId: string;
  completedAt: string;
  timeSpentSeconds: number;
}

export interface LearnProgress {
  completedTopics: TopicProgress[];
  lastVisited?: { frameworkId: string; topicId: string };
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function loadProgress(): LearnProgress {
  if (!isBrowser()) return { completedTopics: [] };
  try {
    const raw = localStorage.getItem(LEARN_PROGRESS_KEY);
    if (!raw) return { completedTopics: [] };
    const parsed = JSON.parse(raw);
    return {
      completedTopics: Array.isArray(parsed?.completedTopics) ? parsed.completedTopics : [],
      lastVisited: parsed?.lastVisited && typeof parsed.lastVisited === 'object' ? parsed.lastVisited : undefined,
    };
  } catch {
    return { completedTopics: [] };
  }
}

function saveProgress(p: LearnProgress) {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(LEARN_PROGRESS_KEY, JSON.stringify(p));
  } catch { /* noop */ }
}

export function getLearnProgress(): LearnProgress {
  return loadProgress();
}

export function markTopicComplete(frameworkId: string, topicId: string, timeSpentSeconds = 0) {
  const p = loadProgress();
  if (!Array.isArray(p.completedTopics)) {
    p.completedTopics = [];
  }
  const already = p.completedTopics.find(t => t && t.topicId === topicId && t.frameworkId === frameworkId);
  if (!already) {
    p.completedTopics.push({ topicId, frameworkId, completedAt: new Date().toISOString(), timeSpentSeconds });
  }
  saveProgress(p);
}

export function isTopicComplete(frameworkId: string, topicId: string): boolean {
  const p = loadProgress();
  return Array.isArray(p.completedTopics) && p.completedTopics.some(t => t && t.topicId === topicId && t.frameworkId === frameworkId);
}

export function getFrameworkProgress(frameworkId: string, totalTopics: number): number {
  const p = loadProgress();
  if (!Array.isArray(p.completedTopics) || totalTopics <= 0) return 0;
  const done = p.completedTopics.filter(t => t && t.frameworkId === frameworkId).length;
  return Math.round((done / totalTopics) * 100);
}

export function setLastVisited(frameworkId: string, topicId: string) {
  const p = loadProgress();
  p.lastVisited = { frameworkId, topicId };
  saveProgress(p);
}

export function getLastVisited() {
  return loadProgress().lastVisited;
}

export function resetFrameworkProgress(frameworkId: string) {
  const p = loadProgress();
  if (Array.isArray(p.completedTopics)) {
    p.completedTopics = p.completedTopics.filter(t => t && t.frameworkId !== frameworkId);
  } else {
    p.completedTopics = [];
  }
  saveProgress(p);
}
