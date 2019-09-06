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
        this.logEvent('signup_profession_done', {result: 'Success'});
        this.navigate('SuccessScreen');
      }

      signupProfessionSkip(){
        this.logEvent('signup_profession_skip', {result: 'Skipped'});
        this.navigate('SuccessScreen');
      }
      signupQuitProcess(){
        this.logEvent('signup_quit' , {quit: 'signup_profession'});
        this.navigate('Dashboard');
      }

  render() {
    this.logEvent('onLoadSignupProfession', {target: 'SignupProfessionActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tell us more about yourself.</Text>
        <Text style={styles.titleText}>Note that we will not share this </Text>
        <Text style={styles.titleText}>information to the other users.</Text>
        <Text style={styles.infoText}>Company (optional)</Text>
        <Text style={styles.infoText}>Profession (optional)</Text>
        
          <Button mode="contained" color="blue"
          onPress={this.signupProfessionSuccess.bind(this)} style={styles.button}>
          Done</Button>
          <Button mode="contained" color="red"
          onPress={this.signupProfessionSkip.bind(this)} style={styles.button}>
          Skip for now</Button>


          <Button mode="contained" color="red"
          onPress={this.signupQuitProcess.bind(this)} style={styles.button}>
           Quit </Button> 


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
  infoText:{
    fontSize: 18,
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
  orText:{
    fontSize: 12,
    textAlign: 'center',
    color: '#111111',
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
export default SignupProfessionActivity;

