import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeActivity from './components/HomeActivity';
import SecondActivity from './components/SecondActivity';
import ReportAndDownloadActivity from './components/ReportAndDownloadActivity';
import ReportAcivity from './components/ReportActivity';

import firebase from 'react-native-firebase';


const RootStack = createStackNavigator(
  {
    Home: {screen: HomeActivity},
    Company: {screen: SecondActivity},
    ReportAndDownloads: {screen: ReportAndDownloadActivity},
    Report: {screen: ReportAcivity},
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(RootStack);

export default App;

