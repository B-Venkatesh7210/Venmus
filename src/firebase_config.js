import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4EBzyyI2B4SZ3FHVCxvI2gV5vcoyEiZ0",
  authDomain: "venmus.firebaseapp.com",
  projectId: "venmus",
  storageBucket: "venmus.appspot.com",
  messagingSenderId: "121642249289",
  appId: "1:121642249289:web:21d38b924f6b8c3d796398",
  measurementId: "G-R3EF585YT6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
