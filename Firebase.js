// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOv3-qtrxDfvIL2ZUseHEpzhemPV9jM1E",
  authDomain: "different-binder.firebaseapp.com",
  projectId: "different-binder",
  storageBucket: "different-binder.appspot.com",
  messagingSenderId: "534760316360",
  appId: "1:534760316360:web:4423c9ca10e06c518e34fd",
  measurementId: "G-LN2461DRQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);