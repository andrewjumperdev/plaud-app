import HeroVideo from "./HeroVideo";

export default function LandingPage() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Plaud" className="nav-logo-img" />
          <div className="nav-sep" />
          <span className="nav-label">Argentina · Distribución Oficial</span>
        </div>
        <a href="/store" className="nav-cta">Adquirir Plaud →</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">For Business Intelligence · Construcción &amp; Real Estate</div>
        <h1 className="hero-title">
          En construcción, cada decisión verbal tiene precio.<br />
          <em>El que la documenta primero,<br />la cobra.</em>
        </h1>
        <p className="hero-sub">
          Plaud captura cada reunión con inversores, proveedores y equipo — offline, automático,
          con identificación de hablantes. Para que nunca más pierdas lo que acordaste.
        </p>
        <div className="hero-actions">
          <a href="/store" className="btn-primary">Adquirir Plaud para mis reuniones →</a>
          <a href="/team" className="btn-secondary">¿Tenés equipo? Ver Plaud Team</a>
        </div>
        </div>
        <div className="hero-right">
          <HeroVideo />
        </div>
                <div className="hero-proof">
          <div className="proof-item">
            <span className="proof-n">2M+</span>
            <span className="proof-l">Profesionales globales</span>
          </div>
          <div className="proof-sep" />
          <div className="proof-item">
            <span className="proof-n">50</span>
            <span className="proof-l">Países</span>
          </div>
          <div className="proof-sep" />
          <div className="proof-item">
            <span className="proof-n">25</span>
            <span className="proof-l">Plantillas construcción</span>
          </div>
          <div className="proof-sep" />
          <div className="proof-item">
            <span className="proof-n">3 min</span>
            <span className="proof-l">Por documento generado</span>
          </div>
        </div>
      </div>

      {/* PAIN: 4 PROBLEMAS */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: 0 }}>
        <div className="section-eyebrow">Los 4 problemas que nadie nombra</div>
        <h2 className="section-title">¿Te resulta familiar alguna de estas situaciones?</h2>
        <p className="section-sub">
          No es falta de organización. Es que el cerebro humano no puede estar completamente
          presente en una conversación y documentarla al mismo tiempo.
        </p>
      </section>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 72px 80px' }}>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-num">01</div>
            <div className="pain-tag">Problema 01 de 04</div>
            <h3 className="pain-title">La decisión verbal que nadie registró</h3>
            <div className="pain-context">Obra · Subcontratistas · Proveedores</div>
            <p className="pain-body">
              El director de obra toma 20 decisiones por día en campo. El subcontratista acuerda
              una entrega para el viernes. El proveedor confirma el precio. El inversor acepta un
              plazo.{' '}
              <strong>
                Nada de eso queda documentado con timestamp y nombre del hablante.
              </strong>
              <br />
              <br />
              Cuando el viernes pasa sin entrega, el subcontratista dice que no acordó eso. Sin el
              registro, es empate en credibilidad — y la obra espera.
            </p>
            <div className="pain-win">
              <p>
                Plaud genera el acta de esa conversación en 3 minutos con cada palabra y cada
                responsable identificado.{' '}
                <strong>El que tiene el registro gana el conflicto.</strong>
              </p>
            </div>
          </div>

          <div className="pain-card">
            <div className="pain-num">02</div>
            <div className="pain-tag">Problema 02 de 04</div>
            <h3 className="pain-title">El desvío presupuestario sin causa trazable</h3>
            <div className="pain-context">Comité financiero · Control de costos</div>
            <p className="pain-body">
              El comité financiero muestra un desvío del 15% al cierre del mes. La causa está en
              una cadena de decisiones verbales de los últimos 30 días: una modificación de plano,
              un cambio técnico del comitente, un adicional autorizado verbalmente.{' '}
              <strong>Sin registro, el desvío no tiene causa documentada.</strong>
              <br />
              <br />
              Se paga, se absorbe, y se repite el mes siguiente.
            </p>
            <div className="pain-win">
              <p>
                Con Plaud, cada reunión genera el acta con la decisión, el responsable y el impacto.{' '}
                <strong>
                  El desvío tiene nombre, fecha y origen — no es una sorpresa del balance.
                </strong>
              </p>
            </div>
          </div>

          <div className="pain-card">
            <div className="pain-num">03</div>
            <div className="pain-tag">Problema 03 de 04</div>
            <h3 className="pain-title">
              El compromiso con el inversor que cada parte recuerda diferente
            </h3>
            <div className="pain-context">Inversores · Negociación · Seguimiento</div>
            <p className="pain-body">
              El inversor recuerda que se comprometió un retorno del 18%. La empresa recuerda que
              era entre 15 y 18%, sujeto a la velocidad de ventas. El plazo era diciembre — o
              &quot;estimado primer trimestre&quot;.{' '}
              <strong>
                Estas discrepancias no son mala fe. Son memoria humana operando sobre conversaciones
                no documentadas.
              </strong>
              <br />
              <br />
              En inversión inmobiliaria, esa ambigüedad destruye relaciones y genera litigios.
            </p>
            <div className="pain-win">
              <p>
                Plaud documenta cada palabra acordada con timestamp.{' '}
                <strong>
                  El retorno comprometido tiene fecha y contexto. La negociación no depende de la
                  memoria de nadie.
                </strong>
              </p>
            </div>
          </div>

          <div className="pain-card">
            <div className="pain-num">04</div>
            <div className="pain-tag">Problema 04 de 04</div>
            <h3 className="pain-title">
              La inteligencia de la obra que se va con quien se va
            </h3>
            <div className="pain-context">Rotación de equipos · Escalabilidad</div>
            <p className="pain-body">
              El director de obra renuncia. El nuevo necesita entender en horas lo que el anterior
              construyó en 6 meses: decisiones, acuerdos, historial de modificaciones.{' '}
              <strong>Sin sistema, eso tarda semanas y nunca es completo.</strong>
              <br />
              <br />
              Con Plaud activo desde el día uno, el nuevo accede al expediente conversacional
              completo en lenguaje natural.
            </p>
            <div className="pain-win">
              <p>
                La empresa no depende de que siempre sea la misma persona.{' '}
                <strong>
                  Eso es lo que distingue una empresa que escala de una que depende de héroes
                  individuales.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className="diff-section">
        <div className="diff-inner">
          <div className="diff-eyebrow">La pregunta que todos se hacen</div>
          <h2 className="diff-title">¿Por qué no utilizar una app desde el celular?</h2>
          <p className="diff-sub">Porque las apps desde el celular resuelven el problema equivocado.</p>
          <div className="diff-questions">
            <div className="diff-q">
              <span className="diff-q-mark">?</span>
              <span className="diff-q-text">
                Funcionan en Zoom, en Meet, en Teams. ¿Y{' '}
                <strong>en el auto de camino a la reunión con el inversor</strong>?
              </span>
            </div>
            <div className="diff-q">
              <span className="diff-q-mark">?</span>
              <span className="diff-q-text">
                ¿Y <strong>en obra cuando el proveedor dice algo que después va a negar</strong>?
              </span>
            </div>
            <div className="diff-q">
              <span className="diff-q-mark">?</span>
              <span className="diff-q-text">
                ¿Y en la reunión presencial de directorio donde{' '}
                <strong>el celular no distingue quién habla</strong>?
              </span>
            </div>
            <div className="diff-q">
              <span className="diff-q-mark">?</span>
              <span className="diff-q-text">
                ¿Y <strong>en la llamada desde iPhone que ninguna app puede grabar</strong>?
              </span>
            </div>
          </div>
          <div className="diff-stat">
            <span className="diff-stat-pct">80%</span>
            <span className="diff-stat-txt">
              de las conversaciones que valen dinero{' '}
              <strong>no suceden en una pantalla</strong>.<br />
              Las apps capturan el 20% que ya estaba grabado.{' '}
              <strong>Plaud captura el 80% que se perdía.</strong>
            </span>
          </div>
          <div className="diff-tags">
            {[
              'Offline sin internet',
              'Sin celular en la mesa',
              'Compatible con iPhone',
              'Hardware dedicado',
              'Zero data retention',
              'AI Beamforming',
              'Speaker ID — 4 MEMS mics',
            ].map((t) => (
              <span key={t} className="diff-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <section className="section how-section">
        <div className="section-eyebrow">Cómo funciona Plaud</div>
        <h2 className="how-title">Plaud cambia eso — sin agregar trabajo extra</h2>
        <div className="how-flow">
          <div className="how-row">
            <span className="how-row-n">01</span>
            <span className="how-row-step">🎙️ Capturá</span>
            <span className="how-row-desc">
              Reunión en obra, en el auto, con inversores — offline, sin internet, hasta 30 horas
              continuas
            </span>
          </div>
          <div className="how-arrow">↓</div>
          <div className="how-row">
            <span className="how-row-n">02</span>
            <span className="how-row-step">⚡ Transcribí</span>
            <span className="how-row-desc">
              Al sincronizar: acuerdos, responsables, próximos pasos — en 3 minutos, automático
            </span>
          </div>
          <div className="how-arrow">↓</div>
          <div className="how-row">
            <span className="how-row-n">03</span>
            <span className="how-row-step">🔍 Consultá</span>
            <span className="how-row-desc">
              &quot;¿Qué se acordó sobre el plazo de entrega del proveedor?&quot; → encontrás la
              respuesta en segundos
            </span>
          </div>
          <div className="how-arrow">↓</div>
          <div className="how-row active">
            <span className="how-row-n">04</span>
            <span className="how-row-step">🏗️ Escalá</span>
            <span className="how-row-desc">
              El expediente conversacional de tu obra queda disponible para todo tu equipo — sin
              intermediarios
            </span>
          </div>
        </div>
      </section>

      {/* BIBLIOTECA DE PLANTILLAS */}
      <section className="section lib-section">
        <div className="lib-header">
          <div>
            <div className="section-eyebrow">Templates calibrados para el nicho</div>
            <h2 className="lib-title">25 plantillas específicas para construcción</h2>
            <p className="lib-sub">13 áreas de gestión · Listas desde el día 1 · Vocabulario del sector</p>
          </div>
          <div className="lib-badge">
            25
            <small>Plantillas incluidas</small>
          </div>
        </div>
        <div className="lib-grid">
          <div className="lib-block">
            <div className="lib-block-header">
              <span className="lib-block-label">Negociación Inversores</span>
              <span className="lib-block-count">5</span>
            </div>
            <div className="lib-items">
              {['Presentación de proyecto', 'Compromisos de retorno', 'Seguimiento de cierre', 'Acta de acuerdos'].map((i) => (
                <div key={i} className="lib-item">
                  <div className="lib-item-dot" />
                  <span className="lib-item-text">{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lib-block">
            <div className="lib-block-header">
              <span className="lib-block-label">Reunión de Obra</span>
              <span className="lib-block-count">6</span>
            </div>
            <div className="lib-items">
              {['Decisiones en campo', 'Modificaciones de plano', 'Acuerdos con subcontratistas', 'Control de avance semanal'].map((i) => (
                <div key={i} className="lib-item">
                  <div className="lib-item-dot" />
                  <span className="lib-item-text">{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lib-block">
            <div className="lib-block-header">
              <span className="lib-block-label">Proveedores y Logística</span>
              <span className="lib-block-count">5</span>
            </div>
            <div className="lib-items">
              {['Confirmación de entrega', 'Negociación de precio', 'Adicionales verbales', 'Resolución de conflictos'].map((i) => (
                <div key={i} className="lib-item">
                  <div className="lib-item-dot" />
                  <span className="lib-item-text">{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lib-block">
            <div className="lib-block-header">
              <span className="lib-block-label">Gestión Financiera y Compradores</span>
              <span className="lib-block-count">9</span>
            </div>
            <div className="lib-items">
              {['Comité de avance y costos', 'Presentación a compradores', 'Cierre de escritura', 'Coordinación con banco hipotecario'].map((i) => (
                <div key={i} className="lib-item">
                  <div className="lib-item-dot" />
                  <span className="lib-item-text">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px', padding: '16px 20px', background: 'var(--gray-100)', borderRadius: '8px', fontSize: '13px', color: 'var(--gray-600)' }}>
          Única distribución en Argentina con templates calibradas por nicho. No existe con ningún
          otro distribuidor Plaud.
        </div>
      </section>

      {/* SEGURIDAD */}
      <div className="sec-section">
        <div className="sec-inner">
          <div className="sec-grid">
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '16px' }}>
                Confidencialidad garantizada
              </div>
              <h2 className="sec-title">Tus conversaciones son tuyas. Siempre.</h2>
              <p className="sec-body">
                Procesamiento local en el dispositivo. Nada se sube sin tu autorización explícita.
                Zero data retention — tus conversaciones no entrenan el modelo de IA de ninguna
                empresa extranjera.
              </p>
              <p className="sec-reframe">
                Si los médicos en EEUU confían sus conversaciones más sensibles a Plaud, tus
                reuniones con inversores son menos complejas que las de ellos.
              </p>
              <div style={{ marginTop: '24px' }}>
                <div className="section-eyebrow" style={{ marginBottom: '12px' }}>
                  Certificaciones auditadas
                </div>
                <div className="sec-certs">
                  {['ISO 27001', 'SOC 2 Type II', 'HIPAA', 'GDPR', 'AES-256', 'TLS 1.3'].map((c) => (
                    <span key={c} className="cert-badge">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="sec-right">
              <div className="sec-item">
                <span className="sec-icon">🔒</span>
                <div className="sec-item-text">
                  <strong>Procesamiento local</strong>
                  Las transcripciones se generan en el dispositivo. Nada sale sin tu autorización
                  explícita.
                </div>
              </div>
              <div className="sec-item">
                <span className="sec-icon">🚫</span>
                <div className="sec-item-text">
                  <strong>Zero data retention</strong>
                  Tus conversaciones no se usan para entrenar ningún modelo de IA externo.
                </div>
              </div>
              <div className="sec-item">
                <span className="sec-icon">✅</span>
                <div className="sec-item-text">
                  <strong>HIPAA + ISO 27001</strong>
                  Los estándares más exigentes del mundo para privacidad de datos. Verificables en
                  registros públicos.
                </div>
              </div>
              <div className="sec-item">
                <span className="sec-icon">📋</span>
                <div className="sec-item-text">
                  <strong>Ley 25.326 Argentina</strong>
                  Cumplimiento con la legislación local de protección de datos personales.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OFERTA + GARANTÍA */}
      <section className="section offer-section" id="adquirir">
        <div className="offer-grid">
          <div>
            <div className="section-eyebrow">Lo que incluye tu Plaud</div>
            <h2 className="offer-title">Todo lo que necesitás desde el primer día</h2>
            <div className="offer-items">
              <div className="offer-item">
                <span className="offer-check">✅</span>
                <span className="offer-item-text">
                  <strong>Dispositivo Plaud Note</strong> — captura hasta 30 horas continuas, AI
                  Beamforming, 4 MEMS mics
                </span>
              </div>
              <div className="offer-item">
                <span className="offer-check">✅</span>
                <span className="offer-item-text">
                  <strong>25 plantillas específicas para construcción</strong> — negociación de
                  inversores · reunión de obra · acuerdos con proveedores · control de costos
                </span>
              </div>
              <div className="offer-item">
                <span className="offer-check">✅</span>
                <span className="offer-item-text">
                  <strong>Onboarding personalizado 30 min</strong> con Silvana Iriondo —
                  configuración completa para tu nicho
                </span>
              </div>
              <div className="offer-item">
                <span className="offer-check">✅</span>
                <span className="offer-item-text">
                  <strong>Acceso prioritario al diagnóstico KÔRE IA</strong> — análisis de cómo
                  gestiona las conversaciones tu operación
                </span>
              </div>
            </div>
            <div className="offer-value">
              <div className="offer-value-label">Precio de lanzamiento Batev</div>
              <div className="offer-value-text">Dispositivo + USD 447 en bonus incluidos</div>
              <div className="offer-value-sub">
                Precio especial solo durante el lanzamiento Batev Buenos Aires
              </div>
            </div>
            <a
              href="https://www.plaud-ai.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Adquirir Plaud — precio de lanzamiento →
            </a>
            <a href="mailto:silvana@plaud-ai.com.ar" className="cta-team" id="equipo">
              ¿Tenés equipo? Hablemos de Plaud Team →
            </a>
          </div>
          <div>
            <div className="guarantee-box">
              <div className="guarantee-label">Garantía de resultado</div>
              <div className="guarantee-number">30</div>
              <div className="guarantee-unit">días sin preguntas</div>
              <h3 className="guarantee-title">
                Si no recuperás al menos una negociación que se habría perdido, te devolvemos el
                setup completo.
              </h3>
              <p className="guarantee-body">
                Esto no es una promesa de marketing. Es la garantía que podemos hacer porque
                sabemos lo que el producto hace en este nicho. Sin formularios. Sin justificaciones.
              </p>
            </div>
            <div className="kore-teaser">
              <div className="kore-teaser-label">En la parte baja del embudo</div>
              <h4 className="kore-teaser-title">
                ¿Querés que cada conversación genere inteligencia comercial automatizada?
              </h4>
              <p className="kore-teaser-body">
                Plaud es la capa de captura. KÔRE IA convierte esa captura en el sistema que
                trabaja cuando vos no estás — agentes por nicho, seguimientos automáticos,
                inteligencia operativa. Consultá a Silvana para saber si aplica a tu operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <div className="close-section">
        <div className="close-inner">
          <blockquote className="close-quote">
            &ldquo;En construcción, cada decisión verbal tiene precio.<br />
            <em>
              El que tiene el registro gana el conflicto,<br />
              controla el desvío, honra el compromiso con el inversor<br />
              y retiene la inteligencia de la obra aunque cambie el equipo.
            </em>&rdquo;
          </blockquote>
          <div className="close-contact-box">
            <div>
              <div className="close-contact-label">Datos de contacto · Demo personalizada</div>
              <div className="close-contact-name">Silvana Iriondo</div>
              <div className="close-contact-role">Embajadora Oficial Plaud Argentina</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="close-contact-phone">+54 9 351 267-3489</div>
              <a
                href="https://www.plaud-ai.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="close-contact-web"
              >
                plaud-ai.com.ar
              </a>
            </div>
          </div>
          <p className="close-event">
            Plaud Argentina · Distribución Oficial · Lanzamiento Batev Buenos Aires · 24 de Junio
            2026
          </p>
        </div>
      </div>
    </>
  );
}
