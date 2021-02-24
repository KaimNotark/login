import axios from '../plugins/axios';
import API_ENV from '../config/api.config.js';

class Locations {
  constructor(api) {
    this.api = api;
    this.shortCountriesList = null;
  }

  async init() {
    const countries = await Promise.all([this.getCountriesFromServer()]);
    const countriesArray = this.convertCountriesToArray(countries[0]);
    this.shortCountriesList = this.createShortCountriesList(countriesArray);
  }

  // {1: "Afghanistan", 2: "Albania", ...}
  async getCountriesFromServer() {
    try {
      const response = await axios.get(
        `${this.api.countriesURL}`
      );
      return response;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  // {1: "Afghanistan", 2: "Albania", ...} --> ["Afghanistan", "Albania", ...]
  convertCountriesToArray(countries) {
    return Object.values(countries);
  }

  // ["Afghanistan", "Albania", ...] --> { "Afghanistan": null, ... }
  createShortCountriesList(countries) {
    return countries.reduce((acc, country) => {
      acc[country] = null;
      return acc;
    }, {});
  }

};

const locations = new Locations(API_ENV);
export default locations;

