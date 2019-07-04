import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase';

class HomeActivity extends React.Component {
  static navigationOptions = {
    title: 'Euro App',
    headerStyle: {
      backgroundColor: '#034615',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _onPressSecondActivityBtn() {
    firebase.analytics().logEvent('onPressGotoSecondActivityButton', {target: 'GotoSecondActivity'});
    this.props.navigation.navigate('Company');
  }

  render() {

    firebase.analytics().setCurrentScreen('HOME');

    firebase.analytics().logEvent('onHomeActivityLoaded', {target: 'HomeActivity'});

    return (
      <View style={styles.container}>
     <Text style={styles.titleText}>EURO APP</Text>
        <Text style={styles.headerText}>Just another React Native App</Text>
        <Button
          title="Get Started "
          onPress={this._onPressSecondActivityBtn.bind(this)}
          color="#034615"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    fontSize: 36,
    textAlign: 'center',
    margin: 5,
    color: '#111111',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 300,
    textAlign: 'center',
    color: '#111111',
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold'
  },
  buttonStyle: {
    marginLeft: 5,

    marginRight: 5,
    backgroundColor: '#034615',
    color: '#111111',
    marginTop: 83,
    marginBottom: 10
  }
});
export default HomeActivity;
