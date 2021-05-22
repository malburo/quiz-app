import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import quizApi from '../../../api/quizApi';
import CodeBox from './CodeBox';

const Question = ({ data, setCount, count, length, setIsFinished, quizId, setResult }) => {
  const [Answer, setAnswer] = useState(null);
  const [answerList, setAnswerList] = useState({});
  const [status, setStatus] = useState('normal');
  const handlePressAnswer = (answer) => {
    setAnswer(answer);
  };

  const handleSubmit = () => {
    const answerListClone = { ...answerList };
    answerListClone[data.questionId] = Answer;
    setAnswerList(answerListClone);
    if (Answer === data.questionCorrectAnswer) {
      setStatus('right');
    } else {
      setStatus('wrong');
    }
  };
  const handleNext = async () => {
    if (count === length - 1 && length > 0) {
      const payload = { userSubmission: answerList, quizId };
      const response = await quizApi.submitAnswer(payload);
      setResult(response);
      setIsFinished(true);
      setCount((prev) => prev + 1);
      return;
    }
    setCount((prev) => prev + 1);
    setStatus('normal');
    setAnswer(null);
  };
  return (
    <>
      <ScrollView>
        <View style={{ marginTop: 24, marginHorizontal: 12 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>{data?.questionTitle}</Text>
        </View>
        <View>
          <CodeBox code={data?.questionCode} language={data?.questionProgramingLanguage} />
        </View>
        <View style={{ marginBottom: 60 }}>
          {[
            { answer: 'A', content: data?.questionAnswerA },
            { answer: 'B', content: data?.questionAnswerB },
            { answer: 'C', content: data?.questionAnswerC },
            { answer: 'D', content: data?.questionAnswerD },
          ].map((item, index) => (
            <View key={index}>
              <Text
                style={Answer === item.answer ? styles(status).focusAnswer : styles(status).answer}
                onPress={() => status === 'normal' && handlePressAnswer(item.answer)}
              >
                {item.content}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        {Answer && status === 'normal' && (
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: '#3475da',
              alignItems: 'center',
              height: 60,
            }}
          >
            <Text style={{ fontWeight: '600', fontSize: 16, color: 'white', marginTop: 12 }}>Check</Text>
          </TouchableOpacity>
        )}
        {status !== 'normal' && (
          <TouchableOpacity
            onPress={handleNext}
            style={{
              backgroundColor: '#3475da',
              alignItems: 'center',
              height: 60,
            }}
          >
            <Text style={{ fontWeight: '600', fontSize: 16, color: 'white', marginTop: 12 }}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = (props) =>
  StyleSheet.create({
    answer: {
      fontSize: 16,
      margin: 10,
      borderWidth: 2,
      borderColor: '#454f59',
      backgroundColor: '#2a2b2f',
      paddingHorizontal: 15,
      paddingVertical: 20,
      borderRadius: 5,
      color: 'white',
    },
    focusAnswer: {
      color: props === 'normal' ? 'black' : 'white',
      fontSize: 16,
      margin: 10,
      borderWidth: 2,
      backgroundColor: props === 'normal' ? '#F8BB86' : props === 'right' ? 'blue' : 'red',
      borderColor: props === 'normal' ? 'white' : '#272c33',
      paddingHorizontal: 15,
      paddingVertical: 20,
      borderRadius: 5,
    },
  });

export default Question;
