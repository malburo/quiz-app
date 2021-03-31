import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../../components/Button';

function TopicCard() {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 24, backgroundColor: '#F4F7FA', height: 450, borderRadius: 24 }}>
      <Image
        style={{ width: '100%', height: 250, borderRadius: 24 }}
        source={{
          uri:
            'https://techvccloud.mediacdn.vn/zoom/650_406/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png',
        }}
      />
      <View style={{ paddingVertical: 12, paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>Javascript we trust</Text>
        <Text style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit</Text>
      </View>
      <Button title="Learn now!" onPress={() => navigation.navigate('Quizzes')} />
    </View>
  );
}
export default TopicCard;
