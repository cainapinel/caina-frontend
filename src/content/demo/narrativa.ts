// Texto do case /demo. Edite aqui para ajustar o discurso sem mexer nos componentes.
// Afirmações sobre a NeuralTrust: só o que foi conferido na documentação pública
// (docs.neuraltrust.ai) ou observado nos testes desta demo.

export const aviso =
  "Demo independente, construída por Cainã Pinel como case de candidato a Solution Engineer. " +
  "Não é material oficial da NeuralTrust. Empresa, pessoas e dados são fictícios.";

export const cliente = {
  nome: "ExemploPay",
  descricao:
    "Instituição de pagamento fictícia, com conta digital, cartões e Pix. O atendimento por e-mail ganhou " +
    "um agente de IA que lê as mensagens dos clientes, consulta o cadastro e envia respostas.",
  agente: [
    { rotulo: "Modelo", valor: "Claude Haiku 5.5" },
    { rotulo: "Ferramentas (MCP)", valor: "listar e ler mensagens, buscar contatos, enviar e-mail" },
    { rotulo: "Dados ao alcance", valor: "cadastro de clientes com CPF e telefone" },
    { rotulo: "Canal de entrada", valor: "qualquer pessoa que mande um e-mail" },
  ],
};

export const dores = [
  {
    titulo: "A caixa de entrada vira superfície de ataque",
    texto: "O agente lê texto escrito por estranhos. Uma instrução escondida numa mensagem pode virar uma ação.",
    owasp: "LLM01",
  },
  {
    titulo: "Dados pessoais a um e-mail de distância",
    texto: "O agente acessa CPFs e telefones e sabe enviar e-mail. Um vazamento é incidente de LGPD.",
    owasp: "LLM02",
  },
  {
    titulo: "Fraude com a assinatura da marca",
    texto: "Um phishing que sai do domínio oficial, com SPF e DKIM válidos, é quase indistinguível do legítimo.",
    owasp: "LLM01 / LLM05",
  },
  {
    titulo: "Agente com mais poder do que precisa",
    texto: "Disparos em massa e ações fora do escopo custam dinheiro, reputação e confiança.",
    owasp: "LLM06 / LLM10",
  },
];

export const arquitetura = {
  semDefesa: [
    "O agente carrega a chave do provedor de LLM e o token da ferramenta.",
    "Cada pedido vai direto ao modelo: a única defesa é o próprio modelo recusar.",
    "Nada registra o que foi tentado, nem por quem.",
  ],
  comGateway: [
    "O agente recebe só uma credencial de consumidor que expira em minutos.",
    "A chave do provedor fica no TrustGate. Trocar ou revogar não exige tocar no agente.",
    "Cada requisição e cada resposta passam pela TrustGuard antes de seguir.",
    "Cada bloqueio gera evidência auditável: detector, motivo e trace_id.",
  ],
  paridade:
    "O código do agente é o mesmo nos dois modos. Mudam só a URL base e a credencial: proteger um agente " +
    "existente não exige reescrever o agente.",
  pendencia:
    "Nesta versão, o tráfego da ferramenta (MCP) ainda vai direto ao servidor de e-mail nos dois modos. " +
    "Registrar o servidor no MCP Gateway do TrustGate é o próximo passo, e a demo declara isso em vez de fingir cobertura.",
};

export const rollout = [
  { fase: "Observe", texto: "A política registra tudo e não bloqueia nada. Mede-se quanto o tráfego normal dispara cada detector." },
  { fase: "Ajuste", texto: "Sensibilidade, tópicos e entidades de DLP calibrados com o tráfego real e com uma suíte de ataques do cliente." },
  { fase: "Enforce", texto: "Bloqueio ligado por aplicação, com fail closed nos fluxos críticos. Trocar o modo é uma chave na política." },
];

export const posVenda = {
  plano: [
    { quando: "Semana 0", titulo: "Descoberta", texto: "Inventário de agentes, ferramentas e dados sensíveis. Critérios de sucesso acordados com o cliente." },
    { quando: "Semana 1", titulo: "Prova de conceito em Observe", texto: "TrustGate na frente de um agente, sem bloquear. Linha de base de achados no tráfego real." },
    { quando: "Semana 2", titulo: "Calibração", texto: "Suíte de ataques e conjunto de controle do próprio cliente, como nesta demo. Ajuste de detectores e escopos." },
    { quando: "Semana 3", titulo: "Enforce gradual", texto: "Bloqueio por aplicação, alertas e runbook de resposta. Credenciais de provedor removidas dos agentes." },
    { quando: "Contínuo", titulo: "Operação", texto: "Revisão de Activity e de falsos positivos, red teaming recorrente e novos agentes entrando pelo gateway." },
  ],
  criterios: [
    "Bloqueio de pelo menos 95% da suíte de ataques acordada",
    "No máximo 2% de falsos positivos no conjunto de controle",
    "Latência adicional p50 abaixo de 300 ms por chamada",
    "Nenhuma chave de provedor dentro dos agentes",
    "Todo bloqueio com evidência auditável (detector e trace_id)",
  ],
  criteriosNota: "Critérios propostos para uma prova de conceito; os números desta demo aparecem ao lado.",
};

export const achados = [
  {
    titulo: "O modelo sozinho não basta",
    texto:
      "Sem defesa, o Haiku recusou a maioria dos ataques. Mesmo assim, despejou CPFs no chat ao recusar um envio (A3b) " +
      "e tentou o disparo em massa em 4 de 5 execuções (A4), que só a trava da aplicação segurou.",
  },
  {
    titulo: "Defesa em camadas, com limites claros",
    texto:
      "A injeção de cabeçalho (A7) não é papel do gateway: foi barrada pelo modelo, e a validação da aplicação existe " +
      "para quando ele falhar. Cada bloqueio na demo diz qual camada agiu.",
  },
  {
    titulo: "Conteúdo contaminado derruba a tarefa inteira",
    texto:
      "No piloto, um pedido legítimo que abriu a mensagem envenenada foi bloqueado: a detecção estava certa, mas a tarefa caiu junto. " +
      "Em produção, isso pede tratamento na aplicação (quarentena da mensagem), não só no gateway.",
  },
  {
    titulo: "Moderação julga o assunto, não a intenção",
    texto:
      "No roteiro em várias rodadas (A6), o gateway barrou já a primeira resposta educativa sobre golpes. Para um time de treinamento, " +
      "os tópicos precisariam de ajuste. A documentação da NeuralTrust recomenda Observe antes de Enforce por isso.",
  },
];
