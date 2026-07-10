"use client";

import { useState } from "react";
import styles from "./NicheClassifier.module.css";

type Option = { value: string; label: string };

export default function NicheClassifier({
  eyebrow = "Un paso más",
  title = "¿Para quién es este Plaud?",
  q1Title,
  q1Options,
  q2Title,
  q2Options,
  resultEquipo,
  resultIndividual,
}: {
  eyebrow?: string;
  title?: string;
  q1Title: string;
  q1Options: Option[];
  q2Title: string;
  q2Options: Option[];
  resultEquipo: React.ReactNode;
  resultIndividual: React.ReactNode;
}) {
  const [personas, setPersonas] = useState<string | null>(null);
  const [sistema, setSistema] = useState<string | null>(null);

  return (
    <div className={styles.section} id="clasificador">
      <div className={styles.eyebrow}>{eyebrow}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.classifier}>
        <div className={styles.qBlock}>
          <div className={styles.qBlockTitle}>1. {q1Title}</div>
          <div className={styles.opts}>
            {q1Options.map((opt) => (
              <label
                key={opt.value}
                className={`${styles.opt} ${personas === opt.value ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="personas"
                  value={opt.value}
                  checked={personas === opt.value}
                  onChange={() => setPersonas(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.qBlock}>
          <div className={styles.qBlockTitle}>2. {q2Title}</div>
          <div className={styles.opts}>
            {q2Options.map((opt) => (
              <label
                key={opt.value}
                className={`${styles.opt} ${sistema === opt.value ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="sistema"
                  value={opt.value}
                  checked={sistema === opt.value}
                  onChange={() => setSistema(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
        {personas && (
          <div className={`${styles.resultBox} ${styles.show}`}>
            {personas === "equipo" ? resultEquipo : resultIndividual}
          </div>
        )}
      </div>
    </div>
  );
}
