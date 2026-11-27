import type { SlideCurso } from "./tipos";

/**
 * Slides de apoio do curso intermediário. Cada slide traz em `notas` a explicação
 * para o aluno estudar sozinho (painel "explicação", tecla N).
 * Não revelar aqui o que os dados do projeto final mostram.
 */
export const slidesIaIntermediario: SlideCurso[] = [
  {
    id: "capa",
    tipo: "capa",
    notas:
      "Bem-vinda ao intermediário! Aqui a IA deixa de fazer só rascunhos e passa a ajudar em trabalhos completos: planilhas, " +
      "relatórios e apresentações. Use as setas para navegar e leia esta explicação embaixo de cada slide.",
  },
  {
    id: "o-que-muda",
    tipo: "cards",
    kicker: "O que muda",
    titulo: "Do rascunho ao trabalho pronto",
    cards: [
      { titulo: "Entregas", texto: "Cada módulo termina com uma entrega" },
      { titulo: "Arquivos reais", texto: "Planilhas fictícias, com problemas de verdade" },
      { titulo: "Diário de uso", texto: "Registro de cada uso, do início ao fim" },
      { titulo: "Projeto avaliado", texto: "Critérios claros, 100 pontos" },
    ],
    notas:
      "No introdutório você copiava pedidos prontos. Aqui você recebe problemas e monta a solução. As planilhas de prática têm " +
      "dados inventados, mas os problemas são os mesmos de uma planilha real: espaços, nomes escritos de jeitos diferentes, " +
      "linhas duplicadas. E tudo o que você fizer entra no diário de uso, que faz parte da avaliação final.",
  },
  {
    id: "jornada",
    tipo: "cards",
    kicker: "O curso",
    titulo: "Oito módulos e um projeto",
    cards: [
      { titulo: "1. Memória", texto: "Como a IA lembra e esquece" },
      { titulo: "2. Nível 2", texto: "Exemplos, etapas, autocrítica" },
      { titulo: "3. Excel I", texto: "Fórmulas com a IA" },
      { titulo: "4. Excel II", texto: "Limpeza e análise" },
      { titulo: "5. Relatórios", texto: "Dos números à mensagem" },
      { titulo: "6. Canva", texto: "Apresentações" },
      { titulo: "7. Assistentes", texto: "Projetos, Gems, GPTs" },
      { titulo: "8. Projeto final", texto: "Tudo junto" },
    ],
    notas:
      "Os dois primeiros módulos melhoram o jeito de usar a IA em qualquer tarefa. Do 3 ao 6, aplicamos ao trabalho com " +
      "planilhas, relatórios e apresentações, sempre com a mesma empresa fictícia. O 7 transforma o que deu certo em " +
      "assistentes, e o 8 é o projeto final.",
  },

  // --- Módulo 1 ---------------------------------------------------------------------------
  { id: "m1", tipo: "abertura", modulo: 1, notas: "O módulo que explica por que algumas pessoas tiram muito mais da IA do que outras. Spoiler: não é sorte." },
  {
    id: "m1-tres",
    modulo: 1,
    tipo: "tabela",
    kicker: "Três memórias",
    titulo: "O que a IA lembra, e por quanto tempo",
    colunas: ["Recurso", "Guarda", "Dura"],
    linhas: [
      ["**Contexto**", "A conversa atual e os anexos", "Até abrir uma conversa nova"],
      ["**Instruções e memória**", "Quem você é e como gosta", "Entre conversas, até você apagar"],
      ["**Projetos**", "Instruções e arquivos de um assunto", "Dentro do projeto"],
    ],
    notas:
      "A cada mensagem, a ferramenta envia ao modelo a conversa inteira até ali: é o contexto. As instruções personalizadas e a " +
      "memória valem para todas as conversas. Os projetos (ou Gems, ou GPTs) guardam instruções e arquivos de um assunto. " +
      "Saber qual é qual evita muita frustração.",
  },
  {
    id: "m1-longa",
    modulo: 1,
    tipo: "topicos",
    kicker: "Janela de contexto",
    titulo: "Conversa longa demais esquece",
    itens: [
      "O contexto tem um tamanho máximo: a **janela de contexto**",
      "Perto do limite, o começo é cortado ou resumido",
      "Mesmo antes, a IA dá menos atenção ao meio de conversas enormes",
    ],
    destaque: "Sinal de alerta: ela começou a esquecer o que foi combinado. Resuma e recomece.",
    notas:
      "Quando a IA esquece uma regra que você deu lá no começo, não é teimosia: a conversa ficou grande demais. Peça um resumo " +
      "com objetivo, decisões, regras e pendências, abra uma conversa nova e cole o resumo como primeira mensagem.",
  },
  {
    id: "m1-memoria",
    modulo: 1,
    tipo: "topicos",
    kicker: "Memória",
    titulo: "Veja o que ela guardou sobre você",
    itens: [
      "Configurações → **Memória** ou **Personalização**",
      "Apague o que estiver errado ou for sensível",
      "Peça o que você quer que ela lembre: \"Lembre que…\"",
      "Sem memória no seu plano? Use as **instruções personalizadas**",
    ],
    destaque: "Memória também é dado guardado: nada de dados pessoais ou de clientes.",
    notas:
      "Os recursos de memória variam por ferramenta e por plano, e mudam com frequência. O que não muda: você pode ver o que " +
      "está guardado e apagar. Faça essa auditoria agora. E lembre que, para assuntos sensíveis, a conversa temporária não usa " +
      "nem alimenta a memória.",
  },
  {
    id: "m1-verdade",
    modulo: 1,
    tipo: "frase",
    texto: "O modelo não aprende com você. Você aprende com ele.",
    apoio: "E o contexto que você guarda cresce a cada uso.",
    notas:
      "Esta é a ideia mais importante do módulo. A IA não fica mais inteligente porque você a usa, e os seus pedidos não mudam " +
      "o modelo. Mesmo assim, quem usa muito consegue resultados muito melhores. O próximo slide mostra por quê.",
  },
  {
    id: "m1-acumula",
    modulo: 1,
    tipo: "cards",
    kicker: "Uso intenso",
    titulo: "Três coisas que se acumulam com o uso",
    cards: [
      { titulo: "Contexto guardado", texto: "Memória, instruções e projetos refletem cada vez mais o seu trabalho" },
      { titulo: "Biblioteca", texto: "Cada pedido que funciona vira modelo" },
      { titulo: "Intuição", texto: "Você aprende onde ela acerta, onde erra e como pedir" },
    ],
    notas:
      "É por isso que o curso pede que você use a IA o máximo possível. Cada uso alimenta pelo menos uma dessas três coisas. " +
      "A intuição é a que mais demora e a que mais vale: saber, antes de pedir, se a IA vai ajudar e como.",
  },
  {
    id: "m1-ex",
    modulo: 1,
    tipo: "exercicio",
    titulo: "Auditoria da memória",
    itens: [
      "Veja e limpe o que a memória guarda",
      "Escreva ou revise as instruções personalizadas",
      "Pergunte: \"O que você sabe sobre mim?\"",
      "Comece o diário de uso",
    ],
    notas: "A entrega é o print das instruções (sem dados sensíveis) e as três primeiras linhas do diário. O modelo do diário está na página de pedidos prontos.",
  },

  // --- Módulo 2 ---------------------------------------------------------------------------
  { id: "m2", tipo: "abertura", modulo: 2, notas: "Quatro técnicas para trabalhos maiores do que um e-mail." },
  {
    id: "m2-tecnicas",
    modulo: 2,
    tipo: "cards",
    kicker: "Nível 2",
    titulo: "Quatro técnicas",
    cards: [
      { titulo: "Exemplos", texto: "Mostre como deve ficar" },
      { titulo: "Etapas", texto: "Divida e confira cada parte" },
      { titulo: "Autocrítica", texto: "A IA revisa o próprio trabalho" },
      { titulo: "Modelos", texto: "Pedidos completos e reutilizáveis" },
    ],
    notas:
      "A fórmula P-C-T-F-R continua sendo a base. Estas técnicas são reforços para quando o trabalho é grande ou o formato " +
      "importa muito. Você não precisa usar as quatro sempre; com o tempo, vai saber qual cabe em cada caso.",
  },
  {
    id: "m2-etapas",
    modulo: 2,
    tipo: "prompt",
    kicker: "Etapas",
    titulo: "\"Espere eu confirmar\"",
    texto:
      "Vamos montar o relatório mensal em etapas. Etapa 1: com base nos números abaixo, liste só os fatos principais, um por " +
      "linha, sem interpretar. Não escreva o relatório ainda. Espere eu confirmar antes de seguir.",
    legenda: "Etapas pequenas são etapas que você consegue conferir.",
    notas:
      "Pedir um relatório inteiro de uma vez gera um texto genérico, e você só descobre o erro no final. Em etapas, você " +
      "confere os fatos antes de virarem texto. A frase \"espere eu confirmar\" impede a IA de correr na frente.",
  },
  {
    id: "m2-autocritica",
    modulo: 2,
    tipo: "prompt",
    kicker: "Autocrítica",
    titulo: "A IA como revisora",
    texto:
      "Revise o texto que você escreveu como se fosse a diretora lendo pela primeira vez. Aponte: afirmações sem número, " +
      "trechos ambíguos e o que falta para decidir. Depois, reescreva corrigindo.",
    notas:
      "A IA revisa muito melhor quando você diz pelo que procurar. Critérios claros (sem número, ambíguo, falta para decidir) " +
      "produzem uma revisão útil; \"revise o texto\" produz elogios.",
  },
  {
    id: "m2-modelo",
    modulo: 2,
    tipo: "antesDepois",
    kicker: "Modelos",
    titulo: "Um modelo que qualquer pessoa usa",
    antes: "Faça o resumo da semana.",
    depois:
      "Você é assistente da diretoria comercial. Escreva o resumo da semana com: (1) vendas e comparação; (2) até três " +
      "destaques; (3) até três pendências com responsável. Tópicos curtos, até 12 linhas. Só os dados abaixo; se faltar, " +
      "[VERIFICAR]. Siga o estilo do exemplo.",
    notas:
      "O teste de um bom modelo: outra pessoa consegue usar sem perguntar nada a você. Ele tem papel, estrutura numerada, " +
      "limite de tamanho, regra contra invenção e exemplo.",
  },
  {
    id: "m2-ex",
    modulo: 2,
    tipo: "exercicio",
    titulo: "Três modelos de verdade",
    itens: [
      "Escolha três tarefas recorrentes",
      "Escreva modelos completos, com exemplo",
      "Teste cada um duas vezes",
      "Peça a uma colega para usar um deles",
    ],
    notas: "O que a colega precisou perguntar mostra o que está faltando no modelo. Acrescente e teste de novo.",
  },

  // --- Módulo 3 ---------------------------------------------------------------------------
  { id: "m3", tipo: "abertura", modulo: 3, notas: "Excel sem decorar fórmulas: descrever bem o problema e entender a resposta." },
  {
    id: "m3-descrever",
    modulo: 3,
    tipo: "topicos",
    kicker: "Descrever a planilha",
    titulo: "A IA não vê a sua planilha",
    itens: [
      "Nome das **abas** e o que cada uma tem",
      "**Letra e nome das colunas** e a linha onde os dados começam",
      "**Um exemplo de linha**",
      "O **resultado** que você quer, em português",
      "A **versão do Excel**: Microsoft 365 em português, com ponto e vírgula",
    ],
    notas:
      "Quase todo erro de fórmula vindo da IA é erro de descrição. Se você diz \"coluna do preço\" e o preço está em outra aba, " +
      "a fórmula sai certa para a planilha errada. A versão importa porque o Excel em português usa nomes de funções em " +
      "português e ponto e vírgula como separador.",
  },
  {
    id: "m3-funcoes",
    modulo: 3,
    tipo: "tabela",
    kicker: "As mais usadas",
    titulo: "Sete funções resolvem quase tudo",
    colunas: ["Função", "Para quê"],
    linhas: [
      ["**PROCX**", "Buscar uma informação em outra tabela"],
      ["**SE**", "Escolher entre dois resultados"],
      ["**SOMASES / CONT.SES**", "Somar ou contar com condições"],
      ["**ARRUMAR**", "Tirar espaços sobrando"],
      ["**PRI.MAIÚSCULA**", "Padronizar maiúsculas"],
      ["**SEERRO**", "Trocar um erro por uma mensagem"],
    ],
    notas:
      "Você não precisa decorar a sintaxe. Precisa saber que elas existem, para pedir à IA a coisa certa, e entender a " +
      "explicação. PROCX exige Excel do Microsoft 365 ou 2021 em diante; em versões antigas, peça PROCV.",
  },
  {
    id: "m3-explique",
    modulo: 3,
    tipo: "frase",
    texto: "\"Explique cada parte em português simples.\"",
    apoio: "Termine todo pedido de fórmula com esta frase.",
    notas:
      "Com a explicação, você entende o que está usando, percebe quando a IA entendeu o problema errado e aprende as funções " +
      "sem estudar uma por uma. Em poucas semanas você vai ler fórmulas com tranquilidade.",
  },
  {
    id: "m3-erros",
    modulo: 3,
    tipo: "tabela",
    kicker: "Quando dá erro",
    titulo: "Os quatro erros mais comuns",
    colunas: ["Erro", "Costuma ser"],
    linhas: [
      ["**#N/D**", "Busca não achou: espaço sobrando ou número como texto"],
      ["**#VALOR!**", "Texto onde a conta esperava número"],
      ["**#NOME?**", "Função em inglês num Excel em português"],
      ["**#REF!**", "A fórmula aponta para algo que foi apagado"],
    ],
    notas:
      "Para pedir ajuda com um erro, cole a fórmula exata, diga em que célula acontece e o que você já conferiu. Detalhes " +
      "são tudo, porque a IA não vê a planilha.",
  },
  {
    id: "m3-ex",
    modulo: 3,
    tipo: "exercicio",
    titulo: "Completar a planilha de vendas",
    itens: [
      "Formate os dados como tabela",
      "Traga produto e preço com PROCX",
      "Calcule o total de cada linha",
      "Limpe os nomes com ARRUMAR",
      "Some por vendedor com SOMASES e confira na calculadora",
    ],
    notas: "Use a planilha de prática do 1º semestre, que está na página do curso. Registre no diário os pedidos que usou.",
  },

  // --- Módulo 4 ---------------------------------------------------------------------------
  { id: "m4", tipo: "abertura", modulo: 4, notas: "Planilha de sistema nunca vem pronta. Primeiro limpar, depois analisar." },
  {
    id: "m4-problemas",
    modulo: 4,
    tipo: "cards",
    kicker: "Limpeza",
    titulo: "Cinco problemas que estragam qualquer soma",
    cards: [
      { titulo: "Espaços", texto: "\"Ana\" e \"Ana \" viram duas pessoas" },
      { titulo: "Escrita diferente", texto: "Sudeste, SUDESTE, sudeste" },
      { titulo: "Vazios", texto: "Linhas sem região ou vendedor" },
      { titulo: "Número como texto", texto: "A soma ignora sem avisar" },
      { titulo: "Duplicadas", texto: "O mesmo pedido contado duas vezes" },
    ],
    notas:
      "O perigo desses problemas é que nada dá erro: a soma sai, só que errada. Por isso a limpeza vem antes de qualquer " +
      "conta. Trabalhe numa cópia e registre cada correção numa aba própria.",
  },
  {
    id: "m4-dinamica",
    modulo: 4,
    tipo: "topicos",
    kicker: "Tabela dinâmica",
    titulo: "Cada arrasto é uma pergunta",
    itens: [
      "**Inserir › Tabela Dinâmica** com a tabela já limpa",
      "Vendedor em Linhas, Total em Valores: total por vendedor",
      "Mês em Colunas: evolução no tempo",
      "Troque Vendedor por Região ou Categoria: outro ângulo",
    ],
    notas:
      "A tabela dinâmica é a ferramenta de análise mais útil do Excel, e é mais fácil do que parece. Peça à IA que liste as " +
      "perguntas que a diretora vai querer respondidas: cada pergunta vira uma configuração da tabela dinâmica.",
  },
  {
    id: "m4-graficos",
    modulo: 4,
    tipo: "tabela",
    kicker: "Gráficos",
    titulo: "O gráfico certo para cada comparação",
    colunas: ["Quero mostrar", "Use"],
    linhas: [
      ["Comparar valores", "Colunas"],
      ["Evolução no tempo", "Linhas"],
      ["Ranking com nomes longos", "Barras horizontais"],
      ["Partes de um todo (até 4)", "Pizza, com cuidado"],
    ],
    notas:
      "E o mais importante: o título do gráfico é a mensagem. \"Embalagens dobraram em outubro\" diz algo; \"Vendas por " +
      "categoria\" só diz o assunto.",
  },
  {
    id: "m4-analista",
    modulo: 4,
    tipo: "prompt",
    kicker: "A IA como analista",
    titulo: "Segunda opinião, com conferência",
    texto:
      "Analise a planilha anexa. Para cada número, explique como calculou. Separe claramente o que os dados mostram do que é " +
      "hipótese sua.",
    legenda: "Confira os números dela contra a sua tabela dinâmica.",
    notas:
      "As ferramentas leem planilhas anexadas e fazem contas. Trate a resposta como a de um analista novo: útil, mas " +
      "precisa de conferência. Planilha real da empresa só vai para ferramenta aprovada.",
  },
  {
    id: "m4-ex",
    modulo: 4,
    tipo: "exercicio",
    titulo: "Limpar e resumir",
    itens: [
      "Diagnóstico com a IA e aba Correções",
      "Três tabelas dinâmicas: vendedor, mês, categoria",
      "Atingimento da meta por vendedor",
      "Dois gráficos com títulos que são mensagens",
      "Compare a sua análise com a da IA",
    ],
    notas: "Anote as diferenças entre a sua análise e a da IA. Elas são o melhor material para a sua reflexão no diário.",
  },

  // --- Módulo 5 ---------------------------------------------------------------------------
  { id: "m5", tipo: "abertura", modulo: 5, notas: "A diretora não quer ler a planilha. Ela quer saber o que aconteceu, por que importa e o que fazer." },
  {
    id: "m5-estrutura",
    modulo: 5,
    tipo: "cards",
    kicker: "Estrutura",
    titulo: "Um relatório que se lê em cinco minutos",
    cards: [
      { titulo: "Resumo executivo", texto: "Resultado e recomendação em 3 a 5 linhas" },
      { titulo: "Destaques", texto: "O que foi bem, com números" },
      { titulo: "Pontos de atenção", texto: "O que foi mal, com números" },
      { titulo: "Recomendações", texto: "O quê, quem e quando" },
    ],
    notas:
      "Se a diretora ler só o resumo executivo, ela já sabe o essencial. Todo o resto é apoio. Tabelas grandes e gráficos " +
      "extras vão para o anexo.",
  },
  {
    id: "m5-fato",
    modulo: 5,
    tipo: "tabela",
    kicker: "Fato ou hipótese?",
    titulo: "Quatro tipos de frase",
    colunas: ["Tipo", "Regra"],
    linhas: [
      ["**Fato**", "Tem um número que bate com a planilha"],
      ["**Interpretação**", "Vem com o dado que a sustenta"],
      ["**Hipótese**", "Aparece marcada como hipótese"],
      ["**Recomendação**", "Diz o quê, quem e quando"],
    ],
    notas:
      "Um relatório perde a credibilidade quando mistura esses tipos. \"As vendas caíram porque a concorrência baixou preços\" " +
      "parece um fato, mas é uma hipótese, a menos que você tenha o dado.",
  },
  {
    id: "m5-inventa",
    modulo: 5,
    tipo: "frase",
    texto: "A IA adora inventar causas.",
    apoio: "\"Só afirme o que os números mostram. Hipóteses, marcadas como hipóteses.\"",
    notas:
      "Peça para a IA explicar uma queda e ela vai sugerir sazonalidade, concorrência, economia. Plausível, e nada disso está " +
      "nos seus dados. A regra entre aspas resolve, e o pedido \"liste os números que você usou\" deixa tudo conferível.",
  },
  {
    id: "m5-ex",
    modulo: 5,
    tipo: "exercicio",
    titulo: "Relatório do 1º semestre",
    itens: [
      "Liste os fatos a partir das suas tabelas",
      "Peça o rascunho com a regra das causas",
      "Confira cada número",
      "Títulos que contam a história",
      "Revisão final e Word em PDF",
    ],
    notas: "Use os estilos do Word (Título 1, Título 2) e cole o gráfico como imagem. Envie sempre em PDF.",
  },

  // --- Módulo 6 ---------------------------------------------------------------------------
  { id: "m6", tipo: "abertura", modulo: 6, notas: "Primeiro o roteiro, depois o Canva. Nunca o contrário." },
  {
    id: "m6-roteiro",
    modulo: 6,
    tipo: "topicos",
    kicker: "Roteiro",
    titulo: "Uma ideia por slide",
    itens: [
      "O **título é a mensagem**, não o assunto",
      "No máximo três tópicos curtos ou um número grande",
      "Situação, o que aconteceu, por que importa, o que fazer",
      "Peça o roteiro à IA **em tabela**: título, tópicos, gráfico",
    ],
    notas:
      "Quem abre o Canva antes de saber o que dizer passa horas escolhendo modelos. Com o roteiro pronto, a montagem é rápida. " +
      "Teste: alguém que lê só os títulos deve entender a história.",
  },
  {
    id: "m6-canva",
    modulo: 6,
    tipo: "topicos",
    kicker: "Canva gratuito",
    titulo: "Montagem em cinco passos",
    itens: [
      "Design do tipo **Apresentação**, modelo simples",
      "Cores da empresa e **no máximo duas fontes**",
      "Gráficos em **Elementos › Gráficos**, com os seus números",
      "Duplique slides prontos para manter o padrão",
      "Baixe em **PDF**",
    ],
    destaque: "Recursos de IA do Canva gratuito têm limite de uso: apoio, não dependência.",
    notas:
      "O Canva gratuito basta para uma apresentação profissional. Os recursos de IA dele ajudam, mas alguns têm limite de uso " +
      "no plano gratuito e os nomes mudam. O roteiro feito no ChatGPT, Gemini ou Claude e a montagem manual funcionam sempre.",
  },
  {
    id: "m6-imagens",
    modulo: 6,
    tipo: "cards",
    kicker: "Cuidados",
    titulo: "Imagens geradas por IA",
    cards: [
      { titulo: "Pessoas reais", texto: "Nunca: colegas, clientes, a diretora" },
      { titulo: "Logos de terceiros", texto: "Nunca" },
      { titulo: "Resultados", texto: "Gráficos e números, não ilustração" },
      { titulo: "Pode parecer foto?", texto: "Avise que foi gerada por IA" },
    ],
    notas:
      "Em apresentação de resultados, imagem decorativa compete com a mensagem. E nunca gere imagens de pessoas reais ou com " +
      "marcas de outras empresas. Antes de usar imagem gerada em material externo, confira as regras de uso da ferramenta.",
  },
  {
    id: "m6-ex",
    modulo: 6,
    tipo: "exercicio",
    titulo: "Apresentação do 1º semestre",
    itens: [
      "Roteiro com a IA, títulos que são mensagens",
      "Montagem no Canva com a identidade da Exemplar",
      "Dois gráficos com os seus números",
      "Teste dos títulos com uma colega",
    ],
    notas: "As cores e fontes da Exemplar estão no enunciado do projeto final. Use as mesmas aqui: é um ensaio do projeto.",
  },

  // --- Módulo 7 ---------------------------------------------------------------------------
  { id: "m7", tipo: "abertura", modulo: 7, notas: "Transformar os modelos que deram certo em assistentes que já começam sabendo o que fazer." },
  {
    id: "m7-anatomia",
    modulo: 7,
    tipo: "cards",
    kicker: "Instruções",
    titulo: "Anatomia de um bom assistente",
    cards: [
      { titulo: "Missão", texto: "O que ele faz, em uma frase" },
      { titulo: "Entrada", texto: "O que você cola a cada uso" },
      { titulo: "Saída", texto: "A estrutura exata da resposta" },
      { titulo: "Regras", texto: "Tom, limites, [VERIFICAR]" },
      { titulo: "Exemplo", texto: "Entrada e saída ideais" },
      { titulo: "Dúvida", texto: "O que fazer quando faltar dado" },
    ],
    notas:
      "Projetos (ChatGPT, Claude), Gems (Gemini) e GPTs (ChatGPT) recebem instruções assim. Se a sua ferramenta não tiver " +
      "nenhum desses recursos, guarde as instruções num documento e cole no início da conversa.",
  },
  {
    id: "m7-teste",
    modulo: 7,
    tipo: "topicos",
    kicker: "Teste",
    titulo: "Três casos antes de confiar",
    itens: [
      "Um caso **normal**",
      "Um caso com **dado faltando**: ele marcou [VERIFICAR]?",
      "Um caso **estranho**: ele inventou ou perguntou?",
      "A cada falha, uma regra ou um exemplo a mais",
    ],
    notas:
      "Assistente que só foi testado no caso fácil vai falhar no difícil, justamente quando você estiver com pressa. Registre " +
      "as versões das instruções no diário.",
  },
  {
    id: "m7-automacao",
    modulo: 7,
    tipo: "topicos",
    kicker: "Automação sem código",
    titulo: "Regras que trabalham sozinhas",
    itens: [
      "Regras do Outlook, filtros do Gmail, Power Automate",
      "Mover e-mails, salvar anexos, avisar quando chega algo",
      "Peça à IA o passo a passo, clique por clique",
    ],
    destaque: "Regra errada erra em silêncio: teste com poucos casos e acompanhe.",
    notas:
      "Automação não é IA, mas combina com ela: a IA ensina a configurar. Comece com algo pequeno e reversível, e nunca crie " +
      "automações que enviem mensagens ou apaguem coisas sem falar com a TI.",
  },
  {
    id: "m7-ex",
    modulo: 7,
    tipo: "exercicio",
    titulo: "Seu primeiro assistente",
    itens: [
      "Instruções com as seis partes",
      "Configure como Projeto, Gem ou GPT",
      "Teste com três casos",
      "Ajuste e registre as versões",
    ],
    notas: "Uma boa escolha é o assistente de relatório mensal: ele vai ajudar diretamente no projeto final.",
  },

  // --- Módulo 8 ---------------------------------------------------------------------------
  { id: "m8", tipo: "abertura", modulo: 8, notas: "Hora de juntar tudo num trabalho completo, como se fosse para a diretoria de verdade." },
  {
    id: "m8-pedido",
    modulo: 8,
    tipo: "topicos",
    kicker: "O projeto",
    titulo: "Relatório de vendas do 3º trimestre",
    itens: [
      "Planilha bruta do sistema, com problemas",
      "Relatório de até **duas páginas**",
      "Apresentação de até **oito slides** no Canva",
      "E-mail de envio e diário de uso com reflexão",
    ],
    destaque: "Os números têm resposta certa. Os dados escondem uma história.",
    notas:
      "O enunciado completo, com o e-mail da diretora, a planilha, a identidade visual e os critérios de avaliação, está na " +
      "página do projeto final. Leia tudo antes de começar.",
  },
  {
    id: "m8-etapas",
    modulo: 8,
    tipo: "cards",
    kicker: "Etapas",
    titulo: "Seis etapas, nesta ordem",
    cards: [
      { titulo: "1. Planejar", texto: "Projeto na IA e perguntas da diretora" },
      { titulo: "2. Limpar", texto: "Aba Correções" },
      { titulo: "3. Analisar", texto: "Tabelas dinâmicas e gráficos" },
      { titulo: "4. Relatório", texto: "Até duas páginas" },
      { titulo: "5. Apresentação", texto: "Até oito slides" },
      { titulo: "6. Revisar", texto: "E-mail, checklist, reflexão" },
    ],
    notas:
      "Não pule a limpeza: tudo depende dela. E na etapa 3, não pare no total. Quando algo mudar de um mês para o outro, " +
      "desça até o nível do cliente para entender o porquê.",
  },
  {
    id: "m8-rubrica",
    modulo: 8,
    tipo: "tabela",
    kicker: "Avaliação",
    titulo: "100 pontos, sete critérios",
    colunas: ["Critério", "Pontos"],
    linhas: [
      ["Limpeza dos dados", "15"],
      ["Fórmulas e análise", "20"],
      ["Leitura dos números", "20"],
      ["Relatório", "15"],
      ["Apresentação", "15"],
      ["Uso da IA e diário", "10"],
      ["Revisão e comunicação", "5"],
    ],
    notas:
      "Repare que \"leitura dos números\" vale tanto quanto as fórmulas. O curso não avalia só se você sabe usar o Excel, " +
      "mas se você sabe o que os números dizem. A aprovação é com 70 pontos, e a descrição de cada nível está na página do projeto.",
  },
  {
    id: "m8-equipe",
    modulo: 8,
    tipo: "frase",
    texto: "Use a IA como equipe, não como atalho.",
    apoio: "Analista, redatora e revisora. As decisões e a assinatura são suas.",
    notas:
      "Neste projeto, a IA pode ajudar em todas as etapas. O que ela não pode é decidir o que é verdade nos seus números. " +
      "Essa é a parte que só você faz, e é a que mais vale na avaliação.",
  },
  {
    id: "fim",
    tipo: "fim",
    notas:
      "Parabéns por chegar até aqui! Continue o diário depois do curso: em três meses ele vira um argumento concreto, em horas " +
      "economizadas, para pedir ferramentas, treinamento ou novas responsabilidades.",
  },
];
