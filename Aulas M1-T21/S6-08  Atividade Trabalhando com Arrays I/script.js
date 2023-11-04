// 1. Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado.

function adicionarStringAoArray(string, array) {
  if (typeof string === "string" && string.length >= 5) {
    array.push(string);
  } else {
    console.log("A string não atende aos critérios.");
  }
  return array;
}

const minhaArray = [];
const minhaString = "Hello, World";

const novoArray = adicionarStringAoArray(minhaString, minhaArray);
console.log(novoArray)

// 2. Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:
// Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado"

function acessarArrayPorIndice(indice) {
  let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];

  if (indice >= 0 && indice < arr.length) {
    return arr[indice];
  } else {
    alert("Valor não encontrado");
  }
}

console.log(acessarArrayPorIndice(0))


// 3. Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro.
// Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.

// Caso seja par retorne: "O valor encontrado nesta posição é par",
// Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".

function verificarParOuImpar(indice) {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (indice >= 0 && indice < numeros.length) {
    const valor = numeros[indice];

    if (valor % 2 === 0) {
      return "O valor encontrado nesta posição é par";
    } else {
      return "O valor encontrado nesta posição é ímpar";
    }
  } else {
    return "Índice fora dos limites do array";
  }
}

console.log(verificarParOuImpar(6))

//4. Dado o array de nomes: ⁠let nomes = ["Pedro", "Rafael", "José"]⁠

//Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome.

//Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido.
//Use este formato: "O nome x é o maior da lista";

function encontrarMaiorNome(nomes) {
  if (nomes.length === 1) {
    return `O nome ${nomes[0]} é o único da lista`;
  }

  let maiorNome = nomes[0];

  for (let i = 1; i < nomes.length; i++) {
    if (nomes[i].length > maiorNome.length) {
      maiorNome = nomes[i];
    }
  }

  return `O nome ${maiorNome} é o maior da lista`;
}

let nomes = ["Pedro", "Rafael", "José"];

console.log(encontrarMaiorNome(nomes))

// Dado o array de números como exemplo: ⁠numeros = [1,4,6,9,11,8]

// Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.
// Use a variável para testar se o valor da soma é um múltiplo de 2.

// Se sim, retorne: "A soma é um múltiplo de 2".
// Caso contrário: "A soma não é um múltiplo de 2"

function somaMultiploDeDois(numeros) {
  if (numeros.length < 2) {
    return "A lista deve conter pelo menos 2 números";
  }
  //  const soma = numeros[numeros.length -1] + numeros[numeros.length -2];
  const soma = numeros[4] + numeros[5];
  if (soma % 2 == 0) {
    return "A soma é um múltiplo de 2";
  } else {
    return "A soma não é um múltiplo de 2";
  }
}

const numeros = [1, 4, 6, 9, 11, 8];

console.log(somaMultiploDeDois(numeros))

// Dado o array de nomes como exemplo: ⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠

// Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.

// Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.

// Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.

// Lembre-se de normalizar os dados antes de testar.

// Caso os valores sejam iguais, retorne: "Acertei".
// Caso não sejam, retorne: "Não é quem eu pensava"

function verificarNomeNaPosicao(names, nomeParametro, posicao) {
  if (posicao >= 0 && posicao < names.length) {
    const nomeNaPosicao = names[posicao];

    if (nomeNaPosicao === nomeParametro) {
      return "Acertei";
    } else {
      return "Não é quem eu pensava";
    }
  } else {
    return "Posição fora dos limites do array";
  }
}

let names = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];
let nomeParametro = "josé";
let posicao = 2;

console.log(verificarNomeNaPosicao(names, nomeParametro, posicao))

// Dado dois arrays numéricos como exemplo.
// ⁠let numeros = [1,2,3,4,5,6,10,7]
// ⁠let outrosNumeros = [5,7,9,4,2,3,9]
// Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.
// Após identificar o maior array, retorne o último elemento do array.
// Use este formato: "A maior lista é a lista cujo último número é: x"

function maiorLista (lista1, lista2) {
    if (lista1.length === 1 && lista2.length === 1) {
        return `Ambas as listas têm apenas um numero: ${lista1[0]} `;
    } else if (lista1.length === 1) {
        return `A primeira lista têm apenas um número: ${lista1[0]}`;
    } else if (lista2.length === 1) {
        return `A segunda lista têm apenas um número: ${lista2[0]}`;
    }
    
    const ultimaPosicaoLista1 = lista1[lista1.length -1]
    const ultimaPosicaoLista2 = lista2[lista2.length -1]
    
    if (lista1.length > lista2.length) {
        return `A maior lista é a primeira lista cujo último número é: ${ultimaPosicaoLista1}`;
    } else if (lista2.length > lista1.length) {
        return `A maior lista é a segunda lista cujo último número é: ${ultimaPosicaoLista2}`;
    } else {
        return `As duas listas têm o mesmo tamanho e seus últimos números são: ${ultimaPosicaoLista1} e ${ultimaPosicaoLista2}`;
    }
    
}
const numero = [1,2,3,4,5,6,10,7];
const outrosNumeros = [5,7,9,4,2,3,9];
console.log(maiorLista(numero, outrosNumeros)) 











