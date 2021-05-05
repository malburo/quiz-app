import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
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
  async (config) => {
    const token = await AsyncStorage.getItem('@access_token');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error.response.data.error || error.message)
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error.response?.status === 401 && error.response.data.message === 'Token-expired') {
      await AsyncStorage.removeItem('@access_token');
    }
    return Promise.reject(error.response.data || error.message);
  }
);
export default request;
