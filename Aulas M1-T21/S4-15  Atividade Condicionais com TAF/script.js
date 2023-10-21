// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
// var gender = prompt('Genero');
// var height = prompt('Altura');
// var barReps = prompt('Repetições com barra');
// var barSeconds = prompt('Tempo das repetições com barra');
// var abs = prompt('Abdominais');
// var runDistance = prompt('Distância da corrida');
// var runTime = prompt('Tempo da corrida');
// var swimDistance = prompt('Distância da natação');
// var swimTime = prompt('Tempo da natação');
// var diveTime = prompt(' Tempo de mergulho');

// var result = false;

//Desenvolva seu código aqui:

document.addEventListener("DOMContentLoaded", function () {
    const clickableCells = document.querySelectorAll("td.clickable");
  
    clickableCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const row = cell.parentElement;
        const gender = prompt("Gênero (male/female):");
        const height = parseFloat(prompt("Altura:"));
        const barReps = parseInt(prompt("Repetições com barra:"));
        const barSeconds = parseInt(prompt("Tempo das repetições com barra (segundos):"));
        const abs = parseInt(prompt("Abdominais:"));
        const runDistance = parseFloat(prompt("Distância de corrida (metros):"));
        const runTime = parseInt(prompt("Tempo de corrida (segundos):"));
        const swimDistance = parseFloat(prompt("Distância de natação (metros):"));
        const swimTime = parseInt(prompt("Tempo de natação (segundos):"));
        const diveTime = parseInt(prompt("Tempo de mergulho (segundos):"));
  
        let resultadoObtido = "false";
  
        if (gender === "male") {
          if (
            height >= 1.7 &&
            (barReps >= 6 || barSeconds >= 15) &&
            abs >= 41 &&
            ((runDistance >= 3000 && runTime <= 720) ||
              (runDistance >= 5000 && runTime <= 1200)) &&
            (swimDistance >= 100 || diveTime <= 30)
          ) {
            resultadoObtido = "true";
          }
        } else if (gender === "female") {
          if (
            height >= 1.6 &&
            (barReps >= 5 || barSeconds >= 12) &&
            abs >= 41 &&
            ((runDistance >= 4000 && runTime <= 900) ||
              (runDistance >= 6000 && runTime <= 1320)) &&
            (swimDistance >= 100 || diveTime <= 30)
          ) {
            resultadoObtido = "true";
          }
        }
  
        // Atualiza a célula "Resultado Obtido" com o resultado
        row.cells[11].textContent = resultadoObtido;
  
        // Atualiza a célula "Resultado Correto" com "✅" se o resultado for correto
        const resultadoEsperado = row.cells[13].textContent;
        row.cells[12].textContent = resultadoObtido === resultadoEsperado ? "✅" : "";
      });
    });
  });
  
  
  
  
  
  