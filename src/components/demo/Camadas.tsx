import type { Desfecho, Modo } from "@/lib/demo/types";

// Trilha das camadas que um pedido atravessa. Destaca onde a execução parou.
const ETAPAS = [
  { id: "usuario", nome: "Pedido" },
  { id: "gateway", nome: "Gateway" },
  { id: "modelo", nome: "Modelo" },
  { id: "aplicacao", nome: "Ferramenta" },
  { id: "saida", nome: "Saída" },
] as const;

function parada(desfecho: Desfecho | null): string | null {
  switch (desfecho) {
    case "barrado_gateway":
    case "falso_positivo_gateway":
    case "bloqueio_conteudo_contaminado":
      return "gateway";
    case "barrado_modelo":
    case "falso_positivo_modelo":
    case "falha_tarefa":
      return "modelo";
    case "barrado_aplicacao":
    case "falso_positivo_aplicacao":
      return "aplicacao";
    case "vazou_no_chat":
    case "ataque_sucesso":
    case "ok":
      return "saida";
    default:
      return null;
  }
}

export function Camadas({ modo, desfecho }: { modo: Modo; desfecho: Desfecho | null }) {
  const alvo = parada(desfecho);
  const idx = alvo ? ETAPAS.findIndex((e) => e.id === alvo) : -1;
  const vazou = desfecho === "vazou_no_chat" || desfecho === "ataque_sucesso";
  const legitimo = desfecho === "ok";

  return (
    <ol className="flex flex-wrap items-center gap-1 text-[11px] font-mono" aria-label="Camadas atravessadas">
      {ETAPAS.map((e, i) => {
        const ausente = e.id === "gateway" && modo === "sem_defesa";
        const passou = idx >= 0 && i < idx;
        const aqui = i === idx;
        let estilo = "border-edge text-muted";
        if (ausente) estilo = "border-dashed border-edge text-muted/50 line-through";
        else if (aqui && (vazou)) estilo = "border-sev-high bg-sev-high/15 text-red-300";
        else if (aqui && legitimo) estilo = "border-emerald-500 bg-emerald-500/15 text-emerald-300";
        else if (aqui) estilo = "border-accent bg-accent-soft text-accent";
        else if (passou) estilo = "border-edge bg-surface2 text-ink";
        return (
          <li key={e.id} className="flex items-center gap-1">
            <span className={`rounded-md border px-2 py-1 transition-colors ${estilo}`} title={ausente ? "Sem gateway neste modo" : undefined}>
              {e.nome}
              {aqui && !legitimo && !vazou && " ⛔"}
            </span>
            {i < ETAPAS.length - 1 && <span className="text-edge">→</span>}
          </li>
        );
      })}
    </ol>
  );
}
