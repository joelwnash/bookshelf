// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdrK-liztxmOVXHe4fOLWMQckDYZDcVpg",
  authDomain: "bookshelf-app-cf305.firebaseapp.com",
  projectId: "bookshelf-app-cf305",
  storageBucket: "bookshelf-app-cf305.appspot.com",
  messagingSenderId: "514109972317",
  appId: "1:514109972317:web:8071589ecfdb155442d2b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;