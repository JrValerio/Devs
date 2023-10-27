// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

function retornarPouN(numero) {
  if (numero >= 0) {
    console.log("P");
  } else {
    console.log("N");
  }
}

// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function quantidade(digitos) {
  return digitos.toString().length;
}
console.log(quantidade(2544836));

//  Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo".

function soma(a, b) {
  if (a > b) {
    console.log(a + b);
  } else {
    console.log("O primeiro número não é maior que o segundo");
  }
}

// Desenvolva uma função com 2 parâmetros.
// O primeiro deve se chamar palavra, e o
// segundo deve se chamar letra.

// Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true.

// Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

function falseOrTrue(palavra, letra) {
  if (palavra[0] == letra) {
    return true;
  } else {
    return false;
  }
}

// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta.

// Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23,
// retorne "O /pergunta está em horário de funcionamento."

// Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function funcionamento(horaAtendimento) {
  if (horaAtendimento >= 11 && horaAtendimento <= 23) {
    return "O /pergunta está em horário de funcionamento.";
  } else {
    return "O /pergunta não está em horário de funcionamento.";
  }
}

console.log(funcionamento(15));
