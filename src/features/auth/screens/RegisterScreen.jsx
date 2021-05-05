import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = (props) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <StatusBar barStyle="white-content" />
      <View style={styles.inner}>
        <View>
          <Text style={{ marginTop: 12, color: '#051D3F', fontSize: 36, fontWeight: '700', color: 'white' }}>
            Sign <Text style={{ color: '#F8BB86' }}>Up</Text>
          </Text>
          <Text style={{ marginTop: 12, color: 'white' }}>Sign up to continue</Text>
        </View>
        <View>
          <RegisterForm />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3237',
    height: '100%',
  },
  inner: {
    padding: 24,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#6E80B0',
    fontWeight: '400',
  },
});

export default RegisterScreen;
