// Корректный email - denis.m.pcspace@gmail.com
// Пароль - dmgame12345


import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config.js';
import { validate } from './helpers/validate.js';
import { showInputError, removeInputError } from './views/form.js';
import { login } from './services/auth.service.js';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) { showInputError(el); };

    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    form.reset();
  } catch (error) {

  }

};
