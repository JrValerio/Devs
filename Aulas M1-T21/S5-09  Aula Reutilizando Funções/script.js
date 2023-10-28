// Variáveis

// É possível utilizar uma função como valor de uma variável. Exemplo:

function soma(a, b) {
    return a + b;
  }
  
  const minhaVariavel = soma;
  
  console.log(minhaVariavel(4, 2));
  // Saída: 6

// Funções e Estruturas Condicionais

// Também é comum encontrar funções sendo reutilizadas em estruturas condicionais. Exemplo:

function par(n) {
    if (n % 2 === 0) {
      return true;
    }
    return false;
  }
  
  console.log(par(2));
  // Saída: true

  // A função acima recebeu um parâmetro, e quando foi chamada, avaliou se este elemento é par ou não. Se for, retornará true, caso contrário, retornará false.

  // Agora reutilizaremos esta função par em um contexto diferente. Pense no seguinte cenário: você possui uma loja de produtos e precisa etiquetar seu estoque. Se o tamanho do nome dos produtos for par, você deverá utilizar a cor verde, se for ímpar, deverá utilizar a cor vermelha. Podemos reutilizar a função par da seguinte maneira:

  function nomesPares(etiqueta) {
    if (par(etiqueta.length)) {
      return "Verde";
    }
    return "Vermelha";
  }
  
  console.log(nomesPares("Sabonete"));
  // Saída: "Verde"

  // Importante:
  // Nota-se que no exemplo utilizamos a propriedade length, essa propriedade é utilizada para obter o tamanho ou comprimento de uma string, objeto ou array.