// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRk1Q-xnVa-JEsZqV7giKIc3pfKvFW2yU",
  authDomain: "fundraising-platform-fdf0e.firebaseapp.com",
  projectId: "fundraising-platform-fdf0e",
  storageBucket: "fundraising-platform-fdf0e.appspot.com",
  messagingSenderId: "460150721606",
  appId: "1:460150721606:web:c143be36db05775d4c8e47",
  measurementId: "G-KKC0QTPR0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);