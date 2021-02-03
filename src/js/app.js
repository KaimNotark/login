import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config.js';
import { validate } from './helpers/validate.js';
import { showInputError, removeInputError } from './views/form.js';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers
function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) { showInputError(el); };

    return isValidInput;
  });
  console.log('isValidForm', isValidForm);
};
