import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'react-native-firebase';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';

class HomePageActivity extends BaseEurolandAppActivity {
  constructor(props) {
    super(props);
    this.state = {
    activityName: 'HomePageActivity',
    activityData: {}
  };
  }
  _onPressPressReleaseBtn() {
    this.logEvent('onPressGotoPressReleaseBtn', { target: 'GotoPressRelease' });
    // this.logEvent('step_home', null );
    this.navigate('SignupPlatform');
   this.setState({'activity_log': {button_title: 'get started', target_screen: 'press release page'}});
  }
  render() {
    // this.logEvent().setCurrentScreen('HomePage');
    this.logEvent('onHomePageActivityLoaded', {target: 'HomePageActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>EURO APP</Text>
        <Text style={styles.headerText}>Just another React Native App</Text>
        <Button mode="contained" color="green"
          onPress={this._onPressPressReleaseBtn.bind(this)} style={styles.button}>
          Get Started
            </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16
  },
  button: {
    margin: 5,
    height: 50,
    marginTop: 150,
    color: 'blue'
  },

  titleText: {
    fontSize: 36,
    paddingTop: 247,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 300,
    textAlign: 'center',
    color: '#111111',
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold'
  }
});
export default HomePageActivity;

