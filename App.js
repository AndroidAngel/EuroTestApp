import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePageActivity from './components/HomePageActivity';
import PressReleaseActivity from './components/PressReleaseActivity';
import DownloadReportsActivity from './components/DownloadReportsActivity';
import AnnualReportActivity from './components/AnnualReportActivity';
import SustainabilityReportActivity from './components/SustainabilityReportActivity';

import firebase from 'react-native-firebase';

const RootStack = createStackNavigator(
  {
    HomePage: {screen: HomePageActivity},
    PressRelease: {screen: PressReleaseActivity},
    DownloadReports: {screen: DownloadReportsActivity},
    AnnualReport: {screen: AnnualReportActivity},
    SustainabilityReport: {screen: SustainabilityReportActivity}
  },
  {
    initialRouteName: 'HomePage',
  }
);

const App = createAppContainer(RootStack);


export default App;