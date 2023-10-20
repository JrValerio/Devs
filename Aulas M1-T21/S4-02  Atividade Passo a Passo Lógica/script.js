// Tarefa: Fazer um bolo de chocolate com cobertura
// Entradas: Ingredientes, batedeira, forma.
// Processamento:
// - Ligue o forno em temperatura média.
// - Coloque a manteiga na batedeira.
// - Coloque o açúcar na batedeira.
// - Ligue a batedeira.
// - Enquanto houver gemas, junte uma gema e depois bata até obter
// um creme homogêneo
// - Adicione aos poucos o leite.
// - Desligue a batedeira.
// - Adicione a farinha de trigo.
// - Adicione o chocolate em pó.
// - Adicione o fermento.
// - Reserve a massa obtida em um lugar temporário.
// - Execute o algoritmo para obter as claras em neve.
// - Junte as claras em neve à massa de chocolate que estava reservada.
// - Misture esta massa delicadamente.
// - Execute o algoritmo para untar a forma com manteiga e farinha.
// - Coloque a massa na forma.
// - Coloque a forma no forno.
// - Espere 30 minutos.
// - Tire a forma do forno.
// - Desenforme o bolo ainda quente.
// - Separe o bolo em um lugar temporário.
// - Faça a cobertura segundo o algoritmo de fazer cobertura.
// - Coloque a cobertura no bolo.
// Saída: Bolo pronto para consumo.

// Função para fazer o bolo de chocolate com cobertura
function fazerBoloDeChocolateComCobertura() {
    // Ligue o forno em temperatura média
    ligarForno(180);
  
    // Preparação da massa
    let massa = prepararMassa();
  
    // Prepare as claras em neve
    let clarasEmNeve = prepararClarasEmNeve();
  
    // Misture as claras em neve à massa
    let boloPronto = misturarMassaComClaras(massa, clarasEmNeve);
  
    // Unte a forma com manteiga e farinha
    untarForma();
  
    // Coloque a massa na forma
    colocarMassaNaForma(boloPronto);
  
    // Asse o bolo no forno
    assarBolo();
  
    // Desenforme o bolo
    let boloDesenformado = desenformarBolo(boloPronto);
  
    // Faça a cobertura
    let cobertura = fazerCobertura();
  
    // Coloque a cobertura no bolo
    cobrirBolo(boloDesenformado, cobertura);
  
    // Retorne o bolo pronto
    return boloDesenformado;
  }
  
  // Funções auxiliares
  function ligarForno(temperatura) {
    // Implemente a lógica para ligar o forno na temperatura desejada
  }
  
  function prepararMassa() {
    // Implemente a lógica para preparar a massa do bolo
  }
  
  function prepararClarasEmNeve() {
    // Implemente a lógica para preparar as claras em neve
  }
  
  function misturarMassaComClaras(massa, claras) {
    // Implemente a lógica para misturar a massa com as claras
  }
  
  function untarForma() {
    // Implemente a lógica para untar a forma com manteiga e farinha
  }
  
  function colocarMassaNaForma(massa) {
    // Implemente a lógica para colocar a massa na forma
  }
  
  function assarBolo() {
    // Implemente a lógica para assar o bolo no forno
  }
  
  function desenformarBolo(bolo) {
    // Implemente a lógica para desenformar o bolo
  }
  
  function fazerCobertura() {
    // Implemente a lógica para fazer a cobertura do bolo
  }
  
  function cobrirBolo(bolo, cobertura) {
    // Implemente a lógica para cobrir o bolo com a cobertura
  }
  

  // Função para ligar o forno na temperatura desejada
function ligarForno(temperatura) {
  console.log(`Ligando o forno a ${temperatura}°C.`);
  // Lógica para ligar o forno na temperatura desejada
}

// Função para preparar a massa do bolo
function prepararMassa() {
  console.log("Preparando a massa do bolo.");
  // Lógica para preparar a massa
  const massa = {
    manteiga: '100g',
    acucar: '200g',
    // Outros ingredientes da massa
  };
  return massa;
}

// Função para preparar as claras em neve
function prepararClarasEmNeve() {
  console.log("Preparando claras em neve.");
  // Lógica para preparar as claras em neve
  const claras = {
    quantidade: 4,
    consistencia: 'em neve',
  };
  return claras;
}

// Função para misturar a massa com as claras
function misturarMassaComClaras(massa, claras) {
  console.log("Misturando a massa com as claras em neve.");
  // Lógica para misturar a massa com as claras
  const boloPronto = {
    massa,
    claras,
  };
  return boloPronto;
}

// Função para untar a forma com manteiga e farinha
function untarForma() {
  console.log("Untando a forma com manteiga e farinha.");
  // Lógica para untar a forma
}

// Função para colocar a massa na forma
function colocarMassaNaForma(boloPronto) {
  console.log("Colocando a massa na forma.");
  // Lógica para colocar a massa na forma
}

// Função para assar o bolo no forno
function assarBolo() {
  console.log("Assando o bolo no forno.");
  // Lógica para assar o bolo no forno
}

// Função para desenformar o bolo
function desenformarBolo(boloPronto) {
  console.log("Desenformando o bolo.");
  // Lógica para desenformar o bolo
  return boloPronto; // Retornando o bolo desenformado
}

// Função para fazer a cobertura do bolo
function fazerCobertura() {
  console.log("Preparando a cobertura do bolo.");
  // Lógica para preparar a cobertura
  const cobertura = {
    chocolate: '100g',
    cremeDeLeite: '200g',
    acucarDeConfeiteiro: '50g',
    // Outros ingredientes da cobertura
  };
  return cobertura;
}

// Função para cobrir o bolo com a cobertura
function cobrirBolo(bolo, cobertura) {
  console.log("Cobrindo o bolo com a cobertura.");
  // Lógica para cobrir o bolo com a cobertura
  const boloCoberto = {
    ...bolo,
    cobertura,
  };
  return boloCoberto;
}

// Função principal para fazer o bolo de chocolate com cobertura
function fazerBoloDeChocolateComCobertura() {
  ligarForno(180);
  const massa = prepararMassa();
  const clarasEmNeve = prepararClarasEmNeve();
  const boloPronto = misturarMassaComClaras(massa, clarasEmNeve);
  untarForma();
  colocarMassaNaForma(boloPronto);
  assarBolo();
  const boloDesenformado = desenformarBolo(boloPronto);
  const cobertura = fazerCobertura();
  const boloFinal = cobrirBolo(boloDesenformado, cobertura);
  return boloFinal;
}

// Chamar a função principal para fazer o bolo
const boloProntoParaConsumo = fazerBoloDeChocolateComCobertura();
console.log("Bolo pronto para consumo:", boloProntoParaConsumo);


