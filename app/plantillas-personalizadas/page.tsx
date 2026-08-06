import { Suspense } from "react";
import PlantillaGenerator from "../components/PlantillaGenerator";

export const metadata = {
  title: "Plaud Plantillas Personalizadas — Generá tu plantilla",
};

export default function PlantillasPersonalizadasPage() {
  return (
    <div>
      <div style={{ padding: "24px 24px 0", maxWidth: 760, margin: "0 auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/">
          <img src="/logo.webp" alt="Plaud" style={{ height: 22 }} />
        </a>
      </div>
      <Suspense fallback={null}>
        <PlantillaGenerator />
      </Suspense>
    </div>
  );
}
