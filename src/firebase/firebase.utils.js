import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvhAKOk6hQH4HgLUfI7xnReFz1ZbaPdS0",
  authDomain: "fc-clone-af7eb.firebaseapp.com",
  projectId: "fc-clone-af7eb",
  storageBucket: "fc-clone-af7eb.appspot.com",
  messagingSenderId: "554135189818",
  appId: "1:554135189818:web:a34e0901b8aeeb8fe77803",
  measurementId: "G-T71WMQ3GS0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
