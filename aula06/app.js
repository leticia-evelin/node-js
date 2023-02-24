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


console.log(removerElemento(listaNomes,'Luiz'));
//console.log(listaProdutos);


