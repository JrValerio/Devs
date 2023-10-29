// ***********************************Revisão return e console.log() dentro de funções***************

// let nome1 = "Alex"

// function greetings(nome) {
    
//     let mensagem = `Olá ${nome}. Tudo bem?`
 
//     return mensagem
// }


// let variavel = greetings(nome1)

// console.log(typeof variavel)


// *******************************************Métodos Primitivos**************************************

// -------------------Métodos de número:-----------------------

// *****parseInt()******
// Transforma uma string com valor númerico em tipo number (int)

// let num = '1020'
// console.log(num)
// console.log(typeof num)

// let numAlterado = parseInt(num)
// console.log(numAlterado)
// console.log(typeof numAlterado)

// *****parseFloat()******
// Transforma uma string com valor númerico e ponto flutuante em tipo number (float)

// let num = '1020.1010000000'
// console.log(num)
// console.log(typeof num)

// let numAlterado = parseFloat(num)
// console.log(numAlterado)
// console.log(typeof numAlterado)

// *****toFixed()********
// Arredonda um valor com ponto flutuante, de acordo com as casas decimais que forem especificadas

// let num = 10.1674856846

// console.log(num)
// console.log(typeof num.toFixed(2))


// *****toString()*******
// Transforma um número em string

// let num = 10.1674856846

// console.log(num.toString())
// console.log(typeof num.toString())

// ----------------exemplo usando método parseInt

// let num = parseInt(prompt("Digite um numero"))
// let num2 = parseInt(prompt("Digite um numero"))

// console.log(typeof num)
// console.log(typeof num2)

// console.log(num + num2)


// -------------------------Métodos de string-------------------------

// ********replace()*******
// Substitui o primeiro caractere ou conjunto de caracteres encontrado na string, pelo conjunto especificado no segundo parametro

// let frase = "O Alex é monstro. Mas monstro é elogio."

// let fraseAtualizada = frase.replace("monstro", "cabuloso")

// console.log(frase)
// console.log(fraseAtualizada)

// ********replaceAll()*****
// Substitui todos caracteres ou conjunto de caracteres encontrado na string, pelo conjunto especificado no segundo parametro

// let fraseAtualizada = frase.replaceAll("monstro", "cabuloso")

// console.log(frase)
// console.log(frase.replaceAll("O Alex é", "Os alunos da T21 são"))

// ********startsWith()******
// Retorna true ou false se a string começa com o conjunto de caractere especificado.


let texto2 = "Alex Silva Sakaki"
let endereco = "Doutor nério Nunes"

// console.log(texto2.startsWith("Silva"))

// ********endsWith()********

// console.log(texto.endsWith("."))
// Retorna true ou false se a string termina com o conjunto de caractere especificado.

// console.log(texto2.endsWith("Sakaki"))

// *******includes()*********
// Retorna true ou false se a string contém o conjunto de caractere especificado.

// console.log(texto2.includes("Alex"))
// console.log(texto2.includes("k"))
// console.log(texto2.includes("Silva Sakaki"))
// console.log(texto2.includes("SilvaSakaki"))
// console.log(endereco.includes("Rua"))


// ********toLowerCase()*************
// retorna a string com todos os caracteres em letra minúscula.

// let nome = "aLeX saKaki"

// console.log(nome)

// console.log(nome.toLowerCase)

// ********toUpperCase()*************
// retorna a string com todos os caracteres em letra maiúscula.

// console.log(nome.toUpperCase())