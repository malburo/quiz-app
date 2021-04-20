import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RegisterForm from '../components/RegisterForm';
const RegisterScreen = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={{ marginTop: 12, color: '#051D3F', fontSize: 36, fontWeight: '700' }}>
            Sign <Text style={{ color: '#FF7235' }}>Up</Text>
          </Text>
          <Text style={{ marginTop: 12 }}>Sign up to continue</Text>
        </View>
        <View>
          <RegisterForm setIsFocus={setIsFocus} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFC',
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
