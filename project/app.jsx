// Plaud.ai AR — Landing
// Structure: Nav → Hero → Problem → How it works → Features → Results → CTA → Footer
// Tweaks: accent color, hero layout variant, density

const { useState, useEffect, useRef } = React;

const PLAUD_IMG = "https://cdn.shopifycdn.net/s/files/1/0918/0171/5051/files/Plaud_Note_Pro-front-black_74a97c88-375f-4daa-9fc0-728d21b74fd9.webp?v=1766042075&width=1600";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FF5B14",
  "density": "default",
  "showWaveform": true,
  "heroVariant": "split"
}/*EDITMODE-END*/;

// ---------------- Icons ----------------
const Icon = {
  Mic: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  ),
  Brain: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 6 11a3 3 0 0 0 1.5 5.2A3 3 0 0 0 12 19a3 3 0 0 0 4.5-2.8A3 3 0 0 0 18 11a3 3 0 0 0-3-3.5V7a3 3 0 0 0-3-3Z" />
    </svg>
  ),
  Doc: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h8l4 4v14H7z" />
      <path d="M15 3v4h4M10 12h6M10 16h6" />
    </svg>
  ),
  Send: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12 20 4l-3 16-4-7-9-1Z" />
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  ),
  Archive: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4" />
    </svg>
  ),
  Link: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </svg>
  ),
  Lock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  Arrow: () => <span className="arrow">→</span>,
};

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
        <div className="nav-links" style={{ display: 'flex' }}>
          <a href="#problema">Problema</a>
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
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div>
          <div className="eyebrow">
            <span className="dot" />
            Lanzamiento Argentina · Construcción & Obra
          </div>
          <h1 className="display hero-headline">
            En la obra, una decisión <span className="accent">mal comunicada</span> cuesta más que el dispositivo.
          </h1>
          <p className="lede hero-sub">
            <b>Plaud</b> graba, transcribe y resume cada reunión de obra en segundos.
            Tu equipo ejecuta — sin errores, sin olvidos, sin llamadas de repetición.
          </p>
          <div className="hero-cta">
            <a href="#cta" className="btn btn-primary btn-lg">
              Agendar demo de 20 minutos <Icon.Arrow />
            </a>
            <a href="#funciona" className="btn btn-ghost btn-lg">
              Ver cómo funciona
            </a>
          </div>
          <div className="hero-cta-sub">
            <b>Sin costo</b> · Solo para equipos de obra y construcción en Argentina
          </div>
        </div>

        <DeviceMock showWaveform={showWaveform} />
      </div>

      <div className="container">
        <StatsBar />
      </div>
    </header>
  );
}

function DeviceMock({ showWaveform }) {
  return (
    <div className="device-frame">
      <span className="corners"><i /></span>
      <div className="device-meta">REC.001 / OBRA-MARTÍNEZ</div>
      <div className="device-meta-r">14:32:08 · -34.59° S</div>

      {/* Mobile fallback — the real device shows here, hidden on desktop where FloatingDevice takes over */}
      <img className="device-slot-mobile" src={PLAUD_IMG} alt="Plaud Note Pro" />

      {showWaveform && (
        <div className="waveform">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 12) * 0.08}s` }} />
          ))}
        </div>
      )}

      <div className="transcript-chip">
        <div className="header">
          <span>TRANSCRIPCIÓN · LIVE</span>
          <span style={{ color: 'var(--accent)' }}>● 00:14</span>
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

// ---------------- Floating Device (scroll-driven 3D) ----------------
// Fixed-positioned, anchors to .device-frame at scroll=0, then animates as
// the user scrolls: travels to the right edge, rotates in 3D, with telemetry
// labels orbiting and a glow that pulses through the page.
function FloatingDevice() {
  const wrapRef = useRef(null);
  const anchorRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    // Disable on mobile — CSS already hides the wrapper.
    if (window.matchMedia('(max-width: 760px)').matches) return;

    let raf = null;
    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;

    // Each section is a "station" the device travels to. ry accumulates so the
    // device spins a full 360° between each station — the card flies out, rotates,
    // and lands in the next section. Y oscillates so it bobs up and down.
    const sectionConfig = [
      { sel: '.hero',       x: 0.78, y: 0.48, ry:    0, w: 320, hero: true },
      { sel: '#problema',   x: 0.86, y: 0.42, ry:  360, w: 230 },
      { sel: '#funciona',   x: 0.86, y: 0.58, ry:  720, w: 230 },
      { sel: '#features',   x: 0.86, y: 0.42, ry: 1080, w: 230 },
      { sel: '#resultados', x: 0.86, y: 0.58, ry: 1440, w: 250 },
      { sel: '#cta',        x: 0.86, y: 0.50, ry: 1800, w: 250, fade: true },
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

      // Find which segment (between station i and i+1) view-center is in
      let idx = 0;
      if (viewCenter <= sections[0].center) {
        idx = 0;
      } else if (viewCenter >= sections[sections.length - 1].center) {
        idx = sections.length - 2;
      } else {
        for (let i = 0; i < sections.length - 1; i++) {
          if (viewCenter >= sections[i].center && viewCenter < sections[i+1].center) {
            idx = i;
            break;
          }
        }
      }

      const a = sections[idx];
      const b = sections[Math.min(idx + 1, sections.length - 1)];
      const span = b.center - a.center;
      const rawT = span === 0 ? 0 : clamp((viewCenter - a.center) / span, 0, 1);
      const t = ease(rawT);

      // Hero override: at the very top, anchor the device to the live position
      // of the .hero .device-frame so it sits inside the HUD slot.
      let xPx, yPx, w;
      if (a.hero && idx === 0) {
        const slot = document.querySelector('.hero .device-frame');
        const sideBySide = vw > 960;
        if (slot && sideBySide) {
          const r = slot.getBoundingClientRect();
          // Slot-position is interpolated toward next station as user scrolls
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
      } else {
        xPx = lerp(a.x * vw, b.x * vw, t);
        yPx = lerp(a.y * vh, b.y * vh, t);
        w = lerp(a.w, b.w, t);
      }
      const h = w * 1.35;
      const ry = lerp(a.ry, b.ry, t);

      // Per-frame wobble — small, organic
      const localScroll = y / vh;
      const rx = Math.sin(localScroll * 0.8) * 14;
      const rz = Math.sin(localScroll * 0.55 + 1) * 6;

      // Z pulse — device "pops out" of the page mid-transition
      const tPeak = Math.sin(rawT * Math.PI);
      const tz = -60 + tPeak * 200;

      // Glow + telemetry
      const docH = Math.max(1, document.documentElement.scrollHeight - vh);
      const totalProg = clamp(y / docH, 0, 1);
      const glow = 0.3 + Math.sin(totalProg * Math.PI) * 0.4 + tPeak * 0.35;
      const telemetry = clamp(1 - tPeak * 0.85, 0, 1) * (idx === 0 ? t : 1);

      // Fade out near CTA so it doesn't obscure the card
      const fade = b.fade ? clamp(1 - t * 1.15, 0.05, 1) : 1;

      anchor.style.setProperty('--x', `${xPx}px`);
      anchor.style.setProperty('--y', `${yPx}px`);
      inner.style.setProperty('--ry', `${ry}deg`);
      inner.style.setProperty('--rx', `${rx}deg`);
      inner.style.setProperty('--rz', `${rz}deg`);
      inner.style.setProperty('--tz', `${tz}px`);
      inner.style.setProperty('--w', `${w}px`);
      inner.style.setProperty('--h', `${h}px`);
      wrap.style.setProperty('--glow', glow.toString());
      wrap.style.setProperty('--telemetry', telemetry.toString());
      wrap.style.opacity = fade.toString();
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = null; update(); });
    };
    const onResize = () => {
      sections = getSections();
      update();
    };

    // Recompute after layout settles (images, fonts)
    const t1 = setTimeout(() => { sections = getSections(); update(); }, 300);
    const t2 = setTimeout(() => { sections = getSections(); update(); }, 1200);

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="floating-device">
      <div ref={anchorRef} className="floating-device-anchor">
        <div className="floating-device-glow" />
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
              <div className="back-big">Asistente<br/>de obra.</div>
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

function StatsBar() {
  const stats = [
    { id: "S.01", num: "-70", unit: "%", label: "Tiempo en minutas de obra" },
    { id: "S.02", num: "0", unit: "", label: "Acuerdos verbales perdidos" },
    { id: "S.03", num: "100", unit: "%", label: "Reuniones documentadas y archivadas" },
    { id: "S.04", num: "<2", unit: "min", label: "Para entregar el resumen ejecutivo" },
  ];
  return (
    <div className="stats-bar">
      {stats.map(s => (
        <div className="stat" key={s.id}>
          <div className="stat-id">{s.id}</div>
          <div className="stat-num">
            {s.num}<span className="unit">{s.unit}</span>
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ---------------- Problem ----------------
function Problem() {
  const pains = [
    {
      n: "P.01",
      title: "Acuerdos verbales que nadie recuerda igual",
      body: "El 60% de los conflictos en obra nacen de «yo dije» vs «yo escuché». Sin registro, no hay responsabilidad.",
      stat: "Costo del re-trabajo",
      statVal: "5–15% del presupuesto",
    },
    {
      n: "P.02",
      title: "Minutas que tardan 2 horas en escribirse",
      body: "Después de cada reunión, alguien tiene que sentarse a redactar. Ese tiempo vale plata — y la minuta llega cuando ya se tomaron decisiones equivocadas.",
      stat: "Horas-jefe / semana",
      statVal: "6 a 10 horas",
    },
    {
      n: "P.03",
      title: "Información dispersa entre WhatsApp y cuadernos",
      body: "Decisiones críticas enterradas en audios de 3 minutos. Cambios de plano en un chat que ya nadie recuerda. El conocimiento del proyecto no está en ningún lado accesible.",
      stat: "Fuentes de verdad",
      statVal: "4 sistemas distintos",
    },
    {
      n: "P.04",
      title: "Sin trazabilidad cuando algo sale mal",
      body: "Cuando hay un defecto o un conflicto con el comitente, nadie sabe qué se decidió, cuándo, ni quién lo autorizó. La responsabilidad cae siempre en el que menos puede defenderse.",
      stat: "Reclamos sin respaldo",
      statVal: "1 de cada 3",
    },
  ];
  return (
    <section id="problema" className="section" data-screen-label="02 Problema">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="mono-tag">02 · Diagnóstico</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              El problema que te está<br/>costando proyectos.
            </h2>
          </div>
          <p className="lede">
            En construcción, lo que no queda registrado se ejecuta mal — o no se ejecuta. Cuatro fugas silenciosas que vemos en toda obra argentina.
          </p>
        </div>

        <div className="pain-grid">
          {pains.map(p => (
            <div className="pain-card" key={p.n}>
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

// ---------------- How it works ----------------
function HowItWorks() {
  const steps = [
    { n: "01", icon: <Icon.Mic />, title: "Grabá", body: "Apoyás el dispositivo Plaud en cualquier reunión de obra, visita o llamada. Graba con claridad incluso en entornos ruidosos. Un click." },
    { n: "02", icon: <Icon.Brain />, title: "IA transcribe", body: "En minutos, convierte el audio en texto con identificación de hablantes. Arquitecto, contratista, comitente — todo separado." },
    { n: "03", icon: <Icon.Doc />, title: "Resumen ejecutivo", body: "La IA extrae acuerdos, tareas, decisiones y plazos en un documento limpio. Sin que nadie tenga que escribir una sola línea." },
    { n: "04", icon: <Icon.Send />, title: "Distribuís", body: "WhatsApp, email o tu sistema de gestión. Todo el equipo sabe qué se decidió, quién se comprometió y para cuándo." },
    { n: "05", icon: <Icon.Search />, title: "Trazabilidad", body: "Cada reunión archivada y buscable. En 3 meses, sabés exactamente qué se decidió en cada visita. Cero conflictos sin respaldo." },
  ];
  return (
    <section id="funciona" className="section" data-screen-label="03 Cómo funciona">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="mono-tag">03 · Pipeline</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Tu asistente de obra<br/>que nunca olvida nada.
            </h2>
          </div>
          <p className="lede">
            Plaud graba cada reunión, la transcribe y te entrega un resumen ejecutivo listo para distribuir. Cinco pasos. Cero fricción.
          </p>
        </div>

        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
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
    <section id="features" className="section" data-screen-label="04 Funcionalidades">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="mono-tag">04 · Stack</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Operás como un estudio<br/>3× más grande.
            </h2>
          </div>
          <p className="lede">
            Todo lo que antes requería un asistente, un sistema de gestión y media tarde de redacción — en un solo dispositivo.
          </p>
        </div>

        <div className="features">
          {feats.map((f, i) => (
            <div className="feature" key={i}>
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
    { metric: "Conflictos por comunicación", without: "Frecuentes", with: "Trazables", delta: "Resolución 5×" },
  ];
  return (
    <section id="resultados" className="section" data-screen-label="05 Resultados">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="mono-tag">05 · Impacto</div>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Lo que cambia cuando<br/>usás Plaud en la obra.
            </h2>
          </div>
          <p className="lede">
            Datos de equipos de obra en Argentina durante los primeros 90 días de uso.
          </p>
        </div>

        <div className="results-wrap">
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

// ---------------- CTA ----------------
function CTA() {
  return (
    <section id="cta" className="section cta-section" data-screen-label="06 CTA">
      <div className="container">
        <div className="cta-card">
          <div className="cta-inner">
            <div>
              <div className="mono-tag" style={{ marginBottom: 18 }}>06 · Próximo paso</div>
              <h2>Mostranos una reunión de obra.<br/>Te mostramos el resumen.</h2>
              <p>
                20 minutos. Sin demo genérica — analizamos un caso real de tu obra y te entregamos el primer resumen ejecutivo durante la llamada.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Agendar demo de 20 minutos <Icon.Arrow />
              </a>
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
                <span className="val" style={{ color: 'var(--accent)' }}>● 12 disponibles esta semana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Footer ----------------
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

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    // Recompute accent-soft (12% alpha) from hex
    const hex = tweaks.accent.replace('#', '');
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    document.documentElement.style.setProperty('--accent-soft', `rgba(${r}, ${g}, ${b}, 0.12)`);
    document.documentElement.dataset.density = tweaks.density;
  }, [tweaks.accent, tweaks.density]);

  return (
    <>
      <Nav />
      <FloatingDevice />
      <Hero showWaveform={tweaks.showWaveform} />
      <Problem />
      <HowItWorks />
      <Features />
      <Results />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Acento">
          <TweakColor
            label="Color principal"
            value={tweaks.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#FF5B14', '#FFB800', '#7FE3D0', '#3D8BFD', '#E5484D']}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio
            label="Densidad"
            value={tweaks.density}
            onChange={(v) => setTweak('density', v)}
            options={[
              { value: 'compact', label: 'Compact' },
              { value: 'default', label: 'Default' },
              { value: 'airy', label: 'Airy' },
            ]}
          />
          <TweakToggle
            label="Waveform en hero"
            value={tweaks.showWaveform}
            onChange={(v) => setTweak('showWaveform', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
