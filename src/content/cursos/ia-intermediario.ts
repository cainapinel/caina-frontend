import type { Curso } from "./tipos";

/**
 * Curso "IA no Dia a Dia: Intermediário" — material do aluno.
 *
 * Continuação do introdutório: exige mais do aluno (entregas por módulo e projeto
 * final avaliado) e foca em Excel, relatórios e apresentações no Canva gratuito.
 * Todos os nomes de pessoas, empresas e números são fictícios.
 *
 * As planilhas de prática (public/downloads/*.xlsx) são geradas por um script que
 * fica fora deste repositório, junto com o gabarito do instrutor.
 *
 * Cuidado ao atualizar: recursos de memória, planos e nomes de botões mudam com
 * frequência. O texto evita prometer recurso de plano específico.
 */

const base = "/cursos/ia-intermediario";

export const iaIntermediario: Curso = {
  slug: "ia-intermediario",
  titulo: "IA no Dia a Dia: Intermediário",
  nivel: "Intermediário",
  subtitulo: "Planilhas, relatórios e apresentações com IA: do pedido bem feito ao trabalho pronto",
  resumo:
    "Para quem já usa IA no dia a dia e quer ir além: entender como a IA lembra das coisas, montar fórmulas e análises " +
    "no Excel, transformar números em relatórios e criar apresentações no Canva. Cada módulo tem uma entrega, e o curso " +
    "termina com um projeto final avaliado.",
  publico: [
    "Quem fez o curso introdutório IA no Dia a Dia, ou já usa IA com frequência",
    "Secretárias, assistentes e profissionais administrativos que lidam com planilhas e relatórios",
    "Quem quer entregar trabalho pronto com IA, e não só rascunhos",
  ],
  formato: [
    { rotulo: "Módulos", valor: "8 + projeto final" },
    { rotulo: "Duração sugerida", valor: "2h por módulo" },
    { rotulo: "Nível", valor: "Intermediário" },
    { rotulo: "Ferramentas", valor: "Excel e Canva gratuito" },
  ],
  preRequisitos: [
    "Ter feito o introdutório ou saber usar ChatGPT, Gemini, Claude ou Copilot com a fórmula P-C-T-F-R",
    "Excel do Microsoft 365 ou Excel 2021 em diante (para a função PROCX)",
    "Conta gratuita no Canva (canva.com)",
    "Saber o básico de Excel: abrir arquivo, digitar em células, somar uma coluna",
  ],
  resultados: [
    "Explicar como a IA lembra (e esquece) e usar memória, instruções e projetos a seu favor",
    "Escrever pedidos com exemplos, etapas e autocrítica, que acertam trabalhos complexos",
    "Pedir, entender e corrigir fórmulas do Excel com a ajuda da IA",
    "Limpar uma planilha bagunçada e analisá-la com tabela dinâmica e gráficos",
    "Transformar números em um relatório claro, com conclusões que os dados sustentam",
    "Montar uma apresentação no Canva gratuito, com roteiro feito com IA e identidade visual",
    "Criar assistentes fixos para as suas tarefas recorrentes",
    "Entregar um projeto completo: da planilha bruta ao relatório e à apresentação",
  ],
  comoEstudar: [
    "Este curso pede mais de você do que o introdutório: cada módulo termina com uma **entrega**. Faça todas; o projeto final usa tudo.",
    "Baixe as planilhas de prática antes de começar. Elas têm dados fictícios e alguns problemas de propósito.",
    "Mantenha o seu **diário de uso** desde o módulo 1. Ele faz parte da avaliação do projeto final e mostra a sua evolução.",
    "Use a IA o máximo que puder, em tarefas de verdade. O módulo 1 explica por que o uso frequente melhora os resultados.",
    "Quando a IA der uma fórmula ou um número, confira. Neste nível, conferir é parte do trabalho, não um extra.",
    "Os textos entre colchetes, como [coluna] ou [mês], são para você trocar pelos seus dados.",
  ],
  personagens:
    "Você continua como assistente executiva da **Dra. Helena Prado**, diretora comercial da **Exemplar Distribuidora**, " +
    "que vende descartáveis e produtos de limpeza e higiene. Agora você também cuida das planilhas de vendas e dos " +
    "relatórios da diretoria. Pessoas, clientes, produtos e números são fictícios.",
  atualizadoEm: "novembro de 2026",

  modulos: [
    // ---------------------------------------------------------------------------------------
    {
      numero: 1,
      slug: "memoria",
      titulo: "Como a IA lembra (e esquece)",
      subtitulo: "Contexto, memória, projetos, e por que usar muito melhora o resultado",
      duracao: "2h",
      objetivos: [
        "Entender o que a IA lembra dentro de uma conversa e entre conversas",
        "Ligar, consultar e apagar a memória da sua ferramenta",
        "Saber por que conversas muito longas pioram as respostas e como evitar",
        "Entender o que realmente melhora quando você usa a IA com frequência",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "No introdutório você aprendeu que a IA lembra do que foi dito **dentro da mesma conversa**. Neste módulo vamos " +
            "entender como isso funciona de verdade, porque é o que separa quem usa IA de vez em quando de quem trabalha com ela " +
            "todo dia. Existem três \"memórias\" diferentes, e cada uma tem regras próprias.",
        },
        { tipo: "subtitulo", texto: "1. O contexto da conversa: a memória de curto prazo" },
        {
          tipo: "p",
          texto:
            "A cada mensagem, a ferramenta envia ao modelo **a conversa inteira até ali**: seus pedidos, as respostas, os " +
            "arquivos anexados. É assim que ela \"lembra\". Esse conjunto se chama **contexto**, e ele tem um tamanho máximo, " +
            "a **janela de contexto**. É grande (cabem muitos documentos), mas não é infinita.",
        },
        {
          tipo: "p",
          texto:
            "Quando a conversa fica longa demais, duas coisas acontecem: o começo pode ser cortado ou resumido pela ferramenta, " +
            "e mesmo antes disso a IA tende a dar **menos atenção** ao que está no meio de uma conversa enorme. O resultado são " +
            "respostas que esquecem uma regra combinada lá no início, ou que misturam informações de assuntos diferentes.",
        },
        {
          tipo: "dica",
          titulo: "Conversa longa demais? Resuma e recomece",
          texto:
            "Quando perceber que a IA começou a esquecer combinados, peça: \"**Resuma esta conversa em tópicos: objetivo, " +
            "decisões, regras combinadas e o que falta fazer.**\" Copie o resumo, abra uma conversa nova e cole como primeira " +
            "mensagem. Você mantém o que importa e descarta o resto.",
        },
        { tipo: "subtitulo", texto: "2. A memória entre conversas: a memória de longo prazo" },
        {
          tipo: "p",
          texto:
            "ChatGPT, Gemini e Claude têm recursos de **memória** que guardam informações sobre você entre uma conversa e outra: " +
            "seu cargo, suas preferências, projetos em andamento. Em algumas ferramentas a IA decide sozinha o que guardar; em " +
            "outras ela consulta as conversas anteriores; e você sempre pode pedir: \"Lembre que eu prefiro relatórios em tópicos.\"",
        },
        {
          tipo: "tabela",
          colunas: ["Recurso", "O que guarda", "Quem controla"],
          linhas: [
            ["**Contexto da conversa**", "Tudo o que foi dito e anexado naquela conversa", "Acaba quando você abre uma conversa nova"],
            ["**Instruções personalizadas**", "Regras fixas que você escreveu: cargo, tom, formato", "Só você, nas configurações"],
            ["**Memória**", "Fatos sobre você que a IA guardou ou que você pediu para lembrar", "Você e a IA; dá para ver e apagar"],
            ["**Projetos, Gems e GPTs**", "Instruções e arquivos de um assunto específico", "Você monta; vale só dentro do projeto"],
          ],
        },
        {
          tipo: "passos",
          itens: [
            "Abra as **Configurações** da sua ferramenta e procure **Memória** ou **Personalização**.",
            "Veja **o que já está guardado** sobre você. Muita gente se surpreende.",
            "Apague o que estiver errado, desatualizado ou que você não quer que a IA saiba.",
            "Peça explicitamente o que você quer que ela lembre: \"Lembre que trabalho com relatórios comerciais mensais.\"",
            "Se a memória não estiver disponível no seu plano, use as **instruções personalizadas**: elas fazem quase o mesmo papel.",
          ],
        },
        {
          tipo: "cuidado",
          titulo: "Memória também é dado guardado",
          texto:
            "Tudo o que vai para a memória fica salvo na conta. Não peça para a IA lembrar de dados pessoais, de clientes, senhas " +
            "ou informações confidenciais. O semáforo do introdutório continua valendo, e vale ainda mais aqui. Na dúvida, use a " +
            "**conversa temporária**, que não usa nem alimenta a memória.",
        },
        { tipo: "subtitulo", texto: "3. Por que usar muito melhora o resultado" },
        {
          tipo: "p",
          texto:
            "Uma verdade importante: **o modelo não aprende com você**. Ele não fica mais inteligente porque você o usa todo dia, " +
            "e os seus pedidos não mudam a IA de ninguém. Mesmo assim, quem usa IA intensamente consegue resultados muito " +
            "melhores. Por quê? Porque três coisas se acumulam com o uso:",
        },
        {
          tipo: "lista",
          itens: [
            "**O contexto guardado sobre você.** Quanto mais você usa, mais a memória, as instruções e os projetos refletem o seu trabalho. A IA começa cada conversa sabendo mais.",
            "**A sua biblioteca de pedidos.** Cada pedido que funciona vira modelo. Em semanas, você para de escrever do zero.",
            "**A sua intuição.** Você aprende onde a IA acerta, onde ela erra, como pedir cada tipo de coisa e quando não vale a pena usá-la. Isso só vem com repetição.",
          ],
        },
        {
          tipo: "dica",
          titulo: "Regra prática do curso",
          texto:
            "Antes de fazer qualquer tarefa de escrita, organização ou análise, pergunte-se: **\"a IA pode me ajudar nisso?\"** " +
            "Mesmo quando a resposta for \"não muito\", você aprendeu algo. Registre no diário de uso.",
        },
        { tipo: "subtitulo", texto: "O diário de uso" },
        {
          tipo: "p",
          texto:
            "Durante o curso você vai manter um **diário de uso**: uma tabela simples onde registra cada uso relevante da IA, com a " +
            "tarefa, a ferramenta, o pedido, se deu certo, o que precisou ajustar e quanto tempo economizou. O modelo está na página " +
            "de pedidos prontos. Ele faz parte do projeto final e é a melhor prova da sua evolução.",
        },
        {
          tipo: "chamada",
          titulo: "Modelo do diário de uso",
          texto: "Imprima ou copie a estrutura para uma planilha. Comece hoje.",
          href: `${base}/pedidos#kit-ia`,
          rotulo: "abrir o modelo",
        },
      ],
      exercicios: [
        {
          titulo: "Auditoria da memória",
          enunciado: "Descubra o que a sua ferramenta já sabe sobre você e organize isso.",
          passos: [
            "Abra as configurações de memória e de personalização da sua ferramenta principal.",
            "Liste o que está guardado. Apague o que não deveria estar lá.",
            "Escreva (ou revise) as suas instruções personalizadas com cargo, tom, formato preferido e a regra do [VERIFICAR].",
            "Abra uma conversa nova e pergunte: \"O que você sabe sobre mim e sobre como eu gosto de receber respostas?\" Compare com o que você configurou.",
          ],
          entrega: "Print (sem dados sensíveis) das instruções configuradas e as três primeiras linhas do seu diário de uso.",
        },
        {
          titulo: "Teste do esquecimento",
          enunciado:
            "Numa conversa nova, combine uma regra no início (\"responda sempre em no máximo três tópicos\"). Faça uns 20 pedidos " +
            "variados. A regra foi mantida até o fim? Depois, peça o resumo da conversa e recomece com ele. Anote o que observou.",
        },
      ],
      checklist: [
        "Sei explicar a diferença entre contexto, memória, instruções e projetos",
        "Revisei o que a memória da minha ferramenta guarda sobre mim",
        "Sei resumir uma conversa longa e recomeçar a partir do resumo",
        "Entendo que o modelo não aprende comigo, mas o meu contexto e a minha prática sim",
        "Comecei o meu diário de uso",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 2,
      slug: "pedidos-nivel-2",
      titulo: "Pedidos de nível 2",
      subtitulo: "Exemplos, etapas, autocrítica e modelos reutilizáveis",
      duracao: "2h",
      objetivos: [
        "Ensinar pelo exemplo, mostrando à IA como é um bom resultado",
        "Dividir trabalhos grandes em etapas que você confere",
        "Fazer a IA revisar e criticar a própria resposta",
        "Transformar pedidos em modelos com campos variáveis",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "A fórmula P-C-T-F-R resolve a maioria dos pedidos do dia a dia. Para trabalhos maiores (um relatório, uma análise, uma " +
            "apresentação), ela precisa de reforço. Este módulo traz quatro técnicas que fazem a diferença.",
        },
        { tipo: "subtitulo", texto: "Técnica 1: mostre exemplos" },
        {
          tipo: "p",
          texto:
            "Descrever o que você quer é bom; **mostrar** é melhor. Cole um ou dois exemplos de como deve ficar o resultado e peça " +
            "que a IA siga o padrão. Isso funciona especialmente bem para formatos fixos: resumos semanais, atas, legendas, " +
            "respostas padrão.",
        },
        {
          tipo: "prompt",
          titulo: "Pedido com exemplo",
          texto:
            "Escreva o destaque da semana para o boletim interno a partir das informações abaixo. Siga exatamente o estilo e o " +
            "tamanho deste exemplo:\n\nExemplo: \"Vendas: a semana fechou com R$ 48 mil, 6% acima da anterior. Destaque para o " +
            "Supermercado Horizonte, que dobrou o pedido de descartáveis.\"\n\nInformações desta semana:\n[cole os dados]",
        },
        { tipo: "subtitulo", texto: "Técnica 2: divida em etapas" },
        {
          tipo: "p",
          texto:
            "Pedir um relatório inteiro de uma vez gera um texto genérico e difícil de conferir. Divida: primeiro a IA lista o que " +
            "encontrou nos dados, você confere; depois ela propõe a estrutura, você ajusta; só então ela escreve. Cada etapa é " +
            "pequena o suficiente para você revisar com atenção.",
        },
        {
          tipo: "prompt",
          titulo: "Trabalho em etapas",
          texto:
            "Vamos montar o relatório mensal de vendas em etapas. Etapa 1: com base nos números abaixo, liste só os fatos " +
            "principais, um por linha, sem interpretar. Não escreva o relatório ainda. Espere eu confirmar antes de seguir para a " +
            "etapa 2.\n\n[cole os números]",
          nota: "A frase \"espere eu confirmar\" impede a IA de correr na frente.",
        },
        { tipo: "subtitulo", texto: "Técnica 3: peça autocrítica" },
        {
          tipo: "p",
          texto:
            "A IA é melhor revisora do que parece, desde que você peça. Depois de uma resposta importante, peça que ela critique " +
            "o próprio trabalho com critérios claros, e só então corrija.",
        },
        {
          tipo: "prompt",
          titulo: "Revisão crítica",
          texto:
            "Agora revise o texto que você escreveu como se fosse a diretora lendo pela primeira vez. Aponte: (1) afirmações sem " +
            "número que as sustente; (2) trechos que podem ser mal interpretados; (3) o que está faltando para tomar uma decisão. " +
            "Depois, reescreva corrigindo esses pontos.",
        },
        { tipo: "subtitulo", texto: "Técnica 4: transforme em modelo" },
        {
          tipo: "p",
          texto:
            "No introdutório você guardava pedidos com [colchetes]. Agora vá além: monte **modelos completos** para as tarefas " +
            "recorrentes, com todas as regras, o exemplo e as etapas. Um bom modelo é aquele que outra pessoa conseguiria usar " +
            "sem perguntar nada a você.",
        },
        {
          tipo: "antesDepois",
          antes: "Faça o resumo da semana.",
          depois:
            "Você é assistente da diretoria comercial. Escreva o resumo da semana [número da semana] para a Dra. Helena, com: " +
            "(1) vendas da semana e comparação com a anterior; (2) até três destaques; (3) até três pendências com responsável. " +
            "Use tópicos curtos, no máximo 12 linhas. Use só os dados abaixo; se faltar algo, escreva [VERIFICAR]. Siga o estilo " +
            "do exemplo.\n\nExemplo: [cole um resumo antigo]\nDados: [cole os dados]",
          porque:
            "O modelo tem papel, estrutura numerada, limite de tamanho, regra contra invenção e exemplo. Funciona igual toda semana, " +
            "com qualquer ferramenta.",
        },
        {
          tipo: "dica",
          titulo: "Peça a resposta em tabela",
          texto:
            "Quando o resultado vai para uma planilha, peça: \"**Responda em uma tabela com as colunas [A], [B] e [C]**.\" Tabelas " +
            "copiadas da IA colam direto no Excel, cada informação na sua célula.",
        },
      ],
      exercicios: [
        {
          titulo: "Três modelos de verdade",
          enunciado: "Transforme três tarefas recorrentes suas em modelos completos.",
          passos: [
            "Escolha três tarefas que você faz toda semana ou todo mês.",
            "Para cada uma, escreva um modelo com: papel, contexto fixo, estrutura numerada, formato, regras, [VERIFICAR] e um exemplo.",
            "Teste cada modelo duas vezes, com dados diferentes.",
            "Peça autocrítica em pelo menos um deles e compare a versão antes e depois.",
            "Peça a uma colega para usar um dos modelos sem a sua ajuda. O que ela precisou perguntar?",
          ],
          entrega: "Os três modelos finais e uma linha sobre o que a colega precisou perguntar.",
        },
      ],
      checklist: [
        "Uso exemplos quando o formato do resultado importa",
        "Divido trabalhos grandes em etapas e confiro cada uma",
        "Peço autocrítica com critérios claros em respostas importantes",
        "Tenho pelo menos três modelos completos e testados",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 3,
      slug: "excel-formulas",
      titulo: "Excel I: fórmulas com a IA",
      subtitulo: "Pedir, entender e corrigir fórmulas sem decorar nada",
      duracao: "2h",
      objetivos: [
        "Descrever a planilha para a IA de um jeito que gera a fórmula certa",
        "Usar PROCX, SE, SOMASES, CONT.SES, ARRUMAR e SEERRO com ajuda da IA",
        "Entender o que cada fórmula faz antes de usá-la",
        "Resolver erros como #N/D e #VALOR!",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Você não precisa decorar fórmulas. Precisa saber **descrever o problema** e **entender a resposta**. A IA é ótima para " +
            "escrever fórmulas, mas ela não vê a sua planilha: se você descrever errado, ela acerta a fórmula para a planilha errada.",
        },
        {
          tipo: "chamada",
          titulo: "Baixe a planilha de prática",
          texto:
            "Os exercícios dos módulos 3, 4 e 5 usam **Vendas do 1º semestre**: vendas fictícias da Exemplar Distribuidora, com abas " +
            "Vendas, Produtos, Clientes e Metas.",
          href: "/downloads/ia-intermediario-pratica-vendas-1sem.xlsx",
          rotulo: "baixar a planilha (.xlsx)",
        },
        { tipo: "subtitulo", texto: "Como descrever a planilha" },
        {
          tipo: "lista",
          itens: [
            "**Nome das abas** e o que cada uma tem.",
            "**Letra e nome das colunas** envolvidas, e em que linha começam os dados (geralmente a 2).",
            "**Um exemplo de linha**, com valores inventados se forem sensíveis.",
            "**O resultado que você quer**, em português: \"quero o preço do produto na coluna H\".",
            "**A versão do Excel**: Microsoft 365 em português. Isso muda os nomes das funções e o separador (no Brasil é ponto e vírgula).",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Pedir uma fórmula",
          texto:
            "Uso Excel do Microsoft 365 em português. Na aba Vendas, a coluna E tem o código do produto (ex.: P05) e os dados " +
            "começam na linha 2. Na aba Produtos, a coluna A tem o código e a coluna D tem o preço unitário. Quero, na coluna H " +
            "da aba Vendas, o preço do produto de cada linha. Me dê a fórmula para a célula H2, explique cada parte em português " +
            "simples e diga o que acontece se o código não existir.",
        },
        { tipo: "subtitulo", texto: "As fórmulas que você mais vai usar" },
        {
          tipo: "tabela",
          colunas: ["Função", "Para que serve", "Exemplo de pedido"],
          linhas: [
            ["**PROCX**", "Buscar uma informação em outra tabela", "\"Traga o preço da aba Produtos pelo código\""],
            ["**SE**", "Decidir entre dois resultados", "\"Escreva 'Atingiu' se o vendido for maior que a meta\""],
            ["**SOMASES**", "Somar com condições", "\"Some as vendas da Carla em março\""],
            ["**CONT.SES**", "Contar com condições", "\"Quantos pedidos o Nordeste teve?\""],
            ["**ARRUMAR**", "Tirar espaços sobrando", "\"Limpe os espaços dos nomes\""],
            ["**PRI.MAIÚSCULA**", "Padronizar maiúsculas", "\"Deixe 'SUDESTE' como 'Sudeste'\""],
            ["**SEERRO**", "Trocar um erro por algo legível", "\"Se não achar, mostre 'não encontrado'\""],
          ],
        },
        {
          tipo: "dica",
          titulo: "Sempre peça a explicação",
          texto:
            "Termine todo pedido de fórmula com \"**explique cada parte em português simples**\". Você vai entender o que está " +
            "usando, perceber quando a IA entendeu errado e, aos poucos, aprender as funções sem estudar uma por uma.",
        },
        { tipo: "subtitulo", texto: "Quando dá erro" },
        {
          tipo: "tabela",
          colunas: ["Erro", "O que costuma ser"],
          linhas: [
            ["**#N/D**", "A busca não achou o valor. Muitas vezes é um espaço sobrando ou um número guardado como texto."],
            ["**#VALOR!**", "A conta recebeu texto onde esperava número."],
            ["**#NOME?**", "Nome de função errado, geralmente em inglês (VLOOKUP) num Excel em português (PROCV)."],
            ["**#REF!**", "A fórmula aponta para uma célula ou coluna que foi apagada."],
          ],
        },
        {
          tipo: "prompt",
          titulo: "Resolver um erro",
          texto:
            "Na célula H15 a fórmula =PROCX(E15;Produtos!A:A;Produtos!D:D) dá #N/D, mas nas outras linhas funciona. O valor em " +
            "E15 é \"P05\" e esse código existe na aba Produtos. O que pode estar acontecendo e como eu confiro cada possibilidade?",
          nota: "Cole a fórmula exata e diga o que você já conferiu. A IA não vê a planilha, então os detalhes são tudo.",
        },
        {
          tipo: "cuidado",
          titulo: "Confira em duas ou três linhas",
          texto:
            "Fórmula pronta não é fórmula certa. Depois de arrastar para a coluna inteira, faça a conta de duas ou três linhas " +
            "**à mão** (ou na calculadora) e compare. Se a IA sugerir fórmulas em inglês ou com vírgula, peça a versão em português " +
            "com ponto e vírgula.",
        },
        {
          tipo: "dica",
          titulo: "E o Copilot dentro do Excel?",
          texto:
            "Se a sua empresa tem o Copilot liberado no Excel, ele vê a planilha e pode sugerir fórmulas direto nas células. É " +
            "ótimo, mas exige licença paga. Tudo neste módulo funciona com qualquer IA no navegador, e a habilidade de descrever e " +
            "conferir vale para os dois casos.",
        },
      ],
      exercicios: [
        {
          titulo: "Completar a planilha de vendas",
          enunciado: "Na planilha de prática do 1º semestre, use a IA para montar cada fórmula.",
          passos: [
            "Transforme os dados da aba Vendas em tabela (Página Inicial › Formatar como Tabela).",
            "Crie a coluna Produto e a coluna Preço com PROCX buscando na aba Produtos.",
            "Crie a coluna Total (Quantidade × Preço).",
            "Crie a coluna Vendedor limpo com ARRUMAR e confira se sumiram as duplicações no filtro de vendedores.",
            "Numa aba nova, use SOMASES para calcular o total vendido por vendedor.",
            "Confira o total de três linhas na calculadora.",
          ],
          entrega: "A planilha com as colunas novas e os pedidos que você usou registrados no diário.",
        },
      ],
      checklist: [
        "Descrevo abas, colunas, linha inicial e versão do Excel ao pedir uma fórmula",
        "Sempre peço a explicação da fórmula",
        "Sei usar PROCX, SE, SOMASES, CONT.SES, ARRUMAR e SEERRO com ajuda da IA",
        "Sei o que significam #N/D, #VALOR!, #NOME? e #REF!",
        "Confiro fórmulas em duas ou três linhas antes de confiar",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 4,
      slug: "excel-analise",
      titulo: "Excel II: limpeza e análise",
      subtitulo: "Arrumar dados bagunçados, tabela dinâmica, gráficos e a IA como analista",
      duracao: "2h",
      objetivos: [
        "Encontrar e corrigir problemas comuns em dados exportados de sistemas",
        "Resumir dados com tabela dinâmica e gráficos",
        "Pedir à IA uma análise de planilha e conferir o que ela diz",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "Planilha que sai de sistema quase nunca vem pronta para análise. Antes de qualquer conta, é preciso limpar. Se você " +
            "somar dados sujos, o resultado vai estar errado, e ninguém vai perceber até ser tarde.",
        },
        { tipo: "subtitulo", texto: "Os cinco problemas mais comuns" },
        {
          tipo: "tabela",
          colunas: ["Problema", "Como aparece", "Como resolver"],
          linhas: [
            ["Espaços sobrando", "\"Ana Ribeiro\" e \"Ana Ribeiro \" aparecem como duas pessoas no filtro", "ARRUMAR"],
            ["Escrita diferente", "\"Sudeste\", \"SUDESTE\" e \"sudeste\"", "ARRUMAR + PRI.MAIÚSCULA, ou buscar o valor certo em outra aba"],
            ["Células vazias", "Linhas sem região ou sem vendedor", "Buscar a informação em outra aba com PROCX"],
            ["Número como texto", "Valor alinhado à esquerda, com triângulo verde; a soma ignora", "Converter em número (aviso do Excel) ou VALOR"],
            ["Linhas duplicadas", "O mesmo pedido aparece duas vezes, idêntico", "Dados › Remover Duplicatas (depois de conferir)"],
          ],
        },
        {
          tipo: "prompt",
          titulo: "Diagnóstico de dados",
          texto:
            "Vou colar as primeiras 40 linhas de uma planilha de vendas exportada de um sistema. Antes de qualquer análise, liste " +
            "todos os problemas de qualidade que você encontrar (espaços, escrita diferente, vazios, números como texto, " +
            "duplicadas), com o número da linha, e sugira como corrigir cada tipo no Excel em português.\n\n[cole as linhas]",
          nota: "Colar uma amostra é mais seguro do que enviar o arquivo inteiro, e muitas vezes basta para o diagnóstico.",
        },
        {
          tipo: "cuidado",
          titulo: "Registre o que você corrigiu",
          texto:
            "Crie uma aba **Correções** e anote cada problema encontrado, quantas linhas afetou e como corrigiu. Quem receber a " +
            "planilha vai confiar mais nos números, e você consegue refazer o trabalho no mês seguinte. Nunca apague os dados " +
            "originais: trabalhe numa cópia.",
        },
        { tipo: "subtitulo", texto: "Tabela dinâmica: o resumo em quatro cliques" },
        {
          tipo: "passos",
          itens: [
            "Clique em qualquer célula da tabela já limpa e vá em **Inserir › Tabela Dinâmica**.",
            "Arraste **Vendedor** para Linhas e **Total** para Valores. Pronto: total por vendedor.",
            "Arraste o **mês** para Colunas para ver a evolução. Se a data não agrupar sozinha, peça à IA a fórmula =MÊS() numa coluna nova.",
            "Troque Vendedor por **Região** ou **Categoria** para ver outros ângulos. Cada troca é uma pergunta nova.",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Que perguntas fazer aos dados?",
          texto:
            "Tenho uma planilha de vendas com as colunas: Data, Vendedor, Cliente, Região, Produto, Categoria, Quantidade, Total, " +
            "além de uma aba de metas mensais por vendedor. Sou assistente da diretora comercial e preciso preparar a análise do " +
            "período. Liste as 8 perguntas mais úteis que a diretora vai querer ver respondidas e, para cada uma, que tabela " +
            "dinâmica ou gráfico responde.",
        },
        { tipo: "subtitulo", texto: "Gráficos que comunicam" },
        {
          tipo: "lista",
          itens: [
            "**Colunas**: comparar valores (vendas por vendedor).",
            "**Linhas**: evolução no tempo (vendas por mês).",
            "**Barras horizontais**: rankings com nomes longos (top clientes).",
            "**Pizza**: só para mostrar partes de um todo com poucas fatias (até 4). Na dúvida, use barras.",
            "Título do gráfico com a **mensagem**, não com o assunto: \"Embalagens dobraram em outubro\" em vez de \"Vendas por categoria\".",
          ],
        },
        { tipo: "subtitulo", texto: "A IA como analista" },
        {
          tipo: "p",
          texto:
            "ChatGPT, Claude e Gemini aceitam planilhas anexadas e conseguem calcular totais, médias e tendências. É um ótimo jeito " +
            "de ganhar uma segunda opinião, desde que você trate a resposta como a de um analista novo: **confira os números " +
            "contra a sua tabela dinâmica**.",
        },
        {
          tipo: "prompt",
          titulo: "Análise com conferência",
          texto:
            "Analise a planilha anexa (dados fictícios de vendas). Responda: total do período, total por vendedor comparado com a " +
            "meta, a região que mais cresceu e a categoria que mais caiu. Para cada número, explique como calculou. Separe " +
            "claramente o que os dados mostram do que é hipótese sua.",
          nota: "\"Separe o que os dados mostram do que é hipótese\" é a frase mais importante deste pedido.",
        },
        {
          tipo: "cuidado",
          titulo: "Planilha real é dado da empresa",
          texto:
            "Planilhas de vendas, clientes ou salários reais só podem ir para uma ferramenta aprovada pela empresa. Para treinar, " +
            "use as planilhas fictícias do curso. Para o trabalho real, cole amostras anonimizadas ou use a conta corporativa.",
        },
      ],
      exercicios: [
        {
          titulo: "Limpar e resumir",
          enunciado: "Continue a planilha de prática do 1º semestre.",
          passos: [
            "Faça o diagnóstico com a IA e crie a aba Correções.",
            "Corrija todos os problemas encontrados e registre cada um.",
            "Monte três tabelas dinâmicas: vendas por vendedor, por mês e por categoria.",
            "Calcule o atingimento da meta de cada vendedor (vendido ÷ meta).",
            "Crie dois gráficos com títulos que digam a mensagem.",
            "Anexe a planilha numa IA, peça a análise e compare os números com os seus. Anote as diferenças.",
          ],
          entrega: "A planilha com as abas Correções e Resumo, e uma lista das diferenças entre a sua análise e a da IA.",
        },
      ],
      checklist: [
        "Sei identificar os cinco problemas comuns em dados exportados",
        "Trabalho numa cópia e registro as correções numa aba",
        "Sei montar uma tabela dinâmica e trocar os campos para fazer perguntas diferentes",
        "Escolho o gráfico pelo tipo de comparação e dou títulos com mensagem",
        "Confiro a análise da IA contra os meus números",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 5,
      slug: "relatorios",
      titulo: "Relatórios que se leem em cinco minutos",
      subtitulo: "Dos números à mensagem, com conclusões que os dados sustentam",
      duracao: "2h",
      objetivos: [
        "Estruturar um relatório executivo que vai direto ao ponto",
        "Separar fatos, interpretações e recomendações",
        "Usar a IA para redigir sem deixar que ela invente causas",
        "Montar o relatório no Word com títulos, tabela e gráfico",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "A diretora não quer ler a planilha. Ela quer saber **o que aconteceu, por que importa e o que fazer**. Um bom relatório " +
            "responde a isso na primeira metade da primeira página. O resto é apoio para quem quiser conferir.",
        },
        { tipo: "subtitulo", texto: "A estrutura que funciona" },
        {
          tipo: "passos",
          itens: [
            "**Resumo executivo** (3 a 5 linhas): o resultado principal e a principal recomendação. Se ela ler só isto, já sabe o essencial.",
            "**Destaques**: o que foi bem, com números.",
            "**Pontos de atenção**: o que foi mal ou está em risco, com números.",
            "**Recomendações**: o que fazer, quem faz e até quando.",
            "**Anexo**: tabelas e gráficos de apoio.",
          ],
        },
        { tipo: "subtitulo", texto: "Fato, interpretação e recomendação" },
        {
          tipo: "tabela",
          colunas: ["Tipo", "Exemplo", "Cuidado"],
          linhas: [
            ["**Fato**", "\"As vendas de Limpeza caíram 20% em novembro.\"", "Tem que bater com a planilha."],
            ["**Interpretação**", "\"A queda vem do Condomínio Jardim das Flores, que não comprou em novembro.\"", "Mostre o dado que sustenta: o condomínio era o maior comprador da categoria."],
            ["**Hipótese**", "\"O condomínio pode ter trocado de fornecedor.\"", "Escreva como hipótese, nunca como fato."],
            ["**Recomendação**", "\"Contato comercial com o condomínio até dia 10.\"", "Diga o quê, quem e quando."],
          ],
        },
        {
          tipo: "cuidado",
          titulo: "A IA adora inventar causas",
          texto:
            "Peça à IA para explicar uma queda e ela vai sugerir motivos plausíveis: sazonalidade, concorrência, economia. Nenhum " +
            "deles está nos seus dados. Use sempre a regra: \"**Só afirme o que os números mostram. Hipóteses devem aparecer " +
            "marcadas como hipóteses.**\"",
        },
        {
          tipo: "prompt",
          titulo: "Rascunho de relatório a partir dos números",
          texto:
            "Você é analista comercial. Com base apenas nos números abaixo, escreva o rascunho de um relatório executivo para a " +
            "diretora comercial, com: resumo executivo (até 5 linhas), destaques, pontos de atenção e recomendações. Regras: todo " +
            "fato deve ter um número; não invente causas; se sugerir uma causa que não está nos dados, escreva \"(hipótese)\"; " +
            "máximo de uma página. Depois do texto, liste cada número que você usou, para eu conferir.\n\n[cole as tabelas de resumo]",
        },
        {
          tipo: "dica",
          titulo: "Títulos que contam a história",
          texto:
            "Em vez de \"Vendas por região\", escreva \"Sul cresceu e compensou parte da queda\". Peça à IA: \"Sugira títulos " +
            "para cada seção que já digam a conclusão.\" Quem só ler os títulos deve entender o relatório.",
        },
        { tipo: "subtitulo", texto: "Montando no Word" },
        {
          tipo: "lista",
          itens: [
            "Use os **Estilos** (Título 1, Título 2) em vez de aumentar a fonte à mão: o documento fica organizado e ganha sumário automático.",
            "Para levar um gráfico do Excel, copie e use **Colar Especial › Imagem**: ele não muda se a planilha mudar.",
            "Tabelas pequenas (até 6 linhas) no corpo; tabelas grandes no anexo.",
            "Salve em PDF para enviar: a formatação não quebra no computador de quem recebe.",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Revisão final do relatório",
          texto:
            "Revise o relatório abaixo como se fosse a diretora com cinco minutos para ler. Responda: (1) o resumo executivo " +
            "sozinho é suficiente para entender o resultado? (2) há algum fato sem número? (3) há hipótese escrita como fato? " +
            "(4) as recomendações dizem quem faz e até quando? Sugira as correções.\n\n[cole o relatório]",
        },
      ],
      exercicios: [
        {
          titulo: "Relatório do 1º semestre",
          enunciado: "Com a planilha de prática que você limpou e analisou, escreva um relatório executivo de até uma página.",
          passos: [
            "Liste os fatos principais a partir das suas tabelas dinâmicas (etapa 1, sem IA).",
            "Peça o rascunho à IA com o pedido deste módulo e as suas tabelas.",
            "Confira cada número da lista que a IA devolver contra a planilha.",
            "Reescreva os títulos para que contem a conclusão.",
            "Faça a revisão final com a IA e monte no Word, com um gráfico.",
          ],
          entrega: "O relatório em PDF e a lista de números conferidos.",
        },
      ],
      checklist: [
        "Meu relatório tem resumo executivo, destaques, pontos de atenção e recomendações",
        "Separo fato, interpretação, hipótese e recomendação",
        "Não deixo a IA inventar causas",
        "Todo número do relatório foi conferido com a planilha",
        "Uso estilos no Word e envio em PDF",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 6,
      slug: "canva",
      titulo: "Apresentações no Canva",
      subtitulo: "Roteiro com IA, identidade visual e os recursos do Canva gratuito",
      duracao: "2h",
      objetivos: [
        "Escrever o roteiro da apresentação com a IA antes de abrir o Canva",
        "Montar slides no Canva gratuito com identidade visual consistente",
        "Usar os recursos de IA do Canva com consciência dos limites",
        "Cuidar de imagens geradas por IA, direitos e acessibilidade",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "O erro mais comum é abrir o Canva primeiro e pensar no conteúdo depois. Comece pelo **roteiro**: o que cada slide " +
            "precisa dizer. Com o roteiro pronto, o Canva vira só a etapa de montagem.",
        },
        { tipo: "subtitulo", texto: "1. O roteiro, com a IA" },
        {
          tipo: "lista",
          itens: [
            "**Uma ideia por slide.** Se precisa de dois títulos, são dois slides.",
            "**O título é a mensagem**: \"Fechamos novembro 8% acima da meta\", e não \"Resultado do mês\".",
            "**Pouco texto**: no máximo três tópicos curtos ou um número grande. O detalhe fica no relatório.",
            "**Uma estrutura clássica**: situação, o que aconteceu, por que importa, o que fazer.",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Roteiro de apresentação",
          texto:
            "Transforme o relatório abaixo no roteiro de uma apresentação de no máximo 8 slides para a reunião de diretoria. Para " +
            "cada slide, entregue: título com a mensagem principal (até 8 palavras), até 3 tópicos curtos, e o gráfico ou número " +
            "que deve aparecer. O primeiro slide é a capa e o último é \"próximos passos\". Responda em tabela.\n\n[cole o relatório]",
        },
        { tipo: "subtitulo", texto: "2. A montagem no Canva gratuito" },
        {
          tipo: "passos",
          itens: [
            "Em canva.com, crie um design do tipo **Apresentação** e escolha um modelo simples, com espaço para títulos grandes.",
            "Ajuste o modelo à **identidade visual**: troque as cores pelas da empresa e use no máximo duas fontes (uma para títulos, outra para texto).",
            "Monte um slide por linha do roteiro. Para gráficos, use **Elementos › Gráficos** e cole os números da sua tabela dinâmica.",
            "Mantenha o mesmo alinhamento, tamanhos e cores em todos os slides. Duplique slides prontos em vez de começar do zero.",
            "Baixe em **PDF** para enviar e guarde o link de visualização para apresentar.",
          ],
        },
        {
          tipo: "dica",
          titulo: "Recursos de IA do Canva",
          texto:
            "O Canva tem recursos de IA para gerar textos, sugerir layouts e criar imagens. Na versão gratuita, alguns deles têm " +
            "**limite de uso** e outros são exclusivos do plano pago; os nomes e limites mudam com frequência. Use-os como apoio, " +
            "mas não dependa deles: o roteiro feito no ChatGPT, Gemini ou Claude e a montagem manual funcionam sempre.",
        },
        { tipo: "subtitulo", texto: "3. Imagens geradas por IA: cuidados" },
        {
          tipo: "lista",
          itens: [
            "**Nunca gere imagens de pessoas reais** (colegas, clientes, a diretora) nem de logotipos de outras empresas.",
            "Em apresentação de resultados, prefira **gráficos e números** a ilustrações: imagem decorativa compete com a mensagem.",
            "Confira as regras de uso comercial da ferramenta antes de usar imagem gerada em material externo.",
            "Se a imagem pode ser confundida com uma foto real, deixe claro que foi gerada por IA.",
          ],
        },
        { tipo: "subtitulo", texto: "4. Acessibilidade e legibilidade" },
        {
          tipo: "lista",
          itens: [
            "Contraste alto: texto escuro em fundo claro, ou o contrário.",
            "Fonte de texto com pelo menos 24 pontos em apresentações projetadas.",
            "Não use só a cor para passar informação: \"abaixo da meta\" em vermelho também precisa estar escrito.",
            "Peça à IA: \"Revise este roteiro e aponte slides com texto demais.\"",
          ],
        },
      ],
      exercicios: [
        {
          titulo: "Apresentação do 1º semestre",
          enunciado: "Transforme o relatório do módulo 5 numa apresentação de 6 a 8 slides no Canva gratuito.",
          passos: [
            "Peça o roteiro à IA e ajuste os títulos para que todos sejam mensagens.",
            "Monte no Canva com as cores e fontes da Exemplar (estão no enunciado do projeto final).",
            "Faça pelo menos dois gráficos com o recurso de gráficos do Canva, usando os seus números.",
            "Peça a uma colega para ver só os títulos e contar a história. Ela conseguiu?",
          ],
          entrega: "A apresentação em PDF.",
        },
      ],
      checklist: [
        "Escrevo o roteiro antes de abrir o Canva",
        "Cada slide tem uma ideia e um título que é a mensagem",
        "Uso a identidade visual de forma consistente, com no máximo duas fontes",
        "Sei fazer gráficos no Canva com os meus números",
        "Conheço os cuidados com imagens geradas por IA",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 7,
      slug: "assistentes",
      titulo: "Assistentes e rotinas",
      subtitulo: "Projetos, Gems e GPTs para as suas tarefas recorrentes",
      duracao: "2h",
      objetivos: [
        "Criar um assistente fixo para uma tarefa recorrente",
        "Escrever instruções de assistente com estrutura, exemplos e limites",
        "Testar e melhorar o assistente com casos reais",
        "Conhecer o que são automações sem código",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "No módulo 2 você criou modelos de pedido. O próximo passo é transformar os melhores em **assistentes**: um espaço na " +
            "ferramenta que já começa sabendo as instruções, o formato e os arquivos de referência daquela tarefa. Você só cola os " +
            "dados novos.",
        },
        {
          tipo: "tabela",
          colunas: ["Ferramenta", "Nome do recurso", "Bom para"],
          linhas: [
            ["ChatGPT", "Projetos e GPTs", "Projeto: suas conversas e arquivos de um assunto. GPT: um assistente que pode ser compartilhado."],
            ["Claude", "Projetos", "Instruções e documentos de referência que valem para todas as conversas do projeto."],
            ["Gemini", "Gems", "Assistentes com instruções fixas para uma tarefa."],
            ["Copilot", "Agentes (conforme o plano)", "Assistentes integrados ao Microsoft 365."],
          ],
        },
        {
          tipo: "dica",
          titulo: "A disponibilidade muda",
          texto:
            "Alguns desses recursos dependem do plano e mudam de nome com o tempo. Se a sua ferramenta não tiver nenhum, você " +
            "consegue quase o mesmo efeito com um documento de instruções que cola no início de cada conversa.",
        },
        { tipo: "subtitulo", texto: "Anatomia de boas instruções de assistente" },
        {
          tipo: "passos",
          itens: [
            "**Missão**: o que o assistente faz, em uma frase.",
            "**Entrada**: o que você vai colar ou anexar a cada uso.",
            "**Saída**: a estrutura exata da resposta, com seções e limites de tamanho.",
            "**Regras**: tom, o que nunca fazer, a regra do [VERIFICAR].",
            "**Exemplo**: uma entrada e a saída ideal.",
            "**Quando não souber**: o que ele deve fazer (perguntar, marcar, recusar).",
          ],
        },
        {
          tipo: "prompt",
          titulo: "Instruções de um assistente de relatório mensal",
          texto:
            "Missão: você transforma tabelas de vendas da Exemplar Distribuidora (empresa fictícia do curso) no rascunho do " +
            "relatório mensal da diretoria comercial.\n\nEntrada: tabelas de resumo coladas por mim (vendas por vendedor, região, " +
            "categoria e meta).\n\nSaída: (1) resumo executivo em até 5 linhas; (2) destaques; (3) pontos de atenção; (4) " +
            "recomendações com responsável e prazo; (5) lista de todos os números usados.\n\nRegras: português do Brasil, tom " +
            "profissional e direto. Todo fato com número. Nunca invente causas: hipóteses marcadas como \"(hipótese)\". Se faltar " +
            "dado, escreva [VERIFICAR].\n\nExemplo: [cole um relatório que ficou bom]\n\nQuando não souber: pergunte antes de escrever.",
          nota: "Cole nas instruções de um Projeto, Gem ou GPT. Anexe como referência o relatório-modelo e a identidade visual.",
        },
        { tipo: "subtitulo", texto: "Teste antes de confiar" },
        {
          tipo: "lista",
          itens: [
            "Rode o assistente com **três casos diferentes**: um normal, um com dado faltando, um com algo estranho.",
            "Ele respeitou a estrutura? Marcou [VERIFICAR] quando faltou dado? Inventou alguma causa?",
            "Ajuste as instruções a cada erro, acrescentando uma regra ou um exemplo.",
            "Registre no diário: versão das instruções, o que mudou e por quê.",
          ],
        },
        { tipo: "subtitulo", texto: "Automações sem código: um primeiro olhar" },
        {
          tipo: "p",
          texto:
            "Ferramentas como o **Power Automate** (Microsoft) e as **regras do Outlook ou filtros do Gmail** executam tarefas " +
            "sozinhas: salvar anexos numa pasta, avisar quando chega um e-mail de certo remetente, mover mensagens. Elas não são IA, " +
            "mas combinam bem com ela. Comece pequeno e peça à IA o passo a passo:",
        },
        {
          tipo: "prompt",
          titulo: "Primeira automação",
          texto:
            "Uso Outlook do Microsoft 365. Quero que todo e-mail com o assunto contendo \"Relatório de vendas\" seja movido para " +
            "a pasta Relatórios e marcado com a categoria laranja. Explique passo a passo, clique por clique.",
        },
        {
          tipo: "cuidado",
          titulo: "Automação errada erra em silêncio",
          texto:
            "Uma regra mal configurada pode mover ou apagar e-mails importantes sem ninguém perceber. Teste com poucos casos, " +
            "acompanhe por uma semana e nunca crie automações que enviem mensagens ou apaguem coisas sem antes falar com a TI.",
        },
      ],
      exercicios: [
        {
          titulo: "Seu primeiro assistente",
          enunciado: "Crie um assistente para uma tarefa recorrente sua (ou para o relatório mensal da Exemplar).",
          passos: [
            "Escreva as instruções com missão, entrada, saída, regras, exemplo e \"quando não souber\".",
            "Configure como Projeto, Gem ou GPT (ou num documento de instruções, se a sua ferramenta não tiver).",
            "Teste com três casos: normal, com dado faltando e com algo estranho.",
            "Ajuste as instruções a cada falha e registre as versões no diário.",
          ],
          entrega: "As instruções finais e o registro dos três testes.",
        },
      ],
      checklist: [
        "Sei a diferença entre memória, projeto e assistente",
        "Escrevo instruções com missão, entrada, saída, regras, exemplo e plano para dúvidas",
        "Testo o assistente com casos difíceis antes de confiar",
        "Sei o que é uma automação sem código e os riscos de uma regra errada",
      ],
    },

    // ---------------------------------------------------------------------------------------
    {
      numero: 8,
      slug: "projeto-final",
      titulo: "Projeto final",
      subtitulo: "Da planilha bruta ao relatório e à apresentação, com avaliação",
      duracao: "2h + execução",
      objetivos: [
        "Planejar um trabalho completo com a IA, em etapas",
        "Aplicar tudo o que foi visto num caso realista",
        "Entregar planilha, relatório, apresentação e e-mail prontos para a diretoria",
        "Refletir sobre a própria evolução com o diário de uso",
      ],
      blocos: [
        {
          tipo: "p",
          texto:
            "O projeto final simula um pedido real: a Dra. Helena precisa apresentar os resultados do 3º trimestre à diretoria e " +
            "conta com você para transformar uma planilha bagunçada em material pronto. Não há gabarito único para o texto, mas os " +
            "números têm resposta certa, e os dados escondem uma história que um bom trabalho encontra.",
        },
        {
          tipo: "chamada",
          titulo: "Enunciado completo do projeto",
          texto:
            "O e-mail da diretora, a planilha, a identidade visual, as seis etapas, as entregas e os **critérios de avaliação** " +
            "estão na página do projeto. Leia tudo antes de começar.",
          href: `${base}/projeto`,
          rotulo: "abrir o projeto final",
        },
        { tipo: "subtitulo", texto: "Como se organizar" },
        {
          tipo: "lista",
          itens: [
            "**Leia os critérios de avaliação primeiro.** Eles dizem o que é um trabalho excelente.",
            "**Crie um Projeto (ou Gem) só para o trabalho**, com o e-mail da diretora e a identidade visual como referência.",
            "**Siga as etapas na ordem** e não pule a limpeza: todo o resto depende dela.",
            "**Registre tudo no diário de uso**: os pedidos principais, o que a IA errou e como você corrigiu.",
            "**Reserve tempo para conferir.** Um número errado no relatório derruba a confiança no trabalho inteiro.",
          ],
        },
        {
          tipo: "dica",
          titulo: "Use a IA como equipe, não como atalho",
          texto:
            "Uma boa divisão: a IA como **analista** (diagnóstico e perguntas aos dados), como **redatora** (rascunhos) e como " +
            "**revisora** (autocrítica). As decisões, a conferência e a assinatura são suas.",
        },
        { tipo: "subtitulo", texto: "Depois do curso" },
        {
          tipo: "p",
          texto:
            "Você sai deste curso com modelos, assistentes e um diário que mostram o que a IA faz no seu trabalho. Continue " +
            "registrando: em três meses, o diário vira um argumento concreto (em horas economizadas) para pedir ferramentas, " +
            "treinamento para a equipe ou novas responsabilidades.",
        },
      ],
      exercicios: [
        {
          titulo: "Projeto final: Relatório do 3º trimestre",
          enunciado: "Siga o enunciado completo na página do projeto final.",
          entrega: "Planilha tratada, relatório em PDF, apresentação do Canva em PDF, e-mail de envio e diário de uso com reflexão.",
        },
      ],
      checklist: [
        "Li o enunciado e os critérios de avaliação antes de começar",
        "Criei um projeto ou assistente para o trabalho",
        "Concluí as seis etapas",
        "Conferi todos os números do relatório e da apresentação",
        "Entreguei o diário de uso com a reflexão",
      ],
    },
  ],

  glossario: [
    { termo: "Contexto", definicao: "Tudo o que a IA recebe a cada mensagem: a conversa até ali e os arquivos anexados." },
    { termo: "Janela de contexto", definicao: "O tamanho máximo de contexto que o modelo consegue considerar de uma vez." },
    { termo: "Memória", definicao: "Recurso que guarda informações sobre você entre conversas. Pode ser consultada e apagada nas configurações." },
    { termo: "Conversa temporária", definicao: "Conversa que não fica no histórico e não usa nem alimenta a memória." },
    { termo: "Autocrítica", definicao: "Pedir à IA que revise a própria resposta com critérios definidos antes de corrigir." },
    { termo: "Modelo de pedido", definicao: "Pedido completo e reutilizável, com regras, exemplo e campos [entre colchetes]." },
    { termo: "PROCX", definicao: "Função do Excel que busca um valor numa tabela e traz a informação correspondente de outra coluna." },
    { termo: "SOMASES / CONT.SES", definicao: "Funções do Excel que somam ou contam só as linhas que atendem a condições." },
    { termo: "ARRUMAR", definicao: "Função do Excel que remove espaços sobrando de um texto." },
    { termo: "Tabela dinâmica", definicao: "Recurso do Excel que resume uma tabela grande arrastando campos para linhas, colunas e valores." },
    { termo: "Resumo executivo", definicao: "O começo de um relatório, com o resultado principal e a recomendação em poucas linhas." },
    { termo: "Hipótese", definicao: "Uma explicação possível que os dados não comprovam. Deve aparecer marcada como tal." },
    { termo: "Identidade visual", definicao: "Cores, fontes e estilo que tornam os materiais de uma empresa reconhecíveis." },
    { termo: "Projeto / Gem / GPT", definicao: "Assistentes com instruções e arquivos próprios para uma tarefa ou assunto." },
    { termo: "Automação sem código", definicao: "Regra que executa tarefas sozinha (mover e-mails, salvar anexos) sem programação." },
  ],

  colinha: [
    {
      titulo: "As três memórias",
      itens: [
        "**Contexto**: a conversa atual; conversa longa demais, resuma e recomece",
        "**Memória e instruções**: valem entre conversas; revise e apague",
        "**Projetos**: instruções e arquivos de um assunto",
        "O modelo não aprende com você; **o seu contexto e a sua prática sim**",
      ],
    },
    {
      titulo: "Pedido de nível 2",
      itens: [
        "Mostre **um exemplo** do resultado",
        "Divida em **etapas** e confira cada uma",
        "Peça **autocrítica** com critérios",
        "Peça a resposta **em tabela** quando for para o Excel",
        "\"Separe o que os dados mostram do que é hipótese\"",
      ],
    },
    {
      titulo: "Excel com IA",
      itens: [
        "Diga abas, colunas, linha inicial e versão do Excel",
        "Peça **a explicação** de toda fórmula",
        "Limpe antes de somar: espaços, escrita, vazios, texto, duplicadas",
        "Confira duas ou três linhas na calculadora",
        "Trabalhe numa cópia e registre as correções",
      ],
    },
    {
      titulo: "Nunca cole",
      itens: [
        "Senhas e códigos de acesso",
        "CPF, RG, dados bancários e de cartão",
        "Planilhas reais de clientes, vendas ou salários fora da ferramenta aprovada",
        "Contratos e estratégias confidenciais",
        "Dados pessoais na memória da IA",
      ],
    },
  ],
};
