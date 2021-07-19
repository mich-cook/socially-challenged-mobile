import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// screens
import AboutScreen from './about.js';
import PrivacyScreen from './privacy.js';
import ChallengesScreen from './challenges.js';

const TabNavigation = createBottomTabNavigator({
  AboutTab: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
    },
  },
  PrivacyTab: {
    screen: PrivacyScreen,
    navigationOptions: {
      tabBarLabel: 'Privacy',
    },
  },
  ChallengesTab: {
    screen: ChallengesScreen,
    navigationOptions: {
      tabBarLabel: 'Challenges',
    },
  },
});

export default createAppContainer(TabNavigation);
