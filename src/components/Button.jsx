import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8BB86',
    borderRadius: 4,
    paddingVertical: 16,
  },
  button: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
export default Button;
