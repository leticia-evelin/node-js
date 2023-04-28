/***************************************************************
 * Objetivo: Implementar a regra de negócios entre o app e model
 * Data: 24/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/


 //Importe do arquivo de acesso ao banco de dados
 var alunoDAO = require('../model/DAO/alunoDAO.js')
 

//função para receber os dados do app e enviar para o model para inserir novo item
const inserirAluno = async function(dadosAluno){
    //Import do arquivo global de configurações do projeto
    let message = require('./modulo/config.js')

    if(    
        dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.lenght            > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf.lenght             > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg.lenght              > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.lenght > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined || dadosAluno.email.lenght           > 255
    ){
       return message.ERROR_REQUIRED_DATA;

    } else {

        //Envia os dados para a model a ser inseridos no banco de dados
       let status = await alunoDAO.insertAluno(dadosAluno);
        console.log(status);
       if(status)
        return message.CREATED_ITEM;
      else 
        return message.ERROR_INTERNAL_SERVER;
    }
};

//função para receber os dados do app e enviar para o model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

};

//função para excluir um aluno filtrado pelo id, será encaminhado para o model
const deletarAluno = function(id){

};

//função para retornar todos os itens da tabela recebidos do model
const selecionarTodosAlunos = async function(){

    //Solicita ao DAO todos os alunos do banco de dados
    let dadosAluno = await alunoDAO.selectAllAluno();

    //Cira um objeto do tipo JSON
    let dadosJSON = {};

    //Valida se o banco de dados teve registros, 
    //se sim adiciona o array de alunos em um JSON para retornar ao app
    if(dadosAluno){
        dadosJSON.alunos = dadosAluno;
        return dadosJSON;
    } else
        return false;    
};

//função para buscar um item filtrando pelo id, será encaminhado para o model
const buscarIdAluno = function(id){

};

module.exports = {
    selecionarTodosAlunos,
    inserirAluno
}