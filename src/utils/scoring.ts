import type { Axis, Personality, QuestionOption } from '../types';
import { personalityByCode, personalities } from '../data/personalities';

const PAIRS: [Axis, Axis][] = [
  ['P', 'Z'],
  ['U', 'E'],
  ['O', 'I'],
  ['D', 'C'],
];

export type AxisTotals = Record<Axis, number>;

export function emptyTotals(): AxisTotals {
  return { P: 0, Z: 0, U: 0, E: 0, O: 0, I: 0, D: 0, C: 0 };
}

export function tally(answers: QuestionOption[]): AxisTotals {
  const totals = emptyTotals();
  for (const a of answers) {
    for (const [axis, w] of Object.entries(a.weights) as [Axis, number][]) {
      totals[axis] += w;
    }
  }
  return totals;
}

export function codeFromTotals(totals: AxisTotals): string {
  return PAIRS.map(([a, b]) => (totals[a] >= totals[b] ? a : b)).join('');
}

export function personalityFromAnswers(answers: QuestionOption[]): {
  personality: Personality;
  totals: AxisTotals;
  code: string;
} {
  const totals = tally(answers);
  const code = codeFromTotals(totals);
  const personality = personalityByCode(code) ?? personalities[0];
  return { personality, totals, code };
}

/** Per-pair percentage breakdown for a nice result chart. */
export function pairPercentages(totals: AxisTotals): { pair: [Axis, Axis]; pct: [number, number] }[] {
  return PAIRS.map(([a, b]) => {
    const sum = totals[a] + totals[b] || 1;
    return { pair: [a, b] as [Axis, Axis], pct: [(totals[a] / sum) * 100, (totals[b] / sum) * 100] as [number, number] };
  });
}

export const AXIS_LABELS: Record<Axis, { short: string; full: string; description: string }> = {
  P: { short: 'Parallel', full: 'Parallel Thinker', description: 'Many threads at once' },
  Z: { short: 'Zen', full: 'Focused Mind', description: 'Deep, single-stream thinker' },
  U: { short: 'Unleashed', full: 'Unleashed', description: 'Maximum performance, no throttle' },
  E: { short: 'Efficient', full: 'Efficient', description: 'Do more with less' },
  O: { short: 'Open', full: 'Open Collaborator', description: 'Community-driven, shareable' },
  I: { short: 'Integrated', full: 'Integrated Operator', description: 'Tight, end-to-end ownership' },
  D: { short: 'Edge', full: 'Edge / Device', description: 'Local, tangible, hands-on' },
  C: { short: 'Cloud', full: 'Cloud / Scale', description: 'Distributed, large-scale impact' },
};
