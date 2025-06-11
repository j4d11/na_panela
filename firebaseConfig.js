import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDvl_s-3L3sFuiw5fuaLzkRctlyURz1B_A",
  authDomain: "na-panela-app.firebaseapp.com",
  projectId: "na-panela-app",
  storageBucket: "na-panela-app.firebasestorage.app",
  messagingSenderId: "484689572987",
  appId: "1:484689572987:web:7affa2857e4bc716125ede",
  measurementId: "G-4F5PYP2QYC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };