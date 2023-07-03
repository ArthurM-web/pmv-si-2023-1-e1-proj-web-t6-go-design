document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do formulário
    var nomeInput = document.getElementById("nome");
    var sobrenomeInput = document.getElementById("sobrenome");
    var emailInput = document.getElementById("email");
    var senhaInput = document.getElementById("senha");
    var confirmarSenhaInput = document.getElementById("confirmarSenha");
    var criarContaBtn = document.getElementById("criarContaBtn");
  
    // Manipula o evento de clique no botão "Criar Conta"
    criarContaBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      // Obtém os valores dos campos de entrada
      var nome = nomeInput.value;
      var sobrenome = sobrenomeInput.value;
      var email = emailInput.value;
      var senha = senhaInput.value;
      var confirmarSenha = confirmarSenhaInput.value;
  
      // Verifica se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
      }
  
      // Cria um objeto com os dados do usuário
      var usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha
      };
  
      // Armazena os dados do usuário no Local Storage em formato JSON
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
    listaUser.push(usuario);
    localStorage.setItem("listaUser", JSON.stringify(listaUser));
  
      // Redireciona o usuário para outra página, por exemplo:
      window.location.href = "login.html";
    });
  });
  