// Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(10)

function exibirAsteriscos(linhas){
    for (let i = 0; i <= linhas; i++) {
        let linha = '';
        for (let asterisco = 0; asterisco < i; asterisco++) {
            
            linha += '*';
            
        }
        console.log(linha);
        
    }
}