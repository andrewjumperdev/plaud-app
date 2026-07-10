"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./NicheModal.module.css";

export const NICHE_STORAGE_KEY = "plaud_niche";

const niches = [
  {
    id: "abogados",
    icon: "⚖️",
    label: "Abogados",
    desc: "Estudios jurídicos y práctica legal",
    href: "/abogados",
  },
  {
    id: "construccion",
    icon: "🏗️",
    label: "Construcción",
    desc: "Obra, real estate y desarrollos",
    href: "/construccion",
  },
  {
    id: "educacion",
    icon: "🎓",
    label: "Educación Secundaria",
    desc: "Colegios e instituciones educativas",
    href: "/educacion",
  },
  {
    id: "investigacion",
    icon: "🔬",
    label: "Investigación Universitaria",
    desc: "Cátedras, tesis y proyectos de investigación",
    href: "/investigacion-universitario",
  },
];

export default function NicheModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = window.localStorage.getItem(NICHE_STORAGE_KEY);
    if (!saved) setOpen(true);
  }, []);

  function choose(id: string, href?: string) {
    window.localStorage.setItem(NICHE_STORAGE_KEY, id);
    setOpen(false);
    if (href) router.push(href);
  }

  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.card}>
        <div className={styles.eyebrow}>Antes de empezar</div>
        <h2 className={styles.title}>¿Cuál es tu rubro?</h2>
        <p className={styles.sub}>
          Te mostramos casos de uso, plantillas y precios pensados para tu actividad.
        </p>
        <div className={styles.grid}>
          {niches.map((n) => (
            <button
              key={n.id}
              type="button"
              className={styles.option}
              onClick={() => choose(n.id, n.href)}
            >
              <span className={styles.optionIcon}>{n.icon}</span>
              <span className={styles.optionLabel}>{n.label}</span>
              <span className={styles.optionDesc}>{n.desc}</span>
            </button>
          ))}
        </div>
        <button type="button" className={styles.skip} onClick={() => choose("skip")}>
          No estoy seguro — ver landing general →
        </button>
      </div>
    </div>
  );
}
