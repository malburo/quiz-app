import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const QuizCard = ({ quiz, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Question', {
          quizId: quiz.quizId,
        })
      }
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
          borderWidth: 1,
          borderColor: '#454f59',
          backgroundColor: '#2a2b2f',
          borderRadius: 9,
        }}
      >
        <View
          style={{
            backgroundColor: '#454f59',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            width: 70,
            height: 80,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: '800', color: 'white', margin: 0 }}>{index + 1}</Text>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>{quiz.quizName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default QuizCard;
