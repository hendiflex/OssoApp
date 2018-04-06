import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

/* Screen imports */
import Dashboard from '../screens/Dashboard.js';
import Testscreen from '../screens/Testscreen.js';


const Tabs = TabNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Testscreen: {
    screen: Testscreen,
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'black',
    inactiveTintColor: '#cccccc',

    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
      height: 60,
    },
    indicatorStyle: {
      backgroundColor: 'red',
    }

  }
});

/* The root stack of the app */
const AppNavigator = StackNavigator({
  Index: {
    screen: Tabs,
  },
}, {
  initialRouteName: 'Index',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
  headerMode: 'none',
});

export default AppNavigator;
