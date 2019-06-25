import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import firebase from 'react-native-firebase';

class HomeActivity extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _onPressProfilesButton() {
    firebase.analytics().logEvent('onPressGotoProfileButton', {target: 'GotoProfileButton'});
    this.props.navigation.navigate('Profile');
  }

  render() {

    firebase.analytics().setCurrentScreen('HOME');

    firebase.analytics().logEvent('onHomeActivityLoaded', {target: 'HomeActivity'});

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Home Activity</Text>
        <Button
          title="Go to Profile Activity"
          onPress={this._onPressProfilesButton.bind(this)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
});
export default HomeActivity;
