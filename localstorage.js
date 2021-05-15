
function salvarForm() {
//Variaveis usadas para capturar dados do usuario

var cliente = document.getElementById('nomeCliente').value;
var datainicio = document.getElementById('dataInicio').value;
var datafim = document.getElementById('dataFim').value;
var anuncio = document.getElementById('anuncio').value
var valor = document.getElementById('valor').value;
var start = document.getElementById('dataInicio').value;
var end = document.getElementById('dataFim').value;

  start = new Date(start);
  end = new Date(end);
// Calculo para obter diferença de dias entre datas
var diffInTime = Math.abs(end - start);
var timeInOneDay = 1000 * 60 * 60 * 24;
var diffInDays = diffInTime / timeInOneDay;
var totalInvestido = Math.round(diffInDays * valor);
//Calculadora de Alcance do anuncio
var primeiroInv = Math.round((1/30) * totalInvestido);
var qtdeClic = Math.round((100/12) * primeiroInv);
var qtdeCompart = Math.round((20 / 3) * qtdeClic);
var qtdeAddVis = 40 * qtdeCompart;
var qtdeTotalVis = Math.round((qtdeAddVis * 3) + primeiroInv);

var cadastro = [anuncio, cliente, datainicio, datafim, totalInvestido];
// Captura a referência da tabela com id “minhaTabela”
var table = document.getElementById('minhaTabela');
// Captura a quantidade de linhas já existentes na tabela
var numOfRows = table.rows.length;
// Captura a quantidade de colunas da última linha da tabela
var numOfCols = table.rows[numOfRows-1].cells.length;
// Insere uma linha no fim da tabela.
var newRow = table.insertRow(numOfRows);
// Insere uma coluna na nova linha 
     newCell = newRow.insertCell(0);
     newCell_1 = newRow.insertCell(1);
     newCell_2 = newRow.insertCell(2);
     newCell_3 = newRow.insertCell(3);
     newCell_4 = newRow.insertCell(4);
     newCell_5 = newRow.insertCell(5);
     newCell_6 = newRow.insertCell(6);
// Insere um conteúdo na coluna
     newCell.innerHTML = cliente;
     newCell_1.innerHTML = totalInvestido;
     newCell_2.innerHTML = datainicio;
     newCell_3.innerHTML = datafim;
     newCell_4.innerHTML = qtdeCompart;
     newCell_5.innerHTML = qtdeClic;
     newCell_6.innerHTML = qtdeTotalVis;
// Contador de Anuncios Salvos
var cad =localStorage.length;
 if(localStorage.getItem == null){
   localStorage.setItem("anuncios", JSON.stringify(cadastro));
    }else{
 for(var i = 1; i <= cad; i++){
    localStorage.setItem("anuncios"+i, JSON.stringify(cadastro));
          	  }
    }
return false;
}