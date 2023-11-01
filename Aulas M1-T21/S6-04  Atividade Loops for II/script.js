/*
1. Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.

Exemplo: chamada da função: nome_da_sua_funcao()
Saída: 225, 256, 289 ...40000
*/

function quadradoNumerosInteiros () {
    for (quadrado = 15; quadrado <= 200; quadrado++) {
        const num = quadrado * quadrado;
        console.log(num)
    }
}
quadradoNumerosInteiros()

/*
2. Escreva uma função que apresente a soma dos cem primeiros números naturais.
(1+2+3+...+98+99+100).

Exemplo: chamada da função: nome_da_sua_funcao()
Saída: 5.050
*/
let somaPrimeirosNaturais = 0;

function somaNumerosNaturais () {
    for (let soma = 1; soma <= 100; soma++) {
        somaPrimeirosNaturais += soma;
    }
    return somaPrimeirosNaturais;
}
const resultado = somaNumerosNaturais()
console.log(resultado)

/*
3. Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.

Exemplo: chamada da função: nome_da_sua_funcao()
Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196
*/

function divisiveisPorQuatro () {
    for (let divisor = 0; divisor < 200; divisor++) {
        if (divisor % 4 === 0) {
            console.log(divisor)
        }
    }
}
divisiveisPorQuatro()

/*
4. Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.

soma = 50+52+54...+70
média_aritmética = soma / qtd_numeros_pares_no_intervalo⁠⁠ 
Exemplo: chamada da função: funcao_o_nome_da_sua_funcao()
Saída: A soma é 660 e a média é 60.
*/


function calcularSomaEMediaPares () {
    let soma = 0;
    let qtdNumerosParesNoIntervalo = 0;

    for (let somaAritmetica = 50; somaAritmetica <= 70; somaAritmetica++) {
        if (somaAritmetica % 2 === 0) {
            soma += somaAritmetica;
            qtdNumerosParesNoIntervalo++;
        }
    }

    const mediaAritmetica = qtdNumerosParesNoIntervalo > 0 ? soma / qtdNumerosParesNoIntervalo : 0;
    console.log(`A soma é ${soma} e a média é ${mediaAritmetica}`)
}
calcularSomaEMediaPares()

/*
Explicando a lógica para resolver o problema de calcular a soma e a média aritmética dos valores pares no intervalo de 50 a 70:

1. **Definição do Problema**: Primeiro, eu entendi claramente qual era o problema a ser resolvido. O problema pedia a soma e a média aritmética dos valores pares em um intervalo específico, de 50 a 70.

2. **Inicialização das Variáveis**: Em seguida, eu defini as variáveis que seriam necessárias para realizar os cálculos. No problema, sabia que precisaria de variáveis para armazenar a soma dos valores pares e a quantidade de valores pares encontrados.

3. **Iteração pelo Intervalo**: Para encontrar os valores pares no intervalo, criei um loop (um loop `for` no caso do JavaScript) que percorre os números de 50 a 70.

4. **Verificação de Paridade**: Para cada número no intervalo, verifiquei se o número era par usando o operador `%` (módulo). Se o resto da divisão desse número por 2 fosse igual a zero, isso significava que o número era par, e então eu o incluía na soma e incrementava a contagem de números pares.

5. **Cálculo da Média**: Após a iteração, eu tinha a soma dos valores pares e a quantidade de valores pares. Para calcular a média aritmética, dividi a soma pela quantidade de valores pares. No entanto, eu também considerava a possibilidade de que nenhum número par fosse encontrado, para evitar erros, definindo a média como 0 nesse caso.

6. **Exibição do Resultado**: Por fim, eu exibia o resultado na tela, incluindo a soma e a média aritmética.

A lógica geral é projetada para resolver o problema de maneira eficaz, abordando cada etapa do processo de cálculo e considerando cenários em que a quantidade de números pares pode ser zero. Essa abordagem leva em conta os requisitos do problema e garante que o resultado seja correto em todos os casos.
*/

/*A lógica para a expressão `const mediaAritmetica = qtdNumerosParesNoIntervalo > 0 ? soma / qtdNumerosParesNoIntervalo : 0` é construída com base nos requisitos do problema. Vamos analisar a lógica passo a passo:

1. Precisamos calcular a média aritmética dos valores pares no intervalo de 50 a 70.
2. Para calcular a média aritmética, precisamos da soma dos valores pares e da quantidade de valores pares.

Agora, vamos abordar a expressão em si:

- `qtdNumerosParesNoIntervalo > 0`: Esta parte da expressão verifica se há pelo menos um número par no intervalo. Se `qtdNumerosParesNoIntervalo` for maior que zero, isso significa que encontramos pelo menos um número par.

- `soma / qtdNumerosParesNoIntervalo`: Se a condição acima for verdadeira, isso significa que há números pares no intervalo. Nesse caso, podemos calcular a média aritmética, que é a soma dos valores pares dividida pela quantidade de valores pares.

- `: 0`: Se a condição for falsa, isso significa que não encontramos números pares no intervalo (ou seja, `qtdNumerosParesNoIntervalo` é igual a zero). Nesse caso, definimos a média aritmética como 0, porque não há números para calcular uma média.

Essa lógica é uma forma concisa de lidar com casos em que pode ou não haver valores a considerar. Se houver valores, a média é calculada; caso contrário, a média é definida como 0 para evitar erros ou resultados indefinidos. É uma maneira eficaz de lidar com situações em que você não tem certeza se os dados necessários para o cálculo estão presentes.*/