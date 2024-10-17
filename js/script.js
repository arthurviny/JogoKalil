const listadepalavras = ["SINTO", "SUITE", "AVIDO", "FESTA", "BEBIA", "HONRA", "OUVIR", "PESCO", "FUNGO", "PAGAM",
    "GINGA", "PINTA", "PODER", "UTERO", "PILHA", "SARAR", "FRUTA", "PIANO", "NOTAR", "MUSGO",
    "TENSA", "MELAO", "FELIZ", "MIOJO", "PAGOS", "PUROS", "TEXTO", "MAMAE", "FUSCA", "AMENO",
    "DUTOS", "CHUVA", "MIMOS", "SINOS", "CORAL", "MULTI", "FORTE", "TONTA", "CRETA", "TEMOR", 
    "NEURO", "ENTES", "CABAL", "LIGAR", "ROLAR", "NAVIO", "VOSSA", "LIMBO", "CALVO", "ONCAS", 
    "FEDOR", "BALDE", "AQUEM", "OXALA", "PATOS", "TALCO", "LABIA", "CRIME", "GRADE", "CARTA"
   ]

const palavraAleatoria = () => {
 const indice = [Math.floor(Math.random()* listadepalavras.length)] // Função que escolhe uma palavra aleatória por meio do índice dela
 return listadepalavras[indice]
}
const palavraSelecionada = palavraAleatoria() // Função que guarda durante o jogo o valor escolhido pela função palavraAleatoria 
let tentativasRestantes = 6;  // Número máximo de tentativas  (Usei Let pois não tem como alterar o valor de uma constante pelo meu conhecimeto vai ser necessário )

/*Função para verificar as letras, dizendo se a letra em questão está certa (letra certa no lugar certo),
quase certa (letra está contida na palavra, porém posicionada no lugar errado ou não está nem na palavra*/
/* Dado o valor em correta, quase e errada (nomes que eu defini no css), criar uma função para aplicar 
tais classes em cada uma das letras, lembrando das nuances de palavras que possuem letras repetidas e coisas desse tipo */


//Função Para que as respostas anteriores continuem na tela, para o jogador poder se basear

// Função para reiniciar o jogo
const reiniciarJogo = () => {
    tentativasRestantes = 6;
    palavraSecreta = palavraAleatoria();  // Escolhe uma nova palavra secreta
    document.getElementById("resultadoPalpite").innerHTML = ''; // Limpa os palpites anteriores
    document.getElementById("botaoReiniciar").style.display = 'none'; // Oculta o botão de reiniciar
    document.getElementById("enviarPalpite").style.display = 'inline'; // Reexibe o botão de enviar palpite
    document.getElementById("inputPalpite").style.display = 'inline'; // Reexibe o campo de input
    alert("O jogo foi reiniciado! Tente novamente.");
  };

const verificarpalavra = function verificar() { //Função que verifica se a palavra atende ao requisito de possuir exatamente 5 letras e verifica se é igual a palavra selecionada ou se é diferente dela
    const input = document.getElementById('inputPalpite').value

    if(input.length !== 5) {alert("A palavra deve ter exatamente 5 letras!")}
        else if(input.toUpperCase() === palavraSelecionada) {alert("Parabéns, você acertou!")}
            else {alert("Errou, tente novamente!")}
}
