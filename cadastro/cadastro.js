// script.js

// Função para cadastrar as informações
function cadastrar() {
    // Captura os valores dos campos do formulário
    console.log("bateu")
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const funcao = document.getElementById('escolha').value;

    // Verifica se todos os campos foram preenchidos
    if (nome && senha && cpf && funcao) {
        // Cria um objeto com os dados do formulário
        const usuario = {
            nome: nome,
            senha: senha,
            cpf: cpf,
            funcao: funcao
        };

        // Recupera os usuários cadastrados no localStorage (se houver)
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Adiciona o novo usuário à lista
        usuarios.push(usuario);

        // Salva a lista atualizada no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));


        // Exibe uma mensagem de sucesso
        alert("Cadastro realizado com sucesso!");

        // Limpa o formulário
        document.getElementById('loginForm').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Adiciona o evento de clique ao botão de cadastro
document.getElementById('btnCadastrar').addEventListener('click', cadastrar);