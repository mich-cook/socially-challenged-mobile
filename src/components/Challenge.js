import React from 'react';
import { Text, Scrollview } from 'react-native';
import styled from 'styled-components/native';

const ChallengeView = styled.ScrollView`
  padding: 10px;
`;

export default (props) => {
  return (
    <ChallengeView>
      <Text>Challenge {props.challenge.id} created at: {props.challenge.createdAt}</Text>
      <Text>Created by: {props.challenge.owner.displayName}</Text>
    </ChallengeView>
  );
};
