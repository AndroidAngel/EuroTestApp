import React, { Component } from "react";
import firebase from 'react-native-firebase';

class BaseEuroAppActivity extends React.Component {
  
state = {
    activityName: "", 
    activityData: {}
};

constructor(props){
    super(props);
}

// async await
componentDidMount() {
    this.initializeCrashlytics(this.state.activityName, tstate.activityData);
    firebase.analytics().logEvent('componentDidMount-' + this.state.activityName);
}

initializeCrashlytics(activityName, activityData) {
    // initialize crashlytics here

}

logEvent(eventName, target){
    firebase.analytics().logEvent(eventName, target);

}
navigate(navigationTarget){
    this.props.navigation.navigate(navigationTarget);
}







}