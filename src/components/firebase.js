import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyDDZNiqEvEJHEFitJmQqWQD0nPylmSA98I",
  authDomain: "react-project-2e531.firebaseapp.com",
  databaseURL: "https://react-project-2e531-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-project-2e531",
  storageBucket: "react-project-2e531.appspot.com",
  messagingSenderId: "151703977227",
  appId: "1:151703977227:web:798d632fe0a41b8fba360e",
  measurementId: "G-0V8156RF6F"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
