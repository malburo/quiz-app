import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import Button from '../../../components/Button';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';

const LoginForm = (props) => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <InputField form={form} name="email" label="Email" />
      <PasswordField form={form} name="password" label="Password" />
      <Button onPress={form.handleSubmit(handleSubmit)} title="Login" />
      <View>
        <Text style={{ color: '#FFF', alignSelf: 'center', marginTop: 12 }}>
          Don’t have an account? <Text style={{ color: '#6D61F2' }}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
