import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD_Ac6TDxlC9IMkVTJVWYdmJcTP9u8DiZU",
    authDomain: "library-system-439f4.firebaseapp.com",
    projectId: "library-system-439f4",
    storageBucket: "library-system-439f4.appspot.com",
    messagingSenderId: "45887194704",
    appId: "1:45887194704:web:be1c6c882bffdc10ef3355"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db , auth };