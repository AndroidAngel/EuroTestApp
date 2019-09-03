import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class SignupProfessionActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'SignupProfessionActivity',
      activityData: {}
    };
    }
   
      signupProfessionSuccess(){
        this.logEvent('result', {result: 'Success'});
        this.navigate('SuccessScreen');
      }

      signupProfessionSkip(){
        this.logEvent('result', {result: 'Skipped'});
        this.navigate('SuccessScreen');
      }

  render() {
    this.logEvent('onLoadSignupProfession', {target: 'SignupProfessionActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Signup Profession Activity</Text>
        <Text style={styles.titleText}>Company </Text>
        <Text style={styles.titleText}>Profession</Text>
        
          <Button mode="contained" color="blue"
          onPress={this.signupProfessionSuccess.bind(this)} style={styles.button}>
          Done</Button>

          <Button mode="contained" color="red"
          onPress={this.signupProfessionSkip.bind(this)} style={styles.button}>
          Skip for now</Button>
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
    textAlign: 'center',
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
export default SignupProfessionActivity;

