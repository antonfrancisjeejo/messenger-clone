import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQZrGhK9ODuFtmqzaxUeW88w_p3IZFaDU",
  authDomain: "messenger-clone-441d6.firebaseapp.com",
  databaseURL: "https://messenger-clone-441d6.firebaseio.com",
  projectId: "messenger-clone-441d6",
  storageBucket: "messenger-clone-441d6.appspot.com",
  messagingSenderId: "693550997879",
  appId: "1:693550997879:web:7148038b92f096a8ba4172",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
