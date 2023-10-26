// Aula: Passando Parâmetros para Funções

// Exemplificando

// Vamos utilizar como exemplo básico a função calculaAreaCirculo. Inicialmente, ela não recebe nenhum parâmetro e apenas calcula a área de um círculo de raio 4.

function calculaAreaCirculo() {
  const pi = 3.14;
  const areaCirculoDeRaioQuatro = pi * 4 * 4;

  return areaCirculoDeRaioQuatro;
}

const result = calculaAreaCirculo();
console.log(result);
// Saída: 50.24

// Podemos tornar essa função dinâmica, permitindo que o valor do raio seja passado como parâmetro dentro dos parênteses após o nome da função. Dessa forma, a função pode ser reutilizada com diferentes valores de raio para calcular a área de círculos diferentes e retornar a área calculada.

// Definimos que a função recebe 1 parametro `raio`
function calculaAreaCirculo(raio) {
  const pi = 3.14;
  const areaCirculo = pi * raio * raio;

  return areaCirculo;
}

// Passamos o valor 5 como argumento
const result1 = calculaAreaCirculo(5);
console.log(result1);
// Saída: 78.5

// Nesse exemplo, a função calculaAreaCirculo recebe um parâmetro raio e retorna o cálculo da área do círculo.

//Múltiplos parâmetros

// Uma função em JavaScript pode receber múltiplos parâmetros simplesmente especificando-os entre os parênteses na declaração da função. Os parâmetros são separados por vírgulas e podem ser de qualquer tipo de dado.

// Por exemplo, uma função que recebe dois parâmetros (base e altura de um triangulo) e retorna a área do triangulo, seguindo a fórmula (base * altura) / 2, pode ser definida da seguinte forma:

// AVISO: Adicionamos dois console.log dentro da função para observar o comportamento dos parâmetros.

// Função que recebe 2 parametros: base e altura
function calculaAreaTriangulo(base, altura) {
  console.log(`base é igual a: ${base}`);
  console.log(`altura é igual a: ${altura}`);

  const areaTriangulo = (base * altura) / 2;

  return areaTriangulo;
}

const result2 = calculaAreaTriangulo(5, 10);
console.log(result2);

// Um ponto importante sobre parâmetros, é que podemos observar que a ordem em que foram declarados na assinatura da função deve ser respeitada ao chamar a função. Se passamos como argumento 10 e 5 ao invés de 5 e 10, nossos parâmetros ficarão invertidos:

// Nomenclaturas

// Em programação, os termos "parâmetros" e "argumentos" são frequentemente usados em conjunto e podem ser confusos para iniciantes. Em resumo:

//     Parâmetros: São variáveis definidas na declaração de uma função que recebem os valores que serão utilizados no processamento da função. Eles são definidos entre os parênteses da declaração de função.

//     Argumentos: São os valores passados para a função quando ela é chamada, correspondendo aos parâmetros definidos na declaração. Eles são passados entre os parênteses da chamada de função.

// Portanto, os parâmetros são as variáveis que uma função espera receber, enquanto os argumentos são os valores concretos passados para a função durante a chamada. Analisando nosso exemplo anterior:

// Parametros: base e altura
function calculaAreaTriangulo(base, altura) {
  console.log(`base é igual a: ${base}`);
  console.log(`altura é igual a: ${altura}`);

  const areaTriangulo = (base * altura) / 2;

  return areaTriangulo;
}

// Argumentos: 5 e 10
const resultado = calculaAreaTriangulo(5, 10);

// Neste caso, base e altura são os parâmetros da função. Quando chamamos a função, precisamos passar dois argumentos que serão atribuídos base e altura respectivamente.

// Já no trecho mais abaixo, 5 e 10 são os argumentos passados para a função. Durante a execução da função, base será igual a 5 e altura será igual a 10, e o resultado da função será o cálculo realizado e retornado por ela.
