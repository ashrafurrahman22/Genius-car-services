// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM-1QL1khNkXa-DH4JJ9hlq3FM6WpSoHg",
  authDomain: "genius-car-service-743b3.firebaseapp.com",
  projectId: "genius-car-service-743b3",
  storageBucket: "genius-car-service-743b3.appspot.com",
  messagingSenderId: "549881004497",
  appId: "1:549881004497:web:dcb207ee1b7bed0c27a0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;