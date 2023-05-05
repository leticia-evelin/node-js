/***********************************************************************
 * Objetivo: API para interagir com o Banco de Dados. (GET, POST, DELETE, PUT)
 * Data: 14/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 ************************************************************************/

/*
 *  Para realizar a conexão com o banco de dados iremos utilizar o PRISMA
 *      npm install prisma --save
 *      npx prisma
 *      npx prisma init
 *      npm install @prisma/client
 */

//Import das bibliotecas
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cria o objeto app utilizando a classe do express
const app = express();

//Configura as permissões do cors
app.use((request, response, next) => {

    //permissões da origem da requisição
    response.header('Acess-Control-Allow-Origin', '*');

    //permissões de métodos que serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //define as permissões para o cors
    app.use(cors());

    //continua a leitura dos endpoints
    next();
});

// CRUD (Create, Read, Update e Delete)

    /***************************************
     * EndPoint: Tabela de aluno
     * Versão: 1.0
     * Data: 14/04/2023
     ***************************************/

    //Criando uma const para realizar o processo de padronização de dados 
    //que vão chegar no body da requisição
    const bodyJSON = bodyParser.json();

    //Import da controller do aluno
    var controllerAluno = require('./controller/controller_aluno.js');

    var message = require('./controller/modulo/config.js')

    //EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){

        //Solicita a controller e retorna todos os alunos do banco de dados
        let dados = await controllerAluno.selecionarTodosAlunos();

        //Valida se existem registros para retornar na requisição
        if(dados){
            response.json(dados);
            response.status(200);
        } else {
            response.json();        // DAR UMA OLHADA NOS RESPONSE
            response.status(404);
        }

    });


    //EndPoint: Retorna dados do aluno pelo id
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    });


    //EndPoint: Inserir um novo aluno
    app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response){

        //chega como array
        let contentType = request.headers['content-type'];
         
        if(String(contentType).toLowerCase() == 'application/json'){

        

            //Recebe os dados encaminhados no body da requisição
            let dadosBody = request.body;

            //Envia os dados para a controller
            let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);

            //Retorna o status code e a message
            response.status(resultInsertDados.status);
            response.json(resultInsertDados);

        } else {
            response.status (message.ERROR_INVALID_CONTENT_TYPE.status);
            response.json(message.ERROR_INVALID_CONTENT_TYPE)
        }

    });


    //EndPoint: Atualiza um aluno pelo id
    app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function(request, response){
        //recebe os dados do body
        let dadosBody = request.body;

        //recebe o id do aluno
        let idAluno = request.params.id;

        //Encaminha os dados para serem atualizados
        let resultUpdateDados = await controllerAluno.atualizarAluno(dadosBody, idAluno);

        response.status(resultUpdateDados.status);
        response.json(resultUpdateDados);


    });


    //EndPoint: Exclui um aluno pelo id
    app.delete('/v1/lion-school/aluno/:id', cors(),  async function(request, response){

        let idAluno = request.params.id;

        let resultDeleteDados = await controllerAluno.deletarAluno(idAluno);

        response.status(resultDeleteDados.status);
        response.json(resultDeleteDados);

    });


    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080');
    });                                                                                                                                                                                                          
