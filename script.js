// Requisito 3 - Botão que valida o formulário
function validar() {
  const email = document.getElementById('input-email');
  const senha = document.getElementById('input-senha');

  const emailValue = email.value;
  const senhaValue = senha.value;

  console.log('clicou no botão');
  if (emailValue === 'tryber@teste.com' && senhaValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementsByTagName('button')[0];
console.log(button);
button.addEventListener('click', validar);
// Fim Requisito 3

// Requisito 18 - Crie um botão de "Enviar" para submeter o formulário.
const buttonSend = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

buttonSend.disabled = true;
function stateHandle() {
  console.log(checkbox.checked);
  if (!checkbox.checked) {
    buttonSend.disabled = true;
  } else {
    buttonSend.disabled = false;
  }
}
checkbox.addEventListener('change', stateHandle);

// Fim Requisito 18 - fonte: https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/  ,  https://www.w3schools.com/jsref/prop_select_disabled.asp
