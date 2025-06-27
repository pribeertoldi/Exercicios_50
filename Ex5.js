/*

5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

*/

const prompt = require('prompt-sync')()

function jogarJoKenPo() {
  const opcoes = ['pedra', 'papel', 'tesoura']

  let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura? ").toLowerCase()

  if (!opcoes.includes(escolhaUsuario)) {
    console.log("Opção inválida! Tente novamente.")
    return
  }

  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]

  console.log(`Você escolheu: ${escolhaUsuario}`)
  console.log(`Computador escolheu: ${escolhaComputador}`)

  if (escolhaUsuario === escolhaComputador) {
    console.log("Empate!")
  } else if ((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') || (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') || (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')) {
    console.log("Você venceu!")
  } else {
    console.log("Você perdeu!")
  }
}

jogarJoKenPo()
