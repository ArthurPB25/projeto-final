function urgencias_exibir() {
    // Recupera as atividades salvas no localStorage
    const savedActivities = JSON.parse(localStorage.getItem("activities")) || [];


    // Função para calcular se a atividade está próxima do prazo
    function atividades_proximas_da_data(data) {
        const hoje = new Date(); // Data atual
        const prazo = new Date(data); // Data do prazo da atividade

        // Calcula a diferença entre o prazo e a data atual
        const diferencaEmMilissegundos = prazo - hoje;

        // Converte a diferença para dias
        const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

        // Verifica se a atividade está com prazo dentro de 7 dias
        return diferencaEmDias >= 0 && diferencaEmDias <= 7;
    }

    // Filtra as atividades que faltam uma semana para o prazo
    const atividadesProximas = savedActivities.filter(activity => atividades_proximas_da_data(activity.data));
    
    // Seleciona o contêiner para exibir as atividades
    const container = document.getElementById("atividades_urgencia");
    container.innerHTML = "";

    // Exibe as atividades que faltam uma semana
    if (atividadesProximas.length > 0) {
        atividadesProximas.forEach(atividade => {
            const li = document.createElement("li");

            // Formata a data do prazo
            const dataFormatada = formatarData(new Date(atividade.data));

            li.innerHTML = `
                <strong>${atividade.descricao}</strong> - <span class="data">${dataFormatada}</span>
            `;
            container.appendChild(li);
        });
    } else {
        container.innerHTML = "<li class='nenhuma_ati'>Nenhuma atividade com prazo dentro de uma semana</li>";
    }

        
    

}

// Função para formatar a data no formato dd/mm/aa
function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString().slice(-2); // Últimos dois dígitos do ano
    return `${dia}/${mes}/${ano}`;
}

// Chama a função ao carregar a página
window.onload = urgencias_exibir;
