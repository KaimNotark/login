import axios from '../plugins/axios';
import API_ENV from '../config/api.config.js';

export const data = getCountriesForAutocomplete();

async function getCountriesForAutocomplete() {
  try {
    const response = await axios.get(
      `${API_ENV.countriesURL}`
    );
    // console.log('getCountries--RESP', response);

    const countriesArray = convertCountriesToArray(response);
    // console.log('countriesArray--', countriesArray);

    const countries = convertCountries(countriesArray);
    console.log('countries--', countries);

    return countries;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

function convertCountriesToArray(countries) {
  return Object.values(countries);
};

function convertCountries(countries) {
  return countries.reduce((acc, country) => {
    acc[country] = null;
    return acc;
  }, {});
};