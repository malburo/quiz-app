import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Result = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={styles.wrapper}>
        <Text
          style={{
            color: 'white',
            fontSize: 26,
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: 24,
            marginTop: 48,
          }}
        >
          Your Result
        </Text>
        <View style={styles.item}>
          <Text style={styles.text}>Correct answer</Text>
          <Text style={styles.text}>{data.correctAnswer}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Wrong answer</Text>
          <Text style={styles.text}>{data?.wrongAnswer}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Total point</Text>
          <Text style={styles.text}>{data.totalPoint}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontWeight: '600', fontSize: 16, color: 'white', marginTop: 12 }}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#454f59',
    marginBottom: 24,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#3475da',
    alignItems: 'center',
    height: 60,
  },
});

export default Result;
