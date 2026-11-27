"use client";

export function BotaoImprimir() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg border border-edge bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/60 hover:text-accent print:hidden"
    >
      Imprimir ou salvar em PDF
    </button>
  );
}
