/* Este arquivo é responsavel por aplicar as configuração da página 
principal da aplicação (index.html)


Autor : Cleiton Corrêa
GitHub: https://github.com/CleitonCorrea
email : cleitoncorrea2013@hotmail.com

*/

$(document).ready(function(){     
   $.ajax({
                  url: 'http://localhost:8080/listaTickets',             
                  type: 'GET',
                  success: function( dados ){  
                  var tamanhoPagina = 6;
                  var pagina = 0;
                  function paginar() {
                                          $('table > tbody > tr').remove();                                          
                                          var tbody = $('table > tbody');
                                          for (var i = pagina * tamanhoPagina; i < dados.length && i < (pagina + 1) *  tamanhoPagina; i++) {                                        
                                            var qtdInteracoes = dados[i].Interactions.length;                                             
                                              if(qtdInteracoes < 3){
                                                 tbody.append(
                                                  $('<tr>')
                                                      .append($('<td>').append(dados[i].TicketID))
                                                      .append($('<td>').append(dados[i].CategoryID))
                                                      .append($('<td>').append(dados[i].CustomerID))
                                                      .append($('<td>').append(dados[i].CustomerName))
                                                      .append($('<td>').append(dados[i].CustomerEmail))
                                                      .append($('<td>').append(dados[i].DateCreate))
                                                      .append($('<td>').append(dados[i].DateUpdate))                                              
                                                      .append($('<td><a href="view/interacoes.html?x='+dados[i].TicketID+'">ALTA</a><br><img src="img/priori-alta.png" />   '))
                                              )//fim do append

                                              }else{

                                                  tbody.append(
                                                  $('<tr>')
                                                      .append($('<td>').append(dados[i].TicketID))
                                                      .append($('<td>').append(dados[i].CategoryID))
                                                      .append($('<td>').append(dados[i].CustomerID))
                                                      .append($('<td>').append(dados[i].CustomerName))
                                                      .append($('<td>').append(dados[i].CustomerEmail))
                                                      .append($('<td>').append(dados[i].DateCreate))
                                                      .append($('<td>').append(dados[i].DateUpdate))                                              
                                                      .append($('<td><a href="view/interacoes.html?x='+dados[i].TicketID+'">BAIXA</a><br><img src="img/priori-baixa.png" />   '))
                                              )//fim do append
                                              }
                                          }//fim do for principal 
                                      $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / tamanhoPagina));
                                    }//fim do método de paginação

                  function ajustarBotoes() {
                                              $('#proximo').prop('disabled', dados.length <= tamanhoPagina || pagina >= Math.ceil(dados.length / tamanhoPagina) - 1);
                                              $('#anterior').prop('disabled', dados.length <= tamanhoPagina || pagina == 0);
                                            }

                  $(function() {
                      $('#proximo').click(function() {
                          if (pagina < dados.length / tamanhoPagina - 1) {
                              pagina++;
                              paginar();
                              ajustarBotoes();
                          }
                      });
                      $('#anterior').click(function() {
                          if (pagina > 0) {
                              pagina--;
                              paginar();
                              ajustarBotoes();
                          }
                      });
                      paginar();
                      ajustarBotoes();
                  });                      

                }// fim do retorno success
        })//fim do ajax      
      
      //Método done apenas para ver no console o callback 
       .done(function(data){
              if(console && console.log){
                console.log('Exemplo de Saida', data.slice(0,100));
               
              }
            });

//filtros da tabela
$("table input").keyup(function(){       
        var index = $(this).parent().index();
        var nth = "table td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $("table tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("table input").blur(function(){
        $(this).val("");
    });

  //função para varrer strings
  var Str2 = function(strs, str){
      return strs.filter(function(el){
          return el == str;
      }).length > 1;
  }

});
