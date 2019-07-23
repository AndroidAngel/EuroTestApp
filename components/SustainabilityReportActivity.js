import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { List, Divider, Card, Button, withTheme } from 'react-native-paper';
import firebase, { Firebase } from 'react-native-firebase';
import BaseEurolandAppActivity  from './BaseEurolandAppActivity.js';

import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';

class SustainabilityReportActivity extends BaseEurolandAppActivity  {

  constructor(props) {
    super(props);
      this.state = {
    defaultAnimationDialog: false,
    closingDialogAnimation: false,
    activityName: 'SustainabilityReportActivity',
    activityData: {}
  };
  }
  _onPressAnnualReport() {
    this.logEvent('onPressGotoAnnualReport', { target: 'GotoAnnualReportBtn' });
    this.navigate('AnnualReport');
  }
  _onpressNoThanksBtn() {
    this.logEvent('onPressNothanksBtn', { target: 'GoBacktoHomepage' });
    this.navigate('HomePage');
    this.setState({ defaultAnimationDialog: false });
  }
  _onPressSubscribeBtnClose() {
    this.logEvent('onPressSubscribeButtonClose', { target: 'GotoSubscibeButton' });
    this.navigate('HomePage');
  }
  _onPressYestoSubscribe() {
    this.logEvent('onPressYesSubscribe', { target: 'GotoYesSubscribe' });
    this.setState({ closingDialogAnimation: false });

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
              <Button
                mode="contained"
                title="Download report" color="red"
                onPress={() => {
                  this.setState({
                    defaultAnimationDialog: true,
                  });
                }} style={styles.button}>
              </Button>

            </Card.Content>
          </Card>
        </View>
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
                onPress={this._onPressYestoSubscribe.bind(this)}
                key="buttonYes" />
              <DialogButton
                text="No thanks"
                bordered
                onPress={this._onpressNoThanksBtn.bind(this)}
                key="buttoNoThanks" />
            </DialogFooter>
          } >
        </Dialog>

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
                onPress={this._onPressSubscribeBtnClose.bind(this)}
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
