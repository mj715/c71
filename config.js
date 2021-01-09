import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBGxwrTqKbqe0Y4-dtul4xykzX_WpisAi0",
  authDomain: "wily-app-edf2d.firebaseapp.com",
  databaseURL: "https://wily-app-edf2d.firebaseio.com",
  projectId: "wily-app-edf2d",
  storageBucket: "wily-app-edf2d.appspot.com",
  messagingSenderId: "75554415579",
  appId: "1:75554415579:web:513bcfa765130a609f3dfe"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
