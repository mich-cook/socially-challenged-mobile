import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import Loading from '../components/Loading.js';
import Challenge from '../components/Challenge.js';

const GET_CHALLENGE = gql`
  query challenge($id: ID!) {
    challenge(id: $id) {
      id
      cutoff
      start
      end
      createdAt
      updatedAt
      participants {
        displayName
      }
      owner {
        displayName
      }
    }
  }
`;

export default (props) => {
  const id = props.navigation.getParam('id');
  const { loading, error, data } = useQuery(GET_CHALLENGE, { "variables": { id }});

  if (loading) return <Loading />;
  if (error) return <Text>Error loading data for challenge ${id}</Text>;
  return <Challenge challenge={data.challenge} />
};
