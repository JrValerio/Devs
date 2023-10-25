// Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, e imprima na tela se a soma de A + B é menor que C.

let a = 10;
let b = 20;
let c = 30;

console.log(a + b < c);

// Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero é par ou ímpar.

const numero = 75;

if (numero % 2 === 0) {
  console.log(`${numero} é um número par.`);
} else {
  console.log(`${numero} é um número ímpar.`);
}

// Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

const num1 = false
const num2 = true

console.log(num1 && num2)

// Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.

// Declare três variáveis com valores numéricos inteiros diferentes
const numero1 = 15;
const numero2 = 8;
const numero3 = 21;

// Crie um array para armazenar os números
const numeros = [numero1, numero2, numero3];

// Ordene o array em ordem decrescente
numeros.sort(function(a, b) {
  return b - a;
});

// Mostre os números em ordem decrescente
console.log("Números em ordem decrescente: " + numeros.join(", "));

// Em ordem crescente

// Declare três variáveis com valores numéricos inteiros diferentes
const numero4 = 15;
const numero5 = 8;
const numero6 = 21;

// Crie um array para armazenar os números
const numeros1 = [numero4, numero5, numero6];

// Ordene o array em ordem crescente (padrão)
numeros1.sort();

// Mostre os números em ordem crescente
console.log("Números em ordem crescente: " + numeros1.join(", "));

// Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.

let number1 = 9
let number2 = 12

if (number1 < number2) {
    alert(12)
}
