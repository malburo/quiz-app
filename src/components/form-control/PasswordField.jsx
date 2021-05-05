import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PasswordField = (props) => {
  const { form, disabled, name, label, placeholder } = props;
  const { errors } = form.formState;
  const hasError = !!errors[name];
  return (
    <Controller
      control={form.control}
      name={name}
      error={hasError}
      disabled={disabled}
      placeholder={placeholder}
      render={({ field: { onChange, onBlur } }) => (
        <View style={styles.container}>
          <TextInput
            onBlur={onBlur}
            onChange={onChange}
            style={styles.input}
            secureTextEntry={true}
            placeholder={placeholder}
            placeholderTextColor="white"
            selectionColor="white"
          />
          <Text style={{ color: '#B23939' }}>{errors[name]?.message}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { fontSize: 14, fontWeight: '500', marginBottom: 24, color: 'white' },
  input: {
    padding: 16,
    color: 'white',
    backgroundColor: '#454f59',
    borderRadius: 4,
  },
});
export default PasswordField;
