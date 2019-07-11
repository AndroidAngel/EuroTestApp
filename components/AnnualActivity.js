import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { List, Divider, withTheme, Card, Button } from 'react-native-paper';
import firebase, { Firebase } from 'react-native-firebase';

import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation } from 'react-native-popup-dialog';

class AnnualActivity extends React.Component {
  state = {
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
    closingDialogAnimation: false,
  };
  //  _showDialog = () => this.setState({ closingDialogAnimation: true })
  //  _hideDialog = () => this.setState({ closingDialogAnimation: false })

  _onPressAnnualReport() {
    firebase.analytics().logEvent('onPressGotoAnnualReport', { target: 'GotoAnnualReportButton' });
    this.props.navigation.navigate('AnnualReport');
  }
  _onPressSustainabilityReport() {
    firebase.analytics().logEvent('onPressGotoSustainabiltyReport', { target: 'GotoSustainabiltyReportButton' });
    this.props.navigation.navigate('SustainabilityReport');
  }
  _onpressNoThanksBtn() {
    firebase.analytics().logEvent('onPressNothanksBtn', { target: 'GoBacktoHomepage' });
    this.props.navigation.navigate("Home");
    this.setState({ defaultAnimationDialog: false });
  }
  _onPressSubscribeBtnClose() {
    firebase.analytics().logEvent('onPressSubscribeBtn', { target: 'GotoSubscibeBtn' })
    this.props.navigation.navigate("Home");
  }
  _onPressYestoSubscribe() {
    this.setState({ closingDialogAnimation: true });
    this.setState({ closingDialogAnimation: false });
  }
 
  render() {

    firebase.analytics().setCurrentScreen('ANNUALREPORT');
    firebase.analytics().logEvent('onAnnualdActivityLoaded', { target: 'AnnualActivity' });
    return (
      <View style={{ flex: 1 }}>
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
              <Button mode="contained"
                color="blue"
                title="Download report"
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
    margin: 4,
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
    margin: 5
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



export default withTheme(AnnualActivity);


