import { useNavigation } from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';
import { login } from '../authSilce';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleSubmit = async (values) => {
    try {
      await dispatch(login(values)).then(unwrapResult);
    } catch (error) {
      console.log(error);
    }
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
