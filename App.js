import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import styled from 'styled-components/native';  // native version of library
import Screens from './src/screens/index.js';
import config from './config.js';

const { API_URL } = config();
const cache = new InMemoryCache();

const H1 = styled.Text`
  color: #7733ff;
  font-size: 40px;
  font-weight: bold;
`;

const client = new ApolloClient({
  uri: API_URL,
  cache
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};

/*
function AppNoMore() {
  return (
    <View style={styles.container}>
      <H1>Hello react native via expo</H1>
      <Text style={styles.paragraph}>Here is an image from a cartoon:</Text>
      <Image style={styles.image} source={require('./assets/images/apple-onion-block-party.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '50%',
    width: '50%',
  },
  heading: {},
  paragraph: {
    "fontSize": 24,
    "marginTop": 12,
    "marginBottom": 12,
  },
});
*/
