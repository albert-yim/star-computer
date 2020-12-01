
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYfW--wB2MJRWSriXdgt-uWNFprXbC37A",
    authDomain: "start-computer-db.firebaseapp.com",
    databaseURL: "https://start-computer-db.firebaseio.com",
    projectId: "start-computer-db",
    storageBucket: "start-computer-db.appspot.com",
    messagingSenderId: "1017425893588",
    appId: "1:1017425893588:web:c8e5c78f27ee35d15d4341",
    measurementId: "G-B6845BHN25"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

// add google sigin-up 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;