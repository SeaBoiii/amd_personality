import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LogoMark } from './Navigation';

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-backdrop pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-amd-red/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-3 chip">
            <span className="w-1.5 h-1.5 rounded-full bg-amd-red-bright animate-pulse" />
            v1.0 · 16 archetypes · 20 questions
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="display-font text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          Which silicon
          <br />
          <span className="text-gradient-red">are you</span>
          <span className="text-amd-red">?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 text-lg sm:text-xl text-amd-mute max-w-2xl mx-auto leading-relaxed"
        >
          A 16-personality test through the lens of chips, AI, and the open-compute era.
          Are you a Threadripper firing on all cores, a Zen Architect quietly redrawing the system,
          or the Xilinx Alchemist who reprograms whatever box you're put in?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/quiz" className="btn-primary group text-lg">
            <span>Start the test</span>
            <ArrowRight />
          </Link>
          <Link to="/gallery" className="btn-secondary text-lg">
            See all 16 archetypes
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-6 text-amd-mute text-xs uppercase tracking-widest"
        >
          <span>~3 min</span>
          <Dot />
          <span>shareable result</span>
          <Dot />
          <span>downloadable card</span>
        </motion.div>
      </div>

      {/* Decorative chip silhouettes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <ChipSilhouette />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:block"
      >
        <ChipSilhouette mirror />
      </motion.div>

      {/* Floating big logo */}
      <div className="absolute top-24 right-10 opacity-30 hidden lg:block animate-pulse-slow">
        <LogoMark size={64} />
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Dot() {
  return <span className="w-1 h-1 rounded-full bg-amd-red/60" />;
}

function ChipSilhouette({ mirror }: { mirror?: boolean }) {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 100 100"
      fill="none"
      style={{ transform: mirror ? 'scaleX(-1)' : undefined }}
      className="opacity-50"
    >
      <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="#ED1C24" strokeWidth="1.5" />
      <rect x="32" y="32" width="36" height="36" rx="2" fill="#ED1C24" fillOpacity="0.08" stroke="#ED1C24" strokeOpacity="0.5" />
      {[...Array(6)].map((_, i) => (
        <line key={`t${i}`} x1={28 + i * 8} y1="20" x2={28 + i * 8} y2="14" stroke="#ED1C24" strokeOpacity="0.6" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`b${i}`} x1={28 + i * 8} y1="80" x2={28 + i * 8} y2="86" stroke="#ED1C24" strokeOpacity="0.6" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`l${i}`} y1={28 + i * 8} x1="20" y2={28 + i * 8} x2="14" stroke="#ED1C24" strokeOpacity="0.6" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`r${i}`} y1={28 + i * 8} x1="80" y2={28 + i * 8} x2="86" stroke="#ED1C24" strokeOpacity="0.6" />
      ))}
    </svg>
  );
}
