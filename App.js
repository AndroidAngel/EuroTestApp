import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import SignupPlatform from './components/SignupPlatform';
import SignupInformation from './components/SignupInformation';
import SignupOpenAuthentication from './components/SignupOpenAuthentication';
import SignupProfession from './components/SignupProfession';
import Dashboard from './components/Dashboard';
import BaseEurolandAppActivity  from './components/BaseEurolandAppActivity.js';

import firebase from 'react-native-firebase';

const RootStack = createStackNavigator(
  { 
    SignupPlatform: {
      screen: SignupPlatform
    },
    SignupInformation: {
      screen: SignupInformation
    },
    SignupOpenAuthentication: {
      screen: SignupOpenAuthentication
    },
    SignupProfession: {
      screen: SignupProfession
    },
    Dashboard: {
      screen: Dashboard
  }
},
  {
    initialRouteName: 'SignupPlatform',
  }
);


const App = createAppContainer(RootStack);  
export default App;