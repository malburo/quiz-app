import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';
import { register } from '../authSilce';

const RegisterForm = ({ setIsFocus }) => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      username: '',
      password: '',
      retypePassword: '',
    },
  });
  const handleSubmit = async (values) => {
    try {
      await dispatch(register(values)).then(unwrapResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ marginTop: 24 }}>
      <InputField form={form} name="fullname" placeholder="Fullname*" />
      <InputField form={form} name="email" placeholder="Email*" />
      <InputField form={form} name="username" placeholder="Username*" />
      <PasswordField form={form} name="password" placeholder="Password*" />
      <Button onPress={form.handleSubmit(handleSubmit)} title="Sign up" />
      <View>
        <Text style={{ alignSelf: 'center', marginTop: 24, marginBottom: 50 }}>
          Do have an account? <Text style={{ color: '#FF7235' }}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterForm;
