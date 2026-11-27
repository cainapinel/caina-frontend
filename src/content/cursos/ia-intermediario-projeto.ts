import type { ProjetoFinal } from "./tipos";

/**
 * Projeto final do curso intermediário. O gabarito (números e a história escondida
 * nos dados) fica fora deste repositório, que é público: nunca descrever aqui o que
 * os dados revelam.
 */
export const projetoIaIntermediario: ProjetoFinal = {
  titulo: "Relatório de vendas do 3º trimestre",
  resumo:
    "A diretora comercial precisa apresentar os resultados de julho a setembro à diretoria. Você recebe a planilha bruta " +
    "do sistema e entrega tudo pronto: a planilha tratada, um relatório de duas páginas, uma apresentação no Canva e o " +
    "e-mail de envio. Com a IA do seu lado em cada etapa, e conferindo cada número.",
  cenario: [
    "A **Exemplar Distribuidora** (empresa fictícia) vende descartáveis, produtos de limpeza, higiene e embalagens para " +
      "supermercados, restaurantes, hotéis, escolas e clínicas em quatro regiões. Cinco vendedores atendem 14 clientes, e " +
      "cada vendedor tem uma meta mensal.",
    "Todo trimestre a diretoria comercial apresenta os resultados na reunião de diretoria. Neste trimestre, quem prepara o " +
      "material é você. A planilha veio direto do sistema e, como sempre, não está pronta para uso.",
  ],
  pedido: {
    de: "Dra. Helena Prado, diretora comercial",
    assunto: "Material do 3º trimestre para a reunião de diretoria",
    corpo:
      "Oi! Preciso apresentar os resultados do 3º trimestre na reunião de diretoria do dia 20 e conto com você para o " +
      "material.\n\nTe mandei a planilha que saiu do sistema. O pessoal comentou que ela veio meio bagunçada, então dá uma " +
      "olhada com calma antes de calcular qualquer coisa.\n\nPreciso de três coisas:\n1. Um relatório curto, de no máximo " +
      "duas páginas, que eu consiga ler em cinco minutos.\n2. Uma apresentação de no máximo oito slides, na identidade " +
      "visual da empresa.\n3. Um e-mail para eu mandar à diretoria junto com o material.\n\nO que eu mais preciso saber: se " +
      "batemos a meta, quem se destacou, onde estamos perdendo e o que você recomenda olhar com atenção. Se encontrar algo " +
      "estranho nos dados, me avise.\n\nObrigada!\nHelena",
  },
  arquivos: [
    {
      rotulo: "Planilha do projeto",
      descricao: "Vendas de julho a setembro de 2026, como saíram do sistema, com as abas Produtos, Clientes e Metas.",
      arquivo: "/downloads/ia-intermediario-projeto-vendas-3tri.xlsx",
      origem: "",
    },
    {
      rotulo: "Planilha de prática",
      descricao: "Vendas do 1º semestre, para os exercícios dos módulos 3 a 6.",
      arquivo: "/downloads/ia-intermediario-pratica-vendas-1sem.xlsx",
      origem: "",
    },
  ],
  identidadeVisual: {
    cores: [
      { nome: "Azul Exemplar", hex: "#1F3A5F", uso: "Títulos, capa e elementos principais" },
      { nome: "Laranja", hex: "#E8833A", uso: "Destaques e números importantes (com moderação)" },
      { nome: "Cinza grafite", hex: "#374151", uso: "Texto corrido" },
      { nome: "Areia", hex: "#F5F1EA", uso: "Fundo dos slides" },
      { nome: "Verde", hex: "#2F855A", uso: "Indicadores positivos (acima da meta)" },
      { nome: "Vermelho", hex: "#C53030", uso: "Indicadores negativos (abaixo da meta)" },
    ],
    fontes: ["Montserrat (títulos)", "Open Sans (texto)"],
    observacao:
      "As duas fontes estão disponíveis no Canva gratuito. No Word, se não estiverem instaladas, use Calibri. Verde e " +
      "vermelho sempre acompanhados de texto (\"acima da meta\", \"abaixo da meta\"), nunca só a cor.",
  },
  etapas: [
    {
      titulo: "Planejar",
      descricao: "Monte o seu ambiente de trabalho com a IA e entenda o pedido antes de abrir a planilha.",
      tarefas: [
        "Crie um Projeto, Gem ou GPT só para este trabalho, com o e-mail da diretora e a identidade visual como referência.",
        "Peça à IA para listar, a partir do e-mail, tudo o que a diretora espera receber e as perguntas que ela quer respondidas.",
        "Leia os critérios de avaliação e anote o que define um trabalho excelente.",
        "Abra o diário de uso do projeto.",
      ],
      entrega: "Lista de perguntas que o material precisa responder.",
    },
    {
      titulo: "Limpar os dados",
      descricao: "Encontre e corrija os problemas da planilha antes de qualquer conta. Trabalhe numa cópia.",
      tarefas: [
        "Faça o diagnóstico de qualidade com a IA, a partir de uma amostra das linhas.",
        "Procure, na planilha inteira, cada tipo de problema que o diagnóstico apontou (e os que ele não apontou).",
        "Corrija tudo e crie a aba Correções: problema, quantas linhas afetou e como corrigiu.",
        "Confira se cada vendedor, região e cliente aparece uma única vez nos filtros.",
      ],
      entrega: "Planilha limpa e a aba Correções.",
    },
    {
      titulo: "Calcular e analisar",
      descricao: "Complete a planilha com fórmulas e responda às perguntas da diretora com tabelas dinâmicas.",
      tarefas: [
        "Traga produto, categoria e preço da aba Produtos e calcule o total de cada linha.",
        "Monte as tabelas dinâmicas: por vendedor (com a meta e o atingimento), por mês, por região e por categoria.",
        "Procure o que mudou de um mês para o outro e investigue o porquê nos próprios dados, até o nível do cliente.",
        "Faça os gráficos que respondem às perguntas da diretora, com títulos que dizem a mensagem.",
        "Peça à IA uma análise da planilha limpa e compare com a sua. Anote as diferenças.",
      ],
      entrega: "Aba Resumo com tabelas dinâmicas e gráficos.",
    },
    {
      titulo: "Escrever o relatório",
      descricao: "Transforme a análise num relatório de até duas páginas.",
      tarefas: [
        "Liste os fatos principais, cada um com o seu número.",
        "Peça o rascunho à IA em etapas, com a regra de não inventar causas.",
        "Separe fato, interpretação, hipótese e recomendação.",
        "Confira cada número do texto contra a planilha.",
        "Faça a revisão crítica com a IA e monte no Word, com estilos e pelo menos um gráfico.",
      ],
      entrega: "Relatório em PDF.",
    },
    {
      titulo: "Montar a apresentação",
      descricao: "Transforme o relatório em no máximo oito slides no Canva gratuito.",
      tarefas: [
        "Peça o roteiro à IA, um slide por ideia, com títulos que são mensagens.",
        "Monte no Canva com a identidade visual da Exemplar.",
        "Use gráficos do Canva com os seus números, e não imagens decorativas.",
        "Confira se os números dos slides são os mesmos do relatório.",
      ],
      entrega: "Apresentação em PDF.",
    },
    {
      titulo: "Revisar e enviar",
      descricao: "Feche o trabalho como se ele fosse mesmo para a diretoria.",
      tarefas: [
        "Escreva o e-mail para a diretora mandar à diretoria, com o resumo em três linhas e os anexos.",
        "Escreva também uma mensagem curta para a Dra. Helena avisando o que você encontrou de estranho nos dados.",
        "Passe o checklist de entrega.",
        "Escreva a reflexão do diário de uso.",
      ],
      entrega: "E-mail de envio, mensagem à diretora e diário com reflexão.",
    },
  ],
  entregaveis: [
    "**Planilha** (.xlsx) com as abas originais, a aba Vendas tratada, a aba **Correções** e a aba **Resumo**",
    "**Relatório** em PDF, com no máximo duas páginas",
    "**Apresentação** do Canva em PDF, com no máximo oito slides",
    "**E-mail** de envio à diretoria e **mensagem** à Dra. Helena sobre os problemas encontrados nos dados",
    "**Diário de uso** do projeto, com pelo menos 10 registros, e uma **reflexão** de meia página: o que a IA acertou, o que errou, como você corrigiu e como a memória ou o projeto ajudaram",
  ],
  regras: [
    "Use qualquer ferramenta de IA, quantas vezes quiser. Esse é o objetivo do curso.",
    "Todo número do relatório e da apresentação precisa bater com a planilha.",
    "Nada de causas inventadas: o que os dados não mostram aparece como hipótese.",
    "Os dados são fictícios e podem ir para qualquer IA. Num trabalho real, siga a política da empresa.",
    "Prazo sugerido: duas semanas a partir do módulo 8.",
  ],
  rubrica: [
    {
      criterio: "Limpeza dos dados",
      peso: 15,
      niveis: [
        "Somou dados sujos; vendedores ou regiões aparecem duplicados nos totais",
        "Corrigiu a maior parte dos problemas, mas sem registro claro",
        "Encontrou e corrigiu todos os tipos de problema e registrou cada um na aba Correções",
      ],
    },
    {
      criterio: "Fórmulas e análise",
      peso: 20,
      niveis: [
        "Totais errados ou digitados à mão",
        "Fórmulas e tabelas dinâmicas corretas para as perguntas principais",
        "Tudo correto, com atingimento da meta, evolução mensal e investigação até o nível do cliente",
      ],
    },
    {
      criterio: "Leitura dos números",
      peso: 20,
      niveis: [
        "Descreve os números sem tirar conclusões, ou tira conclusões que os dados não sustentam",
        "Responde às perguntas da diretora com conclusões corretas",
        "Encontra o que não é óbvio no total e explica com dados; separa fato de hipótese",
      ],
    },
    {
      criterio: "Relatório",
      peso: 15,
      niveis: [
        "Longo, sem resumo executivo ou com números que não batem",
        "Estrutura completa, números corretos, até duas páginas",
        "Lê-se em cinco minutos; títulos contam a história; recomendações com responsável e prazo",
      ],
    },
    {
      criterio: "Apresentação",
      peso: 15,
      niveis: [
        "Texto demais, sem identidade visual ou com números diferentes do relatório",
        "Até oito slides, identidade aplicada, gráficos corretos",
        "Uma ideia por slide, títulos que são mensagens, visual limpo e acessível",
      ],
    },
    {
      criterio: "Uso da IA e diário",
      peso: 10,
      niveis: [
        "Diário incompleto ou sem reflexão",
        "Diário com 10 registros e reflexão",
        "Usa as técnicas do curso (etapas, exemplos, autocrítica, projeto) e a reflexão mostra o que aprendeu com os erros da IA",
      ],
    },
    {
      criterio: "Revisão e comunicação",
      peso: 5,
      niveis: [
        "E-mail genérico ou ausente",
        "E-mail claro com anexos e resumo",
        "E-mail pronto para enviar e aviso à diretora sobre os problemas dos dados",
      ],
    },
  ],
  checklistEntrega: [
    "A planilha tem as abas Correções e Resumo",
    "Nenhum vendedor, região ou cliente aparece duplicado nos totais",
    "Todo número do relatório foi conferido com a planilha",
    "Os números da apresentação são os mesmos do relatório",
    "Hipóteses estão marcadas como hipóteses",
    "Relatório com até duas páginas e apresentação com até oito slides",
    "A identidade visual foi aplicada (cores e fontes)",
    "E-mail e mensagem à diretora revisados",
    "Diário com pelo menos 10 registros e reflexão",
  ],
};
