import React from 'react';
import { View, Image, Dimensions } from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './Login'; 
import Splash from './Splash'; 

export default initNavigator = StackNavigator({
    Splash: {
      screen: Splash
    },
    Login: {
      screen: Login
    },
  },
  {
		initialRouteName: 'Splash',
		headerMode: 'none' // float, screen, none
	}
);