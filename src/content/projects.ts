/**
 * Estudos de caso da landing. Projetos privados são descritos genericamente
 * (sem clientes, sem números não confirmados) e recebem badge "repositório
 * privado". Copy marcada com [REVISAR] até o Cainã aprovar.
 */

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  stack: string[];
  highlights: string[];
  github: string | null;
  visibility: "private" | "public";
}

export const projects: Project[] = [
  {
    slug: "ecosafe-os",
    name: "EcoSafe OS",
    tagline:
      "ERP para reciclagem e gestão de resíduos sólidos, com módulo premium ESG " +
      "de ledger de carbono.",
    role: "Criador e desenvolvedor principal",
    stack: ["Django", "React", "TypeScript", "PostgreSQL (RLS)", "Celery", "MQTT", "Railway", "Neon"],
    highlights: [
      "Monólito modular orientado a domínio (DDD): cada bounded context é um app " +
        "Django, com fronteiras impostas no CI por import-linter — contextos " +
        "conversam apenas por eventos de domínio.",
      "Multi-tenancy em dois níveis: shared-schema com Row-Level Security no " +
        "Postgres como padrão e banco dedicado por tenant (Neon) no tier enterprise.",
      "Serviço satélite de ingestão IoT via MQTT para balanças de pesagem, " +
        "rodando separado do web + workers Celery.",
    ],
    github: null,
    visibility: "private",
  },
  {
    slug: "cockpit",
    name: "Cockpit Platform",
    tagline:
      "Plataforma multi-tenant de inteligência com IA para planejamento e " +
      "análise territorial.",
    role: "Criador e desenvolvedor principal",
    stack: ["Django", "React", "TypeScript", "PostgreSQL", "IA generativa", "Vector search"],
    highlights: [
      "Motores de geração assistida por IA para briefings e planos estruturados, " +
        "com versionamento, estados de revisão e processamento em lote.",
      "Análise por bairro combinando dados abertos (data.rio) com busca vetorial " +
        "sobre documentos-fonte.",
      "Exportação de relatórios em PDF e arquitetura multi-tenant reutilizada " +
        "entre verticais.",
    ],
    github: null,
    visibility: "private",
  },
  {
    slug: "comex-forecaster",
    name: "Comex-Forecaster",
    tagline:
      "Previsão de séries temporais (SARIMAX) aplicada a dados de comércio exterior.",
    role: "Criador e desenvolvedor principal",
    stack: ["Python", "pandas", "statsmodels", "SARIMAX"],
    highlights: [
      "Modelagem SARIMAX para projeção de fluxos de comércio exterior.",
      "Pipeline de data science reprodutível, do tratamento dos dados à avaliação " +
        "do modelo.",
    ],
    github: "https://github.com/cainapinel/Comex-Forecaster",
    visibility: "public",
  },
];
