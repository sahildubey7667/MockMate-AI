
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-fa1cc.firebaseapp.com",
  projectId: "interviewiq-fa1cc",
  storageBucket: "interviewiq-fa1cc.firebasestorage.app",
  messagingSenderId: "312595604068",
  appId: "1:312595604068:web:ebf6a0a87943c83bcef571"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}