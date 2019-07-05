import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Button, Item, Picker} from "react-native";
import firebase from 'react-native-firebase';

class ReportActivity extends React.Component {
  static navigationOptions = {
    title: "Reports & Downloads",
    headerStyle: {
      backgroundColor: "#034615"
    },
    headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
     
  };
  state = {
    choosenReport: 0
  }
  render(){
    firebase.analytics().setCurrentScreen('REPORT');
    firebase.analytics().logEvent('onReportActivityLoaded', {target: 'ReportActivity'});

    return(
      <View style={styles.container}>
        <Text style={styles.headerText}>Report Activity</Text>
        <Picker style={styles.pickerStyle}
        selectedValue={this.state.whatReport}
        onValueChange={(itemValue, itemPosition) => 
        this.setState({whatReport: itemValue, choosenReport: itemPosition})}>
          <Picker.Item label="Annual Report" value="annualreport" />
          <Picker.Item label="Sustainability Report" value="sustainabiltyreport" />
        </Picker>
          <Text style={styles.textStyle}> {"Index = "+ this.state.choosenReport}
          </Text>

          
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
    pickerStyle:{
      height:150,
      width: "80%",  
      color: '#344953',  
      justifyContent: 'center'

    },
    textStyle:{
      margin: 24,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
export default ReportActivity;