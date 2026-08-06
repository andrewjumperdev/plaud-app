/* eslint-disable @next/next/no-img-element */

const WHATSAPP_BASE = "https://wa.me/5493512673489";

const proof = [
  { n: "2M+", l: "Usuarios globales" },
  { n: "50", l: "Países" },
  { n: "30", l: "Días garantía" },
  { n: "3 min", l: "Transcripción lista" },
];

const deviceSpecs = [
  "Tamaño de una tarjeta de crédito",
  "Grabación offline · sin internet",
  "4 micrófonos MEMS + Speaker ID",
  "30 hs de grabación continua",
  "112 idiomas · +95% precisión",
  "Único sistema que funciona con iPhone",
];

const cfSteps = [
  {
    num: "01",
    key: "CAPTURA",
    pill: "Activo base",
    title: "Lo que se dice, queda.",
    body: "Elimina la carga operativa de transcribir a mano: grabación offline, 4 micrófonos con reducción de ruido activa, hasta 30 horas continuas. Único sistema que funciona con iPhone. El tiempo que libera es el activo base de todo lo que sigue.",
  },
  {
    num: "02",
    key: "ESTRUCTURA",
    pill: "Motor",
    title: "El caos se convierte en mapa navegable.",
    body: "Tres motores de IA trabajando en simultáneo (GPT, Claude, Gemini) identifican quién habló, cuándo y qué dijo. Separan acuerdos, preguntas y próximos pasos. El resultado no es texto — es la conversación estructurada. Este es el motor que convierte el tiempo liberado en material utilizable.",
  },
  {
    num: "03",
    key: "ORGANIZA",
    pill: "Vía",
    title: "Cada conversación entra al sistema de conocimiento de tu negocio.",
    body: "Las transcripciones se organizan por tema, fecha y participantes. Buscables por palabra clave. Disponibles para quien lo necesite, cuando lo necesite — la vía que lleva lo estructurado hacia tu activo de crecimiento.",
  },
  {
    num: "04",
    key: "AUTOMATIZA",
    pill: "Velocidad",
    title: "Vos pensás. El sistema ejecuta.",
    body: "AutoFlow detecta el contexto, activa la plantilla correcta y envía la información al lugar indicado. Configurás una vez — el sistema trabaja siempre, para que tu equipo invierta su talento en decisiones, no en tareas repetidas.",
    badge: "🍎 Único sistema que funciona con iPhone",
  },
];

const metrics = [
  { n: "3 min", l: "Transcripción lista", d: "Desde el fin de la reunión" },
  { n: "+95%", l: "Precisión", d: "En cualquier acento o contexto" },
  { n: "112", l: "Idiomas", d: "Transcripción y traducción automática" },
  { n: "100%", l: "Offline", d: "Sin internet durante la grabación" },
];

const mechanisms = [
  {
    label: "VCS · Vibration Conduction Sensor",
    title: "iOS bloquea la grabación de llamadas. No es un bug — es una decisión de Apple.",
    body: "Ninguna app —ni Otter.ai, ni Fireflies, ni el dictado nativo— puede acceder al audio de una llamada de iPhone por software. Plaud lo resuelve con un sensor físico que mide la vibración del teléfono durante la llamada y la convierte en audio con fidelidad. Es un proceso completamente externo al sistema operativo: iOS no puede bloquearlo porque no pasa por ahí.",
    tag: "🍎 El único sistema que graba llamadas en iPhone",
  },
  {
    label: "Tres motores de IA en simultáneo",
    title: "GPT-5, Claude Sonnet 4 y Gemini 2.5 Pro procesan cada conversación al mismo tiempo.",
    body: "Plaud no elige un modelo por reunión: los tres procesan el audio en paralelo y el sistema sintetiza el mejor resultado posible combinando las fortalezas de cada uno. Vos no configurás nada. Para acceder a los tres, Plaud debió pasar los controles de seguridad y compliance de OpenAI, Anthropic y Google — no es un argumento de marketing, es una validación técnica.",
    tag: "🧠 Único dispositivo con acceso simultáneo a los tres",
  },
  {
    label: "Mapa Mental automático",
    title: "Cada conversación se convierte en un mapa visual de temas y conexiones, no solo en texto.",
    body: "Terminada la transcripción, Plaud genera automáticamente un Mapa Mental: una estructura visual que muestra de qué se habló y cómo se conecta cada tema. No hace falta releer el documento entero para recordar la lógica de una reunión — se ve de un vistazo.",
    tag: "🧭 Estructura visual en segundos",
  },
  {
    label: "Entrada multimodal",
    title: "Plaud no solo escucha. También ve lo que fotografiás y lo que escribís.",
    body: "Además del audio, Plaud incorpora fotos (una pizarra, un plano, un documento) y notas escritas como contexto adicional — el resumen final no es solo lo que se dijo, es todo lo que pasó en esa reunión.",
    tag: "📎 Audio + imagen + texto, en un mismo resumen",
  },
];

const casosDeExito = [
  {
    img: "/store/industria-1.png",
    tag: "🏢 Real Estate",
    title: "Inteligencia comercial en cada propiedad",
    desc: "Capturá los requisitos y objeciones de tus clientes en cada visita offline. Nuestra infraestructura procesa los datos de voz para alimentar tu CRM de forma automática, detectando patrones de compra y acelerando el cierre de operaciones sin esfuerzo administrativo.",
    name: "Juliana Gamboa",
    role: "Asesora inmobiliaria, Beacon Stone Realty",
    quote: "«Me gusta poder capturar todo sin que eso me saque la atención del cliente. Cuando muestro una propiedad, miro cómo reacciona, qué nota, en qué duda. No quiero parar a tomar notas en ese momento — lo proceso después»",
  },
  {
    img: "/store/industria-2.png",
    tag: "⚖️ Abogados / Sector Jurídico",
    title: "La precisión que blinda tu práctica legal",
    desc: "Cada consulta, mediación y negociación queda con su tenor literal preservado. La minuta sale el mismo día, cerrando la brecha de interpretación antes de que se abra — y libera al abogado de la carga operativa de transcribir.",
    name: "Michael Prestoy",
    role: "Product Manager, FinTech & Banking",
    quote: "«No reemplaza el criterio: protege el tiempo y la estructura que el criterio necesita»",
  },
  {
    img: "/store/industria-3.png",
    tag: "🎓 Instituciones educativas",
    title: "Capitalizá el conocimiento que surge en el aula",
    desc: "Evitá que las clases magistrales, coordinaciones pedagógicas y simposios se queden en el aire. La infraestructura captura y procesa la voz académica, organizando los conceptos clave en un sistema indexado listo para alimentar investigaciones y automatizar reportes.",
    name: "Elliot Tomaeno",
    role: "Founder & CEO, ASTRSK",
    quote: "«Me sacó la carga mental. No gasto energía en recordar — la uso para pensar»",
  },
  {
    img: "/store/industria-4.png",
    tag: "🏗️ Construcción",
    title: "Cada decisión de obra, con nombre y fecha",
    desc: "Capturá acuerdos con subcontratistas y proveedores en el momento — sin celular en la obra. Plaud convierte cada conversación en bitácora de obra, lista para el crecimiento de tu negocio.",
    name: "Daniel Watson",
    role: "Founder & Executive Editorial Director, LVID Magazine",
    quote: "«Plaud no escribe el contenido por nosotros. Se asegura de que no se nos escape lo importante»",
  },
];

const awards = [
  { img: "/store/award-appstore.png", alt: "4.9 · App Store", sub: "4.9 · App Store" },
  { img: "/store/award-reddot.jpg", alt: "Red Dot Award 2025", sub: "Red Dot Award 2025" },
  { img: "/store/award-gold.jpg", alt: "Gold Award 2024", sub: "Gold Award 2024" },
  { img: "/store/award-ifdesign.jpg", alt: "iF Design Award 2024", sub: "iF Design Award 2024" },
  { img: "/store/award-gooddesign.jpg", alt: "Good Design Award 2025", sub: "Good Design Award 2025" },
  { img: "/store/award-amazon.png", alt: "4.5 · Amazon", sub: "4.5 · Amazon" },
  { icon: "🇦🇷", text: "Canal Oficial Argentina", sub: "Soporte local · Garantía · Envío" },
];

const media = [
  {
    logo: "/store/media-verge.png",
    alt: "The Verge",
    logoHeight: 22,
    accent: "#39f6db",
    quote:
      "«El Plaud Note Pro cambia automáticamente entre grabar llamadas y reuniones presenciales, eliminando la necesidad del interruptor físico en el Plaud Note original.»",
    href: "https://www.theverge.com",
  },
  {
    name: "Forbes",
    accent: "#b339f6",
    quote:
      "«El nuevo Plaud Note Pro puede capturar audio utilizando hardware de grabación de calidad de estudio y aislamiento de ruido inteligente impulsado por IA.»",
    href: "https://www.forbes.com",
  },
  {
    name: "WIRED",
    accent: "#39f672",
    quote:
      "«Este dispositivo portátil con IA para tomar notas transcribirá tus reuniones —y, algún día, toda tu vida. El NotePin de Plaud graba y transcribe todas las conversaciones a tu alrededor.»",
    href: "https://www.wired.com",
  },
  {
    logo: "/store/media-zdnet.webp",
    alt: "ZDNet",
    logoHeight: 28,
    accent: "#39f6db",
    quote:
      "«Este práctico grabador de voz con IA ha cambiado la forma en que trabajo. Plaud Note ofrece una mejor manera de grabar notas de voz, y la suscripción opcional amplía sus funciones.»",
    href: "https://www.zdnet.com",
  },
  {
    name: "Lifewire",
    accent: "#b339f6",
    quote:
      "«Esencialmente, es como tener a alguien que toma notas de cada aspecto de tu vida oral. Una vez que se captura la grabación, podés usarla para cualquier cosa.»",
    href: "https://www.lifewire.com",
  },
  {
    logo: "/store/media-techradar.png",
    alt: "TechRadar",
    logoHeight: 20,
    accent: "#39f672",
    quote:
      "«Plaud Note Pro tiene cuatro micrófonos MEMS en comparación con dos en el dispositivo original —el doble de capacidad de captura para entornos profesionales exigentes.»",
    href: "https://www.techradar.com",
  },
];

const aiModels = ["ChatGPT", "Claude", "Gemini"];

const certs = [
  { img: "/store/cert-hipaa.png", alt: "HIPAA" },
  { img: "/store/cert-gdpr.png", alt: "GDPR" },
  { img: "/store/cert-soc2.png", alt: "SOC 2" },
  { img: "/store/cert-en18031.png", alt: "EN 18031" },
  { img: "/store/cert-iso27001.png", alt: "ISO 27001" },
  { img: "/store/cert-iso27701.png", alt: "ISO 27701" },
];

const biblioteca = [
  {
    tag: "⚖️ Estudios jurídicos",
    desc: "Reunión con cliente, audiencia judicial, estrategia de caso, expediente y jurisprudencia.",
    cta: "Ver para tu estudio →",
    href: "/abogados",
  },
  {
    tag: "🎓 Instituciones educativas",
    desc: "Clases, gestión institucional, familias, convivencia, admisión y acreditación.",
    cta: "Ver para tu institución →",
    href: "/educacion",
  },
  {
    tag: "🔬 Universidades e investigación",
    desc: "Investigación, posgrado, docencia, vida estudiantil y gestión institucional.",
    cta: "Ver para tu cátedra →",
    href: "/investigacion-universitario",
  },
  {
    tag: "🏗️ Construcción",
    desc: "Obrador, avance de obra, seguridad, coordinación de subcontratistas.",
    cta: "Ver para tu obra →",
    href: "/construccion",
  },
];

const products: Array<{
  name: string;
  image: string;
  description: string;
  specs: string[];
  whatsappProduct: string;
  badge?: string;
  featured?: boolean;
}> = [
  {
    name: "Plaud Note",
    image: "/store/product-note.png",
    description:
      "El grabador de IA más vendido del mundo. Perfecto para uso individual en reuniones, entrevistas y llamadas.",
    specs: [
      "2 MEMS + 1 VPU · 30 hs continuas",
      "64 GB memoria local · 30g",
      "112 idiomas · Speaker ID",
      "Offline · funciona con iPhone",
    ],
    whatsappProduct: "Plaud Note",
  },
  {
    name: "Plaud Note Pro",
    image: "/store/product-notepro.png",
    description:
      "El más avanzado. Pantalla AMOLED, 4 micrófonos y captura hasta 5 metros. Para profesionales y equipos.",
    specs: [
      "4 MEMS + 1 VPU · 30–50 hs",
      "Pantalla AMOLED · Gorilla Glass",
      "AutoFlow + 10.000+ plantillas",
      "Offline · funciona con iPhone",
    ],
    badge: "Más elegido",
    featured: true,
    whatsappProduct: "Plaud Note Pro",
  },
  {
    name: "Plaud NotePin",
    image: "/store/product-notepin.png",
    description:
      "El más portable. Se usa como pin de ropa. Captura continua sin manos durante todo el día.",
    specs: [
      "Diseño wearable · 16.6g",
      "20 hs grabación · Apple Find My",
      "Red Dot Award 2025",
      "Offline · funciona con iPhone",
    ],
    whatsappProduct: "Plaud NotePin",
  },
  {
    name: "Plaud NotePin S",
    image: "/store/product-notepin-s.png",
    description:
      "La evolución del wearable: un botón físico para marcar el momento clave, sin tocar el teléfono. Mismo diseño discreto, un gesto más.",
    specs: [
      "Botón físico · marca highlights al instante",
      "64 GB memoria local · 20 hs grabación",
      "Cordón, pulsera, pin magnético y clip incluidos",
      "Offline · funciona con iPhone",
    ],
    badge: "Nuevo",
    whatsappProduct: "Plaud NotePin S",
  },
];

const empresasFeatures = [
  {
    icon: "👥",
    title: "Workspace compartido del equipo",
    desc: "Todas las grabaciones del equipo centralizadas en un espacio común. Buscables, etiquetadas y disponibles para quien las necesite.",
  },
  {
    icon: "⚡",
    title: "AutoFlow para equipos",
    desc: "Reglas automáticas que clasifican, resumen y distribuyen cada conversación al canal correcto — sin intervención manual.",
  },
  {
    icon: "🔒",
    title: "Control de acceso y privacidad",
    desc: "Permisos por usuario y por proyecto. ISO 27001, HIPAA, SOC 2. Los datos del equipo son exclusivamente del equipo.",
  },
  {
    icon: "📊",
    title: "Facturación centralizada",
    desc: "Una sola cuenta para todo el equipo. Onboarding grupal incluido. Soporte local en Argentina.",
  },
];

const faqs = [
  {
    question: "¿Plaud funciona con iPhone?",
    answer:
      "Sí — y es el único que puede. iOS bloquea por diseño que cualquier app acceda al audio de una llamada telefónica: no es un error, es una decisión de arquitectura de Apple que ni Otter.ai, ni Fireflies, ni el dictado nativo pueden resolver por software. Plaud lo resuelve con VCS (Vibration Conduction Sensor), un sensor físico que mide la vibración del teléfono durante la llamada y la convierte en audio con fidelidad — un mecanismo imposible de replicar sin hardware propio. También funciona con Android. La grabación offline no requiere el celular — el dispositivo graba de forma independiente.",
  },
  {
    question: "¿Necesita internet para grabar?",
    answer:
      "No. La grabación es 100% offline. El dispositivo captura sin necesidad de conexión a internet. Solo necesitás conexión cuando sincronizás para procesar la transcripción, lo que ocurre al finalizar la reunión.",
  },
  {
    question: "¿En cuánto tiempo tengo la transcripción lista?",
    answer:
      "En menos de 3 minutos desde que sincronizás el dispositivo. El procesamiento ocurre en la nube de Plaud con el modelo de IA seleccionado. El resultado incluye transcripción completa, resumen, identificación de hablantes y próximos pasos.",
  },
  {
    question: "¿Mis conversaciones son privadas? ¿Se usan para entrenar IA?",
    answer:
      "Plaud tiene una política estricta de zero data retention: tus conversaciones no se usan para entrenar ningún modelo. El procesamiento es local en el dispositivo durante la grabación. Plaud cumple con ISO 27001, SOC 2 Tipo II, HIPAA, GDPR y EN18031.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí. Hacemos envíos a todo el territorio argentino. El onboarding personalizado está incluido en la compra — coordinamos una sesión de 30 minutos para que salgas configurado desde el primer día.",
  },
  {
    question: "¿Cómo funciona la garantía de 30 días?",
    answer:
      "Si en los primeros 30 días no recuperaste al menos una conversación que se habría perdido, te devolvemos el dinero completo. Sin formularios, sin justificaciones, sin preguntas. Solo escribile a nuestro equipo por WhatsApp.",
  },
];

const ctaButtons = [
  {
    href: "#como-funciona",
    variant: "cta-btn-secondary",
    tag: "Conocer más",
    title: "📋 Ver cómo funciona",
    desc: "Mirá el proceso antes de decidir",
    external: false,
  },
  {
    href: `${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20Plaud%20para%20mi%20equipo`,
    variant: "cta-btn-secondary",
    tag: "Plaud Team",
    title: "👥 Quiero Plaud para mi equipo",
    desc: "Propuesta y cotización personalizada",
    external: true,
  },
  {
    href: WHATSAPP_BASE,
    variant: "cta-btn-primary",
    tag: "Contacto directo",
    title: "💬 Contactá con nuestro equipo",
    desc: "WhatsApp · Respuesta inmediata",
    external: true,
  },
];

function waHref(product: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola Silvana, quiero consultar por ${product}`)}`;
}

export default function StorePage() {
  return (
    <div className="plaud-v2">
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo.webp" alt="Plaud" />
          <span className="nav-badge">Argentina · Canal Oficial</span>
        </a>
        <div className="nav-links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#productos">Productos</a>
          <a href="/plantillas-personalizadas">Plantillas</a>
          <a href="/blog">Blog</a>
          <a href="/soporte">Soporte</a>
          <a href="#contacto" className="nav-cta">
            Adquirir →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-wrap">
        <div className="hero">
          <div>
            <h1 className="hero-title">
              <span className="ah">AMPLIFY HUMAN</span>
              <span className="i">INTELLIGENCE</span>
            </h1>
            <p className="hero-tagline">
              De conversaciones casuales a tu mayor activo de crecimiento.
            </p>
            <p className="hero-sub">
              Plaud captura cada conversación offline y la transcribe en 3 minutos, ya
              convertida en un documento estructurado y reutilizable. Esa es la base de tu
              infraestructura conversacional: el conocimiento de tu equipo, organizado y
              automatizado. Sin tocar el celular. Sin internet. Sin esfuerzo extra.
            </p>
            <div className="hero-actions">
              <a href="#productos" className="btn-primary">
                Ver productos →
              </a>
              <a href="#como-funciona" className="btn-secondary">
                Cómo funciona
              </a>
            </div>
            <div className="hero-highlight">
              <p>
                ¿Estás preparado para liberar tiempo operativo mientras construís tu activo de
                crecimiento?
              </p>
            </div>
            <div className="hero-proof" style={{ marginTop: 72 }}>
              {proof.map((p, i) => (
                <div key={p.l} style={{ display: "contents" }}>
                  <div className="hero-proof-item">
                    <span className="hero-proof-n">{p.n}</span>
                    <span className="hero-proof-l">{p.l}</span>
                  </div>
                  {i < proof.length - 1 && <div className="hero-proof-sep" />}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="device-card">
              <video className="device-video" autoPlay muted loop playsInline>
                <source src="/store/video-hero.mp4" type="video/mp4" />
              </video>
              <div className="device-tag">Canal Oficial 🇦🇷</div>
              <div className="device-name">Plaud Note Pro</div>
              <div className="device-tagline">
                El dispositivo de inteligencia conversacional más avanzado del mundo
              </div>
              <div className="device-specs">
                {deviceSpecs.map((spec) => (
                  <div key={spec} className="device-spec">
                    <div className="device-spec-dot" />
                    {spec}
                  </div>
                ))}
              </div>
              <div className="device-divider" />
              <div className="device-price-block">
                <div className="device-price-label">Consultar precio en Argentina</div>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="device-cta"
                >
                  Consultar por WhatsApp →
                </a>
                <div className="device-note">
                  Garantía 30 días · Envío a todo el país · Soporte local
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div id="como-funciona" className="band band-white">
        <div className="section">
          <div className="section-eyebrow">Cómo funciona</div>
          <div className="cf-video">
            <video autoPlay muted loop playsInline>
              <source src="/store/video-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="cf-grid">
            {cfSteps.map((step) => (
              <div key={step.key} className="cf-card">
                <div className="cf-card-top">
                  <div className="cf-card-num">
                    {step.num} · <span>{step.key}</span>
                  </div>
                  <div className="cf-card-pill">{step.pill}</div>
                </div>
                <div className="cf-card-title">{step.title}</div>
                <div className="cf-card-body">{step.body}</div>
                {step.badge && <div className="cf-card-tag">{step.badge}</div>}
              </div>
            ))}
          </div>
          <div className="metrics-row">
            {metrics.map((m) => (
              <div key={m.l} className="metric-card">
                <div className="metric-n">{m.n}</div>
                <div className="metric-l">{m.l}</div>
                <div className="metric-d">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MECANISMO UNICO */}
      <div className="band mech-band">
        <div className="section">
          <div className="section-eyebrow">Por qué Plaud puede hacer esto</div>
          <h2 className="section-title">El mecanismo detrás de la promesa</h2>
          <p className="section-sub" style={{ maxWidth: 640 }}>
            No es una app más de transcripción. Es hardware propio resolviendo lo que ninguna
            app puede resolver por software.
          </p>
          <div className="mech-grid">
            {mechanisms.map((m) => (
              <div key={m.label} className="mech-card">
                <div className="mech-label">{m.label}</div>
                <div className="mech-title">{m.title}</div>
                <div className="mech-body">{m.body}</div>
                <div className="mech-tag">{m.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PLAUD INTELLIGENCE */}
      <div className="band band-gray">
        <div className="section">
          <div className="plaud-intel-title">Plaud Intelligence</div>
          <div className="plaud-intel-sub">Amplifica la inteligencia humana</div>
          <p className="section-sub intel-sub">
            Mientras conversás, vos pensás y decidís. Plaud transcribe y organiza. Cada
            conversación se convierte en conocimiento reutilizable, y ese conocimiento acumulado
            construye tu infraestructura conversacional — el activo real que te permite crecer
            sin sumar una hora más de esfuerzo humano.
          </p>
          <div className="intel-img">
            <img
              src="/store/feature-apps.jpg"
              alt="Ask Plaud, AutoFlow, Compartir y Sincronización"
            />
          </div>
          <div className="intel-cta">
            <a href="#productos" className="btn-primary">
              Adquirir Plaud →
            </a>
          </div>
        </div>
      </div>

      {/* CASOS DE EXITO */}
      <div className="band band-white">
        <div className="section">
          <div className="section-eyebrow">Casos de éxito</div>
          <h2 className="section-title">
            Descubrí cómo nuestra infraestructura
            <br />
            transforma conversaciones en activos de crecimiento.
          </h2>
          <div className="ind-grid">
            {casosDeExito.map((caso) => (
              <div key={caso.tag} className="ind-col">
                <div
                  className="ind-hero"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.1) 0%,rgba(0,0,0,.25) 55%,rgba(0,0,0,.88) 100%),url(${caso.img})`,
                  }}
                >
                  <div className="ind-tag">{caso.tag}</div>
                  <h3 className="ind-title">{caso.title}</h3>
                  <p className="ind-desc">{caso.desc}</p>
                </div>
                <div className="ind-testi">
                  <div className="ind-testi-head">
                    <div className="ind-testi-avatar">👤</div>
                    <div>
                      <div className="ind-testi-name">{caso.name}</div>
                      <div className="ind-testi-role">{caso.role}</div>
                    </div>
                  </div>
                  <p className="ind-testi-quote" style={{ marginBottom: 0 }}>
                    {caso.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CARRUSEL DE PREMIOS */}
      <div className="carousel-wrap">
        <div className="carousel-track">
          {[...awards, ...awards].map((a, i) => (
            <div key={`${a.alt ?? a.text}-${i}`} className="carousel-item">
              {a.img ? (
                <>
                  <img src={a.img} alt={a.alt} />
                  <span className="carousel-sub">{a.sub}</span>
                </>
              ) : (
                <>
                  <span className="carousel-icon">{a.icon}</span>
                  <span className="carousel-text">{a.text}</span>
                  <span className="carousel-sub">{a.sub}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PRESENTADO EN MEDIOS */}
      <div className="band band-gray">
        <div className="section">
          <div className="section-eyebrow" style={{ textAlign: "center" }}>
            Presentado en medios globales
          </div>
          <div className="medios-grid">
            {media.map((m) => (
              <div
                key={m.alt ?? m.name}
                className="medios-card"
                style={{ borderTopColor: m.accent }}
              >
                {m.logo ? (
                  <img
                    src={m.logo}
                    alt={m.alt}
                    className="medios-logo"
                    style={{ height: m.logoHeight }}
                  />
                ) : (
                  <div className="medios-name">{m.name}</div>
                )}
                <p className="medios-quote">{m.quote}</p>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="medios-link"
                >
                  Más información →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEGURIDAD */}
      <section id="seguridad" className="band band-gray">
        <div className="section">
          <div className="section-eyebrow">Privacidad y seguridad</div>
          <h2 className="section-title">Garantía certificada</h2>
          <div className="seg-grid">
            <div>
              <p className="seg-body">
                La mayoría de las apps de transcripción usan tus conversaciones para entrenar sus
                modelos. Plaud no.{" "}
                <strong>
                  Procesamiento local en el dispositivo. Nada se sube a ningún servidor sin tu
                  solicitud explícita.
                </strong>
              </p>
              <p className="seg-body" style={{ marginTop: 14 }}>
                Si los médicos en EE.UU. confían sus conversaciones más sensibles a Plaud — los
                datos de salud más protegidos del mundo — tu reunión de negocios está más que
                cubierta.
              </p>
              <div className="seg-models">
                <div className="seg-models-label">Modelos de IA integrados</div>
                <div className="seg-chips">
                  {aiModels.map((model) => (
                    <span key={model} className="seg-chip">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
              <div className="seg-alert">
                🔒 Plaud está alineado con los estándares de seguridad de Anthropic, OpenAI y Google
                — los mismos laboratorios que definen el estado del arte en seguridad de IA a nivel
                mundial.
              </div>
            </div>
            <div>
              <div className="seg-cert-grid">
                {certs.map((c) => (
                  <div key={c.alt} className="seg-cert-card">
                    <img src={c.img} alt={c.alt} />
                  </div>
                ))}
              </div>
              <div className="cert-footer">
                Los datos de Plaud se almacenan en servidores de EE.UU. · El usuario es el único
                propietario · Zero data retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIBLIOTECA DE PLANTILLAS */}
      <div className="band band-white">
        <div className="section">
          <div className="section-eyebrow">Tu industria, tu vocabulario</div>
          <h2 className="section-title">Una plantilla para cada conversación de tu negocio</h2>
          <p className="section-sub">
            Contamos con un Sistema de Diagnóstico único — arma tu Biblioteca de Prompts
            personalizada: tu industria, tu rol, tu vocabulario, tus alertas.
          </p>
          <div className="products-grid">
            {biblioteca.map((b) => (
              <div key={b.tag} className="product-card">
                <div className="biblio-tag">{b.tag}</div>
                <div className="product-name" style={{ fontSize: 18 }}>
                  Plantillas del sector
                </div>
                <div className="product-desc">{b.desc}</div>
                <a href={b.href} className="btn-secondary" style={{ textAlign: "center", marginTop: 6 }}>
                  {b.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="biblio-banner">
            <p>
              <strong>¿Sos parte de un equipo o institución</strong> de otra industria? El
              Sistema de Diagnóstico arma tu biblioteca en cualquier rubro.
            </p>
            <a href="#contacto" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Hablar con el equipo →
            </a>
          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      <div id="productos" className="band band-gray">
        <div className="section">
          <div className="section-eyebrow">Nuestros productos</div>
          <h2 className="section-title">
            Elegí el dispositivo
            <br />
            para tu negocio
          </h2>
          <div className="products-grid">
            {products.map((product) => (
              <article
                key={product.name}
                className={`product-card ${product.featured ? "featured" : ""}`}
              >
                {product.badge && <div className="product-badge">{product.badge}</div>}
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-name">{product.name}</div>
                <div className="product-desc">{product.description}</div>
                <div className="product-specs">
                  {product.specs.map((spec) => (
                    <div key={spec} className="product-spec">
                      <div className="product-spec-dot" />
                      {spec}
                    </div>
                  ))}
                </div>
                <div className="product-divider" />
                <a
                  href={waHref(product.whatsappProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-btn"
                >
                  Adquirir →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* TEASER MEMBRESIA */}
      <div className="membresia-teaser">
        <div className="section">
          <p>
            ¿Buscás un plan de suscripción con IA para tu equipo u organización?{" "}
            <a
              href={`${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20conocer%20las%20membres%C3%ADas%20de%20Plaud`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocé nuestras membresías →
            </a>
          </p>
        </div>
      </div>

      {/* GARANTIA */}
      <section className="garantia-section">
        <div className="garantia">
          <div>
            <h2 className="garantia-title">
              30 días.
              <br />
              Sin preguntas.
            </h2>
            <p className="garantia-body">
              Si después del primer mes{" "}
              <strong>no recuperaste al menos una conversación que se habría perdido</strong>, te
              devolvemos el dinero completo. Sin formularios. Sin justificaciones.
              <br />
              <br />
              Esto no es una promesa de marketing. Es la garantía que podemos hacer porque sabemos
              lo que el producto hace.
            </p>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="garantia-btn"
            >
              Empezar sin riesgo →
            </a>
          </div>
          <div className="garantia-badge">
            <div className="garantia-n">30</div>
            <div className="garantia-l">días de devolución total</div>
            <div className="garantia-d">Sin formularios · Sin justificaciones · Sin preguntas.</div>
            <div className="garantia-includes">
              <div className="garantia-includes-label">Además incluye</div>
              <div className="garantia-includes-body">
                ✓ Guía de configuración inicial incluida
                <br />
                ✓ Plantillas específicas de tu sector
                <br />
                ✓ Soporte local en Argentina
                <br />
                ✓ Envío a todo el país
              </div>
            </div>
          </div>
        </div>
        <div className="onboarding-block">
          <div className="onboarding-text">
            El onboarding está incluido. Nosotros lo garantizamos.
          </div>
        </div>
      </section>

      {/* PLAUD PARA EMPRESAS */}
      <section id="empresas" className="section">
        <div className="section-eyebrow">Plaud para Empresas</div>
        <h2 className="section-title">
          La inteligencia conversacional
          <br />
          de tu equipo, centralizada
        </h2>
        <p className="section-sub">
          Plaud Team convierte cada reunión de tu organización en conocimiento institucional
          compartido, seguro y consultable.
        </p>
        <div className="empresas-grid">
          <div>
            <div className="empresas-features">
              {empresasFeatures.map((f) => (
                <div key={f.title} className="empresas-feature">
                  <div className="empresas-feature-icon">{f.icon}</div>
                  <div>
                    <div className="empresas-feature-title">{f.title}</div>
                    <div className="empresas-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="empresas-card">
            <video autoPlay muted loop playsInline>
              <source src="/store/video-empresas.mp4" type="video/mp4" />
            </video>
            <div className="empresas-card-body">
              <div className="empresas-stat">
                <div className="empresas-stat-n">2M+</div>
                <div className="empresas-stat-l">Usuarios en 50 países</div>
              </div>
              <div className="empresas-divider" />
              <div className="empresas-stat">
                <div className="empresas-stat-n">$250M</div>
                <div className="empresas-stat-l">Facturación global 2025</div>
              </div>
              <div className="empresas-divider" />
              <div className="empresas-note">
                Usado por equipos de ventas, legales, educativos y de consultoría en todo el mundo.
                Lanzamiento oficial en Argentina — Batev 2026.
              </div>
              <a
                href={`${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20Plaud%20para%20mi%20equipo`}
                target="_blank"
                rel="noopener noreferrer"
                className="empresas-cta"
              >
                Consultar Plaud Team →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="soporte" className="band band-gray">
        <div className="section">
          <div className="section-eyebrow">Preguntas frecuentes</div>
          <h2 className="section-title">Lo que más nos preguntan</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-question">
                  {faq.question}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
          <a
            href={`${WHATSAPP_BASE}?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Plaud`}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-wa"
          >
            💬 Tengo otra pregunta — contactá a un asistente
          </a>
          <p className="faq-note">
            También podés visitar el{" "}
            <a href="/soporte">centro de soporte completo</a>
          </p>
        </div>
      </div>

      {/* CTA FINAL */}
      <div id="contacto" style={{ padding: "80px 0" }}>
        <div className="cta-section">
          <h2 className="cta-title">¿Por dónde empezamos?</h2>
          <p className="cta-sub">Respuesta inmediata en contacto directo.</p>
          <div className="cta-buttons">
            {ctaButtons.map((btn) => (
              <a
                key={btn.title}
                href={btn.href}
                className={`cta-btn ${btn.variant}`}
                {...(btn.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <div className="cta-btn-tag">{btn.tag}</div>
                <div className="cta-btn-title">{btn.title}</div>
                <div className="cta-btn-desc">{btn.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-copy">
            <div className="newsletter-title">No te pierdas nada</div>
            <div className="newsletter-text">
              Suscribite para mantenerte actualizado sobre nuestras últimas ofertas, nuevos
              productos y colaboraciones.
            </div>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Ingresá tu dirección de correo electrónico"
              aria-label="Correo electrónico"
            />
            <a
              href={`${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20suscribirme%20a%20novedades%20de%20Plaud`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Regístrate →
            </a>
          </div>
        </div>
        <div className="newsletter-privacy">
          <p>
            Al suscribirme, acepto la{" "}
            <a
              href="https://latam.plaud.ai/policies/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de privacidad
            </a>
            .
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-box">
                <img src="/store/footer-brand.png" alt="PLAUD" />
              </div>
              <div className="footer-brand-tag">Amplifica la inteligencia humana</div>
              <div className="footer-label">Contacto</div>
              <div className="footer-text">Nos pondremos en contacto en 24 horas.</div>
              <a href="mailto:silvana.iriondo@plaud-ai.com.ar" className="footer-email">
                silvana.iriondo@plaud-ai.com.ar
              </a>
              <div className="footer-apps">
                <div className="footer-label">Descargar la app</div>
                <div className="footer-apps-links">
                  <a
                    href="https://apps.apple.com/app/plaud-ai-voice-recorder/id6450364080"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🍎 App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=ai.plaud.android.plaud&hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ▶ Google Play
                  </a>
                  <a
                    href="https://plaud-public.s3.us-west-2.amazonaws.com/app/PLAUD_release.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⬇ Android APK
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-inner-box">
              <div>
                <div className="footer-col-label">Productos</div>
                <div className="footer-links">
                  <a href="#productos">Plaud Note Pro</a>
                  <a href="#productos">Plaud Note</a>
                  <a href="#productos">Plaud NotePin S</a>
                  <a href="#productos">Ver todos los productos</a>
                </div>
              </div>

              <div>
                <div className="footer-col-label">Política</div>
                <div className="footer-links">
                  <a href="https://latam.plaud.ai/policies/shipping-policy" target="_blank" rel="noopener noreferrer">
                    Política de Envío
                  </a>
                  <a href="https://latam.plaud.ai/pages/plaud-payment-policy" target="_blank" rel="noopener noreferrer">
                    Política de Pago
                  </a>
                  <a href="https://latam.plaud.ai/policies/refund-policy" target="_blank" rel="noopener noreferrer">
                    Devoluciones & Reembolsos
                  </a>
                  <a href="https://latam.plaud.ai/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Política de Privacidad
                  </a>
                  <a href="https://latam.plaud.ai/policies/terms-of-service" target="_blank" rel="noopener noreferrer">
                    Términos de Servicio
                  </a>
                  <a href="https://latam.plaud.ai/pages/product-warranty" target="_blank" rel="noopener noreferrer">
                    Garantía del Producto
                  </a>
                  <a href="https://latam.plaud.ai/pages/trust" target="_blank" rel="noopener noreferrer">
                    Centro de Confianza
                  </a>
                </div>
              </div>

              <div>
                <div className="footer-col-label">Soporte & Ayuda</div>
                <div className="footer-links">
                  <a href="/soporte">Asistencia local</a>
                  <a
                    href={WHATSAPP_BASE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-wa"
                  >
                    Contacto WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-brand">
              <img src="/logo.webp" alt="Plaud" />
              <span>
                <strong>Plaud Argentina</strong> · Canal Oficial
              </span>
            </div>
            <div>plaud-ai.com.ar</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
