import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

/* Screen imports */
import Dashboard from '../screens/Dashboard.js';
import Testscreen from '../screens/Testscreen.js';


/* The root stack of the app */
const AppNavigator = StackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Testscreen: {
    screen: Testscreen,
  },
  Hendispeeltuin: {
    screen: Hendispeeltuin,
  },
}, {
  initialRouteName: 'Dashboard',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default AppNavigator;
