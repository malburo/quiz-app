import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PasswordField = (props) => {
  const { form, disabled, name, label, placeholder } = props;
  const { control, errors } = form;
  const hasError = !!errors[name];
  return (
    <Controller
      control={control}
      name={name}
      error={hasError}
      disabled={disabled}
      placeholder={placeholder}
      render={(props) => (
        <View style={styles.container}>
          <Text style={styles.text}>{label}</Text>
          <TextInput
            {...props}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(value) => {
              props.onChange(value);
            }}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 24, marginVertical: 12, fontSize: 14, fontWeight: '500' },
  text: { marginBottom: 12, marginLeft: 6, color: '#FFF' },
  input: {
    padding: 16,
    color: '#FFF',
    backgroundColor: '#1F1F30',
    borderRadius: 18,
  },
});
export default PasswordField;
