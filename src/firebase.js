import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTatFPQve7j5Sa4AxHOUqZ2NOSJkjJtG8",
  authDomain: "slackclone-bc054.firebaseapp.com",
  projectId: "slackclone-bc054",
  storageBucket: "slackclone-bc054.appspot.com",
  messagingSenderId: "635607871851",
  appId: "1:635607871851:web:6f87b8191c9bc288fa1c2e",
  measurementId: "G-Q22KD3WQK4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
