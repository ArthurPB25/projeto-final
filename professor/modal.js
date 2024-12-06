// Constantes de elementos e chave do localStorage
const localStorageKey = 'to-do-list';
const modal = document.getElementById("modal-lista");
const buttonClose = document.getElementById("fechar");
const buttonNewTask = document.getElementById("btn-new-task");
const adicionarListaButton = document.getElementById("adicionar_lista");

// Função para abrir o modal
adicionarListaButton.addEventListener("click", () => {
    modal.showModal();
});

// Função para fechar o modal
buttonClose.addEventListener("click", () => {
    modal.close();
});

// Função para adicionar uma nova tarefa
buttonNewTask.addEventListener("click", () => {
    const input = document.getElementById('input-new-task');
    const taskName = input.value.trim();

    if (!taskName) {
        alert('Digite algo para inserir em sua lista');
    } else {
        const values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({ name: taskName });
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showValues();
        input.value = ''; // Limpa o campo de entrada
    }
});

// Função para exibir tarefas salvas
function showValues() {
    const values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const list = document.getElementById('to-do-list');
    list.innerHTML = ''; // Limpa a lista

    values.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;

        // Botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = '✔️';
        removeButton.title = 'Marcar como concluída';
        removeButton.addEventListener("click", () => removeItem(item.name));

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    });
}

// Função para remover um item
function removeItem(name) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values = values.filter(item => item.name !== name);
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
}

// Exibe os valores salvos na inicialização
showValues();
