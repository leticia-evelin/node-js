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


//Cria umm objeto com as informações da classe express
const app = express();