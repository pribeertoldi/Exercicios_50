/*

4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.

Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.

*/

const prompt = require('prompt-sync')()

let tam1 = Number(prompt('Digite o comprimento da reta 1 (em metros): '));
let tam2 = Number(prompt('Digite o comprimento da reta 2 (em metros): '));
let tam3 = Number(prompt('Digite o comprimento da reta 3 (em metros): '));

if (tam1 < (tam2 + tam3) && tam2 < (tam1 + tam3) && tam3 < (tam1 + tam2)){
    console.log('É possível formar um triângulo')
} else {
    console.log('Não é possível formar um triângulo')
}

