//Criar função para mostrar os números primos

//Primos
//Compostos

//Ex: 10,11

exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite){
    for (let i = 1; i <= limite; i++) {
        if (verificarNumerosPrimos(i)) console.log(i);
        
    }
}

function verificarNumerosPrimos(numeros){
    for (let a = 2; a < numeros; a++) {
        
        if (numeros % a === 0){
            return false; 
        } 
    }
    return true
}
