import React from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.title]}>Login</Text>
            <Text style={styles.text}>Access Account</Text>
          </View>
          <LoginForm />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18172B',
    height: '100%',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#FFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '600',
  },
});

export default LoginScreen;
