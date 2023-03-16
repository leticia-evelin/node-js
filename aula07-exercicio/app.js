/***********************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades.
 * Data: 10/03/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 ************************************************************************/

/**
 * Express: é uma dependência do node que permite a integração entre o protocolo http com o código
 *      npm install express --save  (instalar express no terminal)
 * 
 * Cors - gerenciador de permissões para o protocolo http
 *      npm install cors --save
 * 
 * Body-parser - é uma dependência que permite manipular dados enviados pelo body da requisição
 *      npm install body-parser --save
 */

//Importe das dependências para criar a API

//responsável pelas requisições
const express = require('express');
//responsável pelas requisições das permissões
const cors = require('cors');
// responsável pela manipulação da requisição
const bodyParser = require('body-parser');

 //Importe do arquivo de funções para listar os estados e as cidades
 const estadosCidades = require('./modulo/estados_cidades.js');

//Cria umm objeto com as informações da classe express
const app = express();

//Define as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API 
        // * - significa que a API será pública
        // IP - se colocar o IP, a API somente responderá para aquela máquina
    response.header('Access-Control-Allow-Origin', '*')

    //Permite gerenciar quais verbos (métodos) poderão fazer requisições
    response.header('Access-Control-Allow-Metods', 'GET, POST, PUT, DELETE, OPTIONS')


    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors());

    next();
});

//endPoints - pontos de parada

//endPoint para LISTAR OS ESTADOS
app.get('/estados', cors(), async function(request, response, next){

    //Chama a função que retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados();

    //Tratamento para validar se a função realizou o processamento
    if(listaDeEstados){
        //Retorna o JSON e o Status code 
        response.json(listaDeEstados);
        response.status(200);
    } else {
        response.status(500);
    }

});

//endPoint: LISTA AS CARACTERISTICAS DO ESTADO PELA SIGLA 
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
// :uf é uma variável que será utilizada para passagens de valores na URL da requisição


//Recebe o valor da variável uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    //Tratamento para validar os valores encaminhados no parâmetro
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstado.message = "Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 dígitos)";
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstado(siglaEstado);
        //Valida se houve o retorno válido da função
        if(estado){
            statusCode = 200; //estado encontrado
            dadosEstado = estado;
        } else {
            statusCode = 404; //estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstado);
}); 

//endPoint: LISTA A CAPITAL DO ESTADO
app.get('/capital/sigla/:uf', cors(), async function(request, response, next){

    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400;
        dadosEstado.message = "Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 dígitos)";
    } else {
        let capital = estadosCidades.getCapitalEstado(siglaEstado);
        //Valida se houve o retorno válido da função
        if(capital){
            statusCode = 200; //estado encontrado
            dadosEstado = capital;
        } else {
            statusCode = 404; //estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstado);

});

//endPoint: LISTA OS ESTADOS DE ACORDO COM A REGIÃO 
app.get('/regiao/nome/:regiao', cors(), async function(request, response, next){

    let nomeRegiao = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    if(nomeRegiao == '' || nomeRegiao == undefined || !isNaN(nomeRegiao)){
        statusCode = 400;
        dadosEstado.message = "Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 dígitos)";
    } else {
        let regiao = estadosCidades.getEstadosRegiao(nomeRegiao);
        //Valida se houve o retorno válido da função
        if(regiao){
            statusCode = 200; //estado encontrado
            dadosEstado = capital;
        } else {
            statusCode = 404; //estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstado);
});

// endPoint: LISTA SOBRE A CAPITAL DO PAÍS


// endPoint: LISTA AS CIDADES DE CADA ESTADO PELA SIGLA

//Permite carregar os endPoints criados e aguardar as requisições 
//pelo protocolo htp na porta 8080
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
});