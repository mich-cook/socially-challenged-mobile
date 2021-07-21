import React from 'react';
import { Text, Scrollview } from 'react-native';
import styled from 'styled-components/native';
import { format } from 'date-fns';

const ChallengeView = styled.ScrollView`
  padding: 10px;
`;

export default (props) => {
  return (
    <ChallengeView>
      <Text>Challenge {props.challenge.id} created at: {format(new Date(props.challenge.createdAt), 'MMM do, yyyy')}</Text>
      <Text>Created by: {props.challenge.owner.displayName}</Text>
    </ChallengeView>
  );
};
