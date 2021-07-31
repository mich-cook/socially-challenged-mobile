import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// tabbed screens
import AboutScreen from './about.js';
import PrivacyScreen from './privacy.js';
import ChallengesScreen from './challenges.js';

// Auth handling
import AuthLoading from './authloading.js';
import SignIn from './signin.js';
import Settings from './settings.js';

// stacked screens
import ChallengeScreen from './challenge.js';

const AuthStack = createStackNavigator({
  Signin: SignIn,
});

const ChallengeStack = createStackNavigator({
  "Challenges Screen Title": ChallengesScreen,
  Challenge: ChallengeScreen,
});

const SettingsStack = createStackNavigator({
  Settings: Settings,
});

const TabNavigation = createBottomTabNavigator({
  AboutTab: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="information-circle-outline" size={24} color={tintColor} />
      ),
    },
  },
  PrivacyTab: {
    screen: PrivacyScreen,
    navigationOptions: {
      tabBarLabel: 'Privacy',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="privacy-tip" size={24} color={tintColor} />
      ),
    },
  },
  ChallengesTab: {
    screen: ChallengeStack,
    navigationOptions: {
      tabBarLabel: 'Challenges',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="barbell" size={24} color={tintColor} />
      ),
    },
  },
  SettingsTab: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="settings" size={24} color={tintColor} />
      ),
    },
  },
});

export default createAppContainer(TabNavigation);
