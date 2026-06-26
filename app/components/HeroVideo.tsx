'use client';

export default function HeroVideo() {
  return (
    <div className="hero-video" aria-label="Video demostrativo de Plaud">
      <video autoPlay muted loop playsInline preload="metadata" poster="https://cdn.shopifycdn.net/s/files/1/0940/6680/2981/files/Plaud_Note_Pro-front-black_5c3d70dc-db95-46cf-9b5c-cd337fd0ec6c.webp?v=1756263649&width=800">
        <source src="/ES.mp4" type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
    </div>
  );
}
