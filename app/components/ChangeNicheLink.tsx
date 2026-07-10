"use client";

import { NICHE_STORAGE_KEY } from "./NicheModal";

export default function ChangeNicheLink() {
  return (
    <a href="/" onClick={() => window.localStorage.removeItem(NICHE_STORAGE_KEY)}>
      ¿No es tu rubro? Cambiar →
    </a>
  );
}
