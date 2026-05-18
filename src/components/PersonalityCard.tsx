import type { Personality } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  p: Personality;
  compact?: boolean;
  linkTo?: string;
}

export default function PersonalityCard({ p, compact, linkTo }: Props) {
  const inner = (
    <div
      className="relative panel panel-hover rounded-xl overflow-hidden h-full p-5 flex flex-col"
      style={{ borderColor: `${p.accent}55` }}
    >
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: p.accent }}
      />
      <div className="flex items-start justify-between gap-3 mb-3 relative">
        <div>
          <div className="mono text-xs text-amd-mute tracking-widest mb-1">{p.chipFamily}</div>
          <h3 className="display-font text-xl sm:text-2xl font-bold leading-tight" style={{ color: p.accent }}>
            {p.name}
          </h3>
        </div>
        <span
          className="mono text-[10px] font-bold px-2 py-1 rounded border tracking-widest"
          style={{ borderColor: `${p.accent}66`, color: p.accent, background: `${p.accent}15` }}
        >
          {p.code}
        </span>
      </div>

      <p className="text-sm text-amd-ink/80 italic leading-snug mb-4">"{p.tagline}"</p>

      {!compact && (
        <p className="text-sm text-amd-mute leading-relaxed line-clamp-4 mb-4">{p.description}</p>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {p.traits.slice(0, 3).map((t) => (
          <span key={t} className="text-[10px] mono uppercase tracking-wider px-2 py-1 rounded bg-amd-edge/60 text-amd-mute">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
