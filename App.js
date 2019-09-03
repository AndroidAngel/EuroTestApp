import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomePageActivity from './components/HomePageActivity';
import PressReleaseActivity from './components/PressReleaseActivity';
import DownloadReportsActivity from './components/DownloadReportsActivity';
import AnnualReportActivity from './components/AnnualReportActivity';
import SustainabilityReportActivity from './components/SustainabilityReportActivity';
import SignupPlatformActivity from './components/SignupPlatformActivity';
import SignupInformationActivity from './components/SignupInformationActivity';
import SignupOpenAuthenticationActivity from './components/SignupOpenAuthenticationActivity';
import SignupProfessionActivity from './components/SignupProfessionActivity';
import SuccessScreenActivity from './components/SuccessScreenActivity';
import ResultPageErrorActivity from './components/ResultPageErrorActivity';
import BaseEurolandAppActivity  from './components/BaseEurolandAppActivity.js';

import firebase from 'react-native-firebase';

const RootStack = createStackNavigator(
  {
    HomePage: {screen: HomePageActivity},
    PressRelease: {screen: PressReleaseActivity},
    DownloadReports: {screen: DownloadReportsActivity},
    AnnualReport: {screen: AnnualReportActivity},
    SustainabilityReport: {screen: SustainabilityReportActivity},
    SignupPlatform: {screen: SignupPlatformActivity},
    SignupInformation: {screen: SignupInformationActivity},
    SignupOpenAuthentication: {screen: SignupOpenAuthenticationActivity},
    SignupProfession: {screen: SignupProfessionActivity},
    SuccessScreen: {screen: SuccessScreenActivity},
    ResultPageError: {screen: ResultPageErrorActivity}
  },
  {
    initialRouteName: 'SignupPlatform',
  }
);

const App = createAppContainer(RootStack);  


export default App;