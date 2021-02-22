import React, { useState } from 'react';
import AnswerForm from '../components/AnswerForm';
import Question from '../components/Question';
import { QUESTIONS_DATA } from '../../../../fakeData';
import { StyleSheet, View } from 'react-native';
const Quiz = (props) => {
  const [questions, setQuestions] = useState(QUESTIONS_DATA);
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Question question={questions[count].question} />
      <AnswerForm answers={questions[count].answers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1117',
  },
});

export default Quiz;
