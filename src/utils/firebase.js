// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw2_sFjk--vktXA9pOHt9x5IvFucpwl44",
  authDomain: "ai-netflix-gpt.firebaseapp.com",
  projectId: "ai-netflix-gpt",
  storageBucket: "ai-netflix-gpt.appspot.com",
  messagingSenderId: "973087566123",
  appId: "1:973087566123:web:b45b6b617195eb093dfd6e",
  measurementId: "G-XVJPQYQT9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();