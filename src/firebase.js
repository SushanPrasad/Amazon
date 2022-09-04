// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHgRONCBGeY7BpkGi-laQrnK6xmuaa-nA",
    authDomain: "sushan-home.firebaseapp.com",
    projectId: "sushan-home",
    storageBucket: "sushan-home.appspot.com",
    messagingSenderId: "400335635915",
    appId: "1:400335635915:web:8d5364b53de91cf42e624e",
    measurementId: "G-NBG7H4CBFK"
  };
  





const firebaseApp = firebase.initializeApp (firebaseConfig);
console.log('firebase;;;;',firebaseApp)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;

