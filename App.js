import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeActivity from './components/HomeActivity';
import SecondActivity from './components/SecondActivity';
import ThirdActivity from './components/ThirdActivity';
import AnnualActivity from './components/AnnualActivity';
import SustainabilityActivity from './components/SustainabilityActivity';




import firebase from 'react-native-firebase';

const RootStack = createStackNavigator(
  {
    Home: {screen: HomeActivity},
    Company: {screen: SecondActivity},
    ReportAndDownloads: {screen: ThirdActivity},
    AnnualReport: {screen: AnnualActivity},
    SustainabilityReport: {screen: SustainabilityActivity},

  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(RootStack);


export default App;