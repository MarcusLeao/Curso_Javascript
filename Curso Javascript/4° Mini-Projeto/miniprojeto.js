//Velocidade máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
//Math.Floor()
//caso pontos maior que 12 =>> 'Carteira Suspensa'

verificarVelocidade(90);

function verificarVelocidade(velocidade){
    
    const maxVelocidade = 70;
    const kmPontos = 5;
    const maxPontos = 12;
   
    if (velocidade <= maxVelocidade)
        console.log('Ok');
   else{
       const pontos = Math.floor(((velocidade - maxVelocidade) / kmPontos));
       if (pontos >= maxPontos)
            console.log('Carteira Suspensa');
       else
            console.log('Pontos: ', pontos);
   }

} 