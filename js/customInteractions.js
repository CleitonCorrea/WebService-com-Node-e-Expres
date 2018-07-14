/* Este arquivo é responsavel por aplicar as configuração de status na página interacoes.html

Autor : Cleiton Corrêa
GitHub: https://github.com/CleitonCorrea
email : cleitoncorrea2013@hotmail.com

*/
    $(document).ready(function(){ 

    //capturando o valor da string URL, e separando em objetos  
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};    
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });   
   console.log(data.x); //exibindo o valor no console para chegar o valor recebido, apenas para debug mesmo!
     // requisitando a API
     $.ajax({
              url: 'http://localhost:8080/listaTickets',             
              type: 'GET',
                 success: function( dados ){
                  // percorrendo os objetos para achar o valor recebido. Caso o valor recebido seja igual algum idticket do objeto então 
                  //exibe os valores relacionados as interações
                  var qtd =  dados.length;                 
                  $('table > tbody > tr').remove();                  
                  var tbody = $('table > tbody');                  
                  for(var i = 0; i<= qtd; i++){                    
                    if(dados[i].TicketID == idTicketIntegration ){                      
                      var qtdIntegrations = dados[i].Interactions.length;                       
                       for(var a = 0; a <= qtdIntegrations; a++){
                        tbody.append(
                                $('<tr>')
                                    .append($('<td>').append(dados[i].Interactions[a].Subject))
                                    .append($('<td>').append(dados[i].Interactions[a].Message))
                                    .append($('<td>').append(dados[i].Interactions[a].DateCreate))
                                    .append($('<td>').append(dados[i].Interactions[a].Sender))  
                                                                     
                            )//fim do tbody append
                       }
                    }//fim da condição
                  }//fim do loop    
                }// fim do retorno success
        })//fim do ajax      
});
