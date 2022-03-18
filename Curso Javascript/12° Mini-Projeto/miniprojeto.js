function Endereço(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep= cep
}

const endereço1 = new Endereço('a','b','c');
const endereço2 = new Endereço('a','b','c');

const igualdade = saoIguais(endereço1,endereço2);
const memoriaIgual = temEndereçoMemoriaIguais(endereço1,endereço2);
const tipagem = possuemMesmaTipagem(endereço1,endereço2);

console.log(igualdade);
console.log(memoriaIgual);
console.log(tipagem);

function saoIguais(endereço1,endereço2){
    for(let chave in endereço1){
        
        if(endereço1[chave] != endereço2[chave]) return false
    }
    return true;
}

function temEndereçoMemoriaIguais(endereço1,endereço2){
    return endereço1 === endereço2;
}

function possuemMesmaTipagem(endereço1,endereço2){
    for(let chave in endereço1){
        
        if(typeof endereço1[chave] != typeof endereço2[chave]) return false
    }
    return true;
}



