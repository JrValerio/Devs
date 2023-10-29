// Funções
function nomeDaFuncao(a, b){ //4  12
    return ((a + b) * b) / a; //(16 * 12) / 4
}

let retorno = nomeDaFuncao(4,12);
// console.log(retorno);



// Escopos


// Escopo global
let global_let = 'global';
const global_const = 'global';
var global_var = 'global';

// Escopo de bloco
{
    let bloco_let = 'bloco';
    const bloco_const = 'bloco';
    var bloco_var = 'bloco';
}

// Escopo de função
function nomeFuncao(){
    let funcao_let = 'funcao';
    const funcao_const = 'funcao';
    var funcao_var = 'funcao';
    console.log(global_var);
}
nomeFuncao();

let nome = 'Thiago';

if(nome == 'Thiago'){
    let senha = '1234';
    if(senha == '1234'){
        let flag = true;
        // console.log(nome);
        // console.log(senha);
        // console.log(flag);
    }
}

function teste(){
    let sobrenome = 'Koman';
    if(sobrenome == 'Koman'){
        let letTeste = 'teste';
        console.log(`O nome é ${nome} e o sobrenome é ${sobrenome} e o teste é ${letTeste}`);
    }
}
teste();

function calculaIMC(altura, peso){
    return peso / altura**2;
}

function classificaIMC(imc){ 
    let resultado = ''
    if(imc < 18.5){          
        resultado = 'abaixo do peso';
    }else if(imc < 25){
        resultado = 'peso normal';
    }else if(imc < 30){    
        resultado = 'com sobrepeso';
    }else{
        resultado = 'obeso'
    }
    return resultado;
}

let imc = calculaIMC(1.80, 180);
let classificacao = classificaIMC(imc);

console.log(`Seu IMC é: ${imc} e você foi classificado ${classificacao}`);


function format2char(str){ //'12'.length = 2
    if(str.length < 2){    //2 < 2 = false
        return '0'+str;   
    }
    return str;            //'12'
}


