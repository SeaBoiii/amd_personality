import { motion } from 'framer-motion';
import { useState } from 'react';
import { personalities } from '../data/personalities';
import PersonalityCard from './PersonalityCard';

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const activeP = active ? personalities.find((p) => p.code === active) : null;

  return (
    <div className="relative pt-24 pb-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="absolute inset-0 grid-backdrop pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="chip mb-4">The full set</div>
        <h1 className="display-font text-4xl sm:text-6xl font-bold tracking-tight">
          All <span className="text-gradient-red">16 archetypes</span>
        </h1>
        <p className="mt-4 text-amd-mute max-w-xl mx-auto">
          Browse the full personality matrix. Tap any card to dive in.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {personalities.map((p, i) => (
          <motion.button
            key={p.code}
            onClick={() => setActive(p.code)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="text-left"
          >
            <PersonalityCard p={p} compact />
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      {activeP && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full panel rounded-2xl p-8"
            style={{ borderColor: `${activeP.accent}88` }}
          >
            <div
              className="absolute -top-32 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ background: activeP.accent }}
            />
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-amd-mute hover:text-amd-ink text-xl"
            >
              ✕
            </button>

            <div className="mono text-xs text-amd-mute tracking-widest mb-2">{activeP.chipFamily}</div>
            <h2 className="display-font text-4xl font-bold mb-1" style={{ color: activeP.accent }}>
              {activeP.name}
            </h2>
            <div className="mono text-xs uppercase tracking-widest text-amd-mute mb-4">
              {activeP.code} · {activeP.vibe}
            </div>
            <p className="italic text-lg text-amd-ink/90 mb-5">"{activeP.tagline}"</p>
            <p className="text-amd-ink/80 leading-relaxed mb-6">{activeP.description}</p>
            <div className="flex flex-wrap gap-2">
              {activeP.traits.map((t) => (
                <span key={t} className="chip" style={{ borderColor: `${activeP.accent}66`, color: activeP.accent }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
