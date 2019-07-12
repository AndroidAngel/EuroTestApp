import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Picker } from "react-native";
import { List, Divider, withTheme } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase, { Firebase } from 'react-native-firebase';

class DownloadReportsActivity extends React.Component {
  static navigationOptions = {
    title: "Reports & Downloads",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: '#111111',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    expanded: true
  };

  _onPressAnnualReport() {
    firebase.analytics().logEvent('category', { selected: 'annual report'});
    this.props.navigation.navigate('AnnualReport');
  }
  _onPressSustainabilityReport() {
    firebase.analytics().logEvent('category', { selected: 'sustainability report'});
    this.props.navigation.navigate('SustainabilityReport');
  }

  render() {
    firebase.analytics().setCurrentScreen('DownloadReports');
    firebase.analytics().logEvent('onDownloadReportsActivityLoaded', { target: 'DownloadReportsActivity' });
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
