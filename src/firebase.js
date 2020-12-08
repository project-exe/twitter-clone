import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAU-FcxbufvOjXHKr6UuisFm0N50Yf8gmmw",
  authDomain: "twitter-clone-d100e.firebaseapp.com",
  databaseURL: "https://twitter-clone-d100e.firebaseio.com",
  projectId: "twitter-clone-d100e",
  storageBucket: "twitter-clone-d100e.appspot.com",
  messagingSenderId: "950665666259",
  appId: "1:950665666259:web:fa037d459dd97eb13c7e26",
  measurementId: "G-HGFP2LDXP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
