import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import Loading from '../components/Loading.js';
import ChallengeList from '../components/ChallengeList.js';

const challengeQuery = gql`
  query challengeList {
    challenges {
      id
      createdAt
      owner {
        displayName
        id
      }
    }
  }
`;

const Challenges = props => {
  const { loading, error, data } = useQuery(challengeQuery);
  if (loading) return <Loading />;
  if (error) return <Text>Error loading challenge data</Text>;
  return <ChallengeList challenges={data.challenges} navigation={props.navigation} />
};

Challenges.navigationOptions = {
  title: "Challenges"
};

export default Challenges;
