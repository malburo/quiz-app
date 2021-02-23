import React, { useState } from 'react';
import AnswerForm from '../components/AnswerForm';
import Question from '../components/Question';
import { QUESTIONS_DATA } from '../../../../fakeData';
import { ScrollView, StyleSheet, View } from 'react-native';

const Quiz = (props) => {
  const [questions, setQuestions] = useState(QUESTIONS_DATA);
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Question question={questions[count].question} />
        <AnswerForm answers={questions[count].answers} />
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

export default Quiz;
