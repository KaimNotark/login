import { getAutocompleteInstance } from '../plugin/materialize.js';

class FormUI {
  constructor(autocompleteInstance) {
    this._form = document.forms['authForm'];
    this.country = document.getElementById('autocomplete-country');
    this.countryAutocomplete = autocompleteInstance(this.country);
  }

  get form() {
    return this._form;
  }

  setAutocompleteData(data) {
    this.countryAutocomplete.updateData(data);
  }

}

const formUI = new FormUI(getAutocompleteInstance);

export default formUI;