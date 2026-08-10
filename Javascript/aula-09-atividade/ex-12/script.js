
const paragrafo = document.getElementById('removivel');
const btnRemover = document.getElementById('btnRemover');


btnRemover.addEventListener('click', () => {
 
  if (paragrafo) {

    const texto = paragrafo.textContent;

    alert(`Removendo o parágrafo: ${texto}`);


    paragrafo.remove();
  }
});