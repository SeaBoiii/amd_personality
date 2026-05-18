import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-amd-dark/70 border-b border-amd-edge/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <LogoMark />
          <span className="display-font font-bold tracking-tight text-amd-ink group-hover:text-amd-red-bright transition-colors">
            silicon<span className="text-amd-red">·</span>self
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <NavItem to="/">Test</NavItem>
          <NavItem to="/gallery">All 16</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-md transition-colors ${
          isActive ? 'text-amd-red-bright bg-amd-red/10' : 'text-amd-mute hover:text-amd-ink'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_10px_rgba(237,28,36,0.55)]"
    >
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#0A0A0B" stroke="#ED1C24" strokeWidth="2" />
      <path d="M14 46 L26 22 L38 22 L48 46 Z" fill="none" stroke="#ED1C24" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="31" cy="40" r="3.2" fill="#ED1C24" />
      <line x1="6" y1="32" x2="2" y2="32" stroke="#ED1C24" strokeWidth="2" />
      <line x1="62" y1="32" x2="58" y2="32" stroke="#ED1C24" strokeWidth="2" />
      <line x1="32" y1="6" x2="32" y2="2" stroke="#ED1C24" strokeWidth="2" />
      <line x1="32" y1="62" x2="32" y2="58" stroke="#ED1C24" strokeWidth="2" />
    </svg>
  );
}
