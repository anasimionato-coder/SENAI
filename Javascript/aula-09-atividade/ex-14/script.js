
const caixa = document.getElementById('caixa');
const btnAtivar = document.getElementById('btnAtivar');
const btnDesativar = document.getElementById('btnDesativar');
const btnVerificar = document.getElementById('btnVerificar');


btnAtivar.addEventListener('click', () => {
  caixa.classList.add('ativo');
});

btnDesativar.addEventListener('click', () => {
  caixa.classList.remove('ativo');
});


btnVerificar.addEventListener('click', () => {
  const estaAtivo = caixa.classList.contains('ativo');
  alert(`A classe 'ativo' está presente? ${estaAtivo}`);
});