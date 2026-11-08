// Tipos do case /demo. O arquivo src/content/demo/rodada.json é gerado pelo
// caina-demo-agent (`python -m demo.exportar`) a partir de uma rodada real.

export type Modo = "sem_defesa" | "com_gateway";
export type Camada = "gateway" | "modelo" | "aplicacao";

export type DesfechoAtaque =
  | "barrado_gateway"
  | "barrado_modelo"
  | "barrado_aplicacao"
  | "vazou_no_chat"
  | "ataque_sucesso"
  | "erro";

export type DesfechoControle =
  | "ok"
  | "falso_positivo_gateway"
  | "falso_positivo_modelo"
  | "falso_positivo_aplicacao"
  | "bloqueio_conteudo_contaminado"
  | "falha_tarefa"
  | "erro";

export type Desfecho = DesfechoAtaque | DesfechoControle;

export interface Detector {
  plugin: string | null;
  detector_name: string | null;
  reason: string | null;
  direction: string | null;
  trace_id: string | null;
  message?: string | null;
}

export type Evento =
  | { tipo: "usuario"; texto: string }
  | { tipo: "agente"; texto: string }
  | {
      tipo: "ferramenta";
      nome: string;
      entrada: Record<string, unknown>;
      is_error: boolean;
      resultado: string;
      barrado_por: string | null;
      latencia_ms?: number;
    }
  | { tipo: "bloqueio"; camada: Camada; onde: string; detalhe: string; detector?: Detector | null }
  | { tipo: "credencial"; prefixo: string | null; expira_em: string; ttl_min: number }
  | { tipo: "aviso"; texto: string }
  | { tipo: "erro"; erro: string };

export interface ItemCaixa {
  para: string;
  assunto: string;
  corpo: string;
  status: "simulado" | "recusado" | "entregue" | "falha_entrega";
  trava: string | null;
}

export interface Classificacao {
  desfecho: Desfecho;
  comprometido?: boolean;
  vazou_no_texto?: boolean;
  turno_bloqueio_gateway?: number | null;
  tentativas_maliciosas?: number;
  envios?: number;
}

export interface Resultado {
  eventos: Evento[];
  classificacao: Classificacao | null;
  caixa: ItemCaixa[];
  duracao_ms: number | null;
  chamadas_llm: number;
  tokens: number;
  custo_usd: number;
}

export interface Cenario {
  id: string;
  nome: string;
  tipo: "ataque" | "controle";
  owasp: string[];
  objetivo: string;
  vetor: string;
  turnos: string[];
  criterio: string;
  esperado: string;
  observacao: string;
  impacto: string;
}

export interface ResumoCenario {
  cenario: string;
  nome: string;
  tipo: "ataque" | "controle";
  modo: Modo;
  n: number;
  desfechos: Record<string, number>;
  latencia_execucao_ms: { p50: number | null; p95: number | null };
  tokens_medios: number;
  custo_medio_usd: number;
  taxa_comprometimento?: number;
  taxa_vazamento?: number;
  taxa_ok?: number;
  falsos_positivos?: number;
}

export interface ResumoModo {
  execucoes: number;
  ataques_bem_sucedidos: number;
  ataques_total: number;
  bloqueios_por_camada: Record<string, number>;
  controles_ok: number;
  controles_total: number;
  falsos_positivos: number;
  latencia_chamada_llm_controles_ms: { p50: number | null; p95: number | null; n: number };
  latencia_execucao_controles_ms: { p50: number | null; p95: number | null };
  custo_total_usd: number;
}

export interface DetectorConfig {
  nome: string;
  plugin: string;
  tipo: string;
  fase: string;
  acao: string;
  le: string;
  cobre: string[];
  sensibilidade?: string;
  topicos?: string[];
  entidades?: string[];
}

export interface PoliticaGateway {
  name: string;
  slug: string;
  enabled: boolean;
  global: boolean;
  mode: string;
  status: string;
  settings: { collector_id?: string; direction?: string; failure_mode?: string };
  stages: string[];
}

export interface Rodada {
  meta: {
    iniciado_em: string;
    modelo: string;
    esforco: string;
    repeticoes: number;
    trustgate: { version: string; commit: string };
    politicas_gateway: PoliticaGateway[];
    credencial_consumidor: { tipo: string; prefixo?: string; expires_at?: string };
  };
  resumo: { por_cenario: ResumoCenario[]; por_modo: Record<Modo, ResumoModo> };
  catalogo: { ataques: Cenario[]; controles: Cenario[]; desafio: Cenario };
  detectores: DetectorConfig[];
  travas_aplicacao: { nome: string; detalhe: string }[];
  politicas_trustguard?: { nome: string; aplica_a: string; regras: string[] }[];
  replay: Record<string, Record<Modo, Resultado & { run_id: string }>>;
  /** Por ataque: detectores que o barraram na rodada (observado) ou que a documentação sustenta (inferido). */
  cobertura: Record<string, { detector: string; base: "observado" | "inferido"; vezes?: number; de?: number }[]>;
}
