/* 
1. Escreva uma função chamada renderUpToTwenty. Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.

Exemplo de
chamada da função: renderUpToTwenty()
saída: 0,1,2,3,4,5...20
*/

function renderUpToTwenty () {
    for (let i = 0; i <= 20; i++) {
        console.log(i)
    }
}

renderUpToTwenty()

/* 
2. Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.

Exemplo de Chamada da função: ⁠tenInTenToAHundred()

Saída: 10,20,30,40,50... 100
*/

function tenInTenToAHundred () {
    for (let a = 0; a <= 100; a += 10)
    console.log(a)
}

tenInTenToAHundred()

/* 
3. Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.

Exemplo de Chamada da função: oddUpToTwenty()

Saída: 1,3,5,7,9 ...19
*/

function oddUpToTwenty () {
    for (let impar = 0; impar <= 20; impar++)
        if (impar % 2 !== 0) {
            console.log(impar)
        }
}

oddUpToTwenty()

/*
4. Escreva uma função chamada evenUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem pares.

Exemplo de Chamada da função: evenUpToTwenty()

Saída: 0,2,4,6,8 ...20
*/

function evenUpToTwenty () {
    for (let par = 0; par <= 20; par++)
        if (par % 2 === 0) {
            console.log(par)
        }
}
evenUpToTwenty()

/*
5. Escreva uma função chamada fromNegativeToPositive(). Quando a função for chamada, apresente os valores de -10 a 0.

Exemplo de Chamada da função: fromNegativeToPositive()

Saída: -10,-9,-8,-7 ...0
*/

function fromNegativeToPositive () {
    for (let negative = -10; negative <= 0; negative++)
    console.log(negative)
}
fromNegativeToPositive()

/*
6. Escreva uma função chamada inDescendingDirection. Quando a função for chamada, apresente valores de 10 a 0 no console.

Exemplo de Chamada da função: inDescendingDirection()

Saída: 10,9,8,7...0
*/

function inDescendingDirection () {
    for (let b = 10; b >= 0; b--)
    console.log(b)
}
inDescendingDirection()


/*
7. Escreva uma função chamada toSquare(). Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.

Exemplo de Chamada da função: toSquare()

Saída: 1,4,9,16...100
*/

function toSquare () {
    for (let quadrado = 1; quadrado <= 10; quadrado++) {
        const square = quadrado * quadrado;
        console.log(square);
    }
}
toSquare()
