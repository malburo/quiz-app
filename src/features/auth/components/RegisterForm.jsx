import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';
import { register } from '../authSilce';

const RegisterForm = (props) => {
  const dispatch = useDispatch()
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });
  const handleSubmit = (values) => {
    try {
      await dispatch(register(values)).then(unwrapResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <InputField form={form} name="fullname" label="Fullname" />
      <InputField form={form} name="email" label="Email" />
      <PasswordField form={form} name="password" label="Password" />
      <Button type="submit" onPress={form.handleSubmit(handleSubmit)} title="Register" />
      <View>
        <Text style={{ color: '#FFF', alignSelf: 'center', marginTop: 12 }}>
          Do you have an account? <Text style={{ color: '#6D61F2' }}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterForm;
