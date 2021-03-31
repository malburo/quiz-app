import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const QuizCard = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 24 }}>
      <Card.Title
        title="Card Title"
        right={(props) => (
          <IconButton
            {...props}
            icon="arrow-right-drop-circle"
            onPress={() => navigation.navigate('QuizDetail')}
            color="#376AED"
          />
        )}
        style={{
          height: 60,
          backgroundColor: '#F4F7FA',
          borderLeftWidth: 20,
          borderRadius: 12,
          borderLeftColor: '#376AED',
          padding: 12,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        }}
      />
    </View>
  );
};
export default QuizCard;
