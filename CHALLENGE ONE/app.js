let amigos = [];


function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo');
    let nome = nomeDigitado.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    amigos.push(nome);
    mostrarAmigos();
    nomeDigitado.value = ''; 
}


function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado para sortear.");
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    let li = document.createElement('li');
    li.textContent = "Amigo sorteado: " + amigos[numeroSorteado];
    resultado.appendChild(li);
}
