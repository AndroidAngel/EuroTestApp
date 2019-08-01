import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { List, Divider, withTheme , Button} from 'react-native-paper';
import firebase, { Firebase } from 'react-native-firebase';
import BaseEurolandAppActivity  from './BaseEurolandAppActivity.js';

class DownloadReportsActivity extends BaseEurolandAppActivity  {
  
  constructor(props) {
    super(props);
    this.state = {
    activityName: 'DownloadReportsActivity',
    activityData: {}
  };
  }
  _onPressAnnualReport() {
    this.logEvent('category', { target: 'annual report' });
    this.navigate('AnnualReport');
  }
  _onPressSustainabilityReport() {
    this.logEvent('category', { target: 'sustainability report' });
    this.navigate('SustainabilityReport');
  }
  _onPressForceCrash(){
    this.logEvent('forcecrashbutton', {target: 'force_crash_button'});
    firebase.crashlytics().crash();
  
  }
  render() {
    // this.logEvent().setCurrentScreen('DownloadReports');
    this.logEvent('onDownloadReportsActivityOnLoad', { target: 'DownloadReportsActivity' });
    return (
      <View style={styles.container}>
        <Divider />
        <List.Section >
          <List.Accordion title="Categories">
            <List.Item title="Annual Report"
              onPress={this._onPressAnnualReport.bind(this)}
           />
            <List.Item title="Sustainabilty Report"
              onPress={this._onPressSustainabilityReport.bind(this)} />
          </List.Accordion>
        </List.Section>
        <Divider />

        <Button mode="contained" color="red"
          onPress={this. _onPressForceCrash.bind(this)} style={styles.button}>
          Force Crash
          
            </Button>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 5,
    height: 50,
    marginTop: 150,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: '#344953',
    justifyContent: 'center',

  },
  imageStyle: {
    margin: 4
  },
});
export default withTheme(DownloadReportsActivity);