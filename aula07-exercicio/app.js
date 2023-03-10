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


//Cria umm objeto com as informações da classe express
const app = express();

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

//endPoint para Listar os Estados
app.get('/estados', cors(), async function(request, response, next){

    const estadosCidades = require('./modulo/estados_cidades.js');
    let listaDeEstados = estadosCidades.getListaDeEstados();

    response.json(listaDeEstados);
    response.status(200);
    

});

//Permite carregar os endPoints criados e aguardar as requisições 
//pelo protocolo htp na porta 8080
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
});