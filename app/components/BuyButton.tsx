"use client";

import { useState } from "react";
import type { ProductId } from "../lib/products";

export default function BuyButton({
  productId,
  className,
  children,
}: {
  productId: ProductId;
  className?: string;
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      alert("No se pudo iniciar el pago. Probá de nuevo o escribinos por WhatsApp.");
    } catch {
      alert("No se pudo iniciar el pago. Probá de nuevo o escribinos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" onClick={handleClick} disabled={loading} className={className}>
      {loading ? "Redirigiendo…" : children}
    </button>
  );
}
