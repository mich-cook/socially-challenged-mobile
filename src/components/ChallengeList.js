import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';

import Challenge from './Challenge.js';

const tmpData = [
  { "id": 0, "title": "h75 p0" },
  { "id": 1, "title": "h75 p1" },
  { "id": 2, "title": "h75 p2" },
  { "id": 3, "title": "h75 p3" },
  { "id": 4, "title": "h75 p4" },
];

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
        data={tmpData}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <ChallengeList>
            <Challenge challenge={item} />
          </ChallengeList>
        )}
      />
    </View>
  );
};
