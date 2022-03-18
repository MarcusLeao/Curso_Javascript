



const endereço = criarEndereço('Major Pajuaba', 'Recife', '52120-240')
exibirEndereço(endereço);


function criarEndereço(rua, cidade, cep){
    return{
        rua,
        cidade,
        cep
    }
}


function exibirEndereço(endereço){
   for (let chave in endereço) {

       console.log(chave,endereço[chave]);
       
   }
}