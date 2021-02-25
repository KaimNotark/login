import { getAutocompleteInstance } from '../plugin/materialize.js';

class FormUI {
  constructor(autocompleteInstance) {
    this._form = document.forms['authForm'];
    this.countryInput = document.getElementById('authCountry'); //get DOM element 'Input'
    this.countryAutocomplete = autocompleteInstance(this.countryInput); //get Instance of DOM element

    this.cityInput = document.getElementById('authCity');
    this.cityAutocomplete = autocompleteInstance(this.cityInput);
  }

  setAutocompleteData(data) {
    this.countryAutocomplete.updateData(data);
  }

  setAutocompleteCitiesList(list) {
    this.cityAutocomplete.updateData(list);
  }

}

const formUI = new FormUI(getAutocompleteInstance);

export default formUI;