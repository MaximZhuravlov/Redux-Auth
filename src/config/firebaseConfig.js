import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCkeK9ROg3L5TNSO0Zs9WRVPDxrzTpTbAY",
  authDomain: "auth-test-81caf.firebaseapp.com",
  projectId: "auth-test-81caf",
  storageBucket: "auth-test-81caf.appspot.com",
  messagingSenderId: "357513430203",
  appId: "1:357513430203:web:8c143949db7ea21d5fd59e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;