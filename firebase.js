import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDLbNarkjraPUpR-nE5U0Mduc0uDCIjkKw",
    authDomain: "tweeter-3b688.firebaseapp.com",
    projectId: "tweeter-3b688",
    storageBucket: "tweeter-3b688.appspot.com",
    messagingSenderId: "431282532143",
    appId: "1:431282532143:web:7fdf23ed5967bede3efbda"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()

  export default db