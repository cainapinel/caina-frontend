"use client";

import { useState } from "react";

export function Copiar({ texto, rotulo = "copiar" }: { texto: string; rotulo?: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      // Sem permissão de área de transferência: o texto continua visível para seleção manual.
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="shrink-0 rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/60 hover:text-accent print:hidden"
      aria-live="polite"
    >
      {copiado ? "copiado ✓" : rotulo}
    </button>
  );
}
