// Desenvolva uma função que mostre no console a frase "Hello World!".

function frase() {
    const frase1 = "Hello"
    const frase2 = "World!"

    console.log(`${frase1} ${frase2}`)

}

frase()


// Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a). 
// Requisitos: 100 de Entregas // 100 de Entrevistas Técnicas // 100 de Presença

function monitor(){
    let entregas = prompt("Qual seu total de entregas?")
    let entrevistasTecnicas = prompt("Qual o seu total de Entrevistas Técnicas?")
    let presenca = prompt("Qual o seu total de presença?")
    
    if(entregas >= 100 && entrevistasTecnicas >= 100 && presenca >= 100) {
        console.log("Possível monitor(a).")
    } else {
        console.log("Selecionar outro(a) aluno(a).")
    }
}
// monitor()

// Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos". 

function nomeSobrenome() {
    const nome = prompt("Qual é o seu nome?")
    const sobrenome = prompt("Qual o seu sobrenone?")
    const idade = prompt("Qual a sua idade?")

    console.log(`Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos.`)
}

// nomeSobrenome()


// Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

function qualMaior() {
    let num1 = prompt("1")
    let num2 = prompt("2")
    let num3 = prompt("3")

    if(num1 > num2 && num1 > num3) {
        console.log(`${num1} é o maior.`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} é o maior.`)
    } else {
        console.log(`${num3} é o maior.`)
    }
    
}

// qualMaior()
