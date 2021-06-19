import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCPevhOJuntGIaUlXT0KTiuflstuuKS_-8",
    authDomain: "story-hub-58f4f.firebaseapp.com",
    databaseURL: "https://story-hub-58f4f-default-rtdb.firebaseio.com",
    projectId: "story-hub-58f4f",
    storageBucket: "story-hub-58f4f.appspot.com",
    messagingSenderId: "278767795203",
    appId: "1:278767795203:web:136fb1a8b979936ab5e236"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()