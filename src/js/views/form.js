import { getAutocompleteInstance } from '../plugin/materialize.js';

class FormUI {
  constructor(autocompleteInstance) {
    this._form = document.forms['authForm'];
    this.countryInput = document.getElementById('autocomplete-country'); //get DOM element 'Input'
    this.countryAutocomplete = autocompleteInstance(this.countryInput); //get Instance of DOM element
  }

  // создаем геттер формы, чтобы можно было юзать в арр.js и вешать на него листенер submit
  get form() {
    return this._form;
  }

  setAutocompleteData(data) {
    this.countryAutocomplete.updateData(data);
  }

}

const formUI = new FormUI(getAutocompleteInstance);

export default formUI;