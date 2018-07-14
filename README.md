# WebService-com-Node-e-Expres
Acessando e Interagindo com dados de uma API desenvolvida com Node.JS e Express

Para utilizar a aplicação você precisa:

 1° Instalar Node.JS em sua maquina
 2° Navegue pelo terminal até a pasta do projeto aonde se encontra o arquivo app.js e digite no terminar node app.js
    para inicializar a API
 3° Para testar a saída do WebService digite no navegador http://localhost:8080/listaTicketes
    obs: listaTickets é o endpoint de nossa API
 4° Abra no navegador a página index.html
 5° Tudo pronto! Com esses passos você já poderá interagir com a API
 
 Recursos:
 
 - Filtros em todas as tabelas
 - Páginação
 - Ordenação. Para ordenar as colunas clique no cabeçalho da td
 - Classificação dos tickets
 
  ************************ Sobre o Algoritmo de Classificação **************************
  Básicamente ele percorre o objeto interação e le as propriedade assunto e mensagem
    ::Percorre essas string procurando algumas palavras pré estabelecidas que identificam mau humor por parte de pessoas humanas
    ::Percorre os assuntos
    ::Conta a quantidade de interações
   Baseado nisso ele classifica os tickets como prioridade ALTA e BAIXA
   
   Mais informações
   email: cleitoncorrea2013@hotmail.com
