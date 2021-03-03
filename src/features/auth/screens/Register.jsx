import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.title]}>Register</Text>
          <Text style={styles.text}>Create Account</Text>
        </View>
        <RegisterForm />
      </View>
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
    marginBottom: 80,
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

export default KeyboardAvoidingComponent;
