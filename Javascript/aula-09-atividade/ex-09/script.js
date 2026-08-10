
const caixa = document.getElementById('minhaCaixa');
const btnAplicar = document.getElementById('btnAplicar');

btnAplicar.addEventListener('click', () => {
 
  caixa.style.backgroundColor = 'yellow';
  caixa.style.border = '2px solid black';
  caixa.style.padding = '20px';
});