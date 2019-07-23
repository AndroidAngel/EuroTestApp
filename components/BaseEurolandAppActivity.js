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
    async componentWillMount(){
        await this.trace.stop();
    }

    initializeCrashlytics(activityName, activityData) {
        firebase.crashlytics().log('crash messsage test');

        // initialize crashlytics here

    }

    async forceCrash() {
        firebase.crashlytics().crash();
        await firebase.crashlytics().setAttributes({ something: "something" });
        firebase.crashlytics().log("A woopsie is incoming :(");
        firebase.crashlytics().recordError(new Error("Error Log"));

    }


    logEvent(eventName, target) {
        firebase.analytics().logEvent(eventName, target);

    }
    navigate(navigationTarget) {
        this.props.navigation.navigate(navigationTarget);
    }
}
export default BaseEurolandAppActivity;
