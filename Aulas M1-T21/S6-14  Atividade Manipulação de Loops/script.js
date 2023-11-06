/* Exercício 1

Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log.
Exemplo:

verticalText ("Frontend");
⁠// F
⁠// r
⁠// o
⁠// n
⁠// t
⁠// e
⁠// n
⁠// d
*/

function verticalText(texto) {
  for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
  }
}

verticalText("Frontend");

/* Exercício 2

Desenvolva uma função chamada incrementText, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando, começando somente pela primeira letra, depois a primeira e a segunda e assim sucessivamente conforme exemplo.

Exemplo:
incrementText("Backend");
⁠// B
⁠// Ba
⁠// Bac
⁠// Back
⁠// Backe
⁠// Backen
⁠// Backend
*/

function incrementText(texto) {
  for (let i = 1; i <= texto.length; i++) {
    console.log(texto.slice(0, i));
  }
}

incrementText("Backend");

/* Exercício 3​

Desenvolva uma função chamada incrementTextBackwards, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando ao contrário, começando somente pela última letra, depois a última e a penúltimo e assim sucessivamente conforme exemplo.

Exemplo:
incrementTextBackwards("Fullstack");
⁠// k
⁠// ck
⁠// ack
⁠// tack
⁠// stack
⁠// lstack
⁠// llstack
⁠// ullstack
⁠// Fullstack
*/

function incrementTextBackwards(texto) {
  for (let i = texto.length; i >= 1; i--) {
    console.log(texto.slice(-i));
  }
}

incrementTextBackwards("Fullstack");

function incrementTextBackwards(texto) {
  for (let i = 1; i <= texto.length; i++) {
    console.log(texto.slice(-i));
  }
}

incrementTextBackwards("Fullstack");

/* Exercício 4

Desenvolva uma função chamada padEnd, que receberá três parâmetros: uma palavra (string), a quantidade de repetição do caractere (number) e o caractere de repetição (string).

Sua função deverá retornar a string preenchida com o caractere de acordo com o comprimento passado por parâmetro.

padEnd("Kenzie", 5, "foo");
⁠// Retorna "Kenziefoofoofoofoofoo"

padEnd("Kata", 8, "*");
⁠//Retorna "Kata********" 
*/

function padEnd(palavra, quantidade, caractere) {
  for (let i = 0; i < quantidade; i++) {
    palavra += caractere;
  }
  return palavra;
}

console.log(padEnd("Kenzie", 5, "foo"));
console.log(padEnd("Kata", 8, "*"));

/* Exercício 5

  Desenvolva uma função chamada subString, que receberá três parâmetros: uma palavra (string), a posição inicial (number) e a posição final (number). Sua função deverá retornar a parte da string **entre** o início e o fim dos índices passados por parâmetro (não incluindo os caracteres dos próprios índices).
  
  subString("Mozilla", 0, 4);
  ⁠// Retorna "ozi"
  
  subString("Chrome", 3, 5);
  ⁠//Retorna "m"
  */

function subString(palavra, inicio, fim) {
  return palavra.slice(inicio + 1, fim);
}

console.log(subString("Mozilla", 0, 4));
console.log(subString("Chrome", 3, 5));

/* Exercício 6

Desenvolva uma função chamada stringRepeater, que receberá dois parâmetros: uma palavra ou frase (string) e a quantidade de repetição (number). Sua função deverá retornar uma nova string que contem o número especificado de cópias concatenadas da palavra passada por parâmetro.

stringRepeater("Because I'm happy. ", 3);
⁠// Retorna "Because I'm happy. Because I'm happy. Because I'm happy. "
*/

function stringRepeater(palavra, quantidade) {
  let resultado = "";
  for (let i = 0; i < quantidade; i++) {
    resultado += palavra;
  }
  return resultado;
}

console.log(stringRepeater("Because I'm happy. ", 3));

/* Exercício 7

Desenvolva uma função chamada stringCentralizer, que receberá três parâmetros:​ uma palavra (string), a quantidade de repetição do elemento (number) e o elemento de repetição (string).

Sua função deverá retornar uma nova string que contem a palavra passada por parâmetro centralizada entre os elementos de repetição com um espaço em branco nas laterais e a quantidade exata passada por parâmetro.

stringCentralizer("JavaScript", 8, "=");
⁠//Retorna "======== JavaScript ========"
*/

function stringCentralizer(palavra, quantidade, elemento) {
  let repeticao = elemento.repeat(quantidade);
  return `${repeticao} ${palavra} ${repeticao}`;
}

console.log(stringCentralizer("JavaScript", 8, "="));

function stringCentralizer(palavra, quantidade, elemento) {
  return `${elemento.repeat(quantidade)} ${palavra} ${elemento.repeat(
    quantidade
  )}`;
}

console.log(stringCentralizer("JavaScript", 8, "="));
