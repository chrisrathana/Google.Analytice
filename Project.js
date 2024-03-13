// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA49nis0VWifZkBCVH-RUWl9nK3d7dcAag",
  authDomain: "website-e6c82.firebaseapp.com",
  projectId: "website-e6c82",
  storageBucket: "website-e6c82.appspot.com",
  messagingSenderId: "222643976934",
  appId: "1:222643976934:web:3f8dc1de75b47a43935927",
  measurementId: "G-WDKSGV3B5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
