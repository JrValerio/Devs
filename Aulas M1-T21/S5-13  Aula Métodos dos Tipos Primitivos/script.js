/* Introdução

Em JavaScript, os métodos são funções que realizam operações, tratam dados e muitas vezes simplificam a maneira como obtemos resultados. Eles são uma parte fundamental da linguagem e podem ser usados para executar ações específicas em dados.

Existem vários tipos de métodos nativos disponíveis em JavaScript que podem ajudar no desenvolvimento de projetos. Alguns métodos são usados para manipulação de strings, enquanto outros são usados para trabalhar com números, arrays, objetos entre outros. A escolha do método certo dependerá do tipo de problema que estamos tentando resolver e do tipo de dado que estamos trabalhando.
Métodos de String

O tipo de dado String é um objeto (mais adiante no curso entraremos em mais detalhes), e todo objeto possui métodos, ou seja, funções específicas para fins específicos. Abaixo listaremos alguns métodos de String e explicaremos para o que eles servem.
replace()

Este é um método que retorna uma nova String e é utilizado para substituir um trecho da string por outro. É preciso especificar no primeiro parâmetro a palavra/trecho que quer substituir, e o segundo parâmetro possibilita registrar a string que quer no lugar do primeiro. Perceba que apenas a primeira ocorrência da palavra "cachorro" foi substituída. Exemplo: */

const frase = "Meu cachorro se chama Doug. É um cachorro lindo.";
const fraseModificada = frase.replace("cachorro", "gato");

console.log(fraseModificada);
// Saída: "Meu gato se chama Doug. É um cachorro lindo."

/* replaceAll()

Semelhante ao método mostrado acima, mas diferente por conseguir substituir todos os dados iguais. Repare no exemplo abaixo que todas as palavras "cachorro" serão substituídas: */

const frase = "Meu cachorro se chama Doug. É um cachorro lindo.";
const fraseModificada = frase.replaceAll("cachorro", "gato");

console.log(fraseModificada);
// Saída: "Meu gato se chama Doug. É um gato lindo."

/* startsWith()

Este método determina se uma String começa ou não com os caracteres especificados em seu parâmetro, ou seja, dentro do parêntesis. Exemplo: */

const frase = "É importante tomar água.";
const resultado = frase.startsWith("imp");

console.log(resultado);
// Saída: false

// Esta saída mostrou que a frase não começa com os caracteres "imp", portanto o resultado é false. É possível declarar um segundo parâmetro para este método com o índice que queremos que a contagem comece, vamos ao exemplo:

const frase = "É importante tomar água." ;
const resultado = frase.startsWith("imp", 2);

console.log(resultado);
// Saída: true

/* A saída acima mostra que a partir do índice 2 desta string, os caracteres "imp" são os primeiros a aparecerem, portanto, o resultado é true.
Métodos de Number

Os métodos de Number são métodos que pertencem ao tipo de dados "Number". Esses métodos permitem realizar operações matemáticas com números e executar outras tarefas comuns relacionadas aos números.
toFixed()

O número será arredondado se necessário, e serão adicionados zeros a parte após a vírgula para que o número tenha o tamanho que especificado. O tipo de dado retornado pelo método é uma String. Exemplos de usabilidade: */

const meuNumero = 12345.6789;
const numeroArredondado = meuNumero.toFixed();

console.log(numeroArredondado);
// Saída: 12346
console.log(typeof numeroArredondado);
// Saída: "string"

console.log(meuNumero);
// Saída: 12345.6789

// No exemplo acima é possível observar que a variável meuNumero foi utilizada para o arredondamento e se transformou em uma string representando a parte inteira do numeral, sem partes decimais. Perceba que o número alocado na variável original meuNumero não sofreu nenhuma alteração (esse comportamento também pode ser observado nos métodos de string).

const meuNumero = 12345.6789;
const numeroArredondado = meuNumero.toFixed(1);

console.log(numeroArredondado);
// Saída: 12345.7
console.log(typeof numeroArredondado);
// Saída: "string"

// No exemplo acima podemos observar que houve arredondamento após o ponto. Isso aconteceu porque utilizamos o valor 1 como parâmetro do método toFixed(). O retorno do método continua sendo uma string por padrão.

const meuNumero = 12345.6789;
const numeroArredondado = meuNumero.toFixed(8);

console.log(numeroArredondado);
// Saída: 12345.67890000

// Neste exemplo utilizamos o número 8 como parâmetro do método toFixed(). Por conta disso, foram acrescentados quatro zeros no final da parte fracionária, já que haviam apenas 4 números. 

/* isInteger()

Este método retorna true ou false e determina se um número é inteiro ou possui partes fracionárias. Perceba que para utilizar esse método, precisamos chamá-lo a partir da palavra reservada Number, passando como argumento a nossa variável numero. Exemplo: */

const numero = 9;
console.log(Number.isInteger(numero));
// Saída: true

/* parseInt()

Converte um argumento de String e retorna um inteiro da raiz ou base específica. Exemplo: */

const dado = "4";
const dadoConvertido = parseInt(dado);

console.log(dadoConvertido);
// Saída: 4
console.log(typeof dadoConvertido);
// Saída: 'number'

/* Acima podemos observar que o dado original tem o valor "4", ou seja, é uma String. Com o método parseInt() foi possível retornar o número 4 e obter um dado com o tipo Number.
Conclusão

Métodos são funções que já foram feitas para atingir fins específicos e podem nos ajudar muito em relação à produtividade. Lembre-se de treinar a utilização de métodos, mas também saiba chegar nos resultados esperados sem a utilização deles. Isso te dará bagagem e conhecimento para se aprofundar em questões fundamentais da linguagem.

Importante: Existem muitos métodos, portanto recomendamos que acesse as documentações oficiais como MDN e W3Schools para se aprofundar e conhecer mais sobre este assunto. */