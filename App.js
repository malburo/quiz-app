import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quiz from './src/features/quiz/screens/Quiz';

export default function App() {
  return (
    <View>
      <Quiz />
      <StatusBar style="auto" />
    </View>
  );
}
