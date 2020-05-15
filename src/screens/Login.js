import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { SafeAreaView, StyleSheet, Button, TextInput, Alert } from "react-native";
import { AppLoading } from 'expo';

import Text from "../components/Text";
import { LOGIN } from '../graphql';
import { setAuth } from '../store/authSlice';

const useLogin = (next) => {
  const dispatch = useDispatch();
  const [loginMutation, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (_data) => {
      dispatch(setAuth(_data.login));
      next();
    }
  });

  const login = (email) => loginMutation({
    variables: {
      email
    }
  });

  return {
    login,
    loading,
    error
  };
};

function Login({ navigation }) {
  const { login, loading, error } = useLogin(() => {
    navigation.navigate('Home');
  });
  const [email, setEmail] = useState('');

  const handleChange = (_email) => {
    setEmail(_email);
  };

  if (loading) {
    return <AppLoading />
  }

  if (error) {
    return <SafeAreaView style={styles.container}>
      <Text>Error: {error.message}</Text>
    </SafeAreaView>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Ingresa tu e-mail</Text>
      <TextInput value={email} placeholder="example@store.io" onChangeText={handleChange} />
      <Button title="Ingresar" onPress={() => login(email)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Login;
