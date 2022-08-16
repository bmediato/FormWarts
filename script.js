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
// console.log(button);
button.addEventListener('click', validar);
// Fim Requisito 3

// contador de caracteres
const textArea = document.getElementById('textarea');
const charCounter = document.getElementById('counter');
const maxLength = 500;

function characterCounter() {
  const typedCharacters = textArea.value.length;
  const counter = maxLength - typedCharacters;
  charCounter.textContent = `${counter}/500`; // essa atribuiçao é uma 'template literals', conforme sugerido pelo lint: https://eslint.org/docs/latest/rules/prefer-template
}
textArea.addEventListener('input', characterCounter);
// ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

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


//Requisito 21

let formPrint = document.getElementById('form-data')


function viewForm (){
  let viewInput = document.getElementById('form-data');

  let nomeInput = document.getElementById('input-name');
  let sobrenomeInput = document.getElementById('input-lastname');
  let emailInput = document.getElementById('input-email');
  let casaInput = document.getElementById('house');
  // let familiaInput = document.getElementById('label-family');
  // let materiaInput = document.getElementById('container-conteudo');
  // let avaliacaoInput = document.getElementById('n-avaliacao');
  // let observacoesInput = document.getElementById('textarea');

  viewInput.innerHTML = `Nome: ${nomeInput.value} ${sobrenomeInput.value}; 
  E-mail: ${emailInput.value};
  Casa: ${casaInput.value}`;
  // Família: ${familiaInput.value};
  // Materia: ${materiaInput.value};
  // Avaliação: ${avaliacaoInput.value};
  // Observações: ${observacoesInput.value};

}

// buttonSend.addEventListener('click', function(event){
//   event.preventDefault()});
buttonSend.addEventListener('click', viewForm);
