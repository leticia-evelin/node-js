/***************************************************************
 * Objetivo: Implementar a regra de negócios entre o app e model
 * Data: 24/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/


 //Importe do arquivo de acesso ao banco de dados
 var alunoDAO = require('../model/DAO/alunoDAO.js');

 //Import do arquivo global de configurações do projeto
 var message = require('./modulo/config.js')
 

//função para receber os dados do app e enviar para o model para inserir novo item
const inserirAluno = async function(dadosAluno){
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
    
       if(status)
        return message.CREATED_ITEM;
      else 
        return message.ERROR_INTERNAL_SERVER;
    }
};

//função para receber os dados do app e enviar para o model para atualizar um item existente
const atualizarAluno = async function(dadosAluno, idAluno){

    //Validação dos dados
    if(    
        dadosAluno.nome            == '' || dadosAluno.nome            == undefined || dadosAluno.nome.lenght            > 100 ||
        dadosAluno.cpf             == '' || dadosAluno.cpf             == undefined || dadosAluno.cpf.lenght             > 18  ||
        dadosAluno.rg              == '' || dadosAluno.rg              == undefined || dadosAluno.rg.lenght              > 15  ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.lenght > 10  ||
        dadosAluno.email           == '' || dadosAluno.email           == undefined || dadosAluno.email.lenght           > 255
    ){
       return message.ERROR_REQUIRED_DATA;

     // Validação para o ID
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_REQUIRED_ID;
    } else {
        //Adiciona o ID no JSON com todos os dados
        dadosAluno.id = idAluno;

        //Encaminha para o DAO os dados para serem alterados
        let status = await alunoDAO.updateAluno(dadosAluno);

        if(status)
            return message.UPDATED_ITEM
        else 
            return message.ERROR_INTERNAL_SERVER
            
    }
};

//função para excluir um aluno filtrado pelo id, será encaminhado para o model
const deletarAluno = async function(idAluno){

    if(idAluno == '' || idAluno == undefined || isNaN(idAluno)){
        return message.ERROR_REQUIRED_ID
    } else {

        let status = await alunoDAO.deleteAluno(idAluno);

        if(status)
            return message.DELETED_ITEM
        else 
            return message.ERROR_INTERNAL_SERVER    
    }
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
const buscarIdAluno = function(idAluno){

};

module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}