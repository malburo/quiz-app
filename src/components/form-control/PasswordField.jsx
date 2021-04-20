import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PasswordField = (props) => {
  const { form, disabled, name, label, placeholder, setIsFocus } = props;
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
          <TextInput
            {...props}
            style={styles.input}
            secureTextEntry={true}
            onFocus={() => {
              if (setIsFocus) setIsFocus(true);
            }}
            placeholder={placeholder}
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
  container: { fontSize: 14, fontWeight: '500', marginBottom: 24 },
  input: {
    padding: 16,
    color: '#18172B',
    backgroundColor: '#F2F3F7',
    borderRadius: 4,
  },
});
export default PasswordField;
