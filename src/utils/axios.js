import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.VITE_BACKEND_URL,
});

export default instance;
