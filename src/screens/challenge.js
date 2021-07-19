import React from 'react';
import { Text, View } from 'react-native';

export default (props) => {
  const id = props.navigation.getParam('id');
  return (
    <View style={{ padding: 10 }}>
      <Text>Individual Challenge: {id}</Text>
    </View>
  );
};
