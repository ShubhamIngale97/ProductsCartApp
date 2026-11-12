
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


apiClient.interceptors.request.use(
  config => {
    console.log('[API Request]', config.method, config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);


apiClient.interceptors.response.use(
  response => {
    console.log('[API Success]', response.status);
    return response;
  },
  error => {
    console.log('[API Error]', error.message);
    return Promise.reject(error);
  },
);



export default apiClient;
