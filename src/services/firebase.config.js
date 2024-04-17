// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_KEY)
const firebaseConfig = {
  apiKey: "AIzaSyBtlpq4I1CABXPDBq6GGsr3O2QK_y_P8Hk",
  authDomain: "react-dragon-news-auth-ffcea.firebaseapp.com",
  projectId: "react-dragon-news-auth-ffcea",
  storageBucket: "react-dragon-news-auth-ffcea.appspot.com",
  messagingSenderId: "801233726765",
  appId: "1:801233726765:web:3540627f825ffb38d337a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;