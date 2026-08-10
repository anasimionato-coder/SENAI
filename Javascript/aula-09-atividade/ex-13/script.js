
let contador = 0;


const elementoContador = document.getElementById('contador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');

btnIncrementar.addEventListener('click', () => {
  contador++;
  elementoContador.textContent = contador;
});


btnDecrementar.addEventListener('click', () => {
  contador--;
  elementoContador.textContent = contador;
});