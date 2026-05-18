import { forwardRef } from 'react';
import type { Personality } from '../types';

interface Props {
  p: Personality;
}

/**
 * 1200x630 PNG-ready card. Rendered hidden in DOM and captured by html2canvas.
 * IMPORTANT: keep all styles inline / Tailwind-static so html2canvas captures them.
 */
const DownloadCard = forwardRef<HTMLDivElement, Props>(({ p }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: '-9999px',
        left: '-9999px',
        width: '1200px',
        height: '630px',
        background: `radial-gradient(ellipse at 25% 30%, ${p.accent}55, transparent 60%), radial-gradient(ellipse at 80% 90%, ${p.accent}33, transparent 50%), #0A0A0B`,
        color: '#F5F5F7',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '60px 70px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${p.accent}15 1px, transparent 1px), linear-gradient(90deg, ${p.accent}15 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              border: `2px solid ${p.accent}`,
              borderRadius: '10px',
              background: '#0A0A0B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 20px ${p.accent}66`,
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                background: p.accent,
                borderRadius: '3px',
              }}
            />
          </div>
          <div>
            <div style={{ fontSize: '14px', color: '#8A8A95', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              silicon · self
            </div>
            <div style={{ fontSize: '13px', color: '#8A8A95', marginTop: '2px', fontFamily: 'monospace' }}>
              {p.chipFamily}
            </div>
          </div>
        </div>
        <div
          style={{
            border: `2px solid ${p.accent}`,
            color: p.accent,
            background: `${p.accent}15`,
            padding: '8px 18px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.2em',
          }}
        >
          {p.code}
        </div>
      </div>

      {/* Center */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontSize: '20px',
            color: '#FFFFFF99',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            marginBottom: '18px',
            fontWeight: 600,
          }}
        >
          You are
        </div>
        <div
          style={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontSize: '110px',
            fontWeight: 700,
            lineHeight: 0.95,
            color: p.accent,
            letterSpacing: '-0.03em',
            textShadow: `0 0 60px ${p.accent}55`,
          }}
        >
          {p.name}
        </div>
        <div
          style={{
            marginTop: '28px',
            fontSize: '28px',
            fontStyle: 'italic',
            color: '#F5F5F7',
            maxWidth: '900px',
            lineHeight: 1.3,
          }}
        >
          “{p.tagline}”
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', maxWidth: '70%' }}>
          {p.traits.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '13px',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                padding: '6px 14px',
                borderRadius: '999px',
                border: `1px solid ${p.accent}66`,
                background: `${p.accent}1A`,
                color: p.accent,
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '13px', color: '#8A8A95', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            {p.vibe}
          </div>
          <div style={{ fontSize: '14px', color: p.accent, marginTop: '4px', fontFamily: 'monospace', fontWeight: 700 }}>
            silicon-self · take the test
          </div>
        </div>
      </div>
    </div>
  );
});

DownloadCard.displayName = 'DownloadCard';
export default DownloadCard;
