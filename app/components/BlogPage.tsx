const WHATSAPP_BASE = "https://wa.me/5493512673489";

const posts = [
  {
    tag: "Construcción · Caso de uso",
    title: "La reunión de 800.000 dólares que nadie documentó — y lo que pasó después",
    excerpt:
      "Un desarrollador inmobiliario de Córdoba perdió una licitación porque el inversor y el desarrollador recordaban versiones distintas de lo que se había acordado. Esta es la historia completa y qué cambió después de implementar Plaud.",
    date: "Junio 2026",
    readTime: "5 min de lectura",
    icon: "🏗️",
    featured: true,
  },
  {
    tag: "Legal · Confidencialidad",
    title: "¿Qué pasa con tus conversaciones cuando usás una app gratuita de transcripción?",
    excerpt:
      "La mayoría de las apps gratuitas procesan tus conversaciones en servidores sin certificación. Te explicamos qué significa eso para la confidencialidad de tus clientes.",
    date: "Junio 2026",
    readTime: "4 min de lectura",
    icon: "⚖️",
  },
  {
    tag: "Educación · Institucional",
    title: "Por qué las decisiones más importantes de una institución educativa se toman sin registro",
    excerpt:
      "Reuniones con familias, coordinaciones de equipo, visitas de supervisión. Todo oral. Todo reconstruido de memoria. Cómo Plaud cambia eso sin agregar carga de trabajo.",
    date: "Mayo 2026",
    readTime: "4 min de lectura",
    icon: "🏫",
  },
  {
    tag: "Producto · AutoFlow",
    title: "AutoFlow: cómo configurar el sistema para que trabaje mientras vos marcás la diferencia",
    excerpt:
      "Guía paso a paso para configurar AutoFlow según tu nicho — construcción, legal o educación. Plantillas, palabras clave y destinos automáticos.",
    date: "Mayo 2026",
    readTime: "6 min de lectura",
    icon: "🎛️",
  },
  {
    tag: "Seguridad · ISO 27001",
    title: "HIPAA, SOC 2, ISO 27001: qué significan realmente estas certificaciones para tu negocio",
    excerpt:
      "Una explicación práctica de cada certificación de seguridad de Plaud y por qué importan si manejás información sensible de clientes.",
    date: "Abril 2026",
    readTime: "5 min de lectura",
    icon: "🔒",
  },
  {
    tag: "Productividad · Equipos",
    title: "De la reunión al activo: cómo las conversaciones de tu equipo se convierten en ventaja competitiva",
    excerpt:
      "El conocimiento que se produce en conversación vale tanto como el que se produce en el escritorio. El problema es que no tiene el mismo sistema de documentación. Hasta ahora.",
    date: "Abril 2026",
    readTime: "4 min de lectura",
    icon: "📈",
  },
];

function BlogCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className={`blog-card ${post.featured ? "blog-card-featured" : ""}`}>
      <div className="blog-card-img">{post.icon}</div>
      <div className="blog-card-body">
        <div className="blog-tag">{post.tag}</div>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <span>📅 {post.date}</span>
          <span>⏱ {post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const featured = posts.find((post) => post.featured);
  const rest = posts.filter((post) => !post.featured);

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
          <a href="/soporte">Soporte</a>
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
        <div className="store-eyebrow">Blog · Inteligencia conversacional para negocios</div>
        <h1 className="page-hero-title">
          Lo que aprendemos
          <br />
          de cada conversación
        </h1>
        <p className="page-hero-sub">
          Casos, estrategias y reflexiones sobre cómo las empresas más inteligentes documentan lo
          que importa.
        </p>
      </div>

      <div className="blog-grid">
        {featured && <BlogCard post={featured} />}
        {rest.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>

      <div className="blog-cta-bar">
        <div>
          <div className="blog-cta-bar-text">¿Querés recibir nuevos artículos?</div>
          <div className="blog-cta-bar-sub">
            Escribile a Silvana por WhatsApp — te sumamos a la lista.
          </div>
        </div>
        <a
          href={`${WHATSAPP_BASE}?text=Hola%20Silvana%2C%20quiero%20recibir%20el%20blog%20de%20Plaud`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Suscribirme →
        </a>
      </div>

      <footer className="store-footer">
        <div>
          <strong>Plaud Argentina</strong> · Canal Oficial · 2026
        </div>
        <div>
          <a href="/">Inicio</a>
          <a href="/soporte">Soporte</a>
          <a href="https://global.plaud.ai" target="_blank" rel="noopener noreferrer">
            Plaud Global
          </a>
        </div>
      </footer>
    </div>
  );
}
