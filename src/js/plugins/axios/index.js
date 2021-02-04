import axios from 'axios';
import API_ENV from '../../config/api.config.js';
import interceptors from './interceptors.js';

// создается экземпляр axios 
const instance = axios.create({
  // задаем настройки, которые будут подставляться по умольчанию
  baseURL: API_ENV.apiURL, // задаём URL, который будет подставляться автоматически везде
  headers: {
    'Content-Type': 'application/json'
  },
});

// передаём инстанс axios в интерсепторы, т.к.
// в нем содержатся методы для внедрения в запросы
interceptors(instance);

export default instance;