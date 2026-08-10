
const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('meuParagrafo');

botao.addEventListener('click', () => {
 
  paragrafo.classList.toggle('oculto');
});