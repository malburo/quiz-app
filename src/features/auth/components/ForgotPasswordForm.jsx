import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import authApi from '../../../api/authApi';
import InputField from '../../../components/form-control/InputField';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email.')
    .min(6, 'Please enter at least 6 characters.')
    .max(35, 'Please enter at most 35 characters')
    .matches(/(\W|^)[\w.+\-]*@gmail\.com(\W|$)/, 'Please enter a valid email address.'),
});

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const payload = { email: values.email };
      await authApi.forgotPassword(payload);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };
  return (
    <View style={{ marginTop: 24 }}>
      <InputField form={form} name="email" placeholder="Email*" />
      <TouchableOpacity onPress={form.handleSubmit(handleSubmit)} style={styles.container}>
        {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.button}>Next</Text>}
      </TouchableOpacity>
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
export default ForgotPasswordForm;
