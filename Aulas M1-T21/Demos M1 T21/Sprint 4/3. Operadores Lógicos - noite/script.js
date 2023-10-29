// let nome = 'Thiago';

// if(nome == 'Thiago'){
//     alert('Bem vindo!');
// }

/*
Operações matematicas = numero
1 + 1 = 2
2 - 1 = 1

Operações de comparação = boleano
1 == 1 = true
12 <= 13 = true
1500 <= 120 = false

*/

//Operadores lógicos (AND, OR, NOT)

//Tabelas verdade: 

/*
AND (e) -> && 

true  && true  = true
true  && false = false
false && true  = false
false && false = false
*/

/*
OR (ou) -> ||

true  || true  = true
true  || false = true
false || true  = true
false || false = false
*/

const limao = true;
const acucar = true;
const adocante = false;

// if(limao && acucar){
//     alert('Pode preparar a limonada');
// }else{
//     alert('Não pode preparar a limonada');
// }
        
// if(acucar || adocante){
//     alert('Pode preparar o suco')
// }else{
//     alert('Não pode preparar o suco');
// }

// true && (true || false)
// if(limao && (acucar || adocante)){
//     alert('Pode preparar a limonada');
// }else{
//     alert('Não pode preparar a limonada');
// }


// NOT (!)
/*
!true  = false
!false = true
*/

// let estadoDaLuz = false;
// estadoDaLuz = !estadoDaLuz; //!false -> true
// estadoDaLuz = !estadoDaLuz; //!true  -> false
// estadoDaLuz = !estadoDaLuz; //!false -> true
// estadoDaLuz = !estadoDaLuz; //!true  -> false
// estadoDaLuz = !estadoDaLuz; //!false -> true
// estadoDaLuz = !estadoDaLuz; //!true  -> false
// console.log(estadoDaLuz);

/*
let a = 3;
let b = 4;
let soma = 0;

soma = a + b; //3 + 4 = 7
console.log(soma);

soma = soma + 1; //7 + 1 -> 8
console.log(soma);

soma++;    //8 + 1 = 9
console.log(soma);

soma += 3; //9 + 3 = 12
console.log(soma);

soma--; //12 - 1 = 11
console.log(soma);

soma -= 3; //11 - 3 = 8
console.log(soma);

soma*=4; //8 * 4 = 32
console.log(soma);

soma/=2; //32 * 2 = 16
console.log(soma);
*/


// Template String
// let nome = 'Thiago';
// let sobrenome = 'Koman';

// let nomeCompleto = nome + ' ' + sobrenome + '.'; //'Thiago Koman'
// console.log(nomeCompleto);

// let nomeTemplateString = `${nome} ${sobrenome}.`;
// console.log(nomeTemplateString);


const altura = parseFloat(prompt('Digite a sua altura'));
const peso = parseFloat(prompt('Digite a sua peso'));
const idade = parseInt(prompt('Digite a sua idade'));

const imc = peso / (altura**2);


if(idade <= 6){
    if(imc < 14.5){     
        alert(`Seu IMC é ${imc} e você está abaixo do peso`);
    }else if(imc < 16.6){ 
        alert(`Seu IMC é ${imc} e você está no seu peso normal`);
    }else if(imc < 18){ 
        alert(`Seu IMC é ${imc} e você está com sobrepeso`);
    }else /*if(imc >= 30)*/{
        alert(`Seu IMC é ${imc} e você está obeso`);
    }
}else if( idade == 7){
    if(imc < 15){     
        alert(`Seu IMC é ${imc} e você está abaixo do peso`);
    }else if(imc < 17.3){ 
        alert(`Seu IMC é ${imc} e você está no seu peso normal`);
    }else if(imc < 19.1){ 
        alert(`Seu IMC é ${imc} e você está com sobrepeso`);
    }else /*if(imc >= 30)*/{
        alert(`Seu IMC é ${imc} e você está obeso`);
    }
}else{
    if(imc < 18.5){     
        alert(`Seu IMC é ${imc} e você está abaixo do peso`);
    }else if(imc < 25){ 
        alert(`Seu IMC é ${imc} e você está no seu peso normal`);
    }else if(imc < 30){ 
        alert(`Seu IMC é ${imc} e você está com sobrepeso`);
    }else /*if(imc >= 30)*/{
        alert(`Seu IMC é ${imc} e você está obeso`);
    }
}