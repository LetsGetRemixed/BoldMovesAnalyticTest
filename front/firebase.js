// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzr9wyli-2OZ8083vNsXBE5z_3hD72ov4",
  authDomain: "boldmovesanalytictest.firebaseapp.com",
  projectId: "boldmovesanalytictest",
  storageBucket: "boldmovesanalytictest.firebasestorage.app",
  messagingSenderId: "321371694336",
  appId: "1:321371694336:web:9ec8b1d2ac915950a87fe5",
  measurementId: "G-4KQXG39J90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };