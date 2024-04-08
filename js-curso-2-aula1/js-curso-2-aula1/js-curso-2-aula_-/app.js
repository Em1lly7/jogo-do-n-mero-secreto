 let listaDeNumerosSorteados = [];
 let numeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;

   
 function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
            responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
 }

 function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 à 10')

 }

 exibirTextoNaTela('h1','Jogo do número secreto');
 exibirTextoNaTela('p','Escolha um número de 1 à 10')


function verificarChute() {
    let chute = document.querySelector('input').value;

 if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Parabéns,você Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
 } else {
    if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
    } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;}
    limparCampo();
 
} 

 function gerarNumeroAleatorio() {
 let numeroescolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroLimite)
listaDeNumerosSorteados = [];


 if (listaDeNumerosSorteados.includes(numeroescolhido)){
    return gerarNumeroAleatorio();
 } else {
    listaDeNumerosSorteados.push(numeroescolhido);
    console.log(listaDeNumerosSorteados);
    return numeroescolhido;
 }
    
}

function limparCampo(){
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled, true');
}




