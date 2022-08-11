function validar() {
  const email = document.getElementById('input-email');
  const senha = document.getElementById('input-senha');

  const emailValue = email.value;
  const senhaValue = senha.value;

  console.log("clicou no botão");
  if (emailValue === "tryber@teste.com" && senhaValue === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }

}

const button = document.getElementsByTagName('button')[0];
console.log(button);
button.addEventListener('click', validar);
