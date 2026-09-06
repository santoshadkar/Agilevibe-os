/**
 * Converts the simplified question format used by data files
 * into the fully typed Question[] format required by the app.
 *
 * Simplified format:
 *   { id, domainId, type, text, options: string[], answer, explanation, context? }
 *   { id, domainId, type:'drag-drop', text, dragItems: string[], dropZones: string[], answer, explanation }
 */

import type { Question, MCQQuestion, ScenarioQuestion, DragDropQuestion, Difficulty } from './types';

interface SimpleMCQ {
  id: string;
  domainId?: string;
  domain?: string;
  type: 'mcq';
  text?: string;
  question?: string;
  options: string[] | Array<{ id: string; text: string; isCorrect: boolean }>;
  answer?: string;
  explanation: string;
  reference?: string;
  difficulty?: string;
  points?: number;
}

interface SimpleScenario {
  id: string;
  domainId?: string;
  domain?: string;
  type: 'scenario';
  text?: string;
  question?: string;
  context?: string;
  scenario?: string;
  options: string[] | Array<{ id: string; text: string; isCorrect: boolean }>;
  answer?: string;
  explanation: string;
  reference?: string;
  difficulty?: string;
  points?: number;
}

interface SimpleDragDrop {
  id: string;
  domainId?: string;
  domain?: string;
  type: 'drag-drop';
  text?: string;
  instruction?: string;
  dragItems?: string[];
  dropZones?: string[];
  items?: Array<{ id: string; content: string; correctZone: string }>;
  zones?: Array<{ id: string; label: string }>;
  answer?: string | string[];
  explanation: string;
  reference?: string;
  difficulty?: string;
  points?: number;
}

type SimpleQuestion = SimpleMCQ | SimpleScenario | SimpleDragDrop;

const LETTER_IDS = ['a', 'b', 'c', 'd', 'e', 'f'];

function getDomain(q: SimpleQuestion): string {
  return (q.domain || q.domainId || 'general');
}

function getDifficulty(q: SimpleQuestion): Difficulty {
  const d = q.difficulty?.toLowerCase();
  if (d === 'expert' || d === 'advanced') return 'expert';
  if (d === 'practitioner' || d === 'intermediate') return 'practitioner';
  return 'foundation';
}

export function normalizeQuestions(raw: SimpleQuestion[]): Question[] {
  const result: Question[] = [];

  for (const q of raw) {
    if (!q || !q.id) continue;
    const domain = getDomain(q);
    const difficulty = getDifficulty(q);
    const base = { id: q.id, domain, difficulty, explanation: q.explanation, reference: q.reference };

    if (q.type === 'mcq') {
      const opts = q.options;
      const answer = q.answer;
      let normalizedOptions: Array<{ id: string; text: string; isCorrect: boolean }>;

      if (opts.length > 0 && typeof opts[0] === 'string') {
        normalizedOptions = (opts as string[]).map((text, i) => ({
          id: LETTER_IDS[i],
          text,
          isCorrect: text === answer,
        }));
      } else {
        normalizedOptions = opts as Array<{ id: string; text: string; isCorrect: boolean }>;
      }

      const mcq: MCQQuestion = {
        ...base,
        type: 'mcq',
        points: q.points ?? 1,
        question: (q as SimpleMCQ).question || (q as SimpleMCQ).text || '',
        options: normalizedOptions,
      };
      result.push(mcq);
    } else if (q.type === 'scenario') {
      const sq = q as SimpleScenario;
      const opts = sq.options;
      const answer = sq.answer;
      let normalizedOptions: Array<{ id: string; text: string; isCorrect: boolean }>;

      if (opts.length > 0 && typeof opts[0] === 'string') {
        normalizedOptions = (opts as string[]).map((text, i) => ({
          id: LETTER_IDS[i],
          text,
          isCorrect: text === answer,
        }));
      } else {
        normalizedOptions = opts as Array<{ id: string; text: string; isCorrect: boolean }>;
      }

      const scenario: ScenarioQuestion = {
        ...base,
        type: 'scenario',
        points: q.points ?? 2,
        scenario: sq.scenario || sq.context || 'Consider the following situation.',
        question: sq.question || sq.text || '',
        options: normalizedOptions,
      };
      result.push(scenario);
    } else if (q.type === 'drag-drop') {
      const dq = q as SimpleDragDrop;
      let items: Array<{ id: string; content: string; correctZone: string }>;
      let zones: Array<{ id: string; label: string }>;

      if (dq.items && dq.zones) {
        items = dq.items;
        zones = dq.zones;
      } else if ((dq as any).pairs) {
        // TOGAF-style: pairs: [{ left, right }]
        const pairs = (dq as any).pairs as Array<{ left: string; right: string }>;
        zones = pairs.map((p, i) => ({ id: `zone-${i}`, label: p.right }));
        items = pairs.map((p, i) => ({ id: `item-${i}`, content: p.left, correctZone: `zone-${i}` }));
      } else {
        // Build from dragItems + dropZones arrays
        const dragItems = dq.dragItems || [];
        const dropZones = dq.dropZones || [];
        zones = dropZones.map((label, i) => ({ id: `zone-${i}`, label }));
        items = dragItems.map((content, i) => ({
          id: `item-${i}`,
          content,
          correctZone: `zone-${i}`, // assume 1:1 ordering by default
        }));
      }

      const instruction = dq.instruction || dq.text || (dq as any).question || 'Match each item to its correct category.';

      const dd: DragDropQuestion = {
        ...base,
        type: 'drag-drop',
        points: q.points ?? 3,
        instruction,
        items,
        zones,
      };
      result.push(dd);
    }
  }

  return result;
}
