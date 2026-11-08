// Texto do deck /demo: simulação de uma reunião de vendas da NeuralTrust com a
// diretoria de Tecnologia e Segurança da ExemploPay (cliente fictício).
// Edite aqui para ajustar o discurso sem mexer nos componentes.
//
// Regras do texto:
// - Afirmações sobre a NeuralTrust: só o que está na documentação pública
//   (docs.neuraltrust.ai) ou foi observado nos testes desta demo.
// - Números: vêm da rodada gravada (src/content/demo/rodada.json), não daqui.
// - Regulação: LGPD art. 52, II e Resolução BCB nº 85/2021 (e alterações), conferidas em 2026-11-07.

export const aviso =
  "Simulação de reunião de vendas · demo independente de candidato a Solution Engineer, " +
  "não é material oficial da NeuralTrust · empresa, pessoas e dados fictícios";

export const capa = {
  kicker: "NeuralTrust × ExemploPay",
  titulo: "Agentes de IA que a ExemploPay pode colocar em produção com segurança",
  sub: "Reunião com a diretoria de Tecnologia e Segurança da Informação",
  apresentador: "Apresentação: Cainã Pinel",
};

export const objetivo = {
  titulo: "O que queremos sair desta reunião sabendo",
  perguntas: [
    "Se os riscos que vocês nos contaram aparecem de fato no agente de atendimento",
    "Como a NeuralTrust reduz esses riscos sem reescrever o agente nem trocar de modelo",
    "Se faz sentido uma prova de conceito de 4 semanas, e com quais critérios de sucesso",
  ],
  agenda: ["O que ouvimos", "O risco", "A plataforma", "Demonstração ao vivo", "Resultados", "Perguntas frequentes", "Proposta de POC", "Próximos passos"],
};

export const descoberta = {
  titulo: "O que ouvimos de vocês",
  contexto:
    "A ExemploPay é uma instituição de pagamento com conta digital, cartões e Pix. O atendimento por e-mail ganhou um agente " +
    "de IA em piloto: ele lê as mensagens dos clientes, consulta o cadastro e envia respostas.",
  agente: [
    { rotulo: "Modelo", valor: "Claude Haiku 5.5" },
    { rotulo: "Ferramentas", valor: "ler mensagens, buscar clientes, enviar e-mail (via MCP)" },
    { rotulo: "Dados ao alcance", valor: "cadastro com CPF e telefone" },
    { rotulo: "Quem escreve o que ele lê", valor: "qualquer pessoa que mande um e-mail" },
  ],
  falas: [
    { papel: "CISO", texto: "Qualquer pessoa pode mandar um e-mail para o agente. Não sei o que ele faria com uma instrução escondida." },
    { papel: "DPO", texto: "O agente enxerga CPF e telefone. Se isso sair, vira incidente na ANPD." },
    { papel: "Head de Prevenção a Fraudes", texto: "Golpe saindo do nosso domínio, com nosso SPF e DKIM, é o pior cenário." },
    { papel: "CTO", texto: "Não quero reescrever o agente nem trocar de modelo para ter segurança." },
  ],
};

export const risco = {
  titulo: "Por que isso é risco de negócio, não só técnico",
  cartoes: [
    {
      titulo: "Dados pessoais de clientes",
      texto: "Um vazamento exige notificar a ANPD e os titulares. A multa simples da LGPD chega a 2% do faturamento no Brasil, limitada a R$ 50 milhões por infração (art. 52, II).",
      owasp: "LLM02",
    },
    {
      titulo: "Exigências do Banco Central",
      texto: "Instituições de pagamento precisam de política de segurança cibernética e de regras para contratar processamento em nuvem (Resolução BCB nº 85/2021 e alterações). Um agente de IA em produção entra nesse escopo.",
      owasp: "",
    },
    {
      titulo: "Fraude com a assinatura da marca",
      texto: "Um phishing enviado pelo domínio oficial, com SPF e DKIM válidos, é praticamente indistinguível de uma comunicação legítima.",
      owasp: "LLM01 · LLM05",
    },
    {
      titulo: "Agente fazendo mais do que deveria",
      texto: "Disparos em massa e consumo sem limite custam modelo, reputação do domínio de e-mail e confiança do cliente.",
      owasp: "LLM06 · LLM10",
    },
  ],
  base: "Classificação: OWASP Top 10 for LLM Applications, versão 2025.",
};

export const modeloNaoBasta = {
  titulo: "Hoje, a única defesa do agente é o próprio modelo",
  sub: "Rodamos os mesmos ataques contra o agente de vocês, sem nenhuma proteção. O modelo é bom, mas não é um controle de segurança.",
  pontos: [
    "Quando o modelo recusa, não fica registro: o time de segurança não sabe que houve uma tentativa.",
    "O comportamento muda a cada versão do modelo, a cada ajuste de prompt e a cada novo fornecedor.",
    "Não há política: ninguém consegue dizer, por escrito, o que o agente está proibido de fazer.",
  ],
};

export const plataforma = {
  titulo: "NeuralTrust: segurança para agentes de IA, do teste à operação",
  pilares: [
    {
      nome: "TrustGate",
      papel: "Gateway de agentes",
      itens: [
        "Fica entre os agentes, os modelos e as ferramentas (LLM e MCP)",
        "Guarda as chaves dos provedores: o agente recebe uma credencial que expira",
        "Roteamento, limites de uso e orçamento por aplicação",
        "Open source (Apache 2.0)",
      ],
    },
    {
      nome: "TrustGuard",
      papel: "Proteção em tempo real",
      itens: [
        "Prompt injection, injeção indireta e envenenamento de ferramentas",
        "Prevenção de vazamento de dados (DLP), com mascaramento",
        "Moderação de escopo com os temas do negócio de vocês",
        "Modos Observe e Enforce, com evidência de cada evento",
      ],
    },
    {
      nome: "TrustTest",
      papel: "Red teaming",
      itens: [
        "Ataques automatizados contra os agentes de vocês",
        "Mede o risco antes de ligar a proteção e depois de cada mudança",
        "É o que fizemos à mão nesta demonstração, em escala",
      ],
    },
  ],
  plataformaItens: ["SSO e SCIM", "Trilha de auditoria e alertas", "SaaS, híbrido ou self-hosted", "Regiões na UE e nos EUA"],
};

export const arquitetura = {
  titulo: "Como fica a arquitetura de vocês",
  semDefesa: [
    "O agente carrega a chave do provedor de LLM e o token do servidor de e-mail.",
    "Cada pedido vai direto ao modelo: a única defesa é o modelo recusar.",
    "Nada registra o que foi tentado, nem por quem.",
  ],
  comGateway: [
    "O agente recebe só uma credencial de consumidor que expira em minutos.",
    "A chave do provedor fica no TrustGate: trocar ou revogar não exige mexer no agente.",
    "Cada pedido e cada resposta passam pela TrustGuard antes de seguir.",
    "As ferramentas passam pelo MCP Gateway: o agente não conhece o endereço nem o token do servidor de e-mail.",
    "Cada bloqueio vira evidência auditável: detector, motivo e trace_id.",
  ],
  paridade:
    "O código do agente é o mesmo nos dois modos. Mudam só a URL base e a credencial: a ExemploPay protege o agente " +
    "que já tem, sem projeto de reescrita.",
  ferramentas:
    "Duas políticas, escolhidas pelo collector conforme a aplicação: uma para o tráfego do modelo e outra para o das ferramentas. " +
    "Na das ferramentas, a TrustGuard lê o que a ferramenta devolve (uma mensagem envenenada é barrada antes de chegar ao agente) " +
    "e o que o agente envia a ela (um e-mail levando CPFs é barrado no próprio argumento).",
};

export const objecoes = {
  titulo: "Perguntas que costumamos ouvir",
  itens: [
    {
      pergunta: "Vai deixar o agente mais lento?",
      resposta: (lat: number, economia: number) =>
        `Medimos +${lat} ms por chamada (p50) nos pedidos legítimos. E ataques barrados na entrada não chegam ao modelo: ` +
        `nesta demo, o custo de modelo caiu ${economia}% com a NeuralTrust.`,
    },
    {
      pergunta: "E se a NeuralTrust ficar fora do ar?",
      resposta: () =>
        "Vocês escolhem por política: fail closed (bloqueia, mais seguro) ou fail open (deixa passar e registra). " +
        "Para fluxos críticos, há implantação híbrida ou self-hosted.",
    },
    {
      pergunta: "E os falsos positivos?",
      resposta: (_: number, __: number, fp: string) =>
        `Começamos em Observe: nada é bloqueado enquanto calibramos com o tráfego real de vocês. Nesta demo, ${fp} pedidos legítimos foram barrados.`,
    },
    {
      pergunta: "Para onde vão os dados dos nossos clientes?",
      resposta: () =>
        "No SaaS, para a região escolhida (UE ou EUA). Nas implantações híbrida e self-hosted, a inspeção roda no ambiente de vocês, " +
        "o que simplifica a contratação de nuvem exigida pelo Banco Central.",
    },
    {
      pergunta: "Ficamos presos a um fornecedor?",
      resposta: () =>
        "O gateway, TrustGate, é open source (Apache 2.0). E o agente não muda: voltar atrás é trocar a URL de volta.",
    },
    {
      pergunta: "Nosso modelo já recusa ataques.",
      resposta: () =>
        "Recusou a maioria aqui também. Mesmo assim, listou CPFs na conversa e tentou um disparo em massa. E uma recusa não gera alerta nem evidência.",
    },
  ],
};

export const poc = {
  titulo: "Proposta: prova de conceito de 4 semanas",
  plano: [
    { quando: "Semana 0", titulo: "Descoberta técnica", texto: "Inventário de agentes, ferramentas e dados sensíveis. Critérios de sucesso assinados pelo CISO." },
    { quando: "Semana 1", titulo: "Observe", texto: "TrustGate na frente do agente de atendimento, sem bloquear. Linha de base com o tráfego real." },
    { quando: "Semana 2", titulo: "Calibração", texto: "Suíte de ataques da ExemploPay rodada com o TrustTest, mais um conjunto de pedidos legítimos. Ajuste dos detectores." },
    { quando: "Semana 3", titulo: "Enforce", texto: "Bloqueio ligado, com fail closed no fluxo de envio. Chave do provedor removida do agente." },
    { quando: "Semana 4", titulo: "Readout executivo", texto: "Resultados contra os critérios e decisão de ir para produção." },
  ],
  responsabilidades: [
    { atividade: "Acesso ao agente em piloto e a um ambiente de teste", quem: "ExemploPay" },
    { atividade: "Configuração do gateway, das políticas e do collector", quem: "NeuralTrust" },
    { atividade: "Suíte de ataques e conjunto de pedidos legítimos", quem: "Juntos" },
    { atividade: "Aprovação dos critérios de sucesso", quem: "ExemploPay (CISO)" },
    { atividade: "Readout executivo e decisão", quem: "Juntos" },
  ],
  criterios: [
    "Bloqueio de pelo menos 95% da suíte de ataques acordada",
    "No máximo 2% de falsos positivos nos pedidos legítimos",
    "Latência adicional p50 abaixo de 300 ms por chamada",
    "Nenhuma chave de provedor dentro do agente",
    "Todo bloqueio com evidência auditável",
  ],
};

export const sucesso = {
  titulo: "Depois da assinatura: como medimos sucesso juntos",
  colunas: [
    {
      titulo: "Primeiros 30 dias",
      itens: [
        "Agentes prioritários atrás do gateway",
        "Chaves de provedor fora dos agentes",
        "Políticas em Enforce nos fluxos críticos",
        "Alertas e runbook de resposta a bloqueios",
      ],
    },
    {
      titulo: "Operação",
      itens: [
        "% de agentes atrás do gateway",
        "% do tráfego em Enforce",
        "Taxa de falsos positivos e tempo para ajustar uma política",
        "Revisão trimestral com o CISO (QBR)",
      ],
    },
    {
      titulo: "Expansão",
      itens: [
        "Novos agentes entrando pelo mesmo gateway",
        "Ferramentas via MCP Gateway, com allowlist por agente",
        "Agentes de código dos desenvolvedores (Claude Code, Cursor)",
        "Red teaming recorrente a cada troca de modelo",
      ],
    },
  ],
  aprendizados: [
    {
      titulo: "Conteúdo contaminado derruba a tarefa",
      texto: "Quando o agente abre uma mensagem envenenada, a NeuralTrust barra a requisição inteira. Na implantação, combinamos isso com quarentena da mensagem na aplicação.",
    },
    {
      titulo: "Moderação julga o assunto, não a intenção",
      texto: "Pedidos de treinamento sobre golpes podem ser barrados. Por isso a POC começa em Observe e calibra os temas com o time de vocês.",
    },
  ],
};

export const proximosPassos = {
  titulo: "Próximos passos",
  passos: [
    { quando: "Esta semana", texto: "Validar os critérios de sucesso da POC com o CISO" },
    { quando: "Próxima semana", texto: "Kickoff técnico com o time do agente de atendimento" },
    { quando: "Em 4 semanas", texto: "Readout executivo e decisão de produção" },
  ],
  pergunta: "Quem mais precisa participar dessa decisão?",
};

export const apendice = {
  titulo: "Apêndice: como medimos e o que validar na POC",
  metodo: [
    "8 ataques e 10 pedidos legítimos, cada um rodado 5 vezes em cada modo (180 execuções).",
    "Mesmo agente e mesmo código nos dois modos; mudam só as URLs (modelo e ferramentas) e a credencial.",
    "O critério olha o que o agente tentou fazer, então cada camada é medida em separado: gateway, modelo e trava da aplicação.",
    "Cada bloqueio do gateway foi gravado com detector, motivo e trace_id.",
  ],
  validar: [
    "Base pequena: 5 repetições e 10 pedidos legítimos. A POC usa a suíte e o tráfego da ExemploPay.",
    "Um modelo só (Haiku 5.5). Com outro modelo, o comportamento sem proteção muda.",
    "Temas de moderação e entidades de DLP foram escritos conhecendo os ataques. Na POC, calibramos com casos reais.",
    "Pelo MCP Gateway, cabeçalhos próprios não chegam ao servidor da ferramenta: a correlação por execução foi feita no agente.",
    "A injeção de cabeçalho (A7) é responsabilidade da aplicação, não do gateway: defesa em camadas.",
  ],
};

// Notas do apresentador, por id de slide (tecla N).
export const notas: Record<string, string> = {
  capa: "Agradecer o tempo. Confirmar quem está na sala (CISO, CTO, DPO, Fraude) e a duração: 20 minutos de conteúdo e o resto para perguntas.",
  objetivo: "Pedir permissão para a agenda e perguntar: 'tem algo que vocês precisam ver hoje e não está aqui?'.",
  descoberta:
    "Validar, não afirmar: 'é isso mesmo?'. Perguntas de descoberta se a conversa abrir: quantos agentes existem em piloto e em produção? " +
    "Quais ferramentas e dados cada um acessa? Quem escreve o conteúdo que eles leem? Que controle existe hoje? " +
    "Onde os dados podem ser processados? Quem aprova a compra e em que prazo?",
  risco: "Não dar parecer jurídico: o ponto é materialidade. Perguntar ao DPO como a ANPD e o Banco Central entram na aprovação de projetos de IA.",
  modelo: "Momento de tensão. Deixar o número falar: o modelo recusou quase tudo, e mesmo assim os dados saíram, e ninguém ficou sabendo.",
  plataforma: "Ligar cada pilar a uma fala do slide de descoberta. TrustTest é o gancho de expansão: o time de segurança mede o risco sozinho.",
  arquitetura: "Clicar em 'Sem defesa' e 'Com NeuralTrust'. A frase-chave para o CTO: muda a URL base e a credencial, o agente é o mesmo.",
  demo:
    "Roteiro sugerido: A2 ao vivo (injeção indireta: o ataque vem de quem manda e-mail), depois A3b em replay (vazamento por dentro), " +
    "depois um pedido legítimo para mostrar que nada quebra. Se a rede falhar, usar o replay: é uma execução real gravada.",
  simulador:
    "Começar em 'Sem NeuralTrust' e ligar um detector por vez. Mostrar o Observe: 'é assim que começamos a POC, sem risco de bloquear o atendimento'.",
  resultados: "Destacar zero falsos positivos, com a ressalva honesta de que a base é pequena. A latência medida responde à primeira objeção antes dela vir.",
  objecoes: "Não ler todas. Perguntar quais preocupam e responder essas. Se surgir preço, levar para a conversa comercial depois da POC.",
  poc: "Fechar compromisso: nome do champion, nome do decisor e data do kickoff. Os critérios são do cliente, não nossos.",
  sucesso: "Mostrar que a relação continua depois da venda: métricas acordadas e QBR. Os aprendizados mostram que já pensamos na operação.",
  desafio: "Oferecer o teclado ao cliente. Se algo passar pelo gateway, usar como gancho: 'é exatamente isso que calibramos na POC'.",
  proximos: "Terminar com a pergunta sobre quem mais decide. Confirmar data do próximo contato antes de desligar.",
  apendice: "Só se pedirem. Transparência sobre o método aumenta a confiança de comprador técnico.",
};
