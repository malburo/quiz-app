import axiosClient from './axiosClient';

const questionApi = {
  getAll: (payload) => {
    return axiosClient.get(`quizzes/${payload.quizId}/questions`);
  },
};
export default questionApi;
