// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu7WsP8n9tlNF1buNdcrAW99bxLW04wnQ",
  authDomain: "phishing-demo-af3ba.firebaseapp.com",
  projectId: "phishing-demo-af3ba",
  storageBucket: "phishing-demo-af3ba.appspot.com",
  messagingSenderId: "972836595103",
  appId: "1:972836595103:web:d7ca024df3056b0c38c9aa",
  measurementId: "G-M21EQGDB0Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const actionCodeSettings = {
  url: "http://127.0.0.1:5173/",
  handleCodeInApp: true,
};

