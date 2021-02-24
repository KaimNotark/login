// Корректный email - denis.m.pcspace@gmail.com
// Пароль - dmgame12345


import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import "./plugin";
import UI from './config/ui.config.js';
import formUI from './views/form.js';
import { validate } from './helpers/validate.js';
// import { showInputError, removeInputError } from './views/form.js';
import { login, auth } from './services/auth.service.js';
import { notify } from './views/notifications.js';
import { getNews } from './services/news.service.js';
// import { data } from './store/location.js';
import locations from "./store/location.js";


document.addEventListener("DOMContentLoaded", () => {
  initApp();

  const { form, inputEmail, inputPassword } = UI;
  const inputs = [inputEmail, inputPassword];

  const { auth: {
    auth_form,
    email,
    password,
    nickname,
    first_name,
    last_name,
    phone,
    gender_orientation,
    city,
    country,
    date_of_birth_day,
    date_of_birth_month,
    date_of_birth_year,
  } } = UI;

  const authInputs = [
    email,
    password,
    nickname,
    first_name,
    last_name,
    phone,
    gender_orientation,
    city,
    country,
    date_of_birth_day,
    date_of_birth_month,
    date_of_birth_year,
  ];

  const data = {
    Aaabb: null,
    aabb: null,
    abbcc: null,
  };

  // let listOfCountries = [
  //   Angarsk, Angora, Annigilations, Arislan,
  // ];
  // let listOfCountries = {
  //   Angarsk: null,
  //   Angora: null,
  //   Annigilations: null,
  //   Arisla: null,
  // };

  // Events
  form.addEventListener('submit', e => {
    e.preventDefault();
    onFormSubmit();
  });

  auth_form.addEventListener('submit', e => {
    e.preventDefault();
    onAuthFormSubmit();
  });

  inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

  // Handlers
  async function onFormSubmit() {

    const isValidForm = inputs.every(el => {
      const isValidInput = validate(el);
      if (!isValidInput) { showInputError(el); };

      return isValidInput;
    });

    if (!isValidForm) return;

    try {
      await login(inputEmail.value, inputPassword.value);
      await getNews();

      form.reset();
      notify({ msg: 'Login success', className: 'alert-success' })
    } catch (error) {
      notify({ msg: 'Login faild', className: 'alert-danger' })

    }

  };

  async function onAuthFormSubmit() {
    console.log('onAuthFormSubmit is RUN');
    try {
      await auth(
        email.value,
        password.value,
        nickname.value,
        first_name.value,
        last_name.value,
        phone.value,
        gender_orientation.value,
        city.value,
        country.value,
        date_of_birth_day.value,
        date_of_birth_month.value,
        date_of_birth_year.value,
      );
      auth_form.reset();
    } catch (error) {
      console.log("onAuthFormSubmit--ERROR", error);
    }
  };

  async function initApp() {
    await locations.init();
    console.log('APP--shortCountriesList', locations.shortCountriesList);
    // await data;
    // console.log(data);
    // formUI.setAutocompleteData(data);

  };

});