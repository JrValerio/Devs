// tipos de variáveis

// const
// let

// NÃO USAR MAIS
// var

// tipos de valores variáveis

// number
// bollean
// string

// ** Camel Case **
let umaVariavel;

// **Snake Case **
let uma_variavel;

// let nome = "Junior"
let sobrenome = 'Valério'
// let nomeDoMeio = 'Silva' // crase serve pra fazer uma 
let turma = 21

let texto = "Sexta feira é um dia 'ruim'"

// Template string

// let mensagem = `Olá ${nome} Bem vindo a Turma ${turma}!`

//Concatenação de string

// let mensagem2 = "Olá " +nome+ ". Bem vindo a turma "
// +turma+'!'


// Acessando os caracteres

// let nome = "Alex"

// Indices de uma string
// 0 1 2 3 -> indice
// 1 2 3 4 -> posição
// A L E X

// console.log(nome)
// console.log(nome[0])
// console.log(nome[4 - 1])

// Metodo de string

// console.log(nome.length) // .length -> Tamanho da string
// console.log(nome[nome.length -1])


// Entrada e saída de dados

// alert

alert("Seu antivirus está desatualizado!")
prompt("Digite seu email para atualizar:")
prompt("Digite sua senha para atualizar:")

let nome = prompt("Digite seu nome: ")
let idade = prompt("digite sua idade:")

function condicao(){

if(idade > 18){
    alert(`${nome} tem ${idade} anos, e está apto para atualizar seu antivirus`)
}else{
    alert(`${nome} tem ${idade} anos, procure um adulto e refaça seu pedido`)
}
}
condicao()

// alert(`seu nome é ${nome} e sua idade é ${idade} `)

// ----- Comparadores -----

// Maior que >
// Elemento da esquerda é MAIOR que o da direita?
// 10 > 5 ===> true (sim/verdade)

// Menor que <
// Elemento da esquerda é MENOR que o da direita?
// 10 < 5  ===> false (não/falso)


// Igual a: == 
// Elemento da esquerda é IGUAL ao da direita
// 10 == "10" ===> true (sim/verdadeiro)




// Maior ou igual (>=) / menor ou igual (<=)
// 10 >= 10 ===> true (sim/verdadeiro)
// 10 <= 10 ===> true (sim/verdadeiro)


//diferente que: !=
// 10 != 10 ===> false (não/falso **eles são iguais)


// Estruturas Condicionais

// let nome = prompt("Digite seu nome")

// if (nome === "Alex") 
// {
//  console.log("Olá Alex! Seja muito bem vindo");
// } 
// else if (nome === "Amaro")
// {
//  console.log(`Olá ${nome}`)
// }
// else {
//  console.log("Entrou no ELSE");
// }

//  console.log("Saiu do IF");



 function fdp (batatinha1, batatinha2){
    return batatinha1 + batatinha2
 }
 
 console.log(fdp(15, 15))