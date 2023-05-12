/***************************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados.
 * Data: 14/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/
//model não cria mensagem!! apenas na controller


  //Import da biblioteca do prisma client (responsável por manipular dados do banco de dados)
  var {PrismaClient} = require('@prisma/client');

  //Instância da classe do prisma client
  var prisma = new PrismaClient();


//Inserir um novo registro no banco de dados
const insertAluno = async function(dadosAluno){

    //Script SQL para inserir os dados no banco de dados
   let sql = `insert into tbl_aluno
    (nome, 
     cpf, 
     rg, 
     data_nascimento, 
     email
    )
    values
    ('${dadosAluno.nome}',
     '${dadosAluno.cpf}',
     '${dadosAluno.rg}',
     '${dadosAluno.data_nascimento}',
     '${dadosAluno.email}'
    )`;

   
    //Executa o script SQL no banco de dados e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql);
   
  
    if(result)
        return true;
    else
        return false
}

//Atualizar um registro no banco de dados
const updateAluno = async function(dadosAluno){

    let sql = `update tbl_aluno set
    nome = '${dadosAluno.nome}',
    rg = '${dadosAluno.rg}',
    cpf = '${dadosAluno.cpf}',
    data_nascimento = '${dadosAluno.data_nascimento}',
    email = '${dadosAluno.email}'
    where id = ${dadosAluno.id}` //busca pelo id

    //Executa o script no banco de dados
    let result = await prisma.$executeRawUnsafe(sql);

    if(result)
        return true;
    else
        return false;
}

//Excluir um registro do banco de dados
const deleteAluno = async function(idAluno){

    let sql = `delete from tbl_aluno
    where id = ${idAluno}
    `
    let result = await prisma.$executeRawUnsafe(sql)

    if(result)
        return true;
    else 
        return false;    
}

//Retorna todos registros do banco de dados
const selectAllAluno = async function(){

    //Variável com o script sql para executar no banco de dados
    let sql = 'select * from tbl_aluno';
  
    //Executa no banco de dados o scriptSQL
    //$queryRawUnsafe() é utilizado quando o scriptSQL está em uma variável
    //$queryRaw() é utilizado quando o script direto no metodo(Ex:$queryRaw('select * from tbl_aluno'))
    //rs = result set 
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //valida se o banco de dados retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno;
    } else {
        return false;
    }
}

//Retorna um registro filtrado pelo id do banco de dados
 const selectByIdAluno = async function(id){

    //Variável com o script sql para executar no banco de dados
    let sql = `select * from tbl_aluno where id = ${id}`;
  
    //Executa no banco de dados o scriptSQL
        //$queryRawUnsafe() é utilizado quando o scriptSQL está em uma variável
        //$queryRaw() é utilizado quando o script direto no metodo(Ex:$queryRaw('select * from tbl_aluno'))
        //rs = result set 
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //valida se o banco de dados retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno;
    } else {
        return false;
    }
}


const selectByNomeAluno = async function(nome){

    let sql = `select * from tbl_aluno where nome like '%variavel%'`;

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0){
        return rsAluno;
    } else {
        return false;
    }
}

const selectLastId = async function(){
    // invertendo a tabela, trazendo só o último  
    //script para retornar apenas o última registro inserido na tabela  
    let sql = 'select * from tbl_aluno order by id desc limit 1';

    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0)
        return rsAluno[0].id;
    else
        return false;    
}


module.exports = {
    selectAllAluno,
    insertAluno,
    updateAluno,
    deleteAluno,
    selectByIdAluno,
    selectLastId,
    selectByNomeAluno
}