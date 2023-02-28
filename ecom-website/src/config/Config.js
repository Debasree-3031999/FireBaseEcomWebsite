// import * as firebase from "firebase";
// // import firebase from 'firebase/app'
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbEHhmYbBjt2bTuqbR1WIYkEKoWbf3EoU",
    authDomain: "e-commerce-74d5b.firebaseapp.com",
    databaseURL: "https://e-commerce-74d5b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "e-commerce-74d5b",
    storageBucket: "e-commerce-74d5b.appspot.com",
    messagingSenderId: "319766066289",
    appId: "1:319766066289:web:9c51036f779be27fdcd7d0",
    measurementId: "G-M806Q5G77G"
};  

firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db=firebase.firestore();
const storage=firebase.storage();

export{auth,db,storage};