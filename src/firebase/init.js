import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3vj51waAORCQmVXXdm-oC3UJceAc8LGI",
    authDomain: "udemy-ninja-smoothies-2611e.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-2611e.firebaseio.com",
    projectId: "udemy-ninja-smoothies-2611e",
    storageBucket: "udemy-ninja-smoothies-2611e.appspot.com",
    messagingSenderId: "601972802242",
    appId: "1:601972802242:web:9b93777f7b8f6c5c48315b"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore()