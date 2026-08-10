
const botao = document.querySelector('#btnAcao');
const infoBotao = document.getElementById('infoBotao');


botao.addEventListener('click', () => {

  infoBotao.textContent = botao.textContent;
});