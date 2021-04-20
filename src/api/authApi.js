import axiosClient from './axiosClient';

const authApi = {
  getMe: (payload) => {
    return axiosClient.post('auth/getMe', payload);
  },
  login: (payload) => {
    return axiosClient.post('auth/login', payload);
  },
  register: (payload) => {
    return axiosClient.post('auth/register', payload);
  },
};
export default authApi;
