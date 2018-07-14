var express = require('express');
var app = express();

var listaTickets = [{
    "TicketID": 28890,
    "CategoryID": 57526,
    "CustomerID": 97979,
    "CustomerName": "Cox Workman",
    "CustomerEmail": "cox.workman@neoassist.com",
    "DateCreate": "2017-12-13 03:08:42",
    "DateUpdate": "2018-01-04 09:18:25",
    "Interactions": [{
        "Subject": "Sem Assunto",
        "Message": "Estou procurando bermuda masculina Com bolsos laterais 100 por cento poliéster.",
        "DateCreate": "2017-12-13 03:08:42",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Sem Assunto",
        "Message": "Olá! Tudo bem? Não temos esse modelo :/ Temos outros modelos no site, dá uma olhada.",
        "DateCreate": "2018-01-03 09:18:25",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Sem Assunto",
        "Message": "Obrigado. GOsto de bermuda com bolsos laterais . Quem fabricou este modelo?",
        "DateCreate": "2018-01-04 09:18:25",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 28891,
    "CategoryID": 46403,
    "CustomerID": 97974,
    "CustomerName": "Vilma Mcmahon",
    "CustomerEmail": "vilma.mcmahon@neoassist.com",
    "DateCreate": "2017-12-25 03:12:39",
    "DateUpdate": "2018-02-12 05:14:11",
    "Interactions": [{
        "Subject": "Reclamação",
        "Message": "Boa noite! Comprei na loja um tênis para minha filha, porém está manchando a meia. O que fazer para não estragar todas as meias???",
        "DateCreate": "2017-12-25 03:12:39",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Reclamação",
        "Message": "Bom dia Tudo bem? Esperamos que sim! Poxa, uma pena ter ocorrido com o tênis... Neste caso, há uma garantia diferenciada de 12 meses, e para oferecer essa garantia, a marca define que para casos de defeitos, seja feito a avaliação diretamente com eles, para avaliar o defeito e já emitir o código de autorização da troca. Assim que emitido o código, basta comparecer até a loja com o produto para trocar!",
        "DateCreate": "2018-02-12 05:14:11",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28892,
    "CategoryID": 28514,
    "CustomerID": 97960,
    "CustomerName": "Cristina Pitts",
    "CustomerEmail": "cristina.pitts@neoassist.com",
    "DateCreate": "2017-12-21 03:51:39",
    "DateUpdate": "2018-01-01 06:21:59",
    "Interactions": [{
        "Subject": "Tamanho diferente",
        "Message": "Boa tarde ! Comprei um tênis tamanho 38 na loja. Entretanto, o pé direito está maior do que o pé esquerdo e só notei ao usá-lo. Essa diferença está notável externamente. Aguardo uma solução",
        "DateCreate": "2017-12-21 03:51:39",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Tamanho diferente",
        "Message": "Boa tarde. Tudo bem? Esperamos que sim! No caso, basta comparecer a loja onde foi efetuado a compra para verificar as possibilidades de troca/solução referente ao defeito do seu produto, com o produto e nota fiscal em mãos.",
        "DateCreate": "2018-01-01 06:21:59",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28893,
    "CategoryID": 59260,
    "CustomerID": 97958,
    "CustomerName": "Tina Melton",
    "CustomerEmail": "tina.melton@neoassist.com",
    "DateCreate": "2017-12-09 01:34:49",
    "DateUpdate": "2018-01-19 01:19:08",
    "Interactions": [{
        "Subject": "Sem assunto",
        "Message": "Boa tarde ,efetuei uma compra e digitei o meu email errado e nao consigo acompanhar a entrega e a compra o que faço",
        "DateCreate": "2017-12-09 01:34:49",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Dúvidas",
        "Message": "Boa noite. Por favor, me informa o número do CPF cadastrado ou número do pedido?",
        "DateCreate": "2018-01-17 01:19:08",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Dúvidas",
        "Message": "Boa tarde segue o numero do pedido 12345",
        "DateCreate": "2018-01-19 01:19:08",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 28894,
    "CategoryID": 36319,
    "CustomerID": 97999,
    "CustomerName": "Darcy Erickson",
    "CustomerEmail": "darcy.erickson@neoassist.com",
    "DateCreate": "2017-12-22 01:05:19",
    "DateUpdate": "2018-02-04 10:03:08",
    "Interactions": [{
        "Subject": "Reclamação",
        "Message": "efetuei a compra de um produto e até agora nao foi entregue a mercadoria, no site de vcs nao consta o pedido como pendente, já veio debitada a compra na fatura do meu cartão, ja tentei de várias formas e não consigo soluçao, gostaria de resolver da melhor maneira possivel direto com a loja antes de tomar as providências cabíveis",
        "DateCreate": "2017-12-22 01:05:19",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Reclamação",
        "Message": "Bom dia. Infelizmente a entrega retornou e não conseguimos entrar em contato. Seus dados estão corretos?",
        "DateCreate": "2018-02-04 10:03:08",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28895,
    "CategoryID": 11769,
    "CustomerID": 97997,
    "CustomerName": "Chase Love",
    "CustomerEmail": "chase.love@neoassist.com",
    "DateCreate": "2017-12-16 11:41:52",
    "DateUpdate": "2018-01-05 11:27:25",
    "Interactions": [{
        "Subject": "Entrega",
        "Message": "Bom dia, O prazo de entrega do produto foi ontem e até o momento não recebemos o pedido, confirmado o pagamento. Por gentileza, verificar o ocorrido uma vez que já trocamos o produto",
        "DateCreate": "2017-12-16 11:41:52",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Entrega",
        "Message": "Bom dia. Por favor, qual o número do pedido para que eu possa verificar seu andamento?",
        "DateCreate": "2018-01-05 11:27:25",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28896,
    "CategoryID": 45738,
    "CustomerID": 97928,
    "CustomerName": "Irma House",
    "CustomerEmail": "irma.house@neoassist.com",
    "DateCreate": "2017-12-07 02:40:42",
    "DateUpdate": "2018-01-06 10:21:10",
    "Interactions": [{
        "Subject": "Elogios",
        "Message": "Muito obrigado pela gentileza e atenção.Vocês sao simpaticos, gentis e agradaveis de se lidar e de respeito ao consumidor.Não tenho mais palavras para agradecer tamanha gentileza e simpatia.Fiquei muito satisfeito.Recomendarei a todos.",
        "DateCreate": "2017-12-07 02:40:42",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Elogios",
        "Message": "Que ótimo que tenha gostado. Sem palavras, receber um agradecimento por excelência é sensacional para nós.",
        "DateCreate": "2018-01-06 10:21:10",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28897,
    "CategoryID": 31514,
    "CustomerID": 97990,
    "CustomerName": "Byrd Mcfadden",
    "CustomerEmail": "byrd.mcfadden@neoassist.com",
    "DateCreate": "2017-12-12 01:24:14",
    "DateUpdate": "2018-01-09 04:34:40",
    "Interactions": [{
        "Subject": "Elogios e Sugestões",
        "Message": "Ficou otimo. Sensacional, gostei.Mais uma vez, elogios para vocês. Obrigado pela atenção, boas vendas.",
        "DateCreate": "2017-12-12 01:24:14",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Elogios e Sugestões",
        "Message": "Muito bom saber. Nossa satisfação aumenta com clientes assim.",
        "DateCreate": "2018-01-09 04:34:40",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28898,
    "CategoryID": 66134,
    "CustomerID": 97943,
    "CustomerName": "Lynnette Taylor",
    "CustomerEmail": "lynnette.taylor@neoassist.com",
    "DateCreate": "2017-12-03 12:44:34",
    "DateUpdate": "2018-02-11 04:22:01",
    "Interactions": [{
        "Subject": "Elogios",
        "Message": "Parabens pelo produto de voces, pelo bom atendimento e rapidez na entrega. Voces sao otimos.",
        "DateCreate": "2017-12-03 12:44:34",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Elogios",
        "Message": "Ficamos felizes em saber que nosso trabalho traz momentos especiais.",
        "DateCreate": "2018-02-11 04:22:01",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 28899,
    "CategoryID": 28000,
    "CustomerID": 97959,
    "CustomerName": "Dejesus Steele",
    "CustomerEmail": "dejesus.steele@neoassist.com",
    "DateCreate": "2017-12-18 06:24:45",
    "DateUpdate": "2018-01-09 07:13:04",
    "Interactions": [{
        "Subject": "Dúvida",
        "Message": "Olá eu queria saber se tem data pra ter ou se já está disponivel o produto ABC em alguma loja física",
        "DateCreate": "2017-12-18 06:24:45",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Dúvida",
        "Message": "Não há previsão de reposição desse produto, mas qual modelo está procurando?",
        "DateCreate": "2018-01-09 07:13:04",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288910,
    "CategoryID": 14241,
    "CustomerID": 97907,
    "CustomerName": "Dee Sampson",
    "CustomerEmail": "dee.sampson@neoassist.com",
    "DateCreate": "2017-12-03 04:57:38",
    "DateUpdate": "2018-02-12 12:34:43",
    "Interactions": [{
        "Subject": "Planos e Formas de Pagamento",
        "Message": "A 1º parcela de 72,00 refere-se a 3 meses de plano, mas o que significa que a assinatura será renovada automaticamente com o valor de 29,00 ? Este procedimento é depois dos 3 meses, ou terei que pagar",
        "DateCreate": "2017-12-03 04:57:38",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Planos e Formas de Pagamento",
        "Message": "Olá. O valor de R$72,00 refere-se apenas aos 3 primeiros meses. As próximas renovações após os 3 meses terão o valor de R$29,00. Caso haja mais dúvidas, por favor entrar em contato.",
        "DateCreate": "2018-02-12 12:34:43",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288911,
    "CategoryID": 12426,
    "CustomerID": 97932,
    "CustomerName": "Nannie Duffy",
    "CustomerEmail": "nannie.duffy@neoassist.com",
    "DateCreate": "2017-12-13 06:55:35",
    "DateUpdate": "2018-02-10 10:10:55",
    "Interactions": [{
        "Subject": "COnfirmação de data de entrega",
        "Message": "Gostaria da confirmaço da data para entrega. Tres dias contando a partir de quando? Do dia 19? Preciso destas informaçÃµes também para o preenchimento da minha pesquisa de satisfaço no e-bit. Obrigada",
        "DateCreate": "2017-12-13 06:55:35",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: COnfirmação de data de entrega",
        "Message": "Olá. A data de entrega é de 3 dias úteis contando a partir do dia de confirmação do pagamento via cartão ou boleto.",
        "DateCreate": "2018-02-05 10:13:42",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: COnfirmação de data de entrega",
        "Message": "Mas já faz mais de 3 dias q o pagto já foi confirmado",
        "DateCreate": "2018-02-10 10:10:55",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288912,
    "CategoryID": 19961,
    "CustomerID": 97988,
    "CustomerName": "Bright Obrien",
    "CustomerEmail": "bright.obrien@neoassist.com",
    "DateCreate": "2017-12-12 01:25:30",
    "DateUpdate": "2018-02-10 09:11:50",
    "Interactions": [{
        "Subject": "Dúvidas sobre o programa",
        "Message": "fiz assinatura ontem , até agora não consigo acessar o programa , esta é a terceira tentativa de contato , alguém pode resolver meu caso ?",
        "DateCreate": "2017-12-12 01:25:30",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Dúvidas sobre o programa",
        "Message": "Boa tarde. O acesso ao sistema será liberado quando houver confirmação de pagamento via boleto.",
        "DateCreate": "2018-02-05 09:09:59",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Dúvidas sobre o programa",
        "Message": "Mas já recebi a confirmacao de pagamento por email",
        "DateCreate": "2018-02-10 09:11:50",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288913,
    "CategoryID": 55814,
    "CustomerID": 97975,
    "CustomerName": "Dionne Smith",
    "CustomerEmail": "dionne.smith@neoassist.com",
    "DateCreate": "2017-12-25 09:03:15",
    "DateUpdate": "2018-02-09 20:13:52",
    "Interactions": [{
        "Subject": "Como troco um produto?",
        "Message": "Comprei no dia 15/6/17 (pedido 4800) um celular. Ontem chegou em minha casa um tablet. A NF está em nome de outra pessoa, com outro número de pedido (4878). Quero saber oq faço",
        "DateCreate": "2017-12-25 09:03:15",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Como troco um produto?",
        "Message": "Olá, bom dia. Enviaremos o produto correto em 5 dias úteis.",
        "DateCreate": "2018-02-02 11:21:49",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Como troco um produto?",
        "Message": "Mas o que devo fazer com o outro produto que recbi errado?",
        "DateCreate": "2018-02-09 20:13:52",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288914,
    "CategoryID": 55834,
    "CustomerID": 97963,
    "CustomerName": "Mcdaniel Kinney",
    "CustomerEmail": "mcdaniel.kinney@neoassist.com",
    "DateCreate": "2017-12-19 10:23:28",
    "DateUpdate": "2018-01-29 13:45:22",
    "Interactions": [{
        "Subject": "Dúvidas sobre cancelamento do programa",
        "Message": "A opção de cancelamento da continuidade da assinatura não esta funcionando. Ja tentei varias vezes e em dias diferentes e nunca da certo. Não quero continuar com a assinatura.",
        "DateCreate": "2017-12-19 10:23:28",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Dúvidas sobre cancelamento do programa",
        "Message": "Bom dia. É uma pena que haja interesse em cancelar. Não há nada que possamos fazer para evitar o cancelamento?",
        "DateCreate": "2018-01-26 12:05:02",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Dúvidas sobre cancelamento do programa",
        "Message": "Não. Por favor, quero cancelar. Como posso fazer?",
        "DateCreate": "2018-01-29 13:45:22",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288915,
    "CategoryID": 45306,
    "CustomerID": 97988,
    "CustomerName": "Hull Santiago",
    "CustomerEmail": "hull.santiago@neoassist.com",
    "DateCreate": "2017-12-27 05:19:59",
    "DateUpdate": "2018-01-28 09:16:29",
    "Interactions": [{
        "Subject": "Informação",
        "Message": "meu pedido ainda nao chegou, quero saber o que aconteceu e o que devo fazer?",
        "DateCreate": "2017-12-27 05:19:59",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Informação",
        "Message": "Olá. Por favor, envie-nos o número do seu pedido para que possamos verificar a situação de entrega",
        "DateCreate": "2018-01-26 08:26:19",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Informação",
        "Message": "O número do pedido é 829034",
        "DateCreate": "2018-01-28 09:16:29",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288916,
    "CategoryID": 63805,
    "CustomerID": 97969,
    "CustomerName": "Esperanza Henry",
    "CustomerEmail": "esperanza.henry@neoassist.com",
    "DateCreate": "2017-12-24 06:29:33",
    "DateUpdate": "2018-02-01 08:00:00",
    "Interactions": [{
        "Subject": "Cadastro",
        "Message": "cadastrei meu email errado gostaria de corrigir , peço se possivel corrigir meu email e mandar uma nova senha",
        "DateCreate": "2017-12-24 06:29:33",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Cadastro",
        "Message": "Olá, bom dia. Seu e-mail já foi alterado. A nova senha poderá ser cadastrada no formulário do site.",
        "DateCreate": "2018-01-28 08:59:51",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Cadastro",
        "Message": "o sistema não tá deixando eu mudar a senha. Aparece 'senha incorreta'",
        "DateCreate": "2018-02-01 08:00:00",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288917,
    "CategoryID": 49681,
    "CustomerID": 97938,
    "CustomerName": "Abigail Wilcox",
    "CustomerEmail": "abigail.wilcox@neoassist.com",
    "DateCreate": "2017-12-15 03:30:32",
    "DateUpdate": "2018-01-10 05:37:56",
    "Interactions": [{
        "Subject": "Data de Entrega",
        "Message": "como posso rastrear meu pedido simultaneamente, qual a data que ele devera chegar. Por que ele ainda não foi enviado.",
        "DateCreate": "2017-12-15 03:30:32",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Data de Entrega",
        "Message": "Oi, tudo bem? Para rastrear seu pedido, acesse o site e entre na área Meus Pedidos para verificar a situação atual do mesmo.",
        "DateCreate": "2018-01-10 05:37:56",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288918,
    "CategoryID": 68176,
    "CustomerID": 97969,
    "CustomerName": "Rachael Dyer",
    "CustomerEmail": "rachael.dyer@neoassist.com",
    "DateCreate": "2017-12-17 09:35:01",
    "DateUpdate": "2018-01-19 22:20:19",
    "Interactions": [{
        "Subject": "Coleta de Pedido",
        "Message": "Bom dia, mudei meu endereço de entrega do pedido, e ainda assim o entregador esta aindo no endereço antigo, segue o novo endereço como ja esta no cadastro de vcs.",
        "DateCreate": "2017-12-17 09:35:01",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Coleta de Pedido",
        "Message": "Oi, boa noite. Obrigado por entrar em contato. O novo endereço precisa ser confirmado na área de cadastro do cliente.",
        "DateCreate": "2018-01-17 12:22:16",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Coleta de Pedido",
        "Message": "Já confirmei o endereço duas vezes e continua dando problema..",
        "DateCreate": "2018-01-19 22:20:19",
        "Sender": "Customer"
      }
    ]
  },
  {
    "TicketID": 288919,
    "CategoryID": 57782,
    "CustomerID": 97958,
    "CustomerName": "Felicia Cotton",
    "CustomerEmail": "felicia.cotton@neoassist.com",
    "DateCreate": "2017-12-07 12:59:33",
    "DateUpdate": "2018-01-06 02:55:47",
    "Interactions": [{
        "Subject": "troca de produto",
        "Message": "comprei um produto, so que a fonte de alimentaçao não fuciona",
        "DateCreate": "2017-12-07 12:59:33",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: troca de produto",
        "Message": "Bom dia. Por favor, envie-nos o número do pedido para que seja possível fazer uma avaliação",
        "DateCreate": "2018-01-06 02:55:47",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288920,
    "CategoryID": 25378,
    "CustomerID": 97922,
    "CustomerName": "Paulette Bernard",
    "CustomerEmail": "paulette.bernard@neoassist.com",
    "DateCreate": "2017-12-26 10:04:31",
    "DateUpdate": "2018-01-06 03:43:55",
    "Interactions": [{
        "Subject": "Entrega ",
        "Message": "quero sabero o nº de rastreio do produto, caso já tenha sido despachado.",
        "DateCreate": "2017-12-26 10:04:31",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Entrega ",
        "Message": "Olá. Seu pedido encontra-se na transportadora. Para mais informações, acesse o site e verifique status do pedido.",
        "DateCreate": "2018-01-06 03:43:55",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288921,
    "CategoryID": 62228,
    "CustomerID": 97936,
    "CustomerName": "Beulah Moss",
    "CustomerEmail": "beulah.moss@neoassist.com",
    "DateCreate": "2017-12-12 12:53:57",
    "DateUpdate": "2018-01-11 09:30:38",
    "Interactions": [{
        "Subject": "Formas de Pagamento",
        "Message": "Gostaria de saber se o notebook A ainda está disponível em estoque e se o preço permanece o mesmo. Também preciso saber qual forma de pagamento.",
        "DateCreate": "2017-12-12 12:53:57",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Formas de Pagamento",
        "Message": "Olá. A disponibilidade e forma de pagamento do equipamento pode ser verificada no site de compra.",
        "DateCreate": "2018-01-11 09:30:38",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288922,
    "CategoryID": 43280,
    "CustomerID": 97907,
    "CustomerName": "Bass Lowe",
    "CustomerEmail": "bass.lowe@neoassist.com",
    "DateCreate": "2017-12-30 06:07:54",
    "DateUpdate": "2018-01-23 04:28:16",
    "Interactions": [{
        "Subject": "Esclarecer uma dúvida",
        "Message": "Voces pode manda um cupom de descontos para mim para eu fazer uma nova compra?",
        "DateCreate": "2017-12-30 06:07:54",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Esclarecer uma dúvida",
        "Message": "Boa tarde. O cupom de descontos é válido apenas para uma compra. Você pode me enviar o número do cupom para que possamos verificar se o mesmo já foi aplicado, por favor?",
        "DateCreate": "2018-01-23 04:28:16",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288923,
    "CategoryID": 64773,
    "CustomerID": 97930,
    "CustomerName": "Vicki Gill",
    "CustomerEmail": "vicki.gill@neoassist.com",
    "DateCreate": "2017-12-16 09:14:17",
    "DateUpdate": "2018-01-25 01:26:16",
    "Interactions": [{
        "Subject": "Como está meu pedido?",
        "Message": "Bom Dia Efetuei uma compra , o prazo de entrega foram de 8 dias uteis , gostaria de saber se pode ocorrer da entrega ser efetuada antes e como esta o andamento da entrega do mesmo",
        "DateCreate": "2017-12-16 09:14:17",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Como está meu pedido?",
        "Message": "Olá, tudo bem com você? O seu pedido está com o status Entregue. A senhora poderia confirmar o recebimento do mesmo?",
        "DateCreate": "2018-01-25 01:26:16",
        "Sender": "Expert"
      }
    ]
  },
  {
    "TicketID": 288924,
    "CategoryID": 45228,
    "CustomerID": 97897,
    "CustomerName": "Rosario Mercer",
    "CustomerEmail": "rosario.mercer@neoassist.com",
    "DateCreate": "2017-12-20 11:24:29",
    "DateUpdate": "2018-02-08 09:55:52",
    "Interactions": [{
        "Subject": "Acompanhamento",
        "Message": "Gostaria de saber como esta o andamento do pedido, pois este foi reenviado conforme Email que recebi de vocês. Obrigado.",
        "DateCreate": "2017-12-20 11:24:29",
        "Sender": "Customer"
      },
      {
        "Subject": "RE: Acompanhamento",
        "Message": "Olá, seu pedido encontra-se em fase de transporte.",
        "DateCreate": "2018-02-07 05:23:53",
        "Sender": "Expert"
      },
      {
        "Subject": "RE: Acompanhamento",
        "Message": "OK. Mas quanto tempo vai demorar?",
        "DateCreate": "2018-02-08 09:55:52",
        "Sender": "Customer"
      }
    ]
  }
];

      app.use(function(req, res, next){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods','GET');
      res.header('Access-Control-Allow-Headers','Content-Type');
      next();
  })

app.get('/listaTickets', function (req, res) {    
    res.send(listaTickets);  
});

app.listen(8080, function () {
  console.log('Ouvindo a porta 3000!');
});