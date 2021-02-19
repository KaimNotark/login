import axios from '../plugins/axios';
import API_ENV from '../config/api.config.js';

export async function getCountries() {
  try {
    const response = await axios.get(
      `${API_ENV.countriesURL}`
    );
    console.log('getCountries--RESP', Object.values(response));
    return Object.values(response);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};