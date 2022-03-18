// // let idade = 22;
// // console.log(idade);
// // let altura = 1.73;
// // console.log(altura);
// // let nome = "Marcus";
// // console.log(nome);

// // let pessoa = {
// //     nome: 'Marcus',
// //     sobrenome: 'Carneiro Leão',
// //     idade: 22,
// //     estaAprovado: true
// // };

// // console.log(pessoa);

// // let duda = ["Maria Eduarda", "Serafim de Morais", 23, 1.54, "Favela do Rato, Olinda"];
// // console.log(duda);
// let pessoa = 'Duda';
// console.log(pessoa);
// function mudarCaracteristica(nome, caracteristica){
//     pessoa = nome + " " + caracteristica;
// }

// mudarCaracteristica("Duda", "Linda");
// console.log(pessoa);

// function criarPessoa(nome,sobrenome,idade){
//     return { 
//         nome,
//         sobrenome,
//         idade,
//         salvar(){
//             console.log('Salvando...')
//         }
//     }
// }

// const pessoa = criarPessoa('Marcus', 'Carneiro Leão', 22);
// console.log(pessoa);


// function Pessoa(nome,sobrenome,idade){
    
//     this.nome = nome,
//     this.sobrenome = sobrenome,
//     this.idade = idade,
//     this.salvar = function(){
//         console.log('Salvando');
//     }
// }

// const pessoa = new Pessoa('Marcus', 'Carneiro Leão', 22);
// console.log(pessoa);

// const numeros =[1,2,3,4,5,6];

// const n = numeros.splice(2,2);

// console.log(numeros);

const resposta = prompt('Quem é o amor da sua vida?');

if (resposta === 'Marcus' || resposta === 'marcus') {
    alert('Te amo, você que é o amor da minha vida!!');
}
else{
    const teste = prompt('To tiste, tem cérteza?');
    if (teste === 'Sim' || teste === 'sim') {
        alert('to maguado')
    }
    else if (teste === 'Não' || teste === 'não') {
        const resposta2 = prompt('Então quem é?')
        if (resposta2 === 'Marcus' || resposta2 === 'marcus') {
            alert('Te amo, você que é o amor da minha vida!!');
        }
        else{
            alert('Desisto :(')
        }
        
    }
}