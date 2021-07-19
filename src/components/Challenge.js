import React from 'react';
import { Text, Scrollview } from 'react-native';
import styled from 'styled-components/native';

const ChallengeView = styled.ScrollView`
  padding: 10px;
`;

export default (props) => {
  return (
    <ChallengeView>
      <Text>{props.challenge.title}</Text>
    </ChallengeView>
  );
};
