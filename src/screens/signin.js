import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import SignInForm from '../components/SignInForm.js';

const SignIn = props => {
  return (
    <View>
      <SignInForm />
    </View>
  );
};

SignIn.navigationOptions = {
  "title": "Sign In"
};

export default SignIn;
