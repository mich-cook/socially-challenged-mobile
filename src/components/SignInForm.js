import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const FormView = styled.View`
  padding: 10px;
`;

const StyledTextInput = styled.TextInput`
  border: 1px solid gray;
  font-size: 18px;
  padding: 8px;
  margin-bottom: 24px;
`;

const StyledFormText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const StyledButton = styled.TouchableOpacity`
  background: #0077cc;
  width: 100%;
  padding: 8px;
`;

const StyledButtonText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export default (props) => {

  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();

  const handleSubmit = () => {
    props.action({
      variables: {
        username: username,
        password: password,
      }
    });
  };

  return (
    <FormView>
      <StyledFormText>Username</StyledFormText>
      <StyledTextInput
        onChangeText={text => setUsername(text)}
        value={username}
        autoFocus={true}
        autoCapitalize="none"
      />
      <StyledFormText>Password</StyledFormText>
      <StyledTextInput
        onChangeText={text => setPassword(text)}
        value={password}
        textContentType="password"
        secureTextEntry={true}
      />
      <StyledButton onPress={handleSubmit}>
        <StyledButtonText>Sign In</StyledButtonText>
      </StyledButton>
    </FormView>
  );
};
