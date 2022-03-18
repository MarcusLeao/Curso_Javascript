


const postagem = criarPostagem('Video 1','Meu Primeiro Video','Marcus Nunes',500,[{ autor : 'Duda Morais', comentario : 'Ameii seu videoo'},{autor:'Edwiges Selva',comentario: 'Ótimo video!'}],true);

exibirPostagem(postagem);

function criarPostagem(titulo,mensagem,autor,vizualizações,comentarios,estaAoVivo){
   return{
    titulo,
    mensagem,
    autor,
    vizualizações,
    comentarios,
    estaAoVivo
   } 
}


function exibirPostagem(postagem){
    for(let chave in postagem){
        console.log(chave, postagem[chave]);
    }
}