import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class SignupInformationActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'SignupInformationActivity',
      activityData: {}
    };
    }
    signupInformation(){
      this.logEvent('result', {signup_information: 'Success'});

      this.navigate('SignupProfession');
    }

  render() {
    this.logEvent('onLoadSignupInformation', {target: 'SignupInformationActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Information activity</Text>
        <Text style={styles.titleText}>EMAIL text</Text>
        <Text style={styles.titleText}>NAME text</Text>
        <Text style={styles.titleText}>LASTNAME text</Text>

          <Button mode="contained" color="green"
          onPress={this.signupInformation.bind(this)} style={styles.button}>
          Next </Button>

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
    textAlign: 'center',
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
export default SignupInformationActivity;

