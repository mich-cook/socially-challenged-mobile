import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello react native via expo</Text>
      <Text style={styles.paragraph}>Here is an image from a cartoon:</Text>
      <Image style={styles.image} source={require('./assets/images/apple-onion-block-party.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

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
  heading: {
    "color": "#0077cc",
    "fontSize": 40,
    "fontWeight": "bold",
  },
  paragraph: {
    "fontSize": 24,
    "marginTop": 12,
    "marginBottom": 12,
  },
});
