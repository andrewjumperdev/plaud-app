const WHATSAPP_BASE = "https://wa.me/5493512673489";

const supportOptions = [
  {
    icon: "💬",
    title: "Hablar con un asesor técnico",
    desc: "Soporte técnico directo y personalizado por WhatsApp. Respuesta inmediata. Para cualquier consulta técnica, antes o después de la compra.",
    linkText: "Escribir por WhatsApp →",
    href: WHATSAPP_BASE,
    dark: true,
  },
  {
    icon: "📱",
    title: "Aplicaciones y software",
    desc: "Preguntas frecuentes sobre el uso de Plaud en app, web y desktop. Configuración, AutoFlow, exportaciones e integraciones.",
    linkText: "Programar una llamada →",
    href: `${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20programar%20una%20llamada%20de%20soporte%20t%C3%A9cnico`,
  },
  {
    icon: "📦",
    title: "Seguir mi pedido",
    desc: "Rastreá el estado de tu envío en tiempo real. Si tenés alguna duda sobre tu entrega, escribile a Silvana directamente.",
    linkText: "Consultar mi pedido →",
    href: `${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20saber%20el%20estado%20de%20mi%20pedido`,
  },
];

const faqs = [
  {
    question: "¿Cómo configuro Plaud por primera vez?",
    answer:
      "Descargá la app Plaud desde la App Store o Google Play. Activá el dispositivo con el botón superior. Abrí la app y seguí el asistente de configuración — vincula el dispositivo por Bluetooth. El onboarding personalizado con Silvana está incluido en tu compra y lo coordinamos dentro de los 3 días hábiles después de la entrega.",
  },
  {
    question: "¿Cómo grabo una llamada telefónica con iPhone?",
    answer:
      "Plaud es el único sistema que permite grabar llamadas con iPhone de forma nativa. Pegá el dispositivo magnéticamente al back del iPhone. Activá Plaud antes de realizar o recibir la llamada. El dispositivo captura el audio directamente del altavoz. Al terminar la llamada, sincronizás con la app.",
  },
  {
    question: "¿Cómo configuro AutoFlow?",
    answer:
      'En la app: Explorer → AutoFlow → Nueva regla. Configurás tres cosas: (1) CUANDO: la condición que dispara la regla — por ejemplo, cuando aparece la palabra "inversor" o "reunión" en los primeros 60 segundos. (2) ENTONCES: qué hace el sistema — transcribir, resumir con qué plantilla, en qué idioma. (3) Y ENVIAR: a qué email o destino se envía el resultado. Guardás la regla y ya está activa para todas las grabaciones.',
  },
  {
    question: "¿Qué pasa si el dispositivo no se conecta a la app?",
    answer:
      "Verificá que el Bluetooth esté activado en tu celular. Asegurate de que el dispositivo esté encendido (LED parpadeante). Cerrá la app completamente y volvé a abrirla. Si el problema persiste, reiniciá el dispositivo manteniendo el botón presionado 5 segundos. Si nada funciona, escribile a Silvana por WhatsApp — lo resolvemos en el momento.",
  },
  {
    question: "¿Cómo funciona la garantía de devolución?",
    answer:
      "Tenés 30 días desde la compra para solicitar la devolución completa del dinero, sin ninguna condición. Solo escribile a Silvana por WhatsApp y coordinamos la logística de devolución. Sin formularios, sin justificaciones, sin preguntas.",
  },
  {
    question: "¿Cómo descargo las transcripciones?",
    answer:
      "En la app Plaud, abrí la grabación → tocá el ícono de exportar → elegí el formato: texto, PDF, Word, o Markdown. También podés exportar directamente a Google Drive, Notion, email o copiarlo al portapapeles. Desde la web en plaud.ai tenés las mismas opciones con más control.",
  },
  {
    question: "¿Cuántos minutos de transcripción incluye? ¿Hay que pagar extra?",
    answer:
      "El plan Starter es gratuito e incluye 300 minutos/mes de transcripción. Para más minutos: Plan Pro — USD 8.33/mes (1200 minutos/mes) y Plan Unlimited — USD 19.99/mes (minutos ilimitados). Podés cambiar de plan en cualquier momento desde la app. Consultá con Silvana si necesitás asesoramiento sobre qué plan se adapta mejor a tu uso.",
  },
];

const guides = [
  {
    step: "Paso 1",
    title: "Configurar el dispositivo",
    desc: "Descargá la app, vinculá el dispositivo y configurá tu idioma principal. 5 minutos.",
  },
  {
    step: "Paso 2",
    title: "Tu primera grabación",
    desc: "Activá Plaud antes de tu próxima reunión. Un clic. Al terminar, sincronizás.",
  },
  {
    step: "Paso 3",
    title: "Configurar AutoFlow",
    desc: "Creá tu primera regla automática para que el sistema procese sin intervención.",
  },
  {
    step: "Paso 4",
    title: "Onboarding con Silvana",
    desc: "Sesión personalizada de 30 minutos incluida en tu compra. Salís configurado para tu negocio.",
  },
];

export default function SupportPage() {
  return (
    <div className="store-page">
      <nav className="store-nav">
        <a href="/" className="store-nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="Plaud" />
          <span>Argentina · Canal Oficial</span>
        </a>
        <div className="store-nav-links">
          <a href="/store#como-funciona">Cómo funciona</a>
          <a href="/store#seguridad">Seguridad</a>
          <a href="/store#productos">Productos</a>
          <a href="/plantillas-personalizadas">Plantillas</a>
          <a href="/blog">Blog</a>
          <a
            href={`${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20consultar%20por%20Plaud`}
            target="_blank"
            rel="noopener noreferrer"
            className="store-nav-cta"
          >
            Consultar →
          </a>
        </div>
      </nav>

      <div className="page-hero">
        <div className="store-eyebrow">Centro de soporte · Plaud Argentina</div>
        <h1 className="page-hero-title">
          ¿En qué te
          <br />
          podemos ayudar?
        </h1>
        <p className="page-hero-sub">
          Encontrá las respuestas que necesités, o escribile directamente a Silvana. Respuesta
          inmediata en contacto directo.
        </p>
      </div>

      <div className="support-grid">
        {supportOptions.map((option) => (
          <div key={option.title} className={`support-card ${option.dark ? "is-dark" : ""}`}>
            <div className="support-icon">{option.icon}</div>
            <div className="support-title">{option.title}</div>
            <div className="support-desc">{option.desc}</div>
            <a
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="support-link"
            >
              {option.linkText}
            </a>
          </div>
        ))}
      </div>

      <section className="store-section">
        <h2 className="store-section-title">Preguntas frecuentes</h2>
        <p className="store-section-sub">
          Las consultas más comunes sobre el dispositivo, la app y el servicio en Argentina.
        </p>
        <div className="store-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="store-faq-item">
              <summary>
                {faq.question}
                <span>+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="store-band guides-section">
        <h2 className="store-section-title">Guías de inicio rápido</h2>
        <div className="guides-grid">
          {guides.map((guide) => (
            <div key={guide.step} className="guide-card">
              <div className="guide-step">{guide.step}</div>
              <div className="guide-title">{guide.title}</div>
              <div className="guide-desc">{guide.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="store-footer">
        <div>
          <strong>Plaud Argentina</strong> · Canal Oficial · 2026
        </div>
        <div>
          <a href="/">Inicio</a>
          <a href="/blog">Blog</a>
          <a href="https://support.plaud.ai" target="_blank" rel="noopener noreferrer">
            Soporte global
          </a>
        </div>
      </footer>
    </div>
  );
}
