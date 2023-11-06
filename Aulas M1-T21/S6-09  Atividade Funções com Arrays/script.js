// Escreva uma função chamada retornaTodosElementos que não recebe nenhum parâmetro. Sempre que chamada, a função deverá alertar a lista listaDeElementos em tela.

function retornaTodosElementos() {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
  alert(listaDeElementos);
}

// Escreva uma função chamada retornaValorEpecifico. A função deve receber um valor inteiro como parâmetro. Use o valor recebido para acessar a posição na lista e retorne o valor contido na posição.

// Desta forma: ⁠"O valor contido nesta posição é: x".

function retornaValorEspecifico(posicao) {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
  if (posicao >= 0 && posicao < listaDeElementos.length) {
    const valor = listaDeElementos[posicao];
    return `O valor contido nesta posição é: ${valor}`;
  } else {
    return "A posição especificada está fora dos limites da lista.";
  }
}

// const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]⁠

// Escreva uma função chamada retornarTipoElemento. A função deve receber um valor inteiro como parâmetro.

// Use o valor recebido para acessar a posição na lista. Alerte qual o tipo do elemento contido na posição (use o typeof para isso).

// Se for do tipo texto alerte: "O elemento x é um elemento do tipo texto",
// Se for número alerte: "O elemento x é um elemento do tipo número"

function retornarTipoElemento(posicao) {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];

  if (posicao >= 0 && posicao < listaDeElementos.length) {
    const elemento = listaDeElementos[posicao];
    const tipo = typeof elemento;

    if (tipo === "string") {
      alert(`O elemento ${elemento} é um elemnto do tipo texto.`);
    } else if (tipo === "number") {
      alert(`O elemento ${elemento} é um elemento do tipo numero`);
    } else {
      alert(`O elemento ${elemento} é de um tipo não reconhecido.`);
    }
  } else {
    alert(`A posição especificada está fora dos limites da lista.`);
  }
}

// Escreva uma função removeUltimoElementoString. A função não recebe parâmetros.
// Quando chamada, a função deverá remover o último elemento da lista, mas somente se for uma string.

// Caso a remoção seja realizada, retorne: "Elemento deletado com sucesso".
// Caso contrário: "Falha ao remover o elemento da lista".

function removeUltimoElementoString() {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
  if (listaDeElementos.length > 0) {
    const ultimoElemento = listaDeElementos[listaDeElementos.length - 1];

    if (typeof ultimoElemento === "string") {
      listaDeElementos.pop();
      return "Elemento deletado com sucesso";
    } else {
      return "Falha ao remover o elemento da lista";
    }
  }
}

function removeUltimoElementoString() {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
  if (typeof listaDeElementos[listaDeElementos.length - 1] === "string") {
    listaDeElementos.pop();
    return "Elemento deletado com sucesso";
  } else {
    return "Falha ao remover o elemento da lista";
  }
}

/*Escreva uma função chamada consultaPosição. A função deve receber um valor como parâmetro. Identifique na lista qual a posição do elemento.

Caso consiga identificar o elemento na lista: "O valor procurado está na posição: x ".
⁠Caso não: "Valor não encontrado". */

function consultaPosição(valorProcurado) {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];

  for (let i = 0; i < listaDeElementos.length; i++) {
    if (listaDeElementos[i] === valorProcurado) {
      return `O valor procurado está na posição: ${i}`;
    }
  }

  return "Valor não encontrado";
}

function consultaPosicao(valor) {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
  let posicao = listaDeElementos.indexOf(valor);
  if (posicao !== -1) {
    return "O valor procurado está na posição: " + posicao;
  } else {
    return "Valor não encontrado";
  }
}

/*Escreva uma função chamada removerElementoEspecifico. A função deve receber um valor como parâmetro.

O valor recebido representa o elemento a ser deletado. ⁠Busque a posição do elemento na lista (use o indexOf()). Use a posição encontrada para realizar a remoção.

Caso a remoção seja realizada, retorne: "Elemento x deletado com sucesso".
Caso contrário, retorne: "Elemento não encontrado". */

function removerElementoEspecifico(valor) {
  const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];
  const posicao = listaDeElementos.indexOf(valor);

  if (posicao !== -1) {
    listaDeElementos.splice(posicao, 1);
    return `Elemento ${valor} deletado com sucesso`;
  } else {
    return "Elemento não encontrado";
  }
}



/*Escreva uma função chamada inserirNaPosicaoCorreta. A função pode receber um valor de 0 a 10 ou uma string.

Caso o valor recebido seja do tipo número, a função deve conseguir inserir o elemento na primeira posição da lista, caso seja um texto a inserção deve ser feita na última posição.
Retorne: "Lista atualizada com sucesso". */


function inserirNaPosicaoCorreta(valor) {
    if (typeof valor === "number") {
        listaDeElementos.unshift(valor);
    } else if (typeof valor === "string") {
        listaDeElementos.push(valor);
    }
    return "Lista atualizada com sucesso";
}

const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"];

const valorParaInserir = 25; 
const resultado = inserirNaPosicaoCorreta(valorParaInserir);


console.log(listaDeElementos);