import Link from "next/link";
import type { Curso, SlideCurso as TSlide } from "@/content/cursos/tipos";
import { Rico } from "./Rico";

function Cabeca({ kicker, titulo }: { kicker?: string; titulo: string }) {
  return (
    <header className="mb-8">
      {kicker && <p className="font-mono text-sm text-accent">{kicker}</p>}
      <h2 className="mt-1 text-3xl font-bold tracking-tight @3xl:text-4xl">
        <Rico texto={titulo} />
      </h2>
    </header>
  );
}

/**
 * Conteúdo de um slide do curso. Componente de servidor: o Deck cuida da navegação.
 * O layout responde à largura do próprio slide (container queries, @3xl/@5xl), e não à
 * da tela: assim o mesmo slide sai igual no navegador e no PDF A4 deitado.
 */
export function SlideCurso(props: { slide: TSlide; curso: Curso; base: string; impresso?: boolean }) {
  return (
    <div className="@container w-full">
      <ConteudoSlide {...props} />
    </div>
  );
}

function ConteudoSlide({ slide, curso, base, impresso = false }: { slide: TSlide; curso: Curso; base: string; impresso?: boolean }) {
  switch (slide.tipo) {
    case "capa":
      return (
        <div className="space-y-8">
          <p className="font-mono text-sm text-accent">curso · material de apoio</p>
          <h1 className="text-5xl font-bold tracking-tight @3xl:text-7xl">
            {curso.titulo}
            <span className="text-accent">.</span>
          </h1>
          <p className="max-w-3xl text-xl text-muted">{curso.subtitulo}</p>
          <p className="text-sm text-ink/80">Cainã Pinel · caina.pinel.com.br</p>
          {impresso ? (
            <p className="pt-6 text-xs text-muted">Versão para estudo e impressão · a explicação de cada slide fica embaixo dele</p>
          ) : (
            <p className="pt-6 text-xs text-muted">
              Use ← → para navegar · N mostra ou esconde a explicação · O mostra todos os slides · F tela cheia
            </p>
          )}
        </div>
      );

    case "abertura": {
      const m = curso.modulos.find((x) => x.numero === slide.modulo)!;
      return (
        <div>
          <p className="font-mono text-sm text-accent">módulo {m.numero} de {curso.modulos.length}</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight @3xl:text-6xl">{m.titulo}</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{m.subtitulo}</p>
          <div className="mt-10 max-w-3xl rounded-2xl border border-edge bg-surface p-6">
            <p className="font-mono text-xs text-muted">ao fim deste módulo você vai</p>
            <ul className="mt-3 space-y-2">
              {m.objetivos.map((o) => (
                <li key={o} className="flex gap-3 text-lg">
                  <span className="text-accent">✓</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href={`${base}/roteiro#modulo-${m.numero}`} className="mt-6 inline-block font-mono text-sm text-muted hover:text-accent">
            ler o módulo completo no roteiro →
          </Link>
        </div>
      );
    }

    case "topicos":
      return (
        <div>
          <Cabeca kicker={slide.kicker} titulo={slide.titulo} />
          <ul className="space-y-4">
            {slide.itens.map((item) => (
              <li key={item} className="flex gap-4 rounded-xl border border-edge bg-surface p-5 text-lg leading-snug @3xl:text-xl">
                <span className="text-accent">▸</span>
                <span>
                  <Rico texto={item} />
                </span>
              </li>
            ))}
          </ul>
          {slide.destaque && (
            <p className="mt-6 rounded-xl border-l-4 border-accent bg-accent-soft px-5 py-3 text-lg">
              <Rico texto={slide.destaque} />
            </p>
          )}
        </div>
      );

    case "cards":
      return (
        <div>
          <Cabeca kicker={slide.kicker} titulo={slide.titulo} />
          <div className={`grid gap-4 ${slide.cards.length > 4 ? "grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4" : "grid-cols-1 @xl:grid-cols-2"}`}>
            {slide.cards.map((c) => (
              <div key={c.titulo} className="rounded-xl border border-edge bg-surface p-5">
                <p className="text-lg font-semibold">{c.titulo}</p>
                <p className="mt-1 text-muted">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "tabela":
      return (
        <div>
          <Cabeca kicker={slide.kicker} titulo={slide.titulo} />
          <div className="overflow-x-auto rounded-xl border border-edge">
            <table className="w-full text-left @3xl:text-lg">
              <thead className="bg-surface2">
                <tr>
                  {slide.colunas.map((c) => (
                    <th key={c} className="px-4 py-3 font-medium">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.linhas.map((l, i) => (
                  <tr key={i} className="border-t border-edge">
                    {l.map((cel, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 0 ? "" : "text-ink/80"}`}>
                        <Rico texto={cel} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "prompt":
      return (
        <div>
          <Cabeca kicker={slide.kicker} titulo={slide.titulo} />
          <div className="rounded-2xl border border-accent/40 bg-surface p-6">
            <p className="font-mono text-xs text-accent">pedido</p>
            <p className="mt-3 whitespace-pre-wrap text-lg leading-relaxed @3xl:text-xl">{slide.texto}</p>
          </div>
          {slide.legenda && <p className="mt-4 text-muted">{slide.legenda}</p>}
        </div>
      );

    case "antesDepois":
      return (
        <div>
          <Cabeca kicker={slide.kicker} titulo={slide.titulo} />
          <div className="grid gap-5 @3xl:grid-cols-[1fr_2fr]">
            <div className="rounded-2xl border border-sev-high/40 bg-sev-high/5 p-6">
              <p className="font-mono text-xs text-sev-high">pedido vago</p>
              <p className="mt-3 text-xl">“{slide.antes}”</p>
            </div>
            <div className="rounded-2xl border border-ok/40 bg-ok/5 p-6">
              <p className="font-mono text-xs text-ok">pedido claro</p>
              <p className="mt-3 text-lg leading-relaxed">“{slide.depois}”</p>
            </div>
          </div>
        </div>
      );

    case "frase":
      return (
        <div className="text-center">
          <p className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight @3xl:text-6xl">{slide.texto}</p>
          {slide.apoio && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted @3xl:text-xl">{slide.apoio}</p>}
        </div>
      );

    case "exercicio":
      return (
        <div>
          <Cabeca kicker="Exercício" titulo={slide.titulo} />
          <ol className="space-y-3">
            {slide.itens.map((item, i) => (
              <li key={item} className="flex gap-4 rounded-xl border border-edge bg-surface p-4 text-lg">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/50 font-mono text-accent">{i + 1}</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
          {slide.modulo && (
            <Link href={`${base}/roteiro#modulo-${slide.modulo}-exercicios`} className="mt-6 inline-block font-mono text-sm text-muted hover:text-accent">
              passo a passo completo no roteiro →
            </Link>
          )}
        </div>
      );

    case "fim":
      return (
        <div className="space-y-6 text-center">
          <p className="font-mono text-sm text-accent">fim</p>
          <h2 className="text-5xl font-bold tracking-tight @3xl:text-6xl">Agora é com você.</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            A IA faz o rascunho. Você orienta, confere e assina.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link href={`${base}/roteiro`} className="rounded-lg bg-accent px-5 py-2.5 font-medium text-night hover:opacity-90">
              Abrir o roteiro de estudo
            </Link>
            <Link href={`${base}/pedidos`} className="rounded-lg border border-edge px-5 py-2.5 hover:border-accent/60 hover:text-accent">
              Pedidos prontos
            </Link>
            <Link href={base} className="rounded-lg border border-edge px-5 py-2.5 hover:border-accent/60 hover:text-accent">
              Baixar os materiais em PDF
            </Link>
          </div>
        </div>
      );
  }
}

export function tituloDoSlide(slide: TSlide, curso: Curso): string {
  switch (slide.tipo) {
    case "capa":
      return "Capa";
    case "abertura":
      return `Módulo ${slide.modulo}: ${curso.modulos.find((m) => m.numero === slide.modulo)!.titulo}`;
    case "frase":
      return slide.texto.replace(/["“”]/g, "");
    case "exercicio":
      return `Exercício: ${slide.titulo}`;
    case "fim":
      return "Fim";
    default:
      return slide.titulo.replace(/\*\*/g, "");
  }
}
