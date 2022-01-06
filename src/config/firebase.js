import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1Vqfy93is6YTGsAshUgBmPWjpXJkcpU",

  authDomain: "tesaplikasi-dfa9d.firebaseapp.com",

  projectId: "tesaplikasi-dfa9d",

  storageBucket: "tesaplikasi-dfa9d.appspot.com",

  messagingSenderId: "379808765141",

  appId: "1:379808765141:web:c43b0c439852a4c9ebbe5c"

  };
  // Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();