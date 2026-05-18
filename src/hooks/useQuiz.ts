import { useCallback, useMemo, useState } from 'react';
import { questions } from '../data/questions';
import type { QuestionOption } from '../types';
import { personalityFromAnswers } from '../utils/scoring';

export function useQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(QuestionOption | null)[]>(
    () => Array(questions.length).fill(null)
  );

  const total = questions.length;
  const current = questions[index];
  const progress = useMemo(() => (index / total) * 100, [index, total]);
  const isComplete = answers.every(Boolean);

  const choose = useCallback(
    (opt: QuestionOption) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[index] = opt;
        return next;
      });
      setIndex((i) => Math.min(i + 1, total));
    },
    [index, total]
  );

  const back = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const reset = useCallback(() => {
    setIndex(0);
    setAnswers(Array(questions.length).fill(null));
  }, []);

  const result = useMemo(() => {
    if (!isComplete) return null;
    return personalityFromAnswers(answers as QuestionOption[]);
  }, [isComplete, answers]);

  return {
    index,
    total,
    current,
    progress,
    answers,
    choose,
    back,
    reset,
    isComplete,
    result,
    finished: index >= total,
  };
}
