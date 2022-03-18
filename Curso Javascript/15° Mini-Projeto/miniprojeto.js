


function VerificarEntrada(){
    let NomeConvidado = document.getElementById('nome').value;
    let ConvidadoPor = document.getElementById('ConvidadoPor').value;

    let Marcus =  ['Guilherme Torres','Caio Alves','José Carlos','Thiago Lucena'];
    let Eduarda = ['Marina Neves','Fernanda Neves','Gabriela Figueiroa','Mariana Cavalcanti','Eduarda Oliveira'];

    if (ConvidadoPor === 'Marcus') {
        if (Marcus.includes(NomeConvidado)) {
            document.getElementById('PermissaoDeEntrada').innerText ='Você Pode entrar!'
        }
        else{
            document.getElementById('PermissaoDeEntrada').innerText ='Você não pode entrar!'
        }
    }
    else if (ConvidadoPor === 'Eduarda') {
        if (Eduarda.includes(NomeConvidado)) {
            document.getElementById('PermissaoDeEntrada').innerText ='Você Pode entrar!'
        }
        else{
            document.getElementById('PermissaoDeEntrada').innerText ='Você não pode entrar!'
        }
    }
    else{
        document.getElementById('PermissaoDeEntrada').innerText ='Essa pessoa não convidou ninguém!'
    }
}
