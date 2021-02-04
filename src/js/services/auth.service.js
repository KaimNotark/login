import axios from '../plugins/axios';
// import API_ENV from '../config/api.config.js'; -- OLD

/**
 * Function login. Make login request to API
 * @param {String} email 
 * @param {String} password 
 */
export async function login(email, password) {
  try {
    const response = await axios.post(
      // `${API_ENV.apiURL}/auth/login`, -- OLD 
      `/auth/login`, //--NEW не нужно указывать URL, т.к. он прописан по умолчанию в инстансе axios
      JSON.stringify({ email, password }),
      // { headers: { 'Content-Type': 'application/json', }, }, -- тоже теперь не нужен
    );
    console.log(response);
    return response.data;

  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}