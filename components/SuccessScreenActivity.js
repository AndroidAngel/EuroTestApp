import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class SucessScreenActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'SucessScreenActivity',
      activityData: {}
    };
    }
    signupSuccess(){
      this.logEvent('result', {result: 'Success'});
      this.navigate('SignupPlatform');
    }

  render() {
    this.logEvent('onLoadSucessScreen', {target: 'SucessScreenActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Success Screen Activity</Text>
        <Text style={styles.titleText}>YEY!</Text>
        <Text style={styles.titleText}>Registration Completed</Text>
      

          <Button mode="contained" color="green"
          onPress={this.signupSuccess.bind(this)} style={styles.button}>
          Go to dashboard </Button>

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
    margin: 20,
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
export default SucessScreenActivity;

