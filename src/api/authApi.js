import axiosClient from './axiosClient';

const authApi = {
  getMe: () => {
    return axiosClient.get('auth/getme');
  },
  login: (payload) => {
    return axiosClient.post('auth/login', payload);
  },
  register: (payload) => {
    return axiosClient.post('auth/register', payload);
  },
  forgotPassword: (payload) => {
    return axiosClient.post('auth/forgot_password', payload);
  },
};
export default authApi;
