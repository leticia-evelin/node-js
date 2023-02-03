/****************************************************** 
* Objetivo: Exercício 1 - operações matemáticas
* Data: 30/01/2023
* Autor: Letícia Evelin
* Versão: 1.0
*******************************************************/

console.log('Sistema de operações matemáticas!')

const { notDeepEqual } = require('assert');
const { captureRejectionSymbol } = require('events');
const { stdin, stdout } = require('process');
//Import da bilioteca para entrada de dados
var readline = require('readline');
const { Script } = require('vm');

//Criamos um objeto para manipular a entrada de dados
var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

 // Funções de CallBack para entrada da operação e dos valores
entradaDeDados.question('Por favor, escolha a operação do seu cálculo: \n (+) adição \n (-) subtração \n (*) multiplicação \n (/) divisão \n', function(operacao){
    let operacaoCalculo = operacao; 

    entradaDeDados.question('Digite o primeiro número: \n', function(valor1){
        let primeiroValor = parseFloat(valor1.replace("," , "."));
       
        entradaDeDados.question('Digite o segundo número: \n', function(valor2){
            let segundoValor = parseFloat(valor2.replace("," , "."));
           
            console.log(operacaoCalculo, valor1, valor2);
    
            let resultado = 0;

            // Validações
             if(valor1 == '' || valor2 == '' || operacao){
                console.log('ERRO: É necessário digitar algum valor nas entradas');

                // Validação para entrada de dados não numericos
            }else if(isNaN(primeiroValor) || isNaN(segundoValor)){
                console.log('ERRO: É necessário que todos os valores digitados sejam números.');

            } else if(operacaoCalculo =! '+ - * /'){
                console.log('ERRO: É necessário digitar uma das operações válidas');

            }
            
            // Cálculo
            if(operacao == '+'){
                resultado = ((primeiroValor) + (segundoValor));
                console.log('Resultado de ' + (primeiroValor) + (operacao) + (segundoValor) + ' = ' + resultado);

            }else if(operacao == '-'){
                resultado = ((primeiroValor) - (segundoValor));
                console.log('Resultado de ' + (primeiroValor) + (operacao) + (segundoValor) + ' = ' + resultado);

            }else if(operacao == '*'){
                resultado = ((primeiroValor) * (segundoValor));
                console.log('Resultado de ' + (primeiroValor) + (operacao) + (segundoValor) + ' = ' + resultado);

            }else if(operacao == '/'){
                resultado = ((primeiroValor) / (segundoValor));
                console.log('Resultado de ' + (primeiroValor) + (operacao) + (segundoValor) + ' = ' + resultado);
            }
        });
    });
});



    


        

        
     


    


