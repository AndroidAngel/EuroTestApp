import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class ResultPageErrorActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
      activityName: 'ResultPageErrorActivity',
      activityData: {}
    };
    }
    signupError(){
      this.logEvent('signup_oauth_error_page', {result: 'error page'});
      this.navigate('SignupPlatform');
    }

  render() {
    this.logEvent('onLoadResultPageErrorActivity', {target: 'ResultPageErrorActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Error Screen Activity</Text>
        <Text style={styles.titleText}>This is an</Text>
        <Text style={styles.titleText}>Error</Text>
        <Text style={styles.titleText}>from social platform</Text>
      

          <Button mode="contained" color="green"
          onPress={this.signupError.bind(this)} style={styles.button}>
          Sign up again </Button>

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
export default ResultPageErrorActivity;

