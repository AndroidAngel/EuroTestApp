import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Button} from "react-native";
import firebase from 'react-native-firebase';

class SecondActivity extends React.Component {
  static navigationOptions = {
    title: "Company",
    headerStyle: {
      backgroundColor: "#034615"
    },
    headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
  
  };

   _onPressHomeButton() {
    firebase.analytics().logEvent('onPressGotoHomeButton', {target: 'GotoHomeButton'});
    this.props.navigation.navigate('Home');
  }

  _onPressBackButton() {
    firebase.analytics().logEvent('onPressBackButton', {target: 'GotoBackButton'});
    this.props.navigation.goBack();
  }

  _onPressNewCompanyButton() {
    firebase.analytics().logEvent('onPressNewCompanyButton', {target: 'NewCompanyButton'});
    this.props.navigation.push("Company");
  }
  _onPressReportAndDownloadButton(){
    firebase.analytics().logEvent('onPressGotoReportAndDownloadButton', {target: 'GotoReportAndDownloadButton'});
    this.props.navigation.push("ReportAndDownloads");
  }

  render() {

    firebase.analytics().setCurrentScreen('COMPANY');

    firebase.analytics().logEvent('onSecondActivityLoaded', {target: 'SecondActivity'});

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Second Activity</Text>
        <Button
          title="Go to Home"
          onPress={this._onPressHomeButton.bind(this)}
          color="#034615"
        />
        <Text style={styles.headerText}>Create a New Company Screen </Text>
        <Button
          title="Go to new Profile"
          onPress={this._onPressNewCompanyButton.bind(this)}
          color="#034615"
        />
        <Text style={styles.headerText}> Go Back </Text>
        <Button
          title="Go Back"
          onPress={this._onPressBackButton.bind(this)}
          color="#034615"
        />
         <Text style={styles.headerText}>Go to third Screen</Text>
        <Button
          title="Go to Reports and Downloads"
          onPress={this._onPressReportAndDownloadButton.bind(this)}
          color="#034615"
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
export default SecondActivity;
