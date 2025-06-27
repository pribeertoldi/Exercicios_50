// Aqui, estamos atribuindo uma função anônima (sem nome) à variável erro.
// Isso é uma função anônima armazenada em uma variável.
// Ou seja, erro passa a ser uma função, e pode ser chamada com erro().
let erro = function() {
    console.log('DEU ERRO')
}

// Aqui, estamos declarando uma função nomeada chamada sucesso.
// Quando você usa function nome() {...}, está criando uma função com nome.
function sucesso() {
    console.log('SUCESSO')
}


// Essa função requisicao recebe duas funções como parâmetros: sucesso e erro.
// Isso é um exemplo de funções como parâmetro (também chamadas de CALLBACKS).
// A lógica: se a condição do if for verdadeira, ela executa a função sucesso(). Se for falsa, executa erro().
function requisicao(sucesso, erro){
    if (true) {
        sucesso()
    } else {
        erro()
    }
}

// Esta linha passa a função anônima diretamente como parâmetro, no lugar de sucesso.
// (message) => console.log(message) é uma ARROW FUNCTION — uma forma curta de escrever funções anônimas.

// requisicao((message) => console.log(message), erro)

requisicao(sucesso, erro)