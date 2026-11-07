"use client";

import { useEffect, useState } from "react";

export interface SecaoNav {
  id: string;
  titulo: string;
}

/** Trilha de seções com navegação por teclado (← → / PageUp PageDown) para apresentar ao vivo. */
export function Apresentador({ secoes }: { secoes: SecaoNav[] }) {
  const [ativa, setAtiva] = useState(secoes[0]?.id);

  useEffect(() => {
    // Ativa = a última seção cujo topo já passou de 35% da altura da tela.
    // (Seções altas, como a dos ataques, enganam um critério por área visível.)
    function atualizar() {
      const linha = window.innerHeight * 0.35;
      let atual = secoes[0]?.id;
      for (const s of secoes) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= linha) atual = s.id;
      }
      setAtiva(atual);
    }
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    return () => window.removeEventListener("scroll", atualizar);
  }, [secoes]);

  useEffect(() => {
    function tecla(e: KeyboardEvent) {
      const alvo = e.target as HTMLElement;
      if (alvo.closest("textarea, input, select, [contenteditable]")) return;
      const i = secoes.findIndex((s) => s.id === ativa);
      let prox = -1;
      if (e.key === "ArrowRight" || e.key === "PageDown") prox = Math.min(i + 1, secoes.length - 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") prox = Math.max(i - 1, 0);
      if (prox >= 0) {
        e.preventDefault();
        document.getElementById(secoes[prox].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [ativa, secoes]);

  return (
    <nav className="sticky top-0 z-20 border-b border-edge bg-night/90 backdrop-blur" aria-label="Seções do case">
      <ol className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 text-xs">
        {secoes.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block whitespace-nowrap rounded-md px-2.5 py-1 transition-colors ${ativa === s.id ? "bg-accent-soft text-accent" : "text-muted hover:text-ink"}`}
            >
              <span className="font-mono">{i + 1}.</span> {s.titulo}
            </a>
          </li>
        ))}
        <li className="ml-auto hidden whitespace-nowrap px-2 py-1 font-mono text-muted md:block">← → navegam</li>
      </ol>
    </nav>
  );
}
