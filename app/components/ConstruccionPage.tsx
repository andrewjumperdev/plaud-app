/* eslint-disable @next/next/no-img-element */

import NicheClassifier from "./NicheClassifier";
import ChangeNicheLink from "./ChangeNicheLink";
import PlantillasPersonalizadas from "./PlantillasPersonalizadas";
import styles from "./ConstruccionPage.module.css";

const certs = [
  { img: "/store/cert-iso27001.png", alt: "ISO 27001", caption: "Gestión de seguridad de la información" },
  { img: "/store/cert-iso27701.png", alt: "ISO 27701", caption: "Gestión de privacidad de datos" },
  { img: "/store/cert-soc2.png", alt: "SOC 2", caption: "Auditoría independiente de controles" },
  { img: "/store/cert-gdpr.png", alt: "GDPR", caption: "Regulación europea de datos" },
  { img: "/store/cert-hipaa.png", alt: "HIPAA", caption: "Estándar de salud de EE.UU." },
  { img: "/store/cert-en18031.png", alt: "EN 18031", caption: "Ciberseguridad de comunicación inalámbrica" },
  { img: "/store/cert-tuv.png", alt: "TUV", caption: "Dispositivo probado y certificado en fábrica" },
];

export default function ConstruccionPage() {
  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        <a href="/" className={styles["nav-logo"]}>
          <img src="/logo.webp" alt="Plaud" />
          <span className={styles["nav-badge"]}>Argentina · Canal Oficial</span>
        </a>
        <div className={styles["nav-links"]}>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#equipo">Plaud Team</a>
          <a href="/plantillas-personalizadas?niche=construccion">Plantillas</a>
          <a href="#adquirir" className={styles["nav-cta"]} style={{ color: "#fff" }}>
            Adquirir →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className={styles["hero-wrap"]}>
        <div className={styles.hero}>
          <div>
            <div className={styles["hero-eyebrow"]}>For Business Intelligence · Construcción & Desarrollo Inmobiliario</div>
            <h1 className={styles["hero-title"]}>En construcción, cada decisión verbal tiene precio.</h1>
            <div className={styles["hero-subtitle-large"]}>
              La bitácora de obra es tu activo de infraestructura documental para el crecimiento de tu negocio.
            </div>
            <p className={styles["hero-sub"]}>
              Reuniones de obra · Presentación a compradores · Negociación con inversores · Proveedores y contratistas · Comité de costos
            </p>
            <div className={styles["hero-actions"]}>
              <a href="#adquirir" className={styles["btn-primary"]}>Adquirir Plaud para mis reuniones</a>
              <a href="#equipo" className={styles["btn-secondary"]}>¿Tenés equipo? Hablemos de Plaud Team</a>
            </div>
            <p className={styles["hero-question"]}>
              ¿Listo para liberar el tiempo de escribir actas a mano — sin perder nunca más lo que acordaste, ni pagar sobrecostos por cambios que nadie dejó por escrito?
            </p>
            <div className={styles["hero-proof"]}>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>2M+</div>
                <div className={styles["hero-proof-l"]}>Profesionales globales</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>170+</div>
                <div className={styles["hero-proof-l"]}>Países</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>25</div>
                <div className={styles["hero-proof-l"]}>Plantillas construcción y desarrollo inmobiliario</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>3 min</div>
                <div className={styles["hero-proof-l"]}>Por documento generado</div>
              </div>
            </div>
          </div>
          <div className={styles["hero-visual"]}>
            <div className={styles["device-media-card"]}>
              {/* placeholder: reemplazar por public/store/plaud-note-unboxing.mp4 cuando esté disponible */}
              <video className={styles["device-video"]} autoPlay muted loop playsInline>
                <source src="/store/video-hero.mp4" type="video/mp4" />
              </video>
              <div className={styles["device-body"]}>
                <div className={styles["device-tag"]}>Canal Oficial 🇦🇷</div>
                <div className={styles["device-name"]}>Plaud Note</div>
                <div className={styles["device-tagline"]}>
                  Captura reuniones de obra, con inversores y proveedores — offline, con identificación de hablantes.
                </div>
                <div className={styles["device-specs"]}>
                  <div className={styles["device-spec"]}><div className={styles["device-spec-dot"]}></div>4 micrófonos MEMS · AI Beamforming</div>
                  <div className={styles["device-spec"]}><div className={styles["device-spec-dot"]}></div>Speaker ID — quién dijo qué</div>
                  <div className={styles["device-spec"]}><div className={styles["device-spec-dot"]}></div>Offline 100% · zero data retention</div>
                  <div className={styles["device-spec"]}><div className={styles["device-spec-dot"]}></div>Compatible con iPhone</div>
                </div>
                <div className={styles["device-divider"]}></div>
                <div className={styles["device-price-block"]}>
                  <div className={styles["device-price-label"]}>Canal Oficial Argentina</div>
                  <a
                    href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro%20para%20mi%20constructora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["device-cta"]}
                  >
                    Adquirir →
                  </a>
                  <div className={styles["device-note"]}>Soporte local · Garantía · Envío a todo el país</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["amplify-strip"]}>
        <span className={styles.ah}>AMPLIFY HUMAN</span>
        <span className={styles.i}>INTELLIGENCE</span>
      </div>

      {/* CONFIDENCIALIDAD */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["confid-strip"]}>
          <div className={styles["confid-strip-icon"]}>🔒</div>
          <div className={styles["confid-strip-text"]}>
            <strong>Tus conversaciones son tuyas. Siempre.</strong> Procesamiento local en el dispositivo. Nada se sube sin tu autorización explícita. Si los médicos en EE.UU. confían sus conversaciones más sensibles a Plaud, tus reuniones con inversores son menos complejas que las de ellos. <a href="#seguridad" style={{ color: "var(--black)", fontWeight: 700 }}>Ver certificaciones ↓</a>
          </div>
        </div>
      </div>

      {/* LOS 4 PROBLEMAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Los 4 problemas que nadie nombra</div>
        <h2 className={styles["section-title"]}>¿Te resulta familiar alguna de estas situaciones?</h2>
        <p className={styles["section-sub"]}>
          No es falta de organización. Es que el cerebro humano no puede interactuar, decidir y documentar con precisión al mismo tiempo.
        </p>
        <div className={styles["pain-grid"]}>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Obra · Subcontratistas · Proveedores</div>
            <div className={styles["pain-title"]}>La decisión verbal que nadie registró</div>
            <div className={styles["pain-body"]}>
              El subcontratista acuerda una entrega para el viernes. El proveedor confirma el precio. Nadie lo escribe en el momento — y cuando el viernes pasa sin entrega, hay que reconstruir de memoria quién dijo qué, mientras la obra espera.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: el acta queda lista en 3 minutos, con cada responsable identificado — el acuerdo se registra en el momento, no se reconstruye después.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>→ Resuelto en el paso 01 · Captura (Activo base)</div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Comité financiero · Control de costos</div>
            <div className={styles["pain-title"]}>El desvío presupuestario sin causa trazable</div>
            <div className={styles["pain-body"]}>
              El comité muestra un desvío del 15% al cierre del mes. La causa está en decisiones verbales de los últimos 30 días. Sin registro, se paga, se absorbe, y se repite el mes siguiente.
            </div>
            <div className={styles["pain-win"]}>Con Plaud: el desvío tiene nombre, fecha y origen — no es sorpresa del balance.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>→ Resuelto en el paso 02 · Estructura (Motor)</div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Inversores · Negociación · Seguimiento</div>
            <div className={styles["pain-title"]}>El compromiso con el inversor que cada parte recuerda diferente</div>
            <div className={styles["pain-body"]}>
              El retorno comprometido era 18%, o "entre 15 y 18%". El plazo era diciembre, o "estimado primer trimestre". No es mala fe — es memoria humana sobre conversaciones no documentadas.
            </div>
            <div className={styles["pain-win"]}>Con Plaud: cada palabra acordada tiene timestamp. La negociación no depende de la memoria de nadie.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>→ Resuelto en el paso 03 · Organiza (Vía)</div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Rotación de equipos · Escalabilidad</div>
            <div className={styles["pain-title"]}>La inteligencia de la obra que se va con quien se va</div>
            <div className={styles["pain-body"]}>
              El director de obra renuncia. El nuevo necesita entender en horas lo que el anterior construyó en 6 meses. Sin sistema, eso tarda semanas y nunca es completo.
            </div>
            <div className={styles["pain-win"]}>Con Plaud: el nuevo accede a la bitácora de obra completa desde el día uno.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>→ Resuelto en el paso 04 · Automatiza (Velocidad)</div>
          </div>
        </div>
      </div>

      {/* CLASIFICADOR */}
      <NicheClassifier
        q1Title="¿Para cuántas personas?"
        q1Options={[
          { value: "solo", label: "Solo para mí" },
          { value: "equipo", label: "Para 2 o más personas de la constructora" },
        ]}
        q2Title="¿Usás algún sistema de gestión de obra actualmente?"
        q2Options={[
          { value: "si", label: "Sí (ERP, planillas u otro sistema)" },
          { value: "no", label: "No — manejo todo por WhatsApp / notas" },
          { value: "parcial", label: "Tengo algo pero no lo uso bien" },
        ]}
        resultEquipo={<>Con equipo en la obra, lo que te conviene es <a href="#equipo">Plaud Team →</a> — workspace institucional con notas privadas por defecto.</>}
        resultIndividual={<>Para uso individual, tu opción es <a href="#adquirir">Adquirir Plaud Note →</a> con las 25 plantillas de construcción y desarrollo inmobiliario incluidas.</>}
      />

      {/* MECANISMO UNICO */}
      <div className={styles["mech-band"]}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles["section-eyebrow"]}>Por qué Plaud puede hacer esto</div>
          <h2 className={styles["section-title"]} style={{ fontSize: 32 }}>El mecanismo detrás de la infraestructura documental</h2>
          <p className={styles["section-sub"]}>No es una app más de transcripción. Es hardware propio resolviendo lo que ninguna app puede resolver por software.</p>
          <div className={styles["mech-grid"]}>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>VCS · Vibration Conduction Sensor</div>
              <div className={styles["mech-title"]}>iOS bloquea la grabación de llamadas. No es un bug — es una decisión de Apple.</div>
              <div className={styles["mech-body"]}>Ninguna app puede acceder al audio de una llamada de iPhone por software. Plaud lo resuelve con un sensor físico que mide la vibración del teléfono durante la llamada y la convierte en audio con fidelidad — un proceso externo al sistema operativo que iOS no puede bloquear.</div>
              <div className={styles["mech-tag"]}>🍎 El único sistema que graba llamadas en iPhone</div>
            </div>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>Tres motores de IA en simultáneo</div>
              <div className={styles["mech-title"]}>GPT-5, Claude Sonnet 4 y Gemini 2.5 Pro procesan cada conversación al mismo tiempo.</div>
              <div className={styles["mech-body"]}>Plaud no elige un modelo por reunión: los tres procesan el audio en paralelo y el sistema sintetiza el mejor resultado posible. Para acceder a los tres, Plaud debió pasar los controles de seguridad y compliance de OpenAI, Anthropic y Google — no es un argumento de marketing, es una validación técnica.</div>
              <div className={styles["mech-tag"]}>🧠 Único dispositivo con acceso simultáneo a los tres</div>
            </div>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>Mapa Mental automático</div>
              <div className={styles["mech-title"]}>Cada reunión de obra se convierte en un mapa visual de decisiones, no solo en una transcripción.</div>
              <div className={styles["mech-body"]}>Terminada la reunión, Plaud genera un Mapa Mental de lo decidido y cómo se conecta — para que nadie discuta después qué se acordó realmente en el obrador.</div>
              <div className={styles["mech-tag"]}>🧭 Las decisiones, de un vistazo</div>
            </div>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>Entrada multimodal</div>
              <div className={styles["mech-title"]}>Plaud no solo graba la reunión de obra. También registra lo que fotografiás.</div>
              <div className={styles["mech-body"]}>Un plano modificado, un avance, un defecto — Plaud suma esas fotos como contexto junto con el audio. El resumen final no es solo lo que se dijo, es también lo que se vio en la obra.</div>
              <div className={styles["mech-tag"]}>📎 Audio + plano/foto, en un mismo resumen</div>
            </div>
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className={styles.section} id="como-funciona" style={{ paddingTop: 64 }}>
        <div className={styles["section-eyebrow"]}>Cómo funciona Plaud</div>
        <h2 className={styles["section-title"]}>
          Plaud cambia eso — sin
          <br />
          agregar trabajo extra
        </h2>
        <div style={{ background: "var(--gray-100)", borderLeft: "3px solid var(--blue)", borderRadius: 8, padding: "20px 24px", margin: "20px 0 32px", maxWidth: 680 }}>
          <p style={{ fontSize: 19, fontWeight: 700, color: "var(--black)", lineHeight: 1.4, marginBottom: 8 }}>
            El cerebro no es la inteligencia artificial. Es el director de obra.
          </p>
          <p style={{ fontSize: 14, color: "var(--gray-700)", lineHeight: 1.6 }}>
            Plaud es el asistente ejecutivo de bitácora: precisión, optimización del tiempo y liberación de carga operativa — para que el director de obra invierta su tiempo en decisiones, no en escribir actas a mano.
          </p>
        </div>
        <div className={styles["flow-grid"]}>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🎙️</div>
              <div>
                <div className={styles["flow-card-label"]}>01 · Captura (Activo base)</div>
                <div className={styles["flow-card-title"]}>En obra, en el auto, con inversores</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Elimina la carga operativa de escribir actas a mano: grabación offline, sin internet, hasta 30 horas continuas — en la visita de obra, en el auto o en la reunión con inversores. El tiempo que libera es el activo base de todo lo que sigue.</div>
            <div className={styles["iphone-badge"]}>🍎 Único sistema que funciona con iPhone</div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>⚡</div>
              <div>
                <div className={styles["flow-card-label"]}>02 · Estructura (Motor)</div>
                <div className={styles["flow-card-title"]}>Al sincronizar, se convierte en bitácora</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Tres motores de IA en simultáneo identifican acuerdos, responsables y próximos pasos — en 3 minutos, sin intervención manual. Este es el motor que convierte el tiempo liberado en material utilizable: 25 plantillas específicas para construcción y desarrollo inmobiliario.</div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🔍</div>
              <div>
                <div className={styles["flow-card-label"]}>03 · Organiza (Vía)</div>
                <div className={styles["flow-card-title"]}>Cada visita entra al sistema de conocimiento de la obra</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Las transcripciones se organizan por obra, fecha y responsable, buscables por palabra clave. "¿Qué se acordó sobre el plazo del proveedor?" → respuesta en segundos, con la fuente exacta — la vía que lleva lo estructurado hacia tu activo de infraestructura documental.</div>
          </div>
          <div className={`${styles["flow-card"]} ${styles.accent}`}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🏗️</div>
              <div>
                <div className={styles["flow-card-label"]}>04 · Automatiza (Velocidad)</div>
                <div className={styles["flow-card-title"]}>Bitácora de obra del equipo</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Disponible para todo tu equipo, sin intermediarios. Configurás una vez, y todo el equipo invierte su tiempo en decisiones, no en tareas repetidas.</div>
          </div>
        </div>
      </div>

      {/* PLANTILLAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Templates calibrados para el sector</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 30 }}>25 plantillas específicas para construcción y desarrollo inmobiliario</h2>
        <p className={styles["section-sub"]}>
          4 áreas de gestión · listas desde el día 1 · vocabulario del sector. Único canal oficial con templates calibrados por sector. Estas 25 salen de un Sistema de Diagnóstico único, que ajusta la biblioteca a tu obra o tu proyecto exacto.
        </p>
        <div className={styles["plantillas-grid"]}>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Negociación Inversores</div>
              <div className={styles["plantilla-n"]}>5</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Presentación de proyecto<br />Compromisos de retorno<br />Seguimiento de cierre<br />Acta de acuerdos
            </div>
          </div>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Reunión de Obra</div>
              <div className={styles["plantilla-n"]}>6</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Decisiones en campo<br />Modificaciones de plano<br />Acuerdos con subcontratistas<br />Control de avance semanal
            </div>
          </div>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Proveedores y Logística</div>
              <div className={styles["plantilla-n"]}>5</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Confirmación de entrega<br />Negociación de precio<br />Adicionales verbales<br />Resolución de conflictos
            </div>
          </div>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Gestión Financiera y Compradores</div>
              <div className={styles["plantilla-n"]}>9</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Comité de avance y costos<br />Presentación a compradores<br />Cierre de escritura<br />Coordinación con banco hipotecario
            </div>
          </div>
        </div>
      </div>

      {/* SEGURIDAD */}
      <section className={styles.section} id="seguridad" style={{ background: "var(--gray-100)", maxWidth: "100%", padding: "80px 0" }}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles["section-eyebrow"]}>Confidencialidad garantizada</div>
          <h2 className={styles["section-title"]}>
            Tus conversaciones son tuyas.
            <br />
            Siempre.
          </h2>
          <div className={styles["seg-grid"]}>
            <div>
              <p className={styles["seg-body"]}>
                Procesamiento local en el dispositivo. Nada se sube sin tu autorización explícita. <strong>Zero data retention</strong> — tus conversaciones no entrenan el modelo de IA de ninguna empresa extranjera.
              </p>
              <p className={styles["seg-body"]} style={{ marginTop: 14 }}>
                Cumplimiento con la Ley 25.326 de Protección de Datos Personales de Argentina.
              </p>
              <div className={styles["seg-alert"]}>
                ⚠️ Una app gratuita que transcribe tu reunión con un inversor puede estar almacenando esa conversación en servidores sin certificación alguna — y vos no lo sabés.
              </div>
            </div>
            <div>
              <div className={styles["seg-cert-grid"]}>
                {certs.map((c) => (
                  <div key={c.alt} className={styles["seg-cert-card"]}>
                    <img src={c.img} alt={c.alt} />
                    <div className={styles["seg-cert-caption"]}>{c.caption}</div>
                  </div>
                ))}
              </div>
              <div className={styles["cert-footer"]}>Procesamiento local · Zero data retention · Ley 25.326 Argentina</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANTILLAS PERSONALIZADAS */}
      <PlantillasPersonalizadas niche="construccion" rubro="tu constructora" />

      {/* OFERTA */}
      <div className={styles.section} id="adquirir">
        <div className={styles["section-eyebrow"]}>Lo que incluye tu Plaud</div>
        <h2 className={styles["section-title"]}>
          Todo lo que necesitás desde
          <br />
          el primer día
        </h2>
        <div className={styles["empresas-features"]} style={{ marginTop: 32, maxWidth: 640 }}>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>Dispositivo Plaud Note</div>
              <div className={styles["empresas-feature-desc"]}>Captura hasta 30 horas continuas, AI Beamforming, 4 MEMS mics. Sin necesidad de usar el celular, notebook o PC.</div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>25 plantillas específicas para construcción y desarrollo inmobiliario</div>
              <div className={styles["empresas-feature-desc"]}>Negociación de inversores · reunión de obra · acuerdos con proveedores · control de costos · presentación a compradores.</div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>Guía de configuración inicial</div>
              <div className={styles["empresas-feature-desc"]}>Puesta en marcha guiada por WhatsApp con el equipo de Plaud Argentina.</div>
            </div>
          </div>
        </div>
        <div className={styles["hero-actions"]} style={{ marginTop: 32 }}>
          <a
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20adquirir%20Plaud%20para%20mi%20constructora"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["btn-primary"]}
          >
            Adquirir Plaud →
          </a>
          <a href="#equipo" className={styles["btn-secondary"]}>¿Tenés equipo? Hablemos de Plaud Team</a>
        </div>
      </div>

      {/* GARANTIA */}
      <div className={styles.section}>
        <div className={styles.garantia}>
          <div>
            <h2 className={styles["garantia-title"]}>
              30 días.
              <br />
              Sin preguntas.
            </h2>
            <p className={styles["garantia-body"]} style={{ marginTop: 12 }}>
              Si no recuperás al menos <strong>una negociación que se habría perdido</strong>, te devolvemos el setup completo. Esto no es una promesa de marketing. Es la garantía que podemos hacer porque sabemos lo que el producto hace en este sector.
            </p>
            <a
              href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20empezar%20con%20Plaud%20con%20garant%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["garantia-btn"]}
            >
              Empezar sin riesgo →
            </a>
          </div>
          <div className={styles["garantia-badge"]}>
            <div className={styles["garantia-n"]}>30</div>
            <div className={styles["garantia-l"]}>días de devolución total</div>
            <div className={styles["garantia-d"]}>Sin formularios · Sin justificaciones · Sin preguntas.</div>
            <div className={styles["garantia-includes"]}>
              <div className={styles["garantia-includes-label"]}>Además incluye</div>
              <div className={styles["garantia-includes-body"]}>
                ✓ Guía de configuración inicial<br />✓ 25 plantillas de construcción y desarrollo inmobiliario<br />✓ Soporte técnico de por vida<br />✓ Envío a todo el país
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLAUD TEAM */}
      <section className={styles.section} id="equipo">
        <div className={styles["section-eyebrow"]}>Plaud para Empresas · Constructoras y desarrolladoras inmobiliarias</div>
        <h2 className={styles["section-title"]}>
          La inteligencia de la obra,
          <br />
          centralizada
        </h2>
        <div className={styles["empresas-grid"]}>
          <div>
            <p className={styles["section-sub"]} style={{ fontWeight: 700, fontSize: 19, color: "var(--black)", maxWidth: "none" }}>
              ¿Tu equipo de obra toma decisiones en campo de las que vos te enterás 3 días después — o nunca?
            </p>
            <div className={styles["empresas-features"]}>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🏗️</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Cada reunión de obra queda capturada</div>
                  <div className={styles["empresas-feature-desc"]}>Por quien estuvo presente, sin que nadie tenga que reportar manualmente.</div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>👁️</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Vos ves el resumen sin haber estado ahí</div>
                  <div className={styles["empresas-feature-desc"]}>Workspace centralizado con visibilidad institucional.</div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🔐</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Notas privadas por defecto</div>
                  <div className={styles["empresas-feature-desc"]}>Cada miembro del equipo comparte lo que elige — pero los acuerdos de la obra no se van con él.</div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🔗</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Consultar por integraciones disponibles</div>
                  <div className={styles["empresas-feature-desc"]}>Automatizá el flujo de cada reunión para que el equipo trabaje con mayor rapidez.</div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🎓</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Onboarding personalizado</div>
                  <div className={styles["empresas-feature-desc"]}>Configuración institucional completa para la constructora o el estudio, a cargo de un especialista del equipo.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["empresas-card"]}>
            <div className={styles["empresas-stat"]}>
              <div className={styles["empresas-stat-n"]}>2M+</div>
              <div className={styles["empresas-stat-l"]}>Profesionales usando Plaud globalmente en más de 170 países</div>
            </div>
            <div className={styles["empresas-divider"]}></div>
            <div className={styles["empresas-stat"]}>
              <div className={styles["empresas-stat-n"]}>6</div>
              <div className={styles["empresas-stat-l"]}>Meses de ventaja: bitácora de obra acumulada antes que la competencia</div>
            </div>
            <div className={styles["empresas-divider"]}></div>
            <a
              href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20constructora"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["empresas-cta"]}
            >
              Consultar por Plaud Team →
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className={styles["cta-section"]}>
        <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--gray-600)", maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.6 }}>
          "En construcción, cada decisión verbal tiene precio. Con el registro preciso, vos ganás el conflicto, controlás el desvío, honrás el compromiso con el inversor, y retenés la inteligencia de la obra aunque cambie el equipo."
        </p>
        <h2 className={styles["cta-title"]}>¿Estás listo para sumar este activo de crecimiento a tu negocio?</h2>
        <p className={styles["cta-sub"]}>Respuesta inmediata en contacto directo.</p>
        <div className={styles["cta-buttons"]}>
          <a
            className={`${styles["cta-btn"]} ${styles["cta-btn-primary"]}`}
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20constructora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles["cta-btn-tag"]}>Empresa · Equipo · Varios dispositivos</div>
            <div className={styles["cta-btn-title"]}>💬 Consultar por Plaud Team</div>
            <div className={styles["cta-btn-desc"]}>WhatsApp con Silvana · Demo, cotización y propuesta personalizada</div>
          </a>
          <a
            className={`${styles["cta-btn"]} ${styles["cta-btn-secondary"]}`}
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles["cta-btn-tag"]}>Un dispositivo · Uso individual</div>
            <div className={styles["cta-btn-title"]}>🛒 Adquirir Plaud Note</div>
            <div className={styles["cta-btn-desc"]}>Canal Oficial Argentina · Envío a todo el país</div>
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles["footer-left"]}>
          <img src="/logo.webp" alt="Plaud" style={{ height: 16, width: "auto", objectFit: "contain" }} />
          <span><strong>Plaud Argentina</strong> · Canal Oficial</span>
        </div>
        <div className={styles["footer-right"]}>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#equipo">Plaud Team</a>
          <ChangeNicheLink />
        </div>
      </footer>
    </>
  );
}
