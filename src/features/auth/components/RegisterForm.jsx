import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';
import { register } from '../authSilce';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Please enter your full name.')
    .min(2, 'Please enter at least 2 characters.')
    .max(30, 'Please enter at most 30 characters'),
  email: yup
    .string()
    .required('Please enter your email.')
    .min(6, 'Please enter at least 6 characters.')
    .max(35, 'Please enter at most 35 characters')
    .matches(/(\W|^)[\w.+\-]*@gmail\.com(\W|$)/, 'Please enter a valid email address.'),
  username: yup
    .string()
    .required('Please enter your username')
    .min(6, 'Please enter at least 6 characters.')
    .max(30, 'Please enter at most 30 characters'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Please enter at least 6 characters.')
    .max(30, 'Please enter at most 30 characters'),
});

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      await dispatch(register(values)).then(unwrapResult);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };
  return (
    <View style={{ marginTop: 24 }}>
      <InputField form={form} name="fullName" placeholder="Fullname*" />
      <InputField form={form} name="email" placeholder="Email*" />
      <InputField form={form} name="username" placeholder="Username*" />
      <PasswordField form={form} name="password" placeholder="Password*" />
      <Text style={{ color: '#B23939', marginBottom: 12, marginTop: 0 }}>{errorMessage}</Text>
      <TouchableOpacity onPress={form.handleSubmit(handleSubmit)} style={styles.container}>
        {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.button}>Register</Text>}
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ alignSelf: 'center', marginTop: 24, marginBottom: 50, color: 'white' }}>
            Do have an account? <Text style={{ color: '#F8BB86' }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8BB86',
    borderRadius: 4,
    paddingVertical: 16,
  },
  button: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
  },
});
export default RegisterForm;
