import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Dialog, { DialogButton, DialogContent, DialogFooter, DialogTitle } from 'react-native-popup-dialog';
import { Button } from 'react-native-paper';

import BaseEurolandAppActivity from './BaseEurolandAppActivity.js';


class SignupProfessionActivity extends BaseEurolandAppActivity {
    constructor(props) {
      super(props);
      this.state = {
        defaultAnimationDialog: false,
        closingDialogAnimation: false,
      activityName: 'SignupProfessionActivity',
      activityData: []
    };
    }
   
      signupProfessionSuccess(){
        this.logEvent('signup_profession_done', {result: 'Success'});
        this.setState({ defaultAnimationDialog: false });
 
      }

      signupProfessionSkip(){
        this.logEvent('signup_profession_skip', {result: 'Skipped'});
        this.setState({ defaultAnimationDialog: false });
     
      }
      signupQuitProcess(){
        this.logEvent('signup_quit_profession' , {quit: 'signup_profession'});
        this.navigate('Dashboard');
      }

      signupSuccess(){
        this.logEvent('signup_registration_success', {result: 'Success'});
        this.setState({ defaultAnimationDialog: false });
        this.navigate('Dashboard');
      }
    
  render() {
     this.setCurrentScreen('SignupProfession', 'SignupProfessionActivity');
    this.logEvent('onLoadSignupProfession', {target: 'SignupProfessionActivity' });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tell us more about yourself.</Text>
        <Text style={styles.titleText}>Note that we will not share this </Text>
        <Text style={styles.titleText}>information to the other users.</Text>
        <Text style={styles.infoText}>Company (optional)</Text>
        <Text style={styles.infoText}>Profession (optional)</Text>
        
          <Button mode="contained" color="blue"
            onPress={() => {this.setState({defaultAnimationDialog: true,});}} style={styles.button}>
          Done</Button>
          
          
          <Button mode="contained" color="red"
           onPress={() => {this.setState({defaultAnimationDialog: true,});}} style={styles.button}>
          Skip for now</Button>


          <Button mode="contained" color="red"
          onPress={this.signupQuitProcess.bind(this)} style={styles.button}>
           Quit </Button> 

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
              title="Congats"
              title="We've created your profile. You can now explore more of MyIRApp features."
              style={{
                backgroundColor: '#F7F7F8',
              }}
              hasTitleBar={false}
              align="center" />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="Go to Dashboard"
                color="green"
                bordered
                onPress={this.signupSuccess.bind(this)}
                key="buttonsucess" />
            </DialogFooter>} >
        </Dialog>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16
  },
  button: {
    paddingTop: 15,
    textAlign: 'center',
    margin: 5,
    height: 50,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
  },
  infoText:{
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',

  },
  emailText:{
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  orText:{
    fontSize: 12,
    textAlign: 'center',
    color: '#111111',
  },
  headerText: {
    fontSize: 30,
    paddingTop: 15,
    fontWeight: 300,
    textAlign: 'center',
    color: '#111111',
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold'
  }
});
export default SignupProfessionActivity;

