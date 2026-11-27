import type { Bloco } from "@/content/cursos/tipos";
import Link from "next/link";
import { Copiar } from "./Copiar";
import { Montador } from "./Montador";
import { Rico } from "./Rico";

export function CaixaPrompt({ titulo, texto, nota }: { titulo: string; texto: string; nota?: string }) {
  return (
    <figure className="break-inside-avoid rounded-xl border border-edge bg-surface">
      <figcaption className="flex items-center justify-between gap-3 border-b border-edge px-4 py-2">
        <span className="text-sm font-medium">
          <span className="mr-2 font-mono text-xs text-accent">pedido</span>
          {titulo}
        </span>
        <Copiar texto={texto} />
      </figcaption>
      <pre className="whitespace-pre-wrap px-4 py-3 font-sans text-sm leading-relaxed text-ink/90">{texto}</pre>
      {nota && <p className="border-t border-edge px-4 py-2 text-xs text-muted">{nota}</p>}
    </figure>
  );
}

function Tabela({ colunas, linhas }: { colunas: string[]; linhas: string[][] }) {
  return (
    <div className="break-inside-avoid overflow-x-auto rounded-xl border border-edge">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-surface2">
          <tr>
            {colunas.map((c) => (
              <th key={c} className="px-3 py-2 font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) => (
            <tr key={i} className="border-t border-edge align-top">
              {linha.map((cel, j) => (
                <td key={j} className={`px-3 py-2 leading-relaxed ${j === 0 ? "text-ink" : "text-ink/80"}`}>
                  <Rico texto={cel} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Destaque({ tipo, titulo, texto }: { tipo: "dica" | "cuidado"; titulo?: string; texto: string }) {
  const cuidado = tipo === "cuidado";
  return (
    <aside
      className={`break-inside-avoid rounded-xl border-l-4 px-4 py-3 ${cuidado ? "border-sev-high bg-sev-high/10" : "border-accent bg-accent-soft"}`}
    >
      <p className={`font-mono text-xs ${cuidado ? "text-sev-high" : "text-accent"}`}>
        {cuidado ? "atenção" : "dica"}
        {titulo && <span className="ml-2 font-sans text-sm font-semibold text-ink">{titulo}</span>}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink/90">
        <Rico texto={texto} />
      </p>
    </aside>
  );
}

export function Blocos({ blocos }: { blocos: Bloco[] }) {
  return (
    <div className="space-y-5">
      {blocos.map((b, i) => {
        switch (b.tipo) {
          case "p":
            return (
              <p key={i} className="leading-relaxed text-ink/90">
                <Rico texto={b.texto} />
              </p>
            );
          case "subtitulo":
            return (
              <h4 key={i} className="pt-3 text-lg font-semibold tracking-tight">
                {b.texto}
              </h4>
            );
          case "lista":
            return (
              <ul key={i} className="space-y-2">
                {b.itens.map((item) => (
                  <li key={item} className="flex gap-2 leading-relaxed text-ink/90">
                    <span className="mt-0.5 text-accent">▸</span>
                    <span>
                      <Rico texto={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "passos":
            return (
              <ol key={i} className="space-y-2">
                {b.itens.map((item, j) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-ink/90">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/50 font-mono text-xs text-accent">
                      {j + 1}
                    </span>
                    <span>
                      <Rico texto={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "prompt":
            return <CaixaPrompt key={i} titulo={b.titulo} texto={b.texto} nota={b.nota} />;
          case "antesDepois":
            return (
              <div key={i} className="break-inside-avoid space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-sev-high/40 bg-sev-high/5 p-4">
                    <p className="font-mono text-xs text-sev-high">pedido vago</p>
                    <p className="mt-2 text-sm leading-relaxed">“{b.antes}”</p>
                  </div>
                  <div className="rounded-xl border border-ok/40 bg-ok/5 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono text-xs text-ok">pedido claro</p>
                      <Copiar texto={b.depois} />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">“{b.depois}”</p>
                  </div>
                </div>
                <p className="text-sm text-muted">
                  <Rico texto={b.porque} />
                </p>
              </div>
            );
          case "dica":
          case "cuidado":
            return <Destaque key={i} tipo={b.tipo} titulo={b.titulo} texto={b.texto} />;
          case "tabela":
            return <Tabela key={i} colunas={b.colunas} linhas={b.linhas} />;
          case "montador":
            return <Montador key={i} />;
          case "chamada":
            return (
              <aside key={i} className="break-inside-avoid rounded-xl border border-accent/40 bg-surface p-5">
                <p className="font-semibold">{b.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/85">
                  <Rico texto={b.texto} />
                </p>
                <Link href={b.href} className="mt-3 inline-block font-mono text-sm text-accent hover:underline print:hidden">
                  {b.rotulo} →
                </Link>
                <p className="mt-2 hidden font-mono text-xs text-muted print:block">caina.pinel.com.br{b.href}</p>
              </aside>
            );
        }
      })}
    </div>
  );
}
