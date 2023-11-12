/*1 ª Parte: Modelagem

Dadas as propriedades:

    Nome
    Ano de nascimento
    CPF
    Cidade
    Estado
    Logradouro

Crie o objeto pessoa contendo todas as propriedades citadas.    */

const pessoa = {
    nome: "Amaro",
    anoDeNascimento: 1981,
    cpf: 8080099945,
    cidade: "Atibaia",
    estado: "SP",
    logradouro: "Lot 55, 258",
}

/*
Dadas as propriedades:

    Nome
    CNPJ
    Área de atuação
    Cidade
    Estado
    Logradouro
    Curso

Crie o objeto escola contendo todas as propriedades citadas.
*/

const escola = {
    nome: "Jose Alvin",
    cnpj: 100255358252,
    areaDeAtuação: "Tecnologo",
    cidade: "Atibaia",
    estado: "SP",
    logradouro: "R 77",
    curso: "FullStack"
}

/*
Dadas as propriedades:

    Nome
    Duração em anos
    Turma
    Módulos

Crie o objeto curso contendo todas as propriedades citadas.
*/

const curso = {
    nome: "Desenvolvedor",
    duracaoEmAnos: 2,
    turma: "T21",
    modulos: 12,

}

/*
Dadas as propriedades:

    Cidade
    Estado
    Logradouro
    Cep

Crie o objeto endereço contendo todas as propriedades citadas.
*/

const endereco = {
    cidade: "São Paulo",
    estado: "SP",
    logradouro: "lot 325, 54, casa 25",
    cep: 129543020,
}

/* 2ª Parte: Manipulação - Estacionamento

Dado o objeto carro que representa um carro estacionado, realize as seguintes tarefas:
*/



/* 1. Escreva uma função chamada obterPlaca:

A função, quando chamada, deve retornar a placa do carro.

    Exemplo de chamada da função: obterPlaca()
    Saída: "ABC123"
    */
   
   function obterPlaca () {
       return carro.placa
}


/* 2. Escreva uma função chamada verificarClasses:

A função, quando chamada, deve retornar a(s) classe(s) do carro.

Perceba que a propriedade é um array - quando o array possuir apenas um elemento, retorne somente o valor do elemento, e quando o array possuir mais de um elemento, retorne todo o array.

Exemplo de chamada da função: verificarClasses()
Saída: "sedan"
*/

function verificarClasses () {
    if (carro.classes.length === 1) {
        return carro.classes[0]
    } 
    return carro.classes
}

/* 3. Escreva uma função chamada potenciaReal:

A função, quando chamada, deve retornar a potência real do carro.

Caso o carro tenha a propriedade luxo definida como true, o valor da propriedade potencia é elevado ao quadrado.

    Retorne o valor da potência do carro.
    
    Exemplo de chamada da função: potenciaReal()
    Saída: 40000
    */
    

function potenciaReal () {
    
    if (carro.luxo == true) {
        return carro.potencia * carro.potencia
    }
}

/*include*/

/* 4. Crie uma função chamada adicionarNovaClasse que recebe uma string como parâmetro:

Verifique se o número de classes do carro é maior ou igual a 3.

Se o número de classes for maior ou igual a 3, retorne: "Este carro não pode ter mais classes".

Se o número de classes for menor que 3, verifique se a classe recebida está entre as classes permitidas: 'sedan', 'hatchback', 'suv', 'crossover' e 'cupê'.

Caso a classe recebida não estiver entre as classes permitidas, retorne: "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê".

Se a classe recebida estiver entre as classes permitidas, verifique se ela já está presente no objeto de carro.

Se a classe já estiver presente, retorne: "O carro já possui a classe x", onde x é o valor da classe.

Se a classe não estiver presente, adicione-a à lista de classes do carro e retorne: "Classe x adicionada com sucesso", onde x é o valor da classe.

Exemplo de chamada da função: adicionarNovaClasse('cupê')
Saída: "Classe cupê adicionada com sucesso" */




function adicionarNovaClasse (str) {
    let classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê']
    if (carro.classes >= 3) {
        return `Este carro não pode ter mais classes`
    }
    if (classesPermitidas.includes(str.toLowerCase())) {
        if (carro.classes.includes(str)) {
            return `O carro já possui a classe ${str}`
        } 
        carro.classes.push(str)
        return `Classe ${str} adicionada com sucesso`
    } 
    return `Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê`
}



/* 5. Escreva uma função chamada naoMaisLuxo:

Verifique se o carro está estacionado.

Se o carro não estiver estacionado, retorne: "O carro {placa do carro} não está estacionado".

Verifique se o atributo "luxo" do carro é verdadeiro.

Se o atributo "luxo" não for verdadeiro, retorne: "O carro {placa do carro} não é luxuoso".

Se ambos os atributos estiverem corretos (carro estacionado e luxo verdadeiro), altere o atributo "luxo" para falso.

Retorne: "O carro {placa do carro} não é mais considerado um carro de luxo",.

Obs.: Substitua "{placa do carro}" pela placa do carro em questão.

Exemplo de chamada da função: naoMaisLuxo()
Saída: "O carro ABC123 não é mais considerado um carro de luxo" */

const carro = {  
    placa: "ABC123",   
    classes: ["sedan", "opala"],  
    luxo: true,
    potencia: 200, 
    estacionado: true  
  }

function naoMaisLuxo () {
    if (carro.estacionado != true) {
        return `O carro ${carro.placa} está estacionado`
    } if (carro.luxo != true) {
        return `O carro ${carro.luxo} não é luxuoso`
    }
}













// function deixarDeSeguirAteTotal(totalAlvo, taxaPorMinuto) {
//     let totalDeixadoDeSeguir = 0;
//     let minutos = 0;
  
//     while (totalDeixadoDeSeguir < totalAlvo) {
//       totalDeixadoDeSeguir += taxaPorMinuto;
//       minutos += 3; 
  
//       if (totalDeixadoDeSeguir >= totalAlvo) {
//         break;
//       }
//     }
  
//     const horasNecessarias = minutos / 60;
//     return horasNecessarias;
//   }
  
//   const totalPessoasDeixadasDeSeguir = 1600;
//   const taxaPorMinuto = 5;
  
//   const horasNecessarias = deixarDeSeguirAteTotal(totalPessoasDeixadasDeSeguir, taxaPorMinuto);
  
//   console.log(`Levará aproximadamente ${horasNecessarias.toFixed(2)} horas para deixar de seguir ${totalPessoasDeixadasDeSeguir} pessoas com a taxa de ${taxaPorMinuto} pessoas a cada 3 minutos.`);
  
