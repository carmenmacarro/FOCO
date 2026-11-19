// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLalN54h1SM92p14ZXUg3-ROwGQdg4bwA",
  authDomain: "foco-821b2.firebaseapp.com",
  projectId: "foco-821b2",
  storageBucket: "foco-821b2.firebasestorage.app",
  messagingSenderId: "658416738345",
  appId: "1:658416738345:web:99f3cb8cbd65a2d9a37c38",
  measurementId: "G-HHSTNWXS4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
