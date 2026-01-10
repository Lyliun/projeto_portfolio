const formulario = document.querySelector('#formulario');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const campoNome = document.querySelector('#name');
  const errNome = document.querySelector('#errNome');

  if (campoNome.value.length < 3) {
    errNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
    campoNome.focus();
    return;
  } else {
    errNome.innerHTML = '';
  }

  const campoEmail = document.querySelector('#email');
  const errEmail = document.querySelector('#errEmail');

  if (!emailRegex.test(campoEmail.value)) {
    errEmail.innerHTML = 'Por favor, insira um email válido.';
    campoEmail.focus();
    return;
  } else {
    errEmail.innerHTML = '';
  }

  const campoSubject = document.querySelector('#subject');
  const errSubject = document.querySelector('#errSubject');

  if (campoSubject.value.length < 5) {
    errSubject.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
    campoSubject.focus();
    return;
  } else {
    errSubject.innerHTML = '';
  }

  const campoMensagem = document.querySelector('#message');

  alert('Formulário enviado com sucesso!');

  campoNome.value = '';
  campoEmail.value = '';
  campoSubject.value = '';
  campoMensagem.value = '';
});
