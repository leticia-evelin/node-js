/***********************************************************************************
 * Objetivo: Realizar cálculos matemáticos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
 * Data: 03/02/2023
 * Autor: Prof. Marcel / Letícia
 * Versão: 1.0
 ************************************************************************************/

var matematica = require('./modulo/calculadora.js');

//Import da biblioteca para entrada de dados
var readline = require('readline');

//Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

//Entrada de dados Valor1
//replace permite trocar o conteúdo da string por outro
entradaDados.question('Valor1: \n', function(numero1){
    let valor1 = numero1.replace(',' , '.');

//Entrada de dados Valor2
    entradaDados.question('Valor2: \n', function(numero2){
        let valor2 = numero2.replace(',' , '.');

//Entrada de dados tipo de cálculos
        entradaDados.question('Escolha uma operação:[ SOMAR | SUBTRAIR | MULTIPLICAR |DIVIDIR ]: \n', function(tipoCalculo){

            //toUpperCase - converte uma string para maiúsculo
            //toLowerCase - converte uma string para minúsculo
            let operacao = tipoCalculo.toUpperCase();

            let resultado;

            //Validação de entrada de dados vazio
            if(valor1 == '' || valor2 == '' || operacao == ''){
                console.log('ERRO: Não é possível calcular sem preencher todos os dados.')
                entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)

            //Validação para verificar se os dados digitados são números
            //Podemos utilizar isNAN ou typeof
            //Se usar o typeof precisa garantir que o tipo de dado não é genérico (string)
            //}else if (typeof(valor1) != 'number' || typeof(valor2) != 'number'){
            
            }else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos.')
                entradaDados.close();

            }else{

               resultado = matematica.calcular(valor1, valor2, operacao);
               console.log(resultado);
               entradaDados.close();
            }    
        });
    });
});
    