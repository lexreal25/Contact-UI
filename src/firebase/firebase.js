import * as firebase from 'firebase/app'
import 'firebase/auth'


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC9HihVeLxFYMYwYMESayILURW9kjnED8Q",
    authDomain: "contactapp-a330a.firebaseapp.com",
    databaseUrl: "https://contactapp-a330a.firebaseio.com",
    projectId: "contactapp-a330a",
    storageBucket: "contactapp-a330a.appspot.com",
    messagingSenderId: "29784942713",
    appId: "1:29784942713:web:a767736d66e41455308ca8"
  };
  // Initialize Firebase
  firebase.default.initializeApp(firebaseConfig);

  export default firebase