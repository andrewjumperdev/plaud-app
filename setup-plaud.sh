#!/usr/bin/env bash
# setup-plaud.sh — run this inside your cloned plaud-app directory
set -e
mkdir -p app/components

cat > "package.json" << 'PLAUD_HEREDOC_EOF'
{
  "name": "plaud-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "gsap": "^3.12.5",
    "next": "^14.2.29",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5"
  }
}


PLAUD_HEREDOC_EOF

cat > "next.config.mjs" << 'PLAUD_HEREDOC_EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopifycdn.net' },
    ],
  },
};

export default nextConfig;


PLAUD_HEREDOC_EOF

cat > "tsconfig.json" << 'PLAUD_HEREDOC_EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "project"]
}


PLAUD_HEREDOC_EOF

cat > ".gitignore" << 'PLAUD_HEREDOC_EOF'
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts


PLAUD_HEREDOC_EOF

cat > "app/layout.tsx" << 'PLAUD_HEREDOC_EOF'
import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Plaud · Argentina — Tu obra. Documentada por IA.',
  description:
    'Plaud graba, transcribe y resume cada reunión de obra en segundos. Tu equipo ejecuta sin errores, sin olvidos, sin llamadas de repetición.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-AR"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}


PLAUD_HEREDOC_EOF

cat > "app/page.tsx" << 'PLAUD_HEREDOC_EOF'
import LandingCinematic from './components/LandingCinematic';

export default function Home() {
  return <LandingCinematic />;
}


PLAUD_HEREDOC_EOF

cat > "app/globals.css" << 'PLAUD_HEREDOC_EOF'
/* ============================================================
   PLAUD AR — CINEMATIC SCROLL
   Brand-compliant per Plaud Brand Book 2026 (Silvana Iriondo edit)
   - Neutral base 80%: Deep Black / Dark warm grey / Clarity White / Light warm grey
   - Highlights ≤15%: Amplify Green / Clarity Blue / Victory Purple
   - Core gradient (#21EF6A → #2CA3FF → #8F53ED) for AI moments ONLY
   - 5px corner radius universal
   - Jokker substitute: Manrope (via next/font/google)
   ============================================================ */

:root {
  /* ---------- Neutral base palette (80% of design) ---------- */
  --deep-black: #000000;
  --dark-warm-grey: #413D3B;
  --clarity-white: #FFFFFF;
  --light-warm-grey: #F2EFEB;

  --bg: var(--deep-black);
  --bg-deep: #000000;
  --bg-elev: #0E0D0D;
  --bg-surface: #1A1716;
  --bg-glass: rgba(65, 61, 59, 0.42);
  --bg-glass-strong: rgba(65, 61, 59, 0.65);

  --line: rgba(242, 239, 235, 0.08);
  --line-strong: rgba(242, 239, 235, 0.16);
  --line-bright: rgba(242, 239, 235, 0.28);

  --fg: var(--clarity-white);
  --fg-dim: rgba(242, 239, 235, 0.68);
  --fg-mute: rgba(242, 239, 235, 0.42);

  /* ---------- Highlight palette (≤15%) ---------- */
  --amplify-green: #21EF6A;
  --clarity-blue: #00D0FF;
  --victory-purple: #8F53ED;

  /* Core gradient — AI moments ONLY */
  --core-grad: linear-gradient(135deg, #21EF6A 0%, #2CA3FF 50%, #8F53ED 100%);
  --core-grad-vert: linear-gradient(180deg, #21EF6A 0%, #2CA3FF 50%, #8F53ED 100%);

  /* Legacy aliases */
  --accent: var(--amplify-green);
  --warm-1: var(--amplify-green);
  --warm-2: var(--clarity-blue);
  --cool-1: var(--clarity-blue);
  --cool-2: var(--victory-purple);
  --danger: #FF5C5C;

  --radius: 5px;
  --radius-lg: 5px;

  /* Fonts — set by next/font/google via CSS variables on <html> */
  --font-display: var(--font-manrope), -apple-system, "Helvetica Neue", sans-serif;
  --font-body: var(--font-manrope), -apple-system, "Helvetica Neue", sans-serif;
  --font-mono: var(--font-jetbrains), ui-monospace, "SFMono-Regular", Menlo, monospace;
  --font-serif: var(--font-instrument), "Times New Roman", serif;
}

* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  background: var(--bg-deep);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
::selection { background: var(--warm-1); color: #000; }
a { color: inherit; text-decoration: none; }
button, a { font-family: inherit; }

/* ---------- Global atmosphere — single subtle gradient ---------- */
.atmosphere {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(ellipse 120% 80% at 50% 110%,
      rgba(218, 255, 231, 0.18) 0%,
      rgba(116, 217, 210, 0.14) 18%,
      rgba(59, 149, 223, 0.12) 36%,
      rgba(102, 102, 191, 0.08) 56%,
      transparent 80%),
    #000;
}
.atmo-blob { display: none; }
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.07;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
.vignette {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  background: radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%);
}

/* ---------- Custom cursor ---------- */
.cursor-dot, .cursor-glow {
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  will-change: transform;
}
.cursor-dot { width: 5px; height: 5px; background: var(--clarity-white); transform: translate(-50%,-50%); mix-blend-mode: difference; }
.cursor-glow { width: 40px; height: 40px; border: 1px solid rgba(242,239,235,0.3); background: radial-gradient(circle, rgba(33,239,106,0.18) 0%, transparent 70%); transform: translate(-50%,-50%); transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
.cursor-glow.hovering { width: 88px; height: 88px; border-color: var(--amplify-green); background: radial-gradient(circle, rgba(33,239,106,0.28) 0%, transparent 70%); }
body { cursor: none; }
@media (max-width: 960px) { body { cursor: auto; } .cursor-dot, .cursor-glow { display: none; } }

/* ---------- Type ---------- */
.mono {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-mute);
}
.mono-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--fg-dim);
}
.mono-tag::before {
  content: "";
  width: 5px; height: 5px;
  background: var(--amplify-green);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--amplify-green);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.75); }
}
h1, h2, h3 { font-family: var(--font-display); margin: 0; font-weight: 400; letter-spacing: -0.05em; text-wrap: balance; line-height: 1; }
.serif-em { font-family: var(--font-serif); font-style: italic; font-weight: 400; letter-spacing: -0.015em; }
.gradient-text {
  background: var(--core-grad);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ---------- Nav ---------- */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 60;
  background: rgba(5,5,7,0.55);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px clamp(20px, 4vw, 56px);
}
.brand { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 600; font-size: 18px; letter-spacing: -0.02em; color: var(--clarity-white); }
.brand-mark {
  width: 26px; height: 26px;
  border-radius: 5px;
  background: var(--clarity-white);
  color: var(--deep-black);
  display: grid; place-items: center;
  font-weight: 700; font-size: 14px;
  position: relative;
  font-family: var(--font-display);
  letter-spacing: -0.04em;
}
.brand-mark::after {
  content: "";
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 4px; height: 4px;
  background: var(--amplify-green);
  border-radius: 50%;
}
.brand-region {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--fg-mute);
  margin-left: 6px;
  padding: 3px 7px;
  border: 1px solid var(--line-strong);
  border-radius: 5px;
}
.nav-progress {
  position: absolute;
  bottom: -1px; left: 0;
  height: 1px;
  background: var(--core-grad);
  width: 0%;
  transition: width 0.1s linear;
  box-shadow: 0 0 12px rgba(0,208,255,0.5);
}
.nav-links { display: flex; gap: 28px; font-size: 13px; color: var(--fg-dim); font-family: var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase; }
@media (max-width: 860px) { .nav-links { display: none; } }
.nav-links a { transition: color 0.2s; cursor: none; }
.nav-links a:hover { color: var(--fg); }
.nav-links a.active { color: var(--amplify-green); }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.005em;
  cursor: none;
  border: 1px solid transparent;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s ease, background 0.3s ease;
}
.btn-primary {
  background: var(--amplify-green);
  color: var(--deep-black);
  box-shadow: 0 12px 40px rgba(33, 239, 106, 0.32), inset 0 1px 0 rgba(255,255,255,0.25);
}
.btn-primary::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
  transform: translateX(-100%);
  transition: transform 0.65s ease;
}
.btn-primary:hover::before { transform: translateX(100%); }
.btn-primary:hover {
  background: #1FE065;
  box-shadow: 0 18px 50px rgba(33, 239, 106, 0.48), inset 0 1px 0 rgba(255,255,255,0.3);
}
.btn-ai {
  background: var(--core-grad);
  color: var(--deep-black);
  box-shadow: 0 12px 40px rgba(0, 208, 255, 0.28);
}
.btn-ghost {
  background: var(--bg-glass);
  color: var(--clarity-white);
  border-color: var(--line-strong);
  backdrop-filter: blur(20px);
}
.btn-ghost:hover { border-color: var(--line-bright); }
.btn-lg { padding: 17px 28px; font-size: 15px; }
.btn .arrow { display: inline-block; transition: transform 0.25s cubic-bezier(.2,.8,.2,1); }
.btn:hover .arrow { transform: translateX(4px); }

/* ============================================================
   CINEMA STAGE
   ============================================================ */

.cinema {
  position: relative;
  z-index: 3;
}

.cinema-stage {
  position: relative;
  height: 600vh;
}
.cinema-pin {
  position: sticky;
  top: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  overflow: hidden;
  isolation: isolate;
}
@media (max-width: 960px) {
  .cinema-pin { grid-template-columns: 1fr; }
}

.cinema-grid {
  position: absolute;
  inset: -10%;
  pointer-events: none;
  background:
    linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 100% 96px,
    linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 96px 100%;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 85%);
  opacity: 0.4;
  z-index: 0;
}

/* ---------- ACT (left column copy) ---------- */
.cinema-acts {
  position: relative;
  height: 100%;
  z-index: 4;
}
.act {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 clamp(28px, 5vw, 88px);
  opacity: 0;
  pointer-events: none;
}
.act .act-num {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amplify-green);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.act .act-num::before {
  content: "";
  width: 22px;
  height: 1px;
  background: linear-gradient(90deg, var(--amplify-green), transparent);
}
.act h2 {
  font-size: clamp(40px, 5.8vw, 88px);
  line-height: 0.96;
  letter-spacing: -0.05em;
  font-weight: 400;
  margin-bottom: 24px;
  max-width: 16ch;
  color: var(--clarity-white);
}
.act .act-lede {
  font-size: clamp(17px, 1.4vw, 21px);
  color: var(--fg-dim);
  line-height: 1.45;
  max-width: 520px;
  margin: 0 0 32px;
  text-wrap: pretty;
}
.act .act-lede b { color: var(--fg); font-weight: 500; }
.act-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 14px;
}
.act-meta-row {
  display: flex;
  gap: 18px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--fg-mute);
  flex-wrap: wrap;
}
.act-meta-row .verified::before { content: "✓ "; color: var(--amplify-green); }

/* Act-specific bits */
.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  max-width: 520px;
  margin-top: 16px;
}
.metric-card {
  padding: 20px 22px;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--line-strong);
  border-radius: 5px;
}
.metric-card .k {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--clarity-blue);
  margin-bottom: 8px;
}
.metric-card .v {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.04em;
  color: var(--clarity-white);
  line-height: 1.05;
}
.metric-card .vd {
  font-size: 12px;
  color: var(--fg-mute);
  margin-top: 6px;
}

.steps-rail {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 520px;
  margin-top: 16px;
}
.step-row {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 18px;
  align-items: start;
  padding: 16px 20px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(242, 239, 235, 0.025);
  backdrop-filter: blur(12px);
}
.step-row .sn {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--amplify-green);
  padding-top: 2px;
}
.step-row .st { font-size: 15px; font-weight: 600; letter-spacing: -0.015em; color: var(--clarity-white); margin-bottom: 4px; }
.step-row .sd { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }

.results-mini {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  overflow: hidden;
  max-width: 540px;
  margin-top: 16px;
}
.results-mini-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  background: var(--bg-elev);
  padding: 16px 22px;
  font-size: 13px;
  align-items: center;
}
.results-mini-row.head {
  background: rgba(242, 239, 235, 0.03);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-mute);
}
.results-mini-row .m { color: var(--clarity-white); font-weight: 500; }
.results-mini-row .without { color: var(--fg-mute); font-family: var(--font-mono); text-decoration: line-through; text-decoration-color: var(--danger); }
.results-mini-row .withv {
  color: var(--amplify-green);
  font-weight: 600;
  font-family: var(--font-mono);
}

.testimonial-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.25;
  color: var(--fg);
  max-width: 580px;
  margin-bottom: 28px;
  letter-spacing: -0.01em;
  text-wrap: pretty;
}
.testimonial-quote::before {
  content: "\201C";
  font-family: var(--font-serif);
  color: var(--amplify-green);
  font-size: 1.4em;
  line-height: 0;
  vertical-align: -0.1em;
  margin-right: 4px;
}
.testimonial-author { display: flex; align-items: center; gap: 14px; }
.testimonial-avatar {
  width: 44px; height: 44px;
  border-radius: 5px;
  background: var(--core-grad);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--deep-black);
}
.testimonial-name { font-size: 14px; font-weight: 500; }
.testimonial-role { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; color: var(--fg-mute); margin-top: 2px; }

.cta-meta-list {
  display: grid;
  gap: 14px;
  max-width: 520px;
  margin: 14px 0 26px;
}
.cta-meta-list .row {
  display: flex;
  gap: 14px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--fg-dim);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line);
}
.cta-meta-list .row:last-child { border-bottom: none; }
.cta-meta-list .k {
  color: var(--fg-mute);
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 0.18em;
  min-width: 100px;
}
.cta-meta-list .v { color: var(--fg); }

/* ---------- DEVICE STAGE ---------- */
.cinema-device-area {
  position: relative;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 3;
  perspective: 2400px;
}
@media (max-width: 960px) {
  .cinema-device-area { height: 320px; }
}

.cinema-device-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.cinema-device {
  position: absolute;
  left: 50%; top: 50%;
  width: 360px;
  height: 460px;
  margin-left: -180px;
  margin-top: -230px;
  transform-style: preserve-3d;
  will-change: transform;
}
.cinema-device .face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: grid;
  place-items: center;
}
.cinema-device .face-front img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
  filter:
    drop-shadow(0 60px 120px rgba(0,0,0,0.85))
    drop-shadow(0 0 var(--ring-blur, 40px) rgba(33, 239, 106, var(--ring-int, 0.35)));
}
.cinema-device .face-front::after {
  content: "";
  position: absolute;
  inset: 12% 22%;
  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(255,255,255,0.28) 50%,
    transparent 65%
  );
  mix-blend-mode: screen;
  border-radius: 24px;
  opacity: var(--specular, 0.5);
  pointer-events: none;
}
.cinema-device .face-back {
  transform: rotateY(180deg) translateZ(0.01px);
  background:
    radial-gradient(ellipse at 50% 30%, rgba(33,239,106,0.18) 0%, transparent 60%),
    linear-gradient(180deg, #221F1E 0%, #08080c 100%);
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: var(--font-mono);
  color: var(--fg-dim);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 60px 120px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06);
}
.face-back .row-h { display: flex; justify-content: space-between; align-items: center; }
.face-back .back-id {
  background: var(--core-grad);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700; letter-spacing: 0.18em;
}
.face-back .back-headline {
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 1;
  color: var(--clarity-white);
  text-transform: none;
}
.face-back .back-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 10.5px;
}
.face-back .back-grid .k { color: var(--fg-mute); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 4px; }
.face-back .back-grid .v { color: var(--fg); font-family: var(--font-display); font-size: 14px; font-weight: 500; }

/* Holographic ring */
.cinema-ring {
  position: absolute;
  left: 50%; top: 50%;
  width: 120%; height: 120%;
  margin-left: -60%; margin-top: -60%;
  border-radius: 50%;
  background:
    conic-gradient(from var(--ring-rot, 0deg),
      transparent 0deg,
      var(--amplify-green) 60deg,
      var(--clarity-blue) 130deg,
      transparent 180deg,
      transparent 230deg,
      var(--victory-purple) 290deg,
      transparent 360deg) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  border: 1px solid transparent;
  opacity: var(--ring-int, 0.3);
  transform: translateZ(-30px) rotateZ(var(--ring-rot, 0deg));
  pointer-events: none;
}

/* Inner aura */
.cinema-aura {
  position: absolute;
  left: 50%; top: 50%;
  width: 90vmin; height: 90vmin;
  margin-left: -45vmin; margin-top: -45vmin;
  background:
    radial-gradient(circle, rgba(33,239,106,0.18) 0%, transparent 50%),
    radial-gradient(circle at 50% 70%, rgba(0,208,255,0.14) 0%, transparent 55%),
    radial-gradient(circle at 50% 30%, rgba(143,83,237,0.12) 0%, transparent 60%);
  filter: blur(40px);
  opacity: var(--aura, 0.5);
  transform: translateZ(-200px);
  pointer-events: none;
}

/* Telemetry orbiting labels */
.cinema-telemetry {
  position: absolute;
  inset: 0;
  pointer-events: none;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-dim);
  opacity: var(--telemetry, 0);
}
.tel {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}
.tel::before {
  content: "";
  display: block;
  width: 24px;
  height: 1px;
  background: linear-gradient(90deg, var(--amplify-green), transparent);
}
.tel.t1 { top: 16%; left: 55%; }
.tel.t2 { top: 50%; left: 60%; }
.tel.t3 { top: 80%; left: 50%; }
.tel.t4 { top: 28%; right: 55%; flex-direction: row-reverse; }
.tel.t4::before { background: linear-gradient(90deg, transparent, var(--clarity-blue)); }
.tel.t5 { top: 68%; right: 50%; flex-direction: row-reverse; }
.tel.t5::before { background: linear-gradient(90deg, transparent, var(--victory-purple)); }

/* Holographic floating panels */
.holo {
  position: absolute;
  background: rgba(26, 23, 22, 0.7);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  padding: 14px 18px;
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.5;
  color: var(--fg-dim);
  min-width: 220px;
  max-width: 260px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.6);
  opacity: 0;
  will-change: transform, opacity;
}
.holo .label {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amplify-green);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.holo .label::before {
  content: "";
  width: 5px; height: 5px;
  background: var(--amplify-green);
  box-shadow: 0 0 10px var(--amplify-green);
  border-radius: 50%;
}
.holo.ai .label { color: var(--clarity-blue); }
.holo.ai .label::before { background: var(--clarity-blue); box-shadow: 0 0 10px var(--victory-purple); }
.holo .who { color: var(--amplify-green); font-weight: 700; }
.holo.ai .who { color: var(--clarity-blue); }

.holo.h1 { top: 8%; left: 8%; }
.holo.h2 { top: 18%; right: 6%; }
.holo.h3 { bottom: 20%; left: 6%; }
.holo.h4 { bottom: 6%; right: 8%; }

/* Waveform */
.cinema-waveform {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 3px;
  width: 380px;
  height: 36px;
  justify-content: center;
  opacity: var(--wave, 0);
  pointer-events: none;
}
.cinema-waveform span {
  width: 2px;
  background: var(--core-grad-vert);
  border-radius: 1px;
  animation: wave 1.4s ease-in-out infinite;
}
@keyframes wave {
  0%, 100% { height: 4px; opacity: 0.3; }
  50% { height: 28px; opacity: 1; }
}

/* ============================================================
   POST-CINEMA: CTA card + footer
   ============================================================ */
.cta-section {
  position: relative;
  padding: 60px clamp(20px, 4vw, 56px) 80px;
  z-index: 3;
}
.cta-card {
  max-width: 1340px;
  margin: 0 auto;
  position: relative;
  padding: clamp(48px, 6vw, 84px);
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  background:
    radial-gradient(ellipse 120% 80% at 50% 110%,
      rgba(33,239,106,0.14) 0%,
      rgba(0,208,255,0.10) 30%,
      rgba(143,83,237,0.08) 60%,
      transparent 80%),
    var(--bg-elev);
  overflow: hidden;
  backdrop-filter: blur(20px);
}
.cta-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 100% 60px,
    linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 60px 100%;
  mask-image: linear-gradient(180deg, transparent 0%, #000 100%);
  opacity: 0.4;
  pointer-events: none;
}
.cta-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 56px;
  align-items: center;
}
@media (max-width: 860px) { .cta-inner { grid-template-columns: 1fr; } }
.cta-card h2 {
  font-size: clamp(36px, 4.6vw, 60px);
  letter-spacing: -0.05em;
  line-height: 1;
  margin-bottom: 22px;
  font-weight: 400;
}
.cta-card p {
  color: var(--fg-dim);
  font-size: 17px;
  margin: 0 0 28px;
  max-width: 480px;
}

.footer {
  border-top: 1px solid var(--line);
  padding: 32px clamp(20px, 4vw, 56px);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-mute);
  letter-spacing: 0.08em;
  position: relative;
  z-index: 3;
}
.footer-inner {
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

/* ============================================================
   Act indicator (right edge)
   ============================================================ */
.act-indicator {
  position: fixed;
  right: clamp(16px, 2.5vw, 36px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
@media (max-width: 960px) { .act-indicator { display: none; } }
.act-tick {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--fg-mute);
  transition: color 0.35s ease;
  cursor: pointer;
}
.act-tick .dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--fg-mute);
  transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
}
.act-tick .lbl { opacity: 0; transform: translateX(8px); transition: opacity 0.35s ease, transform 0.35s ease; }
.act-tick.active .dot { background: var(--amplify-green); box-shadow: 0 0 12px var(--amplify-green); transform: scale(1.6); }
.act-tick.active { color: var(--clarity-white); }
.act-tick.active .lbl { opacity: 1; transform: translateX(0); }

/* Mobile: show inline static device */
.mobile-device {
  display: none;
}
@media (max-width: 960px) {
  .cinema-stage { height: auto; }
  .cinema-pin { position: relative; height: auto; min-height: 100vh; grid-template-columns: 1fr; padding: 100px 0 60px; }
  .cinema-acts { position: relative; height: auto; }
  .act { position: relative; opacity: 1; padding: 32px 24px; min-height: auto; }
  .cinema-device-area { display: none; }
  .holo { display: none; }
  .mobile-device {
    display: block;
    width: 240px;
    margin: 40px auto 0;
    aspect-ratio: 4/5;
    background: var(--bg-glass);
    border: 1px solid var(--line-strong);
    border-radius: 5px;
    padding: 30px;
  }
  .mobile-device img { width: 100%; height: 100%; object-fit: contain; }
}


PLAUD_HEREDOC_EOF

cat > "app/components/LandingCinematic.tsx" << 'PLAUD_HEREDOC_EOF'
'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakSlider } from './TweaksPanel';

const PLAUD_IMG =
  'https://cdn.shopifycdn.net/s/files/1/0918/0171/5051/files/Plaud_Note_Pro-front-black_74a97c88-375f-4daa-9fc0-728d21b74fd9.webp?v=1766042075&width=1600';

const TWEAK_DEFAULTS = { cursor: true, specular: 0.6 };

// ============ Icons ============
const MicIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);

// ============ Cursor ============
function CustomCursor({ enabled }: { enabled: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled || window.matchMedia('(max-width: 960px)').matches) return;
    let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;
    let raf: number;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      gx += (mx - gx) * 0.18; gy += (my - gy) * 0.18;
      if (glowRef.current)
        glowRef.current.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      setHovering(!!(e.target as Element).closest('.btn, a, button, .magnetic, .act-tick, .metric-card, .step-row, .holo'));
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    tick();
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={glowRef} className={`cursor-glow ${hovering ? 'hovering' : ''}`} />
    </>
  );
}

// ============ Nav ============
function Nav({ progress, activeAct }: { progress: number; activeAct: number }) {
  const acts = ['Hero', 'Problema', 'Revelación', 'Pipeline', 'Resultados', 'Decisión'];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-mark">P</span>
          Plaud
          <span className="brand-region">AR · BETA</span>
        </div>
        <div className="nav-links">
          {acts.map((label, i) => (
            <a key={i} href={`#act-${i}`} className={activeAct === i ? 'active' : ''}>
              {label}
            </a>
          ))}
        </div>
        <a href="#cta" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>
          Demo
        </a>
      </div>
      <div className="nav-progress" style={{ width: `${progress * 100}%` }} />
    </nav>
  );
}

// ============ Act indicator (right edge dots) ============
function ActIndicator({ activeAct }: { activeAct: number }) {
  const labels = ['01 Apertura', '02 Problema', '03 Revelación', '04 Pipeline', '05 Resultados', '06 Voz / Cierre'];
  return (
    <div className="act-indicator">
      {labels.map((l, i) => (
        <div
          key={i}
          className={`act-tick ${activeAct === i ? 'active' : ''}`}
          onClick={() => scrollToAct(i)}
        >
          <span className="lbl">{l}</span>
          <span className="dot" />
        </div>
      ))}
    </div>
  );
}

function scrollToAct(i: number) {
  const stage = document.querySelector<HTMLElement>('.cinema-stage');
  if (!stage) return;
  const total = stage.scrollHeight - innerHeight;
  const t = i / 5;
  const target = stage.offsetTop + total * t;
  window.scrollTo({ top: target, behavior: 'smooth' });
}

// ============ Device (front + back faces) ============
function Device() {
  return (
    <div className="cinema-device" id="cinemaDevice">
      <div className="face face-front">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PLAUD_IMG} alt="Plaud Note Pro" draggable={false} />
      </div>
      <div className="face face-back">
        <div className="row-h">
          <span className="back-id">PLAUD NOTE PRO</span>
          <span style={{ color: 'var(--fg-mute)' }}>v3 · AR</span>
        </div>
        <div>
          <div className="back-headline">
            Segundo cerebro
            <br />
            de obra.
          </div>
        </div>
        <div className="back-grid">
          <div><div className="k">Audio</div><div className="v">48 kHz</div></div>
          <div><div className="k">Batería</div><div className="v">30 h</div></div>
          <div><div className="k">Idioma</div><div className="v">ES-AR</div></div>
          <div><div className="k">IA</div><div className="v">on-device</div></div>
        </div>
      </div>
    </div>
  );
}

// ============ Acts (left column copy) ============
function ActsContent() {
  return (
    <div className="cinema-acts">
      {/* ACT 0 — HERO */}
      <div className="act" id="act-0" data-act="0">
        <div className="act-num">Acto 01 · Apertura</div>
        <h2>
          Tu obra.
          <br />
          <span className="gradient-text">Documentada</span> por IA.
        </h2>
        <p className="act-lede">
          <b>Plaud</b> graba, transcribe y resume cada reunión de obra en segundos. Tu equipo ejecuta — sin errores, sin olvidos, sin llamadas de repetición.
        </p>
        <div className="act-cta-row">
          <a href="#cta" className="btn btn-primary btn-lg">
            Agendar demo de 20 min →
          </a>
          <a href="#act-2" className="btn btn-ghost btn-lg">
            Ver cómo funciona
          </a>
        </div>
        <div className="act-meta-row">
          <span className="verified">Sin costo</span>
          <span className="verified">Sin tarjeta</span>
          <span className="verified">Equipos en Argentina</span>
        </div>
      </div>

      {/* ACT 1 — PROBLEM */}
      <div className="act" id="act-1" data-act="1">
        <div className="act-num">Acto 02 · El costo del olvido</div>
        <h2>
          Lo que <span className="serif-em">no</span> queda
          <br />
          registrado, se ejecuta mal.
        </h2>
        <p className="act-lede">
          En construcción, cada acuerdo verbal mal recordado se traduce en re-trabajo, conflicto con el comitente, y dos horas escribiendo minutas que ya nadie leerá a tiempo.
        </p>
        <div className="metric-grid">
          <div className="metric-card">
            <div className="k">Re-trabajo / Proyecto</div>
            <div className="v">5–15%</div>
            <div className="vd">del presupuesto pierde por mala comunicación</div>
          </div>
          <div className="metric-card">
            <div className="k">Minutas / Semana</div>
            <div className="v">6–10 hs</div>
            <div className="vd">de jefe de obra escribiendo lo que ya se dijo</div>
          </div>
          <div className="metric-card">
            <div className="k">Sin Trazabilidad</div>
            <div className="v">1 de 3</div>
            <div className="vd">reclamos sin respaldo documental</div>
          </div>
          <div className="metric-card">
            <div className="k">Fuentes de Verdad</div>
            <div className="v">4 sistemas</div>
            <div className="vd">WhatsApp, mail, cuaderno, gestión</div>
          </div>
        </div>
      </div>

      {/* ACT 2 — REVELATION */}
      <div className="act" id="act-2" data-act="2">
        <div className="act-num">Acto 03 · Plaud Note Pro</div>
        <h2>
          Cada palabra.
          <br />
          Cada decisión.
          <br />
          <span className="gradient-text">Capturada.</span>
        </h2>
        <p className="act-lede">
          Un dispositivo del tamaño de una tarjeta. Una IA entrenada en el rioplatense. Tu obra deja de ser un agujero negro de información — y empieza a hablarte.
        </p>
        <div className="act-meta-row" style={{ marginTop: 16 }}>
          <span className="verified">48 kHz</span>
          <span className="verified">30 h de batería</span>
          <span className="verified">ES-AR nativo</span>
          <span className="verified">IA on-device</span>
        </div>
      </div>

      {/* ACT 3 — HOW IT WORKS */}
      <div className="act" id="act-3" data-act="3">
        <div className="act-num">Acto 04 · Pipeline</div>
        <h2>
          De la palabra
          <br />
          al <span className="serif-em">resumen</span>. En cinco pasos.
        </h2>
        <div className="steps-rail">
          <div className="step-row">
            <div className="sn">01</div>
            <div>
              <div className="st">Grabá</div>
              <div className="sd">Un click. El dispositivo captura todo, incluso en obra ruidosa.</div>
            </div>
          </div>
          <div className="step-row">
            <div className="sn">02</div>
            <div>
              <div className="st">IA transcribe</div>
              <div className="sd">Texto preciso con identificación de hablantes. Arquitecto, contratista, comitente — todo separado.</div>
            </div>
          </div>
          <div className="step-row">
            <div className="sn">03</div>
            <div>
              <div className="st">Resumen ejecutivo</div>
              <div className="sd">Acuerdos, tareas, plazos y responsables — extraídos automáticamente.</div>
            </div>
          </div>
          <div className="step-row">
            <div className="sn">04</div>
            <div>
              <div className="st">Distribuís</div>
              <div className="sd">WhatsApp, Notion o tu sistema. El resumen va donde trabaja el equipo.</div>
            </div>
          </div>
          <div className="step-row">
            <div className="sn">05</div>
            <div>
              <div className="st">Trazabilidad</div>
              <div className="sd">Archivo buscable. Cualquier decisión, cualquier reunión, en segundos.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ACT 4 — RESULTS */}
      <div className="act" id="act-4" data-act="4">
        <div className="act-num">Acto 05 · Impacto</div>
        <h2>
          Lo que cambia
          <br />
          en los primeros <span className="gradient-text">90 días</span>.
        </h2>
        <p className="act-lede">Datos agregados de equipos de obra en Argentina usando Plaud.</p>
        <div className="results-mini">
          <div className="results-mini-row head">
            <span>Métrica</span>
            <span>Sin Plaud</span>
            <span>Con Plaud</span>
          </div>
          <div className="results-mini-row">
            <span className="m">Minutas por reunión</span>
            <span className="without">60–90 min</span>
            <span className="withv">&lt; 2 min</span>
          </div>
          <div className="results-mini-row">
            <span className="m">Acuerdos perdidos</span>
            <span className="without">Frecuentes</span>
            <span className="withv">Cero</span>
          </div>
          <div className="results-mini-row">
            <span className="m">Tiempo administrativo</span>
            <span className="without">2–3 hs</span>
            <span className="withv">&lt; 5 min</span>
          </div>
          <div className="results-mini-row">
            <span className="m">Trazabilidad</span>
            <span className="without">Ninguna</span>
            <span className="withv">100%</span>
          </div>
        </div>
      </div>

      {/* ACT 5 — TESTIMONY */}
      <div className="act" id="act-5" data-act="5">
        <div className="act-num">Acto 06 · Voz de obra</div>
        <div className="testimonial-quote">
          Resolví un reclamo del comitente en 5 minutos gracias a la trazabilidad. Lo que antes hubiera sido una pelea de tres semanas.
        </div>
        <div className="testimonial-author">
          <div className="testimonial-avatar">LR</div>
          <div>
            <div className="testimonial-name">Lucía Romero</div>
            <div className="testimonial-role">Project Manager · Desarrolladora del Río</div>
          </div>
        </div>
        <div className="act-cta-row" style={{ marginTop: 42 }}>
          <a href="#cta" className="btn btn-primary btn-lg">
            Agendar demo de 20 min →
          </a>
        </div>
      </div>

      {/* Mobile-only inline device */}
      <div className="mobile-device">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PLAUD_IMG} alt="Plaud Note Pro" />
      </div>
    </div>
  );
}

// ============ Holo panels (visible during Reveal act) ============
function HoloPanels() {
  return (
    <>
      <div className="holo h1" data-holo="0">
        <div className="label">Transcripción · LIVE</div>
        <div>
          <span className="who">Arq. Martín:</span> Necesito el revoque grueso para el viernes.
        </div>
      </div>
      <div className="holo ai h2" data-holo="1">
        <div className="label">IA · Acuerdo detectado</div>
        <div>
          Tarea: Revoque grueso
          <br />
          Plazo: Viernes
          <br />
          Responsable: Contratista
        </div>
      </div>
      <div className="holo h3" data-holo="2">
        <div className="label">Resumen ejecutivo</div>
        <div>
          3 acuerdos
          <br />
          2 plazos
          <br />
          1 cotización pendiente
        </div>
      </div>
      <div className="holo ai h4" data-holo="3">
        <div className="label">Distribución</div>
        <div>
          → WhatsApp Equipo
          <br />
          → Notion Proyecto
          <br />
          → Email Comitente
        </div>
      </div>
    </>
  );
}

// ============ Master Cinema (GSAP ScrollTrigger) ============
function Cinema({ specular }: { specular: number }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeAct, setActiveAct] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 960px)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const stage = stageRef.current;
    const device = document.querySelector<HTMLElement>('#cinemaDevice');
    const ring = document.querySelector<HTMLElement>('.cinema-ring');
    const aura = document.querySelector<HTMLElement>('.cinema-aura');
    const telemetry = document.querySelector<HTMLElement>('.cinema-telemetry');
    const waveform = document.querySelector<HTMLElement>('.cinema-waveform');
    const acts = gsap.utils.toArray<HTMLElement>('.act');
    const holos = gsap.utils.toArray<HTMLElement>('.holo');

    if (!stage || !device || acts.length === 0) return;

    // Initialize CSS custom properties so GSAP has proper values to tween from
    if (ring) {
      ring.style.setProperty('--ring-int', '0.3');
      ring.style.setProperty('--ring-rot', '0deg');
      ring.style.setProperty('--ring-blur', '40px');
    }
    if (aura) aura.style.setProperty('--aura', '0.5');
    if (waveform) waveform.style.setProperty('--wave', '0');
    if (telemetry) telemetry.style.setProperty('--telemetry', '0');

    // Initial device state
    gsap.set(device, {
      x: 0, y: 0,
      scale: 1.1,
      rotationY: 0,
      rotationX: 0,
      rotationZ: 0,
      transformPerspective: 1200,
      transformOrigin: '50% 50%',
    });
    gsap.set(acts[0], { opacity: 1, y: 0, pointerEvents: 'auto' });
    for (let i = 1; i < acts.length; i++) {
      gsap.set(acts[i], { opacity: 0, y: 40, pointerEvents: 'none' });
    }
    gsap.set(holos, { opacity: 0, y: 30, scale: 0.9 });

    // ============================================================
    // MASTER TIMELINE — scrubs across entire stage height
    // ============================================================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        pin: '.cinema-pin',
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
          const idx = Math.min(acts.length - 1, Math.floor(self.progress * acts.length));
          setActiveAct(idx);
        },
      },
    });

    const fadeActs = (showIdx: number, dur = 0.4) => {
      acts.forEach((a, i) => {
        tl.to(
          a,
          {
            opacity: i === showIdx ? 1 : 0,
            y: i === showIdx ? 0 : i < showIdx ? -40 : 40,
            duration: dur,
            ease: 'power2.inOut',
            pointerEvents: i === showIdx ? 'auto' : 'none',
          },
          '<',
        );
      });
    };

    // ---------- Act 0 → 1 : Hero → Problem ----------
    tl.addLabel('act0', 0);
    tl.to(waveform, { '--wave': 1, duration: 0.3, ease: 'power2.out' }, 'act0+=0.05');
    tl.to(device, {
      rotationY: 30, rotationX: -6, scale: 1.05, x: '+=20',
      duration: 1, ease: 'power1.inOut',
    }, 'act0');
    tl.to(ring, { '--ring-int': 0.4, '--ring-rot': '+=180deg', duration: 1 }, 'act0');
    tl.to(aura, { '--aura': 0.7, duration: 1 }, 'act0');

    // Transition to act 1
    tl.addLabel('toAct1', 0.85);
    tl.to(waveform, { '--wave': 0, duration: 0.2 }, 'toAct1');
    fadeActs(1, 0.3);
    tl.to(device, {
      rotationY: 180, rotationX: 8, scale: 0.95, x: '+=30', y: '-=10',
      duration: 1.2, ease: 'power2.inOut',
    }, 'toAct1');
    tl.to(telemetry, { '--telemetry': 0.85, duration: 0.6 }, 'toAct1+=0.4');

    // ---------- Act 1 → 2 : Problem → REVELATION ----------
    tl.addLabel('act1', '+=0.6');
    tl.to(device, {
      rotationY: 360, rotationX: -4, scale: 1.0,
      duration: 1, ease: 'power1.inOut',
    }, 'act1');

    tl.addLabel('toReveal', '+=0.3');
    fadeActs(2, 0.4);
    tl.to(telemetry, { '--telemetry': 0, duration: 0.3 }, 'toReveal');

    // DRAMATIC REVEAL
    tl.to(device, {
      x: 0, y: 0, scale: 1.5,
      rotationY: 540, rotationX: 0, rotationZ: 0,
      duration: 1.8, ease: 'power3.inOut',
    }, 'toReveal');
    tl.to(aura, { '--aura': 1.3, duration: 1.5 }, 'toReveal');
    tl.to(ring, { '--ring-int': 0.9, '--ring-blur': '80px', '--ring-rot': '+=540deg', duration: 1.5 }, 'toReveal');

    // Holo panels emerge
    tl.to(holos[0], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=0.6');
    tl.to(holos[1], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=0.8');
    tl.to(holos[2], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=1.0');
    tl.to(holos[3], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=1.2');

    // Hold reveal a beat
    tl.to(device, { rotationY: 720, duration: 0.8, ease: 'none' }, '+=0.2');

    // ---------- Reveal → Act 3 : Pipeline ----------
    tl.addLabel('toAct3', '+=0.3');
    fadeActs(3, 0.4);
    tl.to(holos, { opacity: 0, scale: 0.85, y: -20, duration: 0.5, stagger: 0.05 }, 'toAct3');
    tl.to(device, {
      scale: 0.85, rotationY: 900, rotationX: -10, x: '+=40',
      duration: 1.2, ease: 'power2.inOut',
    }, 'toAct3');
    tl.to(aura, { '--aura': 0.55, duration: 0.6 }, 'toAct3');
    tl.to(ring, { '--ring-int': 0.3, '--ring-blur': '30px', duration: 0.6 }, 'toAct3');
    tl.to(telemetry, { '--telemetry': 1, duration: 0.5 }, 'toAct3+=0.3');

    // ---------- Act 3 → 4 : Pipeline → Results ----------
    tl.addLabel('toAct4', '+=0.7');
    fadeActs(4, 0.4);
    tl.to(device, {
      scale: 0.9, rotationY: 1080, rotationX: 6, x: '+=20', y: '+=20',
      duration: 1.1, ease: 'power2.inOut',
    }, 'toAct4');
    tl.to(aura, { '--aura': 0.65, duration: 0.5 }, 'toAct4');

    // ---------- Act 4 → 5 : Results → Testimony ----------
    tl.addLabel('toAct5', '+=0.7');
    fadeActs(5, 0.4);
    tl.to(device, {
      scale: 1.15, rotationY: 1440, rotationX: 0, rotationZ: 0, x: 0, y: 0,
      duration: 1.3, ease: 'power3.inOut',
    }, 'toAct5');
    tl.to(aura, { '--aura': 1.0, duration: 0.8 }, 'toAct5');
    tl.to(ring, { '--ring-int': 0.7, '--ring-blur': '60px', duration: 0.8 }, 'toAct5');
    tl.to(telemetry, { '--telemetry': 0.3, duration: 0.5 }, 'toAct5');

    // Specular sweep — reacts to scroll velocity
    ScrollTrigger.create({
      trigger: stage,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const v = self.getVelocity() / 1000;
        const intensity = Math.min(1, Math.abs(v) * 0.5 + specular * 0.5);
        device.style.setProperty('--specular', String(intensity));
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [specular]);

  return (
    <>
      <Nav progress={progress} activeAct={activeAct} />
      <ActIndicator activeAct={activeAct} />

      <div className="cinema">
        <div ref={stageRef} className="cinema-stage">
          <div className="cinema-pin">
            <div className="cinema-grid" />
            <ActsContent />
            <div className="cinema-device-area">
              <div className="cinema-aura" />
              <div className="cinema-ring" />
              <div className="cinema-waveform">
                {Array.from({ length: 56 }).map((_, i) => (
                  <span key={i} style={{ animationDelay: `${(i % 12) * 0.08}s` }} />
                ))}
              </div>
              <Device />
              <div className="cinema-telemetry">
                <div className="tel t1">REC.001 · OBRA-MARTÍNEZ</div>
                <div className="tel t2">16-BIT · 48kHz</div>
                <div className="tel t3">BAT 92% · 30 h</div>
                <div className="tel t4">IA · TRANSCRIPCIÓN</div>
                <div className="tel t5">ES-AR · LIVE</div>
              </div>
              <HoloPanels />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ============ Final CTA ============
function FinalCTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-card">
        <div className="cta-inner">
          <div>
            <div className="mono-tag" style={{ marginBottom: 20 }}>
              Próximo paso
            </div>
            <h2>
              Mostranos una
              <br />
              reunión de obra.
              <br />
              <span className="gradient-text">Te mostramos</span>
              <br />
              el resumen.
            </h2>
            <p>
              20 minutos. Sin demo genérica — analizamos un caso real de tu obra y te entregamos el primer resumen ejecutivo durante la llamada.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Agendar demo de 20 minutos →
            </a>
          </div>
          <div className="cta-meta-list">
            <div className="row">
              <span className="k">Duración</span>
              <span className="v">20 minutos · Google Meet</span>
            </div>
            <div className="row">
              <span className="k">Costo</span>
              <span className="v">Sin costo · sin tarjeta</span>
            </div>
            <div className="row">
              <span className="k">Para</span>
              <span className="v">Estudios, contratistas y desarrolladores en Argentina</span>
            </div>
            <div className="row">
              <span className="k">Devuelve</span>
              <span className="v">Resumen ejecutivo de tu reunión real</span>
            </div>
            <div className="row">
              <span className="k">Cupos</span>
              <span className="v" style={{ color: 'var(--amplify-green)' }}>
                ● 12 disponibles esta semana
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>Plaud.ai · Argentina · 2026</div>
        <div>Buenos Aires / Córdoba / Rosario</div>
        <div>hola@plaud.com.ar</div>
      </div>
    </footer>
  );
}

// ============ ROOT ============
export default function LandingCinematic() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <>
      <div className="atmosphere">
        <div className="atmo-blob a" />
        <div className="atmo-blob b" />
        <div className="atmo-blob c" />
      </div>
      <div className="grain" />
      <div className="vignette" />
      <CustomCursor enabled={tweaks.cursor} />

      <Cinema specular={tweaks.specular} />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="FX">
          <TweakToggle
            label="Cursor custom"
            value={tweaks.cursor as boolean}
            onChange={(v) => setTweak('cursor', v)}
          />
          <TweakSlider
            label="Brillo especular base"
            min={0}
            max={1}
            step={0.05}
            value={tweaks.specular as number}
            onChange={(v) => setTweak('specular', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}


PLAUD_HEREDOC_EOF

cat > "app/components/TweaksPanel.tsx" << 'PLAUD_HEREDOC_EOF'
'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
`;

export interface TweakValues {
  [key: string]: boolean | number | string;
}

export function useTweaks<T extends TweakValues>(defaults: T): [T, (key: keyof T, val: T[keyof T]) => void] {
  const [values, setValues] = useState<T>(defaults);
  const setTweak = useCallback((key: keyof T, val: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    if (typeof window !== 'undefined') {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
    }
  }, []);
  return [values, setTweak];
}

interface TweaksPanelProps {
  title?: string;
  children: React.ReactNode;
}

export function TweaksPanel({ title = 'Tweaks', children }: TweaksPanelProps) {
  const [open, setOpen] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  useEffect(() => {
    if (!open) return;
    clampToViewport();
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    // Keyboard shortcut: Ctrl+Shift+T toggles in dev
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'T' && e.ctrlKey && e.shiftKey) setOpen((v) => !v);
    };
    window.addEventListener('message', onMsg);
    window.addEventListener('keydown', onKey);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => {
      window.removeEventListener('message', onMsg);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const onDragStart = (e: React.MouseEvent) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev: MouseEvent) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel"
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={() => { setOpen(false); window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); }}>
            ✕
          </button>
        </div>
        <div className="twk-body">{children}</div>
      </div>
    </>
  );
}

export function TweakSection({ label, title, children }: { label?: string; title?: string; children?: React.ReactNode }) {
  return (
    <>
      <div className="twk-sect">{label ?? title}</div>
      {children}
    </>
  );
}

export function TweakSlider({
  label, value, min = 0, max = 100, step = 1, unit = '', onChange,
}: {
  label: string; value: number; min?: number; max?: number; step?: number; unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
        <span className="twk-val">{value}{unit}</span>
      </div>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

export function TweakToggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}


PLAUD_HEREDOC_EOF

echo 'All files created successfully!'
echo ''
echo 'Next steps:'
echo '  npm install'
echo '  git add .'
echo '  git commit -m "Add Next.js 14 app"'
echo '  git push'
echo ''
echo 'To run locally: npm run dev -> http://localhost:3000'