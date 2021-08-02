import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';

import SignInForm from '../components/SignInForm.js';
import Loading from '../components/Loading.js';

const USER_LOGIN = gql`
  mutation authenticateUser($username: String! $password: String!) {
    authenticateUser(username: $username password: $password)
  }
`;

const SignIn = props => {

  const [ signIn, { loading, error }] = useMutation(USER_LOGIN, {
    onCompleted: data => {
      storeToken(data.signIn);
    }
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  if (loading) return <Loading />;

  return (
    <View>
      <SignInForm
        action={signIn}
        formType="signIn"
        navigation={props.navigation}
      />
    </View>
  );
};

SignIn.navigationOptions = {
  "title": "Sign In"
};

export default SignIn;
