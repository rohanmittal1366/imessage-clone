// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'; 


const firebaseConfig = {
    apiKey: "AIzaSyBEOobOJH735PxAG7Eh_w2l6vtsuhA0VqY",
    authDomain: "imessage-clone-fcd46.firebaseapp.com",
    projectId: "imessage-clone-fcd46",
    storageBucket: "imessage-clone-fcd46.appspot.com",
    messagingSenderId: "597552039234",
    appId: "1:597552039234:web:36773dfd59aff02b7774db",
    measurementId: "G-PJ14YQNJL7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};

  export default db;
