import axiosClient from './axiosClient';

const quizApi = {
  getAll: (payload) => {
    return axiosClient.get(`topics/${payload.topicId}/quizzes`);
  },
};
export default quizApi;
