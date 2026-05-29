// Plaud AR — PREMIUM landing
// Cinematic AI hardware aesthetic: aurora bg, particles, custom cursor,
// magnetic buttons, glassmorphism, enhanced floating device w/ specular sweep.

const { useState, useEffect, useRef, useCallback } = React;

const PLAUD_IMG = "https://cdn.shopifycdn.net/s/files/1/0918/0171/5051/files/Plaud_Note_Pro-front-black_74a97c88-375f-4daa-9fc0-728d21b74fd9.webp?v=1766042075&width=1600";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FF5B14",
  "particles": true,
  "cursor": true,
  "specular": 0.6
}/*EDITMODE-END*/;

// ---------------- Icons ----------------
const Icon = {
  Mic: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>),
  Brain: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 6 11a3 3 0 0 0 1.5 5.2A3 3 0 0 0 12 19a3 3 0 0 0 4.5-2.8A3 3 0 0 0 18 11a3 3 0 0 0-3-3.5V7a3 3 0 0 0-3-3Z"/></svg>),
  Doc: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/></svg>),
  Send: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 12 20 4l-3 16-4-7-9-1Z"/></svg>),
  Search: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>),
  Archive: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4"/></svg>),
  Link: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>),
  Lock: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>),
  Arrow: () => <span className="arrow">→</span>,
};

// ---------------- Background FX ----------------
function AuroraBg() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob warm" />
      <div className="aurora-blob cool" />
      <div className="aurora-blob amber" />
    </div>
  );
}

function ParticleField({ enabled }) {
  const particles = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 36; i++) {
      const variant = Math.random();
      const cls = variant > 0.92 ? 'warm' : variant > 0.85 ? 'cool' : (variant > 0.6 ? 'lg' : '');
      arr.push({
        left: Math.random() * 100,
        top: 60 + Math.random() * 60,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 14,
        cls,
      });
    }
    return arr;
  }, []);
  if (!enabled) return null;
  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className={`particle ${p.cls}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

function CustomCursor({ enabled }) {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia('(max-width: 960px)').matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx, gy = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      gx += (mx - gx) * 0.18;
      gy += (my - gy) * 0.18;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      const t = e.target;
      if (t.closest('.btn, a, button, .magnetic, .pain-card, .step, .feature, .testimonial')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    animate();
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
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

// Magnetic button — translate slightly toward mouse when near
function MagneticButton({ children, className = '', strength = 22, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(max-width: 960px)').matches) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(r.width, r.height) * 1.4;
      if (dist < radius) {
        const f = (1 - dist / radius) * strength;
        const nx = (dx / dist || 0) * f;
        const ny = (dy / dist || 0) * f;
        el.style.transform = `translate(${nx}px, ${ny}px)`;
      } else {
        el.style.transform = '';
      }
    };
    const onLeave = () => { el.style.transform = ''; };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <a ref={ref} className={`btn-magnetic ${className}`} {...rest}>
      {children}
    </a>
  );
}

// Fade-in observer
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---------------- Nav ----------------
function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span className="brand-mark">P</span>
          Plaud
          <span className="brand-region">AR · BETA</span>
        </div>
        <div className="nav-links">
          <a href="#problema">Problema</a>
          <a href="#revelacion">Solución</a>
          <a href="#funciona">Cómo funciona</a>
          <a href="#features">Funcionalidades</a>
          <a href="#resultados">Resultados</a>
        </div>
        <a href="#cta" className="btn btn-primary">
          Agendar demo <Icon.Arrow />
        </a>
      </div>
    </nav>
  );
}

// ---------------- Hero ----------------
function Hero({ showWaveform }) {
  return (
    <header className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-beam" />
      <div className="container hero-inner">
        <div className="fade-in in">
          <div className="eyebrow">
            <span className="dot" />
            Lanzamiento Argentina · Construcción & Obra
          </div>
          <h1 className="display hero-headline">
            Tu obra.<br/>
            <span className="gradient-text">Documentada</span> por IA.
          </h1>
          <p className="lede hero-sub">
            <b>Plaud</b> graba, transcribe y resume cada reunión de obra en segundos. Tu equipo ejecuta — sin errores, sin olvidos, sin llamadas de repetición.
          </p>
          <div className="hero-cta">
            <MagneticButton href="#cta" className="btn btn-primary btn-lg">
              Agendar demo de 20 minutos <Icon.Arrow />
            </MagneticButton>
            <a href="#revelacion" className="btn btn-ghost btn-lg">
              Ver cómo funciona
            </a>
          </div>
          <div className="hero-cta-sub">
            <span className="verified">Sin costo</span>
            <span className="verified">Sin tarjeta</span>
            <span className="verified">Equipos en Argentina</span>
          </div>
        </div>

        <DeviceSlot showWaveform={showWaveform} />
      </div>

      <div className="container">
        <StatsBar />
      </div>
    </header>
  );
}

function DeviceSlot({ showWaveform }) {
  return (
    <div className="device-frame">
      <span className="corners"><i /></span>
      <div className="device-meta">REC.001 / OBRA-MARTÍNEZ</div>
      <div className="device-meta-r">14:32:08 · -34.59° S</div>

      <img className="device-slot-mobile" src={PLAUD_IMG} alt="Plaud Note Pro" />

      {showWaveform && (
        <div className="waveform">
          {Array.from({ length: 52 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 12) * 0.08}s` }} />
          ))}
        </div>
      )}

      <div className="transcript-chip">
        <div className="header">
          <span>TRANSCRIPCIÓN · LIVE</span>
          <span style={{ color: 'var(--warm-2)' }}>● 00:14</span>
        </div>
        <div>
          <span className="who">Arq. Martín:</span> Necesito que el revoque grueso esté el viernes.
        </div>
        <div style={{ marginTop: 6 }}>
          <span className="who">Contratista:</span> Confirmado. Mando el equipo extra el jueves.
        </div>
      </div>

      <div className="device-bottom">
        <span>16-BIT · 48kHz</span>
        <span>BAT 92%</span>
        <span>ES-AR</span>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { id: "S.01", num: "-70", unit: "%", label: "Tiempo en minutas de obra" },
    { id: "S.02", num: "0", unit: "", label: "Acuerdos verbales perdidos" },
    { id: "S.03", num: "100", unit: "%", label: "Reuniones documentadas" },
    { id: "S.04", num: "<2", unit: "min", label: "Para el resumen ejecutivo" },
  ];
  return (
    <div className="stats-bar fade-in">
      {stats.map(s => (
        <div className="stat" key={s.id}>
          <div className="stat-id">{s.id}</div>
          <div className="stat-num">{s.num}<span className="unit">{s.unit}</span></div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ---------------- Floating Device (PREMIUM) ----------------
function FloatingDevice({ specular }) {
  const wrapRef = useRef(null);
  const anchorRef = useRef(null);
  const innerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(max-width: 760px)').matches) return;

    let raf = null;
    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;

    // Stations per section — alternating Y, accumulating Y rotation
    const sectionConfig = [
      { sel: '.hero',       x: 0.78, y: 0.48, ry:    0, w: 320, hero: true },
      { sel: '#problema',   x: 0.86, y: 0.42, ry:  360, w: 230 },
      { sel: '#revelacion', x: 0.50, y: 0.55, ry:  720, w: 440, reveal: true },
      { sel: '#funciona',   x: 0.86, y: 0.42, ry: 1080, w: 230 },
      { sel: '#features',   x: 0.86, y: 0.58, ry: 1440, w: 230 },
      { sel: '#resultados', x: 0.86, y: 0.42, ry: 1800, w: 250 },
      { sel: '#testimonios',x: 0.86, y: 0.58, ry: 2160, w: 250 },
      { sel: '#cta',        x: 0.86, y: 0.50, ry: 2520, w: 250, fade: true },
    ];

    const getSections = () => sectionConfig.map(c => {
      const el = document.querySelector(c.sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const top = r.top + window.scrollY;
      const height = el.offsetHeight;
      return { ...c, top, height, center: top + height / 2 };
    }).filter(Boolean);

    let sections = getSections();

    // Mouse parallax for magnetic hover
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;  // -1..1
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current = { x: mouseX, y: mouseY };
    };
    document.addEventListener('mousemove', onMouseMove);

    const update = () => {
      const wrap = wrapRef.current;
      const anchor = anchorRef.current;
      const inner = innerRef.current;
      if (!wrap || !anchor || !inner) return;
      if (!sections.length || sections.length < 2) {
        sections = getSections();
        if (sections.length < 2) return;
      }

      const y = window.scrollY;
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const viewCenter = y + vh / 2;

      let idx = 0;
      if (viewCenter <= sections[0].center) idx = 0;
      else if (viewCenter >= sections[sections.length - 1].center) idx = sections.length - 2;
      else {
        for (let i = 0; i < sections.length - 1; i++) {
          if (viewCenter >= sections[i].center && viewCenter < sections[i+1].center) {
            idx = i; break;
          }
        }
      }

      const a = sections[idx];
      const b = sections[Math.min(idx + 1, sections.length - 1)];
      const span = b.center - a.center;
      const rawT = span === 0 ? 0 : clamp((viewCenter - a.center) / span, 0, 1);
      const t = ease(rawT);

      let xPx, yPx, w;
      if (a.hero && idx === 0) {
        const slot = document.querySelector('.hero .device-frame');
        const sideBySide = vw > 960;
        if (slot && sideBySide) {
          const r = slot.getBoundingClientRect();
          const slotX = r.left + r.width / 2;
          const slotY = r.top + r.height / 2;
          const slotW = Math.min(360, r.width * 0.62);
          xPx = lerp(slotX, b.x * vw, t);
          yPx = lerp(slotY, b.y * vh, t);
          w = lerp(slotW, b.w, t);
        } else {
          xPx = lerp(a.x * vw, b.x * vw, t);
          yPx = lerp(a.y * vh, b.y * vh, t);
          w = lerp(a.w, b.w, t);
        }
      } else if (a.reveal || b.reveal) {
        // Use the reveal section's device-space anchor when visible
        const revealEl = document.querySelector('#revelacion .reveal-device-space');
        if (revealEl) {
          const r = revealEl.getBoundingClientRect();
          const rx = r.left + r.width / 2;
          const ry = r.top + r.height / 2;
          if (a.reveal) {
            // Coming OUT of reveal
            xPx = lerp(rx, b.x * vw, t);
            yPx = lerp(ry, b.y * vh, t);
            w = lerp(a.w, b.w, t);
          } else {
            // Coming INTO reveal
            xPx = lerp(a.x * vw, rx, t);
            yPx = lerp(a.y * vh, ry, t);
            w = lerp(a.w, b.w, t);
          }
        } else {
          xPx = lerp(a.x * vw, b.x * vw, t);
          yPx = lerp(a.y * vh, b.y * vh, t);
          w = lerp(a.w, b.w, t);
        }
      } else {
        xPx = lerp(a.x * vw, b.x * vw, t);
        yPx = lerp(a.y * vh, b.y * vh, t);
        w = lerp(a.w, b.w, t);
      }
      const h = w * 1.35;
      const ry = lerp(a.ry, b.ry, t);

      // Per-frame wobble + scroll-driven tilt
      const localScroll = y / vh;
      const rx = Math.sin(localScroll * 0.8) * 14 + mouseRef.current.y * 8;
      const rz = Math.sin(localScroll * 0.55 + 1) * 6 + mouseRef.current.x * 4;

      const tPeak = Math.sin(rawT * Math.PI);
      const tz = -60 + tPeak * 220;

      const docH = Math.max(1, document.documentElement.scrollHeight - vh);
      const totalProg = clamp(y / docH, 0, 1);
      const glow = 0.3 + Math.sin(totalProg * Math.PI) * 0.4 + tPeak * 0.35;
      const telemetry = clamp(1 - tPeak * 0.85, 0, 1) * (idx === 0 ? t : 1);

      // Holo ring intensity peaks at reveal section + during transitions
      const ringInt = 0.2 + tPeak * 0.4 + (a.reveal || b.reveal ? 0.3 : 0);
      const ringBlur = 30 + tPeak * 30;
      const ringRot = (y * 0.4) % 360;

      // Specular sweep — moves with rotation
      const specularPos = Math.abs(Math.sin((ry * Math.PI) / 180));
      const specularInt = specular * (0.35 + specularPos * 0.65);

      const fade = b.fade ? clamp(1 - t * 1.15, 0.05, 1) : 1;

      // Mouse parallax offset
      const mx = mouseRef.current.x * 8;
      const my = mouseRef.current.y * 6;

      anchor.style.setProperty('--x', `${xPx}px`);
      anchor.style.setProperty('--y', `${yPx}px`);
      inner.style.setProperty('--ry', `${ry}deg`);
      inner.style.setProperty('--rx', `${rx}deg`);
      inner.style.setProperty('--rz', `${rz}deg`);
      inner.style.setProperty('--tz', `${tz}px`);
      inner.style.setProperty('--w', `${w}px`);
      inner.style.setProperty('--h', `${h}px`);
      inner.style.setProperty('--mx', `${mx}px`);
      inner.style.setProperty('--my', `${my}px`);
      inner.style.setProperty('--specular', specularInt.toString());
      inner.style.setProperty('--ring-int', ringInt.toString());
      inner.style.setProperty('--ring-blur', `${ringBlur}px`);
      inner.style.setProperty('--ring-rot', `${ringRot}deg`);
      wrap.style.setProperty('--glow', glow.toString());
      wrap.style.setProperty('--telemetry', telemetry.toString());
      wrap.style.opacity = fade.toString();
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = null; update(); });
    };
    const onResize = () => { sections = getSections(); update(); };

    const t1 = setTimeout(() => { sections = getSections(); update(); }, 300);
    const t2 = setTimeout(() => { sections = getSections(); update(); }, 1200);

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [specular]);

  return (
    <div ref={wrapRef} className="floating-device">
      <div ref={anchorRef} className="floating-device-anchor">
        <div className="floating-device-glow" />
        <div className="floating-device-ring" />
        <div ref={innerRef} className="floating-device-inner">
          <div className="floating-device-card face-front">
            <img src={PLAUD_IMG} alt="Plaud Note Pro" draggable={false} />
          </div>
          <div className="floating-device-card face-back">
            <div className="back-row">
              <span className="back-id">PLAUD NOTE PRO</span>
              <span>v3 · AR</span>
            </div>
            <div>
              <div className="back-big">Segundo cerebro<br/>de obra.</div>
            </div>
            <div className="back-grid">
              <div><div className="k">Audio</div><div className="v">48 kHz</div></div>
              <div><div className="k">Batería</div><div className="v">30 h</div></div>
              <div><div className="k">Idioma</div><div className="v">ES-AR</div></div>
              <div><div className="k">IA</div><div className="v">on-device</div></div>
            </div>
          </div>
        </div>
        <div className="floating-device-telemetry">
          <div className="telemetry-label tl-1">REC.001 · OBRA-MARTÍNEZ</div>
          <div className="telemetry-label tl-2">16-BIT · 48kHz</div>
          <div className="telemetry-label tl-3">BAT 92% · 30 h</div>
          <div className="telemetry-label tl-4">IA · TRANSCRIPCIÓN</div>
          <div className="telemetry-label tl-5">ES-AR · LIVE</div>
        </div>
      </div>
    </div>
  );
}

// ---------------- Problem ----------------
function Problem() {
  const pains = [
    { n: "P.01", title: "Acuerdos verbales que nadie recuerda igual", body: "El 60% de los conflictos en obra nacen de «yo dije» vs «yo escuché». Sin registro, no hay responsabilidad.", stat: "Costo del re-trabajo", statVal: "5–15% del presupuesto" },
    { n: "P.02", title: "Minutas que tardan 2 horas en escribirse", body: "Después de cada reunión, alguien tiene que sentarse a redactar. Ese tiempo vale plata — y la minuta llega cuando ya se tomaron decisiones equivocadas.", stat: "Horas-jefe / semana", statVal: "6 a 10 horas" },
    { n: "P.03", title: "Información dispersa entre WhatsApp y cuadernos", body: "Decisiones críticas enterradas en audios de 3 minutos. Cambios de plano en un chat que ya nadie recuerda. El conocimiento no está en ningún lado accesible.", stat: "Fuentes de verdad", statVal: "4 sistemas distintos" },
    { n: "P.04", title: "Sin trazabilidad cuando algo sale mal", body: "Cuando hay un defecto o un conflicto con el comitente, nadie sabe qué se decidió, cuándo, ni quién lo autorizó. La responsabilidad cae siempre en el que menos puede defenderse.", stat: "Reclamos sin respaldo", statVal: "1 de cada 3" },
  ];
  return (
    <section id="problema" className="section" data-screen-label="02 Problema">
      <div className="container">
        <div className="section-head fade-in">
          <div>
            <div className="mono-tag">02 · Diagnóstico</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              El problema que te está<br/>
              <span className="serif-em">costando</span> proyectos.
            </h2>
          </div>
          <p className="lede">
            En construcción, lo que no queda registrado se ejecuta mal — o no se ejecuta. Cuatro fugas silenciosas que vemos en toda obra argentina.
          </p>
        </div>

        <div className="pain-grid">
          {pains.map((p, i) => (
            <div className="pain-card glass beam-card fade-in" key={p.n} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="num">{p.n} · Pain point</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="stat-inline">
                {p.stat}
                <b>{p.statVal}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Solution Reveal (NEW cinematic moment) ----------------
function SolutionReveal() {
  return (
    <section id="revelacion" className="reveal" data-screen-label="03 Revelación">
      <div className="reveal-grid-bg" />
      <div className="container reveal-inner">
        <div className="mono-tag fade-in" style={{ justifyContent: 'center', display: 'inline-flex' }}>
          03 · Plaud Note Pro
        </div>
        <h2 className="fade-in" style={{ marginTop: 24 }}>
          Cada palabra.<br/>
          Cada decisión.<br/>
          <span className="gradient-text">Capturada.</span>
        </h2>
        <p className="reveal-lede fade-in" style={{ marginTop: 28 }}>
          Un dispositivo del tamaño de una tarjeta. Una IA entrenada en el rioplatense.
          Tu obra deja de ser un agujero negro de información.
        </p>

        {/* Where the FloatingDevice anchors during this section */}
        <div className="reveal-device-space">
          <div className="holo-panel p1 delay-1">
            <div className="label">Transcripción en vivo</div>
            <div><span className="who">Arq. Martín:</span> Necesito el revoque grueso para el viernes.</div>
          </div>
          <div className="holo-panel ai p2 delay-2">
            <div className="label">IA · Detectó acuerdo</div>
            <div>Tarea: Revoque grueso<br/>Plazo: Viernes<br/>Responsable: Contratista</div>
          </div>
          <div className="holo-panel p3 delay-3">
            <div className="label">Resumen ejecutivo</div>
            <div>3 acuerdos<br/>2 plazos<br/>1 pendiente de cotización</div>
          </div>
          <div className="holo-panel ai p4 delay-4">
            <div className="label">Distribución automática</div>
            <div>→ WhatsApp Equipo<br/>→ Notion Proyecto<br/>→ Email Comitente</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- How it works ----------------
function HowItWorks() {
  const steps = [
    { n: "01", icon: <Icon.Mic />, title: "Grabá", body: "Apoyás el dispositivo Plaud en cualquier reunión, visita u obra. Graba con claridad incluso en entornos ruidosos. Un click." },
    { n: "02", icon: <Icon.Brain />, title: "IA transcribe", body: "En minutos, convierte el audio en texto con identificación de hablantes. Arquitecto, contratista, comitente — todo separado." },
    { n: "03", icon: <Icon.Doc />, title: "Resumen ejecutivo", body: "La IA extrae acuerdos, tareas, decisiones y plazos en un documento limpio. Sin que nadie tenga que escribir una sola línea." },
    { n: "04", icon: <Icon.Send />, title: "Distribuís", body: "WhatsApp, email o tu sistema de gestión. Todo el equipo sabe qué se decidió, quién se comprometió y para cuándo." },
    { n: "05", icon: <Icon.Search />, title: "Trazabilidad", body: "Cada reunión archivada y buscable. En 3 meses, sabés exactamente qué se decidió en cada visita. Cero conflictos sin respaldo." },
  ];
  return (
    <section id="funciona" className="section" data-screen-label="04 Cómo funciona">
      <div className="container">
        <div className="section-head fade-in">
          <div>
            <div className="mono-tag">04 · Pipeline</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Tu asistente de obra<br/>
              que <span className="serif-em">nunca</span> olvida nada.
            </h2>
          </div>
          <p className="lede">
            Plaud graba cada reunión, la transcribe y te entrega un resumen ejecutivo listo para distribuir. Cinco pasos. Cero fricción.
          </p>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step glass beam-card fade-in" key={s.n} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="step-num">PASO {s.n}</div>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Features ----------------
function Features() {
  const feats = [
    { icon: <Icon.Mic />, title: "Grabación en obra", body: "Dispositivo físico + app. Graba en entornos ruidosos, dentro y fuera de sala. Batería de larga duración para recorridas completas." },
    { icon: <Icon.Brain />, title: "Transcripción con IA", body: "Texto preciso en español rioplatense con identificación de hablantes. 10 minutos o 3 horas: misma calidad." },
    { icon: <Icon.Doc />, title: "Minuta automática", body: "Resumen ejecutivo generado por IA con acuerdos, tareas, responsables y fechas. Listo para enviar en menos de 2 minutos." },
    { icon: <Icon.Archive />, title: "Archivo buscable", body: "Reuniones indexadas y buscables por proyecto, fecha o palabra clave. Encontrá cualquier decisión en segundos." },
    { icon: <Icon.Link />, title: "Integraciones", body: "Notion, Slack, WhatsApp Business y los sistemas de gestión de obra que ya usás. El resumen va donde trabaja tu equipo." },
    { icon: <Icon.Lock />, title: "Seguridad y privacidad", body: "Datos cifrados end-to-end. Las conversaciones de tus proyectos no salen de tu control. Estándares internacionales." },
  ];
  return (
    <section id="features" className="section" data-screen-label="05 Funcionalidades">
      <div className="container">
        <div className="section-head fade-in">
          <div>
            <div className="mono-tag">05 · Stack</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Operás como un estudio<br/>
              3<span className="serif-em">×</span> más grande.
            </h2>
          </div>
          <p className="lede">
            Todo lo que antes requería un asistente, un sistema de gestión y media tarde de redacción — en un solo dispositivo.
          </p>
        </div>

        <div className="features">
          {feats.map((f, i) => (
            <div className="feature glass beam-card fade-in" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Results ----------------
function Results() {
  const rows = [
    { metric: "Tiempo en minutas por reunión", without: "60–90 min", with: "< 2 min", delta: "-95%" },
    { metric: "Acuerdos perdidos / mal interpretados", without: "Frecuentes", with: "Cero", delta: "-100%" },
    { metric: "Tiempo administrativo por reunión", without: "2–3 horas", with: "< 5 min", delta: "-96%" },
    { metric: "Trazabilidad de decisiones", without: "Ninguna", with: "100% archivado", delta: "Total" },
    { metric: "Conflictos por comunicación", without: "Frecuentes", with: "Trazables", delta: "5× resolución" },
  ];
  return (
    <section id="resultados" className="section" data-screen-label="06 Resultados">
      <div className="container">
        <div className="section-head fade-in">
          <div>
            <div className="mono-tag">06 · Impacto</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Lo que cambia cuando<br/>
              usás Plaud en la obra.
            </h2>
          </div>
          <p className="lede">
            Datos de equipos de obra en Argentina durante los primeros 90 días de uso.
          </p>
        </div>

        <div className="results-wrap glass fade-in">
          <table className="results-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Sin Plaud</th>
                <th className="col-head-with">Con Plaud</th>
                <th style={{ textAlign: 'right' }}>Δ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="metric">{r.metric}</td>
                  <td className="col-without"><span className="crossed">{r.without}</span></td>
                  <td className="col-with">{r.with}</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className="pill">{r.delta}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ---------------- Testimonials (NEW) ----------------
function Testimonials() {
  const items = [
    {
      quote: "Antes perdíamos 2 horas escribiendo minutas. Ahora el resumen llega al grupo antes de que terminemos de almorzar.",
      name: "Martín Vázquez",
      role: "Jefe de obra · Estudio MV Arquitectos",
      initials: "MV",
    },
    {
      quote: "Resolví un reclamo del comitente en 5 minutos gracias a la trazabilidad. Lo que antes hubiera sido una pelea de tres semanas.",
      name: "Lucía Romero",
      role: "Project manager · Desarrolladora del Río",
      initials: "LR",
    },
    {
      quote: "El dispositivo es lo mejor que le pasó a mis recorridas de obra. Camino, hablo, y la información queda. Sin cuaderno.",
      name: "Diego Saavedra",
      role: "Contratista · Saavedra Construcciones",
      initials: "DS",
    },
  ];
  return (
    <section id="testimonios" className="section" data-screen-label="07 Testimonios">
      <div className="container">
        <div className="section-head fade-in">
          <div>
            <div className="mono-tag">07 · Voz de obra</div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Equipos que ya<br/>
              no escriben <span className="serif-em">minutas</span>.
            </h2>
          </div>
          <p className="lede">
            Pilotos en obras residenciales, comerciales e industriales del AMBA y Córdoba.
          </p>
        </div>

        <div className="testimonials">
          {items.map((t, i) => (
            <div className="testimonial glass beam-card fade-in" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="quote-mark">"</span>
              <div className="quote">{t.quote}</div>
              <div className="author">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- CTA ----------------
function CTA() {
  return (
    <section id="cta" className="section cta-section" data-screen-label="08 CTA">
      <div className="container">
        <div className="cta-card fade-in">
          <div className="cta-inner">
            <div>
              <div className="mono-tag" style={{ marginBottom: 20 }}>08 · Próximo paso</div>
              <h2>Mostranos una<br/>reunión de obra.<br/><span className="gradient-text">Te mostramos</span><br/>el resumen.</h2>
              <p>
                20 minutos. Sin demo genérica — analizamos un caso real de tu obra y te entregamos el primer resumen ejecutivo durante la llamada.
              </p>
              <MagneticButton href="#" className="btn btn-primary btn-lg" strength={28}>
                Agendar demo de 20 minutos <Icon.Arrow />
              </MagneticButton>
            </div>
            <div className="cta-meta">
              <div className="cta-meta-item">
                <span className="key">Duración</span>
                <span className="val">20 minutos · vía Google Meet</span>
              </div>
              <div className="cta-meta-item">
                <span className="key">Costo</span>
                <span className="val">Sin costo · sin tarjeta</span>
              </div>
              <div className="cta-meta-item">
                <span className="key">Para</span>
                <span className="val">Estudios, contratistas y desarrolladores en Argentina</span>
              </div>
              <div className="cta-meta-item">
                <span className="key">Devuelve</span>
                <span className="val">Resumen ejecutivo de tu reunión real</span>
              </div>
              <div className="cta-meta-item">
                <span className="key">Cupos</span>
                <span className="val" style={{ color: 'var(--warm-2)' }}>● 12 disponibles esta semana</span>
              </div>
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
      <div className="container footer-inner">
        <div>PLAUD.AI · ARGENTINA · 2026</div>
        <div>BUENOS AIRES / CÓRDOBA / ROSARIO</div>
        <div>HOLA@PLAUD.COM.AR</div>
      </div>
    </footer>
  );
}

// ---------------- Root ----------------
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    const hex = tweaks.accent.replace('#', '');
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    document.documentElement.style.setProperty('--accent-soft', `rgba(${r}, ${g}, ${b}, 0.14)`);
  }, [tweaks.accent]);

  return (
    <>
      <AuroraBg />
      <div className="grain" aria-hidden="true" />
      <ParticleField enabled={tweaks.particles} />
      <CustomCursor enabled={tweaks.cursor} />

      <Nav />
      <FloatingDevice specular={tweaks.specular} />
      <Hero showWaveform={true} />
      <Problem />
      <SolutionReveal />
      <HowItWorks />
      <Features />
      <Results />
      <Testimonials />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="FX">
          <TweakToggle label="Partículas" value={tweaks.particles} onChange={(v) => setTweak('particles', v)} />
          <TweakToggle label="Cursor custom" value={tweaks.cursor} onChange={(v) => setTweak('cursor', v)} />
          <TweakSlider label="Brillo especular" min={0} max={1} step={0.05} value={tweaks.specular} onChange={(v) => setTweak('specular', v)} />
        </TweakSection>
        <TweakSection title="Acento">
          <TweakColor
            label="Color principal"
            value={tweaks.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#FF5B14', '#FFB800', '#8B5CF6', '#4DA3FF', '#10B981']}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
