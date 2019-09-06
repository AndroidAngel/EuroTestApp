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
        this.logEvent('result_success_oauth', {result: 'Success'});
        this.navigate('SignupInformation');
      }
      signupResultError(){
        this.logEvent('result_error_oauth', {result: 'Error'});
        this.navigate('SignupPlatform');
      }

  render() {
    this.logEvent('onLoadSignupOpenAuthentication', {target: 'SignupOpenAuthenticationActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Signup Open Authentication Page</Text>
        <Text style={styles.infoText}>Facebook</Text>
        <Text style={styles.infoText}>Google</Text>
        <Text style={styles.infoText}>LinkedIn</Text>
        

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
    paddingTop: 15,
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
export default SignupOpenAuthenticationActivity;

