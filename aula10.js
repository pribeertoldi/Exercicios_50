// Façam uma função que inverta uma String:

/* 
function reverseString(str){
    let reversed = ''

// let i = str.length - 1: começa do último índice da string (ex: "Priscila" tem 8 letras → índice final é 7, pois o índice começa em ZERO (por isso -1)).
// A cada volta do laço, o caractere atual (str[i]) é adicionado ao final da variável reversed.
// O operador += significa “adicionar e atribuir” — vai acumulando os caracteres na ordem inversa.

    for (let i=str.length - 1; i >= 0; i--){
        reversed += str[i]
    }

    return reversed

}

console.log(reverseString('Priscila Bertoldi'))

*/


// Façam uma função que inverta uma String, usando funções nativas JS:

/*
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Priscila Bertoldi'));

*/

// Encontrar o número de vogais de uma String:
/* 
function AchaVogais(str){
    let contador = 0
    let vogais = 'aeiouAEIOU'

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++
        }
    }

    return contador
}

console.log(AchaVogais('Priscila Bertoldi'))
*/


// Encontrar o número de vogais de uma String, usando funções nativas JS:
/*
function contarVogais(str) {
    let resultado = str.match(/[aeiou]/gi)
    return resultado ? resultado.length : 0
}

console.log(contarVogais('Priscila Bertoldi'))
*/


// Gerar um número aleatório entre dois valores:

/*
function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomBetween(-8,10))
*/


// Formatar uma data
/*

let data = new Date(2025, 12, 1)

function formatData(data) {
    let dia  = data.getDate().toString().padStart(2,'0')

    let mes = (data.getMonth() + 1).toString().padStart(2,'0')

    let ano = data.getFullYear().toString()

    return `${dia}/${mes}/${ano}`
    
}

console.log(formatData(data))
*/

