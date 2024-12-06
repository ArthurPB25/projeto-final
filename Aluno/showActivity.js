function exibirAtividades() {
  // Recupera as atividades salvas no localStorage
  const savedActivities = JSON.parse(localStorage.getItem("activities")) || [];
  console.log(savedActivities);

  // Função auxiliar para exibir atividades em um único contêiner
  function mostrarAtividadesPorMateria(materia, containerId, limite) {
    // Filtra atividades para a matéria e limita a quantidade exibida
    const atividades = savedActivities.filter((activity) => activity.atividade.toLowerCase() === materia.toLowerCase()).slice(0, limite);

    const container = document.getElementById(containerId);

    // Limpa o conteúdo anterior
    container.innerHTML = "";

    // Adiciona as atividades ao contêiner
    if (atividades.length > 0) {
      atividades.forEach((atividade) => {
        const li = document.createElement("li");

        // Formata a data antes de exibir
        const dataFormatada = formatarData(new Date(atividade.data));
        const horaFormatada = formatarHora(atividade.horario); // Não usar new Date

        li.innerHTML = `
                      ${atividade.descricao} 
                      <span class="data">${dataFormatada}</span>
                      <button class="ver-detalhes" onclick="openModal('${atividade.atividade}', '${atividade.descricao}', '${dataFormatada}', '${horaFormatada}')">Ver Detalhes</button>
                  `;
        container.appendChild(li);
      });
    } else {
      container.innerHTML = "<li class='nenhuma_ati'>Nenhuma atividade</li>";
    }
  }

  // Exibe as atividades para cada matéria com limite de 3
  mostrarAtividadesPorMateria("matematica", "atividades_matematica", 3);
  mostrarAtividadesPorMateria("português", "atividades_portugues", 3);
  mostrarAtividadesPorMateria("biologia", "atividades_biologia", 3);
}

// Chama a função ao carregar a página
window.onload = exibirAtividades;

function formatarData(data) {
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear().toString().slice(-2);
  return `${dia}/${mes}/${ano}`;
}

function formatarHora(horaString) {
  // Retorna a hora sem alteração, pois já está no formato HH:mm
  return horaString;
}

// Função para abrir o modal com os detalhes da atividade
function openModal(atividade, descricao, data, hora) {
  const modal = document.getElementById("modalDialog");

  // Preenche o modal com as informações da atividade
  document.getElementById("atividadeNome").textContent = atividade;
  document.getElementById("atividadeDescricao").textContent = descricao;
  document.getElementById("atividadeData").textContent = data;
  document.getElementById("atividadeHora").textContent = hora;

  // Exibe o modal
  modal.showModal();
}

function closeModal() {
  console.log("Modal fechado");
  const modal = document.getElementById("modalDialog");
  modal.close(); // Fecha o modal
}

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("closeButton");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  } else {
    console.error("Botão de fechar não encontrado");
  }
});
