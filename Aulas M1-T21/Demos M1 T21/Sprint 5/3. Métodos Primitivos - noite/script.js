function vaca(){
    alert('muuuu');
}
vaca();

const mimosa = vaca;
mimosa();

// MÉTODOS PRIMITIVOS
let texto = 'Escola Kenzie, Academy Brasil, Escola';

// replace
let replace = texto.replace(',', '');
replace = replace.replace('Escola', 'Devs');
console.log(replace);

// replaceAll
let replaceAll = texto.replaceAll(',','');
replaceAll = replaceAll.replaceAll('Escola', 'Devs');
console.log(replaceAll);

// startsWith
console.log(texto.startsWith('Escola')); //true
console.log(texto.startsWith('dev'));    //false

// includes
console.log(texto.includes('Kenzie')); //true
console.log(texto.includes('Thiago')); //false


let numberStr = '1234.15';
let pi = 3.1415926535;

//parseInt
console.log(numberStr);

let integer = parseInt(numberStr);
console.log(integer);

console.log(parseInt(pi));

// parseFloat
console.log(parseFloat(numberStr));

//isInteger
console.log(Number.isInteger(pi));      //false
console.log(Number.isInteger(integer)); //true

//toFixed
console.log(pi.toFixed(2));


// FUNÇÕES POPULARES

function format2Decimals(num){
    let str = `${num}`;
    if(str.length < 2){
        return '0' + str;
    }
    return str;
}

function isPair(n){
    if(n%2 == 0){
        return true;
    }
    return false;
}

console.log(isPair(3)); //false
console.log(isPair(2)); //true
console.log(!isPair(3)); //true

function isMultiple(n, div){
    if(n%div == 0){
        return true;
    }
    return false;
}
console.log(isMultiple(50, 5)); //true
console.log(isMultiple(49, 5)); //false
