let numerosSorteados = [];
let quantidadeLimite = 10;
let numeroSecreto = geradorDeNumero();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag)
    campo.innerHTML = texto
}
function exibirBoasVindas() {
    exibirTextoNaTela('h1', 'Número Secreto');
    exibirTextoNaTela('p', `Escolha um Número entre 1 e ${quantidadeLimite}`);
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};
exibirBoasVindas();

function verificarChute() {
    console.log (`${numeroSecreto}`);
    let chute = document.querySelector ('input').value; 
    console.log(chute == numeroSecreto);
    let mensagemTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('p', `parabéns, você venceu o jogo com ${tentativas} ${mensagemTentativa}` )
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++
        if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `o numero secreto é maior que ${chute}`);
    } else exibirTextoNaTela('p', `o numero secreto é menor que ${chute}`);
    limparChute();
 };
};


function reiniciarJogo() {
    numeroSecreto = geradorDeNumero();
    limparChute();
    tentativas = 1;
    exibirBoasVindas();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};


function geradorDeNumero() {
    let numeroEscolhido = parseInt(Math.random()* quantidadeLimite + 1);

    let listaDaQuantidadeDeNumerosSorteados = numerosSorteados.length

    if (listaDaQuantidadeDeNumerosSorteados == 8) {
        numerosSorteados = []
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return (geradorDeNumero());
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return (numeroEscolhido);
    };
};
function limparChute() {
    chute = document.querySelector ('input');
    chute.value = '';
}
































