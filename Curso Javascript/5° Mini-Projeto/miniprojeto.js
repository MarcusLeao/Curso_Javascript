//Receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

exibirTipo(5);

function exibirTipo(limite){
    for (let i = 0; i <= limite; i++) {
        let numero = i % 2 === 0 ? 'Par' : 'Impar'
        console.log(i,numero)
    }
}