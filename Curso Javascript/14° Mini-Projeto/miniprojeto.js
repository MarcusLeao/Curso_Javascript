//Criar um array de objetos de faixa de preço para que ela 
//possa ser usada em um site igual mercado livre

//Uma forma
let faixa = [
{tooltip:'Até 1000 Reais',minimo: 0,maximo: 1000},
{tooltip: 'De 1000 a 2000',minimo: 1000,maximo: 2000},
{tooltip: 'Acima de 2000', minimo: 2000,maximo: Infinity}
];

//Outra forma
function criarArrayFaixa(tooltip,minimo,maximo){
    return { tooltip,minimo,maximo};
}

let faixa2 = [
    criarArrayFaixa('Até R$1000',0,1000),
    criarArrayFaixa('De R$1000 a R$2000',1000,2000),
    criarArrayFaixa('Acima de R$2000',2000,Infinity)
];

//outra forma

function Faixa(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa3 =[
    new Faixa('Até $1000',0,1000),
    new Faixa('De $1000 a $2000',1000,2000),
    new Faixa('Acima de $2000',2000,Infinity)
]; 




console.log(faixa);
console.log(faixa2);
console.log(faixa3);