import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const AnswerForm = ({ answers }) => {
  const [Answer, setAnswer] = useState(null);

  const handlePressAnswer = (answer) => {
    setAnswer(answer);
  };

  const handleSubmit = () => {
    console.log(Answer);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={Answer === 'A' ? styles.focusAnswer : styles.answer} onPress={() => handlePressAnswer('A')}>
          {answers.A}
        </Text>
      </View>
      <View>
        <Text style={Answer === 'B' ? styles.focusAnswer : styles.answer} onPress={() => handlePressAnswer('B')}>
          {answers.B}
        </Text>
      </View>
      <View>
        <Text style={Answer === 'C' ? styles.focusAnswer : styles.answer} onPress={() => handlePressAnswer('C')}>
          {answers.C}
        </Text>
      </View>
      <View>
        <Text style={Answer === 'D' ? styles.focusAnswer : styles.answer} onPress={() => handlePressAnswer('D')}>
          {answers.D}
        </Text>
      </View>
      {Answer && <Button onPress={handleSubmit}>Submit</Button>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  answer: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    border: '5px solid black',
    margin: 10,
  },
  focusAnswer: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    border: '5px solid black',
    margin: 10,
  },
});

export default AnswerForm;
