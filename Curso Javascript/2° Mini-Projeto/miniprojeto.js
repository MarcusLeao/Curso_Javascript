// Escreva uma Função que usa 2 números e retorna o maior entre eles


function retornarMaior(numero1,numero2){
    if (numero1>numero2) {
        return numero1;
    }
    else if (numero1<numero2) {
        return numero2;;
    }
    
    return "Os números são iguais";
    
}

let resultado = retornarMaior(10,10);
console.log(resultado);
