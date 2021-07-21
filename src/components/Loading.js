import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <LoadingView>
      <ActivityIndicator size="large" />
    </LoadingView>
  );
};
