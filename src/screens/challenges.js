import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';
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
  if (loading) return <Text>Loading challenge data...</Text>;
  if (error) return <Text>Error loading challenge data</Text>;
  console.log(data);
  return <ChallengeList challenges={data.challenges} navigation={props.navigation} />
};

Challenges.navigationOptions = {
  title: "Challenges"
};

export default Challenges;
