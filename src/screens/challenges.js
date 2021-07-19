import React from 'react';
import { Text, View, Button } from 'react-native';
import ChallengeList from '../components/ChallengeList.js';

const Challenges = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Challenges</Text>
      <ChallengeList />
      <Button title="Single Challenge" onPress={() => props.navigation.navigate('Challenge')} />
    </View>
  );
};

Challenges.navigationOptions = {
  title: "Challenges"
};

export default Challenges;
