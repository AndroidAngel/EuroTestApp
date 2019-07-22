import React, { Component } from "react";
import { ScrollView, Platform, StyleSheet, Text, View } from "react-native";
import { Paragraph, Button, Card, withTheme } from 'react-native-paper';
import firebase from 'react-native-firebase';
import BaseEurolandAppActivity  from './BaseEurolandAppActivity.js';

class PressReleaseActivity extends BaseEurolandAppActivity  {

  constructor(props) {
    super(props);
     this.state = {
    activityName: 'PressReleaseActivity',
    activityData: {}
  };
  }
  _onPressCancelButton() {
    this.logEvent('onPressGotoCancelButton', { target: 'GotoCancelButton' });
    this.navigate('HomePage');
  }
  _onPressNextButton() {
    this.logEvent('onPressNextButton', { target: 'GotoNextButton' });
    // this.logEvent('step_press_release', null);
    this.navigate('DownloadReports');
  }
  render() {
    this.logEvent().setCurrentScreen('PressRelease');
    this.logEvent('onPressReleaseActivityLoaded', { target: 'PressReleaseActivity' });
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: "#e6e3e3" }]}
        contentContainerStyle={styles.content} >
        <Card style={styles.imageStyle}>
          <Card.Cover source={require('/Users/angie/EuroTestApp/assets/carlsbergdraught.png')} />
          <Card.Content>
            <Text style={styles.titleText}>Carlsberg delivers strong results;</Text>
            <Text style={styles.headerText}>Financial Statement as at 31 December 2018.</Text>

            <Text style={styles.subHeader}>HIGHLIGHTS</Text>
            <Card.Cover source={{ require: '/Users/angie/EuroTestApp/assets/Oval.png' }} style={{ width: 10, height: 10 }} />
            <Text style={styles.subText}>Organic net revenue growth of 6.5%;</Text>
            <Text style={styles.subText}>Reported net revenue growth of 3.0% to DKK 62,503m.</Text>
            <Text style={styles.subText}>Price/mix improvement of 2%.</Text>
            <Text style={styles.subText}>Total organic volume growth of 4.8%; reported growth of 5.3%.</Text>
            <Text style={styles.subText}>Tuborg volume growth of 10%, Carlsberg +5%,</Text>
            <Text style={styles.subText}>Grimbergen +14% and 1664 Blanc +49%.</Text>
            <Text style={styles.subText}>Craft and speciality volume growth of 26%; alcohol-free brew volumes in Western Europe +33%.</Text>
            <Text style={styles.subText}>Funding the Journey as a specific programme successfully concluded with total benefits of around DKK 3bn.</Text>
            <Text style={styles.subText}>Gross margin improvement of 20bp and operating margin improvement of 30bp to 14.9%.</Text>
            <Text style={styles.subHeader}>2019 EARNINGS EXPECTATIONS</Text>
            <Text style={styles.subText}>Mid-single-digit percentage organic growth in operating profit.</Text>
            <Text style={styles.subText}> A DKK translation impact on operating profit of around zero, based on the spot rates as at 5 February.</Text>

            <Paragraph style={styles.subText}>CEO Cees ’t Hart says: “We delivered a strong set of results for 2018.
              In line with our ambitions for SAIL’22, we accelerated top-line growth, improved margins,
              delivered a strong cash flow and reduced debt even further. At the same time, we invested
              significant resources in our brands and activities, and we continue to target top-line growth
              and profit improvement in the coming years.
          </Paragraph>
            <Paragraph style={styles.subText}>
              “We’re pleased that, on the back of the strong results, the Supervisory Board will recommend
                a 13% increase in dividend to DKK 18 per share and initiate a share buy-back programme of
                DKK 4.5bn, leading to cash returns to shareholders for the year of DKK 7.2bn.”
            </Paragraph>
          </Card.Content>
        </Card>
        <Button mode="contained" color="green"
          onPress={this._onPressNextButton.bind(this)} style={styles.buttonNext}>
          Next
          </Button>
        <Button color="green"
          onPress={this._onPressCancelButton.bind(this)} style={styles.button}>
          Cancel
        </Button>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  button: {
    margin: 5,
    height: 50,
    color: '#111111'
  },
  headerText: {
    fontSize: 18,
    margin: 5,
    color: '#111111'
  },
  subHeader: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
  },
  titleText: {
    fontSize: 26,
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 16
  },
  imageStyle: {
    margin: 4
  },
  buttonNext: {
    margin: 5,
    height: 50,
    color: '#034615'
  }
});
export default withTheme(PressReleaseActivity);
