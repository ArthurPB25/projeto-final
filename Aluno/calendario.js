addEventListener("DOMContentLoaded", () =>{
    function generateCalendar(month, year) {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        
        const daysContainer = document.getElementById("calendarDays");
        const monthYearDisplay = document.getElementById("monthYear");
    
        // Limpa os dias do calendário
        daysContainer.innerHTML = "";
    
        // Exibe o mês e o ano
        monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
    
        // Calcula o primeiro dia e o número total de dias do mês
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();
    
        // Preenche os dias vazios antes do primeiro dia do mês
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            daysContainer.appendChild(emptyCell);
        }
    
        // Preenche os dias do mês
        for (let day = 1; day <= totalDays; day++) {
            const dayCell = document.createElement("div");
            dayCell.textContent = day;
    
            // Destaca o dia atual
            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayCell.classList.add("today");
            }
    
            daysContainer.appendChild(dayCell);
        }
    }
    
    // Inicializa o calendário com o mês e ano atuais
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    generateCalendar(currentMonth, currentYear);
    
    
});

