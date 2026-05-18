import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Gallery from './components/Gallery';
import About from './components/About';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen scanlines">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-amd-edge/40 py-8 px-5 sm:px-8 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amd-mute">
          <div>
            silicon·self · an unofficial 16-personality test inspired by AMD's portfolio
          </div>
          <div className="mono">v1.0 · made with red pixels</div>
        </div>
      </footer>
    </div>
  );
}
