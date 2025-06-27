/* 

1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro.
> Quantidade de cigarros fumados/dia;
> Quantos anos ele já fumou;

> Fumante perde 10min de vida a cada cigarro;

> Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

*/

const prompt = require('prompt-sync')()

let cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '))
let anosFumando = parseInt(prompt('Quantos anos você já fumou ? '))

let totalCigarros = cigarrosPorDia * 365 * anosFumando
let totalPerdidoEmMinutos = totalCigarros * 10

let totalPerdidoEmDias = totalPerdidoEmMinutos / (60 * 24)

console.log(cigarrosPorDia)


console.log(`Um fumante perderá aproximadamente ${totalPerdidoEmDias.toFixed(2)} dias de vida ao fumar ${cigarrosPorDia} cigarros por dia durante ${anosFumando} anos`);

