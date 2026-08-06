"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./PlantillaGenerator.module.css";

const NICHE_DEFAULTS: Record<string, { q1: string; rubro: string }> = {
  abogados: { q1: "Abogado / estudio jurídico", rubro: "tu estudio jurídico" },
  construccion: { q1: "Construcción / real estate", rubro: "tu obra o constructora" },
  educacion: { q1: "Educación secundaria", rubro: "tu institución educativa" },
  investigacion: { q1: "Investigación universitaria", rubro: "tu investigación" },
};

type Answers = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: [string, string, string];
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  q12: string;
  q13: string;
  q14: string;
  q15: string;
};

const EMPTY: Answers = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: ["", "", ""],
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: "",
  q11: "",
  q12: "",
  q13: "",
  q14: "",
  q15: "",
};

export default function PlantillaGenerator() {
  const searchParams = useSearchParams();
  const niche = searchParams.get("niche") || "";
  const nicheDefaults = NICHE_DEFAULTS[niche];

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    ...EMPTY,
    q1: nicheDefaults?.q1 || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function setField<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function setQ5(index: 0 | 1 | 2, value: string) {
    setAnswers((prev) => {
      const q5 = [...prev.q5] as [string, string, string];
      q5[index] = value;
      return { ...prev, q5 };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/generate-plantilla", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead: { name, contact }, answers }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "No se pudo generar la plantilla. Probá de nuevo.");
        return;
      }
      setResult(data.template);
    } catch {
      setError("No se pudo generar la plantilla. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const waNotifyHref = `https://wa.me/5493512673489?text=${encodeURIComponent(
    `Hola Silvana, soy ${name} (${contact}). Acabo de generar mi plantilla personalizada de Plaud${
      nicheDefaults ? ` para ${nicheDefaults.rubro}` : ""
    } y quiero coordinar los próximos pasos.`
  )}`;

  if (result) {
    return (
      <div className={styles.section}>
        <div className={styles.eyebrow}>Tu plantilla está lista</div>
        <h1 className={styles.title}>Copiala y pegala directo en Plaud</h1>
        <p className={styles.sub}>
          En Plaud: Templates → Create Template. Pegás esto y ya queda disponible para tus
          próximas grabaciones.
        </p>
        <pre className={styles.result}>{result}</pre>
        <div className={styles.resultActions}>
          <button type="button" className={styles.cta} onClick={handleCopy}>
            {copied ? "Copiado ✓" : "Copiar plantilla"}
          </button>
          <a href={waNotifyHref} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
            Avisarle a Silvana por WhatsApp →
          </a>
        </div>
        <button
          type="button"
          className={styles.linkBtn}
          onClick={() => {
            setResult(null);
          }}
        >
          ← Generar otra plantilla
        </button>
      </div>
    );
  }

  return (
    <form className={styles.section} onSubmit={handleSubmit}>
      <div className={styles.eyebrow}>Plaud Plantillas Personalizadas</div>
      <h1 className={styles.title}>Armá tu plantilla en 2 minutos</h1>
      <p className={styles.sub}>
        Respondé el diagnóstico y generamos una plantilla específica para vos — no genérica.
        Se procesa al instante.
      </p>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Tus datos</legend>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Nombre *</span>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>WhatsApp o email *</span>
            <input value={contact} onChange={(e) => setContact(e.target.value)} required />
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Sobre vos</legend>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Industria o sector *</span>
            <input value={answers.q1} onChange={(e) => setField("q1", e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>Cargo o función *</span>
            <input value={answers.q2} onChange={(e) => setField("q2", e.target.value)} required />
          </label>
        </div>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>¿A quién reportás y quién decide? *</span>
            <input value={answers.q3} onChange={(e) => setField("q3", e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>¿Qué gestionás — personas, clientes, proyectos? *</span>
            <input value={answers.q4} onChange={(e) => setField("q4", e.target.value)} required />
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Tus conversaciones</legend>
        <label className={styles.field}>
          <span>3 tipos de conversación frecuentes *</span>
        </label>
        <div className={styles.row}>
          <input
            placeholder="Conversación 1"
            value={answers.q5[0]}
            onChange={(e) => setQ5(0, e.target.value)}
            required
          />
          <input
            placeholder="Conversación 2"
            value={answers.q5[1]}
            onChange={(e) => setQ5(1, e.target.value)}
            required
          />
          <input
            placeholder="Conversación 3"
            value={answers.q5[2]}
            onChange={(e) => setQ5(2, e.target.value)}
            required
          />
        </div>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Participantes y roles habituales *</span>
            <input value={answers.q6} onChange={(e) => setField("q6", e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>¿Qué tipo de decisiones se toman? *</span>
            <input value={answers.q7} onChange={(e) => setField("q7", e.target.value)} required />
          </label>
        </div>
        <label className={styles.field}>
          <span>Nivel de exposición *</span>
          <select value={answers.q8} onChange={(e) => setField("q8", e.target.value)} required>
            <option value="">Elegir...</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
            <option value="crítica">Crítica</option>
          </select>
        </label>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Lo que no puede faltar</legend>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>¿Qué información nunca puede faltar? *</span>
            <input value={answers.q9} onChange={(e) => setField("q9", e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>Vocabulario específico de tu profesión *</span>
            <input value={answers.q10} onChange={(e) => setField("q10", e.target.value)} required />
          </label>
        </div>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>¿Qué perdiste alguna vez por falta de documentación? *</span>
            <input value={answers.q11} onChange={(e) => setField("q11", e.target.value)} required />
          </label>
          <label className={styles.field}>
            <span>¿Qué datos deben aparecer siempre? *</span>
            <input value={answers.q12} onChange={(e) => setField("q12", e.target.value)} required />
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Cómo lo querés</legend>
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Destino del resultado *</span>
            <select value={answers.q13} onChange={(e) => setField("q13", e.target.value)} required>
              <option value="">Elegir...</option>
              <option value="CRM">CRM</option>
              <option value="Notion">Notion</option>
              <option value="Sheets">Sheets</option>
              <option value="email">Email</option>
              <option value="archivo">Archivo</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <label className={styles.field}>
            <span>¿Quién recibe el resumen? *</span>
            <input value={answers.q14} onChange={(e) => setField("q14", e.target.value)} required />
          </label>
        </div>
        <label className={styles.field}>
          <span>Formato ideal del resultado *</span>
          <select value={answers.q15} onChange={(e) => setField("q15", e.target.value)} required>
            <option value="">Elegir...</option>
            <option value="lista de pendientes">Lista de pendientes</option>
            <option value="minuta formal">Minuta formal</option>
            <option value="resumen ejecutivo">Resumen ejecutivo</option>
            <option value="ficha estructurada">Ficha estructurada</option>
            <option value="email al cliente">Email al cliente</option>
          </select>
        </label>
      </fieldset>

      {error && <div className={styles.error}>{error}</div>}

      <button type="submit" className={styles.cta} disabled={loading}>
        {loading ? "Generando…" : "Generar mi plantilla →"}
      </button>
    </form>
  );
}
