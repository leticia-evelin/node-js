/**********************************************************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada de um número até um contador qualquer
 * Data: 06/02/2023
 * Autor: Prof.Marcel / Letícia Evelin
 * Versão: 1.0
 **********************************************************************************************/

//Calcula uma tabuada
const tabuada = function(multiplicando, maxMultiplicador){
    let tabuada = Number (multiplicando);
    let contador = Number (maxMultiplicador);
    let contTabuada = 0; //start da repetição
    let status  = true;
    let resultado;

    if(tabuada == 0 || contador == 0)
        status = false;
    else if (isNaN(tabuada) || isNaN(contador))
        status = false;
    else{

        while(contTabuada <= contador)
        {
            resultado = tabuada * contTabuada;

            // 2x0 = 0
            //console.log(tabuada + 'x' + contTabuada + '=' + resultado);
            console.log(`${tabuada} x ${contTabuada} = ${resultado}`)

            //contTabuada = contTabuada + 1;
            //contTabuada ++;
            contTabuada +=1;

        }
    }

    return status;
}

tabuada(2,14);

module.exports = {
    tabuada
}