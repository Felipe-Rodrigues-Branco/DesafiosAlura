
function calcularIMC(altura, peso) {
    let altura = prompt('Digite sua altura:');
    altura = altura * altura;
    let peso = prompt('Digite seu peso:');
    return peso/altura;
}

function valorFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
      }
    
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
    
      return fatorial;
    // nao sabia fazer 
}

function converteReal(dolar) {
    let valorDolar = 4.80;
    let valorConvertido = dolar * valorDolar;
    return valorConvertido;
}

function mostrarPerimetroRetangulo(altura, largua) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
}

function mostrarPerimetroCirculo(raio) {
    let pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
}

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
    // nao sabia fazer 
  }
  
