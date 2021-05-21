import axiosClient from './axiosClient';

const userApi = {
  update: (payload) => {
    return axiosClient.put(`/users/${payload.userId}`, payload.data);
  },
  changeAvatar: (payload) => {
    return axiosClient.put(`users/${payload.userId}/changeAvatar`, payload.data);
  },
  changePassword: (payload) => {
    return axiosClient.post(`users/${payload.userId}/change_password`, payload.data);
  },
  leaderBoard: () => {
    return axiosClient.get(`leaderboard`);
  },
};
export default userApi;
