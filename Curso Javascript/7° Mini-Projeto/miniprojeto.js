//Criar função de soma que retorna a soma de todos os 
//mútiplos de 3 e 5

somar(10);

function somar(limite){
    let resultado = 0;
    
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        resultado += i;
        }
    }
    console.log(resultado)
}