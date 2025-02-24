function alterarStatus(id) {
    let gameEscolhido = document.getElementById(`game-${id}`);
    let imagens = gameEscolhido.querySelector('.dashboard__item__img');
    let botao = gameEscolhido.querySelector('.dashboard__item__button');

    if (imagens.classList.contains('dashboard__item__img--rented')){
        alert(confirm())
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
        imagens.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        }
    }
    else {
        imagens.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}