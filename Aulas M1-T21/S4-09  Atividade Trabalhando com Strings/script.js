// Crie um programa que concatene dois nomes e retorne uma frase de saudação.
// Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"

const nome1 = "João";
const nome2 = "Silva";

const mensagem = `Olá ${nome1} ${nome2}!`;

console.log(mensagem);

// Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
// Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"

const string1 = "hello";
const string2 = "world";

const resultante = string1 + "" + string2;

console.log(resultante);

// Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
// Entrada: "12.5" Saída: 12

let decimal = "12.5";

console.log(parseInt (decimal));

// Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
// Entrada: "12" Saída: 12

let inteiro = "12";

console.log(parseFloat (inteiro));

// Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
// Entrada 1: "12" Entrada 2: "3" Saída: 15

let entrada1 = "12";
let entrada2 = "3";

let resultado1 = parseInt (entrada1);
let resultado2 = parseInt (entrada2);

console.log(resultado1 + resultado2)
