const listadepalavras = ["SINTO", "SUITE", "AVIDO", "FESTA", "BEBIA", "HONRA", "OUVIR", "PESCO", "FUNGO", "PAGAM",
    "GINGA", "PINTA", "PODER", "UTERO", "PILHA", "SARAR", "FRUTA", "PIANO", "NOTAR", "MUSGO",
    "TENSA", "MELAO", "FELIZ", "MIOJO", "PAGOS", "PUROS", "TEXTO", "MAMAE", "FUSCA", "AMENO",
    "DUTOS", "CHUVA", "MIMOS", "SINOS", "CORAL", "MULTI", "FORTE", "TONTA", "CRETA", "TEMOR", 
    "NEURO", "ENTES", "CABAL", "LIGAR", "ROLAR", "NAVIO", "VOSSA", "LIMBO", "CALVO", "ONCAS", 
    "FEDOR", "BALDE", "AQUEM", "OXALA", "PATOS", "TALCO", "LABIA", "CRIME", "GRADE", "CARTA"
   ]

const palavraAleatoria = () => listadepalavras[Math.floor(Math.random()* listadepalavras.length)] // Função que escolhe uma palavra aleatória por meio do índice dela

const palavraSelecionada = palavraAleatoria() // Função que guarda durante o jogo o valor escolhido pela função palavraAleatoria
   
//Criar Uma Função Para que os quadradinhos apareçam na tela após a pessoa digitar a palavra

/*Função para verificar as letras, dizendo se a letra em questão está certa (letra certa no lugar certo),
quase certa (letra está contida na palavra, porém posicionada no lugar errado ou não está nem na palavra*/

/* Dado o valor em correta, quase e errada (nomes que eu defini no css), criar uma função para aplicar 
tais classes em cada uma das letras */


function verificarpalavra () { //Função que verifica se a palavra atende ao requisito de possuir exatamente 5 letras e verifica se é igual a palavra selecionada ou se é diferente dela
    const input = document.getElementById('entrada-palavra').value

    if(input.length !== 5) {alert("A palavra deve ter exatamente 5 letras!")}
        else if(input.toUpperCase() === palavraSelecionada) {alert("Parabéns, você acertou!")}
            else {alert("Errou, tente novamente!")}
}

// função pra reiniciar o jogo (Unlimited mode)



 