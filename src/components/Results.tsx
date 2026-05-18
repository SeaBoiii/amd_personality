import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { personalities, personalityByCode } from '../data/personalities';
import DownloadCard from './DownloadCard';
import { buildShareUrl } from '../utils/urlEncoding';

export default function Results() {
  const [params] = useSearchParams();
  const code = (params.get('r') || '').toUpperCase();
  const personality = useMemo(() => personalityByCode(code), [code]);

  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (personality) {
      document.title = `${personality.name} — silicon·self`;
    }
  }, [personality]);

  if (!personality) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="display-font text-3xl font-bold mb-3">No result found</h1>
        <p className="text-amd-mute mb-6">That code doesn't match any of the 16 archetypes.</p>
        <Link to="/quiz" className="btn-primary">Take the test</Link>
      </div>
    );
  }

  const shareUrl = buildShareUrl(personality.code);
  const others = personalities.filter((p) => p.code !== personality.code).slice(0, 3);

  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `I'm ${personality.name}`,
          text: `${personality.tagline} — Find out which AMD-inspired archetype you are.`,
          url: shareUrl,
        });
        return;
      }
    } catch { /* user cancelled */ }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch { /* ignore */ }
  };

  const onDownload = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0A0A0B',
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `silicon-self-${personality.code}-${personality.name.toLowerCase().replace(/[^a-z]/g, '-')}.png`;
      a.click();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="relative pt-24 pb-20 px-5 sm:px-8 max-w-5xl mx-auto">
      <div className="absolute inset-0 grid-backdrop pointer-events-none -z-10" />
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-40 blur-[120px] pointer-events-none -z-10"
        style={{ background: personality.accent }}
      />

      {/* Reveal block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="chip mb-4" style={{ borderColor: `${personality.accent}88`, color: personality.accent }}>
          {personality.code} · {personality.vibe}
        </div>
        <div className="mono text-xs text-amd-mute mb-3 tracking-widest uppercase">You are</div>
        <h1
          className="glitch display-font text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]"
          data-text={personality.name}
          style={{ color: personality.accent, textShadow: `0 0 40px ${personality.accent}66` }}
        >
          {personality.name}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl italic text-amd-ink/85 max-w-3xl mx-auto leading-snug">
          “{personality.tagline}”
        </p>
      </motion.div>

      {/* Main panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 panel rounded-2xl p-7 sm:p-10"
        style={{ borderColor: `${personality.accent}66` }}
      >
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="display-font text-2xl font-bold" style={{ color: personality.accent }}>
            Your profile
          </h2>
          <span className="mono text-xs text-amd-mute uppercase">{personality.chipFamily}</span>
        </div>
        <p className="text-amd-ink/85 leading-relaxed text-lg">{personality.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {personality.traits.map((t) => (
            <span
              key={t}
              className="chip"
              style={{ borderColor: `${personality.accent}88`, color: personality.accent, background: `${personality.accent}15` }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
      >
        <button onClick={onShare} className="btn-primary">
          {copied ? '✓ Link copied!' : (
            <>
              <ShareIcon /> Share my result
            </>
          )}
        </button>
        <button onClick={onDownload} className="btn-secondary" disabled={downloading}>
          {downloading ? 'Rendering…' : (
            <>
              <DownloadIcon /> Download archetype card
            </>
          )}
        </button>
        <Link to="/quiz" className="btn-secondary">↻ Retake</Link>
        <Link to="/gallery" className="text-amd-mute hover:text-amd-ink ml-auto text-sm">See all 16 →</Link>
      </motion.div>

      {/* Share URL preview */}
      <div className="mt-4 mono text-xs text-amd-mute break-all">
        Your shareable link:{' '}
        <a href={shareUrl} className="text-amd-red-bright hover:underline">
          {shareUrl}
        </a>
      </div>

      {/* Suggested others */}
      <div className="mt-16">
        <h3 className="display-font text-xl font-bold mb-4">You might also recognize…</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((p) => (
            <Link key={p.code} to={`/result?r=${p.code}`} className="block">
              <div
                className="panel panel-hover rounded-xl p-5 h-full"
                style={{ borderColor: `${p.accent}44` }}
              >
                <div className="mono text-xs text-amd-mute mb-1">{p.code}</div>
                <h4 className="display-font font-bold text-lg" style={{ color: p.accent }}>
                  {p.name}
                </h4>
                <p className="text-sm text-amd-ink/70 italic mt-2 line-clamp-2">"{p.tagline}"</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hidden printable card */}
      <DownloadCard ref={cardRef} p={personality} />
    </div>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </svg>
  );
}
