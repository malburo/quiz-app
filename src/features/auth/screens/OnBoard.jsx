import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OnBoardScreen = (props) => {
  const navigate = useNavigation();
  return (
    <View style={{ backgroundColor: '#130F29', height: '100%' }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Image source={require('../../../../assets/login7.png')} style={{ width: '100%', height: 500 }} />
      </View>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 36,
            marginBottom: 24,
            color: 'white',
            fontSize: 24,
            fontWeight: '600',
          }}
        >
          Welcome to IT Quiz !
        </Text>
        <View style={{ paddingHorizontal: 48 }}>
          <TouchableOpacity style={styles.loginContainer} onPress={() => navigate.navigate('Login')}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerContainer} onPress={() => navigate.navigate('Register')}>
            <Text style={styles.register}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#FF7235',
    borderRadius: 8,
    paddingVertical: 16,
    marginVertical: 12,
  },
  registerContainer: {
    backgroundColor: '#F6F7FB',
    borderRadius: 8,
    paddingVertical: 16,
    marginVertical: 12,
  },
  login: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
  register: {
    fontSize: 18,
    color: '#FF7235',
    fontWeight: '600',
    alignSelf: 'center',
  },
});
export default OnBoardScreen;
