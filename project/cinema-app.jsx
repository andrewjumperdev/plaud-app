// Plaud AR — CINEMATIC SCROLL
// One continuous film. GSAP ScrollTrigger pins the stage, master timeline
// scrubs through 6 acts. Device is the protagonist on every act.

const { useState, useEffect, useRef } = React;

const PLAUD_IMG = "https://cdn.shopifycdn.net/s/files/1/0918/0171/5051/files/Plaud_Note_Pro-front-black_74a97c88-375f-4daa-9fc0-728d21b74fd9.webp?v=1766042075&width=1600";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cursor": true,
  "specular": 0.6
}/*EDITMODE-END*/;

// ============ Icons (used in step rail) ============
const Icon = {
  Mic: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>),
};

// ============ Cursor ============
function CustomCursor({ enabled }) {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    if (!enabled || window.matchMedia('(max-width: 960px)').matches) return;
    let mx = innerWidth/2, my = innerHeight/2, gx = mx, gy = my, raf;
    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    const tick = () => {
      gx += (mx-gx)*0.18; gy += (my-gy)*0.18;
      if (glowRef.current) glowRef.current.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e) => {
      setHovering(!!e.target.closest('.btn, a, button, .magnetic, .act-tick, .metric-card, .step-row, .holo'));
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
  return (<>
    <div ref={dotRef} className="cursor-dot" />
    <div ref={glowRef} className={`cursor-glow ${hovering ? 'hovering':''}`} />
  </>);
}

// ============ Nav with progress ============
function Nav({ progress, activeAct }) {
  const acts = ['Hero','Problema','Revelación','Pipeline','Resultados','Decisión'];
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
            <a key={i} href={`#act-${i}`} className={activeAct === i ? 'active' : ''}>{label}</a>
          ))}
        </div>
        <a href="#cta" className="btn btn-primary" style={{padding:'10px 18px',fontSize:13}}>
          Demo
        </a>
      </div>
      <div className="nav-progress" style={{ width: `${progress * 100}%` }} />
    </nav>
  );
}

// ============ Act indicator (right edge dots) ============
function ActIndicator({ activeAct }) {
  const labels = ['01 Apertura','02 Problema','03 Revelación','04 Pipeline','05 Resultados','06 Voz / Cierre'];
  return (
    <div className="act-indicator">
      {labels.map((l, i) => (
        <div key={i} className={`act-tick ${activeAct === i ? 'active' : ''}`}
             onClick={() => scrollToAct(i)}>
          <span className="lbl">{l}</span>
          <span className="dot" />
        </div>
      ))}
    </div>
  );
}

function scrollToAct(i) {
  const stage = document.querySelector('.cinema-stage');
  if (!stage) return;
  const total = stage.scrollHeight - innerHeight;
  // 6 acts mapped to scroll positions
  const t = i / 5;
  const target = stage.offsetTop + total * t;
  window.scrollTo({ top: target, behavior: 'smooth' });
}

// ============ Device (front + back faces, ring, aura, telemetry) ============
function Device() {
  return (
    <div className="cinema-device" id="cinemaDevice">
      <div className="face face-front">
        <img src={PLAUD_IMG} alt="Plaud Note Pro" draggable={false} />
      </div>
      <div className="face face-back">
        <div className="row-h">
          <span className="back-id">PLAUD NOTE PRO</span>
          <span style={{color:'var(--fg-mute)'}}>v3 · AR</span>
        </div>
        <div>
          <div className="back-headline">Segundo cerebro<br/>de obra.</div>
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
          Tu obra.<br/>
          <span className="gradient-text">Documentada</span> por IA.
        </h2>
        <p className="act-lede">
          <b>Plaud</b> graba, transcribe y resume cada reunión de obra en segundos. Tu equipo ejecuta — sin errores, sin olvidos, sin llamadas de repetición.
        </p>
        <div className="act-cta-row">
          <a href="#cta" className="btn btn-primary btn-lg">Agendar demo de 20 min →</a>
          <a href="#act-2" className="btn btn-ghost btn-lg">Ver cómo funciona</a>
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
          Lo que <span className="serif-em">no</span> queda<br/>
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
          Cada palabra.<br/>
          Cada decisión.<br/>
          <span className="gradient-text">Capturada.</span>
        </h2>
        <p className="act-lede">
          Un dispositivo del tamaño de una tarjeta. Una IA entrenada en el rioplatense. Tu obra deja de ser un agujero negro de información — y empieza a hablarte.
        </p>
        <div className="act-meta-row" style={{marginTop:16}}>
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
          De la palabra<br/>
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
          Lo que cambia<br/>
          en los primeros <span className="gradient-text">90 días</span>.
        </h2>
        <p className="act-lede">
          Datos agregados de equipos de obra en Argentina usando Plaud.
        </p>
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

      {/* ACT 5 — TESTIMONY + CTA TEASE */}
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
        <div className="act-cta-row" style={{marginTop:42}}>
          <a href="#cta" className="btn btn-primary btn-lg">Agendar demo de 20 min →</a>
        </div>
      </div>

      {/* mobile-only inline device */}
      <div className="mobile-device">
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
        <div><span className="who">Arq. Martín:</span> Necesito el revoque grueso para el viernes.</div>
      </div>
      <div className="holo ai h2" data-holo="1">
        <div className="label">IA · Acuerdo detectado</div>
        <div>Tarea: Revoque grueso<br/>Plazo: Viernes<br/>Responsable: Contratista</div>
      </div>
      <div className="holo h3" data-holo="2">
        <div className="label">Resumen ejecutivo</div>
        <div>3 acuerdos<br/>2 plazos<br/>1 cotización pendiente</div>
      </div>
      <div className="holo ai h4" data-holo="3">
        <div className="label">Distribución</div>
        <div>→ WhatsApp Equipo<br/>→ Notion Proyecto<br/>→ Email Comitente</div>
      </div>
    </>
  );
}

// ============ Master Cinema (GSAP ScrollTrigger) ============
function Cinema({ specular }) {
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeAct, setActiveAct] = useState(0);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    if (window.matchMedia('(max-width: 960px)').matches) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const stage = stageRef.current;
    const device = document.querySelector('#cinemaDevice');
    const ring = document.querySelector('.cinema-ring');
    const aura = document.querySelector('.cinema-aura');
    const telemetry = document.querySelector('.cinema-telemetry');
    const waveform = document.querySelector('.cinema-waveform');
    const acts = gsap.utils.toArray('.act');
    const holos = gsap.utils.toArray('.holo');

    if (!stage || !device || acts.length === 0) return;

    // Initial state — device close, slow float
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
    // MASTER TIMELINE — scrubs across the entire stage height
    // 6 acts × 1 viewport each = 6 acts of scroll
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

    // helper to cross-fade acts
    const fadeActs = (showIdx, dur = 0.4) => {
      acts.forEach((a, i) => {
        tl.to(a, {
          opacity: i === showIdx ? 1 : 0,
          y: i === showIdx ? 0 : (i < showIdx ? -40 : 40),
          duration: dur,
          ease: 'power2.inOut',
        }, '<');
      });
    };

    // ---------- Act 0 → 1 : Hero → Problem ----------
    tl.addLabel('act0', 0);
    // Device floats subtly, waveform fades in
    tl.to(waveform, { '--wave': 1, duration: 0.3, ease: 'power2.out' }, 'act0+=0.05');
    tl.to(device, {
      rotationY: 30,
      rotationX: -6,
      scale: 1.05,
      x: '+=20',
      duration: 1,
      ease: 'power1.inOut',
    }, 'act0');
    tl.to(ring, { '--ring-int': 0.4, '--ring-rot': '+=180', duration: 1 }, 'act0');
    tl.to(aura, { '--aura': 0.7, duration: 1 }, 'act0');

    // Transition to act 1
    tl.addLabel('toAct1', 0.85);
    tl.to(waveform, { '--wave': 0, duration: 0.2 }, 'toAct1');
    fadeActs(1, 0.3);
    tl.to(device, {
      rotationY: 180,           // FLIP — show back side
      rotationX: 8,
      scale: 0.95,
      x: '+=30',
      y: '-=10',
      duration: 1.2,
      ease: 'power2.inOut',
    }, 'toAct1');
    tl.to(telemetry, { '--telemetry': 0.85, duration: 0.6 }, 'toAct1+=0.4');

    // ---------- Act 1 → 2 : Problem → REVELATION (climax) ----------
    tl.addLabel('act1', '+=0.6');
    tl.to(device, {
      rotationY: 360,           // continue spin to face front again
      rotationX: -4,
      scale: 1.0,
      duration: 1,
      ease: 'power1.inOut',
    }, 'act1');

    tl.addLabel('toReveal', '+=0.3');
    fadeActs(2, 0.4);
    tl.to(telemetry, { '--telemetry': 0, duration: 0.3 }, 'toReveal');

    // DRAMATIC REVEAL — device scales up, performs cinematic flip
    tl.to(device, {
      x: 0, y: 0,
      scale: 1.5,
      rotationY: 540,           // 1.5 spins
      rotationX: 0,
      rotationZ: 0,
      duration: 1.8,
      ease: 'power3.inOut',
    }, 'toReveal');
    tl.to(aura, { '--aura': 1.3, duration: 1.5 }, 'toReveal');
    tl.to(ring, { '--ring-int': 0.9, '--ring-blur': 80, '--ring-rot': '+=540', duration: 1.5 }, 'toReveal');

    // Holo panels emerge
    tl.to(holos[0], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=0.6');
    tl.to(holos[1], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=0.8');
    tl.to(holos[2], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=1.0');
    tl.to(holos[3], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' }, 'toReveal+=1.2');

    // Hold reveal a beat
    tl.to(device, {
      rotationY: 720,
      duration: 0.8,
      ease: 'none',
    }, '+=0.2');

    // ---------- Reveal → Act 3 : Pipeline ----------
    tl.addLabel('toAct3', '+=0.3');
    fadeActs(3, 0.4);
    tl.to(holos, { opacity: 0, scale: 0.85, y: -20, duration: 0.5, stagger: 0.05 }, 'toAct3');
    tl.to(device, {
      scale: 0.85,
      rotationY: 900,           // another spin
      rotationX: -10,
      x: '+=40',
      duration: 1.2,
      ease: 'power2.inOut',
    }, 'toAct3');
    tl.to(aura, { '--aura': 0.55, duration: 0.6 }, 'toAct3');
    tl.to(ring, { '--ring-int': 0.3, '--ring-blur': 30, duration: 0.6 }, 'toAct3');
    tl.to(telemetry, { '--telemetry': 1, duration: 0.5 }, 'toAct3+=0.3');

    // ---------- Act 3 → 4 : Pipeline → Results ----------
    tl.addLabel('toAct4', '+=0.7');
    fadeActs(4, 0.4);
    tl.to(device, {
      scale: 0.9,
      rotationY: 1080,
      rotationX: 6,
      x: '+=20',
      y: '+=20',
      duration: 1.1,
      ease: 'power2.inOut',
    }, 'toAct4');
    tl.to(aura, { '--aura': 0.65, duration: 0.5 }, 'toAct4');

    // ---------- Act 4 → 5 : Results → Testimony ----------
    tl.addLabel('toAct5', '+=0.7');
    fadeActs(5, 0.4);
    // Final beat — device faces user
    tl.to(device, {
      scale: 1.15,
      rotationY: 1440,          // ends at 0 rotation visually (multiple of 360)
      rotationX: 0,
      rotationZ: 0,
      x: 0,
      y: 0,
      duration: 1.3,
      ease: 'power3.inOut',
    }, 'toAct5');
    tl.to(aura, { '--aura': 1.0, duration: 0.8 }, 'toAct5');
    tl.to(ring, { '--ring-int': 0.7, '--ring-blur': 60, duration: 0.8 }, 'toAct5');
    tl.to(telemetry, { '--telemetry': 0.3, duration: 0.5 }, 'toAct5');

    // Specular sweep — continuous independent rotation animation tied to scroll velocity
    ScrollTrigger.create({
      trigger: stage,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (!device) return;
        const v = self.getVelocity() / 1000;
        const intensity = Math.min(1, Math.abs(v) * 0.5 + specular * 0.5);
        device.style.setProperty('--specular', intensity);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
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
                {Array.from({length: 56}).map((_, i) => (
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

// ============ Final CTA (after pinned stage) ============
function FinalCTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-card">
        <div className="cta-inner">
          <div>
            <div className="mono-tag" style={{ marginBottom: 20 }}>Próximo paso</div>
            <h2>Mostranos una<br/>reunión de obra.<br/><span className="gradient-text">Te mostramos</span><br/>el resumen.</h2>
            <p>20 minutos. Sin demo genérica — analizamos un caso real de tu obra y te entregamos el primer resumen ejecutivo durante la llamada.</p>
            <a href="#" className="btn btn-primary btn-lg">Agendar demo de 20 minutos →</a>
          </div>
          <div className="cta-meta-list">
            <div className="row"><span className="k">Duración</span><span className="v">20 minutos · Google Meet</span></div>
            <div className="row"><span className="k">Costo</span><span className="v">Sin costo · sin tarjeta</span></div>
            <div className="row"><span className="k">Para</span><span className="v">Estudios, contratistas y desarrolladores en Argentina</span></div>
            <div className="row"><span className="k">Devuelve</span><span className="v">Resumen ejecutivo de tu reunión real</span></div>
            <div className="row"><span className="k">Cupos</span><span className="v" style={{color:'var(--amplify-green)'}}>● 12 disponibles esta semana</span></div>
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
function App() {
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
          <TweakToggle label="Cursor custom" value={tweaks.cursor} onChange={(v) => setTweak('cursor', v)} />
          <TweakSlider label="Brillo especular base" min={0} max={1} step={0.05} value={tweaks.specular} onChange={(v) => setTweak('specular', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
