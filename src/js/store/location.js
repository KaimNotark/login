import axios from '../plugins/axios';
import API_ENV from '../config/api.config.js';

class Locations {
  constructor(api) {
    this.api = api;
    this.shortCountriesList = null;
    this.shortCitiesList = null;
    this.countriesArray = null;
    this.citiesArray = null;
  }

  async init() {
    const countries = await Promise.all([this.getCountriesFromServer()]);
    this.countriesArray = this.convertCountriesToArray(countries[0]);
    this.shortCountriesList = this.createShortList(this.countriesArray);

    const cities = await Promise.all([this.getCitiesFromServer(8)]);
    this.citiesArray = cities[0];
    this.shortCitiesList = this.createShortList(this.citiesArray);
    console.log('this.shortCitiesList--', this.shortCitiesList);
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

  // ["Achin", "Alaqehdari Deh-e Shu", ...]
  async getCitiesFromServer(code) {
    try {
      const response = await axios.get(
        `${this.api.citiesURL}/${code}`
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
  createShortList(array) {
    return array.reduce((acc, elem) => {
      acc[elem] = null;
      return acc;
    }, {});
  }

};

const locations = new Locations(API_ENV);
export default locations;

