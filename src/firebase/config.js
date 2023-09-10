import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import  'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrN3zefqRiJxKVmtjxpKH8wICakc1k8rU",
    authDomain: "olx-clone-ff86e.firebaseapp.com",
    projectId: "olx-clone-ff86e",
    storageBucket: "olx-clone-ff86e.appspot.com",
    messagingSenderId: "1022196324734",
    appId: "1:1022196324734:web:156b783860ef121f913b2f",
    measurementId: "G-V7L31GKX3F"
  };


 export default firebase.initializeApp(firebaseConfig)
