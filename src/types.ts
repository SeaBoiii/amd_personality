export type Axis = 'P' | 'Z' | 'U' | 'E' | 'O' | 'I' | 'D' | 'C';

export type AxisPair = ['P', 'Z'] | ['U', 'E'] | ['O', 'I'] | ['D', 'C'];

export interface Personality {
  code: string; // 4-char e.g. "PUOD"
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  chipFamily: string;
  accent: string; // hex
  vibe: string; // very short label e.g. "Maximalist Multitasker"
}

export interface QuestionOption {
  label: string;
  weights: Partial<Record<Axis, number>>;
}

export interface Question {
  id: number;
  prompt: string;
  options: QuestionOption[];
}
