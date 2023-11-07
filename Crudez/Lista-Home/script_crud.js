
// Array para armazenar as tarefas
let tarefas = [];

// Função para criar uma nova tarefa
function criarTarefa() {
  let novaTarefa = document.getElementById("novaTarefa").value;
  if (novaTarefa !== "") {
    tarefas.push(novaTarefa);
    atualizarLista();
    document.getElementById("novaTarefa").value = " ";
  }
}

// Função para atualizar a lista de tarefas
function atualizarLista() {
  let listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  tarefas.forEach(function (tarefa) {
    let item = document.createElement("li");
    item.innerHTML =
      tarefa +
      " <button onclick='atualizarTarefa(\"" + tarefa + "\")'>Editar</button> <button onclick='excluirTarefa(\"" +
      tarefa +
      "\")'>Excluir</button>";
    listaTarefas.appendChild(item);
  });
}

// Função para atualizar uma tarefa
function atualizarTarefa(tarefaAntiga) {



  let novaTarefa = prompt("Atualizar tarefa:", tarefaAntiga);
  if (novaTarefa !== null) {
    let index = tarefas.indexOf(tarefaAntiga);
    tarefas[index] = novaTarefa;
    atualizarLista();
  }
}

// Função para excluir uma tarefa
function excluirTarefa(tarefa) {
  if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
    let index = tarefas.indexOf(tarefa);
    tarefas.splice(index, 1);
    atualizarLista();
  }
}


//MODAL DA PAGINA!!

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
