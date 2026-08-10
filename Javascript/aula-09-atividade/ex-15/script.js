
const tarefaInput = document.getElementById('tarefaInput');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');


btnAdicionar.addEventListener('click', () => {
  const textoTarefa = tarefaInput.value.trim();


  if (textoTarefa === '') {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  
  const novoLi = document.createElement('li');
  novoLi.textContent = textoTarefa;


  novoLi.addEventListener('click', () => {
    alert(`Tarefa concluída: ${novoLi.textContent}`);
    novoLi.remove();
  });


  listaTarefas.appendChild(novoLi);

  
  tarefaInput.value = '';
  tarefaInput.focus();
});