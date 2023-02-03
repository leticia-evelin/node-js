/*****************************************************************
 * Objetivo: Arquivo de funções para realizar cálculos matemáticos
 * Data: 03/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 *****************************************************************/

//Realizar  cálculos matemáticos das quatro operações (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
function calcular(numero1, numero2, tipoCalculo){

    let valor1 = Number (numero1);
    let valor2 = Number (numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;

    if(operacao == 'SOMAR')
        resultado = valor1 + valor2;

    else if(operacao == 'SUBTRAIR')
        resultado = valor1 - valor2;

    else if(operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2;

    else if(operacao == 'DIVIDIR'){
        //Validação da divisão por 0.
        if (valor2 == 0){
         console.log('ERRO: Não é posível fazer uma divisão por 0.');
         entradaDados.close();
        }else
            resultado = valor1 / valor2;
    }else{
        console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
        entradaDados.close();
    }

    //Validação para tratar a variável resultado quandp nenhum cálculo é realizado.
    if(resultado != undefined)
        return resultado;
    else
        return false;
        
}

//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}