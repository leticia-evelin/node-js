// Comentário em linha

/*
   Cometário 
        em 
   Bloco
*/

// Permite escrever uma mensagem no terminal
console.log('Testando o node.JS');

// Importe da biblioteca que faz entrada de dados pelo usuário
var readline = require('readline');

// Criamos um objeto entradaDados com as referências do readline
//função de callback
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// O que é uma função de callback?
// é uma função que quando chamada ela retorna seu conteúdo em uma única
// instrução em apenas um passo na programação

// Criamos uma função de callback para receber os dados digitados pelo usuário
    // (O objeto entradaDados aguarda a digitação do usuário, após 
    // a digitação do conteúdo é acionado um callback para encaminhar os dados 
    // para o console log. Esse conteúdo foi encaminhado através do parâmetro
    // dados da função)
entradaDados.question("Digite seu nome: \n", function(dados){

    console.log('Bem Vindo,' + dados + ' ao servido node.JS');

});