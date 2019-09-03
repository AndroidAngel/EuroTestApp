import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class SignupOpenAuthenticationActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'SignupOpenAuthenticationActivity',
      activityData: {}
    };
    }
    signupResultSuccess(){
        this.logEvent('result', {result: 'Success'});
        this.navigate('SignupInformation');
      }
      signupResultError(){
        this.logEvent('result', {result: 'Error'});
        this.navigate('ResultPageError');
      }

  render() {
    this.logEvent('onLoadSignupOpenAuthentication', {target: 'SignupOpenAuthenticationActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Signup Open Authentication Activity</Text>
        <Text style={styles.titleText}>Facebook</Text>
        <Text style={styles.titleText}>Google</Text>
        <Text style={styles.titleText}>LinkedIn</Text>
        

          <Button mode="contained" color="green"
          onPress={this.signupResultSuccess.bind(this)} style={styles.button}>
          Success</Button>
          <Button mode="contained" color="red"
          onPress={this.signupResultError.bind(this)} style={styles.button}>
          Error </Button>


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
  },
  titleText: {
    fontSize: 36,
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
export default SignupOpenAuthenticationActivity;

