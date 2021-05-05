import axiosClient from './axiosClient';

const topicApi = {
  getAll: () => {
    return axiosClient.get('topics');
  },
};
export default topicApi;
