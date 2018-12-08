import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyuFMUIX1iIf8O37824eoJ8IQaeFgwzAg",
  authDomain: "catch-of-the-day-60747.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-60747.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// this is a default export
export default base;

