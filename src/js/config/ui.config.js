const UI = {
  form: document.forms['loginForm'],
  inputEmail: document.getElementById('email'),
  inputPassword: document.getElementById('password'),

  auth: {
    auth_form: document.forms['authForm'],
    email: document.getElementById('authEmail'),
    password: document.getElementById('authPassword'),
    nickname: document.getElementById('authNickname'),
    first_name: document.getElementById('authFirstName'),
    last_name: document.getElementById('authLastName'),
    phone: document.getElementById('authPhone'),
    gender_orientation: document.getElementById('authGender'),
    city: document.getElementById('authCity'),
    country: document.getElementById('authCountry'),
    date_of_birth_day: document.getElementById('authBirthDay'),
    date_of_birth_month: document.getElementById('authBirthMonth'),
    date_of_birth_year: document.getElementById('authBirthYear'),
  }
};

export default UI;