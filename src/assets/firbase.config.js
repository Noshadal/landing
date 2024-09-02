import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeDz7gMW0zeuAZR0iLtsY4GT4ltgoF25M",
  authDomain: "myproject-b6f0a.firebaseapp.com",
  projectId: "myproject-b6f0a",
  storageBucket: "myproject-b6f0a.appspot.com",
  messagingSenderId: "287286632797",
  appId: "1:287286632797:web:0c80c782bba773f00088b4",
  measurementId: "G-VBT34X2MH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
