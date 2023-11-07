// 1. Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let valor = prompt("Digite um valor:");

while (valor < 0 || valor > 10) {
    alert(`Valor Inválido!`)
    valor = prompt("Digite um valor:");
    
}
alert(`Você acertou!`)


// 2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

// let usuario = prompt("Cadastre o seu usuário:")
// let senha = prompt("Cadastre sua senha:")

// while (senha == usuario) {
//     alert(`A senha está erra, favor digite novamente`)
//     senha = prompt("Cadastre sua senha:")
// }


// 3. Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.

// let valor = parseInt(prompt("Digite um número inteiro"));
// let soma = 0;
// let quantidade = 0;

// while (valor <= 10 && valor >= 0) {
//     soma += valor;
//     quantidade++;
//     valor = parseInt(prompt("Digite um número inteiro"));
// }

// alert(`A soma é: ${soma}`);
// alert(`A média é: ${soma / quantidade}`);


/* 4. Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.

Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado".

Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".

Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.

Quando o valor x for inserido alerte o número de votos que cada candidato teve. */

// let candidatoA = 0;
// let candidatoB = 0;
// let candidatoC = 0;

// let voto = prompt("Qual o seu voto?");
// while (voto != "x") {
//     if (voto == "A"){
//         candidatoA++;
//         alert("Voto registrado com sucesso");
//     } else if (voto == "B") {
//         candidatoB++;
//         alert("Voto registrado com sucesso");
//     } else if (voto == "C") {
//         candidatoC++;
//         alert("Voto registrado com sucesso");
//     } else {
//         alert("Candidato não encontrado.")
//     }

//     voto = prompt("Qual o seu voto?");

// }

// alert(`Canditado A teve ${candidatoA} votos. \n Canditado B teve ${candidatoB} votos.\n Canditado C teve ${candidatoC} votos.`);