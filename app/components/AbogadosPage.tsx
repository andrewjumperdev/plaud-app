/* eslint-disable @next/next/no-img-element */

import styles from "./AbogadosPage.module.css";
import NicheClassifier from "./NicheClassifier";
import ChangeNicheLink from "./ChangeNicheLink";
import PlantillasPersonalizadas from "./PlantillasPersonalizadas";

const certs = [
  { img: "/store/cert-iso27001.png", alt: "ISO 27001", caption: "Gestión de seguridad de la información" },
  { img: "/store/cert-iso27701.png", alt: "ISO 27701", caption: "Gestión de privacidad de datos" },
  { img: "/store/cert-soc2.png", alt: "SOC 2", caption: "Auditoría independiente de controles" },
  { img: "/store/cert-gdpr.png", alt: "GDPR", caption: "Regulación europea de datos" },
  { img: "/store/cert-hipaa.png", alt: "HIPAA", caption: "Estándar de salud de EE.UU." },
  { img: "/store/cert-en18031.png", alt: "EN 18031", caption: "Ciberseguridad de comunicación inalámbrica" },
  { img: "/store/cert-tuv.png", alt: "TUV", caption: "Dispositivo probado y certificado en fábrica" },
];

export default function AbogadosPage() {
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
          <a href="/plantillas-personalizadas?niche=abogados">Plantillas</a>
          <a href="#adquirir" className={styles["nav-cta"]} style={{ color: "#fff" }}>
            Adquirir →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className={styles["hero-wrap"]}>
        <div className={styles.hero}>
          <div>
            <div className={styles["hero-eyebrow"]}>
              For Legal Intelligence · Plaud Argentina · Canal Oficial
            </div>
            <h1 className={styles["hero-title"]}>
              <span style={{ fontWeight: 300 }}>La diferencia entre tener razón</span>
              <br />
              <span style={{ fontWeight: 900 }}>y poder acreditarla</span> es la documentación.
            </h1>
            <div className={styles["hero-subtitle-large"]}>
              La propiedad de la palabra en derecho es tu activo de infraestructura documental para el
              crecimiento de tu estudio.
            </div>
            <p className={styles["hero-sub"]}>
              Para Consultas · Audiencias · Mediaciones · Negociaciones · Estrategia de equipo
            </p>
            <div className={styles["hero-actions"]}>
              <a href="#adquirir" className={styles["btn-primary"]}>
                Adquirir Plaud para mi práctica
              </a>
              <a href="#equipo" className={styles["btn-secondary"]}>
                Tengo estudio — hablemos de Plaud Team
              </a>
            </div>
            <p className={styles["hero-question"]}>
              ¿Listo para liberar tiempo operativo documental — con constancia fehaciente, resguardada por el
              secreto profesional?
            </p>
            <div className={styles["hero-proof"]}>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>28</div>
                <div className={styles["hero-proof-l"]}>Plantillas jurídicas</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>7</div>
                <div className={styles["hero-proof-l"]}>Certificaciones</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>100%</div>
                <div className={styles["hero-proof-l"]}>Offline</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>Día 1</div>
                <div className={styles["hero-proof-l"]}>Primer activo jurídico</div>
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
                  El dispositivo que entra al estudio jurídico y cambia todo. Sin apps, sin celular visible en sala.
                </div>
                <div className={styles["device-specs"]}>
                  <div className={styles["device-spec"]}>
                    <div className={styles["device-spec-dot"]}></div>4 micrófonos MEMS · AI Beamforming
                  </div>
                  <div className={styles["device-spec"]}>
                    <div className={styles["device-spec-dot"]}></div>Speaker ID — quién dijo qué
                  </div>
                  <div className={styles["device-spec"]}>
                    <div className={styles["device-spec-dot"]}></div>Offline 100% · zero data retention
                  </div>
                  <div className={styles["device-spec"]}>
                    <div className={styles["device-spec-dot"]}></div>Compatible con iPhone
                  </div>
                </div>
                <div className={styles["device-divider"]}></div>
                <div className={styles["device-price-block"]}>
                  <div className={styles["device-price-label"]}>Canal Oficial Argentina</div>
                  <a
                    href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro%20para%20mi%20estudio"
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

      {/* CONFIDENCIALIDAD - ABOVE THE FOLD, ANTES DEL DOLOR */}
      <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 32 }}>
        <div className={styles["confid-strip"]}>
          <div className={styles["confid-strip-icon"]}>🔒</div>
          <div className={styles["confid-strip-text"]}>
            <strong>Proteger la confidencialidad del cliente es uno de los pilares de la ética profesional.</strong>{" "}
            La guía de IA para abogados del CPACF (2025) dedica uno de sus cuatro pilares a la protección de
            datos personales y confidencialidad: antes de subir información sensible a cualquier herramienta,
            hay que verificar sus protocolos de seguridad. Plaud cumple ese estándar por diseño — procesa
            localmente y nada se sube sin tu autorización explícita.{" "}
            <a href="#seguridad" style={{ color: "var(--black)", fontWeight: 700 }}>
              Ver certificaciones ↓
            </a>
          </div>
        </div>
      </div>

      {/* EL PROBLEMA — 4 DOLORES */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>El problema</div>
        <h2 className={styles["section-title"]}>
          En derecho, el tenor literal de los dichos solo conserva prueba plena si queda instrumentado a tiempo.
        </h2>
        <p className={styles["section-sub"]}>
          Lo que enfrenta al cliente con el abogado no es la mala fe — es el tiempo que lleva instrumentar la
          documental: redactar, leer expedientes, armar minutas. Esa demora es la que abre la brecha de
          interpretación. Cuatro momentos donde el tiempo de instrumentación puede ser determinante en un caso —
          y el paso exacto de Plaud que lo elimina.
        </p>
        <div className={styles["pain-grid"]}>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Consulta</div>
            <div className={styles["pain-title"]}>La minuta que tarda en salir es tiempo de interpretación libre</div>
            <div className={styles["pain-body"]}>
              Entre la consulta y la minuta escrita pasan días — tiempo suficiente para que cada uno arme su
              propia versión de lo hablado.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: la minuta sale el mismo día, con plazos, riesgos y honorarios exactos — la brecha se
              cierra antes de abrirse.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 01 · Captura (Activo base)
            </div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Mediación</div>
            <div className={styles["pain-title"]}>El acuerdo verbal que nadie puede acreditar</div>
            <div className={styles["pain-body"]}>
              Las partes acuerdan en sala, pero cada estudio redacta su propia acta días después — y el acuerdo
              que existió se convierte en un nuevo conflicto.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: el acuerdo se estructura y se distribuye a ambas partes en minutos, con atribución
              exacta de quién dijo qué.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 02 · Estructura (Motor)
            </div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Gestión interna e interdisciplinaria</div>
            <div className={styles["pain-title"]}>El aporte del perito que se diluye antes de llegar al escrito</div>
            <div className={styles["pain-body"]}>
              El matiz del psicólogo, el hallazgo del forense, la metodología del contador se repiten de memoria
              una vez de más y pierden precisión antes de llegar al escrito.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: las manifestaciones del perito quedan preservadas en su tenor literal — bajo secreto
              profesional — y de ahí salen el resumen jurídico y el extracto técnico, sin transcribir de memoria.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 03 · Organiza (Vía)
            </div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Audiencias y preparación de testigos</div>
            <div className={styles["pain-title"]}>El tiempo de preparación que nunca alcanza</div>
            <div className={styles["pain-body"]}>
              Sale de la audiencia con todo fresco, pero al llegar al estudio ya se perdió la mitad — y sin
              constancia de la preparación, el testimonio puede no cotejar con lo manifestado al inicio.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: dictás tu resumen al salir de la sala, y cada sesión de preparación queda instrumentada
              para cotejar contra lo manifestado — antes de la audiencia.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 04 · Automatiza (Velocidad)
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: 14,
            color: "var(--gray-600)",
            lineHeight: 1.6,
            maxWidth: 640,
            marginTop: 24,
            borderLeft: "2px solid var(--gray-200)",
            paddingLeft: 16,
          }}
        >
          El Código de Ética del CPACF exige &quot;decir la verdad al cliente, no crearle falsas expectativas&quot;.
          Pero manifestar no es lo mismo que poder acreditar. Esa brecha — entre la palabra dada y el instrumento
          probatorio que la respalda — es la que documenta Plaud. Y grabar con una herramienta sin las
          certificaciones adecuadas puede exponer el secreto profesional sobre el dictamen del perito a un
          cuestionamiento de admisibilidad — por eso Plaud está certificado bajo ISO 27001/27701, SOC 2, HIPAA,
          EN 18031 y GDPR.
        </p>
        <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.6, maxWidth: 640, marginTop: 16 }}>
          La propiedad de la palabra no termina en el expediente que se gana. Un estudio que documenta con este
          nivel de precisión construye, caso a caso, un activo de infraestructura documental — la base sobre la
          que se profesionaliza y crece un estudio, no solo la que resuelve el conflicto de hoy.
        </p>
      </div>

      {/* CLASIFICADOR */}
      <NicheClassifier
        q1Title="¿Para cuántas personas?"
        q1Options={[
          { value: "solo", label: "Solo para mí" },
          { value: "equipo", label: "Para 2 o más personas del estudio" },
        ]}
        q2Title="¿Usás algún sistema de gestión actualmente?"
        q2Options={[
          { value: "si", label: "Sí (gestor de expedientes, CRM u otro)" },
          { value: "no", label: "No — manejo todo por WhatsApp / notas" },
          { value: "parcial", label: "Tengo algo pero no lo uso bien" },
        ]}
        resultEquipo={
          <>
            Con equipo en el estudio, lo que te conviene es <a href="#equipo">Plaud Team →</a> — workspace
            institucional con notas privadas por defecto.
          </>
        }
        resultIndividual={
          <>
            Para uso individual, tu opción es <a href="#adquirir">Adquirir Plaud Note →</a> con las 28 plantillas
            jurídicas incluidas.
          </>
        }
      />

      {/* MECANISMO UNICO */}
      <div className={styles["mech-band"]}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles["section-eyebrow"]}>Por qué Plaud puede hacer esto</div>
          <h2 className={styles["section-title"]} style={{ fontSize: 32 }}>
            El mecanismo detrás de la infraestructura documental
          </h2>
          <p className={styles["section-sub"]} style={{ maxWidth: 640 }}>
            No es una app más de transcripción. Es hardware propio resolviendo lo que ninguna app puede resolver
            por software.
          </p>
          <div className={styles["mech-grid"]}>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>VCS · Vibration Conduction Sensor</div>
              <div className={styles["mech-title"]}>
                iOS bloquea la grabación de llamadas. No es un bug — es una decisión de Apple.
              </div>
              <div className={styles["mech-body"]}>
                Ninguna app puede acceder al audio de una llamada de iPhone por software. Plaud lo resuelve con
                un sensor físico que mide la vibración del teléfono durante la llamada y la convierte en audio
                con fidelidad — un proceso externo al sistema operativo que iOS no puede bloquear.
              </div>
              <div className={styles["mech-tag"]}>🍎 El único sistema que graba llamadas en iPhone</div>
            </div>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>Tres motores de IA en simultáneo</div>
              <div className={styles["mech-title"]}>
                GPT-5, Claude Sonnet 4 y Gemini 2.5 Pro procesan cada conversación al mismo tiempo.
              </div>
              <div className={styles["mech-body"]}>
                Plaud no elige un modelo por reunión: los tres procesan el audio en paralelo y el sistema
                sintetiza el mejor resultado posible. Para acceder a los tres, Plaud debió pasar los controles de
                seguridad y compliance de OpenAI, Anthropic y Google — no es un argumento de marketing, es una
                validación técnica.
              </div>
              <div className={styles["mech-tag"]}>🧠 Único dispositivo con acceso simultáneo a los tres</div>
            </div>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>Mapa Mental automático</div>
              <div className={styles["mech-title"]}>
                Cada consulta se convierte en un mapa visual del caso, no solo en una transcripción.
              </div>
              <div className={styles["mech-body"]}>
                Terminada la grabación, Plaud genera un Mapa Mental: qué se dijo, en qué orden y cómo se conecta
                cada punto del caso. Antes de una audiencia, se ve de un vistazo — sin releer el expediente
                entero.
              </div>
              <div className={styles["mech-tag"]}>🧭 El caso, de un vistazo</div>
            </div>
            <div className={styles["mech-card"]}>
              <div className={styles["mech-label"]}>Entrada multimodal</div>
              <div className={styles["mech-title"]}>
                Plaud no solo graba la consulta. También registra lo que fotografiás.
              </div>
              <div className={styles["mech-body"]}>
                Un documento, una prueba, una firma — Plaud suma esas fotos como contexto junto con el audio. El
                resumen final no es solo lo que se dijo, es también lo que se mostró en la reunión.
              </div>
              <div className={styles["mech-tag"]}>📎 Audio + evidencia visual, en un mismo resumen</div>
            </div>
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className={styles.section} id="como-funciona" style={{ paddingTop: 64 }}>
        <div className={styles["section-eyebrow"]}>Cómo funciona</div>
        <h2 className={styles["section-title"]}>
          No sumás a tu estudio solo un grabador inteligente.
          <br />
          Adquirís precisión y velocidad en tu
          <br />
          infraestructura documental.
        </h2>
        <div
          style={{
            background: "var(--gray-100)",
            borderLeft: "3px solid var(--blue)",
            borderRadius: 8,
            padding: "20px 24px",
            margin: "20px 0 32px",
            maxWidth: 680,
          }}
        >
          <p style={{ fontSize: 19, fontWeight: 700, color: "var(--black)", lineHeight: 1.4, marginBottom: 8 }}>
            El cerebro no es la inteligencia artificial. Es el abogado.
          </p>
          <p style={{ fontSize: 14, color: "var(--gray-700)", lineHeight: 1.6 }}>
            Plaud es el asistente ejecutivo documental: precisión, optimización del tiempo y liberación de carga
            operativa — para que el abogado invierta su tiempo en criterio, no en escribir, releer expedientes y
            armar minutas a mano.
          </p>
        </div>
        <div className={styles["flow-grid"]}>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🎙️</div>
              <div>
                <div className={styles["flow-card-label"]}>01 · Captura (Activo base)</div>
                <div className={styles["flow-card-title"]}>Lo que se dice, queda</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              Elimina la carga operativa de transcribir a mano: grabación offline, 4 micrófonos con reducción de
              ruido activa, hasta 30 horas continuas — en la consulta, la audiencia o la mediación, sin depender
              del celular, notebook o PC. El tiempo que libera es el activo base de todo lo que sigue.
            </div>
            <div className={styles["iphone-badge"]}>🍎 Único sistema que funciona con iPhone</div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>⚡</div>
              <div>
                <div className={styles["flow-card-label"]}>02 · Estructura (Motor)</div>
                <div className={styles["flow-card-title"]}>El caos se convierte en expediente estructurado</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              Tres motores de IA en simultáneo (GPT, Claude, Gemini) identifican quién habló, cuándo y qué dijo,
              y activan automáticamente el template jurídico correspondiente — la palabra &quot;estrategia&quot;
              dispara la plantilla de análisis de caso, sin intervención manual. Este es el motor que convierte
              el tiempo liberado en material utilizable: 28 plantillas específicas para el estudio.
            </div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🔍</div>
              <div>
                <div className={styles["flow-card-label"]}>03 · Organiza (Vía)</div>
                <div className={styles["flow-card-title"]}>
                  Cada consulta entra al sistema de conocimiento del estudio
                </div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              Las transcripciones se organizan por caso, fecha e interviniente, buscables por palabra clave.
              &quot;¿Qué dijo el cliente sobre la cláusula de rescisión?&quot; → respuesta en segundos, con la
              fuente exacta — la vía que lleva lo estructurado hacia tu activo de infraestructura documental.
            </div>
          </div>
          <div className={`${styles["flow-card"]} ${styles.accent}`}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>👥</div>
              <div>
                <div className={styles["flow-card-label"]}>04 · Automatiza (Velocidad)</div>
                <div className={styles["flow-card-title"]}>Vos pensás. El sistema ejecuta.</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              AutoFlow detecta el contexto y envía cada expediente al lugar indicado. Las notas son privadas por
              defecto y el socio principal es admin — visibilidad institucional sin perder confidencialidad
              individual. Configurás una vez, y todo el estudio invierte su tiempo en criterio, no en tareas
              repetidas.
            </div>
          </div>
        </div>
        <div className={styles["confid-strip"]} style={{ marginTop: 24 }}>
          <div className={styles["confid-strip-icon"]}>⚖️</div>
          <div className={styles["confid-strip-text"]}>
            <strong>
              El control humano adecuado es otro de los pilares de esa misma guía: la IA puede sugerir, nunca
              decidir por el profesional.
            </strong>{" "}
            Plaud no reemplaza tu criterio: organiza lo que ya dijiste para que lo decidas con más información,
            no en tu lugar.
          </div>
        </div>
        <div className={styles["metrics-row"]}>
          <div className={styles["metric-card"]}>
            <div className={styles["metric-n"]}>3 min</div>
            <div className={styles["metric-l"]}>Acta generada</div>
            <div className={styles["metric-d"]}>Desde el fin de la reunión</div>
          </div>
          <div className={styles["metric-card"]}>
            <div className={styles["metric-n"]}>100%</div>
            <div className={styles["metric-l"]}>Offline y privado</div>
            <div className={styles["metric-d"]}>Sin internet, sin nube externa</div>
          </div>
          <div className={styles["metric-card"]}>
            <div className={styles["metric-n"]}>0</div>
            <div className={styles["metric-l"]}>Intervención manual</div>
            <div className={styles["metric-d"]}>AutoFlow procesa solo</div>
          </div>
          <div className={styles["metric-card"]}>
            <div className={styles["metric-n"]}>Día 1</div>
            <div className={styles["metric-l"]}>Primer activo jurídico</div>
            <div className={styles["metric-d"]}>El estudio empieza a acumular</div>
          </div>
        </div>
      </div>

      {/* PLANTILLAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Templates calibrados para el sector</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 30 }}>
          28 plantillas específicas para el estudio
        </h2>
        <p className={styles["section-sub"]}>
          Listas desde el día 1 · vocabulario jurídico. Único canal oficial con templates calibrados por sector.
          La propiedad de la palabra no es solo defensa ante un conflicto — es la imagen de profesionalismo que
          tu estudio proyecta ante jueces, mediadores y colegas cada vez que presenta un escrito. Y si tu
          especialidad no está en esta lista: el mismo Sistema de Diagnóstico único ajusta la biblioteca a tu
          práctica exacta.
        </p>
        <div className={styles["plantillas-grid"]}>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Consulta y Estrategia</div>
              <div className={styles["plantilla-n"]}>8</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Consulta inicial
              <br />
              Análisis de caso
              <br />
              Estrategia de defensa
              <br />
              Acuerdo de honorarios
            </div>
          </div>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Mediación y Audiencias</div>
              <div className={styles["plantilla-n"]}>7</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Acta de mediación
              <br />
              Resumen de audiencia
              <br />
              Preparación de testigos
              <br />
              Réplica
            </div>
          </div>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Gestión Interna del Estudio</div>
              <div className={styles["plantilla-n"]}>7</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Traspaso de caso
              <br />
              Reunión de socios
              <br />
              Coordinación de equipo
            </div>
          </div>
          <div className={styles["plantilla-card"]}>
            <div className={styles["plantilla-head"]}>
              <div className={styles["plantilla-name"]}>Seguimiento de Expedientes</div>
              <div className={styles["plantilla-n"]}>6</div>
            </div>
            <div className={styles["plantilla-items"]}>
              Actualización de expediente
              <br />
              Comunicación al cliente
              <br />
              Cierre de caso
            </div>
          </div>
        </div>
      </div>

      {/* SEGURIDAD */}
      <section
        className={styles.section}
        id="seguridad"
        style={{ background: "var(--gray-100)", maxWidth: "100%", padding: "80px 0" }}
      >
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles["section-eyebrow"]}>Privacidad y seguridad</div>
          <h2 className={styles["section-title"]}>
            Tu palabra te pertenece.
            <br />
            Siempre.
          </h2>
          <div className={styles["seg-grid"]}>
            <div>
              <p className={styles["seg-body"]}>
                La consulta con el cliente, la estrategia del caso, los acuerdos de mediación.{" "}
                <strong>
                  Información amparada por el secreto profesional que no puede circular en servidores sin
                  control de privacidad certificado.
                </strong>
              </p>
              <p className={styles["seg-body"]} style={{ marginTop: 14 }}>
                La mayoría de las apps de transcripción no especifican dónde almacenan los datos, si los usan
                para entrenar modelos o quién más puede acceder a ellos.
              </p>
              <div className={styles["seg-alert"]}>
                ⚠️ Un abogado que usa una app gratuita para transcribir la consulta de su cliente puede estar
                violando el secreto profesional sin saberlo — y exponiéndose a sanciones del Colegio de Abogados.
              </div>
              <p className={styles["seg-body"]} style={{ marginTop: 14, fontSize: 13, color: "var(--gray-600)" }}>
                Plaud es tu memoria profesional para gestionar tu práctica — no una herramienta para usar el
                testimonio de tu cliente en su contra. Esa distinción la marca la ética profesional, no la
                tecnología, y por eso la respetamos por diseño.
              </p>
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
              <div className={styles["cert-footer"]}>
                Los datos de Plaud no se usan para entrenar modelos de IA · El cliente es el único propietario
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANTILLAS PERSONALIZADAS */}
      <PlantillasPersonalizadas niche="abogados" rubro="tu estudio jurídico" />

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
              <div className={styles["empresas-feature-desc"]}>
                Captura offline en consulta, mediación o al dictar tu resumen de audiencia. Sin necesidad de
                usar el celular, notebook o PC.
              </div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>28 templates específicos para el estudio</div>
              <div className={styles["empresas-feature-desc"]}>
                Consulta · mediación · audiencias · gestión interna · seguimiento de expedientes.
              </div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>Guía de configuración inicial</div>
              <div className={styles["empresas-feature-desc"]}>
                Puesta en marcha guiada por WhatsApp con el equipo de Plaud Argentina.
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 15, color: "var(--gray-700)", fontStyle: "italic", marginTop: 24, maxWidth: 560 }}>
          Del tenor literal de lo manifestado al activo de infraestructura documental — el instrumento probatorio
          que acredita lo dicho, y la base de profesionalismo sobre la que crece tu estudio.
        </p>
        <div className={styles["hero-actions"]} style={{ marginTop: 32 }}>
          <a
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20adquirir%20Plaud%20para%20mi%20estudio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["btn-primary"]}
          >
            Adquirir Plaud →
          </a>
          <a href="#equipo" className={styles["btn-secondary"]}>
            Tengo estudio — hablemos de Plaud Team
          </a>
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
              Si después del primer mes no recuperaste al menos{" "}
              <strong>un caso que se habría perdido por falta de registro</strong>, te devolvemos el dinero
              completo. Sin formularios. Sin justificaciones.
              <br />
              <br />
              Esto no es una promesa de marketing. Es la garantía que podemos hacer porque sabemos lo que el
              producto hace en este sector.
            </p>
            <a
              href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20empezar%20el%20piloto%20de%20Plaud%20para%20mi%20estudio%20jur%C3%ADdico"
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
                ✓ Guía de configuración inicial
                <br />
                ✓ 28 plantillas jurídicas cargadas
                <br />
                ✓ Soporte técnico de por vida
                <br />✓ Envío a todo el país
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLAUD TEAM PARA EL ESTUDIO */}
      <section className={styles.section} id="equipo">
        <div className={styles["section-eyebrow"]}>Plaud para Empresas · Estudios jurídicos</div>
        <h2 className={styles["section-title"]}>
          La inteligencia jurídica del
          <br />
          estudio, centralizada
        </h2>
        <div className={styles["empresas-grid"]}>
          <div>
            <p
              className={styles["section-sub"]}
              style={{ fontWeight: 700, fontSize: 19, color: "var(--black)", maxWidth: "none" }}
            >
              &quot;Cuando un abogado de tu estudio se va, ¿se lleva el contexto de todos los casos que
              manejó?&quot;
            </p>
            <div className={styles["empresas-features"]}>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🗂️</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>El conocimiento queda en la organización</div>
                  <div className={styles["empresas-feature-desc"]}>
                    Cada expediente documental pertenece al estudio, no al teléfono del abogado.
                  </div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🔐</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Notas privadas por defecto</div>
                  <div className={styles["empresas-feature-desc"]}>
                    El abogado comparte lo que elige — pero los acuerdos del estudio no se van con él.
                  </div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>👤</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>El socio principal es admin</div>
                  <div className={styles["empresas-feature-desc"]}>
                    Visibilidad institucional del workspace, sin perder confidencialidad individual.
                  </div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🔗</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Consultar por integraciones disponibles</div>
                  <div className={styles["empresas-feature-desc"]}>
                    Automatizá el flujo de cada expediente para que tu equipo trabaje con mayor rapidez.
                  </div>
                </div>
              </div>
              <div className={styles["empresas-feature"]}>
                <div className={styles["empresas-feature-icon"]}>🎓</div>
                <div>
                  <div className={styles["empresas-feature-title"]}>Onboarding personalizado</div>
                  <div className={styles["empresas-feature-desc"]}>
                    Configuración institucional completa para el estudio, a cargo de un especialista del equipo.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["empresas-card"]}>
            <div className={styles["empresas-stat"]}>
              <div className={styles["empresas-stat-n"]}>4</div>
              <div className={styles["empresas-stat-l"]}>
                Pilares de la guía oficial de IA del CPACF (2025) — incluida la protección de datos y el secreto
                profesional
              </div>
            </div>
            <div className={styles["empresas-divider"]}></div>
            <div className={styles["empresas-stat"]}>
              <div className={styles["empresas-stat-n"]}>6</div>
              <div className={styles["empresas-stat-l"]}>
                Meses de ventaja: expedientes documentales acumulados antes que la competencia
              </div>
            </div>
            <div className={styles["empresas-divider"]}></div>
            <a
              href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20estudio%20jur%C3%ADdico"
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
        <p
          style={{
            fontSize: 18,
            fontStyle: "italic",
            color: "var(--gray-600)",
            maxWidth: 640,
            margin: "0 auto 28px",
            lineHeight: 1.6,
          }}
        >
          &quot;La diferencia entre tener razón y poder acreditarla es la documentación. Con Plaud, tenés el
          registro preciso en minutos, no en días — así honrás el compromiso asumido con tu cliente, y retenés la
          inteligencia del caso aunque cambie el equipo.&quot;
        </p>
        <h2 className={styles["cta-title"]}>¿Estás listo para sumar este activo de crecimiento a tu estudio?</h2>
        <p className={styles["cta-sub"]}>Respuesta inmediata en contacto directo.</p>
        <div className={styles["cta-buttons"]}>
          <a
            className={`${styles["cta-btn"]} ${styles["cta-btn-primary"]}`}
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20estudio%20jur%C3%ADdico"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles["cta-btn-tag"]}>Estudio · Firma · Equipo</div>
            <div className={styles["cta-btn-title"]}>💬 Consultar por Plaud Team</div>
            <div className={styles["cta-btn-desc"]}>WhatsApp con Silvana · Demo, cotización y propuesta personalizada</div>
          </a>
          <a
            className={`${styles["cta-btn"]} ${styles["cta-btn-secondary"]}`}
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro%20para%20mi%20pr%C3%A1ctica"
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
          <span>
            <strong>Plaud Argentina</strong> · Canal Oficial
          </span>
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
