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


console.log("Tarefa: Fazer um bolo de chocolate com cobertura");

// Entradas: Ingredientes, batedeira, forma.

console.log("Ligue o forno em temperatura média.");
console.log("Coloque a manteiga na batedeira.");
console.log("Coloque o açúcar na batedeira.");
console.log("Ligue a batedeira.");

// Processamento:
function fazerBolo() {
  let gemas = 3;
  let leite = 1;
  let clarasEmNeve = true;

  while (gemas > 0) {
    console.log("Junte uma gema e bata até obter um creme homogêneo.");
    gemas--;
  }

  console.log("Adicione aos poucos o leite.");
  console.log("Desligue a batedeira.");
  console.log("Adicione a farinha de trigo.");
  console.log("Adicione o chocolate em pó.");
  console.log("Adicione o fermento.");
  console.log("Reserve a massa obtida em um lugar temporário.");

  if (clarasEmNeve) {
    console.log("Execute o algoritmo para obter as claras em neve.");
  }

  console.log(
    "Junte as claras em neve à massa de chocolate que estava reservada."
  );
  console.log("Misture esta massa delicadamente.");

  // Executar algoritmo para untar a forma com manteiga e farinha.
  console.log("Unte a forma com manteiga e farinha.");
  console.log("Coloque a massa na forma.");
  console.log("Coloque a forma no forno.");
  console.log("Espere 30 minutos.");
  console.log("Tire a forma do forno.");
  console.log("Desenforme o bolo ainda quente.");

  let bolo = "Bolo pronto para consumo.";
  return bolo;
}

const boloPronto = fazerBolo();

// Faça a cobertura seguindo o algoritmo de fazer cobertura.

console.log("Coloque a cobertura no bolo.");

// Saída: Bolo pronto para consumo.
console.log(boloPronto);
