import { ImageCarousel } from "./ImageCarousel";

export default function StorePage() {
  const carouselItems = [
    { icon: '🎙️', text: 'Hardware dedicado', sub: 'sin celular en la mesa' },
    { icon: '🔒', text: 'Zero data retention', sub: 'tus datos son tuyos' },
    { icon: '⚡', text: '3 minutos', sub: 'por acta generada' },
    { icon: '🌍', text: '2M+ usuarios', sub: 'en 50 países' },
    { icon: '📋', text: '25 plantillas', sub: 'para construcción' },
    { icon: '🔌', text: 'Offline completo', sub: 'sin internet' },
    { icon: '🎯', text: 'AI Beamforming', sub: '4 MEMS mics' },
    { icon: '✅', text: 'ISO 27001 · HIPAA', sub: 'certificado' },
  ];

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Plaud" className="nav-logo-img" />
          <span className="nav-badge">Argentina · Distribución Oficial</span>
        </a>
        <div className="st-nav-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#productos">Productos</a>
          <a href="#contacto" className="nav-cta">Consultar →</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="st-hero-wrap">
        <div className="st-hero">
          <div className="st-hero-content">
            <div className="hero-eyebrow">Distribución Oficial Argentina · 2 millones de usuarios globales</div>
            <h1 className="st-hero-title">
              Tu próxima reunión importante<br />
              <em>— ¿va a quedar<br />documentada o no?</em>
            </h1>
            <p className="st-hero-sub">
              Plaud captura cada conversación offline, la transcribe con identificación de hablantes
              y genera el acta en 3 minutos. Sin celular en la mesa. Sin internet.
            </p>
            <div className="st-hero-actions">
              <a href="#productos" className="btn-primary">Ver productos →</a>
              <a href="#como-funciona" className="btn-secondary">Cómo funciona</a>
            </div>
            <div className="st-hero-proof">
              {[
                { n: '2M+', l: 'Usuarios globales' },
                { n: '50', l: 'Países' },
                { n: '25', l: 'Plantillas' },
                { n: '3 min', l: 'Por acta generada' },
              ].map((item, i, arr) => (
                <>
                  <div key={item.n} className="st-proof-item">
                    <span className="st-proof-n">{item.n}</span>
                    <span className="st-proof-l">{item.l}</span>
                  </div>
                  {i < arr.length - 1 && <div key={`sep-${i}`} className="st-proof-sep" />}
                </>
              ))}
            </div>
          </div>
          <div className="st-hero-visual">
            <div className="st-device-card">
              <ImageCarousel
                images={[
                  "https://cdn.shopifycdn.net/s/files/1/0940/6680/2981/files/plaud-note-black-11_new-logo.png?v=1767015279&width=300",
                ]}
              />
              <div className="st-device-tag">Dispositivo físico</div>
              <div className="st-device-name">Plaud Note</div>
              <div className="st-device-tagline">
                Se adhiere al celular o se usa solo. Captura todo sin internet.
              </div>
              <div className="st-device-specs">
                {[
                  '30h grabación continua offline',
                  'AI Beamforming — 4 MEMS mics',
                  'Speaker ID — hasta 6 personas',
                  'Compatible iPhone y Android',
                ].map((s) => (
                  <div key={s} className="st-device-spec">
                    <div className="st-device-spec-dot" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="st-device-divider" />
              <div className="st-device-price-block">
                <div className="st-device-price-label">Distribución oficial Argentina</div>
                <a
                  href="https://www.plaud-ai.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-device-cta"
                >
                  Adquirir Plaud Note →
                </a>
                <div className="st-device-note">Onboarding personalizado incluido</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARRUSEL */}
      <div className="carousel-wrap">
        <div className="carousel-track">
          {[...carouselItems, ...carouselItems].map((item, i) => (
            <div key={i} className="carousel-item">
              <span className="carousel-icon">{item.icon}</span>
              <span className="carousel-text">{item.text}</span>
              <span className="carousel-sub">— {item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <div className="st-section-bg" id="como-funciona">
        <section className="section">
          <div className="section-eyebrow">Proceso en 4 pasos</div>
          <h2 className="section-title">Así funciona Plaud en tu operación</h2>
          <p className="section-sub">Sin cambiar tus reuniones. Sin aprender un sistema nuevo.</p>
          <div className="st-flow-grid">
            <div className="st-flow-card">
              <div className="st-flow-label">Paso 01</div>
              <div className="st-flow-title">🎙️ Capturá</div>
              <div className="st-flow-body">
                Reunión en obra, en el auto o con inversores. Offline, sin internet, hasta 30 horas continuas.
              </div>
            </div>
            <div className="st-flow-card">
              <div className="st-flow-label">Paso 02</div>
              <div className="st-flow-title">⚡ Transcribí</div>
              <div className="st-flow-body">
                Al sincronizar: acuerdos, responsables y próximos pasos — en 3 minutos, automático.
              </div>
            </div>
            <div className="st-flow-card">
              <div className="st-flow-label">Paso 03</div>
              <div className="st-flow-title">🔍 Consultá</div>
              <div className="st-flow-body">
                &quot;¿Qué acordó el proveedor sobre la entrega?&quot; → Encontrás la respuesta en segundos.
              </div>
            </div>
            <div className="st-flow-card accent">
              <div className="st-flow-label">Resultado</div>
              <div className="st-flow-title">🏗️ Escalá</div>
              <div className="st-flow-body">
                El expediente conversacional de tu obra queda disponible para todo tu equipo.
              </div>
              <div className="st-iphone-badge">📱 Compatible con iPhone</div>
            </div>
          </div>
        </section>
      </div>

      {/* MÉTRICAS */}
      <section className="section">
        <div className="section-eyebrow">Números que importan</div>
        <h2 className="section-title">Confiado por profesionales en todo el mundo</h2>
        <div className="st-metrics-row">
          {[
            { n: '2M+', l: 'Usuarios activos', d: 'Profesionales en 50 países' },
            { n: '30h', l: 'Grabación continua', d: 'Sin cargar, sin internet' },
            { n: '3 min', l: 'Por acta generada', d: 'Transcripción automática' },
            { n: '99%', l: 'Precisión', d: 'En condiciones de campo' },
          ].map((m) => (
            <div key={m.n} className="st-metric-card">
              <div className="st-metric-n">{m.n}</div>
              <div className="st-metric-l">{m.l}</div>
              <div className="st-metric-d">{m.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEGURIDAD */}
      <div className="st-section-bg" id="seguridad">
        <section className="section">
          <div className="st-seg-grid">
            <div>
              <div className="section-eyebrow">Privacidad garantizada</div>
              <h2 className="section-title">Tus conversaciones son tuyas. Siempre.</h2>
              <p className="st-seg-body">
                Procesamiento local en el dispositivo. Nada se sube sin tu autorización explícita.{' '}
                <strong>Zero data retention</strong> — tus conversaciones no entrenan el modelo de
                IA de ninguna empresa extranjera.
              </p>
              <div className="st-seg-alert">
                Si los médicos en EEUU confían sus conversaciones más sensibles a Plaud (HIPAA),
                tus reuniones con inversores están en buenas manos.
              </div>
            </div>
            <div className="st-certs">
              {[
                { badge: 'ISO 27001', text: 'Gestión de seguridad de la información — estándar internacional auditado.' },
                { badge: 'SOC 2 Type II', text: 'Auditoría de controles de seguridad, disponibilidad y confidencialidad.' },
                { badge: 'HIPAA', text: 'El estándar más exigente del mundo para privacidad de datos de salud.' },
                { badge: 'GDPR', text: 'Cumplimiento con regulación europea de protección de datos.' },
                { badge: 'AES-256', text: 'Cifrado de grado militar para todos los archivos de audio.' },
                { badge: 'TLS 1.3', text: 'Protocolo de transporte seguro para toda sincronización.' },
              ].map((c) => (
                <div key={c.badge} className="st-cert">
                  <span className="st-cert-badge">{c.badge}</span>
                  <span className="st-cert-text">{c.text}</span>
                </div>
              ))}
              <div className="st-cert-footer">Certificaciones verificables en registros públicos</div>
            </div>
          </div>
        </section>
      </div>

      {/* GARANTÍA */}
      <section className="section">
        <div className="st-garantia">
          <div>
            <h2 className="st-garantia-title">30 días de garantía absoluta — sin preguntas.</h2>
            <p className="st-garantia-body">
              Si no recuperás al menos <strong>una negociación que se habría perdido</strong>,
              te devolvemos el setup completo. Sin formularios. Sin justificaciones.
              <br /><br />
              Esto no es una promesa de marketing. Es la garantía que podemos hacer porque
              sabemos exactamente lo que el producto hace en este nicho.
            </p>
            <a
              href="https://www.plaud-ai.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="st-garantia-btn"
            >
              Adquirir con garantía →
            </a>
          </div>
          <div className="st-garantia-badge">
            <div className="st-garantia-n">30</div>
            <div className="st-garantia-l">días sin preguntas</div>
            <div className="st-garantia-d">Devolución total si no ves resultados</div>
            <div className="st-garantia-includes">
              <div className="st-garantia-includes-label">Incluye</div>
              <div className="st-garantia-includes-body">
                Dispositivo · 25 plantillas construcción · Onboarding 30 min con Silvana · Soporte local
              </div>
            </div>
          </div>
        </div>
        <div className="st-onboarding-block">
          <div className="st-onboarding-text">
            🎯 Onboarding personalizado con Silvana Iriondo — configuramos tu Plaud para tu nicho en 30 minutos.
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <div className="st-section-bg" id="productos">
        <section className="section">
          <div className="section-eyebrow">Tienda oficial Argentina</div>
          <h2 className="section-title">Elegí tu Plaud</h2>
          <p className="section-sub">
            Distribuidor oficial con soporte local, garantía y onboarding personalizado.
          </p>
          <div className="products-grid">
            <div className="product-card featured">
                <ImageCarousel
                  images={[
                    "https://cdn.shopifycdn.net/s/files/1/0940/6680/2981/files/plaud-note-black-11_new-logo.png?v=1767015279&width=300",
                  ]}
                />
              <div className="product-badge">Más vendido</div>
              <div className="product-name">Plaud Note</div>
              <div className="product-desc">
                Dispositivo físico magnético. Se adhiere al celular o se usa solo. Captura hasta
                30h continuas sin internet, con identificación de hablantes.
              </div>
              <div className="product-specs">
                {[
                  '30h grabación continua offline',
                  'AI Beamforming — 4 MEMS mics',
                  'Speaker ID — hasta 6 personas',
                  'Compatible iPhone y Android',
                  'App iOS/Android incluida',
                  '25 plantillas construcción',
                ].map((s) => (
                  <div key={s} className="product-spec">
                    <div className="product-spec-dot" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="product-divider" />
              <div className="product-price-block">
                <div className="product-price-label">Precio en Argentina</div>
                <div className="product-price-value">Consultá precio →</div>
                <a
                  href="https://www.plaud-ai.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-btn"
                >
                  Adquirir Plaud Note →
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-badge">Solo app</div>
              <ImageCarousel
                images={[
                  "https://fr.plaud.ai/cdn/shop/files/251218-5_7d5f205e-619a-4713-b01f-b8c12601b898.png?v=1768541715&width=300",
                ]}
              />
              <div className="product-name">Plaud Note App</div>
              <div className="product-desc">
                Solo app, sin hardware. Ideal para reuniones virtuales en Zoom, Meet o Teams.
                Graba directamente desde el celular.
              </div>
              <div className="product-specs">
                {[
                  'Grabación desde micrófono del celular',
                  'Transcripción automática',
                  'Compatible con apps de videollamada',
                  'Resúmenes y próximos pasos',
                  'Acceso a plantillas básicas',
                ].map((s) => (
                  <div key={s} className="product-spec">
                    <div className="product-spec-dot" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="product-divider" />
              <div className="product-price-block">
                <div className="product-price-label">Suscripción mensual</div>
                <div className="product-price-placeholder">Solo app — sin hardware</div>
                <a
                  href="https://www.plaud-ai.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-btn"
                >
                  Ver planes App →
                </a>
              </div>
            </div>

            <div className="product-card">
                            <ImageCarousel
                images={[
                  "https://cdn.shopifycdn.net/s/files/1/0940/6680/2981/files/plaud-notepin-gray-11-new-logo.png?v=1768373466&width=300",
                ]}
              />
              <div className="product-name">Plaud NotePin</div>
              <div className="product-desc">
                Dispositivo wearable de solapa. Captura en reuniones presenciales de manera
                discreta. Próximo lanzamiento en Argentina.
              </div>
              <div className="product-specs">
                {[
                  'Clip de solapa — manos libres',
                  'Captura presencial discreta',
                  'Misma plataforma que Note',
                  'Hasta 20h de batería',
                ].map((s) => (
                  <div key={s} className="product-spec">
                    <div className="product-spec-dot" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="product-divider" />
              <div className="product-price-block">
                <div className="product-price-label">Disponibilidad</div>
                <div className="product-price-placeholder">Próximamente en Argentina</div>
                <a href="mailto:silvana@plaud-ai.com.ar" className="product-btn">
                  Anotarme en lista de espera →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA FINAL */}
      <div className="cta-section" id="contacto">
        <h2 className="cta-title">¿Listo para documentar cada conversación que importa?</h2>
        <p className="cta-sub">
          Distribuidor oficial en Argentina. Soporte local, onboarding personalizado y garantía de resultado de 30 días.
        </p>
        <div className="cta-buttons">
          <a
            href="https://www.plaud-ai.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-primary"
          >
            <span className="cta-btn-tag">Compra directa</span>
            <span className="cta-btn-title">Adquirir Plaud Note →</span>
            <span className="cta-btn-desc">Precio oficial · Entrega en Argentina</span>
          </a>
          <a href="mailto:silvana@plaud-ai.com.ar" className="cta-btn cta-btn-secondary">
            <span className="cta-btn-tag">Consultoría</span>
            <span className="cta-btn-title">Hablar con Silvana →</span>
            <span className="cta-btn-desc">Demo personalizada · Plaud Team · KÔRE IA</span>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          <strong>Plaud Argentina</strong> — Distribución Oficial &amp; Embajadora Oficial
        </div>
        <div className="footer-right">
          Silvana Iriondo · +54 9 351 267-3489 · plaud-ai.com.ar
        </div>
      </footer>
    </>
  );
}
