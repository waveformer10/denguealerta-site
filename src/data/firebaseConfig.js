// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGGu2rRccQDesI-IeoQwLyUBhLltfmrNo",
  authDomain: "dengue-alerta.firebaseapp.com",
  databaseURL: "https://dengue-alerta-default-rtdb.firebaseio.com/",
  projectId: "dengue-alerta",
  storageBucket: "dengue-alerta.appspot.com",
  messagingSenderId: "410553864318",
  appId: "1:410553864318:web:a6b36e4cf4ce145f31882f",
  measurementId: "G-FEHB98JNC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
