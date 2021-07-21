import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Challenge from './Challenge.js';

const ChallengeList = styled.View`
  height: 100px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ced0ce;
`;

export default (props) => {
  return (
    <View>
      <FlatList
        data={props.challenges}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Challenge', { id: item.id })
            }
          >
            <ChallengeList>
              <Challenge challenge={item} />
            </ChallengeList>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
