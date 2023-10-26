// Função é uma forma de organizar determinado algoritmo em um bloco de código fechado. As funções permitem com que o código seja separado em partes menores, fazendo com que esse código possa ser usado diversas vezes apenas referenciando a função desejada, sem precisar reescrever todo o código.

// Por exemplo, digamos que seja necessário fazer um algoritmo que execute um console.log juntando o nome, sobrenome e empresa que determinada pessoa trabalha, e que esse algoritmo vai ser usado em diversos lugares do nosso projeto.

const nome = "Lucas";
const sobrenome = "Jozefovicz";
const empresa = "Kenzie Academy Brasil";

console.log(`O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`);
// Saída: O nome completo é: Lucas Jozefovicz
//        Trabalha na Kenzie Academy Brasil

console.log(`O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`);
// Saída: O nome completo é: Lucas Jozefovicz
//        Trabalha na Kenzie Academy Brasil

console.log(`O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`);
// Saída: O nome completo é: Lucas Jozefovicz
//        Trabalha na Kenzie Academy Brasil

console.log(`O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`);
// Saída: O nome completo é: Lucas Jozefovicz
//        Trabalha na Kenzie Academy Brasil

// Trivia: Em programação, "\n" é um caractere especial que representa uma quebra de linha. É comumente usado em linguagens de programação para indicar o final de uma linha de texto.

// No código acima, uma vez que é necessário mostrar a string formatada em diversos lugares do código, é preciso sempre escrever um console.log passando as variáveis declaradas em uma template string. Podemos melhorar isso e organizar o código usando uma função que vai formatar a string e executar o console.log.

// Declaração da função que imprime nome completo e empresa
function formataNomeEmpresa() {
  const nome = "Lucas";
  const sobrenome = "Jozefovicz";
  const empresa = "Kenzie Academy Brasil";

  console.log(
    `O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`
  );
}

// Execução da função declarada acima
formataNomeEmpresa();
formataNomeEmpresa();
formataNomeEmpresa();
formataNomeEmpresa();
// Será mostrado 4 vezes na tela:
// O nome completo é: Lucas Jozefovicz
// Trabalha na Kenzie Academy Brasil

// No código acima, foi criada uma função chamada formataNomeEmpresa, e a partir disso, sempre que for preciso mostrar a string de nome e empresa formatada, basta executar a função passando o nome dela e parenteses no final. Esse código tem o mesmo resultado do primeiro código, porém, como a lógica de mostrar o nome e a empresa formatados foi colocado em uma função, o código ficou muito mais organizado, e ainda permite que seja mostrada a string formatada apenas executando a função, evitando assim repetição de código.
