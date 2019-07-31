import React, {Component} from "react";
import firebase from 'react-native-firebase';

class BaseEurolandAppActivity extends React.Component {

  // trace for how long it takes for component to go from will mount to did mount
  // this can also be used to measure how long it will take to render
  willMountToDidMountTrace;


  state = {
    activityName: 'test', 
    activityData: {}
  };

  constructor(props) {
    super(props);
    this.endpoint = 'BaseAppActivity';

    firebase.perf().setPerformanceCollectionEnabled(true);

    this.getRequestWithTrace('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699').then(json => {
      console.log(json);
    });
  }

  // async await
  async componentDidMount() {


    this.initializeCrashlytics(this.state.activityName, this.state.activityData);
    firebase.analytics().logEvent(`componentDidMount${this.state.activityName}`);

    // create custom trace when component mounts
    await this.customTrace('component_mount_trace',
      [
        // {name: 'user_id', value: firebase.auth().currentUser.uid},
        {name: 'endpoint', value: this.endpoint},
        {name: 'activityName', value: this.state.activityName},
        {name: 'activityData', value: JSON.stringify(this.state.activityData)}
      ],
      [
        {name: 'request', value: 0}
      ]
    );

    this.updateAndStopWillMountToDidMountTrace();

  }

  async componentWillMount() {

    this.initializeWillMountToDidMountTrace();

    await this.customTrace('component_will_mount_trace',
      [
        // {name: 'user_id', value: firebase.auth().currentUser.uid},
        {name: 'endpoint', value: this.endpoint},
        {name: 'activityName', value: this.state.activityName},
        {name: 'activityData', value: JSON.stringify(this.state.activityData)}
      ],
      [
        {name: 'request', value: 2}
      ]
    );
  }

  async initializeWillMountToDidMountTrace() {

    this.willMountToDidMountTrace = firebase.perf().newTrace('initializeWillMountToDidMountTrace');
    await this.willMountToDidMountTrace.start();
    await this.willMountToDidMountTrace.putAttribute('endpoint', this.endpoint);
    await this.willMountToDidMountTrace.putAttribute('will_mount_time', new Date().toDateString());
    this.willMountToDidMountTrace.incrementMetric('initializeWillMountToDidMountTrace', 1);
  }

  async updateAndStopWillMountToDidMountTrace() {

    await this.willMountToDidMountTrace.putAttribute('did_mount_time', new Date().toDateString());

    await this.willMountToDidMountTrace.stop();
  }

  async shouldUpdateComponent() {
    await this.customTrace('component_should_update_trace',
      [
        // {name: 'user_id', value: firebase.auth().currentUser.uid},
        {name: 'endpoint', value: this.endpoint},
        {name: 'activityName', value: this.state.activityName},
        {name: 'activityData', value: JSON.stringify(this.state.activityData)}
      ],
      [
        {name: 'request', value: 3}
      ]
    );
  }

  async componentWillUpdate() {
    await this.customTrace('component_will_update_trace',
      [
        // {name: 'user_id', value: firebase.auth().currentUser.uid},
        {name: 'endpoint', value: this.endpoint},
        {name: 'activityName', value: this.state.activityName},
        {name: 'activityData', value: JSON.stringify(this.state.activityData)}
      ]
    );
  }

  async componentDidUpdate() {
    await this.customTrace('component_did_update_trace',
      [
        // {name: 'user_id', value: firebase.auth().currentUser.uid},
        {name: 'endpoint', value: this.endpoint},
        {name: 'activityName', value: this.state.activityName},
        {name: 'activityData', value: JSON.stringify(this.state.activityData)}
      ],
      [
        {name: 'request', value: 4}
      ]
    );
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
    firebase.crashlytics().setUserIdentifier(userId);

  }

  logEvent(eventName, target) {
    firebase.analytics().logEvent(eventName, target);
  }

  navigate(navigationTarget) {
    this.props.navigation.navigate(navigationTarget);
  }

  // Trigger custom performance trace with support for array of attributes and array of metrics name-value
  async customTrace(traceName, customAttributes = null, customMetrics = null) {

    // Define & start a custom trace
    const trace = await firebase.perf().newTrace(traceName);

    await trace.start();

    // Define trace meta details: attributes
    if (customAttributes && Array.isArray(customAttributes)) {
      await customAttributes.forEach(attr => {
        if (attr) {
          console.log(attr);
          trace.putAttribute(attr.name, attr.value);
        }
      });

    }

    // Define trace meta details: metrics
    if (customMetrics && Array.isArray(customMetrics)) {
      await customMetrics.forEach(metric => {
        if (metric) {
          trace.putMetric(metric.name, metric.value);
        }
      });

    }

    await trace.incrementMetric(traceName, 1);

    // Stop the trace
    await trace.stop();
  }

  async getRequestWithTrace(url, customAttributes = null) {

    // Define the network metric
    const metric = await firebase.perf().newHttpMetric(url, 'GET');

    // Define trace meta details: attributes
    if (customAttributes && Array.isArray(customAttributes)) {
      await customAttributes.forEach(attr => {
        if (attr) {
          metric.putAttribute(attr.name, attr.value);
        }
      });
    }

    // Perform a HTTP request and provide response information
    const response = await fetch(url);
    await metric.setHttpResponseCode(response.status);

    // can set more metrics values here
    await  metric.setResponseContentType(response.headers.get('Content-Type'));


    await metric.stop();

    return response.json();


  }
}
export default BaseEurolandAppActivity;
