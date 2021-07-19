import React from 'react';
import { Text, View, Button } from 'react-native';

const Challenges = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Challenges</Text>
      <Button title="Single Challenge" onPress={() => props.navigation.navigate('Challenge')} />
    </View>
  );
};

Challenges.navigationOptions = {
  title: "Challenges"
};

export default Challenges;
