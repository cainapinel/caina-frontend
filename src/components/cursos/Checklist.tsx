"use client";

import { useEffect, useState } from "react";

/** Checklist de fim de módulo. O progresso fica só no navegador do aluno (localStorage). */
export function Checklist({ chave, itens }: { chave: string; itens: string[] }) {
  const [marcados, setMarcados] = useState<boolean[]>(() => itens.map(() => false));

  useEffect(() => {
    try {
      const salvo = JSON.parse(localStorage.getItem(chave) ?? "null");
      if (Array.isArray(salvo)) setMarcados(itens.map((_, i) => salvo[i] === true));
    } catch {
      // armazenamento indisponível: segue sem persistir
    }
  }, [chave, itens]);

  function alternar(i: number) {
    setMarcados((atual) => {
      const novo = atual.map((v, j) => (j === i ? !v : v));
      try {
        localStorage.setItem(chave, JSON.stringify(novo));
      } catch {}
      return novo;
    });
  }

  const feitos = marcados.filter(Boolean).length;

  return (
    <div>
      <ul className="space-y-2">
        {itens.map((item, i) => (
          <li key={item}>
            <label className="flex cursor-pointer gap-3 text-sm leading-relaxed text-ink/90">
              <input
                type="checkbox"
                checked={marcados[i]}
                onChange={() => alternar(i)}
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
              />
              <span className={marcados[i] ? "text-muted line-through decoration-muted/60" : ""}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="mt-3 font-mono text-xs text-muted print:hidden">
        {feitos === itens.length ? "módulo concluído ✓" : `${feitos} de ${itens.length}`}
      </p>
    </div>
  );
}
