import React, { Component } from "react";
import firebase from 'react-native-firebase';

class BaseEurolandAppActivity extends React.Component {

state = {
    activityName: '', 
    activityData: {}
};
constructor(props){
    super(props);
}

// async await
componentDidMount() {
    this.initializeCrashlytics(this.state.activityName, this.state.activityData);
    firebase.analytics().logEvent(`componentDidMount${this.state.activityName}`);
    firebase.crashlytics();

}

initializeCrashlytics(activityName, activityData) {
    firebase.crashlytics().log('crash messsage test')
    // initialize crashlytics here

}

logEvent(eventName, target){
    firebase.analytics().logEvent(eventName, target);

}
navigate(navigationTarget){
    this.props.navigation.navigate(navigationTarget);
}
}
export default BaseEurolandAppActivity;