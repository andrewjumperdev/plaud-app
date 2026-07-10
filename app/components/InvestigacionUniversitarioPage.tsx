/* eslint-disable @next/next/no-img-element */

import NicheClassifier from "./NicheClassifier";
import ChangeNicheLink from "./ChangeNicheLink";
import styles from "./InvestigacionUniversitarioPage.module.css";

export default function InvestigacionUniversitarioPage() {
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
          <a href="#adquirir" className={styles['nav-cta']} style={{ color: '#fff' }}>Adquirir →</a>
        </div>
      </nav>

      {/* HERO */}
      <div className={styles['hero-wrap']}>
        <div className={styles.hero}>
          <div>
            <div className={styles['hero-eyebrow']}>Educación Universitaria · Investigación · Posgrado</div>
            <h1 className={styles['hero-title']}><span style={{ fontWeight: 300 }}>La mayoría de las tesis que no se terminan</span> no mueren por falta de ideas.</h1>
            <div className={styles['hero-subtitle-large']}>Mueren en el trabajo de campo.</div>
            <p className={styles['hero-sub']}>Entrevistas de campo · reuniones con directores · seminarios · clases. Tu cuaderno de campo digital, con el mismo sistema de documentación que el del escritorio — el activo de infraestructura documental para el crecimiento de tu investigación.</p>
            <div className={styles['hero-actions']}>
              <a href="#adquirir" className={styles['btn-primary']}>Adquirir Plaud para mi investigación</a>
              <a href="#equipo" className={styles['btn-secondary']}>Somos unidad académica — ver Plaud Team</a>
            </div>
            <div className={styles['hero-proof']}>
              <div className={styles['hero-proof-item']}><div className={styles['hero-proof-n']}>30</div><div className={styles['hero-proof-l']}>Plantillas</div></div>
              <div className={styles['hero-proof-sep']}></div>
              <div className={styles['hero-proof-item']}><div className={styles['hero-proof-n']}>6</div><div className={styles['hero-proof-l']}>Certificaciones</div></div>
              <div className={styles['hero-proof-sep']}></div>
              <div className={styles['hero-proof-item']}><div className={styles['hero-proof-n']}>112</div><div className={styles['hero-proof-l']}>Idiomas soportados</div></div>
              <div className={styles['hero-proof-sep']}></div>
              <div className={styles['hero-proof-item']}><div className={styles['hero-proof-n']}>Día 1</div><div className={styles['hero-proof-l']}>Primer impacto</div></div>
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
                <div className={styles['device-tagline']}>Entrevistas de campo, reuniones de dirección de tesis y clases — documentadas sin interrumpir.</div>
                <div className={styles['device-specs']}>
                  <div className={styles['device-spec']}><div className={styles['device-spec-dot']}></div>4 micrófonos MEMS · AI Beamforming</div>
                  <div className={styles['device-spec']}><div className={styles['device-spec-dot']}></div>Speaker ID — identifica cada hablante</div>
                  <div className={styles['device-spec']}><div className={styles['device-spec-dot']}></div>Offline 100% · funciona en campo</div>
                  <div className={styles['device-spec']}><div className={styles['device-spec-dot']}></div>112 idiomas · traducción automática</div>
                </div>
                <div className={styles['device-divider']}></div>
                <div className={styles['device-price-block']}>
                  <div className={styles['device-price-label']}>Canal Oficial Argentina</div>
                  <a href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro%20para%20investigaci%C3%B3n" target="_blank" className={styles['device-cta']}>Adquirir →</a>
                  <div className={styles['device-note']}>Soporte local · Garantía · Envío a todo el país</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['amplify-strip']}><span className={styles.ah}>AMPLIFY HUMAN</span><span className={styles.i}>INTELLIGENCE</span></div>

      {/* CONFIDENCIALIDAD */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['confid-strip']}>
          <div className={styles['confid-strip-icon']}>🔒</div>
          <div className={styles['confid-strip-text']}><strong>Las conversaciones de investigación son confidenciales por ley.</strong> Entrevistas con informantes, datos de campo, decisiones de cátedra. Información que no puede circular en servidores de apps gratuitas sin control de privacidad. <a href="#seguridad" style={{ color: 'var(--black)', fontWeight: 700 }}>Ver certificaciones ↓</a></div>
        </div>
      </div>

      {/* EL PROBLEMA */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>El problema · 4 cuellos de botella que toda tesis cualitativa conoce</div>
        <h2 className={styles['section-title']}>La precisión en la documentación es el activo de crecimiento institucional.</h2>
        <p className={styles['section-sub']}>El conocimiento producido en conversación no tiene el mismo sistema de documentación que el del escritorio. Cuatro cuellos de botella donde la precisión decide — y la fase exacta de Plaud que la sostiene.</p>
        <div className={styles['pain-grid']}>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Docencia</div>
            <div className={styles['pain-title']}>El debate espontáneo que fue lo mejor de la clase — y que se perdió</div>
            <div className={styles['pain-body']}>Lo que emerge en el aula no tiene el mismo sistema de documentación que lo que se prepara en el escritorio. El intercambio más valioso desaparece cuando termina.</div>
            <div className={styles['pain-win']}>Con Plaud: la clase queda capturada sin interrumpir el dictado.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)', marginTop: 10 }}>→ Resuelto en la fase 01 · Captura</div>
          </div>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Investigación de campo</div>
            <div className={styles['pain-title']}>La cita exacta del informante que no se encuentra cuando se necesita</div>
            <div className={styles['pain-body']}>Las entrevistas se reconstruyen de memoria o de notas apresuradas. Cuando llega el momento de escribir el paper, la cita textual no aparece.</div>
            <div className={styles['pain-win']}>Con Plaud: cada entrevista queda transcripta con atribución exacta — la cita textual, con quién la dijo y cuándo.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)', marginTop: 10 }}>→ Resuelto en la fase 02 · Estructura</div>
          </div>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Coordinación académica</div>
            <div className={styles['pain-title']}>Las decisiones de cátedra o de investigación sin trazabilidad</div>
            <div className={styles['pain-body']}>Las decisiones de coordinación viven en el recuerdo de quien coordinó la reunión. No hay registro de qué se acordó ni quién se comprometió.</div>
            <div className={styles['pain-win']}>Con Plaud: el workspace del equipo centraliza lo que se decide en cada reunión — buscable, disponible para quien lo necesite.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)', marginTop: 10 }}>→ Resuelto en la fase 03 · Organiza</div>
          </div>
          <div className={styles['pain-card']}>
            <div className={styles['pain-eyebrow']}>Producción académica</div>
            <div className={styles['pain-title']}>40 horas de capacitación sin datos de qué funcionó y qué no</div>
            <div className={styles['pain-body']}>Las preguntas del grupo que revelaban lo que había que mejorar — ningún sistema los captura si no hay alguien tomando nota.</div>
            <div className={styles['pain-win']}>Con Plaud: cada sesión alimenta automáticamente la mejora continua — sin que nadie tenga que procesarlo a mano.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)', marginTop: 10 }}>→ Resuelto en la fase 04 · Automatiza</div>
          </div>
        </div>
        <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6, maxWidth: 640, marginTop: 24, borderLeft: '2px solid var(--gray-200)', paddingLeft: 16 }}>La precisión en la documentación no termina en la tesis que se defiende. Una investigación que documenta con este nivel de detalle construye, entrevista a entrevista, un activo de infraestructura documental — la base sobre la que crece la unidad académica, no solo la que resuelve el paper de hoy.</p>
      </div>

      {/* ANTES DE SEGUIR */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Antes de seguir</div>
        <h2 className={styles['section-title']} style={{ fontSize: 28 }}>Cuatro preguntas para tu investigación</h2>
        <div className={styles['q-list']}>
          <div className={styles['q-item']}><div className={styles['q-n']}>1</div><div><div className={styles['q-text']}>¿La última entrevista de campo quedó transcripta con la cita exacta del informante — o vas a tener que reconstruirla de memoria cuando escribas el paper?</div><div className={styles['q-risk']}>RIESGO: cita textual perdida</div></div></div>
          <div className={styles['q-item']}><div className={styles['q-n']}>2</div><div><div className={styles['q-text']}>El debate más rico que surgió en tu última clase — ¿quedó registrado, o desapareció apenas terminó la sesión?</div><div className={styles['q-risk']}>RIESGO: conocimiento no capturado</div></div></div>
          <div className={styles['q-item']}><div className={styles['q-n']}>3</div><div><div className={styles['q-text']}>Después de una capacitación o taller, ¿tenés datos concretos de qué funcionó y qué no — o solo una impresión general?</div><div className={styles['q-risk']}>RIESGO: mejora continua sin evidencia</div></div></div>
          <div className={styles['q-item']}><div className={styles['q-n']}>4</div><div><div className={styles['q-text']}>Las decisiones de la última reunión de cátedra — ¿quedaron con responsables y fecha, o dependen de que alguien se acuerde?</div><div className={styles['q-risk']}>RIESGO: decisión académica sin trazabilidad</div></div></div>
        </div>
      </div>

      {/* POR QUE NO EL CELULAR */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Hardware · Por qué el celular no alcanza en campo</div>
        <h2 className={styles['section-title']} style={{ fontSize: 30 }}>¿Por qué no usar el celular o una app?</h2>
        <p className={styles['section-sub']}>Las apps de transcripción virtual funcionan en Zoom y en Meet. ¿Y en la entrevista de campo en una localidad sin internet? ¿Y en el focus group donde el celular visible cambia lo que dicen los participantes? ¿Y en la observación etnográfica donde cualquier dispositivo rompe la naturalidad del intercambio?</p>
        <div className={styles['stat-callout']}>
          <div className={styles['stat-callout-n']}>70%</div>
          <div className={styles['stat-callout-t']}>del conocimiento académico se produce en conversaciones presenciales.<br />
            <strong>Las apps capturan el 30% que ya está en pantalla.</strong></div>
        </div>
        <div className={styles['hw-list']} style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 24px' }}>
          <div className={styles['hw-item']}><div className={styles['hw-dot']}></div>4 micrófonos MEMS · captura hasta 5 metros</div>
          <div className={styles['hw-item']}><div className={styles['hw-dot']}></div>Speaker ID en cada fragmento de la entrevista</div>
          <div className={styles['hw-item']}><div className={styles['hw-dot']}></div>Reducción de ruido de campo, viento, ambientes ruidosos</div>
          <div className={styles['hw-item']}><div className={styles['hw-dot']}></div>Offline 100% en cualquier localidad</div>
          <div className={styles['hw-item']}><div className={styles['hw-dot']}></div>Sin celular visible durante la entrevista</div>
          <div className={styles['hw-item']}><div className={styles['hw-dot']}></div>112 idiomas para investigación comparada</div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className={styles.section} id="como-funciona" style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Cómo funciona · Plantillas · Métricas</div>
        <h2 className={styles['section-title']}>Impacto desde el día 1</h2>
        <div style={{ background: 'var(--gray-100)', borderLeft: '3px solid var(--blue)', borderRadius: 8, padding: '20px 24px', margin: '20px 0 24px', maxWidth: 680 }}>
          <p style={{ fontSize: 19, fontWeight: 700, color: 'var(--black)', lineHeight: 1.4, marginBottom: 8 }}>El cerebro no es la inteligencia artificial. Es el investigador.</p>
          <p style={{ fontSize: 14, color: 'var(--gray-700)', lineHeight: 1.6 }}>Plaud es el asistente ejecutivo del cuaderno de campo: precisión, optimización del tiempo y liberación de carga operativa — para que el criterio se invierta en el análisis, no en transcribir entrevistas a mano.</p>
        </div>
        <p className={styles['section-sub']}>Una institución con 40 docentes genera más de 200 hs. de conversación académica por semana. Hoy, menos del 5% queda documentado.</p>
        <div className={styles['flow-grid']}>
          <div className={styles['flow-card']}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>🎙️</div>
              <div><div className={styles['flow-card-label']}>Captura</div><div className={styles['flow-card-title']}>Plaud</div></div>
            </div>
            <div className={styles['flow-card-body']}>Graba offline durante la entrevista, la clase o la reunión. Sin interrumpir.</div>
          </div>
          <div className={styles['flow-card']}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>📋</div>
              <div><div className={styles['flow-card-label']}>Estructura</div><div className={styles['flow-card-title']}>30 plantillas académicas</div></div>
            </div>
            <div className={styles['flow-card-body']}>Entrevista cualitativa · reunión con director · seminario · clase magistral.</div>
          </div>
          <div className={styles['flow-card']}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>🗂️</div>
              <div><div className={styles['flow-card-label']}>Organiza</div><div className={styles['flow-card-title']}>Repositorio de investigación</div></div>
            </div>
            <div className={styles['flow-card-body']}>Por proyecto, informante y fecha. Buscable y reutilizable.</div>
          </div>
          <div className={`${styles['flow-card']} ${styles.accent}`}>
            <div className={styles['flow-card-header']}>
              <div className={styles['flow-card-icon']}>⚡</div>
              <div><div className={styles['flow-card-label']}>Automatiza</div><div className={styles['flow-card-title']}>AutoFlow</div></div>
            </div>
            <div className={styles['flow-card-body']}>Procesa y distribuye por palabra clave. Sin intervención manual.</div>
          </div>
        </div>
        <div className={styles['metrics-row']}>
          <div className={styles['metric-card']}><div className={styles['metric-n']}>3 min</div><div className={styles['metric-l']}>Transcripción lista</div><div className={styles['metric-d']}>Desde el fin de la sesión</div></div>
          <div className={styles['metric-card']}><div className={styles['metric-n']}>100%</div><div className={styles['metric-l']}>Offline en campo</div><div className={styles['metric-d']}>Sin internet en cualquier localidad</div></div>
          <div className={styles['metric-card']}><div className={styles['metric-n']}>112</div><div className={styles['metric-l']}>Idiomas</div><div className={styles['metric-d']}>Investigación comparada</div></div>
          <div className={styles['metric-card']}><div className={styles['metric-n']}>Día 1</div><div className={styles['metric-l']}>Primer activo generado</div><div className={styles['metric-d']}>El repositorio empieza a acumular</div></div>
        </div>
      </div>

      {/* PLANTILLAS */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles['section-eyebrow']}>Templates calibrados para el nicho</div>
        <h2 className={styles['section-title']} style={{ fontSize: 30 }}>30 plantillas específicas para investigación</h2>
        <p className={styles['section-sub']}>Listas desde el día 1 · vocabulario académico. Única distribución en Argentina con templates calibradas por nicho. El cuaderno de campo no es solo registro — es el estándar de rigurosidad metodológica que tu investigación proyecta ante directores, jurados y pares evaluadores.</p>
        <div className={styles['plantillas-grid']}>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}><div className={styles['plantilla-name']}>Investigación de Campo</div><div className={styles['plantilla-n']}>9</div></div>
            <div className={styles['plantilla-items']}>Entrevista cualitativa<br />Grupo focal<br />Observación participante<br />Codificación de datos</div>
          </div>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}><div className={styles['plantilla-name']}>Docencia</div><div className={styles['plantilla-n']}>7</div></div>
            <div className={styles['plantilla-items']}>Clase magistral<br />Seminario<br />Tutoría de tesis<br />Defensa de tesis</div>
          </div>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}><div className={styles['plantilla-name']}>Producción Académica</div><div className={styles['plantilla-n']}>7</div></div>
            <div className={styles['plantilla-items']}>Capacitación<br />Ponencia<br />Revisión de pares</div>
          </div>
          <div className={styles['plantilla-card']}>
            <div className={styles['plantilla-head']}><div className={styles['plantilla-name']}>Coordinación Académica</div><div className={styles['plantilla-n']}>7</div></div>
            <div className={styles['plantilla-items']}>Reunión de cátedra<br />Reunión con director de tesis<br />Comité académico</div>
          </div>
        </div>
      </div>

      {/* SEGURIDAD */}
      <section className={styles.section} id="seguridad" style={{ background: 'var(--gray-100)', maxWidth: '100%', padding: '80px 0' }}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={styles['section-eyebrow']}>Seguridad institucional · Lo que las apps no garantizan</div>
          <h2 className={styles['section-title']}>Tu cuaderno de campo te<br />pertenece. Siempre.</h2>
          <div className={styles['seg-grid']}>
            <div>
              <p className={styles['seg-body']}>Entrevistas con informantes, datos de campo sensibles, decisiones de cátedra o de equipo de investigación. <strong>Información que no puede circular en servidores sin control de privacidad certificado.</strong></p>
              <p className={styles['seg-body']} style={{ marginTop: 14 }}>La mayoría de las apps de transcripción virtual no especifican dónde almacenan los datos, si los usan para entrenar modelos o si los comparten con terceros.</p>
              <div className={styles['seg-alert']}>⚠️ Una app gratuita que transcribe una entrevista de campo con datos sensibles del informante puede estar almacenando esa conversación en servidores sin certificación alguna.</div>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 12 }}>
                <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 10, padding: 16, textAlign: 'center' }}><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--black)' }}>ISO 27001</div><div style={{ fontSize: 11, color: 'var(--gray-600)', marginTop: 4, lineHeight: 1.4 }}>Gestión de seguridad de la información</div></div>
                <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 10, padding: 16, textAlign: 'center' }}><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--black)' }}>ISO 27701</div><div style={{ fontSize: 11, color: 'var(--gray-600)', marginTop: 4, lineHeight: 1.4 }}>Gestión de privacidad de datos</div></div>
                <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 10, padding: 16, textAlign: 'center' }}><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--black)' }}>SOC 2 Type II</div><div style={{ fontSize: 11, color: 'var(--gray-600)', marginTop: 4, lineHeight: 1.4 }}>Auditoría independiente de controles</div></div>
                <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 10, padding: 16, textAlign: 'center' }}><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--black)' }}>GDPR</div><div style={{ fontSize: 11, color: 'var(--gray-600)', marginTop: 4, lineHeight: 1.4 }}>Regulación europea de datos</div></div>
                <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 10, padding: 16, textAlign: 'center' }}><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--black)' }}>HIPAA</div><div style={{ fontSize: 11, color: 'var(--gray-600)', marginTop: 4, lineHeight: 1.4 }}>Estándar de salud de EE.UU.</div></div>
                <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 10, padding: 16, textAlign: 'center' }}><div style={{ fontWeight: 800, fontSize: 13, color: 'var(--black)' }}>EN 18031</div><div style={{ fontSize: 11, color: 'var(--gray-600)', marginTop: 4, lineHeight: 1.4 }}>Ciberseguridad de comunicación inalámbrica</div></div>
              </div>
              <div className={styles['cert-footer']}>Los datos de Plaud no se usan para entrenar modelos de IA · El investigador es el único propietario</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <div className={styles.section} id="adquirir">
        <div className={styles['section-eyebrow']}>Lo que incluye tu Plaud</div>
        <h2 className={styles['section-title']}>Todo lo que necesitás desde<br />el primer día</h2>
        <div className={styles['empresas-features']} style={{ marginTop: 32, maxWidth: 640 }}>
          <div className={styles['empresas-feature']}><div className={styles['empresas-feature-icon']}>✅</div><div><div className={styles['empresas-feature-title']}>Dispositivo Plaud Note</div><div className={styles['empresas-feature-desc']}>Captura offline en campo, sin interrumpir la entrevista o la clase.</div></div></div>
          <div className={styles['empresas-feature']}><div className={styles['empresas-feature-icon']}>✅</div><div><div className={styles['empresas-feature-title']}>30 plantillas específicas para investigación</div><div className={styles['empresas-feature-desc']}>Entrevista cualitativa · docencia · producción académica · coordinación.</div></div></div>
          <div className={styles['empresas-feature']}><div className={styles['empresas-feature-icon']}>✅</div><div><div className={styles['empresas-feature-title']}>Onboarding personalizado con Silvana Iriondo</div><div className={styles['empresas-feature-desc']}>Configuración completa para tu proyecto o unidad académica.</div></div></div>
        </div>
        <p style={{ fontSize: 15, color: 'var(--gray-700)', fontStyle: 'italic', marginTop: 24, maxWidth: 560 }}>Del cuaderno de campo al activo de infraestructura documental — la base sobre la que crece tu investigación.</p>
        <div className={styles['hero-actions']} style={{ marginTop: 32 }}>
          <a href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20adquirir%20Plaud%20para%20investigaci%C3%B3n" target="_blank" className={styles['btn-primary']}>Adquirir Plaud →</a>
          <a href="#equipo" className={styles['btn-secondary']}>Somos unidad académica — ver Plaud Team</a>
        </div>
      </div>

      {/* GARANTIA / PILOTO */}
      <div className={styles.section}>
        <div className={styles.garantia}>
          <div>
            <h2 className={styles['garantia-title']}>Piloto de<br />2 semanas.</h2>
            <p className={styles['garantia-body']} style={{ marginTop: 12 }}>3–5 tesistas o investigadores activos + 1 director de tesis, durante 2 semanas. Primera entrevista de campo y primera reunión de dirección documentadas desde el primer día. Revisión con decano o coordinador académico a los 14 días.</p>
            <a href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20empezar%20el%20piloto%20de%20Plaud%20para%20investigaci%C3%B3n" target="_blank" className={styles['garantia-btn']}>Empezar el piloto →</a>
          </div>
          <div className={styles['garantia-badge']}>
            <div className={styles['garantia-n']}>14</div>
            <div className={styles['garantia-l']}>días para evaluar el impacto real</div>
            <div className={styles['garantia-d']}>Con decano o coordinador académico.</div>
            <div className={styles['garantia-includes']}>
              <div className={styles['garantia-includes-label']}>Roadmap</div>
              <div className={styles['garantia-includes-body']}>✓ Semana 1: piloto campo e investigación<br />✓ Mes 1: expansión a posgrado<br />✓ Mes 2–3: integración con docencia, AutoFlow activo<br />✓ Mes 4+: Plaud como estándar de investigación</div>
            </div>
          </div>
        </div>
      </div>

      {/* PLAUD TEAM */}
      <section className={styles.section} id="equipo">
        <div className={styles['section-eyebrow']}>Plaud para Empresas · Unidades académicas</div>
        <h2 className={styles['section-title']}>El repositorio de investigación,<br />centralizado</h2>
        <div className={styles['empresas-grid']}>
          <div>
            <p className={styles['section-sub']} style={{ fontWeight: 700, fontSize: 19, color: 'var(--black)', maxWidth: 'none' }}>¿Las decisiones de coordinación de cátedra o de equipo de investigación tienen registro — o dependen de la memoria de quien estuvo presente?</p>
            <div className={styles['empresas-features']}>
              <div className={styles['empresas-feature']}><div className={styles['empresas-feature-icon']}>🗂️</div><div><div className={styles['empresas-feature-title']}>Cada investigador captura sus entrevistas</div><div className={styles['empresas-feature-desc']}>Las notas son privadas por defecto.</div></div></div>
              <div className={styles['empresas-feature']}><div className={styles['empresas-feature-icon']}>👁️</div><div><div className={styles['empresas-feature-title']}>El director de tesis tiene visibilidad institucional</div><div className={styles['empresas-feature-desc']}>Workspace del equipo o cátedra centralizado.</div></div></div>
            </div>
          </div>
          <div className={styles['empresas-card']}>
            <div className={styles['empresas-stat']}><div className={styles['empresas-stat-n']}>112</div><div className={styles['empresas-stat-l']}>Idiomas soportados para investigación comparada internacional</div></div>
            <div className={styles['empresas-divider']}></div>
            <a href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20unidad%20acad%C3%A9mica" target="_blank" className={styles['empresas-cta']}>Consultar por Plaud Team →</a>
          </div>
        </div>
      </section>

      {/* CLASIFICADOR */}
      <NicheClassifier
        q1Title="¿Para cuántas personas?"
        q1Options={[
          { value: "solo", label: "Solo para mí" },
          { value: "equipo", label: "Para 2 o más personas de mi equipo o cátedra" },
        ]}
        q2Title="¿Usás algún sistema de gestión de datos actualmente?"
        q2Options={[
          { value: "si", label: "Sí (software de análisis cualitativo u otro)" },
          { value: "no", label: "No — manejo todo por notas / grabador del celular" },
          { value: "parcial", label: "Tengo algo pero no lo uso bien" },
        ]}
        resultEquipo={<>Con equipo o cátedra, lo que te conviene es <a href="#equipo">Plaud Team →</a> — workspace institucional con notas privadas por defecto.</>}
        resultIndividual={<>Para uso individual, tu opción es <a href="#adquirir">Adquirir Plaud Note →</a> con las 30 plantillas académicas incluidas.</>}
      />

      {/* CTA FINAL */}
      <div className={styles['cta-section']}>
        <p style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--gray-600)', maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.6 }}>{'"'}Cada entrevista de campo es conocimiento que vale. La pregunta no es si vale la pena documentarla. La pregunta es cuántas horas se pierden transcribiéndola a mano antes de poder analizarla.{'"'}</p>
        <h2 className={styles['cta-title']}>Dos caminos, una decisión.</h2>
        <p className={styles['cta-sub']}>Respondemos en menos de 2 horas.</p>
        <div className={styles['cta-buttons']}>
          <a className={`${styles['cta-btn']} ${styles['cta-btn-primary']}`} href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Plaud%20Team%20para%20mi%20unidad%20acad%C3%A9mica" target="_blank">
            <div className={styles['cta-btn-tag']}>Unidad académica · Equipo · Varios dispositivos</div>
            <div className={styles['cta-btn-title']}>💬 Consultar por Plaud Team</div>
            <div className={styles['cta-btn-desc']}>WhatsApp con Silvana · Demo, cotización y propuesta personalizada</div>
          </a>
          <a className={`${styles['cta-btn']} ${styles['cta-btn-secondary']}`} href="https://wa.me/5493512673489?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud%20Note%20Pro" target="_blank">
            <div className={styles['cta-btn-tag']}>Un dispositivo · Uso individual</div>
            <div className={styles['cta-btn-title']}>🛒 Adquirir Plaud Note</div>
            <div className={styles['cta-btn-desc']}>Canal Oficial Argentina · Envío a todo el país</div>
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles['footer-left']}><strong>Plaud Argentina</strong> · Canal Oficial</div>
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
