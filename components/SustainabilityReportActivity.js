import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { List, Divider, Card, Button, withTheme } from 'react-native-paper';
import firebase, { Firebase } from 'react-native-firebase';
import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';

import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';

class SustainabilityReportActivity extends BaseEurolandAppActivity {

  constructor(props) {
    super(props);
    this.state = {
      defaultAnimationDialog: false,
      closingDialogAnimation: false,
      activityName: 'SustainabilityReportActivity',
      activityData: {}
    };
  }
  //Go to Annual report
  _onPressAnnualReport() {
    this.logEvent('onPressGotoAnnualReport', { target: 'GotoAnnualReportBtn' });
    this.navigate('AnnualReport');
    // this.setState({activityData: {someProperty: "somevalue", somereoperty2: "somevalue2"}}); sample!!
  }
  //Go to Sustainability report
  _onPressSustainabilityReport() {
    this.logEvent('onPressGotoSustainabiltyReport', { target: 'GotoSustainabiltyReportBtn' });
    this.navigate('SustainabilityReport');
  }
  //Not Notified when new things are shared
  _onPressNotNotified() {
    this.logEvent('onPressNotNotified', { target: 'not_notified' });
    this.setState({ defaultAnimationDialog: false });
    this.navigate('HomePage');
  }
  //Yes Notified when new things are shared
  _onPressYesNotified() {
    this.logEvent('onPressYesNotified', { target: 'yes_notified' });
    this.setState({ closingDialogAnimation: true });
    this.setState({ defaultAnimationDialog: false });
  



  }
  //Already Notified 
  _onPressCloseDialog(){
    this.logEvent('onPressCloseDialog', { target: 'already_notified' });
    this.setState({ closingDialogAnimation: false});
    this.navigate('HomePage');

  }
  render() {
    // this.logEvent().setCurrentScreen('SustainabilityReport', '');
    this.logEvent('onSustainabiltyActivityLoaded', { target: 'SustainabilityReportActivity' });
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Divider />
          <List.Section >
            <List.Accordion title="Sustainabilty Report">
              <List.Item title="Annual Report"
                onPress={this._onPressAnnualReport.bind(this)} />
            </List.Accordion>
          </List.Section>
          <Divider />
          <Card style={styles.imageStyle}>
            <Card.Cover source={require('../assets/sustainabiltyImg.png')} />
            <Card.Content>
              <Text style={styles.titleText}>Economic Contribution to Society 2016</Text>
              <Text style={styles.headerText}>29/03/2017</Text>
              <Button color="green"
                onPress={() => {
                  this.setState({
                    defaultAnimationDialog: true,
                  });
                }} style={styles.downloadBtn}>
                Download Report
              </Button>
            </Card.Content>
          </Card>
        </View>
      {/* First Dialog */}
        <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Would you like to be notified when new things are shared?"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left" />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="YES"
                color="green"
                bordered
                onPress={this._onPressYesNotified.bind(this)}
                key="buttonYes" />
              <DialogButton
                text="No thanks"
                bordered
                onPress={this._onPressNotNotified.bind(this)}
                key="buttoNoThanks" />
            </DialogFooter>
          } >
        </Dialog>
              {/* Closing Dialog */}
        <Dialog
          onDismiss={() => {
            this.setState({ closingDialogAnimation: false });
          }}
          width={0.9}
          visible={this.state.closingDialogAnimation}
          rounded
          actionsBordered

          dialogTitle={
            <DialogTitle
              title="Thanks for subscribing"
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="left" />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="Close"
                color="green"
                bordered
                onPress={this._onPressCloseDialog.bind(this)}
                key="button-3" />
            </DialogFooter>
          } >
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}
          >
            <Text>You’re now subscribed to notifications. You can unsubscribe at any time.</Text>
          </DialogContent> 
        </Dialog>

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
    height: 12
  },
  downloadBtn:{
    margin: 5,
    fontSize: 14
  },
  headerText: {
    fontSize: 16,
    color: '#111111',
    margin: 5,
  },
  titleText: {
    fontSize: 16,
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
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
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff'
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: '#000',
  }
});
export default withTheme(SustainabilityReportActivity);