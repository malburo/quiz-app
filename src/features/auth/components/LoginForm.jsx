import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';

const LoginForm = ({ setIsFocus }) => {
  const dispatch = useDispatch();
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
    <View style={{ marginTop: 24 }}>
      <InputField form={form} name="email" placeholder="Username*" setIsFocus={setIsFocus} />
      <PasswordField form={form} name="password" placeholder="Password*" setIsFocus={setIsFocus} />
      <Button onPress={form.handleSubmit(handleSubmit)} title="Login" />
      <View>
        <Text style={{ alignSelf: 'center', marginTop: 24 }}>
          Don’t have an account? <Text style={{ color: '#FF7235' }}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
