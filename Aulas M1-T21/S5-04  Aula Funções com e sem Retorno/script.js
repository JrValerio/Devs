// Funções sem Retorno

// Uma função sem retorno é uma função que não retorna um valor. Em vez disso, ela executa um conjunto de instruções e pode ter um efeito colateral, como exibir informações na tela ou alterar variáveis globais. Por exemplo:

// arquivo script.js
function exibirMensagem() {
  console.log("Olá, mundo!");
}

exibirMensagem();
// Saída: "Olá, mundo!"

//Nesse exemplo, ao executar o script, a função exibirMensagem não tem um valor de retorno, mas exibe a mensagem "Olá, mundo!" no console.

// Funções com Retorno

//Em JavaScript, a palavra-chave return é usada para indicar o valor que uma função deve retornar quando é chamada. O return é um recurso fundamental em funções, pois permite que elas executem uma determinada tarefa e retornem um resultado para ser usado em outro lugar do código. Quando uma função é chamada, o código dentro dela é executado e, quando o return é encontrado, a função é encerrada e o valor especificado é retornado como resultado da chamada da função.

// Vamos utilizar como exemplo o cálculo da área de um círculo de raio 4, seguindo a fórmula:

// arquivo script.js
function calculaAreaCirculo() {
  const pi = 3.14;
  const areaCirculoDeRaioQuatro = pi * 4 * 4;

  return areaCirculoDeRaioQuatro;
}

calculaAreaCirculo();

// Executando o código acima, nada nos é retornado no terminal:
// A rotina da função aconteceu normalmente, porém não estamos armazenando o resultado do retorno dessa função para mostrar no console. Vamos ajustar esse ponto:

// arquivo script.js
function calculaAreaCirculo() {
    const pi = 3.14;
    const areaCirculoDeRaioQuatro = pi * 4 * 4;
  
    return areaCirculoDeRaioQuatro;
  }
  
  const resultado = calculaAreaCirculo();
  console.log(resultado);
  // Saída: 50.24

// Mas, e se tentarmos armazenar e mostrar na tela o retorno de uma função que não possui retorno definido?

function umaFuncaoSemRetorno() {
    console.log("Olá, eu sou uma função sem retorno T_T");
  }
  
  const result = umaFuncaoSemRetorno();
  console.log(result);

// Funções sem retorno em JavaScript retornam undefined porque é o valor padrão retornado quando uma função não especifica explicitamente um valor de retorno. Nesse exemplo, a função umFuncaoSemRetorno não tem um valor de retorno especificado, apenas exibe uma mensagem ('Olá, eu sou uma função sem retorno T_T') no console. Quando a função é chamada e atribuída à variável resultado, o valor retornado é undefined, exibido no console.

// No entanto, é importante observar que a palavra-chave undefined em JavaScript não significa um erro ou um valor inválido. Em vez disso, ela indica a ausência de um valor. Portanto, quando uma função não tem um valor de retorno específico, o valor padrão undefined é retornado para indicar que a função foi executada, mas não retornou nenhum valor útil.