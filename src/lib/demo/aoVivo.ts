import type { Camada, Evento, ItemCaixa, Modo, Resultado } from "./types";

const API = (process.env.NEXT_PUBLIC_DEMO_API_URL ?? "http://127.0.0.1:8000").replace(/\/$/, "");

export interface PedidoAoVivo {
  modo: Modo;
  cenario_id?: string;
  turnos?: string[];
}

function detectorDe(corpo: unknown) {
  if (typeof corpo !== "string") return null;
  try {
    const d = JSON.parse(corpo);
    return {
      plugin: d.plugin ?? null,
      detector_name: d.detector_name ?? null,
      reason: d.reason ?? null,
      direction: d.direction ?? null,
      trace_id: d.trace_id ?? null,
    };
  } catch {
    return null;
  }
}

/**
 * Executa o agente ao vivo no backend e entrega cada evento conforme chega
 * (text/event-stream via fetch, porque EventSource não faz POST).
 */
export async function executarAoVivo(
  pedido: PedidoAoVivo,
  token: string,
  aoEvento: (e: Evento) => void,
  sinal?: AbortSignal,
): Promise<Resultado> {
  const resp = await fetch(`${API}/api/demo/executar`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Demo-Token": token },
    body: JSON.stringify(pedido),
    signal: sinal,
  });
  if (!resp.ok || !resp.body) {
    let msg = `Erro ${resp.status}`;
    try {
      msg = (await resp.json()).detail ?? msg;
    } catch {}
    throw new Error(msg);
  }

  const resultado: Resultado = {
    eventos: [],
    classificacao: null,
    caixa: [],
    duracao_ms: null,
    chamadas_llm: 0,
    tokens: 0,
    custo_usd: 0,
  };
  const emitir = (e: Evento) => {
    resultado.eventos.push(e);
    aoEvento(e);
  };

  const leitor = resp.body.getReader();
  const dec = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { value, done } = await leitor.read();
    if (done) break;
    buffer += dec.decode(value, { stream: true });
    let fim: number;
    while ((fim = buffer.indexOf("\n\n")) >= 0) {
      const bloco = buffer.slice(0, fim);
      buffer = buffer.slice(fim + 2);
      const tipo = /^event: (.*)$/m.exec(bloco)?.[1];
      const dados = /^data: (.*)$/m.exec(bloco)?.[1];
      if (!tipo || !dados) continue;
      const d = JSON.parse(dados);
      switch (tipo) {
        case "usuario":
        case "agente":
          emitir({ tipo, texto: d.texto });
          break;
        case "ferramenta":
          emitir({ tipo, nome: d.nome, entrada: d.entrada, is_error: d.is_error, resultado: d.resultado, barrado_por: d.barrado_por, latencia_ms: d.latencia_ms });
          break;
        case "bloqueio":
          emitir({ tipo, camada: d.camada as Camada, onde: d.onde, detalhe: d.detalhe, detector: detectorDe(d.evidencia?.corpo) });
          break;
        case "credencial":
          emitir({ tipo, prefixo: d.prefixo, expira_em: d.expira_em, ttl_min: d.ttl_min });
          break;
        case "erro":
          emitir({ tipo, erro: d.erro });
          break;
        case "aguardando_limite":
          emitir({ tipo: "aviso", texto: `limite de rajada do plano da TrustGuard: aguardando ${Math.round(d.segundos)} s…` });
          break;
        case "aguardando_credencial":
          // Uma chave recém-emitida leva ~2 s para valer no gateway.
          if (!resultado.eventos.some((e) => e.tipo === "aviso")) {
            emitir({ tipo: "aviso", texto: "aguardando a credencial nova valer no gateway…" });
          }
          break;
        case "llm":
          resultado.chamadas_llm += 1;
          break;
        case "caixa":
          resultado.caixa = (d.itens ?? []) as ItemCaixa[];
          break;
        case "fim": {
          resultado.classificacao = d.classificacao;
          const ex = d.execucao;
          resultado.duracao_ms = ex.duracao_ms;
          resultado.tokens = ex.tokens_entrada + ex.tokens_saida;
          resultado.custo_usd = ex.custo_usd;
          break;
        }
      }
    }
  }
  return resultado;
}
