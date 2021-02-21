import React, { useState } from 'react';
import AnswerForm from '../components/AnswerForm';
import Question from '../components/Question';
import { QUESTIONS_DATA } from '../../../../fakeData';

const Quiz = (props) => {
  const [questions, setQuestions] = useState(QUESTIONS_DATA);
  const [count, setCount] = useState(0);
  return (
    <>
      <Question content={questions[count].content} />
      <AnswerForm answers={questions[count].answers} />
    </>
  );
};

export default Quiz;
