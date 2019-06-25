import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Button} from "react-native";
import firebase from 'react-native-firebase';

class ProfileActivity extends React.Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: "#73C6B6"
    }
  };

   _onPressHomeButton() {
    firebase.analytics().logEvent('onPressGotoHomeButton', {target: 'GotoHomeButton'});
    this.props.navigation.navigate('Home');
  }

  _onPressBackButton() {
    firebase.analytics().logEvent('onPressBackButton', {target: 'GotoBackButton'});
    this.props.navigation.goBack();
  }

  _onPressNewProfileButton() {
    firebase.analytics().logEvent('onPressNewProfileButton', {target: 'NewProfileButton'});
    this.props.navigation.push("Profile");
  }

  render() {

    firebase.analytics().setCurrentScreen('PROFILE');

    firebase.analytics().logEvent('onProfileActivityLoaded', {target: 'ProfileActivity'});

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile Activity</Text>
        <Button
          title="Go to Home"
          onPress={this._onPressHomeButton.bind(this)}
        />
        <Text style={styles.headerText}>Create a New Profile Screen </Text>
        <Button
          title="Go to new Profile"
          onPress={this._onPressNewProfileButton.bind(this)}
        />
        <Text style={styles.headerText}> Go Back </Text>
        <Button
          title="Go Back"
          onPress={this._onPressBackButton.bind(this)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
export default ProfileActivity;
