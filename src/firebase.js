import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAGg8WxMNZzWqyTAFBQ-PbZzZKV6jFQdLc",
    authDomain: "pokemon-8ff68.firebaseapp.com",
    databaseURL: "https://pokemon-8ff68.firebaseio.com",
    projectId: "pokemon-8ff68",
    storageBucket: "pokemon-8ff68.appspot.com",
    messagingSenderId: "463739682657",
    appId: "1:463739682657:web:3c202c5022a9fd6f258f20",
    measurementId: "G-LK9HMLH5Z4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;