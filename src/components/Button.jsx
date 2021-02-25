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
    backgroundColor: '#6D61F2',
    borderRadius: 18,
    paddingVertical: 16,
    marginVertical: 12,
    marginHorizontal: 24,
  },
  button: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
export default Button;
