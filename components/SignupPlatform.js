import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, TouchableWithoutFeedback,
  Keyboard, BackHandler } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'react-native-firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { COLOR_TEXT, COLOR_FACEBOOK, COLOR_LIGHT, COLOR_LINKEDIN, COLOR_GOOGLE, COLOR_EMAIL } from '/Users/iamangelauditor/EuroTestApp/components/myColor.js';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';

// Calling the following function will open the FB login dialogue:
export async function facebookLogin() {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      // handle this however suites the flow of your app
      throw new Error('User cancelled request');
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      // handle this however suites the flow of your app
      throw new Error('Something went wrong obtaining the users access token');
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // login with credential
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
  } catch (e) {
    console.error(e);
  }
}

class SignupPlatform extends BaseEurolandAppActivity {
  constructor(props) {
    super(props);
    this.state = {
      activityName: 'SignupPlatformActivity',
      activityData: []
    };
  }

  signupEmail() {
    // this.firebase.logEvent('signup', { method: 'email' });
   this.logEvent('signup', { method: 'email' });
    this.navigate('SignupInformation');
  }
  signupGoogle() {
    this.logEvent('signup', { method: 'google' });
    this.navigate('SignupOpenAuthentication');
  }

  //TODO put or try third parameter ("success")
  signupFacebook() {
    this.logEvent('signup', { method: 'facebook' });
    this.navigate('SignupOpenAuthentication');
  }
  signupLinkedin() {
    this.logEvent('signup', { method: 'linkedin' });
    // this.setUserProperty('result' , {result: 'success'});
    this.navigate('SignupOpenAuthentication');
  }
  
  render() {
    this.setCurrentScreen('SignupPlatform', 'SignupPlatformActivity');
    this.logEvent('onLoadSignupPlatform', { target: 'SignupPlatformActivity' });
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        {/* <Text style={styles.textOR}>OR</Text> */}
        <View style={styles.line}></View>
      </View>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Signup into</Text>
        <Text style={styles.title}>EURO APP</Text>

        <Divider style={styles.divider}></Divider>
        <FontAwesome.Button
          style={styles.facebookButton}
          name="email"
          onPress={this.signupEmail.bind(this)}
          backgroundColor={COLOR_EMAIL} >
         <Text style={styles.loginButtonTitle}>Login with Email address</Text>
        </FontAwesome.Button>


        <Divider style={styles.divider}></Divider>
        <FontAwesome.Button
          style={styles.facebookButton}
          name="google"
          onPress={this.signupGoogle.bind(this)}
          backgroundColor={COLOR_GOOGLE} >
          <Text style={styles.loginButtonTitle}>Login with Google</Text>
        </FontAwesome.Button>


        <Divider style={styles.divider}></Divider>
        <FontAwesome.Button
          style={styles.facebookButton}
          name="linkedin"
          onPress={this.signupLinkedin.bind(this)}
          backgroundColor={COLOR_LINKEDIN} >
          <Text style={styles.loginButtonTitle}>Login with LinkedIn</Text>
        </FontAwesome.Button>

        <Divider style={styles.divider}></Divider>
        <FontAwesome.Button
          style={styles.facebookButton}
          name="facebook"
          onPress={this.facebookLogin}
          backgroundColor={COLOR_FACEBOOK} >
          <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
        </FontAwesome.Button>
        {/* <Button mode="contained" color="green"
          onPress={this.signupLinkedin.bind(this)} style={styles.facebookButton}>
          LinkedIn </Button> */}


        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: COLOR_LIGHT,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  button: {
    paddingTop: 20,
    textAlign: 'center',
    margin: 5,
    height: 50,
  },
  title: {
    color: 'white',
    color: COLOR_TEXT,
    textAlign: 'center',
    width: 400,
    fontSize: 23,
  },
  headerText: {
    fontSize: 36,
    paddingTop: 15,
    fontWeight: 300,
    textAlign: 'center',
    color: '#111111',
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold',
  },
  facebookButton: {
    width: 300,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',

  },
  loginButtonTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  divider: {
    flexDirection: 'row',
    height: 20,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default SignupPlatform;

