import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';

const RegisterForm = (props) => {
  const form = useForm({
    defaultValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
    },
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <InputField form={form} name="fullname" label="fullname" />
      <InputField form={form} name="username" label="username" />
      <InputField form={form} name="email" label="email" />
      <PasswordField form={form} name="password" label="password" />
      <Button type="submit" mode="contained" onPress={form.handleSubmit(handleSubmit)}>
        Register now
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterForm;
