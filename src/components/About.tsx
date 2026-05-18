import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="relative pt-24 pb-20 px-5 sm:px-8 max-w-3xl mx-auto">
      <div className="absolute inset-0 grid-backdrop pointer-events-none -z-10" />
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="chip mb-4">About</div>
        <h1 className="display-font text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          A personality test, <span className="text-gradient-red">in silicon</span>.
        </h1>
        <div className="space-y-5 text-amd-ink/85 leading-relaxed text-lg">
          <p>
            <strong className="text-amd-ink">silicon·self</strong> is a 16-personality test built around
            the language of modern computing — chips, threads, networks, and AI. Inspired by AMD's
            portfolio, it maps you onto four axes:
          </p>
          <ul className="space-y-2 mono text-sm">
            <li><span className="text-amd-red-bright">P / Z</span> — Parallel thinker vs. focused mind</li>
            <li><span className="text-amd-red-bright">U / E</span> — Unleashed vs. efficient</li>
            <li><span className="text-amd-red-bright">O / I</span> — Open collaborator vs. integrated operator</li>
            <li><span className="text-amd-red-bright">D / C</span> — Edge / device vs. cloud / scale</li>
          </ul>
          <p>
            That gives 16 unique 4-letter codes, each one matched to an archetype: from the
            hyper-parallel <em>Threadripper</em>, to the patient <em>Zen Architect</em>, to the
            shape-shifting <em>Xilinx Alchemist</em>.
          </p>
          <p className="text-amd-mute text-base">
            This is an unofficial, fan-made project. Names are creative archetypes inspired by AMD's
            product families and are not affiliated with or endorsed by AMD.
          </p>
        </div>

        <div className="mt-10 flex gap-3">
          <Link to="/quiz" className="btn-primary">Take the test</Link>
          <Link to="/gallery" className="btn-secondary">Browse archetypes</Link>
        </div>
      </motion.div>
    </div>
  );
}
