/****************************************************** 
* Objeto: Realizar a média escolar de 4 notas doa alunos.
* Data: 27/01/2023
* Autor: Letícia Evelin
* Versão: 1.0
*******************************************************/

console.log('Sistema de Cálculo de Médias Escolares');

const { stdin, stdout } = require('process');
//Import da bilioteca para entrada de dados
var readline = require('readline');

//Criamos um objeto para manipular a entrada de dados
var entradaDeDados = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

/**** CONCEITO SOBRE A CRIAÇÃO DE VARIAVÉIS
 * var - toda variável criada como var tem por objetivo ser um escopo global,
 * ou seja, ela poderá ser utilizada em diversos pontos da programação.
 * 
 * let - toda variável criada como let, tem por objetivo ser um escopo local,
 * ou seja, será utilizada somente naquela função.
 * 
 * const - tem por objetivo criar um espaço na memória para armazenar dados 
 * que não sofrem mudança.
 */


//Função de CallBack para retornar o nome do aluno
entradaDeDados.question('Digite o nome do aluno: \n', function (nome){
    //Variável local para receber o nome do aluno vai ser 
    //retornado pela função
    let nomeAluno = nome;

    // Função de CallBack para entrada da Nota1
    entradaDeDados.question('Digite a nota 1: \n', function (nota1){
        let primeiraNota = nota1;

   
        entradaDeDados.question('Digite a nota 2: \n', function (nota2){
            let segundaNota = nota2;

            entradaDeDados.question('Digite a nota 3: \n', function (nota3){
                let terceiraNota = nota3;

      
                entradaDeDados.question('Digite a nota 4: \n', function (nota4){
                    let quartaNota = nota4;

                    entradaDeDados.question('Digite a nota 5: \n', function (nota5){
                        let quintaNota = nota5;
                        console.log(nomeAluno, primeiraNota, segundaNota, terceiraNota, quartaNota,quintaNota);
                        
                        let media = 0;

                        /**
                         * Conversão de dados String para Numero
                         * parseInt() - converte para inteiro
                         * Number.parseFloat() ou parseFloat() - converte para real
                         * Number() - converte para int ou float conforme a entrada do dado
                         * 
                         * Operadores de comparação
                         * ==  (verificar igualdade de conteudo)
                         * != (verificar a diferença de conteudo)
                         * < (verificar o menor valor)
                         * > (verificar o maior valor)
                         * <= (verificar o menor ou igual valor)
                         * >= (verificar o maior ou igual valor)
                         * === (verificar a igualdade de conteudo e validar a tipagem de dados)
                         * Ex: 0 == 0 V
                         *     0 == '0' V
                         *     0 === '0' F 
                         *     0 ==! 0.0 F
                         * 
                         * Operadores logicos
                         * OU       || (pipe)  OR
                         * E        &&         AND
                         * Negação  !          NOT
                         */

                        // Validação para tratar entradas vazias
                        // && and só validaria se todos fossem vazios (ou mudar o operador logico != usando &&)

                        if(primeiraNota == ''  || segundaNota == ''|| terceiraNota == '' || 
                            quartaNota == '' || quintaNota == ''){
                            console.log('ERRO: É necessário digitar algum valor nas entradas');
                        }else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) ||
                          isNaN(quartaNota) || isNaN(quintaNota))
                        {
                            console.log('ERRO: É necessário todos as notas digitadas sejam números.')

                        }else if(primeiraNota > 10 || segundaNota > 10 || terceiraNota > 10 ||
                            quartaNota  > 10 || quintaNota > 10 )
                            {
                                console.log('ERRO: É necessário somente notas de 0 a 10')
                            }
                        
                        else{
                            media = (Number(primeiraNota) + Number (segundaNota) + Number (terceiraNota) + 
                            Number (quartaNota) + Number (quintaNota))/5;
                            console.log(media);

                            if(media <7){
                                console.log('Reprovado :(')
                            }else if(media >=7){
                                console.log('Aprovado :)')
                            }
                        }
                        
                       
                    }); 
                }); 
           });
       });  
    });
});       
   
    