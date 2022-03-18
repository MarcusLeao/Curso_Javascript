//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão
//nesse objeto 

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(let chave in obj){

        if (typeof obj[chave] == 'string') {
            
            console.log(chave,obj[chave]);
        }
    }
}