import React from 'react';
import AppNavigator from './config/router';
import * as firebase from "firebase";

/* Set up Firebase */
firebase.initializeApp({
  apiKey: "AIzaSyAegdk5PqDHtRNLAcqOxQSOktuHJcV1jrY",
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
