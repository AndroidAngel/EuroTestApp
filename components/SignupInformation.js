import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class SignupInformation extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'SignupInformation',
      activityData: []
    };
    }
    signupInformation(){
      this.logEvent('signup_information', {result: 'success'});
      this.navigate('SignupProfession');
    }

    signupSkipped(){
      this.logEvent('signup_information' ,{result: 'skipped'});
      this.navigate('Dashboard');
    }
  
  render() {
  this.setCurrentScreen('SignupInformation', 'SignupInformation');
    this.logEvent('onLoadSignupInformation', {target: 'SignupInformation' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Complete you registration</Text>
        <Text style={styles.titleText}>To complete registration for</Text>
        <Text style={styles.emailText}>sampleemail@gmail.com</Text>
        <Text style={styles.titleText}>please fill the following fields</Text>
        <Text style={styles.infoText}>Skyler (name)</Text>
        <Text style={styles.infoText}>White (lastname)</Text>
        <Text style={styles.infoText}>password (not available on social media)</Text>
        <Text style={styles.infoText}>confirm password (not available on social media)</Text>
 
          <Button mode="contained" color="green"
          onPress={this.signupInformation.bind(this)} style={styles.button}>
           Next </Button> 

           <Button color="blue"
          onPress={this.signupSkipped.bind(this)} style={styles.button}>
           Skipped </Button> 
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
    textAlign: 'center',
    height: 50,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
  },
  infoText:{
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    color: '#111111',

  },
  emailText:{
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
export default SignupInformation;

