// -------------------------------------Operadores de incremento e decremento-------------------------------------

// ***********Operador de adição ( ++ )***********

// let num = 10

// num = 1 + 2
// num = num + 3
// num += 3

// num++

// console.log(num)

// ***********Operador de subtração ( -- )********

// console.log(num)

// num--
// num--
// num--

// num -= 7

// console.log(num)

// ***********Trabalhando com multiplicação********

// let num2 = 2

// num2 = num2 * 2
// num2 *= 8

// console.log(num2)

// ***********Trabalhando com Divisão**************

// let num3 = 15

// num3 = num3 / 3
// num3 /= 3

// console.log(num3)

// ************Operador de resto/módulo ( % )******

// let num4 = 12587

// let resultado = 15 % 4 // 3 ele retorna o valor que sobra da divisão

// truque: Como verificar se um número é par

// let par = num4 % 2

// if (par === 0) {
//     console.log("É Par")
// } else {
//     console.log("É Impar")
// }

// console.log(par)

// ---------------------------------------------Operadores lógicos-------------------------

// ********Not/não ( ! )***********

// let nome = "Alex"

// let verdade = nome !== "Alex"

// console.log(!verdade)

// let luz = true

// console.log(luz)

// *********Or/ou ( || )************

// let nome = "Fulanão"

//        false                false                false
// if (nome === "Alex" || nome === "Thiago" || nome === "Chrystian") {
//     console.log(`Bem vindo admin ${nome}`)
// } else {
//     console.log("Você não tem permissão de admin")
// }

// ------------Tabela do OR( || ) (Pelo menos uma das operações deve ser VERDADEIRA para dar true)-------
// false || true = true
// true || false = true
// true || true = true
// false || false = false

// **********And/e ( && )************

// let username = "alez"
// let senha = 123

//         // false                     false
// if (username === "alezinho" && senha === 1234) {
//     console.log("Você está logado!")
// }  else {
//     console.log("Username ou senha inválidos")
// }

// -------------Tabela do And( && ) (Todas as operações devem ser VERDADEIRAS para dar true)--------------
// true && true = true
// false && true = false
// true && false = false
// false && false = false





// -----------------------------------------Bonus (Máquina de lavar industrial)--------------------------------------

// Problema: Definir o tempo de lavagem!

// Variáveis:

// O peso pode variar entre 0kg até mais de 8kg
// let pesoRoupas = 50;
// O tipo de lavagem pode ser "rapida", "normal", "completa"
// let tipoLavagem = "normal";
// Tempo total da lavagem em min (mínimo 20)
// let tempoTotal = 0;

// 1. Peso das roupas e tipo de lavagem:

// Considerar os pesos para acrescentar o tempo de lavagem de acordo com o tipo de lavagem:

// 1.1 Se o peso das roupas for de até 5kg e o tipo de lavagem for rápida, o tempoTotal será de 20min
// 1.2 Se o peso das roupas for maior que 5kg e menor que 8Kg e o tipo de lavagem for rápida, o tempoTotal será de 30min
// 1.3 Se o peso das roupas for maior que 8kg e o tipo de lavagem for rápida, o tempoTotal será de 40min

// ***** Caso o tipo de lavagem seja 'normal', acrescentar 5 min ao tempo de lavagem total***
// ***** Caso o tipo de lavagem seja 'completa', acrescentar 10 min ao tempo de lavagem total***

// ----------------------Extra---------------------

// Após a lavagem a máquina vai secar as roupas?
// let secagem = true;

// ***** Caso o tipo de lavagem seja 'rapida' e a máquina irá secar as roupas (secagem=true), acrescentar 30 min ao tempo de lavagem total***
// ***** Caso o tipo de lavagem seja 'normal' e a máquina irá secar as roupas (secagem=true), acrescentar 50 min ao tempo de lavagem total***
// ***** Caso o tipo de lavagem seja 'completa' e a máquina irá secar as roupas (secagem=true), acrescentar 60 min ao tempo de lavagem total***

// Jeito 1:

// if (pesoRoupas <= 5 && tipoLavagem === "rapida") {
//   tempoTotal = 20;
// } else if (pesoRoupas <= 5 && tipoLavagem === "normal") {
//   tempoTotal = 25;
// } else if (pesoRoupas <= 5 && tipoLavagem === "completa") {
//   tempoTotal = 30;
// } else if (pesoRoupas > 5 && pesoRoupas <= 8 && tipoLavagem === "rapida") {
//   tempoTotal = 30;
// } else if (pesoRoupas > 5 && pesoRoupas <= 8 && tipoLavagem === "normal") {
//   tempoTotal = 35;
// } else if (pesoRoupas > 5 && pesoRoupas <= 8 && tipoLavagem === "completa") {
//   tempoTotal = 40;
// } else if (pesoRoupas > 8 && tipoLavagem === "rapida") {
//   tempoTotal = 40;
// } else if (pesoRoupas > 8 && tipoLavagem === "normal") {
//   tempoTotal = 45;
// } else if (pesoRoupas > 8 && tipoLavagem === "completa") {
//   tempoTotal = 50;
// }

// Jeito 2:

// if (pesoRoupas <= 5) {
//   if (tipoLavagem === "rapida") {
//     tempoTotal = 20;
//   } else if (tipoLavagem === "normal") {
//     tempoTotal = 25;
//   } else if (tipoLavagem === "completa") {
//     tempoTotal = 30;
//   }
// } else if (pesoRoupas > 5 && pesoRoupas <= 8) {
//   if (tipoLavagem === "rapida") {
//     tempoTotal = 30;
//   } else if (tipoLavagem === "normal") {
//     tempoTotal = 35;
//   } else if (tipoLavagem === "completa") {
//     tempoTotal = 40;
//   }
// } else {
//   if (tipoLavagem === "rapida") {
//     tempoTotal = 40;
//   } else if (tipoLavagem === "normal") {
//     tempoTotal = 45;
//   } else if (tipoLavagem === "completa") {
//     tempoTotal = 50;
//   }
// }

// console.log(`O tempo total da lavagem, será de ${tempoTotal} minutos`);
