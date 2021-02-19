import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import InputField from "../../../components/form-control/inputField";

const LoginForm = (props) => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <form>
      <InputField form={form} name="username" label="username" />
      <InputField form={form} name="password" label="password" />
      <Button
        type="submit"
        mode="contained"
        onPress={form.handleSubmit(handleSubmit)}
      >
        Login now
      </Button>
    </form>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginForm;
