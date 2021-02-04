import axios from '../plugins/axios';

/**
 * Function login. Make login request to API
 * @param {String} email 
 * @param {String} password 
 */
export async function getNews() {
  try {
    const response = await axios.get('/news');

    console.log(response);
    return response;

  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}