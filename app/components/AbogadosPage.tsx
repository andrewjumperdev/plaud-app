/* eslint-disable @next/next/no-img-element */

import styles from "./AbogadosPage.module.css";
import NicheClassifier from "./NicheClassifier";
import ChangeNicheLink from "./ChangeNicheLink";

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
              La propiedad de la palabra en derecho es el gran activo de tu infraestructura documental.
            </div>
            <p className={styles["hero-sub"]}>
              Consultas · Mediaciones · Negociaciones · Estrategia de equipo
              <br />
              Con constancia fehaciente, resguardadas por el secreto profesional.
            </p>
            <div className={styles["hero-actions"]}>
              <a href="#adquirir" className={styles["btn-primary"]}>
                Adquirir Plaud para mi práctica
              </a>
              <a href="#equipo" className={styles["btn-secondary"]}>
                Tengo estudio — hablemos de Plaud Team
              </a>
            </div>
            <div className={styles["hero-proof"]}>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>28</div>
                <div className={styles["hero-proof-l"]}>Plantillas jurídicas</div>
              </div>
              <div className={styles["hero-proof-sep"]}></div>
              <div className={styles["hero-proof-item"]}>
                <div className={styles["hero-proof-n"]}>6</div>
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
            <strong>&quot;Cuidar la privacidad es sagrado.&quot;</strong> Es el pilar 3 de la guía de IA para
            abogados del CPACF (2025): antes de subir información confidencial a cualquier herramienta, hay que
            verificar sus protocolos de seguridad. Plaud cumple ese estándar por diseño — procesa localmente y
            nada se sube sin tu autorización explícita.{" "}
            <a href="#seguridad" style={{ color: "var(--black)", fontWeight: 700 }}>
              Ver certificaciones ↓
            </a>
          </div>
        </div>
      </div>

      {/* EL PROBLEMA — 4 DOLORES */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>El problema</div>
        <h2 className={styles["section-title"]}>En derecho, el tenor literal de los dichos es la prueba.</h2>
        <p className={styles["section-sub"]}>
          Lo que enfrenta al cliente con el abogado no es la mala fe — es el tiempo que lleva procesar la
          documental: escribir, leer expedientes, armar minutas. Esa demora es la que abre la brecha de
          interpretación. Cuatro momentos donde el tiempo de procesamiento decide un caso — y el paso exacto de
          Plaud que lo elimina.
        </p>
        <div className={styles["pain-grid"]}>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Consulta</div>
            <div className={styles["pain-title"]}>La minuta que tarda en salir es tiempo de interpretación libre</div>
            <div className={styles["pain-body"]}>
              Entre que termina la consulta y el cliente recibe algo por escrito, pasan días. En ese tiempo, cada
              uno arma su propia versión de lo hablado — el desacuerdo nace de la demora, no de la mala fe.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: la minuta de abordaje sale el mismo día, con plazos, riesgos y honorarios exactos, tal
              como se mencionaron — la brecha de interpretación se cierra antes de que pueda abrirse.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 01 · Captura
            </div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Mediación</div>
            <div className={styles["pain-title"]}>El acuerdo verbal que nadie puede acreditar</div>
            <div className={styles["pain-body"]}>
              Las partes arriban a un acuerdo en sala. Mientras cada estudio redacta su propia versión del acta,
              pasan días — y en ese tiempo, cada letrado lo recuerda diferente. El acuerdo que existió 20 minutos
              se convierte en un nuevo conflicto.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: el acuerdo se estructura y se distribuye a ambas partes en minutos, con atribución exacta
              de quién dijo qué — la ambigüedad se cierra antes de convertirse en un nuevo conflicto.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 02 · Estructura
            </div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Gestión interna e interdisciplinaria</div>
            <div className={styles["pain-title"]}>El aporte del perito que se diluye antes de llegar al escrito</div>
            <div className={styles["pain-body"]}>
              En familia, penal, civil o comercial, cada traspaso introduce sesgo: el matiz clínico del
              psicólogo, el hallazgo del forense, la metodología del contador se repiten de memoria una vez de más
              y pierden precisión. El cuello de botella es siempre el mismo — el tiempo que lleva leer y escribir
              el expediente para que el otro entienda lo mismo que vos.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: las manifestaciones del perito de parte quedan preservadas en su tenor literal — bajo
              resguardo del secreto profesional — y de esa misma grabación el sistema genera el resumen jurídico
              para vos y el extracto técnico para el informe pericial, sin que tengas que transcribir de memoria
              lo que dijo un experto de otra disciplina.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 03 · Organiza
            </div>
          </div>
          <div className={styles["pain-card"]}>
            <div className={styles["pain-eyebrow"]}>Audiencias y preparación de testigos</div>
            <div className={styles["pain-title"]}>El tiempo de preparación que nunca alcanza</div>
            <div className={styles["pain-body"]}>
              Sale de la audiencia con todo fresco — el orden de los argumentos, el tono del testigo — y para
              cuando llega al estudio, ya se perdió la mitad. Lo mismo ocurre preparando a un declarante: sin
              constancia fiel de la primera reunión, su testimonio del día de la audiencia puede no cotejar con lo
              manifestado al inicio.
            </div>
            <div className={styles["pain-win"]}>
              Con Plaud: dictás tu resumen apenas salís de la sala, y cada sesión de preparación queda
              instrumentada para cotejar la declaración contra lo manifestado originalmente — antes de la
              audiencia, no durante.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--blue)", marginTop: 10 }}>
              → Resuelto en el paso 04 · Automatiza
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
          certificaciones adecuadas puede debilitar el privilegio de litigio sobre el trabajo de un perito — por
          eso Plaud está certificado bajo ISO 27001/27701, SOC 2, HIPAA y GDPR.
        </p>
        <p style={{ fontSize: 14, color: "var(--gray-600)", lineHeight: 1.6, maxWidth: 640, marginTop: 16 }}>
          La propiedad de la palabra no termina en el expediente que se gana. Un estudio que documenta con este
          nivel de precisión construye, caso a caso, un activo de infraestructura documental — la base sobre la
          que se profesionaliza y crece un estudio, no solo la que resuelve el conflicto de hoy.
        </p>
      </div>

      {/* 5 PREGUNTAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Antes de seguir</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 28 }}>
          Cinco preguntas para tu estudio
        </h2>
        <div className={styles["q-list"]}>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>1</div>
            <div>
              <div className={styles["q-text"]}>
                ¿Los acuerdos de honorarios y el alcance del caso de tu última entrevista están documentados con
                las palabras exactas del cliente y la fecha?
              </div>
              <div className={styles["q-risk"]}>RIESGO: reclamo de honorarios sin evidencia</div>
            </div>
          </div>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>2</div>
            <div>
              <div className={styles["q-text"]}>
                Cuando un cliente dice &quot;yo nunca autoricé eso&quot;, ¿qué evidencia tiene el estudio de lo que
                ocurrió en esa reunión?
              </div>
              <div className={styles["q-risk"]}>RIESGO: disputa de mala praxis sin registro</div>
            </div>
          </div>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>3</div>
            <div>
              <div className={styles["q-text"]}>
                Si el abogado que lleva el caso más importante del estudio se va mañana, ¿cuánto tarda el nuevo en
                entender la estrategia?
              </div>
              <div className={styles["q-risk"]}>RIESGO: pérdida de inteligencia institucional</div>
            </div>
          </div>
          <div className={styles["q-item"]}>
            <div className={styles["q-n"]}>4</div>
            <div>
              <div className={styles["q-text"]}>
                ¿Los expedientes activos están actualizados después de cada audiencia y novedad — o la
                actualización se postergó esta semana?
              </div>
              <div className={styles["q-risk"]}>RIESGO: expediente desactualizado ante el cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* POR QUE NO UNA APP */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>La pregunta que todos se hacen</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 30 }}>
          ¿Por qué no usar el grabador del celular?
        </h2>
        <p className={styles["section-sub"]}>
          Porque el celular resuelve el problema equivocado. Graba el audio, pero no separa el expediente del
          cliente de tus mensajes personales, no protege el secreto profesional si el teléfono se pierde o se
          presta, y depende de que subas la grabación a un servidor que ninguna guía de ética avaló.
        </p>
        <div
          className={styles["hw-list"]}
          style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 24px" }}
        >
          <div className={styles["hw-item"]}>
            <div className={styles["hw-dot"]}></div>Offline, sin internet
          </div>
          <div className={styles["hw-item"]}>
            <div className={styles["hw-dot"]}></div>Sin celular en la mesa de consulta
          </div>
          <div className={styles["hw-item"]}>
            <div className={styles["hw-dot"]}></div>Compatible con iPhone
          </div>
          <div className={styles["hw-item"]}>
            <div className={styles["hw-dot"]}></div>Hardware dedicado
          </div>
          <div className={styles["hw-item"]}>
            <div className={styles["hw-dot"]}></div>Zero data retention
          </div>
          <div className={styles["hw-item"]}>
            <div className={styles["hw-dot"]}></div>Speaker ID — quién dijo qué
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className={styles.section} id="como-funciona" style={{ paddingTop: 0 }}>
        <div className={styles["section-eyebrow"]}>Cómo funciona</div>
        <h2 className={styles["section-title"]}>
          No adquirís un grabador.
          <br />
          Adquirís precisión en tu
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
              <div className={styles["flow-card-icon"]}>📋</div>
              <div>
                <div className={styles["flow-card-label"]}>01 · Plantillas jurídicas</div>
                <div className={styles["flow-card-title"]}>28 plantillas específicas</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              Consulta inicial · Análisis de caso · Resumen de audiencia · Estrategia de defensa · Mediación ·
              Traspaso de caso.
            </div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>⚡</div>
              <div>
                <div className={styles["flow-card-label"]}>02 · AutoFlow jurídico</div>
                <div className={styles["flow-card-title"]}>Se activa por palabra clave</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              La palabra &quot;estrategia&quot; activa automáticamente la plantilla de análisis de caso. Sin
              intervención manual.
            </div>
          </div>
          <div className={styles["flow-card"]}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>🔍</div>
              <div>
                <div className={styles["flow-card-label"]}>03 · Ask Plaud</div>
                <div className={styles["flow-card-title"]}>Preguntá sobre tus expedientes</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              &quot;¿Qué dijo el cliente sobre la cláusula de rescisión?&quot; → respuesta en segundos, con la
              fuente exacta. El sistema también marca los puntos que podrías haber pasado por alto.
            </div>
          </div>
          <div className={`${styles["flow-card"]} ${styles.accent}`}>
            <div className={styles["flow-card-header"]}>
              <div className={styles["flow-card-icon"]}>👥</div>
              <div>
                <div className={styles["flow-card-label"]}>04 · Para tu estudio</div>
                <div className={styles["flow-card-title"]}>Workspace del bufete (Plaud Team)</div>
              </div>
            </div>
            <div className={styles["flow-card-body"]}>
              Las notas son privadas por defecto y el socio principal es admin. Visibilidad institucional sin
              perder confidencialidad individual.
            </div>
            <div className={styles["iphone-badge"]}>🍎 Único sistema que funciona con iPhone</div>
          </div>
        </div>
        <div className={styles["confid-strip"]} style={{ marginTop: 24 }}>
          <div className={styles["confid-strip-icon"]}>⚖️</div>
          <div className={styles["confid-strip-text"]}>
            <strong>
              &quot;La IA puede sugerir, nunca decidir. La última palabra siempre debe ser la tuya.&quot;
            </strong>{" "}
            — Guía de IA para Abogados, CPACF (2025). Plaud no reemplaza tu criterio profesional: organiza lo que
            ya dijiste para que lo decidas con más información, no en tu lugar.
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
        <div className={styles["section-eyebrow"]}>Templates calibrados para el nicho</div>
        <h2 className={styles["section-title"]} style={{ fontSize: 30 }}>
          28 plantillas específicas para el estudio
        </h2>
        <p className={styles["section-sub"]}>
          Listas desde el día 1 · vocabulario jurídico. Única distribución en Argentina con templates calibradas
          por nicho. La propiedad de la palabra no es solo defensa ante un conflicto — es la imagen de
          profesionalismo que tu estudio proyecta ante jueces, mediadores y colegas cada vez que presenta un
          escrito.
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 10,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>ISO 27001</div>
                  <div style={{ fontSize: 11, color: "var(--gray-600)", marginTop: 4, lineHeight: 1.4 }}>
                    Gestión de seguridad de la información
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 10,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>ISO 27701</div>
                  <div style={{ fontSize: 11, color: "var(--gray-600)", marginTop: 4, lineHeight: 1.4 }}>
                    Gestión de privacidad de datos
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 10,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>SOC 2 Type II</div>
                  <div style={{ fontSize: 11, color: "var(--gray-600)", marginTop: 4, lineHeight: 1.4 }}>
                    Auditoría independiente de controles
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 10,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>GDPR</div>
                  <div style={{ fontSize: 11, color: "var(--gray-600)", marginTop: 4, lineHeight: 1.4 }}>
                    Regulación europea de datos
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 10,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>HIPAA</div>
                  <div style={{ fontSize: 11, color: "var(--gray-600)", marginTop: 4, lineHeight: 1.4 }}>
                    Estándar de salud de EE.UU.
                  </div>
                </div>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 10,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--black)" }}>EN 18031</div>
                  <div style={{ fontSize: 11, color: "var(--gray-600)", marginTop: 4, lineHeight: 1.4 }}>
                    Ciberseguridad de comunicación inalámbrica
                  </div>
                </div>
              </div>
              <div className={styles["cert-footer"]}>
                Los datos de Plaud no se usan para entrenar modelos de IA · El cliente es el único propietario
              </div>
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
              <div className={styles["empresas-feature-desc"]}>
                Captura offline en consulta, mediación o al dictar tu resumen de audiencia. Sin celular en la
                mesa.
              </div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>28 plantillas específicas para el estudio</div>
              <div className={styles["empresas-feature-desc"]}>
                Consulta · mediación · audiencias · gestión interna · seguimiento de expedientes.
              </div>
            </div>
          </div>
          <div className={styles["empresas-feature"]}>
            <div className={styles["empresas-feature-icon"]}>✅</div>
            <div>
              <div className={styles["empresas-feature-title"]}>
                Onboarding personalizado, 48hs, con Silvana Iriondo
              </div>
              <div className={styles["empresas-feature-desc"]}>Configuración completa para tu estudio.</div>
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
              Si el primer documento generado no le ahorra al estudio al menos{" "}
              <strong>30 minutos de trabajo manual</strong>, no se factura el piloto. Si después del primer mes
              no operás con más precisión, te devolvemos el dinero completo.
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
                ✓ Onboarding personalizado, 48hs
                <br />
                ✓ 28 plantillas jurídicas cargadas
                <br />
                ✓ Soporte local en Argentina
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
                  <div className={styles["empresas-feature-title"]}>Se integra con las herramientas del estudio</div>
                  <div className={styles["empresas-feature-desc"]}>
                    Conectá Plaud con Notion, Slack, Google Drive, Salesforce y más — automatizá el flujo de cada
                    expediente para que tu equipo trabaje con mayor rapidez.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["empresas-card"]}>
            <div className={styles["empresas-stat"]}>
              <div className={styles["empresas-stat-n"]}>90k</div>
              <div className={styles["empresas-stat-l"]}>
                Matriculados CPACF que ya operan bajo la guía oficial de IA (2025)
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
          &quot;La diferencia entre tener razón y poder acreditarla es la documentación. El que tiene el registro
          preciso responde en minutos, no en días, honra el compromiso asumido con el cliente, y retiene la
          inteligencia del caso aunque cambie el equipo.&quot;
        </p>
        <h2 className={styles["cta-title"]}>Dos caminos, una decisión.</h2>
        <p className={styles["cta-sub"]}>Respondemos en menos de 2 horas.</p>
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
          <strong>Plaud Argentina</strong> · Canal Oficial
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
