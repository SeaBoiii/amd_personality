import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';

export default function Quiz() {
  const navigate = useNavigate();
  const quiz = useQuiz();

  useEffect(() => {
    if (quiz.finished && quiz.result) {
      navigate(`/result?r=${quiz.result.code}`, { replace: true });
    }
  }, [quiz.finished, quiz.result, navigate]);

  if (quiz.finished) return null;

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-5 sm:px-8 max-w-3xl mx-auto">
      <div className="absolute inset-0 grid-backdrop pointer-events-none -z-10" />

      {/* Progress block */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3 text-xs mono text-amd-mute uppercase tracking-widest">
          <span>
            Question <span className="text-amd-red-bright">{String(quiz.index + 1).padStart(2, '0')}</span>
            <span className="text-amd-edge"> / {String(quiz.total).padStart(2, '0')}</span>
          </span>
          <span>core load · {Math.round(((quiz.index + 1) / quiz.total) * 100)}%</span>
        </div>
        <div className="cpu-bar">
          <span style={{ width: `${((quiz.index + 1) / quiz.total) * 100}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={quiz.current.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="display-font text-2xl sm:text-4xl font-bold leading-tight mb-8 text-amd-ink">
            {quiz.current.prompt}
          </h2>

          <div className="grid gap-3">
            {quiz.current.options.map((opt, i) => (
              <motion.button
                key={`${quiz.current.id}-${i}`}
                onClick={() => quiz.choose(opt)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="group panel panel-hover text-left p-5 rounded-xl flex items-start gap-4"
              >
                <span className="mono text-xs px-2 py-1 rounded bg-amd-red/15 text-amd-red-bright font-bold mt-0.5 shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-amd-ink/95 group-hover:text-white text-base leading-relaxed">
                  {opt.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between text-sm">
        <button
          onClick={quiz.back}
          disabled={quiz.index === 0}
          className="text-amd-mute hover:text-amd-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          <span>←</span> Back
        </button>
        <span className="text-amd-mute mono text-xs">no wrong answers · pick instinct</span>
      </div>
    </div>
  );
}
