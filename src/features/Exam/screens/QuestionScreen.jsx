import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import questionApi from '../../../api/questionApi';
import Question from '../components/Question';
import Result from '../components/Result';

const QuestionScreen = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const payload = { quizId: route.params.quizId };
        const response = await questionApi.getAll(payload);
        setQuestions(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginHorizontal: 24 }}>
          {questions.length > 0 && (
            <ProgressBar
              progress={count / questions.length}
              color={'#61e176'}
              style={{ height: 16, borderRadius: 4, width: '100%' }}
            />
          )}
        </View>
        <View>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
            {count} / {questions.length}
          </Text>
        </View>
      </View>
      {isFinished ? (
        <Result data={result} />
      ) : (
        questions.length > 0 && (
          <Question
            data={questions[count]}
            setCount={setCount}
            count={count}
            length={questions.length}
            setIsFinished={setIsFinished}
            quizId={route.params.quizId}
            setResult={setResult}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3237',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#ccc',
    padding: 12,
    width: '100%',
    backgroundColor: '#2F3237',
    marginTop: 40,
  },
});

export default QuestionScreen;
