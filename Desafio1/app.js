let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoClicado(){
    console.log('o botão foi clicado.');
}

function euAmoJs(){
    alert('Eu amo JS!');
}

function estiveCidade(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let valor1 = prompt('Digite um número:');
    let valor2 = prompt('Digite outro número:');
    valor1  = parseInt(valor1);
    valor2 = parseInt(valor2);
    let resultado = valor1 + valor2;
    alert(`O resultado da soma é: ${resultado}`);
}
