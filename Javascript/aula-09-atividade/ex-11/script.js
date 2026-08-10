
const btnAdicionar = document.getElementById('btnAdicionar');
const minhaLista = document.getElementById('minhaLista');


btnAdicionar.addEventListener('click', () => {

  const quantidadeAtual = minhaLista.children.length;


  const novoItem = document.createElement('li');

  novoItem.textContent = `Item ${quantidadeAtual + 1}`;


  minhaLista.appendChild(novoItem);
});