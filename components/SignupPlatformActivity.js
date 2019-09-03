import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'react-native-firebase';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';

class SignupPlatformActivity extends BaseEurolandAppActivity {
  constructor(props) {
    super(props);
    this.state = {
    activityName: 'SignupPlatformActivity',
    activityData: {}
  };
  }
  signupEmail(){
    this.logEvent('signup_email', {method_email: 'email_success'});
    this.navigate('SignupInformation');
  }
  signupGoogle(){
    this.logEvent('signup', {method: 'google'});
    this.setUserProperty('result' , {result: 'success'});


    this.navigate('SignupOpenAuthentication');
  }

  //TODO put or try third parameter ("success")

  
  signupFacebook(){
    this.logEvent('signup', {method_facebook: 'facebook'} );
    this.navigate('SignupOpenAuthentication');
  }
  signupLinkedin(){
    this.logEvent('signup_linkedin', {method: 'linkedin'});
    this.setUserProperty('result' , {result: 'success'});
    this.navigate('SignupOpenAuthentication');
  }

  render() {
    this.logEvent('onLoadSignupPlatformActivity', {target: 'SignupPlatformActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Signup into</Text>
        <Text style={styles.titleText}>EURO APP</Text>

        <Button mode="contained" color="green"
          onPress={this.signupEmail.bind(this)} style={styles.button}>
          Email </Button>

          <Button mode="contained" color="red"
          onPress={this.signupGoogle.bind(this)} style={styles.button}>
          Google </Button>

          <Button mode="contained" color="blue"
          onPress={this.signupFacebook.bind(this)} style={styles.button}>
          Facebook </Button>

          <Button mode="contained" color="green"
          onPress={this.signupLinkedin.bind(this)} style={styles.button}>
          LinkedIn </Button>

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
export default SignupPlatformActivity;

