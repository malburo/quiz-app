import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { QUIZZES_DATA } from '../../../../fakeData';
import QuizCard from '../components/QuizCard';
import Img from '../../../../assets/quizzes.png';
const Quizzes = (props) => {
  const [quizzes, setQuizzes] = useState(QUIZZES_DATA);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Img} style={{ width: 170, height: 170 }} />
      </View>
      <View style={styles.quizzes}>
        {quizzes.map((quiz) => (
          <QuizCard />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26202C',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    height: '22%',
  },
  quizzes: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: '100%',
    minHeight: '70%',
    padding: 24,
    paddingTop: 40,
  },
});

export default Quizzes;
