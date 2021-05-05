import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPassword = (props) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <StatusBar barStyle="white-content" />
      <View style={{ padding: 24 }}>
        <View>
          <Text style={{ marginTop: 12, color: 'white', fontSize: 36, fontWeight: '700' }}>
            Forgot <Text style={{ color: '#F8BB86' }}>Password!</Text>
          </Text>
          <Text style={{ marginTop: 12, color: 'white' }}>Enter your email to continue</Text>
        </View>
        <View>
          <ForgotPasswordForm />
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

  text: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#6E80B0',
    fontWeight: '400',
  },
});

export default ForgotPassword;
