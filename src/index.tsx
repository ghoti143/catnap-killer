import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyBhw_2csvGj02p5ArVZbQVWV7TFpomRlAs",
  authDomain: "catnap-killer.firebaseapp.com",
  databaseURL: "https://catnap-killer.firebaseio.com",
  projectId: "catnap-killer",
  storageBucket: "catnap-killer.appspot.com",
  messagingSenderId: "217085527150",
  appId: "1:217085527150:web:ebfc61f69e3199d910527f",
  measurementId: "G-VJ82RZFH4Z"
};

firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log('foo');
      ReactDOM.render(<App />, document.getElementById('root'));
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
    }
  },
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
