var botao = document.querySelector('#botao');
var mensagem = document.querySelector('.mensagem');

botao.addEventListener('click', function() {

    if(mensagem.style.display === 'block') {
        mensagem.style.display = 'none';
    }
    else{
        mensagem.style.display = 'block';

    }
});
