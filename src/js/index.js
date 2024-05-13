// const inputsAll = document.querySelectorAll(".input")
// console.log(inputsAll);
// const camposAll = document.querySelectorAll(".label")
// console.log(camposAll);
// const botaoEnviar = document.querySelector(".botao")
// console.log(botaoEnviar);

// inputsAll.forEach((item)  => {
//     item.addEventListener('input', function() {
//         const textoDigitado = inputsAll.value.trim();

//         if (textoDigitado !== "") {
//         item.classList.add('invalido')
//     } else {
//         item.classList.remove('invalido')
//     }
// });

// });

function validar() {
    // Obtenha referências para os campos do formulário
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let mensagem = document.getElementById('mensagem');

    // Obtenha referências para os rótulos de erro
    let nomeErrorLabel = document.querySelector('label[for="nome"]');
    let emailErrorLabel = document.querySelector('label[for="email"]');
    let telefoneErrorLabel = document.querySelector('label[for="telefone"]');
    let mensagemErrorLabel = document.querySelector('label[for="mensagem"]');

    // Verifique se os campos obrigatórios estão preenchidos
    let isValid = true;
    if (nome.value === '') {
      nome.classList.add('error');
      nomeErrorLabel.style.display = 'block';
      isValid = false;
    } else {
      nome.classList.remove('error');
      nomeErrorLabel.style.display = 'none';
    }

    if (email.value === '') {
      email.classList.add('error');
      emailErrorLabel.style.display = 'block';
      isValid = false;
    } else {
      email.classList.remove('error');
      emailErrorLabel.style.display = 'none';
    }

    if (telefone.value === '') {
      telefone.classList.add('error');
      telefoneErrorLabel.style.display = 'block';
      isValid = false;
    } else {
      telefone.classList.remove('error');
      telefoneErrorLabel.style.display = 'none';
    }
    
    if (mensagem.value === '') {
      mensagem.classList.add('error');
      mensagemErrorLabel.style.display = 'block';
      isValid = false;
    } else {
      mensagem.classList.remove('error');
      mensagemErrorLabel.style.display = 'none';
    }

    // Se todos os campos obrigatórios estiverem preenchidos, envie o formulário
    if (isValid) {
      alert('Formulário enviado com sucesso!');
      // Você pode adicionar aqui o código para enviar o formulário para o servidor.
    }
  }