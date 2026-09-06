/**
 * Central content loader — static imports so all topics are
 * always available synchronously. No dynamic import() needed.
 */
import { togafPart1Topics } from '@/content/togaf-part1';
import { togafPart2Topics } from '@/content/togaf-part2';
import { aiArchTopics } from '@/content/ai-architecture';
import { cyberTopics } from '@/content/cybersecurity';
import { enterpriseTopics } from '@/content/enterprise';
import { solutionTopics } from '@/content/solution';
import { technicalTopics } from '@/content/technical';
import type { TopicContent } from './content-types';

export const ALL_TOPICS: Record<string, TopicContent[]> = {
  'togaf':           [...togafPart1Topics, ...togafPart2Topics],
  'ai-architecture': aiArchTopics,
  'cybersecurity':   cyberTopics,
  'enterprise':      enterpriseTopics,
  'solution':        solutionTopics,
  'technical':       technicalTopics,
};

export function getTopicsForFramework(frameworkId: string): TopicContent[] {
  return ALL_TOPICS[frameworkId] ?? [];
}

export function getTopicById(frameworkId: string, topicId: string): TopicContent | null {
  return ALL_TOPICS[frameworkId]?.find(t => t.id === topicId) ?? null;
}
