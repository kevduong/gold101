import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyATGu4BMKVKG80sG-qvZVfpmMEVnHLMedI",
  authDomain: "gold101-e97d2.firebaseapp.com",
  databaseURL: "https://gold101-e97d2.firebaseio.com",
  projectId: "gold101-e97d2",
  storageBucket: "gold101-e97d2.appspot.com",
  messagingSenderId: "228655621354",
  appId: "1:228655621354:web:3e64d4619c79b587dd2393",
  measurementId: "G-C460W5N8FB"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;