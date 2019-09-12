import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class DashboardActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'DashboardActivity',
      activityData: {}
    };
    }
    gotoSignupPlatform(){
      this.navigate('SignupPlatform');
    }

  render() {
    this.setCurrentScreen('dashboard');
    this.logEvent('onLoadDashboard', {target: 'DashboardActivity' });

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>THIS IS DASHBOARD</Text>
    
          <Button mode="contained" color="green"
          onPress={this.gotoSignupPlatform.bind(this)} style={styles.button}>
          Signup </Button>

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
    paddingTop: 15,
    textAlign: 'center',
    margin: 5,
    height: 50,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 30,
    paddingTop: 15,
    fontWeight: 300,
    textAlign: 'center',
    color: '#111111',
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold'
  }
});
export default DashboardActivity;

