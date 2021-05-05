import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import userApi from '../../../api/userApi';
import PasswordField from '../../../components/form-control/PasswordField';
import { Restart } from 'fiction-expo-restart';

const schema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Please enter current password.')
    .min(6, 'Please enter at least 6 characters.')
    .max(30, 'Please enter at most 30 characters'),
  newPassword: yup
    .string()
    .required('Please enter new password')
    .min(6, 'Please enter at least 6 characters.')
    .max(30, 'Please enter at most 30 characters'),
  retypePassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('newPassword')], 'Password does not match'),
});

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const currentUser = useSelector((state) => state.auth.current);
  const form = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const payload = {
        data: { oldpassword: values.currentPassword, newpassword: values.newPassword },
        userId: currentUser.userId,
      };
      await userApi.changePassword(payload);
      await AsyncStorage.removeItem('@access_token');
      Restart();
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };
  return (
    <View style={{ marginTop: 24 }}>
      <PasswordField form={form} name="currentPassword" placeholder="Current password*" />
      <PasswordField form={form} name="newPassword" placeholder="New password*" />
      <PasswordField form={form} name="retypePassword" placeholder="Retype password*" />
      <Text style={{ color: '#B23939', marginBottom: 12, marginTop: 0 }}>{errorMessage}</Text>
      <TouchableOpacity onPress={form.handleSubmit(handleSubmit)} style={styles.container}>
        {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.button}>Change</Text>}
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
export default ChangePasswordForm;
