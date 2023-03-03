/************************************
 * Objetivo: Trabalhando com Array
 * Data: 24/02/2023
 * Autor: Letícia Evelin
 * Versão: 1.0
 ************************************/


// [] - significa que estamos manipulando array de dados 
// {} - - significa que estamos manipulando um formato JSON de dados 

const listaNomes = ['José', 'Maria', 'Luiz', 'Carlos', 'Marcel'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'WebCam']
const listaProdutosJSON = {};

//Exemplo de um JSON com estrutura de array
/*
    produtos = {
                [
                    {nome: "Teclado", cor : "Preto", quantidade : 50},
                    {nome: "Monitor", cor : "Branco", quantidade : 30}
                ]
            }
*/

// forma ERRADA de manipular um conjunto de dados
// const nome1 = 'José';
// const nome2 = 'Maria';
// const nome3 = 'Luiz';
// const nome4 = 'Carlos';

const manipulandoElementos = function(){

//Verifica o tipo de dados do elemento listaNomes
//console.log(typeof(listaNomes));

//Verifica o tipo de dados de um indice do array
console.log(typeof(listaNomes[1]));

//Exibe todos os elementos do array    
console.log(listaNomes);

//Exibe apenas um elemento conforme o seu indice
//console.log(listaNomes[0]);


console.log('O nome do usuário é ' + listaNomes[0]);
console.log(`O nome do usuário é ${listaNomes[0]}`);

//Permite contar quantos elementos tem em um array
console.log(`A quantidade de itens do meu array é: ${listaNomes.length}`)

//Percorrendo array usando WHILE
let cont = 0; //start
let qtdeItens = listaNomes.length; //stop

// console.log('Exibindo dados do array com o While');
// while(cont < qtdeItens){
//     console.log(`Nome: ${listaNomes[cont]}`);
//     cont +=1; //cont ++;
// }

//Percorrendo array usando FOR
// console.log('Exibindo dados do array com o FOR');
// let qtdeNomes = listaNomes.length; 
// for(let cont = 0; cont < qtdeNomes; cont++)
//     console.log(`Nome: ${listaNomes[cont]}`);

//Percorrendo array usando FOREACH    
console.log('Exibindo dados do array com o FOREACH');
//forEach é um método de um objeto array, que retorna uma função de callback
listaNomes.forEach(function(nome){
    console.log(`Nome: ${nome}`)
});


//Adicionando elementos novos no ARRAY
//Push - adiciona elementos no final do ARRAY
listaNomes.push('Alexandre', 'Marcos');
console.log(listaNomes);

//unshift - adiciona elementos no começo do ARRAY (ele muda a posição de todos os proximos elementos)
listaNomes.unshift('Ana Maria', 'Leonardo');
console.log(listaNomes);


//Removendo elementos do ARRAY
//POP - remove o último elemento do ARRAY
listaNomes.pop();
console.log(listaNomes);

//SHIFT - remove o primeiro elemento do ARRAY (reorganiza todos os proximos elementos)
listaNomes.shift();
console.log(listaNomes);
};

const filtrandoElementos = function(){

//indexOf - permite buscar elementos dentro de um ARRAY 
//se o retorno for -1 (não encontrou o item)
//se o retorno for maior ou igual a 0 (item encontrado)

console.log(listaProdutos);
//console.log(listaProdutos.indexOf('Fone de ouvido'));

if(listaProdutos.indexOf('Monitor') >= 0)
    console.log('O item pesquisado foi encontrado!');
else
    console.log('Item não encontrado!');

//slice - permite criar uma cópia do ARRAY, podendo selecionar os itens
 const novosProdutos = listaProdutos.slice(0, 3);
 console.log(listaProdutos);
 console.log(novosProdutos);
};

const removerElemento = function(array, nomeItem){
    //Cria uma cópia do Array
    let novaLista = array.slice();

    let nome = nomeItem;
    let indice = novaLista.indexOf(nome);
    let status;

    //splice - permite remover um elemento do ARRAY pelo indice
    //(não esquecer de passar a qtde de itens a ser removido)

    if(indice >= 0){
        novaLista.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }
    if(status)
        return novaLista;
    else
        return status;

};


const listagemProdutos = function(){
    let listProdutosJSON = {};
    let cont = 0;

    let listProdutos = [
                        {nome: 'Teclado DELL', valor: 200, quantidade: 50},
                        {nome: 'Monitor DELL', valor: 1000, quantidade: 70},
                        {nome: 'Mouse DELL', valor: 100, quantidade: 350},
                    ];

    let listCores = ['Branco', 'Preto', 'Cinza'];
    let listTipoTeclado = ['Mecânico', 'Semi-Mecânio', 'Membrana'];
    let listTipoMonitor = ['LCD', 'Full-HD', '4K', 'OLED'];
    
    //Adiciona chaves (opções) no teclado
    listProdutos[0].cores = listCores;
    listProdutos[0].tipo = listTipoTeclado;

    //Adiciona chaves (opções) no Monitor
    listProdutos[1].cores = listCores;
    listProdutos[1].tipo = listTipoMonitor;
   
    //Adiciona chaves (opções) no Mouse
    listProdutos[2].cores = listCores;


    //Adiciona uma chave produtos e coloca toda a estrutura dos produtos dentro dela
    listProdutosJSON.produtos = listProdutos;
    //console.log(listProdutosJSON);

    //console.log('Nome:' + listProdutosJSON.produtos[1].nome);
    //console.log('Valor:' + listProdutosJSON.produtos[1].valor);
    //console.log('Cor:' + listProdutosJSON.produtos[1].cores[1]);

   
    //listProdutos.forEach(function(produtos){
      //  console.log(`Nome: ${produtos.nome}\nQuantidade: ${produtos.quantidade}\nTipos: ${produtos.tipo}\nCores: ${produtos.cores}\nValor: ${produtos.valor}\n`);
    //});
    

    //Retorna todos os dados de produtos (primeiro nivel dos dados do JSON)
    listProdutosJSON.produtos.forEach(function(dadosProduto){
        console.log('Nome:' + dadosProduto.nome);
        console.log('Valor:' + dadosProduto.valor);

        //validação para tratar quando não existe cores de produto
        if(dadosProduto.cores != undefined){
            //retorna todas as cores existentes para cada produto
            dadosProduto.cores.forEach(function(dadosCores){
                console.log('*' + dadosCores);
            });
        }    
        //validação para tratar quando não existe tipos de produto
        if(dadosProduto.tipo != undefined){
            //retora os tipos existentes para cada produto
            dadosProduto.tipo.forEach(function(dadosTipo){
                console.log('**' + dadosTipo);
            });
        }
    });

    //listaProdutosJSON.clientes = listaNomes;
   
    //console.log(listaProdutosJSON.produtos[1])
    //console.log(listaProdutosJSON.clientes[2])
    //console.log(listaProdutosJSON)



};

listagemProdutos();
//console.log(removerElemento(listaNomes,'Luiz'));
//console.log(listaProdutos);
