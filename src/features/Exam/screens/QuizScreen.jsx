import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Img from '../../../../assets/quizzes.png';
import quizApi from '../../../api/quizApi';
import QuizCard from '../components/QuizCard';

const QuizScreen = (props) => {
  const [quizList, setQuizList] = useState([]);
  const route = useRoute();

  React.useEffect(() => {
    (async () => {
      const payload = { topicId: route.params.topicId };
      const response = await quizApi.getAll(payload);
      setQuizList(response);
    })();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Image source={Img} style={{ width: 170, height: 170, position: 'absolute', right: 0, top: -20 }} />
      <View style={styles.quizzes}>
        {quizList.map((quiz, index) => (
          <QuizCard quiz={quiz} key={quiz.quizId} index={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2b2f',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    height: '22%',
  },
  quizzes: {
    backgroundColor: '#2F3237',
    width: '100%',
    minHeight: '80%',
    padding: 24,
  },
});

export default QuizScreen;
