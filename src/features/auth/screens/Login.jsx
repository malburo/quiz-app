import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import LoginForm from '../components/LoginForm';
const LoginScreen = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={{ padding: 24 }}>
        <View>
          <Text style={{ marginTop: 12, color: '#051D3F', fontSize: 36, fontWeight: '700' }}>
            Hello <Text style={{ color: '#FF7235' }}>There!</Text>
          </Text>
          <Text style={{ marginTop: 12 }}>Sign in to continue</Text>
        </View>
        <View>
          {isFocus || (
            <View
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {/* <IconButton />
              <IconButton /> */}
            </View>
          )}

          <LoginForm setIsFocus={setIsFocus} />
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

  text: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#6E80B0',
    fontWeight: '400',
  },
});

export default LoginScreen;
