/*
1. Escrever uma função chamada fibonacciNumbers(). A função quando chamada deve apresentar os valores da sequência numérica de Fibonacci até o décimo quinto termo.
A sequência de Fibonacci é formada por:

⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.

Obtendo-se o termo seguinte a partir da soma do termo atual com o termo anterior, e assim sucessivamente.

Utilize para este exercício as variáveis

ATUAL -> Representa o valor atual do contador do laço.
ANTERIOR -> Representa o valor anterior do contador.
PRÓXIMO -> Representa o valor seguinte do contador. 
*/

/*
A lógica geral para gerar a sequência de Fibonacci até o décimo quinto termo pode ser descrita da seguinte forma:

1. Inicialize três variáveis: `ANTERIOR` com o valor 0, `ATUAL` com o valor 1 e uma variável `termo` para contar os termos gerados até o décimo quinto.

2. Use um loop para gerar os termos da sequência até atingir o décimo quinto termo. Dentro do loop, faça o seguinte:

   a. Imprima o valor de `ATUAL`, que é o termo atual da sequência.

   b. Calcule o próximo termo, que é a soma de `ANTERIOR` e `ATUAL`. Armazene esse valor em `PRÓXIMO`.

   c. Atualize as variáveis: `ANTERIOR` deve se tornar o valor de `ATUAL`, e `ATUAL` deve se tornar o valor de `PRÓXIMO`.

   d. Incremente a variável `termo` para rastrear quantos termos já foram gerados.

3. Repita o passo 2 até que `termo` seja igual a 15 (indicando que os primeiros 15 termos da sequência de Fibonacci foram gerados).

Essa lógica irá gerar a sequência de Fibonacci até o décimo quinto termo e imprimir cada termo à medida que eles são calculados. Certifique-se de que a lógica seja implementada em uma função chamada `fibonacciNumbers()`, como especificado no enunciado, para que você possa chamá-la sempre que precisar gerar a sequência.

A sequência de Fibonacci é uma sequência numérica que começa com 0 e 1 e, em seguida, cada número subsequente na sequência é a soma dos dois números anteriores. Portanto, os primeiros termos da sequência de Fibonacci são:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ...

Aqui está como a sequência é gerada:

1. O primeiro termo é 0.
2. O segundo termo é 1.
3. O terceiro termo é a soma dos dois termos anteriores (0 + 1), resultando em 1.
4. O quarto termo é a soma dos dois termos anteriores (1 + 1), resultando em 2.
5. O quinto termo é a soma dos dois termos anteriores (1 + 2), resultando em 3.
6. E assim por diante, a sequência continua indefinidamente, onde cada termo é a soma dos dois termos anteriores.

A sequência de Fibonacci tem várias aplicações em matemática, ciência, natureza e arte, e é uma das sequências mais famosas da matemática. Ela é frequentemente representada por "F(n)", onde "n" é a posição do termo na sequência. Por exemplo, F(0) é 0, F(1) é 1, F(2) é 1, F(3) é 2, e assim por diante.
*/

// valores da sequência de Fibonacci até o décimo quinto termo:


function fibonacciNumbers() {
    let atual = 0;
    let anterior = 1;

    for (let i = 1; i <= 15; i++) {
        if (i === 1) {
            console.log(atual);
        } else if (i === 2) {
            console.log(anterior);
        } else {
            const próximo = atual + anterior;
            console.log(próximo);
            anterior = atual;
            atual = próximo;
        }
    }
}

fibonacciNumbers();

// Nesta função:

// - Iniciamos com `atual` igual a 0 e `anterior` igual a 1, pois os dois primeiros termos da sequência de Fibonacci são 0 e 1.
// - Usamos um loop `for` para gerar os termos até o décimo quinto termo.
// - Se `i` for igual a 1, imprimimos `atual` (que é 0).
// - Se `i` for igual a 2, imprimimos `anterior` (que é 1).
// - Caso contrário, calculamos `próximo` como a soma de `atual` e `anterior`, imprimimos `próximo` e, em seguida, atualizamos `anterior` e `atual` para os próximos cálculos.
// - Finalmente, chamamos a função `fibonacciNumbers()` para apresentar os valores da sequência de Fibonacci até o décimo quinto termo.



/*
2. Escrever um programa que calcule e apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:

Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior.

Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.

Resultado esperado: 18.446.744.073.709.552.000 grãos no tabuleiro.

Pense no que deve ser feito antes de começar a desenvolver seu código. Planeje-se e entenda o que se pede. É mais difícil quando inicia sem planejar a solução.

A lógica geral para calcular o somatório do número de grãos de trigo em um tabuleiro de xadrez seguindo a regra do problema pode ser descrita da seguinte maneira:

1. Inicialize uma variável chamada `totalGrãos` com o valor 1, que representa o grão no primeiro quadro.

2. Inicialize um loop que percorrerá os 63 quadros restantes, uma vez que o primeiro quadro já possui um grão.

3. Dentro do loop:

   a. Multiplique o valor atual de `totalGrãos` por 2. Isso representa o dobro da quantidade de grãos em relação ao quadro anterior.

   b. Some o valor resultante à variável `totalGrãos` para acumular o número total de grãos até o momento.

4. Continue repetindo o passo 3 para cada um dos 63 quadros restantes.

5. Após a conclusão do loop, a variável `totalGrãos` conterá o somatório de todos os grãos de trigo no tabuleiro de xadrez.

A quantidade esperada de grãos no tabuleiro de xadrez, de acordo com a regra do problema, é 18.446.744.073.709.552.000 grãos, que é um número exponencialmente grande. Certifique-se de usar uma linguagem de programação ou biblioteca que possa lidar com números inteiros grandes para calcular e armazenar esse valor.
*/

/*
Lógica expressa em pseudocódigo:


let totalGrãos = 1;  // Inicialmente, temos 1 grão no primeiro quadro

for (let quadro = 2; quadro <= 64; quadro++) {
    totalGrãos = totalGrãos * 2;  // Dobre a quantidade de grãos em relação ao quadro anterior
}

// totalGrãos agora contém a quantidade total de grãos no tabuleiro de xadrez

// Exiba o resultado
console.log("O total de grãos no tabuleiro de xadrez é: " + totalGrãos);
```

Este código JavaScript segue a mesma lógica do pseudocódigo. Ele inicia com 1 grão no primeiro quadro e usa um loop `for` para calcular a quantidade total de grãos no tabuleiro de xadrez, duplicando a quantidade de grãos a cada quadro. Por fim, ele exibe o resultado usando `console.log()`. Certifique-se de executar esse código em um ambiente JavaScript para obter a resposta correta.
*/


let totalGrãos = 1;  // Inicialmente, temos 1 grão no primeiro quadro
let grãosNesteQuadro = 1;

for (let quadro = 2; quadro <= 64; quadro++) {
    grãosNesteQuadro = grãosNesteQuadro * 2;  // Dobre a quantidade de grãos em relação ao quadro anterior
    totalGrãos = totalGrãos + grãosNesteQuadro;  // Adicione os grãos deste quadro ao total
}

// totalGrãos agora contém a quantidade total de grãos no tabuleiro de xadrez

// Exiba o resultado
console.log("O total de grãos no tabuleiro de xadrez é: " + totalGrãos);


// Neste código:

// - Começamos com `totalGrãos` igual a 1, representando o grão no primeiro quadro. Também usamos `grãosNesteQuadro` para acompanhar os grãos em cada quadro.
// - Usamos um loop `for` de 2 a 64 para calcular a quantidade de grãos em cada quadro. Para cada quadro subsequente, duplicamos a quantidade de grãos do quadro anterior e a adicionamos a `totalGrãos`.
// - Após o loop, `totalGrãos` conterá o somatório de todos os grãos no tabuleiro de xadrez.
// - Finalmente, exibimos o resultado usando `console.log()`. Certifique-se de executar esse código em um ambiente JavaScript para obter o resultado esperado (18.446.744.073.709.552.000 grãos).