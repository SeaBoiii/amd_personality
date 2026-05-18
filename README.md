# silicon·self

> A 16-personality test through the lens of chips, AI, and the open-compute era — inspired by AMD's portfolio.

Are you a **Threadripper** firing on all cores, a **Zen Architect** quietly redrawing the system, the **Radeon** who lives life at 240 fps, or the **Xilinx Alchemist** who reprograms whatever box you're put in?

Take the test, get a shareable link, and download a beautiful archetype card to post wherever pixels live.

**Author:** Aleem

---

## ✨ Features

- **16 hand-crafted archetypes** mapped to AMD's portfolio (Ryzen, EPYC, Radeon, Threadripper, Instinct, ROCm, Infinity Fabric, RDNA, Pensando, Xilinx Adaptive SoC, and more)
- **20-question test** scored on a 4-axis system (2⁴ = 16 unique outcomes)
- **Shareable results** via clean URLs — `/result?r=PUOD` loads your friend's result directly, no re-quiz
- **Downloadable archetype card** (1200×630 PNG) generated client-side — perfect for social
- **Beautiful, character-rich UI** — AMD red on dark, glitch-text reveal, CPU-load progress bar, silicon grid backdrop, scanline overlay, animated chip silhouettes
- **Browse all 16** in a gallery view with deep-dive modals
- **Fully static** — no backend, no database, no auth. Deploy anywhere.

---

## 🧬 The Four Axes

Each answer nudges your score on one or more of these axes. The dominant letter in each pair becomes one character of your 4-letter code.

| Axis    | Option A          | Option B          |
|---------|-------------------|-------------------|
| Think   | **P** Parallel    | **Z** Zen / focused |
| Energy  | **U** Unleashed   | **E** Efficient   |
| Work    | **O** Open        | **I** Integrated  |
| Domain  | **D** Edge / Device | **C** Cloud / Scale |

So `PUOD` = Parallel · Unleashed · Open · Device → **The Threadripper**.

### The 16 archetypes

| Code | Name                    | Vibe                      |
|------|-------------------------|---------------------------|
| PUOD | The Threadripper        | Maximalist Multitasker    |
| PUOC | The Instinct            | AI Visionary              |
| PUID | The Radeon              | High-Frame Aesthete       |
| PUIC | The EPYC                | Datacenter Conqueror      |
| PEOD | The APU                 | Everywhere Generalist     |
| PEOC | The ROCm Pioneer        | Open-Source Idealist      |
| PEID | The SmartShift          | Adaptive Optimizer        |
| PEIC | The Infinity Fabric     | The Connector             |
| ZUOD | The Overclocker         | Limit-Breaking Maverick   |
| ZUOC | The Zen Architect       | Foundational Thinker      |
| ZUID | The Embedded            | Behind-the-Scenes Engine  |
| ZUIC | The Semi-Custom         | Ghost Genius              |
| ZEOD | The RDNA Dreamer        | Quiet Romantic            |
| ZEOC | The Pensando Guardian   | Silent Protector          |
| ZEID | The Ryzen               | The Reliable One          |
| ZEIC | The Xilinx Alchemist    | The Reconfigurable Mind   |

---

## 🛠 Tech Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** with custom AMD design tokens
- **Framer Motion** for page + reveal animations
- **react-router-dom** v6 for routing
- **html2canvas** for PNG card generation
- **Zero backend** — results live entirely in the URL

---

## 🚀 Getting Started

```bash
# install
npm install

# dev server (http://localhost:5173)
npm run dev

# typecheck + production build
npm run build

# preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── main.tsx                 # entry + router provider
├── App.tsx                  # routes + page transitions
├── index.css                # Tailwind + custom AMD design system
├── types.ts                 # shared TypeScript types
├── data/
│   ├── personalities.ts     # 16 archetype definitions
│   └── questions.ts         # 20 weighted quiz questions
├── utils/
│   ├── scoring.ts           # axis tally → 4-letter code
│   └── urlEncoding.ts       # share-link helpers
├── hooks/
│   └── useQuiz.ts           # quiz state machine
└── components/
    ├── Navigation.tsx       # sticky header + chip-style logo mark
    ├── Landing.tsx          # hero w/ animated chip silhouettes
    ├── Quiz.tsx             # animated questions + CPU-bar progress
    ├── Results.tsx          # glitch reveal + share + download
    ├── Gallery.tsx          # all 16 + deep-dive modal
    ├── PersonalityCard.tsx  # reusable archetype card
    ├── DownloadCard.tsx     # off-screen 1200×630 PNG canvas
    └── About.tsx            # axis explainer + disclaimer
```

---

## 🔗 Shareable Links

Results are encoded directly in the URL:

```
https://your-domain.com/result?r=ZEIC
```

The `Results` component reads `?r=` on mount and renders the corresponding archetype — no quiz state, no backend, no expiry. Share away.

The **Share** button uses the native `navigator.share()` API on supported devices, falling back to clipboard copy on desktop.

---

## 🖼 Downloadable Archetype Card

Click **Download archetype card** on the results page to grab a 1200×630 PNG, optimised for social previews. The card features:

- Per-archetype accent color and radial glow
- Your 4-letter code badge
- The full tagline
- All four trait chips
- Subtle silicon grid background
- A small `silicon-self` watermark

Generated entirely in-browser via `html2canvas` from a hidden DOM node.

---

## 🌐 Deployment

This is a 100% static SPA. Deploy the `dist/` folder to any static host:

- **Vercel / Netlify** — drag-and-drop `dist/` or connect the repo
- **GitHub Pages** — push `dist/` to a `gh-pages` branch
- **Cloudflare Pages** — point at the repo, build command `npm run build`, output dir `dist`

> **Note for SPA hosts:** because client-side routing is used, configure a fallback so all paths serve `index.html` (Netlify `_redirects: /* /index.html 200`, Vercel handles automatically).

---

## ⚖️ Disclaimer

This is an **unofficial, fan-made project**. Archetype names are creative interpretations inspired by AMD's product family names. This project is **not affiliated with, endorsed by, or sponsored by Advanced Micro Devices, Inc.** All trademarks belong to their respective owners.

---

## 👤 Author

Made with red pixels by **Aleem**.

---

## 📜 License

MIT — do whatever you like with it. A wink in the credits is always nice.
