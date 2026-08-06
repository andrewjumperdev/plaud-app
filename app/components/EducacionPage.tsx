/* eslint-disable @next/next/no-img-element */

import NicheClassifier from "./NicheClassifier";
import ChangeNicheLink from "./ChangeNicheLink";
import PlantillasPersonalizadas from "./PlantillasPersonalizadas";
import styles from "./EducacionPage.module.css";

const certs = [
  { img: "/store/cert-iso27001.png", alt: "ISO 27001", caption: "Gestión de seguridad de la información" },
  { img: "/store/cert-iso27701.png", alt: "ISO 27701", caption: "Gestión de privacidad de datos" },
  { img: "/store/cert-soc2.png", alt: "SOC 2", caption: "Auditoría independiente de controles" },
  { img: "/store/cert-gdpr.png", alt: "GDPR", caption: "Regulación europea de datos" },
  { img: "/store/cert-hipaa.png", alt: "HIPAA", caption: "Cubre datos sensibles, incluyendo menores" },
  { img: "/store/cert-en18031.png", alt: "EN 18031", caption: "Ciberseguridad de comunicación inalámbrica" },
  { img: "/store/cert-tuv.png", alt: "TUV", caption: "Dispositivo probado y certificado en fábrica" },
];

export default function EducacionPage() {
  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        <a href="/" className={styles['nav-logo']}>
          <img src="/logo.webp" alt="Plaud" />
          <span className={styles['nav-badge']}>Argentina · Canal Oficial</span>
        </a>
        <div className={styles['nav-links']}>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#equipo">Plaud Team</a>
          <a href="/plantillas-personalizadas?niche=educacion">Plantillas</a>
          <a href="#adquirir" className={styles['nav-cta']} style={{ color: '#fff' }}>
            Adquirir →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className={styles['hero-wrap']}>
        <div className={styles.hero}>
          <div>
            <div className={styles['hero-eyebrow']}>
              Instituciones Educativas · Admisiones y Gestión
            </div>
            <h1 className={styles['hero-title']}>
              LO QUE SE DICE EN LA ESCUELA Y LO QUE QUEDA REGISTRADO DESPUÉS, NO SIEMPRE ES LO MISMO.
            </h1>
            <div className={styles['hero-subtitle-large']}>
              De conversaciones sueltas en pasillos y reuniones a tu activo de infraestructura documental
              para el crecimiento de tu institución.
            </div>
            <p className={styles['hero-sub']}>
              Plaud captura entrevistas de admisión, reuniones de equipo directivo y seguimientos de
              convivencia, y los convierte en actas institucionales — sin que nadie tenga que escribir
              mientras escucha.
            </p>
            <div className={styles['hero-actions']}>
              <a href="#adquirir" className={styles['btn-primary']}>
                Adquirir Plaud para mi institución
              </a>
              <a href="#equipo" className={styles['btn-secondary']}>
                Somos institución — ver Plaud Team
              </a>
            </div>
            <div className={styles['hero-proof']}>
              <div className={styles['hero-proof-item']}>
                <div className={styles['hero-proof-n']}>30</div>
                <div className={styles['hero-proof-l']}>Plantillas</div>
              </div>
              <div className={styles['hero-proof-sep']} />
              <div className={styles['hero-proof-item']}>
                <div className={styles['hero-proof-n']}>6</div>
                <div className={styles['hero-proof-l']}>Certificaciones</div>
              </div>
              <div className={styles['hero-proof-sep']} />
              <div className={styles['hero-proof-item']}>
                <div className={styles['hero-proof-n']}>100%</div>
                <div className={styles['hero-proof-l']}>Offline en clase</div>
              </div>
              <div className={styles['hero-proof-sep']} />
              <div className={styles['hero-proof-item']}>
                <div className={styles['hero-proof-n']}>Día 1</div>
                <div className={styles['hero-proof-l']}>Primer impacto</div>
              </div>
            </div>
          </div>
          <div className={styles['hero-visual']}>
            <div className={styles['device-media-card']}>
              {/* placeholder: reemplazar por public/store/plaud-note-unboxing.mp4 cuando esté disponible */}
              <video className={styles['device-video']} autoPlay muted loop playsInline>
                <source src="/store/video-hero.mp4" type="video/mp4" />
              </video>
              <div className={styles['device-body']}>
                <div className={styles['device-tag']}>Canal Oficial 🇦🇷</div>
                <div className={styles['device-name']}>Plaud Note</div>
                <div className={styles['device-tagline']}>
                  Entrevistas de admisión, reuniones con familias y tutorías — documentadas sin
                  interrumpir.
                </div>
                <div className={styles['device-specs']}>
                  <div className={styles['device-spec']}>
                    <div className={styles['device-spec-dot']} />4 micrófonos MEMS · AI Beamforming
                  </div>
                  <div className={styles['device-spec']}>
                    <div className={styles['device-spec-dot']} />Speaker ID — docente vs. familia
                  </div>
                  <div className={styles['device-spec']}>
                    <div className={styles['device-spec-dot']} />Offline 100% · zero data retention
                  </div>
                  <div className={styles['device-spec']}>
                    <div className={styles['device-spec-dot']} />Compatible con iPhone
                  </div>
                </div>
                <div className={styles['device-divider']} />
                <div className={styles['device-price-block']}>
                  <div className={styles['device-price-label']}>Canal Oficial Argentina</div>
                  <a
                    href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro%20para%20mi%20instituci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['device-cta']}
                  >
                    Adquirir →
                  </a>
                  <div className={styles['device-note']}>
                    Soporte local · Garantía · Envío a todo el país
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['amplify-strip']}>
        <span className={styles.ah}>AMPLIFY HUMAN</span>
        <span className={styles.i}>INTELLIGENCE</span>
      </div>

      {/* CONFIDENCIALIDAD */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['confid-strip']}>
          <div className={styles['confid-strip-icon']}>🔒</div>
          <div className={styles['confid-strip-text']}>
            <strong>Las conversaciones educativas son confidenciales por ley.</strong> Entrevistas con
            alumnos, orientación vocacional, situaciones familiares, expedientes académicos. Información
            que no puede circular en servidores de apps gratuitas sin control de privacidad.{' '}
            <a href="#seguridad" style={{ color: 'var(--black)', fontWeight: 700 }}>
              Ver certificaciones ↓
            </a>
          </div>
        </div>
      </div>

      {/* EL PROBLEMA */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>
          El problema · 4 situaciones que toda institución secundaria conoce
        </div>
        <h2 className={styles['section-title']}>
          La precisión en la documentación es el activo de crecimiento institucional.
        </h2>
        <p className={styles['section-sub']}>
          Las decisiones más importantes se toman en conversación, y la mayoría se pierde o se documenta
          de forma imprecisa. Cuatro situaciones donde la precisión decide — y la fase exacta de Plaud que
          la sostiene.
        </p>
        <div className={styles['pain-grid']}>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Familias</div>
            <div className={styles['pain-title']}>
              La reunión con la familia no tiene registro exacto de lo acordado
            </div>
            <div className={styles['pain-body']}>
              El acuerdo con los padres sobre el seguimiento del alumno se reconstruye de memoria. Tres
              semanas después, cada parte recuerda algo distinto de lo que se comprometió.
            </div>
            <div className={styles['pain-win']}>
              Con Plaud: el acuerdo con la familia queda capturado en el momento, tal como se dijo.
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--blue)', marginTop: '10px' }}>
              → Resuelto en el paso 01 · Captura (Activo base)
            </div>
          </div>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Supervisión</div>
            <div className={styles['pain-title']}>
              Las indicaciones del supervisor se reconstruyen después — imprecisas
            </div>
            <div className={styles['pain-body']}>
              Las indicaciones que llegan en la visita de supervisión son orales. Lo que se registra
              depende de notas apresuradas. Las versiones divergen.
            </div>
            <div className={styles['pain-win']}>
              Con Plaud: la visita queda transcripta con identificación exacta de cada hablante y fecha.
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--blue)', marginTop: '10px' }}>
              → Resuelto en el paso 02 · Estructura (Motor)
            </div>
          </div>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Gestión interna</div>
            <div className={styles['pain-title']}>
              Las decisiones del equipo viven en la memoria de quien estuvo
            </div>
            <div className={styles['pain-body']}>
              Las decisiones pedagógicas, curriculares y de coordinación que se toman en reunión no quedan
              registradas con precisión. Quien no estuvo depende de que alguien le cuente.
            </div>
            <div className={styles['pain-win']}>
              Con Plaud: cada reunión entra al sistema de conocimiento institucional — buscable,
              disponible para quien lo necesite.
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--blue)', marginTop: '10px' }}>
              → Resuelto en el paso 03 · Organiza (Vía)
            </div>
          </div>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Equipo docente</div>
            <div className={styles['pain-title']}>
              El rector es el único que sabe todo — y tiene que repetirlo siempre
            </div>
            <div className={styles['pain-body']}>
              El rector carga con el contexto de cada decisión institucional porque no hay sistema que lo
              distribuya.
            </div>
            <div className={styles['pain-win']}>
              Con Plaud: el workspace institucional distribuye la visibilidad automáticamente, sin que el
              rector repita nada.
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--blue)', marginTop: '10px' }}>
              → Resuelto en el paso 04 · Automatiza (Velocidad)
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--gray-600)',
            lineHeight: 1.6,
            maxWidth: '640px',
            marginTop: '24px',
            borderLeft: '2px solid var(--gray-200)',
            paddingLeft: '16px',
          }}
        >
          La precisión en la documentación no termina en el conflicto que se evita. Una institución que
          documenta con este nivel de detalle construye, reunión a reunión, un activo de infraestructura
          documental — la base sobre la que crece la institución, no solo la que resuelve el malentendido
          de hoy.
        </p>
      </div>

      {/* CLASIFICADOR */}
      <NicheClassifier
        q1Title="¿Para cuántas personas?"
        q1Options={[
          { value: 'solo', label: 'Solo para mí' },
          { value: 'equipo', label: 'Para 2 o más docentes de la institución' },
        ]}
        q2Title="¿Usás algún sistema de gestión institucional actualmente?"
        q2Options={[
          { value: 'si', label: 'Sí (gestor académico, CRM u otro)' },
          { value: 'no', label: 'No — manejo todo por WhatsApp / notas' },
          { value: 'parcial', label: 'Tengo algo pero no lo uso bien' },
        ]}
        resultEquipo={
          <>
            Con varios docentes usándolo, lo que te conviene es <a href="#equipo">Plaud Team →</a> —
            workspace institucional con notas privadas por defecto.
          </>
        }
        resultIndividual={
          <>
            Para uso individual, tu opción es <a href="#adquirir">Adquirir Plaud Note →</a> con las 30
            plantillas académicas incluidas.
          </>
        }
      />

      {/* POR QUE NO UNA APP */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Hardware · Por qué el celular no alcanza en el aula</div>
        <h2 className={styles['section-title']} style={{ fontSize: '30px' }}>
          ¿Por qué no usar una app de transcripción gratuita?
        </h2>
        <p className={styles['section-sub']}>
          Las apps de transcripción gratuitas resuelven el problema equivocado. Funcionan bien con un solo
          hablante, cerca del micrófono del celular. ¿Y en el aula presencial donde los alumnos hablan
          mientras el docente se mueve? ¿Y en la reunión de claustro donde diez personas hablan al mismo
          tiempo? ¿Y en la entrevista con padres donde el celular visible cambia toda la dinámica?
        </p>
        <div className={styles['stat-callout']}>
          <div className={styles['stat-callout-n']}>80%</div>
          <div className={styles['stat-callout-t']}>
            del conocimiento institucional se genera en conversaciones presenciales.
            <br />
            <strong>Las apps capturan el 20% que ya está en pantalla.</strong>
          </div>
        </div>
        <div
          className={styles['hw-list']}
          style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 24px' }}
        >
          <div className={styles['hw-item']}>
            <div className={styles['hw-dot']} />4 micrófonos MEMS · captura hasta 5 metros
          </div>
          <div className={styles['hw-item']}>
            <div className={styles['hw-dot']} />Speaker ID — distingue docente de alumnos
          </div>
          <div className={styles['hw-item']}>
            <div className={styles['hw-dot']} />Reducción de ruido activa
          </div>
          <div className={styles['hw-item']}>
            <div className={styles['hw-dot']} />Chip VPU dedicado, sin nube durante la clase
          </div>
          <div className={styles['hw-item']}>
            <div className={styles['hw-dot']} />Sin celular visible en el aula
          </div>
          <div className={styles['hw-item']}>
            <div className={styles['hw-dot']} />Compatible con iPhone
          </div>
        </div>
      </div>

      {/* MECANISMO UNICO */}
      <div className={styles['mech-band']}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles['section-eyebrow']}>Por qué Plaud puede hacer esto</div>
          <h2 className={styles['section-title']} style={{ fontSize: '32px' }}>
            El mecanismo detrás de la infraestructura documental
          </h2>
          <p className={styles['section-sub']} style={{ maxWidth: '640px' }}>
            No es una app más de transcripción. Es hardware propio resolviendo lo que ninguna app puede
            resolver por software.
          </p>
          <div className={styles['mech-grid']}>
            <div className={styles['mech-card']}>
              <div className={styles['mech-label']}>VCS · Vibration Conduction Sensor</div>
              <div className={styles['mech-title']}>
                iOS bloquea la grabación de llamadas. No es un bug — es una decisión de Apple.
              </div>
              <div className={styles['mech-body']}>
                Ninguna app puede acceder al audio de una llamada de iPhone por software. Plaud lo
                resuelve con un sensor físico que mide la vibración del teléfono durante la llamada y la
                convierte en audio con fidelidad — un proceso externo al sistema operativo que iOS no
                puede bloquear.
              </div>
              <div className={styles['mech-tag']}>🍎 El único sistema que graba llamadas en iPhone</div>
            </div>
            <div className={styles['mech-card']}>
              <div className={styles['mech-label']}>Tres motores de IA en simultáneo</div>
              <div className={styles['mech-title']}>
                GPT-5, Claude Sonnet 4 y Gemini 2.5 Pro procesan cada conversación al mismo tiempo.
              </div>
              <div className={styles['mech-body']}>
                Plaud no elige un modelo por reunión: los tres procesan el audio en paralelo y el sistema
                sintetiza el mejor resultado posible. Para acceder a los tres, Plaud debió pasar los
                controles de seguridad y compliance de OpenAI, Anthropic y Google — no es un argumento de
                marketing, es una validación técnica.
              </div>
              <div className={styles['mech-tag']}>
                🧠 Único dispositivo con acceso simultáneo a los tres
              </div>
            </div>
            <div className={styles['mech-card']}>
              <div className={styles['mech-label']}>Mapa Mental automático</div>
              <div className={styles['mech-title']}>
                Cada reunión con familias se convierte en un mapa visual de acuerdos, no solo en una
                transcripción.
              </div>
              <div className={styles['mech-body']}>
                Terminada la reunión, Plaud genera un Mapa Mental de los temas tratados y cómo se
                conectan — para que dirección y familia recuerden lo mismo, sin reinterpretar el acta.
              </div>
              <div className={styles['mech-tag']}>🧭 Los acuerdos, de un vistazo</div>
            </div>
            <div className={styles['mech-card']}>
              <div className={styles['mech-label']}>Entrada multimodal</div>
              <div className={styles['mech-title']}>
                Plaud no solo graba la reunión. También registra lo que fotografiás.
              </div>
              <div className={styles['mech-body']}>
                Un boletín, una nota firmada, un informe — Plaud suma esas imágenes como contexto junto
                con el audio de la reunión.
              </div>
              <div className={styles['mech-tag']}>📎 Audio + documento, en un mismo resumen</div>
            </div>
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className={styles.section} id="como-funciona" style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Cómo funciona · Plantillas · Métricas</div>
        <h2 className={styles['section-title']}>Impacto desde el día 1</h2>
        <div
          style={{
            background: 'var(--gray-100)',
            borderLeft: '3px solid var(--blue)',
            borderRadius: '8px',
            padding: '20px 24px',
            margin: '20px 0 24px',
            maxWidth: '680px',
          }}
        >
          <p style={{ fontSize: '19px', fontWeight: 700, color: 'var(--black)', lineHeight: 1.4, marginBottom: '8px' }}>
            El cerebro no es la inteligencia artificial. Es el docente.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            Plaud es el asistente ejecutivo del acta institucional: precisión, optimización del tiempo y
            liberación de carga operativa — para que el equipo directivo invierta su tiempo en los
            alumnos, no en transcribir reuniones a mano.
          </p>
        </div>
        <p className={styles['section-sub']}>
          Una institución con 40 docentes genera más de 200 hs. de conversación académica por semana. Hoy,
          menos del 5% queda documentado.
        </p>
        <div className={styles['flow-grid']}>
          <div className={styles['flow-card']}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>🎙️</div>
              <div>
                <div className={styles['flow-card-label']}>01 · Captura (Activo base)</div>
                <div className={styles['flow-card-title']}>Graba offline durante la clase o reunión</div>
              </div>
            </div>
            <div className={styles['flow-card-body']}>
              Elimina la carga operativa de transcribir a mano: grabación offline, sin internet, sin
              celular visible, sin interrumpir. El tiempo que libera es el activo base de todo lo que
              sigue.
            </div>
          </div>
          <div className={styles['flow-card']}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>📋</div>
              <div>
                <div className={styles['flow-card-label']}>02 · Estructura (Motor)</div>
                <div className={styles['flow-card-title']}>30 plantillas académicas</div>
              </div>
            </div>
            <div className={styles['flow-card-body']}>
              Tres motores de IA en simultáneo identifican y estructuran lo hablado — clase magistral ·
              claustro · tutoría · seguimiento de alumno · y más, sin intervención manual. Este es el
              motor que convierte el tiempo liberado en material utilizable.
            </div>
          </div>
          <div className={styles['flow-card']}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>🗂️</div>
              <div>
                <div className={styles['flow-card-label']}>03 · Organiza (Vía)</div>
                <div className={styles['flow-card-title']}>Repositorio institucional</div>
              </div>
            </div>
            <div className={styles['flow-card-body']}>
              Por materia, docente, nivel y fecha, buscable y reutilizable — la vía que lleva lo
              estructurado hacia tu activo de infraestructura documental.
            </div>
          </div>
          <div className={`${styles['flow-card']} ${styles.accent}`}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>⚡</div>
              <div>
                <div className={styles['flow-card-label']}>04 · Automatiza (Velocidad)</div>
                <div className={styles['flow-card-title']}>AutoFlow</div>
              </div>
            </div>
            <div className={styles['flow-card-body']}>
              Procesa y distribuye por palabra clave, sin intervención manual. Configurás una vez, y toda
              la institución invierte su tiempo en los alumnos, no en tareas repetidas.
            </div>
          </div>
        </div>
        <div className={styles['metrics-row']}>
          <div className={styles['metric-card']}>
            <div className={styles['metric-n']}>3 min</div>
            <div className={styles['metric-l']}>Transcripción lista</div>
            <div className={styles['metric-d']}>Desde el fin de la clase</div>
          </div>
          <div className={styles['metric-card']}>
            <div className={styles['metric-n']}>100%</div>
            <div className={styles['metric-l']}>Offline en el aula</div>
            <div className={styles['metric-d']}>Sin internet ni nube durante la clase</div>
          </div>
          <div className={styles['metric-card']}>
            <div className={styles['metric-n']}>0</div>
            <div className={styles['metric-l']}>Intervención manual</div>
            <div className={styles['metric-d']}>AutoFlow procesa solo</div>
          </div>
          <div className={styles['metric-card']}>
            <div className={styles['metric-n']}>Día 1</div>
            <div className={styles['metric-l']}>Primer activo generado</div>
            <div className={styles['metric-d']}>La institución empieza a acumular</div>
          </div>
        </div>
      </div>

      {/* PLANTILLAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Templates calibrados para el sector</div>
        <h2 className={styles['section-title']} style={{ fontSize: '30px' }}>
          30 plantillas específicas para secundario
        </h2>
        <p className={styles['section-sub']}>
          Listas desde el día 1 · vocabulario institucional. Único canal oficial con templates calibrados
          por sector. El acta institucional no es solo registro — es la imagen de profesionalismo que tu
          institución proyecta ante familias, supervisión y el equipo docente. Y si tu institución tiene
          necesidades puntuales: el mismo Sistema de Diagnóstico único ajusta la biblioteca a tu realidad
          exacta.
        </p>
        <div className={styles['plantillas-grid']}>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}>
              <div className={styles['plantilla-name']}>Reuniones con Familias</div>
              <div className={styles['plantilla-n']}>8</div>
            </div>
            <div className={styles['plantilla-items']}>
              Admisión
              <br />
              Seguimiento de alumno
              <br />
              Situación de conducta
              <br />
              Comunicación de resultados
            </div>
          </div>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}>
              <div className={styles['plantilla-name']}>Gestión Docente y Claustro</div>
              <div className={styles['plantilla-n']}>8</div>
            </div>
            <div className={styles['plantilla-items']}>
              Reunión de claustro
              <br />
              Planificación curricular
              <br />
              Evaluación docente
              <br />
              Coordinación de área
            </div>
          </div>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}>
              <div className={styles['plantilla-name']}>Supervisión y Dirección</div>
              <div className={styles['plantilla-n']}>7</div>
            </div>
            <div className={styles['plantilla-items']}>
              Visita de supervisión
              <br />
              Reunión de dirección
              <br />
              Auditoría institucional
            </div>
          </div>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}>
              <div className={styles['plantilla-name']}>Vida Institucional</div>
              <div className={styles['plantilla-n']}>7</div>
            </div>
            <div className={styles['plantilla-items']}>
              Orientación vocacional
              <br />
              Consejo de convivencia
              <br />
              Eventos institucionales
            </div>
          </div>
        </div>
      </div>

      {/* SEGURIDAD */}
      <section
        className={styles.section}
        id="seguridad"
        style={{ background: 'var(--gray-100)', maxWidth: '100%', padding: '80px 0' }}
      >
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles['section-eyebrow']}>Seguridad institucional · Lo que las apps no garantizan</div>
          <h2 className={styles['section-title']}>
            Lo que se dice en tu institución
            <br />
            te pertenece. Siempre.
          </h2>
          <div className={styles['seg-grid']}>
            <div>
              <p className={styles['seg-body']}>
                Entrevistas con alumnos, orientación vocacional, situaciones familiares, decisiones de
                claustro, expedientes académicos.{' '}
                <strong>
                  Información que no puede circular en servidores sin control de privacidad certificado.
                </strong>
              </p>
              <p className={styles['seg-body']} style={{ marginTop: '14px' }}>
                La mayoría de las apps de transcripción gratuitas no especifican dónde almacenan los
                datos, si los usan para entrenar modelos o si los comparten con terceros.
              </p>
              <div className={styles['seg-alert']}>
                ⚠️ Una app gratuita que transcribe la entrevista de orientación de un menor puede estar
                almacenando esa conversación en servidores sin certificación alguna — y la institución no
                lo sabe.
              </div>
            </div>
            <div>
              <div className={styles['seg-cert-grid']}>
                {certs.map((c) => (
                  <div key={c.alt} className={styles['seg-cert-card']}>
                    <img src={c.img} alt={c.alt} />
                    <div className={styles['seg-cert-caption']}>{c.caption}</div>
                  </div>
                ))}
              </div>
              <div className={styles['cert-footer']}>
                Los datos de Plaud no se usan para entrenar modelos de IA · El usuario es el único
                propietario
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANTILLAS PERSONALIZADAS */}
      <PlantillasPersonalizadas niche="educacion" rubro="tu institución" />

      {/* OFERTA */}
      <div className={styles.section} id="adquirir">
        <div className={styles['section-eyebrow']}>Lo que incluye tu Plaud</div>
        <h2 className={styles['section-title']}>
          Todo lo que necesitás desde
          <br />
          el primer día
        </h2>
        <div className={styles['empresas-features']} style={{ marginTop: '32px', maxWidth: '640px' }}>
          <div className={styles['empresas-feature']}>
            <div className={styles['empresas-feature-icon']}>✅</div>
            <div>
              <div className={styles['empresas-feature-title']}>Dispositivo Plaud Note</div>
              <div className={styles['empresas-feature-desc']}>
                Captura offline durante la clase o reunión, sin interrumpir. Sin necesidad de usar el
                celular, notebook o PC.
              </div>
            </div>
          </div>
          <div className={styles['empresas-feature']}>
            <div className={styles['empresas-feature-icon']}>✅</div>
            <div>
              <div className={styles['empresas-feature-title']}>30 plantillas específicas para secundario</div>
              <div className={styles['empresas-feature-desc']}>
                Reuniones con familias · claustro · supervisión · vida institucional.
              </div>
            </div>
          </div>
          <div className={styles['empresas-feature']}>
            <div className={styles['empresas-feature-icon']}>✅</div>
            <div>
              <div className={styles['empresas-feature-title']}>
                Guía de configuración inicial
              </div>
              <div className={styles['empresas-feature-desc']}>
                Puesta en marcha guiada por WhatsApp con el equipo de Plaud Argentina.
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--gray-700)', fontStyle: 'italic', marginTop: '24px', maxWidth: '560px' }}>
          De la reunión documentada al activo de infraestructura documental para el crecimiento
          institucional.
        </p>
        <div className={styles['hero-actions']} style={{ marginTop: '32px' }}>
          <a
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20adquirir%20Plaud%20para%20mi%20instituci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['btn-primary']}
          >
            Adquirir Plaud →
          </a>
          <a href="#equipo" className={styles['btn-secondary']}>
            Somos institución — ver Plaud Team
          </a>
        </div>
      </div>

      {/* GARANTIA / PILOTO */}
      <div className={styles.section}>
        <div className={styles.garantia}>
          <div>
            <h2 className={styles['garantia-title']}>
              Piloto de
              <br />
              2 semanas.
            </h2>
            <p className={styles['garantia-body']} style={{ marginTop: '12px' }}>
              Equipo de admisión + 1 orientador + 1 preceptor, durante 2 semanas. Primera entrevista de
              admisión y primera reunión con familia documentadas desde el primer día. Revisión con el
              rector o directivo a los 14 días.
              <br />
              <br />
              Sin compromiso de continuar — cancelás cuando quieras durante el piloto.
            </p>
            <a
              href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20empezar%20el%20piloto%20de%20Plaud%20en%20mi%20instituci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['garantia-btn']}
            >
              Empezar el piloto →
            </a>
          </div>
          <div className={styles['garantia-badge']}>
            <div className={styles['garantia-n']}>14</div>
            <div className={styles['garantia-l']}>días para evaluar el impacto real</div>
            <div className={styles['garantia-d']}>Con el rector o directivo institucional.</div>
            <div className={styles['garantia-includes']}>
              <div className={styles['garantia-includes-label']}>Roadmap</div>
              <div className={styles['garantia-includes-body']}>
                ✓ Semana 1: piloto admisión y familias
                <br />
                ✓ Mes 1: expansión a tutorías
                <br />
                ✓ Mes 2–3: integración full, AutoFlow activo
                <br />
                ✓ Mes 4+: Plaud como protocolo institucional
                <br />
                ✓ Soporte técnico de por vida
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLAUD TEAM */}
      <section className={styles.section} id="equipo">
        <div className={styles['section-eyebrow']}>Plaud para Empresas · Instituciones educativas</div>
        <h2 className={styles['section-title']}>
          El workspace institucional,
          <br />
          centralizado
        </h2>
        <div className={styles['empresas-grid']}>
          <div>
            <p
              className={styles['section-sub']}
              style={{ fontWeight: 700, fontSize: '19px', color: 'var(--black)', maxWidth: 'none' }}
            >
              Cuando termina la reunión con la familia del alumno, ¿queda registro exacto — o depende de la
              memoria del docente que estuvo presente?
            </p>
            <div className={styles['empresas-features']}>
              <div className={styles['empresas-feature']}>
                <div className={styles['empresas-feature-icon']}>🗂️</div>
                <div>
                  <div className={styles['empresas-feature-title']}>
                    El conocimiento queda en la institución
                  </div>
                  <div className={styles['empresas-feature-desc']}>
                    Cada reunión documentada pertenece a la institución, no al celular del docente.
                  </div>
                </div>
              </div>
              <div className={styles['empresas-feature']}>
                <div className={styles['empresas-feature-icon']}>🔐</div>
                <div>
                  <div className={styles['empresas-feature-title']}>Notas privadas por defecto</div>
                  <div className={styles['empresas-feature-desc']}>
                    Cada docente comparte lo que elige — pero los acuerdos institucionales no se van con
                    él.
                  </div>
                </div>
              </div>
              <div className={styles['empresas-feature']}>
                <div className={styles['empresas-feature-icon']}>👁️</div>
                <div>
                  <div className={styles['empresas-feature-title']}>
                    La directora tiene visibilidad institucional
                  </div>
                  <div className={styles['empresas-feature-desc']}>
                    Del workspace completo, sin repetir el contexto cada vez.
                  </div>
                </div>
              </div>
              <div className={styles['empresas-feature']}>
                <div className={styles['empresas-feature-icon']}>🔗</div>
                <div>
                  <div className={styles['empresas-feature-title']}>
                    Consultar por integraciones disponibles
                  </div>
                  <div className={styles['empresas-feature-desc']}>
                    Automatizá el flujo de cada reunión para que el equipo directivo trabaje con mayor
                    rapidez.
                  </div>
                </div>
              </div>
              <div className={styles['empresas-feature']}>
                <div className={styles['empresas-feature-icon']}>🎓</div>
                <div>
                  <div className={styles['empresas-feature-title']}>Onboarding personalizado</div>
                  <div className={styles['empresas-feature-desc']}>
                    Configuración institucional completa, a cargo de un especialista del equipo.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['empresas-card']}>
            <div className={styles['empresas-stat']}>
              <div className={styles['empresas-stat-n']}>30</div>
              <div className={styles['empresas-stat-l']}>Plantillas académicas listas desde el día 1</div>
            </div>
            <div className={styles['empresas-divider']} />
            <div className={styles['empresas-stat']}>
              <div className={styles['empresas-stat-n']}>6 meses</div>
              <div className={styles['empresas-stat-l']}>
                de ventaja frente a instituciones que todavía no adoptaron IA conversacional
              </div>
            </div>
            <div className={styles['empresas-divider']} />
            <a
              href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20instituci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['empresas-cta']}
            >
              Consultar por Plaud Team →
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className={styles['cta-section']}>
        <p
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: 'var(--gray-600)',
            maxWidth: '640px',
            margin: '0 auto 28px',
            lineHeight: 1.6,
          }}
        >
          "Cuando tu institución documenta lo que acuerda con cada familia, dejás de depender de la
          memoria de quien estuvo presente. El registro exacto te protege a vos. Y le da certeza a la
          familia."
        </p>
        <h2 className={styles['cta-title']}>
          ¿Estás listo para sumar este activo de crecimiento a tu institución?
        </h2>
        <p className={styles['cta-sub']}>Respuesta inmediata en contacto directo.</p>
        <div className={styles['cta-buttons']}>
          <a
            className={`${styles['cta-btn']} ${styles['cta-btn-primary']}`}
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20instituci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['cta-btn-tag']}>Institución · Equipo · Varios dispositivos</div>
            <div className={styles['cta-btn-title']}>💬 Consultar por Plaud Team</div>
            <div className={styles['cta-btn-desc']}>
              WhatsApp con Silvana · Demo, cotización y propuesta personalizada
            </div>
          </a>
          <a
            className={`${styles['cta-btn']} ${styles['cta-btn-secondary']}`}
            href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['cta-btn-tag']}>Un dispositivo · Uso individual</div>
            <div className={styles['cta-btn-title']}>🛒 Adquirir Plaud Note</div>
            <div className={styles['cta-btn-desc']}>Canal Oficial Argentina · Envío a todo el país</div>
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles['footer-left']}>
          <img src="/logo.webp" alt="Plaud" style={{ height: 16, width: 'auto', objectFit: 'contain' }} />
          <span>
            <strong>Plaud Argentina</strong> · Canal Oficial
          </span>
        </div>
        <div className={styles['footer-right']}>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#equipo">Plaud Team</a>
          <ChangeNicheLink />
        </div>
      </footer>
    </>
  );
}
