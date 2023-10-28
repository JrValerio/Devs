// Escopo Global
// Quando declaramos uma variável no escopo global, ela pode ser acessada em qualquer lugar do código, incluindo dentro de outras funções.

// variável sendo declarada no escopo global
let minhaVariavel = 'Estou no escopo global'

function primeiraFuncao(){
  console.log(minhaVariavel)
  function segundaFuncao(){
    console.log(minhaVariavel)
  }
  segundaFuncao()// Saída: Estou no escopo global
}

primeiraFuncao() // Saída: Estou no escopo global

// Observe que no código acima a segundaFuncao conseguiu acessar a minhaVariavel, pois ela foi declarada no escopo global antes da declaração das funções, ficando acessível para todas as partes do nosso código. 

// Escopo de Função

// Quando é declarada uma variável ou função dentro de outra função, temos acesso as esses recursos apenas dentro da função em que foram declarados, ou seja, apenas no escopo da função.

function minhaFuncao() {
    // variável sendo declarada no escopo da minhaFuncao
    let minhaVariavel = 'Estou no escopo da minhaFuncao'
    function outraFuncao() {
      console.log(minhaVariavel)
    }
    outraFuncao() // Saída: Estou no escopo da minhaFuncao
    console.log(minhaVariavel)
  }
  
  minhaFuncao() 
  // Saída: Estou no escopo da minhaFuncao
  console.log(minhaVariavel) 
  // Saída ReferenceError: minhaVariavel is not defined

  // No trecho de código acima o retorno do último console.log é um erro, porque a minhaVariavel está sendo declarada dentro da minhaFuncao, sendo assim, a variável está no escopo da função, não podendo ser acessada de outros lugares do código. A outraFuncao consegue acessar a minhaVariavel, pois a função foi declarada dentro da minhaFuncao, tendo acesso ao escopo dela.

// Escopo de Bloco

// O escopo de bloco é bem parecido com o escopo de função, porém ele é aplicável aos blocos de código {}. Quando declaramos uma variável usando os operadores let e const dentro de um bloco de código, só é possível acessar essa variável de dentro desse bloco.

const idade = 18
const temCNH = true

if (idade >= 18) {
  // variavel sendo declarada no escopo do bloco if
  let podeDirigir = true
  if (temCNH) {
    // a variavel pode ser acessada de dentro desse bloco de if
    // isso acontece porque esse bloco está dentro do escopo
    console.log(podeDirigir) // Saída: true
  }
}

console.log(podeDirigir)
// Saída: ReferenceError: podeDirigir is not defined

// No código acima, como a variável podeDirigir foi declarada dentro do bloco if, não é possível acessá-la fora do bloco, portanto, a saída do último console.log é um erro. Por outro lado, é possível acessar a variável dentro do bloco if(temCNH), isso acontece porque ele está dentro do escopo do if(idade >= 18) que é o mesmo da variável podeDirigir.

// Conclusão

// Podemos concluir que entender os escopos em JavaScript é essencial para escrever código eficiente e evitar conflitos de variáveis e funções. Um exemplo prático para ilustrar isso é o de uma empresa com vários departamentos. Cada departamento é um escopo diferente, com suas próprias variáveis e funções, e isso permite que cada departamento opere de forma independente sem interferir no trabalho dos outros.

// Dentro de cada departamento, podemos ter escopos de função, como funções específicas para lidar com determinados aspectos do trabalho. E dentro dessas funções, podemos ter escopos de bloco, como blocos de código que lidam com operações específicas. Cada escopo é como uma caixa dentro de outra caixa, com suas próprias regras e limitações.

// Portanto, ao escrever código em JavaScript, é importante considerar cuidadosamente em que escopo cada variável e função deve ser definida, para garantir que elas sejam acessíveis apenas onde necessário e evitar conflitos com outras partes do código.