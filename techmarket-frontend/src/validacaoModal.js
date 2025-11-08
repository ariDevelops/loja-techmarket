 document.getElementById("meuFormulario").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita envio automático

      let cpf = document.getElementById("cpf").value.trim();
      let dataNascimento = document.getElementById("dataNascimento").value;
      let telefone = document.getElementById("telefone").value.trim();

      let cpfErro = document.getElementById("cpfErro");
      let dataErro = document.getElementById("dataErro");
      let telefoneErro = document.getElementById("telefoneErro");

      let valido = true;

        // Limpa mensagens anteriores
      cpfErro.textContent = "";
      dataErro.textContent = "";
      telefoneErro.textContent = "";

      //  Validação CPF (11 dígitos)
      if (!/^\d{11}$/.test(cpf)) {
        cpfErro.textContent = "O CPF deve conter exatamente 11 dígitos numéricos.";
        valido = false;
      }

      //  Validação Data de Nascimento (deve ser data válida e maior de 18 anos)
      if (!dataNascimento) {
        dataErro.textContent = "Por favor, insira uma data de nascimento válida.";
        valido = false;
      } else {
        let dataNasc = new Date(dataNascimento);
        let hoje = new Date();
        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        let mes = hoje.getMonth() - dataNasc.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
          idade--;
        }
        if (idade < 18) {
          dataErro.textContent = "Você deve ter pelo menos 18 anos.";
          valido = false;
        }
      }

      //  Validação Telefone (padrão: 10 ou 11 dígitos)
      if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone)) {
        telefoneErro.textContent = "Digite um número de telefone válido (ex: (11) 98765-4321).";
        valido = false;
      }

      //  Se tudo estiver certo
      if (valido) {
        alert("Formulário enviado com sucesso!");
        this.reset();
      }
    });