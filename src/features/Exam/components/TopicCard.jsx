import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function TopicCard({ topic, totalQuiz }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Quiz', {
          topicId: topic.topicId,
        });
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 12,
          borderWidth: 1,
          borderColor: '#454f59',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#2a2b2f',
        }}
      >
        <Image style={{ width: 75, height: 75, borderRadius: 8 }} source={{ uri: topic.coverImageUrl }} />
        <View style={{ paddingVertical: 12, paddingHorizontal: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: 'white' }}>{topic.topicName}</Text>
          <Text style={{ fontSize: 12, color: 'white' }}>{totalQuiz} quiz</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default TopicCard;
