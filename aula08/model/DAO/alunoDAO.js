/***************************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados.
 * Data: 14/04/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 **************************************************************/

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
    console.log(result)
  
    if(result)
        return true;
    else
        return false
}

//Atualizar um registro no banco de dados
const updateAluno = function(dadosAluno){

}

//Excluir um registro do banco de dados
const deleteAluno = function(id){


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
const selectByIdAluno = function(id){

}


module.exports = {
    selectAllAluno,
    insertAluno
}