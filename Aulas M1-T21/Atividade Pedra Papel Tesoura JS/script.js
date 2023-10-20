// Em JavaScript, você pode estruturar o jogo de Pedra, Papel, Tesoura usando condicionais e funções. Aqui está um exemplo de como você pode fazer isso:

// ```javascript

// // Função para gerar a jogada do computador
// function computadorEscolhe() {
//   const jogadas = ["Pedra", "Papel", "Tesoura"];
//   const indice = Math.floor(Math.random() * jogadas.length);
//   return jogadas[indice];
// }

// // Função para determinar o vencedor
// function determinarVencedor(jogador, computador) {
//   if (jogador === computador) {
//     return "Empate";
//   } else if (
//     (jogador === "Pedra" && computador === "Tesoura") ||
//     (jogador === "Papel" && computador === "Pedra") ||
//     (jogador === "Tesoura" && computador === "Papel")
//   ) {
//     return "Jogador";
//   } else {
//     return "Computador";
//   }
// }

// // Função principal do jogo
// function jogar(jogada) {
//   const jogador = jogada;
//   const computador = computadorEscolhe();
//   const vencedor = determinarVencedor(jogador, computador);

//   console.log("Jogador escolheu: " + jogador);
//   console.log("Computador escolheu: " + computador);
//   console.log("O vencedor é: " + vencedor);
// }

// // Exemplo de uso
// jogar("Pedra");
// ```

// Neste exemplo, a função `computadorEscolhe` é usada para gerar uma jogada aleatória para o computador. A função `determinarVencedor` compara as jogadas do jogador e do computador para determinar o vencedor. A função `jogar` recebe a jogada do jogador como entrada, chama as outras funções e exibe o resultado no console.

// Você pode adicionar mais lógica ao jogo, como solicitar a jogada do jogador usando `prompt` ou criar uma interface gráfica para a interação do usuário.

