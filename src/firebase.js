import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBN8kllTF0FehJvlUvx-KGGdORF93GpltU",
  authDomain: "react-firebase-todoo-app.firebaseapp.com",
  databaseURL: "https://react-firebase-todoo-app.firebaseio.com",
  projectId: "react-firebase-todoo-app",
  storageBucket: "react-firebase-todoo-app.appspot.com",
  messagingSenderId: "927254014655",
  appId: "1:927254014655:web:20e160151fe4e5a8dc340a",
  measurementId: "G-2J8QEHH590"
})

const db = firebaseApp.firestore();

export default db