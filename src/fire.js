import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDCRLdsBtasj7QiMNrX33VtfVgiX_Tu6ZM",
  authDomain: "react-fire-sample.firebaseapp.com",
  databaseURL: "https://react-fire-sample.firebaseio.com",
  projectId: "react-fire-sample",
  storageBucket: "react-fire-sample.appspot.com",
  messagingSenderId: "935113375249"
};
var fire = firebase.initializeApp(config);
export default fire;