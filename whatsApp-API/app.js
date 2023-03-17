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
//responsável pelas requisições
const express = require('express');
//responsável pelas requisições das permissões
const cors = require('cors');
// responsável pela manipulação da requisição
const bodyParser = require('body-parser');

 //Importe do arquivo de funções para listar os estados e as cidades


//Cria umm objeto com as informações da classe express
const app = express();