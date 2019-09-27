import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'react-native-firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';

class SignupPlatform extends BaseEurolandAppActivity {
  constructor(props) {
    super(props);
    this.state = {
    activityName: 'SignupPlatformActivity',
    activityData: []
  };
  }
  signupEmail(){
    this.logEvent('signup', {method: 'email'});
    // this.setUserProperty('result' , {result: 'success'});

    this.navigate('SignupInformation');
  }
  signupGoogle(){
    this.logEvent('signup', {method: 'google'});
    // this.setUserProperty('result' , {result: 'success'});
    this.navigate('SignupOpenAuthentication');
  }

  //TODO put or try third parameter ("success")
  signupFacebook(){
    this.logEvent('signup', {method: 'facebook'} );
    // this.setUserProperty('result' , {result: 'success'});

    this.navigate('SignupOpenAuthentication');
  }
  signupLinkedin(){
    this.logEvent('signup', {method: 'linkedin'});
    // this.setUserProperty('result' , {result: 'success'});
    this.navigate('SignupOpenAuthentication');
  }
  
  render() {
    this.setCurrentScreen('SignupPlatform', 'SignupPlatformActivity');
    this.logEvent('onLoadSignupPlatform', {target: 'SignupPlatformActivity' });
    return (
      
      <View style={styles.container}>
        <Text style={styles.titleText}>Signup into</Text>
        <Text style={styles.headerText}>EURO APP</Text>

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
          onPress={this.signupLinkedin.bind(this)} style={styles.facebookButton}>
          LinkedIn </Button>

          {/* <FontAwesome.Button
              style={styles.facebookButton}
              name="facebook"
              onPress={this.signupFacebook}
              backgroundColor={COLOR_FACEBOOK}
            >
              <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
            </FontAwesome.Button> */}


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16
  },
  button: {
    paddingTop: 20,
    textAlign: 'center',
    margin: 5,
    height: 50,
  },
  titleText: {
    fontSize: 18,
    paddingTop: 15,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 36,
    paddingTop: 15,
    fontWeight: 300,
    textAlign: 'center',
    color: '#111111',
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold'
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
});
export default SignupPlatform;

