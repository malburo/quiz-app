import React, { useState } from 'react';
import AnswerForm from '../components/AnswerForm';
import Question from '../components/Question';
import { QUESTIONS_DATA } from '../../../../fakeData';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const QuizDetail = (props) => {
  const [questions, setQuestions] = useState(QUESTIONS_DATA);
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProgressBar progress={count / 10} color={'red'} />
        <Question question={questions[count - 1].question} />
        <AnswerForm answers={questions[count - 1].answers} setCount={setCount} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1117',
    height: '100%',
  },
});

export default QuizDetail;
