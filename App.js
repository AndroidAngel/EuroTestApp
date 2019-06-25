import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeActivity from './components/HomeActivity';
import ProfileActivity from './components/ProfileActivity';

import firebase from 'react-native-firebase';


const RootStack = createStackNavigator(
  {
    Home: {screen: HomeActivity},
    Profile: {screen: ProfileActivity},
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(RootStack);

export default App;

