import React from 'react';
import AppNavigator from './config/router';
import * as firebase from "firebase";
import config from './config/config.js';

/* Set up Firebase */
const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body) {
  if (body === '') {
    originalSend.call(this);
  } else {
    originalSend.call(this, body);
  }
};
firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: "ossoapp.firebaseapp.com",
  databaseURL: "https://ossoapp.firebaseio.com",
  projectId: "ossoapp",
  storageBucket: "ossoapp.appspot.com",
  messagingSenderId: "27467156369"
});

export default class App extends React.Component {
  render () {
    return (
        <AppNavigator />
    )
  }
}
