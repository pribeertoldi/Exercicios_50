/*

3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. 

> Qual a distância que deseja percorrer (em Km)?
> Calcular o preço da viagem (cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas)

*/

const prompt = require('prompt-sync')()

let distancia = Number(prompt('Qual a distância (em Km) que seja percorrer? '))
let precoPassagem = 0

if (distancia <= 200){
    precoPassagem = distancia * 0.50
} else {
    precoPassagem = distancia * 0.45
}

console.log(`A sua viagem de ${distancia} Km, custará R$ ${precoPassagem.toFixed(2)}`)
