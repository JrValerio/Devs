// ******************************************Mais exemplos de função:***********************************************

// let dia = formataCaractere(prompt("Digite o dia"));
// let mes = formataCaractere(prompt("Digite o mes"));
// let ano = prompt("Digite o ano");

// function formataCaractere(char) {

//     if (char.length < 2) {
//         char = "0" + char;
//     }

//     return char;
// }

// dia = formataCaractere(dia);
// mes = formataCaractere(mes);

// if (dia.length < 2) {
//     dia = "0" + dia;
// }

// if (mes.length < 2) {
//     mes = "0" + mes;
// }

// alert(dataFormatada);
// let dataFormatada = `${dia}/${mes}/${ano}`;

// *********************************Escopos (Escopo global - Escopo de bloco e escopo de função)********************************

// ------------------Escopo global e Escopo de bloco--------------------

// let nome = "Alex";

// {
//     var - não utilizar (Ela pode ser acessada fora do escopo de bloco)
//     let nome = "Thiago";
// }

// console.log(nome)

// let nome = "Ismael"

// if (false) {
//     let nome = "Alex"
//     console.log(nome)
// }

// console.log(nome)

// ------------------Escopo de função-----------------------------------

// let nome = "Alex"

// function teste () {
//     let outroNome = "Fulano"
//     let sobrenome = "Ciclano"

//     if (true) {
//         if (true) {
//             console.log(sobrenome)
//             console.log(nome)
//         }
//         console.log(`Dentro do If: ${outroNome}`)
//     }
//     console.log(`Dentro da função: ${outroNome}`)
// }

// console.log(`Fora da função: ${nome}`)

// teste()
// ****************************************Reutilização de função*********************************

// function soma(a, b) {
//     return a + b;
// }
// function subtracao(a, b) {
//     return a - b;
// }
// function multiplicacao(a, b) {
//     return a * b;
// }
// function divisao(a, b) {
//     return a / b;
// }

// function calculadora(a, b, sinal) {
    // if (sinal === "+") {
    //     return a + b
    // }
    // if (sinal === "+") {
    //     return soma(a, b);
    // } else if (sinal === "-") {
    //     return subtracao(a, b);
    // } else if (sinal === "*") {
    //     return multiplicacao(a, b);
    // } else if (sinal === "/") {
    //     return divisao(a, b);
    // }
    // Utilizando o conceito no-else-return
    // return "Operação inválida";
// }

// console.log(calculadora(10, 2, "*"))

// ---------outro exemplo:--------------

// function verificaPar(num) {
//     let operador = 5;
    // Utilizo a função soma dentro de outra função
//     let result = soma(operador, num);

//     if (result % 2 === 0) {
//         return true;
//     }
// }

// console.log(verificaPar(1));

// ********************************************No else return***************************************

// let username = prompt("Digite seu nome: ");

// function eAdmin(nome) {
//     if (nome === "Alex") {
//         return `Olá ${nome}! Você é Admin!`;
//     } else if (nome === "Thiago") {
//         return `Olá ${nome}! Você não é Admin mas tem acesso!`;
//     }

//     return "Chegou no return";
// }

// let mensagemDeRetorno = eAdmin(username);

// console.log(mensagemDeRetorno);
