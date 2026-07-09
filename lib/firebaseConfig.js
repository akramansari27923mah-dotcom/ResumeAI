import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNA23K35SIfEqGCXQIP_2-GFcIbLRKpDU",
  authDomain: "resumeanalyser-1a422.firebaseapp.com",
  projectId: "resumeanalyser-1a422",
  storageBucket: "resumeanalyser-1a422.firebasestorage.app",
  messagingSenderId: "1054536922659",
  appId: "1:1054536922659:web:b117d1bc9259d1b558a396",
  measurementId: "G-B4GZK01083",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
