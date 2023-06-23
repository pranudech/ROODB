import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig  = {
    apiKey: "AIzaSyDqzADdR69ZZuW8RNcw8gTufBWtszvPp-Q",
    authDomain: "pin-it-first.firebaseapp.com",
    databaseURL: "https://pin-it-first-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pin-it-first",
    storageBucket: "pin-it-first.appspot.com",
    messagingSenderId: "252842587444",
    appId: "1:252842587444:web:2dac74fe28911adf086161",
    measurementId: "G-3KKPD1PN6C"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);