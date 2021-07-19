import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// tabbed screens
import AboutScreen from './about.js';
import PrivacyScreen from './privacy.js';
import ChallengesScreen from './challenges.js';

// stacked screens
import ChallengeScreen from './challenge.js';

const ChallengeStack = createStackNavigator({
  "Challenges Screen Title": ChallengesScreen,
  Challenge: ChallengeScreen,
});

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
    screen: ChallengeStack,
    navigationOptions: {
      tabBarLabel: 'Challenges',
    },
  },
});

export default createAppContainer(TabNavigation);
