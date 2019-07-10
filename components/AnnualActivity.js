import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Picker } from "react-native";
import { List, Divider, withTheme, Card, Button } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase, { Firebase } from 'react-native-firebase';

class AnnualActivity extends React.Component {
  static navigationOptions = {
    title: "Reports",
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
    firebase.analytics().logEvent('onPressGotoAnnualReport', { target: 'GotoAnnualReportButton' });
    this.props.navigation.navigate('AnnualReport');
  }
  _onPressSustainabilityReport() {
    firebase.analytics().logEvent('onPressGotoSustainabiltyReport', { target: 'GotoSustainabiltyReportButton' });
    this.props.navigation.navigate('SustainabilityReport');
  }

  _onPressDownloadReport(){
    firebase.analytics().logEvent('onPressDownloadReportButton', {target: 'GotoDownloadReportButton'});
    this.props.navigation.push("Home");
  }

  render() {

    firebase.analytics().setCurrentScreen('ANNUALREPORT');
    firebase.analytics().logEvent('onAnnualdActivityLoaded', { target: 'AnnualActivity' });
    return (
      <View style={styles.container}>
         <Divider /> 
        <List.Section >
          <List.Accordion title="Annual Report">
            <List.Item title="Sustainabilty Report"
             onPress={this._onPressSustainabilityReport.bind(this)} />
          </List.Accordion>
    </List.Section>
    <Divider />
          <Card style={styles.imageStyle}>
          <Card.Cover source={require('/Users/angie/EuroTestApp/assets/annualImg.png')} />
          <Card.Content>
          <Text style={styles.titleText}>Carlsberg Group Annual Report 2018</Text>
          <Text style={styles.headerText}>06/02/2019</Text>
          <Button 
        onPress={this._onPressDownloadReport.bind(this)} style={styles.button}>
          Download report
        </Button>


          </Card.Content>
          </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 16 ,
    color: '#111111',
    margin: 5,
  },
 titleText: {
    fontSize: 16,
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  textStyle:{
    margin: 4,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
  pickerStyle:{
    height:150,
    width: "80%",
    color: '#344953',
    justifyContent: 'center',

  },
  imageStyle: {
    margin: 5
  }, 
});



export default withTheme(AnnualActivity);


