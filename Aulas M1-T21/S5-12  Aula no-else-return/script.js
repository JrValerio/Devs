/* Aula: no-else-return
Introdução

O no-else-return é uma técnica usada na programação que tem como objetivo tornar o código mais legível, permitindo a eliminação de else desnecessários em nossos projetos.
Contextualização

Quando se trata de uma função em programação, o comando return tem a finalidade de retornar um resultado para o contexto em que foi chamado. Um exemplo pode ser visto no seguinte código: 
*/

function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(2));
// Saída: true

// Nesse trecho de código, temos uma função que verifica se o número dois é positivo.

// Além de retornar um valor, o comando return finaliza a função, impedindo a execução de qualquer código subsequente. Analisando um pouco a função anterior:

function isPositive(number) {
  if (number > 0) {
    return true;
    console.log("Esse console nunca será mostrado");
  } else {
    return false;
    console.log("Esse console nunca será mostrado");
  }

  console.log("Esse console nunca será mostrado");
}

console.log(isPositive(2));
// Saída: true

/*
Observamos que a inserção de comandos console.log não terá efeito algum, pois o return acima deles já encerrou a função. É importante notar que, sempre que houver um comando return, o código subsequente dentro do mesmo escopo de bloco ficará com um tom mais escuro, sinalizando que ele nunca será executado.

E é aqui que a técnica no-else-return entra em ação. Como o comando return finaliza qualquer função, caso a condição seja satisfeita, a função será finalizada. Portanto, podemos refatorar a função anterior para um código mais simples e conciso, como mostrado abaixo:
*/

function isPositive(number) {
    if (number > 0) {
      return true;
    } 
  
    return false;
  }
  
  console.log(isPositive(2));
  // Saída: true

/*
Com essa mudança, a função agora irá executar somente a linha que contém o comando return false; caso a condição no if não seja satisfeita. Essa é a mesma funcionalidade que o comando else oferecia.
Conclusão

Essa técnica pode ser aplicada em vários contextos, mas não significa que o comando else não deve ser usado. Há diferentes contextos e momentos apropriados para o uso de cada um. É importante sempre lembrar da legibilidade do seu código e escolher a opção que torne o código mais fácil de entender e manter.
*/