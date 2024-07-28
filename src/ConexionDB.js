import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAf9SGlZ4QS3-L8_oAbtM7tj9q93_Ejq5w",
  authDomain: "prueba-11774.firebaseapp.com",
  databaseURL: "https://prueba-11774-default-rtdb.firebaseio.com",
  projectId: "prueba-11774",
  storageBucket: "prueba-11774.appspot.com",
  messagingSenderId: "902647353218",
  appId: "1:902647353218:web:2fd7e6c7799d2313cb499b",
  measurementId: "G-Z1B7E5CGFN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const rtdb = getDatabase(app);

export default { auth, db, rtdb, app };
