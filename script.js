var jogadores = [];
var contPartidas = 0;
contadorDePartidas();


function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  jogadores.sort(ordenarPorPontos);
  for (var i = 0; i < jogadores.length; i++) {
    //<input type='radio' name='jogador " + i + "' value='" + jogadores[i]+"'>;
    elemento += " <tr><td>" + jogadores[i].nome + "</td>";
    elemento += " <td>" + jogadores[i].vitorias + "</td>";
    elemento += " <td>" + jogadores[i].empates + "</td>";
    elemento += " <td>" + jogadores[i].derrotas + "</td>";
    elemento += " <td>" + jogadores[i].pontos + "</td>";
    elemento +=" <td><button onClick='adicionarVitoria(" + i +")'>Vitória</button></td>";
    if (i == 0) {
      elemento += "<td rowspan='"+ jogadores.length +"'><button onClick='pontuarEmpate()'>Empate</button></td>";
    }
    elemento += " </tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function ordenarPorPontos(a, b){
  return b.pontos - a.pontos;
}
exibeJogadoresNaTela(jogadores);


function adicionarJogador() {
  var jogador = {
  nome: document.getElementById("nomeDoJogador").value,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
  };  
  jogadores.push(jogador);
  exibeJogadoresNaTela(jogadores)
}


function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  contPartidas++;
  for (cont=0; cont < jogadores.length; cont++) {
    if (jogadores[cont] != jogadores[i]) {
      jogadores[cont].derrotas++;
    }
  }
  contadorDePartidas();
  validarPontuacao (jogador);
}


function pontuarEmpate() {
  contPartidas++;
  for (cont=0; cont < jogadores.length; cont++) {
    jogadores[cont].empates++;
    jogadores[cont].pontos++;
    }
  contadorDePartidas();
  validarPontuacao (jogadores);
}


function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  //validarPontuacao (jogador);
}


function zerarPontuacoes() {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  }
  contPartidas = 0;
  contadorDePartidas();
  exibeJogadoresNaTela(jogadores);
}

function zerarListaDeZogadores() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}

function validarPontuacao (jogador) {
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function contadorDePartidas() {
  document.getElementById("partidas").innerHTML = contPartidas;
}
