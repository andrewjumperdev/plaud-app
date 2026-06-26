'use client';
import { useState } from "react";

type ImageCarouselProps = {
  images?: string[];
};

export function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <img src={images[index]} alt={`slide-${index}`} className="carousel-img" />
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-btn left" onClick={prev}>‹</button>
          <button className="carousel-btn right" onClick={next}>›</button>
        </>
      )}

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}