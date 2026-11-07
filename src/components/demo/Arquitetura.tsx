"use client";

import { useState } from "react";
import { arquitetura } from "@/content/demo/narrativa";

function No({ titulo, sub, destaque, chave }: { titulo: string; sub: string; destaque?: boolean; chave?: string }) {
  return (
    <div className={`relative min-w-0 flex-1 rounded-xl border p-3 text-center transition-all ${destaque ? "border-emerald-500/60 bg-emerald-500/10" : "border-edge bg-surface2"}`}>
      <p className="text-sm font-semibold">{titulo}</p>
      <p className="mt-0.5 text-xs text-muted">{sub}</p>
      {chave && <p className="mt-2 rounded bg-night px-2 py-1 font-mono text-[10px] text-accent">🔑 {chave}</p>}
    </div>
  );
}

const Seta = ({ rotulo }: { rotulo?: string }) => (
  <div className="flex shrink-0 flex-col items-center justify-center px-1 text-muted">
    <span className="text-lg leading-none">→</span>
    {rotulo && <span className="font-mono text-[9px]">{rotulo}</span>}
  </div>
);

export function Arquitetura() {
  const [protegido, setProtegido] = useState(true);
  const itens = protegido ? arquitetura.comGateway : arquitetura.semDefesa;

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-xl border border-edge bg-surface p-1 text-sm">
        {[false, true].map((v) => (
          <button
            key={String(v)}
            onClick={() => setProtegido(v)}
            className={`rounded-lg px-4 py-1.5 transition-colors ${protegido === v ? (v ? "bg-emerald-500/20 text-emerald-300" : "bg-sev-high/15 text-red-300") : "text-muted hover:text-ink"}`}
          >
            {v ? "🛡 Com NeuralTrust" : "Sem defesa"}
          </button>
        ))}
      </div>

      <div className="space-y-3 rounded-2xl border border-edge bg-surface p-5">
        <div className="flex flex-col items-stretch gap-2 md:flex-row">
          <No titulo="Agente de e-mail" sub="loop de tool calling" chave={protegido ? "ag_… (expira em 5 min)" : "chave do provedor + token da ferramenta"} />
          <Seta rotulo="LLM" />
          {protegido && (
            <>
              <No titulo="TrustGate" sub="TrustGuard: injeção, injeção indireta, DLP, escopo" destaque chave="chave do provedor" />
              <Seta />
            </>
          )}
          <No titulo="Claude Haiku 5.5" sub="Anthropic" />
        </div>
        <div className="flex flex-col items-stretch gap-2 md:flex-row">
          <No titulo="Agente de e-mail" sub="mesmo código nos dois modos" />
          <Seta rotulo="MCP" />
          <No titulo="Servidor MCP de e-mail" sub="travas: permitidos, cabeçalhos, limite" chave="senha SMTP (só aqui)" />
          <Seta />
          <No titulo="Caixa de saída simulada" sub="entrega real só no cenário legítimo" />
        </div>
      </div>

      <ul className="grid gap-2 md:grid-cols-2">
        {itens.map((t) => (
          <li key={t} className={`rounded-lg border px-3 py-2 text-sm ${protegido ? "border-emerald-500/30" : "border-sev-high/30"}`}>
            {protegido ? "✓ " : "✗ "}
            {t}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted">{arquitetura.paridade}</p>
      <p className="rounded-lg border border-edge bg-surface2 px-3 py-2 text-xs text-muted">⚠ {arquitetura.pendencia}</p>
    </div>
  );
}
