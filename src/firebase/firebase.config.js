// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB46FghjIey2_o0DApgwAvHV0sCoMVdwUg",
  authDomain: "react-dragon-4fe60.firebaseapp.com",
  projectId: "react-dragon-4fe60",
  storageBucket: "react-dragon-4fe60.appspot.com",
  messagingSenderId: "390827105887",
  appId: "1:390827105887:web:5eb4ab5bffb464f95545ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)