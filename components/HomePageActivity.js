import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'react-native-firebase';

class HomePageActivity extends React.Component {
  static navigationOptions = {
    title: 'Euro App',
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: '#111111',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  _onPressPressReleaseBtn() {
    firebase.analytics().logEvent('onPressGotoPressReleaseBtnn', { target: 'GotoPressRelease', button_title: 'get started', target_screen: 'press release page'});
    firebase.analytics().logEvent('step_home');
    this.props.navigation.navigate('PressRelease');
  }
  render() {

    firebase.analytics().setCurrentScreen('HomePage');
    firebase.analytics().logEvent('onHomePageActivityLoaded', { target: 'HomePageActivity' });

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>EURO APP</Text>
        <Text style={styles.headerText}>Just another React Native App</Text>
        <Button mode="contained" color="green"
          onPress={this._onPressPressReleaseBtn.bind(this)} style={styles.button}>
          Get Started
            </Button>
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
    height: 50,
    marginTop: 150,
    color: 'blue'
  },

  titleText: {
    fontSize: 36,
    paddingTop: 247,
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
export default HomePageActivity;

