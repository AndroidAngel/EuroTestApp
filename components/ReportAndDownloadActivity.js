import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Picker } from "react-native";
import firebase, { Firebase } from 'react-native-firebase';

class ReportAndDownloadActivity extends React.Component {
  static navigationOptions = {
    title: "Reports & Downloads",
    headerStyle: {
      backgroundColor: "#034615"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    choosenReport: 0
  };

  _onPressAnnualReport() {
    firebase.analytics().logEvent('onPressGotoAnnualReport', { target: 'GotoAnnualReportButton' });
    this.props.navigation.navigate('Report');
  }
  _onPressSustainabilityReport() {
    firebase.analytics().logEvent('onPressGotoSustainabiltyReport', { target: 'GotoSustainabiltyReportButton' });
    this.props.navigation.navigate('Report');
  }

  render() {

    firebase.analytics().setCurrentScreen('REPORTANDDONWLOADS');
    firebase.analytics().logEvent('onReportAndDonwaloadActivityLoaded', { target: 'ReportAndDownloadActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Reports and Downlads</Text>
        <Button
          title="Annual Report"
          onPress={this._onPressAnnualReport.bind(this)}
        />
        <Button
          title="Sustainabilty Report" 
          onPress={this._onPressSustainabilityReport.bind(this)}
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
  },
  textStyle:{
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerStyle:{
    height:150,
    width: "80%",
    color: '#344953',
    justifyContent: 'center',

  }
});
export default ReportAndDownloadActivity;