import styles from "./PlantillasPersonalizadas.module.css";

const steps = [
  {
    label: "01 · Diagnóstico",
    title: "Respondé un formulario breve",
    body: "Contanos cómo trabajás, con quién y qué no podés permitirte perder — 2 minutos, sin llamadas.",
  },
  {
    label: "02 · Generación instantánea",
    title: "Armamos tu Biblioteca de Prompts al momento",
    body: "Un motor de IA construye plantillas específicas para tu vocabulario y tus riesgos concretos — no genéricas, hechas a medida.",
  },
  {
    label: "03 · Lista para usar",
    title: "La copiás y la pegás en Plaud",
    body: "Templates → Create Template. Queda disponible al instante para tus próximas grabaciones.",
  },
];

export default function PlantillasPersonalizadas({
  niche,
  rubro,
}: {
  niche: "abogados" | "construccion" | "educacion" | "investigacion";
  rubro: string;
}) {
  return (
    <div className={styles.section} id="plantillas-personalizadas">
      <div className={styles.eyebrow}>Nuevo · Plaud Plantillas Personalizadas</div>
      <h2 className={styles.title}>Tu biblioteca de prompts, generada al instante</h2>
      <p className={styles.sub}>
        No son plantillas genéricas. Se arman a medida para {rubro}, en base a un diagnóstico
        breve — sin llamadas, sin esperas.
      </p>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.label} className={styles.card}>
            <div className={styles.cardLabel}>{step.label}</div>
            <div className={styles.cardTitle}>{step.title}</div>
            <div className={styles.cardBody}>{step.body}</div>
          </div>
        ))}
      </div>
      <a href={`/plantillas-personalizadas?niche=${niche}`} className={styles.cta}>
        Generar mi plantilla →
      </a>
    </div>
  );
}
