/* eslint-disable @next/next/no-img-element */

import NicheClassifier from "./NicheClassifier";
import ChangeNicheLink from "./ChangeNicheLink";
import styles from "./ConstruccionPage.module.css";

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
          <a href="#adquirir" className={styles["nav-cta"]} style={{ color: "#fff" }}>
            Adquirir →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className={styles["hero-wrap"]}>
        <div className={styles.hero}>
          <div>
            <div className={styles["hero-eyebrow"]}>For Business Intelligence · Construcción & Real Estate</div>
            <h1 className={styles["hero-title"]}>En construcción, cada decisión verbal tiene precio.</h1>
            <div className={styles["hero-subtitle-large"]}>
              La bitácora de obra es tu activo de infraestructura documental para la escala empresarial.
            </div>
            <p className={styles["hero-sub"]}>
              Plaud captura cada reunión con inversores, proveedores y equipo — offline, automático, con identificación de hablantes. Para que nunca más pierdas lo que acordaste.
            </p>
            <div className={styles["hero-actions"]}>
              <a href="#adquirir" className={styles["btn-primary"]}>Adquirir Plaud para mis reuniones</a>
              <a href="#equipo" className={styles["btn-secondary"]}>¿Tenés equipo? Ver Plaud Team</a>
            </div>
            <div className={styles["hero-proof"]}>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>2M+</div>
                <div className={styles["hero-proof-l"]}>Profesionales globales</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>50</div>
                <div className={styles["hero-proof-l"]}>Países</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>25</div>
                <div className={styles["hero-proof-l"]}>Plantillas construcción</div>
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
          No es falta de organización. Es que el cerebro humano no puede estar completamente presente en una conversación y documentarla al mismo tiempo.
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
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Comité financiero · Control de costos</div>
            <div className={styles["pain-title"]}>El desvío presupuestario sin causa trazable</div>
            <div className={styles["pain-body"]}>
              El comité muestra un desvío del 15% al cierre del mes. La causa está en decisiones verbales de los últimos 30 días. Sin registro, se paga, se absorbe, y se repite el mes siguiente.
            </div>
            <div className={styles["pain-win"]}>Con Plaud: el desvío tiene nombre, fecha y origen — no es sorpresa del balance.</div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Inversores · Negociación · Seguimiento</div>
            <div className={styles["pain-title"]}>El compromiso con el inversor que cada parte recuerda diferente</div>
            <div className={styles["pain-body"]}>
              El retorno comprometido era 18%, o "entre 15 y 18%". El plazo era diciembre, o "estimado primer trimestre". No es mala fe — es memoria humana sobre conversaciones no documentadas.
            </div>
            <div className={styles["pain-win"]}>Con Plaud: cada palabra acordada tiene timestamp. La negociación no depende de la memoria de nadie.</div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Rotación de equipos · Escalabilidad</div>
            <div className={styles["pain-title"]}>La inteligencia de la obra que se va con quien se va</div>
            <div className={styles["pain-body"]}>
              El director de obra renuncia. El nuevo necesita entender en horas lo que el anterior construyó en 6 meses. Sin sistema, eso tarda semanas y nunca es completo.
            </div>
            <div className={styles["pain-win"]}>Con Plaud: el nuevo accede a la bitácora de obra completa desde el día uno.</div>
          </div>
        </div>
      </div>

      {/* ANTES DE SEGUIR */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Antes de seguir</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 28 }}>Cuatro preguntas para tu obra</h2>
        <div className={styles["q-list"]}>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>1</div>
            <div>
              <div className={styles["q-text"]}>
                ¿La última entrega acordada con un subcontratista o proveedor quedó documentada con fecha, precio y responsable — o solo existe en un chat de WhatsApp?
              </div>
              <div className={styles["q-risk"]}>RIESGO: incumplimiento sin evidencia</div>
            </div>
          </div>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>2</div>
            <div>
              <div className={styles["q-text"]}>
                Si el comité pregunta hoy por el origen de un desvío del mes pasado, ¿podés reconstruirlo con nombre, fecha y motivo en minutos?
              </div>
              <div className={styles["q-risk"]}>RIESGO: desvío sin causa trazable</div>
            </div>
          </div>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>3</div>
            <div>
              <div className={styles["q-text"]}>
                El retorno y el plazo que le prometiste al inversor la semana pasada — ¿quedaron con las palabras exactas, o cada uno se quedó con su versión?
              </div>
              <div className={styles["q-risk"]}>RIESGO: conflicto de expectativas</div>
            </div>
          </div>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>4</div>
            <div>
              <div className={styles["q-text"]}>
                Si el director de obra se va mañana, ¿cuánto tarda el reemplazo en entender lo que se decidió en los últimos 6 meses?
              </div>
              <div className={styles["q-risk"]}>RIESGO: pérdida de continuidad</div>
            </div>
          </div>
        </div>
      </div>

      {/* POR QUE NO UNA APP */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>La pregunta que todos se hacen</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 30 }}>¿Por qué no usar una app virtual?</h2>
        <p className={styles["section-sub"]}>
          Porque las apps virtuales resuelven el problema equivocado. Funcionan en Zoom, en Meet, en Teams. ¿Y en el auto de camino a la reunión con el inversor? ¿Y en obra cuando el proveedor dice algo que después va a negar? ¿Y en la llamada desde iPhone que ninguna app puede grabar?
        </p>
        <div className={styles["stat-callout"]}>
          <div className={styles["stat-callout-n"]}>80%</div>
          <div className={styles["stat-callout-t"]}>
            de las conversaciones que valen dinero no suceden en una pantalla.
            <br />
            Las apps capturan el 20% que ya estaba grabado. <strong>Plaud captura el 80% que se perdía.</strong>
          </div>
        </div>
        <div className={styles["hw-list"]} style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 24px" }}>
          <div className={styles["hw-item"]}><div className={styles["hw-dot"]}></div>Offline, sin internet</div>
          <div className={styles["hw-item"]}><div className={styles["hw-dot"]}></div>Sin celular en la mesa</div>
          <div className={styles["hw-item"]}><div className={styles["hw-dot"]}></div>Compatible con iPhone</div>
          <div className={styles["hw-item"]}><div className={styles["hw-dot"]}></div>Hardware dedicado</div>
          <div className={styles["hw-item"]}><div className={styles["hw-dot"]}></div>Zero data retention</div>
          <div className={styles["hw-item"]}><div className={styles["hw-dot"]}></div>AI Beamforming · Speaker ID</div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className={styles.section} id="como-funciona" style={{ paddingTop: 0 }}>
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
                <div className={styles["flow-card-label"]}>01 · Capturá</div>
                <div className={styles["flow-card-title"]}>En obra, en el auto, con inversores</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Offline, sin internet, hasta 30 horas continuas.</div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>⚡</div>
              <div>
                <div className={styles["flow-card-label"]}>02 · Transcribí</div>
                <div className={styles["flow-card-title"]}>Al sincronizar, automático</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Acuerdos, responsables, próximos pasos — en 3 minutos.</div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🔍</div>
              <div>
                <div className={styles["flow-card-label"]}>03 · Consultá</div>
                <div className={styles["flow-card-title"]}>Preguntá sobre tu obra</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>"¿Qué se acordó sobre el plazo del proveedor?" → respuesta en segundos.</div>
          </div>
          <div className={`${styles["flow-card"]} ${styles.accent}`}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🏗️</div>
              <div>
                <div className={styles["flow-card-label"]}>04 · Escalá</div>
                <div className={styles["flow-card-title"]}>Bitácora de obra del equipo</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>Disponible para todo tu equipo, sin intermediarios.</div>
            <div className={styles["iphone-badge"]}>🍎 Único sistema que funciona con iPhone</div>
          </div>
        </div>
      </div>

      {/* PLANTILLAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Templates calibrados para el nicho</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 30 }}>25 plantillas específicas para construcción</h2>
        <p className={styles["section-sub"]}>
          13 áreas de gestión · listas desde el día 1 · vocabulario del sector. Única distribución en Argentina con templates calibradas por nicho.
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 12 }}>
                <div style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>ISO 27001</div>
                </div>
                <div style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>SOC 2 Type II</div>
                </div>
                <div style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>HIPAA</div>
                </div>
                <div style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>GDPR</div>
                </div>
                <div style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>AES-256</div>
                </div>
                <div style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>TLS 1.3</div>
                </div>
              </div>
              <div className={styles["cert-footer"]}>Procesamiento local · Zero data retention · Ley 25.326 Argentina</div>
            </div>
          </div>
        </div>
      </section>

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
              <div className={styles["empresas-feature-desc"]}>Captura hasta 30 horas continuas, AI Beamforming, 4 MEMS mics.</div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>25 plantillas específicas para construcción</div>
              <div className={styles["empresas-feature-desc"]}>Negociación de inversores · reunión de obra · acuerdos con proveedores · control de costos.</div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>Onboarding personalizado, 30 min con Silvana Iriondo</div>
              <div className={styles["empresas-feature-desc"]}>Configuración completa para tu nicho.</div>
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
              Si no recuperás al menos <strong>una negociación que se habría perdido</strong>, te devolvemos el setup completo. Esto no es una promesa de marketing. Es la garantía que podemos hacer porque sabemos lo que el producto hace en este nicho.
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
                ✓ Onboarding personalizado incluido<br />✓ 25 plantillas de construcción<br />✓ Soporte local en Argentina<br />✓ Envío a todo el país
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLAUD TEAM */}
      <section className={styles.section} id="equipo">
        <div className={styles["section-eyebrow"]}>Plaud para Empresas · Constructoras</div>
        <h2 className={styles["section-title"]}>
          La inteligencia de la obra,
          <br />
          centralizada
        </h2>
        <div className={styles["empresas-grid"]}>
          <div>
            <p className={styles["section-sub"]} style={{ fontWeight: 700, fontSize: 19, color: "var(--black)", maxWidth: "none" }}>
              ¿Tu equipo de obra toma decisiones en campo que vos te enterás 3 días después — o nunca?
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
            </div>
          </div>
          <div className={styles["empresas-card"]}>
            <div className={styles["empresas-stat"]}>
              <div className={styles["empresas-stat-n"]}>2M+</div>
              <div className={styles["empresas-stat-l"]}>Profesionales usando Plaud globalmente en 50 países</div>
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
        resultIndividual={<>Para uso individual, tu opción es <a href="#adquirir">Adquirir Plaud Note →</a> con las 25 plantillas de construcción incluidas.</>}
      />

      {/* CTA FINAL */}
      <div className={styles["cta-section"]}>
        <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--gray-600)", maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.6 }}>
          "En construcción, cada decisión verbal tiene precio. El que tiene el registro gana el conflicto, controla el desvío, honra el compromiso con el inversor y retiene la inteligencia de la obra aunque cambie el equipo."
        </p>
        <h2 className={styles["cta-title"]}>Dos caminos, una decisión.</h2>
        <p className={styles["cta-sub"]}>Respondemos en menos de 2 horas.</p>
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
        <div className={styles["footer-left"]}><strong>Plaud Argentina</strong> · Canal Oficial</div>
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
