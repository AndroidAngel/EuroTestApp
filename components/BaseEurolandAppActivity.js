import React, { Component } from "react";
import firebase from 'react-native-firebase';

class BaseEurolandAppActivity extends React.Component {

    state = {
        activityName: 'test',
        activityData: {}
    };
    constructor(props) {
        super(props);
        this.endpoint = 'SustainabilityReport'

    }
    // async await
    async componentDidMount() {
        this.initializeCrashlytics(this.state.activityName, this.state.activityData);
        firebase.analytics().logEvent(`componentDidMount${this.state.activityName}`);
       
        this.trace = firebase.perf().newTrace('cache_trace');
        await this.trace.start();
        await this.trace.putAttribute('user_id', firebase.auth().currentUser.uid);
        await this.trace.putAttribute('endpoint', this.endpoint);
        await this.trace.putMetric('request', 0);

    }
    async componentWillMount() {
        await this.trace.stop();
    }
    initializeCrashlytics(activityName, activityData) {
        firebase.crashlytics().log('this is a crash messsage test');
        firebase.crashlytics().enableCrashlyticsCollection();
    // initialize crashlytics here
    //enableCrashlyticsCollection() returns void;
    // crash() returns void;
    // log(message) returns void;
    // recordError(code, message) returns void;
    // setBoolValue(key, value) returns void;
    // setFloatValue(key, value) returns void;
    // setIntValue(key, value) returns void;
    // setStringValue(key, value) returns void;
    // setUserIdentifier(userId) returns void;
        

    }

    logEvent(eventName, target) {
        firebase.analytics().logEvent(eventName, target);

    }
    navigate(navigationTarget) {
        this.props.navigation.navigate(navigationTarget);
    }
}
export default BaseEurolandAppActivity;
