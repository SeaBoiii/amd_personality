import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amd: {
          red: '#ED1C24',
          'red-bright': '#FF2D36',
          'red-deep': '#B30E15',
          dark: '#0A0A0B',
          mid: '#141417',
          panel: '#1C1C21',
          edge: '#2A2A33',
          ink: '#F5F5F7',
          mute: '#8A8A95',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 40px rgba(237, 28, 36, 0.45), 0 0 100px rgba(237, 28, 36, 0.2)',
        'glow-soft': '0 0 60px rgba(237, 28, 36, 0.15)',
      },
      backgroundImage: {
        'amd-grid':
          'linear-gradient(rgba(237,28,36,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(237,28,36,0.06) 1px, transparent 1px)',
        'amd-radial':
          'radial-gradient(ellipse at 30% 20%, rgba(237,28,36,0.18), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(237,28,36,0.10), transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 2.5s infinite',
        'scan': 'scan 6s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)', filter: 'none' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)', filter: 'hue-rotate(10deg)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
