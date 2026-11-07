"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface Slide {
  id: string;
  titulo: string;
  notas?: string;
  conteudo: React.ReactNode;
}

function emCampoDeTexto(alvo: EventTarget | null): boolean {
  const el = alvo as HTMLElement | null;
  return !!el?.closest("textarea, input, select, [contenteditable='true']");
}

/**
 * Deck horizontal: um slide por tela, navegação por teclado, toque e URL (#n).
 * Teclas: ← → (ou PageUp/PageDown/espaço) navegam · N notas · O visão geral · F tela cheia.
 */
export function Deck({ slides, aviso }: { slides: Slide[]; aviso: string }) {
  const [atual, setAtual] = useState(0);
  const [notas, setNotas] = useState(false);
  const [visaoGeral, setVisaoGeral] = useState(false);
  const toque = useRef<{ x: number; y: number } | null>(null);
  const total = slides.length;

  const ir = useCallback(
    (i: number) => {
      const alvo = Math.max(0, Math.min(total - 1, i));
      setAtual(alvo);
      setVisaoGeral(false);
      history.replaceState(null, "", `#${alvo + 1}`);
    },
    [total],
  );

  // Abre no slide da URL (#n), para retomar de onde parou, sem animar até lá.
  const [animar, setAnimar] = useState(false);
  useEffect(() => {
    const n = parseInt(location.hash.replace("#", ""), 10);
    if (n >= 1 && n <= total) setAtual(n - 1);
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimar(true)));
    return () => cancelAnimationFrame(id);
  }, [total]);

  // Tipografia de slide: o tamanho-base acompanha a largura da tela (15 px num
  // notebook, ~17,6 px em Full HD). Como o Tailwind usa rem, o espaçamento escala junto.
  useEffect(() => {
    const html = document.documentElement;
    const anterior = html.style.fontSize;
    html.style.fontSize = "clamp(15px, calc(0.5vw + 8px), 21px)";
    return () => {
      html.style.fontSize = anterior;
    };
  }, []);

  useEffect(() => {
    function tecla(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || emCampoDeTexto(e.target)) return;
      const botao = (e.target as HTMLElement | null)?.closest("button");
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          ir(atual + 1);
          break;
        case " ":
          if (botao) return; // espaço num botão é clique
          e.preventDefault();
          ir(atual + 1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          ir(atual - 1);
          break;
        case "Home":
          ir(0);
          break;
        case "End":
          ir(total - 1);
          break;
        case "n":
        case "N":
          setNotas((v) => !v);
          break;
        case "o":
        case "O":
          setVisaoGeral((v) => !v);
          break;
        case "f":
        case "F":
          if (document.fullscreenElement) void document.exitFullscreen();
          else void document.documentElement.requestFullscreen?.();
          break;
        case "Escape":
          setVisaoGeral(false);
          break;
      }
    }
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [atual, ir, total]);

  function inicioToque(e: React.TouchEvent) {
    toque.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  function fimToque(e: React.TouchEvent) {
    const t = toque.current;
    toque.current = null;
    if (!t || emCampoDeTexto(e.target)) return;
    const dx = e.changedTouches[0].clientX - t.x;
    const dy = e.changedTouches[0].clientY - t.y;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) ir(atual + (dx < 0 ? 1 : -1));
  }

  const slide = slides[atual];

  return (
    <div className="fixed inset-0 flex flex-col bg-night">
      {/* overflow-clip (e não hidden): o contêiner não pode ser rolado nem por scrollIntoView ou foco,
          que deslocariam o trilho de slides para o lado. */}
      <div className="relative min-h-0 flex-1 overflow-clip" onTouchStart={inicioToque} onTouchEnd={fimToque}>
        <div
          className={`flex h-full ${animar ? "transition-transform duration-500 ease-out motion-reduce:transition-none" : ""}`}
          style={{ transform: `translateX(-${atual * 100}%)` }}
        >
          {slides.map((s, i) => (
            <section
              key={s.id}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}: ${s.titulo}`}
              inert={i !== atual}
              className="h-full w-full shrink-0 overflow-y-auto overscroll-contain"
            >
              <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-center-safe px-5 py-6 md:px-10">{s.conteudo}</div>
            </section>
          ))}
        </div>

        {visaoGeral && (
          <div className="absolute inset-0 z-30 overflow-y-auto bg-night/95 p-6 backdrop-blur" role="dialog" aria-label="Visão geral dos slides">
            <ol className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
              {slides.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => ir(i)}
                    className={`h-full w-full rounded-xl border p-3 text-left text-sm transition-colors ${i === atual ? "border-accent bg-accent-soft" : "border-edge bg-surface hover:border-accent/60"}`}
                  >
                    <span className="font-mono text-xs text-accent">{i + 1}</span>
                    <span className="mt-1 block leading-snug">{s.titulo}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {notas && (
        <aside className="max-h-[35vh] overflow-y-auto border-t border-accent/30 bg-surface px-5 py-3 text-sm md:px-10" aria-label="Notas do apresentador">
          <p className="font-mono text-xs text-accent">notas do apresentador · {slide.titulo}</p>
          <p className="mt-1 max-w-5xl leading-relaxed text-ink/90">{slide.notas ?? "Sem notas para este slide."}</p>
        </aside>
      )}

      <footer className="border-t border-edge bg-night">
        <div className="h-0.5 bg-edge">
          <div className="h-full bg-accent transition-all duration-500" style={{ width: `${((atual + 1) / total) * 100}%` }} />
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs md:px-6">
          <button onClick={() => ir(atual - 1)} disabled={atual === 0} className="rounded-md border border-edge px-2.5 py-1 hover:border-accent disabled:opacity-30" aria-label="Slide anterior">
            ←
          </button>
          <span className="font-mono text-muted">
            {atual + 1}/{total}
          </span>
          <span className="hidden truncate text-ink/80 sm:block">{slide.titulo}</span>
          <span className="ml-auto hidden truncate text-[10px] text-muted lg:block">{aviso}</span>
          <div className="ml-auto flex shrink-0 gap-1.5 lg:ml-3">
            <button onClick={() => setNotas((v) => !v)} className={`rounded-md border px-2 py-1 ${notas ? "border-accent text-accent" : "border-edge text-muted hover:text-ink"}`} title="Notas do apresentador (N)">
              notas
            </button>
            <button onClick={() => setVisaoGeral((v) => !v)} className="rounded-md border border-edge px-2 py-1 text-muted hover:text-ink" title="Visão geral (O)">
              slides
            </button>
            <button
              onClick={() => (document.fullscreenElement ? void document.exitFullscreen() : void document.documentElement.requestFullscreen?.())}
              className="hidden rounded-md border border-edge px-2 py-1 text-muted hover:text-ink sm:block"
              title="Tela cheia (F)"
            >
              tela cheia
            </button>
          </div>
          <button onClick={() => ir(atual + 1)} disabled={atual === total - 1} className="rounded-md border border-edge px-2.5 py-1 hover:border-accent disabled:opacity-30" aria-label="Próximo slide">
            →
          </button>
        </div>
      </footer>
    </div>
  );
}
