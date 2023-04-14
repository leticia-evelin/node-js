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

    //EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){


    });


    //EndPoint: Retorna dados do aluno pelo id
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){


    });


    //EndPoint: Inserir um novo aluno
    app.post('/v1/lion-school/aluno/:id', cors(), async function(request, response){


    });


    //EndPoint: Atualiza um aluno pelo id
    app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){


    });


    //EndPoint: Exclui um aluno pelo id
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){


    });


                                                                                                                                                                                                                 
