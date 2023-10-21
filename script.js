const singUpButton = document.getElementById('singUp');
const singInButton = document.getElementById('singIn');
const container = document.getElementById('container');

singUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

singInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Login Form
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');
