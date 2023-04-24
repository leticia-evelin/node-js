/***************************************************************
 * Objetivo: Implementar a regra de negócios entre o app e model
 * Data: 24/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/

//função para receber os dados do app e enviar para o model para inserir novo item
const inserirAluno = function(dadosAluno){

};

//função para receber os dados do app e enviar para o model para atualizar um item existente
const atualizarAluno = function(dadosAluno){

};

//função para excluir um aluno filtrado pelo id, será encaminhado para o model
const deletarAluno = function(id){

};

//função para retornar todos os itens da tabela recebidos do model
const selecionarTodosAlunos = async function(){
    //Importe do arquivo de acesso ao banco de dados
    let alunoDAO = require('../model/DAO/alunoDAO.js')
    console.log(alunoDAO);

    //Solicita ao DAO todos osalunos do banco de dados
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
    selecionarTodosAlunos
}