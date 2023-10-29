// ----------------Tipos de variáveis-------------------

// const
// let

// NÃO USAR MAIS:
// var

// ----------------Tipos de valores de variáveis:-------

// number (integer e float)
// boolean (true ou false)
// string (string/texto ou palavra)

// ** Camel Case (Usado em Javascript)**
// let umaVariavel;

// ** Snake Case (Usado em Python)**
// let uma_variavel;

// let nome = "Alexander"
// let sobrenome = "Sakaki";
// let nomeDoMeio = `Silva`;
// let turma = 21;

// let texto = "Sexta feira é um dia";

// -----------------Template string----------------------

// ---------Interpolação de string--------------
// let mensagem = "Olá Alexander. Bem vindo!"
// let mensagem2 = `Olá ${nome}. Bem vindo a turma ${turma}!`

// console.log(mensagem2)

// ---------Concatenação de string--------------

// let mensagem3 = 'Olá ' + nome + ". Bem vindo a turma " + turma +`!`

// console.log(mensagem3)

// -----------------Acessando os caracteres---------------

// let nome = "Alex"

// Indices de uma string
// 0 1 2 3  -> indice
// 1 2 3 4  -> posição
// A L E X

// console.log(nome)
// console.log(nome[1])
// console.log(nome[4 - 1])

// console.log(nome.length)
// console.log(nome[nome.length - 1])

// -----------------Entrada e Saída de dados--------------

// alert("Seu antivirus está desatualizado!")

// let nome = prompt("Digite seu nome: ")
// const cpf = prompt("Digite seu cpf: ")
// let animalFavorito = prompt("Digite seu animal Favorito: ")

// console.log(nome)
// alert(`Olá seu nome é ${nome}. Você sabia?`)

// -----------------Comparadores---------------------------

// ------Maior que: ( > )-----------

// Elemento da esquerda é MAIOR que o da direita?
// 10 > 5    ===> true (sim/verdade)
// let num1 = 10
// let num2 = 5
// console.log(num1 > num2) 

// ------Menor que: ( <) ------------

// Elemento da esquerda é MENOR que o da direita?
// 10 < 5    ===> false (não/falso)

// ------Igual a: ( == )--------------

// Elemento da esquerda é tem o mesmo VALOR do Elemento da direita?
// 10 == 10  ===> true (sim/verdadeiro)

// ------Estritamente Igual a: ( === )--

// Elemento da esquerda é tem o mesmo VALOR e TIPO do Elemento da direita?
// 10 === "10"  ===> false (não/falso)

// Resposta do exemplo de cima: O elemento da esquerda tem o tipo 'number' e o elemento da direita tem o tipo 'string'

// 10 == 10     ===> true
// 10 === "10"  ===> false

// ------Maior ou igual ( >= ) /Menor ou igual ( <= )------

// 10 >= 10 ===> true (sim/verdadeiro)
// 10 <= 10 ===> true (sim/verdadeiro)

// -------Diferente que: ( != )----------

// 10 != 10 ===> false (não/falso **eles são iguais)


// ---------------------------Estruturas Condicionais---------------------------------

// let nome = prompt("Digite seu nome");

// if (nome == "Alex") {
//   console.log(`Olá ${nome}. Você é legal!`);
// } 
// else if (nome === "Thiago") {
//   console.log(`Olá ${nome}`);
// } else {
//     console.log(`Olá você que entrou que se chama ${nome}`)
// }

// if (10 > 5) {
//     console.log("É maior!")
// }
