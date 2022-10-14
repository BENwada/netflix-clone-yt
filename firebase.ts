// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9So5vI-jAA3KNWuWMZmZD-Jqu2mMHqYg",
  authDomain: "netflix-clone-yt-b1a83.firebaseapp.com",
  projectId: "netflix-clone-yt-b1a83",
  storageBucket: "netflix-clone-yt-b1a83.appspot.com",
  messagingSenderId: "791265362128",
  appId: "1:791265362128:web:bc8ce70a40832be81eded5",
  measurementId: "G-0GVXEHD9BX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
