/*

2. Escreva um programa que pergunte a velocidade de um carro. 
Caso ultrapasse 80 Km/h-¹, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

> Qual a velocidade do carro?
> Maior que 80km/h = MULTA
> A cada km acima da velocidade permitida (80km/h) multa de R$ 5,00 > exibir valor da multa
*/

const prompt = require('prompt-sync')()

let velocidadeCarro = prompt('Qual a velocidade do carro (Km/h)? ')
contador = 0
let somaMulta = 0

if (velocidadeCarro > 80){
    contador = velocidadeCarro - 80
    somaMulta = 5 * contador
    console.log(`Você foi multado! Sua multa é no valor de R$ ${somaMulta}`)
} else {
    console.log('Você não foi multado. Siga viagem!')
}