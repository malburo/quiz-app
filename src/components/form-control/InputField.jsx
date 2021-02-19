import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

const InputField = (props) => {
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
      as={<TextInput />}
    />
  );
};

export default InputField;
