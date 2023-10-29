// function nomeFuncao(){
//     alert('Executou a função');
// }

// nomeFuncao();


// function soma(){
//     const a = parseFloat(prompt('Digite um numero')); 
//     const b = parseFloat(prompt('Digite outro numero')); 
//     const soma = a+b;
//     alert(soma);
// }
// // soma()
// soma();
// soma();

// function formataData(str){
//     if(str.length < 2){
//         return '0'+str;
//     }else{
//         return str;
//     }
// }

// // DD/MM/AAAA
// let dia = prompt('Digite o dia'); 
// let mes = prompt('Digite o mes');
// let ano = prompt('Digite o ano');

// // if(dia.length < 2){ 
//     //     dia = '0'+dia;  
// // }
// dia = formataData(dia);

// // if(mes.length < 2){ 
// //     mes = '0'+mes;  
// // }
// mes = formataData(mes);

// let dataFormatada = `${dia}/${mes}/${ano}`;

// alert(dataFormatada);



function calculaIMC(peso, altura){
    let imc = peso/(altura**2);
    return imc;
}

function classificaIMC(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    }else if(imc < 25){
        return 'Peso ideal';
    }else if(imc < 30){
        return 'Sobrepeso';
    }else{
        return 'Obeso';
    }
}

let pessoa1 = calculaIMC(85, 1.80);
let classificacao = classificaIMC(imc);
console.log(pessoa1, classificacao);

console.log(classificaIMC(calculaIMC(95, 1.70)));

