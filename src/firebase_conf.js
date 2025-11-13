// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKnPBUetM8IYEs6IMWr4pbKBQI_rbx_xE",
  authDomain: "test-e63b3.firebaseapp.com",
  projectId: "test-e63b3",
  storageBucket: "test-e63b3.firebasestorage.app",
  messagingSenderId: "198654552669",
  appId: "1:198654552669:web:689e886d00b163ec43bbb4",
  measurementId: "G-Z5YWRM1C57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
