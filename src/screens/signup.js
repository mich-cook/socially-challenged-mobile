import React from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';

import SignInForm from '../components/SignInForm.js';
import Loading from '../components/Loading.js';

const REGISTER_USER = gql`
  mutation registerUser($username: String!, $displayName: String!, $email: String!, $password: String!) {
    registerUser(username: $username, displayName: $displayName, email: $email, password: $password)
  }
`;

const SignUp = props => {

  const [ signUp, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: data => {
      storeToken(data.signUp);
    }
  });

  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      {error && <Text>Error Registering</Text>}
      <SignInForm
        action={signUp}
        formType="signUp"
        navigation={props.navigation}
      />
    </React.Fragment>
  );
};

SignUp.navigationOptions = {
  "title": "Register"
};

export default SignUp;
