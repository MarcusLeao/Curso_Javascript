//Exercício de Nota Escolar
//Obter a media a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [100,100,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    
    const media = caulcularMedia(notas);
    
    if(media <= 59) return 'F';
    if(media <= 69) return 'D';
    if(media <= 79) return 'C';
    if(media <= 89) return 'B';
    return 'A' 
}

function caulcularMedia(array){
    let total = 0;
    
    for(let nota of array){
        total += nota;  
    }
    return total / (array.length);
}