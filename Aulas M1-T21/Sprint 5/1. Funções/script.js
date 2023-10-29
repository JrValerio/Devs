// ******************************Revisão de Operações lógicas*******************************

// let nome = "Alexa"

//                        false
//          true                          false
//       true     false            false          false
// if ((10 > 9 || 10 > 15) && (nome === "Alex" || nome === "Thiago") ) {
//     console.log("Entrou no if")
// }

// ******************************Funções****************************************************

// ------Declaração de função:

// palavra reservada (function) - nome da função - parâmetros (pode ou não ter) - escopo (retorno da função - pode ou não ter)

// function umaFuncao () {
//    execute algo
// }

// *********Função SEM parâmetros e SEM retorno:*****************

// function mensagemDeBoasVindas () {
//     console.log("Olá. Bem vindo!")
// }

// mensagemDeBoasVindas()

// *********Função COM parâmetro e SEM retorno:******************

// let nome = "Alex"

// console.log("Alô!")
// console.log(nome)

// function meuLog(parametro1, parametro2) {

//     let total = parametro1 + parametro2

//     console.log(total)

// }

// let num1 = 100
// let num2 = 150

// let total = parametro1 + parametro2
// console.log(total)

// let variavel = `Olá ${nome}. Bem vindo!`

// meuLog(num1, num2)
// meuLog(`Olá ${nome}. Bem vindo!`)

// ***********Função SEM parâmetro e COM retorno********************

// function minhaFuncao () {
//     let num1 = 4
//     let num2 = 5

//     return num1 * num2
// }

// console.log(minhaFuncao())

// let retornoDaFuncaoExemplo = minhaFuncao()

// console.log(retornoDaFuncaoExemplo)

// ***********Função COM parâmetro e COM retorno**********************

// function minhaFuncao (parametro1, parametro2) {

//     let total = parametro1 + parametro2

//     return total
// }

// let variavel = minhaFuncao(10, 5)

// console.log(variavel)

// function boasVindas(nome, turma) {
//     let mensagem = `Olá ${nome}. Bem vindo a turma ${turma}!`

//     alert(mensagem)
// }

// let seuNome = prompt("Digite seu nome")
// let suaTurma = prompt("Digite sua turma")

// boasVindas(seuNome, suaTurma)

// --------------------------------Outros exemplos:--------------------------------------

// let nome = "Alex"
// console.log(nome)

// function mudaNome (novoNome) {
//     nome = novoNome
// }

// mudaNome("Ben 10")
// console.log(nome)
// mudaNome("Carine")
// console.log(nome)
// mudaNome("Adalberto")
// console.log(nome)
// mudaNome("Suzana")
// console.log(nome)

// function soma(num1, num2) {
//   return num1 + num2;
// }

// function subtracao(num1, num2) {
//   return num1 - num2;
// }

// function multiplicacao(num1, num2) {
//   return num1 * num2;
// }

// function divisao(num1, num2) {
//   return num1 / num2;
// }

// let valorDaSoma = soma(15, 20)

// console.log(valorDaSoma)

// -----------------------Calculadora dinâmica----------------------

// function calculadora(valor1, sinal, valor2) {
//     if (sinal === "+") {
//         return valor1 + valor2
//     } else if (sinal === "-") {
//         return valor1 - valor2
//     } else if (sinal === "*") {
//         return valor1 * valor2
//     } else if (sinal === "/") {
//         return valor1 / valor2
//     } else {
//         return "Operação inválida"
//     }
// }

// let num1 = 10
// let num2 = 5

// let total = calculadora(num1, "+", num2)

// console.log(total)

//
// ***************Máquina de lavar (A função dela é mostrar o tempo de lavagem)***************
// let tempoTotal = 0;

// function mostraTempoTotal(pesoRoupas, tipoLavagem) {

//     if (pesoRoupas <= 5) {
//           if (tipoLavagem === "rapida") {
//             tempoTotal = 20;
//           } else if (tipoLavagem === "normal") {
//             tempoTotal = 25;
//           } else if (tipoLavagem === "completa") {
//             tempoTotal = 30;
//           }
//         } else if (pesoRoupas > 5 && pesoRoupas <= 8) {
//           if (tipoLavagem === "rapida") {
//             tempoTotal = 30;
//           } else if (tipoLavagem === "normal") {
//             tempoTotal = 35;
//           } else if (tipoLavagem === "completa") {
//             tempoTotal = 40;
//           }
//         } else {
//           if (tipoLavagem === "rapida") {
//             tempoTotal = 40;
//           } else if (tipoLavagem === "normal") {
//             tempoTotal = 45;
//           } else if (tipoLavagem === "completa") {
//             tempoTotal = 50;
//           }
//         }

//     console.log(tempoTotal)

// }

// let tipoDeLavagem = prompt("Qual o tipo de lavagem? ")

// mostraTempoTotal(6, tipoDeLavagem)
