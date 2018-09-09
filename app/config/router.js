import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';

/* Screen imports */
import Dashboard from '../screens/Dashboard.js';
import Testscreen from '../screens/Testscreen.js';
import Loading from '../screens/Loading.js';
import SignUp from '../screens/SignUp.js';
import Login from '../screens/Login.js';

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

const AppNavigator = SwitchNavigator(
  {
    Loading,
    Login,
    SignUp,
    Tabs
  },
  {
    initialRouteName: 'Loading',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
  }
)

export default AppNavigator;
