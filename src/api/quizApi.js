import axiosClient from './axiosClient';

const quizApi = {
  getAll: (payload) => {
    return axiosClient.get(`topics/${payload.topicId}/quizzes`);
  },
  submitAnswer: (payload) => {
    return axiosClient.post(`quizzes/${payload.quizId}/submit`, { userSubmission: payload.userSubmission });
  },
};
export default quizApi;
