import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore'; //inport sepecifiic firestore which we need


const firebaseConfig = {
  apiKey: "AIzaSyC2YG3AaUbzUQWwTrd8Zvl3ROGyuIhTueA",
  authDomain: "cart-web-app-8bbe2.firebaseapp.com",
  projectId: "cart-web-app-8bbe2",
  storageBucket: "cart-web-app-8bbe2.appspot.com",
  messagingSenderId: "116196790097",
  appId: "1:116196790097:web:7eac01db1124170c6f8d70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

