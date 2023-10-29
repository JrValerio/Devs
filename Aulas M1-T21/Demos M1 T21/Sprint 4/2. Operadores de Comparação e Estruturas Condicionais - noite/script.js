let variavel_1 = "Kenzie";
const variavel_2 = "Academy";

console.log('Importação deu certo');

// ALERT e PROMPT
alert('Vamos realizar um calculo de soma:');

const a = parseInt(prompt('Digite um número'));
const b = parseInt(prompt('Digite outro número'));

let soma = a+b;

alert('O resultado do calculo foi: '+ soma);

// Operadores de comparação
/*
 ==  - Igual
 === - Estritamente igual
 !=  - Diferente
 !== - Estritamente diferente
 >   - Maior
 >=  - Maior ou igual
 <   - Menor
 <=  - Menor igual
*/

// Condicionais
/*
if       | se
else     | caso contrário
else if  | caso contrário, se
*/

const nome = prompt('Digite seu nome');

if(nome == 'Thiago'){
    alert('Seja bem vindo Thiago');
}else if(nome == 'Eduardo'){
    alert('Seja bem vindo Eduardo');
}else{
    alert('Usuário inválido');
}


// Calculo do IMC
const altura = prompt('Digite sua altura');
const peso = prompt('Digite seu peso');

// IMC = peso(Kg) / altura(m)²

const imc = peso / (altura * altura);

alert('Seu IMC é: '+imc);

