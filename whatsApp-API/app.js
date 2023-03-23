/********************************************************
 * "Mini" Projeto Integrado!
 * 
 * Objetivo: Criar uma API para o projeto do Whatsapp que 
   a equipe de Front-End já disponibilizou
 * Data: 17/03/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 ********************************************************/


//Importe das dependências para criar a API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

 //Importe do arquivo de funções para listar os contatos, conversas
const contatos = require('./modulo/contatos.js')

//Cria umm objeto com as informações da classe express
const app = express();

app.use((request, response, next) => {

  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Metods', 'GET, POST, PUT, DELETE, OPTIONS')

  app.use(cors());
  next();
});

//ENDPOINT getContatos
app.get('/v1/senai/contato/:nome', cors(), async function(request, response, next){

    let nomeContato = request.params.nome;
    let statusCode;
    let conversasContato = {};

    if(nomeContato == '' || nomeContato == undefined || !isNaN(nomeContato)){
      statusCode = 400;
      conversasContato.message = "Não é possível processar a requisição :/";
    } else {

      //Chama a função que filtra o estado pela sigla
      let contato = contatos.getContatos(nomeContato);
      //Valida se houve o retorno válido da função
      if(contato){
        statusCode = 200; //conversa/nome não encontrado
        conversasContato = contato;
      } else {
        statusCode = 404; //nome não encontrado
      }
    }

  response.status(statusCode);
  response.json(conversasContato);
});

//ENDPOINT getFiltroAccount (lista apenas mensagem de 1 contato)
app.get('/v2/senai/contato/:nome', cors(), async function(request, response, next){

  let nomeContato = request.params.nome;
  let statusCode;
  let conversasContato = {};

  if(nomeContato == '' || nomeContato == undefined || !isNaN(nomeContato)){
    statusCode = 400;
    conversasContato.message = "Não foi possível processar a requisição :/";
  } else {
    let contato = contatos.getFiltroAccount(nomeContato);

    if(contato){
      statusCode = 200; //conversa não encontrada
      conversasContato = contato;
    } else {
      statusCode = 404; //conversa não encontrada
    }
  }

  response.status(statusCode);
  response.json(conversasContato);
});


app.listen(8080, function(){
  console.log('Servidor aguardando requisições na porta 8080.')
});

