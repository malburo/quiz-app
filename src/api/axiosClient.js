import axios from 'axios';
import queryString from 'query-string';

const request = axios.create({
  baseURL: 'https://quizapp-backend-hutech.herokuapp.com/',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error.response.data.error || error.message)
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error.response.data.error || error.message);
  }
);
export default request;
